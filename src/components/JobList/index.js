import React from 'react'
import {Table,Col} from 'antd'
import './index.less'
import {Navbar} from 'react-bootstrap'
const columns = [{
    title: '职位名称',
    dataIndex: 'name',
    render: text => <a href="javascript:;">{text}</a>,
}, {
    title: '公司名称',
    dataIndex: 'companyName',
}, {
    title: '部门名称',
    dataIndex: 'apartment',
},
    {
        title: '工作地点',
        dataIndex: 'address',
    },
    {
        title: '薪资',
        dataIndex: 'price',
    },
    {
        title: '发布时间',
        dataIndex: 'time',
    },
    {
        title: '求职押金',
        dataIndex: 'cash',
    },
    {
        title: '操作',
        dataIndex: 'Action',
        render: (text, record) => (
            <span>
              <a href="javascript:;" className="check mr10">查看简历</a>
              <a href="javascript:;" className="check">暂停</a>
            </span>
        ),
    }
];
const data = [{
    key: '1',
    name: '产品经理',
    companyName: '深圳英迈思科技文化有限公司',
    apartment: '解决方案事业部',
    address:'深圳市宝安区',
    price:'7k~9k',
    time:'06-16  14:03',
    cash:'11',

}, {
    key: '2',
    name: '产品经理',
    companyName: '深圳英迈思科技文化有限公司',
    apartment: '解决方案事业部',
    address:'深圳市宝安区',
    price:'7k~9k',
    time:'06-16  14:03',
    cash:'11',
}, {
    key: '3',
    name: '产品经理',
    companyName: '深圳英迈思科技文化有限公司',
    apartment: '解决方案事业部',
    address:'深圳市宝安区',
    price:'7k~9k',
    time:'06-16  14:03',
    cash:'11',
}, {
    key: '4',
    name: '产品经理',
    companyName: '深圳英迈思科技文化有限公司',
    apartment: '解决方案事业部',
    address:'深圳市宝安区',
    price:'7k~9k',
    time:'06-16  14:03',
    cash:'11',
}];
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};
export default class JobList extends React.Component{

    render(){
        return(
            <div className="jobList">
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
            </div>
        )
    }
}