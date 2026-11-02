import type { APIRoute } from "astro";
import { collectUrls } from "@/lib/urls";

export const GET: APIRoute = async () => Response.json(await collectUrls());
