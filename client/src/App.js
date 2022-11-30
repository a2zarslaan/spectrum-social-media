import Login from './pages/login/login.component';
import Register from './pages/register/register.component';

import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Outlet,
	Navigate,
} from 'react-router-dom';

import './styles.scss';
import Navbar from './components/navbar/navbar.component';
import Leftbar from './components/leftbar/leftbar.component';
import Rightbar from './components/rightbar/rightbar.component';
import Home from './pages/home/home.component';
import Profile from './pages/profile/profile.component';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/authContext';

import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
	const { currentUser } = useContext(AuthContext);

	const { darkMode } = useContext(DarkModeContext);

	const queryClient = new QueryClient();

	const Layout = () => {
		return (
			<QueryClientProvider client={queryClient}>
				<div className={`theme-${darkMode ? 'dark' : 'light'}`}>
					<Navbar />
					<div style={{ display: 'flex' }}>
						<Leftbar />
						<div style={{ flex: 6 }}>
							<Outlet />
						</div>
						<Rightbar />
					</div>
				</div>
			</QueryClientProvider>
		);
	};

	// to check for login
	const ProtectedRoute = ({ children }) => {
		if (!currentUser) {
			return <Navigate to='/login' />;
		}
		return children;
	};
	const router = createBrowserRouter([
		{
			path: '/',
			element: (
				<ProtectedRoute>
					<Layout />
				</ProtectedRoute>
			),
			children: [
				{
					path: '/',
					element: <Home />,
				},
				{
					path: '/profile/:id',
					element: <Profile />,
				},
			],
		},
		{
			path: '/login',
			element: <Login />,
		},
		{
			path: '/register',
			element: <Register />,
		},
	]);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
