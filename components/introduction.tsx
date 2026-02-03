"use client";

import { Tooltip } from "@heroui/tooltip";
import dynamic from "next/dynamic";
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
import Bio from "./bio";

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
  const { openModal } = useModal();

  return (
    <div className="flex flex-col w-fit text-center md:text-start p-4">
      <h1 className="text-4xl md:text-6xl">Hi there, I am</h1>
      <h1 className="text-6xl md:text-8xl font-bold">
        <RandomizedTextEffect text="Achref Gallaoui" />
      </h1>

      <Roles />
      <Bio />
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
