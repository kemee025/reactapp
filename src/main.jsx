import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import Blogger from './Blogger.jsx'
// import Playground from './Playground.jsx'
// import Banking from './Banking.jsx'
import Invento from './Invento';
import { ProductProvider } from './context/ProductContext';
import Hello from './banking_components/Hello.jsx'
import Hi from './banking_components/Hi.jsx'
import { Meal } from './Meal.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ProductProvider> */}
      {/* <App /> */}
      {/* <Layout /> */}
      {/* <Blogger /> */}
      {/* <Banking /> */}
      {/* <Playground /> */}
      {/* <Invento /> */}
      {/* a root component that shows blogger app */}
    {/* </ProductProvider> */}
    <Meal />
  </StrictMode>,
)
    
 

