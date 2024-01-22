import React from "react";
import Content from "./Content";
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
        <Content />
      </ApolloProvider>
    </div>
  );
}
