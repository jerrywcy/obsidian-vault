# 2001 AIME II

## 2001 AIME II Problem 1

Let $N$ be the largest positive integer with the following property: reading from left to right, each pair of consecutive digits of $N$ forms a perfect square. What are the leftmost three digits of $N$?
Solution

The two-digit perfect squares are $16, 25, 36, 49, 64, 81$. We try making a sequence starting with each one:

$16 - 64 - 49$. This terminates since none of them end in a $9$, giving us $1649$.
$25$.
$36 - 64 - 49$, $3649$.
$49$.
$64 - 49$, $649$.
$81 - 16 - 64 - 49$, $81649$.

The largest is $81649$, so our answer is $\boxed{816}$.


## 2001 AIME II Problem 2

Each of the $2001$ students at a high school studies either Spanish or French, and some study both. The number who study Spanish is between $80$ percent and $85$ percent of the school population, and the number who study French is between $30$ percent and $40$ percent. Let $m$ be the smallest number of students who could study both languages, and let $M$ be the largest number of students who could study both languages. Find $M-m$.
Solution

Let $S$ be the percent of people who study Spanish, $F$ be the number of people who study French, and let $S \cup F$ be the number of students who study both. Then $\left\lceil 80\% \cdot 2001 \right\rceil = 1601 \le S \le \left\lfloor 85\% \cdot 2001 \right\rfloor = 1700$, and $\left\lceil 30\% \cdot 2001 \right\rceil = 601 \le F \le \left\lfloor 40\% \cdot 2001 \right\rfloor = 800$. By the Principle of Inclusion-Exclusion,

$S+F- S \cap F = S \cup F = 2001$

For $m = S \cap F$ to be smallest, $S$ and $F$ must be minimized.

$1601 + 601 - m = 2001 \Longrightarrow m = 201$

For $M = S \cap F$ to be largest, $S$ and $F$ must be maximized.

$1700 + 800 - M = 2001 \Longrightarrow M = 499$

Therefore, the answer is $M - m = 499 - 201 = \boxed{298}$.


## 2001 AIME II Problem 3

Given that

$\begin{align*}x_{1}&=211,\\ x_{2}&=375,\\ x_{3}&=420,\\ x_{4}&=523,\ \text{and}\\ x_{n}&=x_{n-1}-x_{n-2}+x_{n-3}-x_{n-4}\ \text{when}\ n\geq5, \end{align*}$

find the value of $x_{531}+x_{753}+x_{975}$.
Solution

We find that $x_5 = 267$ by the recursive formula. Summing the recursions

$\begin{align*} x_{n}&=x_{n-1}-x_{n-2}+x_{n-3}-x_{n-4} \\ x_{n-1}&=x_{n-2}-x_{n-3}+x_{n-4}-x_{n-5} \end{align*}$

yields $x_{n} = -x_{n-5}$. 

Thus $x_n = (-1)^k x_{n-5k}$. Since $531 = 106 \cdot 5 + 1,\ 753 = 150 \cdot 5 + 3,\ 975 = 194 \cdot 5 + 5$, 

it follows that

$x_{531} + x_{753} + x_{975} = (-1)^{106} x_1 + (-1)^{150} x_3 + (-1)^{194} x_5 = 211 + 420 + 267 = \boxed{898}.$


## 2001 AIME II Problem 4

Let $R = (8,6)$. The lines whose equations are $8y = 15x$ and $10y = 3x$ contain points $P$ and $Q$, respectively, such that $R$ is the midpoint of $\overline{PQ}$. The length of $PQ$ equals $\frac {m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m + n$.
Solution

<div align=center><img src="http://latex.artofproblemsolving.com/9/7/f/97f7b283e5b032415f83e3964b09dce0c599a9bc.png" height="150px" /></div>

The coordinates of $P$ can be written as $\left(a, \frac{15a}8\right)$ and the coordinates of point $Q$ can be written as $\left(b,\frac{3b}{10}\right)$. By the midpoint formula, we have $\frac{a+b}2=8$ and $\frac{15a}{16}+\frac{3b}{20}=6$. Solving for $b$ gives $b= \frac{80}{7}$, so the point $Q$ is $\left(\frac{80}7, \frac{24}7\right)$. The answer is twice the distance from $Q$ to $(8,6)$, which by the distance formula is $\frac{60}{7}$. Thus, the answer is $\boxed{067}$.


## 2001 AIME II Problem 5

A set of positive numbers has the triangle property if it has three distinct elements that are the lengths of the sides of a triangle whose area is positive. Consider sets $\{4, 5, 6, \ldots, n\}$ of consecutive positive integers, all of whose ten-element subsets have the triangle property. What is the largest possible value of $n$?
Solution

Out of all ten-element subsets with distinct elements that do not possess the triangle property, we want to find the one with the smallest maximum element. Call this subset $\mathcal{S}$. Without loss of generality, consider any $a, b, c \,\in \mathcal{S}$ with $a < b < c$. $\,\mathcal{S}$ does not possess the triangle property, so $c \geq a + b$. We use this property to build up $\mathcal{S}$ from the smallest possible $a$ and $b$:

$\mathcal{S} = \{\, 4,\, 5,\, 4+5, \,5+(4+5),\, \ldots\,\} = \{4, 5, 9, 14, 23, 37, 60, 97, 157, 254\}$

$\mathcal{S}$ is the "smallest" ten-element subset without the triangle property, and since the set $\{4, 5, 6, \ldots, 253\}$ is the largest set of consecutive integers that does not contain this subset, it is also the largest set of consecutive integers in which all ten-element subsets possess the triangle property. Thus, our answer is $n = \fbox{253}$.


## 2001 AIME II Problem 6

Square $ABCD$ is inscribed in a circle. Square $EFGH$ has vertices $E$ and $F$ on $\overline{CD}$ and vertices $G$ and $H$ on the circle. The ratio of the area of square $EFGH$ to the area of square $ABCD$ can be expressed as $\frac {m}{n}$ where $m$ and $n$ are relatively prime positive integers and $m < n$. Find $10n + m$.
Solution

Let $O$ be the center of the circle, and $2a$ be the side length of $ABCD$, $2b$ be the side length of $EFGH$. By the Pythagorean Theorem, the radius of $\odot O = OC = a\sqrt{2}$.

<div align=center><img src="http://latex.artofproblemsolving.com/a/1/4/a14d609f4250e7310e06648a5d575443252da2bb.png" height="150px" /></div>

Now consider right triangle $OGI$, where $I$ is the midpoint of $\overline{GH}$. Then, by the Pythagorean Theorem,

$\begin{align*} OG^2 = 2a^2 &= OI^2 + GI^2 = (a+2b)^2 + b^2 \\ 0 &= a^2 - 4ab - 5b^2 = (a - 5b)(a + b) \end{align*}$

Thus $a = 5b$ (since lengths are positive, we discard the other root). The ratio of the areas of two similar figures is the square of the ratio of their corresponding side lengths, so $\frac{[EFGH]}{[ABCD]} = \left(\frac 15\right)^2 = \frac{1}{25}$, and the answer is $10n + m = \boxed{251}$.

Another way to proceed from $0 = a^2 - 4ab - 5b^2$ is to note that $\frac{b}{a}$ is the quantity we need; thus, we divide by $a^2$ to get

$0 = 1 - 4\left(\frac{b}{a}\right) - 5\left(\frac{b}{a}\right)^2$ This is a quadratic in $\frac{b}{a}$, and solving it gives $\frac{b}{a} = \frac{1}{5},-1$. The negative solution is extraneous, and so the ratio of the areas is $\left(\frac{1}{5}\right)^2 = \frac{1}{25}$ and the answer is $10\cdot 25 + 1 = \boxed{251}$.


## 2001 AIME II Problem 7

Let $\triangle{PQR}$ be a right triangle with $PQ = 90$, $PR = 120$, and $QR = 150$. Let $C_{1}$ be the inscribed circle. Construct $\overline{ST}$ with $S$ on $\overline{PR}$ and $T$ on $\overline{QR}$, such that $\overline{ST}$ is perpendicular to $\overline{PR}$ and tangent to $C_{1}$. Construct $\overline{UV}$ with $U$ on $\overline{PQ}$ and $V$ on $\overline{QR}$ such that $\overline{UV}$ is perpendicular to $\overline{PQ}$ and tangent to $C_{1}$. Let $C_{2}$ be the inscribed circle of $\triangle{RST}$ and $C_{3}$ the inscribed circle of $\triangle{QUV}$. The distance between the centers of $C_{2}$ and $C_{3}$ can be written as $\sqrt {10n}$. What is $n$?

Solution
Solution 1 (analytic)

<div align=center><img src="http://latex.artofproblemsolving.com/c/e/3/ce3f5916c09a4de9f57dae8e8db8b9a7638ae242.png" height="150px" /></div>

Let $P = (0,0)$ be at the origin. Using the formula $A = rs$ on $\triangle PQR$, where $r_{1}$ is the inradius (similarly define $r_2, r_3$ to be the radii of $C_2, C_3$), $s = \frac{PQ + QR + RP}{2} = 180$ is the semiperimeter, and $A = \frac 12 bh = 5400$ is the area, we find $r_{1} = \frac As = 30$. Or, the inradius could be directly by using the formula $\frac{a+b-c}{2}$, where $a$ and $b$ are the legs of the right triangle and $c$ is the hypotenuse. (This formula should be used only for right triangles.) Thus $ST, UV$ lie respectively on the lines $y = 60, x = 60$, and so $RS = 60, UQ = 30$.

Note that $\triangle PQR \sim \triangle STR \sim \triangle UQV$. Since the ratio of corresponding lengths of similar figures are the same, we have

$\frac{r_{1}}{PR} = \frac{r_{2}}{RS} \Longrightarrow r_{2} = 15\ \text{and} \ \frac{r_{1}}{PQ} = \frac{r_{3}}{UQ} \Longrightarrow r_{3} = 10.$

Let the centers of $\odot C_2, C_3$ be $O_2 = (0 + r_{2}, 60 + r_{2}) = (15, 75), O_3 = (60 + r_{3}, 0 + r_{3}) = (70,10)$, respectively; then by the distance formula we have $O_2O_3 = \sqrt{55^2 + 65^2} = \sqrt{10 \cdot 725}$. Therefore, the answer is $n = \boxed{725}$.
Solution 2 (synthetic)

<div align=center><img src="http://latex.artofproblemsolving.com/5/e/2/5e2fbf2e8f2ca6c823bafce3f6042ee372dfa534.png" height="150px" /></div>

We compute $r_1 = 30, r_2 = 15, r_3 = 10$ as above. Let $A_1, A_2, A_3$ respectively the points of tangency of $C_1, C_2, C_3$ with $QR$.

By the Two Tangent Theorem, we find that $A_{1}Q = 60$, $A_{1}R = 90$. Using the similar triangles, $RA_{2} = 45$, $QA_{3} = 20$, so $A_{2}A_{3} = QR - RA_2 - QA_3 = 85$. Thus $(O_{2}O_{3})^{2} = (15 - 10)^{2} + (85)^{2} = 7250\implies n=\boxed{725}$.


## 2001 AIME II Problem 8

A certain function $f$ has the properties that $f(3x) = 3f(x)$ for all positive real values of $x$, and that $f(x) = 1-|x-2|$ for $1\le x \le 3$. Find the smallest $x$ for which $f(x) = f(2001)$.
Solution

Iterating the condition $f(3x) = 3f(x)$, we find that $f(x) = 3^kf\left(\frac{x}{3^k}\right)$ for positive integers $k$. We know the definition of $f(x)$ from $1 \le x \le 3$, so we would like to express $f(2001) = 3^kf\left(\frac{2001}{3^k}\right),\ 1 \le \frac{2001}{3^k} \le 3 \Longrightarrow k = 6$. Indeed,

$f(2001) = 729\left[1 - \left| \frac{2001}{729} - 2\right|\right] = 186.$

We now need the smallest $x$ such that $f(x) = 3^kf\left(\frac{x}{3^k}\right) = 186$. 

The range of $f(x),\ 1 \le x \le 3$, is $0 \le f(x) \le 1$. So when $1 \le \frac{x}{3^k} \le 3$, 

we have $0 \le f\left(\frac{x}{3^k}\right) = \frac{186}{3^k} \le 1$. 

Multiplying by $3^k$: $0 \le 186 \le 3^k$, so the smallest value of $k$ is $k = 5$. Then,

$186 = {3^5}f\left(\frac{x}{3^5}\right).$

Because we forced $1 \le \frac{x}{3^5} \le 3$, so

$186 = {3^5}f\left(\frac{x}{3^5}\right) = 243\left[1 - \left| \frac{x}{243} - 2\right|\right] \Longrightarrow x = \pm 57 + 2 \cdot 243.$

We want the smaller value of $x = \boxed{429}$.

An alternative approach is to consider the graph of $f(x)$, which iterates every power of $3$, and resembles the section from $1 \le x \le 3$ dilated by a factor of $3$ at each iteration.


## 2001 AIME II Problem 9

Each unit square of a 3-by-3 unit-square grid is to be colored either blue or red. For each square, either color is equally likely to be used. The probability of obtaining a grid that does not have a 2-by-2 red square is $\frac {m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m + n$.
Solution

We can use complementary counting, counting all of the colorings that have at least one red $2\times 2$ square.

For at least one red $2 \times 2$ square:

There are four $2 \times 2$ squares to choose which one will be red. Then there are $2^5$ ways to color the rest of the squares. $4*32=128$

For at least two $2 \times 2$ squares:

There are two cases: those with two red squares on one side and those without red squares on one side.
The first case is easy: 4 ways to choose which the side the squares will be on, and $2^3$ ways to color the rest of the squares, so 32 ways to do that. For the second case, there will by only two ways to pick two squares, and $2^2$ ways to color the other squares. $32+8=40$

For at least three $2 \times 2$ squares:

Choosing three such squares leaves only one square left, with four places to place it. This is $2 \cdot 4 = 8$ ways.

For at least four $2 \times 2$ squares, we clearly only have one way.

By the Principle of Inclusion-Exclusion, there are (alternatively subtracting and adding) $128-40+8-1=95$ ways to have at least one red $2 \times 2$ square.

There are $2^9=512$ ways to paint the $3 \times 3$ square with no restrictions, so there are $512-95=417$ ways to paint the square with the restriction. Therefore, the probability of obtaining a grid that does not have a $2 \times 2$ red square is $\frac{417}{512}$, and $417+512=\boxed{929}$.


## 2001 AIME II Problem 10

How many positive integer multiples of $1001$ can be expressed in the form $10^{j} - 10^{i}$, where $i$ and $j$ are integers and $0\leq i < j \leq 99$?
Solution

The prime factorization of $1001 = 7\times 11\times 13$. We have $7\times 11\times 13\times k = 10^j - 10^i = 10^i(10^{j - i} - 1)$. Since $\text{gcd}\,(10^i = 2^i \times 5^i, 3 \times 7 \times 13) = 1$, we require that $1001 = 10^3 + 1 | 10^{j-i} - 1$. From the factorization $10^6 - 1 = (10^3 + 1)(10^{3} - 1)$, we see that $j-i = 6$ works; also, $a-b | a^n - b^n$ implies that $10^{6} - 1 | 10^{6k} - 1$, and so any $\boxed{j-i \equiv 0 \mod{6}}$ will work.

To show that no other possibilities work, suppose $j-i \equiv a \mod{6},\ 1 \le a \le 5$, and let $j-i-a = 6k$. Then we can write $10^{j-i} - 1 = 10^{a} (10^{6k} - 1) + (10^{a} - 1)$, and we can easily verify that $10^6 - 1 \nmid 10^a - 1$ for $1 \le a \le 5$.

If $j - i = 6, j\leq 99$, then we can have solutions of $10^6 - 10^0, 10^7 - 10^1, \dots\implies 94$ ways. If $j - i = 12$, we can have the solutions of $10^{12} - 10^{0},\dots\implies 94 - 6 = 88$, and so forth. Therefore, the answer is $94 + 88 + 82 + \dots + 4\implies 16\left(\frac{98}{2}\right) = \boxed{784}$.


## 2001 AIME II Problem 11

Club Truncator is in a soccer league with six other teams, each of which it plays once. In any of its 6 matches, the probabilities that Club Truncator will win, lose, or tie are each $\frac {1}{3}$. The probability that Club Truncator will finish the season with more wins than losses is $\frac {m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m + n$.
Solution

Note that the probability that Club Truncator will have more wins than losses is equal to the probability that it will have more losses than wins; the only other possibility is that they have the same number of wins and losses. Thus, by the complement principle, the desired probability is half the probability that Club Truncator does not have the same number of wins and losses.

The possible ways to achieve the same number of wins and losses are $0$ ties, $3$ wins and $3$ losses; $2$ ties, $2$ wins, and $2$ losses; $4$ ties, $1$ win, and $1$ loss; or $6$ ties. Since there are $6$ games, there are $\frac{6!}{3!3!}$ ways for the first, and $\frac{6!}{2!2!2!}$, $\frac{6!}{4!}$, and $1$ ways for the rest, respectively, out of a total of $3^6$. This gives a probability of $141/729$. Then the desired answer is $\frac{1 - \frac{141}{729}}{2} = \frac{98}{243}$, so the answer is $m+n = \boxed{341}$.


## 2001 AIME II Problem 12

Given a triangle, its midpoint triangle is obtained by joining the midpoints of its sides. A sequence of polyhedra $P_{i}$ is defined recursively as follows: $P_{0}$ is a regular tetrahedron whose volume is 1. To obtain $P_{i + 1}$, replace the midpoint triangle of every face of $P_{i}$ by an outward-pointing regular tetrahedron that has the midpoint triangle as a face. The volume of $P_{3}$ is $\frac {m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m + n$.
Solution

On the first construction, $P_1$, four new tetrahedra will be constructed with side lengths $\frac 12$ of the original one. Since the ratio of the volume of similar polygons is the cube of the ratio of their corresponding lengths, it follows that each of these new tetrahedra will have volume $\left(\frac 12\right)^3 = \frac 18$. The total volume added here is then $\Delta P_1 = 4 \cdot \frac 18 = \frac 12$.

We now note that for each midpoint triangle we construct in step $P_{i}$, there are now $6$ places to construct new midpoint triangles for step $P_{i+1}$. The outward tetrahedron for the midpoint triangle provides $3$ of the faces, while the three equilateral triangles surrounding the midpoint triangle provide the other $3$. However, the volume of the tetrahedra being constructed decrease by a factor of $\frac 18$. Thus we have the recursion $\Delta P_{i+1} = \frac{6}{8} \Delta P_i$, and so $\Delta P_i = \frac 12 \cdot \left(\frac{3}{4}\right)^{i-1} P_1$.

The volume of $P_3 = P_0 + \Delta P_1 + \Delta P_2 + \Delta P_3 = 1 + \frac 12 + \frac 38 + \frac 9{32} = \frac{69}{32}$, and $m+n=\boxed{101}$. Note that the summation was in fact a geometric series.


## 2001 AIME II Problem 13

In quadrilateral $ABCD$, $\angle{BAD}\cong\angle{ADC}$ and $\angle{ABD}\cong\angle{BCD}$, $AB = 8$, $BD = 10$, and $BC = 6$. The length $CD$ may be written in the form $\frac {m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m + n$.
Solution

Extend $\overline{AD}$ and $\overline{BC}$ to meet at $E$. Then, since $\angle BAD = \angle ADC$ and $\angle ABD = \angle DCE$, we know that $\triangle ABD \sim \triangle DCE$. Hence $\angle ADB = \angle DEC$, and $\triangle BDE$ is isosceles. Then $BD = BE = 10$.

<div align=center><img src="http://latex.artofproblemsolving.com/4/1/7/417316517e7273e0d7f31dbbae8e0b80e30a8d54.png" height="250px" /></div>

Using the similarity, we have:

$\frac{AB}{BD} = \frac 8{10} = \frac{CD}{CE} = \frac{CD}{16} \Longrightarrow CD = \frac{64}5$

The answer is $m+n = \boxed{069}$.


Extension: To Find $AD$, use Law of Cosines on $\triangle BCD$ to get $\cos(\angle BCD)=\frac{13}{20}$ Then since $\angle BCD=\angle ABD$ use Law of Cosines on $\triangle ABD$ to find $AD=2\sqrt{15}$


## 2001 AIME II Problem 14

There are $2n$ complex numbers that satisfy both $z^{28} - z^{8} - 1 = 0$ and $\mid z \mid = 1$. These numbers have the form $z_{m} = \cos\theta_{m} + i\sin\theta_{m}$, where $0\leq\theta_{1} < \theta_{2} < \ldots < \theta_{2n} < 360$ and angles are measured in degrees. Find the value of $\theta_{2} + \theta_{4} + \ldots + \theta_{2n}$.

Solution

$z$ can be written in the form $\text{cis\,}\theta$. Rearranging, we find that $\text{cis\,}{28}\theta = \text{cis\,}{8}\theta+1$

Since the real part of $\text{cis\,}{28}\theta$ is one more than the real part of $\text{cis\,} {8}\theta$ and their imaginary parts are equal, it is clear that either $\text{cis\,}{28}\theta = \frac{1}{2}+\frac {\sqrt{3}}{2}i$ and $\text{cis\,} {8}\theta = -\frac{1}{2}+\frac {\sqrt{3}}{2}i$, or $\text{cis\,}{28}\theta = \frac{1}{2} - \frac{\sqrt{3}}{2}i$ and $\text{cis\,} {8}\theta = -\frac{1}{2}- \frac{\sqrt{3}}{2}i$

Case 1  : $\text{cis\,}{28}\theta = \frac{1}{2}+ \frac{\sqrt{3}}{2}i$ and $\text{cis\,} {8}\theta = -\frac{1}{2}+\frac{\sqrt{3}}{2}i$

Setting up and solving equations, $Z^{28}= \text{cis\,}{60^\circ}$ and $Z^8= \text{cis\,}{120^\circ}$, we see that the solutions common to both equations have arguments $15^\circ , 105^\circ, 195^\circ,$ and $\ 285^\circ$

Case 2  : $\text{cis\,}{28}\theta = \frac{1}{2} -\frac {\sqrt{3}}{2}i$ and $\text{cis\,} {8}\theta = -\frac {1}{2} -\frac{\sqrt{3}}{2}i$

Again setting up equations ($Z^{28}= \text{cis\,}{300^\circ}$ and $Z^{8} = \text{cis\,}{240^\circ}$) we see that the common solutions have arguments of $75^\circ, 165^\circ, 255^\circ,$ and $345^\circ$

Listing all of these values, we find that $\theta_{2} + \theta_{4} + \ldots + \theta_{2n}$ is equal to $(75 + 165 + 255 + 345) ^\circ$ which is equal to $\boxed {840}$ degrees


## 2001 AIME II Problem 15

Let $EFGH$, $EFDC$, and $EHBC$ be three adjacent square faces of a cube, for which $EC = 8$, and let $A$ be the eighth vertex of the cube. Let $I$, $J$, and $K$, be the points on $\overline{EF}$, $\overline{EH}$, and $\overline{EC}$, respectively, so that $EI = EJ = EK = 2$. A solid $S$ is obtained by drilling a tunnel through the cube. The sides of the tunnel are planes parallel to $\overline{AE}$, and containing the edges, $\overline{IJ}$, $\overline{JK}$, and $\overline{KI}$. The surface area of $S$, including the walls of the tunnel, is $m + n\sqrt {p}$, where $m$, $n$, and $p$ are positive integers and $p$ is not divisible by the square of any prime. Find $m + n + p$.
Solution

<div align=center><img src="http://latex.artofproblemsolving.com/4/1/4/4149e9121b6bad141b8f2860b3c45b17cd77c9a1.png" height="150px" /></div>

<div align=center><img src="http://latex.artofproblemsolving.com/c/6/f/c6f7e4ede0c4d7cc77c040c58a09164295de9135.png" height="150px" /></div>

Set the coordinate system so that vertex $E$, where the drilling starts, is at $(8,8,8)$. Using a little visualization (involving some similar triangles, because we have parallel lines) shows that the tunnel meets the bottom face (the xy plane one) in the line segments joining $(1,0,0)$ to $(2,2,0)$, and $(0,1,0)$ to $(2,2,0)$, and similarly for the other three faces meeting at the origin (by symmetry). So one face of the tunnel is the polygon with vertices (in that order), $S(1,0,0), T(2,0,2), U(8,6,8), V(8,8,6), W(2,2,0)$, and the other two faces of the tunnel are congruent to this shape.

Observe that this shape is made up of two congruent trapezoids each with height $\sqrt {2}$ and bases $7\sqrt {3}$ and $6\sqrt {3}$. Together they make up an area of $\sqrt {2}(7\sqrt {3} + 6\sqrt {3}) = 13\sqrt {6}$. The total area of the tunnel is then $3\cdot13\sqrt {6} = 39\sqrt {6}$. Around the corner $E$ we're missing an area of $6$, the same goes for the corner opposite $E$ . So the outside area is $6\cdot 64 - 2\cdot 6 = 372$. Thus the the total surface area is $372 + 39\sqrt {6}$, and the answer is $372 + 39 + 6 = \boxed{417}$.

**2001 AIME II Answer Key**

1. 816
2. 298
3. 898
4. 067
5. 253
6. 251
7. 725
8. 429
9. 929
10. 784
11. 341
12. 101
13. 069
14. 840
15. 417

 