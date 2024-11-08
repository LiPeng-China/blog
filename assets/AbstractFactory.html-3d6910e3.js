import{_ as c,X as t,Y as p,$ as n,a0 as a,a1 as e,Z as l,E as o}from"./framework-7c2c1cd4.js";const i="/blog/assets/AbstractFactory-98c5b86d.png",u={},r=l(`<h2 id="别称" tabindex="-1"><a class="header-anchor" href="#别称" aria-hidden="true">#</a> 别称</h2><p>工具包</p><h2 id="目的" tabindex="-1"><a class="header-anchor" href="#目的" aria-hidden="true">#</a> 目的</h2><p>定义了一个创建对象的接口，用于创建<strong>一组</strong>相关的对象.</p><h2 id="程序示例" tabindex="-1"><a class="header-anchor" href="#程序示例" aria-hidden="true">#</a> 程序示例</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 抽象产品
 */</span>
<span class="token keyword">interface</span> <span class="token class-name">CPU</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">RAM</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 抽象每个产品的工厂
 */</span>
<span class="token keyword">interface</span> <span class="token class-name">CPUFactory</span> <span class="token punctuation">{</span>
    <span class="token class-name">CPU</span> <span class="token function">createCPU</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">RAMFactory</span> <span class="token punctuation">{</span>
    <span class="token class-name">RAM</span> <span class="token function">createRAM</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 实现具体的产品
 */</span>
<span class="token keyword">class</span> <span class="token class-name">WindowsCPU</span> <span class="token keyword">implements</span> <span class="token class-name">CPU</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">WindowsRAM</span> <span class="token keyword">implements</span> <span class="token class-name">RAM</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MacCPU</span> <span class="token keyword">implements</span> <span class="token class-name">CPU</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MacRAM</span> <span class="token keyword">implements</span> <span class="token class-name">RAM</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 工厂方法的具体实现
 */</span>
<span class="token keyword">class</span> <span class="token class-name">WindowsCPUFactory</span> <span class="token keyword">implements</span> <span class="token class-name">CPUFactory</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">CPU</span> <span class="token function">createCPU</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">WindowsCPU</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">WindowsRAMFactory</span> <span class="token keyword">implements</span> <span class="token class-name">RAMFactory</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">RAM</span> <span class="token function">createRAM</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">WindowsRAM</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MacCPUFactory</span> <span class="token keyword">implements</span> <span class="token class-name">CPUFactory</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">CPU</span> <span class="token function">createCPU</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MacCPU</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MacRAMFactory</span> <span class="token keyword">implements</span> <span class="token class-name">RAMFactory</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">RAM</span> <span class="token function">createRAM</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MacRAM</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 定义抽象工厂
 */</span>
<span class="token keyword">interface</span> <span class="token class-name">PCAbstractFactory</span> <span class="token punctuation">{</span>
    <span class="token class-name">CPU</span> <span class="token function">createCPU</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">RAM</span> <span class="token function">createRAM</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Mac 工厂的实现
 */</span>
<span class="token keyword">class</span> <span class="token class-name">MacFactory</span> <span class="token keyword">implements</span> <span class="token class-name">PCAbstractFactory</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">CPU</span> <span class="token function">createCPU</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MacCPUFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">createCPU</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">RAM</span> <span class="token function">createRAM</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MacRAMFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">createRAM</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Windows 工厂实现
 */</span>
<span class="token keyword">class</span> <span class="token class-name">WindowsFactory</span> <span class="token keyword">implements</span> <span class="token class-name">PCAbstractFactory</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">CPU</span> <span class="token function">createCPU</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">WindowsCPUFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">createCPU</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">RAM</span> <span class="token function">createRAM</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">WindowsRAMFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">createRAM</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AbstractFactory</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">PCAbstractFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MacFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">CPU</span> cpu <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">createCPU</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">RAM</span> ram <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">createRAM</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="uml图" tabindex="-1"><a class="header-anchor" href="#uml图" aria-hidden="true">#</a> UML图</h2><figure><img src="`+i+'" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h2 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h2><ol><li>将产品的生产分离出来；</li><li>易于改变产品系列；</li><li>利于产品的一致性，一次性生产一系列产品。</li></ol><h2 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h2><ol><li>不利于新增产品，新增则抽象工厂及工厂实现类均要增加相关类。</li></ol><h2 id="java中的用例" tabindex="-1"><a class="header-anchor" href="#java中的用例" aria-hidden="true">#</a> Java中的用例</h2>',13),d={href:"http://docs.oracle.com/javase/8/docs/api/javax/xml/parsers/DocumentBuilderFactory.html",target:"_blank",rel:"noopener noreferrer"},k={href:"http://docs.oracle.com/javase/8/docs/api/javax/xml/transform/TransformerFactory.html#newInstance--",target:"_blank",rel:"noopener noreferrer"},v={href:"http://docs.oracle.com/javase/8/docs/api/javax/xml/xpath/XPathFactory.html#newInstance--",target:"_blank",rel:"noopener noreferrer"};function m(b,y){const s=o("ExternalLinkIcon");return t(),p("div",null,[r,n("ul",null,[n("li",null,[n("a",d,[a("javax.xml.parsers.DocumentBuilderFactory"),e(s)])]),n("li",null,[n("a",k,[a("javax.xml.transform.TransformerFactory"),e(s)])]),n("li",null,[n("a",v,[a("javax.xml.xpath.XPathFactory"),e(s)])])])])}const h=c(u,[["render",m],["__file","AbstractFactory.html.vue"]]);export{h as default};
