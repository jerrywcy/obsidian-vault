# 2000 AIME I

## 2000 AIME I Problem 1

Find the least positive integer $n$ such that no matter how $10^{n}$ is expressed as the product of any two positive integers, at least one of these two integers contains the digit $0$.
Solution

If a factor of $10^{n}$ has a $2$ and a $5$ in its prime factorization, then that factor will end in a $0$. Therefore, we have left to consider the case when the two factors have the $2$s and the $5$s separated, in other words whether $2^n$ or $5^n$ produces a 0 first.

$2^1 = 2 | 5^1 = 5$ $2^2 = 4 | 5 ^ 2 =25$ $2^3 = 8 | 5 ^3 = 125$

and so on, until, $2^8 = 256$ | $5^8 = 390625$

We see that $5^8$ generates the first zero, so the answer is $\boxed{008}$.





## 2000 AIME I Problem 2

Let $u$ and $v$ be integers satisfying $0 < v < u$. Let $A = (u,v)$, let $B$ be the reflection of $A$ across the line $y = x$, let $C$ be the reflection of $B$ across the y-axis, let $D$ be the reflection of $C$ across the x-axis, and let $E$ be the reflection of $D$ across the y-axis. The area of pentagon $ABCDE$ is $451$. Find $u + v$.
Solution
Solution 1

<div align=center><img src="http://latex.artofproblemsolving.com/d/4/9/d49b785d1030eea278bb89aaeeef04946478a11e.png" height="150px" /></div>

Since $A = (u,v)$, we can find the coordinates of the other points: $B = (v,u)$, $C = (-v,u)$, $D = (-v,-u)$, $E = (v,-u)$. If we graph those points, we notice that since the latter four points are all reflected across the x/y-axis, they form a rectangle, and $ABE$ is a triangle. The area of $BCDE$ is $(2u)(2v) = 4uv$ and the area of $ABE$ is $\frac{1}{2}(2u)(u-v) = u^2 - uv$. Adding these together, we get $u^2 + 3uv = u(u+3v) = 451 = 11 \cdot 41$. Since $u,v$ are positive, $u+3v>u$, and by matching factors we get either $(u,v) = (1,150)$ or $(11,10)$. Since $v < u$ the latter case is the answer, and $u+v = \boxed{021}$.

Solution 2

We find the coordinates like in the solution above: $A = (u,v)$, $B = (v,u)$, $C = (-v,u)$, $D = (-v,-u)$, $E = (v,-u)$. Then we apply the Shoelace Theorem. $A = \frac{1}{2}[(u^2 + vu + vu + vu + v^2) - (v^2 - uv - uv - uv -u^2)] = 451$ $\frac{1}{2}(2u^2 + 6uv) = 451$ $u(u + 3v) = 451$

This means that $(u,v) = (11, 10)$ or $(1,150)$, but since $v < u$, then the answer is $\boxed{021}$


## 2000 AIME I Problem 3

In the expansion of $(ax + b)^{2000},$ where $a$ and $b$ are relatively prime positive integers, the coefficients of $x^{2}$ and $x^{3}$ are equal. Find $a + b$.
Solution

Using the binomial theorem, $\binom{2000}{1998} b^{1998}a^2 = \binom{2000}{1997}b^{1997}a^3 \Longrightarrow b=666a$.

Since $a$ and $b$ are positive relatively prime integers, $a=1$ and $b=666$, and $a+b=\boxed{667}$.





## 2000 AIME I Problem 4

The diagram shows a rectangle that has been dissected into nine non-overlapping squares. Given that the width and the height of the rectangle are relatively prime positive integers, find the perimeter of the rectangle.

<div align=center><img src="https://latex.artofproblemsolving.com/d/8/1/d8140d628cc0905f333aa8deaface1b89ee6c983.png" height="150px" /></div>

Solution

Call the squares' side lengths from smallest to largest $a_1,\ldots,a_9$, and let $l,w$ represent the dimensions of the rectangle.

The picture shows that 

$\begin{align*} a_1+a_2 &= a_3\\ a_1 + a_3 &= a_4\\ a_3 + a_4 &= a_5\\ a_4 + a_5 &= a_6\\ a_2 + a_3 + a_5 &= a_7\\ a_2 + a_7 &= a_8\\ a_1 + a_4 + a_6 &= a_9\\ a_6 + a_9 &= a_7 + a_8.\end{align*}$

With a bit of trial and error and some arithmetic, we can use these equations to find that $5a_1 = 2a_2$; we can guess that $a_1 = 2$. Then solving gives $a_9 = 36$, $a_6=25$, $a_8 = 33$, which gives us $l=61,w=69$. These numbers are relatively prime, as desired. (If we started with $a_1$ odd, the resulting sides would not be integers and we would need to scale up by a factor of $2$ to make them integers; if we started with $a_1 > 2$ even, the resulting dimensions would not be relatively prime and we would need to scale down.) The perimeter is $2(61)+2(69)=\boxed{260}$.


## 2000 AIME I Problem 5


Each of two boxes contains both black and white marbles, and the total number of marbles in the two boxes is $25.$ One marble is taken out of each box randomly. The probability that both marbles are black is $27/50,$ and the probability that both marbles are white is $m/n,$ where $m$ and $n$ are relatively prime positive integers. What is $m + n$?
Solution 1

If we work with the problem for a little bit, we quickly see that there is no direct combinatorics way to calculate $m/n$. The Principle of Inclusion-Exclusion still requires us to find the individual probability of each box.

Let $a, b$ represent the number of marbles in each box, and without loss of generality let $a>b$. Then, $a + b = 25$, and since the $ab$ may be reduced to form $50$ on the denominator of $\frac{27}{50}$, $50|ab$. It follows that $5|a,b$, so there are 2 pairs of $a$ and $b: (20,5),(15,10)$.

Case 1: Then the product of the number of black marbles in each box is $54$, so the only combination that works is $18$ black in first box, and $3$ black in second. Then, $P(\text{both white}) = \frac{2}{20} \cdot \frac{2}{5} = \frac{1}{25},$ so $m + n = 26$.

Case 2: The only combination that works is 9 black in both. Thus, $P(\text{both white}) = \frac{1}{10}\cdot \frac{6}{15} = \frac{1}{25}$. $m + n = 26$.

Thus, $m + n = \boxed{026}$.
Solution 2

Let $w_1, w_2, b_1,$ and $b_2$ represent the white and black marbles in boxes 1 and 2.

Since there are $25$ marbles in the box:

$w_1 + w_2 + b_1 + b_2 = 25$

From the fact that there is a $\frac{27}{50}$ chance of drawing one black marble from each box:

$\frac{b_1 \cdot b_2}{(b_1 + w_1)(b_2 + w_2)} = \frac{27}{50} = \frac{54}{100} = \frac{81}{150}$

Thinking of the numerator and denominator separately, if $\frac{27}{50}$ was not a reduced fraction when calculating out the probability, then $b_1 \cdot b_2 = 27$. Since $b_1 < 25$, this forces the variables to be $3$ and $9$ in some permutation. Without loss of generality, let $b_1 = 3$ and $b_2 = 9$.

The denominator becomes: $(3 + w_1)(9 + w_2) = 50$

Since there have been $12$ black marbles used, there must be $13$ white marbles. Substituting that in:

$(3 + w_1)(9 + (13 - w_1)) = 50$

$(3 + w_1)(22 - w_1) = 50$

Since the factors of $50$ that are greater than $3$ are $5, 10, 25,$ and $50$, the quantity $3 + w_1$ must equal one of those. However, since $w_1 < 13$, testing $2$ and $7$ for $w_1$ does not give a correct product. Thus, $\frac{27}{50}$ must be a reduced form of the actual fraction.

First assume that the fraction was reduced from $\frac{54}{100}$, yielding the equations $b_1\cdot b_2 = 54$ and $(b_1 + w_1)(b_2 + w_2) = 100$. Factoring $b_1 \cdot b_2 = 54$ and saying WLOG that $b_1 < b_2 < 25$ gives $(b_1, b_2) = (3, 18)$ or $(6, 9)$. Trying the first pair and setting the denominator equal to 100 gives: $(3 + w_1)(18 + w_2) = 100$


Since $w_1 + w_2 = 4$, the pairs $(w_1, w_2) = (1, 3), (2,2),$ and $(3,1)$ can be tried, since each box must contain at least one white marble. Plugging in $w_1 = w_2 = 2$ gives the true equation $(3 + 2)(18 + 2) =100$, so the number of marbles are $(w_1, w_2, b_1, b_2) = (2, 2, 3, 18)$

Thus, the chance of drawing 2 white marbles is $\frac{w_1 \cdot w_2 }{(w_1+ b_1)(w_2 + b_2)} = \frac{4}{100} = \frac{1}{25}$ in lowest terms, and the answer to the problem is $1 + 25 = \boxed{026}.$


For completeness, the fraction $\frac{81}{150}$ may be tested. $150$ is the highest necessary denominator that needs to be tested, since the maximum the denominator $(w_1+ b_1)(w_2 + b_2)$ can be when the sum of all integer variables is $25$ is when the variables are $6, 6, 6,$ and $7$, in some permutation, which gives $154$. If $b_1 \cdot b_2 = 81$, this forces $b_1 = b_2 = 9$, since all variables must be integers under $25$. The denominator becomes $(9 + w_1)(9 + w_2) = 150$, and since there are now $25 - 18 = 7$ white marbles total, the denominator becomes $(9 + w_1)(16 - w_1) = 150$. Testing $w_1 = 1$ gives a solution, and thus $w_2 = 6$. The complete solution for this case is $(w_1, w_2, b_1, b_2) = (1, 6, 9, 9)$. Although the distribution and colors of the marbles is different from the last case, the probability of drawing two white marbles is $\frac{6 \cdot 1}{ 150}$, which still simplifies to $\frac {1}{25}$.


## 2000 AIME I Problem 6


For how many ordered pairs $(x,y)$ of integers is it true that $0 < x < y < 10^{6}$ and that the arithmetic mean of $x$ and $y$ is exactly $2$ more than the geometric mean of $x$ and $y$?
Solution
Solution 1

$\begin{eqnarray*} \frac{x+y}{2} &=& \sqrt{xy} + 2\\ x+y-4 &=& 2\sqrt{xy}\\ y - 2\sqrt{xy} + x &=& 4\\ \sqrt{y} - \sqrt{x} &=& \pm 2\end{eqnarray*}$

Because $y > x$, we only consider $+2$.

For simplicity, we can count how many valid pairs of $(\sqrt{x},\sqrt{y})$ that satisfy our equation.

The maximum that $\sqrt{y}$ can be is $10^3 - 1 = 999$ because $\sqrt{y}$ must be an integer (this is because $\sqrt{y} - \sqrt{x} = 2$, an integer). Then $\sqrt{x} = 997$, and we continue this downward until $\sqrt{y} = 3$, in which case $\sqrt{x} = 1$. The number of pairs of $(\sqrt{x},\sqrt{y})$, and so $(x,y)$ is then $\boxed{997}$.
Solution 2

Let $a^2$ = $x$ and $b^2$ = $y$

Then $\frac{a^2 + b^2}{2} = \sqrt{{a^2}{b^2}} +2$ $a^2 + b^2 = 2ab + 4$ $(a-b)^2 = 4$ $(a-b) = \pm 2$

This makes counting a lot easier since now we just have to find all pairs $(a,b)$ that differ by 2.


Because $\sqrt{10^6} = 10^3$, then we can use all positive integers less than 1000 for $a$ and $b$.


Without loss of generality, let's say $a < b$.


We can count even and odd pairs separately to make things easier*:


Odd: $(1,3) , (3,5) , (5,7) . . . (997,999)$


Even: $(2,4) , (4,6) , (6,8) . . . (996,998)$


This makes 499 odd pairs and 498 even pairs, for a total of $\boxed{997}$ pairs.


$*$Note: We are counting the pairs for the values of $a$ and $b$, which, when squared, translate to the pairs of $(x,y)$ we are trying to find.


## 2000 AIME I Problem 7


Suppose that $x,$ $y,$ and $z$ are three positive numbers that satisfy the equations $xyz = 1,$ $x + \frac {1}{z} = 5,$ and $y + \frac {1}{x} = 29.$ Then $z + \frac {1}{y} = \frac {m}{n},$ where $m$ and $n$ are relatively prime positive integers. Find $m + n$.


Solution 1

Let $r = \frac{m}{n} = z + \frac {1}{y}$.

$\begin{align*} (5)(29)(r)&=\left(x + \frac {1}{z}\right)\left(y + \frac {1}{x}\right)\left(z + \frac {1}{y}\right)\\ &=xyz + \frac{xy}{y} + \frac{xz}{x} + \frac{yz}{z} + \frac{x}{xy} + \frac{y}{yz} + \frac{z}{xz} + \frac{1}{xyz}\\ &=1 + x + z + y + \frac{1}{y} + \frac{1}{z} + \frac{1}{x} + \frac{1}{1}\\ &=2 + \left(x + \frac {1}{z}\right) + \left(y + \frac {1}{x}\right) + \left(z + \frac {1}{y}\right)\\ &=2 + 5 + 29 + r\\ &=36 + r \end{align*}$

Thus $145r = 36+r \Rightarrow 144r = 36 \Rightarrow r = \frac{36}{144} = \frac{1}{4}$. So $m + n = 1 + 4 = \boxed{5}$.
Solution 2

Since $x+(1/z)=5, 1=z(5-x)=xyz$, so $5-x=xy$. Also, $y=29-(1/x)$ by the second equation. Substitution gives $x=1/5$, $y=24$, and $z=5/24$, so the solution is $5$.


## 2000 AIME I Problem 8

A container in the shape of a right circular cone is $12$ inches tall and its base has a $5$-inch radius. The liquid that is sealed inside is $9$ inches deep when the cone is held with its point down and its base horizontal. When the liquid is held with its point up and its base horizontal, the height of the liquid is $m - n\sqrt [3]{p},$ from the base where $m,$ $n,$ and $p$ are positive integers and $p$ is not divisible by the cube of any prime number. Find $m + n + p$.

Solution

<div align=center><img src="http://wiki-images.artofproblemsolving.com/5/53/2000_I_AIME-8.png" height="150px" /></div>

Solution 1

The scale factor is uniform in all dimensions, so the volume of the liquid is $\left(\frac{3}{4}\right)^{3}$ of the container. The remaining section of the volume is $\frac{1-\left(\frac{3}{4}\right)^{3}}{1}$ of the volume, and therefore $\frac{\left(1-\left(\frac{3}{4}\right)^{3}\right)^{1/3}}{1}$ of the height when the vertex is at the top.

So, the liquid occupies $\frac{1-\left(1-\left(\frac{3}{4}\right)^{3}\right)^{1/3}}{1}$ of the height, or $12-12\left(1-\left(\frac{3}{4}\right)^{3}\right)^{1/3}=12-3\left(37^{1/3}\right)$. Thus $m+n+p=\boxed{052}$.
Solution 2

(Computational) The volume of a cone can be found by $V = \frac{\pi}{3}r^2h$. In the second container, if we let $h',r'$ represent the height, radius (respectively) of the air (so $12 -h'$ is the height of the liquid), then the volume of the liquid can be found by $\frac{\pi}{3}r^2h - \frac{\pi}{3}(r')^2h'$.

By similar triangles, we find that the dimensions of the liquid in the first cone to the entire cone is $\frac{3}{4}$, and that $r' = \frac{rh'}{h}$; equating,

$\begin{align*}\frac{\pi}{3}\left(\frac{3}{4}r\right)^2 \left(\frac{3}{4}h\right) &= \frac{\pi}{3}\left(r^2h - \left(\frac{rh'}{h}\right)^2h'\right)\\ \frac{37}{64}r^2h &= \frac{r^2}{h^2}(h')^3 \\ h' &= \sqrt[3]{\frac{37}{64} \cdot 12^3} = 3\sqrt[3]{37}\end{align*}$

Thus the answer is $12 - h' = 12-3\sqrt[3]{37}$, and $m+n+p=\boxed{052}$.


## 2000 AIME I Problem 9

The system of equations $\begin{eqnarray*}\log_{10}(2000xy) - (\log_{10}x)(\log_{10}y) & = & 4 \\ \log_{10}(2yz) - (\log_{10}y)(\log_{10}z) & = & 1 \\ \log_{10}(zx) - (\log_{10}z)(\log_{10}x) & = & 0 \\ \end{eqnarray*}$

has two solutions $(x_{1},y_{1},z_{1})$ and $(x_{2},y_{2},z_{2})$. Find $y_{1} + y_{2}$.
Solution

Since $\log ab = \log a + \log b$, we can reduce the equations to a more recognizable form:

$\begin{eqnarray*} -\log x \log y + \log x + \log y - 1 &=& 3 - \log 2000\\ -\log y \log z + \log y + \log z - 1 &=& - \log 2\\ -\log x \log z + \log x + \log z - 1 &=& -1\\ \end{eqnarray*}$

Let $a,b,c$ be $\log x, \log y, \log z$ respectively. Using SFFT, the above equations become (*)

$\begin{eqnarray*}(a - 1)(b - 1) &=& \log 2 \\ (b-1)(c-1) &=& \log 2 \\ (a-1)(c-1) &=& 1 \end{eqnarray*}$

From here, multiplying the three equations gives

$\begin{eqnarray*}(a-1)^2(b-1)^2(c-1)^2 &=& (\log 2)^2\\ (a-1)(b-1)(c-1) &=& \pm\log 2\end{eqnarray*}$

Dividing the third equation of (*) from this equation, $b-1 = \log y - 1 = \pm\log 2 \Longrightarrow \log y = \pm \log 2 + 1$. This gives $y_1 = 20, y_2 = 5$, and the answer is $y_1 + y_2 = \boxed{025}$.


## 2000 AIME I Problem 10

A sequence of numbers $x_{1},x_{2},x_{3},\ldots,x_{100}$ has the property that, for every integer $k$ between $1$ and $100,$ inclusive, the number $x_{k}$ is $k$ less than the sum of the other $99$ numbers. Given that $x_{50} = m/n,$ where $m$ and $n$ are relatively prime positive integers, find $m + n$.
Solution

Let the sum of all of the terms in the sequence be $\mathbb{S}$. Then for each integer $k$, $x_k = \mathbb{S}-x_k-k \Longrightarrow \mathbb{S} - 2x_k = k$. Summing this up for all $k$ from $1, 2, \ldots, 100$,

$\begin{align*}100\mathbb{S}-2(x_1 + x_2 + \cdots + x_{100}) &= 1 + 2 + \cdots + 100\\ 100\mathbb{S} - 2\mathbb{S} &= \frac{100 \cdot 101}{2} = 5050\\ \mathbb{S}&=\frac{2525}{49}\end{align*}$

Now, substituting for $x_{50}$, we get $2x_{50}=\frac{2525}{49}-50=\frac{75}{49} \Longrightarrow x_{50}=\frac{75}{98}$, and the answer is $75+98=\boxed{173}$.


## 2000 AIME I Problem 11


Let $S$ be the sum of all numbers of the form $a/b,$ where $a$ and $b$ are relatively prime positive divisors of $1000.$ What is the greatest integer that does not exceed $S/10$?
Solution 1

Since all divisors of $1000 = 2^35^3$ can be written in the form of $2^{m}5^{n}$, it follows that $\frac{a}{b}$ can also be expressed in the form of $2^{x}5^{y}$, where $-3 \le x,y \le 3$. Thus every number in the form of $a/b$ will be expressed one time in the product

$(2^{-3} + 2^{-2} + 2^{-1} + 2^{0} + 2^{1} + 2^2 + 2^3)(5^{-3} + 5^{-2} +5^{-1} + 5^{0} + 5^{1} + 5^2 + 5^3)$

Using the formula for a geometric series, this reduces to $S = \frac{2^{-3}(2^7 - 1)}{2-1} \cdot \frac{5^{-3}(5^{7} - 1)}{5-1} = \frac{127 \cdot 78124}{4000} = 2480 + \frac{437}{1000}$, and $\left\lfloor \frac{S}{10} \right\rfloor = \boxed{248}$.
Solution 2

Essentially, the problem asks us to compute $\sum_{a=-3}^3 \sum_{b=-3}^3 \frac{2^a}{5^b}$ which is pretty easy: $\sum_{a=-3}^3 \sum_{b=-3}^3 \frac{2^a}{5^b} = \sum_{a=-3}^3 2^a \sum_{b=-3}^3 \frac{1}{5^b} = \sum_{a=-3}^3 2^a 5^{3}\bigg( \frac{1-5^{-7}}{1-\frac{1}{5}} \bigg)  \\= 5^{3}\bigg( \frac{1-5^{-7}}{1-\frac{1}{5}} \bigg) \sum_{a=-3}^3 2^a = 5^{3}\bigg( \frac{1-5^{-7}}{1-\frac{1}{5}} \bigg)2^{-3} \bigg( \frac{1-2^7}{1-2} \bigg) = 2480 + \frac{437}{1000}$ 

so our answer is $\left\lfloor \frac{2480 + \frac{437}{1000}}{10} \right\rfloor = \boxed{248}$.


## 2000 AIME I Problem 12

Given a function $f$ for which $f(x) = f(398 - x) = f(2158 - x) = f(3214 - x)$ holds for all real $x,$ what is the largest number of different values that can appear in the list $f(0),f(1),f(2),\ldots,f(999)?$
Solution

$\begin{align*}f(2158 - x) = f(x) &= f(3214 - (2158 - x)) &= f(1056 + x)\\ f(398 - x) = f(x) &= f(2158 - (398 - x)) &= f(1760 + x)\end{align*}$

Since $\mathrm{gcd}(1056, 1760) = 352$ we can conclude that (by the Euclidean algorithm)

$f(x) = f(352 + x)$

So we need only to consider one period $f(0), f(1), ... f(351)$, which can have at most $352$ distinct values which determine the value of $f(x)$ at all other integers.

But we also know that $f(x) = f(46 - x) = f(398 - x)$, so the values $x = 24, 25, ... 46$ and $x = 200, 201, ... 351$ are repeated. This gives a total of

$352 - (46 - 24 + 1) - (351 - 200 + 1) = \boxed{ 177 }$

distinct values.

To show that it is possible to have $f(23), f(24), \ldots, f(199)$ distinct, we try to find a function which fulfills the given conditions. A bit of trial and error would lead to the cosine function: $f(x) = \cos \left(\frac{360}{352}(x-23)\right)$ (in degrees).


## 2000 AIME I Problem 13

In the middle of a vast prairie, a firetruck is stationed at the intersection of two perpendicular straight highways. The truck travels at $50$ miles per hour along the highways and at $14$ miles per hour across the prairie. Consider the set of points that can be reached by the firetruck within six minutes. The area of this region is $m/n$ square miles, where $m$ and $n$ are relatively prime positive integers. Find $m + n$.
Solution

Let the intersection of the highways be at the origin $O$, and let the highways be the x and y axes. We consider the case where the truck moves in the positive x direction.

After going $x$ miles, $t=\frac{d}{r}=\frac{x}{50}$ hours has passed. If the truck leaves the highway it can travel for at most $t=\frac{1}{10}-\frac{x}{50}$ hours, or $d=rt=14t=1.4-\frac{7x}{25}$ miles. It can end up anywhere off the highway in a circle with this radius centered at $(x,0)$. All these circles are homothetic with respect to a center at $(5,0)$.

<div align=center><img src="http://latex.artofproblemsolving.com/b/1/e/b1e4a60f3081861da720715755129e0abc341cb9.png" height="200px" /></div>

<div align=center><img src="http://latex.artofproblemsolving.com/b/1/d/b1dbbfe9154757443da1f35c5fce02513e7afdd6.png" height="200px" /></div>

Now consider the circle at $(0,0)$. Draw a line tangent to it at $A$ and passing through $B (5,0)$. By the Pythagorean Theorem $AB^2+AO^2=OB^2 \Longrightarrow AB=\sqrt{OB^2-AO^2}=\sqrt{5^2-1.4^2}=\frac{24}{5}$. Then $\tan(\angle ABO)=\frac{OA}{AB}=\frac{7}{24}$, so the slope of line $AB$ is $\frac{-7}{24}$. Since it passes through $(5,0)$ its equation is $y=\frac{-7}{24}(x-5)$.

This line and the x and y axis bound the region the truck can go if it moves in the positive x direction. Similarly, the line $y=5-\frac{24}{7}x$ bounds the region the truck can go if it moves in positive y direction. The intersection of these two lines is $\left(\frac{35}{31},\frac{35}{31}\right)$. The bounded region in Quadrant I is made up of a square and two triangles. $A=x^2+x(5-x)=5x$. By symmetry, the regions in the other quadrants are the same, so the area of the whole region is $20x=\frac{700}{31}$ so the answer is $700+31=\boxed{731}$.


## 2000 AIME I Problem 14

In triangle $ABC,$ it is given that angles $B$ and $C$ are congruent. Points $P$ and $Q$ lie on $\overline{AC}$ and $\overline{AB},$ respectively, so that $AP = PQ = QB = BC.$ Angle $ACB$ is $r$ times as large as angle $APQ,$ where $r$ is a positive real number. Find the greatest integer that does not exceed $1000r$.

Solution
Solution 1

<div align=center><img src="http://latex.artofproblemsolving.com/f/1/f/f1f597c511a21d50292f1daf4ee93815c1404c82.png" height="150px" /></div>

Let point $R$ be in $\triangle ABC$ such that $QB = BR = RP$. Then $PQBR$ is a rhombus, so $AB \parallel PR$ and $APRB$ is an isosceles trapezoid. Since $\overline{PB}$ bisects $\angle QBR$, it follows by symmetry in trapezoid $APRB$ that $\overline{RA}$ bisects $\angle BAC$. Thus $R$ lies on the perpendicular bisector of $\overline{BC}$, and $BC = BR = RC$. Hence $\triangle BCR$ is an equilateral triangle.

Now $\angle ABR = \angle BAC = \angle ACR$, and the sum of the angles in $\triangle ABC$ is $\angle ABR + 60^{\circ} + \angle BAC + \angle ACR + 60^{\circ} = 3\angle BAC + 120^{\circ} = 180^{\circ} \Longrightarrow \angle BAC = 20^{\circ}$. Then $\angle APQ = 140^{\circ}$ and $\angle ACB = 80^{\circ}$, so the answer is $\left\lfloor 1000 \cdot \frac{80}{140} \right\rfloor = \left\lfloor \frac{4000}{7} \right\rfloor = \boxed{571}$.
Solution 2

<div align=center><img src="http://latex.artofproblemsolving.com/1/6/6/166838a1bc564730cc23500919254edab0c132e2.png" height="200px" /></div>

Again, construct $R$ as above.

Let $\angle BAC = \angle QBR = \angle QPR = 2x$ and $\angle ABC = \angle ACB = y$, which means $x + y = 90$. $\triangle QBC$ is isosceles with $QB = BC$, so $\angle BCQ = 90 - \frac {y}{2}$. Let $S$ be the intersection of $QC$ and $BP$. Since $\angle BCQ = \angle BQC = \angle BRS$, $BCRS$ is cyclic, which means $\angle RBS = \angle RCS = x$. Since $APRB$ is an isosceles trapezoid, $BP = AR$, but since $AR$ bisects $\angle BAC$, $\angle ABR = \angle ACR = 2x$.

Therefore we have that $\angle ACB = \angle ACR + \angle RCS + \angle QCB = 2x + x + 90 - \frac {y}{2} = y$. We solve the simultaneous equations $x + y = 90$ and $2x + x + 90 - \frac {y}{2} = y$ to get $x = 10$ and $y = 80$. $\angle APQ = 180 - 4x = 140$, $\angle ACB = 80$, so $r = \frac {80}{140} = \frac {4}{7}$. $\left\lfloor 1000\left(\frac {4}{7}\right)\right\rfloor = \boxed{571}$.


## 2000 AIME I Problem 15

A stack of $2000$ cards is labelled with the integers from $1$ to $2000,$ with different integers on different cards. The cards in the stack are not in numerical order. The top card is removed from the stack and placed on the table, and the next card is moved to the bottom of the stack. The new top card is removed from the stack and placed on the table, to the right of the card already there, and the next card in the stack is moved to the bottom of the stack. The process - placing the top card to the right of the cards already on the table and moving the next card in the stack to the bottom of the stack - is repeated until all cards are on the table. It is found that, reading from left to right, the labels on the cards are now in ascending order: $1,2,3,\ldots,1999,2000.$ In the original stack of cards, how many cards were above the card labeled $1999$?
Solution

We try to work backwards from when there are 2 cards left, since this is when the 1999 card is laid onto the table. When there are 2 cards left, the 1999 card is on the top of the deck. In order for this to occur, it must be 2nd on the deck when there are 4 cards remaining, and this means it must be the 4th card when there are 8 cards remaining. This pattern continues until it is the 512th card on the deck when there are 1024 cards remaining. Since there are over 1000 cards remaining, some cards have not even made one trip through yet, 2(1024 - 1000) = 48, to be exact. Once these cards go through, 1999 will be the $512 - 48 = 464th$ card on the deck. Since every other card was removed during the first round, it goes to show that 1999 was in position $464 \times 2 = 928$, meaning that there were $\boxed{927}$ cards are above the one labeled $1999$.



**2000 AIME I Answer Key**

1. 008
2. 021
3. 667
4. 260
5. 026
6. 997
7. 005
8. 052
9. 025
10. 173
11. 248
12. 177
13. 731
14. 571
15. 927

 