import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

@Module({
  providers: [...databaseProviders],
  controllers: [],
  imports: [],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
