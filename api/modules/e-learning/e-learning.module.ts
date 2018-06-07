import { Module } from '@nestjs/common';
import { StudyResultController } from './controllers/study-result.controller';
import { StudyResultService } from './services/study-result.service';

@Module({
  components: [StudyResultService],
  controllers: [StudyResultController],
  imports: [],
  exports: [],
})
export class ELearningModule {}