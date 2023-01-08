/** @format */

import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { Root } from './components/Root';
import { Completed, Home, Today, Upcoming } from './pages';

let router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				index: true,
				element: <Navigate to='/home' />
			},
			{
				path: 'home',
				element: <Home />
			},
			{
				path: 'today',
				element: <Today />
			},
			{
				path: 'upcoming',
				element: <Upcoming />
			},
			{
				path: 'completed',
				element: <Completed />
			},
			{
				path: '*',
				element: <div>Error</div>
			}
		]
	}
])


export default function App() {
	return <RouterProvider router={router} />;
}



