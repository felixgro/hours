import * as React from 'react';
import { Button } from 'ui';
import { ProfileMenu } from './ProfileMenu';
import { signIn, useSession } from 'next-auth/react';

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = () => {
	const session = useSession();

	return (
		<header>
			<img src="/static/icons/logo.svg" height="42" width="42" alt="Logo" />
			<nav>
				{session.status === 'unauthenticated' ? (
					<Button label="Sign In" onClick={signIn} />
				) : (
					<ProfileMenu {...session.data?.user} />
				)}
			</nav>
		</header>
	);
};
