"use client"
import { useState, Dispatch, SetStateAction } from "react";

interface AuthProps {
    valid?: boolean,
    setValid: (valid: boolean) => void
}
const Auth = ({valid, setValid}:AuthProps) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (username: string, password: string) => {
        try {
            const response = await fetch("/api/auth", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username,
                    password
                }),
            })

            const data = await response.json()
            console.log("data from /auth:", data);
            setValid(data.response)
        } catch (error) {
            console.error("error performing auth:", error)
        }
    }

    return (
        <div className="flex flex-col p-15 border-2">
            <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} className="bg-gray-500" />
            <input type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)} className="bg-pink-200" />
            <button onClick={() => {
                console.log([username, password].join(","));
                handleSubmit(username, password);
            }} className="border-2 hover:cursor-pointer">submit</button>
        </div>
    )
}

export default Auth;