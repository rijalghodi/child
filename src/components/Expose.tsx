import React from "react";
import PlusButton from "./PlusButton";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
type Props = {};
export default function Expose(props: Props) {
  const client = new ApolloClient({
    uri: "https://api.dashboard.modules.dev.optimining.optimap.id/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <div>
      <ApolloProvider client={client}>
        <PlusButton />
      </ApolloProvider>
    </div>
  );
}
