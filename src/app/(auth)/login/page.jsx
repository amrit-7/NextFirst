"use client";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/");
  };
  return (
    <>
      <div>LoginPage</div>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default LoginPage;
