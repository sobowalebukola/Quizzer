import React from 'react';

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

const AccountPage = () => (
  <div>
    <h1>Account Page</h1>
    <PasswordForgetForm />
    <p>
    Do you wish to change your password?
    <PasswordChangeForm />
    </p>
  </div>
);

export default AccountPage;