# 2003 AIME II

## 2003 AIME II Problem 1

The product $N$ of three positive integers is $6$ times their sum, and one of the integers is the sum of the other two. Find the sum of all possible values of $N$.
Solution

Let the three integers be $a, b, c$. $N = abc = 6(a + b + c)$ and $c = a + b$. 

Then $N = ab(a + b) = 6(a + b + a + b) = 12(a + b)$. 

Since $a$ and $b$ are positive, $ab = 12$ so $\{a, b\}$ is one of $\{1, 12\}, \{2, 6\}, \{3, 4\}$ 

so $a + b$ is one of $13, 8, 7$ 

so $N$ is one of $12\cdot 13 = 156, 12\cdot 8 = 96, 12\cdot 7 = 84$ 

so the answer is $156 + 96 + 84 = \boxed{336}$.


## 2003 AIME II Problem 2

Let $N$ be the greatest integer multiple of 8, no two of whose digits are the same. What is the remainder when $N$ is divided by 1000?
Solution

We want a number with no digits repeating, so we can only use the digits 0-9 once in constructing our number. To make the greatest number, we want the greatest digit to occupy the leftmost side and the least digit to occupy the rightmost side. Therefore, the last three digits of the greatest number should be an arrangement of the digits $0,1,2$. Since the number has to be divisible by 8, the integer formed by the arrangement of $0,1,2$ is also divisible by 8. The only arrangement that works is $120$.

Therefore, the remainder when the number is divided by 1000 is $\boxed{120}$.


## 2003 AIME II Problem 3

Define a $good~word$ as a sequence of letters that consists only of the letters $A$, $B$, and $C$ - some of these letters may not appear in the sequence - and in which $A$ is never immediately followed by $B$, $B$ is never immediately followed by $C$, and $C$ is never immediately followed by $A$. How many seven-letter good words are there?
Solution

There are three letters to make the first letter in the sequence. However, after the first letter (whatever it is), only two letters can follow it, since one of the letters is restricted. Therefore, the number of seven-letter good words is $3*2^6=192$

Therefore, there are $\boxed{192}$ seven-letter good words.


## 2003 AIME II Problem 4

In a regular tetrahedron the centers of the four faces are the vertices of a smaller tetrahedron. The ratio of the volume of the smaller tetrahedron to that of the larger is $m/n$, where $m$ and $n$ are relatively prime positive integers. Find $m+n$.

Solution
Solution 1

Embed the tetrahedron in 4-space (It makes the calculations easier) Its vertices are $(1,0,0,0)$, $(0,1,0,0)$, $(0,0,1,0)$, $(0,0,0,1)$

To get the center of any face, we take the average of the three coordinates of that face. The vertices of the center of the faces are: $(\frac{1}{3}, \frac{1}{3}, \frac{1}{3}, 0)$,$(\frac{1}{3}, \frac{1}{3},0, \frac{1}{3})$,$(\frac{1}{3},0, \frac{1}{3}, \frac{1}{3})$,$(0,\frac{1}{3}, \frac{1}{3}, \frac{1}{3})$

The side length of the large tetrahedron is $\sqrt{2}$ by the distance formula The side length of the smaller tetrahedron is $\frac{\sqrt{2}}{3}$ by the distance formula

Their ratio is $1:3$, so the ratio of their volumes is $\left(\frac{1}{3}\right)^3 = \frac{1}{27}$

$m+n = 1 + 27 = \boxed{028}$
Solution 2

Let the large tetrahedron be $ABCD$, and the small tetrahedron be $WXYZ$, with $W$ on $ABC$, $X$ on $BCD$, $Y$ on $ACD$, and $Z$ on $ABD$. Clearly, the two regular tetrahedrons are similar, so if we can find the ratio of the sides, we can find the ratio of the volumes. Let $AB=1$, for our convenience. Dropping an altitude from $W$ to $BC$, and calling the foot $M$, we have $WM=XM=\frac{\sqrt3}{6}$. Since $\cos\angle{WMX}=\cos\angle{AMX}=MX/AM=1/3$. By Law of Cosines, we have $WX=\sqrt{1/12+1/12-2(1/12)(1/3)}=1/3$. Hence, the ratio of the volumes is $(\frac{1}{3})^3=1/27$. $m+n=1+27=\boxed{028}$
Solution 3

Consider the large tetrahedron $ABCD$ and the smaller tetrahedron $WXYZ$. Label the points as you wish, but dropping an altitude from the top vertex of $ABCD$, we see it hits the center of the base face of $ABCD$. This center is also one vertex of $WXYZ$. Consider a "side" face of $ABCD$, and the center of that face, which is another vertex of $WXYZ$. Draw the altitude of this side face (which is an equilateral triangle). These two altitudes form a right triangle. Since the center of the Side face splits the altitude of the side face into segments in the ratio of $2:1$ (centroid), and since the bases of $WXYZ$ and $ABCD$ are parallel, we can say that the altitudes of tetrahedron $ABCD$ and $WXYZ$ are in the ratio $3:1$. Thus we compute $(\frac{1}{3})^3$, and find $\frac{1}{27}$. The sum of the numerator and denominator is thus $28$.


## 2003 AIME II Problem 5

A cylindrical log has diameter $12$ inches. A wedge is cut from the log by making two planar cuts that go entirely through the log. The first is perpendicular to the axis of the cylinder, and the plane of the second cut forms a $45^\circ$ angle with the plane of the first cut. The intersection of these two planes has exactly one point in common with the log. The number of cubic inches in the wedge can be expressed as $n\pi$, where n is a positive integer. Find $n$.
Solution

The volume of the wedge is half the volume of a cylinder with height $12$ and radius $6$. (Imagine taking another identical wedge and sticking it to the existing one). Thus, $V=\frac{6^2\cdot 12\pi}{2}=\boxed{216}\pi$.


## 2003 AIME II Problem 6

In triangle $ABC,$ $AB = 13,$ $BC = 14,$ $AC = 15,$ and point $G$ is the intersection of the medians. Points $A',$ $B',$ and $C',$ are the images of $A,$ $B,$ and $C,$ respectively, after a $180^\circ$ rotation about $G.$ What is the area of the union of the two regions enclosed by the triangles $ABC$ and $A'B'C'?$
Solution

Since a $13-14-15$ triangle is a $5-12-13$ triangle and a $9-12-15$ triangle "glued" together on the $12$ side, $[ABC]=\frac{1}{2}\cdot12\cdot14=84$.

There are six points of intersection between $\Delta ABC$ and $\Delta A'B'C'$. Connect each of these points to $G$.

<div align=center><img src="http://latex.artofproblemsolving.com/a/5/d/a5d42315a7709b2d03b4403cc072e4b6c1a6fd51.png" height="150px" /></div>

There are $12$ smaller congruent triangles which make up the desired area. Also, $\Delta ABC$ is made up of $9$ of such triangles. Therefore, $\left[\Delta ABC \bigcup \Delta A'B'C'\right] = \frac{12}{9}[\Delta ABC]= \frac{4}{3}\cdot84=\boxed{112}$.


## 2003 AIME II Problem 7

Find the area of rhombus $ABCD$ given that the radii of the circles circumscribed around triangles $ABD$ and $ACD$ are $12.5$ and $25$, respectively.
Solution

The diagonals of the rhombus perpendicularly bisect each other. Call half of diagonal BD $a$ and half of diagonal AC $b$. The length of the four sides of the rhombus is $\sqrt{a^2+b^2}$.

The area of any triangle can be expressed as $\frac{a\cdot b\cdot c}{4R}$, where $a$, $b$, and $c$ are the sides and $R$ is the circumradius. Thus, the area of $\triangle ABD$ is $ab=2a(a^2+b^2)/(4\cdot12.5)$. Also, the area of $\triangle ABC$ is $ab=2b(a^2+b^2)/(4\cdot25)$. Setting these two expressions equal to each other and simplifying gives $b=2a$. Substitution yields $a=10$ and $b=20$, so the area of the rhombus is $20\cdot40/2=\boxed{400}$.


## 2003 AIME II Problem 8


Find the eighth term of the sequence $1440,$ $1716,$ $1848,\ldots,$ whose terms are formed by multiplying the corresponding terms of two arithmetic sequences.
Solution
Solution 1

If you multiply the corresponding terms of two arithmetic sequences, you get the terms of a quadratic function. Thus, we have a quadratic $ax^2+bx+c$ such that $f(1)=1440$, $f(2)=1716$, and $f(3)=1848$. Plugging in the values for x gives us a system of three equations:

$a+b+c=1440$

$4a+2b+c=1716$

$9a+3b+c=1848$

Solving gives $a=-72, b=492,$ and $c=1020$. Thus, the answer is $-72(8)^2+492\cdot8+1020= \boxed{348}.$
Solution 2

Setting one of the sequences as $a+nr_1$ and the other as $b+nr_2$, we can set up the following equalities

$ab = 1440$

$(a+r_1)(b+r_2)=1716$

$(a+2r_1)(b+2r_2)=1848$

We want to find $(a+7r_1)(b+7r_2)$

Foiling out the two above, we have

$ab + ar_2 + br_1 + r_1r_2 = 1716$ and $ab + 2ar_2 + 2br_1 + 4r_1r_2 = 1848$

Plugging in $ab=1440$ and bringing the constant over yields

$ar_2 + br_1 + r_1r_2 = 276$

$ar_2 + br_1 + 2r_1r_2 = 204$

Subtracting the two yields $r_1r_2 = -72$ and plugging that back in yields $ar_2 + br_1 = 348$

Now we find

$(a+7r_1)(b+7r_2) = ab + 7(ar_2 + br_1) + 49r_1r_2 = 1440 + 7(348) + 49(-72) = \boxed{348}$.
Solution 3

Let the first sequence be

$A={a+d_1, a + 2d_1, a + 3d_1, \cdots}$

and the second be

$B={b+d_2, b + 2d_2, b + 3d_2, \cdots}$,

with $(a+d_1)(b+d_2)=1440$. Now, note that the $n^{\text{th}}$ term of sequence $A$ is $a+d_1 n$ and the $n^{\text{th}}$ term of $B$ is $b + d_2 n$. Thus, the $n^{\text{th}}$ term of the given sequence is

$n^2(d_1 + d_2) + n(ad_2 + bd_1) + ab$,

a quadratic in $n$. Now, letting the given sequence be $C$, we see that

$C_n - C_{n-1} = n^2(d_1 + d_2) + n(ad_2 + bd_1) + ab \\ - (n-1)^2(d_1 + d_2) - (n-1)(ad_2 + bd_1) - ab\\ = n(2d_1 + 2d_2) + ad_2 + bd_1 - d_1 - d_2$

a linear equation in $n$! Since $C_2 - C_1 = 276$ and $C_3 - C_2 = 132$, we can see that, in general, we have

$C_n - C_{n-1} = 420 - 144n$.

Thus, we can easily find

$C_4 - C_3 = -12 \rightarrow C_4 = 1836$,

$C_5 - C_4 = -156 \rightarrow C_5 = 1680$,

$C_6 - C_5 = -300 \rightarrow C_6 = 1380$,

$C_7 - C_6 = -444 \rightarrow C_7 = 936$, and finally

$C_8 - C_7 = -588 \rightarrow \boxed{C_8 = 348}$.


## 2003 AIME II Problem 9

Consider the polynomials $P(x) = x^{6} - x^{5} - x^{3} - x^{2} - x$ and $Q(x) = x^{4} - x^{3} - x^{2} - 1.$ Given that $z_{1},z_{2},z_{3},$ and $z_{4}$ are the roots of $Q(x) = 0,$ find $P(z_{1}) + P(z_{2}) + P(z_{3}) + P(z_{4}).$
Solution

${{Q(z_1)=0}}$, so $z_1^4-z_1^3-z_1^2-1=0$

therefore $-z_1^3-z_1^2=-z_1^4+1.$

Also $z_1^4-z_1^3-z_1^2=1$

So $z_1^6-z_1^5-z_1^4=z_1^2$

So in $P(z_1)=z_1^6-z_1^5-z_1^3-z_1^2-z_1$

Since $-z_1^3-z^2=-z_1^4+1$ and $z_1^6-z_1^5-z_1^4=z_1^2$

$P(z_1)=z_1^6-z_1^5-z_1^3-z_1^2-z_1$ can now be $P(z_1)=z_1^2-z_1+1$

Now this also follows for all roots of $Q(x)$ Now $P(z_2)+P(z_1)+P(z_3)+P(z_4)=z_1^2-z_1+1+z_2^2-z_2+1+z_3^2-z_3+1+z_4^2-z_4+1$

Now by Vieta's we know that $-z_4-z_3-z_2-z_1=-1$, so by Newton Sums we can find $z_1^2+z_2^2+z_3^2+z_4^2$

$a_ns_2+a_{n-1}s_1+2a_{n-2}=0$

$(1)(s_2)+(-1)(1)+2(-1)=0$

$s_2-1-2=0$

$s_2=3$

So finally $P(z_2)+P(z_1)+P(z_3)+P(z_4)=3+4-1=\boxed{6}$


## 2003 AIME II Problem 10

Two positive integers differ by $60$. The sum of their square roots is the square root of an integer that is not a perfect square. What is the maximum possible sum of the two integers?
Solution

Call the two integers $b$ and $b+60$, so we have $\sqrt{b}+\sqrt{b+60}=\sqrt{c}$. Square both sides to get $2b+60+2\sqrt{b^2+60b}=c$. Thus, $b^2+60b$ must be a square, so we have $b^2+60b=n^2$, and $(b+n+30)(b-n+30)=900$. The sum of these two factors is $2b+60$, so they must both be even. To maximize $b$, we want to maximixe $b+n+30$, so we let it equal $450$ and the other factor $2$, but solving gives $b=196$, which is already a perfect square, so we have to keep going. In order to keep both factors even, we let the larger one equal $150$ and the other $6$, which gives $b=48$. This checks, so the solution is $48+108=\boxed{156}$.


## 2003 AIME II Problem 11


Triangle $ABC$ is a right triangle with $AC = 7,$ $BC = 24,$ and right angle at $C.$ Point $M$ is the midpoint of $AB,$ and $D$ is on the same side of line $AB$ as $C$ so that $AD = BD = 15.$ Given that the area of triangle $CDM$ may be expressed as $\frac {m\sqrt {n}}{p},$ where $m,$ $n,$ and $p$ are positive integers, $m$ and $p$ are relatively prime, and $n$ is not divisible by the square of any prime, find $m + n + p.$
Solution
Solution 1

We use the Pythagorean Theorem on $ABC$ to determine that $AB=25.$

Let $N$ be the orthogonal projection from $C$ to $AB.$ Thus, $[CDM]=\frac{(DM)(MN)} {2}$, $MN=AM-AN$, and $[ABC]=\frac{24 \cdot 7} {2} =\frac{25 \cdot (CN)} {2}.$

From the third equation, we get $CN=\frac{168} {25}.$

By the Pythagorean Theorem in $\Delta ACN,$ we have

$AN=\sqrt{\left(\frac{24 \cdot 25} {25}\right)^2-\left(\frac{24 \cdot 7} {25}\right)^2}=\frac{24} {25}\sqrt{25^2-7^2}=\frac{576} {25}.$

Thus, $MN=\frac{576} {25}-\frac{25} {2}=\frac{527} {50}.$

In $\Delta ADM$, we use the Pythagorean Theorem to get $DM=\sqrt{15^2-\left(\frac{25} {2}\right)^2}=\frac{5} {2} \sqrt{11}.$

Thus, $[CDM]=\frac{527 \cdot 5\sqrt{11}} {50 \cdot 2 \cdot 2}= \frac{527\sqrt{11}} {40}.$

Hence, the answer is $527+11+40=\boxed{578}.$
Solution 2

By the Pythagorean Theorem in $\Delta AMD$, we get $DM=\frac{5\sqrt{11}} {2}$. Since $ABC$ is a right triangle, $M$ is the circumcenter and thus, $CM=\frac{25} {2}$. We let $\angle CMD=\theta$. By the Law of Cosines,

$24 = 2 \cdot (12.5)^2-2 \cdot (12.5)^2 * \cos (90+\theta).$

It follows that $\sin \theta = \frac{527} {625}$. Thus, $[CMD]=\frac{1} {2} (12.5) \left(\frac{5\sqrt{11}} {2}\right)\left(\frac{527} {625}\right)=\frac{527\sqrt{11}} {40}$.
Solution 3

Suppose $ABC$ is plotted on the cartesian plane with $C$ at $(0,0)$, $A$ at $(0,7)$, and $B$ at $(24,0)$. Then $M$ is at $(12,3.5)$. Since $\Delta ABD$ is isosceles, $MD$ is perpendicular to $AM$, and since $AM=12.5$ and $AD=15, MD=2.5\sqrt{11}$. The slope of $AM$ is $-\frac{7}{24}$ so the slope of $MD$ is $\frac{24}{7}$. Draw a vertical line through $M$ and a horizontal line through $D$. Suppose these two lines meet at $X$. then $MX=\frac{24}{7}DX$ so $MD=\frac{25}{7}DX=\frac{25}{24}MD$ by the pythagorean theorem. So $MX=2.4\sqrt{11}$ and $DX=.7\sqrt{11}$ so the coordinates of D are $(12-.7\sqrt{11},\, 2.5-2.4\sqrt{11})$. Since we know the coordinates of each of the vertices of $\Delta CMD$, we can apply the Shoelace Theorem to find the area of $\Delta CMD, \frac{527 \sqrt{11}}{40}$.


## 2003 AIME II Problem 12

The members of a distinguished committee were choosing a president, and each member gave one vote to one of the 27 candidates. For each candidate, the exact percentage of votes the candidate got was smaller by at least 1 than the number of votes for that candidate. What was the smallest possible number of members of the committee?
Solution

Let $v_i$ be the number of votes candidate $i$ received, and let $s=v_1+\cdots+v_{27}$ be the total number of votes cast. Our goal is to determine the smallest possible $s$.

Candidate $i$ got $\frac{v_i}s$ of the votes, hence the percentage of votes she received is $\frac{100v_i}s$. The condition in the problem statement says that $\forall i: \frac{100v_i}s + 1 \leq v_i$.

Obviously, if some $v_i$ would be $0$ or $1$, the condition would be false. Thus $\forall i: v_i\geq 2$. We can then rewrite the above inequality as $\forall i: s\geq\frac{100v_i}{v_i-1}$.

If for some $i$ we have $v_i=2$, then from the inequality we just derived we would have $s\geq 200$. If for some $i$ we have $v_i=3$, then $s\geq 150$. And if for some $i$ we have $v_i=4$, then $s\geq \frac{400}3 = 133\frac13$, and hence $s\geq 134$.

Is it possible to have $s<134$? We just proved that to have such $s$, all $v_i$ have to be at least $5$. But then $s=v_1+\cdots+v_{27}\geq 27\cdot 5 = 135$, which is a contradiction. Hence the smallest possible $s$ is at least $134$.

Now consider a situation where $26$ candidates got $5$ votes each, and one candidate got $4$ votes. In this situation, the total number of votes is exactly $134$, and for each candidate the above inequality is satisfied. Hence the minimum number of committee members is $s=\boxed{134}$.

Note: Each of the $26$ candidates received $\simeq 3.63\%$ votes, and the last candidate received $\simeq 2.985\%$ votes.


## 2003 AIME II Problem 13


A bug starts at a vertex of an equilateral triangle. On each move, it randomly selects one of the two vertices where it is not currently located, and crawls along a side of the triangle to that vertex. Given that the probability that the bug moves to its starting vertex on its tenth move is $m/n,$ where $m$ and $n$ are relatively prime positive integers, find $m + n.$
Solution
Solution 1

Let $P_n$ represent the probability that the bug is at its starting vertex after $n$ moves. If the bug is on its starting vertex after $n$ moves, then it must be not on its starting vertex after $n-1$ moves. At this point it has $\frac{1}{2}$ chance of reaching the starting vertex in the next move. Thus $P_n=\frac{1}{2}(1-P_{n-1})$. $P_0=1$, so now we can build it up:

$P_1=0$, $P_2=\frac{1}{2}$, $P_3=\frac{1}{4}$, $P_4=\frac{3}{8}$, $P_5=\frac{5}{16}$, $P_6=\frac{11}{32}$, $P_7=\frac{21}{64}$, $P_8=\frac{43}{128}$, $P_9=\frac{85}{256}$, $P_{10}=\frac{171}{512}$,

Thus the answer is $171+512=$$\boxed{683}$
Solution 2

Consider there to be a clockwise and a counterclockwise direction around the triangle. Then, in order for the ant to return to the original vertex, the net number of clockwise steps must be a multiple of 3, i.e., $\#CW - \#CCW \equiv 0 \mod{3}$. Since $\#CW + \#CCW = 10$, it is only possible that $(\#CW,\, \#CCW) = (5,5), (8,2), (2,8)$.

In the first case, we pick $5$ out of the ant's $10$ steps to be clockwise, for a total of ${10 \choose 5}$ paths. In the second case, we choose $8$ of the steps to be clockwise, and in the third case we choose $2$ to be clockwise. Hence the total number of ways to return to the original vertex is ${10 \choose 5} + {10 \choose 8} + {10 \choose 2} = 252 + 45 + 45 = 342$. Since the ant has two possible steps at each point, there are $2^{10}$ routes the ant can take, and the probability we seek is $\frac{342}{2^{10}} = \frac{171}{512}$, and the answer is $\boxed{683}$.
Solution 3

Label the vertices of the triangle $A,B,C​$ with the ant starting at $A​$. We will make a table of the number of ways to get to $A,B,C​$ in $n​$ moves $n\leq10​$. The values of the table are calculated from the fact that the number of ways from a vertex say $A​$ in $n​$ steps equals the number of ways to get to $B​$ in $n-1​$ steps plus the number of ways to get to $C​$ in $n-1​$ steps. 

$\begin{array}{|l|ccc|} {\text{Table}}\\\hline \text{Step}&A&B&C \\\hline 1 &0 &1 &1 \\ 2 &2 &1 &1 \\ 3 &2 &3 &3\\ \vdots &\vdots&\vdots&\vdots \\ 10 &342 &341 &341 \\\hline \end{array}​$

Therefore, our answer is $512+171=\boxed{683}.$


## 2003 AIME II Problem 14


Let $A = (0,0)$ and $B = (b,2)$ be points on the coordinate plane. Let $ABCDEF$ be a convex equilateral hexagon such that $\angle FAB = 120^\circ,$ $\overline{AB}\parallel \overline{DE},$ $\overline{BC}\parallel \overline{EF,}$ $\overline{CD}\parallel \overline{FA},$ and the y-coordinates of its vertices are distinct elements of the set $\{0,2,4,6,8,10\}.$ The area of the hexagon can be written in the form $m\sqrt {n},$ where $m$ and $n$ are positive integers and n is not divisible by the square of any prime. Find $m + n.$
Solution 1

The y-coordinate of $F$ must be $4$. All other cases yield non-convex and/or degenerate hexagons, which violate the problem statement.

Letting $F = (f,4)$, and knowing that $\angle FAB = 120^\circ$, we can use rewrite $F$ using complex numbers: $f + 4 i = (b + 2 i)\left(e^{i(2 \pi / 3)}\right) = (b + 2 i)\left(-1/2 + \frac{\sqrt{3}}{2} i\right) = -\frac{b}{2}-\sqrt{3}+\left(\frac{b\sqrt{3}}{2}-1\right)i$. We solve for $b$ and $f$ and find that $F = \left(-\frac{8}{\sqrt{3}}, 4\right)$ and that $B = \left(\frac{10}{\sqrt{3}}, 2\right)$.

The area of the hexagon can then be found as the sum of the areas of two congruent triangles ($EFA$ and $BCD$, with height $8$ and base $\frac{8}{\sqrt{3}}$) and a parallelogram ($ABDE$, with height $8$ and base $\frac{10}{\sqrt{3}}$).

$A = 2 \times \frac{1}{2} \times 8 \times \frac{8}{\sqrt{3}} + 8 \times \frac{10}{\sqrt{3}} = \frac{144}{\sqrt{3}} = 48\sqrt{3}$.

Thus, $m+n = \boxed{051}$.
Solution 2

<div align=center><img src="http://latex.artofproblemsolving.com/1/6/8/168fb1df634d737bf02a08b09cd9d4ae0d3117b6.png" height="150px" /></div>

From this image, we can see that the y-coordinate of F is 4, and from this, we can gather that the coordinates of E, D, and C, respectively, are 8, 10, and 6.

<div align=center><img src="http://latex.artofproblemsolving.com/f/1/6/f16064303c403f2b265133c1ca501af9da758271.png" height="150px" /></div>

Let the angle between the $x$-axis and segment $AB$ be $\theta$, as shown above. Thus, as $\angle FAB=120^\circ$, the angle between the $x$-axis and segment $AF$ is $60-\theta$, so $\sin{(60-\theta)}=2\sin{\theta}$. Expanding, we have
$\sin{60}\cos{\theta}-\cos{60}\sin{\theta}=\frac{\sqrt{3}\cos{\theta}}{2}-\frac{\sin{\theta}}{2}=2\sin{\theta}$

Isolating $\sin{\theta}$ we see that $\frac{\sqrt{3}\cos{\theta}}{2}=\frac{5\sin{\theta}}{2}$, or $\cos{\theta}=\frac{5}{\sqrt{3}}\sin{\theta}$. Using the fact that $\sin^2{\theta}+\cos^2{\theta}=1$, we have $\frac{28}{3}\sin^2{\theta}=1$, or $\sin{\theta}=\sqrt{\frac{3}{28}}$. Letting the side length of the hexagon be $y$, we have $\frac{2}{y}=\sqrt{\frac{3}{28}}$. After simplification we find that that $y=\frac{4\sqrt{21}}{3}$.

In particular, note that by the Pythagorean theorem, $b^2+2^2=y^2$, hence $b=10\sqrt{3}/3$. Also, if $C=(c,6)$, then $y^2=BC^2=4^2+(c-b)^2$, hence $c-b=8\sqrt{3}/3,$ and thus $c=18\sqrt{3}/3$. Using similar methods (or symmetry), we determine that $D=(10\sqrt{3}/3,10)$, $E=(0,8)$, and $F=(-8\sqrt{3}/3,4)$. By the Shoelace theorem, 

$[ABCDEF]=\frac12\left|\begin{array}{cc} 0&0\\ 10\sqrt{3}/3&2\\ 18\sqrt{3}/3&6\\ 10\sqrt{3}/3&10\\ 0&8\\ -8\sqrt{3}/3&4\\ 0&0\\ \end{array}\right|=\frac12|60+180+80-36-60-(-64)|\sqrt{3}/3=48\sqrt{3}.$

Hence the answer is $\boxed{51}$.


## 2003 AIME II Problem 15


Let
$P(x) = 24x^{24} + \sum_{j = 1}^{23}(24 - j)(x^{24 - j} + x^{24 + j}).$

Let $z_{1},z_{2},\ldots,z_{r}$ be the distinct zeros of $P(x),$ and let $z_{k}^{2} = a_{k} + b_{k}i$ for $k = 1,2,\ldots,r,$ where $i = \sqrt { - 1},$ and $a_{k}$ and $b_{k}$ are real numbers. Let
$\sum_{k = 1}^{r}|b_{k}| = m + n\sqrt {p},$

where $m,$ $n,$ and $p$ are integers and $p$ is not divisible by the square of any prime. Find $m + n + p.$
Solution

We can rewrite the definition of $P(x)$ as follows:

$P(x) = x^{47} + 2x^{46} + \cdots + 23x^{25} + 24x^{24} + 23x^{23} + \cdots + 2x^2 + x$

This can quite obviously be factored as:

$P(x) = x\left( x^{23} + x^{22} + \cdots + x^2 + x + 1 \right)^2$

Note that $\left( x^{23} + x^{22} + \cdots + x^2 + x + 1 \right) \cdot (x-1) = x^{24} - 1$. 

So the roots of $x^{23} + x^{22} + \cdots + x^2 + x + 1$ are exactly all $24$-th complex roots of $1$, except for the root $x=1$.

Let $\omega=\cos \frac{360^\circ}{24} + i\sin \frac{360^\circ}{24}$. Then the distinct zeros of $P$ are $0,\omega,\omega^2,\dots,\omega^{23}$.

We can clearly ignore the root $x=0$ as it does not contribute to the value that we need to compute.

The squares of the other roots are $\omega^2,~\omega^4,~\dots,~\omega^{24}=1,~\omega^{26}=\omega^2,~\dots,~\omega^{46}=\omega^{22}$.

Hence we need to compute the following sum:

$R = \sum_{k = 1}^{23} \left|\, \sin \left( k\cdot \frac{360^\circ}{12} \right) \right|$

Using basic properties of the sine function, we can simplify this to

$R = 4 \cdot \sum_{k = 1}^{5} \sin \left( k\cdot \frac{360^\circ}{12} \right)$

The five-element sum is just $\sin 30^\circ + \sin 60^\circ + \sin 90^\circ + \sin 120^\circ + \sin 150^\circ$. We know that $\sin 30^\circ = \sin 150^\circ = \frac 12$, $\sin 60^\circ = \sin 120^\circ = \frac{\sqrt 3}2$, and $\sin 90^\circ = 1$. Hence our sum evaluates to:

$R = 4 \cdot \left( 2\cdot \frac 12 + 2\cdot \frac{\sqrt 3}2 + 1 \right) = 8 + 4\sqrt 3$

Therefore the answer is $8+4+3 = \boxed{015}$.
Solution 2

Note that $x^k + x^{k-1} + \dots + x + 1 = \frac{x^{k+1} - 1}{x - 1}$. Our sum can be reformed as $\frac{x(x^{47} - 1) + x^2(x^{45} - 1) + \dots + x^{24}(x - 1)}{x-1}$

So $\frac{x^{48} + x^{47} + x^{46} + \dots + x^{25} - x^{24} - x^{23} - \dots - x}{x-1} = 0$

$x(x^{47} + x^{46} + \dots - x - 1) = 0$

$x^{47} + x^{46} + \dots - x - 1 = 0$

$x^{47} + x^{46} + \dots + x + 1 = 2(x^{23} + x^{22} + \dots + x + 1)$

$\frac{x^{48} - 1}{x - 1} = 2\frac{x^{24} - 1}{x - 1}$

$x^{48} - 1 - 2x^{24} + 2 = 0$

$(x^{24} - 1)^2 = 0$

And we can proceed as above.



**2003 AIME II Answer Key**

1. 336
2. 120
3. 192
4. 028
5. 216
6. 112
7. 400
8. 348
9. 006
10. 156
11. 578
12. 134
13. 683
14. 051
15. 015

 