interface ProfilePageState {
  firstName: string;
  middleName: string;
  lastName: string;
  password?: string;
  username: string;
  email: string;
  isBusy: boolean;
  errorMessage: string;
  imageSrc: string;
}

export default ProfilePageState;
