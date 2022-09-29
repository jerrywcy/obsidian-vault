'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
使用声明
本插件基于多款社区插件开发而成，蚕子水平有限，代码或许存在缺陷，不能保证任何用户或任何操作均为正常，
请您在使用本插件之前，先备份好Obsidian笔记库，谢谢配合。
开发：蚕子 QQ：312815311 更新时间：2021-9-14
***************************************************************************** */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var Settings = /** @class */ (function () {
    function Settings() {
        this.autoPreview= true;
        this.keyWordsPV = '自动预览';
        this.autoIndent = false;
        this.autoIndent1 = false;
        this.keyWords1 = '#cca4e3■\\d+[\\.:]?\\d*[年月日万千百元%]+';
        this.autoIndent2 = false;
        this.keyWords2 = '#a4e2c6■\\d+[\\.:]?\\d*[万千百元%]+';
        this.autoIndent3 = false;
        this.keyWords3 = '#96ce54■\\d+[\\.:]?\\d*[年月日%]+';
        this.autoIndent4 = false;
        this.keyWords4 = '#44cef6■\\d+[\\.:]?\\d*[%]+';
        this.autoIndent5 = false;
        this.keyWords5 = '#75664d■文件,编辑,选择,操作';
        this.autoIndent6 = false;
        this.keyWords6 = '#4b5cc4■昨天,今天,明天,完成,待办';
        this.autoIndent7 = false;
        this.keyWords7 = '#4b5cc4■词1,词2,词3,词4,词5';
        this.autoIndent8 = false;
        this.keyWords8 = '#4b5cc4■词1,词2,词3,词4,词5';
    }
    Settings.prototype.toJson = function () {
        return JSON.stringify(this);
    };
    Settings.prototype.fromJson = function (content) {
        var obj = JSON.parse(content);
        if(obj['autoPreview'] !=null){
            this.autoPreview = obj['autoPreview'];
            this.keyWordsPV = obj['keyWordsPV'];
        }
        if(obj['autoIndent'] !=null){
            this.autoIndent = obj['autoIndent'];
        }
        if(obj['keyWords1'] !=null){
            this.autoIndent1 = obj['autoIndent1'];
            this.keyWords1 = obj['keyWords1'];
        }
        if(obj['keyWords2'] !=null){
            this.autoIndent2 = obj['autoIndent2'];
            this.keyWords2 = obj['keyWords2'];
        }
        if(obj['keyWords3'] !=null){
            this.autoIndent3 = obj['autoIndent3'];
            this.keyWords3 = obj['keyWords3'];
        }
        if(obj['keyWords4'] !=null){
            this.autoIndent4 = obj['autoIndent4'];
            this.keyWords4 = obj['keyWords4'];
        }
        if(obj['keyWords5'] !=null){
            this.autoIndent5 = obj['autoIndent5'];
            this.keyWords5 = obj['keyWords5'];
        }
        if(obj['keyWords6'] !=null){
            this.autoIndent6 = obj['autoIndent6'];
            this.keyWords6 = obj['keyWords6'];
        }
        if(obj['keyWords7'] !=null){
            this.autoIndent7 = obj['autoIndent7'];
            this.keyWords7 = obj['keyWords7'];
        }
        if(obj['keyWords8'] !=null){
            this.autoIndent8 = obj['autoIndent8'];
            this.keyWords8 = obj['keyWords8'];
        }
    };
    return Settings;
}());

var MyPlugin = /** @class */ (function (_super) {
    __extends(MyPlugin, _super);
    var lines = "";
    var myState = {};
    function MyPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.settings = new Settings();
        _this.SETTINGS_PATH = '.obsidian/multicolor.json';
        return _this;
    }
    MyPlugin.prototype.onload = function () {
        var _this = this;
        this.registerEvent(this.app.workspace.on('file-open', function (file) {
                if (file && file.path) {
                    //_this.currentFile = file;
                    var lines = _this.获取编辑模式 ().getValue();
                    //new obsidian.Notice(lines);
                    if(!lines) return;
                    var lastId = _this.获取编辑模式 ().lastLine();
                    var lastLine = _this.获取编辑模式 ().getLine(lastId);
                    //new obsidian.Notice(lastLine);
                    //new obsidian.Notice(_this.settings.keyWordsPV);
                    if(_this.settings.autoPreview){
                        var link =eval("/"+_this.settings.keyWordsPV+"$/m")
                        var link1 =/   $/
                        if(link1.test(lastLine) || link.test(lastLine)){
                            _this.指定预览模式();
                        }else{
                            _this.指定编辑模式();
                        }
                    }
                }
        }));

        this.registerEvent(this.app.workspace.on("layout-change", () => {
            //new obsidian.Notice("测试切换效果");
            if(this.settings.autoIndent){
                lines = this.获取笔记全文 (this.获取编辑模式 ());
                if (!lines) return;
                lines = lines.replace(/(\<[^\<\>]+ ob\>)+(.*?(\s*\r?\n)*)(\<\/span\>)+/ig,"$2");
                this.替换笔记全文 (this.获取编辑模式 (), lines);
                view.setEphemeralState({focus:!0});
            }
        }));

    	return __awaiter(this, void 0, void 0,
        function() {
            var _this = this;
            return __generator(this,
            function(_a) {
		        console.log('加载插件');
		        this.addCommand({
		            id: 'multi-color-preview',
		            name: '切换模式',
		            callback: function() { _this.切换模式(); },
		            hotkeys: [{ modifiers: [], key: "Escape" } ]
		        });
                
		        this.addSettingTab(new SettingsTab(this.app, this));
		        this.loadSettings();
                return [2];
             });
        });
    };
    MyPlugin.prototype.onunload = function () {
        console.log('卸载插件');
    };
    MyPlugin.prototype.saveSettings = function () {
        var settings = this.settings.toJson();
        this.app.vault.adapter.write(this.SETTINGS_PATH, settings);
    };
    MyPlugin.prototype.loadSettings = function () {
    	console.log("加载插件");
        var _this = this;
        this.app.vault.adapter.read(this.SETTINGS_PATH).
            then(function (content) { return _this.settings.fromJson(content); }).
            catch(function (error) { console.log("未找到设置文件。"); });
    };
    
    MyPlugin.prototype.切换模式 = function () {
    	var _this = this;
        var view = this.app.workspace.activeLeaf.view;
    	var currentView = _this.app.workspace.activeLeaf.view;
		if(currentView.getState().mode === 'preview'){
			_this.指定编辑模式 ();
		}else{
			_this.指定预览模式 ();
		}
    }

    MyPlugin.prototype.获取编辑模式 = function () {
        var view = this.app.workspace.activeLeaf.view;
        if (view.getViewType() == 'markdown') {
            var markdownView = view;
            var cmEditor = markdownView.sourceMode.cmEditor;
            return cmEditor;
        }
        return null;
    };
    
    MyPlugin.prototype.指定编辑模式 = function () {
		var view = this.app.workspace.activeLeaf.view;
		view.setMode(view.sourceMode)
        if(this.settings.autoIndent){
            lines = this.获取笔记全文 (this.获取编辑模式 ());
            if (!lines) return;
            lines = lines.replace(/(\<[^\<\>]+ ob\>)+(.*?(\s*\r?\n)*)(\<\/span\>)+/ig,"$2");
            this.替换笔记全文 (this.获取编辑模式 (), lines);
            //无论设置与否，编辑模式下都要去除首行空格
        }
        view.setEphemeralState({focus:!0});
    };
    
    MyPlugin.prototype.指定预览模式 = function () {
        if(this.settings.autoIndent){
            lines = this.获取笔记全文 (this.获取编辑模式 ());
            if (!lines) return;
            //myState = this.获取坐标点 ();
            if(this.settings.autoIndent1){
                this.正则替换(this.settings.keyWords1);
            }
            if(this.settings.autoIndent2){
                this.正则替换(this.settings.keyWords2);
            }
            if(this.settings.autoIndent3){
                this.正则替换(this.settings.keyWords3);
            }
            if(this.settings.autoIndent4){
                this.正则替换(this.settings.keyWords4);
            }
            if(this.settings.autoIndent5){
                this.词组替换(this.settings.keyWords5);
            }
            if(this.settings.autoIndent6){
                this.词组替换(this.settings.keyWords6);
            }
            if(this.settings.autoIndent7){
                this.词组替换(this.settings.keyWords7);
            }
            if(this.settings.autoIndent8){
                this.词组替换(this.settings.keyWords8);
            }
            this.替换笔记全文 (this.获取编辑模式 (), lines);
       }
        var view = this.app.workspace.activeLeaf.view;
        view.setMode(view.previewMode)
    };

    MyPlugin.prototype.获取坐标点 = function () {
        var _a, _b, _c;
        let state = {};
        state.scroll = Number((_c = (_b = (_a = this.app.workspace.getActiveViewOfType(obsidian.MarkdownView)) === null || _a === void 0 ? void 0 : _a.currentMode) === null || _b === void 0 ? void 0 : _b.getScroll()) === null || _c === void 0 ? void 0 : _c.toFixed(4));
        let editor = this.getEditor();
        if (editor) {
            let from = editor.getCursor("anchor");
            let to = editor.getCursor("head");
            if (from && to) {
                state.cursor = {
                    from: {
                        ch: from.ch,
                        line: from.line
                    },
                    to: {
                        ch: to.ch,
                        line: to.line
                    }
                };
            }
        }
        return state;
    }
    
    MyPlugin.prototype.正则替换 = function(_str) {
        if(_str=="")return;
        if(_str.slice(0,1)=="#"){
            var _color = _str.slice(0,7);
            var _reg = eval("/("+_str.slice(8)+")/img");
            var _html = '\<span style=\"color:'+_color+'\" ob\>$1\<\/span\>';
            //new obsidian.Notice(_reg);
            //new obsidian.Notice(_html);
            lines = lines.replace(_reg,_html);
        }else if(_str.slice(0,2)=="bg"){
            var _color = _str.slice(2,7);
            var _reg = eval("/("+_str.slice(10)+")/img");
            var _html = '\<span style=\"background\-color:'+_color+'\" ob\>$1\<\/span\>';
            //new obsidian.Notice(_reg);
            //new obsidian.Notice(_html);
            lines = lines.replace(_reg,_html);
        }
    };

    MyPlugin.prototype.词组替换 = function(_str) {
        var _color
        var _keyWords
        var _word
        if(_str==""){
            //文本框为空则什么也不做
        }else if(_str.slice(0,1)=="#"){
            //new obsidian.Notice(_str);
            _color = _str.slice(0,7);
            _keyWords = _str.slice(8);
            //new obsidian.Notice(_keyWords);
            if(_keyWords != ""){
                _keyWords = _keyWords.replace(/[、,，\\\/\s]/g,",")
                _word = _keyWords.split(",");
                //new obsidian.Notice(_word[0]);
                for (var i=0;i<_word.length;i++){ 
                    var _reg = eval("/("+_word[i]+")/img");
                    var _html = '\<span style=\"color:'+_color+'\" ob\>$1\<\/span\>'
                    lines = lines.replace(_reg,_html);
                }
            }
        }else if(_str.slice(0,2)=="bg"){
            _color = _str.slice(2,9);
            _keyWords = _str.slice(10);
            if(_keyWords != ""){
                _keyWords = _keyWords.replace(/[、,，\\\/\s]/g,",")
                _word = _keyWords.split(",");
                //new obsidian.Notice(_color + " " +_keyWords + " " + _word);
                for (var i=0;i<_word.length;i++){
                    var _reg = eval("/("+_word[i]+")/img");
                    var _html = '\<span style=\"background\-color:'+_color+'\" ob\>$1\<\/span\>'
                    lines = lines.replace(_reg,_html);
                }
            }
        }
    };

    MyPlugin.prototype.获取笔记全文 = function(editor) {
    	if (!editor) return;
        return editor.getValue();         
    };
    
    MyPlugin.prototype.替换笔记全文 = function(editor, lines) {
        editor.setValue(lines);
    };
    return MyPlugin;
}(obsidian.Plugin));

var SettingsTab = /** @class */ (function (_super) {
    __extends(SettingsTab, _super);
    function SettingsTab(app, plugin) {
        var _this = _super.call(this, app, plugin) || this;
        _this.plugin = plugin;
        _this.settings = plugin.settings;
        return _this;
    }
    SettingsTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        containerEl.empty();
        containerEl.createEl('h2', { text: '多彩预览 V0.0.9' });
        containerEl.createEl('h4', { text: '按下 ESC 键切换 预览/编辑模式' });

        new obsidian.Setting(containerEl)
            .setName('➤ 启用此项，判断笔记末尾信息自动切换模式。')
            .setDesc('打开笔记时，如文末有【三个空格】会进入预览模式，否则进入编辑模式。')
            .addToggle(function (toggle) { return toggle.setValue(_this.settings.autoPreview)
                .onChange(function (value) {
                _this.settings.autoPreview = value;
                _this.plugin.saveSettings();
            }); });
        new obsidian.Setting(containerEl)
            .setName('在笔记末尾出现 文本框中的内容 也会强制进入预览模式。')
            .addText(function (text) {
                return text
                    .setValue(_this.settings.keyWordsPV)
                    .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _this.settings.keyWordsPV = value;
                                return [4 , _this.plugin.saveSettings()];
                            case 1:
                                _a.sent();
                                return [2];
                        }
                    });
                }); });
            });
        
        new obsidian.Setting(containerEl)
            .setName('➤ 启用此项，以下设置方可生效。')
            .setDesc('预览模式下高亮指定文本；设定颜色在黑\亮模式下效果差异较大，请提前调试好再输入颜色值。')
            .addToggle(function (toggle) { return toggle.setValue(_this.settings.autoIndent)
                .onChange(function (value) {
                _this.settings.autoIndent = value;
                _this.plugin.saveSettings();
            }); });

        //containerEl.createEl('h3', { text: '高亮显示正则表达式对应内容' });
        new obsidian.Setting(containerEl)
            .setName('1、高亮显示【正则表达式】对应的内容')
            //.setDesc('　　格式为：#颜色编码■正则表达式。注意不要删除的方块符号')
            .addToggle(function (toggle) { return toggle.setValue(_this.settings.autoIndent1)
                .onChange(function (value) {
                _this.settings.autoIndent1 = value;
                _this.plugin.saveSettings();
            }); });
        new obsidian.Setting(containerEl)
        .setName('格式如下，注意不要删除方块符号。')
        .setDesc('前缀bg设置背景色，无前缀设置文字颜色')
        .addTextArea(text => {
            text
                .setPlaceholder('#颜色编码■\d+[万千百十元]+')
                .setValue(this.plugin.settings.keyWords1)
                .onChange((value) => __awaiter(this, void 0, void 0, function* () {
                this.plugin.settings.keyWords1 = value;
                yield this.plugin.saveSettings();
            }));
            text.inputEl.rows = 2;
            text.inputEl.cols = 50;
        });
        //containerEl.createEl('h3', { text: '高亮显示第1组关键词' });
        new obsidian.Setting(containerEl)
            .setName('2、高亮显示【正则表达式】对应的内容')
            .addToggle(function (toggle) { return toggle.setValue(_this.settings.autoIndent2)
                .onChange(function (value) {
                _this.settings.autoIndent2 = value;
                _this.plugin.saveSettings();
            }); });
        new obsidian.Setting(containerEl)
        .setName('格式如下，注意不要删除方块符号')
        .setDesc('前缀bg设置背景色，无前缀设置文字颜色')
        .addTextArea(text => {
            text
                .setPlaceholder('#颜色编码■\d+[万千百十元]+')
                .setValue(this.plugin.settings.keyWords2)
                .onChange((value) => __awaiter(this, void 0, void 0, function* () {
                this.plugin.settings.keyWords2 = value;
                yield this.plugin.saveSettings();
            }));
            text.inputEl.rows = 3;
            text.inputEl.cols = 50;
        });
        //containerEl.createEl('h3', { text: '高亮显示第2组关键词' });
        new obsidian.Setting(containerEl)
            .setName('3、高亮显示【正则表达式】对应的内容')
            .addToggle(function (toggle) { return toggle.setValue(_this.settings.autoIndent3)
                .onChange(function (value) {
                _this.settings.autoIndent3 = value;
                _this.plugin.saveSettings();
            }); });
        new obsidian.Setting(containerEl)
        .setName('格式如下，注意不要删除方块符号')
        .setDesc('前缀bg设置背景色，无前缀设置文字颜色')
        .addTextArea(text => {
            text
                .setPlaceholder('#颜色编码■\d+[万千百十元]+')
                .setValue(this.plugin.settings.keyWords3)
                .onChange((value) => __awaiter(this, void 0, void 0, function* () {
                this.plugin.settings.keyWords3 = value;
                yield this.plugin.saveSettings();
            }));
            text.inputEl.rows = 3;
            text.inputEl.cols = 50;
        });
        //containerEl.createEl('h3', { text: '高亮显示第3组关键词' });
        new obsidian.Setting(containerEl)
            .setName('4、高亮显示【正则表达式】对应的内容')
            .addToggle(function (toggle) { return toggle.setValue(_this.settings.autoIndent4)
                .onChange(function (value) {
                _this.settings.autoIndent4 = value;
                _this.plugin.saveSettings();
            }); });
        new obsidian.Setting(containerEl)
        .setName('格式如下，注意不要删除方块符号')
        .setDesc('前缀bg设置背景色，无前缀设置文字颜色')
        .addTextArea(text => {
            text
                .setPlaceholder('#颜色编码■\d+[万千百十元]+')
                .setValue(this.plugin.settings.keyWords4)
                .onChange((value) => __awaiter(this, void 0, void 0, function* () {
                this.plugin.settings.keyWords4 = value;
                yield this.plugin.saveSettings();
            }));
            text.inputEl.rows = 3;
            text.inputEl.cols = 50;
        });

        new obsidian.Setting(containerEl)
            .setName('5、高亮显示 ■以后的关键词文本')
            .addToggle(function (toggle) { return toggle.setValue(_this.settings.autoIndent5)
                .onChange(function (value) {
                _this.settings.autoIndent5 = value;
                _this.plugin.saveSettings();
            }); });
        new obsidian.Setting(containerEl)
        .setName('格式如下，注意不要删除方块符号')
        .setDesc('前缀bg设置背景色，无前缀设置文字颜色')
        .addTextArea(text => {
            text
                .setPlaceholder('#颜色编码■词1,词2,词3,词4')
                .setValue(this.plugin.settings.keyWords5)
                .onChange((value) => __awaiter(this, void 0, void 0, function* () {
                this.plugin.settings.keyWords5 = value;
                yield this.plugin.saveSettings();
            }));
            text.inputEl.rows = 3;
            text.inputEl.cols = 50;
        });

        new obsidian.Setting(containerEl)
        .setName('6、高亮显示 ■以后的关键词文本')
        .addToggle(function (toggle) { return toggle.setValue(_this.settings.autoIndent6)
            .onChange(function (value) {
            _this.settings.autoIndent6 = value;
            _this.plugin.saveSettings();
        }); });
        new obsidian.Setting(containerEl)
        .setName('格式如下，注意不要删除方块符号')
        .setDesc('前缀bg设置背景色，无前缀设置文字颜色')
        .addTextArea(text => {
            text
                .setPlaceholder('#颜色编码■词1,词2,词3,词4')
                .setValue(this.plugin.settings.keyWords6)
                .onChange((value) => __awaiter(this, void 0, void 0, function* () {
                this.plugin.settings.keyWords6 = value;
                yield this.plugin.saveSettings();
            }));
            text.inputEl.rows = 3;
            text.inputEl.cols = 50;
        });
        //containerEl.createEl('h3', { text: '高亮显示第7组关键词' });
        new obsidian.Setting(containerEl)
            .setName('7、高亮显示 ■以后的关键词文本')
            .addToggle(function (toggle) { return toggle.setValue(_this.settings.autoIndent7)
                .onChange(function (value) {
                _this.settings.autoIndent7 = value;
                _this.plugin.saveSettings();
            }); });
        new obsidian.Setting(containerEl)
        .setName('格式如下，注意不要删除方块符号')
        .setDesc('前缀bg设置背景色，无前缀设置文字颜色')
        .addTextArea(text => {
            text
                .setPlaceholder('#颜色编码■词1,词2,词3,词4')
                .setValue(this.plugin.settings.keyWords7)
                .onChange((value) => __awaiter(this, void 0, void 0, function* () {
                this.plugin.settings.keyWords7 = value;
                yield this.plugin.saveSettings();
            }));
            text.inputEl.rows = 3;
            text.inputEl.cols = 50;
        });
        //containerEl.createEl('h3', { text: '高亮显示第8组关键词' });
        new obsidian.Setting(containerEl)
            .setName('8、高亮显示 ■以后的关键词文本')
            .addToggle(function (toggle) { return toggle.setValue(_this.settings.autoIndent8)
                .onChange(function (value) {
                _this.settings.autoIndent8 = value;
                _this.plugin.saveSettings();
            }); });
        new obsidian.Setting(containerEl)
        .setName('格式如下，注意不要删除方块符号')
        .setDesc('前缀bg设置背景色，无前缀设置文字颜色')
        .addTextArea(text => {
            text
                .setPlaceholder('#颜色编码■词1,词2,词3,词4')
                .setValue(this.plugin.settings.keyWords8)
                .onChange((value) => __awaiter(this, void 0, void 0, function* () {
                this.plugin.settings.keyWords8 = value;
                yield this.plugin.saveSettings();
            }));
            text.inputEl.rows = 3;
            text.inputEl.cols = 50;
        });
    };
    return SettingsTab;
}(obsidian.PluginSettingTab));

module.exports = MyPlugin;