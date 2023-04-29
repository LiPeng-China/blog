<template><div><p>1、复制文件夹</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">cp</span> source_file_path target_file_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、复制文件夹</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 将源文件夹下的所有文件复制到目标盘文件</span>
<span class="token function">cp</span> <span class="token parameter variable">-r</span> source_folder_path/* target_folder_path

<span class="token comment"># 将源文件夹复制到目标文件夹，目标文件夹下将会存在一个源文件夹</span>
<span class="token function">cp</span> <span class="token parameter variable">-r</span> source_folder_path/* target_folder_path
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


