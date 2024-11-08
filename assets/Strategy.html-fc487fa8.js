import{_ as n,X as s,Y as a,Z as t}from"./framework-7c2c1cd4.js";const e="/blog/assets/Strategy-00063654.png",p={},c=t(`<h2 id="名称" tabindex="-1"><a class="header-anchor" href="#名称" aria-hidden="true">#</a> 名称</h2><p>策略模式、政策模式、方针模式</p><h2 id="目的" tabindex="-1"><a class="header-anchor" href="#目的" aria-hidden="true">#</a> 目的</h2><p>定义一个家族算法，并封装好其中每一个，使他们可以相互替换。策略模式是算法的变化独立于使用它的客户。</p><h2 id="程序用例" tabindex="-1"><a class="header-anchor" href="#程序用例" aria-hidden="true">#</a> 程序用例</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 策略接口
 */</span>
<span class="token keyword">interface</span> <span class="token class-name">PaymentStrategy</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">payment</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span> amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 微信支付策略
 */</span>

<span class="token keyword">class</span> <span class="token class-name">WechatPaymentStrategy</span> <span class="token keyword">implements</span> <span class="token class-name">PaymentStrategy</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">payment</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span> amount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;使用微信支付&quot;</span> <span class="token operator">+</span> amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 支付宝支付
 */</span>
<span class="token keyword">class</span> <span class="token class-name">AlipayPaymentStrategy</span> <span class="token keyword">implements</span> <span class="token class-name">PaymentStrategy</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">payment</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span> amount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;使用支付宝支付&quot;</span> <span class="token operator">+</span> amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 云闪付支付
 */</span>
<span class="token keyword">class</span> <span class="token class-name">UnionPayPaymentStrategy</span> <span class="token keyword">implements</span> <span class="token class-name">PaymentStrategy</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">payment</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span> amount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;使用云闪付支付&quot;</span> <span class="token operator">+</span> amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 支付服务
 */</span>
<span class="token keyword">class</span> <span class="token class-name">PaymentService</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">payment</span><span class="token punctuation">(</span><span class="token class-name">PaymentStrategy</span> paymentStrategy<span class="token punctuation">,</span> <span class="token class-name">BigDecimal</span> amount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        paymentStrategy<span class="token punctuation">.</span><span class="token function">payment</span><span class="token punctuation">(</span>amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 测试
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Strategy</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">PaymentService</span> paymentService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PaymentService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        paymentService<span class="token punctuation">.</span><span class="token function">payment</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">AlipayPaymentStrategy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;100&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        paymentService<span class="token punctuation">.</span><span class="token function">payment</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">WechatPaymentStrategy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;100&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        paymentService<span class="token punctuation">.</span><span class="token function">payment</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">UnionPayPaymentStrategy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">&quot;100&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="uml" tabindex="-1"><a class="header-anchor" href="#uml" aria-hidden="true">#</a> UML</h2><figure><img src="`+e+'" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h2 id="适用性" tabindex="-1"><a class="header-anchor" href="#适用性" aria-hidden="true">#</a> 适用性</h2><ul><li>许多相关的类只是行为不同，策略模式提供一种为一种类配置多种行为的能力；</li><li>需要一种算法的不同变体；</li><li>一个算法使用的数据，客户不应该对其知晓。使用策略模式来避免暴露复杂的，特定于算法的数据结构；</li><li>一个类定义了许多行为，这些行为在其操作中展现为多个条件语句。</li></ul>',10),i=[c];function o(l,u){return s(),a("div",null,i)}const k=n(p,[["render",o],["__file","Strategy.html.vue"]]);export{k as default};
