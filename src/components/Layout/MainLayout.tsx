import Head from "next/head";
import { FC, ReactNode } from "react";
import Navbar from "../Navbar/Navbar";

interface propsType {
  children?: ReactNode;
  title: string;
}

const MainLayout: FC<propsType> = ({ children, title }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Head>
        <title>{`${title} - shopping`}</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="container m-auto mt-5 px-4 pb-5">{children}</main>
      <footer className="h-52 bg-cyan-800">footer</footer>
    </div>
  );
};

export default MainLayout;
