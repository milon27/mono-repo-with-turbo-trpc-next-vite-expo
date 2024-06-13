"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { useState } from "react";
import { trpcReactClient } from "../services/trpc.service";

export function TRPCLayout({ children }: React.PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpcReactClient.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:4000/trpc",

          // You can pass any HTTP headers you wish here
          async headers() {
            return {
              authorization: "bearer tokenxxxx",
            };
          },
        }),
      ],
    })
  );

  return (
    <trpcReactClient.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpcReactClient.Provider>
  );
}
