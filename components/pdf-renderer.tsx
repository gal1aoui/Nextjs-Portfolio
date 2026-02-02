"use client";
import React, { useCallback, useEffect, useState } from "react";
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
  import.meta.url,
).toString();

export default function ResumeViewer() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [isPageChanging, setIsPageChanging] = useState(false);
  const [renderedPages, setRenderedPages] = useState<Set<number>>(new Set([1]));

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
    setRenderedPages(new Set([1, 2]));
  };

  const changePage = useCallback(
    (newPage: number) => {
      if (newPage < 1 || newPage > numPages || isPageChanging) return;

      setIsPageChanging(true);

      const pagesToRender = new Set(renderedPages);

      pagesToRender.add(newPage);
      if (newPage > 1) pagesToRender.add(newPage - 1);
      if (newPage < numPages) pagesToRender.add(newPage + 1);
      setRenderedPages(pagesToRender);

      setTimeout(() => {
        setPageNumber(newPage);
        setIsPageChanging(false);
      }, 50);
    },
    [numPages, isPageChanging, renderedPages],
  );

  const previousPage = () => changePage(pageNumber - 1);
  const nextPage = () => changePage(pageNumber + 1);

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.25, 2.5));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.25, 0.5));
  const resetZoom = () => setScale(1.0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") previousPage();
      if (e.key === "ArrowRight") nextPage();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [pageNumber, numPages]);

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
      <div className="flex flex-col items-center">
        <div className="sticky top-2 left-1/2 -translate-x-1/2 z-20">
          <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 bg-default-100/80 backdrop-blur-sm rounded-full shadow-sm">
            <EditorButton
              isIconOnly
              className="rounded-full min-w-8 w-8 h-8 sm:min-w-9 sm:w-9 sm:h-9 bg-transparent"
              isDisabled={scale <= 0.5}
              size="sm"
              startContent={<ZoomOutIcon />}
              onPress={zoomOut}
            />
            <EditorButton
              className="min-w-12 sm:min-w-14 text-xs sm:text-sm"
              size="sm"
              variant="bordered"
              onPress={resetZoom}
            >
              {Math.round(scale * 100)}%
            </EditorButton>
            <EditorButton
              isIconOnly
              className="rounded-full min-w-8 w-8 h-8 sm:min-w-9 sm:w-9 sm:h-9 bg-transparent"
              isDisabled={scale >= 2.5}
              size="sm"
              startContent={<ZoomInIcon />}
              onPress={zoomIn}
            />
            <Divider className="h-6 mx-1" orientation="vertical" />
            <EditorButton
              isIconOnly
              className="rounded-full min-w-8 w-8 h-8 sm:min-w-9 sm:w-9 sm:h-9"
              color="success"
              size="sm"
              startContent={<EditorActionIcon type="downloadFile" />}
              variant="flat"
              onPress={downloadPDF}
            />
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <EditorButton
            isIconOnly
            className="hidden sm:flex rounded-full absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-default-100/80 backdrop-blur-sm shadow-md"
            isDisabled={pageNumber <= 1 || isPageChanging}
            startContent={<EditorActionIcon type="leftArrow" />}
            onPress={previousPage}
          />
          <div className="shadow-md mx-auto">
            <Document
              error={
                <div className="flex items-center w-full justify-center p-20 text-red-500">
                  <p>
                    Failed to load PDF. Please make sure the file exists in the
                    public folder.
                  </p>
                </div>
              }
              file="resume.pdf"
              loading={<PdfRendererSkeleton />}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              {Array.from(renderedPages).map((pageNum) => (
                <div
                  key={pageNum}
                  className={`${pageNum === pageNumber ? "block" : "hidden"}`}
                >
                  <Page
                    loading={
                      <div
                        className="flex items-center justify-center"
                        style={{ aspectRatio: "1/1.414" }}
                      >
                        <div className="animate-pulse text-default-400">
                          Loading...
                        </div>
                      </div>
                    }
                    pageNumber={pageNum}
                    renderAnnotationLayer={false}
                    renderTextLayer={false}
                    scale={scale}
                  />
                </div>
              ))}
            </Document>
          </div>
          <EditorButton
            isIconOnly
            className="hidden sm:flex rounded-full absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-default-100/80 backdrop-blur-sm shadow-md"
            isDisabled={pageNumber >= numPages || isPageChanging}
            startContent={<EditorActionIcon type="rightArrow" />}
            onPress={nextPage}
          />
        </div>
        <div className="sticky bottom-2 left-1/2 -translate-x-1/2 z-20">
          <div className="flex items-center gap-4 p-2 bg-default-100/80 backdrop-blur-sm rounded-full shadow-sm">
            <EditorButton
              isIconOnly
              className="sm:hidden rounded-full bg-transparent"
              isDisabled={pageNumber <= 1 || isPageChanging}
              size="sm"
              startContent={<EditorActionIcon type="leftArrow" />}
              onPress={previousPage}
            />

            <div className="flex items-center gap-2">
              {numPages > 0 &&
                Array.from({ length: numPages }, (_, i) => (
                  <button
                    key={i + 1}
                    aria-label={`Go to page ${i + 1}`}
                    className={`
                        w-2 h-2 rounded-full transition-all duration-200
                        ${
                          pageNumber === i + 1
                            ? "bg-primary w-6"
                            : "bg-default-300 hover:bg-default-400"
                        }
                      `}
                    onClick={() => changePage(i + 1)}
                  />
                ))}
            </div>

            <EditorButton
              isIconOnly
              className="sm:hidden rounded-full bg-transparent"
              isDisabled={pageNumber >= numPages || isPageChanging}
              size="sm"
              startContent={<EditorActionIcon type="rightArrow" />}
              onPress={nextPage}
            />
          </div>
        </div>

        {scale > 1 && (
          <p className="sticky bottom-14 left-1/2 -translate-x-1/2 text-xs text-default-400 bg-default-100/80 backdrop-blur-sm px-3 py-1 rounded-full">
            Scroll to pan around
          </p>
        )}
      </div>
    </>
  );
}
