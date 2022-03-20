import React from "react";
import { Form } from "../Components/Form";
import HeroImage from "../Assets/img/cover.png";
import { useMediaQuery, useTheme } from "@mui/material";

export const Hero = () => {
  const { breakpoints } = useTheme();
  const isTablet = useMediaQuery(breakpoints.up("md"));

  return <>{isTablet ? <HeroDeskttop /> : <HeroMobile />}</>;
};

const HeroMobile = () => {
  return (
    <section style={styles.Container}>
      <div style={styles.Content}>
        <h2 style={styles.Title}>
          La salud del <span style={styles.TitleHighlight}>hombre moderno</span>{" "}
          como debe ser: cabello, vida sexual y más
        </h2>
      </div>
      <div style={styles.ContentImg}>
        <img style={styles.Img} src={HeroImage} alt="Healz" />
      </div>
      <Form />
    </section>
  );
};

const HeroDeskttop = () => {
  return (
    <section style={stylesDesktop.Container}>
      <div style={stylesDesktop.Content}>
        <h2 style={stylesDesktop.Title}>
          La salud del <span style={styles.TitleHighlight}>hombre moderno</span>{" "}
          como debe ser: cabello, vida sexual y más
        </h2>
        <div style={stylesDesktop.ContentImg}>
          <img style={stylesDesktop.Img} src={HeroImage} alt="Healz" />
        </div>
      </div>
      <div style={stylesDesktop.ContentForm}>
        <Form />
      </div>
    </section>
  );
};

const styles = {
  Container: {
    boxSizing: "border-box",
    minWidth: "360px",
    maxHeight: "479px",
    backgroundColor: "#AED5DA",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "-1px",
    marginBottom: "350px",
  },
  Content: {
    witdh: "100%",
    margin: "32px 20px",
    display: "grid",
    placeContent: "center",
  },
  Title: {
    color: "#103B3C",
    fontSize: "17px",
    fontWeight: "bold",
    lineHeight: "19px",
    textAlign: "center",
  },
  TitleHighlight: {
    color: "#318A83",
  },
  ContentImg: {
    boxSizing: "border-box",
    witdh: "100%",
    margin: "0 20px",
    display: "grid",
    placeContent: "center",
    zIndex: "1",
  },
  Img: {
    width: "320px",
    height: "176px",
  },
};

const stylesDesktop = {
  Container: {
    boxSizing: "border-box",
    minWidth: "360px",
    maxHeight: "550px",
    backgroundColor: "#AED5DA",
    display: "flex",
    flexDirection: "row",
    gap: "30px",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "-1px",
    padding: "100px",
  },
  Content: {
    witdh: "50%",
    margin: "32px 20px",
    display: "grid",
    placeContent: "center",
  },
  ContentForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "70%",
  },
  Title: {
    color: "#103B3C",
    fontSize: "45px",
    width: "100%",
    margin: "30px auto",
    fontWeight: "bold",
    lineHeight: "60px",
    textAlign: "center",
    marginBottom: "30px",
  },
  TitleHighlight: {
    color: "#318A83",
  },
  ContentImg: {
    boxSizing: "border-box",
    witdh: "100%",
    margin: "0 20px",
    display: "grid",
    placeContent: "center",
    zIndex: "1",
  },
  Img: {
    width: "500px",
    height: "auto",
  },
};
