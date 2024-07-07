import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { DashboardPage } from '../../pages/DashboardPage/Dashboardpage';
import { Clients } from '../clients/Clients';
import { CreateClient } from '../createClient/CreateClient';
import { CreateAdmin } from '../createAdmin/CreateAdmin';
import { Products } from '../products/Products';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/clients" component={Clients} />
        <Route path="/create-client" component={CreateClient} />
        <Route path="/create-admin" component={CreateAdmin} />
        <Route path="/products" component={Products} />
        <Redirect from="/" to="/dashboard" />
      </Switch>
    </Router>
  );
}

export default App;