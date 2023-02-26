import { useState } from "react"
export default function Auth() {
    const [user, setUser] = useState({
        email: ''
    });
    const onAuthChange = (e) => {
        setUser(e.target.value)
    }

    const onAuthClick = () => {
        localStorage.setItem("user", JSON.stringify(user))
        window.location.reload()
    }

    return(
        <div>
            <input type="email" onChange={(e)=>onAuthChange(e)} />
            <input type="button" onClick={onAuthClick} value="Log up" />
        </div>
    )
}