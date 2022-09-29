# 2004 AIME II

## 2004 AIME II Problem 1

A chord of a circle is perpendicular to a radius at the midpoint of the radius. The ratio of the area of the larger of the two regions into which the chord divides the circle to the smaller can be expressed in the form $\frac{a\pi+b\sqrt{c}}{d\pi-e\sqrt{f}},$ where $a, b, c, d, e,$ and $f$ are positive integers, $a$ and $e$ are relatively prime, and neither $c$ nor $f$ is divisible by the square of any prime. Find the remainder when the product $abcdef$ is divided by 1000.

<div align=center><img src="http://wiki-images.artofproblemsolving.com/7/75/2004_AIME_II_Problem_1.png" height="150px" /></div>

Solution

Let $r$ be the length of the radius of the circle. A right triangle is formed by half of the chord, half of the radius (since the chord bisects it), and the radius. Thus, it is a $30^\circ$ - $60^\circ$ - $90^\circ$ triangle, and the area of two such triangles is $2 \cdot \frac{1}{2} \cdot \frac{r}{2} \cdot \frac{r\sqrt{3}}{2} = \frac{r^2\sqrt{3}}{4}$. The central angle which contains the entire chord is $60 \cdot 2 = 120$ degrees, so the area of the sector is $\frac{1}{3}r^2\pi$; the rest of the area of the circle is then equal to $\frac{2}{3}r^2\pi$.

The smaller area cut off by the chord is equal to the area of the sector minus the area of the triangle. The larger area is equal to the area of the circle not within the sector and the area of the triangle. Thus, the desired ratio is $\frac{\frac{2}{3}r^2\pi + \frac{r^2\sqrt{3}}{4}}{\frac{1}{3}r^2\pi - \frac{r^2\sqrt{3}}{4}} = \frac{8\pi + 3\sqrt{3}}{4\pi - 3\sqrt{3}}$

Therefore, $abcdef = 2^53^4 = 2592 \Longrightarrow \boxed{592}$.


## 2004 AIME II Problem 2

A jar has $10$ red candies and $10$ blue candies. Terry picks two candies at random, then Mary picks two of the remaining candies at random. Given that the probability that they get the same color combination, irrespective of order, is $m/n,$ where $m$ and $n$ are relatively prime positive integers, find $m+n.$
Solution

The probability that Terry picks two red candies is $\frac{10 \cdot 9}{20 \cdot 19} = \frac{9}{38}$, and the probability that Mary picks two red candies after Terry chooses two red candies is $\frac{7\cdot8}{18\cdot17} = \frac{28}{153}$. So the probability that they both pick two red candies is $\frac{9}{38} \cdot \frac{28}{153} = \frac{14}{323}$. The same calculation works for the blue candies.

The probability that Terry picks two different candies is $\frac{20\cdot10}{20\cdot19} = \frac{10}{19}$, and the probability that Mary picks two different candies after Terry picks two different candies is $\frac{18\cdot 9}{18\cdot 17} = \frac{9}{17}$. Thus, the probability that they both choose two different candies is $\frac{10}{19}\cdot\frac{9}{17} = \frac{90}{323}$. Then the total probability is

$2 \cdot \frac{14}{323} + \frac{90}{323} = \frac{118}{323}$

and so the answer is $118 + 323 = \boxed{441}$.


In the above calculations, we treated the choices as ordered; that is, Terry chose first one candy, then a second, and so on. We could also solve the problem using unordered choices. The probabilities calculated will all be the same, but the calculations will appear somewhat different. For instance, the probability that Mary chooses two red candies after Terry chose two red candies will have the form $\frac{{8\choose 2}}{{18 \choose 2}}$, and the probability that Terry chooses two different candies will have the form $\frac{{10\choose 1}\cdot{10\choose 1}}{{20\choose2}}$. It is not difficult to see that these yield the same results as our calculations above, as we would expect.


## 2004 AIME II Problem 3

A solid rectangular block is formed by gluing together $N$ congruent 1-cm cubes face to face. When the block is viewed so that three of its faces are visible, exactly $231$ of the 1-cm cubes cannot be seen. Find the smallest possible value of $N.$
Solution

The $231$ cubes which are not visible must lie below exactly one layer of cubes. Thus, they form a rectangular solid which is one unit shorter in each dimension. If the original block has dimensions $l \times m \times n$, we must have $(l - 1)\times(m-1) \times(n - 1) = 231$. The prime factorization of $231 = 3\cdot7\cdot11$, so we have a variety of possibilities; for instance, $l - 1 = 1$ and $m - 1 = 11$ and $n - 1 = 3 \cdot 7$, among others. However, it should be fairly clear that the way to minimize $l\cdot m\cdot n$ is to make $l$ and $m$ and $n$ as close together as possible, which occurs when the smaller block is $3 \times 7 \times 11$. Then the extra layer makes the entire block $4\times8\times12$, and $N= \boxed{384}$.

An alternate way to visualize the problem is to count the blocks that can be seen and subtract the blocks that cannot be seen. In the given block with dimensions $l\times m \times n$, the three faces have $lm$, $mn$, and $ln$ blocks each. However, $l$ blocks along the first edge, $m$ blocks along the second edge, and $n$ blocks along the third edge were counted twice, so they must be subtracted. After subtracting these three edges, 1 block has not been counted - it was added three times on each face, but subtracted three times on each side. Thus, the total number of visible cubes is $lm+mn+ln-l-m-n+1$, and the total number of invisible cubes is $lmn-lm-mn-ln+l+m+n-1$, which can be factored into $(l-1)(m-1)(n-1)$.


## 2004 AIME II Problem 4

How many positive integers less than 10,000 have at most two different digits?
Solution

First, let's count numbers with only a single digit. We have nine of these for each length, and four lengths, so 36 total numbers.

Now, let's count those with two distinct digits. We handle the cases "0 included" and "0 not included" separately.

There are ${9 \choose 2}$ ways to choose two digits, $A$ and $B$. Given two digits, there are $2^n - 2$ ways to arrange them in an $n$-digit number, for a total of $(2^1 - 2) + (2^2 - 2) + (2^3 -2) + (2^4 - 2) = 22$ such numbers (or we can list them: $AB, BA, AAB, ABA, BAA, ABB, BAB, BBA, AAAB, AABA, ABAA,$ $BAAA, AABB, ABAB, BAAB, ABBA, BABA, BBAA, ABBB, BABB, BBAB, BBBA$). Thus, we have ${9 \choose 2} \cdot 22 = 36\cdot22 = 792$ numbers of this form.

Now, suppose 0 is one of our digits. We have nine choices for the other digit. For each choice, we have $2^{n - 1} - 1$ $n$-digit numbers we can form, for a total of $(2^0 - 1) + (2^1 - 1) + (2^2 - 1) + (2^3 - 1) = 11$ such numbers (or we can list them: $A0, A00, A0A, AA0, A000, AA00, A0A0, A00A, AAA0, AA0A, A0AA$). This gives us $9\cdot 11 = 99$ numbers of this form.

Thus, in total, we have $36 + 792 + 99 = 927$ such numbers.


## 2004 AIME II Problem 5

In order to complete a large job, $1000$ workers were hired, just enough to complete the job on schedule. All the workers stayed on the job while the first quarter of the work was done, so the first quarter of the work was completed on schedule. Then $100$ workers were laid off, so the second quarter of the work was completed behind schedule. Then an additional $100$ workers were laid off, so the third quarter of the work was completed still further behind schedule. Given that all workers work at the same rate, what is the minimum number of additional workers, beyond the $800$ workers still on the job at the end of the third quarter, that must be hired after three-quarters of the work has been completed so that the entire project can be completed on schedule or before?
Solution

A train is traveling at $1000$ miles per hour and has one hour to reach its destination $1000$ miles away. After $15$ minutes and $250$ miles it slows to $900$ mph, and thus takes $\frac{250}{900}(60)=\frac{50}{3}$ minutes to travel the next $250$ miles. Then it slows to $800$ mph, so the next quarter takes $\frac{250}{800}(60)=\frac{150}{8}$. The train then has $60-15-\frac{50}{3}-\frac{150}{8}=230/24$ minutes left to travel 250 miles, and doing the arithmetic shows that during this last stretch it must travel more than $1565$ mph to make it on time. Therefore the company needs to add $1566-800 = \boxed{766}$ more workers.

## 2004 AIME II Problem 6

Three clever monkeys divide a pile of bananas. The first monkey takes some bananas from the pile, keeps three-fourths of them, and divides the rest equally between the other two. The second monkey takes some bananas from the pile, keeps one-fourth of them, and divides the rest equally between the other two. The third monkey takes the remaining bananas from the pile, keeps one-twelfth of them, and divides the rest equally between the other two. Given that each monkey receives a whole number of bananas whenever the bananas are divided, and the numbers of bananas the first, second, and third monkeys have at the end of the process are in the ratio $3: 2: 1,$what is the least possible total for the number of bananas?
Solution

Denote the number of bananas the first monkey took from the pile as $b_1$, the second $b_2$, and the third $b_3$; the total is $b_1 + b_2 + b_3$. Thus, the first monkey got $\frac{3}{4}b_1 + \frac{3}{8}b_2 + \frac{11}{24}b_3$, the second monkey got $\frac{1}{8}b_1 + \frac{1}{4}b_2 + \frac{11}{24}b_3$, and the third monkey got $\frac{1}{8}b_1 + \frac{3}{8}b_2 + \frac{1}{12}b_3$.

Taking into account the ratio aspect, say that the third monkey took $x$ bananas in total. Then,

$x = \frac{1}{4}b_1 + \frac{1}{8}b_2 + \frac{11}{72}b_3 = \frac{1}{16}b_1 + \frac{1}{8}b_2 + \frac{11}{48}b_3 = \frac{1}{8}b_1 + \frac{3}{8}b_2 + \frac{1}{12}b_3$

Solve this to find that $\frac{b_1}{11} = \frac{b_2}{13} = \frac{b_3}{27}$. All three fractions must be integral. Also note some other conditions we have picked up in the course of the problem, namely that $b_1$ is divisible by $8$, $b_2$ is divisible by $8$, and $b_3$ is divisible by $72$ (however, since the denominator contains a $27$, the factors of $3$ cancel, and it only really needs to be divisible by $8$). Thus, the minimal value is when each fraction is equal to $8$, and the solution is $8(11 + 13 + 27) = 408$.


## 2004 AIME II Problem 7

$ABCD$ is a rectangular sheet of paper that has been folded so that corner $B$ is matched with point $B'$ on edge $AD.$ The crease is $EF,$ where $E$ is on $AB$ and $F$ is on $CD.$ The dimensions $AE=8, BE=17,$ and $CF=3$ are given. The perimeter of rectangle $ABCD$ is $m/n,$ where $m$ and $n$ are relatively prime positive integers. Find $m+n.$

Solution
Solution 1 (synthetic)

<div align=center><img src="http://latex.artofproblemsolving.com/e/8/4/e8476256c3a6cf7cf8b766055c9c035fb86817da.png" height="200px" /></div>

Since $EF$ is the perpendicular bisector of $\overline{BB'}$, it follows that $BE = B'E$ (by SAS). By the Pythagorean Theorem, we have $AB' = 15$. Similarly, from $BF = B'F$, we have $\begin{align*} BC^2 + CF^2 = B'D^2 + DF^2 &\Longrightarrow BC^2 + 9 = (BC - 15)^2 + 484 \\ BC &= \frac{70}{3} \end{align*}$ Thus the perimeter of $ABCD$ is $2\left(25 + \frac{70}{3}\right) = \frac{290}{3}$, and the answer is $m+n=\boxed{293}$.
Solution 2 (analytic)

Let $A = (0,0), B=(0,25)$, so $E = (0,8)$ and $F = (l,22)$, and let $l = AD$ be the length of the rectangle. The slope of $EF$ is $\frac{14}{l}$ and so the equation of $EF$ is $y -8 = \frac{14}{l}x$. We know that $EF$ is perpendicular to and bisects $BB'$. The slope of $BB'$ is thus $\frac{-l}{14}$, and so the equation of $BB'$ is $y -25 = \frac{-l}{14}x$. Let the point of intersection of $EF, BB'$ be $G$. Then the y-coordinate of $G$ is $\frac{25}{2}$, so 

$\begin{align*} \frac{14}{l}x &= y-8 = \frac{9}{2}\\ \frac{-l}{14}x &= y-25 = -\frac{25}{2}\\ \end{align*}$ 

Dividing the two equations yields
$l^2 = \frac{25 \cdot 14^2}{9} \Longrightarrow l = \frac{70}{3}$

The answer is $\boxed{293}$ as above.
Solution 3 (Coordinate Bashing)

Firstly, observe that if we are given that $AE=8$ and $BE=17$, the length of the triangle is given and the height depends solely on the length of $CF$. Let Point $A = (0,0)$. Since $AE=8$, point E is at (8,0). Next, point $B$ is at $(25,0)$ since $BE=17$ and point $B'$ is at $(0,-15)$ since $BE=AE$ by symmetry. Draw line segment $BB'$. Notice that this is perpendicular to $EF$ by symmetry. Next, find the slope of EB, which is $\frac{15}{25}=\frac{3}{5}$. Then, the slope of $EF$ is -$\frac{5}{3}$.

Line EF can be written as y=$-\frac{5}{3}x+b$. Plug in the point $(8,0)$, and we get the equation of EF to be y=$_\frac{5}{3}x+\frac{40}{3}$. Since the length of $AB$=25, a point on line $EF$ lies on $DC$ when $x=25-3=22$. Plug in $x=22$ into our equation to get $y=-\frac{70}{3}$. $|y|=BC=\frac{70}{3}$. Therefore, our answer is $2(AB+BC)=2\left(25+\frac{70}{3}\right)=2\left(\frac{145}{3}\right)=\frac{290}{3}= \boxed{293}$.
Solution 4 (Trig)

Firstly, note that $B'E=BE=17$, so $AB'=\sqrt{17^2-8^2}=15$. Then let $\angle BEF=\angle B'EF=\theta$, so $\angle B'EA = \pi-2\theta$. Then $\tan(\pi-2\theta)=\frac{15}{8}$, or

$\frac{2\tan(\theta)}{\tan^2(\theta)-1}=\frac{15}{8}$ using supplementary and double angle identities. Multiplying though and factoring yields

$(3\tan(\theta)-5)(5\tan(\theta)+3)=0$

It is clear from the problem setup that $0<\theta<\frac\pi2$, so the correct value is $\tan(\theta)=\frac53$. Next, extend rays $\overrightarrow{BC}$ and $\overrightarrow{EF}$ to intersect at $C'$. Then $\tan(\theta)=\frac{BC'}{17}=\frac53$, so $BC'=\frac{85}{3}$. By similar triangles, $CC'=\frac{3}{17}BC'=\frac{15}{3}$, so $BC=\frac{70}{3}$. The perimeter is $\frac{140}{3}+50=\frac{290}{3}\Longrightarrow \boxed{293}$


## 2004 AIME II Problem 8

How many positive integer divisors of $2004^{2004}$ are divisible by exactly 2004 positive integers?
Solution

The prime factorization of 2004 is $2^2\cdot 3\cdot 167$. Thus the prime factorization of $2004^{2004}$ is $2^{4008}\cdot 3^{2004}\cdot 167^{2004}$.

We can count the number of divisors of a number by multiplying together one more than each of the exponents of the prime factors in its prime factorization. For example, the number of divisors of $2004=2^2\cdot 3^1\cdot 167^1$ is $(2+1)(1+1)(1+1)=12$.

A positive integer divisor of $2004^{2004}$ will be of the form $2^a\cdot 3^b\cdot 167^c$. Thus we need to find how many $(a,b,c)$ satisfy
$(a+1)(b+1)(c+1)=2^2\cdot 3\cdot 167.$

We can think of this as partitioning the exponents to $a+1,$ $b+1,$ and $c+1$. So let's partition the 2's first. There are two 2's so this is equivalent to partitioning two items in three containers. We can do this in ${4 \choose 2} = 6$ ways. We can partition the 3 in three ways and likewise we can partition the 167 in three ways. So we have $6\cdot 3\cdot 3 = 054$ as our answer.


## 2004 AIME II Problem 9

A sequence of positive integers with $a_1=1$ and $a_9+a_{10}=646$ is formed so that the first three terms are in geometric progression, the second, third, and fourth terms are in arithmetic progression, and, in general, for all $n\ge1,$ the terms $a_{2n-1}, a_{2n}, a_{2n+1}$ are in geometric progression, and the terms $a_{2n}, a_{2n+1},$ and $a_{2n+2}$ are in arithmetic progression. Let $a_n$ be the greatest term in this sequence that is less than $1000$. Find $n+a_n.$
Solution

Let $x = a_2$; then solving for the next several terms, we find that $a_3 = x^2,\ a_4 = x(2x-1),\ a_5$ $= (2x-1)^2,\ a_6$ $= (2x-1)(3x-2)$, and in general, $a_{2n} = f(n-1)f(n)$, $a_{2n+1} = f(n)^2$, where $f(n) = nx - (n-1)$.[1]

From $a_9 + a_{10} = f(4)^2 + f(4)f(5) = (4x-3)(9x-7) = 646 = 2\cdot 17 \cdot 19$, we find that by either the quadratic formula or trial-and-error/modular arithmetic that $x=5$. Thus $f(n) = 4n+1$, and we need to find the largest $n$ such that either $f(n)^2\, \mathrm{or}\, f(n)f(n-1) < 1000$. This happens with $f(7)f(8) = 29 \cdot 33 = 957$, and this is the $2(8) = 16$th term of the sequence.

The answer is $957 + 16 = \boxed{973}$.

^ We can show this by simultaneous induction: since $\begin{align*}a_{2n} &= 2a_{2n-1} - a_{2n-2} = 2a_{2(n-1)+1} - a_{2(n-1)} \\ &= 2f(n-1)^2 - f(n-2)f(n-1) \\ &= f(n-1)[2f(n-1) - f(n-2)] \\ &= f(n-1)[(2n-2-n+2)x-(2n-4-n+3)] \\ &= f(n-1)f(n) \end{align*}$ 

and 

$\begin{align*}a_{2n+1} &= \frac{a_{2n}^2}{a_{2n-1}} = \frac{f(n-1)^2f(n)^2}{f(n-1)^2} = f(n)^2 \\ \end{align*}$


## 2004 AIME II Problem 10


Let $S$ be the set of integers between $1$ and $2^{40}$ whose binary expansions have exactly two $1$'s. If a number is chosen at random from $S,$ the probability that it is divisible by $9$ is $p/q,$ where $p$ and $q$ are relatively prime positive integers. Find $p+q.$
Solution 1

A positive integer $n$ has exactly two 1s in its binary representation exactly when $n = 2^j + 2^k$ for $j \neq k$ nonnegative integers. Thus, the set $S$ is equal to the set $\{n \in \mathbb{Z} \mid n = 2^j + 2^k \,\mathrm{ and }\, 0 \leq j < k \leq 39\}$. (The second condition ensures simultaneously that $j \neq k$ and that each such number less than $2^{40}$ is counted exactly once.) This means there are ${40 \choose 2} = 780$ total such numbers.

Now, consider the powers of $2$ mod $9$: $2^{6n} \equiv 1, 2^{6n + 1} \equiv 2, 2^{6n + 2} \equiv 4, 2^{6n + 3} \equiv 8 \equiv -1,$ $2^{6n + 4} \equiv 7 \equiv -2,$ $2^{6n + 5} \equiv 5 \equiv -4 \mod 9$.

It's clear what the pairs $j, k$ can look like. If one is of the form $6n$ (7 choices), the other must be of the form $6n + 3$ (7 choices). If one is of the form $6n + 1$ (7 choices) the other must be of the form $6n + 4$ (6 choices). And if one is of the form $6n + 2$ (7 choices), the other must be of the form $6n + 5$ (6 choices). This means that there are $7\cdot 7 + 7\cdot 6 + 7\cdot 6 = 49 + 42 +42 = 133$ total "good" numbers.

The probability is $\frac{133}{780}$, and the answer is $133 + 780 = \boxed{913}$.
Solution 2

Note that $2^3 \equiv -1\text{ (mod 9)}$. Since $2^6 = 64 \equiv 1\text{ (mod 9)}$, multiplying by $2^6$ gives $2^{3+6n} \equiv -1\text{ (mod 9)}$.

The solutions that work are in the form $2^a+2^b$. Since $2^{3+6n}+1 \equiv 0\text{ (mod 9)}$, all of the solutions are in this form or this form multiplied by $2^x$ where $0 \leq 3+6n+x \leq 39$.

Now we just do casework: $2^3+1: 2^0 \text{ to } 2^{36}$ $2^9+1: 2^0 \text{ to } 2^{30}$ $2^{15}+1: 2^0 \text{ to } 2^{24}$ $2^{21}+1: 2^0 \text{ to } 2^{18}$ $2^{27}+1: 2^0 \text{ to } 2^{12}$ $2^{33}+1: 2^0 \text{ to } 2^6$ $2^{39}+1: 2^0$

So, the numerator is $37+31+25+19+13+7+1 = 133$. The denominator is just ${40 \choose 2}$, so the probability is $\frac{133}{780}$, and the answer is $133 + 780 = \boxed{913}$.


## 2004 AIME II Problem 11

A right circular cone has a base with radius $600$ and height $200\sqrt{7}.$ A fly starts at a point on the surface of the cone whose distance from the vertex of the cone is $125$, and crawls along the surface of the cone to a point on the exact opposite side of the cone whose distance from the vertex is $375\sqrt{2}.$ Find the least distance that the fly could have crawled.
Solution

The easiest way is to unwrap the cone into a circular sector. Center the sector at the origin with one radius on the positive $x$-axis and the angle $\theta$ going counterclockwise. The circumference of the base is $C=1200\pi$. The sector's radius (cone's sweep) is $R=\sqrt{r^2+h^2}=\sqrt{600^2+(200\sqrt{7})^2}=\sqrt{360000+280000}=\sqrt{640000}=800$. Setting $\theta R=C\implies 800\theta=1200\pi\implies\theta=\frac{3\pi}{2}$.

If the starting point $A$ is on the positive $x$-axis at $(125,0)$ then we can take the end point $B$ on $\theta$'s bisector at $\frac{3\pi}{4}$ radians along the $y=-x$ line in the second quadrant. Using the distance from the vertex puts $B$ at $(-375,375)$. Thus the shortest distance for the fly to travel is along segment $AB$ in the sector, which gives a distance $\sqrt{(-375-125)^2+(375-0)^2}=125\sqrt{4^2+3^2}=\boxed{625}$.


## 2004 AIME II Problem 12

Let $ABCD$ be an isosceles trapezoid, whose dimensions are $AB = 6, BC=5=DA,$and $CD=4.$ Draw circles of radius 3 centered at $A$ and $B,$ and circles of radius 2 centered at $C$ and $D.$ A circle contained within the trapezoid is tangent to all four of these circles. Its radius is $\frac{-k+m\sqrt{n}}p,$ where $k, m, n,$ and $p$ are positive integers, $n$ is not divisible by the square of any prime, and $k$ and $p$ are relatively prime. Find $k+m+n+p.$
Solution

Let the radius of the center circle be $r$ and its center be denoted as $O$.

<div align=center><img src="http://latex.artofproblemsolving.com/c/c/8/cc8ff842fe3c6220ceb09a3d5768b6eb51baa79d.png" height="200px" /></div>

Clearly line $AO$ passes through the point of tangency of circle $A$ and circle $O$. Let $y$ be the height from the base of the trapezoid to $O$. From the Pythagorean Theorem, $3^2 + y^2 = (r + 3)^2 \Longrightarrow y = \sqrt {r^2 + 6r}.$

We use a similar argument with the line $DO$, and find the height from the top of the trapezoid to $O$, $z$, to be $z = \sqrt {r^2 + 4r}$.

Now $y + z$ is simply the height of the trapezoid. Let $D'$ be the foot of the perpendicular from $D$ to $AB$; then $AD' = 3 - 2 = 1$. By the Pythagorean Theorem, $(AD')^2 + (DD')^2 = (AD)^2 \Longrightarrow DD' = \sqrt{24}$ so we need to solve the equation $\sqrt {r^2 + 4r} + \sqrt {r^2 + 6r} = \sqrt {24}$. We can solve this by moving one radical to the other side, and squaring the equation twice to end with a quadratic equation.

Solving this, we get $r = \frac { - 60 + 48\sqrt {3}}{23}$, and the answer is $k + m + n + p = 60 + 48 + 3 + 23 = \boxed{134}$.


## 2004 AIME II Problem 13

Let $ABCDE$ be a convex pentagon with $AB \parallel CE, BC \parallel AD, AC \parallel DE, \angle ABC=120^\circ, AB=3, BC=5,$ and $DE = 15.$ Given that the ratio between the area of triangle $ABC$ and the area of triangle $EBD$ is $m/n,$ where $m$ and $n$ are relatively prime positive integers, find $m+n.$
Solution

Let the intersection of $\overline{AD}$ and $\overline{CE}$ be $F$. Since $AB \parallel CE, BC \parallel AD,$ it follows that $ABCF$ is a parallelogram, and so $\triangle ABC \cong \triangle CFA$. Also, as $AC \parallel DE$, it follows that $\triangle ABC \sim \triangle EFD$.

<div align=center><img src="http://latex.artofproblemsolving.com/d/2/3/d23b2e8101396634464f7a743d499f001c678203.png" height="150px" /></div>

By the Law of Cosines, $AC^2 = 3^2 + 5^2 - 2 \cdot 3 \cdot 5 \cos 120^{\circ} = 49 \Longrightarrow AC = 7$. Thus the length similarity ratio between $\triangle ABC$ and $\triangle EFD$ is $\frac{AC}{ED} = \frac{7}{15}$.

Let $h_{ABC}$ and $h_{BDE}$ be the lengths of the altitudes in $\triangle ABC, \triangle BDE$ to $AC, DE$ respectively. Then, the ratio of the areas $\frac{[ABC]}{[BDE]} = \frac{\frac 12 \cdot h_{ABC} \cdot AC}{\frac 12 \cdot h_{BDE} \cdot DE} = \frac{7}{15} \cdot \frac{h_{ABC}}{h_{BDE}}$.

However, $h_{BDE} = h_{ABC} + h_{CAF} + h_{EFD}$, with all three heights oriented in the same direction. Since $\triangle ABC \cong \triangle CFA$, it follows that $h_{ABC} = h_{CAF}$, and from the similarity ratio, $h_{EFD} = \frac{15}{7}h_{ABC}$. Hence $\frac{h_{ABC}}{h_{BDE}} = \frac{h_{ABC}}{2h_{ABC} + \frac {15}7h_{ABC}} = \frac{7}{29}$, and the ratio of the areas is $\frac{7}{15} \cdot \frac 7{29} = \frac{49}{435}$. The answer is $m+n = \boxed{484}$.


## 2004 AIME II Problem 14

Consider a string of $n$ $7$'s, $7777\cdots77,$ into which $+$ signs are inserted to produce an arithmetic expression. For example, $7+77+777+7+7=875$ could be obtained from eight $7$'s in this way. For how many values of $n$ is it possible to insert $+$ signs so that the resulting expression has value $7000$?
Solution

Suppose we require $a$ $7$s, $b$ $77$s, and $c$ $777$s to sum up to $7000$ ($a,b,c \ge 0$). Then $7a + 77b + 777c = 7000$, or dividing by $7$, $a + 11b + 111c = 1000$. Then the question is asking for the number of values of $n = a + 2b + 3c$.

Manipulating our equation, we have $a + 2b + 3c = n = 1000 - 9(b + 12c) \Longrightarrow 0 < 9(b+12c) < 1000$. Thus the number of potential values of $n$ is the number of multiples of $9$ from $0$ to $1000$, or $112$.


However, we forgot to consider the condition that $a \ge 0$. For a solution set $(b,c): n=1000-9(b+12c)$, it is possible that $a = n-2b-3c < 0$ (for example, suppose we counted the solution set $(b,c) = (1,9) \Longrightarrow n = 19$, but substituting into our original equation we find that $a = -10$, so it is invalid). In particular, this invalidates the values of $n$ for which their only expressions in terms of $(b,c)$ fall into the inequality $9b + 108c < 1000 < 11b + 111c$.

For $1000 - n = 9k \le 9(7 \cdot 12 + 11) = 855$, we can express $k$ in terms of $(b,c): n \equiv b \mod{12}, 0 \le b \le 11$ and $c = \frac{n-b}{12} \le 7$ (in other words, we take the greatest possible value of $c$, and then "fill in" the remainder by incrementing $b$). Then $11b + 111c \le 855 + 2b + 3c \le 855 + 2(11) + 3(7) = 898 < 1000$, so these values work.

Similarily, for $855 \le 9k \le 9(8 \cdot 12 + 10) = 954$, we can let $(b,c) = (k-8 \cdot 12,8)$, and the inequality $11b + 111c \le 954 + 2b + 3c \le 954 + 2(10) + 3(8) = 998 < 1000$. However, for $9k \ge 963 \Longrightarrow n \le 37$, we can no longer apply this approach.

So we now have to examine the numbers on an individual basis. For $9k = 972$, $(b,c) = (0,9)$ works. For $9k = 963, 981, 990, 999 \Longrightarrow n = 37, 19, 10, 1$, we find (using that respectively, $b = 11,9,10,11 + 12p$ for integers $p$) that their is no way to satisfy the inequality $11b + 111c < 1000$.

Thus, the answer is $112 - 4 = \boxed{108}$.


A note: Above, we formulated the solution in a forward manner (the last four paragraphs are devoted to showing that all the solutions we found worked except for the four cases pointed out; in a contest setting, we wouldn't need to be nearly as rigorous). A more natural manner of attacking the problem is to think of the process in reverse, namely seeing that $n \equiv 1 \mod{9}$, and noting that small values of $n$ would not work.

Looking at the number $7000$, we obviously see the maximum number of $7's$: a string of $1000 \ 7's$. Then, we see that the minimum is $28 \ 7's: \ 777*9 + 7 = 7000$. The next step is to see by what interval the value of $n$ increases. Since $777$ is $3 \ 7's, \ 77*10 + 7$ is $21 \ 7's$, we can convert a $777$ into $77's$ and $7's$ and add $18$ to the value of $n$. Since we have $9 \ 777's$ to work with, this gives us $28,46,64,82,100,118,136,154,172,190 ( = 28 + 18n | 1\leq n\leq 9)$ as values for $n$. Since $77$ can be converted into $7*11$, we can add $9$ to $n$ by converting $77$ into $7's$. Our $n = 190$, which has $0 \ 777's \ 90 \ 77's \ 10 7's$. We therefore can add $9$ to $n \ 90$ times by doing this. All values of $n$ not covered by this can be dealt with with the $n = 46 \ (8 \ 777's \ 10 \ 77's \ 2 \ 7's)$ up to $190$.


## 2004 AIME II Problem 15


A long thin strip of paper is $1024$ units in length, $1$ unit in width, and is divided into $1024$ unit squares. The paper is folded in half repeatedly. For the first fold, the right end of the paper is folded over to coincide with and lie on top of the left end. The result is a $512$ by $1$ strip of double thickness. Next, the right end of this strip is folded over to coincide with and lie on top of the left end, resulting in a $256$ by $1$ strip of quadruple thickness. This process is repeated $8$ more times. After the last fold, the strip has become a stack of $1024$ unit squares. How many of these squares lie below the square that was originally the $942$nd square counting from the left?
Solution 1

Number the squares $0, 1, 2, 3, ... 2^{k} - 1$. In this case $k = 10$, but we will consider more generally to find an inductive solution. Call $s_{n, k}$ the number of squares below the $n$ square after the final fold in a strip of length $2^{k}$.

Now, consider the strip of length $1024$. The problem asks for $s_{941, 10}$. We can derive some useful recurrences for $s_{n, k}$ as follows: Consider the first fold. Each square $s$ is now paired with the square $2^{k} - s - 1$. Now, imagine that we relabel these pairs with the indices $0, 1, 2, 3... 2^{k - 1} - 1$ - then the $s_{n, k}$ value of the pairs correspond with the $s_{n, k - 1}$ values - specifically, double, and maybe $+ 1$ (if the member of the pair that you're looking for is the top one at the final step).

So, after the first fold on the strip of length $1024$, the $941$ square is on top of the $82$ square. We can then write

$s_{941, 10} = 2s_{82, 9} + 1$

(We add one because $941$ is the odd member of the pair, and it will be on top. This is more easily visually demonstrated than proven.) We can repeat this recurrence, adding one every time we pair an odd to an even (but ignoring the pairing if our current square is the smaller of the two):

$s_{82, 9} = 2s_{82, 8} = 4s_{82, 7} = 8s_{127 - 82, 6} = 8s_{45, 6}$

$s_{45, 6} = 2s_{63 - 45, 5} + 1 = 2s_{18, 5} + 1 = 4s_{31 - 18, 4} + 1 = 4s_{13, 4} + 1$

$s_{13, 4} = 2s_{15 - 13, 3} + 1 = 2s_{2, 3}+1$

We can easily calculate $s_{2, 3} = 4$ from a diagram. Plugging back in,

$\begin{align*} s_{13, 4} &= 9 \\ s_{45, 6} &= 37 \\ s_{82, 9} &= 296 \\ s_{941, 10} &= \boxed{593}\end{align*}$
Solution 2

More brute force / thinking about the question logically. We can find the number of squares above the number instead. If the number doesn't change position, then we add the number of squares we just folded. Otherwise, we just take the number of squares under it before we folded and now these are above the number.

First its in position $942$ with $0$ spaces over it. We flip once, since $942$ is to the right it gets flipped onto itself, going from position $942$ to $1025 - 942 = 83$. Now its in position 83, still has $0$ spaces over it.

Flip again, it's still in position 83 but now, since it didn't move position, we add the thickness of the fold we just flipped, which is 2. So now there are $2$ spaces over it.

Flip again, its to the left of the fold again, so we add $4$ squares to get $6$.

Flip again, it goes from $83 \to 46$ in position, and there was $8 - 6 - 1 = 1$ square below our number before we flipped, so now that one number is above it.

Flip again, it goes $46 \to 19$, and now there were $16 - 1 - 1 = 14$ squares below it so now they are above it.

Flip again, it goes $19 \to 14$, and there were $32 - 14 - 1 = 17$ squares below it and now they are above it.

Flip again, it goes $14 \to 3$ and there were $64 - 17 - 1 = 46$ squares below it and now they are above it.

Flip again, it stays in position, so we add $128$ to get $174$.

Flip again, it goes $3 \to 2$, and there were $256 - 174 - 1 = 81$ squares below it and now they are above it.

Flip again, it goes $2 \to 1$, and there were $512 - 81 - 1 = 430$ squares below it and now they are above it.

Since the question asks for how many squares were below our number, our answer is $1024 - 430 - 1 = 593$.
Solution 3

We can keep track of the position of the square labeled 942 in each step. We use an $(x,y)$ coordinate system, so originally the 942 square is in the position $(942,1)$. In general, suppose that we've folded the strip into an array $r=2^k$ squares wide and $c=1024/r=2^{10-k}$ squares tall (so we've made $10-k$ folds). Then if a square occupies the location $(x,y)$, we find that after the next fold, it will be in the location described by the procedure $(x,y)\to\begin{cases}(x,y)&\text{if }x\le 2^{k-1}\\ (r+1-x,2c+1-y)&\text{otherwise}.\end{cases}

Therefore, we can keep track of the square's location in the following table. 

$\begin{array}{c|c|c} (x,y)&\text{rows}&\text{columns}\\\hline (942,1)&1024&1\\ (83,2)&512&2\\ (83,2)&256&4\\ (83,2)&128&8\\ (46,15)&64&16\\ (19,18)&32&32\\ (14,47)&16&64\\ (3,82)&8&128\\ (3,82)&4&256\\ (2,431)&2&512\\ (1,594)&1&1024.\\ \end{array}$ 

Therefore, at the end of the process, the square labeled 942 will be in the position $(1,594)​$, i.e., it will be above $\boxed{593}​$ squares.

2004 AIME II Answer Key
1.	592
    2.441
    3.384
    4.927
    5.766
    6.408
    7.293
    8.054
    9.973
    10.913
    11.625
    12.134
    13.484
    14.108
    15.593

