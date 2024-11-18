import { CreateUserDto } from './dto/user.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserModel } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(
        // typeorm을 통해 주입했다라는 annotation
        @InjectRepository(UserModel)
        private readonly userRepository: Repository<UserModel>){
    }

    async getAllUsers(){
        const users = await this.userRepository.find();
        return users;
    }

    async getOneUserById(id: string){
        const user = await this.userRepository.findOne({
            where: {
                id,
            }
        })
        return user;
    }

    async createUser(createUserDto: CreateUserDto){
        // create -> 저장할 객체를 생성
        // save -> 객체를 저장한다. (create로 생성한 객체를 저장)
        const user = this.userRepository.create(createUserDto);

        const newUser = await this.userRepository.save(user);
        return newUser;
    }

    async deleteuser(id: string){
        const user = await this.getOneUserById(id);

        if(!user){
            throw new NotFoundException();
        }

        await this.userRepository.delete(id);

        return true;
    }

};
