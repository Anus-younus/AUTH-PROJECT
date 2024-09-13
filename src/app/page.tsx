"use client"

import Login from "@/components/login"
import SignUp from "@/components/signup"
import { useAuthContext } from "@/context/authContext"

export default function Home() {
  const {isAuthenticate} = useAuthContext()!
    return (
      <>
        {
          isAuthenticate?
          <SignUp />:
          <Login />
        }
      </>
    )
}