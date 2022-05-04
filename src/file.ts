import { path } from "./deps.ts";

export async function readStaticFile(fileName: string): Promise<string> {
  const normalizedFileName = fileName.replace(/^\/+/, "");
  const filePath = path.resolve(Deno.cwd(), "./public/", normalizedFileName);
  const text = await Deno.readFile(filePath);
  const decoder = new TextDecoder("utf-8");
  const textContent = decoder.decode(text);

  return textContent;
}
