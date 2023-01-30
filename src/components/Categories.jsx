import React from "react";
import { Container, Title } from "./CategoriesStyles";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
const Categories = () => {
  return (
    <>
      <Title>Shop by Category</Title>
      <Container>
        {categories.map((item) => {
          return <CategoryItem item={item} key={item.id} />;
        })}
      </Container>
    </>
  );
};

export default Categories;
