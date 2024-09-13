"use client"

import auth, { handleLogout } from "@/firebase/firebaseauth"

export default function Main() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <p>Welcome {auth.currentUser?.email}</p>
                    <button onClick={handleLogout}>logout</button>
                </div>
            </div>
        </>
    )
}