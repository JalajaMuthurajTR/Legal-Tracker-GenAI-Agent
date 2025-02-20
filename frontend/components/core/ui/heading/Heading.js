import styles from "./Heading.module.css";

const Heading = ({ text, bgImage }) => {
  const headingStyle = {
    // backgroundImage: bgImage ? `url(${bgImage})` : "none",
    // color: bgImage ? "transparent" : "#000",
    backgroundImage: "none",
    color: "#000",
  };

  return <h1 className={styles.heading} style={headingStyle}>{text}</h1>;
};

export default Heading;
