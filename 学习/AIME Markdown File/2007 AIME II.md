# 2007 AIME II
2007 AIME II Problems/Problem 1
Problem

A mathematical organization is producing a set of commemorative license plates. Each plate contains a sequence of five characters chosen from the four letters in AIME and the four digits in $2007$. No character may appear in a sequence more times than it appears among the four letters in AIME or the four digits in $2007$. A set of plates in which each possible sequence appears exactly once contains $N$ license plates. Find $\frac{N}{10}$.
Solution

There are 7 different characters that can be picked, with 0 being the only number that can be repeated twice.

If $0$ appears 0 or 1 times amongst the sequence, there are $\frac{7!}{(7-5)!} = 2520$ sequences possible.
If $0$ appears twice in the sequence, there are ${5\choose2} = 10$ places to place the $0$s. There are $\frac{6!}{(6-3)!} = 120$ ways to place the remaining three characters. Totally, that gives us $10 \cdot 120 = 1200$.

Thus, $N = 2520 + 1200 = 3720$, and $\frac{N}{10} = 372$.


2007 AIME II Problems/Problem 2
Problem

Find the number of ordered triples $(a,b,c)$ where $a$, $b$, and $c$ are positive integers, $a$ is a factor of $b$, $a$ is a factor of $c$, and $a+b+c=100$.
Solution

Denote $x = \frac{b}{a}$ and $y = \frac{c}{a}$. The last condition reduces to $a(1 + x + y) = 100$. Therefore, $1 + x + y$ is equal to one of the 9 factors of $100 = 2^25^2$.

Subtracting the one, we see that $x + y = \{0,1,3,4,9,19,24,49,99\}$. There are exactly $n - 1$ ways to find pairs of $(x,y)$ if $x + y = n$. Thus, there are $0 + 0 + 2 + 3 + 8 + 18 + 23 + 48 + 98 = 200$ solutions of $(a,b,c)$.

Alternatively, note that the sum of the divisors of $100$ is $(1 + 2 + 2^2)(1 + 5 + 5^2)$ (notice that after distributing, every divisor is accounted for). This evaluates to $7 \cdot 31 = 217$. Subtract $9 \cdot 2$ for reasons noted above to get $199$. Finally, this changes $1 \Rightarrow -1$, so we have to add one to account for that. We get $200$.


2007 AIME II Problems/Problem 3
Problem

Square $ABCD$ has side length $13$, and points $E$ and $F$ are exterior to the square such that $BE=DF=5$ and $AE=CF=12$. Find $EF^{2}$. 

<div align=center><img src="http://latex.artofproblemsolving.com/c/a/f/cafdb94a2b1b9ade43e0c5225cb0329c449cd7b9.png" height="150px" /></div>


Solution
Solution 1

Extend $\overline{AE}, \overline{DF}$ and $\overline{BE}, \overline{CF}$ to their points of intersection. Since $\triangle ABE \cong \triangle CDF$ and are both $5-12-13$ right triangles, we can come to the conclusion that the two new triangles are also congruent to these two (use ASA, as we know all the sides are $13$ and the angles are mostly complementary). Thus, we create a square with sides $5 + 12 = 17$.

<div align=center><img src="http://latex.artofproblemsolving.com/c/d/7/cd75b0b5f2740c3766ea40dc5063e2381c70c247.png" height="150px" /></div>

$\overline{EF}$ is the diagonal of the square, with length $17\sqrt{2}$; the answer is $EF^2 = (17\sqrt{2})^2 = 578$.
Solution 2

A slightly more analytic/brute-force approach:

<div align=center><img src="http://wiki-images.artofproblemsolving.com/5/59/AIME_II_prob10_bruteforce.PNG" height="200px" /></div>

Drop perpendiculars from $E$ and $F$ to $I$ and $J$, respectively; construct right triangle $EKF$ with right angle at K and $EK || BC$. Since $2[CDF]=DF*CF=CD*JF$, we have $JF=5\times12/13 = \frac{60}{13}$. Similarly, $EI=\frac{60}{13}$. Since $\triangle DJF \sim \triangle DFC$, we have $DJ=\frac{5JF}{12}=\frac{25}{13}$.

Now, we see that $FK=DC-(DJ+IB)=DC-2DJ=13-\frac{50}{13}=\frac{119}{13}$. Also, $EK=BC+(JF+IE)=BC+2JF=13+\frac{120}{13}=\frac{289}{13}$. By the Pythagorean Theorem, we have $EF=\sqrt{\left(\frac{289}{13}\right)^2+\left(\frac{119}{13} \right)^2}=\frac{\sqrt{(17^2)(17^2+7^2)}}{13}$$=\frac{17\sqrt{338}}{13}=\frac{17(13\sqrt{2})}{13}=17\sqrt{2}$. Therefore, $EF^2=(17\sqrt{2})^2=578$.


2007 AIME II Problems/Problem 4
Problems

The workers in a factory produce widgets and whoosits. For each product, production time is constant and identical for all workers, but not necessarily equal for the two products. In one hour, $100$ workers can produce $300$ widgets and $200$ whoosits. In two hours, $60$ workers can produce $240$ widgets and $300$ whoosits. In three hours, $50$ workers can produce $150$ widgets and $m$ whoosits. Find $m$.
Solutions

Suppose that it takes $x$ hours for one worker to create one widget, and $y$ hours for one worker to create one whoosit.

Therefore, we can write that (note that two hours is similar to having twice the number of workers, and so on):

$100 = 300x + 200y$

$2(60) = 240x + 300y$

$3(50) = 150x + my$

Solve the system of equations with the first two equations to find that $(x,y) = \left(\frac{1}{7}, \frac{2}{7}\right)$. Substitute this into the third equation to find that $1050 = 150 + 2m$, so $m = \boxed{450}$.


2007 AIME II Problems/Problem 5
Problem

The graph of the equation $9x+223y=2007$ is drawn on graph paper with each square representing one unit in each direction. How many of the $1$ by $1$ graph paper squares have interiors lying entirely below the graph and entirely in the first quadrant?

Solution
Solution 1

There are $223 \cdot 9 = 2007$ squares in total formed by the rectangle with edges on the x and y axes and with vertices on the intercepts of the equation, since the intercepts of the lines are $(223,0),\ (0,9)$.

Count the number of squares that the diagonal of the rectangle passes through. Since the two diagonals of a rectangle are congruent, we can consider instead the diagonal $y = \frac{223}{9}x$. This passes through 8 horizontal lines ($y = 1 \ldots 8$) and 222 vertical lines ($x = 1 \ldots 222$). At every time we cross a line, we enter a new square. Since 9 and 223 are relatively prime, we don’t have to worry about crossing an intersection of a horizontal and vertical line at one time. We must also account for the first square. This means that it passes through $222 + 8 + 1 = 231$ squares.

The number of non-diagonal squares is $2007 - 231 = 1776$. Divide this in 2 to get the number of squares in one of the triangles, with the answer being $\frac{1776}2 = 888$.
Solution 2

Count the number of each squares in each row of the triangle. The intercepts of the line are $(223,0),\ (0,9)$.

In the top row, there clearly are no squares that can be formed. In the second row, we see that the line $y = 8$ gives a $x$ value of $\frac{2007 - 8(223)}{9} = 24 \frac 79$, which means that $\lfloor 24 \frac 79\rfloor = 24$ unit squares can fit in that row. In general, there are
$\sum_{i=0}^{8} \lfloor \frac{223i}{9} \rfloor$

triangles. Since $\lfloor \frac{223}{9} \rfloor = 24$, we see that there are more than $24(0 + 1 + \ldots + 8) = 24(\frac{8 \times 9}{2}) = 864$ triangles. Now, count the fractional parts. $\lfloor \frac{0}{9} \rfloor = 0, \lfloor \frac{7}{9} \rfloor = 0, \lfloor \frac{14}{9} \rfloor = 1,$ $\lfloor \frac{21}{9} \rfloor = 2, \lfloor \frac{28}{9} \rfloor = 3, \lfloor \frac{35}{9} \rfloor = 3,$ $\lfloor \frac{42}{9} \rfloor = 4, \lfloor \frac{49}{9} \rfloor = 5, \lfloor \frac{56}{9} \rfloor = 6$. Adding them up, we get $864 + 1 + 2 + 3 + 3 + 4 + 5 + 6 = 888$.
Solution 3

From Pick's Theorem, $\frac{2007}{2}=\frac{233}{2}-\frac{2}{2}+\frac{2I}{2}$. In other words, $2I=1776$ and I is $888$.
Solution 4

We know that the number of squares intersected in an $m\times{n}$ rectangle is $m + n -\mbox{gcd}(m,n)$. So if we apply that here, we get that the number of intersected squares is:

$9 + 223 - 1 = 231$.

Now just subtract that from the total number of squares and divide by 2, since we want the number of squares below the line.

So,

$\frac{2007 - 231}{2} = \frac{1776}{2} = \fbox{888}$


2007 AIME II Problems/Problem 6
Problem

An integer is called parity-monotonic if its decimal representation $a_{1}a_{2}a_{3}\cdots a_{k}$ satisfies $a_{i}<a_{i+1}$ if $a_{i}$ is odd, and $a_{i}>a_{i+1}$ if $a_{i}$ is even. How many four-digit parity-monotonic integers are there?
Solution

Let's set up a table of values. Notice that 0 and 9 both cannot appear as any of $a_1,\ a_2,\ a_3$ because of the given conditions. A clear pattern emerges.

For example, for $3$ in the second column, we note that $3$ is less than $4,6,8$, but greater than $1$, so there are four possible places to align $3$ as the second digit.
Digit   	1st   	2nd   	3rd   	4th
0 	0 	0 	0 	64
1 	1 	4 	16 	64
2 	1 	4 	16 	64
3 	1 	4 	16 	64
4 	1 	4 	16 	64
5 	1 	4 	16 	64
6 	1 	4 	16 	64
7 	1 	4 	16 	64
8 	1 	4 	16 	64
9 	0 	0 	0 	64

For any number from 1-8, there are exactly 4 numbers from 1-8 that are odd and less than the number or that are even and greater than the number (the same will happen for 0 and 9 in the last column). Thus, the answer is $4^{k-1} \cdot 10 = 4^3\cdot10 = 640$.


2007 AIME II Problems/Problem 7

Problem

Given a real number $x,$ let $\lfloor x \rfloor$ denote the greatest integer less than or equal to $x.$ For a certain integer $k,$ there are exactly $70$ positive integers $n_{1}, n_{2}, \ldots, n_{70}$ such that $k=\lfloor\sqrt[3]{n_{1}}\rfloor = \lfloor\sqrt[3]{n_{2}}\rfloor = \cdots = \lfloor\sqrt[3]{n_{70}}\rfloor$ and $k$ divides $n_{i}$ for all $i$ such that $1 \leq i \leq 70.$

Find the maximum value of $\frac{n_{i}}{k}$ for $1\leq i \leq 70.$
Solution
Solution 1

For $x = 1$, we see that $\sqrt[3]{1} \ldots \sqrt[3]{7}$ all work, giving 7 integers. For $x=2$, we see that in $\sqrt[3]{8} \ldots \sqrt[3]{26}$, all of the even numbers work, giving 10 integers. For $x = 3$, we get 13, and so on. We can predict that at $x = 22$ we get 70.

To prove this, note that all of the numbers from $\sqrt[3]{x^3} \ldots \sqrt[3]{(x+1)^3 - 1}$ divisible by $x$ work. Thus, $\frac{(x+1)^3 - 1 - x^3}{x} + 1 = \frac{3x^2 + 3x + 1 - 1}{x} + 1 = 3x + 4$ (the one to be inclusive) integers will fit the conditions. $3k + 4 = 70 \Longrightarrow k = 22$.

The maximum value of $n_i = (x + 1)^3 - 1$. Therefore, the solution is $\frac{23^3 - 1}{22} = \frac{(23 - 1)(23^2 + 23 + 1)}{22} = 529 + 23 + 1 = 553$.
Solution 2

Obviously $k$ is positive. Then, we can let $n_1$ equal $k^3$ and similarly let $n_i$ equal $k^3 + (i - 1)k$.

The wording of this problem (which uses "exactly") tells us that $k^3+69k<(k+1)^3 = k^3 + 3k^2 + 3k+1 \leq k^3+70k$. Taking away $k^3$ from our inequality results in $69k<3k^2+3k+1\leq 70k$. Since $69k$, $3k^2+3k+1$, and $70k$ are all integers, this inequality is equivalent to $69k\leq 3k^2+3k<70k$. Since $k$ is positive, we can divide the inequality by $k$ to get $69 \leq 3k+3 < 70$. Clearly the only $k$ that satisfies is $k=22$.

Then, $\frac{n_{70}}{k}=k^2+69=484+69=\boxed{553}$ is the maximum value of $\frac{n_i}{k}$. (Remember we set $n_i$ equal to $k^3 + (i - 1)k$!)


2007 AIME II Problems/Problem 8
Problem

A rectangular piece of paper measures 4 units by 5 units. Several lines are drawn parallel to the edges of the paper. A rectangle determined by the intersections of some of these lines is called basic if

(i) all four sides of the rectangle are segments of drawn line segments, and 
(ii) no segments of drawn lines lie inside the rectangle.

Given that the total length of all lines drawn is exactly 2007 units, let $N$ be the maximum possible number of basic rectangles determined. Find the remainder when $N$ is divided by 1000.

Solution
Solution 1

Denote the number of horizontal lines as $x$, and the number of vertical lines as $y$. The number of basic rectangles is $(x - 1)(y - 1)$. $5x + 4y = 2007 \Longrightarrow y = \frac{2007 - 5x}{4}$. Substituting, we find that $(x - 1)\left(-\frac 54x + \frac{2003}4\right)$.

FOIL this to get a quadratic, $-\frac 54x^2 + 502x - \frac{2003}4$. Use $\frac{-b}{2a}$ to find the maximum possible value of the quadratic: $x = \frac{-502}{-2 \cdot \frac 54} = \frac{1004}5 \approx 201$. However, this gives a non-integral answer for $y$. The closest two values that work are $(199,253)$ and $(203,248)$.

We see that $252 \cdot 198 = 49896 > 202 \cdot 247 = 49894$. The solution is $896$.
Solution 2

We realize that drawing $x$ vertical lines and $y$ horizontal lines, the number of basic rectangles we have is $(x-1)(y-1)$. The easiest possible case to see is $223$ vertical and $223$ horizontal lines, as $(4+5)223 = 2007$. Now, for every 4 vertical lines you take away, you can add 5 horizontal lines, so you basically have the equation $(222-4x)(222+5x)$ maximize.

Expanded, this gives $-20x^{2}+222x+222^{2}$. From $-\frac{b}{2a}$ you get that the vertex is at $x=\frac{111}{20}$. This is not an integer though, so you see that when $x=5$, you have $-20*25+222*5+222^{2}$ and that when x=6, you have $-20*36+222*6+222^{2}$. $222 > 20*11$, so the maximum integral value for x occurs when $x=6$. Now you just evaluate $-20*36+222*6+222^{2}\mod 1000$ which is ${896}$.


2007 AIME II Problems/Problem 9

Problem

Rectangle $ABCD$ is given with $AB=63$ and $BC=448.$ Points $E$ and $F$ lie on $AD$ and $BC$ respectively, such that $AE=CF=84.$ The inscribed circle of triangle $BEF$ is tangent to $EF$ at point $P,$ and the inscribed circle of triangle $DEF$ is tangent to $EF$ at point $Q.$ Find $PQ.$
Solution

<div align=center><img src="http://wiki-images.artofproblemsolving.com/f/ff/2007_AIME_II-9.png" height="50px" /></div>

Solution 1

Several Pythagorean triples exist amongst the numbers given. $BE = DF = \sqrt{63^2 + 84^2} = 21\sqrt{3^2 + 4^2} = 105$. Also, the length of $EF = \sqrt{63^2 + (448 - 2\cdot84)^2} = 7\sqrt{9^2 + 40^2} = 287$.

Use the Two Tangent Theorem on $\triangle BEF$. Since both circles are inscribed in congruent triangles, they are congruent; therefore, $EP = FQ = \frac{287 - PQ}{2}$. By the Two Tangent theorem, note that $EP = EX = \frac{287 - PQ}{2}$, making $BX = 105 - EX = 105 - \left[\frac{287 - PQ}{2}\right]$. Also, $BX = BY$. $FY = 364 - BY = 364 - \left[105 - \left[\frac{287 - PQ}{2}\right]\right]$.

Finally, $FP = FY = 364 - \left[105 - \left[\frac{287 - PQ}{2}\right]\right] = \frac{805 - PQ}{2}$. Also, $FP = FQ + PQ = \frac{287 - PQ}{2} + PQ$. Equating, we see that $\frac{805 - PQ}{2} = \frac{287 + PQ}{2}$, so $PQ = \boxed{259}$.
Solution 2

By the Two Tangent Theorem, we have that $FY = PQ + QF$. Solve for $PQ = FY - QF$. Also, $QF = EP = EX$, so $PQ = FY - EX$. Since $BX = BY$, this can become $PQ = FY - EX + (BY - BX)$$= \left(FY + BY\right) - \left(EX + BX\right) = FB - EB$. Substituting in their values, the answer is $364 - 105 = 259$.
Solution 3

Call the incenter of $\triangle BEF$ $O_1$ and the incenter of $\triangle DFE$ $O_2$. Draw triangles $\triangle O_1PQ,\triangle PQO_2$.

Drawing $BE$, We find that $BE = \sqrt {63^2 + 84^2} = 105$. Applying the same thing for $F$, we find that $FD = 105$ as well. Draw a line through $E,F$ parallel to the sides of the rectangle, to intersect the opposite side at $E_1,F_1$ respectively. Drawing $\triangle EE_1F$ and $FF_1E$, we can find that $EF = \sqrt {63^2 + 280^2} = 287$. We then use Heron's formula to get:

$[BEF] = [DEF] = 11 466$.

So the inradius of the triangle-type things is $\frac {637}{21}$.

Now, we just have to find $O_1Q = O_2P$, which can be done with simple subtraction, and then we can use the Pythagorean Theorem to find $PQ$.

This article is a stub. Help us out by expanding it.


2007 AIME II Problems/Problem 10

Problem

Let $S$ be a set with six elements. Let $P$ be the set of all subsets of $S.$ Subsets $A$ and $B$ of $S$, not necessarily distinct, are chosen independently and at random from $P$. The probability that $B$ is contained in at least one of $A$ or $S-A$ is $\frac{m}{n^{r}},$ where $m$, $n$, and $r$ are positive integers, $n$ is prime, and $m$ and $n$ are relatively prime. Find $m+n+r.$ (The set $S-A$ is the set of all elements of $S$ which are not in $A.$)
Solution 1

Use casework:

$B$ has 6 elements:

Probability: $\frac{1}{2^6} = \frac{1}{64}$

$A$ must have either 0 or 6 elements, probability: $\frac{2}{2^6} = \frac{2}{64}$.
$B$ has 5 elements:

Probability: ${6\choose5}/64 = \frac{6}{64}$

$A$ must have either 0, 6, or 1, 5 elements. The total probability is $\frac{2}{64} + \frac{2}{64} = \frac{4}{64}$. 
$B$ has 4 elements:

Probability: ${6\choose4}/64 = \frac{15}{64}$

$A$ must have either 0, 6; 1, 5; or 2,4 elements. If there are 1 or 5 elements, the set which contains 5 elements must have four emcompassing $B$ and a fifth element out of the remaining $2$ numbers. The total probability is $\frac{2}{64}\left({2\choose0} + {2\choose1} + {2\choose2}\right) = \frac{2}{64} + \frac{4}{64} + \frac{2}{64} = \frac{8}{64}$.

We could just continue our casework. In general, the probability of picking B with $n$ elements is $\frac{{6\choose n}}{64}$. Since the sum of the elements in the $k$th row of Pascal's Triangle is $2^k$, the probability of obtaining $A$ or $S-A$ which encompasses $B$ is $\frac{2^{7-n}}{64}$. In addition, we must count for when $B$ is the empty set (probability: $\frac{1}{64}$), of which all sets of $A$ will work (probability: $1$).

Thus, the solution we are looking for is $\left(\sum_{i=1}^6 \frac{{6\choose i}}{64} \cdot \frac{2^{7-i}}{64}\right) + \frac{1}{64} \cdot \frac{64}{64}$ $=\frac{(1)(64)+(6)(64)+(15)(32)+(20)(16)+(15)(8)+(6)(4)+(1)(2)}{(64)(64)}$ $=\frac{1394}{2^{12}}$ $=\frac{697}{2^{11}}$.

The answer is $697 + 2 + 11 = 710$.
Solution 2

we need $B$ to be a subset of $A$ or $S-A$ we can divide each element of $S$ into 4 categories:

it is in $A$ and $B$
it is in $A$ but not in $B$
it is not in $A$ but is in $B$
or it is not in $A$ and not in $B$

these can be denoted as $+A+B$, $+A-B$,$-A+B$, and $-A-B$

we note that if all of the elements are in $+A+B$, $+A-B$ or $-A-B$ we have that $B$ is a subset of $A$ which can happen in $\frac{3^6}{4^6}$ ways

similarly if the elements are in $+A-B$,$-A+B$, or $-A-B$ we have that $B$ is a subset of $S-A$ which can happen in $\frac{3^6}{4^6}$ ways as well

but we need to make sure we don't over-count ways that are in both sets these are when $+A-B$ or $-A-B$ which can happen in $\frac{2^6}{4^6}$ ways so our probability is $\frac{2\cdot 3^6-2^6}{4^6}= \frac{3^6-2^5}{2^{11}}=\frac{697}{2^{11}}$.

so the final answer is $697 + 2 + 11 = 710$.


2007 AIME II Problems/Problem 11
Problem

Two long cylindrical tubes of the same length but different diameters lie parallel to each other on a flat surface. The larger tube has radius $72$ and rolls along the surface toward the smaller tube, which has radius $24$. It rolls over the smaller tube and continues rolling along the flat surface until it comes to rest on the same point of its circumference as it started, having made one complete revolution. If the smaller tube never moves, and the rolling occurs with no slipping, the larger tube ends up a distance $x$ from where it starts. The distance $x$ can be expressed in the form $a\pi+b\sqrt{c},$ where $a,$ $b,$ and $c$ are integers and $c$ is not divisible by the square of any prime. Find $a+b+c.$
Solution

<div align=center><img src="http://wiki-images.artofproblemsolving.com/8/87/2007_AIME_II-11.png" height="150px" /></div>

If it weren’t for the small tube, the larger tube would travel $144\pi$. Consider the distance from which the larger tube first contacts the smaller tube, until when it completely loses contact with the smaller tube.

Drawing the radii as shown in the diagram, notice that the hypotenuse of the right triangle in the diagram has a length of $72 + 24 = 96$. The horizontal line divides the radius of the larger circle into $72 - 24 = 48$ on the top half, which indicates that the right triangle has leg of 48 and hypotenuse of 96, a $30-60-90 \triangle$.

Find the length of the purple arc in the diagram (the distance the tube rolled, but not the horizontal distance). The sixty degree central angle indicates to take $\frac{60}{360} = \frac 16$ of the circumference of the larger circle (twice), while the $180 - 2(30) = 120^{\circ}$ central angle in the smaller circle indicates to take $\frac{120}{360} = \frac 13$ of the circumference. This adds up to $2 \cdot \frac 16 144\pi + \frac 13 48\pi = 64\pi$.

The actual horizontal distance it takes can be found by using the $30-60-90 \triangle$s. The missing leg is equal in length to $48\sqrt{3}$. Thus, the total horizontal distance covered is $96\sqrt{3}$.

Thus, we get $144\pi - 64\pi + 96\sqrt{3} = 80\pi + 96\sqrt{3}$, and our answer is $179$.


2007 AIME II Problems/Problem 12
Problem

The increasing geometric sequence $x_{0},x_{1},x_{2},\ldots$ consists entirely of integral powers of $3.$ Given that

$\sum_{n=0}^{7}\log_{3}(x_{n}) = 308$ and $56 \leq \log_{3}\left ( \sum_{n=0}^{7}x_{n}\right ) \leq 57,$

find $\log_{3}(x_{14}).$
Solution

Suppose that $x_0 = a$, and that the common ratio between the terms is $r$.


The first conditions tells us that $\log_3 a + \log_3 ar + \ldots + \log_3 ar^7 = 308$. Using the rules of logarithms, we can simplify that to $\log_3 a^8r^{1 + 2 + \ldots + 7} = 308$. Thus, $a^8r^{28} = 3^{308}$. Since all of the terms of the geometric sequence are integral powers of $3$, we know that both $a$ and $r$ must be powers of 3. Denote $3^x = a$ and $3^y = r$. We find that $8x + 28y = 308$. The possible positive integral pairs of $(x,y)$ are $(35,1),\ (28,3),\ (21,5),\ (14,7),\ (7,9),\ (0,11)$.


The second condition tells us that $56 \le \log_3 (a + ar + \ldots ar^7) \le 57$. Using the sum formula for a geometric series and substituting $x$ and $y$, this simplifies to $3^{56} \le 3^x \frac{3^{8y} - 1}{3^y-1} \le 3^{57}$. The fractional part $\approx \frac{3^{8y}}{3^y} = 3^{7y}$. Thus, we need $\approx 56 \le x + 7y \le 57$. Checking the pairs above, only $(21,5)$ is close.


Our solution is therefore $\log_3 (ar^{14}) = \log_3 3^x + \log_3 3^{14y} = x + 14y = \boxed{091}$.


2007 AIME II Problems/Problem 13
Problem

A triangular array of squares has one square in the first row, two in the second, and in general, $k$ squares in the $k$th row for $1 \leq k \leq 11.$ With the exception of the bottom row, each square rests on two squares in the row immediately below (illustrated in given diagram). In each square of the eleventh row, a $0$ or a $1$ is placed. Numbers are then placed into the other squares, with the entry for each square being the sum of the entries in the two squares below it. For how many initial distributions of $0$'s and $1$'s in the bottom row is the number in the top square a multiple of $3$?

<div align=center><img src="http://wiki-images.artofproblemsolving.com/3/39/2007_AIME_II-13.png" height="200px" /></div>

Solution

Label each of the bottom squares as $x_0, x_1 \ldots x_9, x_{10}$.

Through induction, we can find that the top square is equal to ${10\choose0}x_0 + {10\choose1}x_1 + {10\choose2}x_2 + \ldots {10\choose10}x_{10}$. (This also makes sense based on a combinatorial argument: the number of ways a number can "travel" to the top position going only up is equal to the number of times it will be counted in the final sum.)

Examine the equation $\mod 3$. All of the coefficients from $x_2 \ldots x_8$ will be multiples of $3$ (since the numerator will have a $9$). Thus, the expression boils down to $x_0 + 10x_1 + 10x_9 + x_{10} \equiv 0 \mod 3$. Reduce to find that $x_0 + x_1 + x_9 + x_{10} \equiv 0 \mod 3$. Out of $x_0,\ x_1,\ x_9,\ x_{10}$, either all are equal to $0$, or three of them are equal to $1$. This gives ${4\choose0} + {4\choose3} = 1 + 4 = 5$ possible combinations of numbers that work.

The seven terms from $x_2 \ldots x_8$ can assume either $0$ or $1$, giving us $2^7$ possibilities. The answer is therefore $5 \cdot 2^7 = \boxed{640}$.


2007 AIME II Problems/Problem 14
Problem

Let $f(x)$ be a polynomial with real coefficients such that $f(0) = 1,$ $f(2)+f(3)=125,$ and for all $x$, $f(x)f(2x^{2})=f(2x^{3}+x).$ Find $f(5).$
Solution

Let $r$ be a root of $f(x)$. Then we have $f(r)f(2r^2)=f(2r^3+r)$; since $r$ is a root, we have $f(r)=0$; therefore $2r^3+r$ is also a root. Thus, if $r$ is real and non-zero, $|2r^3+r|>r$, so $f(x)$ has infinitely many roots. Since $f(x)$ is a polynomial (thus of finite degree) and $f(0)$ is nonzero, $f(x)$ has no real roots.

Note that $f(x)$ is not constant. We then find two complex roots: $r = \pm i$. We find that $f(i)f(-2) = f(-i)$, and that $f(-i)f(-2) = f(i)$. This means that $f(i)f(-i)f(-2)^2 = f(i)f(-i) \Longrightarrow f(i)f(-i)(f(-2)^2 - 1) = 0$. Thus, $\pm i$ are roots of the polynomial, and so $(x - i)(x + i) = x^2 + 1$ will be a factor of the polynomial. (Note: This requires the assumption that $f(-2)\neq1$. Clearly, $f(-2)\neq-1$, because that would imply the existence of a real root.)

The polynomial is thus in the form of $f(x) = (x^2 + 1)g(x)$. Substituting into the given expression, we have

$(x^2+1)g(x)(4x^4+1)g(2x^2)=((2x^3+x)^2+1)g(2x^3+x)$ $(4x^6+4x^4+x^2+1)g(x)g(2x^2)=(4x^6+4x^4+x^2+1)g(2x^3+x)$

Thus either $4x^6+4x^4+x^2+1=(4x^4+1)(x^2+1)$ is 0 for any $x$, or $g(x)$ satisfies the same constraints as $f(x)$. Continuing, by infinite descent, $f(x) = (x^2 + 1)^n$ for some $n$.

Since $f(2)+f(3)=125=5^n+10^n$ for some $n$, we have $n=2$; so $f(5) = 676$.


Comment: The answer is clearly correct, but the proof has a gap, i.e. there is no reason that $f(-2)\neq1$. Since $f(x)$ has no real roots, the degree must be even. Consider $g(x)= f(x)/f(-x)$. Then since $f$ is non-zero, $g(x)=g(2x^3+x)$. Now the function $2x^3+x$ applied repeatedly from some real starting value of x becomes arbitrarily large, and the limit of $g(x)$ as $|x|$ approaches infinity is 1, so $g(x)$=1 for all x, or $f(x)=f(-x)$. Then $f(x)=h(x^2+1)$ for some polynomial $h(x)$, and $h(x^2+1)h(4x^4+1)=h(4x^6+4x^4+x^2+1) = h((x^2+1)(4x^4+1))$. Now suppose h has degree m. It is clearly monic. Assume that the next highest non-zero coefficient in h is k. Then, subtracting $((x^2+1)(4x^4+1))^n$ from both sides of the equation yields a polynomial equality with degree $4m+2k$ on the left and degree $6k$ on the right, a contradiction. So $h(x)=x^m$, and $f(x)=(1+x^2)^m$.


2007 AIME II Problems/Problem 15
Problem

Four circles $\omega,$ $\omega_{A},$ $\omega_{B},$ and $\omega_{C}$ with the same radius are drawn in the interior of triangle $ABC$ such that $\omega_{A}$ is tangent to sides $AB$ and $AC$, $\omega_{B}$ to $BC$ and $BA$, $\omega_{C}$ to $CA$ and $CB$, and $\omega$ is externally tangent to $\omega_{A},$ $\omega_{B},$ and $\omega_{C}$. If the sides of triangle $ABC$ are $13,$ $14,$ and $15,$ the radius of $\omega$ can be represented in the form $\frac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m+n.$

Solution

<div align=center><img src="http://wiki-images.artofproblemsolving.com/2/23/2007_AIME_II-15.png" height="150px" /></div>

Solution 1

First, apply Heron's formula to find that the area is $\sqrt{21 \cdot 8 \cdot 7 \cdot 6} = 84$. Also the semiperimeter is $21$. So the inradius is $\frac{A}{s} = \frac{84}{21} = 4$.

Now consider the incenter I. Let the radius of one of the small circles be $r$. Let the centers of the three little circles tangent to the sides of $\triangle ABC$ be $X$, $Y$, and $Z$. Let the centre of the circle tangent to those three circles be P. A homothety centered at $I$ takes $XYZ$ to $ABC$ with factor $\frac{4 - r}{4}$. The same homothety takes $P$ to the circumcentre of $\triangle ABC$, so $\frac{PX}R = \frac{2r}R = \frac{4 - r}4$, where $R$ is the circumradius of $\triangle ABC$. The circumradius of $\triangle ABC$ can be easily computed by $R = \frac a{2\sin A}$, so doing that reveals $R = \frac{65}8$. Then $\frac{2r}{\frac{65}{8}} = \frac{(4-r)}4 \Longrightarrow \frac{16r}{65} = \frac{4 - r}4 \Longrightarrow \frac{129r}{260} = 1 \Longrightarrow r = \frac{260}{129}$, so the answer is $389$.
Solution 2

<div align=center><img src="http://wiki-images.artofproblemsolving.com/6/63/2007_AIME_II-15b.gif" height="150px" /></div>

Consider a 13-14-15 triangle. $A=84.$ [By Heron's Formula or by 5-12-13 and 9-12-15 right triangles.]

The inradius is $r=\frac{A}{s}=\frac{84}{21}=4$, where $s$ is the semiperimeter. Scale the triangle with the inradius by a linear scale factor, $u.$

The circumradius is $R=\frac{abc}{4rs}=\frac{13\cdot 14\cdot 15}{4\cdot 4\cdot 21}=\frac{65}{8},$ where $a,$ $b,$ and $c$ are the side-lengths. Scale the triangle with the circumradius by a linear scale factor, $v$.

Cut and combine the triangles, as shown. Then solve for 4u:

$\frac{65}{8}v=8u$

$v=\frac{64}{65}u$

$u+v=1$

$u+\frac{64}{65}u=1$

$\frac{129}{65}u=1$

$4u=\frac{260}{129}$

The solution is $260+129=389$.

2007 AIME II Answer Key
1.	372
    2.200
    3.578
    4.450
    5.888
    6.640
    7.553
    8.896
    9.259
    10.710
    11.179
    12.091
    13.640
    14.676
    15.389

