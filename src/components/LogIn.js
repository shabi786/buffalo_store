import React from "react";
import { useForm } from 'react-hook-form';

const LogIn = () => {
    const { register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    console.log(watch("email"))

    return (
        <div className="my-24 w-full flex justify-center">
            <form className="flex flex-col border border-gray-200 shadow-md  pt-3 pb-12 px-8 mt-8 w-1/3 items-center" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="font-semibold mb-8 text-orange-500 text-3xl">Sign In</h1>
                <div className="flex flex-col gap-1 w-full mb-4">
                    <label className="font-semibold text-slate-800" htmlFor="email">Email</label>
                    <input
                        className="border outline-none border-gray-500 focus:border-orange-400 py-1.5 pl-1.5 rounded-md"
                        type="text"
                        name="email"
                        placeholder="Enter Email address"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message: "Email is not valid"
                            }
                        })}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs pl-1.5">{errors.email.message}</p>
                    )}
                </div>
                <div className="flex flex-col  gap-1 w-full mb-4">
                    <label className="font-semibold text-slate-800" htmlFor="password">Password</label>
                    <input
                        className="border outline-none border-gray-500  focus:border-orange-400 py-1.5 pl-1.5 rounded-md"
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password should be atleast 6 characters"
                            }
                        })}
                    />
                    {errors.password && (
                        <p className="text-red-500 text-xs pl-1.5">{errors.password.message}</p>
                    )}
                </div>
                <div className="bg-orange-400 text-slate-800 font-medium rounded-md text-center py-1.5 w-full">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

export default LogIn