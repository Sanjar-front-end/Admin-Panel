import React, { useEffect, useRef, useState } from 'react';
import type { InputRef } from 'antd';
import { Input, Tag, theme, Tooltip } from 'antd';
import { Input_antd } from '../common/antd/antd';
import { useSelector } from 'react-redux';
import { RootState } from '../../../utils/reduxtoolkit/store/store';

const tagInputStyle: React.CSSProperties = {
    width: 64,
    height: 22,
    marginInlineEnd: 8,
    verticalAlign: 'top',
};

const Keywords = () => {
    const mode = useSelector((state: RootState) => state.Mode.mode);

    const { token } = theme.useToken();
    const [tags, setTags] = useState<string[]>([]);
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [editInputIndex, setEditInputIndex] = useState(-1);
    const [editInputValue, setEditInputValue] = useState('');
    const inputRef = useRef<InputRef>(null);
    const editInputRef = useRef<InputRef>(null);

    useEffect(() => {
        if (inputVisible) {
            inputRef.current?.focus();
        }
    }, [inputVisible]);

    useEffect(() => {
        editInputRef.current?.focus();
    }, [editInputValue]);

    const handleClose = (removedTag: string) => {
        const newTags = tags.filter((tag) => tag !== removedTag);
        console.log(newTags);
        setTags(newTags);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleInputConfirm = () => {
        if (inputValue && !tags.includes(inputValue)) {
            setTags([...tags, inputValue]);
        }
        setInputVisible(false);
        setInputValue('');
    };

    const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditInputValue(e.target.value);
    };

    const handleEditInputConfirm = () => {
        const newTags = [...tags];
        newTags[editInputIndex] = editInputValue;
        setTags(newTags);
        setEditInputIndex(-1);
        setEditInputValue('');
    };

    const tagPlusStyle: React.CSSProperties = {
        height: 22,
        background: token.colorBgContainer,
        borderStyle: 'dashed',
    };

    return (
        <div className='flex flex-col mt-8 w-full h-full'>
            <div className='flex flex-row w-full items-center justify-center'>
                <Input_antd className='!w-[40%] mr-8 !h-8 flex bold-16'
                    placeholder='Açar sözler...'
                    ref={inputRef}
                    type="text"
                    size="small"
                    style={tagInputStyle}
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputConfirm}
                    onPressEnter={handleInputConfirm}
                />
                <Tag style={tagPlusStyle}
                    className={`btn_orange !w-20 hover:cursor-pointer !h-8 text-[24px] flex justify-center items-center 
              ${mode == "dark" ? "!dark_1 btn_orange_dark" : "!white_1"} !border-solid !border-orange-700 outline-none`}>
                    Goş
                </Tag>
            </div>
            <div className={`mt-16 px-8 h-full overflow-y-auto ${mode == "dark"
                ? "!scrollbar_added1" : "!scrollbar_added2"}`}>
                <div className={`block`}>
                    {tags.map<React.ReactNode>((tag, index) => {
                        if (editInputIndex === index) {
                            return (
                                <Input
                                    ref={editInputRef}
                                    key={tag}
                                    size="large"
                                    style={tagInputStyle}
                                    value={editInputValue}
                                    onChange={handleEditInputChange}
                                    onBlur={handleEditInputConfirm}
                                    onPressEnter={handleEditInputConfirm}
                                />
                            );
                        }
                        const isLongTag = tag.length > 20;
                        const tagElem = (
                            <Tag
                                key={tag}
                                closable={true}
                                className='h-9 text-[20px] mt-4 pt-1 bold-8'
                                style={{ userSelect: 'none' }}
                                onClose={() => handleClose(tag)}
                            >
                                <span
                                    onDoubleClick={(e) => {
                                        if (index !== 0) {
                                            setEditInputIndex(index);
                                            setEditInputValue(tag);
                                            e.preventDefault();
                                        }
                                    }}
                                >
                                    {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                                </span>
                            </Tag>
                        );
                        return isLongTag ? (
                            <Tooltip title={tag} key={tag}>
                                {tagElem}
                            </Tooltip>
                        ) : (
                            tagElem
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Keywords