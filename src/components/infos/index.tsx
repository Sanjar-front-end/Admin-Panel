import { IoCodeWorkingOutline } from "react-icons/io5";
import { SiNamesilo, SiPrivatedivision } from "react-icons/si";
import { FaCode } from "react-icons/fa6";
import { MdOutlineLowPriority } from "react-icons/md";
import { TbCameraPlus } from "react-icons/tb";
import { AiOutlinePicture } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { RootState } from '../../../utils/reduxtoolkit/store/store';
import { Button_antd, Checkbox_antd, Input_antd, Select_antd, SelectProps_antd } from '../common/antd/antd';
import { useRef, useState } from "react";

const Infos = (data) => {
    const mode = useSelector((state: RootState) => state.Mode.mode);
    const [image, setImage] = useState<string | undefined>("");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleIconClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setImage(url);

            console.log('File selected:', file.name);
        }
    };

    const options: SelectProps_antd['options'] = [];

    return (
        <div className={`${mode == "dark" ? "text-white" : "text-gray-600 bold-16"} flex flex-col w-full mt-8`}>

            <div className={`flex flex-row px-16 gap-32`}>

                <div className='w-[50%] flex flex-row justify-between'>

                    <div className={`flex flex-row gap-2 items-center justify-center`}>
                        <IoCodeWorkingOutline className='size-[32px] pt-1' />
                        <label className={`bold-20`}>Aktiwlylyk:</label>
                    </div>

                    <div className='flex flex-row items-center justify-center gap-2'>
                        <Checkbox_antd className='pt-1' />
                        <p className='bold-20'>Aktiw</p>
                    </div>

                </div>

                <div className='w-[48%] flex flex-row'>
                    <div className={`flex flex-row gap-2 items-center justify-center mr-8`}>
                        <SiNamesilo className='size-[32px] pt-1' />
                        <label className={`bold-20`}>Ady:</label>
                    </div>
                    <Input_antd className="min-w-[120px]" />
                </div>

            </div>

            <div className={`flex flex-row px-16 gap-32 mt-16`}>

                <div className='w-[40%] flex flex-row'>
                    <div className={`flex flex-row gap-2 items-center justify-center mr-8`}>
                        <FaCode className='size-[32px] pt-1' />
                        <label className={`bold-20`}>Kody:</label>
                    </div>
                    <Input_antd className="min-w-[120px]" />
                </div>

                <div className='w-[56%] flex flex-row'>
                    <div className={`flex flex-row gap-2 items-center justify-center mr-8`}>
                        <MdOutlineLowPriority className='size-[32px] pt-1' />
                        <label className={`bold-20 w-[280px]`}>Görünmeginiň möhümliligi:</label>
                    </div>
                    <Input_antd type='number' className="min-w-[60px]" />
                </div>

            </div>

            <div className={`flex flex-row px-16 gap-16 mt-16 w-full`}>

                <div className={`flex flex-row gap-2 items-center justify-center`}>
                    <SiPrivatedivision className='size-[32px] min-w-[40px] pt-1' />
                    <label className={`bold-20`}>Bölümler:</label>
                </div>

                <div className="w-full flex flex-row items-center justify-center">
                    <Select_antd
                        className={`w-[80%] min-w-[160px] mr-2`}
                        mode="multiple"
                        allowClear
                        placeholder="Saýlaň..."
                        defaultValue={[]}
                        options={options}
                    />
                    <div className="relative info-icon">
                        <BsInfoCircle className="size-[24px] text-orange-500" />
                        <p className="tooltip">Eger-de bölüm saýlanmasa bu grupba ähli bölümlere degişli bolar</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row px-64 mt-16 w-full justify-between mb-4">

                <div className={`flex flex-row gap-2 items-center  mr-8`}>
                    <AiOutlinePicture className='size-[32px] pt-1' />
                    <label className={`bold-20 w-[280px]`}>Suraty:</label>
                </div>

                <div className="flex justify-center items-center px-8 py-16 border-dashed border-[1px] border-orange-600 min-w-[200px] min-h-[200px]">
                    <TbCameraPlus className={`size-[36px] text-orange-400 hover:cursor-pointer ${image && "hidden"}`}
                        onClick={handleIconClick}
                    />
                    {image && <img src={image} width={200} height={200}></img>}
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </div>

                <div className="flex flex-col justify-center gap-4">
                    <Button_antd className={`btn_orange ${mode == "dark" ? "dark_1 btn_orange_dark" : "white_1"} ml-4`}
                        onClick={handleIconClick}
                    >Üýtget</Button_antd>
                    <Button_antd className={`btn_orange ${mode == "dark" ? "dark_1 btn_orange_dark" : "white_1"} ml-4`}
                        onClick={() => { setImage(""); }}
                    >Poz</Button_antd>
                </div>

            </div>

        </div>
    )
}

export default Infos