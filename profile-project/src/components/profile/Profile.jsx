import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import style from "./profile.module.css";

function themeSelector(theme) {
  if (theme === "male") return style.linkBtnMale;
  if (theme === "female") return style.linkBtnFemale;
  return style.linkBtn;
}

export function Profile({
  avatar,
  name,
  bio,
  phone,
  email,
  gitHubUrl,
  linkedinUrl,
  instagramUrl,
  theme,
}) {
  return (
    <div className={style.container}>
      <img src={avatar} alt={name} className={style.avatar} />
      <h2 className={style.name}>{name}</h2>
      <div className={style.info}>{bio}</div>
      <div className={style.info}>{phone}</div>
      <div className={style.info}>{email}</div>
      <div className={style.links}>
        <a
          href={gitHubUrl}
          target="_blank"
          rel="noreferer"
          className={themeSelector(theme)}
        >
          <FaGithub className={style.icon} />
          GitHub
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noreferer"
          className={themeSelector(theme)}
        >
          <FaLinkedin className={style.icon} />
          LinkedIn
        </a>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noreferer"
          className={themeSelector(theme)}
        >
          <FaInstagram className={style.icon} />
          Instagram
        </a>
      </div>
    </div>
  );
}
