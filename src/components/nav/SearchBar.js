import React from "react";
import { axiosInstance } from "../../axiosInstance";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  // Postavlja state u sve moguće opcije
  const state = useSelector((state) => state);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // pravimo destukturiranje umjesto da vratimo sve metode
  // const AC = bindActionCreators(actionCreators, dispatch);

  const { changeSearch, deleteSearch, setSearchResults, clearSearchResults } =
    bindActionCreators(actionCreators, dispatch);

  // postavljamo state samo na podatke koji su nam potrebni
  // const state = useSelector((state) => state.search);

  const getResults = async () => {
    await axiosInstance
      .get(`players?search=${state.search}&per_page=10`)
      .then((res) => {
        setSearchResults(res.data);
        // if naredba za preusmjeriti na početnu stranicu, ako netko nije na početnoj stranici
        if (window.location.hash !== "#/") {
          navigate("/");
        }
      });
  };

  const handleInput = (e) => {
    // if naredba će maknuti prethodne rezultate ako korisnik upiše u pretražilicu
    if (state.searchResult.data) {
      clearSearchResults();
    }

    changeSearch(e.target.value);
  };

  const handleClear = () => {
    clearSearchResults();
    deleteSearch();
  };

  return (
    <div className="flex justify-start ">
      <input
        type="text"
        placeholder="Unesite ime igrača"
        className="p-4 rounded"
        value={state.search}
        onChange={(e) => {
          handleInput(e);
        }}
      />
      <button
        className="bg-zinc-900 text-cyan-600 p-2 sm:p-4 rounded uppercase"
        onClick={() => {
          getResults();
        }}
      >
        Pretraži
      </button>
      {state.search.length > 0 ? (
        <button
          className="bg-red-600 text-black p-2 sm:p-4 rounded uppercase"
          onClick={() => {
            handleClear();
          }}
        >
          X
        </button>
      ) : (
        <button className="transparent text-transparent p-2 sm:p-4 rounded uppercase cursor-default">
          x
        </button>
      )}
    </div>
  );
}
