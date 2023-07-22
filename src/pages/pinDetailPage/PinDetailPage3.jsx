import React from "react";

export default function PinDetailPage3() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ display: "flex", width: "400px" }}>
        <div style={{ flex: 1, background: "beige" }}>1</div>
        <div style={{ flex: 1, background: "yellow" }}>
          <div style={{ position: "sticky", top: "0" }}>위</div>
          <div style={{ height: "1000px", overflow: "scroll" }}>중간</div>
          <div style={{ position: "sticky", bottom: "0" }}>밑</div>
        </div>
      </div>
    </div>
  );
}
