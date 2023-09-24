import { type SchemaTypeDefinition } from "sanity";
import project from "./schemas/project";
import service from "./schemas/service";
import experience from "./schemas/experience";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, service, experience],
};
