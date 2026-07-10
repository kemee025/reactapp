import Header from "./Header"
import Banner from "./Banner"
import Content from "./Content"
import Table from "./Table"

function Layout() {
    return <div className="container">
        <div className="row">
            <div className="col-12">
                <Header/> 
                
            <div >
                </div>
                <div className="row">
            <div className="col-12">
                <Banner/> 
                
            </div >

        </div>
        <div className="row">
        
            <Content/>
                  
        
    </div>
    </div>
        <div className="row">
        
            <Table/>
                  
        
    </div>
   </div>
   </div>
   
}

export default Layout