import React, { useState } from "react"
import { Link } from "gatsby"

import Image from "../image"
import Button from "../Button"
import { Styles } from "./style"

export default function SignUp() {
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [competition, setCompetition] = useState("")
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
        <label htmlFor="fullname">Full Name</label>
        <input id="fullname" name="fullname" type="text" onChange={onChangeInput(setFullname)} required />
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" onChange={onChangeInput(setEmail)} required />
        <label htmlFor="email">Password</label>
        <input id="password" name="password" type="password" minLength="8" required
          onChange={onChangeInput(setPassword)}
        />
        <label htmlFor="phone">Phone Number</label>
        <input id="phone" name="phone" type="tel" required
          pattern="^\+?[0-9\- ]+$"
          onChange={onChangeInput(setPhone)}
        />
        <Button type="submit" disabled={isLoading}>Sign Up</Button>
      </form>
      <div className="to-register">Already have account? <Link to="/signin">Sign In</Link></div>
    </Styles>
  )
}
