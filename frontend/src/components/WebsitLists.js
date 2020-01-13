import React, {useSate, useEffect} from 'react';
import { graphql, useSubscription} from 'react-apollo';
import gql from 'graphql-tag';
import { Table} from 'antd';
const { Column } = Table;

let dataSource = []; 
const SUB = gql`
subscription{
  newUrl{
    id, 
    url,
    title
  }
}
` 
// function GetData(){
//   
//    if(!loading) return data.newUrl
// }


function WebsiteList(props){
   
   const {data, loading} = useSubscription(SUB);

    if (loading) return <h1>loading...</h1>; 
    dataSource = [data.newUrl]
    return (
       <Table dataSource={dataSource} className="table">
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
export default graphql(query)(WebsiteList);