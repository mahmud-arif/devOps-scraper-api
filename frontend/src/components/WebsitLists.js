import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Table} from 'antd';
const { Column } = Table;



const websiteList = props => {
    const {loading} = props.data; 
    
    
    if (loading) return <h1>loading...</h1>; 
    return (
       <Table dataSource={props.data.websites} className="table">
          <Column title="Url" dataIndex="url" key="url"/>
          <Column title="Title" dataIndex="title" key="title"/>
       </Table>
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