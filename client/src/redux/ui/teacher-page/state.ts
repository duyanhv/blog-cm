import { FindTeachersDetailDto } from '../../../service-proxies/service-proxies';

interface TeacherPageState {
  addTeacherModalVisible: boolean;
  isBusy: boolean;
  data: FindTeachersDetailDto[];
  total: number;
  pageNumber: number;
  pageSize: number;
  subject: string;
  name: string;
  sortBy: string;
  asc: boolean;
  currentTeacher: FindTeachersDetailDto;
  errorMessage: string;
}

export {
  TeacherPageState
};
