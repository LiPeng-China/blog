Markdown Math

## 前言

- 行内公式$公式$

- 行间公\$$公式\$$

## 1、上下标

| 数学符号       | 实际效果              | 语法              |
|:----------:|:-----------------:|:---------------:|
| 向量         | $\vec{a}$         | \vec{a}         |
| 平均值        | $\overline{a}$    | \overline{a}    |
| 估计值        | $\widehat{a}$     | \widehat{a}     |
| 颚化符号 等价无穷小 | $\widetilde{a}$   | \widetilde{a}   |
| 一阶导数       | $\dot{a}$         | \dot{a}         |
| 二阶导数       | \ddot{a}          | \ddot{a}        |
|            | \check{a}         | \check{a}       |
|            | $\breve{a}$       | \breve{a}       |
|            | $\acute{a}$       | \grave{a}       |
|            | $\acute{a}$       | \acute{a}       |
|            | $\stackrel{x}{y}$ | \stackrel{x}{y} |
|            | $\overset{x}{y}$  | \overset{x}{y}  |
|            | $\underset{x}{y}$ | \underset{x}{y} |
| 上标         | $x^y$             | x^y             |
| 下标         | $x_y$             | x_y             |

## 2、分式

| 实际效果          | 语法          |
|:-------------:|:-----------:|
| 1/2           | 1/2         |
| $\frac{1}{2}$ | \frac{1}{2} |

## 3、省略号

| 实际效果     | 语法     |
|:--------:|:------:|
| $\cdots$ | \cdots |

## 4、开根号

| 实际效果       | 语法       |
|:----------:|:--------:|
| $\sqrt{2}$ | \sqrt{2} |

## 5、复杂数学符号

| 数学符号     | 实际效果                                                       | 语法                                                       |
|:--------:|:----------------------------------------------------------:|:--------------------------------------------------------:|
| 1. 求和    | $y=\sum_{i=1}^{n}{x_i}$                                    | y=\sum_{i=1}^{n}{x_i}                                    |
|          | $y=\sum^{x \to \infty}_{y \to 0}{\frac{x}{y}}$             | y=\sum^{x \to \infty}_{y \to 0}{\frac{x}{y}}             |
| 2. 极限    | $\lim^{x \to \infty}_{y \to 0}{\frac{x}{y}}$               | \lim^{x \to \infty}_{y \to 0}{\frac{x}{y}}               |
|          | $\displaystyle \lim^{x \to \infty}_{y \to 0}{\frac{x}{y}}$ | \displaystyle \lim^{x \to \infty}_{y \to 0}{\frac{x}{y}} |
| 3. 开方    | $\sqrt x$                                                  | \sqrt x                                                  |
|          | $\sqrt[3]{x+y}$                                            | \sqrt[3]{x+y}                                            |
| 4. 微积分   | $\int^{\infty}_{0}{xdx}$                                   | \int^{\infty}_{0}{xdx}                                   |
|          | $\iint$                                                    | \iint                                                    |
|          | $\iiint$                                                   | \iiint                                                   |
|          | $\oint$                                                    | \oint                                                    |
|          | $\dfrac{\partial f}{\partial x}$                           | \dfrac{\partial f}{\partial x}                           |
|          | $\frac{\partial x^2}{\partial y^2}$                        | \frac{\partial x^2}{\partial y^2}                        |
|          | $\frac{\partial f(x,y)}{\partial x} \vert_{x=0}$           | \frac{\partial f(x,y)}{\partial x} \vert_{x=0}           |
|          | $y{\prime}x$                                               | y{\prime}x                                               |
|          | $\nabla$                                                   | \nabla                                                   |
|          | $\infty$                                                   | \infty                                                   |
| 5. 向量    | $\vec x$                                                   | \vec x                                                   |
| 6. 矢量    | $\overline{xyz}$                                           | \overline{xyz}                                           |
|          | $\overline{x\overline{yz}}$                                | \overline{x\overline{yz}}                                |
|          | $\underline{xyz}$                                          | \underline{xyz}                                          |
| 7. 累乘    | $\prod_{n=1}^{99}{x_n}$                                    | \prod_{n=1}^{99}{x_n}                                    |
|          | $\displaystyle \prod_{n=1}^{99}{x_n}$                      | \displaystyle \prod_{n=1}^{99}{x_n}                      |
| 8. 箭头    | $a\leftarrow b$                                            | a\leftarrow b                                            |
|          | $a\longleftarrow b$                                        | a\longleftarrow b                                        |
|          | $b \rightarrow c$                                          | a \rightarrow b                                          |
|          | $a \longrightarrow b$                                      | a \longrightarrow b                                      |
|          | $a \leftrightarrow b$                                      | a \leftrightarrow b                                      |
|          | $a \longleftrightarrow b$                                  | a \longleftrightarrow b                                  |
|          | $a \Leftrightarrow b$                                      | a \Leftrightarrow b                                      |
|          | $a \rightleftharpoons b$                                   | a \rightleftharpoons b                                   |
|          | $a \nearrow b$                                             | a \nearrow b                                             |
|          | $a \searrow b$                                             | a \searrow b                                             |
|          | $a \nwarrow b$                                             | a \nwarrow b                                             |
|          | $a \rightharpoonup b$                                      | a \rightharpoonup b                                      |
|          | $a \rightharpoondown b$                                    | a \rightharpoondown b                                    |
|          | $a \leftharpoonup b$                                       | a \leftharpoonup b                                       |
|          | $a \leftharpoondown b$                                     | a \leftharpoondown b                                     |
| 9. 逻辑运算符 | $\forall a$                                                | \forall a                                                |
|          | $\exists a$                                                | \exists a                                                |
|          | $\lnot a$                                                  | \lnot a                                                  |
|          | $\bigvee a$                                                | \bigvee a                                                |
|          | $\bigwedge a$                                              | \bigwedge a                                              |
|          | $\because a$                                               | \because a                                               |
|          | $\therefore a$                                             | \therefore a                                             |
| 10. 集合符号 | $X \cup Y$                                                 | X \cup Y                                                 |
|          | $X \bigcup Y$                                              | X \bigcup Y                                              |
|          | $X \cap Y$                                                 | X \cap Y                                                 |
|          | $X \bigcap Y$                                              | X \bigcap Y                                              |
|          | $X \subset Y$                                              | X \subset Y                                              |
|          | $X \not \subset Y$                                         | X \not \subset Y                                         |
|          | $X \subseteq Y$                                            | X \subseteq Y                                            |
|          | $X \not \subseteq Y$                                       | X \not \subseteq Y                                       |
|          | $a \in A$                                                  | a \in A                                                  |
|          | $a \notin A$                                               | a \notin A                                               |
|          | $\emptyset$                                                | \emptyset                                                |
|          | $\varnothing$                                              | \varnothing                                              |
| 11. 取整   | $\lceil \frac{x}{2} \rceil$                                | \lceil \frac{x}{2} \rceil                                |
|          | $\lfloor x \rfloor$                                        | \lfloor x \rfloor                                        |
| 12. 括号   | $\tbinom{n}{k}$                                            | \tbinom{n}{k}                                            |
|          | ${n \brace k}$                                             | {n \brace k}                                             |
|          | ${n \choose k}$                                            | {n \\choose k}                                           |
|          | ${n \brack k}$                                             | {n \brack k}                                             |
|          | $\overbrace{1+2+\cdots+100}$                               | \overbrace{1+2+\cdots+100}                               |
|          | $\underbrace{1+2+\cdots+100}$                              | \underbrace{1+2+\cdots+100}                              |
|          | $5050 \overbrace{1+2+\cdots+100}$                          | 5050 \overbrace{1+2+\cdots+100}                          |
| 13. 矩阵   | $\begin{matrix} 0 & 1 \\ 3 &4 \\ \end{matrix}$             | \begin{matrix} 0 & 1 \\\ 3 &4 \\\ \end{matrix}           |
|          | $\begin{pmatrix} 0 &1 \\ 3 & 4\\ \end{pmatrix}$            | \begin{pmatrix} 0 &1 \\\ 3 & 4\\\ \end{pmatrix}          |
|          | $\begin{vmatrix} 0 &1 \\ 3 & 4\ \end{vmatrix}$             | \begin{vmatrix} 0 &1 \\\ 3 & 4\\\ \end{vmatrix}          |
|          | $\begin{Vmatrix} 0 &1 \\ 3 & 4\ \end{Vmatrix}$             | \begin{Vmatrix} 0 &1 \\\ 3 & 4\\\ \end{Vmatrix}          |
|          | $\begin{bmatrix} 0 & 1\\ 3 & 4\\ \end{bmatrix}$            | \begin{bmatrix} 0 & 1\\\ 3 & 4\\\ \end{bmatrix}          |
|          | $\begin{Bmatrix} 0 & 1\\ 3 & 4\\ \end{Bmatrix}$            | \begin{Bmatrix} 0 & 1\\\ 3 & 4\\\ \end{Bmatrix}          |

## 6、关系运算符

| 实际效果         | 语法         |
|:------------:|:----------:|
| $\neq$       | \neq       |
| $\leq$       | \leq       |
| $\geq$       | \geq       |
| $\approx$    | \approx    |
| $\not\lt$    | \not\lt    |
| $\gt$        | \gt        |
| $\gg$        | \gg        |
| $\lll$       | \lll       |
| $\pm$        | \pm        |
| $\times$     | \times     |
| $\div$       | \div       |
| $\mid$       | \mid       |
| $\ast$       | \ast       |
| $\angle$     | \angle     |
| $\bot$       | \bot       |
| $\odot$      | \odot      |
| $\bigodot$   | \bigodot   |
| $\otimes$    | \times     |
| $\bigotimes$ | \bigotimes |

## 7、三角函数

| 实际效果            | 语法            |
|:---------------:|:-------------:|
| $\sin30^\circ$  | \sin 30^\circ |
| $\cos 30^\circ$ | \cos 30^\circ |
| $tan30^\circ$   | \tan30^\cirfc |

## 8、对数函数

| 实际效果       | 语法       |
|:----------:|:--------:|
| $\ln2$     | \ln2     |
| $\log_2 8$ | \log_2 8 |
| $lg10$     | \lg 10   |

## 9、矩阵

```latex
% 可将 [] 换成 () 或 || ...
\left[
\begin{array}{ccc|c}
    \psi(x) & g(x) & \cdots & a_{1n} \\
    \hline
    a_{21} & a_{22} & \dots & a_{2n} \\
    \vdots & \vdots & \ddots & \vdots \\
    a_{n1} & a_{n2} & \dots & a_{nn}
\end{array} 
\right]
```

$$
\left[
\begin{array}{ccc|c}
    \psi(x) & g(x) & \cdots & a_{1n} \\
    \hline
    a_{21} & a_{22} & \dots & a_{2n} \\
    \vdots & \vdots & \ddots & \vdots \\
    a_{n1} & a_{n2} & \dots & a_{nn}
\end{array} 
\right]
$$

```latex
\begin{bmatrix}
    1 & x_{0} & \dots & x_{0}^{n} \\
    1 & x_{1} & \dots & x_{1}^{n} \\
    & & \cdots & x_{n}^{n}
\end{bmatrix}
\begin{bmatrix}
    a_{0} \\ a_{1} \\ \vdots \\ a_{n}
\end{bmatrix}=
\begin{bmatrix}
    y_{0} \\ y_{1} \\ \vdots \\ y_{n}
\end{bmatrix}
```

$$
\begin{bmatrix}
    1 & x_{0} & \dots & x_{0}^{n} \\
    1 & x_{1} & \dots & x_{1}^{n} \\
    & & \cdots & x_{n}^{n}
\end{bmatrix}
\begin{bmatrix}
    a_{0} \\ a_{1} \\ \vdots \\ a_{n}
\end{bmatrix}=
\begin{bmatrix}
    y_{0} \\ y_{1} \\ \vdots \\ y_{n}
\end{bmatrix}
$$

## 10、方程式

```latex
\begin{cases}
    a_{0}+a{1}x_{0}+\dots+a_{n}x_{0}^{n}=y_{0}\\
    a_{0}+a{1}x_{1}+\dots+a_{n}x_{1}^{n}=y_{1}\\
    \cdots\\
    a_{0}+a{1}x_{n}+\dots+a_{n}x_{n}^{n}=y_{n}\\
\end{cases}
```

$$
\begin{cases}
    a_{0}+a{1}x_{0}+\dots+a_{n}x_{0}^{n}=y_{0}\\
    a_{0}+a{1}x_{1}+\dots+a_{n}x_{1}^{n}=y_{1}\\
    \cdots\\
    a_{0}+a{1}x_{n}+\dots+a_{n}x_{n}^{n}=y_{n}\\
\end{cases}
$$

## 11、等式

```latex
% 使用 \& 使 = 左对齐

\begin{aligned}
    (f,K^{'}_{x}y+K^{''}_{x}y)_{F}
    &=(f^{'}+f^{''},K^{'}_{x}y+K^{''}_{x}y)_{F}\\
    &=(f^{'},K^{'}_{x}y)_{F}+(f^{''},K^{''}_{x}y)_{F}+(f^{'},K^{''}_{x}y)_{F}+(f^{''},K^{'}_{x}y){F}\\
    &=(f^{'},K^{'}_{x}y)_{F}+(f^{''},K^{''}_{x}y)_{F}\\
    &=(f^{'}(x),y)_{Y}+(f^{''}(x),y)_{Y}\\
    &=(f^{'}(x)+f^{''}(x),y)_{Y}\\
    &=(f(x),y)_{Y}\\
    &=(f,K_{x}y)_{F}
\end{aligned}
```

$$
\begin{aligned}
    (f,K^{'}_{x}y+K^{''}_{x}y)_{F}
    &=(f^{'}+f^{''},K^{'}_{x}y+K^{''}_{x}y)_{F}\\
    &=(f^{'},K^{'}_{x}y)_{F}+(f^{''},K^{''}_{x}y)_{F}+(f^{'},K^{''}_{x}y)_{F}+(f^{''},K^{'}_{x}y){F}\\
    &=(f^{'},K^{'}_{x}y)_{F}+(f^{''},K^{''}_{x}y)_{F}\\
    &=(f^{'}(x),y)_{Y}+(f^{''}(x),y)_{Y}\\
    &=(f^{'}(x)+f^{''}(x),y)_{Y}\\
    &=(f(x),y)_{Y}\\
    &=(f,K_{x}y)_{F}
\end{aligned}
$$

## 12、二十四个希腊字母

| 序号  | 小写            | 语法          | 大写         | 表示       |
|:---:|:-------------:|:-----------:|:----------:|:--------:|
| 1   | $\alpha$      | \alpha      | $\Alpha$   | \Alpha   |
| 2   | $\beta$       | \beta       | $\Beta$    | \Beta    |
| 3   | $\gamma$      | \gamma      | $\Gamma$   | \Gamma   |
| 4   | $\delta$      | \delta      | $\Delta$   | \Delta   |
| 5   | $\epsilon$    | \epsilon    | $\Epsilon$ | \Epsilon |
|     | $\varepsilon$ | \varepsilon |            |          |
| 6   | $\zeta$       | \zeta       | $\Zeta$    | \Zeta    |
| 7   | $\eta$        | \eta        | $\Eta$     | \Eta     |
| 8   | $\theta$      | \theta      | $\Theta$   | \Theta   |
| 9   | $\iota$       | \iota       | $\Iota$    | \Iota    |
| 10  | $\kappa$      | \kappa      | $\Kappa$   | \Kappa   |
| 11  | $\lambda$     | \lambda     | $\Lambda$  | \Lambda  |
| 12  | $\mu$         | \mu         | $\Mu$      | \Mu      |
| 13  | $\nu$         | \nu         | $\Nu$      | \Nu      |
| 14  | $\xi$         | \xi         | $\Xi$      | \Xi      |
| 15  | $\omicron$    | \omicron    | $\Omicron$ | \Omicron |
| 16  | $\pi$         | \pi         | $\Pi$      | \Pi      |
| 17  | $\rho$        | \rho        | $\Rho$     | \Rho     |
| 18  | $\sigma$      | \sigma      | $\Sigma$   | \Sigma   |
| 19  | $\tau$        | \tau        | $\Tau$     | \Tau     |
| 20  | $\upsilon$    | \upsilon    | $\Upsilon$ | \Upsilon |
| 21  | $\phi$        | \phi        | $\Phi$     | \Phi     |
|     | $\varphi$     | \varphi     |            |          |
| 22  | $\chi$        | \chi        | $\Chi$     | \Chi     |
| 23  | $\psi$        | \psi        | $\Psi$     | \Psi     |
| 24  | $\omega$      | \omega      | $\Omega$   | \omega   |

## 13、字体变换

若要对公式的某一部分字体进行字体转换，可以用`{\字体 {需要转换的部分字体}}`命令，其中`\字体`可以参照下表。

| 说明    | 显示              | 语法    |
|:-----:|:---------------:|:-----:|
| 罗马体   | $\rm{sample}$   | \rm   |
| 意大利体  | $\it{Sample}$   | \it   |
| 粗体    | $\bf{Sample}$   | \bf   |
| 等线体   | $\sf{Sample}$   | \sf   |
| 打字机体  | $\tt{Sample}$   | \tt   |
| 旧德式字体 | $\frak{Sample}$ | \frak |
| 花体    | $\cal{Sample}$  | \cal  |
| 黑板粗体  | $\Bbb{Sample}$  | \Bbb  |
| 数字斜体  | -               | -     |
| 手写体   | -               | -     |

## 14、空格

| 显示           | 语法     |
|:------------:|:------:|
| $a \, b$     | \,     |
| $a \; b$     | \;     |
| $a \quad b$  | \quad  |
| $a \qquad b$ | \qquad |

## 15、注释文字

```latex
f(n)= \begin{cases}
n/2, & \text {if $n$ is even} \\
3n+1, & \text{if $n$ is odd}
\end{cases}
```

$$
f(n)=\begin{cases}
n/2, & \text {if $n$ is even} \\
3n+1, & \text{if $n$ is odd}
\end{cases}
$$

## 16、更改文字颜色

使用`\color{颜色}{文字}`来更改特定的文字颜色

| 显示                      | 语法      |
|:-----------------------:|:-------:|
| $\color{black}{text}$   | black   |
| $\color{grey}{text}$    | grey    |
| $\color{silver}{text}$  | silver  |
| $\color{white}{text}$   | white   |
| $\color{maroon}{text}$  | maroon  |
| $\color{red}{text}$     | red     |
| $\color{yellow}{text}$  | yellow  |
| $\color{lime}{text}$    | lime    |
| $\color{olive}{text}$   | olive   |
| $\color{green}{text}$   | green   |
| $\color{teal}{text}$    | teal    |
| $\color{auqa}{text}$    | auqa    |
| $\color{blue}{text}$    | blue    |
| $\color{navy}{text}$    | navy    |
| $\color{purple}{text}$  | purple  |
| $\color{fuchsia}{text}$ | fuchsia |

输入`\color{#rbg}{text}`来自定义更多的颜色，其中`#rgb`的`r g b`可输入`0-9 a-f`来表示红色、绿色和蓝色的纯度（饱和度）。
