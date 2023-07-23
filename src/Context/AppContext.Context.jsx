import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const BASE_URL = "https://www.googleapis.com/books/v1/volumes";
const initialSatate = {
	mobileMenu: false,
	setMobileMenu: () => {},
	isMobile: false,
	setIsMobile: () => {},
	books: [],
	getBooks: () => {},
	searchBooks: (bookName) => {},
	topBooks: [],
	hardSearchResult: () => {},
	shouldExtendeInfo: false,
	setShouldExtendeInfo: () => {},
	currentExtendedInfo: {},
	displayExtendedInfo: () => {},
	displayExtendedInfoFromMoreBooks: () => {},
};
const context = createContext(initialSatate);

const AppContext = ({ children }) => {
	const [isMobile, setIsMobile] = useState(false);
	const [mobileMenu, setMobileMenu] = useState(false);
	const [books, setBooks] = useState([]);
	const [topBooks, setTopBooks] = useState([]);
	const [setsearchedBooks, setSearchedBooks] = useState([]);
	const [shouldExtendeInfo, setShouldExtendeInfo] = useState(false);
	const [currentExtendedInfo, setCurrentExtendedInfo] = useState({});

	// Search for books
	const searchBooks = async (bookName) => {
		const booksQuery = await axios.get(BASE_URL, {
			params: {
				q: bookName,
				orderBy: "relevance",
				maxResults: 5,
			},
		});
		const { items } = await booksQuery.data;
		setBooks((prevBooks) => [...prevBooks, ...items]);
	};

	// Hard Search Result:
	const hardSearchResult = async (bookName) => {
		const booksQuery = await axios.get(BASE_URL, {
			params: {
				q: bookName,
				orderBy: "relevance",
				maxResults: 5,
			},
		});
		const { items } = await booksQuery.data;

		// Setting Search Result:
		setSearchedBooks(items);

		// Checking
		if (searchBooks.length > 0) {
			setBooks([...items]);
			// Also Calling:
			getTopSellingBooks(bookName);
		} else {
			const notify = () => toast("No books found! With this Name: " + bookName);
		}
	};

	// Getting Top Selling Books
	const getTopSellingBooks = async (topic) => {
		try {
			const response = await axios.get(BASE_URL, {
				params: {
					q: topic,
					maxResults: 3,
				},
			});
			const { items } = response.data;
			setTopBooks(items);
		} catch (error) {
			console.error("Error making API request:", error);
		}
	};

	// Setting Current Book to Display in Larger Section:
	const displayExtendedInfo = (idx) => {
		const currentSelectedBook = topBooks[idx];
		setCurrentExtendedInfo((prevoiusInfo) => currentSelectedBook);
		console.log(currentExtendedInfo);
	};

	// Setting Current Book to Display in Larger Section from More Book:
	const displayExtendedInfoFromMoreBooks = (idx) => {
		const currentSelectedBook = books[idx];
		setCurrentExtendedInfo((prevoiusInfo) => currentSelectedBook);
		setShouldExtendeInfo(true);
	};

	// Getting Two Default Books:
	const getBooks = async () => {
		// Hitting First Book : Harry+Potter
		searchBooks("Harry+Potter");
		// Hitting Second Book : Sherlock+Holmes
		searchBooks("Sherlock+Holmes");
	};
	useEffect(() => {
		getBooks();
		getTopSellingBooks("top+selling");
	}, []);

	const values = {
		mobileMenu,
		setMobileMenu,
		isMobile,
		setIsMobile,
		books,
		getBooks,
		searchBooks,
		topBooks,
		hardSearchResult,
		shouldExtendeInfo,
		setShouldExtendeInfo,
		currentExtendedInfo,
		displayExtendedInfo,
		displayExtendedInfoFromMoreBooks,
	};
	return <context.Provider value={values}>{children}</context.Provider>;
};

export const useAppContext = () => useContext(context);

export default AppContext;
