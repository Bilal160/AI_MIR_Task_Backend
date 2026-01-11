import { readExcelData } from "./excel.tool";
// export function formatDataAsTable(data: any[]): string {
//   if (data.length === 0) return "No data available.";

//   const keys = Object.keys(data[0]);
//   const header = keys.join(" | ");
//   const separator = keys.map(() => "---").join(" | ");
//   const rows = data.map(row => 
//     keys.map(key => String(row[key] || "N/A")).join(" | ")
//   );

//   return [header, separator, ...rows].join("\n");
// }


export function getAllExcelData(): any[] {
  return readExcelData();
}
