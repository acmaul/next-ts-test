"use client";

import Link from "next/link";
import React from "react";

type Props = {};

const RegisterPage = (props: Props) => {
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
      <h1>Register</h1>
      <div>Hello Welcome</div>
      <Link
        style={{
          color: "red",
        }}
        href="/auth/login"
      >
        <div>Login</div>
      </Link>
    </div>
  );
};

export default RegisterPage;
