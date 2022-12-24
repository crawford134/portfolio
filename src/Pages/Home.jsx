import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Animate } from "react-simple-animate";

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home-text">
        <h1>
          Hello, I'm Kiley. <br />
          IAM Security Developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1.3}
        start={{
          transform: "translateY(600px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="contactme">
          <div className="contactme-buttons">
            <button>Hire Me</button>
            <a>Download Resume</a>
          </div>

          <div className="contactme-social">
            <LinkedInIcon />
            <GitHubIcon />
          </div>
        </div>
      </Animate>
    </section>
  );
}
