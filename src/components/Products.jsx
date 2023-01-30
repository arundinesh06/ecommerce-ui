import React from "react";
import { Container, Title } from "./ProductsStyles";
import { popularProducts } from "../data";
import Product from "./Product";

const Products = () => {
  return (
    <>
      <Title>Featured Products</Title>
      <Container>
        {popularProducts.map((item) => {
          return <Product item={item} key={item.id} />;
        })}
      </Container>
    </>
  );
};

export default Products;
