import pic from './assets/fsh3.webp'

function Content(){
    return<>
        <div className="col md-6 p-4">
            <img src={pic} alt="" className="img-fluid rounded"/>
        </div>
        <div className="col md-6 p-4">
            <h3 style={{color: 'yellow',backgroundColor: 'purple',padding: '10px'}} className='mt-5'>Blog Section</h3>
            <p>This is our blog section</p>
            <button onClick={function(){alert('Welcome to our webpage')}} className="btn btn-dark" type="button">Learn More</button>

        </div>
    
    </>
}

export default Content