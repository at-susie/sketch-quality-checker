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
const sketch_core_assistant_1 = __importDefault(require("@sketch-hq/sketch-core-assistant"));
//////// Rule Definition for duplicateArtboards
const duplicateArtboards = {
    rule: (context) => __awaiter(void 0, void 0, void 0, function* () {
        var duplicates = [];
        for (const artboard of context.utils.objects.artboard) {
            var existingElement = duplicates.find((element) => element.name == artboard.name);
            if (existingElement != null) {
                existingElement.number++;
                existingElement.artboards.push(artboard);
            }
            else
                var initialArtboards;
            initialArtboards = [];
            initialArtboards.push(artboard);
            duplicates.push({ name: artboard.name, artboards: initialArtboards, number: 1 });
        }
        for (const duplicate of duplicates) {
            if (duplicate.number > 1) {
                for (const artboard of duplicate.artboards) {
                    context.utils.report("", artboard);
                }
            }
        }
    }),
    name: 'duplicates-assistant/duplicate-artboards',
    title: 'Hey, you have duplicated artboards',
    description: '',
};
var no_shape_name = [
    '^Oval$', '^Oval Copy$', '^Oval Copy 2$', '^Oval Copy 3$', '^Oval Copy 4$', '^Oval Copy 5$', '^Oval Copy 6$',
    '^Rectangle$', '^Rectangle Copy$', '^Rectangle Copy 2$', '^Rectangle Copy 3$', '^Rectangle Copy 4$', '^Rectangle Copy 5$', '^Rectangle Copy 6$',
    '^Path$', '^Path Copy$', '^Path Copy 2$', '^Path Copy 3$', '^Path Copy 4$', '^Path Copy 5$', '^Path Copy 6$',
    '^Combined Shape$', '^Combined Shape Copy$', '^Combined Shape Copy 2$', '^Combined Shape Copy 3$', '^Combined Shape Copy 4$', '^Combined Shape Copy 5$', '^Combined Shape Copy 6$'
];
const assistant = [
    sketch_core_assistant_1.default,
    () => __awaiter(void 0, void 0, void 0, function* () {
        return {
            name: 'sketch-quality-checker',
            rules: [duplicateArtboards],
            config: {
                rules: {
                    '@sketch-hq/sketch-core-assistant/name-pattern-shapes': {
                        active: true,
                        allowed: [],
                        forbidden: no_shape_name,
                        ruleTitle: 'Hey Atsushi, do not leave default shape name!!!',
                    },
                    '@sketch-hq/sketch-core-assistant/name-pattern-groups': {
                        active: true,
                        allowed: [],
                        forbidden: ['^Group$', '^Group Copy$', '^Group Copy 2$', '^Group Copy 3$', '^Group Copy 4$', '^Group Copy 5$'],
                        ruleTitle: 'Hey Atsushi, do not leave default group name!!!',
                    },
                    '@sketch-hq/sketch-core-assistant/borders-no-disabled': {
                        active: true,
                        ruleTitle: 'Hey Atsushi, disabled border should be removed.',
                    },
                    '@sketch-hq/sketch-core-assistant/fills-no-disabled': {
                        active: true,
                        ruleTitle: 'Hey Atsushi, disabled fill should be removed.',
                    },
                    '@sketch-hq/sketch-core-assistant/shadows-no-disabled': {
                        active: true,
                        ruleTitle: 'Hey Atsushi, disabled shadow should be removed.',
                    },
                    '@sketch-hq/sketch-core-assistant/layer-styles-no-dirty': {
                        active: true,
                        ruleTitle: 'Hey Atsushi, Seems you have broken Layer Styles',
                    },
                    '@sketch-hq/sketch-core-assistant/text-styles-no-dirty': {
                        active: true,
                        ruleTitle: 'Hey Atsushi, Seems you have broken Text Styles',
                    },
                    '@sketch-hq/sketch-core-assistant/groups-no-redundant': {
                        active: true,
                        ruleTitle: 'Hey Atsushi, You have unnecessary grouping',
                    },
                    'duplicates-assistant/duplicate-artboards': {
                        active: true,
                    },
                },
            },
        };
    }),
];
exports.default = assistant;
