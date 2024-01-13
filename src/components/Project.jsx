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
      <h2>My project</h2>
      <section
        className="project"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {nameData.map((project) => (
          <Card key={project.id} sx={{ maxWidth: 345, margin: 5 }}>
            {" "}
            <CardMedia
              component="img"
              alt="project"
              height="140"
              image={project.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <a href={project.code}>Code</a>
              </Button>
              {project.online ? (
                <Button size="small">
                  <a href={project.site}>Website</a>
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
