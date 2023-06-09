import { fetch } from "https://deno.land/x/fetch/mod.ts";

/**
 * Fetches an inspirational quote from the GoProgram API.
 * @returns {Promise<{quote: string, author: string}>} An object containing the quote and author.
 * @throws {Error} If the API request fails or the response is not successful.
 */
export async function getInspirationalQuote() {
  const response = await fetch("https://api.goprogram.ai/inspiration");
  const data = await response.json();

  if (response.ok) {
    const { quote, author } = data;
    return { quote, author };
  } else {
    throw new Error("Failed to retrieve an inspirational quote.");
  }
}

export async function iLackADocstringAndWontBeImportedSadFace() {
  return { message: "How did you import me?" }
}
