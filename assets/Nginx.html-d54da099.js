import{_ as e,X as t,Y as i,$ as l,a0 as n,a1 as d,a2 as r,Z as s,F as p}from"./framework-bf6cbb95.js";const c="/blog/assets/正向代理-f42aecf2.png",o="/blog/assets/反向代理-78c47fc3.png",u="/blog/assets/Nginx目录结构-56d3b2e3.png",v="/blog/assets/Nginx进程-95d26d53.png",b="/blog/assets/Nginx进程模型-43c5e424.png",m="/blog/assets/sendfile-eb512436.png",h="/blog/assets/tcp_nopush和tcp_nodeplay-d179aaf4.png",k="/blog/assets/浏览器缓存执行流程-92ce1087.png",g="/blog/assets/防盗链中的Referer-268c617a.png",x="/blog/assets/Nginx负载均衡-9c259571.png",_="/blog/assets/安全隔离-021a01b2.png",f="/blog/assets/负载均衡器-36cb722f.png",y="/blog/assets/Nginx负载均衡实现流程-9e735ebe.png",w="/blog/assets/default_port问题-a469dfe8.png",q="/blog/assets/default_port解决方案-c3235eb5.png",N={},z=s('<h2 id="一、概述" tabindex="-1"><a class="header-anchor" href="#一、概述" aria-hidden="true">#</a> 一、概述</h2><h3 id="_1、背景介绍" tabindex="-1"><a class="header-anchor" href="#_1、背景介绍" aria-hidden="true">#</a> 1、背景介绍</h3><p>Nginx（“engine x”）一个具有高性能的<strong>HTTP</strong>和<strong>反向代理</strong>的WEB服务器，同时也是一个<strong>POP3/SMTP/IMAP</strong>代理服务器。</p><p>Nginx是由伊戈尔·赛索耶夫为俄罗斯访问量第二的<a href="./http://link.zhihu.com/?target=http%3A//Rambler.ru">http://Rambler.ru</a>站点（俄文：Рамблер）开发的，第一个公开版本0.1.0发布于2004年10月4日，另外值得一提的是伊戈尔·赛索耶夫将Nginx的源码进行了开源，这也为Nginx的发展提供了良好的保障。</p><p>其特点是占有内存少，并发能力强，事实上nginx的并发能力确实在同类型的网页服务器中表现较好，中国大陆使用nginx网站用户有：百度、京东、新浪、网易、腾讯、淘宝等。</p><h3 id="_2、反向代理" tabindex="-1"><a class="header-anchor" href="#_2、反向代理" aria-hidden="true">#</a> 2、反向代理</h3><p><strong>正向代理</strong></p><ul><li><p>正向代理需要主动设置代理服务器ip或者域名进行访问，由设置的服务器ip或者域名去访问内容并返回</p></li><li><p>正向代理是<strong>代理客户端</strong>，为客户端收发请求，使真实客户端对服务器不可见。</p></li><li><p>用途：</p><p>突破访问显示：通过代理服务器，可以突破自身ip访问限制，访问国外网站等 提高访问速度：通常代理服务器都设置一个较大的硬盘缓冲区，会将部分请求的响应保存到缓冲区中，当其他用户再访问相同的信息时，则直接由缓冲区中取出信息，传给用户，以提高访问速度 隐藏客户端真实ip：上网者可以通过正向代理的方法隐藏自己的ip，免受攻击</p><figure><img src="'+c+'" alt="正向代理" tabindex="0" loading="lazy"><figcaption>正向代理</figcaption></figure></li></ul><p><strong>反向代理</strong></p><ul><li><p>正向代理需要配置代理服务器，而反向代理不需要做任何设置。</p></li><li><p>反向代理是<strong>代理服务器</strong>，为服务器收发请求，使真实服务器对客户端不可见。</p></li><li><p>用途：</p><p>隐藏服务器真实ip：使用反向代理，可以对客户端隐藏服务器的ip地址 负载均衡：反向代理服务器可以做负载均衡，根据所有真实服务器的负载情况，将客户端请求分发到不同的真实服务器上 提高访问速度：反向代理服务器可以对静态内容及短时间内有大量访问请求的动态内容提供缓存服务，提高访问速度 提供安全保障：反向代理服务器可以作为应用层防火墙，为网站提供对基于web的攻击行为（例如DoS/DDoS）的防护，更容易排查恶意软件等。还可以为后端服务器统一提供加密和SSL加速（如SSL终端代理），提供HTTP访问认证等。</p><figure><img src="'+o+`" alt="反向代理" tabindex="0" loading="lazy"><figcaption>反向代理</figcaption></figure></li></ul><h3 id="_3、nginx-优点" tabindex="-1"><a class="header-anchor" href="#_3、nginx-优点" aria-hidden="true">#</a> 3、Nginx 优点</h3><blockquote><p>为什么选择 Nginx？Nginx 性能为王</p></blockquote><ul><li>速度更快、并发更高</li><li>高扩展性、跨平台</li><li>高可靠性：用于反向代理，宕机的概率微乎其微</li><li>低内存消耗</li><li>单机支持10万以上的并发连接</li><li>热部署</li><li>最自由的 BSD 许可协议</li></ul><h3 id="_4、nginx-的功能特性及常用功能" tabindex="-1"><a class="header-anchor" href="#_4、nginx-的功能特性及常用功能" aria-hidden="true">#</a> 4、Nginx 的功能特性及常用功能</h3><h3 id="_5、nginx-安装" tabindex="-1"><a class="header-anchor" href="#_5、nginx-安装" aria-hidden="true">#</a> 5、Nginx 安装</h3><p>安装 Nginx</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> nala <span class="token function">install</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动 Nginx</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>停止 Nginx 服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nginx <span class="token parameter variable">-s</span> stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6、nginx-目录结构分析" tabindex="-1"><a class="header-anchor" href="#_6、nginx-目录结构分析" aria-hidden="true">#</a> 6、Nginx 目录结构分析</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tree /usr/local/nginx
<span class="token comment"># whereis nginx</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+u+'" alt="Nginx目录结构" tabindex="0" loading="lazy"><figcaption>Nginx目录结构</figcaption></figure><ul><li>conf:nginx：所有配置文件目录 <ul><li>nginx.conf：是 Nginx 的核心配置文件，这个文件非常重要，也是我们即将要学习的重点</li></ul></li><li>html：存放 Nginx 自带的两个静态的 html 页面 <ul><li>50x.html：访问失败后的失败页面</li><li>index.html：成功访问的默认首页</li></ul></li><li>logs：记录入门的文件，当 Nginx 服务器启动后，这里面会有 access.log error.log 和 nginx.pid三个文件出现。</li><li>sbin：是存放执行程序文件 Nginx <ul><li>nginx：是用来控制 Nginx 的启动和停止等相关的命令。</li></ul></li></ul><h3 id="_7、nginx-服务的信号控制" tabindex="-1"><a class="header-anchor" href="#_7、nginx-服务的信号控制" aria-hidden="true">#</a> 7、Nginx 服务的信号控制</h3><p>通过 ps 命令查看 Nginx 进程：</p><figure><img src="'+v+'" alt="Nginx进程" tabindex="0" loading="lazy"><figcaption>Nginx进程</figcaption></figure><p>Nginx 后台进程包括一个 master 进程和多个 worker 进程：</p><ul><li>master 进程：主要用来管理 worker 进程，包括接受外界的信息；并将接收到的信号发送给各个 worker 进程；监控 worker 进程状态，当worker进程出现异常退出后，会自动重新启动新的 worker 进程</li><li>worker 进程：专门用来处理用户请求的，各个 worker 进程之间是平等的并且相互独立，处理请求的机会也是一样的</li></ul><figure><img src="'+b+`" alt="Nginx进程模型" tabindex="0" loading="lazy"><figcaption>Nginx进程模型</figcaption></figure><p>作为管理员，只需要通过给 master 进程发送信号就可以来控制 Nginx ，这个时候需要有两个前提条件：一个是要操作的 master 进程ID，一个是信号。</p><ul><li><p>进程ID：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>信号</p><table><thead><tr><th>信号</th><th>作用</th></tr></thead><tbody><tr><td>TERM/INT</td><td>立即关闭整个服务</td></tr><tr><td>QUIT</td><td>&quot;优雅&quot;地关闭整个服务</td></tr><tr><td>HUP</td><td>重读配置文件并使用服务对新配置项生效</td></tr><tr><td>USR1</td><td>重新打开日志文件，可以用来进行日志切割</td></tr><tr><td>USR2</td><td>平滑升级到最新版的 Nginx</td></tr><tr><td>WINCH</td><td>所有子进程不在接收处理新连接，相当于给 work 进程发送 QUIT 指令</td></tr></tbody></table></li></ul><p>调用命令为：<code>kill -signal PID</code></p><p>signal：即为信号；PID：即为获取到的 master 进程 ID</p><h3 id="_8、nginx-的命令行控制" tabindex="-1"><a class="header-anchor" href="#_8、nginx-的命令行控制" aria-hidden="true">#</a> 8、Nginx 的命令行控制</h3><ul><li>-? / -h：显示帮助信息</li><li>-v：打印版本号信息并退出</li><li>-V：打印版本号信息和配置信息并退出</li><li>-t：测试 nginx 的配置文件语法是否正确并退出</li><li>-T：测试nginx的配置文件语法是否正确并列出用到的配置文件信息然后退出</li><li>-q：在配置测试期间禁止显示非错误消息</li><li>-s：signal信号，后面可以跟： <ul><li>stop：快速关闭，类似于TERM/INT信号的作用</li><li>quit：优雅的关闭，类似于QUIT信号的作用</li><li>reopen：重新打开日志文件类似于 USR1 信号的作用</li><li>reload：类似于 HUP 信号的作用</li></ul></li><li>-p prefix：指定Nginx的 prefix 路径（默认为：/usr/local/nginx/）</li><li>-c filename：指定Nginx的配置文件路径（默认为：conf/nginx.conf）</li><li>-g：用来补充 Nginx 配置文件，向 Nginx 服务指定启动时应用全局的配置</li></ul><h3 id="_9、nginx-核心配置文件" tabindex="-1"><a class="header-anchor" href="#_9、nginx-核心配置文件" aria-hidden="true">#</a> 9、Nginx 核心配置文件</h3><p>nginx.conf</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1 全局块</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment"># 2 events 块：影响 Nginx 服务器性能</span>
events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment"># 3 http 块：重要：反向代理、日志</span>
http <span class="token punctuation">{</span>
    include       mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>
    sendfile        on<span class="token punctuation">;</span>
    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

	<span class="token comment"># Nginx 虚拟主机的相关配置</span>
    server <span class="token punctuation">{</span>
        listen       <span class="token number">80</span><span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>
        location / <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
            index  index.html index.htm<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>指令名	指令值<span class="token punctuation">;</span>  <span class="token comment">#全局块，主要设置Nginx服务器整体运行的配置指令</span>

<span class="token comment">#events块,主要设置 Nginx 服务器与用户的网络连接,这一部分对Nginx服务器的性能影响较大</span>
events <span class="token punctuation">{</span>	 
    指令名	指令值<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">#http块，是 Nginx 服务器配置中的重要部分，代理、缓存、日志记录、第三方模块配置...             </span>
http <span class="token punctuation">{</span>		
    指令名	指令值<span class="token punctuation">;</span>
    server <span class="token punctuation">{</span> <span class="token comment">#server块，是Nginx配置和虚拟主机相关的内容</span>
        指令名	指令值<span class="token punctuation">;</span>
        location / <span class="token punctuation">{</span> 
        <span class="token comment">#location块，基于Nginx服务器接收请求字符串与location后面的值进行匹配，对特定请求进行处理</span>
            指令名	指令值<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
	<span class="token punctuation">..</span>.
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>小结：</p><ul><li>nginx.conf 配置文件中默认有三大块：全局块、events块、http块</li><li>http块中可以配置多个 server 块，每个 server 块又可以配置多个 location 块</li></ul><h4 id="_9-1-全局块" tabindex="-1"><a class="header-anchor" href="#_9-1-全局块" aria-hidden="true">#</a> 9.1 全局块</h4><ul><li><p>user 指令</p><p>用于配置运行 Nginx 服务器的 worker 进程的用户和用户组</p><table><thead><tr><th>语法</th><th>user user [group]</th></tr></thead><tbody><tr><td>默认值</td><td>nobody</td></tr><tr><td>位置</td><td>全局块</td></tr></tbody></table><blockquote><p>该属性也可以在编译的时候指定，语法如下<code>./configure --user=user --group=group</code>，如果两个地方都进行了设置，最终生效的是配置文件中的配置。</p><p>使用 user 指令可以指定启动运行工作进程的用户及用户组，这样对于系统的权限访问控制的更加精细，也更加安全（403 没有访问目录的权限）</p></blockquote></li><li><p>work process 指令</p><p>master_process：用来指定是否开启工作进程。</p><table><thead><tr><th>语法</th><th>master_process on|off;</th></tr></thead><tbody><tr><td>默认值</td><td>master_process on;</td></tr><tr><td>位置</td><td>全局块</td></tr></tbody></table><p>worker_processes：用于配置 Nginx 生成工作进程的数量，这个是Nginx服务器实现并发处理服务的关键所在。理论上来说 workder process 的值越大，可以支持的并发处理量也越多，但事实上这个值的设定是需要受到来自服务器自身的限制，建议将该值和服务器 CPU 的内核数保存一致。</p><table><thead><tr><th>语法</th><th>worker_processes num/auto;</th></tr></thead><tbody><tr><td>默认值</td><td>1</td></tr><tr><td>位置</td><td>全局块</td></tr></tbody></table></li><li><p>其他指令</p><p>（1）daemon：设定 Nginx 是否以守护进程的方式启动。</p><blockquote><p>守护式进程是linux后台执行的一种服务进程，特点是独立于控制终端，不会随着终端关闭而停止。</p></blockquote><table><thead><tr><th>语法</th><th>daemon on|off;</th></tr></thead><tbody><tr><td>默认值</td><td>daemon on;</td></tr><tr><td>位置</td><td>全局块</td></tr></tbody></table><p>（2）pid：用来配置 Nginx 当前master进程的进程号ID存储的文件路径。</p><table><thead><tr><th>语法</th><th>pid file;</th></tr></thead><tbody><tr><td>默认值</td><td>默认为:/usr/local/nginx/logs/nginx.pid</td></tr><tr><td>位置</td><td>全局块</td></tr></tbody></table><blockquote><p>该属性可以通过<code>./configure --pid-path=PATH</code>来指定</p></blockquote><p>（3）error_log：用来配置 Nginx 的错误日志存放路径</p><table><thead><tr><th>语法</th><th>error_log file [日志级别];</th></tr></thead><tbody><tr><td>默认值</td><td>error_log logs/error.log error;</td></tr><tr><td>位置</td><td>全局块、http、server、location</td></tr></tbody></table><blockquote><p>该属性可以通过<code>./configure --error-log-path=PATH</code>来指定</p><p>其中日志级别的值有：debug|info|notice|warn|error|crit|alert|emerg，翻译过来为调试|信息|通知|警告|错误|临界|警报|紧急，这块建议大家设置的时候不要设置成info以下的等级，因为会带来大量的磁盘 I/O 消耗，影响 Nginx 的性能。</p></blockquote><p>（4）include：用来引入其他配置文件，使 Nginx 的配置更加灵活</p><table><thead><tr><th>语法</th><th>include file;</th></tr></thead><tbody><tr><td>默认值</td><td>无</td></tr><tr><td>位置</td><td>any</td></tr></tbody></table></li></ul><h4 id="_9-2-events块" tabindex="-1"><a class="header-anchor" href="#_9-2-events块" aria-hidden="true">#</a> 9.2 events块</h4><ol><li><p>accept_mutex：用来设置 Nginx 网络连接序列化</p><table><thead><tr><th>语法</th><th>accept_mutex on|off;</th></tr></thead><tbody><tr><td>默认值</td><td>accept_mutex on;</td></tr><tr><td>位置</td><td>events</td></tr></tbody></table><blockquote><p>这个配置主要可以用来解决常说的&quot;惊群&quot;问题。大致意思是在某一个时刻，客户端发来一个请求连接，Nginx后台是以多进程的工作模式，也就是说有多个worker进程会被同时唤醒，但是最终只会有一个进程可以获取到连接，如果每次唤醒的进程数目太多，就会影响Nginx的整体性能。如果将上述值设置为on(开启状态)，将会对多个Nginx进程接收连接进行序列号，一个个来唤醒接收，就防止了多个进程对连接的争抢。</p></blockquote></li><li><p>multi_accept：用来设置是否允许同时接收多个网络连接</p><table><thead><tr><th>语法</th><th>multi_accept on|off;</th></tr></thead><tbody><tr><td>默认值</td><td>multi_accept off;</td></tr><tr><td>位置</td><td>events</td></tr></tbody></table><blockquote><p>如果 multi_accept 被禁止了，Nginx 一个工作进程只能同时接受一个新的连接。否则，一个工作进程可以同时接受所有的新连接</p></blockquote></li><li><p>worker_connections：用来配置单个worker进程最大的连接数</p><table><thead><tr><th>语法</th><th>worker_connections number;</th></tr></thead><tbody><tr><td>默认值</td><td>worker_connections 512;</td></tr><tr><td>位置</td><td>events</td></tr></tbody></table><blockquote><p>这里的连接数不仅仅包括和前端用户建立的连接数，而是包括所有可能的连接数。另外，number值不能大于操作系统支持打开的最大文件句柄数量。</p></blockquote></li><li><p>use：用来设置 Nginx 服务器选择哪种事件驱动来处理网络消息</p><table><thead><tr><th>语法</th><th>use method;</th></tr></thead><tbody><tr><td>默认值</td><td>根据操作系统定</td></tr><tr><td>位置</td><td>events</td></tr></tbody></table><blockquote><p>注意：此处所选择事件处理模型是 Nginx 优化部分的一个重要内容，method的可选值有 select/poll/epoll/kqueue 等，之前在准备 CentOS 环境的时候，我们强调过要使用 Linux 内核在2.6以上，就是为了能使用epoll函数来优化 Nginx。</p><p>另外这些值的选择，我们也可以在编译的时候使用</p><p><code>--with-select_module</code>、<code>--without-select_module</code>、</p><p><code> --with-poll_module</code>、<code> --without-poll_module</code>来设置是否需要将对应的事件驱动模块编译到Nginx的内核。</p></blockquote></li><li><p>events指令配置实例</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>events<span class="token punctuation">{</span>
	accept_mutex on<span class="token punctuation">;</span>
	multi_accept on<span class="token punctuation">;</span>
	worker_commections <span class="token number">1024</span><span class="token punctuation">;</span>
	use epoll<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动测试</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nginx <span class="token parameter variable">-t</span>
nginx <span class="token parameter variable">-s</span> reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h4 id="_9-3-http-块" tabindex="-1"><a class="header-anchor" href="#_9-3-http-块" aria-hidden="true">#</a> 9.3 http 块</h4><p><strong>（1）定义 MIME-TYPE</strong></p><blockquote><p>浏览器中可以显示的内容有HTML、XML、GIF等种类繁多的文件、媒体等资源，浏览器为了区分这些资源，就需要使用MIME Type。所以说MIME Type是网络资源的媒体类型。Nginx 作为 Web 服务器，也需要能够识别前端请求的资源类型。</p></blockquote><p>在 Nginx 的配置文件中，默认有两行配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>include mime.types;
default_type application/octet-stream;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>default_type：用来配置 Nginx 响应前端请求默认的 MIME 类型。</p><table><thead><tr><th>语法</th><th>default_type mime-type;</th></tr></thead><tbody><tr><td>默认值</td><td>default_type text/plain；</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><blockquote><p>在default_type之前还有一句<code>include mime.types</code>，相当于把 mime.types 文件中MIMT类型与相关类型文件的文件后缀名的对应关系加入到当前的配置文件中。</p></blockquote><p>MIME 实战案例</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>location /text <span class="token punctuation">{</span>
	default_type text/plain;
    return <span class="token number">200</span> <span class="token string">&quot;response text&quot;</span>;
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>location /json <span class="token punctuation">{</span>
    default_type application/json;
    return <span class="token number">200</span> &#39;<span class="token punctuation">{</span><span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;zhangsan&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;age&quot;</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">}</span>&#39;;
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（2）自定义日志服务</strong></p><p>Nginx中日志的类型分 access.log、error.log：</p><ul><li>access.log：用来记录用户所有的访问请求</li><li>error.log：记录 Nginx 本身运行时的错误信息，不会记录用户的访问请求</li></ul><p>Nginx 服务器支持对服务日志的格式、大小、输出等进行设置，需要使用到两个指令，分别是 access_log 和 log_format 指令：</p><ul><li><p>access_log：用来设置用户访问日志的相关属性</p><table><thead><tr><th>语法</th><th>access_log path[format[buffer=size]]</th></tr></thead><tbody><tr><td>默认值</td><td>access_log logs/access.log combined;</td></tr><tr><td>位置</td><td><code>http</code>, <code>server</code>, <code>location</code></td></tr></tbody></table></li><li><p>log_format：用来指定日志的输出格式</p><table><thead><tr><th>语法</th><th>log_format name [escape=default|json|none] string....;</th></tr></thead><tbody><tr><td>默认值</td><td>log_format combined &quot;...&quot;;</td></tr><tr><td>位置</td><td>http</td></tr></tbody></table></li></ul><p><strong>（3）其他配置指令</strong></p><ul><li><p>sendfile：用来设置 Nginx 服务器是否使用sendfile()传输文件，该属性可以大大提高 Nginx 处理静态资源的性能</p><table><thead><tr><th>语法</th><th>sendfile on|off；</th></tr></thead><tbody><tr><td>默认值</td><td>sendfile off;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table></li><li><p>keepalive_timeout：用来设置长连接的超时时间</p><table><thead><tr><th>语法</th><th>keepalive_timeout time;</th></tr></thead><tbody><tr><td>默认值</td><td>keepalive_timeout 75s;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><blockquote><p>为什么要使用keepalive?</p><p>我们都知道HTTP是一种无状态协议，客户端向服务端发送一个TCP请求，服务端响应完毕后断开连接。 如何客户端向服务端发送多个请求，每个请求都需要重新创建一次连接，效率相对来说比较多，使用keepalive模式，可以告诉服务器端在处理完一个请求后保持这个TCP连接的打开状态，若接收到来自这个客户端的其他请求，服务端就会利用这个未被关闭的连接，而不需要重新创建一个新连接，提升效率，但是这个连接也不能一直保持，这样的话，连接如果过多，也会是服务端的性能下降，这个时候就需要我们进行设置其的超时时间。</p></blockquote></li><li><p>keepalive_requests：用来设置一个keep-alive连接使用的次数</p><table><thead><tr><th>语法</th><th>keepalive_requests number;</th></tr></thead><tbody><tr><td>默认值</td><td>keepalive_requests 100;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table></li></ul><p><strong>（4）server块和location块</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>				   <span class="token comment"># 端口号</span>
    server_name  localhost<span class="token punctuation">;</span>			    <span class="token comment"># IP 地址</span>
    location / <span class="token punctuation">{</span>
        root   html<span class="token punctuation">;</span>				   <span class="token comment"># 根目录所在位置</span>
        index  index.html index.htm<span class="token punctuation">;</span>	<span class="token comment"># 首页文件资源</span>
    <span class="token punctuation">}</span>

    error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span> <span class="token number">404</span>  /50x.html<span class="token punctuation">;</span>
    location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
        root   html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、nginx-服务与系统" tabindex="-1"><a class="header-anchor" href="#二、nginx-服务与系统" aria-hidden="true">#</a> 二、Nginx 服务与系统</h2><h3 id="_1、nginx-配置成系统服务" tabindex="-1"><a class="header-anchor" href="#_1、nginx-配置成系统服务" aria-hidden="true">#</a> 1、Nginx 配置成系统服务</h3><p>把Nginx应用服务设置成为系统服务，方便对Nginx服务的启动和停止等相关操作，具体实现步骤:</p><p>（1）在<code>/usr/lib/systemd/system</code>目录下添加nginx.service,内容如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vim /usr/lib/systemd/system/nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[Unit]
Description=nginx web service
Documentation=http://nginx.org/en/docs/
After=network.target

[Service]
Type=forking
PIDFile=/usr/local/nginx/logs/nginx.pid
ExecStartPre=/usr/local/nginx/sbin/nginx -t -c /usr/local/nginx/conf/nginx.conf
ExecStart=/usr/local/nginx/sbin/nginx
ExecReload=/usr/local/nginx/sbin/nginx -s reload
ExecStop=/usr/local/nginx/sbin/nginx -s stop
PrivateTmp=true

[Install]
WantedBy=default.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）添加完成后如果权限有问题需要进行权限设置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>chmod 755 /usr/lib/systemd/system/nginx.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（3）使用系统命令来操作Nginx服务</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>启动: systemctl start nginx
停止: systemctl stop nginx
重启: systemctl restart nginx
重新加载配置文件: systemctl reload nginx
查看nginx状态: systemctl status nginx
开机启动: systemctl enable nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、nginx-命令配置到系统环境" tabindex="-1"><a class="header-anchor" href="#_2、nginx-命令配置到系统环境" aria-hidden="true">#</a> 2、Nginx 命令配置到系统环境</h3><p>前面介绍过Nginx安装目录下的二级制可执行文件<code>nginx</code>的很多命令，要想使用这些命令前提是需要进入sbin目录下才能使用，很不方便；</p><p>可以将该二进制可执行文件加入到系统的环境变量，这样的话在任何目录都可以使用 nginx 对应的相关命令。具体实现步骤如下:</p><p>（1）修改<code>/etc/profile</code>文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vim /etc/profile
在最后一行添加
export PATH=$PATH:/usr/local/nginx/sbin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）使之立即生效</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>source /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（3）执行nginx命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nginx -V
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="三、nginx-静态资源部署" tabindex="-1"><a class="header-anchor" href="#三、nginx-静态资源部署" aria-hidden="true">#</a> 三、Nginx 静态资源部署</h2><h3 id="_1、nginx-静态资源概述" tabindex="-1"><a class="header-anchor" href="#_1、nginx-静态资源概述" aria-hidden="true">#</a> 1、Nginx 静态资源概述</h3><p>通过浏览器发送一个HTTP请求实现从客户端发送请求到服务器端获取所需要内容后并把内容回显展示在页面的一个过程。这个时候，所请求的内容就分为两种类型，一类是静态资源、一类是动态资源：</p><ul><li>静态资源即指在服务器端真实存在并且能直接拿来展示的一些文件，比如常见的html页面、css文件、js文件、图 片、视频等资源；</li><li>动态资源即指在服务器端真实存在但是要想获取需要经过一定的业务逻辑处理，根据不同的条件展示在页面不同这 一部分内容，比如说报表数据展示、根据当前登录用户展示相关具体数据等资源；</li></ul><h3 id="_2、nginx-静态资源配置指令" tabindex="-1"><a class="header-anchor" href="#_2、nginx-静态资源配置指令" aria-hidden="true">#</a> 2、Nginx 静态资源配置指令</h3><h4 id="_2-1-listen-指令" tabindex="-1"><a class="header-anchor" href="#_2-1-listen-指令" aria-hidden="true">#</a> 2.1 listen 指令</h4><p>listen：用来配置监听端口。</p><table><thead><tr><th>语法</th><th>listen address[:port] [default_server]...;<br>listen port [default_server]...;</th></tr></thead><tbody><tr><td>默认值</td><td>listen *:80 | *:8000</td></tr><tr><td>位置</td><td>server</td></tr></tbody></table><p>常用的设置方式如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>listen <span class="token number">127.0</span>.0.1:8000<span class="token punctuation">;</span> <span class="token comment"># listen localhost:8000 监听指定的IP和端口</span>
listen <span class="token number">127.0</span>.0.1<span class="token punctuation">;</span>	<span class="token comment"># 监听指定IP的所有端口</span>
listen <span class="token number">8000</span><span class="token punctuation">;</span>	<span class="token comment"># 监听指定端口上的连接</span>
listen *:8000<span class="token punctuation">;</span>	<span class="token comment"># 监听指定端口上的连接</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>default_server属性是标识符，用来将此虚拟主机设置成默认主机。所谓的默认主机指的是如果没有匹配到对应的address:port，则会默认执行的。如果不指定默认使用的是第一个server：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server<span class="token punctuation">{</span>
	listen <span class="token number">8080</span><span class="token punctuation">;</span>
	server_name <span class="token number">127.0</span>.0.1<span class="token punctuation">;</span>
	location /<span class="token punctuation">{</span>
		root html<span class="token punctuation">;</span>
		index index.html<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
server<span class="token punctuation">{</span>
	listen <span class="token number">8080</span> default_server<span class="token punctuation">;</span>
	server_name localhost<span class="token punctuation">;</span>
	default_type text/plain<span class="token punctuation">;</span>
	<span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-server-name-指令" tabindex="-1"><a class="header-anchor" href="#_2-2-server-name-指令" aria-hidden="true">#</a> 2.2 server_name 指令</h4><p>server_name：用来设置虚拟主机服务名称。</p><table><thead><tr><th>语法</th><th>server_name name ...;<br>name可以提供多个中间用空格分隔</th></tr></thead><tbody><tr><td>默认值</td><td>server_name &quot;&quot;;</td></tr><tr><td>位置</td><td>server</td></tr></tbody></table><p>关于 server_name 的配置方式有三种，分别是：精确匹配、通配符匹配、正则表达式匹配</p><p><strong>配置方式一：精确匹配</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
	listen <span class="token number">80</span><span class="token punctuation">;</span>
	server_name www.baidu.com www.jd.com<span class="token punctuation">;</span>
	<span class="token punctuation">..</span>.
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>hosts是一个没有扩展名的系统文件，可以用记事本等工具打开，其作用就是将一些常用的网址域名与其对应的IP地址建立一个关联“数据库”，当用户在浏览器中输入一个需要登录的网址时，系统会首先自动从hosts文件中寻找对应的IP地址，一旦找到，系统会立即打开对应网页，如果没有找到，则系统会再将网址提交DNS域名解析服务器进行IP地址的解析。</p><ul><li>Windows：C:\\Windows\\System32\\drivers\\etc</li><li>CentOS：/etc/hosts</li></ul></blockquote><p>因为域名是要收取一定的费用，所以我们可以使用修改hosts文件来制作一些虚拟域名来使用。需要修改 <code>/etc/hosts</code>文件来添加：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/hosts
<span class="token number">127.0</span>.0.1 www.baidu.com
<span class="token number">127.0</span>.0.1 www.jd.com
<span class="token number">127.0</span>.0.0 www.taiyi.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>配置方式二：使用通配符配置</strong></p><p>server_name 中支持通配符&quot;*&quot;,但需要注意的是通配符不能出现在域名的中间，只能出现在首段或尾段，如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
	listen <span class="token number">80</span><span class="token punctuation">;</span>
	server_name  *.baidu.com	www.baidu.*<span class="token punctuation">;</span>
	<span class="token comment">#www.baidu.com abc.baidu.com www.baidu.cn</span>
	<span class="token punctuation">..</span>.
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>配置三：使用正则表达式配置</strong></p><p>server_name 中可以使用正则表达式，并且使用<code>~</code>作为正则表达式字符串的开始标记。</p><p>常见的正则表达式</p><table><thead><tr><th>代码</th><th>说明</th></tr></thead><tbody><tr><td>^</td><td>匹配搜索字符串开始位置</td></tr><tr><td>$</td><td>匹配搜索字符串结束位置</td></tr><tr><td>.</td><td>匹配除换行符\\n之外的任何单个字符</td></tr><tr><td>\\</td><td>转义字符，将下一个字符标记为特殊字符</td></tr><tr><td>[xyz]</td><td>字符集，与任意一个指定字符匹配</td></tr><tr><td>[a-z]</td><td>字符范围，匹配指定范围内的任何字符</td></tr><tr><td>\\w</td><td>与以下任意字符匹配 A-Z a-z 0-9 和下划线,等效于[A-Za-z0-9_]</td></tr><tr><td>\\d</td><td>数字字符匹配，等效于[0-9]</td></tr><tr><td>{n}</td><td>正好匹配n次</td></tr><tr><td>{n,}</td><td>至少匹配n次</td></tr><tr><td>{n,m}</td><td>匹配至少n次至多m次</td></tr><tr><td>*</td><td>零次或多次，等效于{0,}</td></tr><tr><td>+</td><td>一次或多次，等效于{1,}</td></tr><tr><td>?</td><td>零次或一次，等效于{0,1}</td></tr></tbody></table><p>配置如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server<span class="token punctuation">{</span>
        listen <span class="token number">80</span><span class="token punctuation">;</span>
        server_name ~^www<span class="token punctuation">\\</span>.<span class="token punctuation">\\</span><span class="token punctuation">(</span>w+<span class="token punctuation">)</span><span class="token punctuation">\\</span>.com$<span class="token punctuation">;</span>
        default_type text/plain<span class="token punctuation">;</span>
        <span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token variable">$1</span>  <span class="token variable">$2</span> <span class="token punctuation">..</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment"># 注意 ~后面不能加空格，括号可以取值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>server_name 匹配执行顺序</strong>：</p><p>由于 server_name 指令支持通配符和正则表达式，因此在包含多个虚拟主机的配置文件中，可能会出现一个名称被多个虚拟主机的 server_name 匹配成功，当遇到这种情况，当前的请求交给谁来处理呢？</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server<span class="token punctuation">{</span>
	listen <span class="token number">80</span><span class="token punctuation">;</span>
	server_name ~^www<span class="token punctuation">\\</span>.<span class="token punctuation">\\</span>w+<span class="token punctuation">\\</span>.com$<span class="token punctuation">;</span>
	default_type text/plain<span class="token punctuation">;</span>
	<span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&#39;regex_success&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

server<span class="token punctuation">{</span>
	listen <span class="token number">80</span><span class="token punctuation">;</span>
	server_name www.baidu.*<span class="token punctuation">;</span>
	default_type text/plain<span class="token punctuation">;</span>
	<span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&#39;wildcard_after_success&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

server<span class="token punctuation">{</span>
	listen <span class="token number">80</span><span class="token punctuation">;</span>
	server_name *.baidu.com<span class="token punctuation">;</span>
	default_type text/plain<span class="token punctuation">;</span>
	<span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&#39;wildcard_before_success&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

server<span class="token punctuation">{</span>
	listen <span class="token number">80</span><span class="token punctuation">;</span>
	server_name www.baidu.com<span class="token punctuation">;</span>
	default_type text/plain<span class="token punctuation">;</span>
	<span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&#39;exact_success&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

server<span class="token punctuation">{</span>
	listen <span class="token number">80</span> default_server<span class="token punctuation">;</span>
	server_name _<span class="token punctuation">;</span>
	default_type text/plain<span class="token punctuation">;</span>
	<span class="token builtin class-name">return</span> <span class="token number">444</span> <span class="token string">&#39;default_server not found server&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结论：</p><p>精准匹配 &gt; 前置通配符 &gt; 后置通配符 &gt; 正则匹配 &gt; 默认</p><h4 id="_2-3-location-指令" tabindex="-1"><a class="header-anchor" href="#_2-3-location-指令" aria-hidden="true">#</a> 2.3 location 指令</h4><p>location：用来设置请求的URI</p><table><thead><tr><th>语法</th><th>location [ = | ~ | ~* | ^~ |@ ] uri{...}</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>server,location</td></tr></tbody></table><p>uri变量是待匹配的请求字符串，可以不包含正则表达式，也可以包含正则表达式，那么 Nginx 服务器在搜索匹配 location 的时候，是先使用不包含正则表达式进行匹配，找到一个匹配度最高的一个，然后在通过包含正则表达式的进行匹配，如果能匹配到直接访问，匹配不到，就使用刚才匹配度最高的那个 location 来处理请求。</p><p>属性介绍：</p><p><strong>不带符号，要求必须以指定模式开始</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
	listen <span class="token number">80</span><span class="token punctuation">;</span>
	server_name <span class="token number">127.0</span>.0.1<span class="token punctuation">;</span>
	location /abc <span class="token punctuation">{</span>
		default_type text/plain<span class="token punctuation">;</span>
		<span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&quot;access success&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment"># 以下访问都是正确的</span>
<span class="token comment"># http://192.168.200.133/abc</span>
<span class="token comment"># http://192.168.200.133/abc?p1=TOM</span>
<span class="token comment"># http://192.168.200.133/abc/</span>
<span class="token comment"># http://192.168.200.133/abcdef</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>= : 用于不包含正则表达式的uri前，必须与指定的模式精确匹配</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
	listen <span class="token number">80</span><span class="token punctuation">;</span>
	server_name <span class="token number">127.0</span>.0.1<span class="token punctuation">;</span>
	location <span class="token operator">=</span>/abc<span class="token punctuation">{</span>
		default_type text/plain<span class="token punctuation">;</span>
		<span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&quot;access success&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment"># 可以匹配到</span>
<span class="token comment"># http://192.168.200.133/abc</span>
<span class="token comment"># http://192.168.200.133/abc?p1=TOM</span>
<span class="token comment"># 匹配不到</span>
<span class="token comment"># http://192.168.200.133/abc/</span>
<span class="token comment"># http://192.168.200.133/abcdef</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>~ ： 用于表示当前uri中包含了正则表达式，并且区分大小写</strong><strong>~*: 用于表示当前uri中包含了正则表达式，并且不区分大小写</strong></p><p>换句话说，如果uri包含了正则表达式，需要用上述两个符合来标识</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
	listen <span class="token number">80</span><span class="token punctuation">;</span>
	server_name <span class="token number">127.0</span>.0.1<span class="token punctuation">;</span>
	location ~^/abc<span class="token punctuation">\\</span>w<span class="token variable">\${
		default_type text<span class="token operator">/</span>plain;
		return 200 &quot;access success&quot;;
	}</span>
<span class="token punctuation">}</span>
server <span class="token punctuation">{</span>
	listen <span class="token number">80</span><span class="token punctuation">;</span>
	server_name <span class="token number">127.0</span>.0.1<span class="token punctuation">;</span>
	location ~*^/abc<span class="token punctuation">\\</span>w<span class="token variable">\${
		default_type text<span class="token operator">/</span>plain;
		return 200 &quot;access success&quot;;
	}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>^~: 用于不包含正则表达式的uri前，功能和不加符号的一致，唯一不同的是，如果模式匹配，那么就停止搜索其他模式了</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
	listen <span class="token number">80</span><span class="token punctuation">;</span>
	server_name <span class="token number">127.0</span>.0.1<span class="token punctuation">;</span>
	location ^~/abc<span class="token punctuation">{</span>
		default_type text/plain<span class="token punctuation">;</span>
		<span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&quot;access success&quot;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-4-设置请求资源目录-root-alias" tabindex="-1"><a class="header-anchor" href="#_2-4-设置请求资源目录-root-alias" aria-hidden="true">#</a> 2.4 设置请求资源目录 root | alias</h4><p><strong>root：设置请求的根目录</strong></p><table><thead><tr><th>语法</th><th>root path;</th></tr></thead><tbody><tr><td>默认值</td><td>root html;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><blockquote><p>path：Nginx服务器接收到请求以后查找资源的根目录路径。</p></blockquote><p><strong>alias：用来更改location的URI</strong></p><table><thead><tr><th>语法</th><th>alias path;</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>location</td></tr></tbody></table><blockquote><p>path为修改后的根路径</p></blockquote><p>以上两个指令都可以来指定访问资源的路径，那么这两者之间的区别是什么?</p><p>举例说明：</p><p>（1）在<code>/usr/local/nginx/html</code>目录下创建一个 images目录,并在目录下放入一张图片<code>mv.png</code>图片</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location /images <span class="token punctuation">{</span>
	root /usr/local/nginx/html<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问图片的路径为:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>http://106.13.209.121/images/mv.png
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（2）如果把root改为alias</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location /images <span class="token punctuation">{</span>
	<span class="token builtin class-name">alias</span> /usr/local/nginx/html<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次访问上述地址，页面会出现404的错误，查看错误日志会发现是因为地址不对，所以验证了：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>root的处理结果是: root路径+location路径
/usr/local/nginx/html/images/mv.png
alias的处理结果是:使用alias路径替换location路径
/usr/local/nginx/html/images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要在alias后面路径改为</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location /images <span class="token punctuation">{</span>
	<span class="token builtin class-name">alias</span> /usr/local/nginx/html/images<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）如果location路径是以 / 结尾，则alias也必须是以 / 结尾，root 没有要求</p><p>将上述配置修改为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location /images/ {
	alias /usr/local/nginx/html/images;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问就会出问题，查看错误日志还是路径不对，所以需要把alias后面加上 /</p><blockquote><p>小结：</p><ul><li>root的处理结果是：root路径+location路径</li><li>alias的处理结果是：使用alias路径替换location路径</li><li>alias是一个目录别名的定义，root则是最上层目录的含义</li><li>如果 location 路径是以 / 结尾，则 alias 也必须是以 / 结尾，root 没有要求</li></ul></blockquote><h4 id="_2-5-index-指令" tabindex="-1"><a class="header-anchor" href="#_2-5-index-指令" aria-hidden="true">#</a> 2.5 index 指令</h4><p><strong>index：设置网站的默认首页</strong></p><table><thead><tr><th>语法</th><th>index file ...;</th></tr></thead><tbody><tr><td>默认值</td><td>index index.html;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><blockquote><p>index 后面可以跟多个设置，如果访问的时候没有指定具体访问的资源，则会依次进行查找，找到第一个为止。</p></blockquote><p>举例说明：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location / <span class="token punctuation">{</span>
	root /usr/local/nginx/html<span class="token punctuation">;</span>
	index index.html index.htm<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment"># 访问该location的时候，可以通过 http://ip:port/，地址后面如果不添加任何内容，则默认依次访问index.html和index.htm，找到第一个来进行返回</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-6-error-page-指令" tabindex="-1"><a class="header-anchor" href="#_2-6-error-page-指令" aria-hidden="true">#</a> 2.6 error_page 指令</h4><p>error_page：设置网站的错误页面</p><table><thead><tr><th>语法</th><th>error_page code ... [=[response]] uri;</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>http、server、location......</td></tr></tbody></table><blockquote><p>当出现对应的响应code后，如何来处理。</p></blockquote><p>举例说明：</p><p>（1）可以指定具体跳转的地址</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
	error_page <span class="token number">404</span> http://www.baidu.com<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）可以指定重定向地址</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server<span class="token punctuation">{</span>
	error_page <span class="token number">404</span> /50x.html<span class="token punctuation">;</span>
	error_page <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span> /50x.html<span class="token punctuation">;</span>
	location <span class="token operator">=</span>/50x.html <span class="token punctuation">{</span>
		root html<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）使用location的@符合完成错误信息展示</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server<span class="token punctuation">{</span>
	error_page <span class="token number">404</span> @jump_to_error<span class="token punctuation">;</span>
	location @jump_to_error <span class="token punctuation">{</span>
		default_type text/plain<span class="token punctuation">;</span>
		<span class="token builtin class-name">return</span> <span class="token number">404</span> <span class="token string">&#39;Not Found Page...&#39;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可选项<code>=[response]</code>的作用是用来将相应代码更改为另外一个</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server<span class="token punctuation">{</span>
	error_page <span class="token number">404</span> <span class="token operator">=</span><span class="token number">200</span> /50x.html<span class="token punctuation">;</span>
	location <span class="token operator">=</span>/50x.html<span class="token punctuation">{</span>
		root html<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment"># 这样的话，当返回404找不到对应的资源的时候，在浏览器上可以看到，最终返回的状态码是200，这块需要注意下，编写error_page后面的内容，404后面需要加空格，200前面不能加空格</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、nginx-静态资源优化配置" tabindex="-1"><a class="header-anchor" href="#_3、nginx-静态资源优化配置" aria-hidden="true">#</a> 3、Nginx 静态资源优化配置</h3><blockquote><p>Nginx对静态资源如何进行优化配置？</p><p>从三个属性配置进行优化：</p><ul><li>sendfile on;</li><li>tcp_nopush on;</li><li>tcp_nodeplay on;</li></ul></blockquote><h4 id="_3-1-sendfile" tabindex="-1"><a class="header-anchor" href="#_3-1-sendfile" aria-hidden="true">#</a> 3.1 sendfile</h4><p>用来开启高效的文件传输模式。</p><table><thead><tr><th>语法</th><th>sendﬁle on |oﬀ;</th></tr></thead><tbody><tr><td>默认值</td><td>sendﬁle oﬀ;</td></tr><tr><td>位置</td><td>http、server、location...</td></tr></tbody></table><blockquote><p>请求静态资源的过程：客户端通过网络接口向服务端发送请求，操作系统将这些客户端的请求传递给服务器端应用程序，服务器端应用程序会处理这些请求，请求处理完成以后，操作系统还需要将处理得到的结果通过网络适配器传递回去。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
	listen <span class="token number">80</span><span class="token punctuation">;</span>
	server_name localhost；
	location / <span class="token punctuation">{</span>
		root html<span class="token punctuation">;</span>
		index index.html<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment"># 在html目录下有一个welcome.html页面，访问地址 http://106.13.209.121/welcome.html</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+m+'" alt="sendfile" tabindex="0" loading="lazy"><figcaption>sendfile</figcaption></figure><h4 id="_3-2-tcp-nopush" tabindex="-1"><a class="header-anchor" href="#_3-2-tcp-nopush" aria-hidden="true">#</a> 3.2 tcp_nopush</h4><p>该指令必须在 sendfile 打开的状态下才会生效，主要是用来提升网络包的传输效率</p><table><thead><tr><th>语法</th><th>tcp_nopush on|off;</th></tr></thead><tbody><tr><td>默认值</td><td>tcp_nopush oﬀ;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><h4 id="_3-3-tcp-nodelay" tabindex="-1"><a class="header-anchor" href="#_3-3-tcp-nodelay" aria-hidden="true">#</a> 3.3 tcp_nodelay</h4><p>该指令必须在 keep-alive 连接开启的情况下才生效，来提高网络包传输的实时性</p><table><thead><tr><th>语法</th><th>tcp_nodelay on|off;</th></tr></thead><tbody><tr><td>默认值</td><td>tcp_nodelay on;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><figure><img src="'+h+`" alt="tcp_nopush和tcp_nodeplay" tabindex="0" loading="lazy"><figcaption>tcp_nopush和tcp_nodeplay</figcaption></figure><ul><li><strong>TCP_NOPUSH</strong> 是 FreeBSD 的一个 socket 选项，对应 Linux 的 TCP_CORK，Nginx 里统一用 <code>tcp_nopush</code> 来控制它，并且只有在启用了 sendfile 之后才生效。启用它之后，数据包会累计到一定大小之后才会发送，减小了额外开销，提高网络效率。</li><li><strong>TCP_NODELAY</strong> 也是一个 socket 选项，启用后会禁用 Nagle 算法，尽快发送数据，某些情况下可以节约 200ms（Nagle 算法原理是：在发出去的数据还未被确认之前，新生成的小数据先存起来，凑满一个 MSS 或者等到收到确认后再发送）。Nginx 只会针对处于 keep-alive 状态的 TCP 连接才会启用 <code>tcp_nodelay</code>。</li></ul><blockquote><p>可以看到 TCP_NOPUSH 是要等数据包累积到一定大小才发送，TCP_NODELAY 是要尽快发送，二者相互矛盾。实际上，它们确实可以一起用，最终的效果是先填满包，再尽快发送。</p></blockquote><h3 id="_4、nginx-静态资源压缩" tabindex="-1"><a class="header-anchor" href="#_4、nginx-静态资源压缩" aria-hidden="true">#</a> 4、Nginx 静态资源压缩</h3><h4 id="_4-1-概述" tabindex="-1"><a class="header-anchor" href="#_4-1-概述" aria-hidden="true">#</a> 4.1 概述</h4><p>为什么要压缩？</p><p>传输内容越小，传输速度越快。那么同样的内容，我们就可以通过压缩，提升效率。</p><p>在 Nginx 的配置文件中可以通过配置gzip来对静态资源进行压缩，相关的指令可以配置在http块、server块和location块中，Nginx可以通过</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ngx_http_gzip_module模块
ngx_http_gzip_static_module模块
ngx_http_gunzip_module模块
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-gzip-各模块支持的配置指令" tabindex="-1"><a class="header-anchor" href="#_4-2-gzip-各模块支持的配置指令" aria-hidden="true">#</a> 4.2 Gzip 各模块支持的配置指令</h4><p>接下来所学习的指令都来自ngx_http_gzip_module模块，该模块会在nginx安装的时候内置到nginx的安装环境中，也就是说我们可以直接使用这些指令。</p><p>（1）<strong>gzip 指令</strong>：该指令用于开启或者关闭gzip功能</p><table><thead><tr><th>语法</th><th>gzip on|off;</th></tr></thead><tbody><tr><td>默认值</td><td>gzip off;</td></tr><tr><td>位置</td><td>http、server、location...</td></tr></tbody></table><blockquote><p>注意只有该指令为打开状态，下面的指令才有效果</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>http<span class="token punctuation">{</span>
   <span class="token function">gzip</span> on<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）<strong>gzip_types 指令</strong>：该指令可以根据响应页的MIME类型选择性地开启Gzip压缩功能</p><table><thead><tr><th>语法</th><th>gzip_types mime-type ...;</th></tr></thead><tbody><tr><td>默认值</td><td>gzip_types text/html;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><blockquote><p>所选择的值可以从mime.types文件中进行查找，也可以使用&quot;*&quot;代表所有。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>http<span class="token punctuation">{</span>
	gzip_types application/javascript<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）<strong>gzip_comp_level 指令</strong>：该指令用于设置Gzip压缩程度，级别从1-9,1表示要是程度最低，要是效率最高，9刚好相反，压缩程度最高，但是效率最低最费时间。</p><table><thead><tr><th>语法</th><th>gzip_comp_level level;</th></tr></thead><tbody><tr><td>默认值</td><td>gzip_comp_level 1;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>http<span class="token punctuation">{</span>
	gzip_comp_level <span class="token number">6</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（4）<strong>gzip_vary 指令</strong>：该指令用于设置使用Gzip进行压缩发送是否携带“Vary:Accept-Encoding”头域的响应头部。主要是告诉接收方，所发送的数据经过了Gzip压缩处理</p><table><thead><tr><th>语法</th><th>gzip_vary on|off;</th></tr></thead><tbody><tr><td>默认值</td><td>gzip_vary off;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><p>（5）<strong>gzip_buffers 指令</strong>：该指令用于处理请求压缩的缓冲区数量和大小。</p><table><thead><tr><th>语法</th><th>gzip_buffers number size;</th></tr></thead><tbody><tr><td>默认值</td><td>gzip_buffers 32 4k|16 8k;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><blockquote><p>number：指定Nginx服务器向系统申请缓存空间个数，size：指的是每个缓存空间的大小。</p><p>主要实现的是申请number个每个大小为size的内存空间。这个值的设定一般会和服务器的操作系统有关，所以建议此项不设置，使用默认值即可。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gzip_buffers <span class="token number">4</span> 16K<span class="token punctuation">;</span>	  <span class="token comment">#缓存空间大小</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（6）<strong>gzip_disable 指令</strong>：针对不同种类客户端发起的请求，可以选择性地开启和关闭Gzip功能。</p><table><thead><tr><th>语法</th><th>gzip_disable regex ...;</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><blockquote><p>regex：根据客户端的浏览器标志(user-agent)来设置，支持使用正则表达式。指定的浏览器标志不使用Gzip.该指令一般是用来排除一些明显不支持Gzip的浏览器。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gzip_disable <span class="token string">&quot;MSIE [1-6]\\.&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（7）<strong>gzip_http_version 指令</strong>：针对不同的HTTP协议版本，可以选择性地开启和关闭Gzip功能。</p><table><thead><tr><th>语法</th><th>gzip_http_version 1.0|1.1;</th></tr></thead><tbody><tr><td>默认值</td><td>gzip_http_version 1.1;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><p>该指令是指定使用Gzip的HTTP最低版本，该指令一般采用默认值即可。</p><p>（8）<strong>gzip_min_length 指令</strong>：该指令针对传输数据的大小，可以选择性地开启和关闭Gzip功能</p><table><thead><tr><th>语法</th><th>gzip_min_length length;</th></tr></thead><tbody><tr><td>默认值</td><td>gzip_min_length 20;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><blockquote><p>nignx计量大小的单位：bytes[字节] / kb[千字节] / M[兆] 例如: 1024 / 10k|K / 10m|M</p><p>Gzip压缩功能对大数据的压缩效果明显，但是如果要压缩的数据比较小的话，可能出现越压缩数据量越大的情况，因此我们需要根据响应内容的大小来决定是否使用Gzip功能，响应页面的大小可以通过头信息中的<code>Content-Length</code>来获取。但是如何使用了Chunk编码动态压缩，该指令将被忽略。建议设置为1K或以上。</p></blockquote><p>（9）<strong>gzip_proxied 指令</strong>：该指令设置是否对服务端返回的结果进行Gzip压缩。</p><table><thead><tr><th>语法</th><th>gzip_proxied off|expired|no-cache|<br>no-store|private|no_last_modified|no_etag|auth|any;</th></tr></thead><tbody><tr><td>默认值</td><td>gzip_proxied off;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><blockquote><p>off - 关闭Nginx服务器对后台服务器返回结果的Gzip压缩 expired - 启用压缩，如果header头中包含 &quot;Expires&quot; 头信息 no-cache - 启用压缩，如果header头中包含 &quot;Cache-Control:no-cache&quot; 头信息 no-store - 启用压缩，如果header头中包含 &quot;Cache-Control:no-store&quot; 头信息 private - 启用压缩，如果header头中包含 &quot;Cache-Control:private&quot; 头信息 no_last_modified - 启用压缩,如果header头中不包含 &quot;Last-Modified&quot; 头信息 no_etag - 启用压缩 ,如果header头中不包含 &quot;ETag&quot; 头信息 auth - 启用压缩 , 如果header头中包含 &quot;Authorization&quot; 头信息 any - 无条件启用压缩</p></blockquote><h4 id="_4-3-gzip-压缩功能配置" tabindex="-1"><a class="header-anchor" href="#_4-3-gzip-压缩功能配置" aria-hidden="true">#</a> 4.3 Gzip 压缩功能配置</h4><p>Gzip 配置在很多地方可能都会用到，可以将这些内容抽取到一个配置文件中，然后通过 include 指令把配置文件再次加载到 nginx.conf 配置文件中，方便使用：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gzip</span> on<span class="token punctuation">;</span>  			  <span class="token comment">#开启gzip功能</span>
gzip_types *<span class="token punctuation">;</span>		  <span class="token comment">#压缩源文件类型,根据具体的访问资源类型设定</span>
gzip_comp_level <span class="token number">6</span><span class="token punctuation">;</span>	  <span class="token comment">#gzip压缩级别</span>
gzip_min_length <span class="token number">1024</span><span class="token punctuation">;</span> <span class="token comment">#进行压缩响应页面的最小长度,content-length</span>
gzip_buffers <span class="token number">4</span> 16K<span class="token punctuation">;</span>	  <span class="token comment">#缓存空间大小</span>
gzip_http_version <span class="token number">1.1</span><span class="token punctuation">;</span> <span class="token comment">#指定压缩响应所需要的最低HTTP请求版本</span>
gzip_vary  on<span class="token punctuation">;</span>		  <span class="token comment">#往头信息中添加压缩标识</span>
gzip_disable <span class="token string">&quot;MSIE [1-6]\\.&quot;</span><span class="token punctuation">;</span> <span class="token comment">#对IE6以下的版本都不进行压缩</span>
gzip_proxied  off； <span class="token comment">#nginx作为反向代理压缩服务端返回数据的条件</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>nginx_gzip.conf</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">gzip</span> on<span class="token punctuation">;</span>
gzip_types *<span class="token punctuation">;</span>
gzip_comp_level <span class="token number">6</span><span class="token punctuation">;</span>
gzip_min_length <span class="token number">1024</span><span class="token punctuation">;</span>
gzip_buffers <span class="token number">4</span> 16K<span class="token punctuation">;</span>
gzip_http_version <span class="token number">1.1</span><span class="token punctuation">;</span>
gzip_vary  on<span class="token punctuation">;</span>
gzip_disable <span class="token string">&quot;MSIE [1-6]\\.&quot;</span><span class="token punctuation">;</span>
gzip_proxied  off<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>nginx.conf</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>include nginx_gzip.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4-4-gzip-和-sendfile-的冲突解决" tabindex="-1"><a class="header-anchor" href="#_4-4-gzip-和-sendfile-的冲突解决" aria-hidden="true">#</a> 4.4 Gzip 和 sendfile 的冲突解决</h4><p>前面在讲解sendfile的时候，提到过，开启sendfile以后，在读取磁盘上的静态资源文件的时候，可以减少拷贝的次数，可以不经过用户进程将静态文件通过网络设备发送出去，但是Gzip要想对资源压缩，是需要经过用户进程进行操作的。所以如何解决两个设置的共存问题。</p><p>可以使用 ngx_http_gzip_static_module 模块的 gzip_static 指令来解决。</p><p><strong>gzip_static</strong>：检查与访问资源同名的.gz文件时，response 中以 gzip 相关的 header 返回 .gz 文件的内容。</p><table><thead><tr><th>语法</th><th><strong>gzip_static</strong> on | off | always;</th></tr></thead><tbody><tr><td>默认值</td><td>gzip_static off;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><h3 id="_5、nginx-静态资源的缓存处理" tabindex="-1"><a class="header-anchor" href="#_5、nginx-静态资源的缓存处理" aria-hidden="true">#</a> 5、Nginx 静态资源的缓存处理</h3><h4 id="_5-1-什么是缓存" tabindex="-1"><a class="header-anchor" href="#_5-1-什么是缓存" aria-hidden="true">#</a> 5.1 什么是缓存</h4><p>缓存（cache），原始意义是指访问速度比一般随机存取存储器（RAM）快的一种高速存储器，通常它不像系统主存那样使用DRAM技术，而使用昂贵但较快速的SRAM技术。缓存的设置是所有现代计算机系统发挥高性能的重要因素之一。</p><h4 id="_5-2-什么是-web-缓存" tabindex="-1"><a class="header-anchor" href="#_5-2-什么是-web-缓存" aria-hidden="true">#</a> 5.2 什么是 Web 缓存</h4><p>Web缓存是指一个Web资源（如html页面，图片，js，数据等）存在于Web服务器和客户端（浏览器）之间的副本。缓存会根据进来的请求保存输出内容的副本；当下一个请求来到的时候，如果是相同的URL，缓存会根据缓存机制决定是直接使用副本响应访问请求，还是向源服务器再次发送请求。比较常见的就是浏览器会缓存访问过网站的网页，当再次访问这个URL地址的时候，如果网页没有更新，就不会再次下载网页，而是直接使用本地缓存的网页。只有当网站明确标识资源已经更新，浏览器才会再次下载网页。</p><h4 id="_5-3-web-缓存的种类" tabindex="-1"><a class="header-anchor" href="#_5-3-web-缓存的种类" aria-hidden="true">#</a> 5.3 Web 缓存的种类</h4><p>客户端缓存</p><ul><li>浏览器缓存</li></ul><p>服务端缓存</p><ul><li>Nginx / Redis / Memcached等</li></ul><h4 id="_5-4-浏览器缓存" tabindex="-1"><a class="header-anchor" href="#_5-4-浏览器缓存" aria-hidden="true">#</a> 5.4 浏览器缓存</h4><p>是为了节约网络的资源加速浏览，浏览器在用户磁盘上对最近请求过的文档进行存储，当访问者再次请求这个页面时，浏览器就可以从本地磁盘显示文档，这样就可以加速页面的阅览。</p><h4 id="_5-5-为什么要用浏览器缓存" tabindex="-1"><a class="header-anchor" href="#_5-5-为什么要用浏览器缓存" aria-hidden="true">#</a> 5.5 为什么要用浏览器缓存</h4><ul><li>成本最低的一种缓存实现</li><li>减少网络带宽消耗</li><li>降低服务器压力</li><li>减少网络延迟，加快页面打开速度</li></ul><h4 id="_5-6-浏览器缓存的执行流程" tabindex="-1"><a class="header-anchor" href="#_5-6-浏览器缓存的执行流程" aria-hidden="true">#</a> 5.6 浏览器缓存的执行流程</h4><p>HTTP协议中和页面缓存相关的字段，我们先来认识下：</p><table><thead><tr><th>header</th><th>说明</th></tr></thead><tbody><tr><td>Expires</td><td>缓存过期的日期和时间</td></tr><tr><td>Cache-Control</td><td>设置和缓存相关的配置信息</td></tr><tr><td>Last-Modified</td><td>请求资源最后修改时间</td></tr><tr><td>ETag</td><td>请求变量的实体标签的当前值，比如文件的MD5值</td></tr></tbody></table><figure><img src="`+k+`" alt="浏览器缓存执行流程" tabindex="0" loading="lazy"><figcaption>浏览器缓存执行流程</figcaption></figure><p>（1）用户首次通过浏览器发送请求到服务端获取数据，客户端是没有对应的缓存，所以需要发送request请求来获取数据；</p><p>（2）服务端接收到请求后，获取服务端的数据及服务端缓存的允许后，返回200的成功状态码并且在响应头上附上对应资源以及缓存信息；</p><p>（3）当用户再次访问相同资源的时候，客户端会在浏览器的缓存目录中查找是否存在响应的缓存文件</p><p>（4）如果没有找到对应的缓存文件，则走(2)步</p><p>（5）如果有缓存文件，接下来对缓存文件是否过期进行判断，过期的判断标准是(Expires),</p><p>（6）如果没有过期，则直接从本地缓存中返回数据进行展示</p><p>（7）如果Expires过期，接下来需要判断缓存文件是否发生过变化</p><p>（8）判断的标准有两个，一个是ETag(Entity Tag)，一个是Last-Modified</p><p>（9）判断结果是未发生变化，则服务端返回304，直接从缓存文件中获取数据</p><p>（10）如果判断是发生了变化，重新从服务端获取数据，并根据缓存协商(服务端所设置的是否需要进行缓存数据的设置)来进行数据缓存。</p><blockquote><p>304 状态码：表示待返回资源未做修改，使用缓存即可。</p></blockquote><h4 id="_5-7-浏览器缓存相关指令" tabindex="-1"><a class="header-anchor" href="#_5-7-浏览器缓存相关指令" aria-hidden="true">#</a> 5.7 浏览器缓存相关指令</h4><h5 id="expires-指令" tabindex="-1"><a class="header-anchor" href="#expires-指令" aria-hidden="true">#</a> expires 指令</h5><blockquote><p>该指令用来控制页面缓存的作用。可以通过该指令控制HTTP应答中的“Expires&quot;和”Cache-Control&quot;</p></blockquote><table><thead><tr><th>语法</th><th>expires [modified] time<br>expires epoch|max|off;</th></tr></thead><tbody><tr><td>默认值</td><td>expires off;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><blockquote><ul><li>time：可以整数也可以是负数，指定过期时间，如果是负数，Cache-Control则为no-cache，如果为整数或0，则Cache-Control的值为max-age=time;</li><li>epoch：指定Expires的值为&#39;1 January,1970,00:00:01 GMT&#39;(1970-01-01 00:00:00)，Cache-Control的值no-cache</li><li>max：指定Expires的值为&#39;31 December2037 23:59:59GMT&#39; (2037-12-31 23:59:59) ，Cache-Control的值为10年</li><li>off：默认不缓存</li></ul></blockquote><h5 id="add-header-指令" tabindex="-1"><a class="header-anchor" href="#add-header-指令" aria-hidden="true">#</a> add_header 指令</h5><blockquote><p>用来添加指定的响应头和响应值</p></blockquote><table><thead><tr><th>语法</th><th>add_header name value [always];</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>http、server、location...</td></tr></tbody></table><p>Cache-Control作为响应头信息，可以设置如下值：</p><p>缓存响应指令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Cache-control: must-revalidate
Cache-control: no-cache
Cache-control: no-store
Cache-control: no-transform
Cache-control: public
Cache-control: private
Cache-control: proxy-revalidate
Cache-Control: max-age=&lt;seconds&gt;
Cache-control: s-maxage=&lt;seconds&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>指令</th><th>说明</th></tr></thead><tbody><tr><td>must-revalidate</td><td>可缓存但必须再向源服务器进行确认</td></tr><tr><td>no-cache</td><td>缓存前必须确认其有效性</td></tr><tr><td>no-store</td><td>不缓存请求或响应的任何内容</td></tr><tr><td>no-transform</td><td>代理不可更改媒体类型</td></tr><tr><td>public</td><td>可向任意方提供响应的缓存</td></tr><tr><td>private</td><td>仅向特定用户返回响应</td></tr><tr><td>proxy-revalidate</td><td>要求中间缓存服务器对缓存的响应有效性再进行确认</td></tr><tr><td>max-age=&lt;秒&gt;</td><td>响应最大Age值</td></tr><tr><td>s-maxage=&lt;秒&gt;</td><td>公共缓存服务器响应的最大Age值</td></tr></tbody></table><h3 id="_6、nginx-跨域问题解决" tabindex="-1"><a class="header-anchor" href="#_6、nginx-跨域问题解决" aria-hidden="true">#</a> 6、Nginx 跨域问题解决</h3><h4 id="_6-1-同源策略" tabindex="-1"><a class="header-anchor" href="#_6-1-同源策略" aria-hidden="true">#</a> 6.1 同源策略</h4><p>浏览器的同源策略：是一种约定，是浏览器最核心也是最基本的安全功能，如果浏览器少了同源策略，则浏览器的正常功能可能都会受到影响。</p><blockquote><p>同源：协议、域名(IP)、端口相同即为同源</p></blockquote><h4 id="_6-2-跨域问题" tabindex="-1"><a class="header-anchor" href="#_6-2-跨域问题" aria-hidden="true">#</a> 6.2 跨域问题</h4><p>有两台服务器分别为A、B，如果从服务器A的页面发送异步请求到服务器B获取数据，如果服务器A和服务器B不满足同源策略，则就会出现跨域问题。</p><h4 id="_6-3-解决方案" tabindex="-1"><a class="header-anchor" href="#_6-3-解决方案" aria-hidden="true">#</a> 6.3 解决方案</h4><p>使用add_header指令，该指令可以用来添加一些头信息</p><table><thead><tr><th>语法</th><th>add_header name value...</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><blockquote><p>此处用来解决跨域问题，需要添加两个头信息，一个是<code>Access-Control-Allow-Origin</code>,<code>Access-Control-Allow-Methods</code></p><ul><li>Access-Control-Allow-Origin：直译过来是允许跨域访问的源地址信息，可以配置多个(多个用逗号分隔)，也可以使用<code>*</code>代表所有源</li><li>Access-Control-Allow-Methods：直译过来是允许跨域访问的请求方式，值可以为 GET POST PUT DELETE...,可以全部设置，也可以根据需要设置，多个用逗号分</li></ul></blockquote><p>具体配置如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location /getUser<span class="token punctuation">{</span>
    add_header Access-Control-Allow-Origin *<span class="token punctuation">;</span>
    add_header Access-Control-Allow-Methods GET,POST,PUT,DELETE<span class="token punctuation">;</span>
    default_type application/json<span class="token punctuation">;</span>
    <span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&#39;{&quot;id&quot;:1,&quot;name&quot;:&quot;TOM&quot;,&quot;age&quot;:18}&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7、nginx-静态资源防盗链" tabindex="-1"><a class="header-anchor" href="#_7、nginx-静态资源防盗链" aria-hidden="true">#</a> 7、Nginx 静态资源防盗链</h3><h4 id="_7-1-什么是资源盗链" tabindex="-1"><a class="header-anchor" href="#_7-1-什么是资源盗链" aria-hidden="true">#</a> 7.1 什么是资源盗链</h4><p><strong>资源盗链</strong> 指的是此内容不在自己服务器上，而是通过技术手段，绕过别人的限制将别人的内容放到自己页面上最终展示给用户。以此来盗取大网站的空间和流量。简而言之就是用别人的东西成就自己的网站。</p><h4 id="_7-2-nginx-防盗链的实现原理" tabindex="-1"><a class="header-anchor" href="#_7-2-nginx-防盗链的实现原理" aria-hidden="true">#</a> 7.2 Nginx 防盗链的实现原理</h4><p>了解防盗链的原理之前，先学习一个HTTP的头信息 Referer，当浏览器向web服务器发送请求的时候，一般都会带上Referer，来告诉浏览器该网页是从哪个页面链接过来的。</p><p>后台服务器可以根据获取到的这个 Referer 信息来判断是否为自己信任的网站地址，如果是则放行继续访问，如果不是则可以返回403(服务端拒绝访问)的状态信息。</p><figure><img src="`+g+`" alt="防盗链中的Referer" tabindex="0" loading="lazy"><figcaption>防盗链中的Referer</figcaption></figure><h4 id="_7-3-nginx-防盗链的具体实现" tabindex="-1"><a class="header-anchor" href="#_7-3-nginx-防盗链的具体实现" aria-hidden="true">#</a> 7.3 Nginx 防盗链的具体实现</h4><p>valid_referers：Nginx 会通过查看 referer 自动和 valid_referers 后面的内容进行匹配，如果匹配到了就将$invalid_referer变量置0，如果没有匹配到，则将$invalid_referer变量置为1，匹配的过程中不区分大小写。</p><table><thead><tr><th>语法</th><th>valid_referers none|blocked|server_names|string...</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>server、location</td></tr></tbody></table><blockquote><ul><li>none: 如果Header中的Referer为空，允许访问</li><li>blocked:在Header中的Referer不为空，但是该值被防火墙或代理进行伪装过，如不带&quot;http://&quot; 、&quot;https://&quot;等协议头的资源允许访问。</li><li>server_names:指定具体的域名或者IP</li><li>string: 可以支持正则表达式和*的字符串，如果是正则表达式，需要以<code>~</code>开头表示</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location ~*\\.(png|jpg|gif){
           valid_referers none blocked www.baidu.com 192.168.200.222 *.example.com example.*  www.example.org  ~\\.google\\.;
           if ($invalid_referer){
                return 403;
           }
           root /usr/local/nginx/html;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>遇到的问题：图片有很多，该如何批量进行防盗链？</strong></p><p>对目录进行防盗链，配置如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location /images {
           valid_referers none blocked www.baidu.com 192.168.200.222 *.example.com example.*  www.example.org  ~\\.google\\.;
           if ($invalid_referer){
                return 403;
           }
           root /usr/local/nginx/html;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样我们可以对一个目录下的所有资源进行防盗链操作。</p><p><strong>遇到的问题：Referer的限制比较粗，比如随意加一个Referer，上面的方式是无法进行限制的。那么这个问题改如何解决？</strong></p><p>需要用到 Nginx 的第三方模块<code>ngx_http_accesskey_module</code>，第三方模块如何实现盗链，如果在Nginx中使用第三方模块的功能，这些我们在后面的Nginx的模块篇再进行详细的讲解。</p><h2 id="四、rewrite-功能介绍" tabindex="-1"><a class="header-anchor" href="#四、rewrite-功能介绍" aria-hidden="true">#</a> 四、Rewrite 功能介绍</h2><p>Rewrite 是 Nginx 服务器提供的一个重要基本功能，是 Web 服务器产品中几乎必备的功能。主要的作用是用来实现 URL 的重写。</p><blockquote><p>注意：Nginx 服务器的 Rewrite 功能的实现依赖于 PCRE 的支持，因此在编译安装 Nginx 服务器之前，需要安装 PCRE 库。Nginx使用的是ngx_http_rewrite_module 模块来解析和处理 Rewrite 功能的相关配置。</p></blockquote><h3 id="_1、rewrite-相关指令" tabindex="-1"><a class="header-anchor" href="#_1、rewrite-相关指令" aria-hidden="true">#</a> 1、Rewrite 相关指令</h3><h4 id="_1-1-rewrite-常用全局变量" tabindex="-1"><a class="header-anchor" href="#_1-1-rewrite-常用全局变量" aria-hidden="true">#</a> 1.1 Rewrite 常用全局变量</h4><table><thead><tr><th>变量</th><th>说明</th></tr></thead><tbody><tr><td>$args</td><td>变量中存放了请求URL中的请求参数。比如http://192.168.200.133/server?arg1=value1&amp;args2=value2中的&quot;arg1=value1&amp;arg2=value2&quot;，功能和$query_string一样</td></tr><tr><td>$http_user_agent</td><td>变量存储的是用户访问服务的代理信息(如果通过浏览器访问，记录的是浏览器的相关版本信息)</td></tr><tr><td>$host</td><td>变量存储的是访问服务器的server_name值</td></tr><tr><td>$document_uri</td><td>变量存储的是当前访问地址的URI。比如http://192.168.200.133/server?id=10&amp;name=zhangsan中的&quot;/server&quot;，功能和$uri一样</td></tr><tr><td>$document_root</td><td>变量存储的是当前请求对应location的root值，如果未设置，默认指向Nginx自带html目录所在位置</td></tr><tr><td>$content_length</td><td>变量存储的是请求头中的Content-Length的值</td></tr><tr><td>$content_type</td><td>变量存储的是请求头中的Content-Type的值</td></tr><tr><td>$http_cookie</td><td>变量存储的是客户端的cookie信息，可以通过add_header Set-Cookie &#39;cookieName=cookieValue&#39;来添加cookie数据</td></tr><tr><td>$limit_rate</td><td>变量中存储的是Nginx服务器对网络连接速率的限制，也就是Nginx配置中对limit_rate指令设置的值，默认是0，不限制。</td></tr><tr><td>$remote_addr</td><td>变量中存储的是客户端的IP地址</td></tr><tr><td>$remote_port</td><td>变量中存储了客户端与服务端建立连接的端口号</td></tr><tr><td>$remote_user</td><td>变量中存储了客户端的用户名，需要有认证模块才能获取</td></tr><tr><td>$scheme</td><td>变量中存储了访问协议</td></tr><tr><td>$server_addr</td><td>变量中存储了服务端的地址</td></tr><tr><td>$server_name</td><td>变量中存储了客户端请求到达的服务器的名称</td></tr><tr><td>$server_port</td><td>变量中存储了客户端请求到达服务器的端口号</td></tr><tr><td>$server_protocol</td><td>变量中存储了客户端请求协议的版本，比如&quot;HTTP/1.1&quot;</td></tr><tr><td>$request_body_file</td><td>变量中存储了发给后端服务器的本地文件资源的名称</td></tr><tr><td>$request_method</td><td>变量中存储了客户端的请求方式，比如&quot;GET&quot;,&quot;POST&quot;等</td></tr><tr><td>$request_filename</td><td>变量中存储了当前请求的资源文件的路径名</td></tr><tr><td>$request_uri</td><td>变量中存储了当前请求的URI，并且携带请求参数，比如http://192.168.200.133/server?id=10&amp;name=zhangsan中的&quot;/server?id=10&amp;name=zhangsan&quot;</td></tr></tbody></table><p>上述参数还可以在日志文件中使用，这个就要用到前面我们介绍的<code>log_format</code>指令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>log_format main <span class="token string">&#39;$remote_addr - $request - $status-$request_uri  $http_user_agent&#39;</span><span class="token punctuation">;</span>

access_log logs/access.log main<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-set-指令" tabindex="-1"><a class="header-anchor" href="#_1-2-set-指令" aria-hidden="true">#</a> 1.2 set 指令</h4><p>该指令用来设置一个新的变量。</p><table><thead><tr><th>语法</th><th>set $variable value;</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>server、location、if</td></tr></tbody></table><blockquote><ul><li>variable：变量的名称，该变量名称要用&quot;$&quot;作为变量的第一个字符，且不要与Nginx服务器预设的全局变量同名</li><li>value：变量的值，可以是字符串、其他变量或者变量的组合等</li></ul></blockquote><h4 id="_1-3-if-指令" tabindex="-1"><a class="header-anchor" href="#_1-3-if-指令" aria-hidden="true">#</a> 1.3 if 指令</h4><p>该指令用来支持条件判断，并根据条件判断结果选择不同的Nginx配置。</p><table><thead><tr><th>语法</th><th>if (condition){...}</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>server、location</td></tr></tbody></table><p>condition为判定条件，可以支持以下写法：</p><ol><li>变量名。如果变量名对应的值为空字符串或&quot;0&quot;，if都判断为false,其他条件为true。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$param</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>使用&quot;=&quot;和&quot;!=&quot;比较变量和字符串是否相等，满足条件为true，不满足为false</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$request_method</span> <span class="token operator">=</span> POST<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token builtin class-name">return</span> <span class="token number">405</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：此处和Java不太一样的地方是字符串不需要添加引号，并且等号和不等号前后到需要加空格</p></blockquote><ol start="3"><li>使用正则表达式对变量进行匹配，匹配成功返回true，否则返回false。变量与正则表达式之间使用&quot;<sub>&quot;,&quot;</sub>*&quot;,&quot;!<sub>&quot;,&quot;!</sub>*&quot;来连接。 <ul><li>&quot;~&quot;代表匹配正则表达式过程中区分大小写</li><li>&quot;~*&quot;代表匹配正则表达式过程中不区分大小写</li><li>&quot;!<sub>&quot;和&quot;!</sub>*&quot;刚好和上面取相反值，如果匹配上返回false，匹配不上返回true</li></ul></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$http_user_agent</span> ~ MSIE<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment"># $http_user_agent的值中是否包含MSIE字符串，如果包含返回true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：正则表达式字符串一般不需要加引号，但是如果字符串中包含&quot;}&quot;或者是&quot;;&quot;等字符时，就需要把引号加上。</p></blockquote><ol start="4"><li>判断请求的文件是否存在使用&quot;-f&quot;和&quot;!-f&quot;,</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>-f <span class="token variable">$request_filename</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment"># 判断请求的文件是否存在</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>-f <span class="token variable">$request_filename</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment"># 判断请求的文件是否不存在</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li><p>判断请求的目录是否存在使用&quot;-d&quot;和&quot;!-d&quot;</p></li><li><p>判断请求的目录或者文件是否存在使用&quot;-e&quot;和&quot;!-e&quot;</p></li><li><p>判断请求的文件是否可执行使用&quot;-x&quot;和&quot;!-x&quot;</p></li></ol><h4 id="_1-4-break-指令" tabindex="-1"><a class="header-anchor" href="#_1-4-break-指令" aria-hidden="true">#</a> 1.4 break 指令</h4><p>该指令用于中断当前相同作用域中的其他 Nginx 配置。与该指令处于同一作用域的 Nginx 配置中，位于它前面的指令配置生效，位于后面的指令配置无效。并且break还有另外一个功能就是终止当前的匹配并把当前的 URI 在本 location 进行重定向访问处理。</p><table><thead><tr><th>语法</th><th>break;</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>server、location、if</td></tr></tbody></table><p>例子:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location /testbreak <span class="token punctuation">{</span>
	default_type text/plain<span class="token punctuation">;</span>
	<span class="token builtin class-name">set</span> <span class="token variable">$username</span> TOM<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$args</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token builtin class-name">set</span> <span class="token variable">$username</span> JERRY<span class="token punctuation">;</span>
         <span class="token builtin class-name">break</span><span class="token punctuation">;</span>
		<span class="token builtin class-name">set</span> <span class="token variable">$username</span> ROSE<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	add_header username <span class="token variable">$username</span><span class="token punctuation">;</span>
	<span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token variable">$username</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>301 状态码：永久重定向</p></blockquote><h4 id="_1-5-return-指令" tabindex="-1"><a class="header-anchor" href="#_1-5-return-指令" aria-hidden="true">#</a> 1.5 return 指令</h4><p>该指令用于完成对请求的处理，直接向客户端返回。在 return 后的所有 Nginx 配置都是无效的。</p><table><thead><tr><th>语法</th><th>return code [text];<br>return code URL;<br>return URL;</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>server、location、if</td></tr></tbody></table><blockquote><ul><li>code：为返回给客户端的HTTP状态代理。可以返回的状态代码为0~999的任意HTTP状态代理</li><li>text：为返回给客户端的响应体内容，支持变量的使用</li><li>URL：为返回给客户端的URL地址</li></ul></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location /testreturn <span class="token punctuation">{</span>
	<span class="token builtin class-name">return</span> <span class="token number">200</span> success<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

location /testreturn <span class="token punctuation">{</span>
	<span class="token builtin class-name">return</span> https://www.bilibili.com<span class="token punctuation">;</span> 	<span class="token comment"># 302重定向到百度</span>
<span class="token punctuation">}</span>

location /testreturn <span class="token punctuation">{</span>
	<span class="token builtin class-name">return</span> <span class="token number">302</span> https://www.bilibili.com<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

location /testreturn <span class="token punctuation">{</span>
	<span class="token builtin class-name">return</span> <span class="token number">302</span> www.bilibili.com<span class="token punctuation">;</span>	<span class="token comment"># 不允许这么写</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>302 状态码：临时重定向</p></blockquote><h4 id="_1-6-rewrite-指令" tabindex="-1"><a class="header-anchor" href="#_1-6-rewrite-指令" aria-hidden="true">#</a> 1.6 rewrite 指令</h4><p>该指令通过正则表达式的使用来改变 URI。可以同时存在一个或者多个指令，按照顺序依次对URL进行匹配和处理。</p><table><thead><tr><th>语法</th><th>rewrite regex replacement [flag];</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>server、location、if</td></tr></tbody></table><blockquote><ul><li>regex：用来匹配URI的正则表达式</li><li>replacement：匹配成功后，用于替换URI中被截取内容的字符串。如果该字符串是以&quot;http://&quot;或者&quot;https://&quot;开头的，则不会继续向下对URI进行其他处理，而是直接返回重写后的 URI 给客户端</li></ul></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location rewrite <span class="token punctuation">{</span>
	rewrite ^/rewrite/url<span class="token punctuation">\\</span>w*$ https://www.baidu.com<span class="token punctuation">;</span>
	rewrite ^/rewrite/<span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">\\</span>w*$ /<span class="token variable">$1</span><span class="token punctuation">;</span>
	rewrite ^/rewrite/<span class="token punctuation">(</span>demo<span class="token punctuation">)</span><span class="token punctuation">\\</span>w*$ /<span class="token variable">$1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
location /test<span class="token punctuation">{</span>
	default_type text/plain<span class="token punctuation">;</span>
	<span class="token builtin class-name">return</span> <span class="token number">200</span> test_success<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
location /demo<span class="token punctuation">{</span>
	default_type text/plain<span class="token punctuation">;</span>
	<span class="token builtin class-name">return</span> <span class="token number">200</span> demo_success<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>flag：用来设置 rewrite 对URI的处理行为，可选值有如下：</p><blockquote><p>last：终止继续在本 location 块中处理接收到的 URI，并将此处重写的 URI 作为一个新的URI，使用各location块进行处理。</p><p>该标志将重写后的 URI 重写在 server 块中执行，为重写后的 URI 提供了转入到其他 location 块的机会。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location rewrite <span class="token punctuation">{</span>
	rewrite ^/rewrite/<span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">\\</span>w*$ /<span class="token variable">$1</span> last<span class="token punctuation">;</span>
	rewrite ^/rewrite/<span class="token punctuation">(</span>demo<span class="token punctuation">)</span><span class="token punctuation">\\</span>w*$ /<span class="token variable">$1</span> last<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
location /test <span class="token punctuation">{</span>
	default_type text/plain<span class="token punctuation">;</span>
	<span class="token builtin class-name">return</span> <span class="token number">200</span> test_success<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
location /demo <span class="token punctuation">{</span>
	default_type text/plain<span class="token punctuation">;</span>
	<span class="token builtin class-name">return</span> <span class="token number">200</span> demo_success<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>break：将此处重写的 URI 作为一个新的 URI，在本块中继续进行处理。</p><p>该标志将重写后的地址在当前的 location 块中执行，不会将新的 URI 转向其他的 location 块。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location rewrite <span class="token punctuation">{</span>
    <span class="token comment">#/test   /usr/local/nginx/html/test/index.html</span>
	rewrite ^/rewrite/<span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">\\</span>w*$ /<span class="token variable">$1</span> <span class="token builtin class-name">break</span><span class="token punctuation">;</span>
	rewrite ^/rewrite/<span class="token punctuation">(</span>demo<span class="token punctuation">)</span><span class="token punctuation">\\</span>w*$ /<span class="token variable">$1</span> <span class="token builtin class-name">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
location /test<span class="token punctuation">{</span>
	default_type text/plain<span class="token punctuation">;</span>
	<span class="token builtin class-name">return</span> <span class="token number">200</span> test_success<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
location /demo<span class="token punctuation">{</span>
	default_type text/plain<span class="token punctuation">;</span>
	<span class="token builtin class-name">return</span> <span class="token number">200</span> demo_success<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问 <code>http://192.168.200.133:8081/rewrite/demoabc</code>，页面报 404 错误</p><blockquote><p>redirect：将重写后的URI返回给客户端，状态码为302，指明是临时重定向 URI，主要用在 replacement 变量不是以&quot;http://&quot;或者&quot;https://&quot;开头的情况</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location rewrite <span class="token punctuation">{</span>
	rewrite ^/rewrite/<span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">\\</span>w*$ /<span class="token variable">$1</span> redirect<span class="token punctuation">;</span>
	rewrite ^/rewrite/<span class="token punctuation">(</span>demo<span class="token punctuation">)</span><span class="token punctuation">\\</span>w*$ /<span class="token variable">$1</span> redirect<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
location /test<span class="token punctuation">{</span>
	default_type text/plain<span class="token punctuation">;</span>
	<span class="token builtin class-name">return</span> <span class="token number">200</span> test_success<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
location /demo<span class="token punctuation">{</span>
	default_type text/plain<span class="token punctuation">;</span>
	<span class="token builtin class-name">return</span> <span class="token number">200</span> demo_success<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问<code>http://192.168.200.133:8081/rewrite/testabc</code>请求会被临时重定向，浏览器地址也会发生改变</p><blockquote><p>permanent：将重写后的 URI 返回给客户端，状态码为301，指明是永久重定向 URI，主要用在replacement变量不是以&quot;http://&quot;或者&quot;https://&quot;开头的情况</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location rewrite <span class="token punctuation">{</span>
	rewrite ^/rewrite/<span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">\\</span>w*$ /<span class="token variable">$1</span> permanent<span class="token punctuation">;</span>
	rewrite ^/rewrite/<span class="token punctuation">(</span>demo<span class="token punctuation">)</span><span class="token punctuation">\\</span>w*$ /<span class="token variable">$1</span> permanent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
location /test<span class="token punctuation">{</span>
	default_type text/plain<span class="token punctuation">;</span>
	<span class="token builtin class-name">return</span> <span class="token number">200</span> test_success<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
location /demo<span class="token punctuation">{</span>
	default_type text/plain<span class="token punctuation">;</span>
	<span class="token builtin class-name">return</span> <span class="token number">200</span> demo_success<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问<code>http://192.168.200.133:8081/rewrite/testabc</code>请求会被永久重定向，浏览器地址也会发生改变</p><h4 id="_1-6-rewrite-log-指令" tabindex="-1"><a class="header-anchor" href="#_1-6-rewrite-log-指令" aria-hidden="true">#</a> 1.6 rewrite_log 指令</h4><p>该指令配置是否开启 URL 重写日志的输出功能。</p><table><thead><tr><th>语法</th><th>rewrite_log on|off;</th></tr></thead><tbody><tr><td>默认值</td><td>rewrite_log off;</td></tr><tr><td>位置</td><td>http、server、location、if</td></tr></tbody></table><p>开启后，URL 重写的相关日志将以 notice 级别输出到 error_log 指令配置的日志文件汇总。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rewrite_log on;
error_log  logs/error.log notice;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、rewrite-案例" tabindex="-1"><a class="header-anchor" href="#_2、rewrite-案例" aria-hidden="true">#</a> 2、Rewrite 案例</h3><h4 id="_2-1-域名跳转" tabindex="-1"><a class="header-anchor" href="#_2-1-域名跳转" aria-hidden="true">#</a> 2.1 域名跳转</h4><p>问题分析</p><p>先来看一个效果，如果我们想访问京东网站，大家都知道我们可以输入<code>www.jd.com</code>,但是同样的我们也可以输入<code>www.360buy.com</code>同样也都能访问到京东网站。这个其实是因为京东刚开始的时候域名就是www.360buy.com，后面由于各种原因把自己的域名换成了www.jd.com, 虽然说域名变了，但是对于以前只记住了www.360buy.com的用户来说，我们如何把这部分用户也迁移到我们新域名的访问上来，针对于这个问题，我们就可以使用Nginx中Rewrite的域名跳转来解决。</p><p>环境准备</p><ul><li>准备三个域名：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vim /etc/hosts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1   www.nginx001.com
127.0.0.1   www.nginx002.com
127.0.0.1   www.nginx003.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>通过Nginx实现访问www.nginx001.com</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
	listen <span class="token number">80</span><span class="token punctuation">;</span>
	server_name www.nginx001.com<span class="token punctuation">;</span>
	location /<span class="token punctuation">{</span>
		default_type text/html<span class="token punctuation">;</span>
		<span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&#39;&lt;h1&gt;welcome to nginx001&lt;/h1&gt;&#39;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>通过Rewrite完成将www.nginx002.com和www.nginx003.com的请求跳转到www.nginx001.com</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
	listen <span class="token number">80</span><span class="token punctuation">;</span>
	server_name www.nginx002.com www.nginx003.com<span class="token punctuation">;</span>
	rewrite ^/ http://www.nginx001.com<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>问题描述：如何在域名跳转的过程中携带请求的URI？</p><p>修改配置信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
	listen <span class="token number">80</span><span class="token punctuation">;</span>
	server_name www.nginx002.com www.nginx003.com<span class="token punctuation">;</span>
	rewrite ^<span class="token punctuation">(</span>.*<span class="token punctuation">)</span> http://www.nginx001.com<span class="token variable">$1</span>；
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-域名镜像" tabindex="-1"><a class="header-anchor" href="#_2-2-域名镜像" aria-hidden="true">#</a> 2.2 域名镜像</h4><p><strong>镜像网站</strong>指定是将一个完全相同的网站分别放置到几台服务器上，并分别使用独立的URL进行访问。其中一台服务器上的网站叫主站，其他的为镜像网站。镜像网站和主站没有太大的区别，可以把镜像网站理解为主站的一个备份节点。可以通过镜像网站提供网站在不同地区的响应速度。镜像网站可以平衡网站的流量负载、可以解决网络宽带限制、封锁等。</p><p>而我们所说的<strong>域名镜像</strong>和网站镜像比较类似，上述案例中，将www.nginx002.com和 www.nginx003.com都能跳转到www.nginx001.com，那么www.nginx001.com我们就可以把它起名叫主域名，其他两个就是我们所说的镜像域名，当然如果我们不想把整个网站做镜像，只想为其中某一个子目录下的资源做镜像，我们可以在location块中配置rewrite功能，比如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen          <span class="token number">80</span><span class="token punctuation">;</span>
    server_name     www.nginx002.com www.nginx003.com<span class="token punctuation">;</span>
    location /user <span class="token punctuation">{</span>
    	rewrite ^/user<span class="token punctuation">(</span>.*<span class="token punctuation">)</span>$ http://www.nginx001.com<span class="token variable">$1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    location /emp<span class="token punctuation">{</span>
        default_type text/html<span class="token punctuation">;</span>
        <span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&#39;&lt;h1&gt;emp_success&lt;/h1&gt;&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-防盗链" tabindex="-1"><a class="header-anchor" href="#_2-3-防盗链" aria-hidden="true">#</a> 2.3 防盗链</h4><p>防盗链之前我们已经介绍过了相关的知识，在rewrite中的防盗链和之前将的原理其实都是一样的，只不过通过rewrite可以将防盗链的功能进行完善下，当出现防盗链的情况，我们可以使用rewrite将请求转发到自定义的一张图片和页面，给用户比较好的提示信息。下面我们就通过根据文件类型实现防盗链的一个配置实例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location /images <span class="token punctuation">{</span>
    root html<span class="token punctuation">;</span>
    valid_referers none blocked www.bilibili.com<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$invalid_referer</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment"># return 403;</span>
        rewrite ^/    /images/forbidden.png <span class="token builtin class-name">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、nginx-反向代理" tabindex="-1"><a class="header-anchor" href="#五、nginx-反向代理" aria-hidden="true">#</a> 五、Nginx 反向代理</h2><h3 id="_1、概述" tabindex="-1"><a class="header-anchor" href="#_1、概述" aria-hidden="true">#</a> 1、概述</h3><p>关于正向代理和反向代理，简而言之就是正向代理代理的对象是客户端，反向代理代理的是服务端，这是两者之间最大的区别。</p><p>Nginx 即可以实现正向代理，也可以实现反向代理。</p><h3 id="_2、nginx-反向代理配置语法" tabindex="-1"><a class="header-anchor" href="#_2、nginx-反向代理配置语法" aria-hidden="true">#</a> 2、Nginx 反向代理配置语法</h3><p>Nginx反向代理模块的指令是由<code>ngx_http_proxy_module</code>模块进行解析，该模块在安装 Nginx 的时候已经自己加装到 Nginx 中了，接下来我们把反向代理中的常用指令一一介绍下：</p><h4 id="_2-1-proxy-pass" tabindex="-1"><a class="header-anchor" href="#_2-1-proxy-pass" aria-hidden="true">#</a> 2.1 proxy_pass</h4><p>该指令用来设置被代理服务器地址，可以是主机名称、IP地址加端口号形式。</p><table><thead><tr><th>语法</th><th>proxy_pass URL;</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>location</td></tr></tbody></table><p>URL：为要设置的被代理服务器地址，包含传输协议(<code>http</code>,<code>https://</code>)、主机名称或IP地址加端口号、URI等要素。</p><p>举例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>proxy_pass http://www.baidu.com<span class="token punctuation">;</span>
location /server<span class="token punctuation">{</span><span class="token punctuation">}</span>

proxy_pass http://123.57.177.94<span class="token punctuation">;</span>	<span class="token comment"># http://123.57.177.94/server/index.html</span>
proxy_pass http://123.57.177.94/<span class="token punctuation">;</span>	<span class="token comment"># http://123.57.177.94/index.html</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在编写proxy_pass的时候，后面的值要不要加&quot;/&quot;?</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
	listen <span class="token number">80</span><span class="token punctuation">;</span>
	server_name localhost<span class="token punctuation">;</span>
	location / <span class="token punctuation">{</span>
		<span class="token comment">#proxy_pass http://123.57.177.94;</span>
		proxy_pass http://123.57.177.94/<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment"># 当客户端访问 http://localhost/index.html,效果是一样的</span>
server<span class="token punctuation">{</span>
	listen <span class="token number">80</span><span class="token punctuation">;</span>
	server_name localhost<span class="token punctuation">;</span>
	location /server <span class="token punctuation">{</span>
		<span class="token comment">#proxy_pass http://123.57.177.94;</span>
		proxy_pass http://123.57.177.94/<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment"># 当客户端访问 http://localhost/server/index.html</span>
<span class="token comment"># 这个时候，第一个proxy_pass就变成了http://localhost/server/index.html</span>
<span class="token comment"># 第二个proxy_pass就变成了http://localhost/index.html效果就不一样了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-proxy-set-header" tabindex="-1"><a class="header-anchor" href="#_2-2-proxy-set-header" aria-hidden="true">#</a> 2.2 proxy_set_header</h4><p>指令可以更改 Nginx 服务器接收到的客户端请求的请求头信息，然后将新的请求头发送给代理的服务器</p><table><thead><tr><th>语法</th><th>proxy_set_header field value;</th></tr></thead><tbody><tr><td>默认值</td><td>proxy_set_header Host $proxy_host;<br>proxy_set_header Connection close;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><p>注意：如果想要看到结果，必须在被代理的服务器上来获取添加的头信息。</p><p>被代理服务器：阿里云</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
        listen  <span class="token number">8080</span><span class="token punctuation">;</span>
        server_name localhost<span class="token punctuation">;</span>
        default_type text/plain<span class="token punctuation">;</span>
        <span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token variable">$http_username</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代理服务器：百度云</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
        listen  <span class="token number">8080</span><span class="token punctuation">;</span>
        server_name localhost<span class="token punctuation">;</span>
        location /server <span class="token punctuation">{</span>
                proxy_pass http://123.57.177.94/<span class="token punctuation">;</span>
                proxy_set_header username TOM<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-proxy-redirect" tabindex="-1"><a class="header-anchor" href="#_2-3-proxy-redirect" aria-hidden="true">#</a> 2.3 proxy_redirect</h4><p>该指令是用来重置头信息中的&quot;Location&quot;和&quot;Refresh&quot;的值。</p><table><thead><tr><th>语法</th><th>proxy_redirect redirect replacement;<br>proxy_redirect default;<br>proxy_redirect off;</th></tr></thead><tbody><tr><td>默认值</td><td>proxy_redirect default;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><blockquote><p>为什么要用该指令?</p></blockquote><p>服务端：阿里云</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen  <span class="token number">8081</span><span class="token punctuation">;</span>
    server_name localhost<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>-f <span class="token variable">$request_filename</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    	<span class="token builtin class-name">return</span> <span class="token number">302</span> http://123.57.177.94<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代理服务端：百度云</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
	listen  <span class="token number">8081</span><span class="token punctuation">;</span>
	server_name localhost<span class="token punctuation">;</span>
	location / <span class="token punctuation">{</span>
		proxy_pass http://123.57.177.94:8081/<span class="token punctuation">;</span>
		proxy_redirect http://106.13.209.121 http://123.57.177.94<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>该指令的几组选项</p></blockquote><p><code>proxy_redirect redirect replacement;</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redirect:目标,Location的值
<span class="token comment"># replacement:要替换的值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>proxy_redirect default;</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>default<span class="token punctuation">;</span>
<span class="token comment"># 将location块的uri变量作为replacement,</span>
<span class="token comment"># 将proxy_pass变量作为redirect进行替换</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>proxy_redirect off;</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 关闭proxy_redirect的功能</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3、nginx-反向代理实战" tabindex="-1"><a class="header-anchor" href="#_3、nginx-反向代理实战" aria-hidden="true">#</a> 3、Nginx 反向代理实战</h3><figure><img src="`+x+`" alt="Nginx负载均衡" tabindex="0" loading="lazy"><figcaption>Nginx负载均衡</figcaption></figure><p>情况一：三台服务器内容不一样</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 代理服务器</span>
server <span class="token punctuation">{</span>
        listen          <span class="token number">8082</span><span class="token punctuation">;</span>
        server_name     localhost<span class="token punctuation">;</span>
        location /server1 <span class="token punctuation">{</span>
                proxy_pass http://123.57.177.94:9001/<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        location /server2 <span class="token punctuation">{</span>
                proxy_pass http://123.57.177.94:9002/<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        location /server3 <span class="token punctuation">{</span>
                proxy_pass http://123.57.177.94:9003/<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment"># 服务端</span>
<span class="token comment"># server1</span>
server <span class="token punctuation">{</span>
        listen          <span class="token number">9001</span><span class="token punctuation">;</span>
        server_name     localhost<span class="token punctuation">;</span>
        default_type text/plain<span class="token punctuation">;</span>
        <span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&#39;this is 9001&#39;</span>
<span class="token punctuation">}</span>
<span class="token comment"># server2</span>
server <span class="token punctuation">{</span>
        listen          <span class="token number">9002</span><span class="token punctuation">;</span>
        server_name     localhost<span class="token punctuation">;</span>
        default_type text/plain<span class="token punctuation">;</span>
        <span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&#39;this is 9002&#39;</span>
<span class="token punctuation">}</span>
<span class="token comment"># server3</span>
server <span class="token punctuation">{</span>
        listen          <span class="token number">9003</span><span class="token punctuation">;</span>
        server_name     localhost<span class="token punctuation">;</span>
        default_type text/plain<span class="token punctuation">;</span>
        <span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&#39;this is 9003&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、nginx-安全控制" tabindex="-1"><a class="header-anchor" href="#_4、nginx-安全控制" aria-hidden="true">#</a> 4、Nginx 安全控制</h3><p>Nginx 反向代理是如何来提升 Web 服务器的安全的呢？</p><p>答：安全隔离，通过代理分开了客户端到应用程序服务器端的连接，实现了安全措施。在反向代理之前设置防火墙，仅留一个入口供代理服务器访问。</p><figure><img src="`+_+`" alt="安全隔离" tabindex="0" loading="lazy"><figcaption>安全隔离</figcaption></figure><h4 id="_4-1-使用-ssl-对流量进行加密" tabindex="-1"><a class="header-anchor" href="#_4-1-使用-ssl-对流量进行加密" aria-hidden="true">#</a> 4.1 使用 SSL 对流量进行加密</h4><p>翻译成熟悉的说法就是将常用的 http 请求转变成 https 请求，那么这两个之间的区别简单的来说两个都是HTTP协议，只不过https是身披SSL外壳的http。</p><p>HTTPS是一种通过计算机网络进行安全通信的传输协议。它经由HTTP进行通信，利用SSL/TLS建立全通信，加密数据包，确保数据的安全性。</p><ul><li>SSL（Secure Sockets Layer）安全套接层</li><li>TLS（Transport Layer Security）传输层安全</li></ul><p>上述这两个是为网络通信提供安全及数据完整性的一种安全协议，TLS和SSL在传输层和应用层对网络连接进行加密。</p><blockquote><p>总结来说为什么要使用https?</p><p>http 协议是明文传输数据，存在安全问题，而 https 是加密传输，相当于 http+ssl，并且可以防止流量劫持。</p></blockquote><h4 id="_4-2-nginx-添加-ssl-支持" tabindex="-1"><a class="header-anchor" href="#_4-2-nginx-添加-ssl-支持" aria-hidden="true">#</a> 4.2 Nginx 添加 SSL 支持</h4><p><code>--with-http_ssl_module</code> 模块的添加，可以通过 <code>Nginx -V</code> 查看（通过 apt yum 安装的 Nginx 都已经添加了）</p><h4 id="_4-3-nginx-的-ssl-相关指令" tabindex="-1"><a class="header-anchor" href="#_4-3-nginx-的-ssl-相关指令" aria-hidden="true">#</a> 4.3 Nginx 的 SSL 相关指令</h4><h5 id="ssl" tabindex="-1"><a class="header-anchor" href="#ssl" aria-hidden="true">#</a> ssl</h5><p>该指令用来在指定的服务器开启HTTPS，可以使用 listen 443 ssl。后面这种方式更通用些。</p><table><thead><tr><th>语法</th><th>ssl on | off;</th></tr></thead><tbody><tr><td>默认值</td><td>ssl off;</td></tr><tr><td>位置</td><td>http、server</td></tr></tbody></table><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
	listen <span class="token number">443</span> ssl<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="ssl-certificate" tabindex="-1"><a class="header-anchor" href="#ssl-certificate" aria-hidden="true">#</a> ssl_certificate</h5><p>为当前这个虚拟主机指定一个带有PEM格式证书的证书。</p><table><thead><tr><th>语法</th><th>ssl_certificate file;</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>http、server</td></tr></tbody></table><h5 id="ssl-certificate-key" tabindex="-1"><a class="header-anchor" href="#ssl-certificate-key" aria-hidden="true">#</a> ssl_certificate_key</h5><p>该指令用来指定PEM secret key文件的路径</p><table><thead><tr><th>语法</th><th>ssl_ceritificate_key file;</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>http、server</td></tr></tbody></table><h5 id="ssl-session-cache" tabindex="-1"><a class="header-anchor" href="#ssl-session-cache" aria-hidden="true">#</a> ssl_session_cache</h5><p>该指令用来配置用于SSL会话的缓存</p><table><thead><tr><th>语法</th><th>ssl_sesion_cache off|none|[builtin[:size]] [shared:name:size]</th></tr></thead><tbody><tr><td>默认值</td><td>ssl_session_cache none;</td></tr><tr><td>位置</td><td>http、server</td></tr></tbody></table><blockquote><ul><li>off：禁用会话缓存，客户端不得重复使用会话</li><li>none：禁止使用会话缓存，客户端可以重复使用，但是并没有在缓存中存储会话参数</li><li>builtin：内置OpenSSL缓存，仅在一个工作进程中使用</li><li>shared：所有工作进程之间共享缓存，缓存的相关信息用name和size来指定</li></ul></blockquote><h5 id="ssl-session-timeout" tabindex="-1"><a class="header-anchor" href="#ssl-session-timeout" aria-hidden="true">#</a> ssl_session_timeout</h5><p>开启SSL会话功能后，设置客户端能够反复使用储存在缓存中的会话参数时间。</p><table><thead><tr><th>语法</th><th>ssl_session_timeout time;</th></tr></thead><tbody><tr><td>默认值</td><td>ssl_session_timeout 5m;</td></tr><tr><td>位置</td><td>http、server</td></tr></tbody></table><h5 id="ssl-ciphers" tabindex="-1"><a class="header-anchor" href="#ssl-ciphers" aria-hidden="true">#</a> ssl_ciphers</h5><p>指出允许的密码，密码指定为OpenSSL支持的格式</p><table><thead><tr><th>语法</th><th>ssl_ciphers ciphers;</th></tr></thead><tbody><tr><td>默认值</td><td>ssl_ciphers HIGH:!aNULL:!MD5;</td></tr><tr><td>位置</td><td>http、server</td></tr></tbody></table><blockquote><p>可以使用<code>openssl ciphers</code>查看openssl支持的格式。</p></blockquote><h5 id="ssl-prefer-server-ciphers" tabindex="-1"><a class="header-anchor" href="#ssl-prefer-server-ciphers" aria-hidden="true">#</a> ssl_prefer_server_ciphers</h5><p>该指令指定是否服务器密码优先客户端密码</p><table><thead><tr><th>语法</th><th>ssl_perfer_server_ciphers on|off;</th></tr></thead><tbody><tr><td>默认值</td><td>ssl_perfer_server_ciphers off;</td></tr><tr><td>位置</td><td>http、server</td></tr></tbody></table><h4 id="_4-4-使用-openssl-生成证书" tabindex="-1"><a class="header-anchor" href="#_4-4-使用-openssl-生成证书" aria-hidden="true">#</a> 4.4 使用 openssl 生成证书</h4><p>方式一：阿里云、百度云购买证书</p><p>方式二：使用 openssl 生成证书</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>openssl version
<span class="token function">mkdir</span> /root/cert
<span class="token builtin class-name">cd</span> /root/cert
openssl genrsa <span class="token parameter variable">-des3</span> <span class="token parameter variable">-out</span> server.key <span class="token number">1024</span>
openssl req <span class="token parameter variable">-new</span> <span class="token parameter variable">-key</span> server.key <span class="token parameter variable">-out</span> server.csr
<span class="token function">cp</span> server.key server.key.org
openssl rsa <span class="token parameter variable">-in</span> server.key.org <span class="token parameter variable">-out</span> server.key
openssl x509 <span class="token parameter variable">-req</span> <span class="token parameter variable">-days</span> <span class="token number">365</span> <span class="token parameter variable">-in</span> server.csr <span class="token parameter variable">-signkey</span> server.key <span class="token parameter variable">-out</span> server.crt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-5-开启-openssl-实例" tabindex="-1"><a class="header-anchor" href="#_4-5-开启-openssl-实例" aria-hidden="true">#</a> 4.5 开启 openssl 实例</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen       <span class="token number">443</span> ssl<span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>

    ssl_certificate      server.cert<span class="token punctuation">;</span>
    ssl_certificate_key  server.key<span class="token punctuation">;</span>

    ssl_session_cache    shared:SSL:1m<span class="token punctuation">;</span>
    ssl_session_timeout  5m<span class="token punctuation">;</span>

    ssl_ciphers  HIGH:<span class="token operator">!</span>aNULL:<span class="token operator">!</span>MD5<span class="token punctuation">;</span>
    ssl_prefer_server_ciphers  on<span class="token punctuation">;</span>

    location / <span class="token punctuation">{</span>
        root   html<span class="token punctuation">;</span>
        index  index.html index.htm<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、nginx-反向代理系统调优" tabindex="-1"><a class="header-anchor" href="#_5、nginx-反向代理系统调优" aria-hidden="true">#</a> 5、Nginx 反向代理系统调优</h3><p>反向代理值 Buffer（缓冲） 和 Cache（缓存）</p><p>相同点：</p><ul><li>提升 IO 吞吐效率，提升 Nginx 代理性能</li></ul><p>不同点：</p><ul><li>缓冲主要用来解决不同设备之间数据传递速度不一致导致的性能低的问题，缓冲中的数据一旦此次操作完成后，就可以删除</li><li>缓存主要是备份，将被代理服务器的数据缓存一份到代理服务器，这样的话，客户端再次获取相同数据的时候，就只需要从代理服务器上获取，效率较高，缓存中的数据可以重复使用，只有满足特定条件才会删除</li></ul><p>Proxy Buffer相关指令：</p><h4 id="_5-1-proxy-buffering" tabindex="-1"><a class="header-anchor" href="#_5-1-proxy-buffering" aria-hidden="true">#</a> 5.1 proxy_buffering</h4><p>该指令用来开启或者关闭代理服务器的缓冲区；</p><table><thead><tr><th>语法</th><th>proxy_buffering on|off;</th></tr></thead><tbody><tr><td>默认值</td><td>proxy_buffering on;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><h4 id="_5-2-proxy-buffers" tabindex="-1"><a class="header-anchor" href="#_5-2-proxy-buffers" aria-hidden="true">#</a> 5.2 proxy_buffers</h4><p>该指令用来指定单个连接从代理服务器读取响应的缓存区的个数和大小。</p><table><thead><tr><th>语法</th><th>proxy_buffers number size;</th></tr></thead><tbody><tr><td>默认值</td><td>proxy_buffers 8 4k | 8K;(与系统平台有关)</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><blockquote><ul><li>number：缓冲区的个数</li><li>size：每个缓冲区的大小，缓冲区的总大小就是number*size</li></ul></blockquote><h4 id="_5-3-proxy-buffer-size" tabindex="-1"><a class="header-anchor" href="#_5-3-proxy-buffer-size" aria-hidden="true">#</a> 5.3 proxy_buffer_size</h4><p>该指令用来设置从被代理服务器获取的第一部分响应数据的大小。保持与proxy_buffers中的size一致即可，当然也可以更小。</p><table><thead><tr><th>语法</th><th>proxy_buffer_size size;</th></tr></thead><tbody><tr><td>默认值</td><td>proxy_buffer_size 4k | 8k;(与系统平台有关)</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><h4 id="_5-4-proxy-busy-buffers-size" tabindex="-1"><a class="header-anchor" href="#_5-4-proxy-busy-buffers-size" aria-hidden="true">#</a> 5.4 proxy_busy_buffers_size</h4><p>该指令用来限制同时处于BUSY状态的缓冲总大小。</p><table><thead><tr><th>语法</th><th>proxy_busy_buffers_size size;</th></tr></thead><tbody><tr><td>默认值</td><td>proxy_busy_buffers_size 8k|16K;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><h4 id="_5-5-proxy-temp-path" tabindex="-1"><a class="header-anchor" href="#_5-5-proxy-temp-path" aria-hidden="true">#</a> 5.5 proxy_temp_path</h4><p>当缓冲区存满后，仍未被Nginx服务器完全接受，响应数据就会被临时存放在磁盘文件上，该指令设置文件路径</p><table><thead><tr><th>语法</th><th>proxy_temp_path path;</th></tr></thead><tbody><tr><td>默认值</td><td>proxy_temp_path proxy_temp;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><blockquote><p>注意：path 最多设置三层</p></blockquote><h4 id="_5-6-proxy-temp-file-write-size" tabindex="-1"><a class="header-anchor" href="#_5-6-proxy-temp-file-write-size" aria-hidden="true">#</a> 5.6 proxy_temp_file_write_size</h4><p>该指令用来设置磁盘上缓冲文件的大小。</p><table><thead><tr><th>语法</th><th>proxy_temp_file_write_size size;</th></tr></thead><tbody><tr><td>默认值</td><td>proxy_temp_file_write_size 8K|16K;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><h4 id="_5-7-通用网站的配置" tabindex="-1"><a class="header-anchor" href="#_5-7-通用网站的配置" aria-hidden="true">#</a> 5.7 通用网站的配置</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>proxy_buffering on<span class="token punctuation">;</span>
proxy_buffer_size <span class="token number">4</span> 32k<span class="token punctuation">;</span>
proxy_busy_buffers_size 64k<span class="token punctuation">;</span>
proxy_temp_file_write_size 64k<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>根据项目的具体内容进行相应的调节</p></blockquote><h2 id="六、nginx-负载均衡" tabindex="-1"><a class="header-anchor" href="#六、nginx-负载均衡" aria-hidden="true">#</a> 六、Nginx 负载均衡</h2><h3 id="_1、概述-1" tabindex="-1"><a class="header-anchor" href="#_1、概述-1" aria-hidden="true">#</a> 1、概述</h3><p><strong>面临的问题：</strong></p><p>客户端发送多个请求到服务器，服务器处理请求，有一些可能要与数据库进行交互，服务器处理完毕后，再将结果返回给客户端。这种架构模式对于早期的系统相对单一，并发请求相对较少的情况下是比较适合的，成本也低。但是随着信息数量的不断增长，访问量和数据量的飞速增长，以及系统业务的复杂度增加，这种架构会造成服务器相应客户端的请求日益缓慢，并发量特别大的时候，还容易造成服务器直接崩溃。很明显这是由于服务器性能的瓶颈造成的问题，那么如何解决这种情况呢？</p><p><strong>纵向扩展：</strong></p>`,520),T=s('<p><strong>横向扩展：</strong></p><p>那么横向增加服务器的数量呢？这时候集群的概念产生了，单个服务器解决不了，增加服务器的数量，然后将请求分发到各个服务器上，将原先请求集中到单个服务器上的情况改为将请求分发到多个服务器上，将负载分发到不同的服务器，也就是我们所说的<strong>负载均衡</strong>。</p><figure><img src="'+f+'" alt="负载均衡器" tabindex="0" loading="lazy"><figcaption>负载均衡器</figcaption></figure><blockquote><p>这里面涉及到两个重要的角色分别是&quot;应用集群&quot;和&quot;负载均衡器&quot;：</p><ul><li>应用集群：将同一应用部署到多台机器上，组成处理集群，接收负载均衡设备分发的请求，进行处理并返回响应的数据</li><li>负载均衡器：将用户访问的请求根据对应的负载均衡算法，分发到集群中的一台服务器进行处理。</li></ul></blockquote><h3 id="_2、nginx-负载均衡的作用" tabindex="-1"><a class="header-anchor" href="#_2、nginx-负载均衡的作用" aria-hidden="true">#</a> 2、Nginx 负载均衡的作用</h3><ul><li>解决服务器的高并发压力，提高应用程序的处理性能</li><li>提供故障转移，实现高可用</li><li>通过添加或减少服务器数量，增强网站的可扩展性</li><li>在负载均衡器上进行过滤，可以提高系统的安全性。</li></ul><h3 id="_3、nginx-负载均衡指令" tabindex="-1"><a class="header-anchor" href="#_3、nginx-负载均衡指令" aria-hidden="true">#</a> 3、Nginx 负载均衡指令</h3><p>Nginx 要实现负载均衡需要用到 proxy_pass 代理模块配置。Nginx默认安装支持这个模块，我们不需要再做任何处理。</p><p>Nginx的负载均衡是在Nginx的反向代理基础上把用户的请求根据指定的算法分发到一组【upstream虚拟服务池】。</p><h4 id="_3-1-upstream-指令" tabindex="-1"><a class="header-anchor" href="#_3-1-upstream-指令" aria-hidden="true">#</a> 3.1 upstream 指令</h4><p>该指令是用来定义一组服务器，它们可以是监听不同端口的服务器，并且也可以是同时监听TCP和Unix socket的服务器。服务器可以指定不同的权重，默认为1。</p><table><thead><tr><th>语法</th><th>upstream name {...}</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>http</td></tr></tbody></table><h4 id="_3-2-server指令" tabindex="-1"><a class="header-anchor" href="#_3-2-server指令" aria-hidden="true">#</a> 3.2 server指令</h4><p>该指令用来指定后端服务器的名称和一些参数，可以使用域名、IP、端口或者unix socket</p><table><thead><tr><th>语法</th><th>server name [paramerters]</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>upstream</td></tr></tbody></table><h3 id="_4、nginx-负载均衡实现流程" tabindex="-1"><a class="header-anchor" href="#_4、nginx-负载均衡实现流程" aria-hidden="true">#</a> 4、Nginx 负载均衡实现流程</h3><figure><img src="'+y+`" alt="Nginx负载均衡实现流程" tabindex="0" loading="lazy"><figcaption>Nginx负载均衡实现流程</figcaption></figure><p>服务端设置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
    listen   <span class="token number">9001</span><span class="token punctuation">;</span>
    server_name localhost<span class="token punctuation">;</span>
    default_type text/html<span class="token punctuation">;</span>
    location /<span class="token punctuation">{</span>
    	<span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&#39;this is 9001&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
server <span class="token punctuation">{</span>
    listen   <span class="token number">9002</span><span class="token punctuation">;</span>
    server_name localhost<span class="token punctuation">;</span>
    default_type text/html<span class="token punctuation">;</span>
    location /<span class="token punctuation">{</span>
    	<span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&#39;this is 9002&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
server <span class="token punctuation">{</span>
    listen   <span class="token number">9003</span><span class="token punctuation">;</span>
    server_name localhost<span class="token punctuation">;</span>
    default_type text/html<span class="token punctuation">;</span>
    location /<span class="token punctuation">{</span>
    	<span class="token builtin class-name">return</span> <span class="token number">200</span> <span class="token string">&#39;this is 9003&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>负载均衡器设置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>upstream backend<span class="token punctuation">{</span>
	server <span class="token number">123.57</span>.177.94:9091<span class="token punctuation">;</span>
	server <span class="token number">123.57</span>.177.94:9092<span class="token punctuation">;</span>
	server <span class="token number">123.57</span>.177.94:9093<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
server <span class="token punctuation">{</span>
	listen <span class="token number">8083</span><span class="token punctuation">;</span>
	server_name localhost<span class="token punctuation">;</span>
	location /<span class="token punctuation">{</span>
		proxy_pass http://backend<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、nginx-负载均衡状态" tabindex="-1"><a class="header-anchor" href="#_5、nginx-负载均衡状态" aria-hidden="true">#</a> 5、Nginx 负载均衡状态</h3><p>代理服务器在负责均衡调度中的状态有以下几个：</p><table><thead><tr><th>状态</th><th>概述</th></tr></thead><tbody><tr><td>down</td><td>当前的server暂时不参与负载均衡</td></tr><tr><td>backup</td><td>预留的备份服务器</td></tr><tr><td>max_fails</td><td>允许请求失败的次数</td></tr><tr><td>fail_timeout</td><td>经过max_fails失败后, 服务暂停时间</td></tr><tr><td>max_conns</td><td>限制最大的接收连接数</td></tr></tbody></table><h4 id="_5-1-down" tabindex="-1"><a class="header-anchor" href="#_5-1-down" aria-hidden="true">#</a> 5.1 down</h4><p>down：将该服务器标记为永久不可用，那么该代理服务器将不参与负载均衡</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>upstream backend<span class="token punctuation">{</span>
	server <span class="token number">123.57</span>.177.94:9001 down<span class="token punctuation">;</span>
	server <span class="token number">123.57</span>.177.94:9002<span class="token punctuation">;</span>
	server <span class="token number">123.57</span>.177.94:9003<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
server <span class="token punctuation">{</span>
	listen <span class="token number">8083</span><span class="token punctuation">;</span>
	server_name localhost<span class="token punctuation">;</span>
	location /<span class="token punctuation">{</span>
		proxy_pass http://backend<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>该状态一般会对需要停机维护的服务器进行设置</p></blockquote><h4 id="_5-2-backup" tabindex="-1"><a class="header-anchor" href="#_5-2-backup" aria-hidden="true">#</a> 5.2 backup</h4><p>backup：将该服务器标记为备份服务器，当主服务器不可用时，将用来传递请求。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream backend{
	server 123.57.177.94:9001 down;
	server 123.57.177.94:9002 backup;
	server 123.57.177.94:9003;
}
server {
	listen 8083;
	server_name localhost;
	location /{
		proxy_pass http://backend;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时需要将9003端口的访问禁止掉来模拟下唯一能对外提供访问的服务宕机以后，backup的备份服务器就要开始对外提供服务，此时为了测试验证，我们需要使用防火墙来进行拦截。</p><blockquote><p>503 状态码：Bad Gateway 端口（port）为开放</p></blockquote><blockquote><p><strong>firewall-cmd</strong>：</p><ul><li><p>查询防火墙中指定的端口是否开放</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>firewall-cmd --query-port<span class="token operator">=</span><span class="token number">9001</span>/tcp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>如何开放一个指定的端口</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--permanent</span> --add-port<span class="token operator">=</span><span class="token number">9002</span>/tcp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>批量添加开发端口</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--permanent</span> --add-port<span class="token operator">=</span><span class="token number">9001</span>-9003/tcp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>如何移除一个指定的端口</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--permanent</span> --remove-port<span class="token operator">=</span><span class="token number">9003</span>/tcp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>重新加载</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>firewall-cmd <span class="token parameter variable">--reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>参数说明：</p><ul><li>--permanent：表示设置为持久</li><li>--add-port：表示添加指定端口</li><li>--remove-port：表示移除指定端口</li></ul></li></ul></blockquote><h4 id="_5-3-max-conns" tabindex="-1"><a class="header-anchor" href="#_5-3-max-conns" aria-hidden="true">#</a> 5.3 max_conns</h4><p>max_conns=number：用来设置代理服务器同时活动链接的最大数量，默认为0，表示不限制，使用该配置可以根据后端服务器处理请求的并发量来进行设置，防止后端服务器被压垮。</p><h4 id="_5-4-max-fails-和-fail-timeout" tabindex="-1"><a class="header-anchor" href="#_5-4-max-fails-和-fail-timeout" aria-hidden="true">#</a> 5.4 max_fails 和 fail_timeout</h4><p>max_fails=number：设置允许请求代理服务器失败的次数，默认为1。</p><p>fail_timeout=time：设置经过max_fails失败后，服务暂停的时间，默认是10秒。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>upstream backend<span class="token punctuation">{</span>
	server <span class="token number">123.57</span>.177.94:9001 down<span class="token punctuation">;</span>
	server <span class="token number">123.57</span>.177.94:9002 backup<span class="token punctuation">;</span>
	server <span class="token number">123.57</span>.177.94:9003 <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span><span class="token number">15</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
server <span class="token punctuation">{</span>
	listen <span class="token number">8083</span><span class="token punctuation">;</span>
	server_name localhost<span class="token punctuation">;</span>
	location /<span class="token punctuation">{</span>
		proxy_pass http://backend<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6、nginx-负载均衡策略" tabindex="-1"><a class="header-anchor" href="#_6、nginx-负载均衡策略" aria-hidden="true">#</a> 6、Nginx 负载均衡策略</h3><p>介绍完Nginx负载均衡的相关指令后，我们已经能实现将用户的请求分发到不同的服务器上，那么除了采用默认的分配方式以外，我们还能采用什么样的负载算法?</p><p>Nginx 的 upstream 支持如下六种方式的分配算法，分别是：</p><table><thead><tr><th>算法名称</th><th>说明</th></tr></thead><tbody><tr><td>轮询</td><td>默认方式</td></tr><tr><td>weight</td><td>权重方式</td></tr><tr><td>ip_hash</td><td>依据ip分配方式</td></tr><tr><td>least_conn</td><td>依据最少连接方式</td></tr><tr><td>url_hash</td><td>依据URL分配方式</td></tr><tr><td>fair</td><td>依据响应时间方式</td></tr></tbody></table><h4 id="_6-1-轮询" tabindex="-1"><a class="header-anchor" href="#_6-1-轮询" aria-hidden="true">#</a> 6.1 轮询</h4><p>是upstream模块负载均衡默认的策略。每个请求会按时间顺序逐个分配到不同的后端服务器。轮询不需要额外的配置。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>upstream backend<span class="token punctuation">{</span>
	server <span class="token number">123.57</span>.177.94:9001 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
	server <span class="token number">123.57</span>.177.94:9002 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
	server <span class="token number">123.57</span>.177.94:9003 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
server <span class="token punctuation">{</span>
	listen <span class="token number">8083</span><span class="token punctuation">;</span>
	server_name localhost<span class="token punctuation">;</span>
	location /<span class="token punctuation">{</span>
		proxy_pass http://backend<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-2-weight加权【加权轮询】" tabindex="-1"><a class="header-anchor" href="#_6-2-weight加权【加权轮询】" aria-hidden="true">#</a> 6.2 weight加权【加权轮询】</h4><p>weight=number：用来设置服务器的权重，默认为1，权重数据越大，被分配到请求的几率越大；</p><blockquote><p>该权重值，主要是针对实际工作环境中不同的后端服务器硬件配置进行调整的，所有此策略比较适合服务器的硬件配置差别比较大的情况。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>upstream backend<span class="token punctuation">{</span>
	server <span class="token number">123.57</span>.177.94:9001 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">;</span>
	server <span class="token number">123.57</span>.177.94:9002 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">;</span>
	server <span class="token number">123.57</span>.177.94:9003 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
server <span class="token punctuation">{</span>
	listen <span class="token number">8083</span><span class="token punctuation">;</span>
	server_name localhost<span class="token punctuation">;</span>
	location /<span class="token punctuation">{</span>
		proxy_pass http://backend<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-3-ip-hash" tabindex="-1"><a class="header-anchor" href="#_6-3-ip-hash" aria-hidden="true">#</a> 6.3 ip_hash</h4><p>当对后端的多台动态应用服务器做负载均衡时，ip_hash指令能够将某个客户端IP的请求通过哈希算法定位到同一台后端服务器上。</p><blockquote><p>这样，当来自某一个IP的用户在后端Web服务器A上登录后，在访问该站点的其他URL，能保证其访问的还是后端web服务器A。</p><p>Session 存储登录状态</p></blockquote><table><thead><tr><th>语法</th><th>ip_hash;</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>upstream</td></tr></tbody></table><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>upstream backend<span class="token punctuation">{</span>
	ip_hash<span class="token punctuation">;</span>
	server <span class="token number">123.57</span>.177.94:9001<span class="token punctuation">;</span>
	server <span class="token number">123.57</span>.177.94:9002<span class="token punctuation">;</span>
	server <span class="token number">123.57</span>.177.94:9003<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
server <span class="token punctuation">{</span>
	listen <span class="token number">8083</span><span class="token punctuation">;</span>
	server_name localhost<span class="token punctuation">;</span>
	location /<span class="token punctuation">{</span>
		proxy_pass http://backend<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要额外多说一点的是使用ip_hash指令无法保证后端服务器的负载均衡，可能导致有些后端服务器接收到的请求多，有些后端服务器接收的请求少，而且设置后端服务器权重等方法将不起作用。</p><h4 id="_6-4-least-conn" tabindex="-1"><a class="header-anchor" href="#_6-4-least-conn" aria-hidden="true">#</a> 6.4 least_conn</h4><p>最少连接，把请求转发给连接数较少的后端服务器。轮询算法是把请求平均的转发给各个后端，使它们的负载大致相同；但是，有些请求占用的时间很长，会导致其所在的后端负载较高。这种情况下，least_conn这种方式就可以达到更好的负载均衡效果。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>upstream backend<span class="token punctuation">{</span>
	least_conn<span class="token punctuation">;</span>
	server <span class="token number">123.57</span>.177.94:9001<span class="token punctuation">;</span>
	server <span class="token number">123.57</span>.177.94:9002<span class="token punctuation">;</span>
	server <span class="token number">123.57</span>.177.94:9003<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
server <span class="token punctuation">{</span>
	listen <span class="token number">8083</span><span class="token punctuation">;</span>
	server_name localhost<span class="token punctuation">;</span>
	location /<span class="token punctuation">{</span>
		proxy_pass http://backend<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>此负载均衡策略适合请求处理时间长短不一造成服务器过载的情况。</p></blockquote><h4 id="_6-5-url-hash" tabindex="-1"><a class="header-anchor" href="#_6-5-url-hash" aria-hidden="true">#</a> 6.5 url_hash</h4><p>按访问url的hash结果来分配请求，使每个url定向到同一个后端服务器，要配合缓存命中来使用。</p><blockquote><p>同一个资源多次请求，可能会到达不同的服务器上，导致不必要的多次下载，缓存命中率不高，以及一些资源时间的浪费。</p><p>而使用url_hash，可以使得同一个url（也就是同一个资源请求）会到达同一台服务器，一旦缓存住了资源，再此收到请求，就可以从缓存中读取。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>upstream backend<span class="token punctuation">{</span>
	<span class="token builtin class-name">hash</span> <span class="token operator">&amp;</span>request_uri<span class="token punctuation">;</span>
	server <span class="token number">123.57</span>.177.94:9001<span class="token punctuation">;</span>
	server <span class="token number">123.57</span>.177.94:9002<span class="token punctuation">;</span>
	server <span class="token number">123.57</span>.177.94:9003<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
server <span class="token punctuation">{</span>
	listen <span class="token number">8083</span><span class="token punctuation">;</span>
	server_name localhost<span class="token punctuation">;</span>
	location /<span class="token punctuation">{</span>
		proxy_pass http://backend<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-6-fair" tabindex="-1"><a class="header-anchor" href="#_6-6-fair" aria-hidden="true">#</a> 6.6 fair</h4><p>fair：采用的不是内建负载均衡使用的轮换的均衡算法，而是可以根据页面大小、加载时间长短智能的进行负载均衡。那么如何使用第三方模块的fair负载均衡策略。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>upstream backend{
	fair;
	server 123.57.177.94:9001;
	server 123.57.177.94:9002;
	server 123.57.177.94:9003;
}
server {
	listen 8083;
	server_name localhost;
	location /{
		proxy_pass http://backend;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>但是如何直接使用会报错，因为fair属于第三方模块实现的负载均衡。需要添加<code>nginx-upstream-fair</code>,如何添加对应的模块:</p><ol><li>下载nginx-upstream-fair模块</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载地址为:</span>
https://github.com/gnosek/nginx-upstream-fair
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>将下载的文件上传到服务器并进行解压缩</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">unzip</span> nginx-upstream-fair-master.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>重命名资源</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mv</span> nginx-upstream-fair-master fair
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>使用./configure命令将资源添加到Nginx模块中</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./configure --add-module<span class="token operator">=</span>/root/fair
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>编译</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编译可能会出现如下错误，ngx_http_upstream_srv_conf_t结构中缺少default_port</p><figure><img src="`+w+`" alt="default_port问题" tabindex="0" loading="lazy"><figcaption>default_port问题</figcaption></figure><p>解决方案：</p><p>在Nginx的源码中 src/http/ngx_http_upstream.h,找到<code>ngx_http_upstream_srv_conf_s</code>，在模块中添加添加default_port属性</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>in_port_t	   default_port
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="`+q+`" alt="default_port解决方案" tabindex="0" loading="lazy"><figcaption>default_port解决方案</figcaption></figure><p>然后再进行make</p><ol start="6"><li>更新Nginx</li></ol><p>​ 6.1 将sbin目录下的nginx进行备份</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mv /usr/local/nginx/sbin/nginx /usr/local/nginx/sbin/nginxold
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 6.2 将安装目录下的objs中的nginx拷贝到sbin目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd objs
cp nginx /usr/local/nginx/sbin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 6.3 更新Nginx</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd ../
make upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>编译测试使用Nginx</li></ol><p>上面介绍了Nginx常用的负载均衡的策略，有人说是5种，是把轮询和加权轮询归为一种，也有人说是6种。那么在咱们以后的开发中到底使用哪种，这个需要根据实际项目的应用场景来决定的。</p></blockquote><h3 id="_7、nginx-负载均衡案例" tabindex="-1"><a class="header-anchor" href="#_7、nginx-负载均衡案例" aria-hidden="true">#</a> 7、Nginx 负载均衡案例</h3><h4 id="_7-1-对所有请求实现一般轮询规则的负载均衡" tabindex="-1"><a class="header-anchor" href="#_7-1-对所有请求实现一般轮询规则的负载均衡" aria-hidden="true">#</a> 7.1 对所有请求实现一般轮询规则的负载均衡</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>upstream backend<span class="token punctuation">{</span>
	server <span class="token number">123.57</span>.177.94:9001<span class="token punctuation">;</span>
	server <span class="token number">123.57</span>.177.94:9002<span class="token punctuation">;</span>
	server <span class="token number">123.57</span>.177.94:9003<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
server <span class="token punctuation">{</span>
	listen <span class="token number">8083</span><span class="token punctuation">;</span>
	server_name localhost<span class="token punctuation">;</span>
	location /<span class="token punctuation">{</span>
		proxy_pass http://backend<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-2-对所有请求实现加权轮询规则的负载均衡" tabindex="-1"><a class="header-anchor" href="#_7-2-对所有请求实现加权轮询规则的负载均衡" aria-hidden="true">#</a> 7.2 对所有请求实现加权轮询规则的负载均衡</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>upstream backend<span class="token punctuation">{</span>
	server <span class="token number">123.57</span>.177.94:9001 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">7</span><span class="token punctuation">;</span>
	server <span class="token number">123.57</span>.177.94:9002 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">;</span>
	server <span class="token number">123.57</span>.177.94:9003 <span class="token assign-left variable">weight</span><span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
server <span class="token punctuation">{</span>
	listen <span class="token number">8083</span><span class="token punctuation">;</span>
	server_name localhost<span class="token punctuation">;</span>
	location /<span class="token punctuation">{</span>
		proxy_pass http://backend<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-3-对特定资源实现负载均衡" tabindex="-1"><a class="header-anchor" href="#_7-3-对特定资源实现负载均衡" aria-hidden="true">#</a> 7.3 对特定资源实现负载均衡</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>upstream videobackend<span class="token punctuation">{</span>
	server <span class="token number">123.57</span>.177.94:9001<span class="token punctuation">;</span>
	server <span class="token number">123.57</span>.177.94:9002<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
upstream filebackend<span class="token punctuation">{</span>
	server <span class="token number">123.57</span>.177.94:9003<span class="token punctuation">;</span>
	server <span class="token number">123.57</span>.177.94:9004<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
server <span class="token punctuation">{</span>
	listen <span class="token number">8084</span><span class="token punctuation">;</span>
	server_name localhost<span class="token punctuation">;</span>
	location /video/ <span class="token punctuation">{</span>
		proxy_pass http://videobackend<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	location /file/ <span class="token punctuation">{</span>
		proxy_pass http://filebackend<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-4-对不同域名实现负载均衡" tabindex="-1"><a class="header-anchor" href="#_7-4-对不同域名实现负载均衡" aria-hidden="true">#</a> 7.4 对不同域名实现负载均衡</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>upstream itcastbackend<span class="token punctuation">{</span>
	server <span class="token number">123.57</span>.177.94:9001<span class="token punctuation">;</span>
	server <span class="token number">123.57</span>.177.94:9002<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
upstream itheimabackend<span class="token punctuation">{</span>
	server <span class="token number">123.57</span>.177.94:9003<span class="token punctuation">;</span>
	server <span class="token number">123.57</span>.177.94:9004<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
server <span class="token punctuation">{</span>
	listen	<span class="token number">8085</span><span class="token punctuation">;</span>
	server_name www.itszb.com<span class="token punctuation">;</span>
	location / <span class="token punctuation">{</span>
		proxy_pass http://itszbbackend<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
server <span class="token punctuation">{</span>
	listen	<span class="token number">8086</span><span class="token punctuation">;</span>
	server_name www.bilibili.com<span class="token punctuation">;</span>
	location / <span class="token punctuation">{</span>
		proxy_pass http://bilibilibackend<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-5-实现带有url重写的负载均衡" tabindex="-1"><a class="header-anchor" href="#_7-5-实现带有url重写的负载均衡" aria-hidden="true">#</a> 7.5 实现带有URL重写的负载均衡</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>upstream backend<span class="token punctuation">{</span>
	server <span class="token number">123.57</span>.177.94:9001<span class="token punctuation">;</span>
	server <span class="token number">123.57</span>.177.94:9002<span class="token punctuation">;</span>
	server <span class="token number">123.57</span>.177.94:9003<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
server <span class="token punctuation">{</span>
	listen	<span class="token number">80</span><span class="token punctuation">;</span>
	server_name localhost<span class="token punctuation">;</span>
	location /file/ <span class="token punctuation">{</span>
		rewrite ^<span class="token punctuation">(</span>/file/.*<span class="token punctuation">)</span> /server/<span class="token variable">$1</span> last<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	location / <span class="token punctuation">{</span>
		proxy_pass http://backend<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,80);function $(R,I){const a=p("RouterLink");return t(),i("div",null,[z,l("p",null,[n("首先想到的可能是升级服务器的配置，比如提高CPU执行频率，加大内存等提高机器的物理性能来解决此问题，但是我们知道"),d(a,{to:"/%E7%AC%94%E8%AE%B0/https:/www.cnblogs.com/ysocean/p/7641540.html"},{default:r(()=>[n("摩尔定律")]),_:1}),n("的日益失效，硬件的性能提升已经不能满足日益提升的需求了。最明显的一个例子，天猫双十一当天，某个热销商品的瞬时访问量是极其庞大的，那么类似上面的系统架构，将机器都增加到现有的顶级物理配置，都是不能够满足需求的。那么怎么办呢？")]),T])}const S=e(N,[["render",$],["__file","Nginx.html.vue"]]);export{S as default};
