import QuestionMark from '../assets/question-mark.svg';

export default function Header(){
    return (
        <header className="w-full h-24 bg-stone-400 flex justify-between px-36">
            <h1 className="font-bold text-4xl my-auto">Quotopia</h1>
            <button className="btn my-auto w-12 h-10 p-3 bg-stone-200 hover:bg-stone-100">
                <img src={QuestionMark} className='' />
            </button>
        </header>
    );
}