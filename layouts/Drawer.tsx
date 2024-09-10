import { MdOutlineCancel } from "react-icons/md";
import { Dispatch, SetStateAction } from 'react';

import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { handleMode } from '../utils/reduxtoolkit/reducers/ModeChanger'; 
import { RootState } from '../utils/reduxtoolkit/store/store'; 

type booleanType = {
    drawerCollapsed: boolean[];
    setDrawerCollapsed: Dispatch<SetStateAction<boolean[]>>;
}

const Drawer = ({ drawerCollapsed, setDrawerCollapsed }: booleanType) => {
    const dispatch = useDispatch();
    const mode = useSelector((state: RootState) => state.Mode.mode);

    return (
        <div className={drawerCollapsed[0] ? `fixed min-h-screen z-30 w-64 top-0 right-0 shadow-2xl ${mode == "dark" ? "dark_1" : "bg-white"}` : "hidden"}>
            <div className='absolute z-50 w-full h-20 flex justify-between flex-row items-center border-b-gray-10 border-b-[1px]'>
                <h4 className={`ml-4 font-[600] ${mode == "dark" ? "text-white" : ""}`}>Settings</h4>
                <MdOutlineCancel
                    className={`mr-4 text-gray-500 size-[24px] hover:cursor-pointer ${mode == "dark" ? "text-white" : ""}`}
                    onClick={() => { setDrawerCollapsed([false, false]); }}
                />
            </div>

            <div className='flex flex-col relative top-[110px] left-[20px]'>
                <label className={`relative ${mode == "dark" ? "text-white" : ""}`}>Mod</label>
                <div className='flex flex-row relative justify-between hover:cursor-pointer'>
                    <div
                        className='px-8 py-6 rounded-md border-gray-10 border-2 mt-4'
                        onClick={() => { 
                            dispatch(handleMode("light")); 
                            sessionStorage.setItem("mode", "light") 
                        }}
                    >
                        <MdOutlineLightMode className={`text-[24px] ${mode == "dark" ? "text-white" : ""}`} />
                    </div>
                    <div
                        className='px-8 py-6 rounded-md border-gray-10 border-2 mt-4 relative right-[60px]'
                        onClick={() => { 
                            dispatch(handleMode("dark")); 
                            sessionStorage.setItem("mode", "dark") 
                        }}
                    >
                        <MdOutlineDarkMode className={`text-[24px] ${mode == "dark" ? "text-white" : ""}`} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drawer