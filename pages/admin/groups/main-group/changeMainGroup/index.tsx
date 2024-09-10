import { useSelector } from 'react-redux';
import { RootState } from '../../../../../utils/reduxtoolkit/store/store';
import { Button_antd, Tabs_antd } from '../../../../../src/components/common/antd/antd';

import "./style.css"
import 'antd/dist/reset.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Keywords from '../../../../../src/components/keywords';
import Members from '../../../../../src/components/members';
import Infos from '../../../../../src/components/infos';
import { useEffect, useState } from 'react';



const ChangeMainGroup = () => {
  const mode = useSelector((state: RootState) => state.Mode.mode);
  const location = useLocation();
  const pathname = location.pathname.split("/")[location.pathname.split("/").length - 1];

  const [data1, setData1] = useState([]);

  const navigate = useNavigate();

  const items = [
    {
      key: "1",
      label: <div className='text-[24px] text-gray-600'>Maglumatlar</div>,
      children:
        <Infos data={data1} />
    },
    {
      key: "2",
      label: <div className='text-[24px] text-gray-600'>Agzalar</div>,
      children:
        <Members />
    },
    {
      key: "3",
      label: <div className='text-[24px] text-gray-600 '>Keywords</div>,
      children:
        <Keywords />
    }
  ]

  useEffect(() => {
    switch (pathname) {
      case "addMainGroup":
        setData1([]);
        break;
      default:
        setData1([]);
        break;
    }
  }, [])

  return (
    <div className={`flex flex-col
      `}>
      <header className='flex flex-row justify-between w-full h-16 px-16 pb-16 pt-8 border-b-orange-400 border-dashed border-b-[1px]'>
        <h1 className='text-[24px] text-orange-700 underline'>Ady: </h1>
        <div className=''>
          <Button_antd className={`btn_orange mr-4 ${mode == "dark" ? "dark_1 btn_orange_dark" : "white_1"}`}>Döret</Button_antd>
          <Button_antd className={`btn_orange ${mode == "dark" ? "dark_1 btn_orange_dark" : "white_1"}`}
            onClick={() => { navigate("/groups/maingroups") }}
          >Goý bolsun</Button_antd>
        </div>
      </header>
      <Tabs_antd items={items} className={`flex items-center mt-8 ${mode == "dark" ? "" : "text-gray-500"}`} />
    </div>
  )
}

export default ChangeMainGroup