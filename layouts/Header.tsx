"use client"

import { handleCollapsed1 } from '../utils/reduxtoolkit/reducers/Collapsed1'; 
import { RootState } from '../utils/reduxtoolkit/store/store'; 
import { useState } from 'react'
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';

import { IoSettings } from "react-icons/io5";
import Drawer from './Drawer';
import BreadcrumbComponent from '../src/components/breadcrumb'; 


const Header = () => {
  const dispatch = useDispatch();

  const mode = useSelector((state: RootState) => state.Mode.mode);
  const collapsed = useSelector((state: RootState) => state.Collapsed1.collapsed1);
  const [drawerCollapsed, setDrawerCollapsed] = useState<boolean[]>([false, false]);

  return (
    <header className={!collapsed ?
      `flex flex-row w-[100% - 280px] ml-[280px] items-center min-h-16 header border-b-[1px] border-black 
      ${mode == 'dark' ? "dark_1 header2" : "white_1"} z-20` :
      `flex flex-row w-[100% - 100px] ml-[80px] items-center min-h-16 header border-b-[1px] z-20
      ${mode == 'dark' ? "dark_1 header2" : "white_1"}`}    >
      <div className='relative w-[100% -280px]'>
        {!collapsed ?
          <AiOutlineMenuFold
            className={`relative size-[22px] text-gray-500 top-[50%] left-[-12px] whitespace-nowrap 
              bg-white z-30 ${mode == 'dark' ? "dark_1 text-white" : "white_1"}`}
            onClick={() => {
              console.log(collapsed)
              dispatch(handleCollapsed1(!collapsed));
              localStorage.setItem("collapsed", (collapsed).toString());
            }}
          /> :
          <AiOutlineMenuUnfold
            className={`relative size-[22px] text-gray-500 top-[50%] left-[-12px] whitespace-nowrap 
            bg-white z-30 ${mode == 'dark' ? "dark_1 text-white" : "white_1"}`}
            onClick={() => {
              dispatch(handleCollapsed1(!collapsed));
              localStorage.setItem("collapsed", (collapsed).toString());
            }}
          />}
      </div>
      <div className='flex flex-row'>
        <BreadcrumbComponent />
      </div>
      <div className='absolute right-8 hover:rounded-[50%] hover:bg-gray-10 px-2 py-2 '>
        <IoSettings
          className='text-gray-500 z-100 size-6 spin-animation'
          onClick={() => {
            setDrawerCollapsed([true, true]);
          }}
        />
      </div>
      <div className='w-full'>
        <Drawer drawerCollapsed={drawerCollapsed} setDrawerCollapsed={setDrawerCollapsed} />
      </div>
    </header>
  )
}

export default Header