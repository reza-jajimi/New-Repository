import MainLayout from "@/src/components/Layout/MainLayout";
import { useRouter } from "next/router";
import data from "data/productData.json";
import React from "react";

const ProductInfo = () => {
  const { query } = useRouter();

  const productData = data.find((item) => item.slug === query.slug);

  if (!productData) {
    return (
      <section>
        <h1 className="mt-5 text-center">Loading ....</h1>
      </section>
    );
  }

  return (
    <MainLayout title={productData.title}>
      <section>
        <h3>{query.slug}</h3>
      </section>
    </MainLayout>
  );
};

export default ProductInfo;
