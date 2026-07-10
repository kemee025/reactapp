import {useState} from 'react'

import AccountBalance from './banking_components/AccountBalance'
import Form from './banking_components/Form'
import Hello from './banking_components/Hello'

const Banking = () => {
   
    // var balance = 1000; // we cannot keep balance in a variable because it will be changing, we need to keep it in a state.
    // The balance state has to be here in the parent component because more than one child component will be using it.
    // The balance state will be sent to the child components as props.
     const [balance, setBalance] = useState(0) // we send a request to an API endpoints that returns 
     // balance of the user from db and it will be set as a default for useState hook. 
     // The balance state will be sent to the child components as props.
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1>Bankie Bank</h1>

            
            
            </div>
                </div>
                {/* other components assembled here */}
                {
                    balance > 1000 ? <p className="alert alert-success">Oga,You are rich!!</p> : <p className="alert alert-warning">Oga,Hustle More!!</p>
                }
                
        

        <AccountBalance balance={balance} />
        
        <Form balance={balance} setBalance={setBalance} />


        <hr />
        <Hello/>
        <Hi/>
        


        </div>
  )
}

export default Banking