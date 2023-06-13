import Layout from 'components/Layout/Layout';

import { HomePage } from 'pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import Login from 'pages/Login/Login';
import SignUp from 'pages/SignUp/SignUp';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
      </Route>
    </Routes>
  );
}
