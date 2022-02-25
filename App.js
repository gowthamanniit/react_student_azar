import React from 'react';
import { ReactDOM } from 'react-dom';

//import logo from './logo.svg';
//import './App.css';
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
*/
/*
function ShowDemo()
{
  return <h1> This is simple modified react application </h1>;
}

export default ShowDemo;
*/
/*
function ShowDemo()
{  
    return(
      <div>
            <h1> This is simple modified react application </h1>
            <h1> This is simple modified react application </h1>
            <h1> This is simple modified react application </h1>
            <marquee bgcolor="green"> <h1> This is simple modified react application </h1></marquee>
            <h1> This is simple modified react application </h1>
            <h1> This is simple modified react application </h1>;
      </div>
    );
}
export default ShowDemo;
*/
/*
class SuperClass extends React.Component
{
  render()
  {
    return <h1> This is super class component</h1>;
  }
}
class BaseClass extends SuperClass
{
  render()
  {

    return(
      <>
      <SuperClass></SuperClass>
       <h1>This is base class component</h1>
       </>
    );
  }
}
class ShowDemo extends BaseClass
{
render()
{
  return(
    <>
    <BaseClass></BaseClass>
     <h1> This is derive class component</h1>
     </>
  );
}
}
export default ShowDemo;
*/
//constructor demo
//================
/*
class ShowDemo extends React.Component
{
  constructor()
  {
    //alert("very first constructor called");
    super();
    this.state={sno:1,
      name:'gowthaman',
      mark:99      
    };
  }
  render()
  {
    return(<>
          <h1> using consructor : to take the data</h1>
          <h2> Sno  : {this.state.sno} </h2>
          <h2> Name : {this.state.name} </h2>
          <h2> Mark : {this.state.mark} </h2>
    </>);
  }

}
export default ShowDemo;
*/
// props demo (props : properties)
// use: arg or parameter passing
// one props--> store to multiple attributes
//============================================

/*
class ShowDemo extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      name:props.name,
      address:props.address
    };
    
  }
  render()
  {
    return( 
      <>
    <h1>Name:{this.state.name}</h1>
    <h1>Address:{this.state.address}</h1>
    </>
    );
  }
}
export default ShowDemo;
*/
// multiple parameter passing  using props
/*
class ShowDemo extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      name:props.name,
      address:props.address
    };    
  }

  changeAddress=()=>
  {
    this.setState({address:"velur"});
  }
  render()
  {
    return( 
      <>
    <h1>Name:{this.state.name}</h1>
    <h1>Address:{this.state.address}</h1>
    <button onClick={this.changeAddress}>click me</button>
    </>
    );
  }
}
export default ShowDemo;

*/
/*
class ShowDemo extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      name:props.name,
      address:props.address
    };    
  }
   static getDrivedStateFromProps(props,state)
   {
     alert("Test");
     console.log("test data drived state");
   }

  componentDidMount() {
  setTimeout(() => {
    this.setState({name: "azar",address:"velur"})
  }, 3000)
}
  render()
  {
        return( 
      <>
    <h1>Name:{this.state.name}</h1>
    <h1>Address:{this.state.address}</h1>
    </>
    );
  }
}
export default ShowDemo;
*/
// unmount lifecycle component :  
/*
class ShowDemo extends React.Component
{
constructor()
{
  super();
  this.state={show:true};
}
delHeader=()=>
{
  this.setState({show:false});
}
showHeader=()=>
{
  this.setState({show:true});
}
render()
{
  let myheader;
  if(this.state.show)
  {
    myheader=<TestDemoUnmount/>;
  }
  return (
      <>
        {myheader}
        <button type='button' onClick={this.delHeader}>Delete Header</button>
        <button type='button' onClick={this.showHeader}>Show Header</button>

      </>
  );
}
}

class TestDemoUnmount extends React.Component
{
  componentWillUnmount()
  {
    alert("unmount - delete");
  }
  render()
  {
    return <h1>This is unmounting Text</h1>;
  }
}
export default ShowDemo;
*/
function ShowAns(props)
{
  /*return(
    <>
    <li>
      I am a {props.name}
    </li>
    </>
  );*/
  return <li>I am {props.name}</li>;
}

class ShowDemo extends React.Component
{
  render()
  {
    const myarr=['gowtham','azar','raja','kumar','solai','kumar','ramesh'];
    return(
      <>
        <ol type="I">
        {myarr.map((var1)=><ShowAns name={var1}/>)}
        </ol>
      </>
    );
  }  

}
export default ShowDemo;