# 2003 AIME I

## 2003 AIME I Problem 1

Given that
$\frac{((3!)!)!}{3!} = k \cdot n!,$

where $k$ and $n$ are positive integers and $n$ is as large as possible, find $k + n.$
Solution

We use the definition of a factorial to get
$\frac{((3!)!)!}{3!} = \frac{(6!)!}{3!} = \frac{720!}{3!} = \frac{720!}{6} = \frac{720 \cdot 719!}{6} = 120 \cdot 719! = k \cdot n!$

We certainly can't make $n$ any larger if $k$ is going to stay an integer, so the answer is $k + n = 120 + 719 = \boxed{839}$.


## 2003 AIME I Problem 2

One hundred concentric circles with radii $1, 2, 3, \dots, 100$ are drawn in a plane. The interior of the circle of radius $1$ is colored red, and each region bounded by consecutive circles is colored either red or green, with no two adjacent regions the same color. The ratio of the total area of the green regions to the area of the circle of radius $100$ can be expressed as $m/n,$ where $m$ and $n$ are relatively prime positive integers. Find $m + n.$
Solution

To get the green area, we can color all the circles of radius $100$ or below green, then color all those with radius $99$ or below red, then color all those with radius $98$ or below green, and so forth. This amounts to adding the area of the circle of radius $100$, but subtracting the circle of radius $99$, then adding the circle of radius $98$, and so forth.

The total green area is thus given by $100^{2} \pi - 99^{2} \pi + 98^{2} \pi - \ldots - 1^{2} \pi$, while the total area is given by $100^{2} \pi$, so the ratio is $\frac{100^{2}\pi - 99^{2}\pi + 98^{2}\pi - \ldots - 1^{2}\pi}{100^{2}\pi}$

For any $a$, $a^{2}-(a-1)^{2}=a^{2}-(a^{2}-2a+1)=2a-1$. We can cancel the factor of pi from the numerator and denominator and simplify the ratio to

$\frac{(2\cdot100 - 1)+(2\cdot98 - 1) + \ldots + (2\cdot 2 - 1)}{100^{2}} = \frac{2\cdot(100 + 98 + \ldots + 2) - 50}{100^2}.$

Using the formula for the sum of an arithmetic series, we see that this is equal to

$\frac{2(50)(51)-50}{100^{2}}=\frac{50(101)}{100^{2}}=\frac{101}{200},$

so the answer is $101 + 200 =\boxed{301}$.

Alternatively, we can determine a pattern through trial-and-error using smaller numbers.

For $2$ circles, the ratio is $3/4$.
For $4$ circles, the ratio is $5/8$.
For $6$ circles, the ratio is $7/12$.
For $8$ circles, the ratio is $9/16$.

Now the pattern for each ratio is clear. Given $x$ circles, the ratio is $\frac{x+1}{2x}$. For the $100$ circle case (which is what this problem is), $x=100$, and the ratio is $\frac{101}{200}$.


Also, using the difference of squares, the expression simplifies to $\frac{100 + 99 + 98 + 97 + ... + 1}{100^2}$. We can easily determine the sum with $\frac{100(101)}{2} = 5050$. Simplifying gives us $\frac{5050}{100^2} = \frac{101}{200}$ and the answer is $101 + 200 =\boxed{301}$.


## 2003 AIME I Problem 3

Let the set $\mathcal{S} = \{8, 5, 1, 13, 34, 3, 21, 2\}.$ Susan makes a list as follows: for each two-element subset of $\mathcal{S},$ she writes on her list the greater of the set's two elements. Find the sum of the numbers on the list.
Solution

Order the numbers in the set from greatest to least to reduce error: $\{34, 21, 13, 8, 5, 3, 2, 1\}.$ Each element of the set will appear in $7$ two-element subsets, once with each other number.

$34$ will be the greater number in $7$ subsets.
$21$ will be the greater number in $6$ subsets.
$13$ will be the greater number in $5$ subsets.
$8$ will be the greater number in $4$ subsets.
$5$ will be the greater number in $3$ subsets.
$3$ will be the greater number in $2$ subsets.
$2$ will be the greater number in $1$ subsets.
$1$ will be the greater number in $0$ subsets. 

Therefore the desired sum is $34\cdot7+21\cdot6+13\cdot5+8\cdot4+5\cdot3+3 \cdot2+2\cdot1+1\cdot0=\boxed{484}$.


## 2003 AIME I Problem 4

Given that $\log_{10} \sin x + \log_{10} \cos x = -1$ and that $\log_{10} (\sin x + \cos x) = \frac{1}{2} (\log_{10} n - 1),$ find $n.$
Solution

Using the properties of logarithms, we can simplify the first equation to $\log_{10} \sin x + \log_{10} \cos x = \log_{10}(\sin x \cos x) = -1$. Therefore, $\sin x \cos x = \frac{1}{10}.\qquad (*)$

Now, manipulate the second equation.

 $\begin{align*} \log_{10} (\sin x + \cos x) &= \frac{1}{2}(\log_{10} n - \log_{10} 10) \\ \log_{10} (\sin x + \cos x) &= \left(\log_{10} \sqrt{\frac{n}{10}}\right) \\ \sin x + \cos x &= \sqrt{\frac{n}{10}} \\ (\sin x + \cos x)^{2} &= \left(\sqrt{\frac{n}{10}}\right)^2 \\ \sin^2 x + \cos^2 x +2 \sin x \cos x &= \frac{n}{10} \\ \end{align*}$

By the Pythagorean identities, $\sin ^2 x + \cos ^2 x = 1$, and we can substitute the value for $\sin x \cos x$ from $(*)$. $1 + 2\left(\frac{1}{10}\right) = \frac{n}{10} \Longrightarrow n = \boxed{012}$.


## 2003 AIME I Problem 4

Given that $\log_{10} \sin x + \log_{10} \cos x = -1$ and that $\log_{10} (\sin x + \cos x) = \frac{1}{2} (\log_{10} n - 1),$ find $n.$
Solution

Using the properties of logarithms, we can simplify the first equation to $\log_{10} \sin x + \log_{10} \cos x = \log_{10}(\sin x \cos x) = -1$. Therefore, $\sin x \cos x = \frac{1}{10}.\qquad (*)$

Now, manipulate the second equation.

$\begin{align*} \log_{10} (\sin x + \cos x) &= \frac{1}{2}(\log_{10} n - \log_{10} 10) \\ \log_{10} (\sin x + \cos x) &= \left(\log_{10} \sqrt{\frac{n}{10}}\right) \\ \sin x + \cos x &= \sqrt{\frac{n}{10}} \\ (\sin x + \cos x)^{2} &= \left(\sqrt{\frac{n}{10}}\right)^2 \\ \sin^2 x + \cos^2 x +2 \sin x \cos x &= \frac{n}{10} \\ \end{align*}$

By the Pythagorean identities, $\sin ^2 x + \cos ^2 x = 1$, and we can substitute the value for $\sin x \cos x$ from $(*)$. $1 + 2\left(\frac{1}{10}\right) = \frac{n}{10} \Longrightarrow n = \boxed{012}$.


## 2003 AIME I Problem 5

Consider the set of points that are inside or within one unit of a rectangular parallelepiped (box) that measures $3$ by $4$ by $5$ units. Given that the volume of this set is $\frac{m + n\pi}{p},$ where $m, n,$ and $p$ are positive integers, and $n$ and $p$ are relatively prime, find $m + n + p.$
Solution

<div align=center><img src="http://latex.artofproblemsolving.com/6/b/d/6bdbe041f3224fa7f40b0e2831bb24448baa3814.png" height="200px" /></div>

The set can be broken into several parts: the big $3\times 4 \times 5$ parallelepiped, $6$ external parallelepipeds that each share a face with the large parallelepiped and have a height of $1$, the $1/8$ spheres (one centered at each vertex of the large parallelepiped), and the $1/4$ cylinders connecting each adjacent pair of spheres.

The volume of the parallelepiped is $3 \times 4 \times 5 = 60$ cubic units.
The volume of the external parallelepipeds is $2(3 \times 4 \times 1)+2(3 \times 5 \times 1 )+2(4 \times 5 \times 1)=94$.
There are $8$ of the $1/8$ spheres, each of radius $1$. Together, their volume is $\frac{4}{3}\pi$.
There are $12$ of the $1/4$ cylinders, so $3$ complete cylinders can be formed. Their volumes are $3\pi$, $4\pi$, and $5\pi$, adding up to $12\pi$.

The combined volume of these parts is $60+94+\frac{4}{3}\pi+12\pi = \frac{462+40\pi}{3}$. Thus, the answer is $m+n+p = 462+40+3 = \boxed{505}$.


## 2003 AIME I Problem 6

The sum of the areas of all triangles whose vertices are also vertices of a $1$ by $1$ by $1$ cube is $m + \sqrt{n} + \sqrt{p},$ where $m, n,$ and $p$ are integers. Find $m + n + p.$
Solution

Since there are $8$ vertices of a cube, there are ${8 \choose 3} = 56$ total triangles to consider. They fall into three categories: there are those which are entirely contained within a single face of the cube (whose sides are two edges and one face diagonal), those which lie in a plane perpendicular to one face of the cube (whose sides are one edge, one face diagonal and one space diagonal of the cube) and those which lie in a plane oblique to the edges of the cube, whose sides are three face diagonals of the cube.

Each face of the cube contains ${4\choose 3} = 4$ triangles of the first type, and there are $6$ faces, so there are $24$ triangles of the first type. Each of these is a right triangle with legs of length $1$, so each triangle of the first type has area $\frac 12$.

Each edge of the cube is a side of exactly $2$ of the triangles of the second type, and there are $12$ edges, so there are $24$ triangles of the second type. Each of these is a right triangle with legs of length $1$ and $\sqrt 2$, so each triangle of the second type has area $\frac{\sqrt{2}}{2}$.

Each vertex of the cube is associated with exactly one triangle of the third type (whose vertices are its three neighbors), and there are $8$ vertices of the cube, so there are $8$ triangles of the third type. Each of the these is an equilateral triangle with sides of length $\sqrt 2$, so each triangle of the third type has area $\frac{\sqrt 3}2$.

Thus the total area of all these triangles is $24 \cdot \frac12 + 24\cdot\frac{\sqrt2}2 + 8\cdot\frac{\sqrt3}2 = 12 + 12\sqrt2 + 4\sqrt3 = 12 + \sqrt{288} + \sqrt{48}$ and the answer is $12 + 288 + 48 = \boxed{348}$.


## 2003 AIME I Problem 7


Point $B$ is on $\overline{AC}$ with $AB = 9$ and $BC = 21.$ Point $D$ is not on $\overline{AC}$ so that $AD = CD,$ and $AD$ and $BD$ are integers. Let $s$ be the sum of all possible perimeters of $\triangle ACD$. Find $s.$
Solution

<div align=center><img src="http://latex.artofproblemsolving.com/1/5/b/15bb134453eeb3db27cdd27ad65a8176fe0393b3.png" height="150px" /></div>

Denote the height of $\triangle ACD$ as $h$, $x = AD = CD$, and $y = BD$. Using the Pythagorean theorem, we find that $h^2 = y^2 - 6^2$ and $h^2 = x^2 - 15^2$. Thus, $y^2 - 36 = x^2 - 225 \Longrightarrow x^2 - y^2 = 189$. The LHS is difference of squares, so $(x + y)(x - y) = 189$. As both $x,\ y$ are integers, $x+y,\ x-y$ must be integral divisors of $189$.

The pairs of divisors of $189$ are $(1,189)\ (3,63)\ (7,27)\ (9,21)$. This yields the four potential sets for $(x,y)$ as $(95,94)\ (33,30)\ (17,10)\ (15,6)$. The last is not a possibility since it simply degenerates into a line. The sum of the three possible perimeters of $\triangle ACD$ is equal to $3(AC) + 2(x_1 + x_2 + x_3) = 90 + 2(95 + 33 + 17) = \boxed{380}$.
Solution 2

Using Stewart's Theorem, letting the side length be c, and the cevian be d, then we have $30d^2+21*9*30=9c^2+21c^2=30c^2$. Dividing both sides by thirty leaves $d^2+189=c^2$. The solution follows as above.


## 2003 AIME I Problem 8
Problem 8

In an increasing sequence of four positive integers, the first three terms form an arithmetic progression, the last three terms form a geometric progression, and the first and fourth terms differ by $30$. Find the sum of the four terms.
Solution

Denote the first term as $a$, and the common difference between the first three terms as $d$. The four numbers thus are in the form $a,\ a+d,\ a+2d,\ \frac{(a + 2d)^2}{a + d}$.

Since the first and fourth terms differ by $30$, we have that $\frac{(a + 2d)^2}{a + d} - a = 30$. Multiplying out by the denominator, $(a^2 + 4ad + 4d^2) - a(a + d) = 30(a + d).$ This simplifies to $3ad + 4d^2 = 30a + 30d$, which upon rearranging yields $2d(2d - 15) = 3a(10 - d)$.

Both $a$ and $d$ are positive integers, so $2d - 15$ and $10 - d$ must have the same sign. Try if they are both positive (notice if they are both negative, then $d > 10$ and $d < \frac{15}{2}$, which is a contradiction). Then, $d = 8, 9$. Directly substituting and testing shows that $d \neq 8$, but that if $d = 9$ then $a = 18$. Alternatively, note that $3|2d$ or $3|2d-15$ implies that $3|d$, so only $9$ may work. Hence, the four terms are $18,\ 27,\ 36,\ 48$, which indeed fits the given conditions. Their sum is $\boxed{129}$.


## 2003 AIME I Problem 9

An integer between $1000$ and $9999$, inclusive, is called balanced if the sum of its two leftmost digits equals the sum of its two rightmost digits. How many balanced integers are there?
Solution

If the common sum of the first two and last two digits is $n$, $1 \leq n \leq 9$, there are $n$ choices for the first two digits and $n + 1$ choices for the second two digits (since zero may not be the first digit). This gives $\sum_{n = 1}^9 n(n + 1) = 330$ balanced numbers. If the common sum of the first two and last two digits is $n$, $10 \leq n \leq 18$, there are $19 - n$ choices for both pairs. This gives $\sum_{n = 10}^{18} (19 - n)^2 = \sum_{n = 1}^9 n^2 = 285$ balanced numbers. Thus, there are in total $330 + 285 = \boxed{615}$ balanced numbers.

Both summations may be calculated using the formula for the sum of consecutive squares, namely $\sum_{k=1}^n k^2 = \frac{n(n+1)(2n+1)}{6}$.


## 2003 AIME I Problem 10

Triangle $ABC$ is isosceles with $AC = BC$ and $\angle ACB = 106^\circ.$ Point $M$ is in the interior of the triangle so that $\angle MAC = 7^\circ$ and $\angle MCA = 23^\circ.$ Find the number of degrees in $\angle CMB.$

Solution

<div align=center><img src="http://latex.artofproblemsolving.com/0/4/c/04c30cea6b00089941864b9928804588638a9952.png" height="150px" /></div>

Solution 1

<div align=center><img src="http://latex.artofproblemsolving.com/e/c/8/ec8d127e80906c0e7baf73d163450eef066397cc.png" height="150px" /></div>

Take point $N$ inside $\triangle ABC$ such that $\angle CBN = 7^\circ$ and $\angle BCN = 23^\circ$.

$\angle MCN = 106^\circ - 2\cdot 23^\circ = 60^\circ$. Also, since $\triangle AMC$ and $\triangle BNC$ are congruent (by ASA), $CM = CN$. Hence $\triangle CMN$ is an equilateral triangle, so $\angle CNM = 60^\circ$.

Then $\angle MNB = 360^\circ - \angle CNM - \angle CNB = 360^\circ - 60^\circ - 150^\circ = 150^\circ$. We now see that $\triangle MNB$ and $\triangle CNB$ are congruent. Therefore, $CB = MB$, so $\angle CMB = \angle MCB = \boxed{083^\circ}$.
Solution 2

From the givens, we have the following angle measures: $m\angle AMC = 150^\circ$, $m\angle MCB = 83^\circ$. If we define $m\angle CMB = \theta$ then we also have $m\angle CBM = 97^\circ - \theta$. Then apply the Law of Sines to triangles $\triangle AMC$ and $\triangle BMC$ to get

$\frac{\sin 150^\circ}{\sin 7^\circ} = \frac{AC}{CM} = \frac{BC}{CM} = \frac{\sin \theta}{\sin 97^\circ - \theta}$

Clearing denominators, evaluating $\sin 150^\circ = \frac 12$ and applying one of our trigonometric identities to the result gives

$\frac{1}{2} \cos (7^\circ - \theta )= \sin 7^\circ \sin \theta$

and multiplying through by 2 and applying the double angle formula gives

$\cos 7^\circ\cos\theta + \sin7^\circ\sin\theta = 2 \sin7^\circ \sin\theta$

and so $\cos 7^\circ \cos \theta = \sin 7^\circ \sin\theta \Longleftrightarrow \tan 7^{\circ} = \cot \theta$; since $0^\circ < \theta < 180^\circ$, we must have $\theta = 83^\circ$, so the answer is $\boxed{083}$.
Solution 3

Without loss of generality, let $AC = BC = 1$. Then, using Law of Sines in triangle $AMC$, we get $\frac {1}{\sin 150} = \frac {MC}{\sin 7}$, and using the sine addition formula to evaluate $\sin 150 = \sin (90 + 60)$, we get $MC = 2 \sin 7$.

Then, using Law of Cosines in triangle $MCB$, we get $MB^2 = 4\sin^2 7 + 1 - 4\sin 7(\cos 83) = 1$, since $\cos 83 = \sin 7$. So triangle $MCB$ is isosceles, and $\angle CMB = \boxed{083}$.


## 2003 AIME I Problem 11

An angle $x$ is chosen at random from the interval $0^\circ < x < 90^\circ.$ Let $p$ be the probability that the numbers $\sin^2 x, \cos^2 x,$ and $\sin x \cos x$ are not the lengths of the sides of a triangle. Given that $p = d/n,$ where $d$ is the number of degrees in $\arctan m$ and $m$ and $n$ are positive integers with $m + n < 1000,$ find $m + n.$
Solution

Note that the three expressions are symmetric with respect to interchanging $\sin$ and $\cos$, and so the probability is symmetric around $45^\circ$. Thus, take $0 < x < 45$ so that $\sin x < \cos x$. Then $\cos^2 x$ is the largest of the three given expressions and those three lengths not forming a triangle is equivalent to a violation of the triangle inequality $\cos^2 x > \sin^2 x + \sin x \cos x$

This is equivalent to $\cos^2 x - \sin^2 x > \sin x \cos x$

and, using some of our trigonometric identities, we can re-write this as $\cos 2x > \frac 12 \sin 2x$. Since we've chosen $x \in (0, 45)$, $\cos 2x > 0$ so $2 > \tan 2x \Longrightarrow x < \frac 12 \arctan 2.$

The probability that $x$ lies in this range is $\frac 1{45} \cdot \left(\frac 12 \arctan 2\right) = \frac{\arctan 2}{90}$ so that $m = 2$, $n = 90$ and our answer is $\boxed{092}$.


## 2003 AIME I Problem 12


In convex quadrilateral $ABCD, \angle A \cong \angle C, AB = CD = 180,$ and $AD \neq BC.$ The perimeter of $ABCD$ is 640. Find $\lfloor 1000 \cos A \rfloor.$ (The notation $\lfloor x \rfloor$ means the greatest integer that is less than or equal to $x.$)
Solution
Solution 1

<div align=center><img src="http://latex.artofproblemsolving.com/0/6/0/060d4d918b4f89b6f156f9af44aea8da1238fcdd.png" height="150px" /></div>

By the Law of Cosines on $\triangle ABD$ at angle $A$ and on $\triangle BCD$ at angle $C$ (note $\angle C = \angle A$),

$180^2 + AD^2 - 360 \cdot AD \cos A = 180^2 + BC^2 - 360 \cdot BC \cos A$ $(AD^2 - BC^2) = 360(AD - BC) \cos A$ $(AD - BC)(AD + BC) = 360(AD - BC) \cos A$ $(AD + BC) = 360 \cos A$ We know that $AD + BC = 640 - 360 = 280$. $\cos A = \frac{280}{360} = \frac{7}{9} = 0.777 \ldots$

$\lfloor 1000 \cos A \rfloor = \boxed{777}$.
Solution 2

Notice that $AB = CD$, and $BD = DB$, and $\angle{DAB} \cong \angle{BCD}$, so we have side-side-angle matching on triangles $ABD$ and $CDB$. Since the problem does not allow $\triangle{ABD} \cong \triangle{CDB}$, we know that $\angle{ADB}$ is not a right angle, and there is a unique other triangle with the matching side-side-angle.

Extend $AD$ to $C'$ so that $\triangle{ABC'}$ is isosceles with $AB = C'B$. Then notice that $\triangle{DC'B}$ has matching side-side-angle, and yet $\triangle{ADB} \not\cong \triangle{C'DB}$ because $\angle{ADB}$ is not right. Therefore $\triangle{C'DB}$ is the unique triangle mentioned above, so $\triangle{CDB}$ is congruent, in some order of vertices, to $\triangle{C'DB}$. Since $\triangle{CDB} \cong \triangle{C'DB}$ would imply $\triangle{CDB} = \triangle{C'DB}$, making quadrilateral $ABCD$ degenerate, we must have $\triangle{CDB} \cong \triangle{C'BD}$.

Since the perimeter of $ABCD$ is $640$, $AD + BC = 640 - 180 - 180 = 280$. Hence $280 = AD + BC = AD + DC'$. Drop the altitude of $\triangle{ABC'}$ from $B$ and call the foot $P$. Then right triangle trigonometry on $\triangle{APB}$ shows that $\cos{A} = AP/AB = 140/180 = 7/9$, so $\lfloor 1000 \cos A \rfloor = \boxed{777}$.


## 2003 AIME I Problem 13

Let $N$ be the number of positive integers that are less than or equal to $2003$ and whose base-$2$ representation has more $1$'s than $0$'s. Find the remainder when $N$ is divided by $1000$.
Solution

In base-$2$ representation, all positive numbers have a leftmost digit of $1$. Thus there are ${n \choose k}$ numbers that have $n+1$ digits in base $2$ notation, with $k+1$ of the digits being $1$'s.

In order for there to be more $1$'s than $0$'s, we must have $k+1 > \frac{d+1}{2} \Longrightarrow k > \frac{d-1}{2} \Longrightarrow k \ge \frac{d}{2}$. Therefore, the number of such numbers corresponds to the sum of all numbers on or to the right of the vertical line of symmetry in Pascal's Triangle, from rows $0$ to $10$ (as $2003 < 2^{11}-1$). Since the sum of the elements of the $r$th row is $2^r$, it follows that the sum of all elements in rows $0$ through $10$ is $2^0 + 2^1 + \cdots + 2^{10} = 2^{11}-1 = 2047$. The center elements are in the form ${2i \choose i}$, so the sum of these elements is $\sum_{i=0}^{5} {2i \choose i} = 1 + 2 +6 + 20 + 70 + 252 = 351$.

The sum of the elements on or to the right of the line of symmetry is thus $\frac{2047 + 351}{2} = 1199$. However, we also counted the $44$ numbers from $2004$ to $2^{11}-1 = 2047$. Indeed, all of these numbers have at least $6$ $1$'s in their base-$2$ representation, as all of them are greater than $1984 = 11111000000_2$, which has $5$ $1$'s. Therefore, our answer is $1199 - 44 = 1155$, and the remainder is $\boxed{155}$.


## 2003 AIME I Problem 14

The decimal representation of $m/n,$ where $m$ and $n$ are relatively prime positive integers and $m < n,$ contains the digits $2, 5$, and $1$ consecutively, and in that order. Find the smallest value of $n$ for which this is possible.
Solution

To find the smallest value of $n$, we consider when the first three digits after the decimal point are $0.251\ldots$.


Otherwise, suppose the number is in the form of $\frac{m}{n} = 0.X251 \ldots$, were $X$ is a string of $k$ digits and $n$ is small as possible. Then $10^k \cdot \frac{m}{n} - X = \frac{10^k m - nX}{n} = 0.251 \ldots$. Since $10^k m - nX$ is an integer and $\frac{10^k m - nX}{n}$ is a fraction between $0$ and $1$, we can rewrite this as $\frac{10^k m - nX}{n} = \frac{p}{q}$, where $q \le n$. Then the fraction $\frac pq = 0.251 \ldots$ suffices.

Thus we have $\frac{m}{n} = 0.251\ldots$, or
$\frac{251}{1000} \le \frac{m}{n} < \frac{252}{1000} \Longleftrightarrow 251n \le 1000m < 252n \Longleftrightarrow n \le 250(4m-n) < 2n.$

As $4m > n$, we know that the minimum value of $4m - n$ is $1$; hence we need $250 < 2n \Longrightarrow 125 < n$. Since $4m - n = 1$, we need $n + 1$ to be divisible by $4$, and this first occurs when $n = \boxed{ 127 }$ (note that if $4m-n > 1$, then $n > 250$). Indeed, this gives $m = 32$ and the fraction $\frac {32}{127}\approx 0.25196 \ldots$).


## 2003 AIME I Problem 15


In $\triangle ABC, AB = 360, BC = 507,$ and $CA = 780.$ Let $M$ be the midpoint of $\overline{CA},$ and let $D$ be the point on $\overline{CA}$ such that $\overline{BD}$ bisects angle $ABC.$ Let $F$ be the point on $\overline{BC}$ such that $\overline{DF} \perp \overline{BD}.$ Suppose that $\overline{DF}$ meets $\overline{BM}$ at $E.$ The ratio $DE: EF$ can be written in the form $m/n,$ where $m$ and $n$ are relatively prime positive integers. Find $m + n.$
Solution

In the following, let the name of a point represent the mass located there. Since we are looking for a ratio, we assume that $AB=120$, $BC=169$, and $CA=260$ in order to simplify our computations.

First, reflect point $F$ over angle bisector $BD$ to a point $F'$.

<div align=center><img src="http://latex.artofproblemsolving.com/d/5/2/d52650d1c43c62a6df30fc3e7b09651eb4cf6b37.png" height="150px" /></div>

As $BD$ is an angle bisector of both triangles $BAC$ and $BF'F$, we know that $F'$ lies on $AB$. We can now balance triangle $BF'C$ at point $D$ using mass points.

By the Angle Bisector Theorem, we can place mass points on $C,D,A$ of $120,\,289,\,169$ respectively. Thus, a mass of $\frac {289}{2}$ belongs at both $F$ and $F'$ because BD is a median of triangle $BF'F$ . Therefore, $CB/FB=\frac{289}{240}$.

Now, we reassign mass points to determine $FE/FD$. This setup involves $\triangle CFD$ and transversal $MEB$. For simplicity, put masses of $240$ and $289$ at $C$ and $F$ respectively. To find the mass we should put at $D$, we compute $CM/MD$. Applying the Angle Bisector Theorem again and using the fact $M$ is a midpoint of $AC$, we find $\frac {MD}{CM} = \frac {\frac{169}{289}\cdot 260 - 130}{130} = \frac {49}{289}$ At this point we could find the mass at $D$ but it's unnecessary. $\frac {DE}{EF} = \frac {F}{D} = \frac {F}{C}\cdot\frac {C}{D} = \frac {289}{240}\cdot\frac {49}{289} = \boxed{\frac {49}{240}}$ and the answer is $49 + 240 = \boxed{289}$.
Solution 2

By the Angle Bisector Theorem, we know that $[CBD]=\frac{169}{289}[ABC]$. Therefore, by finding the area of triangle $CBD$, we see that $\frac{507\cdot BD}{2}\sin\frac{B}{2}=\frac{169}{289}[ABC].$ Solving for $BD$ yields $BD=\frac{2[ABC]}{3\cdot289\sin\frac{B}{2}}.$ Furthermore, $\cos\frac{B}{2}=\frac{BD}{BF}$, so $BF=\frac{BD}{\cos\frac{B}{2}}=\frac{2[ABC]}{3\cdot289\sin\frac{B}{2}\cos\frac{B}{2}}.$ Now by the identity $2\sin\frac{B}{2}\cos\frac{B}{2}=\sin B$, we get $BF=\frac{4[ABC]}{3\cdot289\sin B}.$ But then $[ABC]=\frac{360\cdot 507}{2}\sin B$, so $BF=\frac{240}{289}\cdot 507$. Thus $BF:FC=240:49$.

Now by the Angle Bisector Theorem, $CD=\frac{169}{289}\cdot 780$, and we know that $MC=\frac{1}{2}\cdot 780$ so $DM:MC=\frac{169}{289}-\frac{1}{2}:\frac{1}{2}=49:289$.

We can now use mass points on triangle CBD. Assign a mass of $240\cdot 49$ to point $C$. Then $D$ must have mass $240\cdot 289$ and $B$ must have mass $49\cdot 49$. This gives $F$ a mass of $240\cdot 49+49\cdot 49=289\cdot 49$. Therefore, $DE:EF=\frac{289\cdot 49}{240\cdot 289}=\frac{49}{240}$, giving us an answer of $\boxed{289}.$
Solution 3

$\textit{The Power of Trigonometry}$:

Let $\angle{DBM}=\theta$ and $\angle{DBC}=\alpha$. Then because $BM$ is a median we have $360\sin{(\alpha+\theta)}=507\sin{(\alpha-\theta)}$. 

Now we know

$\sin{(\alpha+\theta)}=\sin{\alpha}\cos{\theta}+\sin{\theta}\cos{\alpha}=\frac{DF\cdot BD}{BF\cdot BE}+\frac{DE\cdot BD}{BE\cdot BF}=\frac{BD(DF+DE)}{BF\cdot BE}$ 

Expressing the area of $\triangle{BEF}$ in two ways we have $\frac{1}{2}BE\cdot BF\sin{(\alpha-\theta)}=\frac{1}{2}EF\cdot BD$ so $\sin{(\alpha-\theta)}=\frac{EF\cdot BD}{BF\cdot BE}$ 

Plugging this in we have $\frac{360\cdot BD(DF+DE)}{BF\cdot BE}=\frac{507\cdot BD\cdot EF}{BF\cdot BE}$ so $\frac{DF+DE}{EF}=\frac{507}{360}$. 

But $DF=DE+EF$, so this simplifies to $1+\frac{2DE}{EF}=\frac{507}{360}=\frac{169}{120}$, 

and thus $\frac{DE}{EF}=\frac{49}{240}$, and $m+n=\boxed{289}$.

**2003 AIME I Answer Key**

1. 839
2. 301
3. 484
4. 012
5. 505
6. 348
7. 380
8. 129
9. 615
10. 083
11. 092
12. 777
13. 155
14. 127
15. 289

 