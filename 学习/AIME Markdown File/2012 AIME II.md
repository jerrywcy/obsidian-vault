# 2012 AIME II

2012 AIME II Problem 1
Problem 1

Find the number of ordered pairs of positive integer solutions $(m, n)$ to the equation $20m + 12n = 2012$.
Solution

Solving for $m$ gives us $m = \frac{503-3n}{5},$ so in order for $m$ to be an integer, we must have $3n \equiv 503 \mod 5 \longrightarrow n \equiv 1 \mod 5.$ The smallest possible value of $n$ is obviously $1,$ and the greatest is $\frac{503 - 5}{3} = 166,$ so the total number of solutions is $\frac{166-1}{5}+1 = \boxed{034}$ 


2012 AIME II Problem 2
Problem 2

Two geometric sequences $a_1, a_2, a_3, \ldots$ and $b_1, b_2, b_3, \ldots$ have the same common ratio, with $a_1 = 27$, $b_1=99$, and $a_{15}=b_{11}$. Find $a_9$.
Solution

Call the common $r.$ Now since the $n$th term of a geometric sequence with first term $x$ and common ratio $y$ is $xy^{n-1},$ we see that $a_1 \cdot r^{14} = b_1 \cdot r^{10} \longrightarrow r^4 = \frac{99}{27} = \frac{11}{3}.$ But $a_9$ equals $a_1 \cdot r^8 = a_1 \cdot (r^4)^2,$ so $a_9 = 27 \cdot \left(\frac{11}{3}\right)^2 = \boxed{363.}$



2012 AIME II Problem 3
Problem 3

At a certain university, the division of mathematical sciences consists of the departments of mathematics, statistics, and computer science. There are two male and two female professors in each department. A committee of six professors is to contain three men and three women and must also contain two professors from each of the three departments. Find the number of possible committees that can be formed subject to these requirements.
Solution

There are two cases:

Case 1: One man and one woman is chosen from each department.

Case 2: Two men are chosen from one department, two women are chosen from another department, and one man and one woman are chosen from the third department.

For the first case, in each department there are ${{2}\choose{1}} \times {{2}\choose{1}} = 4$ ways to choose one man and one woman. Thus there are $4^3 = 64$ total possibilities conforming to case 1.

For the second case, there is only ${{2}\choose{2}} = 1$ way to choose two professors of the same gender from a department, and again there are $4$ ways to choose one man and one woman. Thus there are $1 \cdot 1 \cdot 4 = 4$ ways to choose two men from one department, two women from another department, and one man and one woman from the third department. However, there are $3! = 6$ different department orders, so the total number of possibilities conforming to case 2 is $4 \cdot 6 = 24$.

Summing these two values yields the final answer: $64 + 24 = \boxed{088}$.



2012 AIME II Problem 4

Problem 4

Ana, Bob, and Cao bike at constant rates of $8.6$ meters per second, $6.2$ meters per second, and $5$ meters per second, respectively. They all begin biking at the same time from the northeast corner of a rectangular field whose longer side runs due west. Ana starts biking along the edge of the field, initially heading west, Bob starts biking along the edge of the field, initially heading south, and Cao bikes in a straight line across the field to a point $D$ on the south edge of the field. Cao arrives at point $D$ at the same time that Ana and Bob arrive at $D$ for the first time. The ratio of the field's length to the field's width to the distance from point $D$ to the southeast corner of the field can be represented as $p : q : r$, where $p$, $q$, and $r$ are positive integers with $p$ and $q$ relatively prime. Find $p+q+r$.


Solution 1 (bash)

<div align="center"><img src="http://latex.artofproblemsolving.com/e/e/1/ee15991e4f0bea66c4a78ba779cc5d53348236f7.png" height="50px" /></div>

Let $a,b,c$ be the labeled lengths as shown in the diagram. Also, assume WLOG the time taken is $1$ second.

Observe that $\frac{2a+b+c}{8.6}=1$ or $2a+b+c=8.6$, and $\frac{b+c}{6.2}=1$ or $b+c=6.2$. Subtracting the second equation from the first gives $2a=2.4$, or $a=1.2$.

Now, let us solve $b$ and $c$. Note that $\frac{\sqrt{b^2+c^2}}{5}=1$, or $b^2+c^2=25$. We also have $b+c=6.2$.

We have a system of equations: $\left\{$$\begin{array}{l}b+c=6.2\\ b^2+c^2=25\end{array}$$\right.$

Squaring the first equation gives $b^2+2bc+c^2=38.44$, and subtracting the second from this gives $2bc=13.44$. Now subtracting this from $b^2+c^2=25$ gives $b^2-2bc+c^2=(b-c)^2=11.56$, or $b-c=3.4$. Now we have the following two equations:

$\begin{array}{l}b+c=6.2\\ b-c=3.4\end{array}$

Adding the equations and dividing by two gives $b=4.8$, and it follows that $c=1.4$.

The ratios we desire are therefore $1.4:6:4.8=7:30:24$, and our answer is $7+30+24=\boxed{061}$.

Note that in our diagram, we labeled the part of the bottom $b$ and the side $c$. However, these labels are interchangeable. We can cancel out the case where the side is $4.8$ and the part of the bottom is $1.4$ by noting a restriction of the problem: "...a rectangular field whose longer side runs due west." If we had the side be $4.8$, then the entire bottom would be $1.2+1.4=2.6$, clearly less than $4.8$ and therefore violating our restriction.
Solution 2 (uglier bash)

Let P, Q, and R be the east-west distance of the field, the north-south distance, and the distance from the southeast corner to point D, respectively.

Ana's distance to point D = $P + Q + (P - R) = 2P + Q - R$

Bob's distance to point D = $Q + R$

Cao's distance to point D = $\sqrt{Q^2 + R^2}$

Since they arrive at the same time, their distance/speed ratios are equal, so:

$\frac{2P + Q - R}{8.6} = \frac{Q + R}{6.2} = \frac{\sqrt{Q^2 + R^2}}{5}$

$\frac{2P + Q - R}{43} = \frac{Q + R}{31} = \frac{\sqrt{Q^2 + R^2}}{25}$

Looking at the last two parts of the equation:

$\frac{Q + R}{31} = \frac{\sqrt{Q^2 + R^2}}{25}$

$25 (Q + R) = 31 \sqrt{Q^2 + R^2}$

$625 Q^2 + 1250 QR + 625 R^2 = 961 Q^2 + 961 R^2$

$336 Q^2 - 1250 QR + 336 R^2 = 0$

$168 (\frac{Q}{R})^2 - 625 \frac{Q}{R}+ 168 = 0$

$\frac{Q}{R} = \frac{625 \pm \sqrt{625^2 - 4 \cdot 168^2}}{336}$

$\frac{Q}{R} = 24/7\;or\;7/24$

Looking at the first two parts of the equation above:

$\frac{2 P + Q - R}{43} = \frac{Q + R}{31}$

$62 P + 31 Q - 31 R = 43 Q + 43 R$

$P = \frac{6}{31}Q + \frac{37}{31} R$

If $\frac{Q}{R} = \frac{24}{7}$:

$R = \frac{7}{24} Q$

$P = \frac{6}{31} Q + \frac{37}{31} \cdot \frac{7}{24} Q = \frac{13}{24} Q$

However, this makes P < Q, but we are given that P > Q. Therefore, $\frac{Q}{R} = \frac{7}{24}$, and:

$R = \frac{24}{7} Q$

$P = \frac{6}{31} Q + \frac{37}{31} \cdot \frac{24}{7} Q = \frac{30}{7} Q$

$P : Q : R = 30 : 7 : 24$

The solution is $P + Q + R = \framebox{061}$.



2012 AIME II Problem 5
Problem 5

In the accompanying figure, the outer square $S$ has side length $40$. A second square $S'$ of side length $15$ is constructed inside $S$ with the same center as $S$ and with sides parallel to those of $S$. From each midpoint of a side of $S$, segments are drawn to the two closest vertices of $S'$. The result is a four-pointed starlike figure inscribed in $S$. The star figure is cut out and then folded to form a pyramid with base $S'$. Find the volume of this pyramid.

<div align="center"><img src="http://latex.artofproblemsolving.com/2/8/6/2862b9fac9f2c88c10b30e3908cf4ac1d5f62115.png" height="100px" /></div>

Solution

The volume of this pyramid can be found by the equation $V=\frac{1}{3}bh$, where $b$ is the base and $h$ is the height. The base is easy, since it is a square and has area $15^2=225$.


To find the height of the pyramid, the height of the four triangles is needed, which will be called $h^\prime$. By drawing a line through the middle of the larger square, we see that its length is equal to the length of the smaller rectangle and two of the triangle's heights. Then $40=2h^\prime +15$, which means that $h^\prime=12.5$.


When the pyramid is made, you see that the height is the one of the legs of a right triangle, with the hypotenuse equal to $h^\prime$ and the other leg having length equal to half of the side length of the smaller square, or $7.5$. So, the Pythagorean Theorem can be used to find the height.

$h=\sqrt{12.5^2-7.5^2}=\sqrt{100}=10$

Finally, $V=\frac{1}{3}bh=\frac{1}{3}(225)(10)=\boxed{750.}$



2012 AIME II Problem 6
Problem 6

Let $z=a+bi$ be the complex number with $\vert z \vert = 5$ and $b > 0$ such that the distance between $(1+2i)z^3$ and $z^5$ is maximized, and let $z^4 = c+di$. Find $c+d$.
Solution

Let's consider the maximization constraint first: we want to maximize the value of $|z^5 - (1+2i)z^3|$ Simplifying, we have

$|z^3| * |z^2 - (1+2i)|$

$=|z|^3 * |z^2 - (1+2i)|$

$=125|z^2 - (1+2i)|$

Thus we only need to maximize the value of $|z^2 - (1+2i)|$.

To maximize this value, we must have that $z^2$ is in the opposite direction of $1+2i$. The unit vector in the complex plane in the desired direction is $\frac{-1}{\sqrt{5}} + \frac{-2}{\sqrt{5}} i$. Furthermore, we know that the magnitude of $z^2$ is $25$, because the magnitude of $z$ is $5$. From this information, we can find that $z^2 = \sqrt{5} (-5 - 10i)$

Squaring, we get $z^4 = 5 (25 - 100 + 100i) = -375 + 500i$. Finally, $c+d = -375 + 500 = 125$



2012 AIME II Problem 7
Problem 7

Let $S$ be the increasing sequence of positive integers whose binary representation has exactly $8$ ones. Let $N$ be the 1000th number in $S$. Find the remainder when $N$ is divided by $1000$.


Solution

Okay, an exercise in counting (lots of binomials to calculate!). In base 2, the first number is $11111111$, which is the only way to choose 8 1's out of 8 spaces, or $\binom{8}{8}$. What about 9 spaces? Well, all told, there are $\binom{9}{8}=9$, which includes the first 1. Similarly, for 10 spaces, there are $\binom{10}{8}=45,$ which includes the first 9. For 11 spaces, there are $\binom{11}{8}=165$, which includes the first 45. You're getting the handle. For 12 spaces, there are $\binom{12}{8}=495$, which includes the first 165; for 13 spaces, there are $\binom{13}{8}=13 \cdot 99 > 1000$, so we now know that $N$ has exactly 13 spaces, so the $2^{12}$ digit is 1.

Now we just proceed with the other 12 spaces with 7 1's, and we're looking for the $1000-495=505th$ number. Well, $\binom{11}{7}=330$, so we know that the $2^{11}$ digit also is 1, and we're left with finding the $505-330=175th$ number with 11 spaces and 6 1's. Now $\binom{10}{6}=210,$ which is too big, but $\binom{9}{6}=84.$ Thus, the $2^9$ digit is 1, and we're now looking for the $175-84=91st$ number with 9 spaces and 5 1's. Continuing the same process, $\binom{8}{5}=56$, so the $2^8$ digit is 1, and we're left to look for the $91-56=35th$ number with 8 spaces and 4 1's. But here $\binom{7}{4}=35$, so N must be the last or largest 7-digit number with 4 1's. Thus the last 8 digits of $N$ must be $01111000$, and to summarize, $N=1101101111000$ in base $2$. Therefore, $N = 8+16+32+64+256+512+2048+4096 \equiv 32 \mod{1000}$, and the answer is $032$.



2012 AIME II Problem 8
Problem 8

The complex numbers $z$ and $w$ satisfy the system $z + \frac{20i}w = 5+i$ $w+\frac{12i}z = -4+10i$ Find the smallest possible value of $\vert zw\vert^2$.
Solution

Multiplying the two equations together gives us $zw + 32i - \frac{240}{zw} = -30 + 46i$ and multiplying by $zw$ then gives us a quadratic in $zw$: $(zw)^2 + (30-14i)zw - 240 =0.$ Using the quadratic formula, we find the two possible values of $zw$ to be $7i-15 \pm \sqrt{(15-7i)^2 + 240}$ = $6+2i,$ $12i - 36.$ The smallest possible value of $\vert zw\vert^2$ is then obviously $6^2 + 2^2 = \boxed{040.}$



2012 AIME II Problem 9

Problem 9

Let $x$ and $y$ be real numbers such that $\frac{\sin x}{\sin y} = 3$ and $\frac{\cos x}{\cos y} = \frac12$. The value of $\frac{\sin 2x}{\sin 2y} + \frac{\cos 2x}{\cos 2y}$ can be expressed in the form $\frac pq$, where $p$ and $q$ are relatively prime positive integers. Find $p+q$.


Solution

Examine the first term in the expression we want to evaluate, $\frac{\sin 2x}{\sin 2y}$, separately from the second term, $\frac{\cos 2x}{\cos 2y}$.
The First Term

Using the identity $\sin 2\theta = 2\sin\theta\cos\theta$, we have:

$\frac{2\sin x \cos x}{2\sin y \cos y} = \frac{\sin x \cos x}{\sin y \cos y} = \frac{\sin x}{\sin y}\cdot\frac{\cos x}{\cos y}=3\cdot\frac{1}{2} = \frac{3}{2}$
The Second Term

Let the equation $\frac{\sin x}{\sin y} = 3$ be equation 1, and let the equation $\frac{\cos x}{\cos y} = \frac12$ be equation 2. Hungry for the widely-used identity $\sin^2\theta + \cos^2\theta = 1$, we cross multiply equation 1 by $\sin y$ and multiply equation 2 by $\cos y$.

Equation 1 then becomes:

$\sin x = 3\sin y$.

Equation 2 then becomes:

$\cos x = \frac{1}{2} \cos y$

Aha! We can square both of the resulting equations and match up the resulting LHS with the resulting RHS:

$1 = 9\sin^2 y + \frac{1}{4} \cos^2 y$

Applying the identity $\cos^2 y = 1 - \sin^2 y$ (which is similar to $\sin^2\theta + \cos^2\theta = 1$ but a bit different), we can change $1 = 9\sin^2 y + \frac{1}{4} \cos^2 y$ into:

$1 = 9\sin^2 y + \frac{1}{4} - \frac{1}{4} \sin^2 y$

Rearranging, we get $\frac{3}{4} = \frac{35}{4} \sin^2 y$.

So, $\sin^2 y = \frac{3}{35}$.

Squaring Equation 1 (leading to $\sin^2 x = 9\sin^2 y$), we can solve for $\sin^2 x$:

$\sin^2 x = 9\left(\frac{3}{35}\right) = \frac{27}{35}$

Using the identity $\cos 2\theta = 1 - 2\sin^2\theta$, we can solve for $\frac{\cos 2x}{\cos 2y}$.

$\cos 2x = 1 - 2\sin^2 x = 1 - 2\cdot\frac{27}{35} = 1 - \frac{54}{35} = -\frac{19}{35}$

$\cos 2y = 1 - 2\sin^2 y = 1 - 2\cdot\frac{3}{35} = 1 - \frac{6}{35} = \frac{29}{35}$

Thus, $\frac{\cos 2x}{\cos 2y} = \frac{-19/35}{29/35} = -\frac{19}{29}$.
Now Back to the Solution!

Finally, $\frac{\sin 2x}{\sin 2y} + \frac{\cos 2x}{\cos 2y} = \frac32 + \left(-\frac{19}{29} \right) = \frac{49}{58}$.

So, the answer is $49+58=\boxed{107}$.



2012 AIME II Problem 10

Problem 10

Find the number of positive integers $n$ less than $1000$ for which there exists a positive real number $x$ such that $n=x\lfloor x \rfloor$.

Note: $\lfloor x \rfloor$ is the greatest integer less than or equal to $x$.


Solution

We know that $x$ cannot be irrational because the product of a rational number and an irrational number is irrational (but $n$ is an integer). Therefore $x$ is rational.


Let $x = a + \frac{b}{c}$ where a,b,c are nonnegative integers and $0 \le b < c$ (essentially, x is a mixed number). Then,


$n = (a + \frac{b}{c}) \lfloor a +\frac{b}{c} \rfloor \Rightarrow n = (a + \frac{b}{c})a = a^2 + \frac{ab}{c}$ Here it is sufficient for $\frac{ab}{c}$ to be an integer. We can use casework to find values of n based on the value of a:


$a = 0 \implies$ nothing because n is positive

$a = 1 \implies \frac{b}{c} = \frac{0}{1}$

$a = 2 \implies \frac{b}{c} = \frac{0}{2},\frac{1}{2}$

$a = 3 \implies\frac{b}{c} =\frac{0}{3},\frac{1}{3},\frac{2}{3}$


The pattern continues up to $a = 31$. Note that if $a = 32$, then $n > 1000$. However if $a = 31$, the largest possible x is $31 + 30/31$, in which $n$ is still less than $1000$. Therefore the number of positive integers for n is equal to $1+2+3+...+31 = \frac{31*32}{2} = \boxed{496.}$
Solution 2

Notice that $x\lfloor x\rfloor$ is continuous over the region $x \in [k, k+1)$ for any integer $k$. Therefore, it takes all values in the range $[k\lfloor k\rfloor, (k+1)\lfloor k\rfloor) = [k^2, (k+1)k)$ over that interval. Note that if $k>32$ then $k^2 > 1000$ and if $k=31$, the maximum value attained is $31*32 < 1000$. It follows that the answer is $\sum_{k=1}^{31} (k+1)k-k^2 = \boxed{496}.$



2012 AIME II Problem 11
Problem 11

Let $f_1(x) = \frac23 - \frac3{3x+1}$, and for $n \ge 2$, define $f_n(x) = f_1(f_{n-1}(x))$. The value of $x$ that satisfies $f_{1001}(x) = x-3$ can be expressed in the form $\frac mn$, where $m$ and $n$ are relatively prime positive integers. Find $m+n$.


Solution

After evaluating the first few values of $f_k (x)$, we obtain $f_4(x) = f_1(x) = \frac{2}{3} - \frac{3}{3x+1} = \frac{6x-7}{9x+3}$. Since $1001 \equiv 2 \mod 3$, $f_{1001}(x) = f_2(x) = \frac{3x+7}{6-9x}$. We set this equal to $x-3$, i.e.


$\frac{3x+7}{6-9x} = x-3 \Rightarrow x = \frac{5}{3}$. The answer is thus $5+3 = \boxed{008.}$



2012 AIME II Problem 12
Problem 12

For a positive integer $p$, define the positive integer $n$ to be $p$-safe if $n$ differs in absolute value by more than $2$ from all multiples of $p$. For example, the set of $10$-safe numbers is $\{ 3, 4, 5, 6, 7, 13, 14, 15, 16, 17, 23, \ldots\}$. Find the number of positive integers less than or equal to $10,000$ which are simultaneously $7$-safe, $11$-safe, and $13$-safe.


Solution

We see that a number $n$ is $p$-safe if and only if the residue of $n \mod p$ is greater than $2$ and less than $p-2$; thus, there are $p-5$ residues $\mod p$ that a $p$-safe number can have. Therefore, a number $n$ satisfying the conditions of the problem can have $2$ different residues $\mod 7$, $6$ different residues $\mod 11$, and $8$ different residues $\mod 13$. The Chinese Remainder Theorem states that for a number $x$ that is $a$ (mod b) $c$ (mod d) $e$ (mod f) has one solution if $gcd(b,d,f)=1$. For example, in our case, the number $n$ can be: 3 (mod 7) 3 (mod 11) 7 (mod 13) so since $gcd(7,11,13)$=1, there is 1 solution for n for this case of residues of $n$.

This means that by the Chinese Remainder Theorem, $n$ can have $2\cdot 6 \cdot 8 = 96$ different residues mod $7 \cdot 11 \cdot 13 = 1001$. Thus, there are $960$ values of $n$ satisfying the conditions in the range $0 \le n < 10010$. However, we must now remove any values greater than $10000$ that satisfy the conditions. By checking residues, we easily see that the only such values are $10007$ and $10006$, so there remain $\fbox{958}$ values satisfying the conditions of the problem.



2012 AIME II Problem 13

Problem 13

Equilateral $\triangle ABC$ has side length $\sqrt{111}$. There are four distinct triangles $AD_1E_1$, $AD_1E_2$, $AD_2E_3$, and $AD_2E_4$, each congruent to $\triangle ABC$, with $BD_1 = BD_2 = \sqrt{11}$. Find $\sum_{k=1}^4(CE_k)^2$.


Solution 1

Note that there are only two possible locations for points $D_1$ and $D_2$, as they are both $\sqrt{111}$ from point $A$ and $\sqrt{11}$ from point $B$, so they are the two points where a circle centered at $A$ with radius $\sqrt{111}$ and a circle centered at $B$ with radius $\sqrt{11}$ intersect. Let $D_1$ be the point on the opposite side of $\overline{AB}$ from $C$, and $D_2$ the point on the same side of $\overline{AB}$ as $C$.

Let $\theta$ be the measure of angle $BAD_1$ (also the measure of angle $BAD_2$); by the Law of Cosines, $$\begin{align*}\sqrt{11}^2 &= \sqrt{111}^2 + \sqrt{111}^2 - 2 \cdot \sqrt{111} \cdot \sqrt{111} \cdot \cos\theta\\ 11 &= 222(1 - \cos\theta)\end{align*}$$

There are two equilateral triangles with $\overline{AD_1}$ as a side; let $E_1$ be the third vertex that is farthest from $C$, and $E_2$ be the third vertex that is nearest to $C$.

Angle $E_1AC = E_1AD_1 + D_1AB + BAC = 60 + \theta + 60 = 120 + \theta$; by the Law of Cosines, $$\begin{align*}(E_1C)^2 &= (E_1A)^2 + (AC)^2 - 2 (E_1A) (E_1C)\cos(120 + \theta)\\ &= 111 + 111 - 222\cos(120 + \theta)\end{align*}$$ Angle $E_2AC = \theta$; by the Law of Cosines, $$\begin{align*}(E_2C)^2 &= (E_2A)^2 + (AC)^2 - 2 (E_2A) (E_2C)\cos\theta\\ &= 111 + 111 - 222\,\cos\theta\end{align*}$$

There are two equilateral triangles with $\overline{AD_2}$ as a side; let $E_3$ be the third vertex that is farthest from $C$, and $E_4$ be the third vertex that is nearest to $C$.

Angle $E_3AC = E_3AB + BAC = (60 - \theta) + 60 = 120 - \theta$; by the Law of Cosines, $$\begin{align*}(E_3C)^2 &= (E_3A)^2 + (AC)^2 - 2 (E_3A) (E_3C)\cos(120 - \theta)\\ &= 111 + 111 - 222\cos(120 - \theta)\end{align*}$$ Angle $E_4AC = \theta$; by the Law of Cosines, $$\begin{align*}(E_4C)^2 &= (E_4A)^2 + (AC)^2 - 2 (E_4A) (E_4C)\cos\theta \\ &= 111 + 111 - 222\cos\theta\end{align*}$$

The solution is: $$\begin{align*} \sum_{k=1}^4(CE_k)^2 &= (E_1C)^2 + (E_3C)^2 + (E_2C)^2 + (E_4C)^2\\ &= 222(1 - \cos(120 + \theta)) + 222(1 - \cos(120 - \theta)) + 222(1 - \cos\theta) + 222(1 - \cos\theta)\\ &= 222((1 - (\cos120\cos\theta - \sin120\sin\theta)) + (1 - (\cos120\cos\theta + \sin120\sin\theta)) + 2(1 -\cos\theta))\\ &= 222(1 - \cos120\cos\theta + \sin120\sin\theta + 1 - \cos120\cos\theta - \sin120\sin\theta + 2 - 2\cos\theta)\\ &= 222(1 + \frac{1}{2}\cos\theta + 1 + \frac{1}{2}\cos\theta + 2 - 2\cos\theta)\\ &= 222(4 - \cos\theta)\\ &= 666 + 222(1 - \cos\theta) \end{align*}$$ Substituting $11$ for $222(1 - \cos\theta)$ gives the solution $666 + 11 = \framebox{677}.$
Solution 2

This problem is pretty much destroyed by complex plane geometry, which is similar to vector geometry only with the power of easy rotation. Place the triangle in the complex plane by letting $C$ be the origin, placing $B$ along the x-axis, and $A$ in the first quadrant. Let $r=\sqrt{111}$. If $\omega$ denotes the sixth root of unity, $e^{i\pi/3}$, then we have $C=0$, $B=r$, and $A=r\omega.$ Recall that counter-clockwise rotation in the complex plane by an angle $\theta$ is accomplished by multiplication by $e^{i\theta}$ (and clockwise rotation is multiplication by its conjugate). So, we can find $D_1$ and $D_2$ by rotating $B$ around $A$ by angles of $\theta$ and $-\theta$, where $\theta$ is the apex angle in the isoceles triangle with sides $\sqrt{111}$, $\sqrt{111}$, and $\sqrt{11}$. That is, let $z=e^{i\theta}$, and then:

$D_1=A+z(B-A)$, and $D_2=A+\overline{z}(B-A)$. Now notice that $B-A=\overline{A}$, so this simplifies further to:

$D_1=A+z\overline{A}$, and $D_2=A+\overline{z}\overline{A}$.

Similarly, we can write $E_1$, $E_2$, $E_3$, and $E_4$ by rotating $D_1$ and $D_2$ around $A$ by $\pm\pi/3$:

$E_1=A+\omega(D_1-A)$, $E_2=A+\overline{\omega}(D_1-A)$, $E_3=A+\omega(D_2-A)$, $E_4=A+\overline{\omega}(D_2-A)$. Thus:

$E_1=A+\omega z \overline{A}$, $E_2=A+\overline{\omega} z \overline{A}$, $E_3=A+\omega\overline{z}\overline{A}$, $E_4=A+\overline{\omega}\overline{z}\overline{A}$.

Now to find some magnitudes, which is easy since we chose $C$ as the origin:

$\|E_1\|^2=(A+\omega z \overline{A})(\overline{A}+\overline{\omega z}A)=2\|A\|^2+\omega z \overline{A}^2 + \overline{\omega}\overline{z}A^2$,

$\|E_2\|^2=(A+\overline{\omega} z \overline{A})(\overline{A}+\omega \overline{z}A)=2\|A\|^2+\overline{\omega} z \overline{A}^2 + \omega\overline{z}A^2$,

$\|E_3\|^2=(A+\omega \overline{z} \overline{A})(\overline{A}+\overline{\omega} z A)=2\|A\|^2+\omega \overline{z} \overline{A}^2 + \overline{\omega}zA^2$,

$\|E_4\|^2=(A+\overline{\omega z} \overline{A})(\overline{A}+\omega zA)=2\|A\|^2+\overline{\omega z} \overline{A}^2 + \omega zA^2$.

Adding these up, the sum equals $8\|A\|^2+(\overline{A}^2+A^2)(\omega z + \omega \overline{z} + \overline{\omega}z + \overline{\omega}\overline{z}) = 8\|A\|^2+(\overline{A}^2+A^2)(z + \overline{z})( \omega+ \overline{\omega})$.

(Isn't that nice?) Notice that $\overline{A}^2+A^2 = r^2(\overline{\omega}^2+\omega^2) = -r^2$, and $\omega+ \overline{\omega}=1$, so that this sum simplifies further to $888-111(z + \overline{z})$.

Finally, $z + \overline{z} = 2\cos{\theta}$, which is found using the law of cosines on that isoceles triangle: $11=111+111-222\cos{\theta}$, so $2\cos{\theta}=211/111$.

Thus, the sum equals $888-211=\boxed{677}$.
Solution 3

This method uses complex numbers with $A$ as the origin. Let $A=0$, $B=\sqrt{111}$, $C = \sqrt{111}\theta$, where $\theta = e^{i \pi/3} = \frac{1}{2} + \frac{\sqrt{3}}{2}i$.

Also, let $x$ be $D_1$ or $D_2$. Then

$|x|=\sqrt{111}, |x-\sqrt{111}|=\sqrt{11}$

Therefore, $11 = |x-\sqrt{111}|^2 = |x|^2 + 111 -2\sqrt{111}Re(x) = 222 - 2\sqrt{111}Re(x)$, so

$2\sqrt{111}Re(x) = 211.$

Since $E_1$, $E_2$ are one of $D_1\theta$ or $D_1\theta^{-1}$, without loss of generality, let $E_1=D_1\theta$ and $E_2 = D_1\theta^{-1}$. Then

$|CE_1|^2 = |\sqrt{111}-D_1|^2 = |\sqrt{111}-x|^2=11$ $|CE_2|^2 = |\theta^2 \sqrt{111} - D_1|^2 = 222-2\sqrt{111} Re(D_1 \theta^2)$

One can similarly get $|CE_3|=11$ and $|CE_4|=222-2\sqrt{111} Re(D_2 \theta^2)$, so the desired sum is equal to

$22+444-2\sqrt{111}(Re(D_1 \theta^2)+Re(D_1 \theta^2))$

Note that $Re(D_{1,2} \theta^2) = Re((Re(x) \pm Im(x)i)(-1/2 + \sqrt{3}/2i)) = - (Re(x)/2 \pm Im(x)\sqrt{3}/2)$, so the sum of these two is just $-Re(x)$. Therefore the desired sum is equal to

$22+444+2\sqrt{111}Re(x) = 22+444+211 = \boxed{677}.$
Solution 4

This method uses the observation that every point is equidistant from $A$. Without loss of generality, we can assume $C$ is on the same side of $AB$ as $D_1$.

We can start off by angle chasing the angles around $A$. We let $\angle BAD_1 = \alpha$. Then, we note that $BD_1 = BD_2$ and $AD_1 = AB = AD_2$. Thus, $\bigtriangleup ABD_1 \cong \bigtriangleup ABD_2$. Thus, $\angle BAD_2 = \alpha$ also.

We can now angle chase the angles about $A$. Because $\angle D_2AE_3 = 60$, $\angle D_1AE_3 = 60- 2 \alpha$. We can use all the congruent equilateral triangles in a similar manner obtaining: $\angle D_1AE_3 = 60- 2 \alpha$ $\angle E_3AC = \alpha$ $\angle CAE_1 = \alpha$ $\angle D_2AE_2 = 60- 2 \alpha$ $\angle E_2AE_4 = 2 \alpha$

Now, $AE_3 = AC = \sqrt{111}$ and $\angle E_3AC = \alpha$. Thus, $\bigtriangleup E_3AC \cong \bigtriangleup BAD_1$. Thus, $CE_3^2 = BD_1^2 = 11$.

Similarly, $AC = AE_1 = \sqrt{111}$ and $\angle CAE_1 = \alpha$. Thus, $\bigtriangleup CAE_1 \cong \bigtriangleup BAD_1$. Thus, $CE_1^2 = BD_1^2 = 11$.

We can use $\bigtriangleup CAE_2$ to find $CE_2^2$. Law of Cosines yields $CE_2^2 = AE_2^2 + AC^2 - 2 \cdot AE_2 \cdot AC \cdot \cos(\angle E_2AC).$ Substituting the known lengths and angles gives $CE_2^2 = 222 - 222 \cdot \cos(120- \alpha).$ Expanding this with the Cosine Subtraction Identity we get $CE_2^2 = 222 - 222(\cos120 \cos \alpha + \sin120 \sin \alpha).$

We could attempt to calculate this but we can clear it up by simultaneously finding $CE_4^2​$ too. We use Law of Cosines on $\bigtriangleup CAE_4​$ to get $CE_4^2 = AE_4^2 + AC^2 - 2 \cdot AE_4 \cdot AC \cdot \cos(\angle E_4AC).​$ Substituting the known lengths and angles gives $CE_4^2 = 222 - 222 \cdot \cos(120 + \alpha).​$ Expanding this with the Cosine Addition Identity we get $CE_4^2 = 222 - 222(\cos120 \cos \alpha - \sin120 \sin \alpha).​$ Adding this to our equation for $CE_2^2​$, we get $CE_2^2 + CE_4^2 = 444 - 222(\cos120 \cos \alpha - \sin120 \sin \alpha) - 222(\cos120 \cos \alpha + \sin120 \sin \alpha).​$ Simplifying we get $CE_2^2 + CE_4^2 = 444 - 444(\cos120 \cos \alpha)​$

We can find $\cos \alpha$ by using Law of Cosines on $\bigtriangleup BAD_1$. This gives $11 = 222 - 222 \cos \alpha.$ Thus $\cos \alpha = \frac{211}{222}$. Substituting it in gives $CE_2^2 + CE_4^2 = 444 - 444(\cos120 \cdot \frac{211}{222}).$ Thus $CE_2^2 + CE_4^2 = 444 + 211 = 655.$

Therefore the desired sum is equal to

$11+11+655 = \framebox{677}.$



2012 AIME II Problem 14
Problem 14

In a group of nine people each person shakes hands with exactly two of the other people from the group. Let $N$ be the number of ways this handshaking can occur. Consider two handshaking arrangements different if and only if at least two people who shake hands under one arrangement do not shake hands under the other arrangement. Find the remainder when $N$ is divided by $1000$.


Solution

Given that each person shakes hands with two people, we can view all of these through graph theory as 'rings'. This will split it into four cases: Three rings of three, one ring of three and one ring of six, one ring of four and one ring of five, and one ring of nine. (All other cases that sum to nine won't work, since they have at least one 'ring' of two or fewer points, which doesn't satisfy the handshaking conditions of the problem.)

Case 1: To create our groups of three, there are $\frac{\binom{9}{3}\binom{6}{3}\binom{3}{3}}{3!}$. In general, the number of ways we can arrange people within the rings to count properly is $\frac{(n-1)!}{2}$, since there are $(n-1)!$ ways to arrange items in the circle, and then we don't want to want to consider reflections as separate entities. Thus, each of the three cases has $\frac{(3-1)!}{2}=1$ arrangements. Therefore, for this case, there are $(\frac{\binom{9}{3}\binom{6}{3}\binom{3}{3}}{3!})(1)^3=280$

Case 2: For three and six, there are $\binom{9}{6}=84$ sets for the rings. For organization within the ring, as before, there is only one way to arrange the ring of three. For six, there is $\frac{(6-1)!}{2}=60$. This means there are $(84)(1)(60)=5040$ arrangements.

Case 3: For four and five, there are $\binom{9}{5}=126$ sets for the rings. Within the five, there are $\frac{4!}{2}=12$, and within the four there are $\frac{3!}{2}=3$ arrangements. This means the total is $(126)(12)(3)=4536$.

Case 4: For the nine case, there is $\binom{9}{9}=1$ arrangement for the ring. Within it, there are $\frac{8!}{2}=20160$ arrangements.

Summing the cases, we have $280+5040+4536+20160=30016 \to \boxed{016}$.



2012 AIME II Problem 15

Problem 15

Triangle $ABC$ is inscribed in circle $\omega$ with $AB=5$, $BC=7$, and $AC=3$. The bisector of angle $A$ meets side $\overline{BC}$ at $D$ and circle $\omega$ at a second point $E$. Let $\gamma$ be the circle with diameter $\overline{DE}$. Circles $\omega$ and $\gamma$ meet at $E$ and a second point $F$. Then $AF^2 = \frac mn$, where $m$ and $n$ are relatively prime positive integers. Find $m+n$.
Solution 1

Use the angle bisector theorem to find $CD=\frac{21}{8}$, $BD=\frac{35}{8}$, and use the Stewart's Theorem to find $AD=15/8$. Use Power of the Point to find $DE=49/8$, and so $AE=8$. Use law of cosines to find $\angle CAD = \frac{\pi} {3}$, hence $\angle BAD = \frac{\pi}{3}$ as well, and $\triangle BCE$ is equilateral, so $BC=CE=BE=7$.

I'm sure there is a more elegant solution from here, but instead we'll do some hairy law of cosines:

$AE^2 = AF^2 + EF^2 - 2 \cdot AF \cdot EF \cdot \cos \angle AFE.$ (1)

$AF^2 = AE^2 + EF^2 - 2 \cdot AE \cdot EF \cdot \cos \angle AEF.$ Adding these two and simplifying we get:

$EF = AF \cdot \cos \angle AFE + AE \cdot \cos \angle AEF$ (2). Ah, but $\angle AFE = \angle ACE$ (since $F$ lies on $\omega$), and we can find $cos \angle ACE$ using the law of cosines:

$AE^2 = AC^2 + CE^2 - 2 \cdot AC \cdot CE \cdot \cos \angle ACE$, and plugging in $AE = 8, AC = 3, BE = BC = 7,$ we get $\cos \angle ACE = -1/7 = \cos \angle AFE$.

Also, $\angle AEF = \angle DEF$, and $\angle DFE = \pi/2$ (since $F$ is on the circle $\gamma$ with diameter $DE$), so $\cos \angle AEF = EF/DE = 8 \cdot EF/49$.

Plugging in all our values into equation (2), we get:

$EF = -\frac{AF}{7} + 8 \cdot \frac{8EF}{49}$, or $EF = \frac{7}{15} \cdot AF$.

Finally, we plug this into equation (1), yielding:

$8^2 = AF^2 + \frac{49}{225} \cdot AF^2 - 2 \cdot AF \cdot \frac{7AF}{15} \cdot \frac{-1}{7}$. Thus,

$64 = \frac{AF^2}{225} \cdot (225+49+30),$ or $AF^2 = \frac{900}{19}.$ The answer is $\boxed{919}$.
Solution 2

Let $a = BC$, $b = CA$, $c = AB$ for convenience. We claim that $AF$ is a symmedian. Indeed, let $M$ be the midpoint of segment $BC$. Since $\angle EAB=\angle EAC$, it follows that $EB = EC$ and consequently $EM\perp BC$. Therefore, $M\in \gamma$. Now let $G = FD\cap \omega$. Since $EG$ is a diameter, $G$ lies on the perpendicular bisector of $BC$; hence $E$, $M$, $G$ are collinear. From $\angle DAG = \angle DMG = 90$, it immediately follows that quadrilateral $ADMG$ is cyclic. Therefore, $\angle MAD = \angle MGD=\angle EAF$, implying that $AF$ is a symmedian, as claimed.

The rest is standard; here's a quick way to finish. From above, quadrilateral $ABFC$ is harmonic, so $\frac{FB}{FC}=\frac{AB}{BC}=\frac{c}{a}$. In conjunction with $\triangle ABF\sim\triangle AMC$, it follows that $AF^2=\frac{b^2c^2}{AM^2}=\frac{4b^2c^2}{2b^2+2c^2-a^2}$. (Notice that this holds for all triangles $ABC$.) To finish, substitute $a = 7$, $b=3$, $c=5$ to obtain $AF^2=\frac{900}{19}\implies 900+19=\boxed{919}$ as before.

-Solution by thecmd999
Solution 3

<div align="center"><img src="http://latex.artofproblemsolving.com/a/8/0/a80782f39887a93de2059dbd9933b524f41a3a96.png" height="200px" /></div>

First of all, use the Angle Bisector Theorem to find that $BD=35/8$ and $CD=21/8$, and use Stewart's Theorem to find that $AD=15/8$. Then use Power of a Point to find that $DE=49/8$. Then use the circumradius of a triangle formula to find that the length of the circumradius of $\triangle ABC$ is $\frac{7\sqrt{3}}{3}$.

Since $DE$ is the diameter of circle $\gamma$, $\angle DFE$ is $90^\circ$. Extending $DF$ to intersect circle $\omega$ at $X$, we find that $XE$ is the diameter of the circumcircle of $\triangle ABC$ (since $\angle DFE$ is $90^\circ$). Therefore, $XE=\frac{14\sqrt{3}}{3}$.

Let $EF=x$, $XD=a$, and $DF=b$. Then, by the Pythagorean Theorem,

$x^2+b^2=\left(\frac{49}{8}\right)^2=\frac{2401}{64}$

and

$x^2+(a+b)^2=\left(\frac{14\sqrt{3}}{3}\right)^2=\frac{196}{3}.$

Subtracting the first equation from the second, the $x^2$ term cancels out and we obtain:

$(a+b)^2-b^2=\frac{196}{3}-\frac{2401}{64}$

$a^2+2ab = \frac{5341}{192}.$

By Power of a Point, $ab=BD \cdot DC=735/64=2205/192$, so

$a^2+2 \cdot \frac{2205}{192}=\frac{5341}{192}$

$a^2=\frac{931}{192}.$

Since $a=XD$, $XD=\frac{7\sqrt{19}}{8\sqrt{3}}$.

Because $\angle EXF$ and $\angle EAF$ intercept the same arc in circle $\omega$ and the same goes for $\angle XFA$ and $\angle XEA$, $\angle EXF\cong\angle EAF$ and $\angle XFA\cong\angle XEA$. Therefore, $\triangle XDE\sim\triangle ADF$ by AA Similarity. Since side lengths in similar triangles are proportional,

$\frac{AF}{\frac{15}{8}}=\frac{\frac{14\sqrt{3}}{3}}{\frac{7\sqrt{19}}{8\sqrt{3}}}$

$\frac{AF}{\frac{15}{8}}=\frac{16}{\sqrt{19}}$

$AF \cdot \sqrt{19} = 30$

$AF = \frac{30}{\sqrt{19}}.$

However, the problem asks for $AF^2$, so $AF^2 = \frac{900}{19}\implies 900 + 19 = \boxed{919}$.

-Solution by TheBoomBox77



2012 AIME II Answer Key
Return to 2012 AIME II (2012 AIME II Problems) 
1.	034
    2.363
    3.088
    4.061
    5.750
    6.125
    7.032
    8.040
    9.107
    10.496
    11.008
    12.958
    13.677
    14.016
    15.919





















































