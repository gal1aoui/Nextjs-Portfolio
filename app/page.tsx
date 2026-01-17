import { Image } from "@heroui/image";
import NextImage from "next/image";
import profile from "@/public/dark-profile.png";
import Introduction from "@/components/introduction";

export default function Home() {
  return (
    <section className="flex flex-col items-center md:flex-row lg:p-6 md:gap-x-8 w-fit">
      <div className="hidden md:block flex-shrink-0">
      <Image
        as={NextImage}
        priority
        isBlurred
        alt="Achref Gallaoui Image"
        src={profile.src}
        width={600}
        height={700}
        className="z-10 bg-default animate-blob relative contrast-110"
        style={{
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          backgroundColor: "current",
          objectFit: "cover",
          width: "auto",
          height: "auto"
        }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
        quality={100}
      />
      </div>
      <Introduction />
    </section>
  );
}
