import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Login = lazy(() => import('./features/auth/presentation/pages/Login'));
// const Register = lazy(() => import('./features/auth/presentation/pages/Register'));
// const Activate = lazy(() => import('./features/auth/presentation/pages/Activate'));
// const NotFound = lazy(() => import('./features/common/presentation/pages/NotFound'));

export default function App() {
  return (
    <div className="w-full h-dvh overflow-hidden bg-main text-white font-poppins">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/register" element={<Register />} />
            <Route path="/activate" element={<Activate />} /> */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}
