import React from "react";
import { useAppContext } from "../../Context/AppContext.Context";
import DisplayCard from "../Card/DisplayCard.Component";
import NormalCard from "../Card/NormalCard.Component";

const MainBody = () => {
	const { books, topBooks, shouldExtendeInfo } = useAppContext();
	const displayCardStyling = shouldExtendeInfo
		? "grid-cols-1 overflow-hidden"
		: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ";
	return (
		<main className='text-white my-6 container mx-auto px-10'>
			{/* Display Book Info */}
			<div
				className={`grid ${displayCardStyling} xl:max-h-[300px] justify-between`}
			>
				{topBooks.map((book, idx) => {
					if (idx <= 2) {
						return <DisplayCard key={idx} book={book} idx={idx} />;
					}
				})}
			</div>
			{/* More Books Section */}
			<div className='text-3xl my-6 mt-12 text-white font-bold'>More Books</div>

			<div className='flex justify-between md:justify-evenly flex-wrap gap-10'>
				{books.map((book, index) => (
					<NormalCard key={index} book={book} idx={index} />
				))}
			</div>
		</main>
	);
};

export default MainBody;
