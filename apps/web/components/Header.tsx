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
				<a href="/" style={{ height: '32px' }} aria-label="Return to landing page">
					<img src="/static/icons/logo.svg" height="32" width="32" alt="Logo" />
				</a>
				<VerticalLine />
			</div>
			<nav>
				<VerticalLine />
				{session.status === 'unauthenticated' ? (
					<Button label="Login / Register" onClick={signIn} />
				) : (
					<>
						<Button label="Add Working day" onClick={() => console.log('clicked')}>
							Hello Threr
						</Button>
						<VerticalLine />
						<ProfileMenu {...session.data?.user} />
					</>
				)}
				<VerticalLine />
			</nav>
		</header>
	);
};
