import Exposes from "@/components/Expose";
import PlusButton from "@/components/Content";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import Content from "@/components/Content";
import { Text } from "@mantine/core";
// import { Inter } from "@next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const session = useSession();
  const handleSignIn = async () => {
    signIn("credentials", {
      email: "ahahah",
      password: "123",
    });
  };
  const handleSignOut = async () => {
    signOut();
  };
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <h1>Child App</h1>

      <div className="flex gap-8">
        <button onClick={handleSignIn}>Sign In</button>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
      <div>
        <Text fw="bold">Current Session : </Text>
        <pre>{JSON.stringify(session)}</pre>
      </div>
      {/* <PlusButton /> */}
      <Content />
      {/* <Exposes /> */}
    </main>
  );
}
