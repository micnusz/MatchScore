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
    <div key={data.fixture.id}>
      <div className="flex flex-row gap-x-4">
        <div className="flex flex-col gap-y-4 justify-center items-center border-1">
          <Image
            width={42}
            height={42}
            alt={`${data.teams.home} logo`}
            src={data.teams.home.logo}
          />
          <h1>{data.teams.home.name}</h1>
        </div>
        <div>
          <span>{time}</span>
        </div>
        <div className="flex flex-col gap-y-4 justify-center items-center border-1">
          <Image
            width={42}
            height={42}
            alt={`${data.teams.away} logo`}
            src={data.teams.away.logo}
          />
          <h1>{data.teams.away.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default FixtureCardDialog;
