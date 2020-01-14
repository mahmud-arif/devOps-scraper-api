import React from 'react';
import { Table} from 'antd';
const { Column } = Table;


const List = (props) => {
    return (
        <Table dataSource={props.source} className="table">
        <Column title="Url" dataIndex="url" key="url"/>
        <Column title="Title" dataIndex="title" key="title"/>
     </Table>
    );
}

export default List;
