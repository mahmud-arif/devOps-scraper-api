import React from 'react';
import useNewSub from '../Hooks/useNewUrlSub';
import { Table } from 'antd';
const { Column } = Table;

let dataSource = [];

function WebsiteList(props) {
	const data = useNewSub();
	if (!data.loading) dataSource.push(data.data.website);
	return (
		<Table dataSource={dataSource} className="table">
			<Column title="Url" dataIndex="url" key="url" />
			<Column title="Title" dataIndex="title" key="title" />
		</Table>
	);
}

export default WebsiteList;
