import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
// import Link from "next/link";

const Link = dynamic(() => import("next/link"), {
  ssr: false,
});

type Props = {};
import style from "./styles.module.css";
import { useQuery, gql } from "@apollo/client";

import { Box, Button, Group, Stack, Text, Title } from "@mantine/core";
import { useSession } from "next-auth/react";
import LocalStateTest from "./LocalStateTest";
import StyleTest from "./StyleTest";
import { ApolloTest } from "./ApolloTest";
import UseEffectText from "./UseEffectText";
import SessionTest from "./SessionTest";

export default function Content(props: Props) {
  const session = useSession();

  return (
    <Stack bg="gray.7" p={24} spacing={48}>
      <Box>
        <Title order={2} mb="sm">
          Session Test
        </Title>
        <SessionTest />
      </Box>
      <Box>
        <Title order={2} mb="sm">
          Style Test
        </Title>
        <StyleTest />
      </Box>
      <Box>
        <Title order={2} mb="sm">
          Next Link Test
        </Title>
        <Link href="/">Go to Home</Link>
      </Box>
      <Box>
        <Title order={2} mb="md">
          Local State Test
        </Title>
        <LocalStateTest />
      </Box>
      <Box>
        <Title order={2} mb="sm">
          Apollo Client Test
        </Title>
        <ApolloTest />
      </Box>
      <Box>
        <Title order={2} mb="sm">
          use Effect Test
        </Title>
        <UseEffectText />
      </Box>
    </Stack>
  );
}
