"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Bookmark, Egg } from "lucide-react";
import { Separator } from "./separator";
import { useStore } from "@/lib/useStore";
import { Response } from "@/lib/types";

type FixtureCardProps = {
  data: Response;
};

const FixtureCard = ({ data }: FixtureCardProps) => {
  const { bookmarks, toggleBookmark } = useStore();
  const matchId = data.fixture.id.toString();
  const time = new Date(data.fixture.date).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const isBookmarked = bookmarks[matchId] || false;

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-row gap-x-2 items-center">
        <div>
          <Egg />
        </div>
        <div>
          <h1 className="font-bold">{data.league.name}</h1>
          <p>{data.league.country}</p>
        </div>
      </div>
      <Card className="rounded-2xl">
        <CardContent className="w-full flex flex-row justify-between items-center gap-x-4">
          {/* Lewa strona */}
          <div className="flex flex-row gap-x-6 flex-1 items-center">
            <span className="text-sm">{time}</span>
            <div className="flex flex-col justify-between flex-1">
              <div className="flex items-center gap-x-2">
                <Egg />
                <p className="text-sm">Team1</p>
              </div>
              <Separator className="my-2" />
              <div className="flex items-center gap-x-2">
                <Egg />
                <p className="text-sm">Team2</p>
              </div>
            </div>
          </div>
          <div>
            <Bookmark
              className="w-6 h-6"
              onClick={() => toggleBookmark(matchId)}
              fill={isBookmarked ? "white" : ""}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FixtureCard;
