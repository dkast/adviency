"use client";
import Snowfall from "react-snowfall";

const SnowfallBackground = () => {
  return (
    <Snowfall
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
      }}
      color="#f3f4f5"
      speed={[0.5, 1.0]}
      snowflakeCount={100}
    />
  );
};

export default SnowfallBackground;
