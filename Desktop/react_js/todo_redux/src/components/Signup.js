import React,{useState} from 'react'
import {fire} from '../auth/FirebaseAuth'
import { useHistory } from 'react-router'
const Signup = () => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("")
    const history= useHistory()
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(email, password);
        // Firebase
        fire.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                alert("User Created")
            }).catch(() => {
                alert("Error Occured or user not created")
            })
    }
    return (
        <>
            <div className="container">
                <div className="row w-75" >
                    <div className="col ">
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
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm"
                                    onChange={(ev) => setpassword(ev.target.value)} />
                            </div>
                            <div className="d-flex justify-content-between">
                            <button type="submit" className="btn btn-primary mt-4 ">Sign Up</button>
                            <button type="submit" onClick={()=>history.push("/")} className="btn btn-primary mt-4">Sign in instead</button>
                            </div>
                        </form>
                        
                    </div>
                </div>

            </div>

        </>
    )
}

export default Signup
