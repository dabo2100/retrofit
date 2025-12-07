import { useState } from 'react';
import { FaEyeSlash } from 'react-icons/fa6';
import { IoEye } from 'react-icons/io5';
import img from '../../../../assets/IPACO SkyReady.png';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

export default function Login() {
  const inputIcon = 'absolute top-3 right-6 cursor-pointer z-50 size-4';

  const [showPasswordIndex, setShowPasswordIndex] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const handleLogin = (values) => {
    console.log(values);
  };

  return (
    <div className="w-full h-full overflow-auto flex justify-center">
      <div className="container animate__animated animate__fadeInDown p-4 md:p-0 flex justify-center items-start md:items-center">
        <Formik initialValues={{ email: '', password: '', rememberIndex: false }} onSubmit={handleLogin} validationSchema={validationSchema}>
          <Form className="w-full md:w-[450px] p-4 py-5 rounded-xl bg-main border-border shadow-lg shadow-slate-100/10 border flex flex-col gap-4 transition-all duration-1000">
            <img src={img} className="w-[200px] self-center" />
            <h2 className="font-semibold text-xl">Welcome Back, Please Login</h2>
            <div className="w-full flex relative flex-col gap-3">
              <Field name="email" className="input w-full bg-main text-md" type="text" placeholder="Enter your email" />
              <ErrorMessage name="email" component={'div'} className="text-red-500" />
            </div>
            <div className="w-full flex relative flex-col gap-3">
              <Field name="password" type={showPasswordIndex ? 'text' : 'password'} className="input w-full bg-main text-md" placeholder="Enter your password" />
              <ErrorMessage name="password" component={'div'} className="text-red-500" />
              {showPasswordIndex ? <FaEyeSlash onClick={() => setShowPasswordIndex(!showPasswordIndex)} className={inputIcon} /> : <IoEye onClick={() => setShowPasswordIndex(!showPasswordIndex)} className={inputIcon} />}
            </div>
            <div className="w-full flex items-center justify-between text-sm">
              <label className="flex gap-3 items-center cursor-pointer">
                <Field type="checkbox" name="rememberIndex" className="checkbox checkbox-primary" />
                Remember Me
              </label>
              <Link className="link link-hover" to={'/forget'}>
                Forget Password ?
              </Link>
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
