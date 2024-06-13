"use client";
import { Button } from "@repo/ui/components/ui/button";
import { trpcReactClient } from "../services/trpc.service";

export default function Home() {
  const { data, isLoading, error } = trpcReactClient.get.useQuery();

  console.log({ data, isLoading, error });

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-red-500 text-4xl">hello </h1>
      <Button>hey there</Button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
