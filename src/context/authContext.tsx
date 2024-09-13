"use client"
import auth from "@/firebase/firebaseauth";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

type AuthContextType = {
    isAuthenticate: boolean,
    setisAuthenticate: (status: boolean) => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export default function AuthContextProvider({ children }: { children: React.ReactNode }) {
    const [isAuthenticate, setisAuthenticate] = useState(false)
    const router = useRouter()

    onAuthStateChanged(auth, (user) => {
        if(!user) {
            router.push('/')
        } else {
            if(user.emailVerified) {
                router.push('/home')
            } else {
                router.push('/verify')
            }
        }
    })
    return (
        <AuthContext.Provider value={{ isAuthenticate, setisAuthenticate }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)