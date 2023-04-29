<template><div><h2 id="一、卸载" tabindex="-1"><a class="header-anchor" href="#一、卸载" aria-hidden="true">#</a> 一、卸载</h2>
<p>1.1、检查安装了哪个 <code v-pre>JDK</code> 包</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>dpkg <span class="token parameter variable">--list</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> jdk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>1.2、移除 <code v-pre>jdk</code> 包</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> purge openjdk*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>1.3、卸载 <code v-pre>jdk</code> 相关包</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> purge icedtea-* openjdk-*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>1.4、检查所有 <code v-pre>JDK</code> 包是否都已卸载完毕</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>dpkg <span class="token parameter variable">--list</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> jdk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="二、安装" tabindex="-1"><a class="header-anchor" href="#二、安装" aria-hidden="true">#</a> 二、安装</h2>
<p>2.1、官网下载 jdk</p>
<p>2.2、解压到指定目录</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> jdk-8u361-linux-x64.tar.gz <span class="token parameter variable">-C</span> /usr/local/java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.3、配置环境变量</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># /etc/profile</span>

<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/local/java/jdk1.8.0_361
<span class="token builtin class-name">export</span> <span class="token assign-left variable">JRE_HOME</span><span class="token operator">=</span><span class="token variable">${JAVA_HOME}</span>/jre  
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>.:<span class="token variable">${JAVA_HOME}</span>/lib:<span class="token variable">${JRE_HOME}</span>/lib  
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">${JAVA_HOME}</span>/bin:<span class="token environment constant">$PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.4、初始化 profile 文件</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.5、查看版本</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


