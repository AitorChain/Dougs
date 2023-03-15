import React, { useState } from 'react';

const SELECT_OPTIONS = [
	{ id: 0, name: 'Location, Crédit Bail & Investissement' },
];

interface DropdownProps {
	className?: string;
}

const Dropdown = ({ className }: DropdownProps) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleDropdownHandler = () => {
		setIsDropdownOpen((prev) => !prev);
	};

	return (
		<div
			className={`flexStart text-black text-sm leading-4 gap-3 bg-white border border-gray rounded px-2.5 py-3 outline-none ${className}`}
		>
			<div>
				<p>Toutes les groupes de categories</p>
			</div>
		</div>
	);
};

export default Dropdown;
