import { useState } from "react";

const Form = ({balance, setBalance}) => {
    // a state to track amount that the user will enter in the input field: useState hook

  const [amount, setAmount] = useState("")
  function withdraw() {
    
    if (amount == ""){
      alert("Oga, how much you wan withdraw?");
      return false;
    }
    if(amount > balance) {
      alert("Oga, you no get that kind money for your account");
      return false;
    }
    var amount_to_withdraw = Number(amount);
    var currentBalance = balance - amount_to_withdraw;
    setBalance(currentBalance);
    setAmount(""); // clear the input field after withdraw
}
function deposit() {
  if (amount == ""){
    alert("Oga, how much you wan deposit?");
    return false;
  }

  var amount_to_deposit = Number(amount);
  var currentBalance = balance + amount_to_deposit;
  setBalance(currentBalance);
  setAmount(""); // clear the input field after deposit
}

  return (
    <div className="row">
      <div className="col-md-8 py-4 offset-md-2">
        <div className="mb-2"> 
             {/* how to manage input in react  */}
             <input type="number" className="form-control" value={amount} onChange={function(e){
               setAmount(e.target.value) 

             }} />

            
            </div>  
            <div className="mb-2">   
                <button className="btn btn-danger col-6" onClick={withdraw}>Withdraw</button>
                <button className="btn btn-success col-6" onClick={deposit}>Deposit</button>
      </div>
    </div> 
    </div>
     )
}

export default Form;