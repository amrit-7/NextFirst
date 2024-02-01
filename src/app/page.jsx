"use client";

import Link from "next/link";

const Homepage = () => {
  return (
    <>
      <h1>Home</h1>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/docs">Documentation</Link>
      <Link href="/login" replace>
        Login
      </Link>
    </>
  );
};

export default Homepage;
