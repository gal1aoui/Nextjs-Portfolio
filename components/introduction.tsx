"use client";

import { Tooltip } from "@heroui/tooltip";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { GithubIcon, LinkedInIcon, MediumIcon, RelatedContactIcon, RelatedResumeIcon } from "./icons";
import { Button } from "./ui/button";
import { useModal } from "@/providers/modal-provider";
import dynamic from "next/dynamic";
import PdfRendererSkeleton from "./pdf-renderer-skeleton";
import ContactFormSkeleton from "./contact/contact-form-skeleton";
import { useEffect, useState } from "react";
import useWindowWidth from "@/hooks/useWindowWidth";
import { RandomizedTextEffect } from "./randomized-text";

const DynamicPDFViewer = dynamic(() => import("./pdf-renderer"), {
  loading: () => <PdfRendererSkeleton />,
  ssr: false
});

const DynamicContactForm = dynamic(() => import("./contact/contact-form"), {
  loading: () => <ContactFormSkeleton />,
  ssr: false
});

export default function Introduction() {
  const [roughNotationStarted, setRoughNotationStarted] = useState<boolean>(false);
  const { openModal } = useModal();
  const roughNotationAnimationDelay = 500;

  const windowWidth = useWindowWidth();

  useEffect(() => {
    if(windowWidth > 651){
      setTimeout(() => setRoughNotationStarted(true), 2000);
    } else {
      setRoughNotationStarted(false);
    }
  }, [windowWidth]);

  return (
    <div className="flex flex-col w-fit text-center md:text-start p-4">
      <h1 className="text-4xl md:text-6xl">Hi there, I am</h1>
      <h1 className="text-6xl md:text-8xl font-bold"><RandomizedTextEffect text="Achref Gallaoui" /></h1>

      <div className="flex flex-col md:flex-row gap-2 sm:my-12 my-6 mx-auto md:mx-0 text-center">
        <span className="badge">Software Engineer</span>
        <span className="badge">Full-Stack Developer</span>
        <span className="badge">Frontend Specialist</span>
      </div>

      <h3 className="text-2xl md:text-4xl antialiased md:subpixel-antialiased tracking-wide leading-12">
        <RoughNotationGroup show={roughNotationStarted}>
          <RoughNotation type="highlight" color="#FFD41D" strokeWidth={2}>Full-Stack Developer</RoughNotation>{" "}
          with a <RoughNotation type="box" strokeWidth={8} color={'red'} animationDelay={roughNotationAnimationDelay}>frontend specialization</RoughNotation> and{" "}
          <RoughNotation type="box" strokeWidth={4} color="#33A1E0" animationDelay={roughNotationAnimationDelay}>3+ years</RoughNotation> of experience building and
          delivering complete solutions. Strong in modern frontend frameworks,{" "}
          <RoughNotation type="underline" strokeWidth={4} color="#6AECE1" animationDelay={roughNotationAnimationDelay} multiline>performance optimization</RoughNotation>, and a focus on{" "}
          <RoughNotation type="underline" strokeWidth={4} color="#6AECE1" animationDelay={roughNotationAnimationDelay} multiline>clean, maintainable code</RoughNotation>,
           with{" "}
          <RoughNotation type="circle" strokeWidth={4} color="#26CCC2" animationDelay={roughNotationAnimationDelay} padding={[6, 16, 16, 6]}>solid backend</RoughNotation> experience across
          multiple projects.
        </RoughNotationGroup>
      </h3>

      <div className="flex flex-col md:flex-row mx-auto md:mx-0 gap-12 my-6 justify-between">
        <div className="flex gap-12">
          <Tooltip closeDelay={2000} content="Contact Me">
            <Button
              size="md"
              radius="full"
              endContent={<RelatedContactIcon size={18} />}
              onClick={() =>
                openModal({
                  title: "Contact",
                  render: () => <DynamicContactForm />,
                })
              }
            >
              Contact
            </Button>
          </Tooltip>
          <Tooltip closeDelay={2000} content="See My Resume">
            <Button
              size="md"
              endContent={<RelatedResumeIcon size={18} />}
              onClick={() =>
                openModal({
                  render: () => <DynamicPDFViewer />,
                })
              }
            >
              Resume
            </Button>
          </Tooltip>
        </div>

        <div className="flex gap-12 items-center mx-auto md:mx-0 mb-4">
          <Tooltip content="LinkedIn" placement="top">
            <LinkedInIcon size={40} className="cursor-pointer" />
          </Tooltip>
          <Tooltip content="Github" placement="top">
            <GithubIcon size={48} className="cursor-pointer" />
          </Tooltip>
          <Tooltip content="Medium" placement="top">
            <MediumIcon size={42} className="cursor-pointer" />
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
