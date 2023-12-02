import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Entry } from './page/entry/Entry';
import { DefaultLayout } from './layout/DefaultLayout';
import { AddTicket } from './page/newTicket/AddTicket';
import { TicketLists } from './page/Ticket-Lists/TicketLists.page';
import { Ticket } from './page/Ticket/Ticket';
import { Dashboard } from './page/dashboard/Dashboard';
import { PrivateRoute } from './components/private-route/PrivateRoute';

function App() {
  return (
    <div className="App">
    
         {/* <PrivateRoute path='/dashboard' ><Dashboard/></PrivateRoute> */}

              <DefaultLayout>
              <Routes>
              <Route path="/" element={<Entry/>}/>
              <Route path="/dashboard" element={<Dashboard/> } />
                <Route path='/add-ticket' element={<AddTicket />} />
                <Route path='/tickets' element={
              <TicketLists />} />
                <Route path='/ticket/:tId' element={<Ticket />} />
              </Routes> 
              </DefaultLayout>

       
     
    </div>
  );
}

export default App;
