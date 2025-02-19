import React, { useEffect, useState } from "react";

const RandomColorGenerator = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const handleGenerateHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    setColor(hexColor);
  };

  const handleGenerateRGBColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setColor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    typeOfColor === "hex" ? handleGenerateHexColor() : handleGenerateRGBColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          <button onClick={() => setTypeOfColor("hex")}>
            Create HEX Color
          </button>
          <button onClick={() => setTypeOfColor("rgb")}>
            Create RGB Color
          </button>
          <button
            onClick={
              typeOfColor === "hex"
                ? handleGenerateHexColor
                : handleGenerateRGBColor
            }
          >
            Generate Random Color
          </button>
        </div>
        <div
          className="display"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "60px",
          }}
        >
          <h1>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h1>
          <h1>{color}</h1>
        </div>
      </div>
    </div>
  );
};

export default RandomColorGenerator;
