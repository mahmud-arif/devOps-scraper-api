import React from 'react';
import useNewSub from '../Hooks/useNewUrlSub';
import useUrlQuery from '../Hooks/useUrlsQuery'; 
import { Table } from 'antd';
const { Column } = Table;

let dataSource = [];

function WebsiteList(props) {

  const prevData = useUrlQuery(); 
  const data = useNewSub();

  if(!prevData.loading) dataSource = [...prevData.data.website] 
  if (!data.loading) dataSource.push(data.data.website);

  data.loading = true;
	return (
		<Table dataSource={dataSource.reverse()} className="table">
			<Column title="Url" dataIndex="url" key="url" />
			<Column title="Title" dataIndex="title" key="title" />
		</Table>
	);
}

export default WebsiteList;
