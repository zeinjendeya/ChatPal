import { useAuthStore } from "../store/useAuthStore";

function LoginPage() {
  const { authUser } = useAuthStore();

  return (
    <div>
      login
      {authUser.name}
    </div>
  );
}

export default LoginPage;
