import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavTab } from '../../types';

export interface TabInterface {
	tab: NavTab
}

const Tab : React.FC<TabInterface> = ({tab}) => {
	return <li >
	<NavLink
		end
		to={tab.path}
		className={({ isActive }) =>
			`group relative w-full p-4 rounded-lg flex items-center justify-between hover:bg-[#5B5956] hover:bg-opacity-10 hover:duration-300 duration-300 mb-1 ${
				isActive ? 'bg-[#5B5956] bg-opacity-10' : ''
			}`
		}
	>
		{({ isActive }) => (
			<>
				<div className='flex items-center'>
					<tab.icon size={18} className='mr-3' />
					<span className='leading-none text-sm'>
						{tab.name}
					</span>
				</div>
				{tab.tag && (
					<div
						className={`text-xs w-5 rounded-sm flex items-center justify-center aspect-square bg-[#5B5956] ${
							isActive ? 'bg-opacity-20' : 'bg-opacity-10'
						} group-hover:bg-opacity-20 group-hover:duration-300 duration-300 text-[#5B5956] font-light`}
					>
						{tab.amount}
					</div>
				)}
			</>
		)}
	</NavLink>
</li>;
};

export default Tab;
