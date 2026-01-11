"use client";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { ModalFooter } from "@heroui/modal";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Button } from "./ui/button";
import { ZoomInIcon, ZoomOutIcon } from "./icons";
import PdfRendererSkeleton from "./pdf-renderer-skeleton";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function ResumeViewer() {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const changePage = (offset: number) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  const zoomIn = () => {
    setScale((prevScale) => Math.min(prevScale + 0.2, 3.0));
  };

  const zoomOut = () => {
    setScale((prevScale) => Math.max(prevScale - 0.2, 0.5));
  };

  const resetZoom = () => {
    setScale(1.0);
  };

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Achref_Gallaoui_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="flex flex-col items-center py-4">
        <div className="flex justify-between w-full text-center p-2">
          <div className="flex gap-2 rounded-lg p-2 bg-default-100">
            <Button
              size="xs"
              variant="flat"
              onClick={zoomOut}
              isDisabled={scale <= 0.5}
              startContent={<ZoomOutIcon />}
            />
            <Button size="xs" variant="flat" onClick={resetZoom}>
              {Math.round(scale * 100)}%
            </Button>
            <Button
              size="xs"
              variant="flat"
              onClick={zoomIn}
              isDisabled={scale >= 3.0}
              startContent={<ZoomInIcon />}
            />
          </div>
          {numPages && (
            <div className="flex items-center gap-4 bg-default-100 rounded-lg shadow-sm p-2">
              <Button
                size="xs"
                variant="flat"
                onClick={previousPage}
                isDisabled={pageNumber <= 1}
              >
                Previous
              </Button>
              <span className="text-sm font-medium text-foreground">
                Page {pageNumber} of {numPages}
              </span>
              <Button
                size="xs"
                variant="flat"
                onClick={nextPage}
                isDisabled={pageNumber >= numPages}
              >
                Next
              </Button>
            </div>
          )}
          <Button
            color="success"
            variant="flat"
            size="sm"
            onClick={downloadPDF}
            startContent={
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            }
          >
            Download PDF
          </Button>
        </div>
        {/* PDF Document */}
        <div className="shadow-md">
          <Document
            file="resume.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<PdfRendererSkeleton />}
            error={
              <div className="flex items-center w-full justify-center p-20 text-red-500">
                <p>
                  Failed to load PDF. Please make sure the file exists in the
                  public folder.
                </p>
              </div>
            }
          >
            <Page
              pageNumber={pageNumber}
              scale={scale}
              renderTextLayer={true}
              renderAnnotationLayer={true}
            />
          </Document>
        </div>
      </div>
    </>
  );
}
