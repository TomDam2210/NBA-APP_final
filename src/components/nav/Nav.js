import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Nav() {
  return (
    <nav className="bg-cyan-600 text-neutral-900 p-2 sm:p-4 md:p-12 ">
      <div className="container flex flex-col md:flex-row justify-between items-center mx-auto">
        <Link
          to="/"
          className="text-2xl text-zinc-50"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          NBA Statistika
        </Link>
        <SearchBar />
        <ul className="p-2 text-gray-100">
          <li>
            <Link
              to="/info"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Više informacija
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
