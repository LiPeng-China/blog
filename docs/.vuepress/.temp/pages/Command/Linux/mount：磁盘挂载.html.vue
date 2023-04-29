<template><div><h2 id="临时挂载" tabindex="-1"><a class="header-anchor" href="#临时挂载" aria-hidden="true">#</a> 临时挂载</h2>
<p>1、查看可用磁盘和分区</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>lsblk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、查看磁盘详细信息</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> fdosk <span class="token parameter variable">-l</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、创建要挂载的磁盘目录</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> /mnt/mydisk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4、将磁盘挂载到目录</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mount</span> /dev/sdb1 /mnt/mydisk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="系统启动自动挂载" tabindex="-1"><a class="header-anchor" href="#系统启动自动挂载" aria-hidden="true">#</a> 系统启动自动挂载</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token comment"># 在 /etc/fstab 文件中添加如下信息</span>
/dev/sdb1	/mnt/mydisk	ext4	defaults	<span class="token number">0</span>	<span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


