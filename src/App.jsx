
import './App.css';
import { Button } from 'react-bootstrap';
import { Entry } from './page/entry/Entry';
import { DefaultLayout } from './layout/DefaultLayout';
import { Dashboard } from './page/dashboard/Dashboard';
import { AddTicket } from './page/newTicket/AddTicket';


function App() {
  return (
    <div className="App">
   {/* <Entry/> */}
   <DefaultLayout>
   {/* <Dashboard/> */}
   <AddTicket/>
   </DefaultLayout>
     
      
    </div>
  );
}

export default App;
