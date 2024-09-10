import {
  GroupOutlined,
  ProductOutlined,
  StarOutlined,
} from '@ant-design/icons';
import { CgSmartphoneRam } from 'react-icons/cg';
import { IoMdNotifications, IoIosPeople } from 'react-icons/io';
import { VscFeedback } from 'react-icons/vsc';
import { BsBriefcaseFill, BsLayoutSidebarReverse } from 'react-icons/bs';
import { TiShoppingCart } from 'react-icons/ti';
import { BiCarousel, BiDevices, BiWindowOpen } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';

import {
  FaUsers,
  FaBuilding,
  FaHistory,
  FaBalanceScaleLeft,
  FaSms,
  FaBoxOpen,
} from 'react-icons/fa';
import {
  Ri24HoursFill,
  RiCoupon3Line,
  RiCellphoneFill,
  RiRulerLine,
  RiAdvertisementFill,
} from 'react-icons/ri';
import { TbBuildingStore } from 'react-icons/tb';
import {
  AiOutlineQrcode,
  AiOutlineSchedule,
  AiOutlineSync,
  AiOutlineGroup,
  AiFillTags,
} from 'react-icons/ai';
import {
  MdOutlineCall,
  MdOutlineQrCode,
  MdOutlineSettings,
  MdRecordVoiceOver,
  MdOutlineMuseum,
} from 'react-icons/md';

import { FiUsers } from 'react-icons/fi';

export const MENUITEMS = [
  {
    clicked: localStorage.getItem("updown1") == "true" ? true : false,
    title: "Grupbalar",
    key: "1",
    icon: <AiFillTags className='text-[18px] mr-[18px] text-gray-500 cursor-pointer' />,
    submenu: true,
    submenuItems: [
      {
        clicked: localStorage.getItem("2") ? true : false,
        title: "Esasy Grupbalar",
        key: "2",
        path: '/groups/maingroups',
        icon: <AiOutlineGroup className='text-[18px] mr-[18px] text-gray-500 cursor-pointer' />
      },
      {
        clicked: localStorage.getItem("3") ? true : false,
        title: 'Alt Grupbalar',
        key: "3",
        path: '/groups/subgroups',
        icon: <AiOutlineGroup className='text-[18px] mr-[18px] text-gray-500 cursor-pointer' />
      }
    ]
  },
  {
    clicked: localStorage.getItem("4") ? true : false,
    title: 'Harytlar',
    key: "4",
    path: '/products',
    icon: <ProductOutlined className='text-[18px] mr-[18px] text-gray-500 cursor-pointer'
    />
  },
  {
    clicked: localStorage.getItem("5") ? true : false,
    title: 'Seslenmeler',
    key: "5",
    path: '/audios',
    icon: <StarOutlined className='text-[18px] mr-[18px] text-gray-500 cursor-pointer'
    />
  },
  {
    clicked: localStorage.getItem("6") ? true : false,
    title: 'Brendler',
    key: "6",
    path: '/brands',
    icon: <AiFillTags className='text-[18px] mr-[18px] text-gray-500 cursor-pointer'
    />
  },
  {
    clicked: localStorage.getItem("7") ? true : false,
    title: 'Birimler',
    key: "7",
    path: '/units',
    icon: <RiRulerLine className='text-[18px] mr-[18px] text-gray-500 cursor-pointer'
    />
  },
  {
    clicked: localStorage.getItem("updown2") == "true" ? true : false,
    title: "Bannerlar",
    key: "8",
    icon: <RiAdvertisementFill className='text-[18px] mr-[18px] text-gray-500 cursor-pointer' />,
    submenu: true,
    submenuItems: [
      {
        clicked: localStorage.getItem("9") ? true : false,
        title: 'Karusel Banner',
        key: "9",
        path: '/carousel',
        icon: <BiCarousel className='text-[18px] mr-[18px] text-gray-500 cursor-pointer' />
      },
      {
        clicked: localStorage.getItem("10") ? true : false,
        title: 'Gapdal Banner',
        key: "10",
        path: '/aside',
        icon: <BsLayoutSidebarReverse className='text-[18px] mr-[18px] text-gray-500 cursor-pointer' />
      },
      {
        clicked: localStorage.getItem("11") ? true : false,
        title: 'Açylýan Banner',
        key: "11",
        path: '/popup',
        icon: <BiWindowOpen className='text-[18px] mr-[18px] text-gray-500 cursor-pointer' />
      }
    ]
  },
  {
    clicked: localStorage.getItem("12") ? true : false,
    title: 'Akylly Bölümler',
    key: "12",
    path: '/smartSections',
    icon: <CgSmartphoneRam className='text-[18px] mr-[18px] text-gray-500 cursor-pointer'
    />
  },
  {
    clicked: localStorage.getItem("13") ? true : false,
    title: 'Habarnamalar',
    key: "13",
    path: '/notifications',
    icon: <IoMdNotifications className='text-[18px] mr-[18px] text-gray-500 cursor-pointer'
    />
  },
  {
    clicked: localStorage.getItem("14") ? true : false,
    title: 'Zakazlar',
    key: "14",
    path: '/orders',
    icon: <TiShoppingCart className='text-[18px] mr-[18px] text-gray-500 cursor-pointer'
    />
  },
  {
    clicked: localStorage.getItem("15") ? true : false,
    title: 'Promokodlar',
    key: "15",
    path: '/promocodes',
    icon: <RiCoupon3Line className='text-[18px] mr-[18px] text-gray-500 cursor-pointer'
    />
  },
  {
    clicked: localStorage.getItem("16") ? true : false,
    title: 'Teswirler',
    key: "16",
    path: '/feedbacks',
    icon: <VscFeedback className='text-[18px] mr-[18px] text-gray-500 cursor-pointer'
    />
  },
  {
    clicked: localStorage.getItem("17") ? true : false,
    title: 'Bölümler',
    key: "17",
    path: '/divisions',
    icon: <FaBuilding className='text-[18px] mr-[18px] text-gray-500 cursor-pointer'
    />
  },
  {
    clicked: localStorage.getItem("updown3") == "true" ? true : false,
    title: "Müşderi Maglumaty",
    key: "18",
    icon: <IoIosPeople className='text-[18px] mr-[18px] text-gray-500 cursor-pointer' />,
    submenu: true,
    submenuItems: [
      {
        clicked: localStorage.getItem("19") ? true : false,
        title: 'Müşderiler',
        key: "19",
        path: '/clients',
        icon: <IoIosPeople className='text-[18px] mr-[18px] text-gray-500 cursor-pointer' />
      },
      {
        clicked: localStorage.getItem("20") ? true : false,
        title: 'Agzalar',
        key: "20",
        path: '/users',
        icon: <FiUsers className='text-[18px] mr-[18px] text-gray-500 cursor-pointer' />
      },
      {
        clicked: localStorage.getItem("21") ? true : false,
        title: 'QR Enjamlar',
        key: "21",
        path: '/qrDevices',
        icon: <AiOutlineQrcode className='text-[18px] mr-[18px] text-gray-500 cursor-pointer' />
      },
      {
        clicked: localStorage.getItem("22") ? true : false,
        title: 'QR Terminallar',
        key: "22",
        path: '/qrTerminals',
        icon: <RiCellphoneFill className='text-[18px] mr-[18px] text-gray-500 cursor-pointer' />
      },
      {
        clicked: localStorage.getItem("23") ? true : false,
        title: 'E-poçtalar',
        key: "23",
        path: '/clientEmails',
        icon: <HiOutlineMail className='text-[18px] mr-[18px] text-gray-500 cursor-pointer' />
      },
      {
        clicked: localStorage.getItem("24") ? true : false,
        title: 'E-poçta taryhy',
        key: "24",
        path: '/clientEmailHistory',
        icon: <FaHistory className='text-[18px] mr-[18px] text-gray-500 cursor-pointer' />
      }
    ]
  },
  {
    clicked: localStorage.getItem("updown4") == "true" ? true : false,
    title: "CRM",
    key: "25",
    icon: <MdRecordVoiceOver className='text-[18px] mr-[18px] text-gray-500 cursor-pointer' />,
    submenu: true,
    submenuItems: [
      {
        clicked: localStorage.getItem("26") ? true : false,
        title: 'CRM Enjamlar',
        key: "26",
        path: '/crmDevices',
        icon: <BiDevices className='text-[18px] mr-[18px] text-gray-500 cursor-pointer' />
      },
      {
        clicked: localStorage.getItem("27") ? true : false,
        title: 'SMS',
        key: "27",
        path: '/crmSms',
        icon: <FaSms className='text-[18px] mr-[18px] text-gray-500 cursor-pointer' />
      },
      {
        clicked: localStorage.getItem("28") ? true : false,
        title: 'Jaňlar',
        key: "28",
        path: '/crmCalls',
        icon: <MdOutlineCall className='text-[18px] mr-[18px] text-gray-500 cursor-pointer' />
      }
    ]
  },
  {
    clicked: localStorage.getItem("29") ? true : false,
    title: 'Işgärler',
    key: "29",
    path: '/employees',
    icon: <FaUsers className='text-[18px] mr-[18px] text-gray-500 cursor-pointer'
    />
  },
  {
    clicked: localStorage.getItem("30") ? true : false,
    title: 'Rollar',
    key: "30",
    path: '/roles',
    icon: <BsBriefcaseFill className='text-[18px] mr-[18px] text-gray-500 cursor-pointer'
    />
  },
  {
    clicked: localStorage.getItem("updown5") == "true" ? true : false,
    title: "Sergi",
    key: "31",
    icon: <MdOutlineMuseum className='text-[18px] mr-[18px] text-gray-500 cursor-pointer' />,
    submenu: true,
    submenuItems: [
      {
        clicked: localStorage.getItem("32") ? true : false,
        title: 'Firmalar',
        key: "32",
        path: '/exhibitions/firms',
        icon: <TbBuildingStore className='text-[18px] mr-[18px] text-gray-500 cursor-pointer' />
      },
      {
        clicked: localStorage.getItem("33") ? true : false,
        title: 'Harytlar',
        key: "33",
        path: '/exhibitions/items',
        icon: <FaBoxOpen className='text-[18px] mr-[18px] text-gray-500 cursor-pointer' />
      }
    ]
  },
  {
    clicked: localStorage.getItem("updown6") == "true" ? true : false,
    title: "Sinhronlar",
    key: "34",
    icon: <AiOutlineSync className='text-[18px] mr-[18px] text-gray-500 cursor-pointer' />,
    submenu: true,
    submenuItems: [
      {
        clicked: localStorage.getItem("35") ? true : false,
        title: 'Manuel Sinhronlar',
        key: "35",
        path: '/syncs/smanual',
        icon: <Ri24HoursFill className='text-[18px] mr-[18px] text-gray-500 cursor-pointer' />
      },
      {
        clicked: localStorage.getItem("36") ? true : false,
        title: 'Tertip Sinhronlar',
        key: "36",
        path: '/syncs/sschedules',
        icon: <AiOutlineSchedule className='text-[18px] mr-[18px] text-gray-500 cursor-pointer' />
      },
      {
        clicked: localStorage.getItem("37") ? true : false,
        title: 'Taryh',
        key: "37",
        path: '/syncs/shistoires',
        icon: <FaHistory className='text-[18px] mr-[18px] text-gray-500 cursor-pointer' />
      }
    ]
  },
  {
    clicked: localStorage.getItem("38") ? true : false,
    title: 'Terazi sistemi',
    key: "38",
    path: '/scalingSystems',
    icon: <FaBalanceScaleLeft className='text-[18px] mr-[18px] text-gray-500 cursor-pointer'
    />
  },
  {
    clicked: localStorage.getItem("39") ? true : false,
    title: 'Programmalar',
    key: "39",
    path: '/qrApp',
    icon: <MdOutlineQrCode className='text-[18px] mr-[18px] text-gray-500 cursor-pointer'
    />
  },
  {
    clicked: localStorage.getItem("40") ? true : false,
    title: 'Settings',
    key: "40",
    path: '/settings',
    icon: <MdOutlineSettings className='text-[18px] mr-[18px] text-gray-500 cursor-pointer'
    />
  }
]