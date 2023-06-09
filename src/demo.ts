import { fetch } from "https://deno.land/x/fetch/mod.ts";

async function getInspirationalQuote() {
  const response = await fetch("https://api.goprogram.ai/inspiration");
  const data = await response.json();

  if (response.ok) {
    const { quote, author } = data;
    return { quote, author };
  } else {
    throw new Error("Failed to retrieve an inspirational quote.");
  }
}

const quoteData = await getInspirationalQuote();
console.log(quoteData.quote); // Access the quote
console.log(quoteData.author); // Access the author
