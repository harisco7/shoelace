var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
const includeFiles = new Map();
export const requestInclude = (src, mode = 'cors') => __awaiter(void 0, void 0, void 0, function* () {
  if (includeFiles.has(src)) {
    return includeFiles.get(src);
  }
  else {
    const request = fetch(src, { mode: mode }).then((response) => __awaiter(void 0, void 0, void 0, function* () {
      return {
        ok: response.ok,
        status: response.status,
        html: yield response.text()
      };
    }));
    includeFiles.set(src, request);
    return request;
  }
});
