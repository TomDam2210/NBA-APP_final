import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";

export default function PlayerTable() {
  const state = useSelector((state) => state.playerList);
  const playerList = [...state];
  const dispatch = useDispatch();
  const { sortPlayerListByStat } = bindActionCreators(actionCreators, dispatch);

  const [activeStat, setActiveStat] = useState("");
  const [columnDirection, setColumnDirection] = useState(true);

  const handleStatSort = (stat, ascending) => {
    setActiveStat(stat);
    let metric = {
      stat,
      ascending,
    };
    sortPlayerListByStat(metric);
    setColumnDirection(!columnDirection);
  };

  return (
    <>
      {playerList.length > 0 && (
        <div className="overflow-auto text-xs md:text-base text-center">
          <div className="py-2">
            <div className="text-3xl uppercase text-gray-100 text-center">
              Prosjeci sezone
            </div>
          </div>
          <table className=" border-collapse w-full table-fixed break-word">
            <thead>
              <tr className="h-12">
                <th className="uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell md:w-24 w-24">
                  Ime
                </th>
                <th className="uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-14 md:text-xs lg:text-base">
                  Sezona
                </th>
                <th className="uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-12">
                  Min
                </th>
                <th
                  className={
                    activeStat === "games_played"
                      ? "uppercase bg-cyan-800 text-gray-100 border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-cyan-800 hover:text-gray-100"
                  }
                  onClick={() =>
                    handleStatSort("games_played", columnDirection)
                  }
                >
                  GP
                </th>
                <th
                  className={
                    activeStat === "pts"
                      ? "uppercase bg-cyan-800 text-gray-100 border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-cyan-800 hover:text-gray-100"
                  }
                  onClick={() => handleStatSort("pts", columnDirection)}
                >
                  PTS
                </th>
                <th
                  className={
                    activeStat === "fg_pct"
                      ? "uppercase bg-cyan-800 text-gray-100 border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-cyan-800 hover:text-gray-100"
                  }
                  onClick={() => handleStatSort("fg_pct", columnDirection)}
                >
                  FG%
                </th>
                <th
                  className={
                    activeStat === "fga"
                      ? "uppercase bg-cyan-800 text-gray-100 border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-cyan-800 hover:text-gray-100"
                  }
                  onClick={() => handleStatSort("fga", columnDirection)}
                >
                  FGA
                </th>
                <th
                  className={
                    activeStat === "fgm"
                      ? "uppercase bg-cyan-800 text-gray-100 border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-cyan-800 hover:text-gray-100"
                  }
                  onClick={() => handleStatSort("fgm", columnDirection)}
                >
                  FGM
                </th>
                <th
                  className={
                    activeStat === "fg3_pct"
                      ? "uppercase bg-cyan-800 text-gray-100 border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-cyan-800 hover:text-gray-100"
                  }
                  onClick={() => handleStatSort("fg3_pct", columnDirection)}
                >
                  3P%
                </th>
                <th
                  className={
                    activeStat === "fg3a"
                      ? "uppercase bg-cyan-800 text-gray-100 border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-cyan-800 hover:text-gray-100"
                  }
                  onClick={() => handleStatSort("fg3a", columnDirection)}
                >
                  3PA
                </th>
                <th
                  className={
                    activeStat === "fg3m"
                      ? "uppercase bg-cyan-800 text-gray-100 border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-cyan-800 hover:text-gray-100"
                  }
                  onClick={() => handleStatSort("fg3m", columnDirection)}
                >
                  3PM
                </th>
                <th
                  className={
                    activeStat === "ft_pct"
                      ? "uppercase bg-cyan-800 text-gray-100 border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-cyan-800 hover:text-gray-100"
                  }
                  onClick={() => handleStatSort("ft_pct", columnDirection)}
                >
                  FT%
                </th>
                <th
                  className={
                    activeStat === "fta"
                      ? "uppercase bg-cyan-800 text-gray-100 border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-cyan-800 hover:text-gray-100"
                  }
                  onClick={() => handleStatSort("fta", columnDirection)}
                >
                  {" "}
                  FTA
                </th>
                <th
                  className={
                    activeStat === "ftm"
                      ? "uppercase bg-cyan-800 text-gray-100 border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-cyan-800 hover:text-gray-100"
                  }
                  onClick={() => handleStatSort("ftm", columnDirection)}
                >
                  FTM
                </th>
                <th
                  className={
                    activeStat === "ast"
                      ? "uppercase bg-cyan-800 text-gray-100 border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-cyan-800 hover:text-gray-100"
                  }
                  onClick={() => handleStatSort("ast", columnDirection)}
                >
                  AST
                </th>
                <th
                  className={
                    activeStat === "blk"
                      ? "uppercase bg-cyan-800 text-gray-100 border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-cyan-800 hover:text-gray-100"
                  }
                  onClick={() => handleStatSort("blk", columnDirection)}
                >
                  BLK
                </th>
                <th
                  className={
                    activeStat === "stl"
                      ? "uppercase bg-cyan-800 text-gray-100 border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-cyan-800 hover:text-gray-100"
                  }
                  onClick={() => handleStatSort("stl", columnDirection)}
                >
                  STL
                </th>
                <th
                  className={
                    activeStat === "pf"
                      ? "uppercase bg-cyan-800 text-gray-100 border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-cyan-800 hover:text-gray-100"
                  }
                  onClick={() => handleStatSort("pf", columnDirection)}
                >
                  PF
                </th>
                <th
                  className={
                    activeStat === "turnover"
                      ? "uppercase bg-cyan-800 text-gray-100 border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-cyan-800 hover:text-gray-100"
                  }
                  onClick={() => handleStatSort("turnover", columnDirection)}
                >
                  TO
                </th>
                <th
                  className={
                    activeStat === "reb"
                      ? "uppercase bg-cyan-800 text-gray-100 border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-cyan-800 hover:text-gray-100"
                  }
                  onClick={() => handleStatSort("reb", columnDirection)}
                >
                  REB
                </th>
                <th
                  className={
                    activeStat === "oreb"
                      ? "uppercase bg-cyan-800 text-gray-100 border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-cyan-800 hover:text-gray-100"
                  }
                  onClick={() => handleStatSort("oreb", columnDirection)}
                >
                  OREB
                </th>
                <th
                  className={
                    activeStat === "dreb"
                      ? "uppercase bg-cyan-800 text-gray-100 border border-gray-300  lg:table-cell w-10 cursor-pointer"
                      : "uppercase bg-gray-200 text-gray-600 border border-gray-300  lg:table-cell w-10 cursor-pointer hover:bg-cyan-800 hover:text-gray-100"
                  }
                  onClick={() => handleStatSort("dreb", columnDirection)}
                >
                  DREB
                </th>
              </tr>
            </thead>
            <tbody>
              {playerList.map((player) => {
                return (
                  <tr
                    className="border bg-gray-900 even:bg-dark"
                    key={player.uuid}
                  >
                    <td className="border min-h-12 min-w-4 break-all ">
                      {player.first_name} {player.last_name}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {player.season}
                    </td>

                    <td className="border min-h-12 min-w-4 break-all ">
                      {player.stats.data.length > 0
                        ? player.stats.data[0].min
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? player.stats.data[0].games_played
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? player.stats.data[0].pts
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? `${(player.stats.data[0].fg_pct * 100).toFixed(1)} % `
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? player.stats.data[0].fga
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? player.stats.data[0].fgm
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? `${(player.stats.data[0].fg3_pct * 100).toFixed(1)} %`
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? player.stats.data[0].fg3a
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? player.stats.data[0].fg3m
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? `${(player.stats.data[0].ft_pct * 100).toFixed(1)} %`
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? player.stats.data[0].fta
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? player.stats.data[0].ftm
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? player.stats.data[0].ast
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? player.stats.data[0].blk
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? player.stats.data[0].stl
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? player.stats.data[0].pf
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? player.stats.data[0].turnover
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? player.stats.data[0].reb
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? player.stats.data[0].oreb
                        : "DNP"}
                    </td>
                    <td className="border min-h-12 min-w-4 break-all ">
                      {" "}
                      {player.stats.data.length > 0
                        ? player.stats.data[0].dreb
                        : "DNP"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex justify-start place-items-start text-left w-full">
            <div className="text-gray-500 text-sm p-2">
              <ul>
                <li className="pb-2">
                  * Statistika će se prikazati kao 0 ako se igrač nije natjecao u sezoni
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
