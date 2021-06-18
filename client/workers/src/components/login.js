import React from 'react'
export default function login(props) {
 check(val) => {
if(val=="admin@workers.com")
return()
    }
    return (
        <div>
            <form>
            <p>הכנס שם וסיסמא</p>
            <input type="mail" onChange={(e)=>check(e.target.value)}></input><label>your mail</label><br></br>
            <input type="password" ></input><label>password</label><br></br>
            <button >ok</button>
            </form>
       </div>
        
       )
      
 
 
 }