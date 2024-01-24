import React from "react";
import Avatar from "@mui/joy/Avatar";
import moi from "../assets/moi.jpg";

const About = () => {
  return (
    <section className="about">
      <h2>About me 🕶</h2>

      <div className="about_me">
        <Avatar
          src={moi}
          alt="moi"
          sx={{
            "--Avatar-size": "20%",
          }}
        />
        <p>
          Hello! My name is Mehdi, I'm 21 years old, and I was born on
          26/09/2002 in Belfort (France). Since September 2022, I've started
          coding, and since then, I haven't stopped. Coding, for me, is a form
          of relaxation that allows me to unwind and think about something else,
          much like sports or video games. I have a passion for creating new
          things, solving problems, and the satisfaction of seeing the results
          of my creations.
        </p>
      </div>
    </section>
  );
};

export default About;
