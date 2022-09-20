import React from "react";
import { useSelector } from "react-redux";
import PlayerSelector from "../player/PlayerSelector";
import PlayerList from "../player/PlayerList";
import PlayerTable from "../player/PlayerTable";
import pozadina from "../../slike/nba.svg";
import BarChart from "../charts/BarChart";
import LineChart from "../charts/LineChart";
import TomoInfo from "../info/TomoInfo";

export default function HomePage() {
  const state = useSelector((state) => state);
  return (
    <section
      className="min-h-screen bg-cover"
      style={{ backgroundImage: `url(${pozadina})` }}
    >
      {state.searchResult.length === 0 && state.playerList.length === 0 && (
        <div className="container mx-auto pt-12 text-zinc-50 text-2xl flex flex-col items-center justify-center">
          <div className="text-center">
            Pretražite i dodajte NBA igrače kako bi počeli uspoređivati prosjeke sezone
          </div>

          <TomoInfo />
        </div>
      )}
      <div className="container mx-auto pt-12 text-gray-100">
        <PlayerSelector />
        <PlayerList />
        <PlayerTable />
        <BarChart />
        <LineChart />
      </div>
    </section>
  );
}
