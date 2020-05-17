import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';


export const query = gql`{
    website{
       id 
       url
       title
     } 
  }   
`

export default () => useQuery(query);