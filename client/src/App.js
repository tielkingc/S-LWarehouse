import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, InMemoryCache,  ApolloProvider } from '@apollo/client';
import decode from 'jwt-decode'

import HomeNav from './components/HomeNav';
import Footer from './components/Footer';
import AdminNav from './components/AdminNav'

import Home from './pages/Home';
import SignIn from './pages/Login';
import Units from './pages/Units';
import Waitlist from './pages/Waitlist';
import Contact from './pages/Contact';
import GetWaitlist from './pages/ClientWait'
import FAQ from './pages/FAQ'
import GetClients from './pages/Clients';
import EditClients from './pages/EditUser';
import AddClients from './pages/AddUser'

import 'bootstrap/dist/css/bootstrap.min.css';


<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
  integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
  crossorigin="anonymous"
/>



const client = new ApolloClient({
  request: (operation) => {    
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  cache: new InMemoryCache(),
  uri: "/graphql"
});


function App() {
  const token = localStorage.getItem('id_token');
  if (token){
    const decoded = decode(token);
    console.log(decoded);

    
  if (decoded.data.admin === true) {
    return (
      <ApolloProvider client={client}>
      <Router>
        <div>
        <AdminNav />
        <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/clients" component={GetClients} />
          <Route exact path="/waitlistclients" component={GetWaitlist} />
          <Route exact path="/units" component={Units}/>
          <Route exact path="/edit" component={EditClients} />
          <Route exact path="/add" component={AddClients} />
        </Switch>
        </div>
        <Footer />
        </div>
    </Router>
    </ApolloProvider>
    )
  }

  
  }
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
        <HomeNav />
        <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/units" component={Units}/>
          <Route exact path ="/waitlist" component={Waitlist} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/faq" component={FAQ} />
        </Switch>
        </div>
        <Footer />
        </div>
    </Router>
    </ApolloProvider>
    )
    
}

export default App;
