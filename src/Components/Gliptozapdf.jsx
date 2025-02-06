import React from "react";
import pdf from '../../public/assets/Gliptoza_Pen_How_To_Use_(1).pdf'

const PdfViewer2 = () => {
    
  return (
    <div style={{ margin: 0, padding: 0, height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <embed
        src='../../public/assets/Gliptoza_Pen_How_To_Use_(1).pdf'
        style={{ width: "100%", height: "100vh", border: "none", position: 'absolute' }}
        title="PDF Viewer"
      ></embed>
    </div>
  );
};

export default PdfViewer2;
