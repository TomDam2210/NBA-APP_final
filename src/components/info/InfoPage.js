import React from "react";

import infoBackground from "../../slike/info-background.svg";
import TomoInfo from "./TomoInfo";

export default function InfoPage() {
  return (
    <div
      className="min-h-screen bg-cover text-gray-100"
      style={{ backgroundImage: `url(${infoBackground})` }}
    >
      <div className="flex flex-col container mx-auto items-center">
        <TomoInfo />
      </div>
    </div>
  );
}
