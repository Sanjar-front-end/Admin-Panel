import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import {
    useLocation,
    useNavigate
} from 'react-router-dom';

import "./style.css"
import { handleUpdown } from '../../../utils/reduxtoolkit/reducers/updown';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../utils/reduxtoolkit/store/store';
import { MENUITEMS } from '../constants/menuitems';
import clearLocalStorageButKeep from '../../hooks/keeplocalstorage/keepValue';

interface itemsType {
    key: string;
    label: string | Element | JSX.Element;
}

interface ItemsType {
    href?: string;
    title: string | Element | JSX.Element;
    menu?: { items: itemsType[] }
}

interface SubmenuItem {
    title: string;
    clicked: boolean;
}

interface MenuItem {
    clicked: boolean;
    submenuItems: SubmenuItem[]; 
}

export default function BreadcrumbComponent() {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const arr = location.pathname.split("/");

    const mode = useSelector((state: RootState) => state.Mode.mode);

    const items: ItemsType[] = [{
        href: "/adminPage",
        title: <HomeOutlined className={`${mode == "dark" ? "dark_2" : ""}`} />
    }
    ]

    if (arr.length == 2) {
        switch (arr[1]) {
            case "products":
                items.push({ title: <div className={`${mode == "dark" ? "dark_2" : ""}`}>Harytlar</div> })
                break;
            case "audios":
                items.push({ title: <div className={`${mode == "dark" ? "dark_2" : ""}`}>Seslenmeler</div> })
                break;
            case "brands":
                items.push({ title: <div className={`${mode == "dark" ? "dark_2" : ""}`}>Brendler</div> })
                break;
            case "units":
                items.push({ title: <div className={`${mode == "dark" ? "dark_2" : ""}`}>Birimler</div> })
                break;
            case "smartSections":
                items.push({ title: <div className={`${mode == "dark" ? "dark_2" : ""}`}>Akylly Bölümler</div> })
                break;
            case "notifications":
                items.push({ title: <div className={`${mode == "dark" ? "dark_2" : ""}`}>Habarnamalar</div> })
                break;
            case "orders":
                items.push({ title: <div className={`${mode == "dark" ? "dark_2" : ""}`}>Zakazlar</div> })
                break;
            case "promocodes":
                items.push({ title: <div className={`${mode == "dark" ? "dark_2" : ""}`}>Promokodlar</div> })
                break;
            case "feedbacks":
                items.push({ title: <div className={`${mode == "dark" ? "dark_2" : ""}`}>Teswirler</div> })
                break;
            case "divisions":
                items.push({ title: <div className={`${mode == "dark" ? "dark_2" : ""}`}>Bölümler</div> })
                break;
            case "employees":
                items.push({ title: <div className={`${mode == "dark" ? "dark_2" : ""}`}>Işgärler</div> })
                break;
            case "roles":
                items.push({ title: <div className={`${mode == "dark" ? "dark_2" : ""}`}>Rollar</div> })
                break;
            case "scalingSystems":
                items.push({ title: <div className={`${mode == "dark" ? "dark_2" : ""}`}>Terazi Sistemi</div> })
                break;
            case "qrApp":
                items.push({ title: <div className={`${mode == "dark" ? "dark_2" : ""}`}>Programmalar</div> })
                break;
            case "settings":
                items.push({ title: <div className={`${mode == "dark" ? "dark_2" : ""}`}>Settings</div> })
                break;
            case "carousel":
                items.push({
                    title: <div className={`hover:cursor-pointer hover:hovered_clicked px-1 flex flex-row ${mode == "dark" ? "" : "text-gray-500"}`}>Bannerlar</div>,
                    menu: {
                        items: [
                            {
                                key: "1",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/carousel");
                                            (MENUITEMS[5] as MenuItem).submenuItems[0].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown2"]);
                                            localStorage.setItem("9", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                MENUITEMS[i].clicked = false;
                                                if (MENUITEMS[i].submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Karusel Banner") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[5] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 2) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >Karusel Banner</div>
                                )
                            },
                            {
                                key: "2",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/aside");
                                            (MENUITEMS[5] as MenuItem).submenuItems[1].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown2"]);
                                            localStorage.setItem("10", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Gapdal Banner") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[5] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 2) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >Gapdal Banner</div>)
                            },
                            {
                                key: "3",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/popup");
                                            (MENUITEMS[5] as MenuItem).submenuItems[2].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown2"]);
                                            localStorage.setItem("11", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Açylýan Banner") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[5] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 2) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >Açylýan Banner</div>)
                            }
                        ]
                    }
                },
                    { title: <div className={`${mode == "dark" ? "dark_2" : ""}`}>Karusel Banner</div> })
                break;
            case "aside":
                items.push({
                    title: <div className={`hover:cursor-pointer hover:hovered_clicked px-1 flex flex-row ${mode == "dark" ? "" : "text-gray-500"}`}>Bannerlar</div>,
                    menu: {
                        items: [
                            {
                                key: "1",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/carousel");
                                            (MENUITEMS[5] as MenuItem).submenuItems[0].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown2"]);
                                            localStorage.setItem("9", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Karusel Banner") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[5] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 2) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >Karusel Banner</div>
                                )
                            },
                            {
                                key: "2",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/aside");
                                            (MENUITEMS[5] as MenuItem).submenuItems[1].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown2"]);
                                            localStorage.setItem("10", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Gapdal Banner") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[5] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 2) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >Gapdal Banner</div>)
                            },
                            {
                                key: "3",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/popup");
                                            (MENUITEMS[5] as MenuItem).submenuItems[2].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown2"]);
                                            localStorage.setItem("11", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Açylýan Banner") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[5] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 2) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >Açylýan Banner</div>)
                            }
                        ]
                    }
                },
                    { title: <div className={`${mode == "dark" ? "dark_2" : ""}`}>Gapdal Banner</div> })
                break;
            case "popup":
                items.push({
                    title: <div className={`hover:cursor-pointer hover:hovered_clicked px-1 flex flex-row ${mode == "dark" ? "" : "text-gray-500"}`}>Bannerlar</div>,
                    menu: {
                        items: [
                            {
                                key: "1",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/carousel");
                                            (MENUITEMS[5] as MenuItem).submenuItems[0].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown2"]);
                                            localStorage.setItem("9", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Karusel Banner") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[5] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 2) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >Karusel Banner</div>
                                )
                            },
                            {
                                key: "2",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/aside");
                                            (MENUITEMS[5] as MenuItem).submenuItems[1].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown2"]);
                                            localStorage.setItem("10", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Gapdal Banner") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[5] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 2) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >Gapdal Banner</div>)
                            },
                            {
                                key: "3",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/popup");
                                            (MENUITEMS[5] as MenuItem).submenuItems[2].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown2"]);
                                            localStorage.setItem("11", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Açylýan Banner") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[5] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 2) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >Açylýan Banner</div>)
                            }
                        ]
                    }
                },
                    { title: <div className={`${mode == "dark" ? "dark_2" : ""}`}>Açylýan Banner</div> })
                break;
            case "clients":
                items.push({
                    title: <div className={`hover:cursor-pointer hover:hovered_clicked px-1 flex flex-row ${mode == "dark" ? "" : "text-gray-500"}`}>Müşderi Maglumaty</div>,
                    menu: {
                        items: [
                            {
                                key: "1",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/clients");
                                            (MENUITEMS[12] as MenuItem).submenuItems[0].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                            localStorage.setItem("19", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Müşderiler") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[12] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 3) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >Müşderiler</div>
                                )
                            },
                            {
                                key: "2",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/users");
                                            (MENUITEMS[12] as MenuItem).submenuItems[1].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                            localStorage.setItem("20", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Agzalar") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[12] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 3) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >Agzalar</div>
                                )
                            },
                            {
                                key: "3",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/qrDevices");
                                            (MENUITEMS[12] as MenuItem).submenuItems[2].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                            localStorage.setItem("21", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "QR Enjamlar") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[12] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 3) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >QR Enjamlar</div>
                                )
                            },
                            {
                                key: "4",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/qrTerminals");
                                            (MENUITEMS[12] as MenuItem).submenuItems[3].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                            localStorage.setItem("22", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "QR Terminallar") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[12] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 3) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >QR Terminallar</div>
                                )
                            },
                            {
                                key: "5",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/clientEmails");
                                            (MENUITEMS[12] as MenuItem).submenuItems[4].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                            localStorage.setItem("23", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "E-poçtalar") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[12] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 3) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >E-poçtalar</div>
                                )
                            },
                            {
                                key: "6",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/clientEmailHistory");
                                            (MENUITEMS[12] as MenuItem).submenuItems[5].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                            localStorage.setItem("24", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "E-poçta taryhy") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[12] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 3) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >E-poçta taryhy</div>
                                )
                            }
                        ]
                    }
                },
                    { title: <div className={`${mode == "dark" ? "dark_2" : ""}`}>Müşderiler</div> })
                break;
            case "users":
                items.push({
                    title: <div className={`hover:cursor-pointer hover:hovered_clicked px-1 flex flex-row ${mode == "dark" ? "" : "text-gray-500"}`}>Müşderi Maglumaty</div>,
                    menu: {
                        items: [
                            {
                                key: "1",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/clients");
                                            (MENUITEMS[12] as MenuItem).submenuItems[0].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                            localStorage.setItem("19", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Müşderiler") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[12] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 3) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >Müşderiler</div>
                                )
                            },
                            {
                                key: "2",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/users");
                                            (MENUITEMS[12] as MenuItem).submenuItems[1].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                            localStorage.setItem("20", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Agzalar") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[12] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 3) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >Agzalar</div>
                                )
                            },
                            {
                                key: "3",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/qrDevices");
                                            (MENUITEMS[12] as MenuItem).submenuItems[2].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                            localStorage.setItem("21", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "QR Enjamlar") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[12] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 3) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >QR Enjamlar</div>
                                )
                            },
                            {
                                key: "4",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/qrTerminals");
                                            (MENUITEMS[12] as MenuItem).submenuItems[3].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                            localStorage.setItem("22", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "QR Terminallar") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[12] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 3) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >QR Terminallar</div>
                                )
                            },
                            {
                                key: "5",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/clientEmails");
                                            (MENUITEMS[12] as MenuItem).submenuItems[4].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                            localStorage.setItem("23", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "E-poçtalar") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[12] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 3) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >E-poçtalar</div>
                                )
                            },
                            {
                                key: "6",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/clientEmailHistory");
                                            (MENUITEMS[12] as MenuItem).submenuItems[5].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                            localStorage.setItem("24", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "E-poçta taryhy") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[12] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 3) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >E-poçta taryhy</div>
                                )
                            }
                        ]
                    }
                },
                    { title: <div className={`${mode == "dark" ? "dark_2" : ""}`}>Agzalar</div> })
                break;
            case "qrDevices":
                items.push({
                    title: <div className={`hover:cursor-pointer hover:hovered_clicked px-1 flex flex-row ${mode == "dark" ? "" : "text-gray-500"}`}>Müşderi Maglumaty</div>,
                    menu: {
                        items: [
                            {
                                key: "1",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/clients");
                                            (MENUITEMS[12] as MenuItem).submenuItems[0].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                            localStorage.setItem("19", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Müşderiler") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[12] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 3) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >Müşderiler</div>
                                )
                            },
                            {
                                key: "2",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/users");
                                            (MENUITEMS[12] as MenuItem).submenuItems[1].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                            localStorage.setItem("20", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Agzalar") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[12] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 3) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >Agzalar</div>
                                )
                            },
                            {
                                key: "3",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/qrDevices");
                                            (MENUITEMS[12] as MenuItem).submenuItems[2].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                            localStorage.setItem("21", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "QR Enjamlar") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[12] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 3) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >QR Enjamlar</div>
                                )
                            },
                            {
                                key: "4",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/qrTerminals");
                                            (MENUITEMS[12] as MenuItem).submenuItems[3].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                            localStorage.setItem("22", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "QR Terminallar") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[12] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 3) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >QR Terminallar</div>
                                )
                            },
                            {
                                key: "5",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/clientEmails");
                                            (MENUITEMS[12] as MenuItem).submenuItems[4].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                            localStorage.setItem("23", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "E-poçtalar") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[12] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 3) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >E-poçtalar</div>
                                )
                            },
                            {
                                key: "6",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/clientEmailHistory");
                                            (MENUITEMS[12] as MenuItem).submenuItems[5].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                            localStorage.setItem("24", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "E-poçta taryhy") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[12] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 3) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >E-poçta taryhy</div>
                                )
                            }
                        ]
                    }
                },
                    { title: <div className={`${mode == "dark" ? "dark_2" : ""}`}>QR Enjamlar</div> })
                break;
            case "qrTerminals":
                items.push({
                    title: <div className={`hover:cursor-pointer hover:hovered_clicked px-1 flex flex-row ${mode == "dark" ? "" : "text-gray-500"}`}>Müşderi Maglumaty</div>,
                    menu: {
                        items: [
                            {
                                key: "1",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/clients");
                                            (MENUITEMS[12] as MenuItem).submenuItems[0].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                            localStorage.setItem("19", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Müşderiler") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[12] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 3) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >Müşderiler</div>
                                )
                            },
                            {
                                key: "2",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/users");
                                            (MENUITEMS[12] as MenuItem).submenuItems[1].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                            localStorage.setItem("20", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Agzalar") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[12] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 3) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >Agzalar</div>
                                )
                            },
                            {
                                key: "3",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/qrDevices");
                                            (MENUITEMS[12] as MenuItem).submenuItems[2].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                            localStorage.setItem("21", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "QR Enjamlar") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[12] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 3) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >QR Enjamlar</div>
                                )
                            },
                            {
                                key: "4",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/qrTerminals");
                                            (MENUITEMS[12] as MenuItem).submenuItems[3].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                            localStorage.setItem("22", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "QR Terminallar") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[12] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 3) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >QR Terminallar</div>
                                )
                            },
                            {
                                key: "5",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/clientEmails");
                                            (MENUITEMS[12] as MenuItem).submenuItems[4].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                            localStorage.setItem("23", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "E-poçtalar") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[12] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 3) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >E-poçtalar</div>
                                )
                            },
                            {
                                key: "6",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/clientEmailHistory");
                                            (MENUITEMS[12] as MenuItem).submenuItems[5].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                            localStorage.setItem("24", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "E-poçta taryhy") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[12] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 3) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >E-poçta taryhy</div>
                                )
                            }
                        ]
                    }
                },
                    { title: <div className={`${mode == "dark" ? "dark_2" : ""}`}>QR Terminallar</div> })
                break;
            case "clientEmails":
                items.push({
                    title: <div className={`hover:cursor-pointer hover:hovered_clicked px-1 flex flex-row ${mode == "dark" ? "" : "text-gray-500"}`}>Müşderi Maglumaty</div>,
                    menu: {
                        items: [
                            {
                                key: "1",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/clients");
                                            (MENUITEMS[12] as MenuItem).submenuItems[0].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                            localStorage.setItem("19", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Müşderiler") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[12] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 3) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >Müşderiler</div>
                                )
                            },
                            {
                                key: "2",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/users");
                                            (MENUITEMS[12] as MenuItem).submenuItems[1].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                            localStorage.setItem("20", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Agzalar") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[12] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 3) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >Agzalar</div>
                                )
                            },
                            {
                                key: "3",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/qrDevices");
                                            (MENUITEMS[12] as MenuItem).submenuItems[2].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                            localStorage.setItem("21", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "QR Enjamlar") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[12] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 3) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >QR Enjamlar</div>
                                )
                            },
                            {
                                key: "4",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/qrTerminals");
                                            (MENUITEMS[12] as MenuItem).submenuItems[3].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                            localStorage.setItem("22", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "QR Terminallar") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[12] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 3) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >QR Terminallar</div>
                                )
                            },
                            {
                                key: "5",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/clientEmails");
                                            (MENUITEMS[12] as MenuItem).submenuItems[4].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                            localStorage.setItem("23", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "E-poçtalar") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[12] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 3) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >E-poçtalar</div>
                                )
                            },
                            {
                                key: "6",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/clientEmailHistory");
                                            (MENUITEMS[12] as MenuItem).submenuItems[5].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                            localStorage.setItem("24", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "E-poçta taryhy") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[12] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 3) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >E-poçta taryhy</div>
                                )
                            }
                        ]
                    }
                },
                    { title: <div className={`${mode == "dark" ? "dark_2" : ""}`}>E-poçtalar</div> })
                break;
            case "clientEmailHistory":
                items.push({
                    title: <div className={`hover:cursor-pointer hover:hovered_clicked px-1 flex flex-row ${mode == "dark" ? "" : "text-gray-500"}`}>Müşderi Maglumaty</div>,
                    menu: {
                        items: [
                            {
                                key: "1",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/clients");
                                            (MENUITEMS[12] as MenuItem).submenuItems[0].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                            localStorage.setItem("19", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Müşderiler") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[12] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 3) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >Müşderiler</div>
                                )
                            },
                            {
                                key: "2",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/users");
                                            (MENUITEMS[12] as MenuItem).submenuItems[1].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                            localStorage.setItem("20", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Agzalar") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[12] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 3) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >Agzalar</div>
                                )
                            },
                            {
                                key: "3",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/qrDevices");
                                            (MENUITEMS[12] as MenuItem).submenuItems[2].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                            localStorage.setItem("21", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "QR Enjamlar") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[12] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 3) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >QR Enjamlar</div>
                                )
                            },
                            {
                                key: "4",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/qrTerminals");
                                            (MENUITEMS[12] as MenuItem).submenuItems[3].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                            localStorage.setItem("22", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "QR Terminallar") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[12] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 3) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >QR Terminallar</div>
                                )
                            },
                            {
                                key: "5",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/clientEmails");
                                            (MENUITEMS[12] as MenuItem).submenuItems[4].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                            localStorage.setItem("23", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "E-poçtalar") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[12] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 3) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >E-poçtalar</div>
                                )
                            },
                            {
                                key: "6",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/clientEmailHistory");
                                            (MENUITEMS[12] as MenuItem).submenuItems[5].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown3"]);
                                            localStorage.setItem("24", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "E-poçta taryhy") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[12] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 3) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >E-poçta taryhy</div>
                                )
                            }
                        ]
                    }
                },
                    { title: <div className={`${mode == "dark" ? "dark_2" : ""}`}>E-poçta taryhy</div> })
                break;
            case "crmDevices":
                items.push({
                    title: <div className={`hover:cursor-pointer hover:hovered_clicked px-1 flex flex-row ${mode == "dark" ? "" : "text-gray-500"}`}>CRM</div>,
                    menu: {
                        items: [
                            {
                                key: "1",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/crmDevices");
                                            (MENUITEMS[13] as MenuItem).submenuItems[0].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown4"]);
                                            localStorage.setItem("26", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "CRM Enjamlar") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[13] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 4) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >CRM Enjamlar</div>
                                )
                            },
                            {
                                key: "2",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/crmSms");
                                            (MENUITEMS[13] as MenuItem).submenuItems[1].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown4"]);
                                            localStorage.setItem("27", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "SMS") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[13] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 4) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >SMS</div>
                                )
                            },
                            {
                                key: "3",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/crmCalls");
                                            (MENUITEMS[13] as MenuItem).submenuItems[2].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown4"]);
                                            localStorage.setItem("28", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Jaňlar") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[13] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 4) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >Jaňlar</div>
                                )
                            }
                        ]
                    }
                },
                    { title: <div className={`${mode == "dark" ? "dark_2" : ""}`}>CRM Enjamlar</div> })
                break;
            case "crmSms":
                items.push({
                    title: <div className={`hover:cursor-pointer hover:hovered_clicked px-1 flex flex-row ${mode == "dark" ? "" : "text-gray-500"}`}>CRM</div>,
                    menu: {
                        items: [
                            {
                                key: "1",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/crmDevices");
                                            (MENUITEMS[13] as MenuItem).submenuItems[0].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown4"]);
                                            localStorage.setItem("26", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "CRM Enjamlar") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[13] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 4) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >CRM Enjamlar</div>
                                )
                            },
                            {
                                key: "2",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/crmSms");
                                            (MENUITEMS[13] as MenuItem).submenuItems[1].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown4"]);
                                            localStorage.setItem("27", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "SMS") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[13] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 4) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >SMS</div>
                                )
                            },
                            {
                                key: "3",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/crmCalls");
                                            (MENUITEMS[13] as MenuItem).submenuItems[2].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown4"]);
                                            localStorage.setItem("28", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Jaňlar") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[13] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 4) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >Jaňlar</div>
                                )
                            }
                        ]
                    }
                },
                    { title: <div className={`${mode == "dark" ? "dark_2" : ""}`}>SMS</div> })
                break;
            case "crmCalls":
                items.push({
                    title: <div className={`hover:cursor-pointer hover:hovered_clicked px-1 flex flex-row ${mode == "dark" ? "" : "text-gray-500"}`}>CRM</div>,
                    menu: {
                        items: [
                            {
                                key: "1",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/crmDevices");
                                            (MENUITEMS[13] as MenuItem).submenuItems[0].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown4"]);
                                            localStorage.setItem("26", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "CRM Enjamlar") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[13] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 4) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >CRM Enjamlar</div>
                                )
                            },
                            {
                                key: "2",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/crmSms");
                                            (MENUITEMS[13] as MenuItem).submenuItems[1].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown4"]);
                                            localStorage.setItem("27", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "SMS") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[13] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 4) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >SMS</div>
                                )
                            },
                            {
                                key: "3",
                                label: (
                                    <div
                                        className={`${mode == "dark" ? "text-black" : ""}`}
                                        onClick={() => {
                                            navigate("/crmCalls");
                                            (MENUITEMS[13] as MenuItem).submenuItems[2].clicked = true
                                            clearLocalStorageButKeep(["collapsed", "updown4"]);
                                            localStorage.setItem("28", "true");
                                            for (let i = 0; i < MENUITEMS.length; i++) {
                                                (MENUITEMS[i] as MenuItem).clicked = false;
                                                if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                    for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                        if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Jaňlar") {
                                                            (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                        }
                                                    }
                                                }
                                            }
                                            (MENUITEMS[13] as MenuItem).clicked = true;
                                            for (let k = 1; k < 7; k++) {
                                                if (k != 4) {
                                                    dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                }
                                            }
                                        }}
                                    >Jaňlar</div>
                                )
                            }
                        ]
                    }
                },
                    { title: <div className={`${mode == "dark" ? "dark_2" : ""}`}>Jaňlar</div> })
                break;
        }
    }

    if (arr.length == 3) {
        switch (arr[1] && arr[2]) {
            case "groups" && "maingroups":
                items.push(
                    {
                        title: <div className={`hover:cursor-pointer hover:hovered_clicked px-1 flex flex-row ${mode == "dark" ? "" : "text-gray-500"}`}>Grupbalar</div>,
                        menu: {
                            items: [
                                {
                                    key: "1",
                                    label: (
                                        <div
                                            className={`${mode == "dark" ? "text-black" : ""}`}
                                            onClick={() => {
                                                navigate("/groups/maingroups");
                                               (MENUITEMS[0] as MenuItem).submenuItems[0].clicked = true
                                                clearLocalStorageButKeep(["collapsed", "updown1"]);
                                                localStorage.setItem("2", "true");
                                                for (let i = 0; i < MENUITEMS.length; i++) {
                                                    (MENUITEMS[i] as MenuItem).clicked = false;
                                                    if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                        for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                            if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Esasy Grupbalar") {
                                                                (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                            }
                                                        }
                                                    }
                                                }
                                               (MENUITEMS[0] as MenuItem).clicked = true;
                                                for (let k = 1; k < 7; k++) {
                                                    if (k != 1) {
                                                        dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                    }
                                                }
                                            }}
                                        >Esasy Grupbalar</div>
                                    )
                                },
                                {
                                    key: "2",
                                    label: (
                                        <div
                                            className={`${mode == "dark" ? "text-black" : ""}`}
                                            onClick={() => {
                                                navigate("/groups/subgroups");
                                               (MENUITEMS[0] as MenuItem).submenuItems[1].clicked = true
                                                clearLocalStorageButKeep(["collapsed", "updown1"]);
                                                localStorage.setItem("3", "true");
                                                for (let i = 0; i < MENUITEMS.length; i++) {
                                                    (MENUITEMS[i] as MenuItem).clicked = false;
                                                    if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                        for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                            if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Alt Grupbalar") {
                                                                (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                            }
                                                        }
                                                    }
                                                }
                                               (MENUITEMS[0] as MenuItem).clicked = true;
                                                for (let k = 1; k < 7; k++) {
                                                    if (k != 1) {
                                                        dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                    }
                                                }
                                            }}
                                        >Alt Grupbalar</div>
                                    )
                                }
                            ]
                        }
                    },
                    { title: <div className={`${mode == "dark" ? "dark_2" : ""}`}>Esasy Grupbalar</div> }
                )
                break;
            case "groups" && "subgroups":
                items.push(
                    {
                        title: <div className={`hover:cursor-pointer hover:hovered_clicked px-1 flex flex-row ${mode == "dark" ? "" : "text-gray-500"}`}>Grupbalar</div>,
                        menu: {
                            items: [
                                {
                                    key: "1",
                                    label: (
                                        <div
                                            className={`${mode == "dark" ? "text-black" : ""}`}
                                            onClick={() => {
                                                navigate("/groups/maingroups");
                                                (MENUITEMS[0] as MenuItem).submenuItems[0].clicked = true
                                                clearLocalStorageButKeep(["collapsed", "updown1"]);
                                                localStorage.setItem("2", "true");
                                                for (let i = 0; i < MENUITEMS.length; i++) {
                                                    (MENUITEMS[i] as MenuItem).clicked = false;
                                                    if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                        for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                            if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Esasy Grupbalar") {
                                                                (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
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
                                        >Esasy Grupbalar</div>
                                    )
                                },
                                {
                                    key: "2",
                                    label: (
                                        <div
                                            className={`${mode == "dark" ? "text-black" : ""}`}
                                            onClick={() => {
                                                navigate("/groups/subgroups");
                                                (MENUITEMS[0] as MenuItem).submenuItems[1].clicked = true
                                                clearLocalStorageButKeep(["collapsed", "updown1"]);
                                                localStorage.setItem("3", "true");
                                                for (let i = 0; i < MENUITEMS.length; i++) {
                                                    (MENUITEMS[i] as MenuItem).clicked = false;
                                                    if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                        for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                            if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Alt Grupbalar") {
                                                                (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
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
                                        >Alt Grupbalar</div>
                                    )
                                }
                            ]
                        }
                    },
                    { title: <div className={`${mode == "dark" ? "dark_2" : ""}`}>Alt Grupbalar</div> }
                )
                break;
            case "exhibitions" && "firms":
                items.push(
                    {
                        title: <div className={`hover:cursor-pointer hover:hovered_clicked px-1 flex flex-row ${mode == "dark" ? "" : "text-gray-500"}`}>Sergi</div>,
                        menu: {
                            items: [
                                {
                                    key: "1",
                                    label: (
                                        <div
                                            className={`${mode == "dark" ? "text-black" : ""}`}
                                            onClick={() => {
                                                navigate("/exhibitions/firms");
                                                (MENUITEMS[16] as MenuItem).submenuItems[0].clicked = true
                                                clearLocalStorageButKeep(["collapsed", "updown5"]);
                                                localStorage.setItem("32", "true");
                                                for (let i = 0; i < MENUITEMS.length; i++) {
                                                    (MENUITEMS[i] as MenuItem).clicked = false;
                                                    if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                        for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                            if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Firmalar") {
                                                                (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                            }
                                                        }
                                                    }
                                                }
                                                (MENUITEMS[16] as MenuItem).clicked = true;
                                                for (let k = 1; k < 7; k++) {
                                                    if (k != 5) {
                                                        dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                    }
                                                }
                                            }}
                                        >Firmalar</div>
                                    )
                                },
                                {
                                    key: "2",
                                    label: (
                                        <div
                                            className={`${mode == "dark" ? "text-black" : ""}`}
                                            onClick={() => {
                                                navigate("/exhibitions/items");
                                                (MENUITEMS[16] as MenuItem).submenuItems[1].clicked = true
                                                clearLocalStorageButKeep(["collapsed", "updown5"]);
                                                localStorage.setItem("33", "true");
                                                for (let i = 0; i < MENUITEMS.length; i++) {
                                                    (MENUITEMS[i] as MenuItem).clicked = false;
                                                    if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                        for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                            if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Harytlar") {
                                                                (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                            }
                                                        }
                                                    }
                                                }
                                                (MENUITEMS[16] as MenuItem).clicked = true;
                                                for (let k = 1; k < 7; k++) {
                                                    if (k != 5) {
                                                        dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                    }
                                                }
                                            }}
                                        >Harytlar</div>
                                    )
                                }
                            ]
                        }
                    },
                    { title: <div className={`${mode == "dark" ? "dark_2" : ""}`}>Firmalar</div> }
                )
                break;
            case "exhibitions" && "items":
                items.push(
                    {
                        title: <div className={`hover:cursor-pointer hover:hovered_clicked px-1 flex flex-row ${mode == "dark" ? "" : "text-gray-500"}`}>Sergi</div>,
                        menu: {
                            items: [
                                {
                                    key: "1",
                                    label: (
                                        <div
                                            className={`${mode == "dark" ? "text-black" : ""}`}
                                            onClick={() => {
                                                navigate("/exhibitions/firms");
                                                (MENUITEMS[16] as MenuItem).submenuItems[0].clicked = true
                                                clearLocalStorageButKeep(["collapsed", "updown5"]);
                                                localStorage.setItem("32", "true");
                                                for (let i = 0; i < MENUITEMS.length; i++) {
                                                    (MENUITEMS[i] as MenuItem).clicked = false;
                                                    if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                        for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                            if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Firmalar") {
                                                                (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                            }
                                                        }
                                                    }
                                                }
                                                (MENUITEMS[16] as MenuItem).clicked = true;
                                                for (let k = 1; k < 7; k++) {
                                                    if (k != 5) {
                                                        dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                    }
                                                }
                                            }}
                                        >Firmalar</div>
                                    )
                                },
                                {
                                    key: "2",
                                    label: (
                                        <div
                                            className={`${mode == "dark" ? "text-black" : ""}`}
                                            onClick={() => {
                                                navigate("/exhibitions/items");
                                                (MENUITEMS[16] as MenuItem).submenuItems[1].clicked = true
                                                clearLocalStorageButKeep(["collapsed", "updown5"]);
                                                localStorage.setItem("33", "true");
                                                for (let i = 0; i < MENUITEMS.length; i++) {
                                                    (MENUITEMS[i] as MenuItem).clicked = false;
                                                    if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                        for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                            if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Harytlar") {
                                                                (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                            }
                                                        }
                                                    }
                                                }
                                                (MENUITEMS[16] as MenuItem).clicked = true;
                                                for (let k = 1; k < 7; k++) {
                                                    if (k != 5) {
                                                        dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                    }
                                                }
                                            }}
                                        >Harytlar</div>
                                    )
                                }
                            ]
                        }
                    },
                    { title: <div className={`${mode == "dark" ? "dark_2" : ""}`}>Harytlar</div> }
                )
                break;
            case "syncs" && "smanual":
                items.push(
                    {
                        title: <div className={`hover:cursor-pointer hover:hovered_clicked px-1 flex flex-row ${mode == "dark" ? "" : "text-gray-500"}`}>Sinhronlar</div>,
                        menu: {
                            items: [
                                {
                                    key: "1",
                                    label: (
                                        <div
                                            className={`${mode == "dark" ? "text-black" : ""}`}
                                            onClick={() => {
                                                navigate("/syncs/smanual");
                                                (MENUITEMS[17] as MenuItem).submenuItems[0].clicked = true
                                                clearLocalStorageButKeep(["collapsed", "updown6"]);
                                                localStorage.setItem("35", "true");
                                                for (let i = 0; i < MENUITEMS.length; i++) {
                                                    (MENUITEMS[i] as MenuItem).clicked = false;
                                                    if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                        for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                            if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Manuel Sinhronlar") {
                                                                (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                            }
                                                        }
                                                    }
                                                }
                                                (MENUITEMS[17] as MenuItem).clicked = true;
                                                for (let k = 1; k < 7; k++) {
                                                    if (k != 6) {
                                                        dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                    }
                                                }
                                            }}
                                        >Manuel Sinhronlar</div>
                                    )
                                },
                                {
                                    key: "2",
                                    label: (
                                        <div
                                            className={`${mode == "dark" ? "text-black" : ""}`}
                                            onClick={() => {
                                                navigate("/syncs/sschedules");
                                                (MENUITEMS[17] as MenuItem).submenuItems[1].clicked = true
                                                clearLocalStorageButKeep(["collapsed", "updown6"]);
                                                localStorage.setItem("36", "true");
                                                for (let i = 0; i < MENUITEMS.length; i++) {
                                                    (MENUITEMS[i] as MenuItem).clicked = false;
                                                    if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                        for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                            if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Tertip Sinhronlar") {
                                                                (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                            }
                                                        }
                                                    }
                                                }
                                                (MENUITEMS[17] as MenuItem).clicked = true;
                                                for (let k = 1; k < 7; k++) {
                                                    if (k != 6) {
                                                        dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                    }
                                                }
                                            }}
                                        >Tertip Sinhronlar</div>
                                    )
                                },
                                {
                                    key: "3",
                                    label: (
                                        <div
                                            className={`${mode == "dark" ? "text-black" : ""}`}
                                            onClick={() => {
                                                navigate("/syncs/shistoires");
                                                (MENUITEMS[17] as MenuItem).submenuItems[2].clicked = true
                                                clearLocalStorageButKeep(["collapsed", "updown6"]);
                                                localStorage.setItem("37", "true");
                                                for (let i = 0; i < MENUITEMS.length; i++) {
                                                    (MENUITEMS[i] as MenuItem).clicked = false;
                                                    if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                        for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                            if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Taryh") {
                                                                (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                            }
                                                        }
                                                    }
                                                }
                                                (MENUITEMS[17] as MenuItem).clicked = true;
                                                for (let k = 1; k < 7; k++) {
                                                    if (k != 6) {
                                                        dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                    }
                                                }
                                            }}
                                        >Taryh</div>
                                    )
                                }
                            ]
                        }
                    },
                    { title: <div className={`${mode == "dark" ? "dark_2" : ""}`}>Manuel Sinhronlar</div> }
                )
                break;
            case "syncs" && "sschedules":
                items.push(
                    {
                        title: <div className={`hover:cursor-pointer hover:hovered_clicked px-1 flex flex-row ${mode == "dark" ? "" : "text-gray-500"}`}>Sinhronlar</div>,
                        menu: {
                            items: [
                                {
                                    key: "1",
                                    label: (
                                        <div
                                            className={`${mode == "dark" ? "text-black" : ""}`}
                                            onClick={() => {
                                                navigate("/syncs/smanual");
                                                (MENUITEMS[17] as MenuItem).submenuItems[0].clicked = true
                                                clearLocalStorageButKeep(["collapsed", "updown6"]);
                                                localStorage.setItem("35", "true");
                                                for (let i = 0; i < MENUITEMS.length; i++) {
                                                    (MENUITEMS[i] as MenuItem).clicked = false;
                                                    if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                        for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                            if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Manuel Sinhronlar") {
                                                                (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                            }
                                                        }
                                                    }
                                                }
                                                (MENUITEMS[17] as MenuItem).clicked = true;
                                                for (let k = 1; k < 7; k++) {
                                                    if (k != 6) {
                                                        dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                    }
                                                }
                                            }}
                                        >Manuel Sinhronlar</div>
                                    )
                                },
                                {
                                    key: "2",
                                    label: (
                                        <div
                                            className={`${mode == "dark" ? "text-black" : ""}`}
                                            onClick={() => {
                                                navigate("/syncs/sschedules");
                                                (MENUITEMS[17] as MenuItem).submenuItems[1].clicked = true
                                                clearLocalStorageButKeep(["collapsed", "updown6"]);
                                                localStorage.setItem("36", "true");
                                                for (let i = 0; i < MENUITEMS.length; i++) {
                                                    (MENUITEMS[i] as MenuItem).clicked = false;
                                                    if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                        for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                            if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Tertip Sinhronlar") {
                                                                (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                            }
                                                        }
                                                    }
                                                }
                                                (MENUITEMS[17] as MenuItem).clicked = true;
                                                for (let k = 1; k < 7; k++) {
                                                    if (k != 6) {
                                                        dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                    }
                                                }
                                            }}
                                        >Tertip Sinhronlar</div>
                                    )
                                },
                                {
                                    key: "3",
                                    label: (
                                        <div
                                            className={`${mode == "dark" ? "text-black" : ""}`}
                                            onClick={() => {
                                                navigate("/syncs/shistoires");
                                                (MENUITEMS[17] as MenuItem).submenuItems[2].clicked = true
                                                clearLocalStorageButKeep(["collapsed", "updown6"]);
                                                localStorage.setItem("37", "true");
                                                for (let i = 0; i < MENUITEMS.length; i++) {
                                                    (MENUITEMS[i] as MenuItem).clicked = false;
                                                    if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                        for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                            if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Taryh") {
                                                                (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                            }
                                                        }
                                                    }
                                                }
                                                (MENUITEMS[17] as MenuItem).clicked = true;
                                                for (let k = 1; k < 7; k++) {
                                                    if (k != 6) {
                                                        dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                    }
                                                }
                                            }}
                                        >Taryh</div>
                                    )
                                }
                            ]
                        }
                    },
                    { title: <div className={`${mode == "dark" ? "dark_2" : ""}`}>Tertip Sinhronlar</div> }
                )
                break;
            case "syncs" && "shistoires":
                items.push(
                    {
                        title: <div className={`hover:cursor-pointer hover:hovered_clicked px-1 flex flex-row ${mode == "dark" ? "" : "text-gray-500"}`}>Sinhronlar</div>,
                        menu: {
                            items: [
                                {
                                    key: "1",
                                    label: (
                                        <div
                                            className={`${mode == "dark" ? "text-black bg-red-500" : ""}`}
                                            onClick={() => {
                                                navigate("/syncs/smanual");
                                                (MENUITEMS[17] as MenuItem).submenuItems[0].clicked = true
                                                clearLocalStorageButKeep(["collapsed", "updown6"]);
                                                localStorage.setItem("35", "true");
                                                for (let i = 0; i < MENUITEMS.length; i++) {
                                                    MENUITEMS[i].clicked = false;
                                                    if (MENUITEMS[i].submenuItems) {
                                                        for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                            if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Manuel Sinhronlar") {
                                                                (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                            }
                                                        }
                                                    }
                                                }
                                                (MENUITEMS[17] as MenuItem).clicked = true;
                                                for (let k = 1; k < 7; k++) {
                                                    if (k != 6) {
                                                        dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                    }
                                                }
                                            }}
                                        >Manuel Sinhronlar</div>
                                    )
                                },
                                {
                                    key: "2",
                                    label: (
                                        <div
                                            className={`${mode == "dark" ? "text-black" : ""}`}
                                            onClick={() => {
                                                navigate("/syncs/sschedules");
                                                (MENUITEMS[17] as MenuItem).submenuItems[1].clicked = true
                                                clearLocalStorageButKeep(["collapsed", "updown6"]);
                                                localStorage.setItem("36", "true");
                                                for (let i = 0; i < MENUITEMS.length; i++) {
                                                    MENUITEMS[i].clicked = false;
                                                    if (MENUITEMS[i].submenuItems) {
                                                        for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                            if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Tertip Sinhronlar") {
                                                                (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                            }
                                                        }
                                                    }
                                                }
                                                (MENUITEMS[17] as MenuItem).clicked = true;
                                                for (let k = 1; k < 7; k++) {
                                                    if (k != 6) {
                                                        dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                    }
                                                }
                                            }}
                                        >Tertip Sinhronlar</div>
                                    )
                                },
                                {
                                    key: "3",
                                    label: (
                                        <div
                                            className={`${mode == "dark" ? "text-black" : ""}`}
                                            onClick={() => {
                                                navigate("/syncs/shistoires");
                                                (MENUITEMS[17] as MenuItem).submenuItems[2].clicked = true
                                                clearLocalStorageButKeep(["collapsed", "updown6"]);
                                                localStorage.setItem("37", "true");
                                                for (let i = 0; i < MENUITEMS.length; i++) {
                                                    (MENUITEMS[i] as MenuItem).clicked = false;
                                                    if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                        for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                            if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Taryh") {
                                                                (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
                                                            }
                                                        }
                                                    }
                                                }
                                                (MENUITEMS[17] as MenuItem).clicked = true;
                                                for (let k = 1; k < 7; k++) {
                                                    if (k != 6) {
                                                        dispatch(handleUpdown({ num: k, updownChosen: false }));
                                                    }
                                                }
                                            }}
                                        >Taryh</div>
                                    )
                                }
                            ]
                        }
                    },
                    { title: <div className={`${mode == "dark" ? "dark_2" : ""}`}>Taryh</div> }
                )
                break;
        }
    }

    if(arr.length == 4) {
        switch(arr[1] && arr[2] && arr[3]) {
            case "groups" && "maingroups" && "addMainGroup":
                items.push(
                    {
                        title: <div className={`hover:cursor-pointer hover:hovered_clicked px-1 flex flex-row ${mode == "dark" ? "" : "text-gray-500"}`}>Grupbalar</div>,
                        menu: {
                            items: [
                                {
                                    key: "1",
                                    label: (
                                        <div
                                            className={`${mode == "dark" ? "text-black" : ""}`}
                                            onClick={() => {
                                                navigate("/groups/maingroups");
                                                (MENUITEMS[0] as MenuItem).submenuItems[0].clicked = true
                                                clearLocalStorageButKeep(["collapsed", "updown1"]);
                                                localStorage.setItem("2", "true");
                                                for (let i = 0; i < MENUITEMS.length; i++) {
                                                    (MENUITEMS[i] as MenuItem).clicked = false;
                                                    if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                        for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                            if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Esasy Grupbalar") {
                                                                (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
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
                                        >Esasy Grupbalar</div>
                                    )
                                },
                                {
                                    key: "2",
                                    label: (
                                        <div
                                            className={`${mode == "dark" ? "text-black" : ""}`}
                                            onClick={() => {
                                                navigate("/groups/subgroups");
                                                (MENUITEMS[0] as MenuItem).submenuItems[1].clicked = true
                                                clearLocalStorageButKeep(["collapsed", "updown1"]);
                                                localStorage.setItem("3", "true");
                                                for (let i = 0; i < MENUITEMS.length; i++) {
                                                   (MENUITEMS[i] as MenuItem).clicked = false;
                                                    if ((MENUITEMS[i] as MenuItem).submenuItems) {
                                                        for (let j = 0; j < (MENUITEMS[i] as MenuItem).submenuItems.length; j++) {
                                                            if ((MENUITEMS[i] as MenuItem).submenuItems[j].title != "Alt Grupbalar") {
                                                                (MENUITEMS[i] as MenuItem).submenuItems[j].clicked = false;
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
                                        >Alt Grupbalar</div>
                                    )
                                }
                            ]
                        }
                    },
                    { title: <div className={`${mode == "dark" ? "dark_2" : "text-gray-500"} underline hover:cursor-pointer`}
                    onClick={() => { navigate("/groups/maingroups") }}
                    >Esasy Grupbalar</div> },
                    { title: <div className={`${mode == "dark" ? "dark_2" : ""}`}></div> },
                )
        }
    }

    return (
        <Breadcrumb items={items} separator={`${mode == "dark" ? " " : ">"}`} className='flex flex-row w-[400px] dark_2'></Breadcrumb>
    )
}