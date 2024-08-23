"use client";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function openGithub() {
  window.open("https://github.com/diogofrosario", "_blank");
}

function openLinkedin() {
  window.open("https://www.linkedin.com/in/diogo-rosario", "_blank");
}

type Props = {
  type: "linkedin" | "github";
  size?: "small" | "medium" | "large" | "inherit";
  color?: "steel blue" | "white" | "black";
};

export default function SocialIcon(props: Props) {
  if (props.type === "linkedin") {
    return (
      <div className="cursor-pointer" style={{ color: props.color }}>
        <LinkedInIcon fontSize={props.size} onClick={openLinkedin} />
      </div>
    );
  } else if (props.type === "github") {
    return (
      <div className="cursor-pointer">
        <GitHubIcon fontSize={props.size} onClick={openGithub} />
      </div>
    );
  }
}
