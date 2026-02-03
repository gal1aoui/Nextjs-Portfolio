"use client";

import { Tooltip } from "@heroui/tooltip";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Link } from "@heroui/link";

import {
  GithubIcon,
  LinkedInIcon,
  MediumIcon,
  RelatedContactIcon,
  RelatedResumeIcon,
} from "./icons";
import { Button } from "./ui/button";
import PdfRendererSkeleton from "./pdf-renderer-skeleton";
import ContactFormSkeleton from "./contact/contact-form-skeleton";
import { RandomizedTextEffect } from "./randomized-text";
import Roles from "./roles";

import useWindowWidth from "@/hooks/useWindowWidth";
import { useModal } from "@/providers/modal-provider";

const DynamicPDFViewer = dynamic(() => import("./pdf-renderer"), {
  loading: () => <PdfRendererSkeleton />,
  ssr: false,
});

const DynamicContactForm = dynamic(() => import("./contact/contact-form"), {
  loading: () => <ContactFormSkeleton />,
  ssr: false,
});

export default function Introduction() {
  const [roughNotationStarted, setRoughNotationStarted] =
    useState<boolean>(false);
  const { openModal } = useModal();
  const roughNotationAnimationDelay = 500;

  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (windowWidth > 651) {
      setTimeout(() => setRoughNotationStarted(true), 2000);
    } else {
      setRoughNotationStarted(false);
    }
  }, [windowWidth]);

  return (
    <div className="flex flex-col w-fit text-center md:text-start p-4">
      <h1 className="text-4xl md:text-6xl">Hi there, I am</h1>
      <h1 className="text-6xl md:text-8xl font-bold">
        <RandomizedTextEffect text="Achref Gallaoui" />
      </h1>

      <Roles />

      <h3 className="text-2xl md:text-4xl antialiased md:subpixel-antialiased tracking-wide leading-12">
        <RoughNotationGroup show={roughNotationStarted}>
          <RoughNotation color="#FFD41D" strokeWidth={2} type="highlight">
            Full-Stack Developer
          </RoughNotation>{" "}
          with a{" "}
          <RoughNotation
            animationDelay={roughNotationAnimationDelay}
            color={"red"}
            strokeWidth={8}
            type="box"
          >
            frontend specialization
          </RoughNotation>{" "}
          and{" "}
          <RoughNotation
            animationDelay={roughNotationAnimationDelay}
            color="#33A1E0"
            strokeWidth={4}
            type="box"
          >
            3+ years
          </RoughNotation>{" "}
          of experience building and delivering complete solutions. Strong in
          modern frontend frameworks,{" "}
          <RoughNotation
            multiline
            animationDelay={roughNotationAnimationDelay}
            color="#6AECE1"
            strokeWidth={4}
            type="underline"
          >
            performance optimization
          </RoughNotation>
          , and a focus on{" "}
          <RoughNotation
            multiline
            animationDelay={roughNotationAnimationDelay}
            color="#6AECE1"
            strokeWidth={4}
            type="underline"
          >
            clean, maintainable code
          </RoughNotation>
          , with{" "}
          <RoughNotation
            animationDelay={roughNotationAnimationDelay}
            color="#26CCC2"
            padding={[6, 16, 16, 6]}
            strokeWidth={4}
            type="circle"
          >
            solid backend
          </RoughNotation>{" "}
          experience across multiple projects.
        </RoughNotationGroup>
      </h3>

      <div className="flex flex-col md:flex-row mx-auto md:mx-0 gap-12 my-6 justify-between">
        <div className="flex gap-12">
          <Tooltip closeDelay={2000} content="Contact Me">
            <Button
              endContent={<RelatedContactIcon size={18} />}
              radius="full"
              size="md"
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
              endContent={<RelatedResumeIcon size={18} />}
              size="md"
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
            <Link
              isExternal
              color="foreground"
              href="https://www.linkedin.com/in/ashraf-gallaoui/"
            >
              <LinkedInIcon size={40} />
            </Link>
          </Tooltip>

          <Tooltip content="Github" placement="top">
            <Link
              isExternal
              color="foreground"
              href="https://github.com/gal1aoui"
            >
              <GithubIcon size={48} />
            </Link>
          </Tooltip>
          <Tooltip content="Medium" placement="top">
            <Link
              isExternal
              color="foreground"
              href="https://medium.com/@aga1laoui"
            >
              <MediumIcon size={42} />
            </Link>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
