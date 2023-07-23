import React from "react";
import { useAppContext } from "../../Context/AppContext.Context";
import { BookCover } from "../../assets";

const NormalCard = ({ book, idx }) => {
	const { displayExtendedInfoFromMoreBooks } = useAppContext();
	const {
		id,
		volumeInfo: {
			title,
			imageLinks: { thumbnail },
		},
	} = book;

	const extendMoreBooksInfoHandler = () => {
		displayExtendedInfoFromMoreBooks(idx);
	};

	return (
		<div key={id} className='border cursor-pointer'>
			<img
				src={thumbnail || BookCover}
				className='object-cover lg:w-[200px] lg:h-[300px] '
				alt={title}
				onClick={extendMoreBooksInfoHandler}
			/>
		</div>
	);
};

export default NormalCard;
