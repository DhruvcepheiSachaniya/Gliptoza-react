// import React from "react";
// import pdf from '../../public/assets/Gliptoza_Pen_How_To_Use_(1).pdf'

// const PdfViewer2 = () => {
    
//   return (
//     <div style={{ margin: 0, padding: 0, height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column" }}>
//       <embed
//         src='../../public/assets/Gliptoza_Pen_How_To_Use_(1).pdf'
//         style={{ width: "100%", height: "100vh", border: "none", position: 'absolute' }}
//         title="PDF Viewer"
//       ></embed>
//     </div>
//   );
// };

// export default PdfViewer2;
const PdfViewer2 = () => {
  const pdfPath = "/assets/GLIPTOZA PATIENT SUPPORT.pdf"; // Correct way to reference a file in `public/`

  return (
    <>
      <div style={{ margin: 0, padding: 0, height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "center" ,backgroundColor: "#f0f0f0", padding: "10px", textAlign: "center", borderBottom: "1px solid #ccc" }}>
          <img height={'50px'} src="/assets/Gliptoza_Logo_a.png" alt="Logo A"/>

          {/* <img height={'60px'} src="/assets/Gliptoza_Logo_b.png" alt="Logo B" /> */}
        </div>

        {/* Embedded PDF Viewer */}
        <div style={{ flex: 1, position: "relative" }}>
          <embed
            src={pdfPath}
            style={{ width: "100%", height: "100%", border: "none" }}
            title="PDF Viewer"
            type="application/pdf"
          />

          {/* Fallback: Button to Open in a New Tab */}
          <div style={{ position: "absolute", top: 10, right: 10 }}>
            <button onClick={() => window.open(pdfPath, "_blank")} style={{ padding: "10px", fontSize: "16px" }}>
              Open PDF in New Tab
            </button>
          </div>
        </div>

        {/* Footer */}
        <div style={{ backgroundColor: "#f0f0f0", textAlign: "center", borderTop: "1px solid #ccc" }}>
        {/* Gliptoza | copyright 2025 @ Eris lifescience Ltd */}
          <p style={{color:'#2E2E33'}}>Gliptoza | copyright {(new Date().getFullYear())}© Eris lifescience Ltd</p>
        </div>
      </div>
    </>
  );
};

export default PdfViewer2;

