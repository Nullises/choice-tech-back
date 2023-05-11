import { FilesController } from './files.controller';
import { FilesService } from './files.service';

describe('filesController_class', () => {
  // Tests that findAll() returns data from httpService.
  it('test_find_all_returns_data', async () => {
    const mockData = { data: 'mock data' };
    const mockHttpService = {
      axiosRef: { get: jest.fn().mockResolvedValue(mockData) },
    };
    const filesService = new FilesService(mockHttpService as any);
    const filesController = new FilesController(filesService);

    const result = await filesController.findAll();

    expect(result).toEqual(mockData.data);
  });

  // Tests that findByName() returns data from httpService and converts it to JSON.
  it('test_find_by_name_returns_data', async () => {
    const mockData = 'mock,csv,data';
    const mockJsonData = [{ mock: 'data' }];
    const mockHttpService = {
      axiosRef: { get: jest.fn().mockResolvedValue(mockData) },
    };
    const filesService = new FilesService(mockHttpService as any);
    const filesController = new FilesController(filesService);

    const result = await filesController.findByName('mockFileName');

    expect(result).toEqual(mockJsonData);
  });

  // Tests that findAll() throws an error.
  it('test_find_all_throws_error', async () => {
    const mockError = new Error('mock error');
    const mockHttpService = {
      axiosRef: { get: jest.fn().mockRejectedValue(mockError) },
    };
    const filesService = new FilesService(mockHttpService as any);
    const filesController = new FilesController(filesService);

    await expect(filesController.findAll()).rejects.toThrow(mockError);
  });

  // Tests that findByName() throws an error.
  it('test_find_by_name_throws_error', async () => {
    const mockError = new Error('mock error');
    const mockHttpService = {
      axiosRef: { get: jest.fn().mockRejectedValue(mockError) },
    };
    const filesService = new FilesService(mockHttpService as any);
    const filesController = new FilesController(filesService);

    await expect(filesController.findByName('mockFileName')).rejects.toThrow(
      mockError,
    );
  });
});
