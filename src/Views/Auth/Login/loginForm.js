import { Button, Form, Input } from 'antd';
import React from 'react';
import { INPUT_PLACEHOLDER, INPUT_LABEL } from '../../../Common/Constants/StringConstants';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const Login = (props) => {

  const handleSubmit = () => {
    props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  const { getFieldDecorator } = props.form;

  return (
    <div className='login-container'>
      <div className='form-container'>
        <Form onSubmit={handleSubmit}>
          <Form.Item label={INPUT_LABEL.USER_NAME}>
            {getFieldDecorator('email', {
              rules: [
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            })(<Input placeholder={INPUT_PLACEHOLDER.USER_NAME} />)}
          </Form.Item>
          <Form.Item label={INPUT_LABEL.PASSWORD} hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                }
              ],
            })(<Input.Password  placeholder={INPUT_PLACEHOLDER.PASSWORD} />)}
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit" block>
              Register
          </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export const LoginForm = Form.create({ name: 'login' })(Login);
