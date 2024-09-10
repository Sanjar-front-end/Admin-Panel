import { MENUITEMS } from '../../../src/components/constants/menuitems';
import clearLocalStorageButKeep from '../../../src/hooks/keeplocalstorage/keepValue';
import { handleCollapsed1 } from '../../../utils/reduxtoolkit/reducers/Collapsed1';
import { handleUpdown } from '../../../utils/reduxtoolkit/reducers/updown'; 
import { RootState } from '../../../utils/reduxtoolkit/store/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

const AdminPage = () => {
  const collapsed = useSelector((state: RootState) => state.Collapsed1.collapsed1);
  const mode = useSelector((state: RootState) => state.Mode.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    clearLocalStorageButKeep(["collapsed"]);
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
    dispatch(handleCollapsed1(true));
  }, [])

  return (
    <div className={`flex flex-col fixed top-16 h-screen items-center justify-center pb-16 
      ${!collapsed ? "left-[280px] width_1" : "left-[80px] width_2"} 
      ${mode == "dark" ? "dark_1" : "white_1"}`}>
        <div className='adminPage'></div>
        <h1 className={`${mode == "dark" ? "text-white" : "text-gray-500"} bold-32 fade-in`}>Admin sahypasyna hoş geldiňiz!</h1>
    </div>
  )
}

export default AdminPage