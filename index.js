import React from 'react';
import ReactDOM from 'react-dom';
//import ShowDemo from './App';
import Myform from './HandleForms';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import ShowDemo from './App';

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

//ReactDOM.render(<ShowDemo></ShowDemo>,document.getElementById("root"));

//ReactDOM.render(<><h1>direct HTML</h1><h2>second line</h2></>,document.getElementById("root"));

/*
const a=10, b=20;
var c=a+b;

ReactDOM.render(<h1>total={c}</h1>,document.getElementById("root"));
*/
/*
const mytable=(
  <>
  <table bgcolor="green" border="7" cellPadding={10} cellSpacing={10}>
    <tr><th>Roll number</th><th>Student Name</th><th>Mark</th><th>Result</th></tr>
    <tr><td>1001</td><td>Gowthaman.K</td><td>99</td><td>Pass</td></tr>
    <tr><td>1001</td><td>Gowthaman.K</td><td>99</td><td>Pass</td></tr>
    <tr><td>1001</td><td>Gowthaman.K</td><td>99</td><td>Pass</td></tr>
    <tr><td>1001</td><td>Gowthaman.K</td><td>99</td><td>Pass</td></tr>
    <tr><td>1001</td><td>Gowthaman.K</td><td>99</td><td>Pass</td></tr>
  </table>
  <table border="3">
  <tr><th>Roll number</th><th>Student Name</th><th>Mark</th><th>Result</th></tr>
  <tr><td>1001</td><td>Gowthaman.K</td><td>99</td><td>Pass</td></tr>
  <tr><td>1001</td><td>Gowthaman.K</td><td>99</td><td>Pass</td></tr>
  <tr><td>1001</td><td>Gowthaman.K</td><td>99</td><td>Pass</td></tr>
  <tr><td>1001</td><td>Gowthaman.K</td><td>99</td><td>Pass</td></tr>
  <tr><td>1001</td><td>Gowthaman.K</td><td>99</td><td>Pass</td></tr>
</table>
</>
);

ReactDOM.render(mytable,document.getElementById('root'));
*/

// without using jsx : using createelement and appendchild
/*
const data1=React.createElement("h1",{},"without using jsx");
ReactDOM.render(data1,document.getElementById("root"));
*/

// Expression in jsx
/*
const a=10;
const b=20;

const addtion=<h1>This is react expression total : {a+b}</h1>;
ReactDOM.render(addtion,document.getElementById("root"));
*/
// use className instead of class --> because class is a react keyword
// use id as usual 
/*
function myfunction()
{
  //alert("button clicked");
  var un=document.getElementById("t1").value;
  //alert("Text:"+un);
  //document.write("<h1>User Name = "+un+"</h1>");
  document.getElementById("res").innerHTML=un;
}
const v=(
<>
  <h1>React Form</h1>
  <label className='unlbl'>Enter User Name</label>
  <input type="text" id="t1" />
  <button onClick={myfunction}>clickme</button>
   <div id="res"></div>
</>
);

ReactDOM.render(v,document.getElementById("root"));
*/
// control statements (only if available, no else elseif,...)
/*
function myfunction()
{  
  var mark=parseInt(document.getElementById("m1").value);
  if (mark>49)
    document.getElementById("res").innerHTML="pass";
  else
    document.getElementById("res").innerHTML="fail";
}
const v=(
<>
  <h1>React Form</h1>
  <label className='unlbl'>Enter Mark:</label>
  <input type="text" id="m1" />
  <button onClick={myfunction}>Find Result</button>
   <div id="res"></div>
</>
);

ReactDOM.render(v,document.getElementById("root"));
/*
const v=5;
var res="";
if(v>34)
{
  res="pass";
}
else{
  res="fail";
}
const printvalue=<h1>{res}</h1>;
ReactDOM.render(printvalue,document.getElementById("root"));
*/
//ReactDOM.render(<ShowDemo></ShowDemo>,document.getElementById("root"));
//ReactDOM.render(<ShowDemo name="gowthaman" address="karur"></ShowDemo>,document.getElementById("root"));

//array map 
/*
const myarr=["karur","trichy","salem","chennai","madhurai"];

const mylist=myarr.map((myvar)=><li>{myvar}</li>);

ReactDOM.render(mylist,document.getElementById("root"));
*/

/*
const myarr=["karur","trichy","salem","chennai","madhurai"];

//const v1=myarr[0]; // old method
//const v2=myarr[1];
//const v3=myarr[2];

const[v1,,,v4]=myarr;  // new method

ReactDOM.render(v4,document.getElementById('root'));
*/
// json object
/*
const sdetails={
  rno:1,
  name:'sathis',
  mark:88,
  res:'pass'
}

const printmsg='roll no.'+''+sdetails.rno+'name='+sdetails.name+' mark :'+sdetails.mark+' result:'+sdetails.res;

function MyRes()
{
  return(
    <>
    
      <br></br>
      {printmsg}
      <br></br>
      Student Name: {sdetails.name}
      <br></br>
      {sdetails.mark}
      <br></br>
      {sdetails.rno}
      <br></br>
      {sdetails.res}   
   </>
  );
}
ReactDOM.render(<MyRes/>,document.getElementById('root'));
*/



//ReactDOM.render(<ShowDemo name="gowthaman" address="karur"></ShowDemo>,document.getElementById("root"));
//ReactDOM.render(<ShowDemo></ShowDemo>,document.getElementById("root"));
ReactDOM.render(<Myform></Myform>,document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
