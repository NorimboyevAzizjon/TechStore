import React from 'react';
import LoginModal from '../components/Auth/LoginModal';

const LoginPage = () => (
  <div style={{textAlign: 'center', marginTop: 60}}>
    <LoginModal isOpen={true} onClose={() => {}} onLogin={() => {}} />
  </div>
);

export default LoginPage;
