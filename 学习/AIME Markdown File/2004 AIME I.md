# 2004 AIME I

## 2004 AIME I Problem 1

The digits of a positive integer $n$ are four consecutive integers in decreasing order when read from left to right. What is the sum of the possible remainders when $n$ is divided by $37$?
Solution

A brute-force solution to this question is fairly quick, but we'll try something slightly more clever: our numbers have the form ${\underline{(n+3)}}\,{\underline{(n+2)}}\,{\underline{( n+1)}}\,{\underline {(n)}}$$= 1000(n + 3) + 100(n + 2) + 10(n + 1) + n = 3210 + 1111n$, for $n \in \lbrace0, 1, 2, 3, 4, 5, 6\rbrace$.

Now, note that $3\cdot 37 = 111$ so $30 \cdot 37 = 1110$, and $90 \cdot 37 = 3330$ so $87 \cdot 37 = 3219$. So the remainders are all congruent to $n - 9 \mod{37}$. However, these numbers are negative for our choices of $n$, so in fact the remainders must equal $n + 28$.

Adding these numbers up, we get $(0 + 1 + 2 + 3 + 4 + 5 + 6) + 7\cdot28 = \boxed{217}$, our answer.


## 2004 AIME I Problem 2


Set $A$ consists of $m$ consecutive integers whose sum is $2m,$and set $B$ consists of $2m$ consecutive integers whose sum is $m.$ The absolute value of the difference between the greatest element of $A$ and the greatest element of $B$ is $99$. Find $m.$
Solution

Let us give the elements of our sets names: $A = \{x, x + 1, x + 2, \ldots, x + m - 1\}$ and $B = \{y, y + 1, \ldots, y + 2m - 1\}$. So we are given that $2m = x + (x + 1) + \ldots + (x + m - 1) = mx + (1 + 2 + \ldots + (m - 1)) = mx + \frac{m(m -1)}2,$ so $2 = x + \frac{m - 1}2$ and $x + (m - 1) = \frac{m + 3}2$. Also, $m = y + (y + 1) + \ldots + (y + 2m - 1) = 2my + \frac{2m(2m - 1)}2,$ so $1 = 2y + (2m - 1)$ so $2m = 2(y + 2m - 1)$ and $m = y + 2m - 1$.

Then by the given, $99 = |(x + m - 1) - (y + 2m - 1)| = \left|\frac{m + 3}2 - m\right| = \left|\frac{m - 3}2\right|$. $m$ is a positive integer so we must have $99 = \frac{m - 3}2$ and so $m = \boxed{201}$.
Solution 2

The thing about this problem is, you have some "choices" that you can make freely when you get to a certain point, and these choices won't affect the accuracy of the solution, but will make things a lot easier for us.

First, we note that for set $A$

$\frac{m(f + l)}{2} = 2m$

Where $f$ and $l$ represent the first and last terms of $A$. This comes from the sum of an arithmetic sequence.

Solving for $f+l$, we find the sum of the two terms is $4$.

Doing the same for set B, and setting up the equation with $b$ and $e$ being the first and last terms of set $B$,

$m(b+e) = m$

and so $b+e = 1$.

Now we know, assume that both sequences are increasing sequences, for the sake of simplicity. Based on the fact that set $A$ has half the number of elements as set $B$, and the difference between the greatest terms of the two two sequences is $99$ (forget about absolute value, it's insignificant here since we can just assume both sets end with positive last terms), you can set up an equation where $x$ is the last term of set A:

$2(x-(-x+4)+1) = 1+(x+99)-(-x-99+1)$

Note how i basically just counted the number of terms in each sequence here. It's made a lot simpler because we just assumed that the first term is negative and last is positive for each set, it has absolutely no effect on the end result! This is a great strategy that can help significantly simplify problems. Also note how exactly i used the fact that the first and last terms of each sequence sum to $4$ and $1$ respectively (add $x$ and $(-x+4)$ to see what i mean).

Solving this equation we find $x = 102$. We know the first and last terms have to sum to $4$ so we find the first term of the sequence is $-98$. Now, the solution is in clear sight, we just find the number of integers between $-98$ and $102$, inclusive, and it is $201$.

Note how this method is not very algebra heavy. It seems like a lot by the amount of text but really the first two steps are quite simple.


## 2004 AIME I Problem 3

A convex polyhedron $P$ has $26$ vertices, $60$ edges, and $36$ faces, $24$ of which are triangular and $12$ of which are quadrilaterals. A space diagonal is a line segment connecting two non-adjacent vertices that do not belong to the same face. How many space diagonals does $P$ have?
Solution

Every pair of vertices of the polyhedron determines either an edge, a face diagonal or a space diagonal. We have ${26 \choose 2} = \frac{26\cdot25}2 = 325$ total line segments determined by the vertices. Of these, $60$ are edges. Each triangular face has $0$ face diagonals and each quadrilateral face has $2$, so there are $2 \cdot 12 = 24$ face diagonals. This leaves $325 - 60 - 24 = \boxed{241}$ segments to be the space diagonals.


## 2004 AIME I Problem 4

A square has sides of length 2. Set $S$ is the set of all line segments that have length 2 and whose endpoints are on adjacent sides of the square. The midpoints of the line segments in set $S$ enclose a region whose area to the nearest hundredth is $k$. Find $100k$.
Solution

Without loss of generality, let $(0,0)$, $(2,0)$, $(0,2)$, and $(2,2)$ be the vertices of the square. Suppose the endpoints of the segment lie on the two sides of the square determined by the vertex $(0,0)$. Let the two endpoints of the segment have coordinates $(x,0)$ and $(0,y)$. Because the segment has length 2, $x^2+y^2=4$. Using the midpoint formula, we find that the midpoint of the segment has coordinates $\left(\frac{x}{2},\frac{y}{2}\right)$. Let $d$ be the distance from $(0,0)$ to $\left(\frac{x}{2},\frac{y}{2}\right)$. Using the distance formula we see that $d=\sqrt{\left(\frac{x}{2}\right)^2+\left(\frac{y}{2}\right)^2}= \sqrt{\frac{1}{4}\left(x^2+y^2\right)}=\sqrt{\frac{1}{4}(4)}=1$. Thus the midpoints lying on the sides determined by vertex $(0,0)$ form a quarter-circle with radius 1.

<div align=center><img src="http://latex.artofproblemsolving.com/a/e/b/aeb05f492043e52d88710a01680e50ced5053389.png" height="150px" /></div>

The set of all midpoints forms a quarter circle at each corner of the square. The area enclosed by all of the midpoints is $4-4\cdot \left(\frac{\pi}{4}\right)=4-\pi \approx .86$ to the nearest hundredth. Thus $100\cdot k=086$


## 2004 AIME I Problem 5

Alpha and Beta both took part in a two-day problem-solving competition. At the end of the second day, each had attempted questions worth a total of 500 points. Alpha scored 160 points out of 300 points attempted on the first day, and scored 140 points out of 200 points attempted on the second day. Beta who did not attempt 300 points on the first day, had a positive integer score on each of the two days, and Beta's daily success rate (points scored divided by points attempted) on each day was less than Alpha's on that day. Alpha's two-day success ratio was 300/500 = 3/5. The largest possible two-day success ratio that Beta could achieve is $m/n,$ where $m$ and $n$ are relatively prime positive integers. What is $m+n$?
Solution

Let $q$ be the number of questions Beta takes on day 1 and $a$ be the number it gets right. Let $b$ be the number it gets right on day 2.

These inequalities follow: $\frac{a}{q} < \frac{160}{300} = \frac{8}{15}$ $\frac{b}{500-q} < \frac{140}{200} = \frac{7}{10}$ Solving for a and b and adding the two inequalities: $a + b < \frac{8}{15}q + (350 - \frac{7}{10}q)$ $a + b < 350 - \frac{1}{6}q$ From here, we see the largest possible value of $a+b$ is $349$.

Checking our conditions, we know that $a$ must be positive so therefore $q$ must be positive. A quick check shows that for $2\le q \le 5$, $q$ follows all the conditions and results in $a+b=349$.

This makes Beta's success ratio $\frac{349}{500}$. Thus, the answer is $m+n = 349 + 500 = \boxed{849}$.


## 2004 AIME I Problem 6

An integer is called snakelike if its decimal representation $a_1a_2a_3\cdots a_k$ satisfies $a_i<a_{i+1}$ if $i$ is odd and $a_i>a_{i+1}$ if $i$ is even. How many snakelike integers between 1000 and 9999 have four distinct digits?
Solution

We divide the problem into two cases: one in which zero is one of the digits and one in which it is not. In the latter case, suppose we pick digits $x_1,x_2,x_3,x_4$ such that $x_1<x_2<x_3<x_4$. There are five arrangements of these digits that satisfy the condition of being snakelike: $x_1x_3x_2x_4$, $x_1x_4x_2x_3$, $x_2x_3x_1x_4$, $x_2x_4x_1x_3$, $x_3x_4x_1x_2$. Thus there are $5\cdot {9\choose 4}=630$ snakelike numbers which do not contain the digit zero.

In the second case we choose zero and three other digits such that $0<x_2<x_3<x_4$. There are three arrangements of these digits that satisfy the condition of being snakelike: $x_2x_30x_4$, $x_2x_40x_3$, $x_3x_40x_2$. Because we know that zero is a digit, there are $3\cdot{9\choose 3}=252$ snakelike numbers which contain the digit zero. Thus there are $630+252=\boxed{882}$ snakelike numbers.


## 2004 AIME I Problem 7

Let $C$ be the coefficient of $x^2$ in the expansion of the product $(1 - x)(1 + 2x)(1 - 3x)\cdots(1 + 14x)(1 - 15x).$ Find $|C|.$

Solution
Solution 1

Let our polynomial be $P(x)$.

It is clear that the coefficient of $x$ in $P(x)$ is $-1 + 2 - 3 + \ldots + 14 - 15 = -8$, so $P(x) = 1 -8x + Cx^2 + Q(x)$, where $Q(x)$ is some polynomial divisible by $x^3$.

Then $P(-x) = 1 + 8x + Cx^2 + Q(-x)$ and so $P(x)\cdot P(-x) = 1 + (2C - 64)x^2 + R(x)$, where $R(x)$ is some polynomial divisible by $x^3$.

However, we also know $P(x)\cdot P(-x) = (1 - x)(1 + x)(1 +2x)(1 - 2x) \cdots (1 - 15x)(1 + 15x)$ $= (1 - x^2)(1 - 4x^2)\cdots(1 - 225x^2)$ $= 1 - (1 + 4 + \ldots + 225)x^2 + R(x)$.

Equating coefficients, we have $2C - 64 = -(1 + 4 + \ldots + 225) = -1240$, so $-2C = 1176$ and $|C| = \boxed{588}$.
Solution 2

Let $S$ be the set of integers $\{-1,2,-3,\ldots,14,-15\}$. The coefficient of $x^2$ in the expansion is equal to the sum of the product of each pair of distinct terms, or $C = \sum_{1 \le i \neq j}^{15} S_iS_j$. Also, we know that $\begin{align*}\left(\sum_{i=1}^{n} S_i\right)^2 &= \left(\sum_{i=1}^{n} S_i^2\right) + 2\left(\sum_{1 \le i \neq j}^{15} S_iS_j\right)\\ (-8)^2 &= \frac{15(15+1)(2\cdot 15+1)}{6} + 2C\end{align*}$ where the left-hand sum can be computed from:
$\sum_{i=1}^{15} S_i = S_{15} + \left(\sum_{i=1}^{7} S_{2i-1} + S_{2i}\right) = -15 + 7 = -8$

and the right-hand sum comes from the formula for the sum of the first $n$ perfect squares. Therefore, $|C| = \left|\frac{64-1240}{2}\right| = \boxed{588}$.


## 2004 AIME I Problem 8

Define a regular $n$-pointed star to be the union of $n$ line segments $P_1P_2, P_2P_3,\ldots, P_nP_1$ such that

the points $P_1, P_2,\ldots, P_n$ are coplanar and no three of them are collinear,
each of the $n$ line segments intersects at least one of the other line segments at a point other than an endpoint,
all of the angles at $P_1, P_2,\ldots, P_n$ are congruent,
all of the $n$ line segments $P_2P_3,\ldots, P_nP_1$ are congruent, and
the path $P_1P_2, P_2P_3,\ldots, P_nP_1$ turns counterclockwise at an angle of less than 180 degrees at each vertex.

There are no regular 3-pointed, 4-pointed, or 6-pointed stars. All regular 5-pointed stars are similar, but there are two non-similar regular 7-pointed stars. How many non-similar regular 1000-pointed stars are there?
Solution

We use the Principle of Inclusion-Exclusion (PIE).

If we join the adjacent vertices of the regular $n$-star, we get a regular $n$-gon. We number the vertices of this $n$-gon in a counterclockwise direction: $0, 1, 2, 3, \ldots, n-1.$

A regular $n$-star will be formed if we choose a vertex number $m$, where $0 \le m \le n-1$, and then form the line segments by joining the following pairs of vertex numbers: $(0 \mod{n}, m \mod{n}),$ $(m \mod{n}, 2m \mod{n}),$ $(2m \mod{n}, 3m \mod{n}),$ $\cdots,$ $((n-2)m \mod{n}, (n-1)m \mod{n}),$ $((n-1)m \mod{n}, 0 \mod{n}).$

If $\gcd(m,n) > 1$, then the star degenerates into a regular $\frac{n}{\gcd(m,n)}$-gon or a (2-vertex) line segment if $\frac{n}{\gcd(m,n)}= 2$. Therefore, we need to find all $m$ such that $\gcd(m,n) = 1$.

Note that $n = 1000 = 2^{3}5^{3}.$

Let $S = \{1,2,3,\ldots, 1000\}$, and $A_{i}= \{i \in S \mid i\, \textrm{ divides }\,1000\}$. The number of $m$'s that are not relatively prime to $1000$ is: $\mid A_{2}\cup A_{5}\mid = \mid A_{2}\mid+\mid A_{5}\mid-\mid A_{2}\cap A_{5}\mid$ $= \left\lfloor \frac{1000}{2}\right\rfloor+\left\lfloor \frac{1000}{5}\right\rfloor-\left\lfloor \frac{1000}{2 \cdot 5}\right\rfloor$ $= 500+200-100 = 600.$

Vertex numbers $1$ and $n-1=999$ must be excluded as values for $m$ since otherwise a regular n-gon, instead of an n-star, is formed.

The cases of a 1st line segment of (0, m) and (0, n-m) give the same star. Therefore we should halve the count to get non-similar stars.

Therefore, the number of non-similar 1000-pointed stars is $\frac{1000-600-2}{2}= \boxed{199}.$

Note that in general, the number of $n$-pointed stars is given by $\frac{\phi(n)}{2} - 1$ (dividing by $2$ to remove the reflectional symmetry, subtracting $1$ to get rid of the $1$-step case), where $\phi(n)$ is the Euler's totient function. It is well-known that $\phi(n) = n\left(1-\frac{1}{p_1}\right)\left(1-\frac{1}{p_2}\right)\cdots \left(1-\frac{1}{p_n}\right)$, where $p_1,\,p_2,\ldots,\,p_n$ are the distinct prime factors of $n$. Thus $\phi(1000) = 1000\left(1 - \frac 12\right)\left(1 - \frac 15\right) = 400$, and the answer is $\frac{400}{2} - 1 = 199$.


## 2004 AIME I Problem 9

Let $ABC$ be a triangle with sides 3, 4, and 5, and $DEFG$ be a 6-by-7 rectangle. A segment is drawn to divide triangle $ABC$ into a triangle $U_1$ and a trapezoid $V_1$ and another segment is drawn to divide rectangle $DEFG$ into a triangle $U_2$ and a trapezoid $V_2$ such that $U_1$ is similar to $U_2$ and $V_1$ is similar to $V_2.$ The minimum value of the area of $U_1$ can be written in the form $m/n,$ where $m$ and $n$ are relatively prime positive integers. Find $m+n.$
Solution

We let $AB=3, AC=4, DE=6, DG=7$ for the purpose of labeling. Clearly, the dividing segment in $DEFG$ must go through one of its vertices, without loss of generality $D$. The other endpoint ($D'$) of the segment can either lie on $\overline{EF}$ or $\overline{FG}$. $V_2$ is a trapezoid with a right angle then, from which it follows that $V_1$ contains one of the right angles of $\triangle ABC$, and so $U_1$ is similar to $ABC$. Thus $U_1$, and hence $U_2$, are $3-4-5\,\triangle$s.

Suppose we find the ratio $r$ of the smaller base to the larger base for $V_2$, which consequently is the same ratio for $V_1$. By similar triangles, it follows that $U_1 \sim \triangle ABC$ by the same ratio $r$, and since the ratio of the areas of two similar figures is equal to the square of the ratio of their corresponding lengths, it follows that $[U_1] = r^2 \cdot [ABC] = 6r^2$.

<div align=center><img src="http://latex.artofproblemsolving.com/9/5/e/95e4c2b2b26503d8b7fa02636a0c6b5354f8a509.png" height="150px" /></div>

<div align=center><img src="http://latex.artofproblemsolving.com/3/8/d/38d98d7d3f19fa53824b61f1f011b3f6ab248b26.png" height="150px" /></div>

<div align=center><img src="https://latex.artofproblemsolving.com/e/3/f/e3f4ede63658070fbff16cca8f5353f7d5561902.png" height="150px" /></div>

<div align=center><img src="http://latex.artofproblemsolving.com/c/0/3/c035564e49401be97ad133f29406e5eebb12a26a.png" height="150px" /></div>

If $D'$ lies on $\overline{EF}$, then $ED' = \frac{9}{2},\, 8$; the latter can be discarded as extraneous. Therefore, $D'F = \frac{5}{2}$, and the ratio $r = \frac{D'F}{DG} = \frac{5}{14}$. The area of $[U_1] = 6\left(\frac{5}{14}\right)^2$ in this case.

If $D'$ lies on $\overline{FG}$, then $GD' = \frac{21}{4},\, \frac{28}{3}$; the latter can be discarded as extraneous. Therefore, $D'F = \frac{3}{4}$, and the ratio $r = \frac{D'F}{DE} = \frac{1}{8}$. The area of $[U_1] = 6\left(\frac{1}{8}\right)^2$ in this case.

Of the two cases, the second is smaller; the answer is $\frac{3}{32}$, and $m+n = \boxed{035}$.


## 2004 AIME I Problem 10

A circle of radius 1 is randomly placed in a 15-by-36 rectangle $ABCD$ so that the circle lies completely within the rectangle. Given that the probability that the circle will not touch diagonal $AC$ is $m/n,$ where $m$ and $n$ are relatively prime positive integers. Find $m + n.$

Solution

<div align=center><img src="http://wiki-images.artofproblemsolving.com/0/06/2004_I_AIME-10.png" height="200px" /></div>

Solution 1

The location of the center of the circle must be in the $34 \times 13$ rectangle that is one unit away from the sides of rectangle $ABCD$. We want to find the area of the right triangle with hypotenuse one unit away from $\overline{AC}$. Let this triangle be $A'B'C'$.

Notice that $ABC$ and $A'B'C'$ share the same incenter; this follows because the corresponding sides are parallel, and so the perpendicular inradii are concurrent, except that the inradii of $\triangle ABC$ extend one unit farther than those of $\triangle A'B'C'$. From $A = rs$, we note that $r_{ABC} = \frac{[ABC]}{s_{ABC}} = \frac{15 \cdot 36 /2}{(15+36+39)/2} = 6$. Thus $r_{A'B'C'} = r_{ABC} - 1 = 5$, and since the ratio of the areas of two similar figures is equal to the square of the ratio of their corresponding lengths, $[A'B'C'] = [ABC] \cdot \left(\frac{r_{A'B'C'}}{r_{ABC}}\right)^2 = \frac{15 \times 36}{2} \cdot \frac{25}{36} = \frac{375}{2}$.

The probability is $\frac{2[A'B'C']}{34 \times 13} = \frac{375}{442}$, and $m + n = \boxed{817}$.
Solution 2

<div align=center><img src="http://wiki-images.artofproblemsolving.com/0/06/2004_I_AIME-10.png" height="200px" /></div>

Let the bisector of $\angle CAD$ be $AE$, with $E$ on $CD$. By the angle bisector theorem, $DE = 36/5$. Since $\triangle AOR \sim \triangle AED$ ($O$ is the center of the circle), we find that $AR = 5$ since $OR = 1$. Also $AT = 35$ so $RT = OQ = 30$.

We can apply the same principle again to find that $PT = 27/2$, and since $QT = 1$, we find that $PQ = 27/2 - 1 = 25/2$. The locus of all possible centers of the circle on this "half" of the rectangle is triangle $\triangle OPQ$. There exists another congruent triangle that is symmetric over $AC$ that has the same area as triangle $\triangle OPQ$. $\triangle APQ$ has area $\frac {1}{2}\cdot OP \cdot PQ = \frac {1}{2}\cdot 30\cdot \frac {25}{2}$, since $\angle OQP$ is right. Thus the total area that works is $30\cdot \frac {25}{2} = 375$, and the area of the locus of all centers of any circle with radius 1 is $34\cdot 13 = 442$. Hence, the desired probability is $\frac {375}{442}$, and our answer is $\boxed {817}$.
Solution 3

<div align=center><img src="http://wiki-images.artofproblemsolving.com/5/5b/2004_I_AIME-10b.png" height="200px" /></div>

Again, the location of the center of the circle must be in the $34 \times 13$ rectangle that is one unit away from the sides of rectangle $ABCD$. We want to find the area of the right triangle with hypotenuse one unit away from $\overline{AC}$.

Let $A$ be at the origin, $B (36,0)$, $C (36,15)$, $D (0,15)$. The slope of $\overline{AC}$ is $\frac{15}{36} = \frac{5}{12}$. Let $\triangle A'B'C'$ be the right triangle with sides one unit inside $\triangle ABC$. Since $\overline{AC} || \overline{A'C'}$, they have the same slope, and the equation of $A'C'$ is $y = \frac{5}{12}x + c$. Manipulating, $5x - 12y + 12c = 0$. We need to find the value of $c$, which can be determined since $\overline{AC}$ is one unit away from $\overline{A'C'}$. Since the diagonal contains the origin, we can use the distance from a point to the line formula at the origin:

$\left|\frac{Ax + By + C}{\sqrt{A^2+B^2}}\right| = 1 \Longrightarrow \left|\frac{(5)(0) + (-12)(0) + 12c}{\sqrt{5^2 + (-12)^2}}\right| = 1$ $c = \pm \frac{13}{12}$

The two values of $c$ correspond to the triangle on top and below the diagonal. We are considering $A'B'C'$ which is below, so $c = -\frac{13}{12}$. Then the equation of $\overline{A'C'}$ is $y = \frac{5}{12}x - \frac{13}{12}$. Solving for its intersections with the lines $y = 1, x = 35$ (boundaries of the internal rectangle), we find the coordinates of $A'B'C'$ are at $A'\ (5,1)\ B'\ (35,1)\ C'\ (35,\frac{27}{2})$. The area is $\frac{1}{2}bh = \frac{1}{2}(35-5)\left(\frac{27}{2} - 1\right) = \frac{375}{2}$.

Finally, the probability is $\frac{2\cdot \mathrm{area\ of\ triangle}}{34 \times 13} = \frac{375}{442}$, and $m + n = 817$.

For this solution, if you didn't know the formula for the distance from a point to a line, you can use similar triangles to get the ratio:

$\frac{1}{36}=\frac{c}{39}$

This yields $c=\frac{13}{12}$.


## 2004 AIME I Problem 11


A solid in the shape of a right circular cone is 4 inches tall and its base has a 3-inch radius. The entire surface of the cone, including its base, is painted. A plane parallel to the base of the cone divides the cone into two solids, a smaller cone-shaped solid $C$ and a frustum-shaped solid $F,$ in such a way that the ratio between the areas of the painted surfaces of $C$ and $F$ and the ratio between the volumes of $C$ and $F$ are both equal to $k$. Given that $k=\frac m n,$ where $m$ and $n$ are relatively prime positive integers, find $m+n.$
Solution
Solution 1

Our original solid has volume equal to $V = \frac13 \pi r^2 h = \frac13 \pi 3^2\cdot 4 = 12 \pi$ and has surface area $A = \pi r^2 + \pi r \ell$, where $\ell$ is the slant height of the cone. Using the Pythagorean Theorem, we get $\ell = 5$ and $A = 24\pi$.

Let $x$ denote the radius of the small cone. Let $A_c$ and $A_f$ denote the area of the painted surface on cone $C$ and frustum $F$, respectively, and let $V_c$ and $V_f$ denote the volume of cone $C$ and frustum $F$, respectively. Because the plane cut is parallel to the base of our solid, $C$ is similar to the uncut solid and so the height and slant height of cone $C$ are $\frac{4}{3}x$ and $\frac{5}{3}x$, respectively. Using the formula for lateral surface area of a cone, we find that $A_c=\frac{1}{2}c\cdot \ell=\frac{1}{2}(2\pi x)\left(\frac{5}{3}x\right)=\frac{5}{3}\pi x^2$. By subtracting $A_c$ from the surface area of the original solid, we find that $A_f=24\pi - \frac{5}{3}\pi x^2$.

Next, we can calculate $V_c=\frac{1}{3}\pi r^2h=\frac{1}{3}\pi x^2 \left(\frac{4}{3}x\right)=\frac{4}{9}\pi x^3$. Finally, we subtract $V_c$ from the volume of the original cone to find that $V_f=12\pi - \frac{4}{9}\pi x^3$. We know that $\frac{A_c}{A_f}=\frac{V_c}{V_f}=k.$ Plugging in our values for $A_c$, $A_f$, $V_c$, and $V_f$, we obtain the equation $\frac{\frac{5}{3}\pi x^2}{24\pi - \frac{5}{3}\pi x^2}=\frac{\frac{4}{9}\pi x^3}{12\pi - \frac{4}{9}\pi x^3}$. We can take reciprocals of both sides to simplify this equation to $\frac{72}{5x^2} - 1 = \frac{27}{x^3} - 1$ and so $x = \frac{15}{8}$. Then $k = \frac{\frac{5}{3}\pi x^2}{24\pi - \frac{5}{3}\pi x^2}= \frac{125}{387} = \frac mn$ so the answer is $m+n=125+387=\boxed{512}$.
Solution 2

Our original solid $V$ has surface area $A_v = \pi r^2 + \pi r \ell$, where $\ell$ is the slant height of the cone. Using the Pythagorean Theorem or Pythagorean Triple knowledge, we obtain $\ell = 5$ and lateral area $A_\ell = 15\pi$. The area of the base is $A_B = 3^2\pi = 9\pi$.

$V$ and $C$ are similar cones, because the plane that cut out $C$ was parallel to the base of $V$. Let $x$ be the scale factor between the original cone and the small cone $C$ in one dimension. Because the scale factor is uniform in all dimensions, $x^2$ relates corresponding areas of $C$ and $V$, and $x^3$ relates corresponding volumes. Then, the ratio of the painted areas $\frac{A_c}{A_f}$ is $\frac{15\pi x^2}{9\pi + 15\pi - 15\pi x^2} = \frac{5 x^2}{8 - 5 x^2} = k$ and the ratio of the volumes $\frac{V_c}{V_f}$ is $\frac{x^3}{1 - x^3} = k$. Since both ratios are equal to $k$, they are equal to each other. Therefore, $\frac{5 x^2}{8 - 5 x^2} = \frac{x^3}{1 - x^3}$.

Now we must merely solve for x and substitute back into either ratio. Cross multiplying gives $5 x^2(1 - x^3) = x^3(8 - 5 x^2)$. Dividing both sides by $x^2$ and distributing the $x$ on the right, we have $5 - 5 x^3 = 8 x - 5 x^3$, and so $8 x = 5$ and $x = \frac{5}{8}$. Substituting back into the easier ratio, we have $\frac{(\frac{5}{8})^3}{1 - (\frac{5}{8})^3} = \frac{\frac{125}{512}}{\frac{387}{512}} = \frac{125}{387}$. And so we have $m + n = 125 + 387 = \boxed{512}$.


## 2004 AIME I Problem 12

Let $S$ be the set of ordered pairs $(x, y)$ such that $0 < x \le 1, 0<y\le 1,$ and $\left[\log_2{\left(\frac 1x\right)}\right]$ and $\left[\log_5{\left(\frac 1y\right)}\right]$ are both even. Given that the area of the graph of $S$ is $m/n,$ where $m$ and $n$ are relatively prime positive integers, find $m+n.$ The notation $[z]$ denotes the greatest integer that is less than or equal to $z.$
Solution

$\left\lfloor\log_2\left(\frac{1}{x}\right)\right\rfloor$ is even when

$x \in \left(\frac{1}{2},1\right) \cup \left(\frac{1}{8},\frac{1}{4}\right) \cup \left(\frac{1}{32},\frac{1}{16}\right) \cup \cdots$

Likewise: $\left\lfloor\log_5\left(\frac{1}{y}\right)\right\rfloor$ is even when

$y \in \left(\frac{1}{5},1\right) \cup \left(\frac{1}{125},\frac{1}{25}\right) \cup \left(\frac{1}{3125},\frac{1}{625}\right) \cup \cdots$

Graphing this yields a series of rectangles which become smaller as you move toward the origin. The $x$ interval of each box is given by the geometric sequence $\frac{1}{2} , \frac{1}{8}, \frac{1}{32}, \cdots$, and the $y$ interval is given by $\frac{4}{5} , \frac{4}{125}, \frac{4}{3125}, \cdots$

Each box is the product of one term of each sequence. The sum of these boxes is simply the product of the sum of each sequence or:

$\left(\frac{1}{2} + \frac{1}{8} + \frac{1}{32} \ldots \right)\left(\frac{4}{5} + \frac{4}{125} + \frac{4}{3125} \ldots \right)=\left(\frac{\frac{1}{2}}{1 - \frac{1}{4}}\right)\left(\frac{\frac{4}{5}}{1-\frac{1}{25}}\right)= \frac{2}{3} \cdot \frac{5}{6} = \frac{5}{9},$ and the answer is $m+n = 5 + 9 = \boxed{014}$.


## 2004 AIME I Problem 13

The polynomial $P(x)=(1+x+x^2+\cdots+x^{17})^2-x^{17}$ has $34$ complex roots of the form $z_k = r_k[\cos(2\pi a_k)+i\sin(2\pi a_k)], k=1, 2, 3,\ldots, 34,$ with $0 < a_1 \le a_2 \le a_3 \le \cdots \le a_{34} < 1$ and $r_k>0.$ Given that $a_1 + a_2 + a_3 + a_4 + a_5 = m/n,$ where $m$ and $n$ are relatively prime positive integers, find $m+n.$
Solution

We see that the expression for the polynomial $P$ is very difficult to work with directly, but there is one obvious transformation to make: sum the geometric series:

$\begin{align*} P(x) &= \left(\frac{x^{18} - 1}{x - 1}\right)^2 - x^{17} = \frac{x^{36} - 2x^{18} + 1}{x^2 - 2x + 1} - x^{17}\\ &= \frac{x^{36} - x^{19} - x^{17} + 1}{(x - 1)^2} = \frac{(x^{19} - 1)(x^{17} - 1)}{(x - 1)^2} \end{align*}$

This expression has roots at every $17$th root and $19$th roots of unity, other than $1$. Since $17$ and $19$ are relatively prime, this means there are no duplicate roots. Thus, $a_1, a_2, a_3, a_4$ and $a_5$ are the five smallest fractions of the form $\frac m{19}$ or $\frac n {17}$ for $m, n > 0$.

$\frac 3 {17}$ and $\frac 4{19}$ can both be seen to be larger than any of $\frac1{19}, \frac2{19}, \frac3{19}, \frac 1{17}, \frac2{17}$, so these latter five are the numbers we want to add.

$\frac1{19}+ \frac2{19}+ \frac3{19}+ \frac 1{17}+ \frac2{17}= \frac6{19} + \frac 3{17} = \frac{6\cdot17 + 3\cdot19}{17\cdot19} = \frac{159}{323}$ and so the answer is $159 + 323 = \boxed{482}$.


## 2004 AIME I Problem 14

A unicorn is tethered by a $20$-foot silver rope to the base of a magician's cylindrical tower whose radius is $8$ feet. The rope is attached to the tower at ground level and to the unicorn at a height of $4$ feet. The unicorn has pulled the rope taut, the end of the rope is $4$ feet from the nearest point on the tower, and the length of the rope that is touching the tower is $\frac{a-\sqrt{b}}c$ feet, where $a, b,$ and $c$ are positive integers, and $c$ is prime. Find $a+b+c.$
Solution

<div align=center><img src="http://latex.artofproblemsolving.com/e/7/a/e7a34c3d4ddfe19837ca395ee9dcd4db7baccec9.png" height="50px" /></div>

<div align=center><img src="http://latex.artofproblemsolving.com/7/8/f/78f5d0489f526f664af2aad1a7e6378370937e7d.png" height="200px" /></div>

Looking from an overhead view, call the center of the circle $O$, the tether point to the unicorn $A$ and the last point where the rope touches the tower $B$. $\triangle OAB$ is a right triangle because $OB$ is a radius and $BA$ is a tangent line at point $B$. We use the Pythagorean Theorem to find the horizontal component of $AB$ has length $4\sqrt{5}$.

<div align=center><img src="http://latex.artofproblemsolving.com/9/3/0/930d93ee9d48b6fc6a0869685c1358eccd0d16ac.png" height="50px" /></div>

Now look at a side view and "unroll" the cylinder to be a flat surface. Let $C$ be the bottom tether of the rope, let $D$ be the point on the ground below $A$, and let $E$ be the point directly below $B$. Triangles $\triangle CDA$ and $\triangle CEB$ are similar right triangles. By the Pythagorean Theorem $CD=8\cdot\sqrt{6}$.

Let $x$ be the length of $CB$. $\frac{CA}{CD}=\frac{CB}{CE}\implies \frac{20}{8\sqrt{6}}=\frac{x}{8\sqrt{6}-4\sqrt{5}}\implies x=\frac{60-\sqrt{750}}{3}$

Therefore $a=60, b=750, c=3, a+b+c=\boxed{813}$.


## 2004 AIME I Problem 15


For all positive integers $x$, let $f(x)=$\begin{cases}1 & \text{if }x = 1\\ \frac x{10} & \text{if }x\text{ is divisible by 10}\\ x+1 & \text{otherwise}\end{cases}$$ and define a sequence as follows: $x_1=x$ and $x_{n+1}=f(x_n)$ for all positive integers $n$. Let $d(x)$ be the smallest $n$ such that $x_n=1$. (For example, $d(100)=3$ and $d(87)=7$.) Let $m$ be the number of positive integers $x$ such that $d(x)=20$. Find the sum of the distinct prime factors of $m$.
Solution
Solution 1

We backcount the number of ways. Namely, we start at $x_{20} = 1$, which can only be reached if $x_{19} = 10$, and then we perform $18$ operations that either consist of $A: (-1)$ or $B: (\times 10)$. We represent these operations in a string format, starting with the operation that sends $f(x_{18}) = x_{19}$ and so forth downwards. There are $2^9$ ways to pick the first $9$ operations; however, not all $9$ of them may be $A: (-1)$ otherwise we return back to $x_{10} = 1$, contradicting our assumption that $20$ was the smallest value of $n$. Using complementary counting, we see that there are only $2^9 - 1$ ways.

Since we performed the operation $B: (\times 10)$ at least once in the first $9$ operations, it follows that $x_{10} \ge 20$, so that we no longer have to worry about reaching $1$ again. Thus the remaining $9$ operations can be picked in $2^9$ ways, with a total of $2^9(2^9 - 1) = 2^{18} - 2^9$ strings.

However, we must also account for a sequence of $10$ or more $A: (-1)$s in a row, because that implies that at least one of those numbers was divisible by $10$, yet the $\frac{x}{10}$ was never used, contradiction. We must use complementary counting again by determining the number of strings of $A,B$s of length $18$ such that there are $10$ $A$s in a row. The first ten are not included since we already accounted for that scenario above, so our string of $10$ $A$s must be preceded by a $B$. There are no other restrictions on the remaining seven characters. Letting $\square$ to denote either of the functions, and $^{[k]}$ to indicate that the character appears $k$ times in a row, then our bad strings can take the forms: $\begin{align*} &\underbrace{BA^{[10]}}\square \square \square \square \square \square \square \square \\ &\square \underbrace{BA^{[10]}}\square \square \square \square \square \square \square \\ &\qquad \quad \cdots \quad \cdots \\ &\square \square \square \square \square \square \square \underbrace{BA^{[10]}} \square \\ &\square \square \square \square \square \square \square \square \underbrace{BA^{[10]}} \\ \end{align*}$

There are $2^7$ ways to select the operations for the $7$ $\square$s, and $8$ places to place our $BA^{[10]}$ block. Thus, our answer is $2^{18} - 2^9 - 8 \cdot 2^7 = 2^9 \times 509$, and the answer is $\boxed{511}$.
Solution 2

We approach the problem by recursion. We partition the positive integers into the sets $\mathcal{A}_{n,k}=\{x\in\mathbb{Z}^+\,:\, d(x)=n\text{ and } x\equiv k\mod{10}\}.$ First, we note that $\mathcal{A}_{1,1}=\{1\}$, so by the disjointness of the $\mathcal{A}_{n,k}$'s, we know that $1$ is not in any of the other sets. Also, we note that $\mathcal{A}_{1,k}=\emptyset$ for $k=0,2,3,4,5,6,7,8,9$.

We claim that if $2\le k\le 9$ and $n\ge2$, then $|\mathcal{A}_{n,k}|=|\mathcal{A}_{n-1,k+1}|$. To prove this, we show that $f$ (the given function) maps $\mathcal{A}_{n,k}$ bijectively onto $\mathcal{A}_{n-1,k+1}$. If $x\in \mathcal{A}_{n,k}$, then $x\equiv k\mod{10}$, and $x\ne 1$, so $f(x)=x+1\equiv k+1\mod{10}$. Also, $f^{(n)}(x)=1$, where $n$ is the smallest positive integer for which this is true. Therefore, $f^{{n-1}}(f(x))=1$, where $n-1$ is the smallest integer for which this is true. Thus $f(x)\in\mathcal{A}_{n-1,k+1}$. Also, since $f(x)=x+1$ on this set, we see that $f(x)=f(y)$ implies that $x=y$. Hence $f$ is an injection. If $y\in\mathcal{A}_{n-1,k+1}$, then $y-1\equiv k\mod{10}$, where $2\le k\le 9$, so we know that $f(y-1)=y$, and $y-1\in \mathcal{A}_{n,k}$. Therefore, $f$ is a surjection, so it must be a bijection. Therefore, if $2\le k\le 9$ and $n\ge2$, then $|\mathcal{A}_{n,k}|=|\mathcal{A}_{n-1,k+1}|$.

We also claim that if $k=1$, $n\ge 2$ and $n\ne 11$, then $|\mathcal{A}_{n,k}|=|\mathcal{A}_{n-1,k+1}|$. The proof is the same as in the previous paragraph, though some additional clarification is needed to prove that $f$ is a surjection. If $y\in\mathcal{A}_{n-1,k+1}$, or rather $y-1\equiv k\equiv 1\mod{10}$, then if $y=2$, we see that $y-1=1$, and then $f(y-1)=1$, not $y$ as in the prior argument. However, this does not happen if $n\ne 11$. It is easy to check that $2\in\mathcal{A}_{10,2}$. Therefore, the only time that the above argument could fail is if $n-1=10$ and $k+1=2$. But in every other case, $|\mathcal{A}_{n,k}|=|\mathcal{A}_{n-1,k+1}|$.

Next, we claim that if $n\ge 3$, then $|\mathcal{A}_{n,0}|=\Big|\bigcup_{k=0}^9\mathcal{A}_{n-1,k}\Big|$ If $x\in\mathcal{A}_{n,0}$, then $f(x)=\tfrac{x}{10}$, which is clearly an injective map. Also, $f^{(n)}(x)=1$, where $n$ is the smallest positive integer for which this is true. Therefore, $f^{{n-1}}(f(x))=1$, where $n-1$ is the smallest integer for which this is true. Thus $f(x)\in\mathcal{A}_{n-1,k}$ for some $k$. Conversely, if $y\in \mathcal{A}_{n-1,k}$, then $f(10y)=y$, so $d(10y)=n$, so $10y\in\mathcal{A}_{n,0}$.

Based on these bijections, if we let $A_{n,k}=|\mathcal{A}_{n,k}|$, then $\begin{align*} A_{n,0}&=\sum_{k=0}^{9} A_{n-1,k}\\ A_{n,1}&=A_{n-1,2}\qquad\text{if }n\ne 11\\ A_{n,2}&=A_{n-1,3}\\ A_{n,3}&=A_{n-1,4}\\ &\vdots\\ A_{n,8}&=A_{n-1,9}\\ A_{n,9}&=A_{n-1,0}. \end{align*}$ Let $S_n=\sum_{k=0}^9 A_{n,k}$. Then by adding the above equations (valid if $n\ne 11$), we find that $S_n=2S_{n-1}-A_{n-1,1}.$ Now by using the above relations repeatedly, we find $A_{n-1,1}=A_{n-2,2}=A_{n-3,3}=\cdots=A_{n-9,9}=A_{n-10,0}=S_{n-11}.$ The first relation will only be valid if $n\ne 12$. Therefore, $S_n=2S_{n-1}-S_{n-11}$ for $n\ge 13$. For smaller values, it is easy to use the relations to compute that the terms are powers of $2$, although we note that $A_{10,1}=0$ because of the failure of the above argument. $$\begin{array}{c|cccccccccc|c} n&A_{n,1}&A_{n,2}&A_{n,3}&A_{n,4}&A_{n,5}&A_{n,6}&A_{n,7}&A_{n,8}&A_{n,9}&A_{n,0}&S_{n}\\\hline 1&1&0&0&0&0&0&0&0&0&0&1\\ 2&0&0&0&0&0&0&0&0&0&1&1\\ 3&0&0&0&0&0&0&0&0&1&1&2\\ 4&0&0&0&0&0&0&0&1&1&2&4\\ 5&0&0&0&0&0&0&1&1&2&4&8\\ 6&0&0&0&0&0&1&1&2&4&8&16\\ 7&0&0&0&0&1&1&2&4&8&16&32\\ 8&0&0&0&1&1&2&4&8&16&32&64\\ 9&0&0&1&1&2&4&8&16&32&64&128\\ 10&0&1&1&2&4&8&16&32&64&128&256\\ 11&\boxed{0}&1&2&4&8&16&32&64&128&256&511\\ 12&1&2&4&8&16&32&64&128&256&511&1022\\ \end{array}$$ 

After this, we can simply use the recurrence relation for $S_n$, finding 

$\begin{array}{c|l} n&S_n\\\hline 1&1\\ 2&1\\ 3&2^1\\ 4&2^2\\ 5&2^3\\ 6&2^4\\ 7&2^5\\ 8&2^6\\ 9&2^7\\ 10&2^8\\ 11&2^9-1\\ 12&2^{10}-2\\ 13&2^{11}-1\cdot 5\\ 14&2^{12}-2\cdot 6\\ 15&2^{13}-4\cdot 7\\ 16&2^{14}-8\cdot 8\\ 17&2^{15}-16\cdot 9\\ 18&2^{16}-32\cdot 10\\ 19&2^{17}-64\cdot 11\\ 20&2^{18}-128\cdot 12. \end{array}$ 

Therefore, there are $2^{18}- 2^9\cdot 3$ positive integers $x$ with $d(x)=20$. This factors as $2^9(2^{9}-3)=2^9(509)$, where $509$ is prime. Thus the answer is $\boxed{511}$.



2004 AIME I Answer Key

1. 217

2. 201

3. 241

4. 086

5. 849

6. 882

7. 588

8. 199

9. 035

10. 817

11. 512

12. 014

13. 482

14. 813

15. 511

   ​

