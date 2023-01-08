/** @format */

import React from 'react';
import {
	RiCalendar2Line,
	RiCheckboxCircleLine,
	RiFileList2Line,
	RiHome2Line,
} from 'react-icons/ri';
import { NavTab } from '../../types';
import { Tab } from '../Tab';

export interface SidebarInterface {}

const Sidebar: React.FC<SidebarInterface> = () => {
	const navigation: Array<NavTab> = [
		{
			name: 'Home',
			icon: RiHome2Line,
			path: '/home',
			tag: true,
			amount: 6,
		},
		{
			name: 'Today',
			icon: RiFileList2Line,
			path: '/today',
			tag: true,
			amount: 2,
		},
		{
			name: 'Upcoming',
			icon: RiCalendar2Line,
			path: '/upcoming',
			tag: true,
			amount: 1,
		},
		{
			name: 'Completed',
			icon: RiCheckboxCircleLine,
			path: '/completed',
			tag: false,
			amount: 0,
		},
	];

	return (
		<aside className='h-full w-full max-w-xs bg-[#fdf5ee] rounded-xl py-10 px-8 shadow flex flex-col'>
			<ul>
				{navigation.map((item, index) => (
					<Tab key={index} tab={item}/>
				))}
			</ul>

			<div className='w-full mt-auto text-center text-xs text-slate-500'>
				Juan Ceballos - FI Group
			</div>
		</aside>
	);
};

export default Sidebar;
