import React from "react";
import { nameData } from "../helpers/project";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Project = (project) => {
  return (
    <div className="project">
      <h2 id="title-project">My project</h2>

      <section
        id="project"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {nameData.map((proj) => (
          <Card
            className="card"
            key={proj.id}
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
              image={proj.image}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                color="#ffbf00"
                component="div"
              >
                {proj.name}
              </Typography>
              <Typography variant="body2" color="#ffbf00">
                {proj.description}
              </Typography>
              <Typography variant="body2" color="#ffbf00">
                <br />
                <em>{proj.category}</em>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <a href={proj.code} target="blank_">
                  Code
                </a>
              </Button>
              {proj.online ? (
                <Button size="small">
                  <a href={proj.site} target="blank_">
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
