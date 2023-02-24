import Link from "next/link";
import React from "react";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Login</h1>
      <div>Hello Welcome again</div>
      <Link
        style={{
          color: "skyblue",
        }}
        href="/auth/signup"
      >
        <div>Register</div>
      </Link>
    </div>
  );
};

export default LoginPage;
