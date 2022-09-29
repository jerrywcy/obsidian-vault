# 2008 AIME II

2008 AIME II Problems/Problem 1

Problem

Let $N = 100^2 + 99^2 - 98^2 - 97^2 + 96^2 + \cdots + 4^2 + 3^2 - 2^2 - 1^2$, where the additions and subtractions alternate in pairs. Find the remainder when $N$ is divided by $1000$.
Solution

Rewriting this sequence with more terms, we have
$\begin{align*} N &= 100^2 + 99^2 - 98^2 - 97^2 + 96^2 + 95^2 - 94^2 - 93^2 + 92^2 + 91^2 + \ldots - 10^2 - 9^2 + 8^2 + 7^2 - 6^2 - 5^2 + 4^2 + 3^2 - 2^2 - 1^2 \mbox{, and reordering, we get}\\ N &= (100^2 - 98^2) + (99^2 - 97^2) + (96^2 - 94^2) + (95^2 - 93^2) + (92^2 - 90^2) + \ldots + (8^2 - 6^2) + (7^2 - 5^2) +(4^2 - 2^2) + (3^2 - 1^2) \mbox{.} \end{align*}$

Factoring this expression yields
$\begin{align*} N &= (100 - 98)(100 + 98) + (99 - 97)(99 + 97) + (96 - 94)(96 + 94) + (95 - 93)(95 + 93) + (92 - 90)(90 + 92) + \ldots + (8 - 6)(8 + 6) + (7 - 5)(7 + 5) + (4 - 2)(4 + 2) + (3 - 1)(3 + 1) \mbox{, leading to}\\ N &= 2(100 + 98) + 2(99 + 97) + 2(96 + 94) + 2(95 + 93) + 2(92 + 90) + \ldots + 2(8 + 6) + 2(7 + 5) + 2(4 + 2) + 2(3 + 1) \mbox{.} \end{align*}$

Next, we get
$\begin{align*} N &= 2(100 + 98 + 99 + 97 + 96 + 94 + 95 + 93 + 92 + 90 + \ldots + 8 + 6 + 7 + 5 + 4 + 2 + 3 + 1 \mbox{, and rearranging terms yields}\\ N &= 2(100 + 99 + 98 + 97 + 96 + \ldots + 5 + 4 + 3 + 2 + 1) \mbox{.} \end{align*}$

Then,
$\begin{align*} N &= 2(\frac{(100)(101)}{2} \mbox{, and simplifying, we get}\\ N &= (100)(101) \mbox{, so}\\ N &= 10100 \mbox{.} \end{align*}$

Dividing $10100$ by $1000$ yields a remainder of $\boxed{100}$.
Solution

Since we want the remainder when $N$ is divided by $1000$, we may ignore the $100^2$ term. Then, applying the difference of squares factorization to consecutive terms,
$\begin{align*} N &= (99-98)(99+98) - (97-96)(97+96) + (95-94)(95 + 94) + \cdots + (3-2)(3+2) - 1 \\ &= \underbrace{197 - 193}_4 + \underbrace{189 - 185}_4 + \cdots + \underbrace{5 - 1}_4 \\ &= 4 \cdot \left(\frac{197-5}{8}+1\right) = \boxed{100} \end{align*}$


2008 AIME II Problems/Problem 2
Problem

Rudolph bikes at a constant rate and stops for a five-minute break at the end of every mile. Jennifer bikes at a constant rate which is three-quarters the rate that Rudolph bikes, but Jennifer takes a five-minute break at the end of every two miles. Jennifer and Rudolph begin biking at the same time and arrive at the $50$-mile mark at exactly the same time. How many minutes has it taken them?
Solution

Let Rudolf bike at a rate $r$, so Jennifer bikes at the rate $\frac 34r$. Let the time both take be $t$.

Then Rudolf stops $49$ times (because the rest after he reaches the finish does not count), losing a total of $49 \cdot 5 = 245$ minutes, while Jennifer stops $24$ times, losing a total of $24 \cdot 5 = 120$ minutes. The time Rudolf and Jennifer actually take biking is then $t - 245,\, t-120$ respectively.

Using the formula $r = \frac dt$, since both Jennifer and Rudolf bike $50$ miles,
$\begin{align}r &= \frac{50}{t-245}\\ \frac{3}{4}r &= \frac{50}{t-120} \end{align}$

Substituting equation $(1)$ into equation $(2)$ and simplifying, we find
$\begin{align*}50 \cdot \frac{3}{4(t-245)} &= 50 \cdot \frac{1}{t-120}\\ \frac{1}{3}t &= \frac{245 \cdot 4}{3} - 120\\ t &= \boxed{620}\ \text{minutes} \end{align*}$


2008 AIME II Problems/Problem 3

Problem

A block of cheese in the shape of a rectangular solid measures $10$ cm by $13$ cm by $14$ cm. Ten slices are cut from the cheese. Each slice has a width of $1$ cm and is cut parallel to one face of the cheese. The individual slices are not necessarily parallel to each other. What is the maximum possible volume in cubic cm of the remaining block of cheese after ten slices have been cut off?
Solution

Let the lengths of the three sides of the rectangular solid after the cutting be $a,b,c$, so that the desired volume is $abc$. Note that each cut reduces one of the dimensions by one, so that after ten cuts, $a+b+c = 10 + 13 + 14 - 10 = 27$. By AM-GM, $\frac{a+b+c}{3} = 9 \ge \sqrt[3]{abc} \Longrightarrow abc \le \boxed{729}$. Equality is achieved when $a=b=c=9$, which is possible if we make one slice perpendicular to the $10$ cm edge, four slices perpendicular to the $13$ cm edge, and five slices perpendicular to the $14$ cm edge.
Solution 2

A more intuitive way to solve it is by seeing that to keep the volume of the rectangular cheese the greatest, we must slice the cheese off to decrease the greatest length of the cheese (this is easy to check). Here are the ten slices:

${10, 13, 14} \rightarrow {10, 13, 13} \rightarrow {10, 12, 13} \rightarrow {10, 12, 12} \rightarrow {10, 11, 12} \rightarrow {10, 11, 11} \rightarrow {10, 10, 11} \rightarrow {10, 10, 10} \rightarrow {9, 10, 10} \rightarrow {9, 9, 10} \rightarrow {9, 9, 9}.$

So the greatest possible volume is thus $9 \times 9 \times 9 = \boxed{729}$


2008 AIME II Problems/Problem 4
Problem

There exist $r$ unique nonnegative integers $n_1 > n_2 > \cdots > n_r$ and $r$ unique integers $a_k$ ($1\le k\le r$) with each $a_k$ either $1$ or $- 1$ such that $a_13^{n_1} + a_23^{n_2} + \cdots + a_r3^{n_r} = 2008.$ Find $n_1 + n_2 + \cdots + n_r$.
Solution

In base $3$, we find that $\overline{2008}_{10} = \overline{2202101}_{3}$. In other words,
$2008 = 2 \cdot 3^{6} + 2 \cdot 3^{5} + 2 \cdot 3^3 + 1 \cdot 3^2 + 1 \cdot 3^0$

In order to rewrite as a sum of perfect powers of $3$, we can use the fact that $2 \cdot 3^k = 3^{k+1} - 3^k$:
$2008 = (3^7 - 3^6) + (3^6-3^5) + (3^4 - 3^3) + 3^2 + 3^0 = 3^7 - 3^5 + 3^4 - 3^3 + 3^2 + 3^0$

The answer is $7+5+4+3+2+0 = \boxed{021}$.


2008 AIME II Problems/Problem 5
Problem 5

In trapezoid $ABCD$ with $\overline{BC}\parallel\overline{AD}$, let $BC = 1000$ and $AD = 2008$. Let $\angle A = 37^\circ$, $\angle D = 53^\circ$, and $M$ and $N$ be the midpoints of $\overline{BC}$ and $\overline{AD}$, respectively. Find the length $MN$.

Solution
Solution 1

Extend $\overline{AB}$ and $\overline{CD}$ to meet at a point $E$. Then $\angle AED = 180 - 53 - 37 = 90^{\circ}$.

<div align=center><img src="http://latex.artofproblemsolving.com/a/d/e/ade36a6d8b6d97f88722facc76700d34501ddae8.png" height="150px" /></div>

As $\angle AED = 90^{\circ}$, note that the midpoint of $\overline{AD}$, $N$, is the center of the circumcircle of $\triangle AED$. We can do the same with the circumcircle about $\triangle BEC$ and $M$ (or we could apply the homothety to find $ME$ in terms of $NE$). It follows that

$NE = ND = \frac {AD}{2} = 1004, \quad ME = MC = \frac {BC}{2} = 500.$

Thus $MN = NE - ME = \boxed{504}$.


For purposes of rigor we will show that $E,M,N$ are collinear. Since $\overline{BC} \parallel \overline{AD}$, then $BC$ and $AD$ are homothetic with respect to point $E$ by a ratio of $\frac{BC}{AD} = \frac{125}{251}$. Since the homothety carries the midpoint of $\overline{BC}$, $M$, to the midpoint of $\overline{AD}$, which is $N$, then $E,M,N$ are collinear.
Solution 2

<div align=center><img src="http://latex.artofproblemsolving.com/e/d/2/ed2323da960926cb22458648f561a6953f91de51.png" height="100px" /></div>

Let $F,G,H$ be the feet of the perpendiculars from $B,C,M$ onto $\overline{AD}$, respectively. Let $x = NH$, so $DG = 1004 - 500 - x = 504 - x$ and $AF = 1004 - (500 - x) = 504 + x$. Also, let $h = BF = CG = HM$.

By AA~, we have that $\triangle AFB \sim \triangle CGD$, and so $\frac{BF}{AF} = \frac {DG}{CG} \Longleftrightarrow \frac{h}{504+x} = \frac{504-x}{h} \Longrightarrow x^2 + h^2 = 504^2.$

By the Pythagorean Theorem on $\triangle MHN$, $MN^{2} = x^2 + h^2 = 504^2,$ so $MN = \boxed{504}$.
Solution 3

If you drop perpendiculars from $B$ and $C$ to $AD$, and call the points where they meet $\overline{AD}$, $E$ and $F$ respectively, then $FD = x$ and $EA = 1008-x$ , and so you can solve an equation in tangents. Since $\angle{A} = 37$ and $\angle{D} = 53$, you can solve the equation [by cross-multiplication]:

$\begin{align*}\tan{37}\times (1008-x) &= \tan{53} \times x\\ \frac{(1008-x)}{x} &= \frac{\tan{53}}{\tan{37}} = \frac{\sin{53}}{\cos{53}} \times\frac{\sin{37}}{\cos{37}}\end{align*}$

However, we know that $\cos{90-x} = \sin{x}$ and $\sin{90-x} = \cos{x}$ are co-functions. Applying this,

$\begin{align*}\frac{(1008-x)}{x} &= \frac{\sin^2{53}}{\cos^2{53}} \\ x\sin^2{53} &= 1008\cos^2{53} - x\cos^2{53}\\ x(\sin^2{53} + \cos^2{53}) &= 1008\cos^2{53}\\ x = 1008\cos^2{53} &\Longrightarrow 1008-x = 1008\sin^2{53} \end{align*}$ 

Now, if we can find $1004 - (EA + 500)$, and the height of the trapezoid, we can create a right triangle and use the Pythagorean Theorem to find $MN$.

The leg of the right triangle along the horizontal is:

$1004 - 1008\sin^2{53} - 500 = 504 - 1008\sin^2{53}.$

Now to find the other leg of the right triangle (also the height of the trapezoid), we can simplify the following expression:

$\begin{align*}\tan{37} \times 1008 \sin^2{53} = \tan{37} \times 1008 \cos^2{37} = 1008\cos{37}\sin{37} = 504\sin74\end{align*}$

Now we used Pythagorean Theorem and get that $MN$ is equal to:

$\begin{align*}&\sqrt{(1008\sin^2{53} + 500 -1004)^2 + (504\sin{74})^2} = 504\sqrt{1-2\sin^2{53} + \sin^2{74}} \end{align*}$

However, $1-2\sin^2{53} = \cos^2{106}$ and $\sin^2{74} = \sin^2{106}$ so now we end up with:

$504\sqrt{\cos^2{106} + \sin^2{106}} =\fbox{504}.$
Solution 4

Plot the trapezoid such that $B=\left(1000\cos 37^\circ, 0\right)$, $C=\left(0, 1000\sin 37^\circ\right)$, $A=\left(2008\cos 37^\circ, 0\right)$, and $D=\left(0, 2008\sin 37^\circ\right)$.

The midpoints of the requested sides are $\left(500\cos 37^\circ, 500\sin 37^\circ\right)$ and $\left(1004\cos 37^\circ, 1004\sin 37^\circ\right)$.

To find the distance from $M$ to $N$, we simply apply the distance formula and the Pythagorean identity $\sin^2 x + \cos^2 x = 1$ to get $MN=\boxed{504}$.


Solution 5

Similar to solution 1; Notice that it forms a right triangle. Remembering that the median to the hypotenuse is simply half the length of the hypotenuse, we quickly see that the length is 2008/2-1000/2=504.
Solution 6

Obviously, these angles are random--the only special thing about them is that they add up to 90. So we might as well let the given angles equal 45 and 45, and now the answer is trivially $\boxed{504}$. (The trapezoid is isosceles, and you see two 45-45-90 triangles;from there you can get the answer.)


2008 AIME II Problems/Problem 6
Problem

The sequence $\{a_n\}$ is defined by $a_0 = 1,a_1 = 1, \text{ and } a_n = a_{n - 1} + \frac {a_{n - 1}^2}{a_{n - 2}}\text{ for }n\ge2.$ The sequence $\{b_n\}$ is defined by $b_0 = 1,b_1 = 3, \text{ and } b_n = b_{n - 1} + \frac {b_{n - 1}^2}{b_{n - 2}}\text{ for }n\ge2.$ Find $\frac {b_{32}}{a_{32}}$.
Solution

Rearranging the definitions, we have $\frac{a_n}{a_{n-1}} = \frac{a_{n-1}}{a_{n-2}} + 1,\quad \frac{b_n}{b_{n-1}} = \frac{b_{n-1}}{b_{n-2}} + 1$ from which it follows that $\frac{a_n}{a_{n-1}} = 1+ \frac{a_{n-1}}{a_{n-2}} = \cdots = (n-1) + \frac{a_{1}}{a_0} = n$ and $\frac{b_n}{b_{n-1}} = (n-1) + \frac{b_{1}}{b_0} = n+2$. These recursions, $a_{n} = na_{n-1}$ and $b_{n} = (n+2)b_{n-1}$, respectively, correspond to the explicit functions $a_n = n!$ and $b_n = \frac{(n+2)!}{2}$ (after applying our initial conditions). It follows that $\frac{b_{32}}{a_{32}} = \frac{\frac{34!}{2}}{32!} = \frac{34 \cdot 33}{2} = \boxed{561}$.

From this, we can determine that the sequence $\frac {b_n}{a_n}$ corresponds to the triangular numbers.


2008 AIME II Problems/Problem 7
Problem

Let $r$, $s$, and $t$ be the three roots of the equation $8x^3 + 1001x + 2008 = 0.$ Find $(r + s)^3 + (s + t)^3 + (t + r)^3$.

Solution
Solution 1

By Vieta's formulas, we have $r+s+t = 0$, and so the desired answer is $(r+s)^3 + (s+t)^3 + (t+r)^3 = (0-t)^3 + (0-r)^3 + (0-s)^3 = -(r^3 + s^3 + t^3)$. Additionally, using the factorization $r^3 + s^3 + t^3 - 3rst = (r+s+t)(r^2 + s^2 + t^2 - rs - st - tr) = 0$ we have that $r^3 + s^3 + t^3 = 3rst$. By Vieta's again, $rst = \frac{-2008}8 = -251 \Longrightarrow -(r^3 + s^3 + t^3) = -3rst = \boxed{753}.$
Solution 2

Vieta's formulas gives $r + s + t = 0$. Since $r$ is a root of the polynomial, $8r^3 + 1001r + 2008 = 0\Longleftrightarrow - 8r^3 = 1001r + 2008$, and the same can be done with $s,\ t$. Therefore, we have $\begin{align*}8\{(r + s)^3 + (s + t)^3 + (t + r)^3\} &= - 8(r^3 + s^3 + t^3)\\ &= 1001(r + s + t) + 2008\cdot 3 = 3\cdot 2008\end{align*}$yielding the answer $753$.

Also, Newton's Sums yields an answer through the application. http://www.artofproblemsolving.com/Wiki/index.php/Newton's_Sums
Solution 3

Expanding, you get: 

$r^3 + 3r^2s + 3s^2r +s^3 +$ $s^3 + 3s^2t + 3t^2s +t^3 +$ $r^3 + 3r^2t + 3t^2r +t^3$ $= 2r^3 + 2s^3 + 2t^3 + 3r^2s + 3s^2r + 3s^2t + 3t^2s + 3r^2t + 3t^2r$ 

This looks similar to 

$(r+s+t)^3 = r^3 + s^3 + t^3 + 3r^2s + 3s^2r + 3s^2t + 3t^2s + 3r^2t + 3t^2r + rst$ 

Substituting: 

$(r+s+t)^3 - 6rst + r^3+s^3+t^3 = (r + s)^3 + (s + t)^3 + (t + r)^3$ 

Since $r+s+t = 0$, $(r+s)^3 + (s+t)^3 + (t+r)^3 = (0-t)^3 + (0-r)^3 + (0-s)^3 = -(r^3 + s^3 + t^3)$ 

Substituting, we get

$(r+s+t)^3 - 6rst + r^3+s^3+t^3 = -(r^3 + s^3 + t^3)$ 

or, 

$0^3 - 6rst + r^3+s^3+t^3 = -(r^3 + s^3 + t^3) \implies 2(r^3 + s^3 + t^3) = 6rst$ 

We are trying to find 

$-(r^3 + s^3 + t^3)$. 

Substituting: 

$-(r^3 + s^3 + t^3) = -3srt = \frac{-2008*3}{8} = \boxed{753}$.


2008 AIME II Problems/Problem 8

Problem

Let $a = \pi/2008$. Find the smallest positive integer $n$ such that $2[\cos(a)\sin(a) + \cos(4a)\sin(2a) + \cos(9a)\sin(3a) + \cdots + \cos(n^2a)\sin(na)]$ is an integer.
Solution
Solution 1

By the product-to-sum identities, we have that $2\cos a \sin b = \sin (a+b) - \sin (a-b)$. Therefore, this reduces to a telescoping series: $\begin{align*} \sum_{k=1}^{n} 2\cos(k^2a)\sin(ka) &= \sum_{k=1}^{n} [\sin(k(k+1)a) - \sin((k-1)ka)]\\ &= -\sin(0) + \sin(2a)- \sin(2a) + \sin(6a) - \cdots - \sin((n-1)na) + \sin(n(n+1)a)\\ &= -\sin(0) + \sin(n(n+1)a) = \sin(n(n+1)a) \end{align*}$

Thus, we need $\sin \left(\frac{n(n+1)\pi}{2008}\right)$ to be an integer; this can be only $\{-1,0,1\}$, which occur when $2 \cdot \frac{n(n+1)}{2008}$ is an integer. Thus $1004 = 2^2 \cdot 251 | n(n+1) \Longrightarrow 251 | n, n+1$. It easily follows that $n = \boxed{251}$ is the smallest such integer.
Solution 2

We proceed with complex trigonometry. We know that for all $\theta$, we have $\cos \theta = \frac{1}{2} \left( z + \frac{1}{z} \right)$ and $\sin \theta = \frac{1}{2i} \left( z - \frac{1}{z} \right)$ for some complex number $z$. Similarly, we have $\cos n \theta = \frac{1}{2} \left( z^n + \frac{1}{z^n} \right)$ and $\sin n \theta = \frac{1}{2i} \left(z^n - \frac{1}{z^n} \right)$. Thus, we have $\cos n^2 a \sin n a = \frac{1}{4i} \left( z^{n^2} + \frac{1}{z^{n^2}} \right) \left( z^{n} - \frac{1}{z^n} \right)$

$= \frac{1}{4i} \left( z^{n^2 + n} - \frac{1}{z^{n^2 + n}} - z^{n^2 - n} + \frac{1}{z^{n^2 - n}} \right)$

$= \frac{1}{2} \left( \frac{1}{2i} \left(z^{n^2 + n} - \frac{1}{z^{n^2 + n}} \right) - \frac{1}{2i} \left(z^{n^2 - n} - \frac{1}{z^{n^2 - n}} \right) \right)$

$= \frac{1}{2} \left( \sin ((n^2 + n)a) - \sin ((n^2 - n)a) \right)$

$= \frac{1}{2} \left( \sin(((n+1)^2 - (n+1))a) - \sin((n^2 - n)a) \right)$

which clearly telescopes! Since the $2$ outside the brackets cancels with the $\frac{1}{2}$ inside, we see that the sum up to $n$ terms is

$\sin ((2^2 - 2)a) - \sin ((1^2 - 1)a) + \sin ((3^3 - 3)a) - \sin ((2^2 - 2)a) \cdots + \sin (((n+1)^2 - (n+1))a) - \sin ((n^2 - n)a)$

$= \sin (((n+1)^2 - (n+1))a) - \sin(0)$

$= \sin ((n^2 + n)a) - 0$

$= \sin \left( \frac{n(n+1) \pi}{2008} \right)$.

This expression takes on an integer value iff $\frac{2n(n+1)}{2008} = \frac{n(n+1)}{1004}$ is an integer; that is, $1004 \mid n(n+1)$. Clearly, $1004 = 2^2 \cdot 251$, implying that $251 \mid n(n+1)$. Since we want the smallest possible value of $n$, we see that we must have ${n,n+1} = 251$. If $n+1 = 251 \rightarrow n=250$, then we have $n(n+1) = 250(251)$, which is clearly not divisible by $1004$. However, if $n = 251$, then $1004 \mid n(n+1)$, so our answer is $\boxed{251}$.

It should be noted that the product-to-sum rules follow directly from complex trigonometry, so this solution is essentially equivalent to the solution above.


2008 AIME II Problems/Problem 9
Problem

A particle is located on the coordinate plane at $(5,0)$. Define a move for the particle as a counterclockwise rotation of $\pi/4$ radians about the origin followed by a translation of $10$ units in the positive $x$-direction. Given that the particle's position after $150$ moves is $(p,q)$, find the greatest integer less than or equal to $|p| + |q|$.

Solution
Solution 1

Let P(x, y) be the position of the particle on the xy-plane, r be the length OP where O is the origin, and $\theta$ be the inclination of OP to the x-axis. If (x', y') is the position of the particle after a move from P, then $x'=rcos(\pi/4+\theta)+10 = \sqrt{2}(x - y)/2 + 10$ and $y' = rsin(\pi/4+\theta) = \sqrt{2}(x + y)/2$. Let $(x_n, y_n)$ be the position of the particle after the nth move, where $x_0 = 5$ and $y_0 = 0$. Then $x_{n+1} + y_{n+1} = \sqrt{2}x_n+10$, $x_{n+1} - y_{n+1} = -\sqrt{2}y_n+10$. This implies $x_{n+2} = -y_n + 5\sqrt{2}+ 10$, $y_{n+2}=x_n + 5\sqrt{2}$. Substituting $x_0 = 5$ and $y_0 = 0$, we have $x_8 = 5$ and $y_8 = 0$ again for the first time. Thus, $p = x_{150} = x_6 = -5\sqrt{2}$ and $q = y_{150} = y_6 = 5 + 5\sqrt{2}$. Hence, the final answer is
$5\sqrt {2} + 5(\sqrt {2} + 1) \approx 19.1 \Longrightarrow \boxed{019}$
Solution 2

Let the particle's position be represented by a complex number. Recall that multiplying a number by where a is cis$\left( \theta \right)$. rotates the object in the complex plane by $\theta$ counterclockwise. Therefore, applying the rotation and shifting the coordinates by 10 in the positive x direction in the complex plane results to
$a_{150} = (((5a + 10)a + 10)a + 10 \ldots) = 5a^{150} + 10 a^{149} + 10a^{148}+ \ldots + 10$

where a is cis$\left( \theta \right)$. By De-Moivre's theorem, $\left(cis( \theta \right)^n )$=cis$\left(n \theta \right)$. Therefore,
$10(a^{150} + \ldots + 1) = 10(1 + a + \ldots + a^6) = - 10(a^7) = - 10(\frac{ \sqrt {2} }{2} - \frac{i\sqrt {2}} {2})$

Furthermore, $5a^{150} = - 5i$. Thus, the final answer is
$5\sqrt {2} + 5(\sqrt {2} + 1) \approx 19.1 \Longrightarrow \boxed{019}$


2008 AIME II Problems/Problem 10
Problem

The diagram below shows a $4\times4$ rectangular array of points, each of which is $1$ unit away from its nearest neighbors.

<div align=center><img src="http://latex.artofproblemsolving.com/1/6/e/16ed1460ee16eabb872eb9645928df7b6cf2f60a.png" height="100px" /></div>

Define a growing path to be a sequence of distinct points of the array with the property that the distance between consecutive points of the sequence is strictly increasing. Let $m$ be the maximum possible number of points in a growing path, and let $r$ be the number of growing paths consisting of exactly $m$ points. Find $mr$.
Solution

We label our points using coordinates $0 \le x,y \le 3$, with the bottom-left point being $(0,0)$. By the Pythagorean Theorem, the distance between two points is $\sqrt{d_x^2 + d_y^2}$ where $0 \le d_x, d_y \le 3$; these yield the possible distances (in decreasing order) $\sqrt{18},\ \sqrt{13},\ \sqrt{10},\ \sqrt{9},\ \sqrt{8},\ \sqrt{5},\ \sqrt{4},\ \sqrt{2},\ \sqrt{1}$ As these define $9$ lengths, so the maximum value of $m$ is $10$. For now, we assume that $m = 10$ is achievable. Because it is difficult to immediately impose restrictions on a path with increasing distances, we consider the paths in shrinking fashion. Note that the shrinking paths and growing paths are equivalent, but there are restrictions upon the locations of the first edges of the former.

The $\sqrt{18}$ length is only possible for one of the long diagonals, so our path must start with one of the $4$ corners of the grid. Without loss of generality (since the grid is rotationally symmetric), we let the vertex be $(0,0)$ and the endpoint be $(3,3)$.

<div align=center><img src="http://latex.artofproblemsolving.com/8/4/d/84d66c8aac3a7b9040fc5e7cb4a8909ff5f842d4.png" height="150px" /></div>

The $\sqrt{13}$ length can now only go to $2$ points; due to reflectional symmetry about the main diagonal, we may WLOG let the next endpoint be $(1,0)$.

<div align=center><img src="http://latex.artofproblemsolving.com/2/2/2/222bf6137ea3e0b898c86209fd3270e8c1c75485.png" height="150px" /></div>

From $(1,0)$, there are two possible ways to move $\sqrt{10}$ away, either to $(0,3)$ or $(2,3)$. However, from $(0,3)$, there is no way to move $\sqrt{9}$ away, so we discard it as a possibility.

From $(2,3)$, the lengths of $\sqrt{8},\ \sqrt{5},\ \sqrt{4},\ \sqrt{2}$ fortunately are all determined, with the endpoint sequence being $(2,3)-(2,0)-(0,2)-(2,1)-(0,1)-(1,2)$.

<div align=center><img src="http://latex.artofproblemsolving.com/5/c/9/5c95c64bff26afd80f9850412f00ae4a929a30ee.png" height="150px" /></div>

From $(1,2)$, there are $3$ possible lengths of $\sqrt{1}$ (to either $(1,1),(2,2),(1,3)$). Thus, the number of paths is $r = 4 \cdot 2 \cdot 3 = 24$, and the answer is $mr = 10 \cdot 24 = \boxed{240}$.


2008 AIME II Problems/Problem 11
Problem

In triangle $ABC$, $AB = AC = 100$, and $BC = 56$. Circle $P$ has radius $16$ and is tangent to $\overline{AC}$ and $\overline{BC}$. Circle $Q$ is externally tangent to $P$ and is tangent to $\overline{AB}$ and $\overline{BC}$. No point of circle $Q$ lies outside of $\triangle ABC$. The radius of circle $Q$ can be expressed in the form $m - n\sqrt {k}$, where $m$, $n$, and $k$ are positive integers and $k$ is the product of distinct primes. Find $m + nk$.
Solution

<div align=center><img src="http://latex.artofproblemsolving.com/3/e/d/3edb3ca51a589034396103f5202cb9018c7289d9.png" height="250px" /></div>

Let $X$ and $Y$ be the feet of the perpendiculars from $P$ and $Q$ to $BC$, respectively. Let the radius of $\odot Q$ be $r$. We know that $PQ = r + 16$. From $Q$ draw segment $\overline{QM} \parallel \overline{BC}$ such that $M$ is on $PX$. Clearly, $QM = XY$ and $PM = 16-r$. Also, we know $QPM$ is a right triangle.

To find $XC$, consider the right triangle $PCX$. Since $\odot P$ is tangent to $\overline{AC},\overline{BC}$, then $PC$ bisects $\angle ACB$. Let $\angle ACB = 2\theta$; then $\angle PCX = \angle QBX = \theta$. Dropping the altitude from $A$ to $BC$, we recognize the $7 - 24 - 25$ right triangle, except scaled by $4$.

So we get that $\tan(2\theta) = 24/7$. From the half-angle identity, we find that $\tan(\theta) = \frac {3}{4}$. Therefore, $XC = \frac {64}{3}$. By similar reasoning in triangle $QBY$, we see that $BY = \frac {4r}{3}$.

We conclude that $XY = 56 - \frac {4r + 64}{3} = \frac {104 - 4r}{3}$.

So our right triangle $QPM$ has sides $r + 16$, $r - 16$, and $\frac {104 - 4r}{3}$.

By the Pythagorean Theorem, simplification, and the quadratic formula, we can get $r = 44 - 6\sqrt {35}$, for a final answer of $\fbox{254}$.


2008 AIME II Problems/Problem 12

Problem

There are two distinguishable flagpoles, and there are $19$ flags, of which $10$ are identical blue flags, and $9$ are identical green flags. Let $N$ be the number of distinguishable arrangements using all of the flags in which each flagpole has at least one flag and no two green flags on either pole are adjacent. Find the remainder when $N$ is divided by $1000$.
Solution
Solution 1

The well known problem of ordering $x$ elements of a string of $y$ elements such that none of the $x$ elements are next to each other has ${y-x+1\choose x}$ solutions. (1)

We generalize for $a$ blues and $b$ greens. Consider a string of $a+b$ elements such that we want to choose the greens such that none of them are next to each other. We would also like to choose a place where we can divide this string into two strings such that the left one represents the first pole, and the right one represents the second pole, in order up the pole according to position on the string.

However, this method does not account for the fact that the first pole could end with a green, and the second pole could start with a green, since the original string assumed that no greens could be consecutive. We solve this problem by introducing an extra blue, such that we choose our divider by choosing one of these $a+1$ blues, and not including that one as a flag on either pole.

From (1), we now have ${a+2\choose b}$ ways to order the string such that no greens are next to each other, and $a+1$ ways to choose the extra blue that will divide the string into the two poles: or $(a+1){a+2\choose b}$ orderings in total.

However, we have overcounted the solutions where either pole has no flags, we have to count these separately. This is the same as choosing our extra blue as one of the two ends, and ordering the other $a$ blues and $b$ greens such that no greens are next to each other: for a total of $2{a+1\choose b}$ such orderings.

Thus, we have $(a+1){a+2\choose b}-2{a+1\choose b}$ orderings that satisfy the conditions in the problem: plugging in $a=10$ and $b=9$, we get $2310 \equiv \boxed{310} \mod{1000}$.
Solution 2

Split the problem into two cases:

Case 1 - Both poles have blue flags: There are 9 ways to place the 10 blue flags on the poles. In each of these configurations, there are 12 spots that a green flag could go. (either in between two blues or at the tops or bottoms of the poles) Then, since there are 9 green flags, all of which must be used, there are ${12\choose9}$ possiblities for each of the 9 ways to place the blue flags. Total: ${12\choose9}*9$ possibilities.

Case 2 - One pole has no blue flags: Since each pole is non empty, the pole without a blue flag must have one green flag. The other pole has 10 blue flags and, by the argument used in case 1, there are ${11\choose8}$ possibilities, and since the poles are distinguishable, there are a total of $2*{11\choose8}$ possiblities for this case.

Finally, we have $9*{12\choose9}+2*{11\choose8}=2310 \equiv \boxed{310} \mod{1000}$ as our answer.


2008 AIME II Problems/Problem 13

Problem

A regular hexagon with center at the origin in the complex plane has opposite pairs of sides one unit apart. One pair of sides is parallel to the imaginary axis. Let $R$ be the region outside the hexagon, and let $S = \left\lbrace\frac{1}{z}|z \in R\right\rbrace$. Then the area of $S$ has the form $a\pi + \sqrt{b}$, where $a$ and $b$ are positive integers. Find $a + b$.
Solution 1

If a point $z = r\text{cis}\,\theta$ is in $R$, then the point $\frac{1}{z} = \frac{1}{r} \text{cis}\, \left(-\theta\right)$ is in $S$ (where cis denotes $\text{cis}\, \theta = \cos \theta + i \sin \theta$). Since $R$ is symmetric every $60^{\circ}$ about the origin, it suffices to consider the area of the result of the transformation when $-30 \le \theta \le 30$, and then to multiply by $6$ to account for the entire area.

We note that if the region $S_2 = \left\lbrace\frac{1}{z}|z \in R_2\right\rbrace$, where $R_2$ is the region (in green below) outside the circle of radius $1/\sqrt{3}$ centered at the origin, then $S_2$ is simply the region inside a circle of radius $\sqrt{3}$ centered at the origin. It now suffices to find what happens to the mapping of the region $R_2 - R$ (in blue below).

The equation of the hexagon side in that region is $x = r \cos \theta = \frac{1}{2}$, which is transformed to $\frac{1}{r} \cos (-\theta) = \frac{1}{r} \cos \theta =$2 . Let $r\cos \theta = a+bi$ where $a,b \in \mathbb{R}$; then $r = \sqrt{a^2 + b^2}, \cos \theta = \frac{a}{\sqrt{a^2 + b^2}}$, so the equation becomes $a^2 - 2a + b^2 = 0 \Longrightarrow (a-1)^2 + b^2 = 1$. Hence the side is sent to an arc of the unit circle centered at $(1,0)$, after considering the restriction that the side of the hexagon is a segment of length $1/\sqrt{3}$.

Including $S_2$, we find that $S$ is the union of six unit circles centered at $\text{cis}\, \frac{k\pi}{6}$, $k = 0,1,2,3,4,5$, as shown below.

<div align=center><img src="http://latex.artofproblemsolving.com/6/5/0/650cd0e32c6f8f20a4db8ef28df8a9a4c79c3a95.png" height="250px" /></div>

$\Longrightarrow$

<div align=center><img src="http://latex.artofproblemsolving.com/8/a/e/8ae9bd9686ac13989d479a26d40bb12d0475fc35.png" height="250px" /></div>

The area of the regular hexagon is $6 \cdot \left( \frac{\left(\sqrt{3}\right)^2 \sqrt{3}}{4} \right) = \frac{9}{2}\sqrt{3}$. The total area of the six $120^{\circ}$ sectors is $6\left(\frac{1}{3}\pi - \frac{1}{2} \cdot \frac{1}{2} \cdot \sqrt{3}\right) = 2\pi - \frac{3}{2}\sqrt{3}$. Their sum is $2\pi + \sqrt{27}$, and $a+b = \boxed{029}$.
Solution 2 (Calculus)

One can describe the line parallel to the imaginary axis $x=\frac{1}{2}$ using polar coordinates as $r(\theta)=\frac{1}{2\cos{\theta}}$

so $z$ is equal to $z=(\frac{1}{2\cos{\theta}})*(cis{\theta} )\rightarrow \frac{1}{z}=2\cos{\theta}*cis(-\theta)$

Dividing the hexagon to 12 equal parts we get that

$Area = 12*\int_{0}^{\frac{\pi}{6}}\frac{1}{2}(2\cos\theta)^2 dr$

which is a routine computation:

$Area = 12*\int_{0}^{\frac{\pi}{6}}2(\cos\theta)^2 dr= 12*\int_{0}^{\frac{\pi}{6}}\cos{2\theta}+1 dr$

$Area = 12*\int_{0}^{\frac{\pi}{6}}2(\cos\theta)^2 dr=12*[\sin{2\theta}+\theta]_0^{\frac{\pi}{6}}=12*(\frac{\sqrt{3}}{4}+\frac{\pi}{6})=2\pi+3\sqrt{3}=2\pi + \sqrt{27}$

$a+b = \boxed{029}$.


2008 AIME II Problems/Problem 14
Problem

Let $a$ and $b$ be positive real numbers with $a\ge b$. Let $\rho$ be the maximum possible value of $\frac {a}{b}$ for which the system of equations $a^2 + y^2 = b^2 + x^2 = (a - x)^2 + (b - y)^2$ has a solution in $(x,y)$ satisfying $0\le x < a$ and $0\le y < b$. Then $\rho^2$ can be expressed as a fraction $\frac {m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m + n$.

Solution
Solution 1

Notice that the given equation implies
$a^2 + y^2 = b^2 + x^2 = 2(ax + by)$

We have $2by \ge y^2$, so $2ax \le a^2 \implies x \le \frac {a}{2}$.

Then, notice $b^2 + x^2 = a^2 + y^2 \ge a^2$, so $b^2 \ge \frac {3}{4}a^2 \implies \rho^2 \le \frac {4}{3}$.

The solution $(a, b, x, y) = \left(1, \frac {\sqrt {3}}{2}, \frac {1}{2}, 0\right)$ satisfies the equation, so $\rho^2 = \frac {4}{3}$, and the answer is $3 + 4 = \boxed{007}$.
Solution 2

Consider the points $(a,y)$ and $(x,b)$. They form an equilateral triangle with the origin. We let the side length be $1$, so $a = \cos{\theta}$ and $b = \sin{\left(\theta + \frac {\pi}{3}\right)}$.

Thus $f(\theta) = \frac {a}{b} = \frac {\cos{\theta}}{\sin{\left(\theta + \frac {\pi}{3}\right)}}$ and we need to maximize this for $0 \le \theta \le \frac {\pi}{6}$.

Taking the derivative shows that $-f'(\theta) = \frac {\cos{\frac {\pi}{3}}}{\sin^2{\left(\theta + \frac {\pi}{3}\right)}} \ge 0$, so the maximum is at the endpoint $\theta = 0$. We then get
$\rho = \frac {\cos{0}}{\sin{\frac {\pi}{3}}} = \frac {2}{\sqrt {3}}$

Then, $\rho^2 = \frac {4}{3}$, and the answer is $3+4=\boxed{007}$.
Solution 3

Consider a cyclic quadrilateral $ABCD$ with $\angle B = \angle D = 90$, and $AB = y, BC = a, CD = b, AD = x$. Then $AC^2 = a^2 + y^2 = b^2 + x^2$ From Ptolemy's Theorem, $ax + by = AC(BD)$, so $AC^2 = (a - x)^2 + (b - y)^2 = a^2 + y^2 + b^2 + x^2 - 2(ax + by) = 2AC^2 - 2AC*BD$ Simplifying, we have $BD = AC/2$.

Note the circumcircle of $ABCD$ has radius $r = AC/2$, so $BD = r$ and has an arc of $60$ degrees, so $\angle C = 30$. Let $\angle BDC = \theta$.

$\frac ab = \frac{BC}{CD} = \frac{\sin \theta}{\sin(150 - \theta)}$, where both $\theta$ and $150 - \theta$ are $\leq 90$ since triangle $BCD$ must be acute. Since $\sin$ is an increasing function over $(0, 90)$, $\frac{\sin \theta}{\sin(150 - \theta)}$ is also increasing function over $(60, 90)$.

$\frac ab$ maximizes at $\theta = 90 \Longrightarrow \frac ab$ maximizes at $\frac 2{\sqrt {3}}$. This squared is $(\frac 2{\sqrt {3}})^2 = \frac4{3}$, and $4 + 3 = \boxed{007}$.


2008 AIME II Problems/Problem 15
Problem

Find the largest integer $n$ satisfying the following conditions:

(i) $n^2$ can be expressed as the difference of two consecutive cubes;
(ii) $2n + 79$ is a perfect square.


Solution
Solution 1

Write $n^2 = (m + 1)^3 - m^3 = 3m^2 + 3m + 1$, or equivalently, $(2n + 1)(2n - 1) = 4n^2 - 1 = 12m^2 + 12m + 3 = 3(2m + 1)^2$.

Since $2n + 1$ and $2n - 1$ are both odd and their difference is $2$, they are relatively prime. But since their product is three times a square, one of them must be a square and the other three times a square. We cannot have $2n - 1$ be three times a square, for then $2n + 1$ would be a square congruent to $2$ modulo $3$, which is impossible.

Thus $2n - 1$ is a square, say $b^2$. But $2n + 79$ is also a square, say $a^2$. Then $(a + b)(a - b) = a^2 - b^2 = 80$. Since $a + b$ and $a - b$ have the same parity and their product is even, they are both even. To maximize $n$, it suffices to maximize $2b = (a + b) - (a - b)$ and check that this yields an integral value for $m$. This occurs when $a + b = 40$ and $a - b = 2$, that is, when $a = 21$ and $b = 19$. This yields $n = 181$ and $m = 104$, so the answer is $\boxed{181}$.
Solution 2

Suppose that the consecutive cubes are $m$ and $m + 1$. We can use completing the square and the first condition to get: $(2n)^2 - 3(2m + 1)^2 = 1\equiv a^2 - 3b^2$ where $a$ and $b$ are non-negative integers. Now this is a Pell equation, with solutions in the form $(2 + \sqrt {3})^k = a_k + \sqrt {3}b_k,$ $k = 0,1,2,3,...$. However, $a$ is even and $b$ is odd. It is easy to see that the parity of $a$ and $b$ switch each time (by induction). Hence all solutions to the first condition are in the form: $(2 + \sqrt {3})^{2k + 1} = a_k + \sqrt {3}b_k$ where $k = 0,1,2,..$. So we can (with very little effort) obtain the following: $(k,a_k = 2n) = (0,2),(1,26),(2,362),(3,5042)$. It is an AIME problem so it is implicit that $n < 1000$, so $2n < 2000$. It is easy to see that $a_n$ is strictly increasing by induction. Checking $2n = 362\implies n = 181$ in the second condition works (we know $b_k$ is odd so we don't need to find $m$). So we're done.


2008 AIME II Answer Key
1.	100
    2.620
    3.729
    4.021
    5.504
    6.561
    7.753
    8.251
    9.019
    10.240
    11.254
    12.310
    13.029
    14.007
    15.181

