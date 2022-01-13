import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:5050/query",
  cache: new InMemoryCache(),
});
