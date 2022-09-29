# 2005 AIME II

## 2005 AIME II Problem1

A game uses a deck of $n$ different cards, where $n$ is an integer and $n \geq 6.$ The number of possible sets of 6 cards that can be drawn from the deck is 6 times the number of possible sets of 3 cards that can be drawn. Find $n.$
Solution

The number of ways to draw six cards from $n$ is given by the binomial coefficient ${n \choose 6} = \frac{n\cdot(n-1)\cdot(n-2)\cdot(n-3)\cdot(n-4)\cdot(n-5)}{6\cdot5\cdot4\cdot3\cdot2\cdot1}$.

The number of ways to choose three cards from $n$ is ${n\choose 3} = \frac{n\cdot(n-1)\cdot(n-2)}{3\cdot2\cdot1}$.

We are given that ${n\choose 6} = 6 {n \choose 3}$, so $\frac{n\cdot(n-1)\cdot(n-2)\cdot(n-3)\cdot(n-4)\cdot(n-5)}{6\cdot5\cdot4\cdot3\cdot2\cdot1} = 6 \frac{n\cdot(n-1)\cdot(n-2)}{3\cdot2\cdot1}$.

Cancelling like terms, we get $(n - 3)(n - 4)(n - 5) = 720$.

We must find a factorization of the left-hand side of this equation into three consecutive integers. Since 720 is close to $9^3=729$, we try 8, 9, and 10, which works, so $n - 3 = 10$ and $n = \boxed{013}$.

## 2005 AIME II Problem2

A hotel packed breakfast for each of three guests. Each breakfast should have consisted of three types of rolls, one each of nut, cheese, and fruit rolls. The preparer wrapped each of the nine rolls and once wrapped, the rolls were indistinguishable from one another. She then randomly put three rolls in a bag for each of the guests. Given that the probability each guest got one roll of each type is $\frac mn,$ where $m$ and $n$ are relatively prime integers, find $m+n.$

Solution
Solution 1

Use casework. We need only calculate the probability the first and second person all get a roll of each type, since then the rolls for the third person are determined.

Person 1: $\frac{9 \cdot 6 \cdot 3}{9 \cdot 8 \cdot 7} = \frac{9}{28}$
Person 2: $\frac{6 \cdot 4 \cdot 2}{6 \cdot 5 \cdot 4} = \frac 25$
Person 3: One roll of each type is left, so the probability here is $1$. 

Our answer is thus $\frac{9}{28} \cdot \frac{2}{5} = \frac{9}{70}$, and $m + n = 79$.
Solution 2

Call the three different type of rolls as A, B, and C. We need to arrange 3As, 3Bs, and 3Cs in a string such that A, B, and C appear in the first three, second three, etc. This can occur in $\left(\frac{3!}{1!1!1!}\right)^3 = 6^3 = 216$ different manners. The total number of possible strings is $\frac{9!}{3!3!3!} = 1680$. The solution is therefore $\frac{216}{1680} = \frac{9}{70}$, and $m + n = 79$.

## 2005 AIME II Problem3

An infinite geometric series has sum 2005. A new series, obtained by squaring each term of the original series, has 10 times the sum of the original series. The common ratio of the original series is $\frac mn$ where $m$ and $n$ are relatively prime integers. Find $m+n.$
Solution

Let's call the first term of the original geometric series $a$ and the common ratio $r$, so $2005 = a + ar + ar^2 + \ldots$. Using the sum formula for infinite geometric series, we have $(*)\;\;\frac a{1 -r} = 2005$. Then we form a new series, $a^2 + a^2 r^2 + a^2 r^4 + \ldots$. We know this series has sum $20050 = \frac{a^2}{1 - r^2}$. Dividing this equation by $(*)$, we get $10 = \frac a{1 + r}$. Then $a = 2005 - 2005r$ and $a = 10 + 10r$ so $2005 - 2005r = 10 + 10r$, $1995 = 2015r$ and finally $r = \frac{1995}{2015} = \frac{399}{403}$, so the answer is $399 + 403 = \boxed{802}$.

(We know this last fraction is fully reduced by the Euclidean algorithm -- because $4 = 403 - 399$, $\gcd(403, 399) | 4$. But 403 is odd, so $\gcd(403, 399) = 1$.)

## 2005 AIME II Problem4

Find the number of positive integers that are divisors of at least one of $10^{10},15^7,18^{11}.$
Solution

$10^{10} = 2^{10}\cdot 5^{10}$ so $10^{10}$ has $11\cdot11 = 121$ divisors.

$15^7 = 3^7\cdot5^7$ so $15^7$ has $8\cdot8 = 64$ divisors.

$18^{11} = 2^{11}\cdot3^{22}$ so $18^{11}$ has $12\cdot23 = 276$ divisors.

Now, we use the Principle of Inclusion-Exclusion. We have $121 + 64 + 276$ total potential divisors so far, but we've overcounted those factors which divide two or more of our three numbers. Thus, we must subtract off the divisors of their pair-wise greatest common divisors.

$\gcd(10^{10},15^7) = 5^7$ which has 8 divisors.

$\gcd(15^7, 18^{11}) = 3^7$ which has 8 divisors.

$\gcd(18^{11}, 10^{10}) = 2^{10}$ which has 11 divisors.

So now we have $121 + 64 + 276 - 8 -8 -11$ potential divisors. However, we've now undercounted those factors which divide all three of our numbers. Luckily, we see that the only such factor is 1, so we must add 1 to our previous sum to get an answer of $121 + 64 + 276 - 8 - 8 - 11 + 1 = \boxed{435}$.

## 2005 AIME II Problem5


Determine the number of ordered pairs $(a,b)$ of integers such that $\log_a b + 6\log_b a=5, 2 \leq a \leq 2005,$ and $2 \leq b \leq 2005.$
Solution I

The equation can be rewritten as $\frac{\log b}{\log a} + 6 \frac{\log a}{\log b} = \frac{(\log b)^2+6(\log a)^2}{\log a \log b}=5$ Multiplying through by $\log a \log b$ and factoring yields $(\log b - 3\log a)(\log b - 2\log a)=0$. Therefore, $\log b=3\log a$ or $\log b=2\log a$, so either $b=a^3$ or $b=a^2$.

For the case $b=a^2$, note that $44^2=1936$ and $45^2=2025$. Thus, all values of $a$ from $2$ to $44$ will work.
For the case $b=a^3$, note that $12^3=1728$ while $13^3=2197$. Therefore, for this case, all values of $a$ from $2$ to $12$ work. 

There are $44-2+1=43$ possibilities for the square case and $12-2+1=11$ possibilities for the cube case. Thus, the answer is $43+11= \boxed{054}$.

Note that Inclusion-Exclusion does not need to be used, as the problem is asking for ordered pairs $(a,b)$, and not for the number of possible values of $b$. Were the problem to ask for the number of possible values of $b$, the values of $b^6$ under $2005$ would have to be subtracted, which would just be $2$ values: $2^6$ and $3^6$.
Solution II

Let $k=\log_a b$. Then our equation becomes $k+\frac{6}{k}=5$. Multiplying through by $k$ and solving the quadratic gives us $k=2$ or $k=3$. Hence $a^2=b$ or $a^3=b$.

For the first case $a^2=b$, $a$ can range from 2 to 44, a total of 43 values. For the second case $a^3=b$, $a$ can range from 2 to 12, a total of 11 values.

Thus the total number of possible values is $43+11=\boxed{54}$.

## 2005 AIME II Problem6

The cards in a stack of $2n$ cards are numbered consecutively from 1 through $2n$ from top to bottom. The top $n$ cards are removed, kept in order, and form pile $A.$ The remaining cards form pile $B.$ The cards are then restacked by taking cards alternately from the tops of pile $B$ and $A,$ respectively. In this process, card number $(n+1)$ becomes the bottom card of the new stack, card number 1 is on top of this card, and so on, until piles $A$ and $B$ are exhausted. If, after the restacking process, at least one card from each pile occupies the same position that it occupied in the original stack, the stack is named magical. Find the number of cards in the magical stack in which card number 131 retains its original position.
Solution

Since a card from B is placed on the bottom of the new stack, notice that cards from pile B will be marked as an even number in the new pile, while cards from pile A will be marked as odd in the new pile. Since 131 is odd and retains its original position in the stack, it must be in pile A. Also to retain its original position, exactly $131 - 1 = 130$ numbers must be in front of it. There are $\frac{130}{2} = 65$ cards from each of piles A, B in front of card 131. This suggests that $n = 131 + 65 = 196$; the total number of cards is $196 \cdot 2 = \boxed{392}$.

## 2005 AIME II Problem7

Let $x=\frac{4}{(\sqrt{5}+1)(\sqrt[4]{5}+1)(\sqrt[8]{5}+1)(\sqrt[16]{5}+1)}.$ Find $(x+1)^{48}$.
Solution

We note that in general,

${} (\sqrt[2^n]{5} + 1)(\sqrt[2^n]{5} - 1) = (\sqrt[2^n]{5})^2 - 1^2 = \sqrt[2^{n-1}]{5} - 1$.

It now becomes apparent that if we multiply the numerator and denominator of $\frac{4}{ (\sqrt{5}+1) (\sqrt[4]{5}+1) (\sqrt[8]{5}+1) (\sqrt[16]{5}+1) }$ by $(\sqrt[16]{5} - 1)$, the denominator will telescope to $\sqrt[1]{5} - 1 = 4$, so

$x = \frac{4(\sqrt[16]{5} - 1)}{4} = \sqrt[16]{5} - 1$.

It follows that $(x + 1)^{48} = (\sqrt[16]5)^{48} = 5^3 = 125$.

## 2005 AIME II Problem8


Circles $C_1$ and $C_2$ are externally tangent, and they are both internally tangent to circle $C_3.$ The radii of $C_1$ and $C_2$ are 4 and 10, respectively, and the centers of the three circles are all collinear. A chord of $C_3$ is also a common external tangent of $C_1$ and $C_2.$ Given that the length of the chord is $\frac{m\sqrt{n}}p$ where $m,n,$ and $p$ are positive integers, $m$ and $p$ are relatively prime, and $n$ is not divisible by the square of any prime, find $m+n+p.$
Solution

<div align=center><img src="http://latex.artofproblemsolving.com/5/0/5/505c60ef19e1317234ada04bf987e05e5689cd50.png" height="150px" /></div>

Let $O_1, O_2, O_3$ be the centers and $r_1 = 4, r_2 = 10,r_3 = 14$ the radii of the circles $C_1, C_2, C_3$. Let $T_1, T_2$ be the points of tangency from the common external tangent of $C_1, C_2$, respectively, and let the extension of $\overline{T_1T_2}$ intersect the extension of $\overline{O_1O_2}$ at a point $H$. Let the endpoints of the chord/tangent be $A,B$, and the foot of the perpendicular from $O_3$ to $\overline{AB}$ be $T$. From the similar right triangles $\triangle HO_1T_1 \sim \triangle HO_2T_2 \sim \triangle HO_3T$,

$\frac{HO_1}{4} = \frac{HO_1+14}{10} = \frac{HO_1+10}{O_3T}.$

It follows that $HO_1 = \frac{28}{3}$, and that $O_3T = \frac{58}{7}$. By the Pythagorean Theorem on $\triangle ATO_3$, we find that

$AB = 2AT = 2\left(\sqrt{r_3^2 - O_3T^2}\right) = 2\sqrt{14^2 - \frac{58^2}{7^2}} = \frac{8\sqrt{390}}{7}$

and the answer is $m+n+p=\boxed{405}$.
Solution 2

Call our desired length $x$. Note for any $X$ on $\overline{AB}$ and $Y$ on $\overline{O_1O_2}$ such that $\overline{XY}\perp\overline{AB}$ that the function $f$ such that $f(\overline{O_1Y})=\overline{XY}$ is linear. Since $(0,4)$ and $(14,10)$, we can quickly interpolate that $f(10)=\overline{O_3T}=\frac{58}{7}$. Then, extend $\overline{O_3T}$ until it reaches the circle on both sides; call them $P,Q$. By Power of a Point, $\overline{PT}\cdot\overline{TQ}=\overline{AT}\cdot\overline{TB}$. Since $\overline{AT}=\overline{TB}=\frac{1}{2}x$, $(\overline{PO_3}-\overline{O_3T})(\overline{QO_3}+\overline{O_3T})=\frac{1}{4}x^2$ $\left(14+\frac{58}{7}\right)\left(14-\frac{58}{7}\right)=\frac{1}{4}x^2$ After solving for $x$, we get $x=\frac{8\sqrt{390}}{7}$, so our answer is $8+390+7=\boxed{405}$

## 2005 AIME II Problem9

Solutions

<div align=center><img src="http://latex.artofproblemsolving.com/8/5/f/85f92c3d00cd316c8e4b3b59aec17c487caebc0d.png" height="150px" /></div>

Solution 1

Let the side of the octahedron be of length $s$. Let the vertices of the octahedron be $A, B, C, D, E, F$ so that $A$ and $F$ are opposite each other and $AF = s\sqrt2$. The height of the square pyramid $ABCDE$ is $\frac{AF}2 = \frac s{\sqrt2}$ and so it has volume $\frac 13 s^2 \cdot \frac s{\sqrt2} = \frac {s^3}{3\sqrt2}$ and the whole octahedron has volume $\frac {s^3\sqrt2}3$.

Let $M$ be the midpoint of $BC$, $N$ be the midpoint of $DE$, $G$ be the centroid of $\triangle ABC$ and $H$ be the centroid of $\triangle ADE$. Then $\triangle AMN \sim \triangle AGH$ and the symmetry ratio is $\frac 23$ (because the medians of a triangle are trisected by the centroid), so $GH = \frac{2}{3}MN = \frac{2s}3$. $GH$ is also a diagonal of the cube, so the cube has side-length $\frac{s\sqrt2}3$ and volume $\frac{2s^3\sqrt2}{27}$. The ratio of the volumes is then $\left(\frac{2s^3\sqrt2}{27}\right)\big/\left(\frac{s^3\sqrt2}{3}\right) = \frac29$ and so the answer is $\boxed{011}$.

edit: could someone put a,b,c,d,e,f by the respective vertices on the octohedron? thanks.
Solution 2

Let the octahedron have vertices $(\pm 3, 0, 0), (0, \pm 3, 0), (0, 0, \pm 3)$. Then the vertices of the cube lie at the centroids of the faces, which have coordinates $(\pm 1, \pm 1, \pm 1)$. The cube has volume 8. The region of the octahedron lying in each octant is a tetrahedron with three edges mutually perpendicular and of length 3. Thus the octahedron has volume $8 \cdot \left(\frac 16 \cdot3^3\right) = 36$, so the ratio is $\frac 8{36} = \frac 29$ and so the answer is $\boxed{011}$.

## 2005 AIME II Problem11

Let $m$ be a positive integer, and let $a_0, a_1,\ldots,a_m$ be a sequence of integers such that $a_0 = 37, a_1 = 72, a_m = 0,$ and $a_{k+1} = a_{k-1} - \frac 3{a_k}$ for $k = 1,2,\ldots, m-1.$ Find $m.$

Note: Clearly, the stipulation that the sequence is composed of integers is a minor oversight, as the term $a_2$, for example, is obviously not integral.
Solution

For $0 < k < m$, we have

$a_{k}a_{k+1} = a_{k-1}a_{k} - 3$.

Thus the product $a_{k}a_{k+1}$ is a monovariant: it decreases by 3 each time $k$ increases by 1. For $k = 0$ we have $a_{k}a_{k+1} = 37\cdot 72$, so when $k = \frac{37 \cdot 72}{3} = 888$, $a_{k}a_{k+1}$ will be zero for the first time, which implies that $m = \boxed{889}$, our answer.

## 2005 AIME II Problem12

Square $ABCD$ has center $O,\ AB=900,\ E$ and $F$ are on $AB$ with $AE<BF$ and $E$ between $A$ and $F, m\angle EOF =45^\circ,$ and $EF=400.$ Given that $BF=p+q\sqrt{r},$ where $p,q,$ and $r$ are positive integers and $r$ is not divisible by the square of any prime, find $p+q+r.$

Solutions
Solution 1 (trigonometry)

<div align=center><img src="http://latex.artofproblemsolving.com/8/0/8/808a781ca9b8e518e9c3eb70c404e134125a1765.png" height="200px" /></div>

Let $G$ be the foot of the perpendicular from $O$ to $AB$. Denote $x = EG$ and $y = FG$, and $x > y$ (since $AE < BF$ and $AG = BG$). Then $\tan \angle EOG = \frac{x}{450}$, and $\tan \angle FOG = \frac{y}{450}$.

By the tangent addition rule $\left( \tan (a + b) = \frac{\tan a + \tan b}{1 - \tan a \tan b} \right)$, we see that $\tan 45 = \tan (EOG + FOG) = \frac{\frac{x}{450} + \frac{y}{450}}{1 - \frac{x}{450} \cdot \frac{y}{450}}.$ Since $\tan 45 = 1$, this simplifies to $1 - \frac{xy}{450^2} = \frac{x + y}{450}$. We know that $x + y = 400$, so we can substitute this to find that $1 - \frac{xy}{450^2} = \frac 89 \Longrightarrow xy = 150^2$.

Substituting $x = 400 - y$ again, we know have $xy = (400 - y)y = 150^2$. This is a quadratic with roots $200 \pm 50\sqrt{7}$. Since $y < x$, use the smaller root, $200 - 50\sqrt{7}$.

Now, $BF = BG - FG = 450 - (200 - 50\sqrt{7}) = 250 + 50\sqrt{7}$. The answer is $250 + 50 + 7 = \boxed{307}$.
Solution 2 (synthetic)

<div align=center><img src="http://latex.artofproblemsolving.com/7/6/4/7643375bc11ea98eeb7c78a01a433681f95b800e.png" height="200px" /></div>

Label $BF=x$, so $EA =$ $500 - x$. Rotate $\triangle{OEF}$ about $O$ until $EF$ lies on $BC$. Now we know that $\angle{EOF}=45^\circ$ therefore $\angle BOF+\angle AOE=45^\circ$ also since $O$ is the center of the square. Label the new triangle that we created $\triangle OGJ$. Now we know that rotation preserves angles and side lengths, so $BG=500-x$ and $JC=x$. Draw $GF$ and $OB$. Notice that $\angle BOG =\angle OAE$ since rotations preserve the same angles so $\angle{FOG}=45^\circ$ too. By SAS we know that $\triangle FOE\cong \triangle FOG,$ so $FG=400$. Now we have a right $\triangle BFG$ with legs $x$ and $500-x$ and hypotenuse $400$. By the Pythagorean Theorem,

$\begin{align*} (500-x)^2+x^2&=400^2 \\ 250000-1000x+2x^2&=16000 \\ 90000-1000x+2x^2&=0 \end{align*}$

and applying the quadratic formula we get that $x=250\pm 50\sqrt{7}$. Since $BF > AE,$ we take the positive root, and our answer is $p+q+r = 250 + 50 + 7 = 307$.
Solution 3

<div align=center><img src="http://latex.artofproblemsolving.com/e/9/0/e90325ee0c2e95055ec77c65b8e027a653b4e525.png" height="200px" /></div>

Let the midpoint of $\overline{AB}$ be $M$ and let $FB = x$, so then $MF = 450 - x$ and $AF = 900 - x$. Drawing $\overline{AO}$, we have $\triangle OEF\sim\triangle AOF$, so $\frac{OF}{EF} = \frac{AF}{OF}\Rightarrow (OF)^2 = 400(900 - x).$ By the Pythagorean Theorem on $\triangle OMF$, $(OF)^2 = 450^2 + (450 - x)^2.$ Setting these two expressions for $(OF)^2$ equal and solving for $x$ (it is helpful to scale the problem down by a factor of 50 first), we get $x = 250\pm 50\sqrt{7}$. Since $BF > AE$, we want the value $x = 250 + 50\sqrt{7}$, and the answer is $250 + 50 + 7 = \boxed{307}$.

## 2005 AIME II Problem13

Let $P(x)$ be a polynomial with integer coefficients that satisfies $P(17)=10$ and $P(24)=17.$ Given that $P(n)=n+3$ has two distinct integer solutions $n_1$ and $n_2,$ find the product $n_1\cdot n_2.$
Solution

We define $Q(x)=P(x)-x+7$, noting that it has roots at $17$ and $24$. Hence $P(x)-x+7=A(x-17)(x-24)$. In particular, this means that $P(x)-x-3=A(x-17)(x-24)-10$. Therefore, $x=n_1,n_2$ satisfy $A(x-17)(x-24)=10$, where $A$, $(x-17)$, and $(x-24)$ are integers. This cannot occur if $x\le 17$ or $x\ge 24$ because the product $(x-17)(x-24)$ will either be too large or not be a divisor of $10$. We find that $x=19$ and $x=22$ are the only values that allow $(x-17)(x-24)$ to be a factor of $10$. Hence the answer is $19\cdot 22=\boxed{418}$.

## 2005 AIME II Problem14


In triangle $ABC, AB=13, BC=15,$ and $CA = 14.$ Point $D$ is on $\overline{BC}$ with $CD=6.$ Point $E$ is on $\overline{BC}$ such that $\angle BAE\cong \angle CAD.$ Given that $BE=\frac pq$ where $p$ and $q$ are relatively prime positive integers, find $q.$
Solution 1

<div align=center><img src="http://latex.artofproblemsolving.com/f/5/3/f53f3016596f4d0c3c6dc23b6e0b5b41fabe85f2.png" height="150px" /></div>

By the Law of Sines and since $\angle BAE = \angle CAD, \angle BAD = \angle CAE$, we have

$\begin{align*} \frac{CD \cdot CE}{AC^2} &= \frac{\sin CAD}{\sin ADC} \cdot \frac{\sin CAE}{\sin AEC} \\ &= \frac{\sin BAE \sin BAD}{\sin ADB \sin AEB} \\ &= \frac{\sin BAE}{\sin AEB} \cdot \frac{\sin BAD}{\sin ADB}\\ &= \frac{BE \cdot BD}{AB^2} \end{align*}$

Substituting our knowns, we have $\frac{CE}{BE} = \frac{3 \cdot 14^2}{2 \cdot 13^2} = \frac{BC - BE}{BE} = \frac{15}{BE} - 1 \Longrightarrow BE = \frac{13^2 \cdot 15}{463}$. The answer is $q = \boxed{463}$.
Solution 2 (Similar Triangles)

Drop the altitude from A and call the base of the altitude Q. Also, drop the altitudes from E and D to AB and AC respectively. Call the feet of the altitudes R and S respectively.

From here, we can use Heron's Formula to find the altitude. The area of the triangle is $\sqrt{21*6*7*8}$ = 84. We can then use similar triangles with triangle AQC and triangle DSC to find DS=$\frac{24}{5}$. Consequently, from Pythagorean theorem, SC = $\frac{18}{5}$ and AS = 14-SC = $\frac{52}{5}$. We can also use pythagorean triangle on triangle AQB yo determine that BQ = $\frac{33}{5}$.

Label AR as y and RE as x. RB then equals 13-y. Then, we have two similar triangles.

Firstly: $\triangle ARE \sim \triangle ASD$. From there, we have $\frac{x}{y} = \frac{\frac{24}{5}}{\frac{53}{5}}$.

Next: $\triangle BRE \sim \triangle BQA$. From there, we have $\frac{x}{13-y} = \frac{\frac{56}{5}}{\frac{33}{5}}$.

Solve the system to get $x = \frac{2184}{463}$ and $y = \frac{4732}{463}$. Notice that 463 is prime, so even though we use pythagorean theorem on x and 13-y, the denominator won't change. The answer we desire is $\boxed{463}$.

## 2005 AIME II Problem15


Let $w_1$ and $w_2$ denote the circles $x^2+y^2+10x-24y-87=0$ and $x^2 +y^2-10x-24y+153=0,$ respectively. Let $m$ be the smallest positive value of $a$ for which the line $y=ax$ contains the center of a circle that is externally tangent to $w_2$ and internally tangent to $w_1.$ Given that $m^2=\frac pq,$ where $p$ and $q$ are relatively prime integers, find $p+q.$
Solution 1

Rewrite the given equations as $(x+5)^2 + (y-12)^2 = 256$ and $(x-5)^2 + (y-12)^2 = 16$.

Let $w_3$ have center $(x,y)$ and radius $r$. Now, if two circles with radii $r_1$ and $r_2$ are externally tangent, then the distance between their centers is $r_1 + r_2$, and if they are internally tangent, it is $|r_1 - r_2|$. So we have

$\begin{align*} r + 4 &= \sqrt{(x-5)^2 + (y-12)^2} \\ 16 - r &= \sqrt{(x+5)^2 + (y-12)^2} \end{align*}$

Solving for $r$ in both equations and setting them equal, then simplifying, yields

$\begin{align*} 20 - \sqrt{(x+5)^2 + (y-12)^2} &= \sqrt{(x-5)^2 + (y-12)^2} \\ 20+x &= 2\sqrt{(x+5)^2 + (y-12)^2} \end{align*}$

Squaring again and canceling yields $1 = \frac{x^2}{100} + \frac{(y-12)^2}{75}.$

So the locus of points that can be the center of the circle with the desired properties is an ellipse.

<div align=center><img src="http://latex.artofproblemsolving.com/3/9/5/3952f7611dcec95c9d68289eb69eb74de86b62bc.png" height="200px" /></div>

Since the center lies on the line $y = ax$, we substitute for $y$ and expand: $1 = \frac{x^2}{100} + \frac{(ax-12)^2}{75} \Longrightarrow (3+4a^2)x^2 - 96ax + 276 = 0.$

We want the value of $a$ that makes the line $y=ax$ tangent to the ellipse, which will mean that for that choice of $a$ there is only one solution to the most recent equation. But a quadratic has one solution iff its discriminant is $0$, so $(-96a)^2 - 4(3+4a^2)(276) = 0$.

Solving yields $a^2 = \frac{69}{100}$, so the answer is $\boxed{169}$.
Solution 2

As above, we rewrite the equations as $(x+5)^2 + (y-12)^2 = 256$ and $(x-5)^2 + (y-12)^2 = 16$. Let $F_1=(-5,12)$ and $F_2=(5,12)$. If a circle with center $C=(a,b)$ and radius $r$ is externally tangent to $w_2$ and internally tangent to $w_1$, then $CF_1=16-r$ and $CF_2=4+r$. Therefore, $CF_1+CF_2=20$. In particular, the locus of points $C$ that can be centers of circles must be an ellipse with foci $F_1$ and $F_2$ and major axis $20$.

Clearly, the minimum value of the slope $a$ will occur when the line $y=ax$ is tangent to this ellipse. Suppose that this point of tangency is denoted by $T$, and the line $y=ax$ is denoted by $\ell$. Then we reflect the ellipse over $\ell$ to a new ellipse with foci $F_1'$ and $F_2'$ as shown below.

<div align=center><img src="http://latex.artofproblemsolving.com/3/9/f/39f7436c9b561798a9afaf9bddc9c97fd6de020d.png" height="200px" /></div>

By the reflection property of ellipses (i.e., the angle of incidence to a tangent line is equal to the angle of reflection for any path that travels between the foci), we know that $F_1$, $T$, and $F_2'$ are collinear, and similarly, $F_2$, $T$ and $F_1'$ are collinear. Therefore, $OF_1F_2F_2'F_1'$ is a pentagon with $OF_1=OF_2=OF_1'=OF_2'=13$, $F_1F_2=F_1'F_2'=10$, and $F_1F_2'=F_1'F_2=20$. Note that $\ell$ bisects $\angle F_1'OF_1$. We can bisect this angle by bisecting $\angle F_1'OF_2$ and $F_2OF_1$ separately.

We proceed using complex numbers. Triangle $F_2OF_1'$ is isosceles with side lengths $13,13,20$. The height of this from the base of $20$ is $\sqrt{69}$. Therefore, the complex number $\sqrt{69}+10i$ represents the bisection of $\angle F_1'OF_2$.

Similarly, using the 5-12-13 triangles, we easily see that $12+5i$ represents the bisection of the angle $F_2OF_1$. Therefore, we can add these two angles together by multiplying the complex numbers, finding $\text{arg}\left((\sqrt{69}+10i)(12+5i)\right)=\frac{1}{2}\angle F_1'OF_1.$ Now the point $F_1$ is given by the complex number $-5+12i$. Therefore, to find a point on line $\ell$, we simply subtract $\frac{1}{2}\angle F_1'OF_1$, which is the same as multiplying $-5+12i$ by the conjugate of $(\sqrt{69}+10i)(12+5i)$. We find $(-5+12i)(\sqrt{69}-10i)(12-5i)=169(10+i\sqrt{69}).$ In particular, note that the tangent of the argument of this complex number is $\sqrt{69}/10$, which must be the slope of the tangent line. Hence $a^2=69/100$, and the answer is $\boxed{169}$.
Solution 3

We use the same reflection as in Solution 2. As $OF_1'=OF_2=13$, we know that $\triangle OF_1'F_2$ is isosceles. Hence $\angle F_2F_1'O=\angle F_1'F_2O$. But by symmetry, we also know that $\angle OF_1T=\angle F_2F_1'O$. Hence $\angle OF_1T=\angle F_1'F_2O$. In particular, as $\angle OF_1T=\angle OF_2T$, this implies that $O, F_1, F_2$, and $T$ are concyclic.

Let $X$ be the intersection of $F_2F_1'$ with the $x$-axis. As $F_1F_2$ is parallel to the $x$-axis, we know that $\angle TXO=180-\angle F_1F_2T.\tag{1}$ But $180-\angle F_1F_2T=\angle F_2F_1T+\angle F_1TF_2.\tag{2}$ By the fact that $OF_1F_2T$ is cyclic, $\angle F_2F_1T=\angle F_2OT\qquad\text{and}\qquad \angle F_1TF_2=\angle F_1OF_2.\tag{3}$ Therefore, combining (1), (2), and (3), we find that $\angle TXO=\angle F_2OT+\angle F_1OF_2=\angle F_1OT.\tag{4}$

By symmetry, we also know that $\angle F_1TO=\angle OTF_1'.\tag{5}$ Therefore, (4) and (5) show by AA similarity that $\triangle F_1OT\sim \triangle OXT$. Therefore, $\angle XOT=\angle OF_1T$.

Now as $OF_1=OF_2'=13$, we know that $\triangle OF_1F_2'$ is isosceles, and as $F_1F_2'=20$, we can drop an altitude to $F_1F_2'$ to easily find that $\tan \angle OF_1T=\sqrt{69}/10$. Therefore, $\tan\angle XOT$, which is the desired slope, must also be $\sqrt{69}/10$. As before, we conclude that the answer is $\boxed{169}$.



2005 AIME II Answer Key
1. 013
2. 079
3. 802
4. 435
5. 054
6. 392
7. 125
8. 405
9. 250
10. 011
11. 889
12. 307
13. 418
14. 463
15. 169
