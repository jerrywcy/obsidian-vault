---
language: python
name: feedparser
---
标签： #Python/模块文档/Incomplete
# 基础特性

## 简介

**Universal Feed Parser**是一个Python库，用于下载和解析各种feed。

它可以处理RSS 0.90, Netscape RSS 0.91, Userland RSS 0.91, RSS 0.92, RSS 0.93, RSS 0.94, RSS 1.0, RSS 2.0, Atom 0.3, Atom 1.0 和 CDF。

它也可以解析一些热门的扩展库，比如 Dublin Core和苹果的Itunes扩展。

要使用**Universal Feed Parser**，你的**Python版本应不低于3.6**。

库本身在一个单独的文件`feedparser.py`中且有一个主函数`parse`。`parse`接受很多输入，但只有一个是必须的。它可以是一个URL，一个本地文件名，或者一个包含着任意格式feed数据的字符串。

### 从URL解析feed

```python
>>> import feedparser
>>> d = feedparser.parse('http://feedparser.org/docs/examples/atom10.xml')
>>> d['feed']['title']
u'Sample Feed'
```

### 从本地文件解析feed

以下的例子假设你的系统为Windows，而且你在`C:\incoming\atom10.xml`处保存了一个feed。

```ad-info
title: 注意
**Universal Feed Parser**可以在任何支持Python的平台上运行；请使用与你的平台相符合的路径格式。
```

```python
>>> import feedparser
>>> d = feedparser.parse(r'c:\incoming\atom10.xml')
>>> d['feed']['title']
u'Sample Feed'
```

**Universal Feed Parser**也可以处理内存里的feed。

### 从字符串解析feed
```python
>>> import feedparser
>>> d = feedparser.parse(r'c:\incoming\atom10.xml')
>>> d['feed']['title']
u'Sample Feed'
```

函数将返回 Python Unicode 字符串（除非特殊情况——见[[Universal Feed Parser#检测字符编码]]一节）

```ad-info 
title: 参见
[Python Unicode字符串的介绍](http://docs.python.org/tut/node5.html#SECTION005130000000000000000)
```

## 常见的RSS元素

RSS feeds中最常使用的元素（不论是哪个版本）包括标题，链接，描述，发布日期和条目ID。其中发布日期来自于元素pubDate，而条目ID来自于元素guid。

以下的样例RSS feed可以于[http://feedparser.org/docs/examples/rss20.xml](http://feedparser.org/docs/examples/rss20.xml)处访问。

```xml
<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0">
	<channel>
	<title>Sample Feed</title>
	<description>For documentation &lt;em&gt;only&lt;/em&gt;</description>
	<link>http://example.org/</link>
	<pubDate>Sat, 07 Sep 2002 00:00:01 GMT</pubDate>
	<!-- other elements omitted from this example -->
	<item>
		<title>First entry title</title>
		<link>http://example.org/entry/3</link>
		<description>Watch out for &lt;span style="background-image:
		url(javascript:window.location='http://example.org/')"&gt;nasty
		tricks&lt;/span&gt;</description>
		<pubDate>Thu, 05 Sep 2002 00:00:01 GMT</pubDate>
		<guid>http://example.org/entry/3</guid>
		<!-- other elements omitted from this example -->
	</item>
	</channel>
</rss>
```

### 获取常见的channel元素

channel元素在`d.feed`中。

```python
>>> import feedparser
>>> d = feedparser.parse('http://feedparser.org/docs/examples/rss20.xml')
>>> d.feed.title
u'Sample Feed'
>>> d.feed.link
u'http://example.org/'
>>> d.feed.description
u'For documentation <em>only</em>'
>>> d.feed.published
u'Sat, 07 Sep 2002 00:00:01 GMT'
>>> d.feed.published_parsed
(2002, 9, 7, 0, 0, 1, 5, 250, 0)
```

### 获取常见的item元素

条目在列表`d.entries`中。你访问条目的顺序和它们在原来的feed中的顺序一样，因此第一个条目在`d.entries[0]`中。

```python
>>> import feedparser
>>> d = feedparser.parse('http://feedparser.org/docs/examples/rss20.xml')
>>> d.entries[0].title
u'First item title'
>>> d.entries[0].link
u'http://example.org/item/1'
>>> d.entries[0].description
u'Watch out for <span>nasty tricks</span>'
>>> d.entries[0].published
u'Thu, 05 Sep 2002 00:00:01 GMT'
>>> d.entries[0].published_parsed
(2002, 9, 5, 0, 0, 1, 3, 248, 0)
>>> d.entries[0].id
u'http://example.org/guid/1'
```

```ad-tip
title: 提示
你也可以使用Atom的术语获取RSS feeds中的数据。见[[Universal Feed Parser#内容规范化]]
```

## 常见的Atom元素
Atom feeds通常包含比RSS feeds更多的信息（因为Atom要求更多的元素），但是最常用的元素仍然是标题，链接，副标题/描述，各种日期和ID。
以下的样例Atom feed可以于[http://feedparser.org/docs/examples/atom10.xml](http://feedparser.org/docs/examples/atom10.xml)处访问。

```xml
<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom"
	  xml:base="http://example.org/"
	  xml:lang="en">
	<title type="text">Sample Feed</title>
	<subtitle type="html">
		For documentation &lt;em&gt;only&lt;/em&gt;
	</subtitle>
	<link rel="alternate" href="/"/>
	<link rel="self"
		  type="application/atom+xml"
		  href="http://www.example.org/atom10.xml"/>
	<rights type="html">
		&lt;p>Copyright 2005, Mark Pilgrim&lt;/p>&lt;
	</rights>
	<id>tag:feedparser.org,2005-11-09:/docs/examples/atom10.xml</id>
	<generator
	uri="http://example.org/generator/"
	version="4.0">
		Sample Toolkit
	</generator>
	<updated>2005-11-09T11:56:34Z</updated>
	<entry>
		<title>First entry title</title>
		<link rel="alternate"
			  href="/entry/3"/>
		<link rel="related"
			  type="text/html"
			  href="http://search.example.com/"/>
		<link rel="via"
			  type="text/html"
			  href="http://toby.example.com/examples/atom10"/>
		<link rel="enclosure"
			  type="video/mpeg4"
			  href="http://www.example.com/movie.mp4"
			  length="42301"/>
		<id>tag:feedparser.org,2005-11-09:/docs/examples/atom10.xml:3</id>
		<published>2005-11-09T00:23:47Z</published>
		<updated>2005-11-09T11:56:34Z</updated>
		<summary type="text/plain" mode="escaped">Watch out for nasty tricks</summary>
		<content type="application/xhtml+xml" mode="xml"
				 xml:base="http://example.org/entry/3" xml:lang="en-US">
			<div xmlns="http://www.w3.org/1999/xhtml">Watch out for
				<span style="background: url(javascript:window.location='http://example.org/')">
				nasty tricks</span>
			</div>
		</content>
	</entry>
</feed>
```

### 获取常见的feed元素

feed元素在`d.feed`中。

```python
>>> import feedparser
>>> d = feedparser.parse('http://feedparser.org/docs/examples/atom10.xml')
>>> d.feed.title
u'Sample feed'
>>> d.feed.link
u'http://example.org/'
>>> d.feed.subtitle
u'For documentation <em>only</em>'
>>> d.feed.updated
u'2005-11-09T11:56:34Z'
>>> d.feed.updated_parsed
(2005, 11, 9, 11, 56, 34, 2, 313, 0)
>>> d.feed.id
u'tag:feedparser.org,2005-11-09:/docs/examples/atom10.xml'
```

### 获取常见的条目元素

条目在列表`d.entries`中。你访问条目的顺序和它们在原来的feed中的顺序一样，因此第一个条目在`d.entries[0]`中。

```python
>>> import feedparser
>>> d = feedparser.parse('http://feedparser.org/docs/examples/atom10.xml')
>>> d.entries[0].title
u'First entry title'
>>> d.entries[0].link
u'http://example.org/entry/3
>>> d.entries[0].id
u'tag:feedparser.org,2005-11-09:/docs/examples/atom10.xml:3'
>>> d.entries[0].published
u'2005-11-09T00:23:47Z'
>>> d.entries[0].published_parsed
(2005, 11, 9, 0, 23, 47, 2, 313, 0)
>>> d.entries[0].updated
u'2005-11-09T11:56:34Z'
>>> d.entries[0].updated_parsed
(2005, 11, 9, 11, 56, 34, 2, 313, 0)
>>> d.entries[0].summary
u'Watch out for nasty tricks'
>>> d.entries[0].content
[{'type': u'application/xhtml+xml',
'base': u'http://example.org/entry/3',
'language': u'en-US',
'value': u'<div>Watch out for <span>nasty tricks</span></div>'}]
```

```ad-info
注意到上面解析出来的summary和content并不是它们在原来的feed中的样子。原来的元素中包含的危险HTML元素已经被清洗掉。具体参见[[Universal Feed Parser#HTML清洗]]
```

Atom条目中的content可以包含多个元素，因此`d.entries[0].content`是一个元素为字典的列表。每个字典包含描述content中一个元素的元数据。字典中最重要的两个值是content的类型（在`d.entries[0].content[0].type`中）和真正的content值（在`d.entries[0].content[0].value`中）。

你也可以从其他Atom元素中获取同等级别的详细信息。

#### 获取关于Atom元素的详细信息

某些Atom元素的内容有同样模板：标题，副标题，版权所有，总结，当然还有内容。（Atom 0.3种还有一个info元素的内容也遵循相同的模板。）
**Universal Feed Parser**会捕获所有有关这些元素的元数据，其中最重要的是内容类型和内容的值本身。

##### 有关Atom元素的详细信息

```python
>>> import feedparser
>>> d = feedparser.parse('http://feedparser.org/docs/examples/atom10.xml')
>>> d.feed.title_detail
{'type': u'text/plain',
'base': u'http://example.org/',
'language': u'en',
'value': u'Sample Feed'}
>>> d.feed.subtitle_detail
{'type': u'text/html',
'base': u'http://example.org/',
'language': u'en',
'value': u'For documentation <em>only</em>'}
>>> d.feed.rights_detail
{'type': u'text/html',
'base': u'http://example.org/',
'language': u'en',
'value': u'<p>Copyright 2004, Mark Pilgrim</p>'}
>>> d.entries[0].title_detail
{'type': 'text/plain',
'base': u'http://example.org/',
'language': u'en',
'value': u'First entry title'}
>>> d.entries[0].summary_detail
{'type': u'text/plain',
'base': u'http://example.org/',
'language': u'en',
'value': u'Watch out for nasty tricks'}
>>> len(d.entries[0].content)
1
>>> d.entries[0].content[0]
{'type': u'application/xhtml+xml',
'base': u'http://example.org/entry/3',
'language': u'en-US'
'value': u'<div>Watch out for <span> nasty tricks</span></div>'}
```

## 少见的RSS元素

这些元素更加少见，但是对于特殊的应用很有帮助，而且可能出现在任何RSS feed中。

### 获取feed图像

RSS feed可以指定一个小图像，某些聚合阅读器将它们作为该feed的logo。

```python
>>> import feedparser
>>> d = feedparser.parse('http://feedparser.org/docs/examples/rss20.xml')
>>> d.feed.image
{'title': u'Example banner',
'href': u'http://example.org/banner.png',
'width': 80,
'height': 15,
'link': u'http://example.org/'}
```

### 获取多个分类

feeds和条目可以被分配到多个category，而且在某些版本的RSS中，category可以与一个“domain”相关联。

```python
>>> import feedparser
>>> d = feedparser.parse('http://feedparser.org/docs/examples/rss20.xml')
>>> d.feed.categories
[(u'Syndic8', u'1024'),
(u'dmoz', 'Top/Society/People/Personal_Homepages/P/')]
```

### 获取附件

RSS feed中的每个item都可以有一个“enclosure”，即一个指向外部文件的链接（通常是一个音乐或者视频文件，但是任何类型的文件都可以“被附上”）。这种用法以前很罕见，但现在由于播客的崛起而流行起来。某些客户端（比如苹果的**iTunes**）会自动下载enclosure，而其他的客户端（例如Bloglines的网页端）只会简单地把enclosure渲染成链接。

RSS specification宣称每个item至多有一个enclosure。然而Atom的条目可能附有多个enclosure，因此**Universal Feed Parser**会捕获所有的enclosure并将它们存储在列表中。

```python
>>> import feedparser
>>> d = feedparser.parse('http://feedparser.org/docs/examples/rss20.xml')
>>> e = d.entries[0]
>>> len(e.enclosures)
1
>>> e.enclosures[0]
{'type': u'audio/mpeg',
'length': u'1069871',
'href': u'http://example.org/audio/demo.mp3'}
```

### 获取feed云

没有人知道cloud到底是什么。

```python
>>> import feedparser
>>> d = feedparser.parse('http://feedparser.org/docs/examples/rss20.xml')
>>> e = d.entries[0]
>>> len(e.enclosures)
1
>>> e.enclosures[0]
{'type': u'audio/mpeg',
'length': u'1069871',
'href': u'http://example.org/audio/demo.mp3'}
```

```ad-info
更多获取RSS元素的范例详见附加样例：[[Universal Feed Parser#RSS 1.0|RSS 1.0]]，[[Universal Feed Parser#RSS 2.0|RSS 2.0]]和[[Universal Feed Parser#带Namespaces的RSS 2.0|带Namespaces的RSS 2.0]]
```

# References

-   [Documentation — feedparser 6.0.2 documentation](https://feedparser.readthedocs.io/en/latest/index.html)