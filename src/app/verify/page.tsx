"use client"

import { handleVerify } from "@/firebase/firebaseauth"

export default function Verify() {
    return (
        <>
           <div className="container">
                <div className="row">
                    <p style={{textAlign: "center"}}>Verify your email</p>
                    <button onClick={handleVerify}>sendAgain</button>
                </div>
            </div>
        </>
    )
}