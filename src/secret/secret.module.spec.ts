import { SecretController } from './secret.controller';
import { SecretService } from './secret.service';

describe('SecretModule_class', () => {
  // Tests that SecretService.findAll() returns the expected data.
  it('test_secret_service_find_all_returns_expected_data', async () => {
    const httpService = {
      axiosRef: {
        get: jest.fn().mockResolvedValue({ data: 'test data' }),
      },
    };
    const secretService = new SecretService(httpService as any);
    const result = await secretService.findAll();
    expect(result).toEqual({ file: 'test data', lines: [] });
  });

  // Tests that SecretService.findByName() returns the expected data.
  it('test_secret_service_find_by_name_returns_expected_data', async () => {
    const httpService = {
      axiosRef: {
        get: jest.fn().mockResolvedValue({ data: 'test data' }),
      },
    };
    const secretService = new SecretService(httpService as any);
    const result = await secretService.findByName('test name');
    expect(result).toEqual('test data');
  });

  // Tests that SecretController.findByName() returns an error when called with an empty fileName query parameter.
  it('test_secret_controller_find_by_name_with_empty_file_name_query_parameter', async () => {
    const secretService = {
      findByName: jest.fn().mockResolvedValue('test data'),
    };
    const secretController = new SecretController(secretService as any);
    const result = await secretController.findByName('');
    expect(result).toEqual({ error: 'test data' });
  });
});
