import { createTRPCReact } from "@trpc/react-query";

import type { AppRouter } from "@repo/trpc";

export const trpcReactClient = createTRPCReact<AppRouter>();

// import type { AppRouter } from "@repo/trpc";
// import { httpBatchLink } from "@trpc/client";
// import { createTRPCNext } from "@trpc/next";

// export const trpc = createTRPCNext<AppRouter>({
//   config(opts) {
//     return {
//       links: [
//         httpBatchLink({
//           /**
//            * If you want to use SSR, you need to use the server's full URL
//            * @link https://trpc.io/docs/v11/ssr
//            **/
//           url: `http://localhost:4000/trpc`,

//           // You can pass any HTTP headers you wish here
//           async headers() {
//             return {
//               // authorization: getAuthCookie(),
//             };
//           },
//         }),
//       ],
//     };
//   },
//   /**
//    * @link https://trpc.io/docs/v11/ssr
//    **/
//   ssr: false,
// });
