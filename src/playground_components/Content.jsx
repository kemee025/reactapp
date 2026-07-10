

const Content = ({count,fruits,products,updater}) => {
    // count = 25// props must not be mutated by the child component. props are read only. we cannot change the value of props in child component. 
    // //if we want to change the value of props, we must do it in parent component and send it to child component as props
    // a function that handles the click event of the button and decreases the count by 1
    function handle_decrease() {
        updater(count -1) 

        console.log(count);
    }
    // a function that handles the click event of the button and increases the count by 1
    function increase() {
        updater(count +1)
    }
    
  return (
    <div>
        <p> Count:{count} </p>
        {/* loop through array fruits: .map() */}
        <ul>
        {fruits.map(function(fruit, index){

            return <li key={index}> {fruit} </li>
        })
        }
        </ul>
        <p> Available Products: </p>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                </tr>
            </thead>
            <tbody>
                {
                products.map(function(pro) {
                    return (
                        <tr key={pro.id}>
                            <td>{pro.id}</td>
                            <td>{pro.name}</td>
                            <td>${pro.price}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
        <button onClick={increase}> Increase </button>
        {/* calling a function that responds to an event */}
        <button onClick={handle_decrease}> Decrease </button>
    </div>

    )

}

export default Content
