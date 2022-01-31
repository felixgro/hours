import * as React from 'react';
import { signOut } from 'next-auth/react';
import { VerticalLine } from './shared/VerticalLine';

type ProfileMenuProps = {
	image?: string;
	name?: string;
};

export const ProfileMenu: React.FC<ProfileMenuProps> = ({ image, name }) => {
	const [isOpen, setIsOpen] = React.useState(false);

	const showAvatarFallback: React.ReactEventHandler<HTMLImageElement> = (e) => {
		console.debug('Using Fallback Avatar');
		const avatarImg = e.target as HTMLImageElement;
		avatarImg.src = '/static/icons/avatar.png';
	};

	const logout: React.ReactEventHandler<HTMLAnchorElement> = (e) => {
		e.preventDefault();
		signOut();
	};

	return (
		<div className="profile-menu">
			<button>
				<img src={image} alt={name} onError={showAvatarFallback} />
				<span>{name}</span>
				<ul className="profile-menu-dropdown">
					<li>
						<a href="/dashboard">Dashboard</a>
					</li>
					<li>
						<a href="/account">Account</a>
					</li>
					<li>
						<a href="/" onClick={logout}>
							Logout
						</a>
					</li>
				</ul>
			</button>
		</div>
	);
};
