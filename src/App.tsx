import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProtectedRoute from "../utils/protectedroute/index"
import AdminPage from '../pages/admin/admin-page';
import MainGroup from '../pages/admin/groups/main-group';
import SubGroups from '../pages/admin/groups/sub-groups';
import Products from '../pages/admin/products';
import Audios from '../pages/admin/audios';
import Brands from '../pages/admin/brands';
import Units from '../pages/admin/units';
import Carousel from '../pages/admin/carousel';
import Asides from '../pages/admin/asides';
import Popup from '../pages/admin/popup';
import SmartSections from '../pages/admin/smart-sections';
import Notifications from '../pages/admin/notifications';
import Orders from '../pages/admin/orders';
import Promocodes from '../pages/admin/promocodes';
import Feedbacks from '../pages/admin/feedbacks';
import Divisions from '../pages/admin/divisions';
import Clients from '../pages/admin/clients';
import Users from '../pages/admin/users';
import QrDevices from '../pages/admin/qr-devices';
import QrTerminals from '../pages/admin/qr-terminals';
import ClientEmails from '../pages/admin/client-emails';
import ClientEmailHistory from '../pages/admin/client-email-history';
import CrmDevices from '../pages/admin/crm-devices';
import CrmSms from '../pages/admin/crm-sms';
import CrmCalls from '../pages/admin/crm-calls';
import Employees from '../pages/admin/employees';
import Roles from '../pages/admin/roles';
import ExhibitionFirms from '../pages/admin/exhibition-firms';
import ExhibitionItems from '../pages/admin/exhibition-items';
import SyncsManual from '../pages/admin/syncs-smanual';
import SyncsSschedules from '../pages/admin/syncs-sschedules';
import SyncsShistories from '../pages/admin/syncs-shistories';
import ScalingSystems from '../pages/admin/scaling-systems';
import QrApps from '../pages/admin/qrApps';
import Settings from '../pages/admin/settings';
import NotFoundPage from '../pages/admin/not-found-page';
import FormComponent from './components/FormComponent';
import MainLayout from '../pages/admin/main-layout';
import ChangeMainGroup from '../pages/admin/groups/main-group/changeMainGroup';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<FormComponent />}
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            }
          >
            <Route
              path="/adminPage"
              element={<AdminPage />}
            ></Route>
            <Route
              path="/groups/maingroups"
              element={<MainGroup />}
            />
            <Route
              path='/groups/maingroups/:uuid'
              element={<ChangeMainGroup />}
            >
            </Route>
            <Route
              path="/groups/subgroups"
              element={<SubGroups />}
            />
            <Route
              path="/products"
              element={<Products />}
            />
            <Route
              path="/audios"
              element={<Audios />}
            />
            <Route
              path="/brands"
              element={<Brands />}
            />
            <Route
              path="/units"
              element={<Units />}
            />
            <Route
              path="/carousel"
              element={<Carousel />}
            />
            <Route
              path="/aside"
              element={<Asides />}
            />
            <Route
              path="/popup"
              element={<Popup />}
            />
            <Route
              path="/smartSections"
              element={<SmartSections />}
            />
            <Route
              path="/notifications"
              element={<Notifications />}
            />
            <Route
              path="/orders"
              element={<Orders />}
            />
            <Route
              path="/promocodes"
              element={<Promocodes />}
            />
            <Route
              path="/feedbacks"
              element={<Feedbacks />}
            />
            <Route
              path="/divisions"
              element={<Divisions />}
            />
            <Route
              path="/clients"
              element={<Clients />}
            />
            <Route
              path="/users"
              element={<Users />}
            />
            <Route
              path="/qrDevices"
              element={<QrDevices />}
            />
            <Route
              path="/qrTerminals"
              element={<QrTerminals />}
            />
            <Route
              path="/clientEmails"
              element={<ClientEmails />}
            />
            <Route
              path="/clientEmailHistory"
              element={<ClientEmailHistory />}
            />
            <Route
              path="/crmDevices"
              element={<CrmDevices />}
            />
            <Route
              path="/crmSms"
              element={<CrmSms />}
            />
            <Route
              path="/crmCalls"
              element={<CrmCalls />}
            />
            <Route
              path="/employees"
              element={<Employees />}
            />
            <Route
              path="/roles"
              element={<Roles />}
            />
            <Route
              path="/exhibitions/firms"
              element={<ExhibitionFirms />}
            />
            <Route
              path="/exhibitions/items"
              element={<ExhibitionItems />}
            />
            <Route
              path="/syncs/smanual"
              element={<SyncsManual />}
            />
            <Route
              path="/syncs/sschedules"
              element={<SyncsSschedules />}
            />
            <Route
              path="/syncs/shistoires"
              element={<SyncsShistories />}
            />
            <Route
              path="/scalingSystems"
              element={<ScalingSystems />}
            />
            <Route
              path="/qrApp"
              element={<QrApps />}
            />
            <Route
              path="/settings"
              element={<Settings />}
            />
          </Route>
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
