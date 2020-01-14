import React, {useSate, useEffect} from 'react';
import { graphql, useSubscription} from 'react-apollo';
import useNewSub from '../Hooks/useNewUrlSub'; 
import useUrlQuery from '../Hooks/useUrlsQuery'
import { Table} from 'antd';
const { Column } = Table;

let dataSource = []; 

function WebsiteList(props){
    
   const data = useNewSub();
    if (!data.loading) dataSource = [...dataSource, data.data.website]
    return (
       <Table dataSource={dataSource} className="table">
          <Column title="Url" dataIndex="url" key="url"/>
          <Column title="Title" dataIndex="title" key="title"/>
       </Table>
    )

}


export default WebsiteList; 