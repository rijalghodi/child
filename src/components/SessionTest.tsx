import React from "react";
import { Text } from "@mantine/core";
import { useSession } from "next-auth/react";

type Props = {};

export default function SessionTest({}: Props) {
  const session = useSession();
  return (
    <div>
      <Text fw="bold">Current Session From Existing Provider :</Text>
      <pre>{JSON.stringify(session)}</pre>
    </div>
  );
}
