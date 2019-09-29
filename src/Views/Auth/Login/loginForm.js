import { Button, Form, Input } from 'antd';
import React from 'react';
import { INPUT_PLACEHOLDER, INPUT_LABEL, VALIDATION_ERROR } from '../../../Common/Constants/StringConstants';
import { login } from './service';
import { Error } from '../../../Common/Components/Error';

class Login extends React.Component {
  /**
   *  Instead of using state or hooks, writing for validattion, 
   *  tried Antd's Form Decoratio which is similar to Reduxform.
   *   
   */
  handleLogin = async (payload) => {
    try {
      this.setFormValues('loading', true)
      await login(payload)
      this.setFormValues('loading', false);
      this.props.onLogin();
    } catch (error) {
      this.setFormValues('loading', false);
      this.setFormValues('error', error.message);
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.handleLogin(values)
      }
    });
  }

  setFormValues = (name, value) => {
    const payload = { [name]: value };
    this.props.form.setFieldsValue(payload);
  }

  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const loading = getFieldValue('loading');
    const serverError = getFieldValue('error');
    console.log('serverError', serverError)
    return (
      <div className='login-container'>
        <div className='form-container'>
          <div className='form-title'>
            <h2> Login </h2>
          </div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item label={INPUT_LABEL.USER_NAME}>
              {getFieldDecorator('user', {
                rules: [
                  {
                    required: true,
                    message: VALIDATION_ERROR.PASSWORD,
                  },
                ],
              })(
                <Input placeholder={INPUT_PLACEHOLDER.USER_NAME} />
              )}
            </Form.Item>
            <Form.Item label={INPUT_LABEL.PASSWORD} hasFeedback>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: VALIDATION_ERROR.PASSWORD,
                  }
                ],
              })(
                <Input.Password placeholder={INPUT_PLACEHOLDER.PASSWORD} />
              )}
            </Form.Item>
            <Form.Item >
              {getFieldDecorator('error', {
              })(
                serverError && <Error message={serverError} /> || <div />
              )}
            </Form.Item>
            <Form.Item >
              {getFieldDecorator('loading', {
              })(
                <Button type="primary" htmlType="submit" block loading={loading}>
                  Login
                </Button>
              )}
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export const LoginForm = Form.create({ name: 'login' })(Login);
