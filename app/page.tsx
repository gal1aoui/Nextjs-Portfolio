"use client";

import { Image } from "@heroui/image";
import NextImage from "next/image";

import profile from "@/public/dark-profile.png";
import Introduction from "@/components/introduction";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center md:flex-row lg:p-6 md:gap-x-8 w-fit">
        <div className="hidden md:block flex-shrink-0">
          <Image
            isBlurred
            priority
            alt="Achref Gallaoui Image"
            as={NextImage}
            className="z-10 bg-default animate-blob relative contrast-110"
            height={700}
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            src={profile.src}
            style={{
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              backgroundColor: "current",
              objectFit: "cover",
              width: "auto",
              height: "auto",
            }}
            width={600}
          />
        </div>
        <Introduction />
      </section>
    </>
  );
}
