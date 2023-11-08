import React from "react";
import Avatar from "@mui/joy/Avatar";
import moi from "../assets/moi.jpg";

const About = () => {
  return (
    <section className="about">
      <Avatar
        src={moi}
        alt="moi"
        sx={{
          "--Avatar-size": "20%",
        }}
      />
      <div className="about_me">
        <h2>About me</h2>
        <p>
          Hello ! I'm Mehdi and I'm actually in a web developper formation !
          <br />
          I'm Passionate about game, web development, music and I am looking for
          a company for a work-study or other employment contract. I started
          learning development on my own, thanks to our wonderful tool which is
          the internet, and I then followed web dev training at openclassrooms.
          So there you have it, see you very soon I hope!
        </p>
      </div>
    </section>
  );
};

export default About;
