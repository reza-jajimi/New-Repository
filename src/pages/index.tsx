import MainLayout from "../components/Layout/MainLayout";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <MainLayout title="Home">
        <section>
          <h1 className="mt-10 text-center font-semibold text-4xl">
            Home page
          </h1>
        </section>
      </MainLayout>
    </>
  );
};

export default Home;
