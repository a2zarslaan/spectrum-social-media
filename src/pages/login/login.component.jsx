import './login.style.scss'

const Login = () => {
  return <div className='login'>
    <div className="card">
      <div className="left">
        <h1>Hello World.</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit vero rem quas doloremque placeat aperiam nemo architecto. Quae dolor maiores nulla mollitia aspernatur tempore unde, est odio nemo.</p>
        <span>Don't have an account?</span>
        <button>Register</button>
      </div>
      <div className="right">
        <h1>Login</h1>
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
