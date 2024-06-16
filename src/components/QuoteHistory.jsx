import HistoryIcon from '../assets/history.svg';


export default function QuoteHistory() {
  return (
    <div data-dial-init class="fixed start-6 bottom-6 group">
      <button
        type="button"
        data-dial-toggle="speed-dial-menu-square"
        aria-controls="speed-dial-menu-square"
        aria-expanded="false"
        class="flex items-center justify-center text-white bg-stone-500 rounded-lg w-14 h-14 hover:bg-stone-600"
      >
        <img src={HistoryIcon} className="w-5 h-5 transition-transform group-hover:scale-125" />
        <span class="sr-only">Open actions menu</span>
      </button>
    </div>
  );
}
