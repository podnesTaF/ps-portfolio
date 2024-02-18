import Button from "@/components/Button";
import ImageCard from "@/components/ImageCard";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="h-full 2xl:h-screen bg-gradient-1 flex justify-center items-center relative">
        <div className="w-full flex items-center justify-between gap-6 py-20 max-w-7xl px-5">
          <div className="w-[60%]">
            <div className="flex flex-1 flex-col justify-between gap-5">
              <h3 className="gradient-text">Hi, I'm Oleksii</h3>
              <div className="flex">
                <h1 className="text-right gradient-text">
                  I create clean and efficient <br /> code for any product{" "}
                  <br /> I touch
                </h1>
              </div>
              <h3 className="text-left gradient-text">
                Welcome to my Portfolio
              </h3>
            </div>
          </div>
          <div className="w-[35%]">
            <ImageCard src="/images/intro-image.png" alt={"intro image"}>
              <div className="flex gap-4">
                <Button>Full Stack Engineer</Button>
                <Button>ACS Student</Button>
              </div>
            </ImageCard>
          </div>
        </div>
        <div className="absolute bottom-5 left-20">
          <h2 className="text-gray-400">Next</h2>
          <Link href="/about">
            <p className="text-2xl text-blue-100 font-semibold hover:opacity-90">
              About Me
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
