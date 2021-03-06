import React, { Component } from 'react';
import {Select,Form,Button,Row,Col,Icon,Input} from 'antd';
import {selectValue1,replyState} from '../../../../modal/data';

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
          <Col span={4}>
            <FormItem
              label="服务评分"
              {...formItemLayout}
            >
              <Col span={11}>
                <FormItem>
                  {getFieldDecorator('c')(
                    <Input/>
                  )}
                </FormItem>
              </Col>
              <Col span={2}>
                <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                  -
                </span>
              </Col>
              <Col span={11}>
                <FormItem>
                  {getFieldDecorator('d')(
                    <Input/>
                  )}
                </FormItem>
              </Col>
            </FormItem>
          </Col>
          <Col span={5}>
            <FormItem label="回复状态" {...formItemLayout}>
              {getFieldDecorator('e')(
                <Select placeholder="全部" allowClear>
                  {
                    replyState.map(function (s, j) {
                      return <Option key={j} value={`r${j}`}>{s}</Option>;
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
const EvalDTable = Form.create()(MyForm1);
export default EvalDTable;
 