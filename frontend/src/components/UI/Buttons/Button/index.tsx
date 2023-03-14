import React, { MouseEventHandler } from 'react';

interface ButtonProps {
	styles: string;
	children: React.ReactNode;
	onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, styles, onClick }: ButtonProps) => {
	return (
		<button
			className={styles}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
