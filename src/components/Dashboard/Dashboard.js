import React from 'react';

const Dashboard = () => {
  return( 
    <section style={{height:"100vh", width:"100vw", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", color:"#fff", backgroundColor:"rgb(0 37 113 / .2)"}} id="dashboard">
      <h1 style={{textAlign:"center", fontSize:"2.9rem", margin:0, fontStyle:"italic", color:"#42bae8"}}>Welcome to Beach Paradise.</h1>
      <p style={{width:"30%", textAlign:"center", margin: 5, fontSize:"1.125rem", letterSpacing:.6, fontWeight:"lighter", color:"#cedbe4"}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
      <button style={{padding:"15px 35px", marginTop:20, backgroundColor:"#ff9f10", border:0, borderRadius:5, fontSize:"1.5rem", letterSpacing: 1.5, textShadow:"1px 1px 6px rgba(0,0,0,0.47)", fontWeight:"bold"}}>Book Now!</button>
    </section>
  );
}
 
export default Dashboard;