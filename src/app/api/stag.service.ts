import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class StagService {
  constructor() {}

  // Fetch Wikipedia summary for a given place
  async fetchWikipediaSummary(place: string): Promise<string> {
    const url = `https://cs.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
      place,
    )}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data && data.extract) {
        return data.extract; // Return the first paragraph of the Wikipedia article
      } else {
        throw new Error("No extract found");
      }
    } catch (error) {
      console.error("Error fetching Wikipedia summary:", error);
      return "No information available from Wikipedia."; // Fallback message
    }
  }
}
