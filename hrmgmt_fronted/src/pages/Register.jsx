import { useState } from "react"

function Register() {
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [age, setAge] = useState("")

    let handleRegister = (e) => {
        e.preventDefault()
        console.log(name, email, password, age)
    }

    return (
        <div>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                />
                <br />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter emailid"
                />
                <br />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                />
                <br />
                <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Enter age"
                />
                <br />
                <button type="submit">Register</button>
            </form>
            <p>{name}</p>
            <p>{email}</p>
            <p>{age}</p>
        </div>
    )
}

export default Register