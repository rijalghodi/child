import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
// import Link from "next/link";

const Link = dynamic(() => import("next/link"), {
  ssr: false,
});

type Props = {};
import style from "./styles.module.css";
import { useQuery, gql } from "@apollo/client";

import { Box, Button, Group, Stack } from "@mantine/core";
import { useSession } from "next-auth/react";

const BARGING = gql`
  query OverviewBarging {
    overviewBarging {
      total
      barging
      percentDeviation
      unit
    }
  }
`;

export default function Content(props: Props) {
  const { loading, error, data } = useQuery(BARGING);
  const session = useSession();
  const [num, setNum] = useState(1);
  const [haha, setHaha] = useState("");

  useEffect(() => {
    const bar = async () => {
      const foo = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const response = await foo.json();
      const result = JSON.stringify(response);
      return result;
    };

    bar().then((v) => setHaha(v));
  }, []);

  if (error) {
    return <div>Error</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Stack>
        <Box>
          <pre>{JSON.stringify(session)}</pre>
        </Box>
        <Box>
          <Link href="/">Test Next Link</Link>
        </Box>
        <Group>
          <button
            onClick={() => setNum(num + 1)}
            className={style.primaryButton}
          >
            Tambah (Module.css)
          </button>
          <button
            onClick={() => setNum(num - 1)}
            className="px-4 py-2 bg-orange-400 text-slate-700 rounded-md"
          >
            Kurang (Tailwind Class)
          </button>
          <Button
            radius="xl"
            color="lime"
            variant="filled"
            onClick={() => setNum(num * 2)}
          >
            Kali 2 (Mantine Comp)
          </Button>
        </Group>
      </Stack>
      <p className="text-xl text-center mt-4">{num}</p>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}
