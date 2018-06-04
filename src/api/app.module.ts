import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  components: [],
  controllers: [],
  imports: [AuthModule],
})
export class AppModule {}
