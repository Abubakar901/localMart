import { Button } from '@mui/material';
import React from 'react';

const Login = () => {
  return (
    <div>
        <h4>localMart</h4>

        <form>
            <h6>Login</h6>
            <label>Email:</label>
            <input />

            <lable>Password:</lable>
            <input />

            <Button>Login</Button>
        </form>
    </div>
  )
}

export default Login