import "./assets/app.css"
import Create from "./invento_components/Create"
import Footer from "./invento_components/Footer"
import Header from "./invento_components/Header"
import Products from "./invento_components/Products"

const Invento = () => {
  return (
    <div className="container">

        <Header/>
        <Create/>
        <Products/>
        <Footer/>
        
    </div>
  )
}

export default Invento