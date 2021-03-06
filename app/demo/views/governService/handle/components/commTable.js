import React, { Component } from 'react';
import {Select,Form,Button,Input,Row,Col,Icon} from 'antd';
import {selectValue1,companies} from '../../../../modal/data';

const Option = Select.Option;
const FormItem = Form.Item;
class MyForm1 extends Component {
  constructor(props) {
    super(props);
     
  }
  handleSearch=(e)=>{
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if(!err){
        this.props.getSValue(values); 
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSearch} className="my-form1">
        <Row gutter={8} type="flex" align="middle">
          <Col span={5}>
            <FormItem label="服务类型" {...formItemLayout}>
              {getFieldDecorator('a')(
                <Select placeholder="全部" allowClear>
                  {
                    selectValue1.map(function (s, j) {
                      return <Option key={j} value={`y${j}`}>{s}</Option>;
                    })
                  }
                </Select>
              )}
            </FormItem>
          </Col>
          <Col span={5}>
            <FormItem label="服务名称" {...formItemLayout}>
              {getFieldDecorator('b')(
                <Input/>
              )}
            </FormItem>
          </Col>
          <Col span={5}>
            <FormItem label="申请单位" {...formItemLayout}>
              {getFieldDecorator('c')(
                <Select placeholder="全部" allowClear>
                  {
                    companies.map(function (s, j) {
                      return <Option key={j} value={`se${j}`}>{s}</Option>;
                    })
                  }
                </Select>
              )}
            </FormItem>
          </Col>
          <Col offset={1} span={4}>
            <Button htmlType="submit" className="btn"><span className="text"><Icon type="search" />&nbsp;&nbsp;查询</span></Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 7 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 15 },
  },
};
const CommTable = Form.create()(MyForm1);
export default CommTable;
 