import React from "react";
import { nameData } from "../helpers/project";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Filter from "./Filter";

const Project = () => {
  return (
    <div className="project">
      <h2 id="title-project">My project</h2>
      <Filter />
      <section
        id="project"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {nameData.map((project) => (
          <Card
            className="card"
            key={project.id}
            sx={{
              maxWidth: 345,
              margin: 5,
              background: "#5350a8",
              boxShadow:
                "  #bc8d00 10px -10px 0px -3px, #5350a8 10px -10px,#bc8d00 20px -20px 0px -3px, #5350a8 20px -20px, #bc8d00 30px -30px 0px -3px,#5350a8 30px -30px, #bc8d00 40px -40px 0px -3px,#5350a8 40px -40px;",
            }}
          >
            {" "}
            <CardMedia
              component="img"
              alt="project"
              height="140"
              image={project.image}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                color="#ffbf00"
                component="div"
              >
                {project.name}
              </Typography>
              <Typography variant="body2" color="#ffbf00">
                {project.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <a href={project.code} target="blank_">
                  Code
                </a>
              </Button>
              {project.online ? (
                <Button size="small">
                  <a href={project.site} target="blank_">
                    Website
                  </a>
                </Button>
              ) : (
                ""
              )}
            </CardActions>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Project;
