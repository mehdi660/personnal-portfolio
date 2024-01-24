import React from "react";
import Button from "@mui/material/Button";
import { nameData } from "../helpers/project";

const Filter = () => {
  const project = nameData;
  console.log(project.category);

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

  const filter = () => {
    category.filter((category) => category === project.category);
  };

  return (
    <div id="filter">
      <h3>Filter</h3>
      {category.map((category) => (
        <Button key={category} onClick={filter} size="small">
          {category}
        </Button>
      ))}
    </div>
  );
};

export default Filter;
