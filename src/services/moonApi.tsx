

// export async function getMoonData({ month, year } : { month: number, year: number }) {

//     const params = new URLSearchParams({ month: String(month), year: String(year) });

//     const response = await fetch(`https://www.icalendar37.net/lunar/api/?${params.toString()}`);

//     const json = response.json();

//     return json;
// }

import moonData from "@/services/moonData.json"

export async function getMoonData({ month, year } : { month: number, year: number }) {
    return (moonData as any)[String(year) as '2023' | '2024' | '2025'][month - 1];
}
