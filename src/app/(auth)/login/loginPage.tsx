
import React, { useState } from 'react';
import Link from 'next/link';
import DefaultButton from '../component/button/buttons';
import DefaultInput from '../component/input/input';
import { useFormik } from 'formik';
import axios from 'axios';
import { loginValidation } from '../component/utils/validation';
import PasswordInput from '../component/input/passwordInput';
import { useRouter } from "next/navigation";
import { useDispatch } from 'react-redux'
import { login } from '@/store/slice/userSlice';
import LoadingSpinner from '../component/spinners/spinner';

const LoginPage = () => {
    const dispatch = useDispatch()
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState();
    const initialValues = {
        email: '',
        password: '',
    };
    const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
        useFormik({
            initialValues: initialValues,
            validationSchema: loginValidation,
            onSubmit: (values) => {
                setIsLoading(true);
                dispatch(
                    login({
                        email: values.email,
                        password: values.password,
                    }))
                axios
                    .post('https://chm-api.synswift.com/api/v1/users/login', {
                        email: values.email,
                        password: values.password,
                    })
                    .then(function (response) {
                        if (response.status === 200) {
                            let userToken = response.data.response.token;
                            console.log(userToken)
                            localStorage.setItem("UserToken", userToken);
                            router.push('/');
                            console.log("success");
                            // setIsLoading(false)
                        } else {
                            setData(response.data.msg)
                            setIsLoading(false);
                        }
                    })
                    .catch(function (error) {
                    });
            },
        });
    return (
        <div className="flex h-screen">
            <div className="m-auto">
                <form className="mx-4" onSubmit={handleSubmit}>
                    <div className="mb-6 text-center font-medium">
                        <div className="mb-2 text-2xl">
                            <h1>Welcome Back</h1>
                        </div>
                        <div className="text-xs w-96">
                            <p>Navigating the Professional World with Precision.</p>
                        </div>
                    </div>
                    <DefaultInput value={values.email} change={handleChange} blur={handleBlur} type="email" name="email" title="Email" placeHolder="Enter Email" />
                    {errors.email && touched.email ? (<p className="text-red-400 text-xs">{errors.email}</p>) : null}
                    <PasswordInput value={values.password} change={handleChange} blur={handleBlur} name="password" title="Password" placeHolder="Enter Password" />
                    {errors.password && touched.password ? (<p className="text-red-400 text-xs">{errors.password}</p>) : null}
                    {data ? (<span className="text-red-700 text-xs">Error: {data}</span>) : null}
                    <div className="block mb-2 text-sm hover:text-red-700 text-right mx-4">
                        <Link href="">
                            <p>Forget Password?</p>
                        </Link>
                    </div>
                    <DefaultButton name="Login" wid="w-96" small="" loading={isLoading} />
                    {/* <LoadingSpinner /> */}
                    {isLoading ? <LoadingSpinner /> : ""}
                </form>
            </div>
        </div>
    );
};
export default LoginPage;