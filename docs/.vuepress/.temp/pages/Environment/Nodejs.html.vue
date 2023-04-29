<template><div><p><strong>1、ubuntu 上安装 Nodejs 环境</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> purge nodejs
<span class="token function">sudo</span> <span class="token function">apt</span> autoremove 
<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token function">curl</span>
<span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://deb.nodesource.com/setup_18.x <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token parameter variable">-E</span> <span class="token function">bash</span> -
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> nodejs build-essential <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2、查看 Nodejs 版本</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">node</span> <span class="token parameter variable">--version</span>
<span class="token comment"># node -v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3、安装包管理工具</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>
<span class="token comment"># yarn 推荐</span>
<span class="token function">sudo</span> corepack <span class="token builtin class-name">enable</span> <span class="token function">yarn</span>
<span class="token function">yarn</span> <span class="token parameter variable">--version</span>

<span class="token comment"># npm</span>
<span class="token function">sudo</span> corepack <span class="token builtin class-name">enable</span> <span class="token function">npm</span>
<span class="token function">npm</span> <span class="token parameter variable">--version</span>

<span class="token builtin class-name">export</span> <span class="token assign-left variable">NODE_OPTIONS</span><span class="token operator">=</span>--openssl-legacy-provider
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


