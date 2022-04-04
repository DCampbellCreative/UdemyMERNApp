import React from 'react';
import { UsersList } from "../components/UsersList";

export const Users = () => {
	const USERS = [
		{
			id: 'u1',
			name: 'Doug Campbell',
			image: 'https://www.fillmurray.com/640/360',
			places: '3',
		},
	];

	return (
		<UsersList items={USERS} />
	)
};