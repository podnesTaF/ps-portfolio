"use client";
import { Facebook, LinkedIn, Telegram } from "@mui/icons-material";
import { Button, IconButton, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const cvUrl =
  "https://storage.googleapis.com/abe_cloud_storage/website%2FCV_Oleksii_Pidnebesnyi.pdf";

const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
  cvUrl
)}`;
const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
  cvUrl
)}`;

const telegramShareUrl = `https://telegram.me/share/url?url=${encodeURIComponent(
  cvUrl
)}&text=${encodeURIComponent("Check out Oleksii CV!")}`;

const CVPage = () => {
  const [file, setFile] = useState<any>(null);

  const isSmall = useMediaQuery("(min-width: 640px)");
  const isMedium = useMediaQuery("(min-width: 768px)");
  const isLarge = useMediaQuery("(min-width: 1280px)");

  useEffect(() => {
    const fetchFile = async () => {
      try {
        const response = await fetch("/documents/CV_Oleksii_Pidnebesnyi.pdf", {
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
    <main className="relative overflow-auto max-w-5xl mx-auto pl-5 w-full py-20 flex flex-col items-center justify-center">
      <div className="my-4 flex justify-between w-full">
        <div className="flex items-end">
          <Button
            variant={"contained"}
            className="!rounded-none !font-semibold !text-white"
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
          <p className="text-white text-base md:text-lg font-semibold mb-2">
            Share my CV
          </p>
          <div className="flex gap-2 items-center">
            <IconButton
              color="primary"
              LinkComponent={"a"}
              href={facebookShareUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook fontSize={isSmall ? "large" : "medium"} />
            </IconButton>
            <IconButton
              color="primary"
              LinkComponent={"a"}
              href={linkedInShareUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn fontSize={isSmall ? "large" : "medium"} />
            </IconButton>
            <IconButton
              color="primary"
              LinkComponent={"a"}
              href={telegramShareUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Telegram fontSize={isSmall ? "large" : "medium"} />
            </IconButton>
          </div>
        </div>
      </div>
      <div>
        <Document
          file={file}
          onLoadSuccess={({ numPages }) => {
            console.log(numPages);
          }}
          className="d-flex justify-content-center"
        >
          <Page pageNumber={1} scale={isMedium ? (isLarge ? 1.6 : 1) : 0.8} />
        </Document>
      </div>
    </main>
  );
};

export default CVPage;
