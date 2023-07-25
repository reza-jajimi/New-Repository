import MainCard from "@/src/components/Cards/MainCard";
import MainLayout from "@/src/components/Layout/MainLayout";
import Data from "data/productData.json";
import React from "react";

const Products: React.FC = () => {
  return (
    <>
      <MainLayout title="products">
        <section className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 lg:gap-7">
          {Data.map((item) => (
            <MainCard
              key={item.id}
              slug={item.slug}
              id={item.id}
              image={item.image}
              price={item.price}
              title={item.title}
            />
          ))}
        </section>
      </MainLayout>
    </>
  );
};

export default Products;
