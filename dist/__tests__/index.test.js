"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const sketch_assistant_utils_1 = require("@sketch-hq/sketch-assistant-utils");
const __1 = __importDefault(require(".."));
test('test assistant', () => __awaiter(void 0, void 0, void 0, function* () {
    const { violations, ruleErrors } = yield sketch_assistant_utils_1.testAssistant(path_1.resolve(__dirname, './empty.sketch'), __1.default);
    expect(violations[0].message).toBe('Hello world');
    expect(ruleErrors).toHaveLength(0);
}));
