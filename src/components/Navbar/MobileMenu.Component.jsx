import React from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { useAppContext } from "../../Context/AppContext.Context";
import {
	BellIcon,
	BookLikeIcon,
	DiamondIcon,
	Logo,
	Profile,
} from "../../assets";
import { data } from "../../data";
import SearchBar from "../SearchBar.Component";

const MobileMenu = () => {
	const { brandName } = data;
	const { mobileMenu, setMobileMenu } = useAppContext();

	const mobileMenuDiv = (
		<div className='absolute top-0 left-0 w-[400px] bg-primary h-screen flex flex-col justify-between'>
			<div className=''>
				{/* Brand Logo + Cross Button */}
				<div className='flex justify-between p-3 items-center bg-secondary'>
					<div className='flex gap-2 items-center '>
						{/* Logo */}
						<img src={Logo} alt='' className='w-[50px]' />
						{/* Brand Name */}
						<div className='text-white'>
							<span className='text-3xl xl:text-4xl'>{brandName.p1}</span>
							<span className='text-xl font-light'>{brandName.p2}</span>
						</div>
					</div>
					<RxCross1
						className='text-white text-2xl hover:text-gray-400 cursor-pointer'
						onClick={() => setMobileMenu(!mobileMenu)}
					/>
				</div>

				{/* Search Bar */}
				<div className='p-3'>
					<SearchBar />
				</div>
			</div>
			{/* Profile Section */}
			<div className='flex items-center gap-3 justify-between h-16 bg-secondary py-5 px-3'>
				<img src={BellIcon} alt='Bell Icon' />
				<img src={BookLikeIcon} alt='Bell Icon' />
				<img src={DiamondIcon} alt='Bell Icon' />
				{/* Profile Image */}
				<div className='border-2 border-gray-400 rounded-full'>
					<img
						src={Profile}
						alt=''
						className='object-fill h-[40px] w-[40px] rounded-full'
					/>
				</div>
			</div>
		</div>
	);
	return (
		<>
			{/* Hamberger */}
			<button onClick={() => setMobileMenu(!mobileMenu)}>
				{!mobileMenu && (
					<RxHamburgerMenu className='lg:hidden text-2xl text-white' />
				)}
			</button>

			{/* Mobile Menu */}
			{mobileMenu && mobileMenuDiv}
		</>
	);
};

export default MobileMenu;
