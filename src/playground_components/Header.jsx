
const Header = (props) => {
    console.log(props)
        return (

        <div className="row ">
       
           <h1 className="text-center">Welcome to {props.xyz}</h1>
           <p className="text-center">Count: {props.abc}</p>
            
            </div>
           
            )
        }

        export default Header          