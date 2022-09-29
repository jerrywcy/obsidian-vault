# 2000 AIME II

## 2000 AIME II Problem 1

The number $\frac 2{\log_4{2000^6}} + \frac 3{\log_5{2000^6}}$ can be written as $\frac mn$ where $m$ and $n$ are relatively prime positive integers. Find $m + n$.
Solution
Solution 1

$\frac 2{\log_4{2000^6}} + \frac 3{\log_5{2000^6}}$

$=\frac{\log_4{16}}{\log_4{2000^6}}+\frac{\log_5{125}}{\log_5{2000^6}}$

$=\frac{\log{16}}{\log{2000^6}}+\frac{\log{125}}{\log{2000^6}}$

$=\frac{\log{2000}}{\log{2000^6}}$

$=\frac{\log{2000}}{6\log{2000}}$

$=\frac{1}{6}$

Therefore, $m+n=1+6=\boxed{007}$
Solution 2

Alternatively, we could've noted that, because $\frac 1{\log_a{b}} = \log_b{a}$

$\begin{align*} \frac 2{\log_4{2000^6}} + \frac 3{\log_5{2000^6}} &= 2 \cdot \frac{1}{\log_4{2000^6}} + 3\cdot \frac {1}{\log_5{2000^6} }\\ &=2{\log_{2000^6}{4}} + 3{\log_{2000^6}{5}} \\ &={\log_{2000^6}{4^2}} + {\log_{2000^6}{5^3}}\\ &={\log_{2000^6}{4^2 \cdot 5^3}}\\ &={\log_{2000^6}{2000}}\\ &= {\frac{1}{6}}.\end{align*}$

Therefore our answer is $1 + 6 = \boxed{7}$. 

## 2000 AIME II Problem 2

A point whose coordinates are both integers is called a lattice point. How many lattice points lie on the hyperbola $x^2 - y^2 = 2000^2$?
Solution

$(x-y)(x+y)=2000^2=2^8 \cdot 5^6$

Note that $(x-y)$ and $(x+y)$ have the same parities, so both must be even. We first give a factor of $2$ to both $(x-y)$ and $(x+y)$. We have $2^6 \cdot 5^6$ left. Since there are $7 \cdot 7=49$ factors of $2^6 \cdot 5^6$, and since both $x$ and $y$ can be negative, this gives us $49\cdot2=\boxed{098}$ lattice points. 

## 2000 AIME II Problem 3

A deck of forty cards consists of four $1$'s, four $2$'s,..., and four $10$'s. A matching pair (two cards with the same number) is removed from the deck. Given that these cards are not returned to the deck, let $m/n$ be the probability that two randomly selected cards also form a pair, where $m$ and $n$ are relatively prime positive integers. Find $m + n.$
Solution

There are ${38 \choose 2} = 703$ ways we can draw two cards from the reduced deck. The two cards will form a pair if both are one of the nine numbers that were not removed, which can happen in $9{4 \choose 2} = 54$ ways, or if the two cards are the remaining two cards of the number that was removed, which can happen in $1$ way. Thus, the answer is $\frac{54+1}{703} = \frac{55}{703}$, and $m+n = \boxed{758}$.


## 2000 AIME II Problem 4


What is the smallest positive integer with six positive odd integer divisors and twelve positive even integer divisors?
Solution 1

We use the fact that the number of divisors of a number $n = p_1^{e_1}p_2^{e_2} \cdots p_k^{e_k}$ is $(e_1 + 1)(e_2 + 1) \cdots (e_k + 1)$. If a number has $18 = 2 \cdot 3 \cdot 3$ factors, then it can have at most $3$ distinct primes in its factorization.

Dividing the greatest power of $2$ from $n$, we have an odd integer with six positive divisors, which indicates that it either is ($6 = 2 \cdot 3$) a prime raised to the $5$th power, or two primes, one of which is squared. The smallest example of the former is $3^5 = 243$, while the smallest example of the latter is $3^2 \cdot 5 = 45$.

Suppose we now divide all of the odd factors from $n$; then we require a power of $2$ with $\frac{18}{6} = 3$ factors, namely $2^{3-1} = 4$. Thus, our answer is $2^2 \cdot 3^2 \cdot 5 = \boxed{180}$.
Solution 2

Somewhat similar to the first solution, we see that the number $n$ has two even factors for every odd factor. Thus, if $x$ is an odd factor of $n$, then $2x$ and $4x$ must be the two corresponding even factors. So, the prime factorization of $n$ is $2^2 3^a 5^b 7^c...$ for some set of integers $a, b, c, ...$

Since there are $18$ factors of $n$, we can write:

$(2+1)(a+1)(b+1)(c+1)... = 18$

$(a+1)(b+1)(c+1)... = 6$

Since $6$ only has factors from the set $1, 2, 3, 6$, either $a=5$ and all other variables are $0$, or $a=3$ and $b=2$, with again all other variables equalling $0$. This gives the two numbers $2^2 \cdot 3^5$ and $2^2 \cdot 3^2 \cdot 5$. The latter number is smaller, and is equal to $\boxed {180}$.


## 2000 AIME II Problem 5

Given eight distinguishable rings, let $n$ be the number of possible five-ring arrangements on the four fingers (not the thumb) of one hand. The order of rings on each finger is significant, but it is not required that each finger have a ring. Find the leftmost three nonzero digits of $n$.
Solution

There are $\binom{8}{5}$ ways to choose the rings, and there are $5!$ distinct arrangements to order the rings [we order them so that the first ring is the bottom-most on the first finger that actually has a ring, and so forth]. The number of ways to distribute the rings among the fingers is equivalent the number of ways we can drop five balls into 4 urns, or similarly dropping five balls into four compartments split by three dividers. The number of ways to arrange those dividers and balls is just $\binom {8}{3}$.

Multiplying gives the answer: $\binom{8}{5}\binom{8}{3}5! = 376320$, and the three leftmost digits are $\boxed{376}$.


## 2000 AIME II Problem 6

One base of a trapezoid is $100$ units longer than the other base. The segment that joins the midpoints of the legs divides the trapezoid into two regions whose areas are in the ratio $2: 3$. Let $x$ be the length of the segment joining the legs of the trapezoid that is parallel to the bases and that divides the trapezoid into two regions of equal area. Find the greatest integer that does not exceed $x^2/100$.
Solution

Let the shorter base have length $b$ (so the longer has length $b+100$), and let the height be $h$. The length of the midline of the trapezoid is the average of its bases, which is $\frac{b+b+100}{2} = b+50$. The two regions which the midline divides the trapezoid into are two smaller trapezoids, both with height $h/2$. Then,

<div align=center><img src="http://latex.artofproblemsolving.com/0/f/8/0f87c0919f236c152560c8a1d2553ae9a870d5d6.png" height="150px" /></div>

$\frac{\frac 12 (h/2) (b + b+50)}{\frac 12 (h/2) (b + 50 + b + 100)} = \frac{2}{3} \Longrightarrow \frac{b + 75}{b + 25} = \frac 32 \Longrightarrow b = 75$

We now construct the line which divides the rectangle into two regions of equal area. Suppose this line is a distance of $h_1$ from the shorter base. By similar triangles, we have $\frac{x - 75}{100} = \frac{h_1}{h}$. Indeed, construct the perpendiculars from the vertices of the shorter base to the longer base. This splits the trapezoid into a rectangle and two triangles; it also splits the desired line segment into three partitions with lengths $x_1, 75, x_2$. By similar triangles, we easily find that $\frac{x - 75}{100} = \frac{x_1+x_2}{100} = \frac{h_1}{h}$, as desired.

<div align=center><img src="http://latex.artofproblemsolving.com/9/3/3/933c0e2a8435dfb9d18a5bb6e8819ba5de7d9cbb.png" height="150px" /></div>

The area of the region including the shorter base must be half of the area of the entire trapezoid, so

$2 \cdot \frac 12 h_1 (75 + x) = \frac 12 h (75 + 175) \Longrightarrow x = 125 \cdot \frac{h}{h_1} - 75$

Substituting our expression for $\frac h{h_1}$ from above, we find that

$x = \frac{12500}{x-75} - 75 \Longrightarrow x^2 - 75x = 5625 + 12500 - 75x \Longrightarrow x^2 = 18125$

The answer is $\left\lfloor\frac{x^2}{100}\right\rfloor = \boxed{181}$.


## 2000 AIME II Problem 6

One base of a trapezoid is $100$ units longer than the other base. The segment that joins the midpoints of the legs divides the trapezoid into two regions whose areas are in the ratio $2: 3$. Let $x$ be the length of the segment joining the legs of the trapezoid that is parallel to the bases and that divides the trapezoid into two regions of equal area. Find the greatest integer that does not exceed $x^2/100$.
Solution

Let the shorter base have length $b$ (so the longer has length $b+100$), and let the height be $h$. The length of the midline of the trapezoid is the average of its bases, which is $\frac{b+b+100}{2} = b+50$. The two regions which the midline divides the trapezoid into are two smaller trapezoids, both with height $h/2$. Then,

<div align=center><img src="http://latex.artofproblemsolving.com/0/f/8/0f87c0919f236c152560c8a1d2553ae9a870d5d6.png" height="150px" /></div>

$\frac{\frac 12 (h/2) (b + b+50)}{\frac 12 (h/2) (b + 50 + b + 100)} = \frac{2}{3} \Longrightarrow \frac{b + 75}{b + 25} = \frac 32 \Longrightarrow b = 75$

We now construct the line which divides the rectangle into two regions of equal area. Suppose this line is a distance of $h_1$ from the shorter base. By similar triangles, we have $\frac{x - 75}{100} = \frac{h_1}{h}$. Indeed, construct the perpendiculars from the vertices of the shorter base to the longer base. This splits the trapezoid into a rectangle and two triangles; it also splits the desired line segment into three partitions with lengths $x_1, 75, x_2$. By similar triangles, we easily find that $\frac{x - 75}{100} = \frac{x_1+x_2}{100} = \frac{h_1}{h}$, as desired.

<div align=center><img src="http://latex.artofproblemsolving.com/9/3/3/933c0e2a8435dfb9d18a5bb6e8819ba5de7d9cbb.png" height="150px" /></div>

The area of the region including the shorter base must be half of the area of the entire trapezoid, so

$2 \cdot \frac 12 h_1 (75 + x) = \frac 12 h (75 + 175) \Longrightarrow x = 125 \cdot \frac{h}{h_1} - 75$

Substituting our expression for $\frac h{h_1}$ from above, we find that

$x = \frac{12500}{x-75} - 75 \Longrightarrow x^2 - 75x = 5625 + 12500 - 75x \Longrightarrow x^2 = 18125$

The answer is $\left\lfloor\frac{x^2}{100}\right\rfloor = \boxed{181}$.


## 2000 AIME II Problem 7
Given that
$\frac 1{2!17!}+\frac 1{3!16!}+\frac 1{4!15!}+\frac 1{5!14!}+\frac 1{6!13!}+\frac 1{7!12!}+\frac 1{8!11!}+\frac 1{9!10!}=\frac N{1!18!}$
find the greatest integer that is less than $\frac N{100}$.
Solution

Multiplying both sides by $19!$ yields:

$\frac {19!}{2!17!}+\frac {19!}{3!16!}+\frac {19!}{4!15!}+\frac {19!}{5!14!}+\frac {19!}{6!13!}+\frac {19!}{7!12!}+\frac {19!}{8!11!}+\frac {19!}{9!10!}=\frac {19!N}{1!18!}.$

$\binom{19}{2}+\binom{19}{3}+\binom{19}{4}+\binom{19}{5}+\binom{19}{6}+\binom{19}{7}+\binom{19}{8}+\binom{19}{9} = 19N.$

Recall the identity $2^{19} = \sum_{n=0}^{19} {19 \choose n}$. Since ${19 \choose n} = {19 \choose 19-n}$, it follows that $\sum_{n=0}^{9} {19 \choose n} = \frac{2^{19}}{2} = 2^{18}$.

Thus, $19N = 2^{18}-\binom{19}{1}-\binom{19}{0}=2^{18}-19-1 = (2^9)^2-20 = (512)^2-20 = 262124$.

So, $N=\frac{262124}{19}=13796$ and $\left\lfloor \frac{N}{100} \right\rfloor =\boxed{137}$.


## 2000 AIME II Problem 8


In trapezoid $ABCD$, leg $\overline{BC}$ is perpendicular to bases $\overline{AB}$ and $\overline{CD}$, and diagonals $\overline{AC}$ and $\overline{BD}$ are perpendicular. Given that $AB=\sqrt{11}$ and $AD=\sqrt{1001}$, find $BC^2$.
Solution
Solution 1

Let $x = BC$ be the height of the trapezoid, and let $y = CD$. Since $AC \perp BD$, it follows that $\triangle BAC \sim \triangle CBD$, so $\frac{x}{\sqrt{11}} = \frac{y}{x} \Longrightarrow x^2 = y\sqrt{11}$.

Let $E$ be the foot of the altitude from $A$ to $\overline{CD}$. Then $AE = x$, and $ADE$ is a right triangle. By the Pythagorean Theorem,

$x^2 + \left(y-\sqrt{11}\right)^2 = 1001 \Longrightarrow x^4 - 11x^2 - 11^2 \cdot 9 \cdot 10 = 0$

The positive solution to this quadratic equation is $x^2 = \boxed{110}$.

<div align=center><img src="http://latex.artofproblemsolving.com/3/3/c/33cba5bae648539c2b01af0bfdabeeb2f45e237b.png" height="150px" /></div>

Solution 2

Let $BC=x$. Dropping the altitude from $A$ and using the Pythagorean Theorem tells us that $CD=\sqrt{11}+\sqrt{1001-x^2}$. Therefore, we know that vector $\vec{BD}=\langle \sqrt{11}+\sqrt{1001-x^2},-x\rangle$ and vector $\vec{AC}=\langle-\sqrt{11},-x\rangle$. Now we know that these vectors are perpendicular, so their dot product is 0.$\vec{BD}\cdot \vec{AC}=-11-\sqrt{11(1001-x^2)}+x^2=0$ $(x^2-11)^2=11(1001-x^2)$ $x^4-11x^2-11\cdot 990=0.$ As above, we can solve this quadratic to get the positve solution $BC^2=x^2=\boxed{110}$.
Solution 3

Let $BC=x$ and $CD=y+\sqrt{11}$. From Pythagorus with $AD$, we obtain $x^2+y^2=1001$. Since $AC$ and $BD$ are perpendicular diagonals of a quadrilateral, then $AB^2+CD^2=BC^2+AD^2$, so we have $\left(y+\sqrt{11}\right)^2+11=x^2+1001.$ Substituting $x^2=1001-y^2$ and simplifying yields $y^2+\sqrt{11}y-990=0,$ and the quadratic formula gives $y=9\sqrt{11}$. Then from $x^2+y^2=1001$, we plug in $y$ to find $x^2=\boxed{110}$.


## 2000 AIME II Problem 9

Given that $z$ is a complex number such that $z+\frac 1z=2\cos 3^\circ$, find the least integer that is greater than $z^{2000}+\frac 1{z^{2000}}$.
Solution

Using the quadratic equation on $z^2 - (2 \cos 3 )z + 1 = 0$, we have $z = \frac{2\cos 3 \pm \sqrt{4\cos^2 3 - 4}}{2} = \cos 3 \pm i\sin 3 = \text{cis}\,3^{\circ}$.

There are other ways we can come to this conclusion. Note that if $z$ is on the unit circle in the complex plane, then $z = e^{i\theta} = \cos \theta + i\sin \theta$ and $\frac 1z= e^{-i\theta} = \cos \theta - i\sin \theta$. We have $z+\frac 1z = 2\cos \theta = 2\cos 3^\circ$ and $\theta = 3^\circ$. Alternatively, we could let $z = a + bi$ and solve to get $z=\cos 3^\circ + i\sin 3^\circ$.


Using De Moivre's Theorem we have $z^{2000} = \cos 6000^\circ + i\sin 6000^\circ$, $6000 = 16(360) + 240$, so $z^{2000} = \cos 240^\circ + i\sin 240^\circ$.

We want $z^{2000}+\frac 1{z^{2000}} = 2\cos 240^\circ = -1$.

Finally, the least integer greater than $-1$ is $\boxed{000}$.


## 2000 AIME II Problem 10

A circle is inscribed in quadrilateral $ABCD$, tangent to $\overline{AB}$ at $P$ and to $\overline{CD}$ at $Q$. Given that $AP=19$, $PB=26$, $CQ=37$, and $QD=23$, find the square of the radius of the circle.
Solution

Call the center of the circle $O$. By drawing the lines from $O$ tangent to the sides and from $O$ to the vertices of the quadrilateral, four pairs of congruent right triangles are formed.

Thus, $\angle{AOP}+\angle{POB}+\angle{COQ}+\angle{QOD}=180$, or $(\arctan(\tfrac{19}{r})+\arctan(\tfrac{26}{r}))+(\arctan(\tfrac{37}{r})+\arctan(\tfrac{23}{r}))=180$.

Take the $\tan$ of both sides and use the identity for $\tan(A+B)$ to get $\tan(\arctan(\tfrac{19}{r})+\arctan(\tfrac{26}{r}))+\tan(\arctan(\tfrac{37}{r})+\arctan(\tfrac{23}{r}))=n\cdot0=0$.

Use the identity for $\tan(A+B)$ again to get $\frac{\tfrac{45}{r}}{1-19\cdot\tfrac{26}{r^2}}+\frac{\tfrac{60}{r}}{1-37\cdot\tfrac{23}{r^2}}=0$.

Solving gives $r^2=\boxed{647}$.


## 2000 AIME II Problem 11

The coordinates of the vertices of isosceles trapezoid $ABCD$ are all integers, with $A=(20,100)$ and $D=(21,107)$. The trapezoid has no horizontal or vertical sides, and $\overline{AB}$ and $\overline{CD}$ are the only parallel sides. The sum of the absolute values of all possible slopes for $\overline{AB}$ is $m/n$, where $m$ and $n$ are relatively prime positive integers. Find $m+n$.
Solution

For simplicity, we translate the points so that $A$ is on the origin and $D = (1,7)$. Suppose $B$ has integer coordinates; then $\overrightarrow{AB}$ is a vector with integer parameters (vector knowledge is not necessary for this solution). We construct the perpendicular from $A$ to $\overline{CD}$, and let $D' = (a,b)$ be the reflection of $D$ across that perpendicular. Then $ABCD'$ is a parallelogram, and $\overrightarrow{AB} = \overrightarrow{D'C}$. Thus, for $C$ to have integer coordinates, it suffices to let $D'$ have integer coordinates.[1]

<div align=center><img src="http://latex.artofproblemsolving.com/f/b/f/fbf4e8b84d218d7e34781471aeb31f8011858a42.png" height="150px" /></div>

Let the slope of the perpendicular be $m$. Then the midpoint of $\overline{DD'}$ lies on the line $y=mx$, so $\frac{b+7}{2} = m \cdot \frac{a+1}{2}$. Also, $AD = AD'$ implies that $a^2 + b^2 = 1^2 + 7^2 = 50$. Combining these two equations yields

$a^2 + \left(7 - (a+1)m\right)^2 = 50$

Since $a$ is an integer, then $7-(a+1)m$ must be an integer. There are $12$ pairs of integers whose squares sum up to $50,$ namely $( \pm 1, \pm 7), (\pm 7, \pm 1), (\pm 5, \pm 5)$. We exclude the cases $(\pm 1, \pm 7)$ because they lead to degenerate trapezoids (rectangle, line segment, vertical and horizontal sides). Thus we have

$7 - 8m = \pm 1, \quad 7 + 6m = \pm 1, \quad 7 - 6m = \pm 5, 7 + 4m = \pm 5$

These yield $m = 1, \frac 34, -1, -\frac 43, 2, \frac 13, -3, - \frac 12$, and the sum of their absolute values is $\frac{119}{12}$. The answer is $m+n= \boxed{131}$



^ In other words, since $ABCD'$ is a parallelogram, the difference between the x-coordinates and the y-coordinates of $C$ and $D'$ are, respectively, the difference between the x-coordinates and the y-coordinates of $A$ and $B$. But since the latter are integers, then the former are integers also, so $C$ has integer coordinates iff $D'$ has integer coordinates.


## 2000 AIME II Problem 12

The points $A$, $B$ and $C$ lie on the surface of a sphere with center $O$ and radius $20$. It is given that $AB=13$, $BC=14$, $CA=15$, and that the distance from $O$ to $\triangle ABC$ is $\frac{m\sqrt{n}}k$, where $m$, $n$, and $k$ are positive integers, $m$ and $k$ are relatively prime, and $n$ is not divisible by the square of any prime. Find $m+n+k$.
Solution

Let $D$ be the foot of the perpendicular from $O$ to the plane of $ABC$. By the Pythagorean Theorem on triangles $\triangle OAD$, $\triangle OBD$ and $\triangle OCD$ we get:

$DA^2=DB^2=DC^2=20^2-OD^2$

It follows that $DA=DB=DC$, so $D$ is the circumcenter of $\triangle ABC$.

By Heron's Formula the area of $\triangle ABC$ is (alternatively, a $13-14-15$ triangle may be split into $9-12-15$ and $5-12-13$ right triangles):

$K = \sqrt{s(s-a)(s-b)(s-c)} = \sqrt{21(21-15)(21-14)(21-13)} = 84$

From $R = \frac{abc}{4K}$, we know that the circumradius of $\triangle ABC$ is:

$R = \frac{abc}{4K} = \frac{(13)(14)(15)}{4(84)} = \frac{65}{8}$

Thus by the Pythagorean Theorem again,

$OD = \sqrt{20^2-R^2} = \sqrt{20^2-\frac{65^2}{8^2}} = \frac{15\sqrt{95}}{8}.$

So the final answer is $15+95+8=\boxed{118}$.


## 2000 AIME II Problem 13

The equation $2000x^6+100x^5+10x^3+x-2=0$ has exactly two real roots, one of which is $\frac{m+\sqrt{n}}r$, where $m$, $n$ and $r$ are integers, $m$ and $r$ are relatively prime, and $r>0$. Find $m+n+r$.
Solution

We may factor the equation as:[1]

$\begin{align*} 2000x^6+100x^5+10x^3+x-2&=0\\ 2(1000x^6-1) + x(100x^4+10x^2+1)&=0\\ 2[(10x^2)^3-1]+x[(10x^2)^2+(10x^2)+1]&=0\\ 2(10x^2-1)[(10x^2)^2+(10x^2)+1]+x[(10x^2)^2+(10x^2)+1]&=0\\ (20x^2+x-2)(100x^4+10x^2+1)&=0\\ \end{align*}$

Now $100x^4+10x^2+1\ge 1>0$ for real $x$. Thus the real roots must be the roots of the equation $20x^2+x-2=0$. By the quadratic formula the roots of this are:

$x=\frac{-1\pm\sqrt{1^2-4(-2)(20)}}{40} = \frac{-1\pm\sqrt{1+160}}{40} = \frac{-1\pm\sqrt{161}}{40}.$

Thus $r=\frac{-1+\sqrt{161}}{40}$, and so the final answer is $-1+161+40 = \boxed{200}$.



^ A well-known technique for dealing with symmetric (or in this case, nearly symmetric) polynomials is to divide through by a power of $x$ with half of the polynomial's degree (in this case, divide through by $x^3$), and then to use one of the substitutions $t = x \pm \frac{1}{x}$. In this case, the substitution $t = x\sqrt{10} - \frac{1}{x\sqrt{10}}$ gives $t^2 + 2 = 10x^2 + \frac 1{10x^2}$ and $2\sqrt{10}(t^3 + 3t) = 200x^3 - \frac{2}{10x^3}$, which reduces the polynomial to just $(t^2 + 3)\left(2\sqrt{10}t + 1\right) = 0$. Then one can backwards solve for $x$.


## 2000 AIME II Problem 14

Every positive integer $k$ has a unique factorial base expansion $(f_1,f_2,f_3,\ldots,f_m)$, meaning that $k=1!\cdot f_1+2!\cdot f_2+3!\cdot f_3+\cdots+m!\cdot f_m$, where each $f_i$ is an integer, $0\le f_i\le i$, and $0<f_m$. Given that $(f_1,f_2,f_3,\ldots,f_j)$ is the factorial base expansion of $16!-32!+48!-64!+\cdots+1968!-1984!+2000!$, find the value of $f_1-f_2+f_3-f_4+\cdots+(-1)^{j+1}f_j$.

Solution
Solution 1

Note that $1+\sum_{k=1}^{n-1} {k\cdot k!} = 1+\sum_{k=1}^{n-1} {(k+1)\cdot k!- k!} = 1+\sum_{k=1}^{n-1} {(k+1)!- k!} = n!$

Thus for all $m\in\mathbb{N}$,

$(32m+16)!-(32m)! = \left(1+\sum_{k=1}^{32m+15} {k\cdot k!}\right)-\left(1+\sum_{k=1}^{32m-1} {k\cdot k!}\right) = \sum_{k=32m}^{32m+15}k\cdot k!.$

So now,

$\begin{align*} 16!-32!+48!-64!+\cdots+1968!-1984!+2000!&=16!+(48!-32!)+(80!-64!)\cdots+(2000!-1984!)\\ &=16! +\sum_{m=1}^{62}(32m+16)!-(32m)!\\ &=16! +\sum_{m=1}^{62}\sum_{k=32m}^{32m+15}k\cdot k! \end{align*}$

Therefore we have $f_{16} = 1$, $f_k=k$ if $32m\le k \le 32m+15$ for some $m=1,2,\ldots,62$, and $f_k = 0$ for all other $k$.

Therefore we have:

$\begin{align*} f_1-f_2+f_3-f_4+\cdots+(-1)^{j+1}f_j &= (-1)^{17}\cdot 1 + \sum_{m=1}^{62}\sum_{k=32m}^{32m+15}(-1)^{k+1}k\\ &= -1 + \sum_{m=1}^{62}\left[\sum_{j=16m}^{16m+7}(-1)^{2j+1}2j+\sum_{j=16m}^{16m+7}(-1)^{2j+2}(2j+1)\right]\\ &= -1 + \sum_{m=1}^{62}\sum_{j=16m}^{16m+7}[(-1)^{2j+1}2j+(-1)^{2j+2}(2j+1)]\\ &= -1 + \sum_{m=1}^{62}\sum_{j=16m}^{16m+7}[-2j+(2j+1)]\\ &= -1 + \sum_{m=1}^{62}\sum_{j=16m}^{16m+7}1\\ &= -1 + \sum_{m=1}^{62}8\\ &= -1 + 8\cdot 62\\ &= \boxed{495} \end{align*}$
Solution 2 (informal)

This is equivalent to Solution 1. I put up this solution merely for learners to see the intuition.

Let us consider a base $n$ number system. It’s a well known fact that when we take the difference of two integral powers of $n$, (such as $10000_{10} - 100_{10}$) the result will be an integer in base $n$ composed only of the digits $n - 1$ and $0$ (in this example, $9900$). More specifically, the difference $(n^k)_n - (n^j)_n$, $j<k$ , is an integer $k$ digits long (note that $(n^k)_n$ has $k + 1$ digits). This integer is made up of $(k-j)$ $(n - 1)$’s followed by $j$ $0$’s.

It should make sense that this fact carries over to the factorial base, albeit with a modification. Whereas in the general base $n$, the largest digit value is $n - 1$, in the factorial base, the largest digit value is the argument of the factorial in that place. (for example, $321_!$ is a valid factorial base number, as is $3210_!$. However, $31_!$ is not, as $3$ is greater than the argument of the second place factorial, $2$. $31_!$ should be represented as $101_!$, and is $7_{10}$.) Therefore, for example, $1000000_! - 10000_!$ is not $990000_!$, but rather is $650000_!$. Thus, we may add or subtract factorials quite easily by converting each factorial to its factorial base expression, with a $1$ in the argument of the factorial’s place and $0$’s everywhere else, and then using a standard carry/borrow system accounting for the place value.

With general intuition about the factorial base system out of the way, we may tackle the problem. We use the associative property of addition to regroup the terms as follows: $(2000! - 1984!) + (1968! - 1952!) + \cdots + (48! - 32!) + 16!$ we now apply our intuition from paragraph 2. $2000!_{10}$ is equivalent to $1$ followed by $1999$ $0$’s in the factorial base, and $1984!$ is $1$ followed by $1983$ $0$’s, and so on. Therefore, $2000! - 1984! = (1999)(1998)(1997)\cdots(1984)$ followed by $1983$ $0$’s in the factorial base. $1968! - 1952! = (1967)(1966)\cdots(1952)$ followed by $1951$ $0$’s, and so on for the rest of the terms, except $16!$, which will merely have a $1$ in the $16!$ place followed by $0$’s. To add these numbers, no carrying will be necessary, because there is only one non-zero value for each place value in the sum. Therefore, the factorial base place value $f_k$ is $k$ for all $32m \leq k \leq 32m+15$ if $1\leq m \in\mathbb{Z} \leq 62$, $f_{16} = 1$, and $f_k = 0$ for all other $k$.

Therefore, to answer, we notice that $1999 - 1998 = 1997 - 1996 = 1$, and this will continue. Therefore, $f_{1999} - f_{1998} + \cdots - f_{1984} = 8$. We have 62 sets that sum like this, and each contains $8$ pairs of elements that sum to $1$, so our answer is almost $8 \cdot 62$. However, we must subtract the $1$ in the $f_{16}$ place, and our answer is $8 \cdot 62 - 1 = \boxed{495}$.
Solution 3 (less formality)

Let $S = 16!-32!+\cdots-1984!+2000!$. Note that since $|S - 2000!| << 2000!$ (or $|S - 2000!| = 1984! + \cdots$ is significantly smaller than $2000!$), it follows that $1999! < S < 2000!$. Hence $f_{2000} = 0$. Then $2000! = 2000 \cdot 1999! = 1999 \cdot 1999! + 1999!$, and as $S - 2000! << 1999!$, it follows that $1999 \cdot 1999! < S < 2000 \cdot 1999!$. Hence $f_{1999} = 1999$, and we now need to find the factorial base expansion of

$S_2 = S - 1999 \cdot 1999! = 1999! - 1984! + 1962! - 1946! + \cdots + 16!$

Since $|S_2 - 1999!| << 1999!$, we can repeat the above argument recursively to yield $f_{1998} = 1998$, and so forth down to $f_{1985} = 1985$. Now $S_{16} = 1985! - 1984! + 1962! + \cdots = 1984 \cdot 1984! + 1962! + \cdots$, so $f_{1984} = 1984$.

The remaining sum is now just $1962! - 1946! + \cdots + 16!$. We can repeatedly apply the argument from the previous two paragraphs to find that $f_{16} = 1$, and $f_k=k$ if $32m\le k \le 32m+15$ for some $m=1,2,\ldots,62$, and $f_k = 0$ for all other $k$.

Now for each $m$, we have $-f_{32m} + f_{32m+1} - f_{32m+2} + \cdots + f_{32m + 31}$ $= -32m + (32m + 1) - (32m + 2) + \cdots - (32m - 30) + (32 m + 31)$ $= 1 + 1 + \cdots + 1 + 1$ $= 8$. 

Thus, our answer is $-f_{16} + 8 \cdot 62 = \boxed{495}$.


## 2000 AIME II Problem 15

Find the least positive integer $n$ such that
$\frac 1{\sin 45^\circ\sin 46^\circ}+\frac 1{\sin 47^\circ\sin 48^\circ}+\cdots+\frac 1{\sin 133^\circ\sin 134^\circ}=\frac 1{\sin n^\circ}.$
Solution 1

We apply the identity

$\begin{align*} \frac{1}{\sin n \sin (n+1)} &= \frac{1}{\sin 1} \cdot \frac{\sin (n+1) \cos n - \sin n \cos (n+1)}{\sin n \sin (n+1)} \\ &= \frac{1}{\sin 1} \cdot \left(\frac{\cos n}{\sin n} - \frac{\cos (n+1)}{\sin (n+1)}\right) \\ &= \frac{1}{\sin 1} \cdot \left(\cot n - \cot (n+1)\right). \end{align*}$

The motivation for this identity arises from the need to decompose those fractions, possibly into telescoping.

Thus our summation becomes

$\sum_{k=23}^{67} \frac{1}{\sin (2k-1) \sin 2k} = \frac{1}{\sin 1} \left(\cot 45 - \cot 46 + \cot 47 - \cdots + \cot 133 - \cot 134 \right).$

Since $\cot (180 - x) = - \cot x$, the summation simply reduces to $\frac{1}{\sin 1} \cdot \left( \cot 45 - \cot 90 \right) = \frac{1 - 0}{\sin 1} = \frac{1}{\sin 1^{\circ}}$. Therefore, the answer is $\boxed{001}$.
Solution 2

We can make an approximation by observing the following points:

The average term is around the 60's which gives $\frac{4}{3}$.

There are 45 terms, so the approximate sum is 60.

Therefore, the entire thing equals approximately $\frac{1}{60}$.

Recall that the approximation of $\sin(x)$ in radians is x if x is close to zero. In this case x is close to zero. Converting to radians we see that $\sin(1)$ in degrees is about sin$\frac{1}{57}$ in radians, or is about $\frac{1}{57}$ because of the approximation. What we want is apparently close to that so we make the guess that n is equal to 1 degree. Basically, it boils down to the approximation of $\sin(1)=\frac{1}{60}$ in degrees, convert to radians and use the small angle approximation $\sin(x)=x$.



**2000 AIME II Answer Key**

1. 007
2. 098
3. 758
4. 180
5. 376
6. 181
7. 137
8. 110
9. 000
10. 647
11. 131
12. 118
13. 200
14. 495
15. 001

