# 2013 AIME I

2013 AIME I Problem 1
Problem 1

The AIME Triathlon consists of a half-mile swim, a 30-mile bicycle ride, and an eight-mile run. Tom swims, bicycles, and runs at constant rates. He runs fives times as fast as he swims, and he bicycles twice as fast as he runs. Tom completes the AIME Triathlon in four and a quarter hours. How many minutes does he spend bicycling?
Solution

Let $r$ represent the rate Tom swims in miles per minute. Then we have

$\frac{.5}{r} + \frac{8}{5r} + \frac{30}{10r} = 255$

Solving for $r$, we find $r = 1/50$, so the time Tom spends biking is $\frac{30}{(10)(1/50)} = \boxed{150}$ 

2013 AIME I Problem 2
Problem 2

Find the number of five-digit positive integers, $n$, that satisfy the following conditions:

(a) the number $n$ is divisible by $5,$ 

(b) the first and last digits of $n$ are equal, and 

(c) the sum of the digits of $n$ is divisible by $5.$ 

Solution

The number takes a form of $5\text{x,y,z}5$, in which $5|x+y+z$. Let $x$ and $y$ be arbitrary digits. For each pair of $x,y$, there are exactly two values of $z$ that satisfy the condition of $5|x+y+z$. Therefore, the answer is $10\times10\times2=\boxed{200}$ 

2013 AIME I Problem 3

Problem 3

Let $ABCD$ be a square, and let $E$ and $F$ be points on $\overline{AB}$ and $\overline{BC},$ respectively. The line through $E$ parallel to $\overline{BC}$ and the line through $F$ parallel to $\overline{AB}$ divide $ABCD$ into two squares and two nonsquare rectangles. The sum of the areas of the two squares is $\frac{9}{10}$ of the area of square $ABCD.$ Find $\frac{AE}{EB} + \frac{EB}{AE}.$


Solution

It's important to note that $\frac{AE}{EB} + \frac{EB}{AE}$ is equivalent to $\frac{AE^2 + EB^2}{(AE)(EB)}$

We define $a$ as the length of the side of larger inner square, which is also $EB$, $b$ as the length of the side of the smaller inner square which is also $AE$, and $s$ as the side length of $ABCD$. Since we are given that the sum of the areas of the two squares is$\frac{9}{10}$ of the the area of ABCD, we can represent that as $a^2 + b^2 = \frac{9s^2}{10}$. The sum of the two nonsquare rectangles can then be represented as $2ab = \frac{s^2}{10}$.

Looking back at what we need to find, we can represent $\frac{AE^2 + EB^2}{(AE)(EB)}$ as $\frac{a^2 + b^2}{ab}$. We have the numerator, and dividing$\frac{s^2}{10}$ by two gives us the denominator $\frac{s^2}{20}$. Dividing $\frac{\frac{9s^2}{10}}{\frac{s^2}{20}}$ gives us an answer of $\boxed{018}$.
Solution 2

Let the side of the square be $1$. Therefore the area of the square is also $1$. We label $AE$ as $a$ and $EB$ as $b$. Notice that what we need to find is equivalent to: $\frac{a^2+b^2}{ab}$. Since the sum of the two squares ($a^2+b^2$) is $\frac{9}{10}$ (as stated in the problem) the area of the whole square, it is clear that the sum of the two rectangles is $1-\frac{9}{10} \implies \frac{1}{10}$. Since these two rectangles are congruent, they each have area: $\frac{1}{20}$. Also note that the area of this is $ab$. Plugging this into our equation we get:

$\frac{\frac{9}{10}}{\frac{1}{20}} \implies \boxed{018}$

Solution 3

Let $AE$ be $x$, and $EB$ be $1$. Then we are looking for the value $x+\frac{1}{x}$. The areas of the smaller squares add up to $9/10$ of the area of the large square, $(x+1)^2$. Cross multiplying and simplifying we get $x^2-18x+1=0$. Rearranging, we get $x+\frac{1}{x}=\boxed{018}$ 

2013 AIME I Problem 4
Problem 4

In the array of 13 squares shown below, 8 squares are colored red, and the remaining 5 squares are colored blue. If one of all possible such colorings is chosen at random, the probability that the chosen colored array appears the same when rotated 90 degrees around the central square is $\frac{1}{n}$ , where n is a positive integer. Find n.
Solution

When the array appears the same after a 90 degree rotation, the top formation must look the same as the right formation, which looks the same as the bottom one, which looks the same as the right one. There are four of the same configuration. There are not enough red squares for these to be all red, nor are there enough blue squares for there to be more than one blue square in each three-square formation. Thus there are 2 reds and 1 blue in each, and a blue in the center. There are 3 ways to choose which of the squares in the formation will be blue, leaving the other two red.

There are $\binom{13}{5}$ ways to have 5 blue squares in an array of 13.

$\frac{3}{\binom{13}{5}}$ = $\frac{1}{429}$ , so n = $\boxed{429}$ 

2013 AIME I Problem 5
Problem

The real root of the equation $8x^3 - 3x^2 - 3x - 1 = 0$ can be written in the form $\frac{\sqrt[3]a + \sqrt[3]b + 1}{c}$, where $a$, $b$, and $c$ are positive integers. Find $a+b+c$.

Problem 6

Melinda has three empty boxes and $12$ textbooks, three of which are mathematics textbooks. One box will hold any three of her textbooks, one will hold any four of her textbooks, and one will hold any five of her textbooks. If Melinda packs her textbooks into these boxes in random order, the probability that all three mathematics textbooks end up in the same box can be written as $\frac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m+n$.
Solution One

The total ways the textbooks can be arranged in the 3 boxes is $12\textbf{C}3\cdot 9\textbf{C}4$, which is equivalent to $\frac{12\cdot 11\cdot 10\cdot 9\cdot 8\cdot 7\cdot 6}{144}=12\cdot11\cdot10\cdot7\cdot3$. If all of the math textbooks are put into the box that can hold $3$ textbooks, there are $9!/(4!\cdot 5!)=9\textbf{C}4$ ways for the other textbooks to be arranged. If all of the math textbooks are put into the box that can hold $4$ textbooks, there are $9$ ways to choose the other book in that box, times $8\textbf{C}3$ ways for the other books to be arranged. If all of the math textbooks are put into the box with the capability of holding $5$ textbooks, there are $9\textbf{C}2$ ways to choose the other 2 textbooks in that box, times $7\textbf{C}3$ ways to arrange the other 7 textbooks. $9\textbf{C}4=9\cdot7\cdot2=126$, $9\cdot 8\textbf{C}3=9\cdot8\cdot7=504$, and $9\textbf{C}2\cdot 7\textbf{C}3=9\cdot7\cdot5\cdot4=1260$, so the total number of ways the math textbooks can all be placed into the same box is $126+504+1260=1890$. So, the probability of this occurring is $\frac{(9\cdot7)(2+8+(4\cdot5))}{12\cdot11\cdot10\cdot7\cdot3}=\frac{1890}{27720}$. If the numerator and denominator are both divided by $9\cdot7$, we have $\frac{(2+8+(4\cdot5))}{4\cdot11\cdot10}=\frac{30}{440}$. Simplifying the numerator yields $\frac{30}{10\cdot4\cdot11}$, and dividing both numerator and denominator by $10$ results in $\frac{3}{44}$. This fraction cannot be simplified any further, so $m=3$ and $n=44$. Therefore, $m+n=3+44=\boxed{047}$.
Solution Two

Consider the books as either math or not-math where books in each category are indistiguishable from one another. Then, there are $\,_{12}C_{3}$ total distinguishable ways to pack the books. Now, in order to determine the desired propability, we must find the total number of ways the condition that all math books are in the same box can be satisfied. We proceed with casework for each box:

Case 1: The math books are placed into the smallest box. This can be done in $\,_{3}C_{3}$ ways.

Case 2: The math books are placed into the middle box. This can be done in $\,_{4}C_{3}$ ways.

Case 3: The math books are placed into the largest box. This can be done in $\,_{5}C_{3}$ ways.

So, the total ways the condition can be satisfied is $\,_{3}C_{3} + \,_{4}C_{3} + \,_{5}C_{3}$. This can be simplified to $\,_{6}C_{4} = \,_{6}C_{2}$ by the Hockey Stick Identity. Therefore, the desired probability is $\frac{ \,_{6}C_{2} }{ \,_{12}C_{3} }$ = $\frac{3}{44}$, and $m+n=3+44=\boxed{047}$. 

2013 AIME I Problem 7

Problem 7

A rectangular box has width $12$ inches, length $16$ inches, and height $\frac{m}{n}$ inches, where $m$ and $n$ are relatively prime positive integers. Three faces of the box meet at a corner of the box. The center points of those three faces are the vertices of a triangle with an area of $30$ square inches. Find $m+n$.
Solution 1

Let the height of the box be $x$.

After using the Pythagorean Theorem three times, we can quickly see that the sides of the triangle are 10, $\sqrt{\left(\frac{x}{2}\right)^2 + 64}$, and $\sqrt{\left(\frac{x}{2}\right)^2 + 36}$. Since the area of the triangle is $30$, the altitude of the triangle from the base with length $10$ is $6$.

Considering the two triangles created by the altitude, we use the Pythagorean theorem twice to find the lengths of the two line segments that make up the base of $10$.

We find: $10 = \sqrt{\left(28+x^2/4\right)}+x/2$

Solving for $x$ gives us $x=\frac{36}{5}$. Since this fraction is simplified: $m+n=\boxed{041}$
Solution 2

We may use vectors. Let the height of the box be $2h$. Without loss of generality, let the front bottom left corner of the box be $(0,0,0)$. Let the center point of the bottom face be $P_1$, the center of the left face be $P_2$ and the center of the front face be $P_3$.

We are given that the area of the triangle $\triangle P_1 P_2 P_3$ is $30$. Thus, by a well known formula, we note that $\frac{1}{2}|\vec{P_1P_2} \text{x} \vec{P_1P_3}|=30$ We quickly attain that $\vec{P_1P_2}=<-6,0,h>$ and $\vec{P_1P_3}=<0,-8,h>$ (We can arbitrarily assign the long and short ends due to symmetry)

Computing the cross product, we find: $\vec{P_1P_2} x \vec{P_1P_3}=-<6h,8h,48>$

Thus: $\sqrt{(6h)^2+(8h)^2+48^2}=2*30=60$ $h=3.6$ $2h=7.2$

$2h=36/5$

$m+n=\boxed{041}$
Solution 3

Let the height of the box be $x$.

After using the Pythagorean Theorem three times, we can quickly see that the sides of the triangle are 10, $\sqrt{(x/2)^2 + 64}$, and $\sqrt{(x/2)^2 + 36}$. Therefore, we can use Heron's formula to set up an equation for the area of the triangle.

The semiperimeter is $\left(10 + \sqrt{(x/2)^2 + 64} + \sqrt{(x/2)^2 + 36}\right)/2$. Therefore, when we square Heron's formula, we find

$\begin{align*}900 &= \frac{1}{2}\left(\left(10 + \sqrt{(x/2)^2 + 64} + \sqrt{(x/2)^2 + 36}\right)/2\right)\times\left(\left(10 + \sqrt{(x/2)^2 + 64} + \sqrt{(x/2)^2 + 36}\right)/2 - 10\right)\\&\qquad\times\left(\left(10 + \sqrt{(x/2)^2 + 64} + \sqrt{(x/2)^2 + 36}\right)/2 - \sqrt{(x/2)^2 + 64}\right)\\&\qquad\times\left(\left(10 + \sqrt{(x/2)^2 + 64} + \sqrt{(x/2)^2 + 36}\right)/2 - \sqrt{(x/2)^2 + 36}\right).\end{align*}$

Solving, we get $\boxed{041}$.
Solution 4

It isn't hard to see that the triangle connecting the centers of the faces of the rectangular prism is congruent to the triangle connecting the midpoints of three edges that concur. So we can now apply de Guas theorem to see that:

$30^2=24^2+(3x)^2+(4x)^2$

Where $x$ is half the desired length of the height.

Solving yields $2x=\frac{36}{5}$

And thus $36+5=\boxed{041}$

2013 AIME I Problem 8

Problem 8

The domain of the function $f(x) = \arcsin(\log_{m}(nx))$ is a closed interval of length $\frac{1}{2013}$ , where $m$ and $n$ are positive integers and $m>1$. Find the remainder when the smallest possible sum $m+n$ is divided by 1000.
Solution

We know that the domain of $\arcsin$ is $[-1, 1]$, so $-1 \le \log_m nx \le 1$. Now we can apply the definition of logarithms: $m^{-1} = \frac1m \le nx \le m$ $\implies \frac{1}{mn} \le x \le \frac{m}{n}$ Since the domain of $f(x)$ has length $\frac{1}{2013}$, we have that $\frac{m}{n} - \frac{1}{mn} = \frac{1}{2013}$ $\implies \frac{m^2 - 1}{mn} = \frac{1}{2013}$

A larger value of $m$ will also result in a larger value of $n$ since the numerator increases faster than the denominator, so we want to find the smallest value of $m$ that also results in an integer value of $n$. The problem states that $m > 1$. Thus, first we try $m = 2$: $\frac{3}{2n} = \frac{1}{2013} \implies 2n = 3 \cdot 2013 \implies n \notin \mathbb{Z}$ Now, we try $m=3$: $\frac{8}{3n} = \frac{1}{2013} \implies 3n = 8 \cdot 2013 \implies n = 8 \cdot 671 = 5368$ Since $m=3$ is the smallest value of $m$ that results in an integral $n$ value, we have minimized $m+n$, which is $5368 + 3 = 5371 \equiv \boxed{371} \mod{1000}$.
Solution 2

We start with the same method as above. The domain of the arcsin function is $[-1, 1]$, so $-1 \le \log_{m}(nx) \le 1$.

$\frac{1}{m} \le nx \le m$ $\frac{1}{mn} \le x \le \frac{m}{n}$ $\frac{m}{n} - \frac{1}{mn} = \frac{1}{2013}$ $n = 2013m - \frac{2013}{m}$

For $n$ to be an integer, $m$ must divide $2013$, and $m > 1$. To minimize $n$, $m$ should be as small as possible because increasing $m$ will decrease $\frac{2013}{m}$, the amount you are subtracting, and increase $2013m$, the amount you are adding; this also leads to a small $n$ which clearly minimizes $m+n$.

We let $m$ equal $3$, the smallest factor of $2013$ that isn't $1$. Then we have $n = 2013*3 - \frac{2013}{3} = 6039 - 671 = 5368$

$m + n = 5371$, so the answer is $\boxed{371}$.



2013 AIME I Problem 10
Problem 10

There are nonzero integers $a$, $b$, $r$, and $s$ such that the complex number $r+si$ is a zero of the polynomial $P(x)={x}^{3}-a{x}^{2}+bx-65$. For each possible combination of $a$ and $b$, let ${p}_{a,b}$ be the sum of the zeros of $P(x)$. Find the sum of the ${p}_{a,b}$'s for all possible combinations of $a$ and $b$.


Solution

Since $r+si$ is a root, by the Complex Conjugate Root Theorem, $r-si$ must be the other imaginary root. Using $q$ to represent the rational root, we have

$(x-q)(x-r-si)(x-r+si) = x^3 -ax^2 + bx -65$

Applying difference of squares, and regrouping, we have

$(x-q)(x^2 - 2rx + (r^2 + s^2)) = x^3 -ax^2 + bx -65$

So matching coefficients, we obtain

$q(r^2 + s^2) = 65$

$b = r^2 + s^2 + 2rq$

$a = q + 2r$

By Vieta's each ${p}_{a,b} = a$ so we just need to find the values of $a$ in each pair. We proceed by determining possible values for $q$, $r$, and $s$ and using these to determine $a$ and $b$.

If $q = 1$, $r^2 + s^2 = 65$ so (r, s) = $(\pm1, \pm 8), (\pm8, \pm 1), (\pm4, \pm 7), (\pm7, \pm 4)$

Similarly, for $q = 5$, $r^2 + s^2 = 13$ so the pairs $(r,s)$ are $(\pm2, \pm 3), (\pm3, \pm 2)$

For $q = 13$, $r^2 + s^2 = 5$ so the pairs $(r,s)$ are $(\pm2, \pm 1), (\pm1, \pm 2)$

Then, since only $s^2$ but not $s$ appears in the equations for $a$ and $b$, we can ignore the plus minus sign for $s$. The positive and negative values of r will cancel, so the sum of the ${p}_{a,b} = a$ for $q = 1$ is $q$ times the number of distinct $r$ values (as each value of $r$ generates a pair $(a,b)$). Our answer is then $(1)(8) + (5)(4) + (13)(4) = \boxed{80}$.



2013 AIME I Problem 11
Problem 11

Ms. Math's kindergarten class has 16 registered students. The classroom has a very large number, N, of play blocks which satisfies the conditions:

(a) If 16, 15, or 14 students are present in the class, then in each case all the blocks can be distributed in equal numbers to each student, and

(b) There are three integers $0 < x < y < z < 14$ such that when $x$, $y$, or $z$ students are present and the blocks are distributed in equal numbers to each student, there are exactly three blocks left over.

Find the sum of the distinct prime divisors of the least possible value of N satisfying the above conditions.


Solution

N must be some multiple of the LCM of 14, 15, and 16 = $2^{4} \cdot 3 \cdot 5 \cdot 7$ ; this LCM is hereby denoted $k$ and $N = qk$.

1, 2, 3, 4, 5, 6, 7, 8, 10, and 12 all divide $k$, so $x, y, z = 9, 11, 13$

We have the following three modulo equations:

$nk\equiv 3 \mod{9}$

$nk\equiv 3 \mod{11}$

$nk\equiv 3 \mod{13}$

To solve the equations, you can notice the answer must be of the form $9\cdot 11\cdot 13\cdot m + 3$ where $m$ is an integer.

This must be divisible by LCM$(14, 15, 16)$, which is $560\cdot 3$.

Therefore, $(9\cdot 11\cdot 13m + 3)/(560\cdot 3) = q$, which is an integer. Factor out 3 and divide to get $(429m+1)/(560) = q$. Therefore, $429m+1=560q$. We can use Bezout's Identity or a Euclidean Algorithm bash to solve for the least of $m$ and $q$.

We find that the least $m$ is $171$ and the least $q$ is $131$.

Plug it into $9\cdot 11\cdot 13m + 3$ and factor to get that the distinct prime divisors are $2,3,5,7$ and $131$.


$2 + 3 + 5 + 7 + 131 = \boxed{148}$.



2013 AIME I Problem 12
Problem 12

Let $\bigtriangleup PQR$ be a triangle with $\angle P = 75^\circ$ and $\angle Q = 60^\circ$. A regular hexagon $ABCDEF$ with side length 1 is drawn inside $\triangle PQR$ so that side $\overline{AB}$ lies on $\overline{PQ}$, side $\overline{CD}$ lies on $\overline{QR}$, and one of the remaining vertices lies on $\overline{RP}$. There are positive integers $a, b, c,$ and $d$ such that the area of $\triangle PQR$ can be expressed in the form $\frac{a+b\sqrt{c}}{d}$, where $a$ and $d$ are relatively prime, and c is not divisible by the square of any prime. Find $a+b+c+d$.
Solution

First, find that $\angle R = 45^\circ$. Draw $ABCDEF$. Now draw $\bigtriangleup PQR$ around $ABCDEF$ such that $Q$ is adjacent to $C$ and $D$. The height of $ABCDEF$ is $\sqrt{3}$, so the length of base $QR$ is $2+\sqrt{3}$. Let the equation of $\overline{RP}$ be $y = x$. Then, the equation of $\overline{PQ}$ is $y = -\sqrt{3} (x - (2+\sqrt{3})) \to y = -x\sqrt{3} + 2\sqrt{3} + 3$. Solving the two equations gives $y = x = \frac{\sqrt{3} + 3}{2}$. The area of $\bigtriangleup PQR$ is $\frac{1}{2} * (2 + \sqrt{3}) * \frac{\sqrt{3} + 3}{2} = \frac{5\sqrt{3} + 9}{4}$. $a + b + c + d = 9 + 5 + 3 + 4 = \boxed{21}$



2013 AIME I Problem 13
Problem 13

Triangle $AB_0C_0$ has side lengths $AB_0 = 12$, $B_0C_0 = 17$, and $C_0A = 25$. For each positive integer $n$, points $B_n$ and $C_n$ are located on $\overline{AB_{n-1}}$ and $\overline{AC_{n-1}}$, respectively, creating three similar triangles $\triangle AB_nC_n \sim \triangle B_{n-1}C_nC_{n-1} \sim \triangle AB_{n-1}C_{n-1}$. The area of the union of all triangles $B_{n-1}C_nB_n$ for $n\geq1$ can be expressed as $\tfrac pq$, where $p$ and $q$ are relatively prime positive integers. Find $q$.
Solution

Using Heron's Formula we can get the area of the triangle $\Delta AB_0C_0 = 90$. Since $\Delta AB_0C_0 \sim \Delta B_0C_1C_0$ then the scale factor for the dimensions of $\Delta B_0C_1C_0$ to $\Delta AB_0C_0$ is $\frac{17}{25}.$ Therefore, the area of $\Delta B_0C_1C_0$ is $(\frac{17}{25})^2(90)$. Also, the dimensions of the other sides of the $\Delta B_0C_1C_0$ can be easily computed: $\overline{B_0C_1}= \frac{17}{25}(12)$ and $\overline{C_1C_0} = \frac{17^2}{25}$. This allows us to compute one side of the triangle $\Delta AB_0C_0$, $\overline{AC_1} = 25 - \frac{17^2}{25} = \frac{25^2 - 17^2}{25}$. Therefore, the scale factor $\Delta AB_1C_1$ to $\Delta AB_0C_0$ is $\frac{25^2 - 17^2}{25^2}$ , which yields the length of $\overline{B_1C_1}$ as $\frac{25^2 - 17^2}{25^2}(17)$. Therefore, the scale factor for $\Delta B_1C_2C_1$ to $\Delta B_0C_1C_0$ is $\frac{25^2 - 17^2}{25^2}$. Some more algebraic manipulation will show that $\Delta B_nC_{n+1}C_n$ to $\Delta B_{n-1}C_nC_{n-1}$ is still $\frac{25^2 - 17^2}{25^2}$. Also, since the triangles are disjoint, the area of the union is the sum of the areas. Therefore, the area is the geometric series $\frac{90 \cdot 17^2}{25^2} \sum_{n=0}^{\infty} (\frac{25^2-17^2}{25^2})^2$ At this point, it may be wise to "simplify" $25^2 - 17^2 = (25-17)(25+17) = (8)(42) = 336$. So the geometric series converges to $\frac{90 \cdot 17^2}{25^2} \frac{1}{1 - \frac{336^2}{625^2}} = \frac{90 \cdot 17^2}{25^2} \frac{625^2}{625^2 - 336^2}$. Using the diffference of squares, we get $\frac{90 \cdot 17^2}{25^2}\frac{625^2}{(625 - 336)(625 + 336)}$, which simplifies to $\frac{90 \cdot 17^2}{25^2} \frac{625^2}{(289)(961)}$. Cancellling all common factors, we get the reduced fraction $= \frac{90 \cdot 25^2}{31^2}$. So $\frac{p}{q}=1-\frac{90 \cdot 25^2}{31^2}=\frac{90 \cdot 336}{961}$, yielding the answer $\fbox{961}$.

<div align="center"><img src="http://wiki-images.artofproblemsolving.com/3/32/AIME13.png" height="200px" /></div>




2013 AIME I Problem 14

Problem 14

For $\pi \le \theta < 2\pi$, let

$\begin{align*} P &= \frac12\cos\theta - \frac14\sin 2\theta - \frac18\cos 3\theta + \frac{1}{16}\sin 4\theta + \frac{1}{32} \cos 5\theta - \frac{1}{64} \sin 6\theta - \frac{1}{128} \cos 7\theta + \cdots \end{align*}$

and

$\begin{align*} Q &= 1 - \frac12\sin\theta -\frac14\cos 2\theta + \frac18 \sin 3\theta + \frac{1}{16}\cos 4\theta - \frac{1}{32}\sin 5\theta - \frac{1}{64}\cos 6\theta +\frac{1}{128}\sin 7\theta + \cdots \end{align*}$

so that $\frac{P}{Q} = \frac{2\sqrt2}{7}$. Then $\sin\theta = -\frac{m}{n}$ where $m$ and $n$ are relatively prime positive integers. Find $m+n$.
Solution
Solution 1

$\begin{align*} P \sin\theta\ + Q \cos\theta\ = \cos\theta\ - \frac{1}{2}\ P\\ \end{align*}$ and $\begin{align*} P \cos\theta\ + Q \sin\theta\ = -2(Q-1)\\ \end{align*}$

Solving for P, Q we have


$\frac{P}{Q} = \frac{\cos\theta }{2 + \sin\theta } = \frac{2\sqrt2}{7}$

Square both side, and use polynomial rational root theorem to solve $\sin\theta$

$\sin\theta = -\frac{17}{19}$

The answer is $\boxed{036}$
Solution 2

Use sum to product formulas to rewrite $P$ and $Q$


$P \sin\theta\ + Q \cos\theta\ = \cos \theta\ - \frac{1}{4}\cos \theta + \frac{1}{8}\sin 2\theta + \frac{1}{16}\cos 3\theta - \frac{1}{32}\sin 4\theta + ...$

Therefore, $P \sin \theta - Q \cos \theta = -2P$

Using $\frac{P}{Q} = \frac{2\sqrt2}{7}, Q = \frac{7}{2\sqrt2} P$

Plug in to the previous equation and cancel out the "P" terms to get: $\sin\theta - \frac{7}{2\sqrt2} \cos\theta = -2$.

Then use the pythagorean identity to solve for $\sin\theta$, $\sin\theta = -\frac{17}{19} \implies \boxed{036}$
Solution 3

Note that $e^{i\theta}=\cos(\theta)+i\sin(\theta)$

Thus, the following identities follow immediately: $ie^{i\theta}=i(\cos(\theta)+i\sin(\theta))=-\sin(\theta)+i\cos(\theta)$ $i^2 e^{i\theta}=-e^{i\theta}=-\cos(\theta)-i\sin(\theta)$ $i^3 e^{i\theta}=\sin(\theta)-i\cos(\theta)$

Consider, now, the sum $Q+iP$. It follows fairly immediately that:

$Q+iP=1+\left(\frac{i}{2}\right)^1e^{i\theta}+\left(\frac{i}{2}\right)^2e^{2i\theta}+\ldots=\frac{1}{1-\frac{i}{2}e^{i\theta}}=\frac{2}{2-ie^{i\theta}}$ $Q+iP=\frac{2}{2-ie^{i\theta}}=\frac{2}{2-(-\sin(\theta)+i\cos(\theta))}=\frac{2}{(2+\sin(\theta))-i\cos(\theta)}$

This follows straight from the geometric series formula and simple simplification. We can now multiply the denominator by it's complex conjugate to find:

$Q+iP=\frac{2}{(2+\sin(\theta))-i\cos(\theta)}\left(\frac{(2+\sin(\theta))+i\cos(\theta)}{(2+\sin(\theta))+i\cos(\theta)}\right)$ $Q+iP=\frac{2((2+\sin(\theta))+i\cos(\theta))}{(2+\sin(\theta))^2+\cos^2(\theta)}$

Comparing real and imaginary parts, we find: $\frac{P}{Q}=\frac{\cos(\theta)}{2+\sin(\theta)}=\frac{2\sqrt{2}}{7}$

Squaring this equation and letting $\sin^2(\theta)=x$:

$\frac{P^2}{Q^2}=\frac{\cos^2(\theta)}{4+4\sin(\theta)+\sin^2(\theta)}=\frac{1-x^2}{4+4x+x^2}=\frac{8}{49}$

Clearing denominators and solving for $x$ gives sine as $x=-\frac{17}{19}$.

$017+019=\boxed{036}$
Solution 4

A bit similar to Solution 3. We use $\phi = \theta+90^\circ$ because the progression cycles in $P\in (\sin 0\theta,\cos 1\theta,-\sin 2\theta,-\cos 3\theta\dots)$. So we could rewrite that as $P\in(\sin 0\phi,\sin 1\phi,\sin 2\phi,\sin 3\phi\dots)$.

Similarly, $Q\in (\cos 0\theta,-\sin 1\theta,-\cos 2\theta,\sin 3\theta\dots)\implies Q\in(\cos 0\phi,\cos 1\phi, \cos 2\phi, \cos 3\phi\dots)$.

Setting complex $z=q_1+p_1i$, we get $z=\frac{1}{2}\left(\cos\phi+\sin\phi i\right)$

$(Q,P)=\sum_{n=0}^\infty z^n=\frac{1}{1-z}=\frac{1}{1-\frac{1}{2}\cos\phi-\frac{i}{2}\sin\phi}=\frac{1-0.5\cos\phi+0.5i\sin\phi}{\dots}$.

The important part is the ratio of the imaginary part $i$ to the real part. To cancel out the imaginary part from the denominator, we must add $0.5i\sin\phi$ to the numerator to make the denominator a difference (or rather a sum) of squares. The denominator does not matter. Only the numerator, because we are trying to find $\frac{P}{Q}=\tan\text{arg}(\Sigma)$ a PROPORTION of values. So denominators would cancel out.

$\frac{P}{Q}=\frac{\text{Re}\Sigma}{\text{Im}\Sigma}=\frac{0.5\sin\phi}{1-0.5\cos\phi}=\frac{\sin\phi}{2-\cos\phi}=\frac{2\sqrt{2}}{7}$.

Setting $\sin\theta=y$, we obtain $\frac{\sqrt{1-y^2}}{2+y}=\frac{2\sqrt{2}}{7}$ $7\sqrt{1-y^2}=2\sqrt{2}(2+y)$ $49-49y^2=8y^2+32y+32$ $57y^2+32y-17=0\rightarrow y=\frac{-32\pm\sqrt{1024+4\cdot 969}}{114}$ $y=\frac{-32\pm\sqrt{4900}}{114}=\frac{-16\pm 35}{57}$.

Since $y<0$ because $\pi<\theta<2\pi$, $y=\sin\theta=-\frac{51}{57}=-\frac{17}{19}$. Adding up, $17+19=\boxed{036}$.



2013 AIME I Problem 15
Problem 15

Let $N$ be the number of ordered triples $(A,B,C)$ of integers satisfying the conditions (a) $0\le A<B<C\le99$, (b) there exist integers $a$, $b$, and $c$, and prime $p$ where $0\le b<a<c<p$, (c) $p$ divides $A-a$, $B-b$, and $C-c$, and (d) each ordered triple $(A,B,C)$ and each ordered triple $(b,a,c)$ form arithmetic sequences. Find $N$.
Solution

From condition (d), we have $(A,B,C)=(B-D,B,B+D)$ and $(b,a,c)=(a-d,a,a+d)$. Condition $\text{(c)}$ states that $p\mid B-D-a$, $p|B-a+d$, and $p\mid B+D-a-d$. We subtract the first two to get $p\mid-d-D$, and we do the same for the last two to get $p\mid 2d-D$. We subtract these two to get $p\mid 3d$. So $p\mid 3$ or $p\mid d$. The second case is clearly impossible, because that would make $c=a+d>p$, violating condition $\text{(b)}$. So we have $p\mid 3$, meaning $p=3$. Condition $\text{(b)}$ implies that $(b,a,c)=(0,1,2)$ or $(a,b,c)\in (1,0,2)\rightarrow (-2,0,2)\text{ }(D\equiv 2\text{ mod 3})$. Now we return to condition $\text{(c)}$, which now implies that $(A,B,C)\equiv(-2,0,2)\mod{3}$. Now, we set $B=3k$ for increasing positive integer values of $k$. $B=0$ yields no solutions. $B=3$ gives $(A,B,C)=(1,3,5)$, giving us $1$ solution. If $B=6$, we get $2$ solutions, $(4,6,8)$ and $(1,6,11)$. Proceeding in the manner, we see that if $B=48$, we get 16 solutions. However, $B=51$ still gives $16$ solutions because $C_\text{max}=2B-1=101>100$. Likewise, $B=54$ gives $15$ solutions. This continues until $B=96$ gives one solution. $B=99$ gives no solution. Thus, $N=1+2+\cdots+16+16+15+\cdots+1=2\cdot\frac{16(17)}{2}=16\cdot 17=\boxed{272}$.




2013 AIME I Answer Key
1.	150
    2.200
    3.018
    4.429
    5.098
    6.047
    7.041
    8.371
    9.113
    10.080
    11.148
    12.021
    13.961
    14.036
    15.272

