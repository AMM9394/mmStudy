import React, { Component } from 'react';
import {Table,Modal} from 'antd';
import Common from './common';
import './style/style.less';
let logo = require('../../../../images/icon_fuwuxiangqing.png');

export default class DoneDetail extends Component {
  constructor(props) {
    super(props);
    this.state={
      index:null,
      visible:false,
    }; 
  }
  
  showModal=(index)=>{
    this.setState({
      index:index,
      visible:true,
    });
  }
  handleOk=()=>{
    this.setState({
      visible:false,
    });
  }
  handleCancel=()=>{
    this.setState({
      visible:false,
    });
  }
  render() {
    const columns = [{
      title: '序号',
      dataIndex: 'id',
      key: 'id',
      render:(text,record,index)=>index+1,
    }, {
      title: '服务类型',
      dataIndex: 'a',
      key: 'a',
    }, {
      title: '服务名称',
      dataIndex: 'c',
      key: 'c',
    }, {
      title: '申请单号',
      dataIndex: 'd',
      key: 'd',
    }, {
      title: '申请单位',
      dataIndex: 'f',
      key: 'f',
    }, {
      title: '申请人',
      dataIndex: 'g',
      key: 'g',
    }, {
      title: '办理时间',
      dataIndex: 'h',
      key: 'h',
    }, {
      title: '操作',
      dataIndex: 'q',
      key: 'q',
      render:(text,record,index)=>{
        let that=this;
        return <a onClick={that.showModal.bind(that,index)} className="a-detail">查看详情</a>;
      },
    }];
    const data = [{
      key:0,
      a:'备案审核',
      c:'燃气工程施工许可',
      d:'cgsq170601',
      f:'石河子市天源燃气有限公司',
      g:'张枫',
      h:'2017-06-20 14:23:33',
    },{
      key:1,
      a:'备案审核',
      c:'燃气工程施工许可',
      d:'cgsq170621',
      f:'石河子市天源燃气有限公司',
      g:'陈敏',
      h:'2017-06-21 15:34:23',
    },{
      key:2,
      a:'备案审核',
      c:'燃气工程施工许可',
      d:'cgsq170611',
      f:'石河子市天源燃气有限公司',
      g:'陈晓丹',
      h:'2017-06-21 13:44:53',
    }];
    return (
      <div> 
        <Modal title={<p><img style={{marginRight:5}} src={logo}/>已办服务详情</p>}
          visible={this.state.visible} 
          onOk={this.handleOk} 
          width={1086}
          onCancel={this.handleCancel} 
          footer={null}
          className="modal"
        >
          <Common flag={1}/>
          <br/>
        </Modal>
        <Table 
        dataSource={data}
        columns={columns}
        bordered
        className="table1"
        //pagination={false}
      />
      </div>
      
      
    );
  }
}
