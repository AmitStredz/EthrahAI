import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FEFEFE]">
      <div className="max-w-[960px] mx-auto px-5 py-10">
        <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
          <Link
            to="/"
            className="w-40 text-center text-[#737373] text-base leading-6"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="w-40 text-center text-[#737373] text-base leading-6"
          >
            Services
          </Link>
          <Link
            to="/case-studies"
            className="w-40 text-center text-[#737373] text-base leading-6"
          >
            Case Studies
          </Link>
          <Link
            to="/contact"
            className="w-40 text-center text-[#737373] text-base leading-6"
          >
            Contact
          </Link>
          <Link
            to="/privacy-policy"
            className="w-40 text-center text-[#737373] text-base leading-6"
          >
            Privacy Policy
          </Link>
        </div>

        <div className="flex justify-center items-center gap-4 mb-6">
          <a
            href="https://www.linkedin.com/company/ethrah-ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 text-[#737373] hover:text-[#141414] transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 0H1.5C0.671573 0 0 0.671573 0 1.5V18C0 18.8284 0.671573 19.5 1.5 19.5H18C18.8284 19.5 19.5 18.8284 19.5 18V1.5C19.5 0.671573 18.8284 0 18 0ZM18 18H1.5V1.5H18V18ZM6.75 8.25V14.25C6.75 14.6642 6.41421 15 6 15C5.58579 15 5.25 14.6642 5.25 14.25V8.25C5.25 7.83579 5.58579 7.5 6 7.5C6.41421 7.5 6.75 7.83579 6.75 8.25ZM15 10.875V14.25C15 14.6642 14.6642 15 14.25 15C13.8358 15 13.5 14.6642 13.5 14.25V10.875C13.5 9.83947 12.6605 9 11.625 9C10.5895 9 9.75 9.83947 9.75 10.875V14.25C9.75 14.6642 9.41421 15 9 15C8.58579 15 8.25 14.6642 8.25 14.25V8.25C8.25193 7.86975 8.53811 7.55112 8.91598 7.50852C9.29384 7.46592 9.64378 7.71285 9.73031 8.08313C10.7642 7.38174 12.101 7.30891 13.205 7.89381C14.309 8.4787 14.9996 9.62563 15 10.875ZM7.125 5.625C7.125 6.24632 6.62132 6.75 6 6.75C5.37868 6.75 4.875 6.24632 4.875 5.625C4.875 5.00368 5.37868 4.5 6 4.5C6.62132 4.5 7.125 5.00368 7.125 5.625Z"
              />
            </svg>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 text-[#737373] hover:text-[#141414] transition-colors"
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.5291 4.845C19.9925 3.34994 19.8096 1.72919 19.0247 0.375C18.8907 0.142897 18.643 -6.00815e-05 18.375 0C16.6036 -0.00370789 14.9349 0.830669 13.875 2.25H11.625C10.5651 0.830669 8.89638 -0.00370789 7.125 0C6.85699 -6.00815e-05 6.60932 0.142897 6.47531 0.375C5.69035 1.72919 5.50747 3.34994 5.97094 4.845C5.50756 5.6538 5.25934 6.56791 5.25 7.5V8.25C5.25326 10.8741 7.19154 13.0936 9.79125 13.4503C9.27807 14.107 8.99952 14.9166 9 15.75V16.5H6.75C5.50736 16.5 4.5 15.4926 4.5 14.25C4.5 12.1789 2.82107 10.5 0.75 10.5C0.335786 10.5 0 10.8358 0 11.25C0 11.6642 0.335786 12 0.75 12C1.99264 12 3 13.0074 3 14.25C3 16.3211 4.67893 18 6.75 18H9V19.5C9 19.9142 9.33579 20.25 9.75 20.25C10.1642 20.25 10.5 19.9142 10.5 19.5V15.75C10.5 14.5074 11.5074 13.5 12.75 13.5C13.9926 13.5 15 14.5074 15 15.75V19.5C15 19.9142 15.3358 20.25 15.75 20.25C16.1642 20.25 16.5 19.9142 16.5 19.5V15.75C16.5005 14.9166 16.2219 14.107 15.7087 13.4503C18.3085 13.0936 20.2467 10.8741 20.25 8.25V7.5C20.2407 6.56791 19.9924 5.6538 19.5291 4.845Z"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/ethrah_ai?utm_source=qr&igsh=YTd6aHE0a2M1Z3Y2"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 text-[#737373] hover:text-[#141414] transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.75 5.25C7.26472 5.25 5.25 7.26472 5.25 9.75C5.25 12.2353 7.26472 14.25 9.75 14.25C12.2353 14.25 14.25 12.2353 14.25 9.75C14.2474 7.26579 12.2342 5.25258 9.75 5.25ZM9.75 12.75C8.09315 12.75 6.75 11.4069 6.75 9.75C6.75 8.09315 8.09315 6.75 9.75 6.75C11.4069 6.75 12.75 8.09315 12.75 9.75C12.75 11.4069 11.4069 12.75 9.75 12.75ZM14.25 0H5.25C2.35179 0.00310016 0.00310016 2.35179 0 5.25V14.25C0.00310016 17.1482 2.35179 19.4969 5.25 19.5H14.25C17.1482 19.4969 19.4969 17.1482 19.5 14.25V5.25C19.4969 2.35179 17.1482 0.00310016 14.25 0ZM18 14.25C18 16.3211 16.3211 18 14.25 18H5.25C3.17893 18 1.5 16.3211 1.5 14.25V5.25C1.5 3.17893 3.17893 1.5 5.25 1.5H14.25C16.3211 1.5 18 3.17893 18 5.25V14.25ZM15.75 4.875C15.75 5.49632 15.2463 6 14.625 6C14.0037 6 13.5 5.49632 13.5 4.875C13.5 4.25368 14.0037 3.75 14.625 3.75C15.2463 3.75 15.75 4.25368 15.75 4.875Z"
              />
            </svg>
          </a>
        </div>

        <div className="text-center grid sm:grid-cols-3">
          <div className="mx-auto px-10 pb-8 col-span-1">
            <div className="flex items-center gap-4">
              <img
                src="/ethrah-logo.png"
                alt="ETHRAH AI"
                className="w-[151px]"
              />
              {/* <div className="w-px h-[23px] bg-border" /> */}
            </div>
          </div>
          <p className="text-[#737373] text-base leading-6">
            © 2025 ETHRAH AI. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
