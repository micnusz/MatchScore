"use client";
import { useFixturesToday } from "@/hooks/useFixturesToday";
import FixtureCard from "./ui/FixtureCard";
import Spinner from "./ui/spinner";

const FixturesContainer = () => {
  const { data, isLoading, error } = useFixturesToday();
  if (isLoading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col gap-y-4">
      {data?.data.map((fixture) => (
        <FixtureCard key={fixture.fixture.id} data={fixture} />
      ))}
    </div>
  );
};

export default FixturesContainer;
