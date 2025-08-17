"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Bookmark, CircleEllipsis, Egg } from "lucide-react";
import { Separator } from "./separator";
import { useStore } from "@/lib/useStore";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FixtureCardDialog from "./FixtureCardDialog";
import { toZonedTime, format } from "date-fns-tz";
import { FixtureData } from "@/lib/types";

type FixtureCardProps = {
  data: FixtureData;
};

const FixtureCard = ({ data }: FixtureCardProps) => {
  const { bookmarks, toggleBookmark, timezone } = useStore();
  const matchId = data.fixture.id.toString();
  const isBookmarked = bookmarks[matchId] || false;
  const zonedTime = toZonedTime(data.fixture.date, timezone);
  const time = format(zonedTime, "HH:mm");

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-row gap-x-4 items-center">
        <div>
          <Image
            width={36}
            height={36}
            alt={`${data.league.name} logo`}
            src={data.league.logo}
          />
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

            <div className="flex flex-col flex-1 gap-y-2">
              {/* Home */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-2">
                  <Image
                    width={18}
                    height={18}
                    alt={`${data.teams.home} logo`}
                    src={data.teams.home.logo}
                  />
                  <p className="text-sm">{data.teams.home.name}</p>
                </div>
                <span className="text-sm font-bold">
                  {data.goals.home ?? "-"}
                </span>
              </div>

              <Separator className="my-1" />

              {/* Away */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-2">
                  <Image
                    width={18}
                    height={18}
                    alt={`${data.teams.away} logo`}
                    src={data.teams.away.logo}
                  />
                  <p className="text-sm">{data.teams.away.name}</p>
                </div>
                <span className="text-sm font-bold">
                  {data.goals.away ?? "-"}
                </span>
              </div>
            </div>
          </div>

          {/* Bookmark */}
          <div>
            <Dialog>
              <DialogTrigger>
                <CircleEllipsis />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogDescription asChild>
                    <FixtureCardDialog data={data} />
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <Bookmark
              className="w-6 h-6 cursor-pointer"
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
