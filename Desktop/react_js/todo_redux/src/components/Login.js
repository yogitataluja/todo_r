import React, { useState } from 'react'
import { fire }from '../auth/FirebaseAuth'
import { useHistory } from 'react-router'

const Login = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const history= useHistory()
    // firebase
    const handleSubmit = (event) => {
        event.preventDefault()
        fire.auth().signInWithEmailAndPassword(email,password).then(()=>{
            alert("login sucessful")
            history.push("/todo")
          }).catch((error)=>{
            alert("No user exist | ",error);
          })
    }
    return (
        <>
            <div className="container">
                <div className="row w-75">
                    <div className="col">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                    onChange={(ev) => setemail(ev.target.value)}
                                />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                                    onChange={(ev) => setpassword(ev.target.value)} />
                            </div>
                            <div className="d-flex justify-content-between mt-4">
                            <button type="submit" className="btn btn-primary">Login</button>
                            <button onClick={()=>{
                            history.push("/signup")
                        }} type="button" className="btn btn-primary">Sign up</button>
                            </div>
                            
                        </form>
                        
                    </div>
                </div>

            </div>

        </>
    )
}

export default Login
