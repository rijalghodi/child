import React from "react";
import Content from "./Content";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { SessionProvider } from "next-auth/react";
type Props = {};
export default function Expose(props: Props) {
  const client = new ApolloClient({
    uri: "https://api.dashboard.modules.dev.optimining.optimap.id/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <div>
      <ApolloProvider client={client}>
        {/* <SessionProvider session={props.pageProps.session}> */}
        <Content />
        {/* </SessionProvider> */}
      </ApolloProvider>
    </div>
  );
}
