"use client"

import { useAuthContext } from "@/context/authContext"
import { handleSignIn } from "@/firebase/firebaseauth"
import { useState } from "react"

export default function Login() {
    const { isAuthenticate, setisAuthenticate } = useAuthContext()!
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <>
            <div className="container">
                <div className="row">
                    <label htmlFor="email">Enter your name: </label>
                    <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} /><br />
                    <label htmlFor="password">Enter your password: </label>
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} /><br />
                    <p>If you dont have an account <a style={{color: "blue", cursor: "pointer"}} onClick={
                        () => {
                            setisAuthenticate(!isAuthenticate)
                        }
                    }>sign up</a></p>
                    <button onClick={() => { handleSignIn(email, password) }}>Login</button>
                </div>
            </div>
        </>
    )
}