import React, { useEffect, useState } from "react";

import { Box, Button, Group, Stack, Text } from "@mantine/core";
import { gql, useQuery } from "@apollo/client";

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

export function ApolloTest() {
  const { loading, error, data } = useQuery(BARGING);

  if (error) {
    return <div>Error</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Box w="max-content">
      <pre>{JSON.stringify(data)}</pre>
    </Box>
  );
}
