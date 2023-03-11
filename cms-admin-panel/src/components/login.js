import React from 'react'
import { Button, Form, Input, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { onValue } from 'firebase/database';
import { } from 'antd';

let firebase = require('./firebase');
let LogIn = () => {
  let checkAuth = (email, password) => {
    signInWithEmailAndPassword(firebase.auth, email.trim(), password)
      .then((userCredential) => {
        const user = userCredential.user;
        onValue(firebase.refData, (snapShot) => {
          if (snapShot.child("users").child(user.uid).val().role === 'admin') {
            location('/home')
            message.success("Log-in successful")
          } else {
            message.error('Account is not of admin')
          }
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        message.error(errorMessage)
      });
  }
  let location = useNavigate()
  let onFinish = (e) => {
    //e?
    checkAuth(e.username, e.password)
  }
  return <div className='login-body'>
    <div className="login-form">
      <Form
        name="normal_login"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <h1 className='heading'>C<span className='m' >M</span>S</h1>
        <Form.Item class="formitem"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your E-mail !',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="E-mail" />
        </Form.Item>
        <Form.Item class="formitem"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item >
          <Button id='login' type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  </div>
}
export default LogIn;