import React from 'react';

interface MainLayoutProps {
	children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<main className='w-full flex justify-center mb-12 align-top bg-backgroundGray h-full min-h-[93vh]'>
			<div className='w-layout h-fit my-8 rounded border border-gray'>
				{children}
			</div>
		</main>
	);
};

export default MainLayout;
