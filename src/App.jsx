import { useEffect, useState, useRef } from "react";


import Header from "./components/Header";
import QuoteDisplay from "./components/QuoteDisplay";
import Spinner from "./components/Spinner";
import QuoteHistoryButton from "./components/QuoteHistoryButton";
import { QuoteHistory } from "./components/QuoteHistory";


const quoteAPI = "https://api.quotable.io/random";


function App() {
  const [quote, setQuote] = useState(null);

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
        setQuote({
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
