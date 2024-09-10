import React, { useEffect, useState } from 'react'
import { message_antd, ref_antd } from './common/antd/antd';
import { FaUser } from "react-icons/fa";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import showMessage from '../hooks/showmessage/showMessage';
import { useDispatch } from 'react-redux';
import { handleMode } from '../../utils/reduxtoolkit/reducers/ModeChanger';
import { AxiosInstance as axios } from '../../utils/axios/axios';

const FormComponent = () => {
    const navigate = useNavigate();
    const userNameRef = React.createRef<ref_antd>();
    const passwordRef = React.createRef<ref_antd>();
    const dispatch = useDispatch();

    const [messageApi, contextHolder] = message_antd.useMessage();

    const [visible, setVisible] = useState<boolean>(false);

    const [bool, setBool] = useState<boolean>(true);

    const [notFilled1, setNotFilled1] = useState<boolean>(false);
    const [notFilled2, setNotFilled2] = useState<boolean>(false);
    const [inp_1, setInp_1] = useState<string>("");
    const [inp_2, setInp_2] = useState<string>("");

    const formSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (inp_1.trim() == "" && inp_2.trim() == "") {
            userNameRef.current?.focus();
            setNotFilled1(true);
            setNotFilled2(true);
        } else if (inp_2.trim() == "") {
            passwordRef.current?.focus();
            setNotFilled2(true);
        } else if (inp_1.trim() == "") {
            setNotFilled1(true);
        } else {
            if (navigator.geolocation) {
                navigate("/adminPage")
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    await axios.post("/employees/login", {
                        "userName": inp_1,
                        "password": inp_2,
                        "longitude": longitude,
                        "latitude": latitude,
                        "program": "web"
                    }).then((res) => {
                        bool && showMessage(messageApi, { type: "success", content: "Giriş üstünlikli tamamlandy!", duration: 2 });
                        setBool(false);
                        sessionStorage.setItem("token", res.data.token);
                        setTimeout(() => {
                            navigate("/adminPage");
                        }, 3000)
                    }).catch((err) => {
                        console.log(err)
                        if (err.message == "Request failed with status code 404") {
                            bool && showMessage(messageApi, { type: "error", content: "Ulanyjy ady ady ýa-da açar sözi ýalňyş!", duration: 2 });
                            setBool(false);
                            setTimeout(() => {
                                setBool(true);
                            }, 2000)
                        }
                    })
                })
            }
        }
    }

    useEffect(() => {
        userNameRef.current?.focus();
        localStorage.clear();
        sessionStorage.setItem("mode", "dark");
        dispatch(handleMode("dark"));
        sessionStorage.removeItem("token");
    }, [])

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-200">
            {contextHolder}
            <form className="bg-white py-12 px-6 rounded-md shadow-md w-full max-w-sm">
                <FaUser className='relative top-[38px] left-[90px] size-[30px] text-gray-500' />
                <h2 className="text-4xl text-center font-bold mb-4 items-center text-blue-900">Giriş</h2>
                <div className="mb-4">
                    <label className="block text-gray-500">Ulanyjy ady</label>
                    <input autoComplete='off' className={`w-full focus:border-blue-500 outline-none border-gray-300 px-3 py-2 border rounded ${notFilled1 && "border-red-300 focus:border-red-300"}`}
                        type="text"
                        id="email"
                        value={inp_1}
                        ref={userNameRef}
                        onChange={(e) => {
                            setInp_1(e.target.value);
                            if (e.target.value != "") {
                                setNotFilled1(false);
                            }
                        }} />
                    {notFilled1 && <p className='regular-16 text-red-400'>Please enter a valid username!</p>}
                </div>
                <div className="relative mb-4">
                    <label className="block text-gray-500">Açar sözi</label>
                    <input className={`w-full focus:border-blue-500 outline-none border-gray-300 px-3 py-2 border rounded ${notFilled2 && "border-red-300 focus:border-red-300"}`}
                        type={visible ? "text" : "password"}
                        id="password"
                        value={inp_2}
                        ref={passwordRef}
                        onChange={(e) => {
                            setInp_2(e.target.value);
                            if (e.target.value != "") {
                                setNotFilled2(false);
                            }
                        }} />
                    {!visible ? <FaRegEyeSlash
                        className='absolute top-8 size-[24px] right-[14px] text-gray-500 hover:cursor-pointer'
                        onClick={() => { setVisible(!visible); }}
                    /> : <FaRegEye
                        className='absolute top-8 size-[24px] right-[14px] text-gray-500 hover:cursor-pointer'
                        onClick={() => { setVisible(!visible); }}
                    />}
                    {notFilled2 && <p className='regular-16 text-red-400'>Please enter a valid password!</p>}
                </div>
                <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700" type="submit"
                    onClick={(e) => {
                        localStorage
                        formSubmit(e);
                    }}>Giriş</button>
            </form>
        </div>
    )
}

export default FormComponent