import xlsx from "xlsx";
import path from "path";

export function readExcelData(): any[] {
  try {
    const filePath = path.join(__dirname, "../data/Banking Demo File.xlsx");
    const workbook = xlsx.readFile(filePath);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(sheet);
    return data;
  } catch (error) {
    console.error("Error reading Excel file:", error);
    return [];
  }
}
