import React, { useRef } from "react";
import { useAppContext } from "../Context/AppContext.Context";
import { SearchIcon } from "../assets";
import { data } from "../data";

const SearchBar = () => {
	const { hardSearchResult } = useAppContext();
	const inputRef = useRef();
	const {
		search: { placeholder },
	} = data;
	const searchOnSubminHandler = (e) => {
		e.preventDefault();
		const bookName = inputRef.current.value;
		// Here I am going to use Search Option
		hardSearchResult(bookName);
		inputRef.current.value = "";
	};
	return (
		<>
			{/* Search Bar */}
			<form
				onSubmit={searchOnSubminHandler}
				className='flex flex-col lg:flex-row items-center gap-3 w-full lg:w-[450px] xl:w-[600px] max-w-[600px]'
			>
				<div className='flex w-full lg:w-[80%]'>
					{/* Search Icon */}
					<img src={SearchIcon} alt='' className='pl-3 bg-search text-base' />
					{/* Input Box */}
					<input
						type='text'
						placeholder={placeholder}
						name='search'
						ref={inputRef}
						className=' w-full  h-12 bg-search placeholder:text-gray-500 px-3 outline-none text-gray-400 text-xl'
					/>
				</div>

				{/* Search Button */}
				<button
					type='submit'
					className='h-12 w-full lg:w-[20%] border-2 border-gray-400 text-gray-400 text-lg hover:bg-secondary hover:border-white hover:text-white'
				>
					Search
				</button>
			</form>
		</>
	);
};

export default SearchBar;
