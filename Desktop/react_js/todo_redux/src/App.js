import React,{useState, useEffect} from 'react'
import './App.css'
// import Input from './components/Input'
import { Route, Switch, Redirect} from 'react-router-dom'
import Navbar from './components/Navbar'
import  Login from './components/Login'
import Signup from './components/Signup'
import Input from './components/Input'
import {auth} from './auth/FirebaseAuth'
const App = () => {
  const [user,setuser] = useState(null)
useEffect(()=>{
auth.onAuthStateChanged(user=>{
  if(user) setuser(user)
  else setuser(null)
})
},[])

  return (<>

         <Navbar user={user}/>
        <Switch>
        <Route exact path="/" >
          <Login user={user}/>
        </Route>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/todo" >
          <Input user={user}/>
        </Route>
        
        <Redirect to="/"/>
        </Switch> 
        
        {/* <Input />   */}
  </>
  )
}

export default App

