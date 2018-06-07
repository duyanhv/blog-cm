import { Module } from '@nestjs/common';
import { StudyResultController } from './controllers/study-result.controller';
import { StudyResultService } from './services/study-result.service';
import { TimeTableController } from './controllers/time-table.controller';
import { TimeTableService } from './services/time-table.service';

@Module({
  components: [StudyResultService, TimeTableService],
  controllers: [StudyResultController, TimeTableController],
  imports: [],
  exports: [],
})
export class ELearningModule {}