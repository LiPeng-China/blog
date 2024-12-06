import{_ as a,X as s,Y as n,Z as e}from"./framework-bf6cbb95.js";const i="/blog/assets/docker_images-b4794094.png",l={},r=e(`<h2 id="零、安装portainer" tabindex="-1"><a class="header-anchor" href="#零、安装portainer" aria-hidden="true">#</a> 零、安装Portainer</h2><p>拉取镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">docker</span> pull portainer/portainer-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">9000</span>:9000 <span class="token parameter variable">-v</span> /var/run/docker.sock:/var/run/docker.sock <span class="token parameter variable">-v</span> /home/taiyi/docker_data/portainer
/data:/data <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">--name</span> myPortainer portainer/portainer-ce:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一、docker-概述" tabindex="-1"><a class="header-anchor" href="#一、docker-概述" aria-hidden="true">#</a> 一、Docker 概述</h2><h3 id="_1、docker-简介" tabindex="-1"><a class="header-anchor" href="#_1、docker-简介" aria-hidden="true">#</a> 1、Docker 简介</h3><h3 id="_2、为什么使用-docker" tabindex="-1"><a class="header-anchor" href="#_2、为什么使用-docker" aria-hidden="true">#</a> 2、为什么使用 Docker</h3><p>Docker 与虚拟化技术比较</p><table><thead><tr><th>特性</th><th>容器</th><th>虚拟机</th></tr></thead><tbody><tr><td>启动</td><td>秒级</td><td>分钟级</td></tr><tr><td>硬盘占用</td><td>一般为MB</td><td>一般为GB</td></tr><tr><td>性能</td><td>接近原生</td><td>弱于原生</td></tr><tr><td>系统支持量</td><td>单机支持上千个容器</td><td>一般几十个</td></tr></tbody></table><ul><li>尝试新软件</li><li>避免机器之间环境不同</li><li>更好地利用资源</li><li>为微服务定制</li><li>便于服务器之间迁移</li></ul><h3 id="_3、docker-安装" tabindex="-1"><a class="header-anchor" href="#_3、docker-安装" aria-hidden="true">#</a> 3、Docker 安装</h3><ol><li><p>安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://get.docker.com <span class="token parameter variable">-o</span> get-docker.sh
<span class="token function">sudo</span> <span class="token function">sh</span> ./get-docker.sh --dry-run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>添加 docker 用户组</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">groupadd</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将当前用户添加至 docker 组</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> <span class="token function">docker</span> <span class="token environment constant">$USER</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>更新 docker 用户组</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>newgrp <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>设置开机自启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>验证</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>开启容器镜像加速</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/docker/daemon.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;registry-mirrors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;https://dockerproxy.com&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;https://hub-mirror.c.163.com&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;https://mirror.baidubce.com&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;https://ccr.ccs.tencentyun.com&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl daemon-reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>查看配置信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">docker</span> info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>hello-world</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run hello-world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="二、docker-镜像命令" tabindex="-1"><a class="header-anchor" href="#二、docker-镜像命令" aria-hidden="true">#</a> 二、Docker 镜像命令</h2><h3 id="_1、帮助命令" tabindex="-1"><a class="header-anchor" href="#_1、帮助命令" aria-hidden="true">#</a> 1、帮助命令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token parameter variable">--help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2、docker-images" tabindex="-1"><a class="header-anchor" href="#_2、docker-images" aria-hidden="true">#</a> 2、docker images</h3><figure><img src="`+i+`" alt="docker_images" tabindex="0" loading="lazy"><figcaption>docker_images</figcaption></figure><ul><li>REPOSITORY：镜像仓库源</li><li>TAG：镜像标签</li><li>IMAGES ID：镜像 ID</li><li>CREATED：镜像创建时间</li><li>SIZE：镜像大小</li></ul><p>可选项：</p><ul><li>-a：列表本地的所有镜像及子镜像</li><li>-q：之前是镜像 ID</li><li>--digests：显示镜像的摘要信息</li><li>--no-trunc：显示完整的镜像信息</li></ul><h3 id="_3、docker-search" tabindex="-1"><a class="header-anchor" href="#_3、docker-search" aria-hidden="true">#</a> 3、docker search</h3><p>镜像搜索，默认从 https://hub.docker.com 进行搜索</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> search 镜像名称
<span class="token function">docker</span> search 镜像名称 <span class="token parameter variable">-s</span> 收藏数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、docker-pull" tabindex="-1"><a class="header-anchor" href="#_4、docker-pull" aria-hidden="true">#</a> 4、docker pull</h3><p>镜像下载</p><p>拉取指定版本号</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull 镜像名称:<span class="token punctuation">[</span>TAG<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>拉取最新版本号</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull 镜像名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5、docker-rmi" tabindex="-1"><a class="header-anchor" href="#_5、docker-rmi" aria-hidden="true">#</a> 5、docker rmi</h3><p>删除镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> rmi 镜像仓库名称
<span class="token function">docker</span> rmi 镜像ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>带有容器的镜像不能被删除</p><h2 id="三、docker-容器命令" tabindex="-1"><a class="header-anchor" href="#三、docker-容器命令" aria-hidden="true">#</a> 三、Docker 容器命令</h2><blockquote><p>容器镜像是一个软件的轻量级独立可执行软件包，包含运行它所需的一切：代码，运行时，系统工具，系统库，设置。</p><p>不管环境如何，集装箱化软件都可以运行相同的 Linux 和 Windows 应用程序。</p><p>容器将软件与其周围环境隔离开来，例如开发环境和生产环境之间的差异，并有助于减少在同一基础架构上运行不同软件的团队之间的冲突。</p></blockquote><h3 id="_1、创建并启动容器" tabindex="-1"><a class="header-anchor" href="#_1、创建并启动容器" aria-hidden="true">#</a> 1、创建并启动容器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token punctuation">[</span>options<span class="token punctuation">]</span> images <span class="token punctuation">[</span>command<span class="token punctuation">]</span><span class="token punctuation">[</span>args<span class="token punctuation">]</span> /参数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>options 说明：</p><ul><li>--name：为容器指定一个名称</li><li>-d：后台运行容器，并返回一个容器ID，也即启动守护式容器</li><li>-i：以交互模式运行容器，通常与 -t 同时使用</li><li>-t：为容器重新分配一个伪输入终端，通常与 -i 同时使用</li><li>-P：随机端口映射</li><li>-p：指定端口映射，四种格式： <ul><li>ip:host_port:container_port</li><li>ip::container_port</li><li>host_port:container_port</li><li>container_port</li></ul></li></ul><h3 id="_2、退出容器" tabindex="-1"><a class="header-anchor" href="#_2、退出容器" aria-hidden="true">#</a> 2、退出容器</h3><p>退出并关闭容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>退出不关闭容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Ctrl + p + q
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3、列举所有容器" tabindex="-1"><a class="header-anchor" href="#_3、列举所有容器" aria-hidden="true">#</a> 3、列举所有容器</h3><p>默认列举所有正在运行的容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>options 说明：</p><ul><li>-a：显示所有运行和没有运行的容器</li><li>-q：是现实容器编号</li></ul><h3 id="_4、启动、重启、关闭容器" tabindex="-1"><a class="header-anchor" href="#_4、启动、重启、关闭容器" aria-hidden="true">#</a> 4、启动、重启、关闭容器</h3><ul><li><p>启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> start 容器ID或者名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>重启</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> restart 容器ID或者名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>关闭</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> stop 容器ID或者名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>强制停止</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">kill</span> 容器ID或者名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h3 id="_5、删除容器" tabindex="-1"><a class="header-anchor" href="#_5、删除容器" aria-hidden="true">#</a> 5、删除容器</h3><ul><li><p>删除指定容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rm</span> 容器ID或者名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>删除所有容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-aq</span><span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>注意：只能删除没有运行的容器</p></li></ul><h3 id="_6、启动守护式容器" tabindex="-1"><a class="header-anchor" href="#_6、启动守护式容器" aria-hidden="true">#</a> 6、启动守护式容器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> 镜像名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_7、启动交互式容器" tabindex="-1"><a class="header-anchor" href="#_7、启动交互式容器" aria-hidden="true">#</a> 7、启动交互式容器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">--name</span><span class="token operator">=</span>myTomcat tomcat /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_8、查看容器日志" tabindex="-1"><a class="header-anchor" href="#_8、查看容器日志" aria-hidden="true">#</a> 8、查看容器日志</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> logs <span class="token punctuation">[</span>options<span class="token punctuation">]</span> 容器ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>option:</p><ul><li>-t：加入时间戳</li><li>-f：跟随最新的日志打印</li><li>--tail 10：显示最新的10条日志</li></ul><h3 id="_9、查看容器运行进程" tabindex="-1"><a class="header-anchor" href="#_9、查看容器运行进程" aria-hidden="true">#</a> 9、查看容器运行进程</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">top</span> 容器ID或进程
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_10、查看容器内部信息" tabindex="-1"><a class="header-anchor" href="#_10、查看容器内部信息" aria-hidden="true">#</a> 10、查看容器内部信息</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> inspect 容器ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_11、进入正在运行的容器" tabindex="-1"><a class="header-anchor" href="#_11、进入正在运行的容器" aria-hidden="true">#</a> 11、进入正在运行的容器</h3><p>方式1：exec</p><p>重新打开一个新的终端，exit 退出（不会关闭容器）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 容器ID /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>方式2：attach（不推荐）</p><p>直接进行容器终端，不会启动新进程，exit 退出（会关闭容器），Ctrl + p + q 不关闭容器退出</p><h3 id="_12、拷贝容器内的文件到主机" tabindex="-1"><a class="header-anchor" href="#_12、拷贝容器内的文件到主机" aria-hidden="true">#</a> 12、拷贝容器内的文件到主机</h3><p>容器 --&gt; 宿主机</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">cp</span> 容器ID或名称:容器内文件 宿主机文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>宿主机 --&gt; 容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">cp</span> 宿主机文件 容器ID或名称:容器内文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="四、docker-镜像" tabindex="-1"><a class="header-anchor" href="#四、docker-镜像" aria-hidden="true">#</a> 四、Docker 镜像</h2><h3 id="_1、什么是镜像" tabindex="-1"><a class="header-anchor" href="#_1、什么是镜像" aria-hidden="true">#</a> 1、什么是镜像</h3><ul><li><p>概述</p><p>UnionFs（联合文件系统）：Union 文件系统（UnionFS）是一种分层、轻量级并且高性能的文件系统，它支持对文件系统的修改作为一次提交来一层层的叠加，同时可以将不同目录挂载到同一个虚拟文件系统下（unite several directories into a single virtual flesystem）Union 文件系统是 Docker 镜像的基础。镜像可以通过分层来进行继承，基于基础镜像（没有父镜像），可以制作各种具体的应用镜像，</p></li><li><p>Docker 镜像加载原理</p><p>Docker 的镜像实际上由一层一层的文件系统组成，这种层级的文件系统 UnionFS。</p><p>bootfs（boot file system）主要包含 bootloaderkernel，bootloader 主要是引导加载 kernel，Linux 刚启动时会加载 bootfs 文件系统，在 Docker 镜像的最底层是botfs。这一层与我们典型的 Linux/Unix 系统是一样的，包含 boot 加载器和内核。当boot加载完成之后整个内核就都在内存中了，此时内存的使用权已由bootfs转交给内核，此时系统也会卸载bootfs。</p><p>rootfs（root file system），在 bootfs 之上包含的就是典型 Linux 系统中的 /dev、/proc、/bin、/etc 等标准目录和文件。rootfs 就是各种不同的操作系统发行版，比如如 Ubuntu，Centos 等等</p></li><li><p>为什么镜像要使用分层结构 最大的一个好处就是：共享资源 比如:有多个镜像都从相同的 base 镜像构建而来，那么宿主机只需在磁盘上保存一份 base 镜像，同时内存中也只需加载一份 base 镜像，就可以为所有容器服务了。而且镜像的每一层都可以被共享</p></li></ul><h3 id="_2、镜像特点" tabindex="-1"><a class="header-anchor" href="#_2、镜像特点" aria-hidden="true">#</a> 2、镜像特点</h3><p>Docker镜像都是只读的，当容器启动时，一个新的可写的镜像被加载到镜像层的顶部，这一层通常被叫做容器层，容器层之下的都叫镜像层。</p><h3 id="_3、镜像-commit" tabindex="-1"><a class="header-anchor" href="#_3、镜像-commit" aria-hidden="true">#</a> 3、镜像 commit</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> commit <span class="token parameter variable">-a</span><span class="token operator">=</span><span class="token string">&quot;作者&quot;</span> <span class="token parameter variable">-m</span><span class="token operator">=</span><span class="token string">&quot;新景祥描述信息&quot;</span> 容器ID 要创建的新镜像名:<span class="token punctuation">[</span>标签名<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4、docker-容器数据卷" tabindex="-1"><a class="header-anchor" href="#_4、docker-容器数据卷" aria-hidden="true">#</a> 4、Docker 容器数据卷</h3><ul><li><p>Docker的理念:</p><ul><li>将应用与运行的环境打包形成容器运行，运行可以伴随着容器，但是我们对数据的要求希望是持久化的</li><li>容器之间希望有可能共享数据</li></ul></li><li><p>Docker容器产生的数据，如果不通过 docker commit 生成新的镜像，使得数据做为镜像的一部分保存下来，那么当容器删除后，数据自然也就没有了。为了能保存数据在 docker 中我们使用卷</p></li><li><p>容器数据卷可以为我们做到以下两点</p><ul><li>容器数据的持久化</li><li>容器之间继承和共享数据</li></ul></li><li><p>添加数据卷：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-v</span> /宿主机目录:容器内目录 镜像ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="五、dockerfile" tabindex="-1"><a class="header-anchor" href="#五、dockerfile" aria-hidden="true">#</a> 五、Dockerfile</h2><h3 id="_1、dockerfile-概述" tabindex="-1"><a class="header-anchor" href="#_1、dockerfile-概述" aria-hidden="true">#</a> 1、Dockerfile 概述</h3><p>Dockerfile 是用来构建 Docker 镜像的构建文件，是由一系列目录和参数构成的脚本。使用步骤：</p><ul><li>编写 Dockerfile 文件</li><li>docker build 生成新的镜像</li><li>docker run 运行新镜像</li></ul><p>Dockerfile 编写流程：</p><ol><li>Docker 从基础镜像运行一个容器</li><li>执行一条指令并对容器进行修改</li><li>执行类似于 docker commit 的操作提交一个新镜像</li><li>docker run 给予新镜像创建容器</li><li>执行 Dockerfile 的下一条指令再从第2点开始知道没有指令</li></ol><h3 id="_2、dockerfile-体系结构" tabindex="-1"><a class="header-anchor" href="#_2、dockerfile-体系结构" aria-hidden="true">#</a> 2、Dockerfile 体系结构</h3><ul><li><p>FROM：基础镜像，当前新镜像是基于哪个镜像的</p></li><li><p>MAINTAINER：镜像维护者的姓名和邮箱地址</p></li><li><p>RUN：容器构建时需要运行的命令</p></li><li><p>EXPOSE：当前容器对外暴露的端口</p></li><li><p>WORKDIR：指定在创建容器后，终端默认登陆进来的工作目录</p></li><li><p>ENV：用来在构建镜像过程中设置环境变量</p></li><li><p>ADD：将宿主机目录下的文件拷贝进镜像并且ADD命令会自动处理URL和解压tar包</p></li><li><p>COPY：类似ADD，拷贝文件和目录到镜像中，语法COPY src dest COPY[src&quot;,&quot;dest&quot;]</p></li><li><p>VOLUME：容器数据卷，用于数据保存和持久化工作，VOLUMN不能指定挂载位置</p></li><li><p>CMD：指定一个容器启动时要运行的命令格式 shell: CMD &lt;命令&gt; execCMD[可执行文件&quot;参数1&quot;参数2”]</p></li><li><p>DockerFile：中可以有多个CMD指令，但只有最后一个生效，CMD会被docker run之后的参数替换</p></li><li><p>ENTRYPOINT ：指定一个容器启动时要运行的命令</p><p>ENTRYPOINT 的目地和CMD一样，都是在指定容器启动程序及参数</p></li><li><p>ONBUILD：当构建一个被继承的Dockerfile时运行命令，父像在被子镜像继承后触发父镜像的onbuild</p></li></ul><h3 id="_3、dockerfile-自定义镜像" tabindex="-1"><a class="header-anchor" href="#_3、dockerfile-自定义镜像" aria-hidden="true">#</a> 3、Dockerfile 自定义镜像</h3><p>带有 vim 的 CentOS</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token comment"># 使用 FROM 制定该镜像给予那个镜像构建的</span>
<span class="token instruction"><span class="token keyword">FROM</span> centos</span>
<span class="token comment"># 制定作者</span>
<span class="token instruction"><span class="token keyword">MAINTAINER</span> taiyi&lt;taiyi.qq.com&gt;</span>
<span class="token comment"># 配置环境变量</span>
<span class="token instruction"><span class="token keyword">ENV</span> MYPATH /usr/local</span>
<span class="token comment"># 配置工作目录</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> <span class="token variable">$MYPATH</span></span>
<span class="token comment"># 安装 VIM</span>
<span class="token instruction"><span class="token keyword">RUN</span> yum install -y vim</span>
<span class="token comment"># 向外暴露端口</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 8848</span>
<span class="token comment"># 执行 docker run 和 docker start 是需要执行什么命令</span>
<span class="token instruction"><span class="token keyword">CMD</span> echo <span class="token variable">$MYPATH</span></span>
<span class="token instruction"><span class="token keyword">CMD</span> echo <span class="token string">&quot;my centos build success&quot;</span></span>
<span class="token instruction"><span class="token keyword">CMD</span> /bin/bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>VOLUMN 使用</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token comment"># 使用 FROM 制定该镜像给予那个镜像构建的</span>
<span class="token instruction"><span class="token keyword">FROM</span> tomcat:8.5.38</span>
<span class="token comment"># 制定作者</span>
<span class="token instruction"><span class="token keyword">MAINTAINER</span> taiyi&lt;taiyi.qq.com&gt;</span>
<span class="token instruction"><span class="token keyword">VOLUME</span> [<span class="token string">&quot;/usr/local/tomcat/webapps&quot;</span>, <span class="token string">&quot;/usr/local/tomcat/conf&quot;</span>]</span>
<span class="token comment"># 向外暴露端口</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 8080</span>
<span class="token comment"># 执行 docker run 和 docker start 是需要执行什么命令</span>
<span class="token instruction"><span class="token keyword">CMD</span> echo <span class="token string">&quot;my tomcat build success&quot;</span></span>
<span class="token instruction"><span class="token keyword">CMD</span> /bin/bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>构建</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> custom_name:1.0.1 <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4、dockerfile-制作镜像" tabindex="-1"><a class="header-anchor" href="#_4、dockerfile-制作镜像" aria-hidden="true">#</a> 4、Dockerfile 制作镜像</h3><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token comment"># 使用 FROM 制定该镜像给予那个镜像构建的</span>
<span class="token instruction"><span class="token keyword">FROM</span> centos:centos7</span>
<span class="token comment"># 制定作者</span>
<span class="token instruction"><span class="token keyword">MAINTAINER</span> taiyi&lt;taiyi.qq.com&gt;</span>
<span class="token comment"># 配置环境变量</span>
<span class="token instruction"><span class="token keyword">ENV</span> MYPATH /usr/local/tomcat</span>
<span class="token comment"># 创建一个目录</span>
<span class="token instruction"><span class="token keyword">RUN</span> mkdir -p /usr/local/java</span>
<span class="token comment"># 把 tomcat 和 jdk 放到镜像中</span>
<span class="token instruction"><span class="token keyword">ADD</span> jdk8.tar.gz /root/</span>
<span class="token instruction"><span class="token keyword">ADD</span> tomcat8.tar.gz /root/</span>
<span class="token comment"># 列出 root 下面的目录</span>
<span class="token instruction"><span class="token keyword">RUN</span> ls -lh /root/</span>
<span class="token comment"># 把 tomcat 放到 /usr/local 下面</span>
<span class="token instruction"><span class="token keyword">RUN</span> mv /root/tomcat8 /usr/local/tomcat</span>
<span class="token instruction"><span class="token keyword">RUN</span> mv /root/jdk8 /usr/local/java</span>
<span class="token comment"># 配置工作目录</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> <span class="token variable">$MYPATH</span></span>
<span class="token comment"># 挂在目录</span>
<span class="token instruction"><span class="token keyword">VOLUME</span> [<span class="token string">&quot;/usr/local/tomcat/webapps&quot;</span>, <span class="token string">&quot;/usr/local/tomcat/logs&quot;</span>]</span>
<span class="token comment"># 安装 VIM</span>
<span class="token instruction"><span class="token keyword">ENV</span> JAVA_HOME /usr/local/java/jdk8</span>
<span class="token instruction"><span class="token keyword">ENV</span> CLASSPATH <span class="token variable">$JAVA_HOME</span>/ ib/dt.jar:<span class="token variable">$JAVA_HOME</span>/Tib/tools.jar</span>
<span class="token instruction"><span class="token keyword">ENV</span> CATALINA_HOME /usr/local/tomcat</span>
<span class="token instruction"><span class="token keyword">ENV</span> CATALINA_BASE /usr/local/tomcat</span>
<span class="token instruction"><span class="token keyword">ENV</span> PATH <span class="token variable">$PATH</span>:<span class="token variable">$JAVA_HOME</span>/bin:<span class="token variable">$CATALINA_HOME</span>/ib:<span class="token variable">$CATALINA_HOME</span>/bin</span>

<span class="token comment"># 向外暴露端口</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 8080</span>
<span class="token comment"># 执行 docker run 和 docker start 是需要执行什么命令</span>
<span class="token instruction"><span class="token keyword">CMD</span> bin/startup.sh &amp;&amp; tail -f logs/catalina.out</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、案例-构建-tomcat-镜像" tabindex="-1"><a class="header-anchor" href="#_5、案例-构建-tomcat-镜像" aria-hidden="true">#</a> 5、案例：构建 Tomcat 镜像</h3><h3 id="_6、命令说明" tabindex="-1"><a class="header-anchor" href="#_6、命令说明" aria-hidden="true">#</a> 6、命令说明</h3><p>Dockerfile 中可以有多个 CMD 命令，但只有最有一个生效，CMD 会被 docker run 之后的参数替换掉</p><p>ENTRYPOINT 能够在现有命令的基础上追加参数</p><h3 id="_7、构建-jar-包" tabindex="-1"><a class="header-anchor" href="#_7、构建-jar-包" aria-hidden="true">#</a> 7、构建 jar 包</h3><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> XXXX:1.0</span>
<span class="token instruction"><span class="token keyword">ENV</span> WORKPATH /usr/local/project</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> <span class="token variable">$WORKPATH</span></span>
<span class="token instruction"><span class="token keyword">RUN</span> mkdir -p /usr/local/project</span>
<span class="token instruction"><span class="token keyword">ADD</span> xxx.jar /usr/local/project</span>
<span class="token instruction"><span class="token keyword">EXPOSE</span> 8080</span>
<span class="token instruction"><span class="token keyword">ENTRYPOINT</span> [<span class="token string">&quot;java&quot;</span>, <span class="token string">&quot;-jar&quot;</span>, <span class="token string">&quot;xxx.jar&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> project:1.0.0 <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">9090</span>:8080 project:1.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="六、docker-安装各种服务" tabindex="-1"><a class="header-anchor" href="#六、docker-安装各种服务" aria-hidden="true">#</a> 六、Docker 安装各种服务</h2><h3 id="_1、redis" tabindex="-1"><a class="header-anchor" href="#_1、redis" aria-hidden="true">#</a> 1、Redis</h3><p>拉取镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull redis:7.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 
		  <span class="token parameter variable">--name</span> myredis <span class="token punctuation">\\</span>
		  <span class="token parameter variable">-v</span> /home/taiyi/docker_data/redis/data/:/data <span class="token punctuation">\\</span>
		  <span class="token parameter variable">-v</span> /home/taiyi/docker_data/redis/conf/redis.conf:/etc/redis/redis.conf <span class="token punctuation">\\</span>
		  <span class="token parameter variable">-d</span> redis:7.2 <span class="token punctuation">\\</span>
		  redis-server /etc/redis/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单操作：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> redis7 <span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 redis:7.0 <span class="token parameter variable">--bind</span> <span class="token number">0.0</span>.0.0 --protected-mode no
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2、mysql" tabindex="-1"><a class="header-anchor" href="#_2、mysql" aria-hidden="true">#</a> 2、MySQL</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">--name</span> mysql8 <span class="token punctuation">\\</span>
	<span class="token parameter variable">-v</span> /home/taiyi/docker_data/mysql/log/:/var/log/mysql <span class="token punctuation">\\</span>
	<span class="token parameter variable">-v</span> /home/taiyi/docker_data/mysql/data/:/var/lib/mysql <span class="token punctuation">\\</span>
	<span class="token parameter variable">-v</span> /home/taiyi/docker_data/mysql/conf/:/etc/mysql/conf.d <span class="token punctuation">\\</span>
	<span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token punctuation">\\</span>
	<span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token punctuation">\\</span>
	<span class="token parameter variable">-d</span> mysql:8.0.35 <span class="token punctuation">\\</span>
	--init-connect<span class="token operator">=</span><span class="token string">&quot;SET collation_connection=utf8mb4_0900_ai_ci&quot;</span> <span class="token punctuation">\\</span>
	--init-connect<span class="token operator">=</span><span class="token string">&quot;SET NAMES utf8mb4&quot;</span> <span class="token punctuation">\\</span>
	--skip-character-set-client-handshake
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,123),d=[r];function c(t,o){return s(),n("div",null,d)}const u=a(l,[["render",c],["__file","Docker.html.vue"]]);export{u as default};
