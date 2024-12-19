import React, { useEffect, useState } from "react";
import { Wrapper } from "../../shared/Wrapper";
import { FeatureHeader } from "../../shared/FeatureHeader";
import { ProductCard } from "../../shared/ProductCard";
import Skeleton from "react-loading-skeleton";

export const FeatureBrand = ({
  brandCat,
  brandCatList,
  selectedBrand,
  brandCatLoader,
  setSelectedBrand,
}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const showFeatureProduct = brandCat
      .filter((product) => selectedBrand === product.brand_name)
      .map((product) => product.products);
    setProducts(showFeatureProduct[0]);
  }, [selectedBrand, brandCat]);

  const bigScreenCss =
    "flex grid-cols-5 sm:grid md:grid lg:grid 2xl:grid gap-5 sm:gap-5 sm:grid sm:space-x-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5";
 

  return (
    <Wrapper>
      <FeatureHeader
        data={brandCatList}
        classes={"mt-14 mb-6"}
        title="Feature Brand"
        selectedItem={selectedBrand}
        setSelectedItem={setSelectedBrand}
        loader={brandCatLoader}
      />
      <div
        style={
          window.innerWidth < 640
            ? {
                overflow: "auto",
                scrollbarWidth: "none", // For Firefox
                msOverflowStyle: "none", // For Internet Explorer and Edge
              }
            : {}
        }
        className={bigScreenCss}
      >
        {brandCatLoader ? (
          Array.from({ length: 10 }).map((_, index) => (
            <Skeleton key={index} className="col-span-1 mt-1 min-h-[550px]" />
          ))
        ) : (
          <React.Fragment>
            {products && products.length > 0 ? (
              products.map((product, index) =>
                index < 10 ? (
                  <ProductCard
                    key={index}
                    classes="col-span-1 mt-1 "
                    product={product}
                  />
                ) : null
              )
            ) : (
              <p className="col-span-5 font-semibold text-center text-base">
                No Product Found
              </p>
            )}
          </React.Fragment>
        )}
      </div>
    </Wrapper>
  );
};
