import { SchemaDefinition } from 'mongoose';

const addAuditSchema = (definition: SchemaDefinition): SchemaDefinition => {
  return {
    ...definition,
    createdBy: String,
    createdAt: Date,
    lastModifiedBy: String,
    lastModifiedAt: Date,
  };
};

export default addAuditSchema;
