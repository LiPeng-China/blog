<template><div><h2 id="一、配置信息" tabindex="-1"><a class="header-anchor" href="#一、配置信息" aria-hidden="true">#</a> 一、配置信息</h2>
<p>1、显示当前的配置信息</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--list</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、设置提交代码的用户信息</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">"taiyi"</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email your_email@taiyi.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、生成秘钥" tabindex="-1"><a class="header-anchor" href="#二、生成秘钥" aria-hidden="true">#</a> 二、生成秘钥</h2>
<p>1、生成 SSH Key</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">"your_email@taiyi.com"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、将生成的公钥 <code v-pre>id_rsa.pub</code> ，配置在 <code v-pre>github</code> 账号上</p>
<p>3、验证是否成功</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@github.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4、在 <code v-pre>Github</code> 上新建仓库</p>
<h2 id="三、初始化" tabindex="-1"><a class="header-anchor" href="#三、初始化" aria-hidden="true">#</a> 三、初始化</h2>
<p>1、添加 README</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code> <span class="token builtin class-name">echo</span> <span class="token string">"# Note"</span> <span class="token operator">>></span> README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、git 初始化</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、添加文件</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4、提交</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">"初始化"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="四、添加远程仓库" tabindex="-1"><a class="header-anchor" href="#四、添加远程仓库" aria-hidden="true">#</a> 四、添加远程仓库</h2>
<p>1、添加远程仓库地址</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> origin git@github.com:LiPeng-China/notes.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、查看远程仓库</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> remote <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、删除远程仓库</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">rm</span> origin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="五、查看分支" tabindex="-1"><a class="header-anchor" href="#五、查看分支" aria-hidden="true">#</a> 五、查看分支</h2>
<p>1、查看当前项目分支</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、拉取新的分支</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch branch_new_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、切换到新的分支</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout branch_new_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4、拉取新的分支并切换 <code v-pre>-b</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">-b</span> branch_new_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>5、删除分支</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">-d</span> branch_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>6、合并到主分支</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> merge branch_new_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="六、提交远程仓库" tabindex="-1"><a class="header-anchor" href="#六、提交远程仓库" aria-hidden="true">#</a> 六、提交远程仓库</h2>
<p>1、提交到远程仓库</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


