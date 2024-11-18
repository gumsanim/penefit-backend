import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}


  @Get('all')
  async getAllUsers(){
    const users = await this.userService.getAllUsers();
    return users;
  }

  @Get(':id')
  async getUserById(@Param('id') id: string){
    const user = await this.userService.getOneUserById(id);
    return user;
  }

  @Post('create')
  async createUser(@Body() createUserDto: CreateUserDto ){
    const newUser = await this.userService.createUser(createUserDto);
    return newUser;
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string){
    const isDeleted = await this.userService.deleteuser(id);
    return isDeleted;
  };




}

