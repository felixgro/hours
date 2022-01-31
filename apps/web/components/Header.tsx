import * as React from 'react';
import { Button } from 'ui';
import { ProfileMenu } from './ProfileMenu';
import { signIn, useSession } from 'next-auth/react';
import { VerticalLine } from './shared/VerticalLine';

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = () => {
	const session = useSession();

	return (
		<header>
			<div>
				<VerticalLine />
				<img src="/static/icons/logo.svg" height="32" width="32" alt="Logo" />
				<VerticalLine />
			</div>
			<nav>
				<VerticalLine />
				{session.status === 'unauthenticated' ? (
					<Button label="Login / Register" onClick={signIn} />
				) : (
					<ProfileMenu {...session.data?.user} />
				)}
				<VerticalLine />
			</nav>
		</header>
	);
};
