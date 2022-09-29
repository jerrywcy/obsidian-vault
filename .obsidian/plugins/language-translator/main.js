var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/main.ts
__export(exports, {
  default: () => LanguageTranslator
});
var import_obsidian = __toModule(require("obsidian"));

// src/langCodes.ts
var langCodes = [
  { text: "Afrikaans", code: "af" },
  { text: "Albanian", code: "sq" },
  { text: "Amharic", code: "am" },
  { text: "Arabic", code: "ar" },
  { text: "Armenian", code: "hy" },
  { text: "Assamese", code: "as" },
  { text: "Azerbaijani", code: "" },
  { text: "Bangla", code: "bn" },
  { text: "Bashkir", code: "ba" },
  { text: "Bosnian (Latin)", code: "bs" },
  { text: "Bulgarian", code: "bg" },
  { text: "Cantonese (Traditional)", code: "yue" },
  { text: "Catalan", code: "ca" },
  { text: "Chinese (Literary)", code: "lzh" },
  { text: "Chinese Simplified", code: "zh-Hans" },
  { text: "Chinese Traditional", code: "zh-Hant" },
  { text: "Croatian", code: "hr" },
  { text: "Czech", code: "cs" },
  { text: "Danish", code: "da" },
  { text: "Dari", code: "prs" },
  { text: "Divehi", code: "dv" },
  { text: "Dutch", code: "nl" },
  { text: "English", code: "en" },
  { text: "Estonian", code: "et" },
  { text: "Fijian", code: "fj" },
  { text: "Filipino", code: "fil" },
  { text: "Finnish", code: "fi" },
  { text: "French", code: "fr" },
  { text: "French (Canada)", code: "fr-ca" },
  { text: "Georgian", code: "ka" },
  { text: "German", code: "de" },
  { text: "Greek", code: "el" },
  { text: "Gujarati", code: "gu" },
  { text: "Haitian Creole", code: "ht" },
  { text: "Hebrew", code: "he" },
  { text: "Hindi", code: "hi" },
  { text: "Hmong Daw", code: "mww" },
  { text: "Hungarian", code: "hu" },
  { text: "Icelandic", code: "is" },
  { text: "Indonesian", code: "id" },
  { text: "Inuktitut", code: "iu" },
  { text: "Irish", code: "ga" },
  { text: "Italian", code: "it" },
  { text: "Japanese", code: "ja" },
  { text: "Kannada", code: "kn" },
  { text: "Kazakh", code: "kk" },
  { text: "Khmer", code: "km" },
  { text: "Klingon", code: "tlh-Latn" },
  { text: "Klingon (plqaD)", code: "tlh-Piqd" },
  { text: "Korean", code: "ko" },
  { text: "Kurdish (Central)", code: "ku" },
  { text: "Kurdish (Northern)", code: "kmr" },
  { text: "Kyrgyz", code: "ky" },
  { text: "Lao", code: "lo" },
  { text: "Latvian", code: "lv" },
  { text: "Lithuanian", code: "lt" },
  { text: "Macedonian", code: "mk" },
  { text: "Malagasy", code: "mg" },
  { text: "Malay", code: "ms" },
  { text: "Malayalam", code: "ml" },
  { text: "Maltese", code: "mt" },
  { text: "Maori", code: "mi" },
  { text: "Marathi", code: "mr" },
  { text: "Mongolian (Cyrillic)", code: "mn-Cyrl" },
  { text: "Mongolian (Traditional)", code: "mn-Mong" },
  { text: "Myanmar", code: "my" },
  { text: "Nepali", code: "ne" },
  { text: "Norwegian", code: "nb" },
  { text: "Odia", code: "or" },
  { text: "Pashto", code: "ps" },
  { text: "Persian", code: "fa" },
  { text: "Polish", code: "pl" },
  { text: "Portuguese (Brazil)", code: "pt" },
  { text: "Portuguese (Portugal)", code: "pt-pt" },
  { text: "Punjabi", code: "pa" },
  { text: "Queretaro Otomi", code: "otq" },
  { text: "Romanian", code: "ro" },
  { text: "Russian", code: "ru" },
  { text: "Samoan", code: "sm" },
  { text: "Serbian (Cyrillic)", code: "sr-Cyrl" },
  { text: "Serbian (Latin)", code: "sr-Latn" },
  { text: "Slovak", code: "sk" },
  { text: "Slovenian", code: "sl" },
  { text: "Spanish", code: "es" },
  { text: "Swahili", code: "sw" },
  { text: "Swedish", code: "sv" },
  { text: "Tahitian", code: "ty" },
  { text: "Tamil", code: "ta" },
  { text: "Tatar", code: "tt" },
  { text: "Telugu", code: "te" },
  { text: "Thai", code: "th" },
  { text: "Tibetan", code: "bo" },
  { text: "Tigrinya", code: "ti" },
  { text: "Tongan", code: "to" },
  { text: "Turkish", code: "tr" },
  { text: "Turkmen", code: "tk" },
  { text: "Ukrainian", code: "uk" },
  { text: "Urdu", code: "ur" },
  { text: "Uyghur", code: "ug" },
  { text: "Uzbek (Latin)", code: "uz" },
  { text: "Vietnamese", code: "vi" },
  { text: "Welsh", code: "cy" },
  { text: "Yucatec Maya", code: "yua" }
];
var langCodes_default = langCodes;

// src/main.ts
var TRANSLATE_API_URL = "https://api.cognitive.microsofttranslator.com";
var AUTH_URL = "https://func-language-worker-auth.azurewebsites.net/api/GetAuthToken";
var MAX_CHARACTERS = 1e3;
var DEFAULT_SETTINGS = {
  defaultLanguage: {
    text: "English",
    code: "en"
  }
};
var LanguageTranslator = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.onEditorCallback = (editor) => __async(this, null, function* () {
      let res = "[translation error]";
      try {
        const selection = editor.getSelection();
        if (selection.length > MAX_CHARACTERS) {
          new import_obsidian.Notice(`Exceeded ${MAX_CHARACTERS} max characters!`);
          return;
        }
        let textForTranslation = selection;
        let targetLang = this.settings.defaultLanguage.code;
        let splittedText = textForTranslation.split(":", 2);
        if (splittedText.length != 2 && !targetLang) {
          new import_obsidian.Notice("Incorrect format!");
          return;
        } else if (splittedText.length == 2) {
          targetLang = splittedText[0];
          textForTranslation = splittedText[1];
        }
        const payload = JSON.stringify([{ text: textForTranslation }]);
        const myHeaders = new Headers({
          "Ocp-Apim-Subscription-Key": this.token,
          "Ocp-Apim-Subscription-Region": "WestEurope",
          "Content-type": "application/json"
        });
        const response = yield fetch(`${TRANSLATE_API_URL}/translate?api-version=3.0&to=${targetLang}`, {
          method: "POST",
          body: payload,
          headers: myHeaders
        });
        const json = yield response.json();
        res = json[0].translations[0].text;
      } catch (err) {
        console.log(err);
        new import_obsidian.Notice(err.message);
      }
      editor.replaceSelection(res);
    });
    this.getToken = () => __async(this, null, function* () {
      try {
        const response = yield fetch(AUTH_URL);
        this.token = yield response.text();
      } catch (err) {
        console.log(err);
        new import_obsidian.Notice(err.message);
      }
    });
  }
  onload() {
    return __async(this, null, function* () {
      yield this.loadSettings();
      yield this.getToken();
      this.addCommand({
        id: "language-translator-editor-command",
        name: "Insert translation",
        editorCallback: this.onEditorCallback,
        hotkeys: [
          {
            modifiers: ["Ctrl", "Shift"],
            key: "R"
          }
        ]
      });
      this.addSettingTab(new LanguageTranslatorSettingsTab(this.app, this));
    });
  }
  loadSettings() {
    return __async(this, null, function* () {
      this.settings = Object.assign({}, DEFAULT_SETTINGS, yield this.loadData());
    });
  }
  saveSettings() {
    return __async(this, null, function* () {
      yield this.saveData(this.settings);
    });
  }
};
var LanguageTranslatorSettingsTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    let { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Language Translator Settings" });
    new import_obsidian.Setting(containerEl).setName("Default Language").setDesc("Set default language for translations").addDropdown((dropDown) => {
      langCodes_default.forEach((el) => {
        dropDown.addOption(el.code, el.text);
      });
      dropDown.onChange((value) => __async(this, null, function* () {
        this.plugin.settings.defaultLanguage = langCodes_default.find((l) => l.code == value);
        yield this.plugin.saveSettings();
      }));
      dropDown.setValue(this.plugin.settings.defaultLanguage.code);
    });
  }
};
