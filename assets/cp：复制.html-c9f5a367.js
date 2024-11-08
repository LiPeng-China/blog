import{_ as e,X as a,Y as s,Z as n}from"./framework-7c2c1cd4.js";const c={},t=n(`<p>1、复制文件夹</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> source_file_path target_file_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、复制文件夹</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将源文件夹下的所有文件复制到目标盘文件</span>
<span class="token function">cp</span> <span class="token parameter variable">-r</span> source_folder_path/* target_folder_path

<span class="token comment"># 将源文件夹复制到目标文件夹，目标文件夹下将会存在一个源文件夹</span>
<span class="token function">cp</span> <span class="token parameter variable">-r</span> source_folder_path/* target_folder_path
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[t];function i(r,d){return a(),s("div",null,l)}const p=e(c,[["render",i],["__file","cp：复制.html.vue"]]);export{p as default};
