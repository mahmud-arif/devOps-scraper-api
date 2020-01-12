import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


const websiteList = props => {
    const {loading} = props.data; 
    
    
    if (loading) return <h1>loading...</h1>; 
    const show = props.data.websites.map(website=>(
        <h1 key={website.id}>{website.url}</h1>
    ))
    return (
       <div>
          {show}
       </div>
    )

}


const query = gql`{
    websites{
       id 
       url
       title
     } 
  }   
`
export default graphql(query)(websiteList);