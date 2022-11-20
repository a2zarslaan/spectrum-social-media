import { Link } from 'react-router-dom'
import './login.style.scss'

const Login = () => {
  return <div className='login'>
    <div className="card">
      <div className="left">
        <h1>Spec</h1>
        <h1>Trum.</h1>
        <p>Come as you are</p>
        <span>Don't have an account?</span>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
      <div className="right">
        <h1>Welcome back! Login</h1>
        <form>
          <input type="text" placeholder='Username' />
          <input type="password" placeholder='Password' />
          <button>Login</button>
        </form>
      </div>
    </div>
  </div>
}

export default Login
