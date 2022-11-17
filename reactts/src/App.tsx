import './App.css'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './features/authentication/LoginPage'
import { ThemeProvider } from '@mui/material'
import { customTheme } from './styles/customTheme'
import MiniDrawer from './common/Navigation/Drawer'
import Dashboard from './features/dashboard/Dashboard'
import ApartmentList from './features/apartment/ApartmentList'
import BuildingList, {buildingID} from './features/building/BuildingList'
import EmployeeList from './features/employee/EmployeeList'
import VoucherList from './features/voucher/VoucherList'
import BuildingForm from './features/building/BuildingForm'
import ApartmentForm from './features/apartment/ApartmentForm'
import EmployeeForm from './features/employee/EmployeeForm'
import VoucherForm from './features/voucher/VoucherForm'
import CustomerList from './features/customer/CustomerList'
import ContractList from './features/contract/ContractList'
import ApartmentDetail from './features/apartment/ApartmentDetail'
import BuildingDetail from './features/building/BuildingDetail'
import InvoiceList from './features/invoice/InvoiceList'

export default function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<MiniDrawer />} >
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='building/list' element={<BuildingList />} />
          <Route path='apartment/list' element={<ApartmentList />} />
          <Route path='employee/list' element={<EmployeeList />} />
          <Route path='voucher/list' element={<VoucherList />} />
          <Route path='customer/list' element={<CustomerList />} />
          <Route path='contract/list' element={<ContractList />} />
          <Route path='invoices/list' element={<InvoiceList />} />
          <Route path='building/add' element={<BuildingForm />} />
          <Route path='apartment/add' element={<ApartmentForm />} />
          <Route path='employee/add' element={<EmployeeForm />} />
          <Route path='voucher/add' element={<VoucherForm />} />
          <Route path={`building/edit/`} element={<BuildingForm />} />
          <Route path='apartment/detail' element={<ApartmentDetail />} />
          <Route path='building/detail' element={<BuildingDetail />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

