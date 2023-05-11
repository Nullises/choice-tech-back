import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import csvToJson from '../utils/csvToJson';

@Injectable()
export class FilesService {
  constructor(private readonly httpService: HttpService) {}

  async findAll() {
    try {
      const headersRequest = {
        headers: {
          // These ones should be in a .env file, but Toolbox Technical Choice doesn't allow environment variables
          Authorization: `Bearer aSuperSecretKey`,
        },
      };
      const data = await this.httpService.axiosRef.get(
        `https://echo-serv.tbxnet.com/v1/secret/files`,
        headersRequest,
      );
      const response = data.data;

      return response;
    } catch (error) {
      return error;
    }
  }

  async findByName(name: string) {
    try {
      const headersRequest = {
        headers: {
          // These ones should be in a .env file, but Toolbox Technical Choice doesn't allow environment variables
          Authorization: `Bearer aSuperSecretKey`,
        },
      };
      const data = await this.httpService.axiosRef.get(
        `https://echo-serv.tbxnet.com/v1/secret/file/${name}`,
        headersRequest,
      );
      const response = data.data;

      const jsonData = csvToJson(response);

      return jsonData;
    } catch (error) {
      return error;
    }
  }
}
