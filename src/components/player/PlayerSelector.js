import React from "react";
import { v4 as uuidv4 } from "uuid";
import { axiosInstance } from "../../axiosInstance";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";
import { teamInfo } from "../teamInfo/teamInfo";

export default function PlayerSelector() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const {
    deleteSearch,
    setSearchResults,
    clearSearchResults,
    addToPlayerList,
  } = bindActionCreators(actionCreators, dispatch);

  const handlePageChange = async (page) => {
    // Axios zahtjev koji dohvaća podatke na temelju stranice rezultata
    window.scrollTo(0, 0);
    await axiosInstance
      .get(`players?search=${state.search}&page=${page}&per_page=10`)
      .then((res) => {
        setSearchResults(res.data);
      });
  };

  const handleClear = () => {
    //Briše rezultate pretraživanja te onda čisti searchBar
    clearSearchResults();
    deleteSearch();
  };

  const getPlayerSeasonalAverages = async (player, season) => {
    let emptyStats = {
      data: [
        {
          games_played: 0,
          min: 0,
          fgm: 0,
          fga: 0,
          fg3m: 0,
          fg3a: 0,
          ftm: 0,
          fta: 0,
          oreb: 0,
          dreb: 0,
          reb: 0,
          ast: 0,
          stl: 0,
          blk: 0,
          turnover: 0,
          pf: 0,
          pts: 0,
          fg_pct: 0,
          fg3_pct: 0,
          ft_pct: 0,
        },
      ],
    };

    if (!season) {
      await axiosInstance
        .get(`/season_averages?player_ids[]=${player.id}`)
        .then((res) => {
          player.uuid = uuidv4();
          // Pomoću if provjeravamo ima li api podatke. Ako ne, popunimo nulama.
          if (res.data.data.length === 0) {
            player.stats = emptyStats;
          } else {
            player.stats = res.data;
          }

          player.season = 2021;
          addToPlayerList(player);
        });
    }
    if (season) {
      await axiosInstance
        .get(`/season_averages?season=[]${season}&player_ids[]=${player.id}`)
        .then((res) => {
          return res.data;
        });
    }
  };

  return (
    <div>
      {/* {state.searchResult.length === 0 && (
        <div className="text-center">
            Pretražite i dodajte NBA igrače kako bi počeli usporediđvati
        </div>
      )} */}
      {state.searchResult && state.searchResult.data && (
        <div className="p-4 text-center text-2xl font-bold border-b-2 border-gray-100 md:w-1/2 md:mx-auto">
          Kliknite na ime igrača kako bi vidjeli njihovu statistiku
        </div>
      )}
      <div className="flex flex-wrap justify-center overflow-y-auto  md:h-auto mt-4">
        {state.searchResult &&
          state.searchResult.data &&
          state.searchResult.data.map((player) => {
            return (
              <div
                key={player.id}
                className="border rounded p-2 m-2 cursor-pointer hover:border-zinc-900 text-lg "
                style={{
                  background: `linear-gradient(135deg, ${
                    teamInfo(player.team.abbreviation).colors.colorOne
                  } 50%, ${
                    teamInfo(player.team.abbreviation).colors.colorTwo
                  } 50%)`,
                }}
                onClick={() => {
                  getPlayerSeasonalAverages(player);
                }}
              >
                <div className="bg-zinc-900 bg-opacity-50 rounded">
                  {player.first_name} {player.last_name}
                </div>
              </div>
            );
          })}
      </div>

      {state.searchResult &&
        state.searchResult.meta &&
        state.searchResult.data.length > 0 &&
        state.searchResult.meta.total_pages !== 1 && (
          <div className="flex justify-center items-center pt-4">
            <div
              className="border p-2 rounded cursor-pointer hover:bg-cyan-800 hover:border-zinc-900"
              onClick={() => {
                handlePageChange(1);
              }}
            >
              1
            </div>
            {state.searchResult.meta.next_page && (
              <div className="flex">
                {state.searchResult.meta.current_page !== 1 &&
                  state.searchResult.meta.current_page !== 2 && (
                    <div
                      className="border p-2 rounded cursor-pointer hover:bg-cyan-800 hover:border-zinc-900"
                      onClick={() => {
                        handlePageChange(state.searchResult.meta.next_page - 2);
                      }}
                    >
                      {state.searchResult.meta.next_page - 2}
                    </div>
                  )}

                {state.searchResult.meta.current_page !== 1 && (
                  <div className="border p-2 rounded font-extrabold underline ">
                    {state.searchResult.meta.current_page}
                  </div>
                )}

                <div
                  className="border p-2 rounded cursor-pointer hover:bg-cyan-800 hover:border-zinc-900"
                  onClick={() => {
                    handlePageChange(state.searchResult.meta.next_page);
                  }}
                >
                  {state.searchResult.meta.next_page}
                </div>
              </div>
            )}
            {!state.searchResult.meta.next_page && (
              <div className="flex">
                <div
                  className="border p-2 rounded cursor-pointer hover:bg-cyan-800 hover:border-zinc-900"
                  onClick={() => {
                    handlePageChange(state.searchResult.meta.current_page - 1);
                  }}
                >
                  {state.searchResult.meta.current_page - 1}
                </div>
                <div className="border p-2 rounded cursor-pointer underline font-extrabold ">
                  {state.searchResult.meta.current_page}
                </div>
              </div>
            )}
          </div>
        )}
      {state.searchResult.data && state.searchResult.data.length > 0 && (
        <div className="flex justify-center py-4 px-12 md:px-24">
          <div
            className="uppercase border p-4 rounded bg-zinc-900 cursor-pointer hover:border-cyan-800 hover:bg-gray-50 hover:text-zinc-900"
            onClick={() => {
              handleClear();
            }}
          >
            Obriši pretragu
          </div>
        </div>
      )}
    </div>
  );
}
