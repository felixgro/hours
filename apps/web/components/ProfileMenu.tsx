import * as React from 'react';
import { signOut } from 'next-auth/react';

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

	return (
		<div className="profile-menu">
			<button>
				<span>{name}</span>
				<img src={image} alt={name} onError={showAvatarFallback} />
				<ul className="profile-menu-dropdown">
					<li>
						<a href="/profile">Profile</a>
					</li>
					<li>
						<a href="/settings">Settings</a>
					</li>
					<li>
						<a href="/signout" onClick={() => signOut()}>
							Sign Out
						</a>
					</li>
				</ul>
			</button>
		</div>
	);
};
