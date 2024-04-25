import { useRef } from 'react';

import QuestionMark from '../assets/question-mark.svg';

import { InfoModal } from './InfoModal';


export default function Header(){
    const modal = useRef();


    return (
        <header className="w-full h-24 bg-stone-400 flex justify-between px-36">
            <h1 className="font-bold text-4xl my-auto">Quotopia</h1>
            <button onClick={() => modal.current.open()} className="btn my-auto w-12 h-10 p-3 bg-stone-200 hover:bg-stone-100">
                <img src={QuestionMark} />
            </button>
            <InfoModal ref={modal} />
        </header>
    );
}