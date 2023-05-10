import { SecretController } from './secret.controller';
import { SecretService } from './secret.service';

describe('SecretController_class', () => {
  // Tests that findAll() returns data from httpService.
  it('test_find_all_returns_data', async () => {
    const mockData = { data: 'mock data' };
    const mockHttpService = {
      axiosRef: { get: jest.fn().mockResolvedValue(mockData) },
    };
    const secretService = new SecretService(mockHttpService as any);
    const secretController = new SecretController(secretService);

    const result = await secretController.findAll();

    expect(result).toEqual(mockData.data);
  });

  // Tests that findByName() returns data from httpService and converts it to JSON.
  it('test_find_by_name_returns_data', async () => {
    const mockData = 'mock,csv,data';
    const mockJsonData = [{ mock: 'data' }];
    const mockHttpService = {
      axiosRef: { get: jest.fn().mockResolvedValue(mockData) },
    };
    const secretService = new SecretService(mockHttpService as any);
    const secretController = new SecretController(secretService);

    const result = await secretController.findByName('mockFileName');

    expect(result).toEqual(mockJsonData);
  });

  // Tests that findAll() throws an error.
  it('test_find_all_throws_error', async () => {
    const mockError = new Error('mock error');
    const mockHttpService = {
      axiosRef: { get: jest.fn().mockRejectedValue(mockError) },
    };
    const secretService = new SecretService(mockHttpService as any);
    const secretController = new SecretController(secretService);

    await expect(secretController.findAll()).rejects.toThrow(mockError);
  });

  // Tests that findByName() throws an error.
  it('test_find_by_name_throws_error', async () => {
    const mockError = new Error('mock error');
    const mockHttpService = {
      axiosRef: { get: jest.fn().mockRejectedValue(mockError) },
    };
    const secretService = new SecretService(mockHttpService as any);
    const secretController = new SecretController(secretService);

    await expect(secretController.findByName('mockFileName')).rejects.toThrow(
      mockError,
    );
  });
});
