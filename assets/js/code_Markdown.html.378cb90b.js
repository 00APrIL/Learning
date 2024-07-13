"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[1765],{9874:(i,s)=>{s.A=(i,s)=>{const e=i.__vccOpts||i;for(const[i,n]of s)e[i]=n;return e}},8806:(i,s,e)=>{e.r(s),e.d(s,{comp:()=>l,data:()=>r});var n=e(2360);const a=[(0,n.Fv)('<p>Markdown 是一种轻量级标记语言，易读易写，并对于图片、图表、数学式都有支持，目前许多网站与应用都支持了 Markdown。</p><p>Markdown 入门：<a href="https://docs.github.com/cn/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#styling-text" target="_blank" rel="noopener noreferrer">Markdown 基本撰写和格式语法</a>，<a href="https://theme-hope.vuejs.press/zh/cookbook/markdown/" target="_blank" rel="noopener noreferrer">Markdown 转 HTML 语法介绍</a></p><h2 id="图片尺寸" tabindex="-1"><a class="header-anchor" href="#图片尺寸"><span>图片尺寸</span></a></h2><p>md 格式调整图片尺寸，在不同编辑器中显示效果不同，不一定会生效。使用 html 格式调整图片尺寸能确保成功率。</p><div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">&lt;!-- 按页面宽度的 60% 来缩小 --&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> width</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;60%&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">&lt;!-- md 图片设置，有时不能被识别 --&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">![同时设置宽度和高度](https://files.mdnice.com/logo.png =150x150)</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">![只设置宽度，推荐使用百分比](https://files.mdnice.com/logo.png =40%x)</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">&lt;!-- 指针移动到图片时，显示图片说明 --&gt;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">![name](https://docsify.js.org/_media/icon.svg &quot;图片说明&quot;)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>七牛云图床提供<a href="https://developer.qiniu.com/dora/kb/1627/flow-optimization-compression-of-images" target="_blank" rel="noopener noreferrer">图片流量优化压缩策略</a>，可用于调整图片的分辨率、大小和格式，具体参数请参考<a href="https://developer.qiniu.com/dora/8255/the-zoom" target="_blank" rel="noopener noreferrer">七牛云图片高级处理</a>。此外，我还会定期使用 PP 鸭对图床中的图片进行重新压缩。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">&lt;!-- 按图片尺寸的 60% 等比缩小 --&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">?imageMogr2/thumbnail/!60p</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">&lt;!-- 指定图片宽度 --&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">?imageMogr2/thumbnail/500x</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">&lt;!-- 指定宽度，调整质量，改变格式 --&gt;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">?imageMogr2/thumbnail/500x/strip/quality/50/format/webp</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="资料引用" tabindex="-1"><a class="header-anchor" href="#资料引用"><span>资料引用</span></a></h2><p>文章中加 <code>^[引用内容]</code> 会在底部自动添加引用资料。如果想添加链接标题，则为 <code>^[[标题](链接)]</code>。</p><p>如果同一引用要在多个地方使用，则需要手动编号。</p><div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">这是一条引用 [</span><span style="--shiki-light:#032F62;--shiki-dark:#61AFEF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:inherit;">^1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">这是一条引用 [</span><span style="--shiki-light:#032F62;--shiki-dark:#61AFEF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:inherit;">^2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">这是一条引用 [</span><span style="--shiki-light:#032F62;--shiki-dark:#61AFEF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:inherit;">^1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">这是一条引用 [</span><span style="--shiki-light:#032F62;--shiki-dark:#61AFEF;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:inherit;">^3</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D19A66;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#D19A66;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:inherit;">^1</span><span style="--shiki-light:#24292E;--shiki-dark:#D19A66;">]</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#C678DD;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">链接</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D19A66;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#D19A66;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:inherit;">^2</span><span style="--shiki-light:#24292E;--shiki-dark:#D19A66;">]</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#C678DD;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">[标题]</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:inherit;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:inherit;">链接</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:inherit;">)</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D19A66;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#D19A66;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:inherit;">^3</span><span style="--shiki-light:#24292E;--shiki-dark:#D19A66;">]</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#C678DD;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">&lt;br&gt;![图片描述]</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:inherit;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:inherit;">图片链接</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:inherit;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码块自动换行" tabindex="-1"><a class="header-anchor" href="#代码块自动换行"><span>代码块自动换行</span></a></h2><p>自动换行需要 css 支持，暂不能自动启用。</p><h2 id="整段删除线" tabindex="-1"><a class="header-anchor" href="#整段删除线"><span>整段删除线</span></a></h2><p><code>~~</code> 只支持对本行内容添加删除线。</p><p>如果要对大段内容添加删除线，可以用 HTML 标签 <code>&lt;s&gt;</code> 和 <code>&lt;/s&gt;</code>，被该标签包围的内容会全部添加删除线。VuePress 暂不支持该代码，会将标签识别为不完整而报错。</p>',16)],t={},l=(0,e(9874).A)(t,[["render",function(i,s){return(0,n.uX)(),(0,n.CE)("div",null,a)}]]),r=JSON.parse('{"path":"/code/Markdown.html","title":"Markdown","lang":"zh-CN","frontmatter":{"article":false,"title":"Markdown","icon":"fa-brands fa-markdown","order":5,"description":"Markdown 是一种轻量级标记语言，易读易写，并对于图片、图表、数学式都有支持，目前许多网站与应用都支持了 Markdown。 Markdown 入门：Markdown 基本撰写和格式语法，Markdown 转 HTML 语法介绍 图片尺寸 md 格式调整图片尺寸，在不同编辑器中显示效果不同，不一定会生效。使用 html 格式调整图片尺寸能确保成功...","head":[["meta",{"property":"og:url","content":"https://newzone.top/code/Markdown.html"}],["meta",{"property":"og:site_name","content":"LearnData 开源笔记"}],["meta",{"property":"og:title","content":"Markdown"}],["meta",{"property":"og:description","content":"Markdown 是一种轻量级标记语言，易读易写，并对于图片、图表、数学式都有支持，目前许多网站与应用都支持了 Markdown。 Markdown 入门：Markdown 基本撰写和格式语法，Markdown 转 HTML 语法介绍 图片尺寸 md 格式调整图片尺寸，在不同编辑器中显示效果不同，不一定会生效。使用 html 格式调整图片尺寸能确保成功..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:image","content":"https://files.mdnice.com/logo.png =150x150"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-04T01:53:51.000Z"}],["meta",{"property":"article:author","content":"LearnData"}],["meta",{"property":"article:modified_time","content":"2024-04-04T01:53:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Markdown\\",\\"description\\":\\"Markdown 是一种轻量级标记语言，易读易写，并对于图片、图表、数学式都有支持，目前许多网站与应用都支持了 Markdown。 Markdown 入门：Markdown 基本撰写和格式语法，Markdown 转 HTML 语法介绍 图片尺寸 md 格式调整图片尺寸，在不同编辑器中显示效果不同，不一定会生效。使用 html 格式调整图片尺寸能确保成功...\\"}"]]},"headers":[{"level":2,"title":"图片尺寸","slug":"图片尺寸","link":"#图片尺寸","children":[]},{"level":2,"title":"资料引用","slug":"资料引用","link":"#资料引用","children":[]},{"level":2,"title":"代码块自动换行","slug":"代码块自动换行","link":"#代码块自动换行","children":[]},{"level":2,"title":"整段删除线","slug":"整段删除线","link":"#整段删除线","children":[]}],"git":{"createdTime":1658511538000,"updatedTime":1712195631000,"contributors":[{"name":"rockbenben","email":"qingwhat@gmail.com","commits":12}]},"readingTime":{"minutes":1.81,"words":544},"filePathRelative":"code/Markdown.md","localizedDate":"2022年7月22日","excerpt":"<p>Markdown 是一种轻量级标记语言，易读易写，并对于图片、图表、数学式都有支持，目前许多网站与应用都支持了 Markdown。</p>\\n<p>Markdown 入门：<a href=\\"https://docs.github.com/cn/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#styling-text\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Markdown 基本撰写和格式语法</a>，<a href=\\"https://theme-hope.vuejs.press/zh/cookbook/markdown/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Markdown 转 HTML 语法介绍</a></p>","autoDesc":true}')}}]);