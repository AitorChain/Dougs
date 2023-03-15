import React from 'react';

interface MainLayoutProps {
	children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<main className='w-full flexCenter bg-backgroundGray h-full'>
			<div className='w-layout my-8 rounded border border-gray'>{children}</div>
		</main>
	);
};

export default MainLayout;
