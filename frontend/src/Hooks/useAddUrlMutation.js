import gql from 'graphql-tag';
import {query} from './useUrlsQuery'; 
import { useMutation } from 'react-apollo';

export const mutation = gql`
mutation createWebsite($url: String) {
  createWebsite(url: $url) {
    id
    url
    title
  }
}
`;

export default () => {
  let [mutate] = useMutation(mutation);

  return ({ url }) => {
    mutate({
      variables: {
        url: url
      },
      // refetchQueries:[{query}]
    });
  };
};