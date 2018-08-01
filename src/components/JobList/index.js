import React from 'react'
import {Table,Button,Icon,Switch,Modal} from 'antd'
import './index.less'
import {Navbar} from 'react-bootstrap'
const confirm = Modal.confirm;
export default class JobList extends React.Component{
    constructor(props) {
        super(props);
        this.columns = [{
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
                render:(text,record)=><span>
                    <Switch defaultChecked={text} onChange={()=>this.onChange(record.key,text)}/>
                </span>
            },
            {
                title: '操作',
                dataIndex: 'Action',
                render: (text, record) => (
                    <span>
              <a href="javascript:;" className="check mr10">查看简历</a>
              <a href="javascript:;" className="check" onClick={this.stop}>暂停</a>
            </span>
                ),
            }
        ];
        this.data = [{
            key: '1',
            name: '产品经理',
            companyName: '深圳英迈思科技文化有限公司',
            apartment: '解决方案事业部',
            address:'深圳市宝安区',
            price:'7k~9k',
            time:'06-16  14:03',
            cash:true,

        }, {
            key: '2',
            name: '产品经理',
            companyName: '深圳英迈思科技文化有限公司',
            apartment: '解决方案事业部',
            address:'深圳市宝安区',
            price:'7k~9k',
            time:'06-16  14:03',
            cash:true,
        }, {
            key: '3',
            name: '产品经理',
            companyName: '深圳英迈思科技文化有限公司',
            apartment: '解决方案事业部',
            address:'深圳市宝安区',
            price:'7k~9k',
            time:'06-16  14:03',
            cash:false,
        }, {
            key: '4',
            name: '产品经理',
            companyName: '深圳英迈思科技文化有限公司',
            apartment: '解决方案事业部',
            address:'深圳市宝安区',
            price:'7k~9k',
            time:'06-16  14:03',
            cash:false,
        }];
        this.rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            }),
        };
    }
    onChange=(key,text)=>{
        this.data[key-1].cash=!text
        console.log(this.data);
    }
    stop=()=>{
        confirm({
            title: '提示',
            content: '确认暂停发布该职位么？',
            onOk() {
                return new Promise((resolve, reject) => {
                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                }).catch(() => console.log('Oops errors!'));
            },
            onCancel() {},
            okText:'确定',
            cancelText:'取消'
        });
    }
    render(){
        return(
            <div className="jobList">
                <Icon type="delete" className="fs18 mr20 ml20 mb30"/><Button type="primary">新增</Button>
                <Table rowSelection={this.rowSelection} columns={this.columns} dataSource={this.data} />
            </div>
        )
    }
}