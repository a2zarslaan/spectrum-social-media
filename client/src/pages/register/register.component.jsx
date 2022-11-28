import { Link } from 'react-router-dom';
import { useState } from 'react';

import axios from 'axios';

import './register.style.scss';

const Register = () => {
	const [inputs, setInputs] = useState({
		username: '',
		email: '',
		password: '',
		name: '',
	});

	const [err, setErr] = useState(null);

	const handleChange = (e) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};
	const handleClick = async (e) => {
		e.preventDefault();

		try {
			await axios.post('http://localhost:8800/api/auth/register', inputs);
		} catch (err) {
			setErr(err.response.data);
		}
	};

	console.log(err);
	return (
		<div className='register'>
			<div className='card'>
				<div className='left'>
					<h1>Spec</h1>
					<h1>Trum.</h1>
					<p>
						A social media website for smart people, who love being a part of a
						vibrant community, spread positivity and most importantly,
						comfortable in their own skin.
					</p>
					<span>Do you have an account?</span>
					<Link to='/login'>
						<button>Login</button>
					</Link>
				</div>
				<div className='right'>
					<h1>Register</h1>
					<form>
						<input
							type='text'
							placeholder='Username'
							name='username'
							onChange={handleChange}
						/>
						<input
							type='email'
							placeholder='Email'
							name='email'
							onChange={handleChange}
						/>
						<input
							type='password'
							placeholder='Password'
							name='password'
							onChange={handleChange}
						/>
						<input
							type='name'
							placeholder='Name'
							name='name'
							onChange={handleChange}
						/>
						{err && err}
						<button onClick={handleClick}>Register</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
