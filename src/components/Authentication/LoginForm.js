import React from 'react';
import { Form, Input, Button,Spin } from 'antd';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import { LoadingOutlined } from '@ant-design/icons';
import * as action from '../../store/action/auth'





const LoginForm = React.memo(props=> {

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const onFinish = (values) => {
    console.log('Success:', values.username , values.password);
    props.login(values.username , values.password)
    props.history.push('/')
  };
 
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

   return (
  <div>
  { props.loading ?
    <Spin indicator={antIcon} />
    :
      <Form
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      initialValues={{
        remember: true,

      }}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Link to='/signup'>   singup </Link>
      </Form.Item>

    </Form>
  }
  </div>
  );

})

const mapStateToProps  = state  => {
  return {
    loading : state.auth.loading
  }
}

const mapDispatchToProps = dispatch => { 
    return {
      login : (username , password) => dispatch(action.authLogin(username,password))
    }
}
export default connect (mapStateToProps , mapDispatchToProps) (LoginForm); 
