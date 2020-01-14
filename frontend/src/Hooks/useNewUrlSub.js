import gql from "graphql-tag";
import { useSubscription } from "react-apollo";

export const SUB = gql`
subscription{
  website{
    id, 
    url,
    title
  }
}
`;

export default () => useSubscription(SUB);