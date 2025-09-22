import Link from "next/link";

function LoginPage() {
  return (
    <section id="login__page">
      <Link href="http://localhost:5000/api/v1/auth/google">
        Login with Google
      </Link>
    </section>
  );
}

export default LoginPage;
