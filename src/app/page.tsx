import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import CategoryCreators from "@/components/home/CategoryCreators";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 ">
      <Navbar />
      <section className="w-full h-[70vh] flex flex-col justify-center items-center gap-16">
        <div className="text-center">
          <h1 className="text-4xl lg:text-7xl font-bold">ParaPlantas.shop</h1>
          <h2 className="lg:text-4xl text-2xl">
            Hagamos del mundo un lugar más verde
          </h2>
        </div>
        <Button className="lg:w-80 lg:h-14 lg:text-base w-40">Empezar</Button>
      </section>
      <span className="lg:px-16 w-full flex">
        <Separator />
      </span>
      <CategoryCreators />
      <Footer />
    </main>
  );
}
