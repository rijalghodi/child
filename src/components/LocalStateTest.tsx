import React, { useEffect, useState } from "react";

import { Box, Button, Group, Stack, Text } from "@mantine/core";

export default function LocalStateTest() {
  const [num, setNum] = useState(1);

  return (
    <Box w="max-content">
      <Stack bg="gray.7" spacing={12} align="center">
        <Group>
          <Button
            onClick={() => setNum(num + 1)}
            fz="lg"
            variant="filled"
            color="green"
          >
            Add
          </Button>

          <Button onClick={() => setNum(num - 1)} color="red" fz="lg">
            Sub
          </Button>
        </Group>
        <Text fz={32} fw="bold">
          {num}
        </Text>
      </Stack>
    </Box>
  );
}
