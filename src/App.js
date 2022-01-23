import * as React from "react";
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import { PersistGate } from 'redux-persist/integration/react'
import { history } from './history';
import HomeComponent from './components/Home';
import ProductComponent from './components/Product';
import ProductList from './components/ProductList';
import AboutComponent from './components/About';
import ContactComponent from './components/Contact';
import NavbarComponent from './components/Navbar';
import FooterComponent from "./components/Footer";
import DeliveryComponent from "./components/Delivery";
import CartComponent from "./components/Cart";
import CheckOutComponent from "./components/CheckOut";
import ReceiptComponent from "./components/Receipt";
import store from './store/store';
import {ReactComponent as ReactLogo} from './checkbox.svg';
import './App.css';

const theme = {
  overrides: {
      MuiFormLabel: {
          root: {
              color: 'grey',
              '&.Mui-focused': {
                  color: 'grey'
              }
          },
      },
      MuiInput: {
          underline: {
              '&:after': {
                  borderBottomColor: 'grey',
              },
          },
      },
      MuiInputLabel: {
          root: {
              color: 'grey',
          },
      },
      MuiRadio: {
          root: {
              color: 'grey',
          },
          colorSecondary: {
              '&$checked': {
                  color: 'grey',
              },
          },
      },
  },
};

const App = () => {
  const muiTheme = createTheme(theme);
  return (
    <Provider store={store().store}>
        <PersistGate loading={null} persistor={store().persistor}>
          <MuiThemeProvider theme={muiTheme}>
            <Router history={history}>
              <ToastContainer autoClose={2000} hideProgressBar closeButton={false} toastClassName="toaster" icon={<ReactLogo width="32px"/>}/>
              <NavbarComponent />
              <div className="content">
                <Switch>
                  <Route exact path="/" component={HomeComponent} />
                  <Route path="/produkter/:id" component={ProductComponent} />
                  <Route path="/produkter" component={ProductList} />
                  <Route path="/om-oss" component={AboutComponent} />
                  <Route path="/kontakt" component={ContactComponent} />
                  <Route path="/frakt" component={DeliveryComponent} />
                  <Route path="/check-out" component={CheckOutComponent} />
                  <Route path="/kundvagn" component={CartComponent} />
                  <Route path="/kvitto" component={ReceiptComponent} />
                  <Redirect from="*" to="/" />
                </Switch>
              </div>
              <FooterComponent />
            </Router>
          </MuiThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
