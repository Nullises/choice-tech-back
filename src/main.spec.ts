/* eslint-disable @typescript-eslint/no-var-requires */
import { AppModule } from './app.module';

describe('bootstrap_function', () => {
  // Tests that the app can be created successfully.
  it('test_app_creation_success', async () => {
    const mockApp = {
      listen: jest.fn(),
    };
    const mockNestFactory = {
      create: jest.fn().mockResolvedValue(mockApp),
    };
    jest.mock('@nestjs/core', () => ({
      NestFactory: mockNestFactory,
    }));
    const { bootstrap } = require('./bootstrap');
    await bootstrap();
    expect(mockNestFactory.create).toHaveBeenCalledWith(AppModule);
  });

  // Tests that the app can listen on port 3001 successfully.
  it('test_port_listen_success', async () => {
    const mockApp = {
      listen: jest.fn(),
    };
    const mockNestFactory = {
      create: jest.fn().mockResolvedValue(mockApp),
    };
    jest.mock('@nestjs/core', () => ({
      NestFactory: mockNestFactory,
    }));
    const { bootstrap } = require('./bootstrap');
    await bootstrap();
    expect(mockApp.listen).toHaveBeenCalledWith(3001);
  });
});
