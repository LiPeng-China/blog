<template><div><h2 id="cat-查看" tabindex="-1"><a class="header-anchor" href="#cat-查看" aria-hidden="true">#</a> cat：查看</h2>
<p>1、查看文件内容</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> file_path
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、查看多个文件内容</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> file_path01 file_path02
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、显示文件内容并显示行号</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> <span class="token parameter variable">-n</span> file_path
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4、创建文件并且写入内容</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">></span> file_path
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行时，该命令要求在终端上输入信息，完成后，按 <code v-pre>Ctrl + d</code> 终止并保存</p>
<p>5、文件件内容复制</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># > 覆盖</span>
<span class="token function">cat</span> source_file_path <span class="token operator">></span> target_file_path

<span class="token comment"># 追加</span>
<span class="token function">cat</span> source_file_path <span class="token operator">></span> target_file_path
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6、突出行尾</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> <span class="token parameter variable">-E</span> file_path
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>每行的行尾追加 <code v-pre>$</code> 符来区分</p>
<p>7、去除重复空行</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> <span class="token parameter variable">-s</span> file_path
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>8、仅在非空行上显示行号</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cat</span> <span class="token parameter variable">-b</span> <span class="token parameter variable">-T</span> file_path
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


