"use client";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Email } from "@mui/icons-material";

function openGithub() {
  window.open("https://github.com/diogofrosario", "_blank");
}

function openLinkedin() {
  window.open("https://www.linkedin.com/in/diogo-rosario", "_blank");
}

const copyEmail = () => {
  navigator.clipboard.writeText("diogofiliperosario@gmail.com");
};

type Props = {
  type: "linkedin" | "github" | "email";
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
  } else if (props.type === "email") {
    return (
      <div className="cursor-pointer">
        <EmailIcon fontSize={props.size} onClick={copyEmail} />
      </div>
    );
  }
}
