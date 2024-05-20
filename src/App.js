import './App.css';
import { Routes, Route } from 'react-router-dom'
import MainSidebar from './components/layouts/Sidebar';
import Documentation from './components/pages/Documentation';
import Calendar from './components/pages/Calendar';
import Ecommerce from './components/pages/Ecommerce';
import Examples from './components/pages/Examples';
import NavBar from './components/layouts/NavBar';
import { useState } from 'react';

const App = () => {
  const [isShowSideBar, setIsShowSideBar] = useState(true)
  const onDrawerOpen = () => {
    setIsShowSideBar(!isShowSideBar)
  }

  return (
    <div className="App">
      <NavBar onDrawerOpen={onDrawerOpen} />
      <div className="divider m-0 h-auto"></div>
      <div style={{ display: 'flex' }}>
        <MainSidebar isShowSideBar={isShowSideBar}/>
        <div className="divider"></div>
        <div className='w-full m-10'>
          <Routes>
            <Route path='/Documentation' element={<Documentation />} />
            <Route path='/Calendar' element={<Calendar />} />
            <Route path='/Ecommerce' element={<Ecommerce />} />
            <Route path='/Examples' element={<Examples />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
