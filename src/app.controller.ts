import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { join } from 'path';
import { multerConfig } from './multerConfig';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', multerConfig))
  upload(@UploadedFile() file: Express.Multer.File) {
    const url = join('/uploads', file.filename); // Adjust the URL path as needed

    // You can save the file to the database or perform other operations here

    // Return the URL as a response
    return {
      url: 'https://files.rivopelu.site' + url,
    };
  }
}
