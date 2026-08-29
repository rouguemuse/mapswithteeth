import { TexasCountyData } from "@/types/texas";
import { TRAVIS_COUNTY } from "./travis";
import { WILLIAMSON_COUNTY } from "./williamson";
import { HARRIS_COUNTY } from "./harris";
import { CENTRAL_TEXAS_COUNTIES } from "./centralTexas";

export const ALL_TEXAS_COUNTIES: TexasCountyData[] = [
  TRAVIS_COUNTY,
  WILLIAMSON_COUNTY,
  HARRIS_COUNTY,
  ...CENTRAL_TEXAS_COUNTIES,
];

export function getCountyBySlug(slug: string): TexasCountyData | undefined {
  return ALL_TEXAS_COUNTIES.find((c) => c.slug.toLowerCase() === slug.toLowerCase());
}
