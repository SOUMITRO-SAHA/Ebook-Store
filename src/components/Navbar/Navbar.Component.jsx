import React from "react";
import { useAppContext } from "../../Context/AppContext.Context";
import { Logo } from "../../assets";
import { data } from "../../data";
import MobileMenu from "./MobileMenu.Component";
import WindowMenu from "./WindowMenu.Component";

const Navbar = () => {
	const { isMobile } = useAppContext();
	const { brandName } = data;
	return (
		<nav className='bg-primary'>
			<div className='container mx-auto px-10'>
				<div className='flex justify-between items-center'>
					<a href='/'>
						{/* Brand */}
						<div className='col-span-1 py-3 flex gap-2 items-center'>
							{/* Logo */}
							<img
								src={Logo}
								alt={brandName.p1 + brandName.p2}
								className='w-[50px] lg:w-[70px]'
							/>
							{/* Brand Name */}
							<div className='text-white'>
								<span className='text-3xl xl:text-4xl'>{brandName.p1}</span>
								<span className='text-xl font-light'>{brandName.p2}</span>
							</div>
						</div>
					</a>

					{/* Windows Menu */}
					<WindowMenu />

					{/* Mobile Menu */}
					{isMobile && <MobileMenu />}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
