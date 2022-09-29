# 2001 AIME I

## 2001 AIME I Problem 1

Find the sum of all positive two-digit integers that are divisible by each of their digits.
Solution

Let our number be $10a + b$, $a,b \neq 0$. Then we have two conditions: $10a + b \equiv 10a \equiv 0 \mod{b}$ and $10a + b \equiv b \mod{a}$, or $a$ divides into $b$ and $b$ divides into $10a$. Thus $b = a, 2a,$ or $5a$ (note that if $b = 10a$, then $b$ would not be a digit).

For $b = a$, we have $n = 11a$ for nine possibilities, giving us a sum of $11 \cdot \frac {9(10)}{2} = 495$.
For $b = 2a$, we have $n = 12a$ for four possibilities (the higher ones give $b > 9$), giving us a sum of $12 \cdot \frac {4(5)}{2} = 120$.
For $b = 5a$, we have $n = 15a$ for one possibility (again, higher ones give $b > 9$), giving us a sum of $15$. 

If we ignore the case $b = 0$ as we have been doing so far, then the sum is $495 + 120 + 15 = \boxed{630}$.

Using casework, we can list out all of these numbers: $11+12+15+22+24+33+36+44+48+55+66+77+88+99=\boxed{630}$.


## 2001 AIME I Problem 2

A finite set $\mathcal{S}$ of distinct real numbers has the following properties: the mean of $\mathcal{S}\cup\{1\}$ is $13$ less than the mean of $\mathcal{S}$, and the mean of $\mathcal{S}\cup\{2001\}$ is $27$ more than the mean of $\mathcal{S}$. Find the mean of $\mathcal{S}$.
Solution

Let $x$ be the mean of $\mathcal{S}$. Let $a$ be the number of elements in $\mathcal{S}$. Then, the given tells us that $\frac{ax+1}{a+1}=x-13$ and $\frac{ax+2001}{a+1}=x+27$. Subtracting, we have 

$\begin{align*}\frac{ax+2001}{a+1}-40=\frac{ax+1}{a+1} \Longrightarrow \frac{2000}{a+1}=40 \Longrightarrow a=49\end{align*}$ 

We plug that into our very first formula, and get: 

$\begin{align*}\frac{49x+1}{50}&=x-13 \\ 49x+1&=50x-650 \\ x&=\boxed{651}.\end{align*}$


## 2001 AIME I Problem 3


Find the sum of the roots, real and non-real, of the equation $x^{2001}+\left(\frac 12-x\right)^{2001}=0$, given that there are no multiple roots.
Solution 1

From Vieta's formulas, in a polynomial of the form $a_nx^n + a_{n-1}x^{n-1} + \cdots + a_0 = 0$, then the sum of the roots is $\frac{-a_{n-1}}{a_n}$.

From the Binomial Theorem, the first term of $\left(\frac 12-x\right)^{2001}$ is $-x^{2001}$, but $x^{2001}+-x^{2001}=0$, so the term with the largest degree is $x^{2000}$. So we need the coefficient of that term, as well as the coefficient of $x^{1999}$.

$\begin{align*}\binom{2001}{1} \cdot (-x)^{2000} \cdot \left(\frac{1}{2}\right)^1&=\frac{2001x^{2000}}{2}\\ \binom{2001}{2} \cdot (-x)^{1999} \cdot \left(\frac{1}{2}\right)^2 &=\frac{-x^{1999}*2001*2000}{8}=-2001 \cdot 250x^{1999} \end{align*}$

Applying Vieta's formulas, we find that the sum of the roots is $-\frac{-2001 \cdot 250}{\frac{2001}{2}}=250 \cdot 2=\boxed{500}$.
Solution 2

We find that the given equation has a $2000th$ degree polynomial. Note that there are no multiple roots. Thus, if $\frac{1}{2} - x$ is a root, $x$ is also a root. Thus, we pair up $1000$ pairs of roots that sum to $\frac{1}{2}$ to get a sum of $\boxed{500}$.




## 2001 AIME I Problem 4


In triangle $ABC$, angles $A$ and $B$ measure $60$ degrees and $45$ degrees, respectively. The bisector of angle $A$ intersects $\overline{BC}$ at $T$, and $AT=24$. The area of triangle $ABC$ can be written in the form $a+b\sqrt{c}$, where $a$, $b$, and $c$ are positive integers, and $c$ is not divisible by the square of any prime. Find $a+b+c$.
Solution 1

<div align=center><img src="http://latex.artofproblemsolving.com/f/d/8/fd80ef0be57cda8d5c014431604ac07fc2c9a044.png" height="150px" /></div>

Let $D$ be the foot of the altitude from $C$ to $\overline{AB}$. By simple angle-chasing, we find that $\angle ATB = 105^{\circ}, \angle ATC = 75^{\circ} = \angle ACT$, and thus $AC = AT = 24$. Now $\triangle ADC$ is a $30-60-90$ right triangle and $BDC$ is a $45-45-90$ right triangle, so $AD = 12,\,CD = 12\sqrt{3},\,BD = 12\sqrt{3}$. The area of

$ABC = \frac{1}{2}bh = \frac{CD \cdot (AD + BD)}{2} = \frac{12\sqrt{3} \cdot \left(12\sqrt{3} + 12\right)}{2} = 216 + 72\sqrt{3},$

and the answer is $a+b+c = 216 + 72 + 3 = \boxed{291}$.
Solution 2

Since $\angle CAB$ has a measure of $60^{\circ}$, and thus has sines and cosines that are easy to compute, we attempt to find $AC$ and $AB$, and use the formula that

$[ABC] = \frac{1}{2} \cdot AC \cdot AB \cdot \sin \angle A$

By angle chasing, we find that $ACT$ is a triangle with $\angle A = 30^{\circ}, \angle C = 75^{\circ}$ and $\angle T = 75^{\circ}$. Thus $AC = AT = 24$.

Switching to the lower triangle $ATB$, $\angle A = 30^{\circ}, \angle T = 105^{\circ}$, and $\angle B = 45^{\circ}$, with $AT = 24$.

Using the Law of Sines on $ATB$:

$\frac{AT}{\sin 45^{\circ}} = \frac{AB}{\sin 105^{\circ}}$

$24 \cdot \sqrt{2} \cdot \sin 105^{\circ} = AB$

$24 \cdot \sqrt{2} \cdot \sin (60^{\circ}+ 45^{\circ}) = AB$

$24 \cdot \sqrt{2} \cdot (\sin 60^{\circ} \cos 45^{\circ} + \sin 45^{\circ} \cos 60^{\circ}) = AB$

$24 \cdot \sqrt{2} \cdot (\frac {\sqrt{3}}{2} + \frac{1}{2}) \cdot \frac{\sqrt{2}}{2} = AB$

$AB = 12 \cdot (\sqrt{3} + 1)$

We now plug in $AC$, $AB$ and $\sin \angle A$ into the formula for the area:

$[ABC] = \frac{1}{2} \cdot AC \cdot AB \cdot \sin \angle A$

$[ABC] = \frac{1}{2} \cdot 24 \cdot 12 \cdot (\sqrt{3} + 1) \cdot \frac{\sqrt{3}}{2}$

$[ABC] = 72\sqrt{3} \cdot (\sqrt{3} + 1)$

$[ABC] = 216 + 72\sqrt{3}$

Thus the answer is $216 + 72 + 3 = \boxed{291}$

## 2001 AIME I Problem 5

An equilateral triangle is inscribed in the ellipse whose equation is $x^2+4y^2=4$. One vertex of the triangle is $(0,1)$, one altitude is contained in the y-axis, and the length of each side is $\sqrt{\frac mn}$, where $m$ and $n$ are relatively prime positive integers. Find $m+n$.

Solution

<div align=center><img src="http://latex.artofproblemsolving.com/c/1/c/c1c17659e426bf52cb1df3d3e5f87476ced5b24c.png" height="150px" /></div>

Solution 1

Denote the vertices of the triangle $A,B,$ and $C,$ where $B$ is in quadrant 4 and $C$ is in quadrant $3.$

Note that the slope of $\overline{AC}$ is $\tan 60^\circ = \sqrt {3}.$ Hence, the equation of the line containing $\overline{AC}$ is $y = x\sqrt {3} + 1.$ This will intersect the ellipse when 

$\begin{eqnarray*}4 = x^{2} + 4y^{2} & = & x^{2} + 4(x\sqrt {3} + 1)^{2} \\ & = & x^{2} + 4(3x^{2} + 2x\sqrt {3} + 1) \implies x = \frac { - 8\sqrt {3}}{13}. \end{eqnarray*}$ 

Since the triangle is symmetric with respect to the y-axis, the coordinates of $B$ and $C$ are now $\left(\frac {8\sqrt {3}}{13},y_{0}\right)$ and $\left(\frac { - 8\sqrt {3}}{13},y_{0}\right),$ respectively, for some value of $y_{0}.$

Since we're going to use the distance formula, the value of $y_{0}$ is irrelevant. Our answer is $BC = \sqrt {2\left(\frac {8\sqrt {3}}{13}\right)^{2}} = \sqrt {\frac {768}{169}}\implies m + n = \boxed{937}.$
Solution 2

Solving for $y$ in terms of $x$ gives $y=\sqrt{4-x^2}/2$, so the two other points of the triangle are $(x,\sqrt{4-x^2}/2)$ and $(-x,\sqrt{4-x^2}/2)$, which are a distance of $2x$ apart. Thus $2x$ equals the distance between $(x,\sqrt{4-x^2}/2)$ and $(0,1)$, so by the distance formula we have

$2x=\sqrt{x^2+(1-\sqrt{4-x^2}/2)^2}.$

Squaring both sides and simplifying through algebra yields $x^2=192/169$, so $2x=\sqrt{768/169}$ and the answer is $\boxed{937}$.
Solution 3

Since the altitude goes along the $y$ axis, this means that the base is a horizontal line, which means that the endpoints of the base are $(x,y)$ and $(-x,y)$, and WLOG, we can say that $x$ is positive.

Now, since all sides of an equilateral triangle are the same, we can do this (distance from one of the endpoints of the base to the vertex and the length of the base):

$\sqrt{x^2 + (y-1)^2} = 2x$

Square both sides,

$x^2 + (y-1)^2 = 4x^2$ $(y-1)^2 = 3x^2$

Now, with the equation of the ellipse: $x^2 + 4y^2 = 4$

$x^2 = 4-4y^2$

$3x^2 = 12-12y^2$

Substituting,

$12-12y^2 = y^2 - 2y +1$

Moving stuff around and solving:

$y = \frac{-11}{3}, 1$

The second is found to be extraneous, so, when we go back and figure out $x$ and then $2x$ (which is the side length), we find it to be:

$\sqrt{\frac{768}{169}}$

and so we get the desired answer of $\boxed{937}$.




## 2001 AIME I Problem 6

A fair die is rolled four times. The probability that each of the final three rolls is at least as large as the roll preceding it may be expressed in the form $\frac{m}{n}$ where $m$ and $n$ are relatively prime positive integers. Find $m + n$.

Solutions
Solution 1

Recast the problem entirely as a block-walking problem. Call the respective dice $a, b, c, d$. In the diagram below, the lowest $y$-coordinate at each of $a$, $b$, $c$, and $d$ corresponds to the value of the roll.

<div align=center><img src="http://wiki-images.artofproblemsolving.com/2/26/AIME01IN6.png" height="200px" /></div>

The red path corresponds to the sequence of rolls $2, 3, 5, 5$. This establishes a one-to-one correspondence between valid dice roll sequences and block walking paths.

The solution to this problem is therefore $\frac{\binom{9}{4}}{6^4} = \boxed{\frac{7}{72}}$.
Solution 2

If we take any combination of four numbers, there is only one way to order them in a non-decreasing order. It suffices now to find the number of combinations for four numbers from $\{1,2,3,4,5,6\}$. We can visualize this as taking the four dice and splitting them into 6 slots (each slot representing one of {1,2,3,4,5,6}), or dividing them amongst 5 separators. Thus, there are ${9\choose4} = 126$ outcomes of four dice. The solution is therefore $\frac{126}{6^4} = \frac{7}{72}$, and $7 + 72 = \boxed{079}$.
Solution 3

Call the dice rolls $a, b, c, d$. The difference between the $a$ and $d$ distinguishes the number of possible rolls there are.

If $a - d = 0$, then the values of $b,\ c$ are set, and so there are $6$ values for $a,\ d$.
If $a - d = 1$, then there are ${3\choose2} = 3$ ways to arrange for values of $b,\ c$, but only $5$ values for $a,\ d$.
If $a - d = 2$, then there are ${4\choose2} = 6$ ways to arrange $b, c$, and there are only $6 - 2 = 4$ values for $a, d$.

Continuing, we see that the sum is equal to $\sum_{i = 0}^{5}{i+2\choose2}(6 - i) = 6 + 15 + 24 + 30 + 30 + 21 = 126$. The requested probability is $\frac{126}{6^4} = \frac{7}{72}$.
Solution 4

The dice rolls can be in the form

ABCD
AABC
AABB
AAAB
AAAA

where A, B, C, D are some possible value of the dice rolls. (These forms are not keeping track of whether or not the dice are in ascending order, just the possible outcomes.)

Now, for the first case, there are ${6\choose4} = 15$ ways for this. We do not have to consider the order because the combination counts only one of the permutations; we can say that it counts the correct (ascending order) permutation.
Second case: ${6\choose3} = 20$ ways to pick 3 numbers, ${3\choose1}$ ways to pick 1 of those 3 to duplicate. A total of 60 for this case.
Third case: ${6\choose2}=15$ ways to pick 2 numbers. We will duplicate both, so nothing else in this case matters.
Fourth case: ${6\choose2} = 15$ ways to pick 2 numbers. We pick one to duplicate with ${2\choose1} = 2$, so there are a total of 30 in this case.
Fifth case: ${6\choose1} = 6$; all get duplicated so nothing else matters. 

There are a total of $6^4$ possible dice rolls.

Thus,
$\frac{m}{n} = \frac{15 + 60 + 15 + 30 + 6}{6^4} = \frac{126}{6^4} = \frac{7}{72}$
Solution 5

Consider the number of possible dice roll combinations which work after $1$ roll, after $2$ rolls, and so on. There is 6 possible rolls for the first dice. If the number rolled is a 1, then there are 6 further values that are possible for the second dice; if the number rolled is a 2, then there are 5 further values that are possible for the second dice, and so on.

Suppose we generalize this as a function, say $f(l,r)$ return the number of possible combinations after $l$ rolls and $r$ being the beginning value of the first roll. It becomes clear that from above, $f(1,r) = 1$; every value of $l$ after that is equal to the sum of the number of combinations of $l - 1$ rolls that have a starting value of at least $r$. If we slowly count through and add up all the possible combinations we get $\frac{7}{72}$ possibilities.
Solution 6

In a manner similar to the above solution, instead consider breaking it down into two sets of two dice rolls. The first subset must have a maximum value which is $\le$ the minimum value of the second subset.

If the first subset ends in a 1, there is $1$ such subset and there are $6 + 5 + 4 + 3 + 2 + 1 = \frac{6}{2}(6 + 1) = 21$ ways of making the second subset.
If the first subset ends in a 2, there is $2$ such subsets and there are $5 + \ldots + 1 = \frac{5}{2}(5 + 1) = 15$ ways of making the second subset.

Thus, the number of combinations is $\sum_{i=1}^6 i \cdot \left(\frac{(7 - i)(8 - i)}{2}\right) = 21 + 30 + 30 + 24 + 15 + 6 = 126$, and the probability again is $\frac7{72}$.


## 2001 AIME I Problem 7

Triangle $ABC$ has $AB=21$, $AC=22$ and $BC=20$. Points $D$ and $E$ are located on $\overline{AB}$ and $\overline{AC}$, respectively, such that $\overline{DE}$ is parallel to $\overline{BC}$ and contains the center of the inscribed circle of triangle $ABC$. Then $DE=m/n$, where $m$ and $n$ are relatively prime positive integers. Find $m+n$.

Solution 1

<div align=center><img src="http://latex.artofproblemsolving.com/a/e/4/ae47e3711da65c309f6b7dc3c0e55287b8c8a5fc.png" height="150px" /></div>

Let $I$ be the incenter of $\triangle ABC$, so that $BI$ and $CI$ are angle bisectors of $\angle ABC$ and $\angle ACB$ respectively. Then, $\angle BID = \angle CBI = \angle DBI,$ so $\triangle BDI$ is isosceles, and similarly $\triangle CEI$ is isosceles. It follows that $DE = DB + EC$, so the perimeter of $\triangle ADE$ is $AD + AE + DE = AB + AC = 43$. Hence, the ratio of the perimeters of $\triangle ADE$ and $\triangle ABC$ is $\frac{43}{63}$, which is the scale factor between the two similar triangles, and thus $DE = \frac{43}{63} \times 20 = \frac{860}{63}$. Thus, $m + n = \boxed{923}$.
Solution 2

<div align=center><img src="http://latex.artofproblemsolving.com/3/0/8/308015d62aeb9917bd2a032c366423e1e0529c1f.png" height="150px" /></div>

The semiperimeter of $ABC$ is $s = \frac{20 + 21 + 22}{2} = \frac{63}{2}$. By Heron's formula, the area of the whole triangle is $A = \sqrt{s(s-a)(s-b)(s-c)} = \frac{21\sqrt{1311}}{4}$. Using the formula $A = rs$, we find that the inradius is $r = \frac{A}{s} = \frac{\sqrt{1311}}6$. Since $\triangle ADE \sim \triangle ABC$, the ratio of the heights of triangles $ADE$ and $ABC$ is equal to the ratio between sides $DE$ and $BC$. From $A=\frac{1}{2}bh$, we find $h_{ABC} = \frac{21\sqrt{1311}}{40}$. Thus, we have
$\frac{h_{ADE}}{h_{ABC}} = \frac{h_{ABC}-r}{h_{ABC}} = \frac{21\sqrt{1311}/40-\sqrt{1311}/6}{21\sqrt{1311}/40}=\frac{DE}{20}.$
Solving for $DE$ gives $DE=\frac{860}{63},$ so the answer is $m+n=\boxed{923}$.


Or we have the area of the triangle as $S$. Using the ratio of heights to ratio of bases of $ADE$ and $ABC$ $\frac {\frac {2S}{20}-\frac {2S}{63}}{\frac {2S}{20}}= \frac {DE}{BC(20)}$ from that it is easy to deduce that $DE=\frac{860}{63}$.
Solution 3 (mass points)

<div align=center><img src="http://latex.artofproblemsolving.com/7/c/7/7c752cc350ded25b2c947d336d77bc6ccf240f96.png" height="150px" /></div>

Let $P$ be the incircle; then it is be the intersection of all three angle bisectors. Draw the bisector $AP$ to where it intersects $BC$, and name the intersection $F$.

Using the angle bisector theorem, we know the ratio $BF:CF$ is $21:22$, thus we shall assign a weight of $22$ to point $B$ and a weight of $21$ to point $C$, giving $F$ a weight of $43$. In the same manner, using another bisector, we find that $A$ has a weight of $20$. So, now we know $P$ has a weight of $63$, and the ratio of $FP:PA$ is $20:43$. Therefore, the smaller similar triangle $ADE$ is $43/63$ the height of the original triangle $ABC$. So, $DE$ is $43/63$ the size of $BC$. Multiplying this ratio by the length of $BC$, we find $DE$ is $860/63 = m/n$. Therefore, $m+n=\boxed{923}$.
Solution 4 (Quicker)

More directly than Solution 2, we have $DE=BC\left(\frac{h_a-r}{h_a}\right)=20\left(1-\frac{r}{\frac{[ABC]}{\frac{BC}{2}}}\right)=20\left(1-\frac{10r}{sr}\right)=20\left(1-\frac{10}{\frac{63}{2}}\right)=\frac{860}{63}\implies \boxed{923}.$


## 2001 AIME I Problem 8

Call a positive integer $N$ a 7-10 double if the digits of the base-$7$ representation of $N$ form a base-$10$ number that is twice $N$. For example, $51$ is a 7-10 double because its base-$7$ representation is $102$. What is the largest 7-10 double?
Solution

We let $N_7 = \overline{a_na_{n-1}\cdots a_0}_7$; we are given that

$2(a_na_{n-1}\cdots a_0)_7 = (a_na_{n-1}\cdots a_0)_{10}$

Expanding, we find that

$2 \cdot 7^n a_n + 2 \cdot 7^{n-1} a_{n-1} + \cdots + 2a_0 = 10^na_n + 10^{n-1}a_{n-1} + \cdots + a_0$

or re-arranging,

$a_0 + 4a_1 = 2a_2 + 314a_3 + \cdots + (10^n - 2 \cdot 7^n)a_n$

Since the $a_i$s are base-$7$ digits, it follows that $a_i < 7$, and the LHS is less than $30$. Hence our number can have at most $3$ digits in base-$7$. Letting $a_2 = 6$, we find that $630_7 = \boxed{315}_{10}$ is our largest 7-10 double.


## 2001 AIME I Problem 9


In triangle $ABC$, $AB=13$, $BC=15$ and $CA=17$. Point $D$ is on $\overline{AB}$, $E$ is on $\overline{BC}$, and $F$ is on $\overline{CA}$. Let $AD=p\cdot AB$, $BE=q\cdot BC$, and $CF=r\cdot CA$, where $p$, $q$, and $r$ are positive and satisfy $p+q+r=2/3$ and $p^2+q^2+r^2=2/5$. The ratio of the area of triangle $DEF$ to the area of triangle $ABC$ can be written in the form $m/n$, where $m$ and $n$ are relatively prime positive integers. Find $m+n$.
Solution
Solution 1

<div align=center><img src="https://latex.artofproblemsolving.com/a/a/5/aa532b18510960c694fe8213246465f219c7d942.png" height="150px" /></div>

We let $[\ldots]$ denote area; then the desired value is
$\frac mn = \frac{[DEF]}{[ABC]} = \frac{[ABC] - [ADF] - [BDE] - [CEF]}{[ABC]}$

Using the formula for the area of a triangle $\frac{1}{2}ab\sin C$, we find that
$\frac{[ADF]}{[ABC]} = \frac{\frac 12 \cdot p \cdot AB \cdot (1-r) \cdot AC \cdot \sin \angle CAB}{\frac 12 \cdot AB \cdot AC \cdot \sin \angle CAB} = p(1-r)$

and similarly that $\frac{[BDE]}{[ABC]} = q(1-p)$ and $\frac{[CEF]}{[ABC]} = r(1-q)$. Thus, we wish to find $\begin{align*}\frac{[DEF]}{[ABC]} &= 1 - \frac{[ADF]}{[ABC]} - \frac{[BDE]}{[ABC]} - \frac{[CEF]}{[ABC]} \\ &= 1 - p(1-r) - q(1-p) - r(1-q)\\ &= (pq + qr + rp) - (p + q + r) + 1 \end{align*}$ We know that $p + q + r = \frac 23$, and also that $(p+q+r)^2 = p^2 + q^2 + r^2 + 2(pq + qr + rp) \Longleftrightarrow pq + qr + rp = \frac{\left(\frac 23\right)^2 - \frac 25}{2} = \frac{1}{45}$. Substituting, the answer is $\frac 1{45} - \frac 23 + 1 = \frac{16}{45}$, and $m+n = \boxed{061}$.
Solution 2

By the barycentric area formula, our desired ratio is equal to 

$\begin{align*} \begin{vmatrix} 1-p & p & 0 \\ 0 & 1-q & q \\ r & 0 & 1-r \notag \end{vmatrix} &=1-p-q-r+pq+qr+pr\\ &=1-(p+q+r)+\frac{(p+q+r)^2-(p^2+q^2+r^2)}{2}\\ &=1-\frac{2}{3}+\frac{\frac{4}{9}-\frac{2}{5}}{2}\\ &=\frac{16}{45} \end{align*}$, 

so the answer is $\boxed{61.}$

Note

Because the givens in the problem statement are all regarding the ratios of the sides, the side lengths of triangle $ABC$, namely $13, 15, 17$, are actually not necessary to solve the problem. This is clearly demonstrated in both of the above solutions, as the side lengths are not used at all.


## 2001 AIME I Problem 10

Let $S$ be the set of points whose coordinates $x,$ $y,$ and $z$ are integers that satisfy $0\le x\le2,$ $0\le y\le3,$ and $0\le z\le4.$ Two distinct points are randomly chosen from $S.$ The probability that the midpoint of the segment they determine also belongs to $S$ is $m/n,$ where $m$ and $n$ are relatively prime positive integers. Find $m + n.$
Solution

The distance between the $x$, $y$, and $z$ coordinates must be even so that the midpoint can have integer coordinates. Therefore,

For $x$, we have the possibilities $(0,0)$, $(1,1)$, $(2,2)$, $(0,2)$, and $(2,0)$, $5$ possibilities.
For $y$, we have the possibilities $(0,0)$, $(1,1)$, $(2,2)$, $(3,3)$, $(0,2)$, $(2,0)$, $(1,3)$, and $(3,1)$, $8$ possibilities.
For $z$, we have the possibilities $(0,0)$, $(1,1)$, $(2,2)$, $(3,3)$, $(4,4)$, $(0,2)$, $(0,4)$, $(2,0)$, $(4,0)$, $(2,4)$, $(4,2)$, $(1,3)$, and $(3,1)$, $13$ possibilities. 

However, we have $3\cdot 4\cdot 5 = 60$ cases where we have simply taken the same point twice, so we subtract those. Therefore, our answer is $\frac {5\cdot 8\cdot 13 - 60}{60\cdot 59} = \frac {23}{177}\Longrightarrow m+n = \boxed{200}$.


## 2001 AIME I Problem 11

In a rectangular array of points, with 5 rows and $N$ columns, the points are numbered consecutively from left to right beginning with the top row. Thus the top row is numbered 1 through $N,$ the second row is numbered $N + 1$ through $2N,$ and so forth. Five points, $P_1, P_2, P_3, P_4,$ and $P_5,$ are selected so that each $P_i$ is in row $i.$ Let $x_i$ be the number associated with $P_i.$ Now renumber the array consecutively from top to bottom, beginning with the first column. Let $y_i$ be the number associated with $P_i$ after the renumbering. It is found that $x_1 = y_2,$ $x_2 = y_1,$ $x_3 = y_4,$ $x_4 = y_5,$ and $x_5 = y_3.$ Find the smallest possible value of $N.$
Solution

Let each point $P_i$ be in column $c_i$. The numberings for $P_i$ can now be defined as follows. $\begin{align*}x_i &= (i - 1)N + c_i\\ y_i &= (c_i - 1)5 + i \end{align*}$

We can now convert the five given equalities. 

$\begin{align}x_1&=y_2 & \Longrightarrow & & c_1 &= 5 c_2-3\\ x_2&=y_1 & \Longrightarrow & & N+c_2 &= 5 c_1-4\\ x_3&=y_4 & \Longrightarrow & & 2 N+c_3 &= 5 c_4-1\\ x_4&=y_5 & \Longrightarrow & & 3 N+c_4 &= 5 c_5\\ x_5&=y_3 & \Longrightarrow & & 4 N+c_5 &= 5 c_3-2 \end{align}$ 

Equations $(1)$ and $(2)$ combine to form $N = 24c_2 - 19$ Similarly equations $(3)$, $(4)$, and $(5)$ combine to form $117N +51 = 124c_3$ Take this equation modulo 31 $24N+20\equiv 0 \mod{31}$ And substitute for N $24 \cdot 24 c_2 - 24 \cdot 19 +20\equiv 0 \mod{31}$ $18 c_2 \equiv 2 \mod{31}$

Thus the smallest $c_2$ might be is $7$ and by substitution $N = 24 \cdot 7 - 19 = 149$

The column values can also easily be found by substitution 

$\begin{align*}c_1&=32\\ c_2&=7\\ c_3&=141\\ c_4&=88\\ c_5&=107 \end{align*}$ 

As these are all positive and less than $N$, $\boxed{149}$ is the solution.
Sidenote

If we express all the $c_i$ in terms of $N$, we have $24c_1=5N+23$ $24c_2=N+19$ $124c_3=117N+51$ $124c_4=73N+35$ $124c_5=89N+7$

It turns out that there exists such an array satisfying the problem conditions if and only if $N\equiv 149 \mod{744}$


## 2001 AIME I Problem 12


A sphere is inscribed in the tetrahedron whose vertices are $A = (6,0,0), B = (0,4,0), C = (0,0,2),$ and $D = (0,0,0).$ The radius of the sphere is $m/n,$ where $m$ and $n$ are relatively prime positive integers. Find $m + n.$
Solution

<div align=center><img src="http://latex.artofproblemsolving.com/a/d/5/ad592fa5d796f97d2c229a092105e33dc3dfc1ed.png" height="100px" /></div>

The center $I$ of the insphere must be located at $(r,r,r)$ where $r$ is the sphere's radius. $I$ must also be a distance $r$ from the plane $ABC$

The signed distance between a plane and a point $I$ can be calculated as $\frac{(I-G) \cdot P}{|P|}$, where G is any point on the plane, and P is a vector perpendicular to ABC.

A vector $P$ perpendicular to plane $ABC$ can be found as $V=(A-C)\times(B-C)=\langle 8, 12, 24 \rangle$

Thus $\frac{(I-C) \cdot P}{|P|}=-r$ where the negative comes from the fact that we want $I$ to be in the opposite direction of $P$

$\begin{align*}\frac{(I-C) \cdot P}{|P|}&=-r\\ \frac{(\langle r, r, r \rangle-\langle 0, 0, 2 \rangle) \cdot P}{|P|}&=-r\\ \frac{\langle r, r, r-2 \rangle \cdot \langle 8, 12, 24 \rangle}{\langle 8, 12, 24 \rangle}&=-r\\ \frac{44r -48}{28}&=-r\\ 44r-48&=-28r\\ 72r&=48\\ r&=\frac{2}{3} \end{align*}$


Finally $2+3=\boxed{005}$
Solution 2

Notice that we can split the tetahedron into $4$ smaller tetrahedrons such that the height of each tetrahedron is $r$ and the base of each tetrahedron is one of the faces of the original tetrahedron. This is because the bases of the spheres are tangent to the sphere, so the line from the center to the foot of the perpendicular to the bases hits the tangency points. Letting volume be $V$ and surface area be $F$, using the volume formula for each pyramid(base times height divided by 3) we have $\frac{rF}{3}=V$. The surface area of the pyramid is $\frac{6\cdot{4}+6\cdot{2}+4\cdot{2}}{2}+[ABC]=22+[ABC]$. We know triangle ABC's side lengths, $\sqrt{2^{2}+4^{2}}, \sqrt{2^{2}+6^{2}},$ and $\sqrt{4^{2}+6^{2}}$, so using the expanded form of heron's formula, $[ABC]=\sqrt{\frac{2(a^{2}b^{2}+b^{2}c^{2}+a^{2}c^{2})-a^{4}-b^{4}-c^{4}}{16}}=\sqrt{2(5\cdot{13}+10\cdot{5}+13\cdot{10})-5^{2}-10^{2}-13^{2}}=\sqrt{196}=14$. Therefore, the surface area is $14+22=36$, and the volume is $\frac{[BCD]\cdot{6}}{3}=\frac{4\cdot{2}\cdot{6}}{3\cdot{2}}=8$, and using the formula above that $\frac{rF}{3}=V$, we have $12r=8$ and thus $r=\frac{2}{3}$, so the desired answer is $2+3=\boxed{005}$.

(Solution by Shaddoll)


## 2001 AIME I Problem 13


In a certain circle, the chord of a $d$-degree arc is $22$ centimeters long, and the chord of a $2d$-degree arc is $20$ centimeters longer than the chord of a $3d$-degree arc, where $d < 120.$ The length of the chord of a $3d$-degree arc is $- m + \sqrt {n}$ centimeters, where $m$ and $n$ are positive integers. Find $m + n.$
Solution
Solution 1

<div align=center><img src="http://wiki-images.artofproblemsolving.com/0/01/2001AIME13.png" height="150px" /></div>

Note that a cyclic quadrilateral in the form of an isosceles trapezoid can be formed from three chords of three $d$-degree arcs and one chord of one $3d$-degree arc. The diagonals of this trapezoid turn out to be two chords of two $2d$-degree arcs. Let $AB$, $AC$, and $BD$ be the chords of the $d$-degree arcs, and let $CD$ be the chord of the $3d$-degree arc. Also let $x$ be equal to the chord length of the $3d$-degree arc. Hence, the length of the chords, $AD$ and $BC$, of the $2d$-degree arcs can be represented as $x + 20$, as given in the problem.

Using Ptolemy's theorem,

$AB(CD) + AC(BD) = AD(BC)$ $22x + 22(22) = (x + 20)^2$ $22x + 484 = x^2 + 40x + 400$ $0 = x^2 + 18x - 84$

We can then apply the quadratic formula to find the positive root to this equation since polygons obviously cannot have sides of negative length. $x = \frac{-18 + \sqrt{18^2 + 4(84)}}{2}$ $x = \frac{-18 + \sqrt{660}}{2}$

$x$ simplifies to $\frac{-18 + 2\sqrt{165}}{2},$ which equals $-9 + \sqrt{165}.$ Thus, the answer is $9 + 165 = \boxed{174}$.
Solution 2

Let $z=\frac{d}{2},$ and $R$ be the circumradius. From the given information, $2R\sin z=22$ $2R(\sin 2z-\sin 3z)=20$ Dividing the latter by the former, $\frac{2\sin z\cos z-(3\cos^2z\sin z-\sin^3 z)}{\sin z}=2\cos z-(3\cos^2z-\sin^2z)=1+2\cos z-4\cos^2z=\frac{10}{11}$ $4\cos^2z-2\cos z-\frac{1}{11}=0 (1)$ We want to find $\frac{22\sin (3z)}{\sin z}=22(3-4\sin^2z)=22(4\cos^2z-1).$ From $(1),$ this is equivalent to $44\cos z-20.$ Using the quadratic formula, we find that the desired length is equal to $\sqrt{165}-9,$ so our answer is $\boxed{174.}$


## 2001 AIME I Problem 14

A mail carrier delivers mail to the nineteen houses on the east side of Elm Street. The carrier notices that no two adjacent houses ever get mail on the same day, but that there are never more than two houses in a row that get no mail on the same day. How many different patterns of mail delivery are possible?
Solution

Let $0$ represent a house that does not receive mail and $1$ represent a house that does receive mail. This problem is now asking for the number of $19$-digit strings of $0$'s and $1$'s such that there are no two consecutive $1$'s and no three consecutive $0$'s.

The last two digits of any $n$-digit string can't be $11$, so the only possibilities are $00$, $01$, and $10$.

Let $a_n$ be the number of $n$-digit strings ending in $00$, $b_n$ be the number of $n$-digit strings ending in $01$, and $c_n$ be the number of $n$-digit strings ending in $10$.

If an $n$-digit string ends in $00$, then the previous digit must be a $1$, and the last two digits of the $n-1$ digits substring will be $10$. So $a_{n} = c_{n-1}.$

If an $n$-digit string ends in $01$, then the previous digit can be either a $0$ or a $1$, and the last two digits of the $n-1$ digits substring can be either $00$ or $10$. So $b_{n} = a_{n-1} + c_{n-1}.$

If an $n$-digit string ends in $10$, then the previous digit must be a $0$, and the last two digits of the $n-1$ digits substring will be $01$. So $c_{n} = b_{n-1}.$

Clearly, $a_2=b_2=c_2=1$. Using the recursive equations and initial values: $$\begin{array}{|c|c|c|c|c|c|c|c|c|c|c|c|c|c|c|c|c|c|c|} \multicolumn{19}{c}{}\\\hline n&2&3&4&5&6&7&8&9&10&11&12&13&14&15&16&17&18&19\\\hline a_n&1&1&1&2&2&3&4&5&7&9&12&16&21&28&37&49&65&86\\\hline b_n&1&2&2&3&4&5&7&9&12&16&21&28&37&49&65&86&114&151\\\hline c_n&1&1&2&2&3&4&5&7&9&12&16&21&28&37&49&65&86&114\\\hline \end{array}$$

Therefore, the number of $19$-digit strings is $a_{19}+b_{19}+c_{19} = 86+151+114 = \boxed{351}.$

## 2001 AIME I Problem 15

The numbers $1, 2, 3, 4, 5, 6, 7,$ and $8$ are randomly written on the faces of a regular octahedron so that each face contains a different number. The probability that no two consecutive numbers, where $8$ and $1$ are considered to be consecutive, are written on faces that share an edge is $m/n,$ where $m$ and $n$ are relatively prime positive integers. Find $m + n.$
Solution
Solution 1

Choose one face of the octahedron randomly and label it with $1$. There are three faces adjacent to this one, which we will call A-faces. There are three faces adjacent to two of the A-faces, which we will call B-faces, and one face adjacent to the three B-faces, which we will call the C-face.

Clearly, the labels for the A-faces must come from the set $\{3,4,5,6,7\}$, since these faces are all adjacent to $1$. There are thus $5 \cdot 4 \cdot 3 = 60$ ways to assign the labels for the A-faces.

The labels for the B-faces and C-face are the two remaining numbers from the above set, plus $2$ and $8$. The number on the C-face must not be consecutive to any of the numbers on the B-faces.

From here it is easiest to brute force the $10$ possibilities for the $4$ numbers on the B and C faces:

2348 (2678): 8(2) is the only one not adjacent to any of the others, so it goes on the C-face. 4(6) has only one B-face it can go to, while 2 and 3 (7 and 8) can be assigned randomly to the last two. 2 possibilities here.

2358 (2578): 5 cannot go on any of the B-faces, so it must be on the C-face. 3 and 8 (2 and 7) have only one allowable B-face, so just 1 possibility here.

2368 (2478): 6(4) cannot go on any of the B-faces, so it must be on the C-face. 3 and 8 (2 and 7) have only one allowable B-face, so 1 possibility here.

2458 (2568): All of the numbers have only one B-face they could go to. 2 and 4 (6 and 8) can go on the same, so one must go to the C-face. Only 2(8) is not consecutive with any of the others, so it goes on the C-face. 1 possibility.

2378: None of the numbers can go on the C-face because they will be consecutive with one of the B-face numbers. So this possibility is impossible. 

2468: Both 4 and 6 cannot go on any B-face. They cannot both go on the C-face, so this possibility is impossible.

There is a total of $10$ possibilities. There are $3!=6$ permutations (more like "rotations") of each, so $60$ acceptable ways to fill in the rest of the octahedron given the $1$. There are $7!=5040$ ways to randomly fill in the rest of the octahedron. So the probability is $\frac {60}{5040} = \frac {1}{84}$. The answer is $\boxed{085}$.
Solution 2

Consider the cube formed from the face centers of the regular octahedron. Color the vertices in a checker board fashion. We seek the number of circuits traversing the cube entirely composed of diagonals. Notice for any vertex, it can be linked to at most one different-colored vertex, i.e. its opposite vertex. Thus, there are only two possible types of circuits ($B$ for black and $W$ for white).

Type I: $BB-WWWW-BB$. There are $4!$ ways to arrange the black vertices and consequently two of the white vertices and $2!$ ways to arrange the other two white vertices. Since the template has a period of $8$, there are $4!\cdot 2!\cdot 8 = 384$ circuits of type I.

Type II: $B-WW-BB-WW-B$. There are $4!$ ways to arrange the black vertices and consequently the white vertices. Since the template has a period of $4$, there are $4! \cdot 4 = 96$ circuits of type II.

Thus, there are $384+96=480$ circuits satisfying the given condition, out of the $8!$ possible circuits. Therefore, the desired probability is $\frac{480}{8!} = \frac{1}{84}$. The answer is $\boxed{085}$.
Solution 3

As in the previous solution, consider the cube formed by taking each face of the octahedron as a vertex. Let one fixed vertex be A. Then each configuration (letting each vertex have a number value from 1-8) of A and the three vertices adjacent to A uniquely determine a configuration that satisfies the conditions, i.e. no two vertices have consecutive numbers. Thus, the number of desired configurations is equivalent to the number of ways of choosing the values of A and its three adjacent vertices.

The value of A can be chosen in 8 ways, and the 3 vertices adjacent to A can be chosen in $5\cdot4\cdot3=60$ ways, since they aren't adjacent to each other, but they can't, after all, be consecutive values to A. For example, if A=1, then the next vertex can't be 1,2 or 8, so there are 5 choices. However, the next vertex also adjacent to A can be chosen in 4 ways; it can't be equal to 1,2,8, or the value of the previously chosen vertex. With the same reasoning, the last such vertex has 3 possible choices.

The total number of ways to choose the values of the vertices of the cube independently is 8!, so our probability is thus $\frac{8\cdot60}{8!}=\frac{8\cdot5\cdot4\cdot3}{8!}=\frac{1}{84}$, from which the answer is $\boxed{085}$.

, the average is one per choice of 3 to border the 1, ex 5,6,7 border 2 solutions, 3,5,7 border 0 solution
Solution 4

<div align=center><img src="http://latex.artofproblemsolving.com/2/8/3/283dd3e6b95db362aa989eb416df79012b0481ad.png" height="150px" /></div>

The probability is equivalent to counting the number of Hamiltonian cycles in this 3D graph over $7!.$ This is because each Hamiltonian cycle corresponds to eight unique ways to label the faces. Label the vertices $10,20,30,40,11,21,31,41,$ where vertices $ab$ and $cd$ are connected if $a=c$ or $b=d.$

Case 1: Four of the vertical edges are used. $6\cdot 2=12.$

Case 2: Two of the vertical edges are used. $4\cdot 3 \cdot 2\cdot 2=48.$

So, the probability is $\frac{60}{5040}=\frac{1}{84}.$ Therefore, our answer is $\boxed{85.}$

**2001 AIME I Answer Key**

1. 630
2. 651
3. 500
4. 291
5. 937
6. 079
7. 923
8. 315
9. 061
10. 200
11. 149
12. 005
13. 174
14. 351
15. 085

 