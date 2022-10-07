import React from "react";
import RepLogo from "../assets/repsol_logo.png";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";
import icon5 from "../assets/icon5.svg";
import icon6 from "../assets/icon6.svg";
import icon7 from "../assets/icon7.svg";

export default function Footer() {
  const iconCombo = [icon1, icon2, icon3, icon4, icon5, icon6];

  return (
    <div>
      <footer class="footer-bottom">
        <div className="footer-rows">
          <div className="footer-first-row">
            <img
              src={RepLogo}
              alt="Logo Repsol"
              width="130"
              className="d-inline-block align-top"
            />
            <a href="#">Inicio</a>
          </div>
          <div className="footer-separation">
            <hr />
          </div>
          <div className="footer-second-row">
            <div className="second-row-links">
              <a href="/">Aviso Legal</a> |&nbsp;
              <a href="/">Política de privacidad</a> |&nbsp;
              <a href="/">Política de cookies</a> |&nbsp;
              <a href="/">Accesibilidad</a> |&nbsp;
              <a href="/">Alerta por fraude</a>
            </div>
            <div className="second-row-icons">
              {iconCombo.map((icon, index) => {
                return <img src={icon} key={index} alt="icon" />;
              })}
            </div>
          </div>
          <div className="footer-third-row">
            <p>Repsol 2022 ©</p>
            <img src={icon7} alt="Logo Rep" />
          </div>
        </div>
      </footer>
    </div>
  );
}
