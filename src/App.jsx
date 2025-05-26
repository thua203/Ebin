import { Routes, Route, Navigate} from 'react-router-dom'
import HomePage from './layout/HomePage'
import Account from './page/Account/Account'
import BinMap from './page/BinMap/BinMap'
import Bins from './page/Bins/Bins'
import Dashboard from './page/Dashboard/Dashboard'
import Users from './page/Users/Users'
import RouteTruck from './page/Routes/RouteTruck'
import WelcomeContainer from './layout/WelcomePage/WelcomeContainer'
import WelcomePage from './layout/WelcomePage'
import Login from './page/Login/Login'
import Logout from './page/Logout/Logout'


function App() {
  return (
    <Routes>
      <Route element={<WelcomeContainer/>}>
        <Route path="/" element={<WelcomePage/>}/>
        <Route path="/login" element={<Login/>}/>
      </Route>

      <Route path="/home" element={<HomePage/>}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="bin" element={<Bins />} />
        <Route path="map-bin" element={<BinMap />} />
        <Route path="route-truck" element={<RouteTruck />} />
        <Route path="user" element={<Users />} />
        <Route path="account" element={<Account />} />
        <Route path="logout" element={<Logout/>}/>
      </Route>
    </Routes>
  )
}

export default App
