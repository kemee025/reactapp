
import ppo from './assets/biz.jpg'
import Header from './playground_components/Header'
import Content from './playground_components/Content'
import Footer from './playground_components/Footer'
// i want to use hook useState() I need to import it from react
import { useState } from 'react'

const Playground = () => {
    // We sent a request to an API and we got appname
    var appname = "Blogger";
  
    // var count = 0; // because count will be changing,we cannot keep it in a variable, we need to keep it in a state. 
    const [count, setCount] = useState(0) // count is the container,
    //setcount is the only one that can change the count 
    // count++ is a crime: we dont update a state directly, we use the setCount() function to update the count.
    var fruits = ["Kiwi", "Banana", "Blueberry", "Apple", "Pineapple"];
    var products = [
        {id: 1, name: "Laptop", price: 51000},
        {id: 2, name: "Phone", price: 6500},
        {id: 3, name: "Tablet", price: 9300},
        {id: 4, name: "Watch", price: 3200},
    ];

    // State is used to keep a data that will be changing: react will update it by itself. Everywhere the state is used
   

    function sayHello() {
        alert("Hello Mr Akpan")
    }

  return (
    <div>

        <Header xyz={appname} abc={count} />
        <Content count={count} fruits={fruits} products={products}  updater = {setCount} />
       
        <Footer />

        {/* how to display image that is inside the public folder */}
        <img src="/assets/img/home-bg.jpg" alt="Home" className="img-fluid" /> 
        {/* How to display image that is inside the src folder  */}
        <img src={ppo} alt="a lady" />


    </div>
  )
}
export default Playground
