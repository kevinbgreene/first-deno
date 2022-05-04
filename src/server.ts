import { readStaticFile } from "./file.ts";

const PORT = 8080;
const server = Deno.listen({ port: PORT });
console.log(`Server running on port: ${PORT}`);

for await (const connection of server) {
  const httpConn = Deno.serveHttp(connection);
  handleHttpRequests(httpConn);
}

async function handleHttpRequests(conn: Deno.HttpConn): Promise<void> {
  for await (const requestEvent of conn) {
    const url = new URL(requestEvent.request.url);
    console.log({ url });
    const fileContent = await readStaticFile(url.pathname);
    requestEvent.respondWith(
      new Response(fileContent, {
        status: 200,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
        },
      }),
    );
  }
}
