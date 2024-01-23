import React from "react";
import { nameData } from "../helpers/project";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Project = () => {
  return (
    <>
      <h2 id="title-project">My project</h2>
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
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
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
    </>
  );
};

export default Project;
