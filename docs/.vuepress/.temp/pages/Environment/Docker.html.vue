<template><div><h3 id="_1、使用-root-用户安装" tabindex="-1"><a class="header-anchor" href="#_1、使用-root-用户安装" aria-hidden="true">#</a> 1、使用 <code v-pre>root</code> 用户安装</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://get.docker.com <span class="token parameter variable">-o</span> get-docker.sh
<span class="token function">sudo</span> <span class="token function">sh</span> get-docker.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、将普通用户添加到-docker-组" tabindex="-1"><a class="header-anchor" href="#_2、将普通用户添加到-docker-组" aria-hidden="true">#</a> 2、将普通用户添加到 <code v-pre>docker</code> 组</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code> <span class="token comment">#将普通用户username加入到docker组</span>
<span class="token function">sudo</span> gpasswd <span class="token parameter variable">-a</span> username <span class="token function">docker</span>

<span class="token comment">#更新docker组</span>
newgrp <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、验证" tabindex="-1"><a class="header-anchor" href="#_3、验证" aria-hidden="true">#</a> 3、验证</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> run hello-world

<span class="token comment"># 或者查看 docker 版本</span>
<span class="token function">docker</span> <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


