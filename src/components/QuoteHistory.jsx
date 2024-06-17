import { useImperativeHandle, forwardRef, useRef } from "react";

import { useSelector } from "react-redux";


export const QuoteHistory = forwardRef(function QuoteHistoryModal(props, ref) {
  const dialog = useRef();

  const quoteHistoryItems = useSelector(state => state.items);

  useImperativeHandle(ref, () => {
    return {
      open: () => dialog.current.showModal(),
    };
  });

  return (
    <dialog id="my_modal_1" className="modal" ref={dialog}>
      <div className="modal-box">
        <h1 className="text-2xl font-bold">History</h1>
        <ul className="w-11/12 max-h-96 h-fit overflow-auto my-7 mx-auto">
          {quoteHistoryItems.map((quote, index) => {
            return (
              <li className="rounded-lg bg-stone-200 py-3 px-4 my-3" key={index}>
                <p className="text-sm font-semibold">
                  {quote.content}
                </p>
                <p className="text-right italic text-sm font-light">
                  {quote.author}
                </p>
              </li>
            );
          })}
        </ul>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
});
