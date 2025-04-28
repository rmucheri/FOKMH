// Button.jsx
function Button({ setShowModal }) {
    const handleDonateClick = (e) => {
      e.preventDefault();
      setShowModal(true);
    };
  
    return (
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
        <a
          href="#"
          onClick={handleDonateClick}
          className="inline-flex justify-center gap-4 items-center py-2 px-6 text-base font-medium text-center text-white rounded-lg bg-[#3ea498] hover:bg-orange-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 hover:scale-110"
        >
          Donate Now
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    );
  }
  
  export default Button;
  