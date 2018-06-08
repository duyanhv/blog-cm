interface TeacherPageState {
  addTeacherModalVisible: boolean;
  isBusy: boolean;
  data: any[];
  total: number;
  pageNumber: number;
  pageSize: number;
  filter?: string;
  search?: string;
  sortBy: string;
  asc: boolean;
  currentTeacher: any;
}

export {
  TeacherPageState
};
