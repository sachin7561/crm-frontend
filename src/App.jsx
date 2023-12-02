
import './App.css';
import { Button } from 'react-bootstrap';
import { Entry } from './page/entry/Entry';
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './page/dashboard/Dashboard';
import { AddTicket } from './page/newTicket/AddTicket';
import { TicketLists } from './page/Ticket-Lists/TicketLists.page';
import { Ticket } from './page/Ticket/Ticket';


function App() {
  return (
    <div className="App">
   {/* <Entry/> */}
   <DefaultLayout>
   {/* <Dashboard/> */}
   {/* <AddTicket/> */}
   {/* <TicketLists/> */}
   <Ticket/>
   </DefaultLayout>
     
      
    </div>
  );
}

export default App;
