import { Box, Stack, Text } from "@mantine/core";

import style from "./styles.module.css";

export default function StyleTest() {
  return (
    <Box w="max-content">
      <p>No Style</p>
      <p className="text-lg text-green-300">Tailwind Style (green large)</p>
      <p style={{ color: "yellow", fontSize: 20 }}>
        Inline Style (yellow large)
      </p>
      <p className={style.text}>Module CSS Style (pink large)</p>
      <Text color="cyan" size={20}>
        Mantine Style (cyan large)
      </Text>
    </Box>
  );
}
