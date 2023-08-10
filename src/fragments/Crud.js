import React from "react";

export default function Crud() {
  const containerStyle = {
    backgroundColor: "Grey",
    color: "white",
    fontSize: "16px",
  };

  return (
    <div>
      <div className="main-header">Kumpyot </div>
      <div className="main-blogs">
        <div className="main-blog " style={containerStyle}>
          <ul>
            <h1>This is totally different content</h1>
          </ul>
        </div>
      </div>
    </div>
  );
}
