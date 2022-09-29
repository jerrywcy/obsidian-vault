'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
使用声明
本插件基于多款社区插件开发而成，蚕子水平有限，代码或许存在缺陷，不能保证任何用户或任何操作均为正常，
请您在使用本插件之前，先备份好Obsidian笔记库，谢谢配合。
开发：蚕子 QQ：312815311 更新时间：2021-4-25
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
        this.defaultPrefix = '';
        this.defaultChar = '、';
    }
    Settings.prototype.toJson = function () {
        return JSON.stringify(this);
    };
    Settings.prototype.fromJson = function (content) {
        var obj = JSON.parse(content);
        this.defaultPrefix = obj['defaultPrefix'];
        this.defaultChar = obj['defaultChar'];

    };
    return Settings;
}());

var MyPlugin = /** @class */ (function (_super) {
	var allText = "";
    __extends(MyPlugin, _super);
    function MyPlugin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.settings = new Settings();
        _this.SETTINGS_PATH = '.obsidian/textEdit.json';
        return _this;
    }
    MyPlugin.prototype.onload = function () {
    	return __awaiter(this, void 0, void 0,
        function() {
            var _this = this;
            return __generator(this,
            function(_a) {
		        console.log('加载插件');
                this.addCommand({
		            id: 'biaoti0-text',
		            name: '标题0语法',
		            callback: function () {	_this.预览标题0();},
		            hotkeys: [{ modifiers: ["Mod"], key: "`" } ]
		        });
                this.addCommand({
		            id: 'biaoti1-text',
		            name: '标题1语法',
		            callback: function () {	_this.预览标题1();},
		            hotkeys: [{ modifiers: ["Mod"], key: "1" } ]
		        });
                this.addCommand({
		            id: 'biaoti2-text',
		            name: '标题2语法',
		            callback: function () {	_this.预览标题2();},
		            hotkeys: [{ modifiers: ["Mod"], key: "2" } ]
		        });
                this.addCommand({
		            id: 'biaoti3-text',
		            name: '标题3语法',
		            callback: function () {	_this.预览标题3();},
		            hotkeys: [{ modifiers: ["Mod"], key: "3" } ]
		        });
                this.addCommand({
		            id: 'biaoti4-text',
		            name: '标题4语法',
		            callback: function () {	_this.预览标题4();},
		            hotkeys: [{ modifiers: ["Mod"], key: "4" } ]
		        });
                this.addCommand({
		            id: 'biaoti5-text',
		            name: '标题5语法',
		            callback: function () {	_this.预览标题5();},
		            hotkeys: [{ modifiers: ["Mod"], key: "5" } ]
		        });
                this.addCommand({
		            id: 'biaoti6-text',
		            name: '标题6语法',
		            callback: function () {	_this.预览标题6();},
		            hotkeys: [{ modifiers: ["Mod"], key: "6" } ]
		        });
                this.addCommand({
		            id: 'zhuozhong-text',
		            name: '`着重语法`',
		            callback: function () {	_this.预览着重();},
		            hotkeys: [{ modifiers: ["Alt"], key: "`" } ]
		        });
                this.addCommand({
		            id: 'gaoliang-text',
		            name: '==高亮语法==',
		            callback: function () {	_this.预览高亮();},
		            hotkeys: [{ modifiers: ["Alt"], key: "G" } ]
		        });
		        this.addCommand({
		            id: 'history-forward',
		            name: '预览时前翻',
		            callback: function () {	history.forward()},
		            hotkeys: [{ modifiers: [],key: "F10"}]
		        });
		        this.addCommand({
		            id: 'history-back',
		            name: '预览时后翻',
		            callback: function () {	history.back()},
		            hotkeys: [{ modifiers: [],key: "F9"}]
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

    MyPlugin.prototype.获取编辑模式 = function () {
        var view = this.app.workspace.activeLeaf.view;
        if (view.getViewType() == 'markdown') {
            var markdownView = view;
            var cmEditor = markdownView.sourceMode.cmEditor;
            return cmEditor;
        }
        return null;
    };

    MyPlugin.prototype.获取所选文本 = function(editor) {
        if (!editor) return;
        var selection = editor.getSelection();
        if (selection != "") {
        	return selection;
        } else {
            return;            
        }
    };

    MyPlugin.prototype.预览高亮 = function() {
        var selection = window.getSelection();
        //new obsidian.Notice(selection);
        var view = this.app.workspace.activeLeaf.view;
        var cmEditor = view.sourceMode.cmEditor;
        var lines = cmEditor.getValue();
        //new obsidian.Notice(lines);
        var gaoliang = eval("/[`=]+"+selection+"[`=]+/ig");
        var xuanwen = eval("/"+selection+"/ig")
        if(gaoliang.test(lines)){
            lines = lines.replace(gaoliang,selection);
        }else{
            lines = lines.replace(xuanwen,"=="+selection+"==");
        }
        view.setMode(view.sourceMode)
        cmEditor.setValue(lines);
        view.setMode(view.previewMode)
    };
    MyPlugin.prototype.预览着重 = function() {
        var selection = window.getSelection();
        //new obsidian.Notice(selection);
        var view = this.app.workspace.activeLeaf.view;
        var cmEditor = view.sourceMode.cmEditor;
        var lines = cmEditor.getValue();
        //new obsidian.Notice(lines);
        var zhuozhong = eval("/[`=]+"+selection+"[`=]+/ig");
        var xuanwen = eval("/"+selection+"/ig")
        if(zhuozhong.test(lines)){
            lines = lines.replace(zhuozhong,selection);
        }else{
            lines = lines.replace(xuanwen,"`"+selection+"`");
        }
        view.setMode(view.sourceMode)
        cmEditor.setValue(lines);
        view.setMode(view.previewMode)
    };
    MyPlugin.prototype.预览标题0 = function() {
        var selection = window.getSelection();
        var view = this.app.workspace.activeLeaf.view;
        var cmEditor = view.sourceMode.cmEditor;
        var lines = cmEditor.getValue();
        var biaoti = eval("/^#+ "+selection+"$/m");
        if(biaoti.test(lines)){
            lines = lines.replace(biaoti,selection);
        }
        view.setMode(view.sourceMode)
        cmEditor.setValue(lines);
        view.setMode(view.previewMode)
    };
    MyPlugin.prototype.预览标题1 = function() {
        var selection = window.getSelection();
        var view = this.app.workspace.activeLeaf.view;
        var cmEditor = view.sourceMode.cmEditor;
        var lines = cmEditor.getValue();
        var biaoti1 = eval("/^#+ "+selection+"$/m");
        var xuanwen = eval("/^"+selection+"$/m")
        if(biaoti1.test(lines)){
            lines = lines.replace(biaoti1,selection);
            lines = lines.replace(xuanwen,"# "+selection);
        }else{
            lines = lines.replace(xuanwen,"# "+selection);
        }
        view.setMode(view.sourceMode)
        cmEditor.setValue(lines);
        view.setMode(view.previewMode)
    };
    MyPlugin.prototype.预览标题2 = function() {
        var selection = window.getSelection();
        var view = this.app.workspace.activeLeaf.view;
        var cmEditor = view.sourceMode.cmEditor;
        var lines = cmEditor.getValue();
        var biaoti1 = eval("/^#+ "+selection+"$/m");
        var xuanwen = eval("/^"+selection+"$/m")
        if(biaoti1.test(lines)){
            lines = lines.replace(biaoti1,selection);
            lines = lines.replace(xuanwen,"## "+selection);
        }else{
            lines = lines.replace(xuanwen,"## "+selection);
        }
        view.setMode(view.sourceMode)
        cmEditor.setValue(lines);
        view.setMode(view.previewMode)
    };
    MyPlugin.prototype.预览标题3 = function() {
        var selection = window.getSelection();
        var view = this.app.workspace.activeLeaf.view;
        var cmEditor = view.sourceMode.cmEditor;
        var lines = cmEditor.getValue();
        var biaoti1 = eval("/^#+ "+selection+"$/m");
        var xuanwen = eval("/^"+selection+"$/m")
        if(biaoti1.test(lines)){
            lines = lines.replace(biaoti1,selection);
            lines = lines.replace(xuanwen,"### "+selection);
        }else{
            lines = lines.replace(xuanwen,"### "+selection);
        }
        view.setMode(view.sourceMode)
        cmEditor.setValue(lines);
        view.setMode(view.previewMode)
    };
    MyPlugin.prototype.预览标题4 = function() {
        var selection = window.getSelection();
        var view = this.app.workspace.activeLeaf.view;
        var cmEditor = view.sourceMode.cmEditor;
        var lines = cmEditor.getValue();
        var biaoti1 = eval("/^#+ "+selection+"$/m");
        var xuanwen = eval("/^"+selection+"$/m")
        if(biaoti1.test(lines)){
            lines = lines.replace(biaoti1,selection);
            lines = lines.replace(xuanwen,"#### "+selection);
        }else{
            lines = lines.replace(xuanwen,"#### "+selection);
        }
        view.setMode(view.sourceMode)
        cmEditor.setValue(lines);
        view.setMode(view.previewMode)
    };
    MyPlugin.prototype.预览标题5 = function() {
        var selection = window.getSelection();
        var view = this.app.workspace.activeLeaf.view;
        var cmEditor = view.sourceMode.cmEditor;
        var lines = cmEditor.getValue();
        var biaoti1 = eval("/^#+ "+selection+"$/m");
        var xuanwen = eval("/^"+selection+"$/m")
        if(biaoti1.test(lines)){
            lines = lines.replace(biaoti1,selection);
            lines = lines.replace(xuanwen,"##### "+selection);
        }else{
            lines = lines.replace(xuanwen,"##### "+selection);
        }
        view.setMode(view.sourceMode)
        cmEditor.setValue(lines);
        view.setMode(view.previewMode)
    };
    MyPlugin.prototype.预览标题6 = function() {
        var selection = window.getSelection();
        var view = this.app.workspace.activeLeaf.view;
        var cmEditor = view.sourceMode.cmEditor;
        var lines = cmEditor.getValue();
        var biaoti1 = eval("/^#+ "+selection+"$/m");
        var xuanwen = eval("/^"+selection+"$/m")
        if(biaoti1.test(lines)){
            lines = lines.replace(biaoti1,selection);
            lines = lines.replace(xuanwen,"###### "+selection);
        }else{
            lines = lines.replace(xuanwen,"###### "+selection);    
        }
        view.setMode(view.sourceMode)
        cmEditor.setValue(lines);
        view.setMode(view.previewMode)
    };
    
    MyPlugin.prototype.替换所选文本 = function(editor, lines) {
        var selection = editor.getSelection();
        editor.replaceSelection(lines);
    };
    
    MyPlugin.prototype.补加空行 = function() {
		var lines = this.获取笔记全文 (this.获取编辑模式 ());
        if (!lines) return;
        lines = lines.replace(/([^\n])\n([^\n])/g,"$1\n\n$2");
        this.替换笔记全文 (this.获取编辑模式 (), lines);
    };
    
    MyPlugin.prototype.去除空行 = function() {
        var lines = this.获取笔记全文 (this.获取编辑模式 ());
        if (!lines) return;
        lines = lines.replace(/([^\n])\n\n?([^\n])/g,"$1\n$2")
        this.替换笔记全文 (this.获取编辑模式 (), lines);
    };
    
    MyPlugin.prototype.获取笔记全文 = function(editor) {
    	if (!editor) return;
        var selection = editor.getSelection();
        if (selection != "") {
       		return selection;
        } else {
            return editor.getValue();         
        }
    };
    
    MyPlugin.prototype.替换笔记全文 = function(editor, lines) {
	    var selection = editor.getSelection();
        if (selection != "") {
            editor.replaceSelection(lines);
        } else {
            editor.setValue(lines);
        }
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
        containerEl.createEl('h2', { text: '增强预览 0.0.1' });
        new obsidian.Setting(containerEl)
            .setName('支持 在【预览模式】下使用快捷键转换MD语法')
            .setDesc('鼠标划选中文字后，按下 Ctrl+(0-6) 键可将选文行指定为小标题。')
        new obsidian.Setting(containerEl)
            .setName('支持 快捷键将【预览模式】下所选文本转换为 高亮效果')
            .setDesc('按下快捷键 Alt+G 可将划选的文本设置或取除 高亮效果')
        new obsidian.Setting(containerEl)
            .setName('支持 快捷键将【预览模式】下所选文本转换为 着重效果')
            .setDesc('按下快捷键 Alt+` 可将划选的文本设置或取除 着重效果')
        new obsidian.Setting(containerEl)
            .setName('支持 F9返回、F10前进预览')
            .setDesc('如有更多文本编辑类功能建议，请留言给蚕子（QQ312815311）。')
    };
    return SettingsTab;
}(obsidian.PluginSettingTab));

module.exports = MyPlugin;