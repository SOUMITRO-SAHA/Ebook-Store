import { useState } from "react";
import { useAppContext } from "../../Context/AppContext.Context";

const DisplayCard = ({ book, idx }) => {
	const [counter, setCounter] = useState(1);

	const {
		setShouldExtendeInfo,
		shouldExtendeInfo,
		currentExtendedInfo,
		displayExtendedInfo,
	} = useAppContext();

	const {
		id,
		volumeInfo: {
			title,
			description,
			authors,
			publishedDate,
			// publisher,
			// language,
			// previewLink,
			// averageRating,
			// ratingsCount,
			imageLinks: { thumbnail },
		},
	} = book;
	const readMoreHandler = () => {
		setShouldExtendeInfo(!shouldExtendeInfo);
		displayExtendedInfo(idx);
		increaseCounter();
	};

	const increaseCounter = () => {
		if (counter === 3) {
			setCounter(1);
		} else {
			setCounter(counter + 1);
		}
		return counter;
	};

	const ExtendedBookInfo = (
		<div
			key={id}
			className={`w-[100%] h-[300px] bg-color${counter} z-10 flex gap-6`}
		>
			{/* Image */}
			<img
				src={currentExtendedInfo?.volumeInfo?.imageLinks?.thumbnail}
				alt={title}
				className='border object-cover w-[20%] md:w-[100px] lg:w-[200px] h-full'
			/>
			{/* Information */}
			<div className='w-[80%] text-slate-200 p-3 px-5 flex flex-col justify-between'>
				{/* Book Title */}
				<h1 className='text-2xl font-bold'>
					{currentExtendedInfo?.volumeInfo?.title}
				</h1>
				{/* Autors + Publish Date */}
				<div className='flex justify-between text-xl font-light'>
					<p className=' text-gray-400'>
						{authors.map((author, idx) => {
							const comma = idx === authors.length - 1 ? "" : ", ";
							return (
								<span key={idx}>
									<span>
										{author}
										{comma}
									</span>
								</span>
							);
						})}
					</p>
					<p className='mt-3 text-gray-400'>Published On : {publishedDate}</p>
				</div>
				{/* Description */}
				<p className='text-gray-400 h-20 overflow-hidden'>
					{currentExtendedInfo?.volumeInfo?.description}
				</p>
				{/* Other Informations */}
				<div className='flex justify-between gap-3 text-lg font-semibold'>
					<div>
						Avg Rating :{" "}
						{currentExtendedInfo?.volumeInfo?.averageRating || "Unknown"}
					</div>
					<div>
						Rating Count :{" "}
						{currentExtendedInfo?.volumeInfo?.ratingsCount || "Unknown"}
					</div>
					<div>Publisher : {currentExtendedInfo?.volumeInfo?.publisher}</div>
					<div>Language : {currentExtendedInfo?.volumeInfo?.language}</div>
				</div>
				{/* Buttons */}
				<div className='flex self-end w-[300px] gap-3 text-lg mt-3'>
					<button
						className='w-full p-2 px-5 hover:bg-primary border-2 items-center'
						onClick={readMoreHandler}
					>
						Now Read!
					</button>
					<a
						href={currentExtendedInfo?.volumeInfo?.previewLink}
						target='_blank'
						className='w-full p-2 px-5 hover:bg-primary text-center border-2 items-center'
					>
						More Info!
					</a>
				</div>
			</div>
		</div>
	);

	const DisplayBookCard = (
		<main>
			<div
				key={id}
				className={`w-full h-[300px] bg-color${idx + 1} flex shadow-primary`}
			>
				{/* Image */}
				<img
					src={thumbnail}
					alt={title}
					className='border object-cover w-[30%] md:w-[100px] lg:w-[200px] h-full'
				/>
				{/* Information */}
				<div className='w-[70%] text-slate-200 p-3 px-5 flex flex-col justify-between'>
					<div className='h-[80%] overflow-hidden'>
						<h1 className='text-xl font-bold'>{title}</h1>
						<p className='mt-3 text-gray-400'>{description}</p>
					</div>
					<button
						className='w-full p-3 mt-3 border-2 items-center'
						onClick={readMoreHandler}
					>
						Now Read!
					</button>
				</div>
			</div>
		</main>
	);

	return shouldExtendeInfo ? ExtendedBookInfo : DisplayBookCard;
};

export default DisplayCard;
