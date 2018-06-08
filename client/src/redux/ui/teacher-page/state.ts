interface TeacherPageState {
  addTeacherModalVisible: boolean;
  isBusy: boolean;
  data: FindAllTeachersDetailDto[];
  total: number;
  pageNumber: number;
  pageSize: number;
  filter?: string;
  search?: string;
  sortBy: string;
  asc: boolean;
  currentTeacher: FindAllTeachersDetailDto;
}

export {
  TeacherPageState
};