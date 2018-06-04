const checkAllPermissions = (
  pagePermissions: string[] = [],
  userPermissions: string[] = [],
) => {
  let result = true;
  for (const item of pagePermissions) {
    if (userPermissions.indexOf(item) === -1) {
      result = false;
      return result;
    }
  }
  return result;
};

const checkOnePermission = (
  pagePermissions: string[] = [],
  userPermissions: string[] = [],
) => {
  let result = false;
  if (pagePermissions.length === 0) {
    result = true;
    return result;
  } else {
    for (const item of pagePermissions) {
      if (userPermissions.indexOf(item) > -1) {
        result = true;
        return result;
      }
    }
  }
  return result;
};

export { checkAllPermissions, checkOnePermission };
