import GenerateAgain from '../assets/again.svg';

export default function QuoteDisplay({quote}){
    return (
        <>

        <section class="bg-white dark:bg-gray-900 mt-60">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-4xl dark:text-white">{quote.content}</h1>
                <p className="italic text-lg m-6 px-56 text-right">{ quote.author }</p>
                <div className="m-auto h-auto mt-20">
                    { quote.tags.reduce(tag => { return <span className="bg-gray-300 text-gray-800 text-m font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">{tag}</span>}) }
                </div>
            </div>
        </section>
        
        <div className="w-full flex">
            <button type="button" className="px-5 py-3 m-auto text-base font-medium text-center inline-flex items-center text-white bg-stone-600 rounded-lg hover:bg-stone-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <img src={GenerateAgain} className='w-6 h-6 me-2' />
                Generate another
            </button>
        </div>

        </>

    );
}