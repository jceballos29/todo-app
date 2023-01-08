/** @format */

import { IconType } from 'react-icons/lib';

export interface NavTab {
	name: string;
	icon: IconType;
	path: string;
	tag: boolean;
	amount: number;
}
