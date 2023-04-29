<template><div><p>Markdown Math</p>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<ul>
<li>
<p>行内公式$公式$</p>
</li>
<li>
<p>行间公$$公式$$</p>
</li>
</ul>
<h2 id="_1、上下标" tabindex="-1"><a class="header-anchor" href="#_1、上下标" aria-hidden="true">#</a> 1、上下标</h2>
<table>
<thead>
<tr>
<th style="text-align:center">数学符号</th>
<th style="text-align:center">实际效果</th>
<th style="text-align:center">语法</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">向量</td>
<td style="text-align:center">$\vec{a}$</td>
<td style="text-align:center">\vec{a}</td>
</tr>
<tr>
<td style="text-align:center">平均值</td>
<td style="text-align:center">$\overline{a}$</td>
<td style="text-align:center">\overline{a}</td>
</tr>
<tr>
<td style="text-align:center">估计值</td>
<td style="text-align:center">$\widehat{a}$</td>
<td style="text-align:center">\widehat{a}</td>
</tr>
<tr>
<td style="text-align:center">颚化符号 等价无穷小</td>
<td style="text-align:center">$\widetilde{a}$</td>
<td style="text-align:center">\widetilde{a}</td>
</tr>
<tr>
<td style="text-align:center">一阶导数</td>
<td style="text-align:center">$\dot{a}$</td>
<td style="text-align:center">\dot{a}</td>
</tr>
<tr>
<td style="text-align:center">二阶导数</td>
<td style="text-align:center">\ddot{a}</td>
<td style="text-align:center">\ddot{a}</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">\check{a}</td>
<td style="text-align:center">\check{a}</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\breve{a}$</td>
<td style="text-align:center">\breve{a}</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\acute{a}$</td>
<td style="text-align:center">\grave{a}</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\acute{a}$</td>
<td style="text-align:center">\acute{a}</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\stackrel{x}{y}$</td>
<td style="text-align:center">\stackrel{x}{y}</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\overset{x}{y}$</td>
<td style="text-align:center">\overset{x}{y}</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\underset{x}{y}$</td>
<td style="text-align:center">\underset{x}{y}</td>
</tr>
<tr>
<td style="text-align:center">上标</td>
<td style="text-align:center">$x^y$</td>
<td style="text-align:center">x^y</td>
</tr>
<tr>
<td style="text-align:center">下标</td>
<td style="text-align:center">$x_y$</td>
<td style="text-align:center">x_y</td>
</tr>
</tbody>
</table>
<h2 id="_2、分式" tabindex="-1"><a class="header-anchor" href="#_2、分式" aria-hidden="true">#</a> 2、分式</h2>
<table>
<thead>
<tr>
<th style="text-align:center">实际效果</th>
<th style="text-align:center">语法</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1/2</td>
<td style="text-align:center">1/2</td>
</tr>
<tr>
<td style="text-align:center">$\frac{1}{2}$</td>
<td style="text-align:center">\frac{1}{2}</td>
</tr>
</tbody>
</table>
<h2 id="_3、省略号" tabindex="-1"><a class="header-anchor" href="#_3、省略号" aria-hidden="true">#</a> 3、省略号</h2>
<table>
<thead>
<tr>
<th style="text-align:center">实际效果</th>
<th style="text-align:center">语法</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">$\cdots$</td>
<td style="text-align:center">\cdots</td>
</tr>
</tbody>
</table>
<h2 id="_4、开根号" tabindex="-1"><a class="header-anchor" href="#_4、开根号" aria-hidden="true">#</a> 4、开根号</h2>
<table>
<thead>
<tr>
<th style="text-align:center">实际效果</th>
<th style="text-align:center">语法</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">$\sqrt{2}$</td>
<td style="text-align:center">\sqrt{2}</td>
</tr>
</tbody>
</table>
<h2 id="_5、复杂数学符号" tabindex="-1"><a class="header-anchor" href="#_5、复杂数学符号" aria-hidden="true">#</a> 5、复杂数学符号</h2>
<table>
<thead>
<tr>
<th style="text-align:center">数学符号</th>
<th style="text-align:center">实际效果</th>
<th style="text-align:center">语法</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1. 求和</td>
<td style="text-align:center">$y=\sum_{i=1}^{n}{x_i}$</td>
<td style="text-align:center">y=\sum_{i=1}^{n}{x_i}</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$y=\sum^{x \to \infty}_{y \to 0}{\frac{x}{y}}$</td>
<td style="text-align:center">y=\sum^{x \to \infty}_{y \to 0}{\frac{x}{y}}</td>
</tr>
<tr>
<td style="text-align:center">2. 极限</td>
<td style="text-align:center">$\lim^{x \to \infty}_{y \to 0}{\frac{x}{y}}$</td>
<td style="text-align:center">\lim^{x \to \infty}_{y \to 0}{\frac{x}{y}}</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\displaystyle \lim^{x \to \infty}_{y \to 0}{\frac{x}{y}}$</td>
<td style="text-align:center">\displaystyle \lim^{x \to \infty}_{y \to 0}{\frac{x}{y}}</td>
</tr>
<tr>
<td style="text-align:center">3. 开方</td>
<td style="text-align:center">$\sqrt x$</td>
<td style="text-align:center">\sqrt x</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\sqrt[3]{x+y}$</td>
<td style="text-align:center">\sqrt[3]{x+y}</td>
</tr>
<tr>
<td style="text-align:center">4. 微积分</td>
<td style="text-align:center">$\int^{\infty}_{0}{xdx}$</td>
<td style="text-align:center">\int^{\infty}_{0}{xdx}</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\iint$</td>
<td style="text-align:center">\iint</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\iiint$</td>
<td style="text-align:center">\iiint</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\oint$</td>
<td style="text-align:center">\oint</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\dfrac{\partial f}{\partial x}$</td>
<td style="text-align:center">\dfrac{\partial f}{\partial x}</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\frac{\partial x^2}{\partial y^2}$</td>
<td style="text-align:center">\frac{\partial x^2}{\partial y^2}</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\frac{\partial f(x,y)}{\partial x} \vert_{x=0}$</td>
<td style="text-align:center">\frac{\partial f(x,y)}{\partial x} \vert_{x=0}</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$y{\prime}x$</td>
<td style="text-align:center">y{\prime}x</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\nabla$</td>
<td style="text-align:center">\nabla</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\infty$</td>
<td style="text-align:center">\infty</td>
</tr>
<tr>
<td style="text-align:center">5. 向量</td>
<td style="text-align:center">$\vec x$</td>
<td style="text-align:center">\vec x</td>
</tr>
<tr>
<td style="text-align:center">6. 矢量</td>
<td style="text-align:center">$\overline{xyz}$</td>
<td style="text-align:center">\overline{xyz}</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\overline{x\overline{yz}}$</td>
<td style="text-align:center">\overline{x\overline{yz}}</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\underline{xyz}$</td>
<td style="text-align:center">\underline{xyz}</td>
</tr>
<tr>
<td style="text-align:center">7. 累乘</td>
<td style="text-align:center">$\prod_{n=1}^{99}{x_n}$</td>
<td style="text-align:center">\prod_{n=1}^{99}{x_n}</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\displaystyle \prod_{n=1}^{99}{x_n}$</td>
<td style="text-align:center">\displaystyle \prod_{n=1}^{99}{x_n}</td>
</tr>
<tr>
<td style="text-align:center">8. 箭头</td>
<td style="text-align:center">$a\leftarrow b$</td>
<td style="text-align:center">a\leftarrow b</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$a\longleftarrow b$</td>
<td style="text-align:center">a\longleftarrow b</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$b \rightarrow c$</td>
<td style="text-align:center">a \rightarrow b</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$a \longrightarrow b$</td>
<td style="text-align:center">a \longrightarrow b</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$a \leftrightarrow b$</td>
<td style="text-align:center">a \leftrightarrow b</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$a \longleftrightarrow b$</td>
<td style="text-align:center">a \longleftrightarrow b</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$a \Leftrightarrow b$</td>
<td style="text-align:center">a \Leftrightarrow b</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$a \rightleftharpoons b$</td>
<td style="text-align:center">a \rightleftharpoons b</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$a \nearrow b$</td>
<td style="text-align:center">a \nearrow b</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$a \searrow b$</td>
<td style="text-align:center">a \searrow b</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$a \nwarrow b$</td>
<td style="text-align:center">a \nwarrow b</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$a \rightharpoonup b$</td>
<td style="text-align:center">a \rightharpoonup b</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$a \rightharpoondown b$</td>
<td style="text-align:center">a \rightharpoondown b</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$a \leftharpoonup b$</td>
<td style="text-align:center">a \leftharpoonup b</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$a \leftharpoondown b$</td>
<td style="text-align:center">a \leftharpoondown b</td>
</tr>
<tr>
<td style="text-align:center">9. 逻辑运算符</td>
<td style="text-align:center">$\forall a$</td>
<td style="text-align:center">\forall a</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\exists a$</td>
<td style="text-align:center">\exists a</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\lnot a$</td>
<td style="text-align:center">\lnot a</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\bigvee a$</td>
<td style="text-align:center">\bigvee a</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\bigwedge a$</td>
<td style="text-align:center">\bigwedge a</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\because a$</td>
<td style="text-align:center">\because a</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\therefore a$</td>
<td style="text-align:center">\therefore a</td>
</tr>
<tr>
<td style="text-align:center">10. 集合符号</td>
<td style="text-align:center">$X \cup Y$</td>
<td style="text-align:center">X \cup Y</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$X \bigcup Y$</td>
<td style="text-align:center">X \bigcup Y</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$X \cap Y$</td>
<td style="text-align:center">X \cap Y</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$X \bigcap Y$</td>
<td style="text-align:center">X \bigcap Y</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$X \subset Y$</td>
<td style="text-align:center">X \subset Y</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$X \not \subset Y$</td>
<td style="text-align:center">X \not \subset Y</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$X \subseteq Y$</td>
<td style="text-align:center">X \subseteq Y</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$X \not \subseteq Y$</td>
<td style="text-align:center">X \not \subseteq Y</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$a \in A$</td>
<td style="text-align:center">a \in A</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$a \notin A$</td>
<td style="text-align:center">a \notin A</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\emptyset$</td>
<td style="text-align:center">\emptyset</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\varnothing$</td>
<td style="text-align:center">\varnothing</td>
</tr>
<tr>
<td style="text-align:center">11. 取整</td>
<td style="text-align:center">$\lceil \frac{x}{2} \rceil$</td>
<td style="text-align:center">\lceil \frac{x}{2} \rceil</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\lfloor x \rfloor$</td>
<td style="text-align:center">\lfloor x \rfloor</td>
</tr>
<tr>
<td style="text-align:center">12. 括号</td>
<td style="text-align:center">$\tbinom{n}{k}$</td>
<td style="text-align:center">\tbinom{n}{k}</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">${n \brace k}$</td>
<td style="text-align:center">{n \brace k}</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">${n \choose k}$</td>
<td style="text-align:center">{n \choose k}</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">${n \brack k}$</td>
<td style="text-align:center">{n \brack k}</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\overbrace{1+2+\cdots+100}$</td>
<td style="text-align:center">\overbrace{1+2+\cdots+100}</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\underbrace{1+2+\cdots+100}$</td>
<td style="text-align:center">\underbrace{1+2+\cdots+100}</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$5050 \overbrace{1+2+\cdots+100}$</td>
<td style="text-align:center">5050 \overbrace{1+2+\cdots+100}</td>
</tr>
<tr>
<td style="text-align:center">13. 矩阵</td>
<td style="text-align:center">$\begin{matrix} 0 &amp; 1 \ 3 &amp;4 \ \end{matrix}$</td>
<td style="text-align:center">\begin{matrix} 0 &amp; 1 \\ 3 &amp;4 \\ \end{matrix}</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\begin{pmatrix} 0 &amp;1 \ 3 &amp; 4\ \end{pmatrix}$</td>
<td style="text-align:center">\begin{pmatrix} 0 &amp;1 \\ 3 &amp; 4\\ \end{pmatrix}</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\begin{vmatrix} 0 &amp;1 \ 3 &amp; 4\ \end{vmatrix}$</td>
<td style="text-align:center">\begin{vmatrix} 0 &amp;1 \\ 3 &amp; 4\\ \end{vmatrix}</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\begin{Vmatrix} 0 &amp;1 \ 3 &amp; 4\ \end{Vmatrix}$</td>
<td style="text-align:center">\begin{Vmatrix} 0 &amp;1 \\ 3 &amp; 4\\ \end{Vmatrix}</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\begin{bmatrix} 0 &amp; 1\ 3 &amp; 4\ \end{bmatrix}$</td>
<td style="text-align:center">\begin{bmatrix} 0 &amp; 1\\ 3 &amp; 4\\ \end{bmatrix}</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\begin{Bmatrix} 0 &amp; 1\ 3 &amp; 4\ \end{Bmatrix}$</td>
<td style="text-align:center">\begin{Bmatrix} 0 &amp; 1\\ 3 &amp; 4\\ \end{Bmatrix}</td>
</tr>
</tbody>
</table>
<h2 id="_6、关系运算符" tabindex="-1"><a class="header-anchor" href="#_6、关系运算符" aria-hidden="true">#</a> 6、关系运算符</h2>
<table>
<thead>
<tr>
<th style="text-align:center">实际效果</th>
<th style="text-align:center">语法</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">$\neq$</td>
<td style="text-align:center">\neq</td>
</tr>
<tr>
<td style="text-align:center">$\leq$</td>
<td style="text-align:center">\leq</td>
</tr>
<tr>
<td style="text-align:center">$\geq$</td>
<td style="text-align:center">\geq</td>
</tr>
<tr>
<td style="text-align:center">$\approx$</td>
<td style="text-align:center">\approx</td>
</tr>
<tr>
<td style="text-align:center">$\not\lt$</td>
<td style="text-align:center">\not\lt</td>
</tr>
<tr>
<td style="text-align:center">$\gt$</td>
<td style="text-align:center">\gt</td>
</tr>
<tr>
<td style="text-align:center">$\gg$</td>
<td style="text-align:center">\gg</td>
</tr>
<tr>
<td style="text-align:center">$\lll$</td>
<td style="text-align:center">\lll</td>
</tr>
<tr>
<td style="text-align:center">$\pm$</td>
<td style="text-align:center">\pm</td>
</tr>
<tr>
<td style="text-align:center">$\times$</td>
<td style="text-align:center">\times</td>
</tr>
<tr>
<td style="text-align:center">$\div$</td>
<td style="text-align:center">\div</td>
</tr>
<tr>
<td style="text-align:center">$\mid$</td>
<td style="text-align:center">\mid</td>
</tr>
<tr>
<td style="text-align:center">$\ast$</td>
<td style="text-align:center">\ast</td>
</tr>
<tr>
<td style="text-align:center">$\angle$</td>
<td style="text-align:center">\angle</td>
</tr>
<tr>
<td style="text-align:center">$\bot$</td>
<td style="text-align:center">\bot</td>
</tr>
<tr>
<td style="text-align:center">$\odot$</td>
<td style="text-align:center">\odot</td>
</tr>
<tr>
<td style="text-align:center">$\bigodot$</td>
<td style="text-align:center">\bigodot</td>
</tr>
<tr>
<td style="text-align:center">$\otimes$</td>
<td style="text-align:center">\times</td>
</tr>
<tr>
<td style="text-align:center">$\bigotimes$</td>
<td style="text-align:center">\bigotimes</td>
</tr>
</tbody>
</table>
<h2 id="_7、三角函数" tabindex="-1"><a class="header-anchor" href="#_7、三角函数" aria-hidden="true">#</a> 7、三角函数</h2>
<table>
<thead>
<tr>
<th style="text-align:center">实际效果</th>
<th style="text-align:center">语法</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">$\sin30^\circ$</td>
<td style="text-align:center">\sin 30^\circ</td>
</tr>
<tr>
<td style="text-align:center">$\cos 30^\circ$</td>
<td style="text-align:center">\cos 30^\circ</td>
</tr>
<tr>
<td style="text-align:center">$tan30^\circ$</td>
<td style="text-align:center">\tan30^\cirfc</td>
</tr>
</tbody>
</table>
<h2 id="_8、对数函数" tabindex="-1"><a class="header-anchor" href="#_8、对数函数" aria-hidden="true">#</a> 8、对数函数</h2>
<table>
<thead>
<tr>
<th style="text-align:center">实际效果</th>
<th style="text-align:center">语法</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">$\ln2$</td>
<td style="text-align:center">\ln2</td>
</tr>
<tr>
<td style="text-align:center">$\log_2 8$</td>
<td style="text-align:center">\log_2 8</td>
</tr>
<tr>
<td style="text-align:center">$lg10$</td>
<td style="text-align:center">\lg 10</td>
</tr>
</tbody>
</table>
<h2 id="_9、矩阵" tabindex="-1"><a class="header-anchor" href="#_9、矩阵" aria-hidden="true">#</a> 9、矩阵</h2>
<div class="language-latex line-numbers-mode" data-ext="latex"><pre v-pre class="language-latex"><code><span class="token comment">% 可将 [] 换成 () 或 || ...</span>
<span class="token function selector">\left</span><span class="token punctuation">[</span>
<span class="token function selector">\begin</span><span class="token punctuation">{</span><span class="token keyword">array</span><span class="token punctuation">}</span><span class="token punctuation">{</span>ccc|c<span class="token punctuation">}</span>
    <span class="token function selector">\psi</span>(x) <span class="token punctuation">&amp;</span> g(x) <span class="token punctuation">&amp;</span> <span class="token function selector">\cdots</span> <span class="token punctuation">&amp;</span> a_<span class="token punctuation">{</span>1n<span class="token punctuation">}</span> <span class="token function selector">\\</span>
    <span class="token function selector">\hline</span>
    a_<span class="token punctuation">{</span>21<span class="token punctuation">}</span> <span class="token punctuation">&amp;</span> a_<span class="token punctuation">{</span>22<span class="token punctuation">}</span> <span class="token punctuation">&amp;</span> <span class="token function selector">\dots</span> <span class="token punctuation">&amp;</span> a_<span class="token punctuation">{</span>2n<span class="token punctuation">}</span> <span class="token function selector">\\</span>
    <span class="token function selector">\vdots</span> <span class="token punctuation">&amp;</span> <span class="token function selector">\vdots</span> <span class="token punctuation">&amp;</span> <span class="token function selector">\ddots</span> <span class="token punctuation">&amp;</span> <span class="token function selector">\vdots</span> <span class="token function selector">\\</span>
    a_<span class="token punctuation">{</span>n1<span class="token punctuation">}</span> <span class="token punctuation">&amp;</span> a_<span class="token punctuation">{</span>n2<span class="token punctuation">}</span> <span class="token punctuation">&amp;</span> <span class="token function selector">\dots</span> <span class="token punctuation">&amp;</span> a_<span class="token punctuation">{</span>nn<span class="token punctuation">}</span>
<span class="token function selector">\end</span><span class="token punctuation">{</span><span class="token keyword">array</span><span class="token punctuation">}</span> 
<span class="token function selector">\right</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>$$
\left[
\begin{array}{ccc|c}
\psi(x) &amp; g(x) &amp; \cdots &amp; a_{1n} \
\hline
a_{21} &amp; a_{22} &amp; \dots &amp; a_{2n} \
\vdots &amp; \vdots &amp; \ddots &amp; \vdots \
a_{n1} &amp; a_{n2} &amp; \dots &amp; a_{nn}
\end{array}
\right]
$$</p>
<div class="language-latex line-numbers-mode" data-ext="latex"><pre v-pre class="language-latex"><code><span class="token function selector">\begin</span><span class="token punctuation">{</span><span class="token keyword">bmatrix</span><span class="token punctuation">}</span>
    1 <span class="token punctuation">&amp;</span> x_<span class="token punctuation">{</span>0<span class="token punctuation">}</span> <span class="token punctuation">&amp;</span> <span class="token function selector">\dots</span> <span class="token punctuation">&amp;</span> x_<span class="token punctuation">{</span>0<span class="token punctuation">}</span>^<span class="token punctuation">{</span>n<span class="token punctuation">}</span> <span class="token function selector">\\</span>
    1 <span class="token punctuation">&amp;</span> x_<span class="token punctuation">{</span>1<span class="token punctuation">}</span> <span class="token punctuation">&amp;</span> <span class="token function selector">\dots</span> <span class="token punctuation">&amp;</span> x_<span class="token punctuation">{</span>1<span class="token punctuation">}</span>^<span class="token punctuation">{</span>n<span class="token punctuation">}</span> <span class="token function selector">\\</span>
    <span class="token punctuation">&amp;</span> <span class="token punctuation">&amp;</span> <span class="token function selector">\cdots</span> <span class="token punctuation">&amp;</span> x_<span class="token punctuation">{</span>n<span class="token punctuation">}</span>^<span class="token punctuation">{</span>n<span class="token punctuation">}</span>
<span class="token function selector">\end</span><span class="token punctuation">{</span><span class="token keyword">bmatrix</span><span class="token punctuation">}</span>
<span class="token function selector">\begin</span><span class="token punctuation">{</span><span class="token keyword">bmatrix</span><span class="token punctuation">}</span>
    a_<span class="token punctuation">{</span>0<span class="token punctuation">}</span> <span class="token function selector">\\</span> a_<span class="token punctuation">{</span>1<span class="token punctuation">}</span> <span class="token function selector">\\</span> <span class="token function selector">\vdots</span> <span class="token function selector">\\</span> a_<span class="token punctuation">{</span>n<span class="token punctuation">}</span>
<span class="token function selector">\end</span><span class="token punctuation">{</span><span class="token keyword">bmatrix</span><span class="token punctuation">}</span>=
<span class="token function selector">\begin</span><span class="token punctuation">{</span><span class="token keyword">bmatrix</span><span class="token punctuation">}</span>
    y_<span class="token punctuation">{</span>0<span class="token punctuation">}</span> <span class="token function selector">\\</span> y_<span class="token punctuation">{</span>1<span class="token punctuation">}</span> <span class="token function selector">\\</span> <span class="token function selector">\vdots</span> <span class="token function selector">\\</span> y_<span class="token punctuation">{</span>n<span class="token punctuation">}</span>
<span class="token function selector">\end</span><span class="token punctuation">{</span><span class="token keyword">bmatrix</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>$$
\begin{bmatrix}
1 &amp; x_{0} &amp; \dots &amp; x_{0}^{n} \
1 &amp; x_{1} &amp; \dots &amp; x_{1}^{n} \
&amp; &amp; \cdots &amp; x_{n}^{n}
\end{bmatrix}
\begin{bmatrix}
a_{0} \ a_{1} \ \vdots \ a_{n}
\end{bmatrix}=
\begin{bmatrix}
y_{0} \ y_{1} \ \vdots \ y_{n}
\end{bmatrix}
$$</p>
<h2 id="_10、方程式" tabindex="-1"><a class="header-anchor" href="#_10、方程式" aria-hidden="true">#</a> 10、方程式</h2>
<div class="language-latex line-numbers-mode" data-ext="latex"><pre v-pre class="language-latex"><code><span class="token function selector">\begin</span><span class="token punctuation">{</span><span class="token keyword">cases</span><span class="token punctuation">}</span>
    a_<span class="token punctuation">{</span>0<span class="token punctuation">}</span>+a<span class="token punctuation">{</span>1<span class="token punctuation">}</span>x_<span class="token punctuation">{</span>0<span class="token punctuation">}</span>+<span class="token function selector">\dots</span>+a_<span class="token punctuation">{</span>n<span class="token punctuation">}</span>x_<span class="token punctuation">{</span>0<span class="token punctuation">}</span>^<span class="token punctuation">{</span>n<span class="token punctuation">}</span>=y_<span class="token punctuation">{</span>0<span class="token punctuation">}</span><span class="token function selector">\\</span>
    a_<span class="token punctuation">{</span>0<span class="token punctuation">}</span>+a<span class="token punctuation">{</span>1<span class="token punctuation">}</span>x_<span class="token punctuation">{</span>1<span class="token punctuation">}</span>+<span class="token function selector">\dots</span>+a_<span class="token punctuation">{</span>n<span class="token punctuation">}</span>x_<span class="token punctuation">{</span>1<span class="token punctuation">}</span>^<span class="token punctuation">{</span>n<span class="token punctuation">}</span>=y_<span class="token punctuation">{</span>1<span class="token punctuation">}</span><span class="token function selector">\\</span>
    <span class="token function selector">\cdots</span><span class="token function selector">\\</span>
    a_<span class="token punctuation">{</span>0<span class="token punctuation">}</span>+a<span class="token punctuation">{</span>1<span class="token punctuation">}</span>x_<span class="token punctuation">{</span>n<span class="token punctuation">}</span>+<span class="token function selector">\dots</span>+a_<span class="token punctuation">{</span>n<span class="token punctuation">}</span>x_<span class="token punctuation">{</span>n<span class="token punctuation">}</span>^<span class="token punctuation">{</span>n<span class="token punctuation">}</span>=y_<span class="token punctuation">{</span>n<span class="token punctuation">}</span><span class="token function selector">\\</span>
<span class="token function selector">\end</span><span class="token punctuation">{</span><span class="token keyword">cases</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>$$
\begin{cases}
a_{0}+a{1}x_{0}+\dots+a_{n}x_{0}^{n}=y_{0}\
a_{0}+a{1}x_{1}+\dots+a_{n}x_{1}^{n}=y_{1}\
\cdots\
a_{0}+a{1}x_{n}+\dots+a_{n}x_{n}^{n}=y_{n}\
\end{cases}
$$</p>
<h2 id="_11、等式" tabindex="-1"><a class="header-anchor" href="#_11、等式" aria-hidden="true">#</a> 11、等式</h2>
<div class="language-latex line-numbers-mode" data-ext="latex"><pre v-pre class="language-latex"><code><span class="token comment">% 使用 \&amp; 使 = 左对齐</span>

<span class="token function selector">\begin</span><span class="token punctuation">{</span><span class="token keyword">aligned</span><span class="token punctuation">}</span>
    (f,K^<span class="token punctuation">{</span>'<span class="token punctuation">}</span>_<span class="token punctuation">{</span>x<span class="token punctuation">}</span>y+K^<span class="token punctuation">{</span>''<span class="token punctuation">}</span>_<span class="token punctuation">{</span>x<span class="token punctuation">}</span>y)_<span class="token punctuation">{</span>F<span class="token punctuation">}</span>
    <span class="token punctuation">&amp;</span>=(f^<span class="token punctuation">{</span>'<span class="token punctuation">}</span>+f^<span class="token punctuation">{</span>''<span class="token punctuation">}</span>,K^<span class="token punctuation">{</span>'<span class="token punctuation">}</span>_<span class="token punctuation">{</span>x<span class="token punctuation">}</span>y+K^<span class="token punctuation">{</span>''<span class="token punctuation">}</span>_<span class="token punctuation">{</span>x<span class="token punctuation">}</span>y)_<span class="token punctuation">{</span>F<span class="token punctuation">}</span><span class="token function selector">\\</span>
    <span class="token punctuation">&amp;</span>=(f^<span class="token punctuation">{</span>'<span class="token punctuation">}</span>,K^<span class="token punctuation">{</span>'<span class="token punctuation">}</span>_<span class="token punctuation">{</span>x<span class="token punctuation">}</span>y)_<span class="token punctuation">{</span>F<span class="token punctuation">}</span>+(f^<span class="token punctuation">{</span>''<span class="token punctuation">}</span>,K^<span class="token punctuation">{</span>''<span class="token punctuation">}</span>_<span class="token punctuation">{</span>x<span class="token punctuation">}</span>y)_<span class="token punctuation">{</span>F<span class="token punctuation">}</span>+(f^<span class="token punctuation">{</span>'<span class="token punctuation">}</span>,K^<span class="token punctuation">{</span>''<span class="token punctuation">}</span>_<span class="token punctuation">{</span>x<span class="token punctuation">}</span>y)_<span class="token punctuation">{</span>F<span class="token punctuation">}</span>+(f^<span class="token punctuation">{</span>''<span class="token punctuation">}</span>,K^<span class="token punctuation">{</span>'<span class="token punctuation">}</span>_<span class="token punctuation">{</span>x<span class="token punctuation">}</span>y)<span class="token punctuation">{</span>F<span class="token punctuation">}</span><span class="token function selector">\\</span>
    <span class="token punctuation">&amp;</span>=(f^<span class="token punctuation">{</span>'<span class="token punctuation">}</span>,K^<span class="token punctuation">{</span>'<span class="token punctuation">}</span>_<span class="token punctuation">{</span>x<span class="token punctuation">}</span>y)_<span class="token punctuation">{</span>F<span class="token punctuation">}</span>+(f^<span class="token punctuation">{</span>''<span class="token punctuation">}</span>,K^<span class="token punctuation">{</span>''<span class="token punctuation">}</span>_<span class="token punctuation">{</span>x<span class="token punctuation">}</span>y)_<span class="token punctuation">{</span>F<span class="token punctuation">}</span><span class="token function selector">\\</span>
    <span class="token punctuation">&amp;</span>=(f^<span class="token punctuation">{</span>'<span class="token punctuation">}</span>(x),y)_<span class="token punctuation">{</span>Y<span class="token punctuation">}</span>+(f^<span class="token punctuation">{</span>''<span class="token punctuation">}</span>(x),y)_<span class="token punctuation">{</span>Y<span class="token punctuation">}</span><span class="token function selector">\\</span>
    <span class="token punctuation">&amp;</span>=(f^<span class="token punctuation">{</span>'<span class="token punctuation">}</span>(x)+f^<span class="token punctuation">{</span>''<span class="token punctuation">}</span>(x),y)_<span class="token punctuation">{</span>Y<span class="token punctuation">}</span><span class="token function selector">\\</span>
    <span class="token punctuation">&amp;</span>=(f(x),y)_<span class="token punctuation">{</span>Y<span class="token punctuation">}</span><span class="token function selector">\\</span>
    <span class="token punctuation">&amp;</span>=(f,K_<span class="token punctuation">{</span>x<span class="token punctuation">}</span>y)_<span class="token punctuation">{</span>F<span class="token punctuation">}</span>
<span class="token function selector">\end</span><span class="token punctuation">{</span><span class="token keyword">aligned</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>$$
\begin{aligned}
(f,K^{'}<em>{x}y+K^{''}</em>{x}y)<em>{F}
&amp;=(f^{'}+f^{''},K^{'}</em>{x}y+K^{''}<em>{x}y)</em>{F}\
&amp;=(f^{'},K^{'}<em>{x}y)</em>{F}+(f^{''},K^{''}<em>{x}y)</em>{F}+(f^{'},K^{''}<em>{x}y)</em>{F}+(f^{''},K^{'}<em>{x}y){F}\
&amp;=(f^{'},K^{'}</em>{x}y)<em>{F}+(f^{''},K^{''}</em>{x}y)<em>{F}\
&amp;=(f^{'}(x),y)</em>{Y}+(f^{''}(x),y)<em>{Y}\
&amp;=(f^{'}(x)+f^{''}(x),y)</em>{Y}\
&amp;=(f(x),y)<em>{Y}\
&amp;=(f,K</em>{x}y)_{F}
\end{aligned}
$$</p>
<h2 id="_12、二十四个希腊字母" tabindex="-1"><a class="header-anchor" href="#_12、二十四个希腊字母" aria-hidden="true">#</a> 12、二十四个希腊字母</h2>
<table>
<thead>
<tr>
<th style="text-align:center">序号</th>
<th style="text-align:center">小写</th>
<th style="text-align:center">语法</th>
<th style="text-align:center">大写</th>
<th style="text-align:center">表示</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">$\alpha$</td>
<td style="text-align:center">\alpha</td>
<td style="text-align:center">$\Alpha$</td>
<td style="text-align:center">\Alpha</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:center">$\beta$</td>
<td style="text-align:center">\beta</td>
<td style="text-align:center">$\Beta$</td>
<td style="text-align:center">\Beta</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:center">$\gamma$</td>
<td style="text-align:center">\gamma</td>
<td style="text-align:center">$\Gamma$</td>
<td style="text-align:center">\Gamma</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:center">$\delta$</td>
<td style="text-align:center">\delta</td>
<td style="text-align:center">$\Delta$</td>
<td style="text-align:center">\Delta</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:center">$\epsilon$</td>
<td style="text-align:center">\epsilon</td>
<td style="text-align:center">$\Epsilon$</td>
<td style="text-align:center">\Epsilon</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\varepsilon$</td>
<td style="text-align:center">\varepsilon</td>
<td style="text-align:center"></td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">6</td>
<td style="text-align:center">$\zeta$</td>
<td style="text-align:center">\zeta</td>
<td style="text-align:center">$\Zeta$</td>
<td style="text-align:center">\Zeta</td>
</tr>
<tr>
<td style="text-align:center">7</td>
<td style="text-align:center">$\eta$</td>
<td style="text-align:center">\eta</td>
<td style="text-align:center">$\Eta$</td>
<td style="text-align:center">\Eta</td>
</tr>
<tr>
<td style="text-align:center">8</td>
<td style="text-align:center">$\theta$</td>
<td style="text-align:center">\theta</td>
<td style="text-align:center">$\Theta$</td>
<td style="text-align:center">\Theta</td>
</tr>
<tr>
<td style="text-align:center">9</td>
<td style="text-align:center">$\iota$</td>
<td style="text-align:center">\iota</td>
<td style="text-align:center">$\Iota$</td>
<td style="text-align:center">\Iota</td>
</tr>
<tr>
<td style="text-align:center">10</td>
<td style="text-align:center">$\kappa$</td>
<td style="text-align:center">\kappa</td>
<td style="text-align:center">$\Kappa$</td>
<td style="text-align:center">\Kappa</td>
</tr>
<tr>
<td style="text-align:center">11</td>
<td style="text-align:center">$\lambda$</td>
<td style="text-align:center">\lambda</td>
<td style="text-align:center">$\Lambda$</td>
<td style="text-align:center">\Lambda</td>
</tr>
<tr>
<td style="text-align:center">12</td>
<td style="text-align:center">$\mu$</td>
<td style="text-align:center">\mu</td>
<td style="text-align:center">$\Mu$</td>
<td style="text-align:center">\Mu</td>
</tr>
<tr>
<td style="text-align:center">13</td>
<td style="text-align:center">$\nu$</td>
<td style="text-align:center">\nu</td>
<td style="text-align:center">$\Nu$</td>
<td style="text-align:center">\Nu</td>
</tr>
<tr>
<td style="text-align:center">14</td>
<td style="text-align:center">$\xi$</td>
<td style="text-align:center">\xi</td>
<td style="text-align:center">$\Xi$</td>
<td style="text-align:center">\Xi</td>
</tr>
<tr>
<td style="text-align:center">15</td>
<td style="text-align:center">$\omicron$</td>
<td style="text-align:center">\omicron</td>
<td style="text-align:center">$\Omicron$</td>
<td style="text-align:center">\Omicron</td>
</tr>
<tr>
<td style="text-align:center">16</td>
<td style="text-align:center">$\pi$</td>
<td style="text-align:center">\pi</td>
<td style="text-align:center">$\Pi$</td>
<td style="text-align:center">\Pi</td>
</tr>
<tr>
<td style="text-align:center">17</td>
<td style="text-align:center">$\rho$</td>
<td style="text-align:center">\rho</td>
<td style="text-align:center">$\Rho$</td>
<td style="text-align:center">\Rho</td>
</tr>
<tr>
<td style="text-align:center">18</td>
<td style="text-align:center">$\sigma$</td>
<td style="text-align:center">\sigma</td>
<td style="text-align:center">$\Sigma$</td>
<td style="text-align:center">\Sigma</td>
</tr>
<tr>
<td style="text-align:center">19</td>
<td style="text-align:center">$\tau$</td>
<td style="text-align:center">\tau</td>
<td style="text-align:center">$\Tau$</td>
<td style="text-align:center">\Tau</td>
</tr>
<tr>
<td style="text-align:center">20</td>
<td style="text-align:center">$\upsilon$</td>
<td style="text-align:center">\upsilon</td>
<td style="text-align:center">$\Upsilon$</td>
<td style="text-align:center">\Upsilon</td>
</tr>
<tr>
<td style="text-align:center">21</td>
<td style="text-align:center">$\phi$</td>
<td style="text-align:center">\phi</td>
<td style="text-align:center">$\Phi$</td>
<td style="text-align:center">\Phi</td>
</tr>
<tr>
<td style="text-align:center"></td>
<td style="text-align:center">$\varphi$</td>
<td style="text-align:center">\varphi</td>
<td style="text-align:center"></td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">22</td>
<td style="text-align:center">$\chi$</td>
<td style="text-align:center">\chi</td>
<td style="text-align:center">$\Chi$</td>
<td style="text-align:center">\Chi</td>
</tr>
<tr>
<td style="text-align:center">23</td>
<td style="text-align:center">$\psi$</td>
<td style="text-align:center">\psi</td>
<td style="text-align:center">$\Psi$</td>
<td style="text-align:center">\Psi</td>
</tr>
<tr>
<td style="text-align:center">24</td>
<td style="text-align:center">$\omega$</td>
<td style="text-align:center">\omega</td>
<td style="text-align:center">$\Omega$</td>
<td style="text-align:center">\omega</td>
</tr>
</tbody>
</table>
<h2 id="_13、字体变换" tabindex="-1"><a class="header-anchor" href="#_13、字体变换" aria-hidden="true">#</a> 13、字体变换</h2>
<p>若要对公式的某一部分字体进行字体转换，可以用<code v-pre>{\字体 {需要转换的部分字体}}</code>命令，其中<code v-pre>\字体</code>可以参照下表。</p>
<table>
<thead>
<tr>
<th style="text-align:center">说明</th>
<th style="text-align:center">显示</th>
<th style="text-align:center">语法</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">罗马体</td>
<td style="text-align:center">$\rm{sample}$</td>
<td style="text-align:center">\rm</td>
</tr>
<tr>
<td style="text-align:center">意大利体</td>
<td style="text-align:center">$\it{Sample}$</td>
<td style="text-align:center">\it</td>
</tr>
<tr>
<td style="text-align:center">粗体</td>
<td style="text-align:center">$\bf{Sample}$</td>
<td style="text-align:center">\bf</td>
</tr>
<tr>
<td style="text-align:center">等线体</td>
<td style="text-align:center">$\sf{Sample}$</td>
<td style="text-align:center">\sf</td>
</tr>
<tr>
<td style="text-align:center">打字机体</td>
<td style="text-align:center">$\tt{Sample}$</td>
<td style="text-align:center">\tt</td>
</tr>
<tr>
<td style="text-align:center">旧德式字体</td>
<td style="text-align:center">$\frak{Sample}$</td>
<td style="text-align:center">\frak</td>
</tr>
<tr>
<td style="text-align:center">花体</td>
<td style="text-align:center">$\cal{Sample}$</td>
<td style="text-align:center">\cal</td>
</tr>
<tr>
<td style="text-align:center">黑板粗体</td>
<td style="text-align:center">$\Bbb{Sample}$</td>
<td style="text-align:center">\Bbb</td>
</tr>
<tr>
<td style="text-align:center">数字斜体</td>
<td style="text-align:center">-</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center">手写体</td>
<td style="text-align:center">-</td>
<td style="text-align:center">-</td>
</tr>
</tbody>
</table>
<h2 id="_14、空格" tabindex="-1"><a class="header-anchor" href="#_14、空格" aria-hidden="true">#</a> 14、空格</h2>
<table>
<thead>
<tr>
<th style="text-align:center">显示</th>
<th style="text-align:center">语法</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">$a , b$</td>
<td style="text-align:center">,</td>
</tr>
<tr>
<td style="text-align:center">$a ; b$</td>
<td style="text-align:center">;</td>
</tr>
<tr>
<td style="text-align:center">$a \quad b$</td>
<td style="text-align:center">\quad</td>
</tr>
<tr>
<td style="text-align:center">$a \qquad b$</td>
<td style="text-align:center">\qquad</td>
</tr>
</tbody>
</table>
<h2 id="_15、注释文字" tabindex="-1"><a class="header-anchor" href="#_15、注释文字" aria-hidden="true">#</a> 15、注释文字</h2>
<div class="language-latex line-numbers-mode" data-ext="latex"><pre v-pre class="language-latex"><code>f(n)= <span class="token function selector">\begin</span><span class="token punctuation">{</span><span class="token keyword">cases</span><span class="token punctuation">}</span>
n/2, <span class="token punctuation">&amp;</span> <span class="token function selector">\text</span> <span class="token punctuation">{</span>if <span class="token equation string">$n$</span> is even<span class="token punctuation">}</span> <span class="token function selector">\\</span>
3n+1, <span class="token punctuation">&amp;</span> <span class="token function selector">\text</span><span class="token punctuation">{</span>if <span class="token equation string">$n$</span> is odd<span class="token punctuation">}</span>
<span class="token function selector">\end</span><span class="token punctuation">{</span><span class="token keyword">cases</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>$$
f(n)=\begin{cases}
n/2, &amp; \text {if $n$ is even} \
3n+1, &amp; \text{if $n$ is odd}
\end{cases}
$$</p>
<h2 id="_16、更改文字颜色" tabindex="-1"><a class="header-anchor" href="#_16、更改文字颜色" aria-hidden="true">#</a> 16、更改文字颜色</h2>
<p>使用<code v-pre>\color{颜色}{文字}</code>来更改特定的文字颜色</p>
<table>
<thead>
<tr>
<th style="text-align:center">显示</th>
<th style="text-align:center">语法</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">$\color{black}{text}$</td>
<td style="text-align:center">black</td>
</tr>
<tr>
<td style="text-align:center">$\color{grey}{text}$</td>
<td style="text-align:center">grey</td>
</tr>
<tr>
<td style="text-align:center">$\color{silver}{text}$</td>
<td style="text-align:center">silver</td>
</tr>
<tr>
<td style="text-align:center">$\color{white}{text}$</td>
<td style="text-align:center">white</td>
</tr>
<tr>
<td style="text-align:center">$\color{maroon}{text}$</td>
<td style="text-align:center">maroon</td>
</tr>
<tr>
<td style="text-align:center">$\color{red}{text}$</td>
<td style="text-align:center">red</td>
</tr>
<tr>
<td style="text-align:center">$\color{yellow}{text}$</td>
<td style="text-align:center">yellow</td>
</tr>
<tr>
<td style="text-align:center">$\color{lime}{text}$</td>
<td style="text-align:center">lime</td>
</tr>
<tr>
<td style="text-align:center">$\color{olive}{text}$</td>
<td style="text-align:center">olive</td>
</tr>
<tr>
<td style="text-align:center">$\color{green}{text}$</td>
<td style="text-align:center">green</td>
</tr>
<tr>
<td style="text-align:center">$\color{teal}{text}$</td>
<td style="text-align:center">teal</td>
</tr>
<tr>
<td style="text-align:center">$\color{auqa}{text}$</td>
<td style="text-align:center">auqa</td>
</tr>
<tr>
<td style="text-align:center">$\color{blue}{text}$</td>
<td style="text-align:center">blue</td>
</tr>
<tr>
<td style="text-align:center">$\color{navy}{text}$</td>
<td style="text-align:center">navy</td>
</tr>
<tr>
<td style="text-align:center">$\color{purple}{text}$</td>
<td style="text-align:center">purple</td>
</tr>
<tr>
<td style="text-align:center">$\color{fuchsia}{text}$</td>
<td style="text-align:center">fuchsia</td>
</tr>
</tbody>
</table>
<p>输入<code v-pre>\color{#rbg}{text}</code>来自定义更多的颜色，其中<code v-pre>#rgb</code>的<code v-pre>r g b</code>可输入<code v-pre>0-9 a-f</code>来表示红色、绿色和蓝色的纯度（饱和度）。</p>
</div></template>


