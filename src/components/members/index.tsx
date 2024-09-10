import React from 'react'
import { Input_antd } from '../common/antd/antd'
import { useSelector } from 'react-redux';
import { RootState } from '../../../utils/reduxtoolkit/store/store';

const Members = () => {
    const mode = useSelector((state: RootState) => state.Mode.mode);

    return (
        <div className={`flex flex-col gap-4 `}>
            <div className='flex justify-center gap-16'>
                <p className={`${mode == 'dark' ? "text-blue-900" : "text-orange-800"} bold-32`}>Birligi</p>
                <p className={`${mode == 'dark' ? "text-blue-900" : "text-orange-800"} bold-32`}>Köplügi</p>
            </div>
            <div className='flex flex-row gap-8 px-16 py-4'>
                <h1 className={`${mode == "dark" ? "text-white" : "text-gray-800"} bold-20`}>Türkmen: </h1>
                <Input_antd className='bold-16'></Input_antd>
                <Input_antd className='bold-16'></Input_antd>
            </div>
            <div className='flex flex-row gap-8 px-16 py-4'>
                <h1 className={`${mode == "dark" ? "text-white" : "text-gray-800"} bold-20`}>Rus: </h1>
                <Input_antd className='bold-16 ml-12'></Input_antd>
                <Input_antd className='bold-16'></Input_antd>
            </div>
        </div>
    )
}

export default Members