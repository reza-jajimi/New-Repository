import Link from "next/link";
import React from "react";

const PageNotFound = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <h3 className="text-3xl font-semibold">Page Not Found</h3>
      <Link href="/" className="mt-5">
        Go to home page
      </Link>
    </section>
  );
};

export default PageNotFound;
