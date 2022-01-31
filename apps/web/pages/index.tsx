import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from 'ui';
import React from 'react';

export default function Web() {
	const session = useSession();

	if (session.status === 'loading') {
		return <p>Loading session...</p>;
	}

	return (
		<div>
			<h1>Webbbbster</h1>
			<Button />
			{session.status === 'unauthenticated' ? (
				<button onClick={() => signIn()}>SignIn</button>
			) : (
				<>
					<img src={session.data.user.image} alt={session.data.user.name} />
					<h1>Logged in as {session.data.user.email}</h1>
					<button onClick={() => signOut()}>SignOut</button>
				</>
			)}
		</div>
	);
}
