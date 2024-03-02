import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { nameData } from "../helpers/project";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const Project = () => {
  const { t } = useTranslation();

  const projectRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".card").forEach((projectCard) => {
      gsap.fromTo(
        projectCard,
        {
          opacity: 0,
          x: 10,
        },
        {
          scrollTrigger: {
            trigger: projectCard,
            start: "top 60%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
          x: 0,
          opacity: 1,
        }
      );
    });
  }, [projectRef]);

  return (
    <div className="project">
      <h2 id="title-project">{t("myproject_title")}</h2>

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
              width: "100%",
              maxWidth: 500,
              margin: 5,
              background: "#5350a8",
              boxShadow:
                "  #bc8d00 10px -10px 0px -3px, #5350a8 10px -10px,#bc8d00 20px -20px 0px -3px, #5350a8 20px -20px, #bc8d00 30px -30px 0px -3px,#5350a8 30px -30px, #bc8d00 40px -40px 0px -3px,#5350a8 40px -40px;",
            }}
          >
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
              <Typography className="desc-proj" variant="body2" color="#ffbf00">
                {t(`myproject_${proj.id}`)}
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
                    Demo
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
