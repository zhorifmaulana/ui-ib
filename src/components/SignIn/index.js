import React, { useState } from "react"
import { Link } from "gatsby"

import Image from "../image"
import Button from "../Button"
import { Styles } from "./style"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setLoading] = useState(false)

  const onChangeInput = (setFunc) => (e) => {
    setFunc(e.target.value)
  }

  const submitLogin = (e) => {
    e.preventDefault()
    setLoading(true)
    console.log(email)
    console.log(password)
    setTimeout(() => setLoading(false), 3000)
  }
  
  return (
    <Styles>
      <div className="big-logo-wrapper">
        <div className="big-logo">
          <Image imgName="IB_Logo_Big.png" alt="Innovation Battlefield" />
        </div>
        <div>
          <h1>Innovation Battlefield</h1>
          <div>powered by <b>VORMENT</b></div>
        </div>
      </div>
      <form onSubmit={submitLogin}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" onChange={onChangeInput(setEmail)} />
        <label htmlFor="email">Password</label>
        <input id="password" name="password" type="password" onChange={onChangeInput(setPassword)} />
        <Button type="submit" disabled={isLoading}>Sign In</Button>
      </form>
      <div className="to-register">No account? <Link to="/signup">Create One</Link></div>
    </Styles>
  )
}
