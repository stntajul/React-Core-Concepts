import react, {useEffect, useState} from 'react'; 
import './App.css';

function App() {
  const products=[{name:'photoshop',price:'$99.60'},
                  {name:'illustrator',price:'$80.60'},
                  {name:'adobeReader',price:'$8.60'},
                  {name:'Premeium',price:'$185.60'},
              
                  

                ];
  
  return (
    <div className="App">
      <header className="App-header">
      <h1>Learning React</h1>
      <Counter></Counter>
      <Users></Users>
      <ul>
        {
        products.map(pd=><Product product={pd}></Product>)
        }
      </ul>


      
       
      </header>
    </div>
  );
  function Users(){
    const [users,setUser]=useState([]);
    useEffect(()=>{

      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUser(data));
    },[])
    
    return(
      <div>
        <h2>Dynamic Users</h2>
        <ul>
          {
            users.map(user=><li>{user.name}</li>)

          }
        </ul>
      </div>
    )
  }
  function Counter(){
    const [count,setCount]=useState(10);
    const handleIncrease=()=>{
      const newCount=count+1;
      setCount(newCount);

    };
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={handleIncrease}>Increase</button>
      </div>
    )
  }

  function Product(props){
    const PersonStyle={
      
      
      backgroundColor:'lightGray',
      padding:'15px 15px 15px',
      color:'Black',
      marginBottom:'25px',
      borderRadius:'10px',
      boxShadow:'5px 5px 5px gray'
    }
    console.log(props);
    
    return(
      
        <div style={PersonStyle}>
        <h1>{props.product.name}</h1>
        <h2>{props.product.price}</h2>
        <button>Buy Now</button>

      </div> 
    
    )
  }
}

export default App;
