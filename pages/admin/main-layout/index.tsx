import { Outlet } from 'react-router-dom';
import Sidebar from '../../../layouts/Sidebar';
import Header from '../../../layouts/Header';
import { RootState } from '../../../utils/reduxtoolkit/store/store';
import { useSelector } from 'react-redux';


const MainLayout = () => {
  const collapsed = useSelector((state: RootState) => state.Collapsed1.collapsed1);
  const mode = useSelector((state: RootState) => state.Mode.mode);

  return (
    <div>
      <Header />
      <div className='flex flex-row'>
        <Sidebar />
        <div className={`${!collapsed ? "width_1" : "width_2"} 
      ${mode == "dark" ? "dark_1 !scrollbar_added1" : "white_1 !scrollbar_added2"} heighted2 overflow-y-auto`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
