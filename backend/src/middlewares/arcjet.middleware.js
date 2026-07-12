import aj from "../lib/arcjet.js";
import { isSpoofedBot } from "@arcjet/inspect";

export const arcjetProtection = async (req, res, next) => {
  try {
    const result = await aj.protect(req);

    if (result.isDenied()) {
      if (result.reason.isRateLimit()) {
        return res
          .status(429)
          .json({ error: "Too many requests. Please try again later." });
      } else if (result.reason.isBot()) {
        return res.status(403).json({ error: "Forbidden" });
      } else {
        return res.status(403).json({ error: "Access denied" });
      }
    }

    // check for spoofed bots
    if (result.results.some(isSpoofedBot)) {
      return res.status(403).json({ error: "Access denied" });
    }

    next();
  } catch (error) {
    console.error("Arcjet protection error:", error);
    next();
  }
};
