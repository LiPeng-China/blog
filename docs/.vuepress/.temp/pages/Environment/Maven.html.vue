<template><div><p>1、官网下载</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># https://maven.apache.org/download.cgi</span>
<span class="token function">wget</span> https://dlcdn.apache.org/maven/maven-3/3.9.1/binaries/apache-maven-3.9.1-bin.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2、解压文件</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> apache-maven-3.9.1-bin.tar.gz <span class="token parameter variable">-C</span> /usr/local/maven/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、配置 Maven环境变量</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># vim /etc/profile</span>

<span class="token builtin class-name">export</span> <span class="token assign-left variable">MAVEN_HOME</span><span class="token operator">=</span>/usr/local/maven/apache-maven-3.9.1
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span><span class="token variable">${MAVEN_HOME}</span>/lib:<span class="token variable">$CLASSPATH</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">${MAVEN_HOME}</span>/bin:<span class="token environment constant">$PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、配置文件生效</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>5、查看版本</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>mvn <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


