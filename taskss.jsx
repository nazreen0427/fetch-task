import React,{useState} from 'react';
function TaskApp(){
    const[darkMode,setDarkMode]=useState(false)
    const changeTheme =()=>{
         setDarkMode(!darkMode)
    }
const stylingCss={
    height:"100vh",
    textAlign: "center",
    backgroundColor: darkMode ? "black" : "white",
    color: darkMode ? "white" : "black",
    paddingTop:"50px"
}
return(
    <div style={stylingCss}>
    <h1>{darkMode ? "DarkMode":"LightMode"}</h1>
    <button onClick={changeTheme}>Switch Theme</button>
    </div>
)
}
export default TaskApp