# 2017 AIME I Problems

##Problem 1
Fifteen distinct points are designated on $\triangle ABC$: the 3 vertices $A$, $B$, and $C$; $3$ other points on side $\overline{AB}$; $4$ other points on side $\overline{BC}$; and $5$ other points on side $\overline{CA}$. Find the number of triangles with positive area whose vertices are among these $15$ points.

Solution
Every triangle is uniquely determined by 3 points. There are $\binom{15}{3}=455$ ways to choose 3 points, but that counts the degenerate triangles formed by choosing three points on a line. There are $\binom{5}{3}$ invalid cases on segment $AB$, $\binom{6}{3}$ invalid cases on segment $BC$, and $\binom{7}{3}$ invalid cases on segment $CA$ for a total of $65$ invalid cases. The answer is thus $455-65=\boxed{390}$.

##Problem 2
When each of $702$, $787$, and $855$ is divided by the positive integer $m$, the remainder is always the positive integer $r$. When each of $412$, $722$, and $815$ is divided by the positive integer $n$, the remainder is always the positive integer $s \neq r$. Find $m+n+r+s$.

Solution
Let's tackle the first part of the problem first. We can safely assume: $702 = xm + r$$787 = ym + r$$855 = zm + r$ Now, if we subtract two values: $787-702 = 85 = 17\cdot5$ which also equals $(ym+r)-(xm+r) = m\cdot(y-x)$ Similarly, $855-787 = 68 = 17\cdot4; (zm+r)-(ym+r) = m\cdot(z-y)$ Since $17$ is the only common factor, we can assume that $m=17$, and through simple division, that $r=5$.

Using the same method on the second half: $412 = an + s$$722 = bn + s$$815 = cn + s$ Then. $722-412 = 310 = 31\cdot10; (bn+s)-(an+s) = n\cdot(b-a)$$815-722 = 93 = 31\cdot3; (cn+s)-(bn+s) = n\cdot(c-b)$ The common factor is $31$, so $n=31$ and through division, $s=9$.

The answer is $m+n+r+s = 17+31+5+9 = \boxed{062}$

##Problem 3
For a positive integer $n$, let $d_n$ be the units digit of $1 + 2 + \dots + n$. Find the remainder when $\sum_{n=1}^{2017} d_n$is divided by $1000$.

Solution
We see that $d(n)$ appears in cycles of $20$, adding a total of $70$ each cycle. Since $\left\lfloor\frac{2017}{20}\right\rfloor=100$, we know that by $2017$, there have been $100$ cycles, or $7000$ has been added. This can be discarded, as we're just looking for the last three digits. Adding up the first $17$ of the cycle of $20$, we get that the answer is $\boxed{069}$.

##Problem 4
A pyramid has a triangular base with side lengths $20$, $20$, and $24$. The three edges of the pyramid from the three corners of the base to the fourth vertex of the pyramid all have length $25$. The volume of the pyramid is $m\sqrt{n}$, where $m$ and $n$ are positive integers, and $n$ is not divisible by the square of any prime. Find $m+n$.

Solution
Let the triangular base be $\triangle ABC$, with $\overline {AB} = 24$. We find that the altitude to side $\overline {AB}$ is $16$, so the area of $\triangle ABC$ is $(24*16)/2 = 192$.

Let the fourth vertex of the tetrahedron be $P$, and let the midpoint of $\overline {AB}$ be $M$. Since $P$ is equidistant from $A$, $B$, and $C$, the line through $P$ perpendicular to the plane of $\triangle ABC$ will pass through the circumcenter of $\triangle ABC$, which we will call $O$. Note that $O$ is equidistant from each of $A$, $B$, and $C$. Then,

$\overline {OM} + \overline {OC} = \overline {CM} = 16$
Let $\overline {OM} = d$. Equation $(1)$: $d + \sqrt {d^2 + 144} = 16$
Squaring both sides, we have

$d^2 + 144 + 2d\sqrt {d^2+144} + d^2 = 256$
$2d^2 + 2d\sqrt {d^2+144} = 112$
$2d(d + \sqrt {d^2+144}) = 112$
Substituting with equation $(1)$:

$2d(16) = 112$
$d = 7/2$
We now find that $\sqrt{d^2 + 144} = 25/2$.

Let the distance $\overline {OP} = h$. Using the Pythagorean Theorem on triangle $AOP$, $BOP$, or $COP$ (all three are congruent by SSS):

$25^2 = h^2 + (25/2)^2$
$625 = h^2 + 625/4$
$1875/4 = h^2$
$25\sqrt {3} / 2 = h$

Finally, by the formula for volume of a pyramid,

$V = Bh/3$
$V = (192)(25\sqrt{3}/2)/3$ This simplifies to $V = 800\sqrt {3}$, so $m+n = \boxed {803}$.

Solution by Zeroman

##Problem 5
A rational number written in base eight is $\underline{ab} . \underline{cd}$, where all digits are nonzero. The same number in base twelve is $\underline{bb} . \underline{ba}$. Find the base-ten number $\underline{abc}$.

Solution 1
First, note that the first two digits will always be a positive number. We will start with base twelve because of its repetition. List all the positive numbers in base twelve that have equal twelves and ones digits in base 8.

$11_{12}=15_8$

$22_{12}=32_8$

$33_{12}=47_8$

$44_{12}=64_8$

$55_{12}=101_8$

We stop because we only can have two-digit numbers in base 8 and 101 is not a 2 digit number. Compare the ones places to check if they are equal. We find that they are equal if $b=2$ or $b=4$. Evaluating the places to the right side of the decimal point gives us $22.23_{12}$ or $44.46_{12}$. When the numbers are converted into base 8, we get $32.14_8$ and $64.30_8$. Since $d\neq0$, the first value is correct. Compiling the necessary digits leaves us a final answer of $\boxed{321} QED \blacksquare$

Solution by User:a1b2

Solution 2
The parts before and after the decimal points must be equal. Therefore $8a + b = 12b + b$ and $c/8 + d/64 = b/12 + a/144$. Simplifying the first equation gives $a = 3/2b$. Plugging this into the second equation gives $3b/32 = c/8 + d/64$. Multiplying both sides by 64 gives $6b = 8c + d$.  $a$ and $b$ are both digits between 1 and 7 (they must be a single non-zero digit in base eight) so using $a = 3/2b$, $(a,b) = (3,2)$ or $(6,4)$. Testing these gives that $(6,4)$ doesn't work, and $(3,2)$ gives $a = 3, b = 2, c = 1$, and $d = 4$. Therefore $abc = \boxed{321}$

##Problem 6
A circle is circumscribed around an isosceles triangle whose two congruent angles have degree measure $x$. Two points are chosen independently and uniformly at random on the circle, and a chord is drawn between them. The probability that the chord intersects the triangle is $\frac{14}{25}$. Find the difference between the largest and smallest possible values of $x$.

Solution
The probability that the chord doesn't intersect the triangle is $\frac{11}{25}$. The only way this can happen is if the two points are chosen on the same arc between two of the triangle vertices. The probability that a point is chosen on one of the arcs opposite one of the base angles is $\frac{x}{180}$, and the probability that a point is chosen on the arc between the two base angles is $\frac{180-2x}{180}$. Therefore, we can write $2\left(\frac{x}{180}\right)^2+\left(\frac{180-2x}{180}\right)^2=\frac{11}{25}$ This simplifies to $x^2-120x+3024=0$ Which factors as $(x-84)(x-36)=0$ So $x=84, 36$. The difference between these is $\boxed{048}$.

##Problem 7
For nonnegative integers $a$ and $b$ with  $a + b \leq 6$, let $T(a, b) = \binom{6}{a} \binom{6}{b} \binom{6}{a + b}$. Let $S$ denote the sum of all $T(a, b)$, where  $a$ and $b$ are nonnegative integers with $a + b \leq 6$. Find the remainder when $S$ is divided by $1000$.

Solution
Let $c=6-(a+b)$, and note that $\binom{6}{a + b}=\binom{6}{c}$. The problem thus asks for the sum $\binom{6}{a} \binom{6}{b} \binom{6}{c}$ over all $a,b,c$ such that $a+b+c=6$. Consider an array of 18 dots, with 3 columns of 6 dots each. The desired expression counts the total number of ways to select 6 dots by considering each column separately. However, this must be equal to $\binom{18}{6}=18564$. Therefore, the answer is $\boxed{564}$.

-rocketscience


Solution 2 (Major Bash)
Case 1: $a<b$.

Subcase 1: $a=0$ $\binom{6}{0}\binom{6}{1}\binom{6}{1}=36$$\binom{6}{0}\binom{6}{2}\binom{6}{2}=225$$\binom{6}{0}\binom{6}{3}\binom{6}{3}=400$$\binom{6}{0}\binom{6}{4}\binom{6}{4}=225$$\binom{6}{0}\binom{6}{5}\binom{6}{5}=36$$\binom{6}{0}\binom{6}{6}\binom{6}{6}=1$$36+225+400+225+36+1=923$ Subcase 2: $a=1$ $\binom{6}{1}\binom{6}{2}\binom{6}{3}=1800 \equiv 800 \mod {1000}$$\binom{6}{1}\binom{6}{3}\binom{6}{4}=1800 \equiv 800 \mod {1000}$$\binom{6}{1}\binom{6}{4}\binom{6}{5}=540$$\binom{6}{1}\binom{6}{5}\binom{6}{6}=36$$800+800+540+36=2176 \equiv 176 \mod {1000}$ Subcase 3: $a=2$ $\binom{6}{2}\binom{6}{3}\binom{6}{5}=1800\equiv800\mod{1000}$$\binom{6}{2}\binom{6}{4}\binom{6}{6}=225$$800+225=1025\equiv25\mod{1000}$

$923+176+25=1124\equiv124\mod{1000}$
Case 2: $b<a$

By just switching $a$ and $b$ in all of the above cases, we will get all of the cases such that $b>a$ is true. Therefore, this case is also $124\mod{1000}$

Case 3: $a=b$ $\binom{6}{0}\binom{6}{0}\binom{6}{0}=1$$\binom{6}{1}\binom{6}{1}\binom{6}{2}=540$$\binom{6}{2}\binom{6}{2}\binom{6}{4}=3375\equiv375\mod{1000}$$\binom{6}{3}\binom{6}{3}\binom{6}{6}=400$$1+540+375+400=1316\equiv316\mod{1000}$

$316+124+124=\boxed{564}$

Solution 3
Treating $a+b$ as $n$, this problem asks for:

$\sum_{n=0}^{6}(\binom{6}{n}*\sum_{m=0}^{n}(\binom{6}{m}*\binom{6}{n-m}))$

But,  $\sum_{m=0}^{n} (\binom{6}{m} * \binom{6}{n-m})$ can be seen as the following combinatorial argument:

Choosing $n$ elements from a set of size $12$ is the same as splitting the set into two sets of size $6$ and choosing $m$ elements from one, $n-m$ from the other where $0$ <= $m$ <= $n$ .

Thus, such a procedure is simply $\binom{12}{n}$.

Therefore, our answer is  $\sum_{n=0}^{6} (\binom{6}{n} * \binom{12}{n}) = 18564$. As such, our answer is $\boxed{564}$.

##Problem 8
Two real numbers $a$ and $b$ are chosen independently and uniformly at random from the interval $(0, 75)$. Let $O$ and $P$ be two points on the plane with $OP = 200$. Let $Q$ and $R$ be on the same side of line $OP$ such that the degree measures of $\angle POQ$ and $\angle POR$ are $a$ and $b$ respectively, and $\angle OQP$ and $\angle ORP$ are both right angles. The probability that $QR \leq 100$ is equal to $\frac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m + n$.

Solution 1
Noting that $\angle OQP$ and $\angle ORP$ are right angles, we realize that we can draw a semicircle with diameter $\overline{OP}$ and points $Q$ and $R$ on the semicircle. Since the radius of the semicircle is $100$, if $\overline{QR} \leq 100$, then $\overset{\frown}{QR}$ must be less than or equal to $60^{\circ}$.

This simplifies the problem greatly. Since the degree measure of an angle on a circle is simply half the degree measure of its subtended arc, the problem is simply asking:

Given $a, b$ such that $0<a, b<75$, what is the probability that $|a-b| \leq 30$? Through simple geometric probability, we get that $P = \frac{16}{25}$.

The answer is $16+25=\boxed{041}$

~IYN~

Solution 2 (Trig Bash)
Put $\triangle POQ$ and $\triangle POR$ with $O$ on the origin and the triangles on the $1^{st}$ quadrant. The coordinates of $Q$ and $P$ is $(200 \cos^{2}a,200 \cos a\sin a )$, $(200\cos^{2}b,200\cos(b)\sin b)$. So $PQ^{2}$ = $(200 \cos^{2} a - 200 \cos^{2} b)^{2} +(200 \cos a \sin a - 200 \cos b \sin b)^{2}$, which we want to be less then $100^{2}$. So $(200 \cos^{2} a - 200 \cos^{2} b)^{2} +(200 \cos a \sin a - 200 \cos b \sin b)^{2} <= 100^{2}$ $(\cos^{2} a - \cos^{2} b)^{2} +(\cos a \sin a - \cos b \sin b)^{2} \le \frac{1}{4}$$\cos^{4} a + \cos^{4} b - 2\cos^{2} a \cos^{2} b +\cos^{2}a \sin^{2} a + \cos^{2} b \sin^{2} b - 2 \cos a \sin a \cos b \sin b \le \frac{1}{4}$$\cos^{2} a(\cos^{2} a + \sin^{2} a)+\cos^{2} b(cos^{2} b+sin^{2} b) - 2\cos^{2} a \cos^{2} b- 2 \cos a \sin a \cos b \sin b \le \frac{1}{4}$$\cos^{2} a(1-\cos^{2} b)+\cos^{2} b(1-cos^{2} a) - 2 \cos a \sin a \cos b \sin b \le \frac{1}{4}$$(\cos a\sin b)^{2} +(\cos b\sin a)^{2} - 2 (\cos a \sin b)(\cos b \sin a)\le \frac{1}{4}$$(\cos a\sin b-\cos b\sin a)^{2}\le \frac{1}{4}$$\sin^{2} (b-a) \le \frac{1}{4}$ So we want $-\frac{1}{2} \le \sin (b-a) \le \frac{1}{2}$, which is equivalent to $-30 \le b-a \le 30$ or $150 \le b-a \le 210$. The second inequality is impossible so we only consider what the first inequality does to our $75$ by $75$ box in the $ab$ plane. This cuts off two isosceles right triangles from opposite corners with side lengths $45$ from the $75$ by $75$ box. Hence the probability is $1-\frac{45^2}{75^2} = 1- \frac{9}{25}=\frac{16}{25}$ and the answer is $16+25 = \boxed{41}$

##Problem 9
Let $a_{10} = 10$, and for each integer $n >10$ let $a_n = 100a_{n - 1} + n$. Find the least $n > 10$ such that $a_n$ is a multiple of $99$.

Solution 1
Writing out the recursive statement for $a_n, a_{n-1}, \dots, a_{10}$ and summing them gives $a_n+\dots+a_{10}=100(a_{n-1}+\dots+a_{10})+n+\dots+10$ Which simplifies to $a_n=99(a_{n-1}+\dots+a_{10})+\frac{1}{2}(n+10)(n-9)$ Therefore, $a_n$ is divisible by 99 if and only if $\frac{1}{2}(n+10)(n-9)$ is divisible by 99, so $(n+10)(n-9)$ needs to be divisible by 9 and 11. Assume that $n+10$ is a multiple of 11. Writing out a few terms, $n=12, 23, 34, 45$, we see that $n=45$ is the smallest $n$ that works in this case. Next, assume that $n-9$ is a multiple of 11. Writing out a few terms, $n=20, 31, 42, 53$, we see that $n=53$ is the smallest $n$ that works in this case. The smallest $n$ is $\boxed{045}$.

Solution 2
$a_n \equiv a_{n-1} + n \mod {99}$ By looking at the first few terms, we can see that $a_n \equiv 10+11+12+ \dots + n \mod {99}$ This implies $a_n \equiv \frac{n(n+1)}{2} - \frac{10*9}{2} \mod {99}$ Since $a_n \equiv 0 \mod {99}$, we can rewrite the equivalence, and simplify $0 \equiv \frac{n(n+1)}{2} - \frac{10*9}{2} \mod {99}$$0 \equiv n(n+1) - 90 \mod {99}$$0 \equiv 4n^2+4n+36 \mod {99}$$0 \equiv (2n+1)^2+35 \mod {99}$$64 \equiv (2n+1)^2 \mod {99}$ The only squares that are congruent to $64 \mod {99}$ are $(\pm 8)^2$ and $(\pm 19)^2$, so $2n+1 \equiv -8, 8, 19, \text{or } {-19} \mod {99}$$2n+1 \equiv -8 \mod {99}$ yields $n=45$ as the smallest integer solution.

$2n+1 \equiv 8 \mod {99}$ yields $n=53$ as the smallest integer solution.

$2n+1 \equiv -19 \mod {99}$ yields $n=89$ as the smallest integer solution.

$2n+1 \equiv 19 \mod {99}$ yields $n=9$ as the smallest integer solution. However, $n$ must be greater than $10$.

The smallest positive integer solution greater than $10$ is $n=\boxed{045}$.

Solution 3
$a_n=a_{n-1} + n \mod{99}$. Using the steps of the previous solution we get up to $n^2+n \equiv 90 \mod{99}$. This gives away the fact that $(n)(n+1) \equiv 0 \mod{9} \implies n \equiv \{0, 8\} \mod{9}$ so either $n$ or $n+1$ must be a multiple of 9.

Case 1 ($n|9$): Say $n=9x$ and after simplification $x(9x+1) = 10 \mod{90} \forall x \in \mathbb{Z}$.

Case 2: ($n+1|9$): Say $n=9a-1$ and after simplification $(9a-1)(a) = 10 \mod{90} \forall a \in \mathbb{Z}$.

As a result $a$ must be a divisor of $10$ and after doing some testing in both cases the smallest value that works is $x=5 \implies \boxed{045}$.

##Problem 10
Let $z_1=18+83i,~z_2=18+39i,$ and $z_3=78+99i,$ where $i=\sqrt{-1}.$ Let $z$ be the unique complex number with the properties that $\frac{z_3-z_1}{z_2-z_1}~\cdot~\frac{z-z_2}{z-z_3}$ is a real number and the imaginary part of $z$ is the greatest possible. Find the real part of $z$.

Solution
(This solution's quality may be very poor. If one feels that the solution is inadequate, one may choose to improve it.)

Let us write $\frac{z_3 - z_1}{z_2 - z_1}$ be some imaginary number with form $r_1 (\cos \theta_1 + i \sin \theta_1).$ Similarly, we can write $\frac{z-z_2}{z-z_3}$ as some $r_2 (\cos \theta_2 + i \sin \theta_2).$

The product must be real, so we have that $r_1 r_2 (\cos \theta_1 + i \sin \theta_1) (\cos \theta_2 + i \sin \theta_2)$ is real. Of this, $r_1 r_2$ must be real, so the imaginary parts only arise from the second part of the product. Thus we have

$(\cos \theta_1 + i \sin \theta_1) (\cos \theta_2 + i \sin \theta_2) = \cos \theta_1 \cos \theta_2 - \sin \theta_1 \sin \theta_2 + i(\cos \theta_1 \sin \theta_2 + \cos \theta_2 \sin \theta_1)$
is real. The imaginary part of this is $(\cos \theta_1 \sin \theta_2 + \cos \theta_2 \sin \theta_1),$ which we recognize as $\sin(\theta_1 + \theta_2).$ This is only $0$ when $\theta_1 + \theta_2$ is some multiple of $\pi.$ In this problem, this implies $z_1, z_2, z_3$ and $z$ must form a cyclic quadrilateral, so the possibilities of $z$ lie on the circumcircle of $z_1, z_2$ and $z_3.$

To maximize the imaginary part of $z,$ it must lie at the top of the circumcircle, which means the real part of $z$ is the same as the real part of the circumcenter. The center of the circumcircle can be found in various ways, (such as computing the intersection of the perpendicular bisectors of the sides) and when computed gives us that the real part of the circumcenter is $56,$ so the real part of $z$ is $56,$ and thus our answer is $\boxed{056}.$

Solution 2
Algebra Bash

First we calculate $\frac{z_3 - z_1}{z_3 - z_2}$ , which becomes $\frac{15i-4}{11}$.

Next, we define $z$ to be $a-bi$ for some real numbers $a$ and $b$. Then, $\frac {z-z_2}{z-z_3}$ can be written as $\frac{(a-18)+(b-39)i}{(a-78)+(b-99)i}.$ Multiplying both the numerator and denominator by the conjugate of the denominator, we get:

$\frac {[(a-18)(a-78)+(b-39)(b-99)]+[(a-78)(b-39)-(a-18)(b-99)]i}{(a-78)^2+(b-99)^2}$

In order for the product to be a real number, since both denominators are real numbers, we must have the numerator of $\frac {z-z_2}{z-z_3}$ be a multiple of the conjugate of $15i-4$, namely $-15i-4$ So, we have $(a-18)(a-78)+(b-39)(b-99) = -4k$ and $(a-78)(b-39)-(a-18)(b-99) = -15k$ for some real number $k$.

Then, we get:$(a-18)(a-78)+(b-39)(b-99) = \frac{4}{15}[(a-78)(b-39)-(a-18)(b-99)]$

Expanding both sides and combining like terms, we get:

$a^2 - 112a +b^2 - 122b + \frac{1989}{5} = 0$

which can be rewritten as:

$(a-56)^2 + (b-61)^2 = \frac{32296}{5}$

Now, common sense tells us that to maximize $b$, we would need to maximize $(b-61)^2$. Therefore, we must set $(a-56)^2$ to its lowest value, namely 0. Therefore, $a$ must be $\boxed{056}.$

You can also notice that the ab terms cancel out so all you need is the x-coordinate of the center and only expand the a parts of the equation.

##Problem 11
Consider arrangements of the $9$ numbers $1, 2, 3, \dots, 9$ in a $3 \times 3$ array. For each such arrangement, let $a_1$, $a_2$, and $a_3$ be the medians of the numbers in rows $1$, $2$, and $3$ respectively, and let $m$ be the median of $\{a_1, a_2, a_3\}$. Let $Q$ be the number of arrangements for which $m = 5$. Find the remainder when $Q$ is divided by $1000$.

Solution 1
We know that if $5$ is a median, then $5$ will be the median of the medians.

WLOG, assume $5$ is in the upper left corner. One of the two other values in the top row needs to be below $5$, and the other needs to be above $5$. This can be done in $4\cdot4\cdot2=32$ ways. The other $6$ can be arranged in $6!=720$ ways. Finally, accounting for when $5$ is in every other space, our answer is $32\cdot720\cdot9$. But we only need the last $3$ digits, so $\boxed{360}$ is our answer.


Solution 2
(Complementary Counting with probability)

Notice that m can only equal 4, 5, or 6, and 4 and 6 are symmetric.

WLOG let $m=4$

There is a $\frac{15}{28}$ chance that exactly one of 1, 2, 3 is in the same row.

There is a $\frac{2}{5}$ chance that the other two smaller numbers end up in the same row.

$9!(1-2*\frac{15}{28}*\frac{2}{5})=362880*\frac{4}{7}=207\boxed{360}$.

##Problem 12
Call a set $S$ product-free if there do not exist $a, b, c \in S$ (not necessarily distinct) such that $a b = c$. For example, the empty set and the set $\{16, 20\}$ are product-free, whereas the sets $\{4, 16\}$ and $\{2, 8, 16\}$ are not product-free. Find the number of product-free subsets of the set $\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\}$.

Solution
We shall solve this problem by doing casework on the lowest element of the subset. Note that the number $1$ cannot be in the subset because $1*1=1$. Let $S$ be a product-free set. If the lowest element of $S$ is $2$, we consider the set $\{3, 6, 9\}$. We see that 5 of these subsets can be a subset of $S$ ($\{3\}$, $\{6\}$, $\{9\}$, $\{6, 9\}$, and the empty set). Now consider the set $\{5, 10\}$. We see that 3 of these subsets can be a subset of $S$ ($\{5\}$, $\{10\}$, and the empty set). Note that $4$ cannot be an element of $S$, because $2$ is. Now consider the set $\{7, 8\}$. All four of these subsets can be a subset of $S$. So if the smallest element of $S$ is $2$, there are $5*3*4=60$ possible such sets.

If the smallest element of $S$ is $3$, the only restriction we have is that $9$ is not in $S$. This leaves us $2^6=64$ such sets.

If the smallest element of $S$ is not $2$ or $3$, then $S$ can be any subset of $\{4, 5, 6, 7, 8, 9, 10\}$, including the empty set. This gives us $2^7=128$ such subsets.

So our answer is $60+64+128=\boxed{252}$.

##Problem 13
For every $m \geq 2$, let $Q(m)$ be the least positive integer with the following property: For every $n \geq Q(m)$, there is always a perfect cube $k^3$ in the range $n < k^3 \leq m \cdot n$. Find the remainder when $\sum_{m = 2}^{2017} Q(m)$is divided by 1000.

Solution
Lemma 1: The ratio between $k^3$ and $(k+1)^3$ decreases as $k$ increases.

Lemma 2: If the range $(n,mn]$ includes $y$ cubes, $(p,mp]$ will always contain at least $y-1$ cubes for all $p$ in $[n,+\infty)$.

If $m=14$, the range $(1,14]$ includes one cube. The range $(2,28]$ includes 2 cubes, which fulfills the Lemma. Since $n=1$ also included a cube, we can assume that $Q(m)=1$ for all $m>14$. Two groups of 1000 are included in the sum modulo 1000. They do not count since $Q(m)=1$ for all of them, therefore $\sum_{m = 2}^{2017} Q(m) \equiv \sum_{m = 2}^{17} Q(m) \mod 1000$
Now that we know this we will find the smallest $n$ that causes $(n,mn]$ to contain two cubes and work backwards (recursion) until there is no cube in $(n,mn]$.

For $m=2$ there are two cubes in $(n,2n]$ for $n=63$. There are no cubes in $(31,62]$ but there is one in $(32,64]$. Therefore $Q(2)=32$.

For $m=3$ there are two cubes in $(n,3n]$ for $n=22$. There are no cubes in $(8,24]$ but there is one in $(9,27]$. Therefore $Q(3)=9$.

For $m$ in $\{4,5,6,7\}$ there are two cubes in $(n,4n]$ for $n=7$. There are no cubes in $(1,4]$ but there is one in $(2,8]$. Therefore $Q(4)=2$, and the same for $Q(5)$, $Q(6)$, and $Q(7)$ for a sum of $8$.

For all other $m$ there is one cube in $(1,8]$, $(2,16]$, $(3,24]$, and there are two in $(4,32]$. Therefore, since there are 10 values of $m$ in the sum, this part sums to $10$.

When the partial sums are added, we get $\boxed{059}\hspace{2 mm}QED\hspace{2 mm} \blacksquare$

##Problem 14
Let $a > 1$ and $x > 1$ satisfy $\log_a(\log_a(\log_a 2) + \log_a 24 - 128) = 128$ and $\log_a(\log_a x) = 256$. Find the remainder when $x$ is divided by $1000$.

Solution
The first condition implies

$a^{128} = \log_a\log_a 2 + \log_a 24 - 128$
$128+a^{128} = \log_a\log_a 2^{24}$
$a^{a^{128}a^{a^{128}}} = 2^{24}$
$\left(a^{a^{128}}\right)^{\left(a^{a^{128}}\right)} = 2^{24} = 8^8$
So $a^{a^{128}} = 8$.

Putting each side to the power of $128$:

$\left(a^{128}\right)^{\left(a^{128}\right)} = 8^{128} = 64^{64},$
so $a^{128} = 64 \implies a = 2^{\frac{3}{64}}$. Specifically,

$\log_a(y) = \frac{\log_2(y)}{\log_2(a)} = \frac{64}{3}\log_2(y)$
so we have that

$256 = \log_a(\log_a(y)) = \frac{64}{3}\log_2\left(\frac{64}{3}\log_2(x)\right)$
$12 = \log_2\left(\frac{64}{3}\log_2(x)\right)$
$2^{12} = \frac{64}{3}\log_2(x)$
$192 = \log_2(x)$
$x = 2^{192}$
We only wish to find $x\mod 1000$. To do this, we note that $x\equiv 0\mod 8$ and now, by the Chinese Remainder Theorem, wish only to find $x\mod 125$. By Euler's Theorem:

$2^{\phi(125)} = 2^{100} \equiv 1\mod 125$
so

$2^{192} \equiv \frac{1}{2^8} \equiv \frac{1}{256} \equiv \frac{1}{6} \mod 125$
so we only need to find the inverse of $6 \mod 125$. It is easy to realize that $6\cdot 21 = 126 \equiv 1\mod 125$, so

$x\equiv 21\mod 125, x\equiv 0\mod 8.$
Using CRT, we get that $x\equiv \boxed{896}\mod 1000$, finishing the solution.

##Problem 15
The area of the smallest equilateral triangle with one vertex on each of the sides of the right triangle with side lengths $2\sqrt{3},~5,$ and $\sqrt{37},$ as shown, is $\frac{m\sqrt{p}}{n},$ where $m,~n,$ and $p$ are positive integers, $m$ and $n$ are relatively prime, and $p$ is not divisible by the square of any prime. Find $m+n+p.$

Solution 1
Lemma. If $x,y$ satisfy $px+qy=1$, then the minimal value of $\sqrt{x^2+y^2}$ is $\frac{1}{\sqrt{p^2+q^2}}$.

Proof. Recall that the distance between the point $(x_0,y_0)$ and the line $px+qy+r = 0$ is given by $\frac{|px_0+qy_0+r|}{\sqrt{p^2+q^2}}$. In particular, the distance between the origin and any point $(x,y)$ on the line $px+qy=1$ is at least $\frac{1}{\sqrt{p^2+q^2}}$.

---

Let the vertices of the right triangle be $(0,0),(5,0),(0,2\sqrt{3}),$ and let $(a,0),(0,b)$ be two of the vertices of the equilateral triangle. Then, the third vertex of the equilateral triangle is $\left(\frac{a+\sqrt{3}b}{2},\frac{\sqrt{3}a+b}{2}\right)$. This point must lie on the hypotenuse $\frac{x}{5} + \frac{y}{2\sqrt{3}} = 1$, i.e. $a,b$ must satisfy $\frac{a+\sqrt{3}b}{10}+\frac{\sqrt{3}a+b}{4\sqrt{3}} = 1,$ which can be simplified to $\frac{7}{20}a + \frac{11\sqrt{3}}{60}b = 1.$
By the lemma, the minimal value of $\sqrt{a^2+b^2}$ is $\frac{1}{\sqrt{\left(\frac{7}{20}\right)^2 + \left(\frac{11\sqrt{3}}{60}\right)^2}} = \frac{10\sqrt{3}}{\sqrt{67}},$ so the minimal area of the equilateral triangle is $\frac{\sqrt{3}}{4} \cdot \left(\frac{10\sqrt{3}}{\sqrt{67}}\right)^2 = \frac{\sqrt{3}}{4} \cdot \frac{300}{67} = \frac{75\sqrt{3}}{67},$ and hence the answer is $75+3+67=\boxed{145}$.

Solution 2 (No Coordinates)
Let $S$ be the triangle with side lengths $2\sqrt{3},~5,$ and $\sqrt{37}$.

We will think about this problem backwards, by constructing a triangle as large as possible (We will call it $T$, for convenience) which is similar to $S$ with vertices outside of a unit equilateral triangle $\triangle ABC$, such that each vertex of the equilateral triangle lies on a side of $T$. After we find the side lengths of $T$, we will use ratios to trace back towards the original problem.

First of all, let $\theta = 90^{\circ}$, $\alpha = \arctan\left(\frac{2\sqrt{3}}{5}\right)$, and $\beta = \arctan\left(\frac{5}{2\sqrt{3}}\right)$ (These three angles are simply the angles of triangle $S$; out of these three angles, $\alpha$ is the smallest angle, and $\theta$ is the largest angle). Then let us consider a point $P$ inside $\triangle ABC$ such that $\angle APB = 180^{\circ} - \theta$, $\angle BPC = 180^{\circ} - \alpha$, and $\angle APC = 180^{\circ} - \beta$. Construct the circumcircles $\omega_{AB}, ~\omega_{BC},$ and $\omega_{AC}$ of triangles $APB, ~BPC,$ and $APC$ respectively.

From here, we will prove the lemma that if we choose points $X$, $Y$, and $Z$ on circumcircles $\omega_{AB}, ~\omega_{BC},$ and $\omega_{AC}$ respectively such that $X$, $B$, and $Y$ are collinear and $Y$, $C$, and $Z$ are collinear, then $Z$, $A$, and $X$ must be collinear. First of all, if we let $\angle PAX = m$, then $\angle PBX = 180^{\circ} - m$ (by the properties of cyclic quadrilaterals), $\angle PBY = m$ (by adjacent angles), $\angle PCY = 180^{\circ} - m$ (by cyclic quadrilaterals), $\angle PCZ = m$ (adjacent angles), and $\angle PAZ = 180^{\circ} - m$ (cyclic quadrilaterals). Since $\angle PAX$ and $\angle PAZ$ are supplementary, $Z$, $A$, and $X$ are collinear as desired. Hence, $\triangle XYZ$ has an inscribed equilateral triangle $ABC$.

In addition, now we know that all triangles $XYZ$ (as described above) must be similar to triangle $S$, as $\angle AXB = \theta$ and $\angle BYC = \alpha$, so we have developed $AA$ similarity between the two triangles. Thus, $\triangle XYZ$ is the triangle similar to $S$ which we were desiring. Our goal now is to maximize the length of $XY$, in order to maximize the area of $XYZ$, to achieve our original goal.

Note that, all triangles $PYX$ are similar to each other if $Y$, $B$, and $X$ are collinear. This is because $\angle PYB$ is constant, and $\angle PXB$ is also a constant value. Then we have $AA$ similarity between this set of triangles. To maximize $XY$, we can instead maximize $PY$, which is simply the diameter of $\omega_{BC}$. From there, we can determine that $\angle PBY = 90^{\circ}$, and with similar logic, $PA$, $PB$, and $PC$ are perpendicular to $ZX$, $XY$, and $YZ$ respectively We have found our desired largest possible triangle $T$.

All we have to do now is to calculate $YZ$, and use ratios from similar triangles to determine the side length of the equilateral triangle inscribed within $S$. First of all, we will prove that $\angle ZPY = \angle ACB + \angle AXB$. By the properties of cyclic quadrilaterals, $\angle AXB = \angle PAB + \angle PBA$, which means that $\angle ACB + \angle AXB = 180^{\circ} - \angle PAC - \angle PBC$. Now we will show that $\angle ZPY =  180^{\circ} - \angle PAC - \angle PBC$. Note that, by cyclic quadrilaterals, $\angle YZP = \angle PAC$ and $\angle ZYP = \angle PBC$. Hence, $\angle ZPY = 180^{\circ} - \angle PAC - \angle PBC$ (since $\angle ZPY + \angle YZP + \angle ZYP = 180^{\circ}$), proving the aforementioned claim. Then, since $\angle ACB = 60^{\circ}$ and $\angle AXB = \theta = 90^{\circ}$, $\angle ZPY = 150^{\circ}$.

Now we calculate $PY$ and $PZ$, which are simply the diameters of circumcircles $\omega_{BC}$ and $\omega_{AC}$, respectively. By the extended law of sines, $PY = \frac{BC}{\sin{BPC}} = \frac{\sqrt{37}}{2\sqrt{3}}$ and $PZ = \frac{CA}{\sin{CPA}} = \frac{\sqrt{37}}{5}$.

We can now solve for $ZY$ with the law of cosines:

$(ZY)^2 = \frac{37}{25} + \frac{37}{12} - \left(\frac{37}{5\sqrt{3}}\right)\left(-\frac{\sqrt{3}}{2}\right)$
$(ZY)^2 = \frac{37}{25} + \frac{37}{12} + \frac{37}{10}$
$(ZY)^2 = \frac{37 \cdot 67}{300}$
$ZY = \sqrt{37} \cdot \frac{\sqrt{67}}{10\sqrt{3}}$
Now we will apply this discovery towards our original triangle $S$. Since the ratio between $ZY$ and the hypotenuse of $S$ is $\frac{\sqrt{67}}{10\sqrt{3}}$, the side length of the equilateral triangle inscribed within $S$ must be $\frac{10\sqrt{3}}{\sqrt{67}}$ (as $S$ is simply as scaled version of $XYZ$, and thus their corresponding inscribed equilateral triangles must be scaled by the same factor). Then the area of the equilateral triangle inscribed within $S$ is $\frac{75\sqrt{3}}{67}$, implying that the answer is $\boxed{145}$.

-Solution by TheBoomBox77

Solution 3
Let $\triangle ABC$ be the right triangle with sides $AB = x$, $AC = y$, and $BC = z$ and right angle at $A$.

Let an equilateral triangle touch $AB$, $BC$, and $AC$ at $D$, $E$, and $F$ respectively, having side lengths of $c$.

Now, call $AD$ as $a$ and $AE$ as $b$. Thus, $DB = x-a$ and $EC = y-b$.

By Law of Sines on triangles $\triangle DBF$ and $ECF$,

$BF = \frac{z(a\sqrt{3}+b)} {2y}$ and $CF = \frac{z(a+b\sqrt{3})} {2x}$.

Summing,

$BF+CF =  \frac{z(a\sqrt{3}+b)} {2y} + \frac{z(a+b\sqrt{3})} {2x} = BC = z$.

Now substituting $AB = x = 2\sqrt{3}$, $AC = y = 5$, and $BC = \sqrt{37}$ and solving, $\frac{7a}{20} + \frac{11b\sqrt{3}}{60} = 1$.

We seek to minimize $[DEF] = c^2 \frac{\sqrt{3}}{4} = (a^2 + b^2) \frac{\sqrt{3}}{4}$.

This is equivalent to minimizing $a^2+b^2$.

Using the lemma from solution 1, we conclude that $\sqrt{a^2+b^2} = \frac{10\sqrt{3}}{\sqrt{67}}$

Thus, $[DEF] = \frac{75\sqrt{3}}{67}$ and our final answer is $\boxed{145}$