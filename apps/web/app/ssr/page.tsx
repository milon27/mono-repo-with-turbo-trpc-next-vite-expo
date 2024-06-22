import { trpcSSR } from "../../services/trpc-ssr.service";

export default async function SsrPage() {
  const data = await trpcSSR().get();

  return (
    <div>
      SsrPage
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
