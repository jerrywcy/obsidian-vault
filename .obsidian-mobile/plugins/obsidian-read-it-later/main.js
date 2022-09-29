'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function getBaseUrl(url, prefix) {
    const dir = '/';
    const urlAsArray = url.split(dir);
    const doubleSlashIndex = url.indexOf('://');
    if (doubleSlashIndex !== -1 && doubleSlashIndex === url.indexOf(dir) - 1) {
        urlAsArray.length = 3;
        let url = urlAsArray.join(dir);
        if (prefix !== undefined)
            url = url.replace(/http:\/\/|https:\/\//, prefix);
        return url;
    }
    else {
        const pointIndex = url.indexOf('.');
        if (pointIndex !== -1 && pointIndex !== 0) {
            return (prefix !== undefined ? prefix : 'https://') + urlAsArray[0];
        }
    }
}
function normalizeFilename(fileName) {
    const illegalSymbols = [':', '#', '/', '\\', '|', '?', '*', '<', '>', '"'];
    if (illegalSymbols.some((el) => fileName.contains(el))) {
        illegalSymbols.forEach((ilSymbol) => {
            fileName = fileName.replace(ilSymbol, '');
        });
        return fileName;
    }
    else {
        return fileName;
    }
}

const DEFAULT_SETTINGS = {
    inboxDir: 'ReadItLater Inbox',
    openNewNote: false,
    youtubeNote: `[[ReadItLater]] [[Youtube]]\n\n# [%videoTitle%](%videoURL%)\n\n%videoPlayer%`,
    twitterNote: `[[ReadItLater]] [[Tweet]]\n\n# [%tweetAuthorName%](%tweetURL%)\n\n%tweetContent%`,
    parsableArticleNote: `[[ReadItLater]] [[Article]]\n\n# [%articleTitle%](%articleURL%)\n\n%articleContent%`,
    notParsableArticleNote: `[[ReadItLater]] [[Article]]\n\n[%articleURL%](%articleURL%)`,
    textSnippetNote: `[[ReadItLater]] [[Textsnippet]]\n\n%content%`,
};
class ReadItLaterSettingsTab extends obsidian.PluginSettingTab {
    constructor(app, plugin) {
        super(app, plugin);
        this.plugin = plugin;
    }
    display() {
        const { containerEl } = this;
        containerEl.empty();
        containerEl.createEl('h2', { text: 'Settings for the ReadItLater plugin.' });
        new obsidian.Setting(containerEl)
            .setName('Inbox dir')
            .setDesc('Enter valid folder name. For nested folders use this format: Folder A/Folder B. If no folder is enetred, new note will be created in vault root.')
            .addText((text) => text
            .setPlaceholder('Defaults to root')
            .setValue(this.plugin.settings.inboxDir || DEFAULT_SETTINGS.inboxDir)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            this.plugin.settings.inboxDir = value;
            yield this.plugin.saveSettings();
        })));
        new obsidian.Setting(containerEl)
            .setName('Open new note')
            .setDesc('If enabled, new note will open in current workspace')
            .addToggle((toggle) => toggle
            .setValue(this.plugin.settings.openNewNote || DEFAULT_SETTINGS.openNewNote)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            this.plugin.settings.openNewNote = value;
            yield this.plugin.saveSettings();
        })));
        new obsidian.Setting(containerEl)
            .setName('Youtube note template')
            .setDesc('Available variables: %videoTitle%, %videoURL%, %videoId%, %videoPlayer%')
            .addTextArea((textarea) => textarea
            .setValue(this.plugin.settings.youtubeNote || DEFAULT_SETTINGS.youtubeNote)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            this.plugin.settings.youtubeNote = value;
            yield this.plugin.saveSettings();
        })));
        new obsidian.Setting(containerEl)
            .setName('Twitter note template')
            .setDesc('Available variables: %tweetAuthorName%, %tweetURL%, %tweetContent%')
            .addTextArea((textarea) => textarea
            .setValue(this.plugin.settings.twitterNote || DEFAULT_SETTINGS.twitterNote)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            this.plugin.settings.twitterNote = value;
            yield this.plugin.saveSettings();
        })));
        new obsidian.Setting(containerEl)
            .setName('Parsable article note template')
            .setDesc('Available variables: %articleTitle%, %articleURL%, %articleContent%')
            .addTextArea((textarea) => textarea
            .setValue(this.plugin.settings.parsableArticleNote || DEFAULT_SETTINGS.parsableArticleNote)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            this.plugin.settings.parsableArticleNote = value;
            yield this.plugin.saveSettings();
        })));
        new obsidian.Setting(containerEl)
            .setName('Not parsable article note template')
            .setDesc('Available variables: %articleURL%')
            .addTextArea((textarea) => textarea
            .setValue(this.plugin.settings.notParsableArticleNote || DEFAULT_SETTINGS.notParsableArticleNote)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            this.plugin.settings.notParsableArticleNote = value;
            yield this.plugin.saveSettings();
        })));
        new obsidian.Setting(containerEl)
            .setName('Text snippet note template')
            .setDesc('Available variables: %content%')
            .addTextArea((textarea) => textarea
            .setValue(this.plugin.settings.textSnippetNote || DEFAULT_SETTINGS.textSnippetNote)
            .onChange((value) => __awaiter(this, void 0, void 0, function* () {
            this.plugin.settings.textSnippetNote = value;
            yield this.plugin.saveSettings();
        })));
    }
}

class Note {
    constructor(fileName, content) {
        this.fileName = fileName;
        this.content = content;
    }
}

class Parser {
    constructor(settings) {
        this.settings = settings;
    }
    isValidUrl(url) {
        try {
            new URL(url);
        }
        catch (e) {
            return false;
        }
        return true;
    }
    getFormattedDateForFilename() {
        const date = new Date();
        return obsidian.moment(date).format('YYYY-MM-DD HH-mm-ss');
    }
}

class YoutubeParser extends Parser {
    constructor(settings) {
        super(settings);
        this.PATTERN = /(youtube.com|youtu.be)\/(watch)?(\?v=)?(\S+)?/;
    }
    test(url) {
        return this.isValidUrl(url) && this.PATTERN.test(url);
    }
    prepareNote(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield obsidian.request({ method: 'GET', url });
            const videoTitle = new DOMParser().parseFromString(response, 'text/html').title;
            const videoId = this.PATTERN.exec(url)[4];
            const videoPlayer = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            const content = this.settings.youtubeNote
                .replace('%videoTitle%', videoTitle)
                .replace('%videoURL%', url)
                .replace('%videoId%', videoId)
                .replace('%videoPlayer%', videoPlayer);
            const fileName = `Youtube - ${videoTitle}.md`;
            return new Note(fileName, content);
        });
    }
}

class TwitterParser extends Parser {
    constructor(settings) {
        super(settings);
        this.PATTERN = /(https:\/\/twitter.com\/([a-zA-Z0-9_]+\/)([a-zA-Z0-9_]+\/[a-zA-Z0-9_]+))/;
    }
    test(url) {
        return this.isValidUrl(url) && this.PATTERN.test(url);
    }
    prepareNote(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = JSON.parse(yield obsidian.request({
                method: 'GET',
                contentType: 'application/json',
                url: `https://publish.twitter.com/oembed?url=${url}`,
            }));
            const tweetAuthorName = response.author_name;
            const content = this.settings.twitterNote
                .replace('%tweetAuthorName%', tweetAuthorName)
                .replace('%tweetURL%', response.url)
                .replace('%tweetContent%', response.html);
            const fileName = `Tweet from ${tweetAuthorName} (${this.getFormattedDateForFilename()}).md`;
            return new Note(fileName, content);
        });
    }
}

var Readability$1 = {exports: {}};

/*eslint-env es6:false*/

(function (module) {
/*
 * Copyright (c) 2010 Arc90 Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * This code is heavily based on Arc90's readability.js (1.7.1) script
 * available at: http://code.google.com/p/arc90labs-readability
 */

/**
 * Public constructor.
 * @param {HTMLDocument} doc     The document to parse.
 * @param {Object}       options The options object.
 */
function Readability(doc, options) {
  // In some older versions, people passed a URI as the first argument. Cope:
  if (options && options.documentElement) {
    doc = options;
    options = arguments[2];
  } else if (!doc || !doc.documentElement) {
    throw new Error("First argument to Readability constructor should be a document object.");
  }
  options = options || {};

  this._doc = doc;
  this._docJSDOMParser = this._doc.firstChild.__JSDOMParser__;
  this._articleTitle = null;
  this._articleByline = null;
  this._articleDir = null;
  this._articleSiteName = null;
  this._attempts = [];

  // Configurable options
  this._debug = !!options.debug;
  this._maxElemsToParse = options.maxElemsToParse || this.DEFAULT_MAX_ELEMS_TO_PARSE;
  this._nbTopCandidates = options.nbTopCandidates || this.DEFAULT_N_TOP_CANDIDATES;
  this._charThreshold = options.charThreshold || this.DEFAULT_CHAR_THRESHOLD;
  this._classesToPreserve = this.CLASSES_TO_PRESERVE.concat(options.classesToPreserve || []);
  this._keepClasses = !!options.keepClasses;
  this._serializer = options.serializer || function(el) {
    return el.innerHTML;
  };
  this._disableJSONLD = !!options.disableJSONLD;

  // Start with all flags set
  this._flags = this.FLAG_STRIP_UNLIKELYS |
                this.FLAG_WEIGHT_CLASSES |
                this.FLAG_CLEAN_CONDITIONALLY;


  // Control whether log messages are sent to the console
  if (this._debug) {
    let logNode = function(node) {
      if (node.nodeType == node.TEXT_NODE) {
        return `${node.nodeName} ("${node.textContent}")`;
      }
      let attrPairs = Array.from(node.attributes || [], function(attr) {
        return `${attr.name}="${attr.value}"`;
      }).join(" ");
      return `<${node.localName} ${attrPairs}>`;
    };
    this.log = function () {
      if (typeof dump !== "undefined") {
        var msg = Array.prototype.map.call(arguments, function(x) {
          return (x && x.nodeName) ? logNode(x) : x;
        }).join(" ");
        dump("Reader: (Readability) " + msg + "\n");
      } else if (typeof console !== "undefined") {
        let args = Array.from(arguments, arg => {
          if (arg && arg.nodeType == this.ELEMENT_NODE) {
            return logNode(arg);
          }
          return arg;
        });
        args.unshift("Reader: (Readability)");
        console.log.apply(console, args);
      }
    };
  } else {
    this.log = function () {};
  }
}

Readability.prototype = {
  FLAG_STRIP_UNLIKELYS: 0x1,
  FLAG_WEIGHT_CLASSES: 0x2,
  FLAG_CLEAN_CONDITIONALLY: 0x4,

  // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
  ELEMENT_NODE: 1,
  TEXT_NODE: 3,

  // Max number of nodes supported by this parser. Default: 0 (no limit)
  DEFAULT_MAX_ELEMS_TO_PARSE: 0,

  // The number of top candidates to consider when analysing how
  // tight the competition is among candidates.
  DEFAULT_N_TOP_CANDIDATES: 5,

  // Element tags to score by default.
  DEFAULT_TAGS_TO_SCORE: "section,h2,h3,h4,h5,h6,p,td,pre".toUpperCase().split(","),

  // The default number of chars an article must have in order to return a result
  DEFAULT_CHAR_THRESHOLD: 500,

  // All of the regular expressions in use within readability.
  // Defined up here so we don't instantiate them repeatedly in loops.
  REGEXPS: {
    // NOTE: These two regular expressions are duplicated in
    // Readability-readerable.js. Please keep both copies in sync.
    unlikelyCandidates: /-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,
    okMaybeItsACandidate: /and|article|body|column|content|main|shadow/i,

    positive: /article|body|content|entry|hentry|h-entry|main|page|pagination|post|text|blog|story/i,
    negative: /-ad-|hidden|^hid$| hid$| hid |^hid |banner|combx|comment|com-|contact|foot|footer|footnote|gdpr|masthead|media|meta|outbrain|promo|related|scroll|share|shoutbox|sidebar|skyscraper|sponsor|shopping|tags|tool|widget/i,
    extraneous: /print|archive|comment|discuss|e[\-]?mail|share|reply|all|login|sign|single|utility/i,
    byline: /byline|author|dateline|writtenby|p-author/i,
    replaceFonts: /<(\/?)font[^>]*>/gi,
    normalize: /\s{2,}/g,
    videos: /\/\/(www\.)?((dailymotion|youtube|youtube-nocookie|player\.vimeo|v\.qq)\.com|(archive|upload\.wikimedia)\.org|player\.twitch\.tv)/i,
    shareElements: /(\b|_)(share|sharedaddy)(\b|_)/i,
    nextLink: /(next|weiter|continue|>([^\|]|$)|»([^\|]|$))/i,
    prevLink: /(prev|earl|old|new|<|«)/i,
    tokenize: /\W+/g,
    whitespace: /^\s*$/,
    hasContent: /\S$/,
    hashUrl: /^#.+/,
    srcsetUrl: /(\S+)(\s+[\d.]+[xw])?(\s*(?:,|$))/g,
    b64DataUrl: /^data:\s*([^\s;,]+)\s*;\s*base64\s*,/i,
    // See: https://schema.org/Article
    jsonLdArticleTypes: /^Article|AdvertiserContentArticle|NewsArticle|AnalysisNewsArticle|AskPublicNewsArticle|BackgroundNewsArticle|OpinionNewsArticle|ReportageNewsArticle|ReviewNewsArticle|Report|SatiricalArticle|ScholarlyArticle|MedicalScholarlyArticle|SocialMediaPosting|BlogPosting|LiveBlogPosting|DiscussionForumPosting|TechArticle|APIReference$/
  },

  UNLIKELY_ROLES: [ "menu", "menubar", "complementary", "navigation", "alert", "alertdialog", "dialog" ],

  DIV_TO_P_ELEMS: new Set([ "BLOCKQUOTE", "DL", "DIV", "IMG", "OL", "P", "PRE", "TABLE", "UL" ]),

  ALTER_TO_DIV_EXCEPTIONS: ["DIV", "ARTICLE", "SECTION", "P"],

  PRESENTATIONAL_ATTRIBUTES: [ "align", "background", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "hspace", "rules", "style", "valign", "vspace" ],

  DEPRECATED_SIZE_ATTRIBUTE_ELEMS: [ "TABLE", "TH", "TD", "HR", "PRE" ],

  // The commented out elements qualify as phrasing content but tend to be
  // removed by readability when put into paragraphs, so we ignore them here.
  PHRASING_ELEMS: [
    // "CANVAS", "IFRAME", "SVG", "VIDEO",
    "ABBR", "AUDIO", "B", "BDO", "BR", "BUTTON", "CITE", "CODE", "DATA",
    "DATALIST", "DFN", "EM", "EMBED", "I", "IMG", "INPUT", "KBD", "LABEL",
    "MARK", "MATH", "METER", "NOSCRIPT", "OBJECT", "OUTPUT", "PROGRESS", "Q",
    "RUBY", "SAMP", "SCRIPT", "SELECT", "SMALL", "SPAN", "STRONG", "SUB",
    "SUP", "TEXTAREA", "TIME", "VAR", "WBR"
  ],

  // These are the classes that readability sets itself.
  CLASSES_TO_PRESERVE: [ "page" ],

  // These are the list of HTML entities that need to be escaped.
  HTML_ESCAPE_MAP: {
    "lt": "<",
    "gt": ">",
    "amp": "&",
    "quot": '"',
    "apos": "'",
  },

  /**
   * Run any post-process modifications to article content as necessary.
   *
   * @param Element
   * @return void
  **/
  _postProcessContent: function(articleContent) {
    // Readability cannot open relative uris so we convert them to absolute uris.
    this._fixRelativeUris(articleContent);

    this._simplifyNestedElements(articleContent);

    if (!this._keepClasses) {
      // Remove classes.
      this._cleanClasses(articleContent);
    }
  },

  /**
   * Iterates over a NodeList, calls `filterFn` for each node and removes node
   * if function returned `true`.
   *
   * If function is not passed, removes all the nodes in node list.
   *
   * @param NodeList nodeList The nodes to operate on
   * @param Function filterFn the function to use as a filter
   * @return void
   */
  _removeNodes: function(nodeList, filterFn) {
    // Avoid ever operating on live node lists.
    if (this._docJSDOMParser && nodeList._isLiveNodeList) {
      throw new Error("Do not pass live node lists to _removeNodes");
    }
    for (var i = nodeList.length - 1; i >= 0; i--) {
      var node = nodeList[i];
      var parentNode = node.parentNode;
      if (parentNode) {
        if (!filterFn || filterFn.call(this, node, i, nodeList)) {
          parentNode.removeChild(node);
        }
      }
    }
  },

  /**
   * Iterates over a NodeList, and calls _setNodeTag for each node.
   *
   * @param NodeList nodeList The nodes to operate on
   * @param String newTagName the new tag name to use
   * @return void
   */
  _replaceNodeTags: function(nodeList, newTagName) {
    // Avoid ever operating on live node lists.
    if (this._docJSDOMParser && nodeList._isLiveNodeList) {
      throw new Error("Do not pass live node lists to _replaceNodeTags");
    }
    for (const node of nodeList) {
      this._setNodeTag(node, newTagName);
    }
  },

  /**
   * Iterate over a NodeList, which doesn't natively fully implement the Array
   * interface.
   *
   * For convenience, the current object context is applied to the provided
   * iterate function.
   *
   * @param  NodeList nodeList The NodeList.
   * @param  Function fn       The iterate function.
   * @return void
   */
  _forEachNode: function(nodeList, fn) {
    Array.prototype.forEach.call(nodeList, fn, this);
  },

  /**
   * Iterate over a NodeList, and return the first node that passes
   * the supplied test function
   *
   * For convenience, the current object context is applied to the provided
   * test function.
   *
   * @param  NodeList nodeList The NodeList.
   * @param  Function fn       The test function.
   * @return void
   */
  _findNode: function(nodeList, fn) {
    return Array.prototype.find.call(nodeList, fn, this);
  },

  /**
   * Iterate over a NodeList, return true if any of the provided iterate
   * function calls returns true, false otherwise.
   *
   * For convenience, the current object context is applied to the
   * provided iterate function.
   *
   * @param  NodeList nodeList The NodeList.
   * @param  Function fn       The iterate function.
   * @return Boolean
   */
  _someNode: function(nodeList, fn) {
    return Array.prototype.some.call(nodeList, fn, this);
  },

  /**
   * Iterate over a NodeList, return true if all of the provided iterate
   * function calls return true, false otherwise.
   *
   * For convenience, the current object context is applied to the
   * provided iterate function.
   *
   * @param  NodeList nodeList The NodeList.
   * @param  Function fn       The iterate function.
   * @return Boolean
   */
  _everyNode: function(nodeList, fn) {
    return Array.prototype.every.call(nodeList, fn, this);
  },

  /**
   * Concat all nodelists passed as arguments.
   *
   * @return ...NodeList
   * @return Array
   */
  _concatNodeLists: function() {
    var slice = Array.prototype.slice;
    var args = slice.call(arguments);
    var nodeLists = args.map(function(list) {
      return slice.call(list);
    });
    return Array.prototype.concat.apply([], nodeLists);
  },

  _getAllNodesWithTag: function(node, tagNames) {
    if (node.querySelectorAll) {
      return node.querySelectorAll(tagNames.join(","));
    }
    return [].concat.apply([], tagNames.map(function(tag) {
      var collection = node.getElementsByTagName(tag);
      return Array.isArray(collection) ? collection : Array.from(collection);
    }));
  },

  /**
   * Removes the class="" attribute from every element in the given
   * subtree, except those that match CLASSES_TO_PRESERVE and
   * the classesToPreserve array from the options object.
   *
   * @param Element
   * @return void
   */
  _cleanClasses: function(node) {
    var classesToPreserve = this._classesToPreserve;
    var className = (node.getAttribute("class") || "")
      .split(/\s+/)
      .filter(function(cls) {
        return classesToPreserve.indexOf(cls) != -1;
      })
      .join(" ");

    if (className) {
      node.setAttribute("class", className);
    } else {
      node.removeAttribute("class");
    }

    for (node = node.firstElementChild; node; node = node.nextElementSibling) {
      this._cleanClasses(node);
    }
  },

  /**
   * Converts each <a> and <img> uri in the given element to an absolute URI,
   * ignoring #ref URIs.
   *
   * @param Element
   * @return void
   */
  _fixRelativeUris: function(articleContent) {
    var baseURI = this._doc.baseURI;
    var documentURI = this._doc.documentURI;
    function toAbsoluteURI(uri) {
      // Leave hash links alone if the base URI matches the document URI:
      if (baseURI == documentURI && uri.charAt(0) == "#") {
        return uri;
      }

      // Otherwise, resolve against base URI:
      try {
        return new URL(uri, baseURI).href;
      } catch (ex) {
        // Something went wrong, just return the original:
      }
      return uri;
    }

    var links = this._getAllNodesWithTag(articleContent, ["a"]);
    this._forEachNode(links, function(link) {
      var href = link.getAttribute("href");
      if (href) {
        // Remove links with javascript: URIs, since
        // they won't work after scripts have been removed from the page.
        if (href.indexOf("javascript:") === 0) {
          // if the link only contains simple text content, it can be converted to a text node
          if (link.childNodes.length === 1 && link.childNodes[0].nodeType === this.TEXT_NODE) {
            var text = this._doc.createTextNode(link.textContent);
            link.parentNode.replaceChild(text, link);
          } else {
            // if the link has multiple children, they should all be preserved
            var container = this._doc.createElement("span");
            while (link.childNodes.length > 0) {
              container.appendChild(link.childNodes[0]);
            }
            link.parentNode.replaceChild(container, link);
          }
        } else {
          link.setAttribute("href", toAbsoluteURI(href));
        }
      }
    });

    var medias = this._getAllNodesWithTag(articleContent, [
      "img", "picture", "figure", "video", "audio", "source"
    ]);

    this._forEachNode(medias, function(media) {
      var src = media.getAttribute("src");
      var poster = media.getAttribute("poster");
      var srcset = media.getAttribute("srcset");

      if (src) {
        media.setAttribute("src", toAbsoluteURI(src));
      }

      if (poster) {
        media.setAttribute("poster", toAbsoluteURI(poster));
      }

      if (srcset) {
        var newSrcset = srcset.replace(this.REGEXPS.srcsetUrl, function(_, p1, p2, p3) {
          return toAbsoluteURI(p1) + (p2 || "") + p3;
        });

        media.setAttribute("srcset", newSrcset);
      }
    });
  },

  _simplifyNestedElements: function(articleContent) {
    var node = articleContent;

    while (node) {
      if (node.parentNode && ["DIV", "SECTION"].includes(node.tagName) && !(node.id && node.id.startsWith("readability"))) {
        if (this._isElementWithoutContent(node)) {
          node = this._removeAndGetNext(node);
          continue;
        } else if (this._hasSingleTagInsideElement(node, "DIV") || this._hasSingleTagInsideElement(node, "SECTION")) {
          var child = node.children[0];
          for (var i = 0; i < node.attributes.length; i++) {
            child.setAttribute(node.attributes[i].name, node.attributes[i].value);
          }
          node.parentNode.replaceChild(child, node);
          node = child;
          continue;
        }
      }

      node = this._getNextNode(node);
    }
  },

  /**
   * Get the article title as an H1.
   *
   * @return string
   **/
  _getArticleTitle: function() {
    var doc = this._doc;
    var curTitle = "";
    var origTitle = "";

    try {
      curTitle = origTitle = doc.title.trim();

      // If they had an element with id "title" in their HTML
      if (typeof curTitle !== "string")
        curTitle = origTitle = this._getInnerText(doc.getElementsByTagName("title")[0]);
    } catch (e) {/* ignore exceptions setting the title. */}

    var titleHadHierarchicalSeparators = false;
    function wordCount(str) {
      return str.split(/\s+/).length;
    }

    // If there's a separator in the title, first remove the final part
    if ((/ [\|\-\\\/>»] /).test(curTitle)) {
      titleHadHierarchicalSeparators = / [\\\/>»] /.test(curTitle);
      curTitle = origTitle.replace(/(.*)[\|\-\\\/>»] .*/gi, "$1");

      // If the resulting title is too short (3 words or fewer), remove
      // the first part instead:
      if (wordCount(curTitle) < 3)
        curTitle = origTitle.replace(/[^\|\-\\\/>»]*[\|\-\\\/>»](.*)/gi, "$1");
    } else if (curTitle.indexOf(": ") !== -1) {
      // Check if we have an heading containing this exact string, so we
      // could assume it's the full title.
      var headings = this._concatNodeLists(
        doc.getElementsByTagName("h1"),
        doc.getElementsByTagName("h2")
      );
      var trimmedTitle = curTitle.trim();
      var match = this._someNode(headings, function(heading) {
        return heading.textContent.trim() === trimmedTitle;
      });

      // If we don't, let's extract the title out of the original title string.
      if (!match) {
        curTitle = origTitle.substring(origTitle.lastIndexOf(":") + 1);

        // If the title is now too short, try the first colon instead:
        if (wordCount(curTitle) < 3) {
          curTitle = origTitle.substring(origTitle.indexOf(":") + 1);
          // But if we have too many words before the colon there's something weird
          // with the titles and the H tags so let's just use the original title instead
        } else if (wordCount(origTitle.substr(0, origTitle.indexOf(":"))) > 5) {
          curTitle = origTitle;
        }
      }
    } else if (curTitle.length > 150 || curTitle.length < 15) {
      var hOnes = doc.getElementsByTagName("h1");

      if (hOnes.length === 1)
        curTitle = this._getInnerText(hOnes[0]);
    }

    curTitle = curTitle.trim().replace(this.REGEXPS.normalize, " ");
    // If we now have 4 words or fewer as our title, and either no
    // 'hierarchical' separators (\, /, > or ») were found in the original
    // title or we decreased the number of words by more than 1 word, use
    // the original title.
    var curTitleWordCount = wordCount(curTitle);
    if (curTitleWordCount <= 4 &&
        (!titleHadHierarchicalSeparators ||
         curTitleWordCount != wordCount(origTitle.replace(/[\|\-\\\/>»]+/g, "")) - 1)) {
      curTitle = origTitle;
    }

    return curTitle;
  },

  /**
   * Prepare the HTML document for readability to scrape it.
   * This includes things like stripping javascript, CSS, and handling terrible markup.
   *
   * @return void
   **/
  _prepDocument: function() {
    var doc = this._doc;

    // Remove all style tags in head
    this._removeNodes(this._getAllNodesWithTag(doc, ["style"]));

    if (doc.body) {
      this._replaceBrs(doc.body);
    }

    this._replaceNodeTags(this._getAllNodesWithTag(doc, ["font"]), "SPAN");
  },

  /**
   * Finds the next node, starting from the given node, and ignoring
   * whitespace in between. If the given node is an element, the same node is
   * returned.
   */
  _nextNode: function (node) {
    var next = node;
    while (next
        && (next.nodeType != this.ELEMENT_NODE)
        && this.REGEXPS.whitespace.test(next.textContent)) {
      next = next.nextSibling;
    }
    return next;
  },

  /**
   * Replaces 2 or more successive <br> elements with a single <p>.
   * Whitespace between <br> elements are ignored. For example:
   *   <div>foo<br>bar<br> <br><br>abc</div>
   * will become:
   *   <div>foo<br>bar<p>abc</p></div>
   */
  _replaceBrs: function (elem) {
    this._forEachNode(this._getAllNodesWithTag(elem, ["br"]), function(br) {
      var next = br.nextSibling;

      // Whether 2 or more <br> elements have been found and replaced with a
      // <p> block.
      var replaced = false;

      // If we find a <br> chain, remove the <br>s until we hit another node
      // or non-whitespace. This leaves behind the first <br> in the chain
      // (which will be replaced with a <p> later).
      while ((next = this._nextNode(next)) && (next.tagName == "BR")) {
        replaced = true;
        var brSibling = next.nextSibling;
        next.parentNode.removeChild(next);
        next = brSibling;
      }

      // If we removed a <br> chain, replace the remaining <br> with a <p>. Add
      // all sibling nodes as children of the <p> until we hit another <br>
      // chain.
      if (replaced) {
        var p = this._doc.createElement("p");
        br.parentNode.replaceChild(p, br);

        next = p.nextSibling;
        while (next) {
          // If we've hit another <br><br>, we're done adding children to this <p>.
          if (next.tagName == "BR") {
            var nextElem = this._nextNode(next.nextSibling);
            if (nextElem && nextElem.tagName == "BR")
              break;
          }

          if (!this._isPhrasingContent(next))
            break;

          // Otherwise, make this node a child of the new <p>.
          var sibling = next.nextSibling;
          p.appendChild(next);
          next = sibling;
        }

        while (p.lastChild && this._isWhitespace(p.lastChild)) {
          p.removeChild(p.lastChild);
        }

        if (p.parentNode.tagName === "P")
          this._setNodeTag(p.parentNode, "DIV");
      }
    });
  },

  _setNodeTag: function (node, tag) {
    this.log("_setNodeTag", node, tag);
    if (this._docJSDOMParser) {
      node.localName = tag.toLowerCase();
      node.tagName = tag.toUpperCase();
      return node;
    }

    var replacement = node.ownerDocument.createElement(tag);
    while (node.firstChild) {
      replacement.appendChild(node.firstChild);
    }
    node.parentNode.replaceChild(replacement, node);
    if (node.readability)
      replacement.readability = node.readability;

    for (var i = 0; i < node.attributes.length; i++) {
      try {
        replacement.setAttribute(node.attributes[i].name, node.attributes[i].value);
      } catch (ex) {
        /* it's possible for setAttribute() to throw if the attribute name
         * isn't a valid XML Name. Such attributes can however be parsed from
         * source in HTML docs, see https://github.com/whatwg/html/issues/4275,
         * so we can hit them here and then throw. We don't care about such
         * attributes so we ignore them.
         */
      }
    }
    return replacement;
  },

  /**
   * Prepare the article node for display. Clean out any inline styles,
   * iframes, forms, strip extraneous <p> tags, etc.
   *
   * @param Element
   * @return void
   **/
  _prepArticle: function(articleContent) {
    this._cleanStyles(articleContent);

    // Check for data tables before we continue, to avoid removing items in
    // those tables, which will often be isolated even though they're
    // visually linked to other content-ful elements (text, images, etc.).
    this._markDataTables(articleContent);

    this._fixLazyImages(articleContent);

    // Clean out junk from the article content
    this._cleanConditionally(articleContent, "form");
    this._cleanConditionally(articleContent, "fieldset");
    this._clean(articleContent, "object");
    this._clean(articleContent, "embed");
    this._clean(articleContent, "footer");
    this._clean(articleContent, "link");
    this._clean(articleContent, "aside");

    // Clean out elements with little content that have "share" in their id/class combinations from final top candidates,
    // which means we don't remove the top candidates even they have "share".

    var shareElementThreshold = this.DEFAULT_CHAR_THRESHOLD;

    this._forEachNode(articleContent.children, function (topCandidate) {
      this._cleanMatchedNodes(topCandidate, function (node, matchString) {
        return this.REGEXPS.shareElements.test(matchString) && node.textContent.length < shareElementThreshold;
      });
    });

    this._clean(articleContent, "iframe");
    this._clean(articleContent, "input");
    this._clean(articleContent, "textarea");
    this._clean(articleContent, "select");
    this._clean(articleContent, "button");
    this._cleanHeaders(articleContent);

    // Do these last as the previous stuff may have removed junk
    // that will affect these
    this._cleanConditionally(articleContent, "table");
    this._cleanConditionally(articleContent, "ul");
    this._cleanConditionally(articleContent, "div");

    // replace H1 with H2 as H1 should be only title that is displayed separately
    this._replaceNodeTags(this._getAllNodesWithTag(articleContent, ["h1"]), "h2");

    // Remove extra paragraphs
    this._removeNodes(this._getAllNodesWithTag(articleContent, ["p"]), function (paragraph) {
      var imgCount = paragraph.getElementsByTagName("img").length;
      var embedCount = paragraph.getElementsByTagName("embed").length;
      var objectCount = paragraph.getElementsByTagName("object").length;
      // At this point, nasty iframes have been removed, only remain embedded video ones.
      var iframeCount = paragraph.getElementsByTagName("iframe").length;
      var totalCount = imgCount + embedCount + objectCount + iframeCount;

      return totalCount === 0 && !this._getInnerText(paragraph, false);
    });

    this._forEachNode(this._getAllNodesWithTag(articleContent, ["br"]), function(br) {
      var next = this._nextNode(br.nextSibling);
      if (next && next.tagName == "P")
        br.parentNode.removeChild(br);
    });

    // Remove single-cell tables
    this._forEachNode(this._getAllNodesWithTag(articleContent, ["table"]), function(table) {
      var tbody = this._hasSingleTagInsideElement(table, "TBODY") ? table.firstElementChild : table;
      if (this._hasSingleTagInsideElement(tbody, "TR")) {
        var row = tbody.firstElementChild;
        if (this._hasSingleTagInsideElement(row, "TD")) {
          var cell = row.firstElementChild;
          cell = this._setNodeTag(cell, this._everyNode(cell.childNodes, this._isPhrasingContent) ? "P" : "DIV");
          table.parentNode.replaceChild(cell, table);
        }
      }
    });
  },

  /**
   * Initialize a node with the readability object. Also checks the
   * className/id for special names to add to its score.
   *
   * @param Element
   * @return void
  **/
  _initializeNode: function(node) {
    node.readability = {"contentScore": 0};

    switch (node.tagName) {
      case "DIV":
        node.readability.contentScore += 5;
        break;

      case "PRE":
      case "TD":
      case "BLOCKQUOTE":
        node.readability.contentScore += 3;
        break;

      case "ADDRESS":
      case "OL":
      case "UL":
      case "DL":
      case "DD":
      case "DT":
      case "LI":
      case "FORM":
        node.readability.contentScore -= 3;
        break;

      case "H1":
      case "H2":
      case "H3":
      case "H4":
      case "H5":
      case "H6":
      case "TH":
        node.readability.contentScore -= 5;
        break;
    }

    node.readability.contentScore += this._getClassWeight(node);
  },

  _removeAndGetNext: function(node) {
    var nextNode = this._getNextNode(node, true);
    node.parentNode.removeChild(node);
    return nextNode;
  },

  /**
   * Traverse the DOM from node to node, starting at the node passed in.
   * Pass true for the second parameter to indicate this node itself
   * (and its kids) are going away, and we want the next node over.
   *
   * Calling this in a loop will traverse the DOM depth-first.
   */
  _getNextNode: function(node, ignoreSelfAndKids) {
    // First check for kids if those aren't being ignored
    if (!ignoreSelfAndKids && node.firstElementChild) {
      return node.firstElementChild;
    }
    // Then for siblings...
    if (node.nextElementSibling) {
      return node.nextElementSibling;
    }
    // And finally, move up the parent chain *and* find a sibling
    // (because this is depth-first traversal, we will have already
    // seen the parent nodes themselves).
    do {
      node = node.parentNode;
    } while (node && !node.nextElementSibling);
    return node && node.nextElementSibling;
  },

  // compares second text to first one
  // 1 = same text, 0 = completely different text
  // works the way that it splits both texts into words and then finds words that are unique in second text
  // the result is given by the lower length of unique parts
  _textSimilarity: function(textA, textB) {
    var tokensA = textA.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean);
    var tokensB = textB.toLowerCase().split(this.REGEXPS.tokenize).filter(Boolean);
    if (!tokensA.length || !tokensB.length) {
      return 0;
    }
    var uniqTokensB = tokensB.filter(token => !tokensA.includes(token));
    var distanceB = uniqTokensB.join(" ").length / tokensB.join(" ").length;
    return 1 - distanceB;
  },

  _checkByline: function(node, matchString) {
    if (this._articleByline) {
      return false;
    }

    if (node.getAttribute !== undefined) {
      var rel = node.getAttribute("rel");
      var itemprop = node.getAttribute("itemprop");
    }

    if ((rel === "author" || (itemprop && itemprop.indexOf("author") !== -1) || this.REGEXPS.byline.test(matchString)) && this._isValidByline(node.textContent)) {
      this._articleByline = node.textContent.trim();
      return true;
    }

    return false;
  },

  _getNodeAncestors: function(node, maxDepth) {
    maxDepth = maxDepth || 0;
    var i = 0, ancestors = [];
    while (node.parentNode) {
      ancestors.push(node.parentNode);
      if (maxDepth && ++i === maxDepth)
        break;
      node = node.parentNode;
    }
    return ancestors;
  },

  /***
   * grabArticle - Using a variety of metrics (content score, classname, element types), find the content that is
   *         most likely to be the stuff a user wants to read. Then return it wrapped up in a div.
   *
   * @param page a document to run upon. Needs to be a full document, complete with body.
   * @return Element
  **/
  _grabArticle: function (page) {
    this.log("**** grabArticle ****");
    var doc = this._doc;
    var isPaging = page !== null;
    page = page ? page : this._doc.body;

    // We can't grab an article if we don't have a page!
    if (!page) {
      this.log("No body found in document. Abort.");
      return null;
    }

    var pageCacheHtml = page.innerHTML;

    while (true) {
      this.log("Starting grabArticle loop");
      var stripUnlikelyCandidates = this._flagIsActive(this.FLAG_STRIP_UNLIKELYS);

      // First, node prepping. Trash nodes that look cruddy (like ones with the
      // class name "comment", etc), and turn divs into P tags where they have been
      // used inappropriately (as in, where they contain no other block level elements.)
      var elementsToScore = [];
      var node = this._doc.documentElement;

      let shouldRemoveTitleHeader = true;

      while (node) {
        var matchString = node.className + " " + node.id;

        if (!this._isProbablyVisible(node)) {
          this.log("Removing hidden node - " + matchString);
          node = this._removeAndGetNext(node);
          continue;
        }

        // Check to see if this node is a byline, and remove it if it is.
        if (this._checkByline(node, matchString)) {
          node = this._removeAndGetNext(node);
          continue;
        }

        if (shouldRemoveTitleHeader && this._headerDuplicatesTitle(node)) {
          this.log("Removing header: ", node.textContent.trim(), this._articleTitle.trim());
          shouldRemoveTitleHeader = false;
          node = this._removeAndGetNext(node);
          continue;
        }

        // Remove unlikely candidates
        if (stripUnlikelyCandidates) {
          if (this.REGEXPS.unlikelyCandidates.test(matchString) &&
              !this.REGEXPS.okMaybeItsACandidate.test(matchString) &&
              !this._hasAncestorTag(node, "table") &&
              !this._hasAncestorTag(node, "code") &&
              node.tagName !== "BODY" &&
              node.tagName !== "A") {
            this.log("Removing unlikely candidate - " + matchString);
            node = this._removeAndGetNext(node);
            continue;
          }

          if (this.UNLIKELY_ROLES.includes(node.getAttribute("role"))) {
            this.log("Removing content with role " + node.getAttribute("role") + " - " + matchString);
            node = this._removeAndGetNext(node);
            continue;
          }
        }

        // Remove DIV, SECTION, and HEADER nodes without any content(e.g. text, image, video, or iframe).
        if ((node.tagName === "DIV" || node.tagName === "SECTION" || node.tagName === "HEADER" ||
             node.tagName === "H1" || node.tagName === "H2" || node.tagName === "H3" ||
             node.tagName === "H4" || node.tagName === "H5" || node.tagName === "H6") &&
            this._isElementWithoutContent(node)) {
          node = this._removeAndGetNext(node);
          continue;
        }

        if (this.DEFAULT_TAGS_TO_SCORE.indexOf(node.tagName) !== -1) {
          elementsToScore.push(node);
        }

        // Turn all divs that don't have children block level elements into p's
        if (node.tagName === "DIV") {
          // Put phrasing content into paragraphs.
          var p = null;
          var childNode = node.firstChild;
          while (childNode) {
            var nextSibling = childNode.nextSibling;
            if (this._isPhrasingContent(childNode)) {
              if (p !== null) {
                p.appendChild(childNode);
              } else if (!this._isWhitespace(childNode)) {
                p = doc.createElement("p");
                node.replaceChild(p, childNode);
                p.appendChild(childNode);
              }
            } else if (p !== null) {
              while (p.lastChild && this._isWhitespace(p.lastChild)) {
                p.removeChild(p.lastChild);
              }
              p = null;
            }
            childNode = nextSibling;
          }

          // Sites like http://mobile.slate.com encloses each paragraph with a DIV
          // element. DIVs with only a P element inside and no text content can be
          // safely converted into plain P elements to avoid confusing the scoring
          // algorithm with DIVs with are, in practice, paragraphs.
          if (this._hasSingleTagInsideElement(node, "P") && this._getLinkDensity(node) < 0.25) {
            var newNode = node.children[0];
            node.parentNode.replaceChild(newNode, node);
            node = newNode;
            elementsToScore.push(node);
          } else if (!this._hasChildBlockElement(node)) {
            node = this._setNodeTag(node, "P");
            elementsToScore.push(node);
          }
        }
        node = this._getNextNode(node);
      }

      /**
       * Loop through all paragraphs, and assign a score to them based on how content-y they look.
       * Then add their score to their parent node.
       *
       * A score is determined by things like number of commas, class names, etc. Maybe eventually link density.
      **/
      var candidates = [];
      this._forEachNode(elementsToScore, function(elementToScore) {
        if (!elementToScore.parentNode || typeof(elementToScore.parentNode.tagName) === "undefined")
          return;

        // If this paragraph is less than 25 characters, don't even count it.
        var innerText = this._getInnerText(elementToScore);
        if (innerText.length < 25)
          return;

        // Exclude nodes with no ancestor.
        var ancestors = this._getNodeAncestors(elementToScore, 5);
        if (ancestors.length === 0)
          return;

        var contentScore = 0;

        // Add a point for the paragraph itself as a base.
        contentScore += 1;

        // Add points for any commas within this paragraph.
        contentScore += innerText.split(",").length;

        // For every 100 characters in this paragraph, add another point. Up to 3 points.
        contentScore += Math.min(Math.floor(innerText.length / 100), 3);

        // Initialize and score ancestors.
        this._forEachNode(ancestors, function(ancestor, level) {
          if (!ancestor.tagName || !ancestor.parentNode || typeof(ancestor.parentNode.tagName) === "undefined")
            return;

          if (typeof(ancestor.readability) === "undefined") {
            this._initializeNode(ancestor);
            candidates.push(ancestor);
          }

          // Node score divider:
          // - parent:             1 (no division)
          // - grandparent:        2
          // - great grandparent+: ancestor level * 3
          if (level === 0)
            var scoreDivider = 1;
          else if (level === 1)
            scoreDivider = 2;
          else
            scoreDivider = level * 3;
          ancestor.readability.contentScore += contentScore / scoreDivider;
        });
      });

      // After we've calculated scores, loop through all of the possible
      // candidate nodes we found and find the one with the highest score.
      var topCandidates = [];
      for (var c = 0, cl = candidates.length; c < cl; c += 1) {
        var candidate = candidates[c];

        // Scale the final candidates score based on link density. Good content
        // should have a relatively small link density (5% or less) and be mostly
        // unaffected by this operation.
        var candidateScore = candidate.readability.contentScore * (1 - this._getLinkDensity(candidate));
        candidate.readability.contentScore = candidateScore;

        this.log("Candidate:", candidate, "with score " + candidateScore);

        for (var t = 0; t < this._nbTopCandidates; t++) {
          var aTopCandidate = topCandidates[t];

          if (!aTopCandidate || candidateScore > aTopCandidate.readability.contentScore) {
            topCandidates.splice(t, 0, candidate);
            if (topCandidates.length > this._nbTopCandidates)
              topCandidates.pop();
            break;
          }
        }
      }

      var topCandidate = topCandidates[0] || null;
      var neededToCreateTopCandidate = false;
      var parentOfTopCandidate;

      // If we still have no top candidate, just use the body as a last resort.
      // We also have to copy the body node so it is something we can modify.
      if (topCandidate === null || topCandidate.tagName === "BODY") {
        // Move all of the page's children into topCandidate
        topCandidate = doc.createElement("DIV");
        neededToCreateTopCandidate = true;
        // Move everything (not just elements, also text nodes etc.) into the container
        // so we even include text directly in the body:
        var kids = page.childNodes;
        while (kids.length) {
          this.log("Moving child out:", kids[0]);
          topCandidate.appendChild(kids[0]);
        }

        page.appendChild(topCandidate);

        this._initializeNode(topCandidate);
      } else if (topCandidate) {
        // Find a better top candidate node if it contains (at least three) nodes which belong to `topCandidates` array
        // and whose scores are quite closed with current `topCandidate` node.
        var alternativeCandidateAncestors = [];
        for (var i = 1; i < topCandidates.length; i++) {
          if (topCandidates[i].readability.contentScore / topCandidate.readability.contentScore >= 0.75) {
            alternativeCandidateAncestors.push(this._getNodeAncestors(topCandidates[i]));
          }
        }
        var MINIMUM_TOPCANDIDATES = 3;
        if (alternativeCandidateAncestors.length >= MINIMUM_TOPCANDIDATES) {
          parentOfTopCandidate = topCandidate.parentNode;
          while (parentOfTopCandidate.tagName !== "BODY") {
            var listsContainingThisAncestor = 0;
            for (var ancestorIndex = 0; ancestorIndex < alternativeCandidateAncestors.length && listsContainingThisAncestor < MINIMUM_TOPCANDIDATES; ancestorIndex++) {
              listsContainingThisAncestor += Number(alternativeCandidateAncestors[ancestorIndex].includes(parentOfTopCandidate));
            }
            if (listsContainingThisAncestor >= MINIMUM_TOPCANDIDATES) {
              topCandidate = parentOfTopCandidate;
              break;
            }
            parentOfTopCandidate = parentOfTopCandidate.parentNode;
          }
        }
        if (!topCandidate.readability) {
          this._initializeNode(topCandidate);
        }

        // Because of our bonus system, parents of candidates might have scores
        // themselves. They get half of the node. There won't be nodes with higher
        // scores than our topCandidate, but if we see the score going *up* in the first
        // few steps up the tree, that's a decent sign that there might be more content
        // lurking in other places that we want to unify in. The sibling stuff
        // below does some of that - but only if we've looked high enough up the DOM
        // tree.
        parentOfTopCandidate = topCandidate.parentNode;
        var lastScore = topCandidate.readability.contentScore;
        // The scores shouldn't get too low.
        var scoreThreshold = lastScore / 3;
        while (parentOfTopCandidate.tagName !== "BODY") {
          if (!parentOfTopCandidate.readability) {
            parentOfTopCandidate = parentOfTopCandidate.parentNode;
            continue;
          }
          var parentScore = parentOfTopCandidate.readability.contentScore;
          if (parentScore < scoreThreshold)
            break;
          if (parentScore > lastScore) {
            // Alright! We found a better parent to use.
            topCandidate = parentOfTopCandidate;
            break;
          }
          lastScore = parentOfTopCandidate.readability.contentScore;
          parentOfTopCandidate = parentOfTopCandidate.parentNode;
        }

        // If the top candidate is the only child, use parent instead. This will help sibling
        // joining logic when adjacent content is actually located in parent's sibling node.
        parentOfTopCandidate = topCandidate.parentNode;
        while (parentOfTopCandidate.tagName != "BODY" && parentOfTopCandidate.children.length == 1) {
          topCandidate = parentOfTopCandidate;
          parentOfTopCandidate = topCandidate.parentNode;
        }
        if (!topCandidate.readability) {
          this._initializeNode(topCandidate);
        }
      }

      // Now that we have the top candidate, look through its siblings for content
      // that might also be related. Things like preambles, content split by ads
      // that we removed, etc.
      var articleContent = doc.createElement("DIV");
      if (isPaging)
        articleContent.id = "readability-content";

      var siblingScoreThreshold = Math.max(10, topCandidate.readability.contentScore * 0.2);
      // Keep potential top candidate's parent node to try to get text direction of it later.
      parentOfTopCandidate = topCandidate.parentNode;
      var siblings = parentOfTopCandidate.children;

      for (var s = 0, sl = siblings.length; s < sl; s++) {
        var sibling = siblings[s];
        var append = false;

        this.log("Looking at sibling node:", sibling, sibling.readability ? ("with score " + sibling.readability.contentScore) : "");
        this.log("Sibling has score", sibling.readability ? sibling.readability.contentScore : "Unknown");

        if (sibling === topCandidate) {
          append = true;
        } else {
          var contentBonus = 0;

          // Give a bonus if sibling nodes and top candidates have the example same classname
          if (sibling.className === topCandidate.className && topCandidate.className !== "")
            contentBonus += topCandidate.readability.contentScore * 0.2;

          if (sibling.readability &&
              ((sibling.readability.contentScore + contentBonus) >= siblingScoreThreshold)) {
            append = true;
          } else if (sibling.nodeName === "P") {
            var linkDensity = this._getLinkDensity(sibling);
            var nodeContent = this._getInnerText(sibling);
            var nodeLength = nodeContent.length;

            if (nodeLength > 80 && linkDensity < 0.25) {
              append = true;
            } else if (nodeLength < 80 && nodeLength > 0 && linkDensity === 0 &&
                       nodeContent.search(/\.( |$)/) !== -1) {
              append = true;
            }
          }
        }

        if (append) {
          this.log("Appending node:", sibling);

          if (this.ALTER_TO_DIV_EXCEPTIONS.indexOf(sibling.nodeName) === -1) {
            // We have a node that isn't a common block level element, like a form or td tag.
            // Turn it into a div so it doesn't get filtered out later by accident.
            this.log("Altering sibling:", sibling, "to div.");

            sibling = this._setNodeTag(sibling, "DIV");
          }

          articleContent.appendChild(sibling);
          // siblings is a reference to the children array, and
          // sibling is removed from the array when we call appendChild().
          // As a result, we must revisit this index since the nodes
          // have been shifted.
          s -= 1;
          sl -= 1;
        }
      }

      if (this._debug)
        this.log("Article content pre-prep: " + articleContent.innerHTML);
      // So we have all of the content that we need. Now we clean it up for presentation.
      this._prepArticle(articleContent);
      if (this._debug)
        this.log("Article content post-prep: " + articleContent.innerHTML);

      if (neededToCreateTopCandidate) {
        // We already created a fake div thing, and there wouldn't have been any siblings left
        // for the previous loop, so there's no point trying to create a new div, and then
        // move all the children over. Just assign IDs and class names here. No need to append
        // because that already happened anyway.
        topCandidate.id = "readability-page-1";
        topCandidate.className = "page";
      } else {
        var div = doc.createElement("DIV");
        div.id = "readability-page-1";
        div.className = "page";
        var children = articleContent.childNodes;
        while (children.length) {
          div.appendChild(children[0]);
        }
        articleContent.appendChild(div);
      }

      if (this._debug)
        this.log("Article content after paging: " + articleContent.innerHTML);

      var parseSuccessful = true;

      // Now that we've gone through the full algorithm, check to see if
      // we got any meaningful content. If we didn't, we may need to re-run
      // grabArticle with different flags set. This gives us a higher likelihood of
      // finding the content, and the sieve approach gives us a higher likelihood of
      // finding the -right- content.
      var textLength = this._getInnerText(articleContent, true).length;
      if (textLength < this._charThreshold) {
        parseSuccessful = false;
        page.innerHTML = pageCacheHtml;

        if (this._flagIsActive(this.FLAG_STRIP_UNLIKELYS)) {
          this._removeFlag(this.FLAG_STRIP_UNLIKELYS);
          this._attempts.push({articleContent: articleContent, textLength: textLength});
        } else if (this._flagIsActive(this.FLAG_WEIGHT_CLASSES)) {
          this._removeFlag(this.FLAG_WEIGHT_CLASSES);
          this._attempts.push({articleContent: articleContent, textLength: textLength});
        } else if (this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY)) {
          this._removeFlag(this.FLAG_CLEAN_CONDITIONALLY);
          this._attempts.push({articleContent: articleContent, textLength: textLength});
        } else {
          this._attempts.push({articleContent: articleContent, textLength: textLength});
          // No luck after removing flags, just return the longest text we found during the different loops
          this._attempts.sort(function (a, b) {
            return b.textLength - a.textLength;
          });

          // But first check if we actually have something
          if (!this._attempts[0].textLength) {
            return null;
          }

          articleContent = this._attempts[0].articleContent;
          parseSuccessful = true;
        }
      }

      if (parseSuccessful) {
        // Find out text direction from ancestors of final top candidate.
        var ancestors = [parentOfTopCandidate, topCandidate].concat(this._getNodeAncestors(parentOfTopCandidate));
        this._someNode(ancestors, function(ancestor) {
          if (!ancestor.tagName)
            return false;
          var articleDir = ancestor.getAttribute("dir");
          if (articleDir) {
            this._articleDir = articleDir;
            return true;
          }
          return false;
        });
        return articleContent;
      }
    }
  },

  /**
   * Check whether the input string could be a byline.
   * This verifies that the input is a string, and that the length
   * is less than 100 chars.
   *
   * @param possibleByline {string} - a string to check whether its a byline.
   * @return Boolean - whether the input string is a byline.
   */
  _isValidByline: function(byline) {
    if (typeof byline == "string" || byline instanceof String) {
      byline = byline.trim();
      return (byline.length > 0) && (byline.length < 100);
    }
    return false;
  },

  /**
   * Converts some of the common HTML entities in string to their corresponding characters.
   *
   * @param str {string} - a string to unescape.
   * @return string without HTML entity.
   */
  _unescapeHtmlEntities: function(str) {
    if (!str) {
      return str;
    }

    var htmlEscapeMap = this.HTML_ESCAPE_MAP;
    return str.replace(/&(quot|amp|apos|lt|gt);/g, function(_, tag) {
      return htmlEscapeMap[tag];
    }).replace(/&#(?:x([0-9a-z]{1,4})|([0-9]{1,4}));/gi, function(_, hex, numStr) {
      var num = parseInt(hex || numStr, hex ? 16 : 10);
      return String.fromCharCode(num);
    });
  },

  /**
   * Try to extract metadata from JSON-LD object.
   * For now, only Schema.org objects of type Article or its subtypes are supported.
   * @return Object with any metadata that could be extracted (possibly none)
   */
  _getJSONLD: function (doc) {
    var scripts = this._getAllNodesWithTag(doc, ["script"]);

    var jsonLdElement = this._findNode(scripts, function(el) {
      return el.getAttribute("type") === "application/ld+json";
    });

    if (jsonLdElement) {
      try {
        // Strip CDATA markers if present
        var content = jsonLdElement.textContent.replace(/^\s*<!\[CDATA\[|\]\]>\s*$/g, "");
        var parsed = JSON.parse(content);
        var metadata = {};
        if (
          !parsed["@context"] ||
          !parsed["@context"].match(/^https?\:\/\/schema\.org$/)
        ) {
          return metadata;
        }

        if (!parsed["@type"] && Array.isArray(parsed["@graph"])) {
          parsed = parsed["@graph"].find(function(it) {
            return (it["@type"] || "").match(
              this.REGEXPS.jsonLdArticleTypes
            );
          });
        }

        if (
          !parsed ||
          !parsed["@type"] ||
          !parsed["@type"].match(this.REGEXPS.jsonLdArticleTypes)
        ) {
          return metadata;
        }
        if (typeof parsed.name === "string") {
          metadata.title = parsed.name.trim();
        } else if (typeof parsed.headline === "string") {
          metadata.title = parsed.headline.trim();
        }
        if (parsed.author) {
          if (typeof parsed.author.name === "string") {
            metadata.byline = parsed.author.name.trim();
          } else if (Array.isArray(parsed.author) && parsed.author[0] && typeof parsed.author[0].name === "string") {
            metadata.byline = parsed.author
              .filter(function(author) {
                return author && typeof author.name === "string";
              })
              .map(function(author) {
                return author.name.trim();
              })
              .join(", ");
          }
        }
        if (typeof parsed.description === "string") {
          metadata.excerpt = parsed.description.trim();
        }
        if (
          parsed.publisher &&
          typeof parsed.publisher.name === "string"
        ) {
          metadata.siteName = parsed.publisher.name.trim();
        }
        return metadata;
      } catch (err) {
        this.log(err.message);
      }
    }
    return {};
  },

  /**
   * Attempts to get excerpt and byline metadata for the article.
   *
   * @param {Object} jsonld — object containing any metadata that
   * could be extracted from JSON-LD object.
   *
   * @return Object with optional "excerpt" and "byline" properties
   */
  _getArticleMetadata: function(jsonld) {
    var metadata = {};
    var values = {};
    var metaElements = this._doc.getElementsByTagName("meta");

    // property is a space-separated list of values
    var propertyPattern = /\s*(dc|dcterm|og|twitter)\s*:\s*(author|creator|description|title|site_name)\s*/gi;

    // name is a single value
    var namePattern = /^\s*(?:(dc|dcterm|og|twitter|weibo:(article|webpage))\s*[\.:]\s*)?(author|creator|description|title|site_name)\s*$/i;

    // Find description tags.
    this._forEachNode(metaElements, function(element) {
      var elementName = element.getAttribute("name");
      var elementProperty = element.getAttribute("property");
      var content = element.getAttribute("content");
      if (!content) {
        return;
      }
      var matches = null;
      var name = null;

      if (elementProperty) {
        matches = elementProperty.match(propertyPattern);
        if (matches) {
          // Convert to lowercase, and remove any whitespace
          // so we can match below.
          name = matches[0].toLowerCase().replace(/\s/g, "");
          // multiple authors
          values[name] = content.trim();
        }
      }
      if (!matches && elementName && namePattern.test(elementName)) {
        name = elementName;
        if (content) {
          // Convert to lowercase, remove any whitespace, and convert dots
          // to colons so we can match below.
          name = name.toLowerCase().replace(/\s/g, "").replace(/\./g, ":");
          values[name] = content.trim();
        }
      }
    });

    // get title
    metadata.title = jsonld.title ||
                     values["dc:title"] ||
                     values["dcterm:title"] ||
                     values["og:title"] ||
                     values["weibo:article:title"] ||
                     values["weibo:webpage:title"] ||
                     values["title"] ||
                     values["twitter:title"];

    if (!metadata.title) {
      metadata.title = this._getArticleTitle();
    }

    // get author
    metadata.byline = jsonld.byline ||
                      values["dc:creator"] ||
                      values["dcterm:creator"] ||
                      values["author"];

    // get description
    metadata.excerpt = jsonld.excerpt ||
                       values["dc:description"] ||
                       values["dcterm:description"] ||
                       values["og:description"] ||
                       values["weibo:article:description"] ||
                       values["weibo:webpage:description"] ||
                       values["description"] ||
                       values["twitter:description"];

    // get site name
    metadata.siteName = jsonld.siteName ||
                        values["og:site_name"];

    // in many sites the meta value is escaped with HTML entities,
    // so here we need to unescape it
    metadata.title = this._unescapeHtmlEntities(metadata.title);
    metadata.byline = this._unescapeHtmlEntities(metadata.byline);
    metadata.excerpt = this._unescapeHtmlEntities(metadata.excerpt);
    metadata.siteName = this._unescapeHtmlEntities(metadata.siteName);

    return metadata;
  },

  /**
   * Check if node is image, or if node contains exactly only one image
   * whether as a direct child or as its descendants.
   *
   * @param Element
  **/
  _isSingleImage: function(node) {
    if (node.tagName === "IMG") {
      return true;
    }

    if (node.children.length !== 1 || node.textContent.trim() !== "") {
      return false;
    }

    return this._isSingleImage(node.children[0]);
  },

  /**
   * Find all <noscript> that are located after <img> nodes, and which contain only one
   * <img> element. Replace the first image with the image from inside the <noscript> tag,
   * and remove the <noscript> tag. This improves the quality of the images we use on
   * some sites (e.g. Medium).
   *
   * @param Element
  **/
  _unwrapNoscriptImages: function(doc) {
    // Find img without source or attributes that might contains image, and remove it.
    // This is done to prevent a placeholder img is replaced by img from noscript in next step.
    var imgs = Array.from(doc.getElementsByTagName("img"));
    this._forEachNode(imgs, function(img) {
      for (var i = 0; i < img.attributes.length; i++) {
        var attr = img.attributes[i];
        switch (attr.name) {
          case "src":
          case "srcset":
          case "data-src":
          case "data-srcset":
            return;
        }

        if (/\.(jpg|jpeg|png|webp)/i.test(attr.value)) {
          return;
        }
      }

      img.parentNode.removeChild(img);
    });

    // Next find noscript and try to extract its image
    var noscripts = Array.from(doc.getElementsByTagName("noscript"));
    this._forEachNode(noscripts, function(noscript) {
      // Parse content of noscript and make sure it only contains image
      var tmp = doc.createElement("div");
      tmp.innerHTML = noscript.innerHTML;
      if (!this._isSingleImage(tmp)) {
        return;
      }

      // If noscript has previous sibling and it only contains image,
      // replace it with noscript content. However we also keep old
      // attributes that might contains image.
      var prevElement = noscript.previousElementSibling;
      if (prevElement && this._isSingleImage(prevElement)) {
        var prevImg = prevElement;
        if (prevImg.tagName !== "IMG") {
          prevImg = prevElement.getElementsByTagName("img")[0];
        }

        var newImg = tmp.getElementsByTagName("img")[0];
        for (var i = 0; i < prevImg.attributes.length; i++) {
          var attr = prevImg.attributes[i];
          if (attr.value === "") {
            continue;
          }

          if (attr.name === "src" || attr.name === "srcset" || /\.(jpg|jpeg|png|webp)/i.test(attr.value)) {
            if (newImg.getAttribute(attr.name) === attr.value) {
              continue;
            }

            var attrName = attr.name;
            if (newImg.hasAttribute(attrName)) {
              attrName = "data-old-" + attrName;
            }

            newImg.setAttribute(attrName, attr.value);
          }
        }

        noscript.parentNode.replaceChild(tmp.firstElementChild, prevElement);
      }
    });
  },

  /**
   * Removes script tags from the document.
   *
   * @param Element
  **/
  _removeScripts: function(doc) {
    this._removeNodes(this._getAllNodesWithTag(doc, ["script"]), function(scriptNode) {
      scriptNode.nodeValue = "";
      scriptNode.removeAttribute("src");
      return true;
    });
    this._removeNodes(this._getAllNodesWithTag(doc, ["noscript"]));
  },

  /**
   * Check if this node has only whitespace and a single element with given tag
   * Returns false if the DIV node contains non-empty text nodes
   * or if it contains no element with given tag or more than 1 element.
   *
   * @param Element
   * @param string tag of child element
  **/
  _hasSingleTagInsideElement: function(element, tag) {
    // There should be exactly 1 element child with given tag
    if (element.children.length != 1 || element.children[0].tagName !== tag) {
      return false;
    }

    // And there should be no text nodes with real content
    return !this._someNode(element.childNodes, function(node) {
      return node.nodeType === this.TEXT_NODE &&
             this.REGEXPS.hasContent.test(node.textContent);
    });
  },

  _isElementWithoutContent: function(node) {
    return node.nodeType === this.ELEMENT_NODE &&
      node.textContent.trim().length == 0 &&
      (node.children.length == 0 ||
       node.children.length == node.getElementsByTagName("br").length + node.getElementsByTagName("hr").length);
  },

  /**
   * Determine whether element has any children block level elements.
   *
   * @param Element
   */
  _hasChildBlockElement: function (element) {
    return this._someNode(element.childNodes, function(node) {
      return this.DIV_TO_P_ELEMS.has(node.tagName) ||
             this._hasChildBlockElement(node);
    });
  },

  /***
   * Determine if a node qualifies as phrasing content.
   * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content
  **/
  _isPhrasingContent: function(node) {
    return node.nodeType === this.TEXT_NODE || this.PHRASING_ELEMS.indexOf(node.tagName) !== -1 ||
      ((node.tagName === "A" || node.tagName === "DEL" || node.tagName === "INS") &&
        this._everyNode(node.childNodes, this._isPhrasingContent));
  },

  _isWhitespace: function(node) {
    return (node.nodeType === this.TEXT_NODE && node.textContent.trim().length === 0) ||
           (node.nodeType === this.ELEMENT_NODE && node.tagName === "BR");
  },

  /**
   * Get the inner text of a node - cross browser compatibly.
   * This also strips out any excess whitespace to be found.
   *
   * @param Element
   * @param Boolean normalizeSpaces (default: true)
   * @return string
  **/
  _getInnerText: function(e, normalizeSpaces) {
    normalizeSpaces = (typeof normalizeSpaces === "undefined") ? true : normalizeSpaces;
    var textContent = e.textContent.trim();

    if (normalizeSpaces) {
      return textContent.replace(this.REGEXPS.normalize, " ");
    }
    return textContent;
  },

  /**
   * Get the number of times a string s appears in the node e.
   *
   * @param Element
   * @param string - what to split on. Default is ","
   * @return number (integer)
  **/
  _getCharCount: function(e, s) {
    s = s || ",";
    return this._getInnerText(e).split(s).length - 1;
  },

  /**
   * Remove the style attribute on every e and under.
   * TODO: Test if getElementsByTagName(*) is faster.
   *
   * @param Element
   * @return void
  **/
  _cleanStyles: function(e) {
    if (!e || e.tagName.toLowerCase() === "svg")
      return;

    // Remove `style` and deprecated presentational attributes
    for (var i = 0; i < this.PRESENTATIONAL_ATTRIBUTES.length; i++) {
      e.removeAttribute(this.PRESENTATIONAL_ATTRIBUTES[i]);
    }

    if (this.DEPRECATED_SIZE_ATTRIBUTE_ELEMS.indexOf(e.tagName) !== -1) {
      e.removeAttribute("width");
      e.removeAttribute("height");
    }

    var cur = e.firstElementChild;
    while (cur !== null) {
      this._cleanStyles(cur);
      cur = cur.nextElementSibling;
    }
  },

  /**
   * Get the density of links as a percentage of the content
   * This is the amount of text that is inside a link divided by the total text in the node.
   *
   * @param Element
   * @return number (float)
  **/
  _getLinkDensity: function(element) {
    var textLength = this._getInnerText(element).length;
    if (textLength === 0)
      return 0;

    var linkLength = 0;

    // XXX implement _reduceNodeList?
    this._forEachNode(element.getElementsByTagName("a"), function(linkNode) {
      var href = linkNode.getAttribute("href");
      var coefficient = href && this.REGEXPS.hashUrl.test(href) ? 0.3 : 1;
      linkLength += this._getInnerText(linkNode).length * coefficient;
    });

    return linkLength / textLength;
  },

  /**
   * Get an elements class/id weight. Uses regular expressions to tell if this
   * element looks good or bad.
   *
   * @param Element
   * @return number (Integer)
  **/
  _getClassWeight: function(e) {
    if (!this._flagIsActive(this.FLAG_WEIGHT_CLASSES))
      return 0;

    var weight = 0;

    // Look for a special classname
    if (typeof(e.className) === "string" && e.className !== "") {
      if (this.REGEXPS.negative.test(e.className))
        weight -= 25;

      if (this.REGEXPS.positive.test(e.className))
        weight += 25;
    }

    // Look for a special ID
    if (typeof(e.id) === "string" && e.id !== "") {
      if (this.REGEXPS.negative.test(e.id))
        weight -= 25;

      if (this.REGEXPS.positive.test(e.id))
        weight += 25;
    }

    return weight;
  },

  /**
   * Clean a node of all elements of type "tag".
   * (Unless it's a youtube/vimeo video. People love movies.)
   *
   * @param Element
   * @param string tag to clean
   * @return void
   **/
  _clean: function(e, tag) {
    var isEmbed = ["object", "embed", "iframe"].indexOf(tag) !== -1;

    this._removeNodes(this._getAllNodesWithTag(e, [tag]), function(element) {
      // Allow youtube and vimeo videos through as people usually want to see those.
      if (isEmbed) {
        // First, check the elements attributes to see if any of them contain youtube or vimeo
        for (var i = 0; i < element.attributes.length; i++) {
          if (this.REGEXPS.videos.test(element.attributes[i].value)) {
            return false;
          }
        }

        // For embed with <object> tag, check inner HTML as well.
        if (element.tagName === "object" && this.REGEXPS.videos.test(element.innerHTML)) {
          return false;
        }
      }

      return true;
    });
  },

  /**
   * Check if a given node has one of its ancestor tag name matching the
   * provided one.
   * @param  HTMLElement node
   * @param  String      tagName
   * @param  Number      maxDepth
   * @param  Function    filterFn a filter to invoke to determine whether this node 'counts'
   * @return Boolean
   */
  _hasAncestorTag: function(node, tagName, maxDepth, filterFn) {
    maxDepth = maxDepth || 3;
    tagName = tagName.toUpperCase();
    var depth = 0;
    while (node.parentNode) {
      if (maxDepth > 0 && depth > maxDepth)
        return false;
      if (node.parentNode.tagName === tagName && (!filterFn || filterFn(node.parentNode)))
        return true;
      node = node.parentNode;
      depth++;
    }
    return false;
  },

  /**
   * Return an object indicating how many rows and columns this table has.
   */
  _getRowAndColumnCount: function(table) {
    var rows = 0;
    var columns = 0;
    var trs = table.getElementsByTagName("tr");
    for (var i = 0; i < trs.length; i++) {
      var rowspan = trs[i].getAttribute("rowspan") || 0;
      if (rowspan) {
        rowspan = parseInt(rowspan, 10);
      }
      rows += (rowspan || 1);

      // Now look for column-related info
      var columnsInThisRow = 0;
      var cells = trs[i].getElementsByTagName("td");
      for (var j = 0; j < cells.length; j++) {
        var colspan = cells[j].getAttribute("colspan") || 0;
        if (colspan) {
          colspan = parseInt(colspan, 10);
        }
        columnsInThisRow += (colspan || 1);
      }
      columns = Math.max(columns, columnsInThisRow);
    }
    return {rows: rows, columns: columns};
  },

  /**
   * Look for 'data' (as opposed to 'layout') tables, for which we use
   * similar checks as
   * https://searchfox.org/mozilla-central/rev/f82d5c549f046cb64ce5602bfd894b7ae807c8f8/accessible/generic/TableAccessible.cpp#19
   */
  _markDataTables: function(root) {
    var tables = root.getElementsByTagName("table");
    for (var i = 0; i < tables.length; i++) {
      var table = tables[i];
      var role = table.getAttribute("role");
      if (role == "presentation") {
        table._readabilityDataTable = false;
        continue;
      }
      var datatable = table.getAttribute("datatable");
      if (datatable == "0") {
        table._readabilityDataTable = false;
        continue;
      }
      var summary = table.getAttribute("summary");
      if (summary) {
        table._readabilityDataTable = true;
        continue;
      }

      var caption = table.getElementsByTagName("caption")[0];
      if (caption && caption.childNodes.length > 0) {
        table._readabilityDataTable = true;
        continue;
      }

      // If the table has a descendant with any of these tags, consider a data table:
      var dataTableDescendants = ["col", "colgroup", "tfoot", "thead", "th"];
      var descendantExists = function(tag) {
        return !!table.getElementsByTagName(tag)[0];
      };
      if (dataTableDescendants.some(descendantExists)) {
        this.log("Data table because found data-y descendant");
        table._readabilityDataTable = true;
        continue;
      }

      // Nested tables indicate a layout table:
      if (table.getElementsByTagName("table")[0]) {
        table._readabilityDataTable = false;
        continue;
      }

      var sizeInfo = this._getRowAndColumnCount(table);
      if (sizeInfo.rows >= 10 || sizeInfo.columns > 4) {
        table._readabilityDataTable = true;
        continue;
      }
      // Now just go by size entirely:
      table._readabilityDataTable = sizeInfo.rows * sizeInfo.columns > 10;
    }
  },

  /* convert images and figures that have properties like data-src into images that can be loaded without JS */
  _fixLazyImages: function (root) {
    this._forEachNode(this._getAllNodesWithTag(root, ["img", "picture", "figure"]), function (elem) {
      // In some sites (e.g. Kotaku), they put 1px square image as base64 data uri in the src attribute.
      // So, here we check if the data uri is too short, just might as well remove it.
      if (elem.src && this.REGEXPS.b64DataUrl.test(elem.src)) {
        // Make sure it's not SVG, because SVG can have a meaningful image in under 133 bytes.
        var parts = this.REGEXPS.b64DataUrl.exec(elem.src);
        if (parts[1] === "image/svg+xml") {
          return;
        }

        // Make sure this element has other attributes which contains image.
        // If it doesn't, then this src is important and shouldn't be removed.
        var srcCouldBeRemoved = false;
        for (var i = 0; i < elem.attributes.length; i++) {
          var attr = elem.attributes[i];
          if (attr.name === "src") {
            continue;
          }

          if (/\.(jpg|jpeg|png|webp)/i.test(attr.value)) {
            srcCouldBeRemoved = true;
            break;
          }
        }

        // Here we assume if image is less than 100 bytes (or 133B after encoded to base64)
        // it will be too small, therefore it might be placeholder image.
        if (srcCouldBeRemoved) {
          var b64starts = elem.src.search(/base64\s*/i) + 7;
          var b64length = elem.src.length - b64starts;
          if (b64length < 133) {
            elem.removeAttribute("src");
          }
        }
      }

      // also check for "null" to work around https://github.com/jsdom/jsdom/issues/2580
      if ((elem.src || (elem.srcset && elem.srcset != "null")) && elem.className.toLowerCase().indexOf("lazy") === -1) {
        return;
      }

      for (var j = 0; j < elem.attributes.length; j++) {
        attr = elem.attributes[j];
        if (attr.name === "src" || attr.name === "srcset") {
          continue;
        }
        var copyTo = null;
        if (/\.(jpg|jpeg|png|webp)\s+\d/.test(attr.value)) {
          copyTo = "srcset";
        } else if (/^\s*\S+\.(jpg|jpeg|png|webp)\S*\s*$/.test(attr.value)) {
          copyTo = "src";
        }
        if (copyTo) {
          //if this is an img or picture, set the attribute directly
          if (elem.tagName === "IMG" || elem.tagName === "PICTURE") {
            elem.setAttribute(copyTo, attr.value);
          } else if (elem.tagName === "FIGURE" && !this._getAllNodesWithTag(elem, ["img", "picture"]).length) {
            //if the item is a <figure> that does not contain an image or picture, create one and place it inside the figure
            //see the nytimes-3 testcase for an example
            var img = this._doc.createElement("img");
            img.setAttribute(copyTo, attr.value);
            elem.appendChild(img);
          }
        }
      }
    });
  },

  _getTextDensity: function(e, tags) {
    var textLength = this._getInnerText(e, true).length;
    if (textLength === 0) {
      return 0;
    }
    var childrenLength = 0;
    var children = this._getAllNodesWithTag(e, tags);
    this._forEachNode(children, (child) => childrenLength += this._getInnerText(child, true).length);
    return childrenLength / textLength;
  },

  /**
   * Clean an element of all tags of type "tag" if they look fishy.
   * "Fishy" is an algorithm based on content length, classnames, link density, number of images & embeds, etc.
   *
   * @return void
   **/
  _cleanConditionally: function(e, tag) {
    if (!this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY))
      return;

    // Gather counts for other typical elements embedded within.
    // Traverse backwards so we can remove nodes at the same time
    // without effecting the traversal.
    //
    // TODO: Consider taking into account original contentScore here.
    this._removeNodes(this._getAllNodesWithTag(e, [tag]), function(node) {
      // First check if this node IS data table, in which case don't remove it.
      var isDataTable = function(t) {
        return t._readabilityDataTable;
      };

      var isList = tag === "ul" || tag === "ol";
      if (!isList) {
        var listLength = 0;
        var listNodes = this._getAllNodesWithTag(node, ["ul", "ol"]);
        this._forEachNode(listNodes, (list) => listLength += this._getInnerText(list).length);
        isList = listLength / this._getInnerText(node).length > 0.9;
      }

      if (tag === "table" && isDataTable(node)) {
        return false;
      }

      // Next check if we're inside a data table, in which case don't remove it as well.
      if (this._hasAncestorTag(node, "table", -1, isDataTable)) {
        return false;
      }

      if (this._hasAncestorTag(node, "code")) {
        return false;
      }

      var weight = this._getClassWeight(node);

      this.log("Cleaning Conditionally", node);

      var contentScore = 0;

      if (weight + contentScore < 0) {
        return true;
      }

      if (this._getCharCount(node, ",") < 10) {
        // If there are not very many commas, and the number of
        // non-paragraph elements is more than paragraphs or other
        // ominous signs, remove the element.
        var p = node.getElementsByTagName("p").length;
        var img = node.getElementsByTagName("img").length;
        var li = node.getElementsByTagName("li").length - 100;
        var input = node.getElementsByTagName("input").length;
        var headingDensity = this._getTextDensity(node, ["h1", "h2", "h3", "h4", "h5", "h6"]);

        var embedCount = 0;
        var embeds = this._getAllNodesWithTag(node, ["object", "embed", "iframe"]);

        for (var i = 0; i < embeds.length; i++) {
          // If this embed has attribute that matches video regex, don't delete it.
          for (var j = 0; j < embeds[i].attributes.length; j++) {
            if (this.REGEXPS.videos.test(embeds[i].attributes[j].value)) {
              return false;
            }
          }

          // For embed with <object> tag, check inner HTML as well.
          if (embeds[i].tagName === "object" && this.REGEXPS.videos.test(embeds[i].innerHTML)) {
            return false;
          }

          embedCount++;
        }

        var linkDensity = this._getLinkDensity(node);
        var contentLength = this._getInnerText(node).length;

        var haveToRemove =
          (img > 1 && p / img < 0.5 && !this._hasAncestorTag(node, "figure")) ||
          (!isList && li > p) ||
          (input > Math.floor(p/3)) ||
          (!isList && headingDensity < 0.9 && contentLength < 25 && (img === 0 || img > 2) && !this._hasAncestorTag(node, "figure")) ||
          (!isList && weight < 25 && linkDensity > 0.2) ||
          (weight >= 25 && linkDensity > 0.5) ||
          ((embedCount === 1 && contentLength < 75) || embedCount > 1);
        return haveToRemove;
      }
      return false;
    });
  },

  /**
   * Clean out elements that match the specified conditions
   *
   * @param Element
   * @param Function determines whether a node should be removed
   * @return void
   **/
  _cleanMatchedNodes: function(e, filter) {
    var endOfSearchMarkerNode = this._getNextNode(e, true);
    var next = this._getNextNode(e);
    while (next && next != endOfSearchMarkerNode) {
      if (filter.call(this, next, next.className + " " + next.id)) {
        next = this._removeAndGetNext(next);
      } else {
        next = this._getNextNode(next);
      }
    }
  },

  /**
   * Clean out spurious headers from an Element.
   *
   * @param Element
   * @return void
  **/
  _cleanHeaders: function(e) {
    let headingNodes = this._getAllNodesWithTag(e, ["h1", "h2"]);
    this._removeNodes(headingNodes, function(node) {
      let shouldRemove = this._getClassWeight(node) < 0;
      if (shouldRemove) {
        this.log("Removing header with low class weight:", node);
      }
      return shouldRemove;
    });
  },

  /**
   * Check if this node is an H1 or H2 element whose content is mostly
   * the same as the article title.
   *
   * @param Element  the node to check.
   * @return boolean indicating whether this is a title-like header.
   */
  _headerDuplicatesTitle: function(node) {
    if (node.tagName != "H1" && node.tagName != "H2") {
      return false;
    }
    var heading = this._getInnerText(node, false);
    this.log("Evaluating similarity of header:", heading, this._articleTitle);
    return this._textSimilarity(this._articleTitle, heading) > 0.75;
  },

  _flagIsActive: function(flag) {
    return (this._flags & flag) > 0;
  },

  _removeFlag: function(flag) {
    this._flags = this._flags & ~flag;
  },

  _isProbablyVisible: function(node) {
    // Have to null-check node.style and node.className.indexOf to deal with SVG and MathML nodes.
    return (!node.style || node.style.display != "none")
      && !node.hasAttribute("hidden")
      //check for "fallback-image" so that wikimedia math images are displayed
      && (!node.hasAttribute("aria-hidden") || node.getAttribute("aria-hidden") != "true" || (node.className && node.className.indexOf && node.className.indexOf("fallback-image") !== -1));
  },

  /**
   * Runs readability.
   *
   * Workflow:
   *  1. Prep the document by removing script tags, css, etc.
   *  2. Build readability's DOM tree.
   *  3. Grab the article content from the current dom tree.
   *  4. Replace the current DOM tree with the new one.
   *  5. Read peacefully.
   *
   * @return void
   **/
  parse: function () {
    // Avoid parsing too large documents, as per configuration option
    if (this._maxElemsToParse > 0) {
      var numTags = this._doc.getElementsByTagName("*").length;
      if (numTags > this._maxElemsToParse) {
        throw new Error("Aborting parsing document; " + numTags + " elements found");
      }
    }

    // Unwrap image from noscript
    this._unwrapNoscriptImages(this._doc);

    // Extract JSON-LD metadata before removing scripts
    var jsonLd = this._disableJSONLD ? {} : this._getJSONLD(this._doc);

    // Remove script tags from the document.
    this._removeScripts(this._doc);

    this._prepDocument();

    var metadata = this._getArticleMetadata(jsonLd);
    this._articleTitle = metadata.title;

    var articleContent = this._grabArticle();
    if (!articleContent)
      return null;

    this.log("Grabbed: " + articleContent.innerHTML);

    this._postProcessContent(articleContent);

    // If we haven't found an excerpt in the article's metadata, use the article's
    // first paragraph as the excerpt. This is used for displaying a preview of
    // the article's content.
    if (!metadata.excerpt) {
      var paragraphs = articleContent.getElementsByTagName("p");
      if (paragraphs.length > 0) {
        metadata.excerpt = paragraphs[0].textContent.trim();
      }
    }

    var textContent = articleContent.textContent;
    return {
      title: this._articleTitle,
      byline: metadata.byline || this._articleByline,
      dir: this._articleDir,
      content: this._serializer(articleContent),
      textContent: textContent,
      length: textContent.length,
      excerpt: metadata.excerpt,
      siteName: metadata.siteName || this._articleSiteName
    };
  }
};

{
  module.exports = Readability;
}
}(Readability$1));

var ReadabilityReaderable = {exports: {}};

/* eslint-env es6:false */

(function (module) {
/*
 * Copyright (c) 2010 Arc90 Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * This code is heavily based on Arc90's readability.js (1.7.1) script
 * available at: http://code.google.com/p/arc90labs-readability
 */

var REGEXPS = {
  // NOTE: These two regular expressions are duplicated in
  // Readability.js. Please keep both copies in sync.
  unlikelyCandidates: /-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,
  okMaybeItsACandidate: /and|article|body|column|content|main|shadow/i,
};

function isNodeVisible(node) {
  // Have to null-check node.style and node.className.indexOf to deal with SVG and MathML nodes.
  return (!node.style || node.style.display != "none")
    && !node.hasAttribute("hidden")
    //check for "fallback-image" so that wikimedia math images are displayed
    && (!node.hasAttribute("aria-hidden") || node.getAttribute("aria-hidden") != "true" || (node.className && node.className.indexOf && node.className.indexOf("fallback-image") !== -1));
}

/**
 * Decides whether or not the document is reader-able without parsing the whole thing.
 * @param {Object} options Configuration object.
 * @param {number} [options.minContentLength=140] The minimum node content length used to decide if the document is readerable.
 * @param {number} [options.minScore=20] The minumum cumulated 'score' used to determine if the document is readerable.
 * @param {Function} [options.visibilityChecker=isNodeVisible] The function used to determine if a node is visible.
 * @return {boolean} Whether or not we suspect Readability.parse() will suceeed at returning an article object.
 */
function isProbablyReaderable(doc, options = {}) {
  // For backward compatibility reasons 'options' can either be a configuration object or the function used
  // to determine if a node is visible.
  if (typeof options == "function") {
    options = { visibilityChecker: options };
  }

  var defaultOptions = { minScore: 20, minContentLength: 140, visibilityChecker: isNodeVisible };
  options = Object.assign(defaultOptions, options);

  var nodes = doc.querySelectorAll("p, pre");

  // Get <div> nodes which have <br> node(s) and append them into the `nodes` variable.
  // Some articles' DOM structures might look like
  // <div>
  //   Sentences<br>
  //   <br>
  //   Sentences<br>
  // </div>
  var brNodes = doc.querySelectorAll("div > br");
  if (brNodes.length) {
    var set = new Set(nodes);
    [].forEach.call(brNodes, function (node) {
      set.add(node.parentNode);
    });
    nodes = Array.from(set);
  }

  var score = 0;
  // This is a little cheeky, we use the accumulator 'score' to decide what to return from
  // this callback:
  return [].some.call(nodes, function (node) {
    if (!options.visibilityChecker(node)) {
      return false;
    }

    var matchString = node.className + " " + node.id;
    if (REGEXPS.unlikelyCandidates.test(matchString) &&
        !REGEXPS.okMaybeItsACandidate.test(matchString)) {
      return false;
    }

    if (node.matches("li p")) {
      return false;
    }

    var textContentLength = node.textContent.trim().length;
    if (textContentLength < options.minContentLength) {
      return false;
    }

    score += Math.sqrt(textContentLength - options.minContentLength);

    if (score > options.minScore) {
      return true;
    }
    return false;
  });
}

{
  module.exports = isProbablyReaderable;
}
}(ReadabilityReaderable));

var Readability = Readability$1.exports;
var isProbablyReaderable = ReadabilityReaderable.exports;

var readability = {
  Readability: Readability,
  isProbablyReaderable: isProbablyReaderable
};

function extend (destination) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (source.hasOwnProperty(key)) destination[key] = source[key];
    }
  }
  return destination
}

function repeat (character, count) {
  return Array(count + 1).join(character)
}

function trimLeadingNewlines (string) {
  return string.replace(/^\n*/, '')
}

function trimTrailingNewlines (string) {
  // avoid match-at-end regexp bottleneck, see #370
  var indexEnd = string.length;
  while (indexEnd > 0 && string[indexEnd - 1] === '\n') indexEnd--;
  return string.substring(0, indexEnd)
}

var blockElements = [
  'ADDRESS', 'ARTICLE', 'ASIDE', 'AUDIO', 'BLOCKQUOTE', 'BODY', 'CANVAS',
  'CENTER', 'DD', 'DIR', 'DIV', 'DL', 'DT', 'FIELDSET', 'FIGCAPTION', 'FIGURE',
  'FOOTER', 'FORM', 'FRAMESET', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'HEADER',
  'HGROUP', 'HR', 'HTML', 'ISINDEX', 'LI', 'MAIN', 'MENU', 'NAV', 'NOFRAMES',
  'NOSCRIPT', 'OL', 'OUTPUT', 'P', 'PRE', 'SECTION', 'TABLE', 'TBODY', 'TD',
  'TFOOT', 'TH', 'THEAD', 'TR', 'UL'
];

function isBlock (node) {
  return is(node, blockElements)
}

var voidElements = [
  'AREA', 'BASE', 'BR', 'COL', 'COMMAND', 'EMBED', 'HR', 'IMG', 'INPUT',
  'KEYGEN', 'LINK', 'META', 'PARAM', 'SOURCE', 'TRACK', 'WBR'
];

function isVoid (node) {
  return is(node, voidElements)
}

function hasVoid (node) {
  return has(node, voidElements)
}

var meaningfulWhenBlankElements = [
  'A', 'TABLE', 'THEAD', 'TBODY', 'TFOOT', 'TH', 'TD', 'IFRAME', 'SCRIPT',
  'AUDIO', 'VIDEO'
];

function isMeaningfulWhenBlank (node) {
  return is(node, meaningfulWhenBlankElements)
}

function hasMeaningfulWhenBlank (node) {
  return has(node, meaningfulWhenBlankElements)
}

function is (node, tagNames) {
  return tagNames.indexOf(node.nodeName) >= 0
}

function has (node, tagNames) {
  return (
    node.getElementsByTagName &&
    tagNames.some(function (tagName) {
      return node.getElementsByTagName(tagName).length
    })
  )
}

var rules$1 = {};

rules$1.paragraph = {
  filter: 'p',

  replacement: function (content) {
    return '\n\n' + content + '\n\n'
  }
};

rules$1.lineBreak = {
  filter: 'br',

  replacement: function (content, node, options) {
    return options.br + '\n'
  }
};

rules$1.heading = {
  filter: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],

  replacement: function (content, node, options) {
    var hLevel = Number(node.nodeName.charAt(1));

    if (options.headingStyle === 'setext' && hLevel < 3) {
      var underline = repeat((hLevel === 1 ? '=' : '-'), content.length);
      return (
        '\n\n' + content + '\n' + underline + '\n\n'
      )
    } else {
      return '\n\n' + repeat('#', hLevel) + ' ' + content + '\n\n'
    }
  }
};

rules$1.blockquote = {
  filter: 'blockquote',

  replacement: function (content) {
    content = content.replace(/^\n+|\n+$/g, '');
    content = content.replace(/^/gm, '> ');
    return '\n\n' + content + '\n\n'
  }
};

rules$1.list = {
  filter: ['ul', 'ol'],

  replacement: function (content, node) {
    var parent = node.parentNode;
    if (parent.nodeName === 'LI' && parent.lastElementChild === node) {
      return '\n' + content
    } else {
      return '\n\n' + content + '\n\n'
    }
  }
};

rules$1.listItem = {
  filter: 'li',

  replacement: function (content, node, options) {
    content = content
      .replace(/^\n+/, '') // remove leading newlines
      .replace(/\n+$/, '\n') // replace trailing newlines with just a single one
      .replace(/\n/gm, '\n    '); // indent
    var prefix = options.bulletListMarker + '   ';
    var parent = node.parentNode;
    if (parent.nodeName === 'OL') {
      var start = parent.getAttribute('start');
      var index = Array.prototype.indexOf.call(parent.children, node);
      prefix = (start ? Number(start) + index : index + 1) + '.  ';
    }
    return (
      prefix + content + (node.nextSibling && !/\n$/.test(content) ? '\n' : '')
    )
  }
};

rules$1.indentedCodeBlock = {
  filter: function (node, options) {
    return (
      options.codeBlockStyle === 'indented' &&
      node.nodeName === 'PRE' &&
      node.firstChild &&
      node.firstChild.nodeName === 'CODE'
    )
  },

  replacement: function (content, node, options) {
    return (
      '\n\n    ' +
      node.firstChild.textContent.replace(/\n/g, '\n    ') +
      '\n\n'
    )
  }
};

rules$1.fencedCodeBlock = {
  filter: function (node, options) {
    return (
      options.codeBlockStyle === 'fenced' &&
      node.nodeName === 'PRE' &&
      node.firstChild &&
      node.firstChild.nodeName === 'CODE'
    )
  },

  replacement: function (content, node, options) {
    var className = node.firstChild.getAttribute('class') || '';
    var language = (className.match(/language-(\S+)/) || [null, ''])[1];
    var code = node.firstChild.textContent;

    var fenceChar = options.fence.charAt(0);
    var fenceSize = 3;
    var fenceInCodeRegex = new RegExp('^' + fenceChar + '{3,}', 'gm');

    var match;
    while ((match = fenceInCodeRegex.exec(code))) {
      if (match[0].length >= fenceSize) {
        fenceSize = match[0].length + 1;
      }
    }

    var fence = repeat(fenceChar, fenceSize);

    return (
      '\n\n' + fence + language + '\n' +
      code.replace(/\n$/, '') +
      '\n' + fence + '\n\n'
    )
  }
};

rules$1.horizontalRule = {
  filter: 'hr',

  replacement: function (content, node, options) {
    return '\n\n' + options.hr + '\n\n'
  }
};

rules$1.inlineLink = {
  filter: function (node, options) {
    return (
      options.linkStyle === 'inlined' &&
      node.nodeName === 'A' &&
      node.getAttribute('href')
    )
  },

  replacement: function (content, node) {
    var href = node.getAttribute('href');
    var title = cleanAttribute(node.getAttribute('title'));
    if (title) title = ' "' + title + '"';
    return '[' + content + '](' + href + title + ')'
  }
};

rules$1.referenceLink = {
  filter: function (node, options) {
    return (
      options.linkStyle === 'referenced' &&
      node.nodeName === 'A' &&
      node.getAttribute('href')
    )
  },

  replacement: function (content, node, options) {
    var href = node.getAttribute('href');
    var title = cleanAttribute(node.getAttribute('title'));
    if (title) title = ' "' + title + '"';
    var replacement;
    var reference;

    switch (options.linkReferenceStyle) {
      case 'collapsed':
        replacement = '[' + content + '][]';
        reference = '[' + content + ']: ' + href + title;
        break
      case 'shortcut':
        replacement = '[' + content + ']';
        reference = '[' + content + ']: ' + href + title;
        break
      default:
        var id = this.references.length + 1;
        replacement = '[' + content + '][' + id + ']';
        reference = '[' + id + ']: ' + href + title;
    }

    this.references.push(reference);
    return replacement
  },

  references: [],

  append: function (options) {
    var references = '';
    if (this.references.length) {
      references = '\n\n' + this.references.join('\n') + '\n\n';
      this.references = []; // Reset references
    }
    return references
  }
};

rules$1.emphasis = {
  filter: ['em', 'i'],

  replacement: function (content, node, options) {
    if (!content.trim()) return ''
    return options.emDelimiter + content + options.emDelimiter
  }
};

rules$1.strong = {
  filter: ['strong', 'b'],

  replacement: function (content, node, options) {
    if (!content.trim()) return ''
    return options.strongDelimiter + content + options.strongDelimiter
  }
};

rules$1.code = {
  filter: function (node) {
    var hasSiblings = node.previousSibling || node.nextSibling;
    var isCodeBlock = node.parentNode.nodeName === 'PRE' && !hasSiblings;

    return node.nodeName === 'CODE' && !isCodeBlock
  },

  replacement: function (content) {
    if (!content) return ''
    content = content.replace(/\r?\n|\r/g, ' ');

    var extraSpace = /^`|^ .*?[^ ].* $|`$/.test(content) ? ' ' : '';
    var delimiter = '`';
    var matches = content.match(/`+/gm) || [];
    while (matches.indexOf(delimiter) !== -1) delimiter = delimiter + '`';

    return delimiter + extraSpace + content + extraSpace + delimiter
  }
};

rules$1.image = {
  filter: 'img',

  replacement: function (content, node) {
    var alt = cleanAttribute(node.getAttribute('alt'));
    var src = node.getAttribute('src') || '';
    var title = cleanAttribute(node.getAttribute('title'));
    var titlePart = title ? ' "' + title + '"' : '';
    return src ? '![' + alt + ']' + '(' + src + titlePart + ')' : ''
  }
};

function cleanAttribute (attribute) {
  return attribute ? attribute.replace(/(\n+\s*)+/g, '\n') : ''
}

/**
 * Manages a collection of rules used to convert HTML to Markdown
 */

function Rules (options) {
  this.options = options;
  this._keep = [];
  this._remove = [];

  this.blankRule = {
    replacement: options.blankReplacement
  };

  this.keepReplacement = options.keepReplacement;

  this.defaultRule = {
    replacement: options.defaultReplacement
  };

  this.array = [];
  for (var key in options.rules) this.array.push(options.rules[key]);
}

Rules.prototype = {
  add: function (key, rule) {
    this.array.unshift(rule);
  },

  keep: function (filter) {
    this._keep.unshift({
      filter: filter,
      replacement: this.keepReplacement
    });
  },

  remove: function (filter) {
    this._remove.unshift({
      filter: filter,
      replacement: function () {
        return ''
      }
    });
  },

  forNode: function (node) {
    if (node.isBlank) return this.blankRule
    var rule;

    if ((rule = findRule(this.array, node, this.options))) return rule
    if ((rule = findRule(this._keep, node, this.options))) return rule
    if ((rule = findRule(this._remove, node, this.options))) return rule

    return this.defaultRule
  },

  forEach: function (fn) {
    for (var i = 0; i < this.array.length; i++) fn(this.array[i], i);
  }
};

function findRule (rules, node, options) {
  for (var i = 0; i < rules.length; i++) {
    var rule = rules[i];
    if (filterValue(rule, node, options)) return rule
  }
  return void 0
}

function filterValue (rule, node, options) {
  var filter = rule.filter;
  if (typeof filter === 'string') {
    if (filter === node.nodeName.toLowerCase()) return true
  } else if (Array.isArray(filter)) {
    if (filter.indexOf(node.nodeName.toLowerCase()) > -1) return true
  } else if (typeof filter === 'function') {
    if (filter.call(rule, node, options)) return true
  } else {
    throw new TypeError('`filter` needs to be a string, array, or function')
  }
}

/**
 * The collapseWhitespace function is adapted from collapse-whitespace
 * by Luc Thevenard.
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2014 Luc Thevenard <lucthevenard@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * collapseWhitespace(options) removes extraneous whitespace from an the given element.
 *
 * @param {Object} options
 */
function collapseWhitespace (options) {
  var element = options.element;
  var isBlock = options.isBlock;
  var isVoid = options.isVoid;
  var isPre = options.isPre || function (node) {
    return node.nodeName === 'PRE'
  };

  if (!element.firstChild || isPre(element)) return

  var prevText = null;
  var keepLeadingWs = false;

  var prev = null;
  var node = next(prev, element, isPre);

  while (node !== element) {
    if (node.nodeType === 3 || node.nodeType === 4) { // Node.TEXT_NODE or Node.CDATA_SECTION_NODE
      var text = node.data.replace(/[ \r\n\t]+/g, ' ');

      if ((!prevText || / $/.test(prevText.data)) &&
          !keepLeadingWs && text[0] === ' ') {
        text = text.substr(1);
      }

      // `text` might be empty at this point.
      if (!text) {
        node = remove(node);
        continue
      }

      node.data = text;

      prevText = node;
    } else if (node.nodeType === 1) { // Node.ELEMENT_NODE
      if (isBlock(node) || node.nodeName === 'BR') {
        if (prevText) {
          prevText.data = prevText.data.replace(/ $/, '');
        }

        prevText = null;
        keepLeadingWs = false;
      } else if (isVoid(node) || isPre(node)) {
        // Avoid trimming space around non-block, non-BR void elements and inline PRE.
        prevText = null;
        keepLeadingWs = true;
      } else if (prevText) {
        // Drop protection if set previously.
        keepLeadingWs = false;
      }
    } else {
      node = remove(node);
      continue
    }

    var nextNode = next(prev, node, isPre);
    prev = node;
    node = nextNode;
  }

  if (prevText) {
    prevText.data = prevText.data.replace(/ $/, '');
    if (!prevText.data) {
      remove(prevText);
    }
  }
}

/**
 * remove(node) removes the given node from the DOM and returns the
 * next node in the sequence.
 *
 * @param {Node} node
 * @return {Node} node
 */
function remove (node) {
  var next = node.nextSibling || node.parentNode;

  node.parentNode.removeChild(node);

  return next
}

/**
 * next(prev, current, isPre) returns the next node in the sequence, given the
 * current and previous nodes.
 *
 * @param {Node} prev
 * @param {Node} current
 * @param {Function} isPre
 * @return {Node}
 */
function next (prev, current, isPre) {
  if ((prev && prev.parentNode === current) || isPre(current)) {
    return current.nextSibling || current.parentNode
  }

  return current.firstChild || current.nextSibling || current.parentNode
}

/*
 * Set up window for Node.js
 */

var root = (typeof window !== 'undefined' ? window : {});

/*
 * Parsing HTML strings
 */

function canParseHTMLNatively () {
  var Parser = root.DOMParser;
  var canParse = false;

  // Adapted from https://gist.github.com/1129031
  // Firefox/Opera/IE throw errors on unsupported types
  try {
    // WebKit returns null on unsupported types
    if (new Parser().parseFromString('', 'text/html')) {
      canParse = true;
    }
  } catch (e) {}

  return canParse
}

function createHTMLParser () {
  var Parser = function () {};

  {
    if (shouldUseActiveX()) {
      Parser.prototype.parseFromString = function (string) {
        var doc = new window.ActiveXObject('htmlfile');
        doc.designMode = 'on'; // disable on-page scripts
        doc.open();
        doc.write(string);
        doc.close();
        return doc
      };
    } else {
      Parser.prototype.parseFromString = function (string) {
        var doc = document.implementation.createHTMLDocument('');
        doc.open();
        doc.write(string);
        doc.close();
        return doc
      };
    }
  }
  return Parser
}

function shouldUseActiveX () {
  var useActiveX = false;
  try {
    document.implementation.createHTMLDocument('').open();
  } catch (e) {
    if (window.ActiveXObject) useActiveX = true;
  }
  return useActiveX
}

var HTMLParser = canParseHTMLNatively() ? root.DOMParser : createHTMLParser();

function RootNode (input, options) {
  var root;
  if (typeof input === 'string') {
    var doc = htmlParser().parseFromString(
      // DOM parsers arrange elements in the <head> and <body>.
      // Wrapping in a custom element ensures elements are reliably arranged in
      // a single element.
      '<x-turndown id="turndown-root">' + input + '</x-turndown>',
      'text/html'
    );
    root = doc.getElementById('turndown-root');
  } else {
    root = input.cloneNode(true);
  }
  collapseWhitespace({
    element: root,
    isBlock: isBlock,
    isVoid: isVoid,
    isPre: options.preformattedCode ? isPreOrCode : null
  });

  return root
}

var _htmlParser;
function htmlParser () {
  _htmlParser = _htmlParser || new HTMLParser();
  return _htmlParser
}

function isPreOrCode (node) {
  return node.nodeName === 'PRE' || node.nodeName === 'CODE'
}

function Node (node, options) {
  node.isBlock = isBlock(node);
  node.isCode = node.nodeName === 'CODE' || node.parentNode.isCode;
  node.isBlank = isBlank(node);
  node.flankingWhitespace = flankingWhitespace(node, options);
  return node
}

function isBlank (node) {
  return (
    !isVoid(node) &&
    !isMeaningfulWhenBlank(node) &&
    /^\s*$/i.test(node.textContent) &&
    !hasVoid(node) &&
    !hasMeaningfulWhenBlank(node)
  )
}

function flankingWhitespace (node, options) {
  if (node.isBlock || (options.preformattedCode && node.isCode)) {
    return { leading: '', trailing: '' }
  }

  var edges = edgeWhitespace(node.textContent);

  // abandon leading ASCII WS if left-flanked by ASCII WS
  if (edges.leadingAscii && isFlankedByWhitespace('left', node, options)) {
    edges.leading = edges.leadingNonAscii;
  }

  // abandon trailing ASCII WS if right-flanked by ASCII WS
  if (edges.trailingAscii && isFlankedByWhitespace('right', node, options)) {
    edges.trailing = edges.trailingNonAscii;
  }

  return { leading: edges.leading, trailing: edges.trailing }
}

function edgeWhitespace (string) {
  var m = string.match(/^(([ \t\r\n]*)(\s*))[\s\S]*?((\s*?)([ \t\r\n]*))$/);
  return {
    leading: m[1], // whole string for whitespace-only strings
    leadingAscii: m[2],
    leadingNonAscii: m[3],
    trailing: m[4], // empty for whitespace-only strings
    trailingNonAscii: m[5],
    trailingAscii: m[6]
  }
}

function isFlankedByWhitespace (side, node, options) {
  var sibling;
  var regExp;
  var isFlanked;

  if (side === 'left') {
    sibling = node.previousSibling;
    regExp = / $/;
  } else {
    sibling = node.nextSibling;
    regExp = /^ /;
  }

  if (sibling) {
    if (sibling.nodeType === 3) {
      isFlanked = regExp.test(sibling.nodeValue);
    } else if (options.preformattedCode && sibling.nodeName === 'CODE') {
      isFlanked = false;
    } else if (sibling.nodeType === 1 && !isBlock(sibling)) {
      isFlanked = regExp.test(sibling.textContent);
    }
  }
  return isFlanked
}

var reduce = Array.prototype.reduce;
var escapes = [
  [/\\/g, '\\\\'],
  [/\*/g, '\\*'],
  [/^-/g, '\\-'],
  [/^\+ /g, '\\+ '],
  [/^(=+)/g, '\\$1'],
  [/^(#{1,6}) /g, '\\$1 '],
  [/`/g, '\\`'],
  [/^~~~/g, '\\~~~'],
  [/\[/g, '\\['],
  [/\]/g, '\\]'],
  [/^>/g, '\\>'],
  [/_/g, '\\_'],
  [/^(\d+)\. /g, '$1\\. ']
];

function TurndownService (options) {
  if (!(this instanceof TurndownService)) return new TurndownService(options)

  var defaults = {
    rules: rules$1,
    headingStyle: 'setext',
    hr: '* * *',
    bulletListMarker: '*',
    codeBlockStyle: 'indented',
    fence: '```',
    emDelimiter: '_',
    strongDelimiter: '**',
    linkStyle: 'inlined',
    linkReferenceStyle: 'full',
    br: '  ',
    preformattedCode: false,
    blankReplacement: function (content, node) {
      return node.isBlock ? '\n\n' : ''
    },
    keepReplacement: function (content, node) {
      return node.isBlock ? '\n\n' + node.outerHTML + '\n\n' : node.outerHTML
    },
    defaultReplacement: function (content, node) {
      return node.isBlock ? '\n\n' + content + '\n\n' : content
    }
  };
  this.options = extend({}, defaults, options);
  this.rules = new Rules(this.options);
}

TurndownService.prototype = {
  /**
   * The entry point for converting a string or DOM node to Markdown
   * @public
   * @param {String|HTMLElement} input The string or DOM node to convert
   * @returns A Markdown representation of the input
   * @type String
   */

  turndown: function (input) {
    if (!canConvert(input)) {
      throw new TypeError(
        input + ' is not a string, or an element/document/fragment node.'
      )
    }

    if (input === '') return ''

    var output = process.call(this, new RootNode(input, this.options));
    return postProcess.call(this, output)
  },

  /**
   * Add one or more plugins
   * @public
   * @param {Function|Array} plugin The plugin or array of plugins to add
   * @returns The Turndown instance for chaining
   * @type Object
   */

  use: function (plugin) {
    if (Array.isArray(plugin)) {
      for (var i = 0; i < plugin.length; i++) this.use(plugin[i]);
    } else if (typeof plugin === 'function') {
      plugin(this);
    } else {
      throw new TypeError('plugin must be a Function or an Array of Functions')
    }
    return this
  },

  /**
   * Adds a rule
   * @public
   * @param {String} key The unique key of the rule
   * @param {Object} rule The rule
   * @returns The Turndown instance for chaining
   * @type Object
   */

  addRule: function (key, rule) {
    this.rules.add(key, rule);
    return this
  },

  /**
   * Keep a node (as HTML) that matches the filter
   * @public
   * @param {String|Array|Function} filter The unique key of the rule
   * @returns The Turndown instance for chaining
   * @type Object
   */

  keep: function (filter) {
    this.rules.keep(filter);
    return this
  },

  /**
   * Remove a node that matches the filter
   * @public
   * @param {String|Array|Function} filter The unique key of the rule
   * @returns The Turndown instance for chaining
   * @type Object
   */

  remove: function (filter) {
    this.rules.remove(filter);
    return this
  },

  /**
   * Escapes Markdown syntax
   * @public
   * @param {String} string The string to escape
   * @returns A string with Markdown syntax escaped
   * @type String
   */

  escape: function (string) {
    return escapes.reduce(function (accumulator, escape) {
      return accumulator.replace(escape[0], escape[1])
    }, string)
  }
};

/**
 * Reduces a DOM node down to its Markdown string equivalent
 * @private
 * @param {HTMLElement} parentNode The node to convert
 * @returns A Markdown representation of the node
 * @type String
 */

function process (parentNode) {
  var self = this;
  return reduce.call(parentNode.childNodes, function (output, node) {
    node = new Node(node, self.options);

    var replacement = '';
    if (node.nodeType === 3) {
      replacement = node.isCode ? node.nodeValue : self.escape(node.nodeValue);
    } else if (node.nodeType === 1) {
      replacement = replacementForNode.call(self, node);
    }

    return join(output, replacement)
  }, '')
}

/**
 * Appends strings as each rule requires and trims the output
 * @private
 * @param {String} output The conversion output
 * @returns A trimmed version of the ouput
 * @type String
 */

function postProcess (output) {
  var self = this;
  this.rules.forEach(function (rule) {
    if (typeof rule.append === 'function') {
      output = join(output, rule.append(self.options));
    }
  });

  return output.replace(/^[\t\r\n]+/, '').replace(/[\t\r\n\s]+$/, '')
}

/**
 * Converts an element node to its Markdown equivalent
 * @private
 * @param {HTMLElement} node The node to convert
 * @returns A Markdown representation of the node
 * @type String
 */

function replacementForNode (node) {
  var rule = this.rules.forNode(node);
  var content = process.call(this, node);
  var whitespace = node.flankingWhitespace;
  if (whitespace.leading || whitespace.trailing) content = content.trim();
  return (
    whitespace.leading +
    rule.replacement(content, node, this.options) +
    whitespace.trailing
  )
}

/**
 * Joins replacement to the current output with appropriate number of new lines
 * @private
 * @param {String} output The current conversion output
 * @param {String} replacement The string to append to the output
 * @returns Joined output
 * @type String
 */

function join (output, replacement) {
  var s1 = trimTrailingNewlines(output);
  var s2 = trimLeadingNewlines(replacement);
  var nls = Math.max(output.length - s1.length, replacement.length - s2.length);
  var separator = '\n\n'.substring(0, nls);

  return s1 + separator + s2
}

/**
 * Determines whether an input can be converted
 * @private
 * @param {String|HTMLElement} input Describe this parameter
 * @returns Describe what it returns
 * @type String|Object|Array|Boolean|Number
 */

function canConvert (input) {
  return (
    input != null && (
      typeof input === 'string' ||
      (input.nodeType && (
        input.nodeType === 1 || input.nodeType === 9 || input.nodeType === 11
      ))
    )
  )
}

var turndownPluginGfm_cjs = {};

Object.defineProperty(turndownPluginGfm_cjs, '__esModule', { value: true });

var highlightRegExp = /highlight-(?:text|source)-([a-z0-9]+)/;

function highlightedCodeBlock (turndownService) {
  turndownService.addRule('highlightedCodeBlock', {
    filter: function (node) {
      var firstChild = node.firstChild;
      return (
        node.nodeName === 'DIV' &&
        highlightRegExp.test(node.className) &&
        firstChild &&
        firstChild.nodeName === 'PRE'
      )
    },
    replacement: function (content, node, options) {
      var className = node.className || '';
      var language = (className.match(highlightRegExp) || [null, ''])[1];

      return (
        '\n\n' + options.fence + language + '\n' +
        node.firstChild.textContent +
        '\n' + options.fence + '\n\n'
      )
    }
  });
}

function strikethrough (turndownService) {
  turndownService.addRule('strikethrough', {
    filter: ['del', 's', 'strike'],
    replacement: function (content) {
      return '~' + content + '~'
    }
  });
}

var indexOf = Array.prototype.indexOf;
var rules = {};

rules.tableCell = {
  filter: ['th', 'td'],
  replacement: function (content, node) {
    return cell(content, node) + spannedCells(node, '')
  }
};

rules.tableRow = {
  filter: 'tr',
  replacement: function (content, node) {
    var borderCells = '';
    var alignMap = { left: ':--', right: '--:', center: ':-:' };

    if (isHeadingRow(node)) {
      for (var i = 0; i < node.childNodes.length; i++) {
        var border = '---';
        var align = (
          node.childNodes[i].getAttribute('align') || ''
        ).toLowerCase();

        if (align) border = alignMap[align] || border;

        borderCells += cell(border, node.childNodes[i]) + spannedCells(node.childNodes[i], border);
      }
    }
    return '\n' + content + (borderCells ? '\n' + borderCells : '')
  }
};

rules.table = {
  // Only convert tables that are not nested in another table, they are kept using `keep` (see below).
  // TODO: nested tables should be converted to plain text in a strict (non HTML) gfm
  filter: function (node) {
    return node.nodeName === 'TABLE' && !isNestedTable(node)
  },

  replacement: function (content) {
    // Ensure there are no blank lines
    content = content.replace('\n\n', '\n');
    return '\n\n' + content + '\n\n'
  }
};

rules.tableSection = {
  filter: ['thead', 'tbody', 'tfoot'],
  replacement: function (content) {
    return content
  }
};

rules.captionSection = {
  // only return content if caption if the first node immediately after TABLE
  filter: 'caption',
  replacement: function (content, node) {
    if (node.parentNode.nodeName === 'TABLE' && node.parentNode.childNodes[0] === node) return content
    return ''
  }
};

function isHeadingRow (tr) {
  var parentNode = tr.parentNode;
  var tableNode = parentNode;
  if (parentNode.nodeName === 'THEAD' ||
     parentNode.nodeName === 'TFOOT' ||
     parentNode.nodeName === 'TBODY') {
    tableNode = parentNode.parentNode;
  }
  return (tableNode.nodeName === 'TABLE' && tableNode.rows[0] === tr)
}

function cell (content, node) {
  var index = indexOf.call(node.parentNode.childNodes, node);
  var prefix = ' ';
  if (index === 0) prefix = '| ';
  // Ensure single line per cell (both windows and unix EoL)
  // TODO: allow gfm non-strict mode to replace new lines by `<br/>`
  content = content.replace(/\r\n/g, '\n').replace(/\n/g, ' ');
  // | must be escaped as \|
  content = content.replace(/\|/g, '\\|');
  return prefix + content + ' |'
}

function spannedCells (node, spannedCellContent) {
  var colspan = node.getAttribute('colspan') || 1;
  if (colspan <= 1) return ''
  return (' ' + spannedCellContent + ' |').repeat(colspan - 1)
}

function isNestedTable (tableNode) {
  var currentNode = tableNode.parentNode;
  while (currentNode) {
    if (currentNode.nodeName === 'TABLE') return true
    currentNode = currentNode.parentNode;
  }
  return false
}

function tables (turndownService) {
  turndownService.keep(function (node) {
    return node.nodeName === 'TABLE' && isNestedTable(node)
  });
  for (var key in rules) turndownService.addRule(key, rules[key]);
}

function taskListItems (turndownService) {
  turndownService.addRule('taskListItems', {
    filter: function (node) {
      return node.type === 'checkbox' && node.parentNode.nodeName === 'LI'
    },
    replacement: function (content, node) {
      return (node.checked ? '[x]' : '[ ]') + ' '
    }
  });
}

function gfm (turndownService) {
  turndownService.use([
    highlightedCodeBlock,
    strikethrough,
    tables,
    taskListItems
  ]);
}

var gfm_1 = turndownPluginGfm_cjs.gfm = gfm;
turndownPluginGfm_cjs.highlightedCodeBlock = highlightedCodeBlock;
turndownPluginGfm_cjs.strikethrough = strikethrough;
turndownPluginGfm_cjs.tables = tables;
turndownPluginGfm_cjs.taskListItems = taskListItems;

class WebsiteParser extends Parser {
    constructor(settings) {
        super(settings);
    }
    test(url) {
        return this.isValidUrl(url);
    }
    prepareNote(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield obsidian.request({ method: 'GET', url });
            const dom = new DOMParser().parseFromString(response, 'text/html');
            // Set base to allow Readability to resolve relative path's
            const baseEl = dom.createElement('base');
            baseEl.setAttribute('href', getBaseUrl(url));
            dom.head.append(baseEl);
            const article = new readability.Readability(dom).parse();
            return (article === null || article === void 0 ? void 0 : article.content) ? this.parsableArticle(article, url) : this.notParsableArticle(url);
        });
    }
    parsableArticle(article, url) {
        const gfm = gfm_1;
        const turndownService = new TurndownService();
        turndownService.use(gfm);
        const articleTitle = article.title || 'No title';
        const articleContent = turndownService.turndown(article.content);
        const content = this.settings.parsableArticleNote
            .replace('%articleTitle%', articleTitle)
            .replace('%articleURL%', url)
            .replace('%articleContent%', articleContent);
        const fileName = `${articleTitle}.md`;
        return new Note(fileName, content);
    }
    notParsableArticle(url) {
        console.error('Website not parseable');
        const content = this.settings.notParsableArticleNote.replace('%articleURL%', url);
        const fileName = `Article (${this.getFormattedDateForFilename()}).md`;
        return new Note(fileName, content);
    }
}

class TextSnippetParser extends Parser {
    constructor(settings) {
        super(settings);
    }
    test() {
        return true;
    }
    prepareNote(text) {
        return __awaiter(this, void 0, void 0, function* () {
            const fileName = `Notice ${this.getFormattedDateForFilename()}.md`;
            const content = this.settings.textSnippetNote.replace('%content%', text);
            return new Note(fileName, content);
        });
    }
}

class ReadItLaterPlugin extends obsidian.Plugin {
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.loadSettings();
            this.parsers = [
                new YoutubeParser(this.settings),
                new TwitterParser(this.settings),
                new WebsiteParser(this.settings),
                new TextSnippetParser(this.settings),
            ];
            obsidian.addIcon('read-it-later', clipboardIcon);
            this.addRibbonIcon('read-it-later', 'ReadItLater: Save clipboard', () => __awaiter(this, void 0, void 0, function* () {
                yield this.processClipboard();
            }));
            this.addCommand({
                id: 'save-clipboard-to-notice',
                name: 'Save clipboard',
                callback: () => __awaiter(this, void 0, void 0, function* () {
                    yield this.processClipboard();
                }),
            });
            this.addSettingTab(new ReadItLaterSettingsTab(this.app, this));
        });
    }
    loadSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            this.settings = Object.assign({}, DEFAULT_SETTINGS, yield this.loadData());
        });
    }
    saveSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.saveData(this.settings);
        });
    }
    processClipboard() {
        return __awaiter(this, void 0, void 0, function* () {
            const clipboardContent = yield navigator.clipboard.readText();
            for (const parser of this.parsers) {
                if (parser.test(clipboardContent)) {
                    const note = yield parser.prepareNote(clipboardContent);
                    yield this.writeFile(note.fileName, note.content);
                    break;
                }
            }
        });
    }
    writeFile(fileName, content) {
        return __awaiter(this, void 0, void 0, function* () {
            let filePath;
            fileName = normalizeFilename(fileName);
            if (!(yield this.app.vault.adapter.exists(obsidian.normalizePath(this.settings.inboxDir)))) {
                new obsidian.Notice("The configured Inbox directory don't exist! Please create it first.");
                return;
                //await this.app.vault.adapter.mkdir(normalizePath(this.settings.inboxDir));
            }
            if (this.settings.inboxDir) {
                filePath = obsidian.normalizePath(`${this.settings.inboxDir}/${fileName}`);
            }
            else {
                filePath = obsidian.normalizePath(`/${fileName}`);
            }
            if (yield this.app.vault.adapter.exists(filePath)) {
                new obsidian.Notice(`${fileName} already exists!`);
            }
            else {
                const newFile = yield this.app.vault.create(filePath, content);
                if (this.settings.openNewNote) {
                    this.app.workspace.getLeaf(false).openFile(newFile);
                }
                new obsidian.Notice(`${fileName} created successful`);
            }
        });
    }
}
const clipboardIcon = `
<svg fill="currentColor" stroke="currentColor" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
	<g>
		<path d="m365.9,144.9c-12.3,0-24.2,1.8-35.4,5.2v-114.7h-96.9l7.3-35.4h-150.2l6.8,35.4h-97.5v454.6h330.5v-102.1c11.2,3.4 23.1,5.2 35.4,5.2 68.8-0.1 124.1-56.4 124.1-124.1 0-67.8-55.3-124.1-124.1-124.1zm-150.1-124l-10.4,50h-79.2l-9.4-50h99zm93.8,448.2h-288.7v-412.8h80.7l6.8,35.4h113.6l7.3-35.4h80.3v102.2c-27.3,14-48.8,37.9-59.7,66.7h-200.9v20.8h195c-1.4,7.4-2.2,15.1-2.2,22.9 0,13.4 2.2,26.4 6.2,38.6h-199v20.9h208.1c12,21.8 30.3,39.7 52.5,51.1v89.6zm56.3-98c-57.3,0-103.2-46.9-103.2-103.2s46.9-103.2 103.2-103.2c57.3,0 103.2,46.9 103.2,103.2s-45.8,103.2-103.2,103.2z"/>
		<polygon points="426.4,223.1 346.1,303.4 313.8,271.1 299.2,285.7 346.1,332.6 441,237.7   "/>
		<rect width="233.5" x="49" y="143.9" height="20.9"/>
		<rect width="233.5" x="49" y="388.9" height="20.9"/>
	</g>
</svg>`;

module.exports = ReadItLaterPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsInNyYy9oZWxwZXIudHMiLCJzcmMvc2V0dGluZ3MudHMiLCJzcmMvcGFyc2Vycy9Ob3RlLnRzIiwic3JjL3BhcnNlcnMvUGFyc2VyLnRzIiwic3JjL3BhcnNlcnMvWW91dHViZVBhcnNlci50cyIsInNyYy9wYXJzZXJzL1R3aXR0ZXJQYXJzZXIudHMiLCJub2RlX21vZHVsZXMvQG1vemlsbGEvcmVhZGFiaWxpdHkvUmVhZGFiaWxpdHkuanMiLCJub2RlX21vZHVsZXMvQG1vemlsbGEvcmVhZGFiaWxpdHkvUmVhZGFiaWxpdHktcmVhZGVyYWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9AbW96aWxsYS9yZWFkYWJpbGl0eS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy90dXJuZG93bi9saWIvdHVybmRvd24uYnJvd3Nlci5lcy5qcyIsIm5vZGVfbW9kdWxlcy9AZ3V5cGx1c3BsdXMvdHVybmRvd24tcGx1Z2luLWdmbS9saWIvdHVybmRvd24tcGx1Z2luLWdmbS5janMuanMiLCJzcmMvcGFyc2Vycy9XZWJzaXRlUGFyc2VyLnRzIiwic3JjL3BhcnNlcnMvVGV4dFNuaXBwZXRQYXJzZXIudHMiLCJzcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6bnVsbCwibmFtZXMiOlsiUGx1Z2luU2V0dGluZ1RhYiIsIlNldHRpbmciLCJtb21lbnQiLCJyZXF1ZXN0IiwicmVxdWlyZSQkMCIsInJlcXVpcmUkJDEiLCJydWxlcyIsIlJlYWRhYmlsaXR5IiwidHVybmRvd25QbHVnaW5HZm0uZ2ZtIiwiUGx1Z2luIiwiYWRkSWNvbiIsIm5vcm1hbGl6ZVBhdGgiLCJOb3RpY2UiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdURBO0FBQ08sU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFO0FBQzdELElBQUksU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxLQUFLLFlBQVksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxVQUFVLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ2hILElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQy9ELFFBQVEsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUNuRyxRQUFRLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUN0RyxRQUFRLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUN0SCxRQUFRLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RSxLQUFL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LENBQUMsQ0FBQztBQUN6QyxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsWUFBWSxFQUFFLFNBQVMsUUFBUSxFQUFFLEVBQUUsRUFBRTtBQUN2QyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3JELEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLFNBQVMsRUFBRSxTQUFTLFFBQVEsRUFBRSxFQUFFLEVBQUU7QUFDcEMsSUFBSSxPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3pELEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLFNBQVMsRUFBRSxTQUFTLFFBQVEsRUFBRSxFQUFFLEVBQUU7QUFDcEMsSUFBSSxPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3pELEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLFVBQVUsRUFBRSxTQUFTLFFBQVEsRUFBRSxFQUFFLEVBQUU7QUFDckMsSUFBSSxPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzFELEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVztBQUMvQixJQUFJLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO0FBQ3RDLElBQUksSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNyQyxJQUFJLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUFJLEVBQUU7QUFDNUMsTUFBTSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDOUIsS0FBSyxDQUFDLENBQUM7QUFDUCxJQUFJLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUN2RCxHQUFHO0FBQ0g7QUFDQSxFQUFFLG1CQUFtQixFQUFFLFNBQVMsSUFBSSxFQUFFLFFBQVEsRUFBRTtBQUNoRCxJQUFJLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO0FBQy9CLE1BQU0sT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELEtBQUs7QUFDTCxJQUFJLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEVBQUU7QUFDMUQsTUFBTSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdEQsTUFBTSxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsVUFBVSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDN0UsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUNSLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGFBQWEsRUFBRSxTQUFTLElBQUksRUFBRTtBQUNoQyxJQUFJLElBQUksaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDO0FBQ3BELElBQUksSUFBSSxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7QUFDckQsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDO0FBQ25CLE9BQU8sTUFBTSxDQUFDLFNBQVMsR0FBRyxFQUFFO0FBQzVCLFFBQVEsT0FBTyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDcEQsT0FBTyxDQUFDO0FBQ1IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakI7QUFDQSxJQUFJLElBQUksU0FBUyxFQUFFO0FBQ25CLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDNUMsS0FBSyxNQUFNO0FBQ1gsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3BDLEtBQUs7QUFDTDtBQUNBLElBQUksS0FBSyxJQUFJLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFO0FBQzlFLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMvQixLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsY0FBYyxFQUFFO0FBQzdDLElBQUksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDcEMsSUFBSSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztBQUM1QyxJQUFJLFNBQVMsYUFBYSxDQUFDLEdBQUcsRUFBRTtBQUNoQztBQUNBLE1BQU0sSUFBSSxPQUFPLElBQUksV0FBVyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFO0FBQzFELFFBQVEsT0FBTyxHQUFHLENBQUM7QUFDbkIsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNLElBQUk7QUFDVixRQUFRLE9BQU8sSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztBQUMxQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUU7QUFDbkI7QUFDQSxPQUFPO0FBQ1AsTUFBTSxPQUFPLEdBQUcsQ0FBQztBQUNqQixLQUFLO0FBQ0w7QUFDQSxJQUFJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2hFLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsU0FBUyxJQUFJLEVBQUU7QUFDNUMsTUFBTSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNDLE1BQU0sSUFBSSxJQUFJLEVBQUU7QUFDaEI7QUFDQTtBQUNBLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUMvQztBQUNBLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUM5RixZQUFZLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNsRSxZQUFZLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNyRCxXQUFXLE1BQU07QUFDakI7QUFDQSxZQUFZLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzVELFlBQVksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDL0MsY0FBYyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4RCxhQUFhO0FBQ2IsWUFBWSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDMUQsV0FBVztBQUNYLFNBQVMsTUFBTTtBQUNmLFVBQVUsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDekQsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLLENBQUMsQ0FBQztBQUNQO0FBQ0EsSUFBSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxFQUFFO0FBQzFELE1BQU0sS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRO0FBQzVELEtBQUssQ0FBQyxDQUFDO0FBQ1A7QUFDQSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFNBQVMsS0FBSyxFQUFFO0FBQzlDLE1BQU0sSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMxQyxNQUFNLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDaEQsTUFBTSxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2hEO0FBQ0EsTUFBTSxJQUFJLEdBQUcsRUFBRTtBQUNmLFFBQVEsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDdEQsT0FBTztBQUNQO0FBQ0EsTUFBTSxJQUFJLE1BQU0sRUFBRTtBQUNsQixRQUFRLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQzVELE9BQU87QUFDUDtBQUNBLE1BQU0sSUFBSSxNQUFNLEVBQUU7QUFDbEIsUUFBUSxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0FBQ3ZGLFVBQVUsT0FBTyxhQUFhLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNyRCxTQUFTLENBQUMsQ0FBQztBQUNYO0FBQ0EsUUFBUSxLQUFLLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNoRCxPQUFPO0FBQ1AsS0FBSyxDQUFDLENBQUM7QUFDUCxHQUFHO0FBQ0g7QUFDQSxFQUFFLHVCQUF1QixFQUFFLFNBQVMsY0FBYyxFQUFFO0FBQ3BELElBQUksSUFBSSxJQUFJLEdBQUcsY0FBYyxDQUFDO0FBQzlCO0FBQ0EsSUFBSSxPQUFPLElBQUksRUFBRTtBQUNqQixNQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFO0FBQzNILFFBQVEsSUFBSSxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDakQsVUFBVSxJQUFJLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlDLFVBQVUsU0FBUztBQUNuQixTQUFTLE1BQU0sSUFBSSxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLEVBQUU7QUFDckgsVUFBVSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3ZDLFVBQVUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzNELFlBQVksS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2xGLFdBQVc7QUFDWCxVQUFVLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNwRCxVQUFVLElBQUksR0FBRyxLQUFLLENBQUM7QUFDdkIsVUFBVSxTQUFTO0FBQ25CLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3JDLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxnQkFBZ0IsRUFBRSxXQUFXO0FBQy9CLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztBQUN4QixJQUFJLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUN0QixJQUFJLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUN2QjtBQUNBLElBQUksSUFBSTtBQUNSLE1BQU0sUUFBUSxHQUFHLFNBQVMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzlDO0FBQ0E7QUFDQSxNQUFNLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUTtBQUN0QyxRQUFRLFFBQVEsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4RixLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsNENBQTRDO0FBQzVEO0FBQ0EsSUFBSSxJQUFJLDhCQUE4QixHQUFHLEtBQUssQ0FBQztBQUMvQyxJQUFJLFNBQVMsU0FBUyxDQUFDLEdBQUcsRUFBRTtBQUM1QixNQUFNLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDckMsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7QUFDM0MsTUFBTSw4QkFBOEIsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ25FLE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO0FBQ2pDLFFBQVEsUUFBUSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsa0NBQWtDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDL0UsS0FBSyxNQUFNLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtBQUM5QztBQUNBO0FBQ0EsTUFBTSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCO0FBQzFDLFFBQVEsR0FBRyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQztBQUN0QyxRQUFRLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7QUFDdEMsT0FBTyxDQUFDO0FBQ1IsTUFBTSxJQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDekMsTUFBTSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxTQUFTLE9BQU8sRUFBRTtBQUM3RCxRQUFRLE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxZQUFZLENBQUM7QUFDM0QsT0FBTyxDQUFDLENBQUM7QUFDVDtBQUNBO0FBQ0EsTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ2xCLFFBQVEsUUFBUSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN2RTtBQUNBO0FBQ0EsUUFBUSxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDckMsVUFBVSxRQUFRLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3JFO0FBQ0E7QUFDQSxTQUFTLE1BQU0sSUFBSSxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQy9FLFVBQVUsUUFBUSxHQUFHLFNBQVMsQ0FBQztBQUMvQixTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUssTUFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFO0FBQzlELE1BQU0sSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pEO0FBQ0EsTUFBTSxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQztBQUM1QixRQUFRLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hELEtBQUs7QUFDTDtBQUNBLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLElBQUksaUJBQWlCLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2hELElBQUksSUFBSSxpQkFBaUIsSUFBSSxDQUFDO0FBQzlCLFNBQVMsQ0FBQyw4QkFBOEI7QUFDeEMsU0FBUyxpQkFBaUIsSUFBSSxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ3ZGLE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQztBQUMzQixLQUFLO0FBQ0w7QUFDQSxJQUFJLE9BQU8sUUFBUSxDQUFDO0FBQ3BCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsYUFBYSxFQUFFLFdBQVc7QUFDNUIsSUFBSSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3hCO0FBQ0E7QUFDQSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoRTtBQUNBLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFO0FBQ2xCLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakMsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDM0UsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsU0FBUyxFQUFFLFVBQVUsSUFBSSxFQUFFO0FBQzdCLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLElBQUksT0FBTyxJQUFJO0FBQ2YsWUFBWSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUM7QUFDL0MsV0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO0FBQzNELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7QUFDOUIsS0FBSztBQUNMLElBQUksT0FBTyxJQUFJLENBQUM7QUFDaEIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLFdBQVcsRUFBRSxVQUFVLElBQUksRUFBRTtBQUMvQixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUU7QUFDM0UsTUFBTSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsRUFBRTtBQUN0RSxRQUFRLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDeEIsUUFBUSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0FBQ3pDLFFBQVEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDMUMsUUFBUSxJQUFJLEdBQUcsU0FBUyxDQUFDO0FBQ3pCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBSSxRQUFRLEVBQUU7QUFDcEIsUUFBUSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM3QyxRQUFRLEVBQUUsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUMxQztBQUNBLFFBQVEsSUFBSSxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUM7QUFDN0IsUUFBUSxPQUFPLElBQUksRUFBRTtBQUNyQjtBQUNBLFVBQVUsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtBQUNwQyxZQUFZLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzVELFlBQVksSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLE9BQU8sSUFBSSxJQUFJO0FBQ3BELGNBQWMsTUFBTTtBQUNwQixXQUFXO0FBQ1g7QUFDQSxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDO0FBQzVDLFlBQVksTUFBTTtBQUNsQjtBQUNBO0FBQ0EsVUFBVSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0FBQ3pDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM5QixVQUFVLElBQUksR0FBRyxPQUFPLENBQUM7QUFDekIsU0FBUztBQUNUO0FBQ0EsUUFBUSxPQUFPLENBQUMsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUU7QUFDL0QsVUFBVSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNyQyxTQUFTO0FBQ1Q7QUFDQSxRQUFRLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEtBQUssR0FBRztBQUN4QyxVQUFVLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNoRCxPQUFPO0FBQ1AsS0FBSyxDQUFDLENBQUM7QUFDUCxHQUFHO0FBQ0g7QUFDQSxFQUFFLFdBQVcsRUFBRSxVQUFVLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDcEMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDdkMsSUFBSSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7QUFDOUIsTUFBTSxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUN6QyxNQUFNLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3ZDLE1BQU0sT0FBTyxJQUFJLENBQUM7QUFDbEIsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM1RCxJQUFJLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUM1QixNQUFNLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQy9DLEtBQUs7QUFDTCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNwRCxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVc7QUFDeEIsTUFBTSxXQUFXLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7QUFDakQ7QUFDQSxJQUFJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNyRCxNQUFNLElBQUk7QUFDVixRQUFRLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRixPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxJQUFJLE9BQU8sV0FBVyxDQUFDO0FBQ3ZCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxZQUFZLEVBQUUsU0FBUyxjQUFjLEVBQUU7QUFDekMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3pDO0FBQ0EsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3hDO0FBQ0E7QUFDQSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDckQsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ3pELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDMUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6QyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDeEMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksSUFBSSxxQkFBcUIsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUM7QUFDNUQ7QUFDQSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxVQUFVLFlBQVksRUFBRTtBQUN2RSxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsVUFBVSxJQUFJLEVBQUUsV0FBVyxFQUFFO0FBQ3pFLFFBQVEsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcscUJBQXFCLENBQUM7QUFDL0csT0FBTyxDQUFDLENBQUM7QUFDVCxLQUFLLENBQUMsQ0FBQztBQUNQO0FBQ0EsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUMxQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3pDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDNUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUMxQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzFDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN2QztBQUNBO0FBQ0E7QUFDQSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdEQsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ25ELElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNwRDtBQUNBO0FBQ0EsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDbEY7QUFDQTtBQUNBLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxVQUFVLFNBQVMsRUFBRTtBQUM1RixNQUFNLElBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDbEUsTUFBTSxJQUFJLFVBQVUsR0FBRyxTQUFTLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQ3RFLE1BQU0sSUFBSSxXQUFXLEdBQUcsU0FBUyxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUN4RTtBQUNBLE1BQU0sSUFBSSxXQUFXLEdBQUcsU0FBUyxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUN4RSxNQUFNLElBQUksVUFBVSxHQUFHLFFBQVEsR0FBRyxVQUFVLEdBQUcsV0FBVyxHQUFHLFdBQVcsQ0FBQztBQUN6RTtBQUNBLE1BQU0sT0FBTyxVQUFVLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDdkUsS0FBSyxDQUFDLENBQUM7QUFDUDtBQUNBLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRTtBQUNyRixNQUFNLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ2hELE1BQU0sSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxHQUFHO0FBQ3JDLFFBQVEsRUFBRSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdEMsS0FBSyxDQUFDLENBQUM7QUFDUDtBQUNBO0FBQ0EsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLFNBQVMsS0FBSyxFQUFFO0FBQzNGLE1BQU0sSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0FBQ3BHLE1BQU0sSUFBSSxJQUFJLENBQUMsMEJBQTBCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFO0FBQ3hELFFBQVEsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixDQUFDO0FBQzFDLFFBQVEsSUFBSSxJQUFJLENBQUMsMEJBQTBCLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFO0FBQ3hELFVBQVUsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0FBQzNDLFVBQVUsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDakgsVUFBVSxLQUFLLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDckQsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLLENBQUMsQ0FBQztBQUNQLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxlQUFlLEVBQUUsU0FBUyxJQUFJLEVBQUU7QUFDbEMsSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzNDO0FBQ0EsSUFBSSxRQUFRLElBQUksQ0FBQyxPQUFPO0FBQ3hCLE1BQU0sS0FBSyxLQUFLO0FBQ2hCLFFBQVEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDO0FBQzNDLFFBQVEsTUFBTTtBQUNkO0FBQ0EsTUFBTSxLQUFLLEtBQUssQ0FBQztBQUNqQixNQUFNLEtBQUssSUFBSSxDQUFDO0FBQ2hCLE1BQU0sS0FBSyxZQUFZO0FBQ3ZCLFFBQVEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDO0FBQzNDLFFBQVEsTUFBTTtBQUNkO0FBQ0EsTUFBTSxLQUFLLFNBQVMsQ0FBQztBQUNyQixNQUFNLEtBQUssSUFBSSxDQUFDO0FBQ2hCLE1BQU0sS0FBSyxJQUFJLENBQUM7QUFDaEIsTUFBTSxLQUFLLElBQUksQ0FBQztBQUNoQixNQUFNLEtBQUssSUFBSSxDQUFDO0FBQ2hCLE1BQU0sS0FBSyxJQUFJLENBQUM7QUFDaEIsTUFBTSxLQUFLLElBQUksQ0FBQztBQUNoQixNQUFNLEtBQUssTUFBTTtBQUNqQixRQUFRLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQztBQUMzQyxRQUFRLE1BQU07QUFDZDtBQUNBLE1BQU0sS0FBSyxJQUFJLENBQUM7QUFDaEIsTUFBTSxLQUFLLElBQUksQ0FBQztBQUNoQixNQUFNLEtBQUssSUFBSSxDQUFDO0FBQ2hCLE1BQU0sS0FBSyxJQUFJLENBQUM7QUFDaEIsTUFBTSxLQUFLLElBQUksQ0FBQztBQUNoQixNQUFNLEtBQUssSUFBSSxDQUFDO0FBQ2hCLE1BQU0sS0FBSyxJQUFJO0FBQ2YsUUFBUSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUM7QUFDM0MsUUFBUSxNQUFNO0FBQ2QsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hFLEdBQUc7QUFDSDtBQUNBLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxJQUFJLEVBQUU7QUFDcEMsSUFBSSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNqRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3RDLElBQUksT0FBTyxRQUFRLENBQUM7QUFDcEIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLFlBQVksRUFBRSxTQUFTLElBQUksRUFBRSxpQkFBaUIsRUFBRTtBQUNsRDtBQUNBLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtBQUN0RCxNQUFNLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0FBQ3BDLEtBQUs7QUFDTDtBQUNBLElBQUksSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7QUFDakMsTUFBTSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztBQUNyQyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSSxHQUFHO0FBQ1AsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztBQUM3QixLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFO0FBQy9DLElBQUksT0FBTyxJQUFJLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDO0FBQzNDLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxlQUFlLEVBQUUsU0FBUyxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQzFDLElBQUksSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNuRixJQUFJLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbkYsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7QUFDNUMsTUFBTSxPQUFPLENBQUMsQ0FBQztBQUNmLEtBQUs7QUFDTCxJQUFJLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3hFLElBQUksSUFBSSxTQUFTLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDNUUsSUFBSSxPQUFPLENBQUMsR0FBRyxTQUFTLENBQUM7QUFDekIsR0FBRztBQUNIO0FBQ0EsRUFBRSxZQUFZLEVBQUUsU0FBUyxJQUFJLEVBQUUsV0FBVyxFQUFFO0FBQzVDLElBQUksSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO0FBQzdCLE1BQU0sT0FBTyxLQUFLLENBQUM7QUFDbkIsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssU0FBUyxFQUFFO0FBQ3pDLE1BQU0sSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN6QyxNQUFNLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbkQsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLFFBQVEsS0FBSyxRQUFRLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTtBQUNqSyxNQUFNLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNwRCxNQUFNLE9BQU8sSUFBSSxDQUFDO0FBQ2xCLEtBQUs7QUFDTDtBQUNBLElBQUksT0FBTyxLQUFLLENBQUM7QUFDakIsR0FBRztBQUNIO0FBQ0EsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLElBQUksRUFBRSxRQUFRLEVBQUU7QUFDOUMsSUFBSSxRQUFRLEdBQUcsUUFBUSxJQUFJLENBQUMsQ0FBQztBQUM3QixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQzlCLElBQUksT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFO0FBQzVCLE1BQU0sU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDdEMsTUFBTSxJQUFJLFFBQVEsSUFBSSxFQUFFLENBQUMsS0FBSyxRQUFRO0FBQ3RDLFFBQVEsTUFBTTtBQUNkLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7QUFDN0IsS0FBSztBQUNMLElBQUksT0FBTyxTQUFTLENBQUM7QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLFlBQVksRUFBRSxVQUFVLElBQUksRUFBRTtBQUNoQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUN0QyxJQUFJLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDeEIsSUFBSSxJQUFJLFFBQVEsR0FBRyxJQUFJLEtBQUssSUFBSSxDQUFDO0FBQ2pDLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDeEM7QUFDQTtBQUNBLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtBQUNmLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0FBQ3BELE1BQU0sT0FBTyxJQUFJLENBQUM7QUFDbEIsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQ3ZDO0FBQ0EsSUFBSSxPQUFPLElBQUksRUFBRTtBQUNqQixNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztBQUM1QyxNQUFNLElBQUksdUJBQXVCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBSSxlQUFlLEdBQUcsRUFBRSxDQUFDO0FBQy9CLE1BQU0sSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7QUFDM0M7QUFDQSxNQUFNLElBQUksdUJBQXVCLEdBQUcsSUFBSSxDQUFDO0FBQ3pDO0FBQ0EsTUFBTSxPQUFPLElBQUksRUFBRTtBQUNuQixRQUFRLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7QUFDekQ7QUFDQSxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDNUMsVUFBVSxJQUFJLENBQUMsR0FBRyxDQUFDLHlCQUF5QixHQUFHLFdBQVcsQ0FBQyxDQUFDO0FBQzVELFVBQVUsSUFBSSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM5QyxVQUFVLFNBQVM7QUFDbkIsU0FBUztBQUNUO0FBQ0E7QUFDQSxRQUFRLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLEVBQUU7QUFDbEQsVUFBVSxJQUFJLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlDLFVBQVUsU0FBUztBQUNuQixTQUFTO0FBQ1Q7QUFDQSxRQUFRLElBQUksdUJBQXVCLElBQUksSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxFQUFFO0FBQzFFLFVBQVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM1RixVQUFVLHVCQUF1QixHQUFHLEtBQUssQ0FBQztBQUMxQyxVQUFVLElBQUksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDOUMsVUFBVSxTQUFTO0FBQ25CLFNBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBUSxJQUFJLHVCQUF1QixFQUFFO0FBQ3JDLFVBQVUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7QUFDL0QsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztBQUNsRSxjQUFjLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDO0FBQ2xELGNBQWMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUM7QUFDakQsY0FBYyxJQUFJLENBQUMsT0FBTyxLQUFLLE1BQU07QUFDckMsY0FBYyxJQUFJLENBQUMsT0FBTyxLQUFLLEdBQUcsRUFBRTtBQUNwQyxZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLEdBQUcsV0FBVyxDQUFDLENBQUM7QUFDckUsWUFBWSxJQUFJLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hELFlBQVksU0FBUztBQUNyQixXQUFXO0FBQ1g7QUFDQSxVQUFVLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFO0FBQ3ZFLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssR0FBRyxXQUFXLENBQUMsQ0FBQztBQUN0RyxZQUFZLElBQUksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDaEQsWUFBWSxTQUFTO0FBQ3JCLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssUUFBUTtBQUM5RixhQUFhLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSTtBQUNwRixhQUFhLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSTtBQUNwRixZQUFZLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUNqRCxVQUFVLElBQUksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDOUMsVUFBVSxTQUFTO0FBQ25CLFNBQVM7QUFDVDtBQUNBLFFBQVEsSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtBQUNyRSxVQUFVLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsU0FBUztBQUNUO0FBQ0E7QUFDQSxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQUU7QUFDcEM7QUFDQSxVQUFVLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztBQUN2QixVQUFVLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7QUFDMUMsVUFBVSxPQUFPLFNBQVMsRUFBRTtBQUM1QixZQUFZLElBQUksV0FBVyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUM7QUFDcEQsWUFBWSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsRUFBRTtBQUNwRCxjQUFjLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtBQUM5QixnQkFBZ0IsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN6QyxlQUFlLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUU7QUFDekQsZ0JBQWdCLENBQUMsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzNDLGdCQUFnQixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUNoRCxnQkFBZ0IsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN6QyxlQUFlO0FBQ2YsYUFBYSxNQUFNLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtBQUNuQyxjQUFjLE9BQU8sQ0FBQyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRTtBQUNyRSxnQkFBZ0IsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDM0MsZUFBZTtBQUNmLGNBQWMsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUN2QixhQUFhO0FBQ2IsWUFBWSxTQUFTLEdBQUcsV0FBVyxDQUFDO0FBQ3BDLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxJQUFJLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUU7QUFDL0YsWUFBWSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNDLFlBQVksSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3hELFlBQVksSUFBSSxHQUFHLE9BQU8sQ0FBQztBQUMzQixZQUFZLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkMsV0FBVyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDeEQsWUFBWSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDL0MsWUFBWSxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZDLFdBQVc7QUFDWCxTQUFTO0FBQ1QsUUFBUSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2QyxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUMxQixNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLFNBQVMsY0FBYyxFQUFFO0FBQ2xFLFFBQVEsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLElBQUksT0FBTyxjQUFjLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFdBQVc7QUFDbkcsVUFBVSxPQUFPO0FBQ2pCO0FBQ0E7QUFDQSxRQUFRLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDM0QsUUFBUSxJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsRUFBRTtBQUNqQyxVQUFVLE9BQU87QUFDakI7QUFDQTtBQUNBLFFBQVEsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNsRSxRQUFRLElBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDO0FBQ2xDLFVBQVUsT0FBTztBQUNqQjtBQUNBLFFBQVEsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBQzdCO0FBQ0E7QUFDQSxRQUFRLFlBQVksSUFBSSxDQUFDLENBQUM7QUFDMUI7QUFDQTtBQUNBLFFBQVEsWUFBWSxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQ3BEO0FBQ0E7QUFDQSxRQUFRLFlBQVksSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4RTtBQUNBO0FBQ0EsUUFBUSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxTQUFTLFFBQVEsRUFBRSxLQUFLLEVBQUU7QUFDL0QsVUFBVSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksT0FBTyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFdBQVc7QUFDOUcsWUFBWSxPQUFPO0FBQ25CO0FBQ0EsVUFBVSxJQUFJLE9BQU8sUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLFdBQVcsRUFBRTtBQUM1RCxZQUFZLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDM0MsWUFBWSxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3RDLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxJQUFJLEtBQUssS0FBSyxDQUFDO0FBQ3pCLFlBQVksSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBQ2pDLGVBQWUsSUFBSSxLQUFLLEtBQUssQ0FBQztBQUM5QixZQUFZLFlBQVksR0FBRyxDQUFDLENBQUM7QUFDN0I7QUFDQSxZQUFZLFlBQVksR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ3JDLFVBQVUsUUFBUSxDQUFDLFdBQVcsQ0FBQyxZQUFZLElBQUksWUFBWSxHQUFHLFlBQVksQ0FBQztBQUMzRSxTQUFTLENBQUMsQ0FBQztBQUNYLE9BQU8sQ0FBQyxDQUFDO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUM7QUFDN0IsTUFBTSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDOUQsUUFBUSxJQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLElBQUksY0FBYyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsWUFBWSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDeEcsUUFBUSxTQUFTLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxjQUFjLENBQUM7QUFDNUQ7QUFDQSxRQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFNBQVMsRUFBRSxhQUFhLEdBQUcsY0FBYyxDQUFDLENBQUM7QUFDMUU7QUFDQSxRQUFRLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDeEQsVUFBVSxJQUFJLGFBQWEsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0M7QUFDQSxVQUFVLElBQUksQ0FBQyxhQUFhLElBQUksY0FBYyxHQUFHLGFBQWEsQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFO0FBQ3pGLFlBQVksYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ2xELFlBQVksSUFBSSxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0I7QUFDNUQsY0FBYyxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDbEMsWUFBWSxNQUFNO0FBQ2xCLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsTUFBTSxJQUFJLFlBQVksR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO0FBQ2xELE1BQU0sSUFBSSwwQkFBMEIsR0FBRyxLQUFLLENBQUM7QUFDN0MsTUFBTSxJQUFJLG9CQUFvQixDQUFDO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBSSxZQUFZLEtBQUssSUFBSSxJQUFJLFlBQVksQ0FBQyxPQUFPLEtBQUssTUFBTSxFQUFFO0FBQ3BFO0FBQ0EsUUFBUSxZQUFZLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoRCxRQUFRLDBCQUEwQixHQUFHLElBQUksQ0FBQztBQUMxQztBQUNBO0FBQ0EsUUFBUSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0FBQ25DLFFBQVEsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQzVCLFVBQVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqRCxVQUFVLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUMsU0FBUztBQUNUO0FBQ0EsUUFBUSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3ZDO0FBQ0EsUUFBUSxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzNDLE9BQU8sTUFBTSxJQUFJLFlBQVksRUFBRTtBQUMvQjtBQUNBO0FBQ0EsUUFBUSxJQUFJLDZCQUE2QixHQUFHLEVBQUUsQ0FBQztBQUMvQyxRQUFRLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3ZELFVBQVUsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDLFlBQVksSUFBSSxJQUFJLEVBQUU7QUFDekcsWUFBWSw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekYsV0FBVztBQUNYLFNBQVM7QUFDVCxRQUFRLElBQUkscUJBQXFCLEdBQUcsQ0FBQyxDQUFDO0FBQ3RDLFFBQVEsSUFBSSw2QkFBNkIsQ0FBQyxNQUFNLElBQUkscUJBQXFCLEVBQUU7QUFDM0UsVUFBVSxvQkFBb0IsR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDO0FBQ3pELFVBQVUsT0FBTyxvQkFBb0IsQ0FBQyxPQUFPLEtBQUssTUFBTSxFQUFFO0FBQzFELFlBQVksSUFBSSwyQkFBMkIsR0FBRyxDQUFDLENBQUM7QUFDaEQsWUFBWSxLQUFLLElBQUksYUFBYSxHQUFHLENBQUMsRUFBRSxhQUFhLEdBQUcsNkJBQTZCLENBQUMsTUFBTSxJQUFJLDJCQUEyQixHQUFHLHFCQUFxQixFQUFFLGFBQWEsRUFBRSxFQUFFO0FBQ3RLLGNBQWMsMkJBQTJCLElBQUksTUFBTSxDQUFDLDZCQUE2QixDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7QUFDakksYUFBYTtBQUNiLFlBQVksSUFBSSwyQkFBMkIsSUFBSSxxQkFBcUIsRUFBRTtBQUN0RSxjQUFjLFlBQVksR0FBRyxvQkFBb0IsQ0FBQztBQUNsRCxjQUFjLE1BQU07QUFDcEIsYUFBYTtBQUNiLFlBQVksb0JBQW9CLEdBQUcsb0JBQW9CLENBQUMsVUFBVSxDQUFDO0FBQ25FLFdBQVc7QUFDWCxTQUFTO0FBQ1QsUUFBUSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRTtBQUN2QyxVQUFVLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDN0MsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9CQUFvQixHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUM7QUFDdkQsUUFBUSxJQUFJLFNBQVMsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQztBQUM5RDtBQUNBLFFBQVEsSUFBSSxjQUFjLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztBQUMzQyxRQUFRLE9BQU8sb0JBQW9CLENBQUMsT0FBTyxLQUFLLE1BQU0sRUFBRTtBQUN4RCxVQUFVLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUU7QUFDakQsWUFBWSxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQyxVQUFVLENBQUM7QUFDbkUsWUFBWSxTQUFTO0FBQ3JCLFdBQVc7QUFDWCxVQUFVLElBQUksV0FBVyxHQUFHLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUM7QUFDMUUsVUFBVSxJQUFJLFdBQVcsR0FBRyxjQUFjO0FBQzFDLFlBQVksTUFBTTtBQUNsQixVQUFVLElBQUksV0FBVyxHQUFHLFNBQVMsRUFBRTtBQUN2QztBQUNBLFlBQVksWUFBWSxHQUFHLG9CQUFvQixDQUFDO0FBQ2hELFlBQVksTUFBTTtBQUNsQixXQUFXO0FBQ1gsVUFBVSxTQUFTLEdBQUcsb0JBQW9CLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQztBQUNwRSxVQUFVLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDLFVBQVUsQ0FBQztBQUNqRSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvQkFBb0IsR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDO0FBQ3ZELFFBQVEsT0FBTyxvQkFBb0IsQ0FBQyxPQUFPLElBQUksTUFBTSxJQUFJLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO0FBQ3BHLFVBQVUsWUFBWSxHQUFHLG9CQUFvQixDQUFDO0FBQzlDLFVBQVUsb0JBQW9CLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQztBQUN6RCxTQUFTO0FBQ1QsUUFBUSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRTtBQUN2QyxVQUFVLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDN0MsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBSSxjQUFjLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRCxNQUFNLElBQUksUUFBUTtBQUNsQixRQUFRLGNBQWMsQ0FBQyxFQUFFLEdBQUcscUJBQXFCLENBQUM7QUFDbEQ7QUFDQSxNQUFNLElBQUkscUJBQXFCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsWUFBWSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDNUY7QUFDQSxNQUFNLG9CQUFvQixHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUM7QUFDckQsTUFBTSxJQUFJLFFBQVEsR0FBRyxvQkFBb0IsQ0FBQyxRQUFRLENBQUM7QUFDbkQ7QUFDQSxNQUFNLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDekQsUUFBUSxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEMsUUFBUSxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFDM0I7QUFDQSxRQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxXQUFXLElBQUksYUFBYSxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3JJLFFBQVEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxPQUFPLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxDQUFDO0FBQzFHO0FBQ0EsUUFBUSxJQUFJLE9BQU8sS0FBSyxZQUFZLEVBQUU7QUFDdEMsVUFBVSxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ3hCLFNBQVMsTUFBTTtBQUNmLFVBQVUsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBQy9CO0FBQ0E7QUFDQSxVQUFVLElBQUksT0FBTyxDQUFDLFNBQVMsS0FBSyxZQUFZLENBQUMsU0FBUyxJQUFJLFlBQVksQ0FBQyxTQUFTLEtBQUssRUFBRTtBQUMzRixZQUFZLFlBQVksSUFBSSxZQUFZLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7QUFDeEU7QUFDQSxVQUFVLElBQUksT0FBTyxDQUFDLFdBQVc7QUFDakMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsWUFBWSxHQUFHLFlBQVksS0FBSyxxQkFBcUIsQ0FBQyxFQUFFO0FBQzVGLFlBQVksTUFBTSxHQUFHLElBQUksQ0FBQztBQUMxQixXQUFXLE1BQU0sSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLEdBQUcsRUFBRTtBQUMvQyxZQUFZLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDNUQsWUFBWSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzFELFlBQVksSUFBSSxVQUFVLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztBQUNoRDtBQUNBLFlBQVksSUFBSSxVQUFVLEdBQUcsRUFBRSxJQUFJLFdBQVcsR0FBRyxJQUFJLEVBQUU7QUFDdkQsY0FBYyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQzVCLGFBQWEsTUFBTSxJQUFJLFVBQVUsR0FBRyxFQUFFLElBQUksVUFBVSxHQUFHLENBQUMsSUFBSSxXQUFXLEtBQUssQ0FBQztBQUM3RSx1QkFBdUIsV0FBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtBQUM3RCxjQUFjLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDNUIsYUFBYTtBQUNiLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQSxRQUFRLElBQUksTUFBTSxFQUFFO0FBQ3BCLFVBQVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMvQztBQUNBLFVBQVUsSUFBSSxJQUFJLENBQUMsdUJBQXVCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtBQUM3RTtBQUNBO0FBQ0EsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztBQUM5RDtBQUNBLFlBQVksT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3ZELFdBQVc7QUFDWDtBQUNBLFVBQVUsY0FBYyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNqQixVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDbEIsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTTtBQUNyQixRQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEdBQUcsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzFFO0FBQ0EsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3hDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTTtBQUNyQixRQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEdBQUcsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzNFO0FBQ0EsTUFBTSxJQUFJLDBCQUEwQixFQUFFO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxZQUFZLENBQUMsRUFBRSxHQUFHLG9CQUFvQixDQUFDO0FBQy9DLFFBQVEsWUFBWSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7QUFDeEMsT0FBTyxNQUFNO0FBQ2IsUUFBUSxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzNDLFFBQVEsR0FBRyxDQUFDLEVBQUUsR0FBRyxvQkFBb0IsQ0FBQztBQUN0QyxRQUFRLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO0FBQy9CLFFBQVEsSUFBSSxRQUFRLEdBQUcsY0FBYyxDQUFDLFVBQVUsQ0FBQztBQUNqRCxRQUFRLE9BQU8sUUFBUSxDQUFDLE1BQU0sRUFBRTtBQUNoQyxVQUFVLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkMsU0FBUztBQUNULFFBQVEsY0FBYyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4QyxPQUFPO0FBQ1A7QUFDQSxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU07QUFDckIsUUFBUSxJQUFJLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxHQUFHLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM5RTtBQUNBLE1BQU0sSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQ3ZFLE1BQU0sSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRTtBQUM1QyxRQUFRLGVBQWUsR0FBRyxLQUFLLENBQUM7QUFDaEMsUUFBUSxJQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQztBQUN2QztBQUNBLFFBQVEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO0FBQzNELFVBQVUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUN0RCxVQUFVLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUN4RixTQUFTLE1BQU0sSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO0FBQ2pFLFVBQVUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNyRCxVQUFVLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUN4RixTQUFTLE1BQU0sSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFO0FBQ3RFLFVBQVUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUMxRCxVQUFVLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUN4RixTQUFTLE1BQU07QUFDZixVQUFVLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUN4RjtBQUNBLFVBQVUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQzlDLFlBQVksT0FBTyxDQUFDLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7QUFDL0MsV0FBVyxDQUFDLENBQUM7QUFDYjtBQUNBO0FBQ0EsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUU7QUFDN0MsWUFBWSxPQUFPLElBQUksQ0FBQztBQUN4QixXQUFXO0FBQ1g7QUFDQSxVQUFVLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztBQUM1RCxVQUFVLGVBQWUsR0FBRyxJQUFJLENBQUM7QUFDakMsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLE1BQU0sSUFBSSxlQUFlLEVBQUU7QUFDM0I7QUFDQSxRQUFRLElBQUksU0FBUyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7QUFDbEgsUUFBUSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxTQUFTLFFBQVEsRUFBRTtBQUNyRCxVQUFVLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTztBQUMvQixZQUFZLE9BQU8sS0FBSyxDQUFDO0FBQ3pCLFVBQVUsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN4RCxVQUFVLElBQUksVUFBVSxFQUFFO0FBQzFCLFlBQVksSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7QUFDMUMsWUFBWSxPQUFPLElBQUksQ0FBQztBQUN4QixXQUFXO0FBQ1gsVUFBVSxPQUFPLEtBQUssQ0FBQztBQUN2QixTQUFTLENBQUMsQ0FBQztBQUNYLFFBQVEsT0FBTyxjQUFjLENBQUM7QUFDOUIsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxjQUFjLEVBQUUsU0FBUyxNQUFNLEVBQUU7QUFDbkMsSUFBSSxJQUFJLE9BQU8sTUFBTSxJQUFJLFFBQVEsSUFBSSxNQUFNLFlBQVksTUFBTSxFQUFFO0FBQy9ELE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUM3QixNQUFNLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsTUFBTSxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQzFELEtBQUs7QUFDTCxJQUFJLE9BQU8sS0FBSyxDQUFDO0FBQ2pCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscUJBQXFCLEVBQUUsU0FBUyxHQUFHLEVBQUU7QUFDdkMsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO0FBQ2QsTUFBTSxPQUFPLEdBQUcsQ0FBQztBQUNqQixLQUFLO0FBQ0w7QUFDQSxJQUFJLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7QUFDN0MsSUFBSSxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsMEJBQTBCLEVBQUUsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFO0FBQ3BFLE1BQU0sT0FBTyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDaEMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLHdDQUF3QyxFQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUU7QUFDbEYsTUFBTSxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxJQUFJLE1BQU0sRUFBRSxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZELE1BQU0sT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3RDLEtBQUssQ0FBQyxDQUFDO0FBQ1AsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsVUFBVSxFQUFFLFVBQVUsR0FBRyxFQUFFO0FBQzdCLElBQUksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFDNUQ7QUFDQSxJQUFJLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxFQUFFO0FBQzdELE1BQU0sT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLHFCQUFxQixDQUFDO0FBQy9ELEtBQUssQ0FBQyxDQUFDO0FBQ1A7QUFDQSxJQUFJLElBQUksYUFBYSxFQUFFO0FBQ3ZCLE1BQU0sSUFBSTtBQUNWO0FBQ0EsUUFBUSxJQUFJLE9BQU8sR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUMxRixRQUFRLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDekMsUUFBUSxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDMUIsUUFBUTtBQUNSLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO0FBQzdCLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDO0FBQ2hFLFVBQVU7QUFDVixVQUFVLE9BQU8sUUFBUSxDQUFDO0FBQzFCLFNBQVM7QUFDVDtBQUNBLFFBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ2pFLFVBQVUsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7QUFDdEQsWUFBWSxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLO0FBQzVDLGNBQWMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0I7QUFDN0MsYUFBYSxDQUFDO0FBQ2QsV0FBVyxDQUFDLENBQUM7QUFDYixTQUFTO0FBQ1Q7QUFDQSxRQUFRO0FBQ1IsVUFBVSxDQUFDLE1BQU07QUFDakIsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7QUFDMUIsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztBQUNqRSxVQUFVO0FBQ1YsVUFBVSxPQUFPLFFBQVEsQ0FBQztBQUMxQixTQUFTO0FBQ1QsUUFBUSxJQUFJLE9BQU8sTUFBTSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7QUFDN0MsVUFBVSxRQUFRLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDOUMsU0FBUyxNQUFNLElBQUksT0FBTyxNQUFNLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtBQUN4RCxVQUFVLFFBQVEsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNsRCxTQUFTO0FBQ1QsUUFBUSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7QUFDM0IsVUFBVSxJQUFJLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO0FBQ3RELFlBQVksUUFBUSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN4RCxXQUFXLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO0FBQ3BILFlBQVksUUFBUSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTTtBQUMzQyxlQUFlLE1BQU0sQ0FBQyxTQUFTLE1BQU0sRUFBRTtBQUN2QyxnQkFBZ0IsT0FBTyxNQUFNLElBQUksT0FBTyxNQUFNLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQztBQUNqRSxlQUFlLENBQUM7QUFDaEIsZUFBZSxHQUFHLENBQUMsU0FBUyxNQUFNLEVBQUU7QUFDcEMsZ0JBQWdCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUMxQyxlQUFlLENBQUM7QUFDaEIsZUFBZSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDMUIsV0FBVztBQUNYLFNBQVM7QUFDVCxRQUFRLElBQUksT0FBTyxNQUFNLENBQUMsV0FBVyxLQUFLLFFBQVEsRUFBRTtBQUNwRCxVQUFVLFFBQVEsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN2RCxTQUFTO0FBQ1QsUUFBUTtBQUNSLFVBQVUsTUFBTSxDQUFDLFNBQVM7QUFDMUIsVUFBVSxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLFFBQVE7QUFDbkQsVUFBVTtBQUNWLFVBQVUsUUFBUSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUMzRCxTQUFTO0FBQ1QsUUFBUSxPQUFPLFFBQVEsQ0FBQztBQUN4QixPQUFPLENBQUMsT0FBTyxHQUFHLEVBQUU7QUFDcEIsUUFBUSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM5QixPQUFPO0FBQ1AsS0FBSztBQUNMLElBQUksT0FBTyxFQUFFLENBQUM7QUFDZCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtQkFBbUIsRUFBRSxTQUFTLE1BQU0sRUFBRTtBQUN4QyxJQUFJLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUN0QixJQUFJLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNwQixJQUFJLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDOUQ7QUFDQTtBQUNBLElBQUksSUFBSSxlQUFlLEdBQUcsbUZBQW1GLENBQUM7QUFDOUc7QUFDQTtBQUNBLElBQUksSUFBSSxXQUFXLEdBQUcscUhBQXFILENBQUM7QUFDNUk7QUFDQTtBQUNBLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsU0FBUyxPQUFPLEVBQUU7QUFDdEQsTUFBTSxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3JELE1BQU0sSUFBSSxlQUFlLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM3RCxNQUFNLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDcEQsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ3BCLFFBQVEsT0FBTztBQUNmLE9BQU87QUFDUCxNQUFNLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQztBQUN6QixNQUFNLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUN0QjtBQUNBLE1BQU0sSUFBSSxlQUFlLEVBQUU7QUFDM0IsUUFBUSxPQUFPLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN6RCxRQUFRLElBQUksT0FBTyxFQUFFO0FBQ3JCO0FBQ0E7QUFDQSxVQUFVLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM3RDtBQUNBLFVBQVUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN4QyxTQUFTO0FBQ1QsT0FBTztBQUNQLE1BQU0sSUFBSSxDQUFDLE9BQU8sSUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRTtBQUNwRSxRQUFRLElBQUksR0FBRyxXQUFXLENBQUM7QUFDM0IsUUFBUSxJQUFJLE9BQU8sRUFBRTtBQUNyQjtBQUNBO0FBQ0EsVUFBVSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztBQUMzRSxVQUFVLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDeEMsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLLENBQUMsQ0FBQztBQUNQO0FBQ0E7QUFDQSxJQUFJLFFBQVEsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUs7QUFDakMscUJBQXFCLE1BQU0sQ0FBQyxVQUFVLENBQUM7QUFDdkMscUJBQXFCLE1BQU0sQ0FBQyxjQUFjLENBQUM7QUFDM0MscUJBQXFCLE1BQU0sQ0FBQyxVQUFVLENBQUM7QUFDdkMscUJBQXFCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQztBQUNsRCxxQkFBcUIsTUFBTSxDQUFDLHFCQUFxQixDQUFDO0FBQ2xELHFCQUFxQixNQUFNLENBQUMsT0FBTyxDQUFDO0FBQ3BDLHFCQUFxQixNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDN0M7QUFDQSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFO0FBQ3pCLE1BQU0sUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztBQUMvQyxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTTtBQUNuQyxzQkFBc0IsTUFBTSxDQUFDLFlBQVksQ0FBQztBQUMxQyxzQkFBc0IsTUFBTSxDQUFDLGdCQUFnQixDQUFDO0FBQzlDLHNCQUFzQixNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdkM7QUFDQTtBQUNBLElBQUksUUFBUSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTztBQUNyQyx1QkFBdUIsTUFBTSxDQUFDLGdCQUFnQixDQUFDO0FBQy9DLHVCQUF1QixNQUFNLENBQUMsb0JBQW9CLENBQUM7QUFDbkQsdUJBQXVCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztBQUMvQyx1QkFBdUIsTUFBTSxDQUFDLDJCQUEyQixDQUFDO0FBQzFELHVCQUF1QixNQUFNLENBQUMsMkJBQTJCLENBQUM7QUFDMUQsdUJBQXVCLE1BQU0sQ0FBQyxhQUFhLENBQUM7QUFDNUMsdUJBQXVCLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ3JEO0FBQ0E7QUFDQSxJQUFJLFFBQVEsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVE7QUFDdkMsd0JBQXdCLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUMvQztBQUNBO0FBQ0E7QUFDQSxJQUFJLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoRSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNsRSxJQUFJLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNwRSxJQUFJLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN0RTtBQUNBLElBQUksT0FBTyxRQUFRLENBQUM7QUFDcEIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxjQUFjLEVBQUUsU0FBUyxJQUFJLEVBQUU7QUFDakMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssS0FBSyxFQUFFO0FBQ2hDLE1BQU0sT0FBTyxJQUFJLENBQUM7QUFDbEIsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtBQUN0RSxNQUFNLE9BQU8sS0FBSyxDQUFDO0FBQ25CLEtBQUs7QUFDTDtBQUNBLElBQUksT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqRCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxxQkFBcUIsRUFBRSxTQUFTLEdBQUcsRUFBRTtBQUN2QztBQUNBO0FBQ0EsSUFBSSxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQzNELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsU0FBUyxHQUFHLEVBQUU7QUFDMUMsTUFBTSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDdEQsUUFBUSxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JDLFFBQVEsUUFBUSxJQUFJLENBQUMsSUFBSTtBQUN6QixVQUFVLEtBQUssS0FBSyxDQUFDO0FBQ3JCLFVBQVUsS0FBSyxRQUFRLENBQUM7QUFDeEIsVUFBVSxLQUFLLFVBQVUsQ0FBQztBQUMxQixVQUFVLEtBQUssYUFBYTtBQUM1QixZQUFZLE9BQU87QUFDbkIsU0FBUztBQUNUO0FBQ0EsUUFBUSxJQUFJLHdCQUF3QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDdkQsVUFBVSxPQUFPO0FBQ2pCLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxNQUFNLEdBQUcsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3RDLEtBQUssQ0FBQyxDQUFDO0FBQ1A7QUFDQTtBQUNBLElBQUksSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUNyRSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLFNBQVMsUUFBUSxFQUFFO0FBQ3BEO0FBQ0EsTUFBTSxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3pDLE1BQU0sR0FBRyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO0FBQ3pDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDckMsUUFBUSxPQUFPO0FBQ2YsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUM7QUFDeEQsTUFBTSxJQUFJLFdBQVcsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxFQUFFO0FBQzNELFFBQVEsSUFBSSxPQUFPLEdBQUcsV0FBVyxDQUFDO0FBQ2xDLFFBQVEsSUFBSSxPQUFPLENBQUMsT0FBTyxLQUFLLEtBQUssRUFBRTtBQUN2QyxVQUFVLE9BQU8sR0FBRyxXQUFXLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0QsU0FBUztBQUNUO0FBQ0EsUUFBUSxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEQsUUFBUSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDNUQsVUFBVSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNDLFVBQVUsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUUsRUFBRTtBQUNqQyxZQUFZLFNBQVM7QUFDckIsV0FBVztBQUNYO0FBQ0EsVUFBVSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLHdCQUF3QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDMUcsWUFBWSxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDL0QsY0FBYyxTQUFTO0FBQ3ZCLGFBQWE7QUFDYjtBQUNBLFlBQVksSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztBQUNyQyxZQUFZLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUMvQyxjQUFjLFFBQVEsR0FBRyxXQUFXLEdBQUcsUUFBUSxDQUFDO0FBQ2hELGFBQWE7QUFDYjtBQUNBLFlBQVksTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3RELFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQSxRQUFRLFFBQVEsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUM3RSxPQUFPO0FBQ1AsS0FBSyxDQUFDLENBQUM7QUFDUCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxjQUFjLEVBQUUsU0FBUyxHQUFHLEVBQUU7QUFDaEMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLFNBQVMsVUFBVSxFQUFFO0FBQ3RGLE1BQU0sVUFBVSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFDaEMsTUFBTSxVQUFVLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3hDLE1BQU0sT0FBTyxJQUFJLENBQUM7QUFDbEIsS0FBSyxDQUFDLENBQUM7QUFDUCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuRSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwwQkFBMEIsRUFBRSxTQUFTLE9BQU8sRUFBRSxHQUFHLEVBQUU7QUFDckQ7QUFDQSxJQUFJLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLEdBQUcsRUFBRTtBQUM3RSxNQUFNLE9BQU8sS0FBSyxDQUFDO0FBQ25CLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLFNBQVMsSUFBSSxFQUFFO0FBQzlELE1BQU0sT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxTQUFTO0FBQzdDLGFBQWEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUM1RCxLQUFLLENBQUMsQ0FBQztBQUNQLEdBQUc7QUFDSDtBQUNBLEVBQUUsd0JBQXdCLEVBQUUsU0FBUyxJQUFJLEVBQUU7QUFDM0MsSUFBSSxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFlBQVk7QUFDOUMsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDO0FBQ3pDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQztBQUNoQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2hILEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHFCQUFxQixFQUFFLFVBQVUsT0FBTyxFQUFFO0FBQzVDLElBQUksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsU0FBUyxJQUFJLEVBQUU7QUFDN0QsTUFBTSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDbEQsYUFBYSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDOUMsS0FBSyxDQUFDLENBQUM7QUFDUCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxJQUFJLEVBQUU7QUFDckMsSUFBSSxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9GLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLEtBQUs7QUFDaEYsUUFBUSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztBQUNuRSxHQUFHO0FBQ0g7QUFDQSxFQUFFLGFBQWEsRUFBRSxTQUFTLElBQUksRUFBRTtBQUNoQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQztBQUNwRixZQUFZLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDO0FBQzFFLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGFBQWEsRUFBRSxTQUFTLENBQUMsRUFBRSxlQUFlLEVBQUU7QUFDOUMsSUFBSSxlQUFlLEdBQUcsQ0FBQyxPQUFPLGVBQWUsS0FBSyxXQUFXLElBQUksSUFBSSxHQUFHLGVBQWUsQ0FBQztBQUN4RixJQUFJLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDM0M7QUFDQSxJQUFJLElBQUksZUFBZSxFQUFFO0FBQ3pCLE1BQU0sT0FBTyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzlELEtBQUs7QUFDTCxJQUFJLE9BQU8sV0FBVyxDQUFDO0FBQ3ZCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxhQUFhLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUM7QUFDakIsSUFBSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDckQsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLFlBQVksRUFBRSxTQUFTLENBQUMsRUFBRTtBQUM1QixJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxLQUFLO0FBQy9DLE1BQU0sT0FBTztBQUNiO0FBQ0E7QUFDQSxJQUFJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3BFLE1BQU0sQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzRCxLQUFLO0FBQ0w7QUFDQSxJQUFJLElBQUksSUFBSSxDQUFDLCtCQUErQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7QUFDeEUsTUFBTSxDQUFDLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sQ0FBQyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNsQyxLQUFLO0FBQ0w7QUFDQSxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztBQUNsQyxJQUFJLE9BQU8sR0FBRyxLQUFLLElBQUksRUFBRTtBQUN6QixNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDN0IsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLGtCQUFrQixDQUFDO0FBQ25DLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZUFBZSxFQUFFLFNBQVMsT0FBTyxFQUFFO0FBQ3JDLElBQUksSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDeEQsSUFBSSxJQUFJLFVBQVUsS0FBSyxDQUFDO0FBQ3hCLE1BQU0sT0FBTyxDQUFDLENBQUM7QUFDZjtBQUNBLElBQUksSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCO0FBQ0E7QUFDQSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxFQUFFLFNBQVMsUUFBUSxFQUFFO0FBQzVFLE1BQU0sSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMvQyxNQUFNLElBQUksV0FBVyxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUMxRSxNQUFNLFVBQVUsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7QUFDdEUsS0FBSyxDQUFDLENBQUM7QUFDUDtBQUNBLElBQUksT0FBTyxVQUFVLEdBQUcsVUFBVSxDQUFDO0FBQ25DLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxlQUFlLEVBQUUsU0FBUyxDQUFDLEVBQUU7QUFDL0IsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUM7QUFDckQsTUFBTSxPQUFPLENBQUMsQ0FBQztBQUNmO0FBQ0EsSUFBSSxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDbkI7QUFDQTtBQUNBLElBQUksSUFBSSxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxRQUFRLElBQUksQ0FBQyxDQUFDLFNBQVMsS0FBSyxFQUFFLEVBQUU7QUFDaEUsTUFBTSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0FBQ2pELFFBQVEsTUFBTSxJQUFJLEVBQUUsQ0FBQztBQUNyQjtBQUNBLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztBQUNqRCxRQUFRLE1BQU0sSUFBSSxFQUFFLENBQUM7QUFDckIsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJLElBQUksT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssUUFBUSxJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFO0FBQ2xELE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUMxQyxRQUFRLE1BQU0sSUFBSSxFQUFFLENBQUM7QUFDckI7QUFDQSxNQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDMUMsUUFBUSxNQUFNLElBQUksRUFBRSxDQUFDO0FBQ3JCLEtBQUs7QUFDTDtBQUNBLElBQUksT0FBTyxNQUFNLENBQUM7QUFDbEIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBRTtBQUMzQixJQUFJLElBQUksT0FBTyxHQUFHLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDcEU7QUFDQSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxPQUFPLEVBQUU7QUFDNUU7QUFDQSxNQUFNLElBQUksT0FBTyxFQUFFO0FBQ25CO0FBQ0EsUUFBUSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDNUQsVUFBVSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ3JFLFlBQVksT0FBTyxLQUFLLENBQUM7QUFDekIsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBUSxJQUFJLE9BQU8sQ0FBQyxPQUFPLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7QUFDekYsVUFBVSxPQUFPLEtBQUssQ0FBQztBQUN2QixTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsTUFBTSxPQUFPLElBQUksQ0FBQztBQUNsQixLQUFLLENBQUMsQ0FBQztBQUNQLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZUFBZSxFQUFFLFNBQVMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFO0FBQy9ELElBQUksUUFBUSxHQUFHLFFBQVEsSUFBSSxDQUFDLENBQUM7QUFDN0IsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ3BDLElBQUksSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCLElBQUksT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFO0FBQzVCLE1BQU0sSUFBSSxRQUFRLEdBQUcsQ0FBQyxJQUFJLEtBQUssR0FBRyxRQUFRO0FBQzFDLFFBQVEsT0FBTyxLQUFLLENBQUM7QUFDckIsTUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxLQUFLLE9BQU8sS0FBSyxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3pGLFFBQVEsT0FBTyxJQUFJLENBQUM7QUFDcEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztBQUM3QixNQUFNLEtBQUssRUFBRSxDQUFDO0FBQ2QsS0FBSztBQUNMLElBQUksT0FBTyxLQUFLLENBQUM7QUFDakIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxxQkFBcUIsRUFBRSxTQUFTLEtBQUssRUFBRTtBQUN6QyxJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztBQUNqQixJQUFJLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNwQixJQUFJLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMvQyxJQUFJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3pDLE1BQU0sSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDeEQsTUFBTSxJQUFJLE9BQU8sRUFBRTtBQUNuQixRQUFRLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3hDLE9BQU87QUFDUCxNQUFNLElBQUksS0FBSyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDN0I7QUFDQTtBQUNBLE1BQU0sSUFBSSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7QUFDL0IsTUFBTSxJQUFJLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDcEQsTUFBTSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM3QyxRQUFRLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVELFFBQVEsSUFBSSxPQUFPLEVBQUU7QUFDckIsVUFBVSxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztBQUMxQyxTQUFTO0FBQ1QsUUFBUSxnQkFBZ0IsS0FBSyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDM0MsT0FBTztBQUNQLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDLENBQUM7QUFDcEQsS0FBSztBQUNMLElBQUksT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzFDLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGVBQWUsRUFBRSxTQUFTLElBQUksRUFBRTtBQUNsQyxJQUFJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNwRCxJQUFJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzVDLE1BQU0sSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzVCLE1BQU0sSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM1QyxNQUFNLElBQUksSUFBSSxJQUFJLGNBQWMsRUFBRTtBQUNsQyxRQUFRLEtBQUssQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7QUFDNUMsUUFBUSxTQUFTO0FBQ2pCLE9BQU87QUFDUCxNQUFNLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDdEQsTUFBTSxJQUFJLFNBQVMsSUFBSSxHQUFHLEVBQUU7QUFDNUIsUUFBUSxLQUFLLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO0FBQzVDLFFBQVEsU0FBUztBQUNqQixPQUFPO0FBQ1AsTUFBTSxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2xELE1BQU0sSUFBSSxPQUFPLEVBQUU7QUFDbkIsUUFBUSxLQUFLLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO0FBQzNDLFFBQVEsU0FBUztBQUNqQixPQUFPO0FBQ1A7QUFDQSxNQUFNLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3RCxNQUFNLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUNwRCxRQUFRLEtBQUssQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7QUFDM0MsUUFBUSxTQUFTO0FBQ2pCLE9BQU87QUFDUDtBQUNBO0FBQ0EsTUFBTSxJQUFJLG9CQUFvQixHQUFHLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzdFLE1BQU0sSUFBSSxnQkFBZ0IsR0FBRyxTQUFTLEdBQUcsRUFBRTtBQUMzQyxRQUFRLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwRCxPQUFPLENBQUM7QUFDUixNQUFNLElBQUksb0JBQW9CLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7QUFDdkQsUUFBUSxJQUFJLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7QUFDL0QsUUFBUSxLQUFLLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO0FBQzNDLFFBQVEsU0FBUztBQUNqQixPQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQU0sSUFBSSxLQUFLLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDbEQsUUFBUSxLQUFLLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO0FBQzVDLFFBQVEsU0FBUztBQUNqQixPQUFPO0FBQ1A7QUFDQSxNQUFNLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN2RCxNQUFNLElBQUksUUFBUSxDQUFDLElBQUksSUFBSSxFQUFFLElBQUksUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUU7QUFDdkQsUUFBUSxLQUFLLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO0FBQzNDLFFBQVEsU0FBUztBQUNqQixPQUFPO0FBQ1A7QUFDQSxNQUFNLEtBQUssQ0FBQyxxQkFBcUIsR0FBRyxRQUFRLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQzFFLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUUsY0FBYyxFQUFFLFVBQVUsSUFBSSxFQUFFO0FBQ2xDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLFVBQVUsSUFBSSxFQUFFO0FBQ3BHO0FBQ0E7QUFDQSxNQUFNLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQzlEO0FBQ0EsUUFBUSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzNELFFBQVEsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssZUFBZSxFQUFFO0FBQzFDLFVBQVUsT0FBTztBQUNqQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFJLGlCQUFpQixHQUFHLEtBQUssQ0FBQztBQUN0QyxRQUFRLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN6RCxVQUFVLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDeEMsVUFBVSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSyxFQUFFO0FBQ25DLFlBQVksU0FBUztBQUNyQixXQUFXO0FBQ1g7QUFDQSxVQUFVLElBQUksd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUN6RCxZQUFZLGlCQUFpQixHQUFHLElBQUksQ0FBQztBQUNyQyxZQUFZLE1BQU07QUFDbEIsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxRQUFRLElBQUksaUJBQWlCLEVBQUU7QUFDL0IsVUFBVSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDNUQsVUFBVSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7QUFDdEQsVUFBVSxJQUFJLFNBQVMsR0FBRyxHQUFHLEVBQUU7QUFDL0IsWUFBWSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3hDLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtBQUN2SCxRQUFRLE9BQU87QUFDZixPQUFPO0FBQ1A7QUFDQSxNQUFNLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN2RCxRQUFRLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtBQUMzRCxVQUFVLFNBQVM7QUFDbkIsU0FBUztBQUNULFFBQVEsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQzFCLFFBQVEsSUFBSSw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQzNELFVBQVUsTUFBTSxHQUFHLFFBQVEsQ0FBQztBQUM1QixTQUFTLE1BQU0sSUFBSSxxQ0FBcUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQzNFLFVBQVUsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUN6QixTQUFTO0FBQ1QsUUFBUSxJQUFJLE1BQU0sRUFBRTtBQUNwQjtBQUNBLFVBQVUsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtBQUNwRSxZQUFZLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNsRCxXQUFXLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUU7QUFDOUc7QUFDQTtBQUNBLFlBQVksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckQsWUFBWSxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakQsWUFBWSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2xDLFdBQVc7QUFDWCxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUssQ0FBQyxDQUFDO0FBQ1AsR0FBRztBQUNIO0FBQ0EsRUFBRSxlQUFlLEVBQUUsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFO0FBQ3JDLElBQUksSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQ3hELElBQUksSUFBSSxVQUFVLEtBQUssQ0FBQyxFQUFFO0FBQzFCLE1BQU0sT0FBTyxDQUFDLENBQUM7QUFDZixLQUFLO0FBQ0wsSUFBSSxJQUFJLGNBQWMsR0FBRyxDQUFDLENBQUM7QUFDM0IsSUFBSSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3JELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLEtBQUssY0FBYyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3JHLElBQUksT0FBTyxjQUFjLEdBQUcsVUFBVSxDQUFDO0FBQ3ZDLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUJBQW1CLEVBQUUsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFO0FBQ3hDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDO0FBQzFELE1BQU0sT0FBTztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxTQUFTLElBQUksRUFBRTtBQUN6RTtBQUNBLE1BQU0sSUFBSSxXQUFXLEdBQUcsU0FBUyxDQUFDLEVBQUU7QUFDcEMsUUFBUSxPQUFPLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQztBQUN2QyxPQUFPLENBQUM7QUFDUjtBQUNBLE1BQU0sSUFBSSxNQUFNLEdBQUcsR0FBRyxLQUFLLElBQUksSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDO0FBQ2hELE1BQU0sSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUNuQixRQUFRLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztBQUMzQixRQUFRLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNyRSxRQUFRLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxLQUFLLFVBQVUsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzlGLFFBQVEsTUFBTSxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7QUFDcEUsT0FBTztBQUNQO0FBQ0EsTUFBTSxJQUFJLEdBQUcsS0FBSyxPQUFPLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ2hELFFBQVEsT0FBTyxLQUFLLENBQUM7QUFDckIsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxFQUFFO0FBQ2hFLFFBQVEsT0FBTyxLQUFLLENBQUM7QUFDckIsT0FBTztBQUNQO0FBQ0EsTUFBTSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxFQUFFO0FBQzlDLFFBQVEsT0FBTyxLQUFLLENBQUM7QUFDckIsT0FBTztBQUNQO0FBQ0EsTUFBTSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlDO0FBQ0EsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxDQUFDO0FBQy9DO0FBQ0EsTUFBTSxJQUFJLFlBQVksR0FBRyxDQUFDLENBQUM7QUFDM0I7QUFDQSxNQUFNLElBQUksTUFBTSxHQUFHLFlBQVksR0FBRyxDQUFDLEVBQUU7QUFDckMsUUFBUSxPQUFPLElBQUksQ0FBQztBQUNwQixPQUFPO0FBQ1A7QUFDQSxNQUFNLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLFFBQVEsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUN0RCxRQUFRLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDMUQsUUFBUSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztBQUM5RCxRQUFRLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDOUQsUUFBUSxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUM5RjtBQUNBLFFBQVEsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQzNCLFFBQVEsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUNuRjtBQUNBLFFBQVEsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDaEQ7QUFDQSxVQUFVLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNoRSxZQUFZLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDekUsY0FBYyxPQUFPLEtBQUssQ0FBQztBQUMzQixhQUFhO0FBQ2IsV0FBVztBQUNYO0FBQ0E7QUFDQSxVQUFVLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRTtBQUMvRixZQUFZLE9BQU8sS0FBSyxDQUFDO0FBQ3pCLFdBQVc7QUFDWDtBQUNBLFVBQVUsVUFBVSxFQUFFLENBQUM7QUFDdkIsU0FBUztBQUNUO0FBQ0EsUUFBUSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3JELFFBQVEsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUM7QUFDNUQ7QUFDQSxRQUFRLElBQUksWUFBWTtBQUN4QixVQUFVLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQztBQUM1RSxXQUFXLENBQUMsTUFBTSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDN0IsV0FBVyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkMsV0FBVyxDQUFDLE1BQU0sSUFBSSxjQUFjLEdBQUcsR0FBRyxJQUFJLGFBQWEsR0FBRyxFQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNwSSxXQUFXLENBQUMsTUFBTSxJQUFJLE1BQU0sR0FBRyxFQUFFLElBQUksV0FBVyxHQUFHLEdBQUcsQ0FBQztBQUN2RCxXQUFXLE1BQU0sSUFBSSxFQUFFLElBQUksV0FBVyxHQUFHLEdBQUcsQ0FBQztBQUM3QyxXQUFXLENBQUMsVUFBVSxLQUFLLENBQUMsSUFBSSxhQUFhLEdBQUcsRUFBRSxLQUFLLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN2RSxRQUFRLE9BQU8sWUFBWSxDQUFDO0FBQzVCLE9BQU87QUFDUCxNQUFNLE9BQU8sS0FBSyxDQUFDO0FBQ25CLEtBQUssQ0FBQyxDQUFDO0FBQ1AsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtCQUFrQixFQUFFLFNBQVMsQ0FBQyxFQUFFLE1BQU0sRUFBRTtBQUMxQyxJQUFJLElBQUkscUJBQXFCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDM0QsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BDLElBQUksT0FBTyxJQUFJLElBQUksSUFBSSxJQUFJLHFCQUFxQixFQUFFO0FBQ2xELE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ25FLFFBQVEsSUFBSSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1QyxPQUFPLE1BQU07QUFDYixRQUFRLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZDLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxhQUFhLEVBQUUsU0FBUyxDQUFDLEVBQUU7QUFDN0IsSUFBSSxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDakUsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxTQUFTLElBQUksRUFBRTtBQUNuRCxNQUFNLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3hELE1BQU0sSUFBSSxZQUFZLEVBQUU7QUFDeEIsUUFBUSxJQUFJLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2pFLE9BQU87QUFDUCxNQUFNLE9BQU8sWUFBWSxDQUFDO0FBQzFCLEtBQUssQ0FBQyxDQUFDO0FBQ1AsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHNCQUFzQixFQUFFLFNBQVMsSUFBSSxFQUFFO0FBQ3pDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtBQUN0RCxNQUFNLE9BQU8sS0FBSyxDQUFDO0FBQ25CLEtBQUs7QUFDTCxJQUFJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2xELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzlFLElBQUksT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ3BFLEdBQUc7QUFDSDtBQUNBLEVBQUUsYUFBYSxFQUFFLFNBQVMsSUFBSSxFQUFFO0FBQ2hDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQztBQUNwQyxHQUFHO0FBQ0g7QUFDQSxFQUFFLFdBQVcsRUFBRSxTQUFTLElBQUksRUFBRTtBQUM5QixJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSxFQUFFLGtCQUFrQixFQUFFLFNBQVMsSUFBSSxFQUFFO0FBQ3JDO0FBQ0EsSUFBSSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLE1BQU07QUFDdkQsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDO0FBQ3JDO0FBQ0EsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxNQUFNLEtBQUssSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1TCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEtBQUssRUFBRSxZQUFZO0FBQ3JCO0FBQ0EsSUFBSSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLEVBQUU7QUFDbkMsTUFBTSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUMvRCxNQUFNLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtBQUMzQyxRQUFRLE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLEdBQUcsT0FBTyxHQUFHLGlCQUFpQixDQUFDLENBQUM7QUFDckYsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSSxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzFDO0FBQ0E7QUFDQSxJQUFJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZFO0FBQ0E7QUFDQSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ25DO0FBQ0EsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7QUFDekI7QUFDQSxJQUFJLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNwRCxJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztBQUN4QztBQUNBLElBQUksSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQzdDLElBQUksSUFBSSxDQUFDLGNBQWM7QUFDdkIsTUFBTSxPQUFPLElBQUksQ0FBQztBQUNsQjtBQUNBLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3JEO0FBQ0EsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFO0FBQzNCLE1BQU0sSUFBSSxVQUFVLEdBQUcsY0FBYyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2hFLE1BQU0sSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUNqQyxRQUFRLFFBQVEsQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUM1RCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLFdBQVcsR0FBRyxjQUFjLENBQUMsV0FBVyxDQUFDO0FBQ2pELElBQUksT0FBTztBQUNYLE1BQU0sS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhO0FBQy9CLE1BQU0sTUFBTSxFQUFFLFFBQVEsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGNBQWM7QUFDcEQsTUFBTSxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVc7QUFDM0IsTUFBTSxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUM7QUFDL0MsTUFBTSxXQUFXLEVBQUUsV0FBVztBQUM5QixNQUFNLE1BQU0sRUFBRSxXQUFXLENBQUMsTUFBTTtBQUNoQyxNQUFNLE9BQU8sRUFBRSxRQUFRLENBQUMsT0FBTztBQUMvQixNQUFNLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxnQkFBZ0I7QUFDMUQsS0FBSyxDQUFDO0FBQ04sR0FBRztBQUNILENBQUMsQ0FBQztBQUNGO0FBQ2dDO0FBQ2hDLEVBQUUsaUJBQWlCLFdBQVcsQ0FBQztBQUMvQjs7Ozs7Ozs7QUNsdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksT0FBTyxHQUFHO0FBQ2Q7QUFDQTtBQUNBLEVBQUUsa0JBQWtCLEVBQUUsd1BBQXdQO0FBQzlRLEVBQUUsb0JBQW9CLEVBQUUsOENBQThDO0FBQ3RFLENBQUMsQ0FBQztBQUNGO0FBQ0EsU0FBUyxhQUFhLENBQUMsSUFBSSxFQUFFO0FBQzdCO0FBQ0EsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLE1BQU07QUFDckQsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDO0FBQ25DO0FBQ0EsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsSUFBSSxNQUFNLEtBQUssSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsT0FBTyxHQUFHLEVBQUUsRUFBRTtBQUNqRDtBQUNBO0FBQ0EsRUFBRSxJQUFJLE9BQU8sT0FBTyxJQUFJLFVBQVUsRUFBRTtBQUNwQyxJQUFJLE9BQU8sR0FBRyxFQUFFLGlCQUFpQixFQUFFLE9BQU8sRUFBRSxDQUFDO0FBQzdDLEdBQUc7QUFDSDtBQUNBLEVBQUUsSUFBSSxjQUFjLEdBQUcsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsQ0FBQztBQUNqRyxFQUFFLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNuRDtBQUNBLEVBQUUsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLElBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNqRCxFQUFFLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUN0QixJQUFJLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzdCLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsSUFBSSxFQUFFO0FBQzdDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDL0IsS0FBSyxDQUFDLENBQUM7QUFDUCxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzVCLEdBQUc7QUFDSDtBQUNBLEVBQUUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2hCO0FBQ0E7QUFDQSxFQUFFLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsSUFBSSxFQUFFO0FBQzdDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUMxQyxNQUFNLE9BQU8sS0FBSyxDQUFDO0FBQ25CLEtBQUs7QUFDTDtBQUNBLElBQUksSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUNyRCxJQUFJLElBQUksT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7QUFDcEQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUU7QUFDekQsTUFBTSxPQUFPLEtBQUssQ0FBQztBQUNuQixLQUFLO0FBQ0w7QUFDQSxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUM5QixNQUFNLE9BQU8sS0FBSyxDQUFDO0FBQ25CLEtBQUs7QUFDTDtBQUNBLElBQUksSUFBSSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQztBQUMzRCxJQUFJLElBQUksaUJBQWlCLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixFQUFFO0FBQ3RELE1BQU0sT0FBTyxLQUFLLENBQUM7QUFDbkIsS0FBSztBQUNMO0FBQ0EsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUNyRTtBQUNBLElBQUksSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRTtBQUNsQyxNQUFNLE9BQU8sSUFBSSxDQUFDO0FBQ2xCLEtBQUs7QUFDTCxJQUFJLE9BQU8sS0FBSyxDQUFDO0FBQ2pCLEdBQUcsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUNEO0FBQ2dDO0FBQ2hDLEVBQUUsaUJBQWlCLG9CQUFvQixDQUFDO0FBQ3hDOzs7QUMzR0EsSUFBSSxXQUFXLEdBQUdDLHFCQUF3QixDQUFDO0FBQzNDLElBQUksb0JBQW9CLEdBQUdDLDZCQUFtQyxDQUFDO0FBQy9EO0lBQ0EsV0FBYyxHQUFHO0FBQ2pCLEVBQUUsV0FBVyxFQUFFLFdBQVc7QUFDMUIsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0I7QUFDNUMsQ0FBQzs7QUNORCxTQUFTLE1BQU0sRUFBRSxXQUFXLEVBQUU7QUFDOUIsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM3QyxJQUFJLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM5QixJQUFJLEtBQUssSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFO0FBQzVCLE1BQU0sSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckUsS0FBSztBQUNMLEdBQUc7QUFDSCxFQUFFLE9BQU8sV0FBVztBQUNwQixDQUFDO0FBQ0Q7QUFDQSxTQUFTLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFO0FBQ25DLEVBQUUsT0FBTyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDekMsQ0FBQztBQUNEO0FBQ0EsU0FBUyxtQkFBbUIsRUFBRSxNQUFNLEVBQUU7QUFDdEMsRUFBRSxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztBQUNuQyxDQUFDO0FBQ0Q7QUFDQSxTQUFTLG9CQUFvQixFQUFFLE1BQU0sRUFBRTtBQUN2QztBQUNBLEVBQUUsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUMvQixFQUFFLE9BQU8sUUFBUSxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQztBQUNuRSxFQUFFLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDO0FBQ3RDLENBQUM7QUFDRDtBQUNBLElBQUksYUFBYSxHQUFHO0FBQ3BCLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsUUFBUTtBQUN4RSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsUUFBUTtBQUM5RSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVE7QUFDNUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFVBQVU7QUFDNUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUk7QUFDM0UsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSTtBQUNwQyxDQUFDLENBQUM7QUFDRjtBQUNBLFNBQVMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUN4QixFQUFFLE9BQU8sRUFBRSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUM7QUFDaEMsQ0FBQztBQUNEO0FBQ0EsSUFBSSxZQUFZLEdBQUc7QUFDbkIsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU87QUFDdkUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxLQUFLO0FBQzdELENBQUMsQ0FBQztBQUNGO0FBQ0EsU0FBUyxNQUFNLEVBQUUsSUFBSSxFQUFFO0FBQ3ZCLEVBQUUsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQztBQUMvQixDQUFDO0FBQ0Q7QUFDQSxTQUFTLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDeEIsRUFBRSxPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDO0FBQ2hDLENBQUM7QUFDRDtBQUNBLElBQUksMkJBQTJCLEdBQUc7QUFDbEMsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVE7QUFDekUsRUFBRSxPQUFPLEVBQUUsT0FBTztBQUNsQixDQUFDLENBQUM7QUFDRjtBQUNBLFNBQVMscUJBQXFCLEVBQUUsSUFBSSxFQUFFO0FBQ3RDLEVBQUUsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLDJCQUEyQixDQUFDO0FBQzlDLENBQUM7QUFDRDtBQUNBLFNBQVMsc0JBQXNCLEVBQUUsSUFBSSxFQUFFO0FBQ3ZDLEVBQUUsT0FBTyxHQUFHLENBQUMsSUFBSSxFQUFFLDJCQUEyQixDQUFDO0FBQy9DLENBQUM7QUFDRDtBQUNBLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7QUFDN0IsRUFBRSxPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7QUFDN0MsQ0FBQztBQUNEO0FBQ0EsU0FBUyxHQUFHLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtBQUM5QixFQUFFO0FBQ0YsSUFBSSxJQUFJLENBQUMsb0JBQW9CO0FBQzdCLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLE9BQU8sRUFBRTtBQUNyQyxNQUFNLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU07QUFDdEQsS0FBSyxDQUFDO0FBQ04sR0FBRztBQUNILENBQUM7QUFDRDtBQUNBLElBQUlDLE9BQUssR0FBRyxFQUFFLENBQUM7QUFDZjtBQUNBQSxPQUFLLENBQUMsU0FBUyxHQUFHO0FBQ2xCLEVBQUUsTUFBTSxFQUFFLEdBQUc7QUFDYjtBQUNBLEVBQUUsV0FBVyxFQUFFLFVBQVUsT0FBTyxFQUFFO0FBQ2xDLElBQUksT0FBTyxNQUFNLEdBQUcsT0FBTyxHQUFHLE1BQU07QUFDcEMsR0FBRztBQUNILENBQUMsQ0FBQztBQUNGO0FBQ0FBLE9BQUssQ0FBQyxTQUFTLEdBQUc7QUFDbEIsRUFBRSxNQUFNLEVBQUUsSUFBSTtBQUNkO0FBQ0EsRUFBRSxXQUFXLEVBQUUsVUFBVSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtBQUNqRCxJQUFJLE9BQU8sT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJO0FBQzVCLEdBQUc7QUFDSCxDQUFDLENBQUM7QUFDRjtBQUNBQSxPQUFLLENBQUMsT0FBTyxHQUFHO0FBQ2hCLEVBQUUsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7QUFDOUM7QUFDQSxFQUFFLFdBQVcsRUFBRSxVQUFVLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0FBQ2pELElBQUksSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakQ7QUFDQSxJQUFJLElBQUksT0FBTyxDQUFDLFlBQVksS0FBSyxRQUFRLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRTtBQUN6RCxNQUFNLElBQUksU0FBUyxHQUFHLE1BQU0sRUFBRSxNQUFNLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3pFLE1BQU07QUFDTixRQUFRLE1BQU0sR0FBRyxPQUFPLEdBQUcsSUFBSSxHQUFHLFNBQVMsR0FBRyxNQUFNO0FBQ3BELE9BQU87QUFDUCxLQUFLLE1BQU07QUFDWCxNQUFNLE9BQU8sTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxNQUFNO0FBQ2xFLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQyxDQUFDO0FBQ0Y7QUFDQUEsT0FBSyxDQUFDLFVBQVUsR0FBRztBQUNuQixFQUFFLE1BQU0sRUFBRSxZQUFZO0FBQ3RCO0FBQ0EsRUFBRSxXQUFXLEVBQUUsVUFBVSxPQUFPLEVBQUU7QUFDbEMsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDaEQsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDM0MsSUFBSSxPQUFPLE1BQU0sR0FBRyxPQUFPLEdBQUcsTUFBTTtBQUNwQyxHQUFHO0FBQ0gsQ0FBQyxDQUFDO0FBQ0Y7QUFDQUEsT0FBSyxDQUFDLElBQUksR0FBRztBQUNiLEVBQUUsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztBQUN0QjtBQUNBLEVBQUUsV0FBVyxFQUFFLFVBQVUsT0FBTyxFQUFFLElBQUksRUFBRTtBQUN4QyxJQUFJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7QUFDakMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssSUFBSSxJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLEVBQUU7QUFDdEUsTUFBTSxPQUFPLElBQUksR0FBRyxPQUFPO0FBQzNCLEtBQUssTUFBTTtBQUNYLE1BQU0sT0FBTyxNQUFNLEdBQUcsT0FBTyxHQUFHLE1BQU07QUFDdEMsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDLENBQUM7QUFDRjtBQUNBQSxPQUFLLENBQUMsUUFBUSxHQUFHO0FBQ2pCLEVBQUUsTUFBTSxFQUFFLElBQUk7QUFDZDtBQUNBLEVBQUUsV0FBVyxFQUFFLFVBQVUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7QUFDakQsSUFBSSxPQUFPLEdBQUcsT0FBTztBQUNyQixPQUFPLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO0FBQzFCLE9BQU8sT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUM7QUFDNUIsT0FBTyxPQUFPLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ2pDLElBQUksSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztBQUNsRCxJQUFJLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7QUFDakMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO0FBQ2xDLE1BQU0sSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvQyxNQUFNLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3RFLE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUM7QUFDbkUsS0FBSztBQUNMLElBQUk7QUFDSixNQUFNLE1BQU0sR0FBRyxPQUFPLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUMvRSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUMsQ0FBQztBQUNGO0FBQ0FBLE9BQUssQ0FBQyxpQkFBaUIsR0FBRztBQUMxQixFQUFFLE1BQU0sRUFBRSxVQUFVLElBQUksRUFBRSxPQUFPLEVBQUU7QUFDbkMsSUFBSTtBQUNKLE1BQU0sT0FBTyxDQUFDLGNBQWMsS0FBSyxVQUFVO0FBQzNDLE1BQU0sSUFBSSxDQUFDLFFBQVEsS0FBSyxLQUFLO0FBQzdCLE1BQU0sSUFBSSxDQUFDLFVBQVU7QUFDckIsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsS0FBSyxNQUFNO0FBQ3pDLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxFQUFFLFdBQVcsRUFBRSxVQUFVLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0FBQ2pELElBQUk7QUFDSixNQUFNLFVBQVU7QUFDaEIsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQztBQUMxRCxNQUFNLE1BQU07QUFDWixLQUFLO0FBQ0wsR0FBRztBQUNILENBQUMsQ0FBQztBQUNGO0FBQ0FBLE9BQUssQ0FBQyxlQUFlLEdBQUc7QUFDeEIsRUFBRSxNQUFNLEVBQUUsVUFBVSxJQUFJLEVBQUUsT0FBTyxFQUFFO0FBQ25DLElBQUk7QUFDSixNQUFNLE9BQU8sQ0FBQyxjQUFjLEtBQUssUUFBUTtBQUN6QyxNQUFNLElBQUksQ0FBQyxRQUFRLEtBQUssS0FBSztBQUM3QixNQUFNLElBQUksQ0FBQyxVQUFVO0FBQ3JCLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEtBQUssTUFBTTtBQUN6QyxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsRUFBRSxXQUFXLEVBQUUsVUFBVSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtBQUNqRCxJQUFJLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNoRSxJQUFJLElBQUksUUFBUSxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3hFLElBQUksSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7QUFDM0M7QUFDQSxJQUFJLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzVDLElBQUksSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLElBQUksSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsU0FBUyxHQUFHLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN0RTtBQUNBLElBQUksSUFBSSxLQUFLLENBQUM7QUFDZCxJQUFJLFFBQVEsS0FBSyxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztBQUNsRCxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUU7QUFDeEMsUUFBUSxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDeEMsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLElBQUksSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUM3QztBQUNBLElBQUk7QUFDSixNQUFNLE1BQU0sR0FBRyxLQUFLLEdBQUcsUUFBUSxHQUFHLElBQUk7QUFDdEMsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7QUFDN0IsTUFBTSxJQUFJLEdBQUcsS0FBSyxHQUFHLE1BQU07QUFDM0IsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDLENBQUM7QUFDRjtBQUNBQSxPQUFLLENBQUMsY0FBYyxHQUFHO0FBQ3ZCLEVBQUUsTUFBTSxFQUFFLElBQUk7QUFDZDtBQUNBLEVBQUUsV0FBVyxFQUFFLFVBQVUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7QUFDakQsSUFBSSxPQUFPLE1BQU0sR0FBRyxPQUFPLENBQUMsRUFBRSxHQUFHLE1BQU07QUFDdkMsR0FBRztBQUNILENBQUMsQ0FBQztBQUNGO0FBQ0FBLE9BQUssQ0FBQyxVQUFVLEdBQUc7QUFDbkIsRUFBRSxNQUFNLEVBQUUsVUFBVSxJQUFJLEVBQUUsT0FBTyxFQUFFO0FBQ25DLElBQUk7QUFDSixNQUFNLE9BQU8sQ0FBQyxTQUFTLEtBQUssU0FBUztBQUNyQyxNQUFNLElBQUksQ0FBQyxRQUFRLEtBQUssR0FBRztBQUMzQixNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO0FBQy9CLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxFQUFFLFdBQVcsRUFBRSxVQUFVLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDeEMsSUFBSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3pDLElBQUksSUFBSSxLQUFLLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUMzRCxJQUFJLElBQUksS0FBSyxFQUFFLEtBQUssR0FBRyxJQUFJLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUMxQyxJQUFJLE9BQU8sR0FBRyxHQUFHLE9BQU8sR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUssR0FBRyxHQUFHO0FBQ3BELEdBQUc7QUFDSCxDQUFDLENBQUM7QUFDRjtBQUNBQSxPQUFLLENBQUMsYUFBYSxHQUFHO0FBQ3RCLEVBQUUsTUFBTSxFQUFFLFVBQVUsSUFBSSxFQUFFLE9BQU8sRUFBRTtBQUNuQyxJQUFJO0FBQ0osTUFBTSxPQUFPLENBQUMsU0FBUyxLQUFLLFlBQVk7QUFDeEMsTUFBTSxJQUFJLENBQUMsUUFBUSxLQUFLLEdBQUc7QUFDM0IsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztBQUMvQixLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsRUFBRSxXQUFXLEVBQUUsVUFBVSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtBQUNqRCxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDekMsSUFBSSxJQUFJLEtBQUssR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQzNELElBQUksSUFBSSxLQUFLLEVBQUUsS0FBSyxHQUFHLElBQUksR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDO0FBQzFDLElBQUksSUFBSSxXQUFXLENBQUM7QUFDcEIsSUFBSSxJQUFJLFNBQVMsQ0FBQztBQUNsQjtBQUNBLElBQUksUUFBUSxPQUFPLENBQUMsa0JBQWtCO0FBQ3RDLE1BQU0sS0FBSyxXQUFXO0FBQ3RCLFFBQVEsV0FBVyxHQUFHLEdBQUcsR0FBRyxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBQzVDLFFBQVEsU0FBUyxHQUFHLEdBQUcsR0FBRyxPQUFPLEdBQUcsS0FBSyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7QUFDekQsUUFBUSxLQUFLO0FBQ2IsTUFBTSxLQUFLLFVBQVU7QUFDckIsUUFBUSxXQUFXLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxHQUFHLENBQUM7QUFDMUMsUUFBUSxTQUFTLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxLQUFLLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztBQUN6RCxRQUFRLEtBQUs7QUFDYixNQUFNO0FBQ04sUUFBUSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDNUMsUUFBUSxXQUFXLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztBQUN0RCxRQUFRLFNBQVMsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEtBQUssR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO0FBQ3BELEtBQUs7QUFDTDtBQUNBLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDcEMsSUFBSSxPQUFPLFdBQVc7QUFDdEIsR0FBRztBQUNIO0FBQ0EsRUFBRSxVQUFVLEVBQUUsRUFBRTtBQUNoQjtBQUNBLEVBQUUsTUFBTSxFQUFFLFVBQVUsT0FBTyxFQUFFO0FBQzdCLElBQUksSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO0FBQ3hCLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtBQUNoQyxNQUFNLFVBQVUsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO0FBQ2hFLE1BQU0sSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7QUFDM0IsS0FBSztBQUNMLElBQUksT0FBTyxVQUFVO0FBQ3JCLEdBQUc7QUFDSCxDQUFDLENBQUM7QUFDRjtBQUNBQSxPQUFLLENBQUMsUUFBUSxHQUFHO0FBQ2pCLEVBQUUsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQztBQUNyQjtBQUNBLEVBQUUsV0FBVyxFQUFFLFVBQVUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7QUFDakQsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRTtBQUNsQyxJQUFJLE9BQU8sT0FBTyxDQUFDLFdBQVcsR0FBRyxPQUFPLEdBQUcsT0FBTyxDQUFDLFdBQVc7QUFDOUQsR0FBRztBQUNILENBQUMsQ0FBQztBQUNGO0FBQ0FBLE9BQUssQ0FBQyxNQUFNLEdBQUc7QUFDZixFQUFFLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUM7QUFDekI7QUFDQSxFQUFFLFdBQVcsRUFBRSxVQUFVLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0FBQ2pELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUU7QUFDbEMsSUFBSSxPQUFPLE9BQU8sQ0FBQyxlQUFlLEdBQUcsT0FBTyxHQUFHLE9BQU8sQ0FBQyxlQUFlO0FBQ3RFLEdBQUc7QUFDSCxDQUFDLENBQUM7QUFDRjtBQUNBQSxPQUFLLENBQUMsSUFBSSxHQUFHO0FBQ2IsRUFBRSxNQUFNLEVBQUUsVUFBVSxJQUFJLEVBQUU7QUFDMUIsSUFBSSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7QUFDL0QsSUFBSSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsS0FBSyxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUM7QUFDekU7QUFDQSxJQUFJLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxNQUFNLElBQUksQ0FBQyxXQUFXO0FBQ25ELEdBQUc7QUFDSDtBQUNBLEVBQUUsV0FBVyxFQUFFLFVBQVUsT0FBTyxFQUFFO0FBQ2xDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUU7QUFDM0IsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDaEQ7QUFDQSxJQUFJLElBQUksVUFBVSxHQUFHLHFCQUFxQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ3BFLElBQUksSUFBSSxTQUFTLEdBQUcsR0FBRyxDQUFDO0FBQ3hCLElBQUksSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDOUMsSUFBSSxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxHQUFHLFNBQVMsR0FBRyxHQUFHLENBQUM7QUFDMUU7QUFDQSxJQUFJLE9BQU8sU0FBUyxHQUFHLFVBQVUsR0FBRyxPQUFPLEdBQUcsVUFBVSxHQUFHLFNBQVM7QUFDcEUsR0FBRztBQUNILENBQUMsQ0FBQztBQUNGO0FBQ0FBLE9BQUssQ0FBQyxLQUFLLEdBQUc7QUFDZCxFQUFFLE1BQU0sRUFBRSxLQUFLO0FBQ2Y7QUFDQSxFQUFFLFdBQVcsRUFBRSxVQUFVLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDeEMsSUFBSSxJQUFJLEdBQUcsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDN0MsSUFBSSxJQUFJLEtBQUssR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQzNELElBQUksSUFBSSxTQUFTLEdBQUcsS0FBSyxHQUFHLElBQUksR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNwRCxJQUFJLE9BQU8sR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsU0FBUyxHQUFHLEdBQUcsR0FBRyxFQUFFO0FBQ3BFLEdBQUc7QUFDSCxDQUFDLENBQUM7QUFDRjtBQUNBLFNBQVMsY0FBYyxFQUFFLFNBQVMsRUFBRTtBQUNwQyxFQUFFLE9BQU8sU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7QUFDL0QsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEtBQUssRUFBRSxPQUFPLEVBQUU7QUFDekIsRUFBRSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN6QixFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2xCLEVBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFDcEI7QUFDQSxFQUFFLElBQUksQ0FBQyxTQUFTLEdBQUc7QUFDbkIsSUFBSSxXQUFXLEVBQUUsT0FBTyxDQUFDLGdCQUFnQjtBQUN6QyxHQUFHLENBQUM7QUFDSjtBQUNBLEVBQUUsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDO0FBQ2pEO0FBQ0EsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHO0FBQ3JCLElBQUksV0FBVyxFQUFFLE9BQU8sQ0FBQyxrQkFBa0I7QUFDM0MsR0FBRyxDQUFDO0FBQ0o7QUFDQSxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2xCLEVBQUUsS0FBSyxJQUFJLEdBQUcsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNyRSxDQUFDO0FBQ0Q7QUFDQSxLQUFLLENBQUMsU0FBUyxHQUFHO0FBQ2xCLEVBQUUsR0FBRyxFQUFFLFVBQVUsR0FBRyxFQUFFLElBQUksRUFBRTtBQUM1QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdCLEdBQUc7QUFDSDtBQUNBLEVBQUUsSUFBSSxFQUFFLFVBQVUsTUFBTSxFQUFFO0FBQzFCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7QUFDdkIsTUFBTSxNQUFNLEVBQUUsTUFBTTtBQUNwQixNQUFNLFdBQVcsRUFBRSxJQUFJLENBQUMsZUFBZTtBQUN2QyxLQUFLLENBQUMsQ0FBQztBQUNQLEdBQUc7QUFDSDtBQUNBLEVBQUUsTUFBTSxFQUFFLFVBQVUsTUFBTSxFQUFFO0FBQzVCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7QUFDekIsTUFBTSxNQUFNLEVBQUUsTUFBTTtBQUNwQixNQUFNLFdBQVcsRUFBRSxZQUFZO0FBQy9CLFFBQVEsT0FBTyxFQUFFO0FBQ2pCLE9BQU87QUFDUCxLQUFLLENBQUMsQ0FBQztBQUNQLEdBQUc7QUFDSDtBQUNBLEVBQUUsT0FBTyxFQUFFLFVBQVUsSUFBSSxFQUFFO0FBQzNCLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sSUFBSSxDQUFDLFNBQVM7QUFDM0MsSUFBSSxJQUFJLElBQUksQ0FBQztBQUNiO0FBQ0EsSUFBSSxLQUFLLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE9BQU8sSUFBSTtBQUN0RSxJQUFJLEtBQUssSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTyxJQUFJO0FBQ3RFLElBQUksS0FBSyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPLElBQUk7QUFDeEU7QUFDQSxJQUFJLE9BQU8sSUFBSSxDQUFDLFdBQVc7QUFDM0IsR0FBRztBQUNIO0FBQ0EsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUU7QUFDekIsSUFBSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckUsR0FBRztBQUNILENBQUMsQ0FBQztBQUNGO0FBQ0EsU0FBUyxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7QUFDekMsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN6QyxJQUFJLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4QixJQUFJLElBQUksV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUUsT0FBTyxJQUFJO0FBQ3JELEdBQUc7QUFDSCxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQUNEO0FBQ0EsU0FBUyxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7QUFDM0MsRUFBRSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQzNCLEVBQUUsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUU7QUFDbEMsSUFBSSxJQUFJLE1BQU0sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxFQUFFLE9BQU8sSUFBSTtBQUMzRCxHQUFHLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO0FBQ3BDLElBQUksSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLElBQUk7QUFDckUsR0FBRyxNQUFNLElBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxFQUFFO0FBQzNDLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUUsT0FBTyxJQUFJO0FBQ3JELEdBQUcsTUFBTTtBQUNULElBQUksTUFBTSxJQUFJLFNBQVMsQ0FBQyxtREFBbUQsQ0FBQztBQUM1RSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsa0JBQWtCLEVBQUUsT0FBTyxFQUFFO0FBQ3RDLEVBQUUsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztBQUNoQyxFQUFFLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7QUFDaEMsRUFBRSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxD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
