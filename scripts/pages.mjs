import { methodPages } from "./methods.mjs";
import { fabricPages } from "./fabrics.mjs";
import { restPages } from "./rest.mjs";

export const pages = [...methodPages, ...fabricPages, ...restPages];
