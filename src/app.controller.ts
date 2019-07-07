import { Controller, Get, Res, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Response, Request } from 'express';
import * as path from "path";

@Controller()
export class AppController {
  private allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg',
  ];

  constructor(private readonly appService: AppService) { }

  @Get("*")
  loadUI(@Res() res: Response, @Req() req: Request) {
    if (this.allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
      res.sendFile(path.resolve(`./note-me-ui/dist/${req.url}`));
    } else {
      res.sendFile(path.resolve('./note-me-ui/dist/index.html'));
    }
  }
}
