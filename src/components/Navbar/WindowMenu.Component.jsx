import React from "react";
import { useAppContext } from "../../Context/AppContext.Context";
import {
	BellIcon,
	BookLikeIcon,
	DiamondIcon,
	Profile,
} from "../../assets/index";
import SearchBar from "../SearchBar.Component";

const WindowMenu = () => {
	const { isMobile } = useAppContext();

	return (
		<>
			{/* Search Bar */}
			<div>{!isMobile && <SearchBar />}</div>

			{/* Others Secton */}
			<div className='hidden lg:flex items-center gap-3'>
				<img src={BellIcon} alt='Bell Icon' />
				<img src={BookLikeIcon} alt='Bell Icon' />
				<img src={DiamondIcon} alt='Bell Icon' />
				{/* Profile Image */}
				<div className='border-2 border-gray-400 rounded-full'>
					<img
						src={Profile}
						alt=''
						className='object-fill h-[50px] w-[50px] rounded-full'
					/>
				</div>
			</div>
		</>
	);
};

export default WindowMenu;
