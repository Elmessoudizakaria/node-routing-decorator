import { Controller, Post, Get, Body } from '../../../config';
import { Response, Request } from 'express';
import { UserService } from './user.service';

const service = new UserService();

@Controller('/user')
export class UserController {
  @Get('/')
  public find(req: Request, res: Response) {
    return res.send('USER');
  }

  @Get('/all')
  public async findAll(req: Request, res: Response) {
    const users = await service.findAll();
    res.json(users);
  }

  @Post('/')
  public create(@Body() test, res: Response) {
    console.log('body ', test);
    // console.log('testtt ', req.body);
    return res.json(1);
  }
}
