import{_ as a,X as e,Y as n,Z as s}from"./framework-bf6cbb95.js";const i={},t=s(`<h2 id="一、idea-新建项目-重新管理文件" tabindex="-1"><a class="header-anchor" href="#一、idea-新建项目-重新管理文件" aria-hidden="true">#</a> 一、IDEA 新建项目，重新管理文件</h2><h3 id="_1、生成-gitignore-文件" tabindex="-1"><a class="header-anchor" href="#_1、生成-gitignore-文件" aria-hidden="true">#</a> 1、生成 gitignore 文件</h3><p>新建项目之后，删除原有的 gitignore 文件，重新生成一份新的。</p><h3 id="_2、删除-git-缓存" tabindex="-1"><a class="header-anchor" href="#_2、删除-git-缓存" aria-hidden="true">#</a> 2、删除 git 缓存</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-f</span> <span class="token parameter variable">--cached</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3、进行版本管理" tabindex="-1"><a class="header-anchor" href="#_3、进行版本管理" aria-hidden="true">#</a> 3、进行版本管理</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),r=[t];function d(c,l){return e(),n("div",null,r)}const h=a(i,[["render",d],["__file","Git.html.vue"]]);export{h as default};
