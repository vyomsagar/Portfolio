import Particle from "../Particle";
import { Button, Container } from "react-bootstrap";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import pdf from "./vyom_sagar.pdf";

export const Resume = () => {
  return (
    <div className="relative min-h-screen w-full bg-black text-white p-4 overflow-hidden">
      {/* Particle Background */}
      <Particle />

      {/* Foreground content */}
      <div className="relative z-10">
        <h1 className="text-2xl font-bold mb-4 underline">My Resume</h1>

        <div className="m-4">
          <a href={pdf} download="Vyom_Sagar_Resume.pdf">
            <Button variant="outline-light">Download</Button>
          </a>
        </div>

        <Container>
          <Worker
            workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
          >
            <div className="w-full h-full">
              <Viewer fileUrl={pdf} />
            </div>
          </Worker>
        </Container>
      </div>
    </div>
  );
};
