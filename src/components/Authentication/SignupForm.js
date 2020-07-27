import React from 'react';
import {connect} from 'react-redux'
import { LoadingOutlined } from '@ant-design/icons';
import {Form,Input,Button,Spin} from 'antd';

import * as action from '../../store/action/auth'

const SignupForm = React.memo(props=> {
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
 
 const onFinish = val => {
  console.log('Received values of form: ', val.username , val.email , val.password1 , val.password2);
  props.signup(val.username , val.email , val.password1 , val.password2);

   };

  return (
    <div>
     { props.loading ?
    <Spin indicator={antIcon} />
    :
	<Form name="register"onFinish={onFinish}>
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
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password1"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="password2"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password1') === value) {
                return Promise.resolve();
              }

              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

       <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
         </Button>
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
      signup : (username ,email, password1 , password2)=>dispatch(action.authSignup(username ,email, password1 , password2))
    }
}
export default connect (mapStateToProps,mapDispatchToProps) (SignupForm); 
