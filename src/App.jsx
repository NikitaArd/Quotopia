import { useEffect, useState, useRef, useContext } from "react";
import { Fragment } from "react";


import Header from "./components/Header";
import QuoteDisplay from "./components/QuoteDisplay";
import Spinner from "./components/Spinner";
import QuoteHistoryButton from "./components/QuoteHistoryButton";
import { QuoteHistory } from "./components/QuoteHistory";


// import { QuoteHistoryContext } from "./store/quote-history-context";

import { useDispatch } from "react-redux";
import { QuoteHistoryActions } from "./store";


const quoteAPI = "https://api.quotable.io/random";


function App() {
  const [quote, setQuote] = useState(null);
  // const quoteHistory = useContext(QuoteHistoryContext);
  const dispatch = useDispatch();

  function handleSetQuote(quote){
    // quoteHistory.appendQuote(quote);
    dispatch(QuoteHistoryActions.appendQuote(quote));
    setQuote(quote);
  }

  useEffect(() => {
    if(quote === null){
      fetch(new Request(quoteAPI))
      .then(response => {
        if (!response.ok) {
          throw new Error("Some errors !");
        }
  
        return response.json();
      })
      .then((data) => {
        handleSetQuote({
          content: data.content,
          author: data.author,
          tags: data.tags,
          error: "",
        });
      })
      .catch((error) => {
        setQuote({
          content: '',
          author: '',
          tags: '',
          error: error,
        });
      });
    }
  }, [quote]);

  const modal = useRef();

  function handleHistoryModalOpen(){
    modal.current.open();
  }
  
  return (
    <>
      <Header />
      { quote ? <QuoteDisplay quote={quote} handleSetQuote={setQuote} /> : <Spinner />}
      <QuoteHistoryButton openModal={handleHistoryModalOpen} />
      <QuoteHistory ref={modal} />
    </>
  );
}

export default App;
