import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UsersController],
  providers: [UserService],
})
export class UsersModule {}
