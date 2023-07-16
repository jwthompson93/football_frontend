import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Table from '../Table/TableComponent';
import Fixture from '../Fixture/Fixture';
import TeamPage from '../Team/TeamPage';

function SiteRouter() {
    
    return (
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/table" element={<Table/>}/>
              <Route path="/fixture" element={<Fixture/>}/>
              <Route path="/team/:id" element={<TeamPage/>}/>
          </Routes>
        </BrowserRouter>
    )
}

export default SiteRouter;