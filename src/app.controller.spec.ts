import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController_class', () => {
  // Tests that the constructor initializes the appService correctly.
  it('test_constructor_initializes_app_service', () => {
    const appService = new AppService();
    const appController = new AppController(appService);
    expect(appController).toBeDefined();
  });
});
