import { signIn, useSession } from 'next-auth/react';
import React from 'react';

export default function Web() {
	const { status } = useSession({
		required: true,
		onUnauthenticated() {
			signIn();
		},
	});

	if (status === 'loading') {
		return <></>;
	}

	return <div>Dashboard</div>;
}
