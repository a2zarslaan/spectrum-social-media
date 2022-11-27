import { Link } from 'react-router-dom'

import './register.style.scss'

const Register = () => {
  return <div className='register'>
    <div className="card">
      <div className="left">
        <h1>Spec</h1>
        <h1>Trum.</h1>
        <p>A social media website for smart people, who love being a part of a vibrant community, spread positivity and most importantly, comfortable in their own skin.</p>
        <span>Do you have an account?</span>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
      <div className="right">
        <h1>Register</h1>
        <form>
          <input type="text" placeholder='Username' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <input type="name" placeholder='Name' />
          <button>Register</button>
        </form>
      </div>
    </div>
  </div>
}

export default Register
