"use client";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { Divider } from "@heroui/divider";
import { Button as EditorButton } from "@heroui/button";
import { ZoomInIcon, ZoomOutIcon } from "./icons";
import PdfRendererSkeleton from "./pdf-renderer-skeleton";
import { EditorActionIcon } from "./contact/editor/icons";

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
        <div className="flex w-full items-center justify-center p-2 sticky top-0 z-10"> 
          <div className="flex gap-2 p-2">
            <EditorButton
              isIconOnly
              onPress={zoomOut}
              size="sm"
              isDisabled={scale <= 0.5}
              startContent={<ZoomOutIcon />}
              className="rounded-full"
            />
            <EditorButton variant="bordered" size="sm" onPress={resetZoom}>
              {Math.round(scale * 100)}%
            </EditorButton>
            <EditorButton
              isIconOnly
              size="sm"
              onPress={zoomIn}
              isDisabled={scale >= 3.0}
              startContent={<ZoomInIcon />}
              className="rounded-full"
            />
            <Divider className="h-[24px] mt-1" orientation="vertical" />
            <EditorButton
              isIconOnly
              color="success"
              variant="flat"
              size="sm"
              onPress={downloadPDF}
              className="rounded-full"
              startContent={
                <EditorActionIcon type="downloadFile" />
              }
            />
          </div>
        </div>
        {/* PDF Document */}
        <div className="flex items-center justify-between w-full">
          <EditorButton
            isIconOnly
            onPress={previousPage}
            isDisabled={pageNumber <= 1}
            className="rounded-full sticky left-2 z-10"
            startContent={
              <EditorActionIcon type="leftArrow" />
            }
          />
          <div className="shadow-md mx-auto">
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
          <EditorButton
            isIconOnly
            onPress={nextPage}
            isDisabled={pageNumber >= (numPages ?? 0)}
            className="rounded-full sticky right-2 z-10"
            startContent={
              <EditorActionIcon type="rightArrow" />
            }
          />
        </div>
      </div>
    </>
  );
}
