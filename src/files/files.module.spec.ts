import { FilesController } from './files.controller';
import { FilesService } from './files.service';

describe('FilesModule_class', () => {
  // Tests that filesService.findAll() returns the expected data.
  it('test_Files_service_find_all_returns_expected_data', async () => {
    const httpService = {
      axiosRef: {
        get: jest.fn().mockResolvedValue({ data: 'test data' }),
      },
    };
    const filesService = new FilesService(httpService as any);
    const result = await filesService.findAll();
    expect(result).toEqual({ file: 'test data', lines: [] });
  });

  // Tests that filesService.findByName() returns the expected data.
  it('test_Files_service_find_by_name_returns_expected_data', async () => {
    const httpService = {
      axiosRef: {
        get: jest.fn().mockResolvedValue({ data: 'test data' }),
      },
    };
    const filesService = new FilesService(httpService as any);
    const result = await filesService.findByName('test name');
    expect(result).toEqual('test data');
  });

  // Tests that FilesController.findByName() returns an error when called with an empty fileName query parameter.
  it('test_Files_controller_find_by_name_with_empty_file_name_query_parameter', async () => {
    const filesService = {
      findByName: jest.fn().mockResolvedValue('test data'),
    };
    const filesController = new FilesController(filesService as any);
    const result = await filesController.findByName('');
    expect(result).toEqual({ error: 'test data' });
  });
});
