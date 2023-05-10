import { SecretService } from './secret.service';

describe('SecretService_class', () => {
  // Tests that the findAll method returns response data.
  it('test_find_all_returns_response_data', async () => {
    // Arrange
    const httpService = {
      axiosRef: {
        get: jest.fn().mockResolvedValue({ data: 'response data' }),
      },
    };
    const secretService = new SecretService(httpService as any);

    // Act
    const result = await secretService.findAll();

    // Assert
    expect(result).toEqual('response data');
  });

  // Tests that the findByName method returns parsed JSON data.
  it('test_find_by_name_returns_parsed_json_data', async () => {
    // Arrange
    const httpService = {
      axiosRef: {
        get: jest.fn().mockResolvedValue({ data: 'csv data' }),
      },
    };
    const secretService = new SecretService(httpService as any);

    // Act
    const result = await secretService.findByName('file.csv');

    // Assert
    expect(result).toEqual({
      file: 'csv data',
      lines: [],
    });
  });

  // Tests that the findAll method handles empty response data.
  it('test_find_all_handles_empty_response_data', async () => {
    // Arrange
    const httpService = {
      axiosRef: {
        get: jest.fn().mockResolvedValue({ data: '' }),
      },
    };
    const secretService = new SecretService(httpService as any);

    // Act
    const result = await secretService.findAll();

    // Assert
    expect(result).toEqual('');
  });

  // Tests that the findByName method handles empty CSV data.
  it('test_find_by_name_handles_empty_csv_data', async () => {
    // Arrange
    const httpService = {
      axiosRef: {
        get: jest.fn().mockResolvedValue({ data: '' }),
      },
    };
    const secretService = new SecretService(httpService as any);

    // Act
    const result = await secretService.findByName('file.csv');

    // Assert
    expect(result).toEqual({
      file: '',
      lines: [],
    });
  });

  // Tests that the findAll method sends correct headers.
  it('test_find_all_sends_correct_headers', async () => {
    // Arrange
    const httpService = {
      axiosRef: {
        get: jest.fn().mockResolvedValue({ data: '' }),
      },
    };
    const secretService = new SecretService(httpService as any);

    // Act
    await secretService.findAll();

    // Assert
    expect(httpService.axiosRef.get).toHaveBeenCalledWith(
      'https://echo-serv.tbxnet.com/v1/secret/files',
      {
        headers: {
          Authorization: 'Bearer aSuperSecretKey',
        },
      },
    );
  });

  // Tests that the findByName method sends correct headers and URL.
  it('test_find_by_name_sends_correct_headers_and_url', async () => {
    // Arrange
    const httpService = {
      axiosRef: {
        get: jest.fn().mockResolvedValue({ data: '' }),
      },
    };
    const secretService = new SecretService(httpService as any);

    // Act
    await secretService.findByName('file.csv');

    // Assert
    expect(httpService.axiosRef.get).toHaveBeenCalledWith(
      'https://echo-serv.tbxnet.com/v1/secret/file/file.csv',
      {
        headers: {
          Authorization: 'Bearer aSuperSecretKey',
        },
      },
    );
  });
});
