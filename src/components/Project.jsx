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
    <section className="project">
      {" "}
      {nameData.map((project) => {
        return (
          <Card sx={{ maxWidth: 345 }}>
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
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        );
      })}
    </section>
  );
};

export default Project;
