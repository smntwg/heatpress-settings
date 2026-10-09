import { methodPages } from "./methods.mjs";
import { fabricPages } from "./fabrics.mjs";
import { restPages } from "./rest.mjs";
import { pyjamaPages } from "./pyjamas.mjs";

export const pages = [...methodPages, ...fabricPages, ...pyjamaPages, ...restPages];
