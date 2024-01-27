
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import {BrowserRouter} from "react-router-dom"
import { Provider } from "react-redux";
import store from "../src/redux/store.js";
import "../styles/global.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
        <BrowserRouter>
                <App />
        </BrowserRouter>
  </Provider>
  
  );