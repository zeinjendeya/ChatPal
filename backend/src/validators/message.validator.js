import { body, validationResult } from "express-validator";

export const sendMessageValidation = [
  body("text")
    .optional({ nullable: true })
    .isLength({ min: 1, max: 2000 })
    .withMessage("Text must be 1-2000 characters long"),

  body("image")
    .optional({ nullable: true })
    .isString()
    .withMessage("Image must be a string")
    .isLength({ max: 5000000 })
    .withMessage("Image payload is too large"),

  body().custom((value) => {
    const hasText = typeof value.text === "string" && value.text.trim().length > 0;
    const hasImage = typeof value.image === "string" && value.image.trim().length > 0;

    if (!hasText && !hasImage) {
      throw new Error("Either text or image is required");
    }

    return true;
  }),
];

export const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: "Validation failed",
      errors: errors.array().map((error) => ({
        field: error.path,
        message: error.msg,
      })),
    });
  }

  next();
};
