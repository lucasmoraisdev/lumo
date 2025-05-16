import { User } from "@lumo/core";
import { CreateUserDto } from "@lumo/core/dtos/user/create-user.dto";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>
  ) {}

  async findByEmail(email: string): Promise<User | undefined> {
    return this.repository.findOne({ where: { email } });
  }
  
  async findById(id: string): Promise<User | undefined> {
    return this.repository.findOne({ where: { id } });
  }

  async create(data: CreateUserDto): Promise<User> {
    const user = this.repository.create(data);
    return this.repository.save(user);
  }

  async save(user: User): Promise<User> {
    return this.repository.save(user);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}