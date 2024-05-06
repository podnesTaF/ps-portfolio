"use client";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const CVPage = () => {
  const [file, setFile] = useState<any>(null);

  useEffect(() => {
    const fetchFile = async () => {
      try {
        const response = await fetch("/documents/cv_oleksii_pidnebesnyi.pdf", {
          method: "GET",
          headers: {
            "Content-Type": "application/pdf",
          },
        });
        const blob = await response.blob();

        setFile(blob);
      } catch (error) {
        console.error("Failed to load PDF file.", error);
      }
    };

    fetchFile();
  }, []);

  return (
    <main className="relative max-w-7xl 3xl:max-w-8xl mx-auto px-5 w-full py-20 flex flex-col items-center justify-center">
      <div className="my-4">
        <Button
          variant={"contained"}
          className="!rounded-none !w-full !font-semibold !text-white"
          LinkComponent={"a"}
          href={
            "https://storage.googleapis.com/abe_cloud_storage/website%2FCV_Oleksii_Pidnebesnyi.pdf"
          }
          target="_blank"
          download={true}
        >
          Download my CV
        </Button>
      </div>
      <div>
        <Document
          file={file}
          onLoadSuccess={({ numPages }) => {
            console.log(numPages);
          }}
          className="d-flex justify-content-center"
        >
          <Page pageNumber={1} scale={1} />
        </Document>
      </div>
    </main>
  );
};

export default CVPage;
