import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Shafayat";
  const person = {
    name : "Tazoar",
    job : "Student"
  }
  const style ={
    color : 'cyan' 
  }
  const names = ['shafayat', 'tazoar', 'afi'];

  //Procedure 1
  const products = [
    { name: 'Photoshop', price: '$50'},
    { name: 'Illustrator', price: '$40'},
    { name: 'PDF Reader', price: '$20'}
  ]

  //Procedure 2
  const products2 = [
    { name: 'Photoshop', price: '$50'},
    { name: 'Illustrator', price: '$40'},
    { name: 'PDF Reader', price: '$20'}
  ]

  //Procedure 3
  const products3 = [
    { name: 'Photoshop', price: '$50'},
    { name: 'Illustrator', price: '$40'},
    { name: 'PDF Reader', price: '$20'}
  ]

  //Procedure 4
  const products4 = [
    { name: 'Photoshop', price: '$50'},
    { name: 'Illustrator', price: '$40'},
    { name: 'PDF Reader', price: '$20'}
  ]

  //For MAP test
  const star = ['Shahrukh Khan', 'Salman Khan', 'Aamir khan'];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>My Heading: {(2+5)*2}</h1>
        <h3>My Heading: {name}</h3>
        <h4 className="" style = {style}>{person.name + " " + person.job}</h4>
        <p style = {{ color : 'cyan' }}>My first react paragraph.</p>

        <ul>
          {star.map(element => <li>{element}</li>)}
          {products3.map(element => <li>{element.name}</li>)}
        </ul>
        {/* State */}
        <Count></Count>

        {/* Load dynamic users */}
        <Users></Users>

        
        {/* Procedure 1 */}
        <Product name={products[0].name} price={products[0].price}></Product>
        <Product name={products[1].name} price={products[1].price}></Product>
        <Product name={products[2].name} price={products[2].price}></Product>
        
        {/* Procedure 2 */}
        <Products product={products2[0]}></Products>
        <Products product={products2[1]}></Products>
        <Products product={products2[2]}></Products>

        {/* Procedure 3 */}
        <Products1 product={products3[0]}></Products1>
        <Products1 product={products3[1]}></Products1>
        <Products1 product={products3[2]}></Products1>

        {/* Procedure 4 */}
        {products4.map(element => <Products product={element}></Products>)}
        
        

        <Person name="shafayat" job="student"></Person>
        <Person name="tazoar" job="web developer"></Person>
        <Person name="afi" job="software engineer"></Person>
        <Person name={names[0]} job="software developer"></Person>
      </header>
      
    </div>
  );
}

//Load dynamic data
function Users(){
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data=>setUsers(data))
  },[])
  return (
     <div>
       <h3>Dynamic Users: {users.length}</h3>
       <ul>
         {users.map(element => <li>{element.name}</li>)}
       </ul>
     </div>
   

  )
}

//State
function Count(props){
  const [count, setCount] = useState(0)
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  return (
     <div>
       <h1>Count: {count}</h1>
       <button onClick={() => setCount(count - 1)}>Decrease</button>
       <button onClick={handleIncrease}>Increase</button>
     </div>


  )
}

//  Procedure 1 
function Product(props){
  const productStyle = {
    backgroundColor : 'cyan',
    float : 'left',
    border : '1px solid grey',
    borderRadius : '5px',
    height : '270px',
    width : '250px'
  }
  return (
     <div style={productStyle}>
        <h2>{props.name}</h2>
        <h1>{props.price}</h1>
        <button>Buy Now</button>
     </div>

  )
}

//Procedure 2
function Products(props){
  const productStyle = {
    backgroundColor : 'cyan',
    float : 'left',
    border : '1px solid grey',
    borderRadius : '5px',
    height : '270px',
    width : '250px'
  }
  return (
     <div style={productStyle}>
        <h2>{props.product.name}</h2>
        <h1>{props.product.price}</h1>
        <button>Buy Now</button>
     </div>

  )
}

//Procedure 3
function Products1(props){
  
  const productStyle = {
    backgroundColor : 'cyan',
    float : 'left',
    border : '1px solid grey',
    borderRadius : '5px',
    height : '270px',
    width : '250px'
  }
  const {name , price} = props.product;
  return (
     <div style={productStyle}>
        <h2>{name}</h2>
        <h1>{price}</h1>
        <button>Buy Now</button>
     </div>

  )
}

//Procedure 4
function Products4(props){
  
  const productStyle = {
    backgroundColor : 'cyan',
    float : 'left',
    border : '1px solid grey',
    borderRadius : '5px',
    height : '270px',
    width : '250px'
  }
  const {name , price} = props.product;
  return (
     <div style={productStyle}>
        <h2>{name}</h2>
        <h1>{price}</h1>
        <button>Buy Now</button>
     </div>

  )
}

function Person(props){
  return (
    <div style = {{ border: '1px solid cyan' , padding: '19px', margin: '10px'}}>
      <h4>This is my first component</h4>
      <h3>This is my second component</h3>
      <h4>This is {props.name}</h4>
      <h3>This is {props.job}</h3>
    </div>
)}

export default App;
