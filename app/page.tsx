import { Image } from "@heroui/image";
import NextImage from "next/image";
import profile from "@/public/dark-profile.png";
import Introduction from "@/components/introduction";

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row lg:p-16 md:gap-x-36 w-fit">
      <Image
        as={NextImage}
        isBlurred
        alt="Achref Gallaoui Image"
        src={profile.src}
        width={520}
        height={640}
        className="z-10 bg-default animate-blob hidden md:block relative contrast-110"
        style={{
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          backgroundColor: "current",
          objectFit: "cover"
        }}
        sizes="100vw"
        quality={100}
      />
      <Introduction />
    </section>
  );
}
