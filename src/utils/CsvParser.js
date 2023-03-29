import { parse } from 'papaparse';

export const parseCsv = async (csvFile) => {
    const response = await fetch(csvFile);
    const csvData = await response.text();
    const parsedData = parse(csvData, { header: true });
    return parsedData.data;
};