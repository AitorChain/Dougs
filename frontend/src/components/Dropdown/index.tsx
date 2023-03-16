import classNames from 'classnames';
import React, { useContext, useState } from 'react';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import { CaretIcon } from '../../images/icons';
import { CategoryGroup } from '../../models/categories.types';

const Dropdown = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const { selectedGroup, setSelectedGroup, categoryGroups } =
		useContext(CategoriesContext);

	const toggleDropdownHandler = () => {
		setIsDropdownOpen((prev) => !prev);
	};

	const handleChangeGroup = (group: CategoryGroup | null) => {
		setSelectedGroup(group);
		toggleDropdownHandler();
	};

	const caretClassnames = classNames('caret', {
		caretUp: isDropdownOpen,
	});

	return (
		<div className='relative'>
			<div className='absolute top-0 right-0'>
				<div
					className='flexBetween text-black text-sm leading-4 gap-3 bg-white border border-gray hover:bg-gray rounded px-2.5 py-3 outline-none w-[271px] cursor-pointer'
					onClick={toggleDropdownHandler}
				>
					<span>
						{selectedGroup ? selectedGroup.name : 'Tous les groupes de catégories'}
					</span>
					<i className={caretClassnames}>
						<CaretIcon />
					</i>
				</div>

				{selectedGroup !== null && isDropdownOpen && (
					<div
						className='flexStart text-black text-sm leading-4 gap-3 bg-white border border-gray hover:bg-gray rounded px-2.5 py-3 outline-none w-[271px] cursor-pointer'
						onClick={() => handleChangeGroup(null)}
					>
						<p>Tous les groupes de catégories</p>
					</div>
				)}

				{isDropdownOpen &&
					categoryGroups?.map((group) => (
						<div
							key={group.id}
							className='flex flex-col z-50 cursor-pointer text-black text-sm leading-4 gap-3 bg-white hover:bg-gray  border-b border-l border-r border-gray px-2.5 py-3 outline-none w-[271px]'
							onClick={() => handleChangeGroup(group)}
						>
							<p>{group.name}</p>
						</div>
					))}
			</div>
		</div>
	);
};

export default Dropdown;
