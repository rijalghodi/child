import Exposes from "@/components/Expose";
import PlusButton from "@/components/Content";
import Image from "next/image";
// import { Inter } from "@next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <h1>Child</h1>
      {/* <PlusButton /> */}
      <Exposes />
    </main>
  );
}
