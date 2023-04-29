<template><div><p>查看当前目录和子目录文件/文件夹大小，disk usage</p>
<p>1、查看当前目录总大小</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">du</span> <span class="token parameter variable">-sh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、查看当前目录所有子目录大小</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">du</span> <span class="token parameter variable">-sh</span> *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、查看当前目录和所有子目录大小，最后一行会显示当前目录的总大小，不包括隐藏文件</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">du</span> <span class="token parameter variable">-ach</span> *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4、查看某个文件大小 <code v-pre>-h</code> 表示以 <code v-pre>K M G</code> 为单位显示</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">du</span> <span class="token parameter variable">-h</span> file_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


