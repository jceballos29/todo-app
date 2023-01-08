/** @format */

import React from 'react';
export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
	const date = new Date();

	return (
		<div className='w-full max-w-md h-full mx-auto  px-2 py-10'>
			<header className='w-full'>
				<h2 className='text-2xl font-bold'>
					Good{' '}
					{date.getHours() < 12
						? 'Morning'
						: date.getHours() < 18
						? 'Afternoon'
						: 'Evening'}
				</h2>
				<p className='text-xl font-light text-slate-500'>
					It's{' '}
					{date.toLocaleString('en-US', {
						weekday: 'long',
						month: 'short',
						day: '2-digit',
					})}
				</p>
			</header>
		</div>
	);
};

export default Home;
