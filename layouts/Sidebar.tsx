"use client"

import { MENUITEMS } from '../src/components/constants/menuitems' 
import { RootState } from '../utils/reduxtoolkit/store/store' 
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineLogout } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { handleUpdown } from '../utils/reduxtoolkit/reducers/updown'; 
import clearLocalStorageButKeep from '../src/hooks/keeplocalstorage/keepValue'; 
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    const updown = useSelector((state: RootState) => state.Updown.updown);
    const dispatch = useDispatch();
    const collapsed = useSelector((state: RootState) => state.Collapsed1.collapsed1);
    const mode = useSelector((state: RootState) => state.Mode.mode);

    return (
        <menu className={!collapsed ?
            `flex top-0 sidebar w-[280px] ${mode == 'dark' ? "dark_1 sidebar2" : "white_1"} min-h-screen p-0 pb-[10px] mt-[-70px]` :
            `flex top-0 sidebar w-[80px] ${mode == 'dark' ? "dark_1 sidebar2" : "white_1"} min-h-screen p-0 mt-[-70px] pb-[10px]`}
        >
            <div className={!collapsed ? `flex flex-row fixed sidebar py-4 pl-3 w-[280px] z-10 ${mode == 'dark' ? "dark_1 sidebar2" : "white_1"}` :
                `flex sidebar flex-row fixed h-[70px] w-[80px] py-4 pl-4 z-10 ${mode == 'dark' ? "dark_1 sidebar2" : "white_1"}`
            }>
                <img src='/admin.png' width={collapsed ? 36 : 44} height={collapsed ? 36 : 42}></img>
                <h1 className={!collapsed ? 'text-[30px] pl-2 text-orange-700' : "hidden"}>Timar Admin</h1>
            </div>
            <div className={`flex flex-col pb-4 w-full heighted mt-[85px] overflow-y-auto ${mode == "dark"
                ? "!scrollbar_added1" : "!scrollbar_added2"}`}
            >
                <div className={!collapsed ?
                    'flex flex-col items-center gap-4 w-full' :
                    "flex flex-col justify-center mt-2 w-full gap-4"}>
                    {MENUITEMS.map((item) => {
                        return (
                            (
                                <div key={item.key} className='flex flex-col items-center max-w-[300px] w-full cursor-pointer'>
                                    <div className={!collapsed && !item.clicked ? `flex py-2 w-full pl-[26px] items-center hover-div
                                    ${item.clicked ? "clicked" : "hovered"}`
                                        : `flex py-2 w-full pl-[24px] items-center ${item.clicked && !item.submenu ? "clicked" : "hovered"}`}
                                        onClick={() => {
                                            if (!item.submenu) {
                                                navigate(item.path ?? "");
                                                clearLocalStorageButKeep(["collapsed"]);
                                                localStorage.setItem(item.key, "true");
                                                for (let k = 1; k < 7; k++) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                                for (let i = 0; i < MENUITEMS.length; i++) {
                                                    MENUITEMS[i].clicked = false;
                                                    if (MENUITEMS[i].submenu) {
                                                        for (let m = 0; m < (MENUITEMS[i].submenuItems?.length ?? 10); m++) {
                                                            MENUITEMS[i].submenuItems[m].clicked = false;
                                                        }
                                                    }
                                                }
                                                item.clicked = true;
                                            }
                                        }}
                                    >
                                        <div
                                            key={item.key}
                                            className='flex flex-row items-center justify-between w-full'
                                            onClick={() => {
                                                !item.submenu && navigate(item.path ?? "/notfoundpage");
                                                switch (item.title) {
                                                    case "Grupbalar":
                                                        dispatch(handleUpdown({ num: 1, updownChosen: !updown.updown1 }));
                                                        localStorage.setItem("updown1", (!updown.updown1).toString());
                                                        break;
                                                    case "Bannerlar":
                                                        localStorage.setItem("updown2", (!updown.updown2).toString());
                                                        dispatch(handleUpdown({ num: 2, updownChosen: !updown.updown2 }));
                                                        break;
                                                    case "Müşderi Maglumaty":
                                                        localStorage.setItem("updown3", (!updown.updown3).toString());
                                                        dispatch(handleUpdown({ num: 3, updownChosen: !updown.updown3 }));
                                                        break;
                                                    case "CRM":
                                                        localStorage.setItem("updown4", (!updown.updown4).toString());
                                                        dispatch(handleUpdown({ num: 4, updownChosen: !updown.updown4 }));
                                                        break;
                                                    case "Sergi":
                                                        localStorage.setItem("updown5", (!updown.updown5).toString());
                                                        dispatch(handleUpdown({ num: 5, updownChosen: !updown.updown5 }));
                                                        break;
                                                    case "Sinhronlar":
                                                        localStorage.setItem("updown6", (!updown.updown6).toString());
                                                        dispatch(handleUpdown({ num: 6, updownChosen: !updown.updown6 }));
                                                        break;
                                                }
                                            }}
                                        >
                                            <div className='flex flex-row items-center w-full'>
                                                {item.icon && item.icon}
                                                <li key={item.key} className={!collapsed
                                                    ? `text-[18px] cursor-pointer ${mode == "dark" && !item.clicked ? "text-white hover-text"
                                                        : "text-gray-500"} ${item.clicked ? " text-orange-700" : ""}`
                                                    : `hidden ${mode == "dark" ? "text-white" : "text-gray-500"}`}>{item.title}</li>
                                            </div>
                                            <div>
                                                {item.submenu && <BsChevronDown
                                                    className={!collapsed ? `mr-4 ${item.clicked ? "text-orange-700" : "text-gray-500"}
                                                        ${updown.updown1 && item.title == "Grupbalar" && "rotate-180"}
                                                        ${updown.updown2 && item.title == "Bannerlar" && "rotate-180"}                                         
                                                        ${updown.updown3 && item.title == "Müşderi Maglumaty" && "rotate-180"}
                                                        ${updown.updown4 && item.title == "CRM" && "rotate-180"}
                                                        ${updown.updown5 && item.title == "Sergi" && "rotate-180"}
                                                        ${updown.updown6 && item.title == "Sinhronlar" && "rotate-180"}` : "hidden"}
                                                />}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={!collapsed ? 'w-full' : "hidden"}>
                                        {(item.title == "Grupbalar") && updown.updown1 &&
                                            <div className='flex flex-col w-full'>
                                                {item.submenuItems?.map((item) => (
                                                    <li
                                                        key={item.key}
                                                        className={`w-full ${item.clicked ? "clicked text-orange-700" : "hovered hover:text-black"} pl-[50px] py-[10px] 
                                                        text-gray-500 ${mode == "dark" && !item.clicked ? "text-white" : "text-gray-500"}`}
                                                        onClick={() => {
                                                            navigate(item.path);
                                                            item.clicked = true;
                                                            clearLocalStorageButKeep(["collapsed", "updown1"]);
                                                            localStorage.setItem(item.key, "true");
                                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                                MENUITEMS[i].clicked = false;
                                                                if (MENUITEMS[i].submenuItems) {
                                                                    for (let j = 0; j < MENUITEMS[i].submenuItems.length; j++) {
                                                                        if (MENUITEMS[i].submenuItems[j].title != item.title) {
                                                                            MENUITEMS[i].submenuItems[j].clicked = false;
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                            MENUITEMS[0].clicked = true;
                                                            for (let k = 1; k < 7; k++) {
                                                                if (k != 1) {
                                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                                }
                                                            }
                                                        }}
                                                    >{item.title}</li>
                                                ))}
                                            </div>
                                        }
                                    </div>
                                    <div className={!collapsed ? 'w-full' : "hidden"}>
                                        {(item.title == "Bannerlar") && updown.updown2 &&
                                            <div className='flex flex-col w-full'>
                                                {item.submenuItems?.map((item) => (
                                                    <li
                                                        key={item.key}
                                                        className={`w-full ${item.clicked ? "clicked text-orange-700" : "hovered hover:text-black"} pl-[50px] py-[10px] 
                                                    text-gray-500 ${mode == "dark" && !item.clicked ? "text-white" : "text-gray-500"}`}
                                                        onClick={() => {
                                                            navigate(item.path);
                                                            item.clicked = true;
                                                            clearLocalStorageButKeep(["collapsed", "updown2"]);
                                                            localStorage.setItem(item.key, "true");
                                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                                MENUITEMS[i].clicked = false;
                                                                if (MENUITEMS[i].submenuItems) {
                                                                    for (let j = 0; j < MENUITEMS[i].submenuItems.length; j++) {
                                                                        if (MENUITEMS[i].submenuItems[j].title != item.title) {
                                                                            MENUITEMS[i].submenuItems[j].clicked = false;
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                            MENUITEMS[5].clicked = true;
                                                            for (let k = 1; k < 7; k++) {
                                                                if (k != 2) {
                                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                                }
                                                            }
                                                        }}
                                                    >{item.title}</li>
                                                ))}
                                            </div>
                                        }
                                    </div>
                                    <div className={!collapsed ? 'w-full' : "hidden"}>
                                        {(item.title == "Müşderi Maglumaty") && updown.updown3 &&
                                            <div className='flex flex-col w-full'>
                                                {item.submenuItems?.map((item) => (
                                                    <li
                                                        key={item.key}
                                                        className={`w-full ${item.clicked ? "clicked text-orange-700" : "hovered hover:text-black"} pl-[50px] py-[10px] 
                                                    text-gray-500 ${mode == "dark" && !item.clicked ? "text-white" : "text-gray-500"}`}
                                                        onClick={() => {
                                                            navigate(item.path);
                                                            item.clicked = true;
                                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                                            localStorage.setItem(item.key, "true");
                                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                                MENUITEMS[i].clicked = false;
                                                                if (MENUITEMS[i].submenuItems) {
                                                                    for (let j = 0; j < MENUITEMS[i].submenuItems.length; j++) {
                                                                        if (MENUITEMS[i].submenuItems[j].title != item.title) {
                                                                            MENUITEMS[i].submenuItems[j].clicked = false;
                                                                        }
                                                                    }
                                                                };
                                                            }
                                                            MENUITEMS[12].clicked = true
                                                            for (let k = 1; k < 7; k++) {
                                                                if (k != 3) {
                                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                                }
                                                            }
                                                        }}
                                                    >{item.title}</li>
                                                ))}
                                            </div>
                                        }
                                    </div>
                                    <div className={!collapsed ? 'w-full' : "hidden"}>
                                        {(item.title == "CRM") && updown.updown4 &&
                                            <div className='flex flex-col w-full'>
                                                {item.submenuItems?.map((item) => (
                                                    <li
                                                        key={item.key}
                                                        className={`w-full ${item.clicked ? "clicked text-orange-700" : "hovered hover:text-black"} pl-[50px] py-[10px] 
                                                   text-gray-500 ${mode == "dark" && !item.clicked ? "text-white" : "text-gray-500"}`}
                                                        onClick={() => {
                                                            navigate(item.path);
                                                            item.clicked = true;
                                                            clearLocalStorageButKeep(["collapsed", "updown4"]);
                                                            localStorage.setItem(item.key, "true");
                                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                                MENUITEMS[i].clicked = false;
                                                                if (MENUITEMS[i].submenuItems) {
                                                                    for (let j = 0; j < MENUITEMS[i].submenuItems.length; j++) {
                                                                        if (MENUITEMS[i].submenuItems[j].title != item.title) {
                                                                            MENUITEMS[i].submenuItems[j].clicked = false;
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                            MENUITEMS[13].clicked = true;
                                                            for (let k = 1; k < 7; k++) {
                                                                if (k != 4) {
                                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                                }
                                                            }
                                                        }}
                                                    >{item.title}</li>
                                                ))}
                                            </div>
                                        }
                                    </div>
                                    <div className={!collapsed ? 'w-full' : "hidden"}>
                                        {(item.title == "Sergi") && updown.updown5 &&
                                            <div className='flex flex-col w-full'>
                                                {item.submenuItems?.map((item) => (
                                                    <li
                                                        key={item.key}
                                                        className={`w-full ${item.clicked ? "clicked text-orange-700" : "hovered hover:text-black"} pl-[50px] py-[10px] 
                                                    text-gray-500 ${mode == "dark" && !item.clicked ? "text-white" : "text-gray-500"}`}
                                                        onClick={() => {
                                                            navigate(item.path);
                                                            item.clicked = true;
                                                            clearLocalStorageButKeep(["collapsed", "updown5"]);
                                                            localStorage.setItem(item.key, "true");
                                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                                MENUITEMS[i].clicked = false;
                                                                if (MENUITEMS[i].submenuItems) {
                                                                    for (let j = 0; j < MENUITEMS[i].submenuItems.length; j++) {
                                                                        if (MENUITEMS[i].submenuItems[j].title != item.title) {
                                                                            MENUITEMS[i].submenuItems[j].clicked = false;
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                            MENUITEMS[16].clicked = true;
                                                            for (let k = 1; k < 7; k++) {
                                                                if (k != 5) {
                                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                                }
                                                            }
                                                        }}
                                                    >{item.title}</li>
                                                ))}
                                            </div>
                                        }
                                    </div>
                                    <div className={!collapsed ? 'w-full' : "hidden"}>
                                        {(item.title == "Sinhronlar") && updown.updown6 &&
                                            <div className='flex flex-col w-full'>
                                                {item.submenuItems?.map((item) => (
                                                    <li
                                                        key={item.key}
                                                        className={`w-full ${item.clicked ? "clicked text-orange-700" : "hovered hover:text-black"} pl-[50px] py-[10px] 
                                                    text-gray-500 ${mode == "dark" && !item.clicked ? "text-white" : "text-gray-500"}`}
                                                        onClick={() => {
                                                            navigate(item.path);
                                                            item.clicked = true;
                                                            clearLocalStorageButKeep(["collapsed", "updown6"]);
                                                            localStorage.setItem(item.key, "true");
                                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                                MENUITEMS[i].clicked = false;
                                                                if (MENUITEMS[i].submenuItems) {
                                                                    for (let j = 0; j < MENUITEMS[i].submenuItems.length; j++) {
                                                                        if (MENUITEMS[i].submenuItems[j].title != item.title) {
                                                                            MENUITEMS[i].submenuItems[j].clicked = false;
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                            MENUITEMS[17].clicked = true;
                                                            for (let k = 1; k < 7; k++) {
                                                                if (k != 6) {
                                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                                }
                                                            }
                                                        }}
                                                    >{item.title}</li>
                                                ))}
                                            </div>
                                        }
                                    </div>
                                </div>
                            )
                        )
                    })}

                    <div className={!collapsed ? 'flex flex-row items-center w-full mt-4 ml-0 pl-[26px]' : 'flex flex-row items-center w-full mt-4 ml-0 pl-[18px]'}>
                        <AiOutlineLogout className={collapsed ?
                            'rotate-180 text-[20px] cursor-pointer text-gray-500 ml-[5px]' :
                            "text-[18px] mr-[18px] cursor-pointer text-gray-500 rotate-180 mt-[3px]"}
                            onClick={() => { navigate("/"); }} />
                        <li
                            className={!collapsed ? `text-[18px] cursor-pointer justify-center text-gray-500 ${mode == "dark" ? "text-white" : "text-gray-500"}`
                                : `hidden ${mode == "dark" ? "text-white" : "text-gray-500"}`}
                            onClick={() => { navigate("/"); }}
                        >Log Out</li>
                    </div>
                </div>
            </div>
        </menu>
    )
}

export default Sidebar