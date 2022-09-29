# 2005 AIME I

## 2005 AIME I Problem 1

Six congruent circles form a ring with each circle externally tangent to two circles adjacent to it. All circles are internally tangent to a circle $C$ with radius 30. Let $K$ be the area of the region inside circle $C$ and outside of the six circles in the ring. Find $\lfloor K \rfloor$ (the floor function).

<div align=center><img src="http://wiki-images.artofproblemsolving.com/4/4c/2005_AIME_I_Problem_1.png" height="150px" /></div>

Solution

Define the radii of the six congruent circles as $r$. If we draw all of the radii to the points of external tangency, we get a regular hexagon. If we connect the vertices of the hexagon to the center of the circle $C$, we form several equilateral triangles. The length of each side of the triangle is $2r$. Notice that the radius of circle $C$ is equal to the length of the side of the triangle plus $r$. Thus, the radius of $C$ has a length of $3r = 30$, and so $r = 10$. $K = 30^2\pi - 6(10^2\pi) = 300\pi$, so $\lfloor 300\pi \rfloor = 942$.

## 2005 AIME I Problem 2

For each positive integer $k$, let $S_k$ denote the increasing arithmetic sequence of integers whose first term is $1$ and whose common difference is $k$. For example, $S_3$ is the sequence $1,4,7,10,\ldots.$ For how many values of $k$ does $S_k$ contain the term $2005$?
Solution

Suppose that the $n$th term of the sequence $S_k$ is $2005$. Then $1+(n-1)k=2005$ so $k(n-1)=2004=2^2\cdot 3\cdot 167$. The ordered pairs $(k,n-1)$ of positive integers that satisfy the last equation are $(1,2004)$,$(2,1002)$, $(3,668)$, $(4,501)$, $(6,334)$, $(12,167)$, $(167,12)$,$(334,6)$, $(501,4)$, $(668,3)$, $(1002,2)$ and $(2004,1)$, and each of these gives a possible value of $k$. Thus the requested number of values is $12$, and the answer is $\boxed{012}$.

Alternatively, notice that the formula for the number of divisors states that there are $(2 + 1)(1 + 1)(1 + 1) = 12$ divisors of $2^23^1167^1$.

## 2005 AIME I Problem 3

How many positive integers have exactly three proper divisors (positive integral divisors excluding itself), each of which is less than 50?
Solution

Suppose $n$ is such an integer. Then one of its factors is $1$, so $n$ must be in the form $n=p\cdot q$ or $n=p^3$ for distinct prime numbers $p$ and $q$.

In the first case, the three proper divisors of $n$ are $1$, $p$ and $q$. Thus, we need to pick two prime numbers less than $50$. There are fifteen of these ($2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43$ and $47$) so there are ${15 \choose 2} =105$ numbers of the first type.

In the second case, the three proper divisors of $n$ are 1, $p$ and $p^2$. Thus we need to pick a prime number whose square is less than $50$. There are four of these ($2, 3, 5$ and $7$) and so four numbers of the second type.

Thus there are $105+4=\boxed{109}$ integers that meet the given conditions.

## 2005 AIME I Problem 4

The director of a marching band wishes to place the members into a formation that includes all of them and has no unfilled positions. If they are arranged in a square formation, there are $5$ members left over. The director realizes that if he arranges the group in a formation with $7$ more rows than columns, there are no members left over. Find the maximum number of members this band can have.

Solution
Solution 1

If $n > 14$ then $n^2 + 6n + 14 < n^2 + 7n < n^2 + 8n + 21$ and so $(n + 3)^2 + 5 < n(n + 7) < (n + 4)^2 + 5$. If $n$ is an integer there are no numbers which are 5 more than a perfect square strictly between $(n + 3)^2 + 5$ and $(n + 4)^2 + 5$. Thus, if the number of columns is $n$, the number of students is $n(n + 7)$ which must be 5 more than a perfect square, so $n \leq 14$. In fact, when $n = 14$ we have $n(n + 7) = 14\cdot 21 = 294 = 17^2 + 5$, so this number works and no larger number can. Thus, the answer is $\boxed{294}$.
Solution 2

Define the number of rows/columns of the square formation as $s$, and the number of rows of the rectangular formation $r$ (so there are $r - 7$ columns). Thus, $s^2 + 5 = r(r-7) \Longrightarrow r^2 - 7r - s^2 - 5 = 0$. The quadratic formula yields $r = \frac{7 \pm \sqrt{49 - 4(1)(-s^2 - 5)}}{2} = \frac{7 \pm \sqrt{4s^2 + 69}}{2}$. $\sqrt{4s^2 + 69}$ must be an integer, say $x$. Then $4s^2 + 69 = x^2$ and $(x + 2s)(x - 2s) = 69$. The factors of $69$ are $(1,69), (3,23)$; $x$ is maximized for the first case. Thus, $x = \frac{69 + 1}{2} = 35$, and $r = \frac{7 \pm 35}{2} = 21, -14$. The latter obviously can be discarded, so there are $21$ rows and $21 - 7 = 14$ columns, making the answer $294$.
Solution 3

The number of members is $m^2+5=n(n+7)$ for some $n$ and $m$. Multiply both sides by $4$ and complete the square to get $4m^2+69=(2n+7)^2$. Thus, we have $69=((2n+7)+2m)((2n+7)-2m)$. Since we want to maximize $n$, set the first factor equal to $69$ and the second equal to $1$. Solving gives $n=14$, so the answer is $14\cdot21=294$.

## 2005 AIME I Problem 5

Robert has 4 indistinguishable gold coins and 4 indistinguishable silver coins. Each coin has an engraving of one face on one side, but not on the other. He wants to stack the eight coins on a table into a single stack so that no two adjacent coins are face to face. Find the number of possible distinguishable arrangements of the 8 coins.
Solution

There are two separate parts to this problem: one is the color (gold vs silver), and the other is the orientation.

There are ${8\choose4} = 70$ ways to position the gold coins in the stack of 8 coins, which determines the positions of the silver coins.

Create a string of letters H and T to denote the orientation of the top of the coin. To avoid making two faces touch, we cannot have the arrangement HT. Thus, all possible configurations must be a string of tails followed by a string of heads, since after the first H no more tails can appear. The first H can occur in a maximum of eight times different positions, and then there is also the possibility that it doesn’t occur at all, for $9$ total configurations. Thus, the answer is $70 \cdot 9 = \boxed{630}$.

## 2005 AIME I Problem 6

Let $P$ be the product of the nonreal roots of $x^4-4x^3+6x^2-4x=2005.$ Find $\lfloor P\rfloor.$
Solution 1

The left-hand side of that equation is nearly equal to $(x - 1)^4$. Thus, we add 1 to each side in order to complete the fourth power and get $(x - 1)^4 = 2006$.

Let $r = \sqrt[4]{2006}$ be the positive real fourth root of 2006. Then the roots of the above equation are $x = 1 + i^n r$ for $n = 0, 1, 2, 3$. The two non-real members of this set are $1 + ir$ and $1 - ir$. Their product is $P = 1 + r^2 = 1 + \sqrt{2006}$. $44^2 = 1936 < 2006 < 2025 = 45^2$ so $\lfloor P \rfloor = 1 + 44 = \boxed{045}$.
Solution 2

Starting like before, $(x-1)^4= 2006$ This time we apply differences of squares. $(x-1)^4-2006=0$ so $((x-1)^2+\sqrt{2006})((x-1)^2 -\sqrt{2006})=0$ If you think of each part of the product as a quadratic, then $((x-1)^2+\sqrt{2006})$ is bound to hold the two non-real roots since the other definitely crosses the x-axis twice since it is just $x^2$ translated down and right. Therefore the products of the roots of $((x-1)^2+\sqrt{2006})$ or $P=1+\sqrt{2006}$ so

$\lfloor P \rfloor = 1 + 44 = \boxed{045}$.
Solution 3

If we don't see the fourth power, we can always factor the LHS to try to create a quadratic substitution. Checking, we find that $x=0$ and $x=2$ are both roots. Synthetic division gives $(x^2-2x)(x^2-2x+2)=2005$. We now have our quadratic substitution of $y=x^2-2x+1=(x-1)^2$, giving us $(y-1)(y+1)=2005$. From here we proceed as in Solution 1 to get $\boxed{045}$.
Solution 4

Realizing that if we add 1 to both sides we get $x^4-4x^3+6x^2-4x+1=2006$ which can be factored as $(x-1)^4=2006$. Then we can substitute $(x-1)$ with $y$ which leaves us with $y^4=2006$. Now subtracting 2006 from both sides we get some difference of squares $y^4-2006=0 \rightarrow (y-\sqrt[4]{2006})(y+\sqrt[4]{2006})(y^2+\sqrt{2006})=0$. The question asks for the product of the complex roots so we only care about the last factor which is equal to zero. From there we can solve $y^2+\sqrt{2006}=0$, we can substitute $(x-1)$ for $y$ giving us $(x-1)^2+\sqrt{2006}=0$, expanding this we get $x^2-2x+1+\sqrt{2006}=0$. We know that the product of a quadratics roots is $\frac{c}{a}$ which leaves us with $\frac{1+\sqrt{2006}}{1}=1+\sqrt{2006}\approx\boxed{045}$.
Solution 5

As in solution 1, we find that $(x-1)^4 = 2006$. Now $x-1=\pm \sqrt[4]{2006}$ so $x_1 = 1+\sqrt[4]{2006}$ and $x_2 = 1-\sqrt[4]{2006}$ are the real roots of the equation. Multiplying, we get $x_1 x_2 = 1 - \sqrt{2006}$. Now transforming the original function and using Vieta's formula, $x^4-4x^3+6x^2-4x-2005=0$ so $x_1 x_2 x_3 x_4 = \frac{-2005}{1} = -2005$. We find that the product of the nonreal roots is $x_3 x_4 = \frac{-2005}{1-\sqrt{2006}} \approx 45.8$ and we get $\boxed{045}$.

## 2005 AIME I Problem 7

In quadrilateral $ABCD,\ BC=8,\ CD=12,\ AD=10,$ and $m\angle A= m\angle B = 60^\circ.$ Given that $AB = p + \sqrt{q},$ where $p$ and $q$ are positive integers, find $p+q.$

Solution
Solution 1

<div align=center><img src="http://wiki-images.artofproblemsolving.com/4/41/AIME_2005I_Solution_7_1.png" height="150px" /></div>

Draw the perpendiculars from $C$ and $D$ to $AB$, labeling the intersection points as $E$ and $F$. This forms 2 $30-60-90$ right triangles, so $AE = 5$ and $BF = 4$. Also, if we draw the horizontal line extending from $C$ to a point $G$ on the line $DE$, we find another right triangle $\triangle DGC$. $DG = DE - CF = 5\sqrt{3} - 4\sqrt{3} = \sqrt{3}$. The Pythagorean Theorem yields that $GC^2 = 12^2 - \sqrt{3}^2 = 141$, so $EF = GC = \sqrt{141}$. Therefore, $AB = 5 + 4 + \sqrt{141} = 9 + \sqrt{141}$, and $p + q = \boxed{150}$.

Solution 2

<div align=center><img src="http://wiki-images.artofproblemsolving.com/2/2f/AIME_2005I_Solution_7_2.png" height="200px" /></div>

Extend $AD$ and $BC$ to an intersection at point $E$. We get an equilateral triangle $ABE$. We denote the length of a side of $\triangle ABE$ as $s$ and solve for it using the Law of Cosines: $12^2 = (s - 10)^2 + (s - 8)^2 - 2(s - 10)(s - 8)\cos{60}$ $144 = 2s^2 - 36s + 164 - (s^2 - 18s + 80)$ This simplifies to $s^2 - 18s - 60=0$; the quadratic formula yields the (discard the negative result) same result of $9 + \sqrt{141}$.
Solution 3

Extend $BC$ and $AD$ to meet at point $E$, forming an equilateral triangle $\triangle ABE$. Draw a line from $C$ parallel to $AB$ so that it intersects $AD$ at point $F$. Then, apply Stewart's Theorem on $\triangle CFE$. Let $CE=x$. $2x(x-2) + 12^2x = 2x^2 + x^2(x-2)$ $x^3 - 2x^2 - 140x = 0$ By the quadratic formula (discarding the negative result), $x = 1 + \sqrt{141}$, giving $AB = 9 + \sqrt{141}$ for a final answer of $p+q=150$.

## 2005 AIME I Problem 8

The equation $2^{333x-2} + 2^{111x+2} = 2^{222x+1} + 1$ has three real roots. Given that their sum is $\frac mn$ where $m$ and $n$ are relatively prime positive integers, find $m+n.$
Solution

Let $y = 2^{111x}$. Then our equation reads $\frac{1}{4}y^3 + 4y = 2y^2 + 1$ or $y^3 - 8y^2 + 16y - 4 = 0$. Thus, if this equation has roots $r_1, r_2$ and $r_3$, by Vieta's formulas we have $r_1\cdot r_2\cdot r_3 = 4$. Let the corresponding values of $x$ be $x_1, x_2$ and $x_3$. Then the previous statement says that $2^{111\cdot(x_1 + x_2 + x_3)} = 4$ so that taking a logarithm gives $111(x_1 + x_2 + x_3) = 2$ and $x_1 + x_2 + x_3 = \frac{2}{111}$. Thus the answer is $111 + 2 = \boxed{113}$.

## 2005 AIME I Problem 9

Twenty seven unit cubes are painted orange on a set of four faces so that two non-painted faces share an edge. The 27 cubes are randomly arranged to form a $3\times 3 \times 3$ cube. Given the probability of the entire surface area of the larger cube is orange is $\frac{p^a}{q^br^c},$ where $p,q,$ and $r$ are distinct primes and $a,b,$ and $c$ are positive integers, find $a+b+c+p+q+r.$

Solution

<div align=center><img src="http://wiki-images.artofproblemsolving.com/b/ba/2005_I_AIME-9.png" height="200px" /></div>

We can consider the orientation of each of the individual cubes independently.
Solution 1

The unit cube at the center of our large cube has no exterior faces, so all of its orientations work.

For the six unit cubes and the centers of the faces of the large cube, we need that they show an orange face. This happens in $\frac{4}{6} = \frac{2}{3}$ of all orientations, so from these cubes we gain a factor of $\left(\frac{2}{3}\right)^6$.

The twelve unit cubes along the edges of the large cube have two faces showing, and these two faces are joined along an edge. Thus, we need to know the number of such pairs that are both painted orange. We have a pair for each edge, and 7 edges border one of the unpainted faces while only 5 border two painted faces. Thus, the probability that two orange faces show for one of these cubes is $\frac{5}{12}$, so from all of these cubes we gain a factor of $\left(\frac{5}{12}\right)^{12} = \frac{5^{12}}{2^{24}3^{12}}$.

Finally, we need to orient the eight corner cubes. Each such cube has 3 faces showing, and these three faces share a common vertex. Thus, we need to know the number of vertices for which all three adjacent faces are painted orange. There are six vertices which are a vertex of one of the unpainted faces and two vertices which have our desired property, so each corner cube contributes a probability of $\frac{2}{8} = \frac{1}{4}$ and all the corner cubes together contribute a probability of $\left(\frac{1}{4}\right)^8 = \frac{1}{2^{16}}$

Since these probabilities are independent, the overall probability is just their product, $\frac{2^6}{3^6} \cdot \frac{5^{12}}{2^{24}3^{12}} \cdot \frac{1}{2^{16}} = \frac{5^{12}}{2^{34}\cdot 3^{18}}$ and so the answer is $2 + 3 + 5 + 12 + 34 + 18 = 074$.
Solution 2

Rather than worry about the actual painted faces, consider the position of the shared edge of the non-colored faces. The six centers of the faces can be calculated in the same manner as last time, getting $\left(\frac{2}{3}\right)^6$.

The twelve edge cubes show two faces. We want the shared edge of the non-colored faces to not be one of the edges that are exposed on the outside. There are 7 such edges that can be seen when viewed from the outside, so the probability they cannot be seen are $\left(\frac{5}{12}\right)^{12}$.

The eight corner cubes each have 9 visible edges from the outside, so the probability that the edge of the non-colored faces is not one of those is $\left(\frac{3}{12}\right)^8 = \left(\frac{1}{4}\right)^8$. Multiplying the probabilities together, we get the same exact solution.

As an aside, note that the placement of the two unpainted faces is in fact of vital importance: if they were on opposite faces, the answer would be 0 because any placement of such a cube in the corner of the large cube would show one unpainted face.

## 2005 AIME I Problem 10

Triangle $ABC$ lies in the cartesian plane and has an area of $70$. The coordinates of $B$ and $C$ are $(12,19)$ and $(23,20),$ respectively, and the coordinates of $A$ are $(p,q).$ The line containing the median to side $BC$ has slope $-5.$ Find the largest possible value of $p+q.$

<div align=center><img src="http://latex.artofproblemsolving.com/3/e/0/3e0c65881bed6213e0789bf735b240b830e07554.png" height="150px" /></div>

Solution 1

The midpoint $M$ of line segment $\overline{BC}$ is $\left(\frac{35}{2}, \frac{39}{2}\right)$. The equation of the median can be found by $-5 = \frac{q - \frac{39}{2}}{p - \frac{35}{2}}$. Cross multiply and simplify to yield that $-5p + \frac{35 \cdot 5}{2} = q - \frac{39}{2}$, so $q = -5p + 107$.

Use determinants to find that the area of $\triangle ABC$ is $\frac{1}{2} $\begin{vmatrix}p & 12 & 23 \\ q & 19 & 20 \\ 1 & 1 & 1\end{vmatrix}$ = 70$ (note that there is a missing absolute value; we will assume that the other solution for the triangle will give a smaller value of $p+q$, which is provable by following these steps over again). We can calculate this determinant to become 

$140 = \begin{vmatrix} 12 & 23 \\ 19 & 20 \end{vmatrix}$ - $\begin{vmatrix} p & q \\ 23 & 20 \end{vmatrix}$ + $\begin{vmatrix} p & q \\ 12 & 19 \end{vmatrix} \Longrightarrow 140 \\ = 240 - 437 - 20p + 23q + 19p - 12q \\ = -197 - p + 11q$. 

Thus, $q = \frac{1}{11}p - \frac{337}{11}$.

Setting this equation equal to the equation of the median, we get that $\frac{1}{11}p - \frac{337}{11} = -5p + 107$, so $\frac{56}{11}p = \frac{107 \cdot 11 + 337}{11}$. Solving produces that $p = 15$. Substituting backwards yields that $q = 32$; the solution is $p + q = \boxed{047}$.
Solution 2

Using the equation of the median from above, we can write the coordinates of $A$ as $(p,\ -5p + 107)$. The equation of $\overline{BC}$ is $\frac{20 - 19}{23 - 12} = \frac{y - 19}{x - 12}$, so $x - 12 = 11y - 209$. In general form, the line is $x - 11y + 197 = 0$. Use the equation for the distance between a line and point to find the distance between $A$ and $BC$ (which is the height of $\triangle ABC$): $\frac{|1(p) - 11(-5p + 107) + 197|}{1^2 + 11^2} = \frac{|56p - 980|}{\sqrt{122}}$. Now we need the length of $BC$, which is $\sqrt{(23 - 12)^2 + (20 - 19)^2} = \sqrt{122}$. The area of $\triangle ABC$ is $70 = \frac{1}{2}bh = \frac{1}{2}\left(\frac{|56p - 980|}{\sqrt{122}}\right) \cdot \sqrt{122}$. Thus, $|28p - 490| = 70$, and $p = 15,\ 20$. We are looking for $p + q = -4p + 107 = 47,\ 27$. The maximum possible value of $p + q = \fbox{047}$.
Solution 3

Again, the midpoint $M$ of line segment $\overline{BC}$ is at $\left(\frac{35}{2}, \frac{39}{2}\right)$. Let $A'$ be the point $(17, 22)$, which lies along the line through $M$ of slope $-5$. The area of triangle $A'BC$ can be computed in a number of ways (one possibility: extend $A'B$ until it hits the line $y = 19$, and subtract one triangle from another), and each such calculation gives an area of 14. This is $\frac{1}{5}$ of our needed area, so we simply need the point $A$ to be 5 times as far from $M$ as $A'$ is. Thus $A = \left(\frac{35}{2}, \frac{39}{2}\right) \pm 5\left(-\frac{1}{2}, \frac{5}{2}\right)$, and the sum of coordinates will be larger if we take the positive value, so $A = \left(\frac{35}{2} - \frac{5}2, \frac{39}{2} + \frac{25}{2}\right)$ and the answer is $\frac{35}{2} - \frac{5}2 + \frac{39}{2} + \frac{25}{2} = \fbox{047}$.

## 2005 AIME I Problem 11

A semicircle with diameter $d$ is contained in a square whose sides have length 8. Given the maximum value of $d$ is $m - \sqrt{n},$ find $m+n.$

Solution

We note that aligning the base of the semicircle with a side of the square is certainly non-optimal. If the semicircle is tangent to only one side of the square, we will have "wiggle-room" to increase its size. Once it is tangent to two adjacent sides of the square, we will maximize its size when it touches both other sides of the square. This can happen only when it is arranged so that the center of the semicircle lies on one diagonal of the square.

<div align=center><img src="http://wiki-images.artofproblemsolving.com/4/45/2005_AIME_I_Problem_11.png" height="150px" /></div>

Now, let the square be $ABCD$, and let $E \in AB$ and $F \in DA$ be the points at which the "corners" of the semicircle touch the square. Let $O$ be the center of the semicircle.
Solution 1

Define the radius of the semicircle as $r$. Draw the perpendicular from $O$ to $AB$, which forms a $45-45-90$ triangle. The length of the perpendicular is $\frac{r}{\sqrt{2}}$. Note also that $AD$ is equal to the length of that perpendicular plus the radius to the point of tangency on $CD$. Thus, $r + \frac{r}{\sqrt{2}} = 8$, and $r = \frac{8\sqrt{2}}{\sqrt{2} + 1} \cdot (\frac{\sqrt{2} - 1}{\sqrt{2} - 1}) = 16 - 8\sqrt{2}$. The diameter is then $2r = 32 - \sqrt{512}$, and the solution is $32 + 512 = 544$.
Solution 2

By the comments above, $AE = AF = a$. By the Pythagorean Theorem, $d^2 = 2a^2$.

Now, if we draw a line through the center, $O$, of the semicircle and its point of tangency with $BC$, we see that this line is perpendicular to $BC$ and so parallel to $AB$. Thus, by triangle similarity it cuts $AF$ in half, and so by symmetry the distance from $O$ to $AD$ is $\frac{a}{2}$ and so the distance from $O$ to $BC$ is $8 - \frac a2$. But this latter quantity is also the radius of the semicircle, so $d = 16 - a$.

Our two previous paragraphs give $2a^2 = (16 - a)^2$ so $a^2 + 32a - 256 = 0$ and $a = 16\sqrt{2} - 16$ (where we discard the negative root of that quadratic) and so $d = a\sqrt{2} = 32 - 16\sqrt{2} = 32 - \sqrt{512}$, so the answer is $32 + 512 = 544$.
Solution 3

We proceed by finding the area of the square in 2 different ways. The square is obviously 8*8=64, but we can also find the area in terms of d. From the center of the circle, draw radii that hit the points where the square is tangent to the semicircle. Then the square's area is the area of the small square +2* the area of the trapezoids on the corners+ the area of an isoceles triangle. Adding these all up gives $64=\frac{d^2}{4}+\frac{d^2}{4}+(8-\frac{d\sqrt{2}}{2}+\frac{d}{2})(8-\frac{d}{2})$ Simplifying gives $d-16\sqrt{2}+d\sqrt{2}=0$. Solving gives $d=32-16\sqrt{2}=32-\sqrt{512}$ so the answer is 32+512=544

## 2005 AIME I Problem 12

For positive integers $n,$ let $\tau (n)$ denote the number of positive integer divisors of $n,$ including 1 and $n.$ For example, $\tau (1)=1$ and $\tau(6) =4.$ Define $S(n)$ by $S(n)=\tau(1)+ \tau(2) + \cdots + \tau(n).$ Let $a$ denote the number of positive integers $n \leq 2005$ with $S(n)$ odd, and let $b$ denote the number of positive integers $n \leq 2005$ with $S(n)$ even. Find $|a-b|.$

Solution

It is well-known that $\tau(n)$ is odd if and only if $n$ is a perfect square. (Otherwise, we can group divisors into pairs whose product is $n$.) Thus, $S(n)$ is odd if and only if there are an odd number of perfect squares less than $n$. So $S(1), S(2)$ and $S(3)$ are odd, while $S(4), S(5), \ldots, S(8)$ are even, and $S(9), \ldots, S(15)$ are odd, and so on.

So, for a given $n$, if we choose the positive integer $m$ such that $m^2 \leq n < (m + 1)^2$ we see that $S(n)$ has the same parity as $m$.

It follows that the numbers between $1^2$ and $2^2$, between $3^2$ and $4^2$, and so on, all the way up to the numbers between $43^2$ and $44^2 = 1936$ have $S(n)$ odd. These are the only such numbers less than $2005$ (because $45^2 = 2025 > 2005$).
Solution 1

Notice that the difference between consecutive squares are consecutively increasing odd numbers. Thus, there are $3$ numbers between $1$ (inclusive) and $4$ (exclusive), $5$ numbers between $4$ and $9$, and so on. The number of numbers from $n^2$ to $(n + 1)^2$ is $(n + 1 - n)(n + 1 + n) = 2n + 1$. Whenever the lowest square beneath a number is odd, the parity will be odd, and the same for even. Thus, $a = [2(1) + 1] + [2(3) + 1] \ldots [2(43) + 1] = 3 + 7 + 11 \ldots 87$. $b = [2(2) + 1] + [2(4) + 1] \ldots [2(42) + 1] + 70 = 5 + 9 \ldots 85 + 70$, the $70$ accounting for the difference between $2005$ and $44^2 = 1936$, inclusive. Notice that if we align the two and subtract, we get that each difference is equal to $2$. Thus, the solution is $|a - b| = |b - a| = |2 \cdot 21 + 70 - 87| = \boxed{025}$.
Solution 2

Similarly, $b = (3^2 - 2^2) + (5^2 - 4^2) + \ldots + (45^2 - 44^2) - 19$, where the $-19$ accounts for those numbers between $2005$ and $2024$.

Thus $a = (2^2 - 1^2) + (4^2 - 3^2) + \ldots + (44^2 - 43^2)$.

Then, $|a - b| = |2(2^2 + 4^2 + \ldots + 44^2) - 2(1^2 + 3^2 + 5^2 + \ldots 43^2) + 1^2 - 45^2 + 19|$. We can apply the formula $1^2 + 2^2 + \ldots + n^2 = \frac{n(n + 1)(2n + 1)}{6}$. From this formula, it follows that $2^2 + 4^2 + \ldots + (2n)^2 = \frac{2n(n + 1)(2n + 1)}{3}$ and so that

$1^2 + 3^2 + \ldots +(2n + 1)^2 = (1^2 + 2^2 + \ldots +(2n + 1)^2) - (2^2 + 4^2 + \ldots + (2n)^2)$
$= \frac{(2n + 1)(2n + 2)(4n + 3)}{6} - \frac{2n(n + 1)(2n + 1)}{3} = \frac{(n + 1)(2n + 1)(2n + 3)}{3}$. Thus,

$|a - b| = \left| 2\cdot \frac{44\cdot23\cdot45}{3} - 2\cdot \frac{22 \cdot 43 \cdot 45}{3} - 45^2 + 20\right| = |-25| =\boxed{025}$.

## 2005 AIME I Problem 13

A particle moves in the Cartesian plane according to the following rules:

From any lattice point $(a,b),$ the particle may only move to $(a+1,b), (a,b+1),$ or $(a+1,b+1).$
There are no right angle turns in the particle's path.

How many different paths can the particle take from $(0,0)$ to $(5,5)$?

Solution
Solution 1

The length of the path (the number of times the particle moves) can range from $l = 5$ to $9$; notice that $d = 10-l$ gives the number of diagonals. Let $R$ represent a move to the right, $U$ represent a move upwards, and $D$ to be a move that is diagonal. Casework upon the number of diagonal moves:

Case $d = 1$: It is easy to see only $2$ cases.
Case $d = 2$: There are two diagonals. We need to generate a string with $3$ $R$'s, $3$ $U$'s, and $2$ $D$'s such that no two $R$'s or $U$'s are adjacent. The $D$'s split the string into three sections ($-D-D-$): by the Pigeonhole principle all of at least one of the two letters must be all together (i.e., stay in a row). 

If both $R$ and $U$ stay together, then there are $3 \cdot 2=6$ ways. 
If either $R$ or $U$ splits, then there are $3$ places to put the letter that splits, which has $2$ possibilities. The remaining letter must divide into $2$ in one section and $1$ in the next, giving $2$ ways. This totals $6 + 3\cdot 2\cdot 2 = 18$ ways.

Case $d = 3$: Now $2$ $R$'s, $2$ $U$'s, and $3$ $D$'s, so the string is divided into $4$ partitions ($-D-D-D-$). 

If the $R$'s and $U$'s stay together, then there are $4 \cdot 3 = 12$ places to put them. 
If one of them splits and the other stays together, then there are $4 \cdot {3\choose 2}$ places to put them, and $2$ ways to pick which splits, giving $4 \cdot 3 \cdot 2 = 24$ ways.
If both groups split, then there are ${4\choose 2}=6$ ways to arrange them. These add up to $12 + 24 + 6 = 42$ ways.

Case $d = 4$: Now $1$ $R$, $1$ $U$, $4$ $D$'s ($-D-D-D-D-$). There are $5$ places to put $R$, $4$ places to put $U$, giving $20$ ways.
Case $d = 5$: It is easy to see only $1$ case.

Together, these add up to $2 + 18 + 42 + 20 + 1 = \boxed{83}$.
Solution 2

Another possibility is to use block-walking and recursion: for each vertex, the number of ways to reach it is $a + b + c$, where $a$ is the number of ways to reach the vertex from the left (without having come to that vertex (the one on the left) from below), $b$ is the number of ways to reach the vertex from the vertex diagonally down and left, and $c$ is the number of ways to reach the vertex from below (without having come to that vertex (the one below) from the left).

Assign to each point $(i,j)$ the triplet $(a_{i,j}, b_{i,j}, c_{i,j})$. Let $s(i,j) = a_{i,j}+ b_{i,j}+ c_{i,j}$. Let all lattice points that contain exactly one negative coordinate be assigned to $(0,0,0)$. This leaves the lattice points of the first quadrant, the positive parts of the $x$ and $y$ axes, and the origin unassigned. As a seed, assign to $(0,1,0)$. (We will see how this correlates with the problem.) Then define for each lattice point $(i,j)$ its triplet thus:

$a_{i,j} = s(i-1,j) - c_{i-1,j}$

$b_{i,j} = s(i-1,j-1)$

$c_{i,j} = s(i,j-1) - a_{i,j-1}$

It is evident that $s(i,j)$ is the number of ways to reach $(i,j)$ from $(0,0)$. Therefore we compute vertex by vertex the triplets $(a_{i,j}, b_{i,j}, c_{i,j})$ with $0 \leq i, j \leq 5$. Finally, after simple but tedious calculations, we find that $(a_{5,5}, b_{5,5}, c_{5,5}) = (28,27,28)$, so $s(i,j)=28+27+28 = \boxed{83}$.

[Note: Someone may wish to add an image.] This article is a stub. Help us out by expanding it.

## 2005 AIME I Problem 14

Consider the points $A(0,12), B(10,9), C(8,0),$ and $D(-4,7).$ There is a unique square $S$ such that each of the four points is on a different side of $S.$ Let $K$ be the area of $S.$ Find the remainder when $10K$ is divided by $1000$.

Solution

<div align=center><img src="http://wiki-images.artofproblemsolving.com/c/c6/2005_I_AIME-14.png" height="200px" /></div>

Solution 1

Consider a point $E$ such that $AE$ is perpendicular to $BD$, $AE$ intersects $BD$, and $AE = BD$. E will be on the same side of the square as point $C$.

Let the coordinates of $E$ be $(x_E,y_E)$. Since $AE$ is perpendicular to $BD$, and $AE = BD$, we have $9 - 7 = x_E - 0$ and $10 - ( - 4) = 12 - y_E$ The coordinates of $E$ are thus $(2, - 2)$.

Now, since $E$ and $C$ are on the same side, we find the slope of the sides going through $A$ and $C$ to be $\frac { - 2 - 0}{2 - 8} = \frac {1}{3}$. Because the other two sides are perpendicular, the slope of the sides going through $B$ and $D$ are now $- 3$.

Let $A_1,B_1,C_1,D_1$ be the vertices of the square so that $A_1B_1$ contains point $A$, $B_1C_1$ contains point $B$, and etc. Since we know the slopes and a point on the line for each side of the square, we use the point slope formula to find the linear equations. Next, we use the equations to find $2$ vertices of the square, then apply the distance formula.

We find the coordinates of $C_1$ to be $(12.5,1.5)$ and the coordinates of $D_1$ to be $( - 0.7, - 2.9)$. Applying the distance formula, the side length of our square is $\sqrt {\left( \frac {44}{10} \right)^2 + \left( \frac {132}{10} \right)^2} = \frac {44}{\sqrt {10}}$.

Hence, the area of the square is $K = \frac {44^2}{10}$. The remainder when $10K$ is divided by $1000$ is $936$.
Solution 2

Let $(a,b)$ denote a normal vector of the side containing $A$. Note that $\overline{AC}, \overline{BD}$ intersect and hence must be opposite vertices of the square. The lines containing the sides of the square have the form $ax+by=12b$, $ax+by=8a$, $bx-ay=10b-9a$, and $bx-ay=-4b-7a$. The lines form a square, so the distance between $C$ and the line through $A$ equals the distance between $D$ and the line through $B$, hence $8a+0b-12b=-4b-7a-10b+9a$, or $-3a=b$. We can take $a=-1$ and $b=3$. So the side of the square is $\frac{44}{\sqrt{10}}$, the area is $K=\frac{1936}{10}$, and the answer to the problem is $\boxed{936}$.

## 2005 AIME I Problem 15

Triangle $ABC$ has $BC=20.$ The incircle of the triangle evenly trisects the median $AD.$ If the area of the triangle is $m \sqrt{n}$ where $m$ and $n$ are integers and $n$ is not divisible by the square of a prime, find $m+n.$
Solution

<div align=center><img src="http://latex.artofproblemsolving.com/e/b/b/ebb5c6eb90edb59c2c2fc2cf3dfef0dcf818f4f9.png" height="150px" /></div>

Let $E$, $F$ and $G$ be the points of tangency of the incircle with $BC$, $AC$ and $AB$, respectively. Without loss of generality, let $AC < AB$, so that $E$ is between $D$ and $C$. Let the length of the median be $3m$. Then by two applications of the Power of a Point Theorem, $DE^2 = 2m \cdot m = AF^2$, so $DE = AF$. Now, $CE$ and $CF$ are two tangents to a circle from the same point, so $CE = CF = c$ and thus $AC = AF + CF = DE + CE = CD = 10$. Then $DE = AF = AG = 10 - c$ so $BG = BE = BD + DE = 20 - c$ and thus $AB = AG + BG = 30 - 2c$.

Now, by Stewart's Theorem in triangle $\triangle ABC$ with cevian $\overline{AD}$, we have

$(3m)^2\cdot 20 + 20\cdot10\cdot10 = 1^2\cdot0 + (30 - 2c)^2\cdot 10.$

Our earlier result from Power of a Point was that $2m^2 = (10 - c)^2$, so we combine these two results to solve for $c$ and we get

$(10 - c)^2 + 200 = 100 + (30 - 2c)^2 \quad \Longrightarrow \quad c^2 - 12c + 20 = 0.$

Thus $c = 2$ or $= 10$. We discard the value $c = 10$ as extraneous (it gives us an equilateral triangle) and are left with $c = 2$, so our triangle has area $\sqrt{28 \cdot 18 \cdot 8 \cdot 2} = 24\sqrt{14}$ and so the answer is $24 + 14 = \boxed{038}$.

2005 AIME I Answer Key
1.	942
    2.012
    3.109
    4.294
    5.630
    6.045
    7.150
    8.113
    9.074
    10.047
    11.544
    12.025
    13.083
    14.936
    15.038

