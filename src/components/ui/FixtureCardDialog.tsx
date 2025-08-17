"use client";

import { FixtureData } from "@/lib/types";
import Image from "next/image";

type FixtureCardDialogProps = {
  data: FixtureData;
};

const FixtureCardDialog = ({ data }: FixtureCardDialogProps) => {
  const time = new Date(data.fixture.date).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return (
    <div
      key={data.fixture.id}
      className="grid grid-rows-[auto_1fr] gap-y-8 p-2"
    >
      {/* League info */}
      <div className="flex items-center gap-x-2 self-start justify-self-start">
        <Image
          width={36}
          height={36}
          alt={`${data.league.name} logo`}
          src={data.league.logo}
        />
        <div className="flex flex-col">
          <h1 className="font-bold text-sm">{data.league.name}</h1>
          <p className="text-xs text-gray-500">{data.league.country}</p>
        </div>
      </div>

      {/* Mecze */}
      <div className="flex flex-row gap-x-12 items-center justify-center">
        <div className="flex flex-col gap-y-2 justify-center items-center w-24 text-center">
          <Image
            width={42}
            height={42}
            alt={`${data.teams.home.name} logo`}
            src={data.teams.home.logo}
          />
          <h1 className="text-xs break-words whitespace-normal">
            {data.teams.home.name}
          </h1>
        </div>

        <div className="flex flex-col gap-y-2 text-center">
          {data.fixture.status.short !== "NS" ? (
            <span className="font-bold">
              {data.goals.home} - {data.goals.away}
            </span>
          ) : (
            <span className="font-bold">{time}</span>
          )}
          <span className="text-xs">{data.fixture.status.long}</span>
        </div>

        <div className="flex flex-col gap-y-2 justify-center items-center w-24 text-center">
          <Image
            width={42}
            height={42}
            alt={`${data.teams.away.name} logo`}
            src={data.teams.away.logo}
          />
          <h1 className="text-xs break-words whitespace-normal">
            {data.teams.away.name}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default FixtureCardDialog;
