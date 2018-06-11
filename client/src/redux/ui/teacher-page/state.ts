interface TeacherPageState {
  addTeacherModalVisible: boolean;
  isBusy: boolean;
  data: any; // FindAllTeachersDetailDto[];
  total: number;
  pageNumber: number;
  pageSize: number;
  subject: string;
  name: string;
  sortBy: string;
  asc: boolean;
  currentTeacher: any; // FindAllTeachersDetailDto;
  imageSrc: string;
  errorMessage: string;
}

export {
  TeacherPageState
};
