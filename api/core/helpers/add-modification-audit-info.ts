import { HasModificationAuditInfo } from '../interfaces';

const addModificationAuditInfo = <T extends HasModificationAuditInfo>(
  req: any,
  model: any,
): T => {
  return {
    ...model,
    lastModifiedBy: req.username,
    lastModifiedAt: new Date(),
  };
};

export default addModificationAuditInfo;
