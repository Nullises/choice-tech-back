import csvToJson from './csvToJson';

describe('csvToJson_function', () => {
  // Tests that the function correctly parses valid CSV data.
  it('test_valid_csv_data', () => {
    const csvData = 'file,text,number,hex\nexample.csv,hello,123,#FF0000';
    const expectedJsonResponse = {
      file: 'example.csv',
      lines: [{ text: 'hello', number: 123, hex: '#FF0000' }],
    };
    expect(csvToJson(csvData)).toEqual(expectedJsonResponse);
  });

  // Tests that the function correctly parses CSV data with multiple lines and columns.
  it('test_multiple_lines_and_columns', () => {
    const csvData =
      'file,text,number,hex\nexample.csv,hello,123,#FF0000\nexample2.csv,world,456,#00FF00';
    const expectedJsonResponse = {
      file: 'example2.csv',
      lines: [
        { text: 'hello', number: 123, hex: '#FF0000' },
        { text: 'world', number: 456, hex: '#00FF00' },
      ],
    };
    expect(csvToJson(csvData)).toEqual(expectedJsonResponse);
  });

  // Tests that the function handles empty CSV data correctly.
  it('test_empty_csv_data', () => {
    const csvData = '';
    const expectedJsonResponse = {
      file: '',
      lines: [],
    };
    expect(csvToJson(csvData)).toEqual(expectedJsonResponse);
  });

  // Tests that the function handles CSV data with only one line correctly.
  it('test_one_line_csv_data', () => {
    const csvData = 'file,text,number,hex\nexample.csv,hello,123,#FF0000';
    const expectedJsonResponse = {
      file: 'example.csv',
      lines: [{ text: 'hello', number: 123, hex: '#FF0000' }],
    };
    expect(csvToJson(csvData)).toEqual(expectedJsonResponse);
  });

  // Tests that the function handles CSV data with missing columns correctly.
  it('test_missing_columns_csv_data', () => {
    const csvData = 'file,text,number,hex\nexample.csv,hello,123';
    const expectedJsonResponse = {
      file: 'example.csv',
      lines: [
        {
          hex: undefined,
          number: 123,
          text: 'hello',
        },
      ],
    };
    expect(csvToJson(csvData)).toEqual(expectedJsonResponse);
  });
});
