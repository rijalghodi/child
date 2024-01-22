import Exposes from "@/components/Expose";
import PlusButton from "@/components/Content";
import Image from "next/image";
import { useSession } from "next-auth/react";
// import { Inter } from "@next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const session = useSession();
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <h1>Child</h1>

      <pre>{JSON.stringify(session)}</pre>
      {/* <PlusButton /> */}
      <Exposes />
    </main>
  );
}
