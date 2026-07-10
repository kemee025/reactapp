import { useState, useEffect } from "react";
import "./assets/meal.css";
import Header from "./meal_components/Header" 
import Hero  from "./meal_components/Hero";
import Categories  from "./meal_components/Categories";
import Footer  from "./meal_components/Footer";
import Loader from "./meal_components/Loader";
export const Meal = () => {
    // how to send get request in react app and use the data that comes back 
    const [categories,setCategories] = useState([]); // categories coming from the api endpoints will be stored here.Initially it is an empty arrar
    const [loading,setLoading] = useState(false); // tracking if there is an ongoing request been sent. So that we will be able to tell the user
    const [error,setError] = useState(false); // to determine if there is error with the server

    // a function that connects to an API
    function fetchMealCategories(){
        setLoading(true);
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(function(res){
            return res.json();

        })
        .then(function(data){
            
            setLoading(false)
            setError(false)
            setCategories(data.Categories);

        })
        .catch(function(err){
            setLoading(false)
            setError(true)
            setCategories([])
    

        })
    }
    
    // this hook is used to communicate with an external system
    
    useEffect(()=>{
        fetchMealCategories()

    },[]);



  return (
   <>
  <Header />
  <Hero />
  <Categories categories={categories} error={error} loading={loading}/>
  <Footer /> 
   </>
  )
}
