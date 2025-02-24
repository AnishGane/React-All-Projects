import React, { useState } from "react";
import "./style.css";
import QRCode from "react-qr-code";

const QRGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const handleGenerateQR = () => {
    setQrCode(input);
    setInput("");
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter text"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQR}
        >
          Generate QR
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="white" />
      </div>
    </div>
  );
};

export default QRGenerator;
