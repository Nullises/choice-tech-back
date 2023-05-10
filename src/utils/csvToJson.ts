interface Line {
  text: string;
  number: number;
  hex: string;
}

interface JsonResponse {
  file: string;
  lines: Line[];
}

function csvToJson(csvData: string): JsonResponse {
  const lines = csvData.split('\n');

  const jsonResponse: JsonResponse = {
    file: '',
    lines: [],
  };

  lines.forEach((line, index) => {
    if (index === 0) {
      jsonResponse.file = line.split(',')[0];
    } else if (line.trim() !== '') {
      const [_, text, number, hex] = line.split(',');
      jsonResponse.file = _;
      jsonResponse.lines.push({ text, number: parseInt(number), hex });
    }
  });

  return jsonResponse;
}

export default csvToJson;
