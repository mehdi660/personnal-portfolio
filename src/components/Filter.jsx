import React from "react";
import Button from "@mui/material/Button";

const Filter = () => {
  const category = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Testing",
    "SEO",
    "NextJS",
  ];
  return (
    <div id="filter">
      <h3>Filter</h3>
      {category.map((category) => (
        <Button size="small">{category}</Button>
      ))}
    </div>
  );
};

export default Filter;
