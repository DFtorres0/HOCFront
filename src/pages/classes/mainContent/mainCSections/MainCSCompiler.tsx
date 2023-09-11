import { useState } from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import files from "../../../../../files";

const MainCSCompiler = ({isVisible}:{isVisible: string}) => {
  const [code, setCode] = useState(files["index.js"].file.contents);

  return (
    <div
      style={{
        display: isVisible=="Compilador"?"flex":"none",
        gridTemplateColumns: "1fr 1fr",
        gap: "1rem",
        height: "auto",
        width: "100%",
        marginBottom: "2vh",
        textAlign: "left"
      }}
    >
      <LiveProvider code={code}>
        <div>
          <LiveEditor onChange={(newCode) => setCode(newCode)} />
        </div>
        <div style={{ color: "aliceblue" }}>
          <LiveError />
        </div>
        <div style={{ color: "aliceblue" }}>
          <LivePreview />
        </div>
      </LiveProvider>
    </div>
  );
};

export default MainCSCompiler;
