import React from 'react';
export interface HomeInterface {}

const Home : React.FC<HomeInterface> = () => {
	return <div className='w-full'>Home</div>;
};

export default Home;
