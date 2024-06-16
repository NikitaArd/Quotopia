import { createContext, useState } from "react";

export const QuoteHistoryContext = createContext({
  items: [],
  appendQuote: () => {},
});

export default function QuoteHistoryProvider({ children }) {
	const [historyItems, setHistoryItems] = useState([]);

	function addItem(quote){
		setHistoryItems(prevItems => {
			if (prevItems.length >= 10){
				prevItems.shift();
				return [...prevItems, quote];
			}

			return [...prevItems, quote];
		})
	}

  let contextValue = {
    items: historyItems,
    appendQuote: addItem,
  };

  return (
    <QuoteHistoryContext.Provider value={contextValue}>
      {children}
    </QuoteHistoryContext.Provider>
  );
}
