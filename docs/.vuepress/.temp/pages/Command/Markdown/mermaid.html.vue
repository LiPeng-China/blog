<template><div><h2 id="一、前言" tabindex="-1"><a class="header-anchor" href="#一、前言" aria-hidden="true">#</a> 一、前言</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>``<span class="token variable"><span class="token variable">`</span>mermaid
	各种图代码
<span class="token variable">`</span></span>``
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、流程图" tabindex="-1"><a class="header-anchor" href="#二、流程图" aria-hidden="true">#</a> 二、流程图</h2>
<h3 id="流程图声明" tabindex="-1"><a class="header-anchor" href="#流程图声明" aria-hidden="true">#</a> 流程图声明</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>graph TB
	<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
	<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>TB: Top Bottom 从上向下布局
BT
LR: Left Right
RL</p>
</blockquote>
<h3 id="节点的画法" tabindex="-1"><a class="header-anchor" href="#节点的画法" aria-hidden="true">#</a> 节点的画法</h3>
<p>四种节点：圆角矩形、矩形、菱形、圆形</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>graph LR
    A<span class="token punctuation">(</span>圆角矩形<span class="token punctuation">)</span>
    B<span class="token punctuation">[</span>矩形<span class="token punctuation">]</span>
    C<span class="token punctuation">{</span>菱形<span class="token punctuation">}</span>
    D<span class="token variable"><span class="token punctuation">((</span>圆<span class="token punctuation">))</span></span>
    D<span class="token operator">></span>右向旗帜<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><Mermaid id="mermaid-23" code="eJxLL0osyFAIceJSAAJHjadz2l4sn/R8/sqnexdpgsWcoiG8WDDPufpF/0YgrxbMc9EAadCEKHS1e9q/+emEic+mT3+6Y04sFwCGgyYN"></Mermaid><h3 id="线段的画法" tabindex="-1"><a class="header-anchor" href="#线段的画法" aria-hidden="true">#</a> 线段的画法</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>graph TB
	<span class="token comment"># 实线</span>
	P --- Q
	<span class="token comment"># 虚线</span>
	A -.- B
	<span class="token comment"># 箭头实线</span>
	C --<span class="token operator">></span> D
	<span class="token comment"># 箭头虚线</span>
	E -.-<span class="token operator">></span> F
	<span class="token comment"># 文本箭头实线</span>
	G --Y--<span class="token operator">></span> H
	<span class="token comment"># 文本箭头虚线</span>
	I -.N.-<span class="token operator">></span> K
	<span class="token comment"># 文本实线</span>
	S --Y--- T
	<span class="token comment"># 文本虚线</span>
	X -.Y.- Z
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><Mermaid id="mermaid-28" code="eJwlzLsJgEAQBNB4poppYC3hwL8iiOIFnpmRhmL/gXuYvuBd7/ncihWxyMy0EqWsMLnULkEN0WYJ6ojeKWUdiNF1zj4R2++mSOzuyYeDH1G3EWA="></Mermaid><h2 id="三、类图" tabindex="-1"><a class="header-anchor" href="#三、类图" aria-hidden="true">#</a> 三、类图</h2>
<h3 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h3>
<p>在类图中，一个类由三部分组成：</p>
<ul>
<li>类名称：在类图的最顶端</li>
<li>类属性：在类图的中间层</li>
<li>类方法：在类图的最下层</li>
</ul>
<h3 id="类图声明" tabindex="-1"><a class="header-anchor" href="#类图声明" aria-hidden="true">#</a> 类图声明</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>classDiagram
	<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
	<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类定义" tabindex="-1"><a class="header-anchor" href="#类定义" aria-hidden="true">#</a> 类定义</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>classDiagram
	class User
	Object <span class="token operator">&lt;</span><span class="token operator">|</span>-- People
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><Mermaid id="mermaid-63" code="eJxLzkksLnbJTEwvSszl4gTzFEKLU4u4OP2TslKTSxRsanR1FQJS8wtyUrkAZdsO3w=="></Mermaid><h3 id="类成员定义" tabindex="-1"><a class="header-anchor" href="#类成员定义" aria-hidden="true">#</a> 类成员定义</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>classDiagram
	class User
	User: <span class="token parameter variable">-String</span> name
	User: +int age
	User: +getName<span class="token punctuation">(</span><span class="token punctuation">)</span>
	User: +setName<span class="token punctuation">(</span>String name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><Mermaid id="mermaid-68" code="eJxLzkksLnbJTEwvSszl4gTzFEKLU4u4OEGklYJucElRZl66Ql5ibipMTDszr0QhMR3BT08t8QPKa2jCRYqhIki6NbkAjFMi1A=="></Mermaid><div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>classDiagram
	class User<span class="token punctuation">{</span>
		<span class="token operator">&lt;&lt;</span>interface<span class="token operator">>></span>
		<span class="token parameter variable">-String</span> name
		+int age
		+getName<span class="token punctuation">(</span><span class="token punctuation">)</span> String
		+setName<span class="token punctuation">(</span>String Name<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><Mermaid id="mermaid-70" code="eJxLzkksLnbJTEwvSszl4gTzFEKLU4uquTg5bWwy80pSi9ISk1Pt7IB83eCSosy8dIW8xNxUIFcbKKuQmA5mpqeW+AFFNTQVIGpAYsVQMaguEFuTi7OWCwBCISNX"></Mermaid><h3 id="类之间的关系" tabindex="-1"><a class="header-anchor" href="#类之间的关系" aria-hidden="true">#</a> 类之间的关系</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>``<span class="token variable"><span class="token variable">`</span>mermaid
classDiagram
  classA --<span class="token operator">|</span><span class="token operator">></span> classB <span class="token builtin class-name">:</span> 继承
  classC --* classD <span class="token builtin class-name">:</span> 组成
  classE <span class="token parameter variable">--o</span> classF <span class="token builtin class-name">:</span> 集合
  classG --<span class="token operator">></span> classH <span class="token builtin class-name">:</span> 关联
  classI -- classJ <span class="token builtin class-name">:</span> 实线连接
  classK <span class="token punctuation">..</span><span class="token operator">></span> classL <span class="token builtin class-name">:</span> 依赖
  classM <span class="token punctuation">..</span><span class="token operator">|</span><span class="token operator">></span> classN <span class="token builtin class-name">:</span> 实现
  classO <span class="token punctuation">..</span> classP <span class="token builtin class-name">:</span> 虚线连接
<span class="token variable">`</span></span>``
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><Mermaid id="mermaid-75" code="eJxLzkksLnbJTEwvSszlUlAAcx0VdHVr7CBsJwUrhee7lz/r3A+TdQbKakGYLmDJlmcdE2CSrkDJfAjTDSj5cnbb0wkdMEl3oCTUWA+g5NPWzS8ap8AkPYGSEJYXSG7dvOe79r/YP+9Z31KYCm8FPT2odh+gkif75r7YOg0m6QuUhLnZD2pA3waYrD9QFsIKAMq9mDkLYTgA7jVjiQ=="></Mermaid></div></template>


