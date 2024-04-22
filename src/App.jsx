import { useEffect, useState } from "react";
import Header from "./components/Header";
import QuoteDisplay from "./components/QuoteDisplay";
import Spinner from "./components/Spinner";

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
        console.log(data)
  
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
  
  return (
    <>
      <Header />
      { quote ? <QuoteDisplay quote={quote} handleSetQuote={setQuote} /> : <Spinner />}
    </>
  );
}

export default App;
