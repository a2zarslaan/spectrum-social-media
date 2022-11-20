import './login.style.scss'

const Login = () => {
  return <div className='login'>
    <div className="card">
      <div className="left">
        <h1>Spec</h1>
        <h1>Trum.</h1>
        <p>A social media website for smart people, who love being a part of a vibrant community, spread positivity and most importantly, comfortable in their own skin.</p>
        <span>Don't have an account?</span>
        <button>Register</button>
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
