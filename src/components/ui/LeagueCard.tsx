"use client";

import { LeagueData } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type LeagueCardProps = {
  data: LeagueData;
};

const LeagueCard = ({ data }: LeagueCardProps) => {
  return (
    <li className="flex flex-col items-center justify-center p-4 bg-accent shadow-md rounded-2xl min-h-[160px]">
      <Image
        alt={`${data.league.name} logo`}
        width={48}
        height={48}
        src={data.league.logo}
        className="mb-2"
      />
      <h1 className="text-center text-sm font-semibold break-words">
        {data.league.name}
      </h1>
    </li>
  );
};

export default LeagueCard;
