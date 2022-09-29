# 2011 AIME I

2011 AIME I Problem 1

Problem 1

Jar A contains four liters of a solution that is 45% acid. Jar B contains five liters of a solution that is 48% acid. Jar C contains one liter of a solution that is $k\%$ acid. From jar C, $\frac{m}{n}$ liters of the solution is added to jar A, and the remainder of the solution in jar C is added to jar B. At the end both jar A and jar B contain solutions that are 50% acid. Given that $m$ and $n$ are relatively prime positive integers, find $k + m + n$.
Solution 1

There are $\frac{45}{100}(4)=\frac{9}{5}$ L of acid in Jar A. There are $\frac{48}{100}(5)=\frac{12}{5}$ L of acid in Jar B. And there are $\frac{k}{100}$ L of acid in Jar C. After transfering the solutions from jar C, there will be
$4+\frac{m}{n}$ L of solution in Jar A and $\frac{9}{5}+\frac{k}{100}\cdot\frac{m}{n}$ L of acid in Jar A.

$6-\frac{m}{n}$ L of solution in Jar B and $\frac{12}{5}+\frac{k}{100}\cdot \left(1-\frac{m}{n}\right)=\frac{12}{5}+\frac{k}{100}-\frac{mk}{100n}$ of acid in Jar B.
Since the solutions are 50% acid, we can multiply the amount of acid for each jar by 2, then equate them to the amount of solution.
$\frac{18}{5}+\frac{km}{50n}=4+\frac{m}{n}$ $\frac{24}{5}-\frac{km}{50n}+\frac{k}{50}=6-\frac{m}{n}$ Add the equations to get $\frac{42}{5}+\frac{k}{50}=10$ Solving gives $k=80$.
If we substitute back in the original equation we get $\frac{m}{n}=\frac{2}{3}$ so $3m=2n$. Since $m$ and $n$ are relatively prime, $m=2$ and $n=3$. Thus $k+m+n=80+2+3=\boxed{085}$.
Solution 2

One might cleverly change the content of both Jars.

Since the end result of both Jars are $50\%$ acid, we can turn Jar A into a 1 gallon liquid with $50\%-4(5\%) = 30\%$ acid

and Jar B into 1 gallon liquid with $50\%-5(2\%) =40\%$ acid.

Now, since Jar A and Jar B contain the same amount of liquid, twice as much liquid will be pour into Jar A than Jar B, so $\frac{2}{3}$ of Jar C will be pour into Jar A.

Thus, $m=2$ and $n=3$.

$\frac{30\% + \frac{2}{3} \cdot k\%}{\frac{5}{3}} = 50\%$

Solving for $k$ yields $k=80$

So the answer is $80+2+3 = \boxed{085}$
Solution 3

One may first combine all three jars in to a single container. That container will have $10$ liters of liquid, and it should be $50\%$ acidic. Thus there must be $5$ liters of acid.

Jug A contained $45\% \cdot 4L$, or $1.8L$ of acid, and jug B $48\% \cdot 5L$ or $2.4L$. Solving for the amount of acid in jug C, $k = (5 - 2.4 - 1.8) = .8$, or $80\%$.

Once one knows that the jug C is $80\%$ acid, use solution 1 to figure out m and n.





2011 AIME I Problem 2

Problem

In rectangle $ABCD$, $AB=12$ and $BC=10$. Points $E$ and $F$ lie inside rectangle $ABCD$ so that $BE=9$,$DF=8$,$\overline{BE}||\overline{DF}$,$\overline{EF}||\overline{AB}$, and line $BE$ intersects segment $\overline{AD}$. The length $EF$ can be expressed in the form $m\sqrt{n}-p$, where $m$,$n$, and $p$ are positive integers and $n$ is not divisible by the square of any prime. Find $m+n+p$.


Solution 1

Let us call the point where $\overline{EF}$ intersects $\overline{AD}$ point $G$, and the point where $\overline{EF}$ intersects $\overline{BC}$ point $H$. Since angles $FHB$ and $EGA$ are both right angles, and angles $BEF$ and $DFE$ are congruent due to parallelism, right triangles $BHE$ and $DGF$ are similar. This implies that $\frac{BH}{GD} = \frac{9}{8}$. Since $BC=10$, $BH+GD=BH+HC=BC=10$. ($HC$ is the same as $GD$ because they are opposite sides of a rectangle.) Now, we have a system:

$\frac{BH}{GD}=\frac{9}8$

$BH+GD=10$

Solving this system (easiest by substitution), we get that:

$BH=\frac{90}{17}$

$GD=\frac{80}{17}$

Using the Pythagorean Theorem, we can solve for the remaining sides of the two right triangles:

$\sqrt{9^2-(\frac{90}{17})^2}$ and $\sqrt{8^2-(\frac{80}{17})^2}$

Notice that adding these two sides would give us twelve plus the overlap $EF$. This means that:

$EF= \sqrt{9^2-(\frac{90}{17})^2}+\sqrt{8^2-(\frac{80}{17})^2}-12=3\sqrt{21}-12$

Since $21$ isn't divisible by any perfect square, our answer is:

$3+21+12=\boxed{36}$


Solution 2

Extend lines $BE$ and $CD$ to meet at point $G$. Draw the altitude $GH$ from point $G$ to line $BA$ extended.

$GE=CF=8,$ $GB=17$

In right $\bigtriangleup GHB$, $GH=10$, $GB=17$, thus by Pythagoras Theorem we have: $HB=\sqrt{17^2-10^2}=3\sqrt{21}$

$HA=EF=3\sqrt{21}-12$

Thus our answer is: $3+21+12=\boxed{36}$



2011 AIME I Problem 3
Problem

Let $L$ be the line with slope $\frac{5}{12}$ that contains the point $A=(24,-1)$, and let $M$ be the line perpendicular to line $L$ that contains the point $B=(5,6)$. The original coordinate axes are erased, and line $L$ is made the $x$-axis and line $M$ the $y$-axis. In the new coordinate system, point $A$ is on the positive $x$-axis, and point $B$ is on the positive $y$-axis. The point $P$ with coordinates $(-14,27)$ in the original system has coordinates $(\alpha,\beta)$ in the new coordinate system. Find $\alpha+\beta$.
Solution

Given that $L$ has slope $\frac{5}{12}$ and contains the point $A=(24,-1)$, we may write the point-slope equation for $L$ as $y+1=\frac{5}{12}(x-24)$. Since $M$ is perpendicular to $L$ and contains the point $B=(5,6)$, we have that the slope of $M$ is $-\frac{12}{5}$, and consequently that the point-slope equation for $M$ is $y-6=-\frac{12}{5}(x-5)$.


Converting both equations to the form $0=Ax+By+C$, we have that $L$ has the equation $0=5x-12y-132$ and that $M$ has the equation $0=12x+5y-90$. Applying the point-to-line distance formula, $\frac{|Ax+By+C|}{\sqrt{A^2+B^2}}$, to point $P$ and lines $L$ and $M$, we find that the distance from $P$ to $L$ and $M$ are $\frac{526}{13}$ and $\frac{123}{13}$, respectively.


Since $A$ and $B$ lie on the positive axes of the shifted coordinate plane, we may show by graphing the given system that point P will lie in the second quadrant in the new coordinate system. Therefore, the abscissa of $P$ is negative, and is therefore $-\frac{123}{13}$; similarly, the ordinate of $P$ is positive and is therefore $\frac{526}{13}$.

Thus, we have that $\alpha=-\frac{123}{13}$ and that $\beta=\frac{526}{13}$. It follows that $\alpha+\beta=-\frac{123}{13}+\frac{526}{13}=\frac{403}{13}=\boxed{031}$.



2011 AIME I Problem 4
Problem 4

In triangle $ABC$, $AB=125$, $AC=117$ and $BC=120$. The angle bisector of angle $A$ intersects $\overline{BC}$ at point $L$, and the angle bisector of angle $B$ intersects $\overline{AC}$ at point $K$. Let $M$ and $N$ be the feet of the perpendiculars from $C$ to $\overline{BK}$ and $\overline{AL}$, respectively. Find $MN$.


Solution

Extend ${CM}$ and ${CN}$ such that they intersects lines ${AB}$ at points $P$ and $Q$, respectively. Since ${BM}$ is the angle bisector of angle B,and ${CM}$ is perpendicular to ${BM}$ ,so , $BP=BC=120$, M is the midpoint of ${CP}$ .For the same reason,$AQ=AC=117$,N is the midpoint of ${CQ}$. Hence$MN=\frac{PQ}{2}$.But $PQ=BP+AQ-AB=120+117-125=112$,so$MN=\boxed{56}$.




2011 AIME I Problem 5
Problem

The vertices of a regular nonagon (9-sided polygon) are to be labeled with the digits 1 through 9 in such a way that the sum of the numbers on every three consecutive vertices is a multiple of 3. Two acceptable arrangements are considered to be indistinguishable if one can be obtained from the other by rotating the nonagon in the plane. Find the number of distinguishable acceptable arrangements.
Solution

First, we determine which possible combinations of digits $1$ through $9$ will yield sums that are multiples of $3$. It is simplest to do this by looking at each of the digits $\bmod{3}$.

We see that the numbers $1, 4,$ and $7$ are congruent to $1 \mod{3}$, that the numbers $2, 5,$ and $8$ are congruent to $2 \mod{3}$, and that the numbers $3, 6,$ and $9$ are congruent to $0 \mod{3}$. In order for a sum of three of these numbers to be a multiple of three, the mod $3$ sum must be congruent to $0$. Quick inspection reveals that the only possible combinations are $0+0+0, 1+1+1, 2+2+2,$ and $0+1+2$. However, every set of three consecutive vertices must sum to a multiple of three, so using any of $0+0+0, 1+1+1$, or $2+2+2$ would cause an adjacent sum to include exactly 2 digits with the same mod 3 value, and this is an unacceptable arrangement. Thus the only possible groupings are composed of three digits congruent to three different $\bmod{3}$ values.

We see also that there are two possible arrangements for these trios on the nonagon: a digit congruent to $1 \mod{3}$ can be located counterclockwise of a digit congruent to $0$ and clockwise of a digit congruent to $2 \mod{3}$, or the reverse can be true.

The nonagon can be rotated, so if we find all possible strings beginning with one particular digit, we have found all indistinguishable arrangements. For each of the two trio arrangements, we find $72$ possible strings:

The first digit is predetermined as $3$ because we want to avoid strings that rotate to become indistinguishable, so we have one option as a choice for the first digit. The other two $0 \mod{3}$ numbers can be arranged in $2!=2$ ways. The three $1 \mod{3}$ and three $2 \mod{3}$ can both be arranged in $3!=6$ ways. Therefore, the desired result is $2(2 \times 6 \times 6)=\boxed{144}$.



2011 AIME I Problem 6

Problem

Suppose that a parabola has vertex $\left(\frac{1}{4},-\frac{9}{8}\right)$ and equation $y = ax^2 + bx + c$, where $a > 0$ and $a + b + c$ is an integer. The minimum possible value of $a$ can be written in the form $\frac{p}{q}$, where $p$ and $q$ are relatively prime positive integers. Find $p + q$.
Solution

If the vertex is at $\left(\frac{1}{4}, -\frac{9}{8}\right)$, the equation of the parabola can be expressed in the form $y=a\left(x-\frac{1}{4}\right)^2-\frac{9}{8}$. Expanding, we find that $y=a\left(x^2-\frac{x}{2}+\frac{1}{16}\right)-\frac{9}{8}$ , and $y=ax^2-\frac{ax}{2}+\frac{a}{16}-\frac{9}{8}$. From the problem, we know that the parabola can be expressed in the form $y=ax^2+bx+c$, where $a+b+c$ is an integer. From the above equation, we can conclude that $a=a$, $-\frac{a}{2}=b$, and $\frac{a}{16}-\frac{9}{8}=c$. Adding up all of these gives us $\frac{9a-18}{16}=a+b+c$. We know that $a+b+c$ is an integer, so $9a-18$ must be divisible by 16. Let $9a=z$. If ${z-18}\equiv {0} \mod{16}$, then ${z}\equiv {2} \mod{16}$. Therefore, if $9a=2$, $a=\frac{2}{9}$. Adding up gives us $2+9=\boxed{011}$
Solution 2

Complete the square. Since $a>0$, the parabola must be facing upwards. $a+b+c=\text{integer}$ means that $f(1)$ must be an integer. The function can be recasted into $a\left(x-\frac{1}{4}\right)^2-\frac{9}{8}$ because the vertex determines the axis of symmetry and the critical value of the parabola. The least integer greater than $-\frac{9}{8}$ is $-1$. So the $y$-coordinate must change by $\frac{1}{8}$ and the $x$-coordinate must change by $1-\frac{1}{4}=\frac{3}{4}$. Thus, $a\left(\frac{3}{4}\right)^2=\frac{1}{8}\implies \frac{9a}{16}=\frac{1}{8}\implies a=\frac{2}{9}$. So $2+9=\boxed{011}$.



2011 AIME I Problem 7

Problem 7

Find the number of positive integers $m$ for which there exist nonnegative integers $x_0$, $x_1$ , $\dots$ , $x_{2011}$ such that $m^{x_0} = \sum_{k = 1}^{2011} m^{x_k}.$
Solution 1

$m^{x_0}= m^{x_1} +m^{x_2} + .... + m^{x_{2011}}$. Now, divide by $m^{x_0}$ to get $1= m^{x_1-x_0} +m^{x_2-x_0} + .... + m^{x_{2011}-x_0}$. Notice that since we can choose all nonnegative $x_0,...,x_{2011}$, we can make $x_n-x_0$ whatever we desire. WLOG, let $x_0\geq...\geq x_{2011}$ and let $a_n=x_n-x_0$. Notice that, also, $m^{a_{2011}}$ doesn't matter if we are able to make $m^{a_1} +m^{a_2} + .... + m^{a_{2011}}$ equal to $1-\left(\frac{1}{m}\right)^x$ for any power of $x$. Consider $m=2$. We can achieve a sum of $1-\left(\frac{1}{2}\right)^x$ by doing $\frac{1}{2}+\frac{1}{4}+...$ (the simplest" sequence). If we don't have $\frac{1}{2}$, to compensate, we need $2\cdot 1\frac{1}{4}$'s. Now, let's try to generalize. The "simplest" sequence is having $\frac{1}{m}$ $m-1$ times, $\frac{1}{m^2}$ $m-1$ times, $\ldots$. To make other sequences, we can split $m-1$ $\frac{1}{m^i}$s into $m(m-1)$ $\frac{1}{m^{i+1}}$s since $m\cdot\frac{1}{m^{i+1}}\cdot =m(m-1)\cdot\frac{1}{m^{i}}$. Since we want $2010$ terms, we have $\sum$ $(m-1)\cdot m^x=2010$. However, since we can set $x$ to be anything we want (including 0), all we care about is that $m-1 | 2010$ which happens $\boxed{016}$ times.
Solution 2

Let $P(m) = m^{x_0} - m^{x_1} -m^{x_2} - .... - m^{x_{2011}}$. The problem then becomes finding the number of positive integer roots $m$ for which $P(m) = 0$ and $x_0, x_1, ..., x_{2011}$ are nonnegative integers. We plug in $m = 1$ and see that $P(1) = 1 - 1 - 1... -1 = 1-2011 = -2010$. Now, we can say that $P(m) = (m-1)Q(m) - 2010$ for some polynomial $Q(m)$ with integer coefficients. Then if $P(m) = 0$, $(m-1)Q(m) = 2010$. Thus, if $P(m) = 0$, then $m-1 | 2010$ . Now, we need to show that for all $m-1 | 2010$, $m^{x_{0}}=\sum_{k = 1}^{2011}m^{x_{k}}.$. We try with the first few $m$ that satisfy this. For $m = 2$, we see we can satisfy this if $x_0 = 2010$, $x_1 = 2009$, $x_2 = 2008$, $\cdots$ , $x_{2008} = 2$, $x_{2009} = 1$, $x_{2010} = 0$, $x_{2011} = 0$, because $2^{2009} + 2^{2008} + \cdots + 2^1 + 2^0 +2^ 0 = 2^{2009} + 2^{2008} + \cdots + 2^1 + 2^1 = \cdots$ (based on the idea $2^n + 2^n = 2^{n+1}$, leading to a chain of substitutions of this kind) $= 2^{2009} + 2^{2008} + 2^{2008} = 2^{2009} + 2^{2009} = 2^{2010}$. Thus $2$ is a possible value of $m$. For other values, for example $m = 3$, we can use the same strategy, with $x_{2011} = x_{2010} = x_{2009} = 0$, $x_{2008} = x_{2007} = 1$, $x_{2006} = x_{2005} = 2$, $\cdots$, $x_2 = x_1 = 1004$ and $x_0 = 1005$, because 

$3^0 + 3^0 + 3^0 +3^1+3^1+3^2+3^2+\cdots+3^{1004} +3^{1004} \\ = 3^1+3^1+3^1+3^2+3^2+\cdots+3^{1004} +3^{1004} \\ = 3^2+3^2+3^2+\cdots+3^{1004} +3^{1004} \\= \cdots \\ =3^{1004} +3^{1004}+3^{1004} = 3^{1005}$. 

It's clearly seen we can use the same strategy for all $m-1 |2010$. We count all positive $m$ satisfying $m-1 |2010$, and see there are $\boxed{016}$
Solution 3

One notices that $m-1 \mid 2010$ if and only if there exist non-negative integers $x_0,x_1,\ldots,x_{2011}$ such that $m^{x_0} = \sum_{k=1}^{2011}m^{x_k}$.

To prove the forward case, we proceed by directly finding $x_0,x_1,\ldots,x_{2011}$. Suppose $m$ is an integer such that $m^{x_0} = \sum_{k=1}^{2011}m^{x_k}$. We will count how many $x_k = 0$, how many $x_k = 1$, etc. Suppose the number of $x_k = 0$ is non-zero. Then, there must be at least $m$ such $x_k$ since $m$ divides all the remaining terms, so $m$ must also divide the sum of all the $m^0$ terms. Thus, if we let $x_k = 0$ for $k = 1,2,\ldots,m$, we have, $m^{x_0} = m + \sum_{k=m+1}^{2011}m^{x_k}.$ Well clearly, $m^{x_0}$ is greater than $m$, so $m^2 \mid m^{x_0}$. $m^2$ will also divide every term, $m^{x_k}$, where $x_k \geq 2$. So, all the terms, $m^{x_k}$, where $x_k < 2$ must sum to a multiple of $m^2$. If there are exactly $m$ terms where $x_k = 0$, then we must have at least $m-1$ terms where $x_k = 1$. Suppose there are exactly $m-1$ such terms and $x_k = 1$ for $k = m+1,m+2,2m-1$. Now, we have, $m^{x_0} = m^2 + \sum_{k=2m}^{2011}m^{x_k}.$ One can repeat this process for successive powers of $m$ until the number of terms reaches 2011. Since there are $m + j(m-1)$ terms after the $j$th power, we will only hit exactly 2011 terms if $m-1$ is a factor of 2010. To see this, $m+j(m-1) = 2011 \Rightarrow m-1+j(m-1) = 2010 \Rightarrow (m-1)(j+1) = 2010.$ Thus, when $j = 2010/(m-1) - 1$ (which is an integer since $m-1 \mid 2010$ by assumption, there are exactly 2011 terms. To see that these terms sum to a power of $m$, we realize that the sum is a geometric series: $1 + (m-1) + (m-1)m+(m-1)m^2 + \cdots + (m-1)m^j = 1+(m-1)\frac{m^{j+1}-1}{m-1} = m^{j+1}.$ Thus, we have found a solution for the case $m-1 \mid 2010$.

Now, for the reverse case, we use the formula $x^k-1 = (x-1)(x^{k-1}+x^{k-2}+\cdots+1).$ Suppose $m^{x_0} = \sum_{k=1}^{2011}m^{x^k}$ has a solution. Subtract 2011 from both sides to get $m^{x_0}-1-2010 = \sum_{k=1}^{2011}(m^{x^k}-1).$ Now apply the formula to get $(m-1)a_0-2010 = \sum_{k=1}^{2011}[(m-1)a_k],$ where $a_k$ are some integers. Rearranging this equation, we find $(m-1)A = 2010,$ where $A = a_0 - \sum_{k=1}^{2011}a_k$. Thus, if $m$ is a solution, then $m-1 \mid 2010$.

So, there is one positive integer solution corresponding to each factor of 2010. Since $2010 = 2\cdot 3\cdot 5\cdot 67$, the number of solutions is $2^4 = \boxed{016}$.



2011 AIME I Problem 8

Problem

In triangle $ABC$, $BC = 23$, $CA = 27$, and $AB = 30$. Points $V$ and $W$ are on $\overline{AC}$ with $V$ on $\overline{AW}$, points $X$ and $Y$ are on $\overline{BC}$ with $X$ on $\overline{CY}$, and points $Z$ and $U$ are on $\overline{AB}$ with $Z$ on $\overline{BU}$. In addition, the points are positioned so that $\overline{UV}\parallel\overline{BC}$, $\overline{WX}\parallel\overline{AB}$, and $\overline{YZ}\parallel\overline{CA}$. Right angle folds are then made along $\overline{UV}$, $\overline{WX}$, and $\overline{YZ}$. The resulting figure is placed on a level floor to make a table with triangular legs. Let $h$ be the maximum possible height of a table constructed from triangle $ABC$ whose top is parallel to the floor. Then $h$ can be written in the form $\frac{k\sqrt{m}}{n}$, where $k$ and $n$ are relatively prime positive integers and $m$ is a positive integer that is not divisible by the square of any prime. Find $k+m+n$.

<div align="center"><img src="http://latex.artofproblemsolving.com/4/4/f/44fd6e9fb5acf1d28fe1e2acd699bd5be1230685.png" height="150px" /></div>

Solution 1

Note that the area is given by Heron's formula and it is $20\sqrt{221}$. Let $h_i$ denote the length of the altitude dropped from vertex i. It follows that $h_b = \frac{40\sqrt{221}}{27}, h_c = \frac{40\sqrt{221}}{30}, h_a = \frac{40\sqrt{221}}{23}$. From similar triangles we can see that $\frac{27h}{h_a}+\frac{27h}{h_c} \le 27 \rightarrow h \le \frac{h_ah_c}{h_a+h_c}$. We can see this is true for any combination of a,b,c and thus the minimum of the upper bounds for h yields $h = \frac{40\sqrt{221}}{57} \rightarrow \boxed{318}$.
Solution 2

As from above, we can see that the length of the altitude from A is the longest. Thus the highest table is formed when X and Y meet up. Let the distance of this point from C be x, then the distance from B will be 23 - x. Let h be the height of the table. From similar triangles, we have $\frac{x}{23} = \frac{h}{h_c} = \frac{27h}{2A}$ where A is the area of triangle ABC. Similarly, $\frac{23-x}{23}=\frac{h}{h_b}=\frac{30h}{2A}$. Therefore, $1-\frac{x}{23}=\frac{30h}{2A} \rightarrow1-\frac{27h}{2A}=\frac{30h}{2A}$ and hence $h = \frac{2A}{57} = \frac{40\sqrt{221}}{57}\rightarrow \boxed{318}$.



2011 AIME I Problem 9
Problem

Suppose $x$ is in the interval $[0, \pi/2]$ and $\log_{24\sin x} (24\cos x)=\frac{3}{2}$. Find $24\cot^2 x$.
Solution

We can rewrite the given expression as $\sqrt{24^3\sin^3 x}=24\cos x$ Square both sides and divide by $24^2$ to get $24\sin ^3 x=\cos ^2 x$ Rewrite $\cos ^2 x$ as $1-\sin ^2 x$ $24\sin ^3 x=1-\sin ^2 x$ $24\sin ^3 x+\sin ^2 x - 1=0$ Testing values using the rational root theorem gives $\sin x=\frac{1}{3}$ as a root, $\sin^{-1} \frac{1}{3}$ does fall in the first quadrant so it satisfies the interval. There are now two ways to finish this problem.

First way: Since $\sin x=\frac{1}{3}$, we have $\sin ^2 x=\frac{1}{9}$ Using the Pythagorean Identity gives us $\cos ^2 x=\frac{8}{9}$. Then we use the definition of $\cot ^2 x$ to compute our final answer. $24\cot ^2 x=24\frac{\cos ^2 x}{\sin ^2 x}=24\left(\frac{\frac{8}{9}}{\frac{1}{9}}\right)=24(8)=\boxed{192}$.

Second way: Multiplying our old equation $24\sin ^3 x=\cos ^2 x$ by $\frac{24}{\sin^2x}$ gives $576\sin x = 24\cot^2x$ So, $24\cot^2x=576\sin x=576\cdot\frac{1}{3}=\boxed{192}$.



2011 AIME I Problem 10

Problem

The probability that a set of three distinct vertices chosen at random from among the vertices of a regular n-gon determine an obtuse triangle is $\frac{93}{125}$ . Find the sum of all possible values of $n$.
Solution 1

Inscribe the regular polygon inside a circle. A triangle inside this circle will be obtuse if and only if its three vertices lie on one side of a diameter of the circle. (This is because if an inscribed angle on a circle is obtuse, the arc it spans must be 180 degrees or greater).

Break up the problem into two cases: an even number of sides $2n$, or an odd number of sides $2n-1$. For polygons with $2n$ sides, the circumdiameter has endpoints on $2$ vertices. There are $n-1$ points on one side of a diameter, plus $1$ of the endpoints of the diameter for a total of $n$ points. For polygons with $2n - 1$ points, the circumdiameter has $1$ endpoint on a vertex and $1$ endpoint on the midpoint of the opposite side. There are also $n - 1$ points on one side of the diameter, plus the vertex for a total of $n$ points on one side of the diameter.

Case 1: $2n$-sided polygon. There are clearly $\binom{2n}{3}$ different triangles total. To find triangles that meet the criteria, choose the left-most point. There are obviously $2n$ choices for this point. From there, the other two points must be within the $n-1$ points remaining on the same side of the diameter. So our desired probability is $\frac{2n\binom{n-1}{2}}{\binom{2n}{3}}$ $=\frac{n(n-1)(n-2)}{\frac{2n(2n-1)(2n-2)}{6}}$ $=\frac{6n(n-1)(n-2)}{2n(2n-1)(2n-2)}$ $=\frac{3(n-2)}{2(2n-1)}$

so $\frac{93}{125}=\frac{3(n-2)}{2(2n-1)}$

$186(2n-1)=375(n-2)$.

$372n-186=375n-750$

$3n=564$

$n=188$ and so the polygon has $376$ sides.

Case 2: $2n-1$-sided polygon. Similarly, $\binom{2n-1}{3}$ total triangles. Again choose the leftmost point, with $2n-1$ choices. For the other two points, there are again $\binom{n-1}{2}$ possibilities.

The probability is $\frac{(2n-1)\binom{n-1}{2}}{\binom{2n-1}{3}}$

$=\frac{3(2n-1)(n-1)(n-2)}{(2n-1)(2n-2)(2n-3)}$

$=\frac{3(n-2)}{2(2n-3)}$

so $\frac{93}{125}=\frac{3(n-2)}{2(2n-3)}$

$186(2n-3)=375(n-2)$

$375n-750=372n-558$

$3n=192$

$n=64$ and our polygon has $127$ sides.

Adding, $127+376=\boxed{503}$
Solution 2

We use casework on the locations of the vertices, if we choose the locations of vertices $v_a, v_b, v_c$ on the n-gon (where the vertices of the n-gon are $v_0, v_1, v_2, ... v_{n-1},$ in clockwise order) to be the vertices of triangle ABC, in order, with the restriction that $a<b<c$.

By symmetry, we can assume W/O LOG that the location of vertex A is vertex $v_0$.

Now, vertex B can be any of $v_1, v_2, ... v_{n-2}$. We start in on casework.

Case 1: vertex B is at one of the locations $v_{n-2}, v_{n-3}, ... v_{\lfloor n/2 \rfloor +1}$. (The ceiling function is necessary for the cases in which n is odd.)

Now, since the clockwise arc from A to B measures more than 180 degrees; for every location of vertex C we can choose in the above restrictions, angle C will be an obtuse angle.

There are $\lceil n/2 \rceil - 2$ choices for vertex B now (again, the ceiling function is necessary to satisfy both odd and even cases of n). If vertex B is placed at $v_m$, there are $n - m - 1$ possible places for vertex C.

Summing over all these possibilities, we obtain that the number of obtuse triangles obtainable from this case is $\frac{(n- \lceil n/2 \rceil - 2)(n - \lceil n/2 \rceil) - 1}{2}$.


Case 2: vertex B is at one of the locations not covered in the first case.

Note that this will result in the same number of obtuse triangles as case 1, but multiplied by 2. This is because fixing vertex B in $v_0$, then counting up the cases for vertices C, and again for vertices C and A, respectively, is combinatorially equivalent to fixing vertex A at $v_0$, then counting cases for vertex B, as every triangle obtained in this way can be rotated in the n-gon to place vertex A at $v_0$, and will not be congruent to any obtuse triangle obtained in case 1, as there will be a different side opposite the obtuse angle in this case.


Therefore, there are $\frac{3(n- \lceil n/2 \rceil - 2)(n - \lceil n/2 \rceil - 1)}{2}$ total obtuse triangles obtainable.

The total number of triangles obtainable is $1+2+3+...+(n-2) = \frac{(n-2)(n-1)}{2}$.

The ratio of obtuse triangles obtainable to all triangles obtainable is therefore

$\frac{\frac{3(n- \lceil n/2 \rceil - 2)(n - \lceil n/2 \rceil - 1)}{2}}{\frac{(n-2)(n-1)}{2}} = \frac{3(n- \lceil n/2 \rceil - 2)(n - \lceil n/2 \rceil - 1)}{(n-2)(n-1)} = \frac{93}{125}$.

So, $\frac{(n- \lceil n/2 \rceil - 2)(n - \lceil n/2 \rceil - 1)}{(n-2)(n-1)} = \frac{31}{125}$.

Now, we have that $(n-2)(n-1)$ is divisible by $125 = 5^3$. It is now much easier to perform trial-and-error on possible values of n, because we see that $n \equiv 1,2 \mod{125}$.

We find that $n = 127$ and $n = 376$ both work, so the final answer is $127 + 376 = \boxed{503}$.



2011 AIME I Problem 11

Problem

Let $R$ be the set of all possible remainders when a number of the form $2^n$, $n$ a nonnegative integer, is divided by $1000$. Let $S$ be the sum of the elements in $R$. Find the remainder when $S$ is divided by $1000$.
Solution 1

Note that $x \equiv y \mod{1000} \Leftrightarrow x \equiv y \mod{125}$ and $x \equiv y \mod{8}$. So we must find the first two integers $i$ and $j$ such that $2^i \equiv 2^j \mod{125}$ and $2^i \equiv 2^j \mod{8}$ and $i \neq j$. Note that $i$ and $j$ will be greater than 2 since remainders of $1, 2, 4$ will not be possible after 2 (the numbers following will always be congruent to 0 modulo 8). Note that $2^{100}\equiv 1\mod{125}$ (see Euler's theorem) and $2^0,2^1,2^2,\ldots,2^{99}$ are all distinct modulo 125 (proof below). Thus, $i = 103$ and $j =3$ are the first two integers such that $2^i \equiv 2^j \mod{1000}$. All that is left is to find $S$ in mod $1000$. After some computation: $S = 2^0+2^1+2^2+2^3+2^4+...+2^{101}+ 2^{102} = 2^{103}-1 \equiv 8 - 1 \mod 1000 = \boxed{007}.$ To show that $2^0, 2^1,\ldots, 2^{99}$ are distinct modulo 125, suppose for the sake of contradiction that they are not. Then, we must have at least one of $2^{20}\equiv 1\mod{125}$ or $2^{50}\equiv 1\mod{125}$. However, writing $2^{10}\equiv 25 - 1\mod{125}$, we can easily verify that $2^{20}\equiv -49\mod{125}$ and $2^{50}\equiv -1\mod{125}$, giving us the needed contradiction.
Solution 2

Notice that our sum of remainders looks like $S = 1 + 2 + 4 + 2^3 + 2^4 + \cdots.$ We want to find the remainder of $S$ upon division by $1000.$ Since $1000$ decomposes into primes as $1000 = 2^3 \cdot 5^3$, we can check the remainders of $S$ modulo $2^3$ and modulo $5^3$ separately.

Checking $S$ modulo $2^3$ is easy, so lets start by computing the remainder of $S$ upon division by $5^3.$ To do this, let's figure out when our sequence finally repeats. Notice that since the remainder when dividing any term of $S$ (after the third term) by $1000$ will be a multiple of $2^3$, when this summation finally repeats, the first term to repeat will be not be $1$ since $2^3 \nmid 1.$ Instead, the first term to repeat will be $2^3$, and then the sequence will continue once again $2^4, 2^5, \cdots.$

Now, to compute $S$ modulo $125$, we want to find the least positive integer $d$ such that $2^d \equiv 1 \mod {125}$ since then $d$ will just be the number of terms of $S$ (after the third term!) before the sequence repeats. In other words, our sequence will be of the form $S = 1 + 2 + 4 + \left(2^3 + 2^4 + \cdots + 2^{2 + d}\right)$ and then we will have $2^{d + 3} \equiv 2^3 \mod {125}$, and the sequence will repeat from there. Here, $d$ simply represents the order of $2$ modulo $125$, denoted by $d = \text{ord}_{125}(2).$ To begin with, we'll use a well-known property of the order to get a bound on $d.$

Since $\gcd(2, 125) = 1$ and $\phi(125) = 100$, we know by Euler's Theorem that $2^{100} \equiv 1 \mod {125}.$ However, we do not know that $100$ is the least $d$ satisfying $2^d \equiv 1 \mod {125}.$ Nonetheless, it is a well known property of the order that $\text{ord}_{125}(2) = d | \phi(125) = 100.$ Therefore, we can conclude that $d$ must be a positive divisor of $100.$

Now, this still leaves a lot of possibilities, so let's consider a smaller modulus for the moment, say $\mod 5.$ Clearly, we must have that $2^d \equiv 1 \mod 5.$ Since $2^4 \equiv 1 \mod 5$ and powers of two will then cycle every four terms, we know that $2^d \equiv 1 \mod 5 \iff 4 | d.$ Combining this relation with $d | 100$, it follows that $d \in \{4, 20, 100\}.$

Now, it is trivial to verify that $d \ne 4.$ In addition, we know that $2^{20} = \left(2^{10}\right)^2 = \left(1024\right)^2 \equiv 24^2 = 576 \not\equiv 1 \mod {125}.$ Therefore, we conclude that $d \ne 20.$ Hence, we must have $d = 100.$ (Notice that we could have guessed this by Euler's, but we couldn't have been certain without investigating the order more thoroughly).

Now, since we have found $d = 100$, we know that $S = 1 + 2 + 4 + 2^3 + 2^4 + \cdots + 2^{102}.$ There are two good ways to finish from here:

The first way is to use a trick involving powers of $2.$ Notice that $S = 1 + 2 + 4 + ... + 2^{102} = 2^{103} - 1.$ Certainly $S = 2^{103} - 1 \equiv -1 \equiv 7 \mod {8}.$ In addition, since we already computed $\text{ord}_{125}(2) = d = 100$, we know that $S = 2^{103} - 1 = 2^{100} \cdot 2^3 - 1 \equiv 2^3 - 1 \equiv 7 \mod {125}.$ Therefore, since $S \equiv 7 \mod{8}$ and $S \equiv 7 \mod{125}$, we conclude that $S \equiv \boxed{007} \mod {1000}.$

The second way is not as slick, but works better in a general setting when there aren't any convenient tricks as in Method 1. Let us split the terms of $S$ into groups: $R = 1 + 2 + 4; \quad T = 2^3 + 2^4 + \cdots + 2^{102}.$ It is easy to see that $R$ is congruent to $7$ modulo $1000.$

Now, for $T$, notice that there are $100$ terms in the summation, each with a different remainder upon division by $125.$ Since each of these remainders is certainly relatively prime to $125$, these $100$ remainders correspond to the $100$ positive integers less than $125$ that are relatively prime to $125.$ Therefore, $\begin{align*}T &\equiv 1 + 2 + 3 + 4 + 6 + 7 + 8 + 9 + 11 + \cdots + 124 \mod{125} \\ &= \left(1 + 2 + 3 + \cdots + 125\right) - \left(5 + 10 + 15 + \cdots 125\right) \\ &= \frac{125 \cdot 126}{2} - 5\left(1 + 2 + 3 + \cdots 25\right) \\ &= 125 \cdot 63 - 5\left(\frac{25 \cdot 26}{2}\right) \\ &= 125\left(63 - 13\right) \\ &\equiv 0 \mod{125}.\end{align*}$ 

Then, since $T$ is divisible by $125$ and $8$, it follows that $T$ is divisible by $1000.$ Therefore, $S = R + T \equiv R \equiv \boxed{007} \mod{1000}.$



2011 AIME I Problem 12
Problem

Six men and some number of women stand in a line in random order. Let $p$ be the probability that a group of at least four men stand together in the line, given that every man stands next to at least one other man. Find the least number of women in the line such that $p$ does not exceed 1 percent.
Solution

Let $n$ be the number of women present, and let _ be some positive number of women between groups of men. Since the problem states that every man stands next to another man, there cannot be isolated men. Thus, there are five cases to consider, where $(k)$ refers to a consecutive group of $k$ men:

_(2)_(2)_(2)_

_(3)_(3)_

_(2)_(4)_

_(4)_(2)_

_(6)_

For the first case, we can place the three groups of men in between women. We can think of the groups of men as dividers splitting up the $n$ women. Since there are $n+1$ possible places to insert the dividers, and we need to choose any three of these locations, we have $\binom{n+1}{3}$ ways.

The second, third, and fourth cases are like the first, only that we need to insert two dividers among the $n+1$ possible locations. Each gives us $\binom{n+1}{2}$ ways, for a total of $3\binom{n+1}{2}$ ways.

The last case gives us $\binom{n+1}{1}=n+1$ ways.

Therefore, the total number of possible ways where there are no isolated men is

$\binom{n+1}{3}+3\binom{n+1}{2}+(n+1).$

The total number of ways where there is a group of at least four men together is the sum of the third, fourth, and fifth case, or

$2\binom{n+1}{2}+(n+1).$

Thus, we want to find the minimum possible value of $n$ where $n$ is a positive integer such that

$\frac{2\binom{n+1}{2}+(n+1)}{\binom{n+1}{3}+3\binom{n+1}{2}+(n+1)}\le\frac{1}{100}.$

The numerator is equal to

$2\cdot\frac{(n+1)!}{2!(n-1)!}+(n+1)=2\cdot\frac{(n+1)(n)}{2}+(n+1)=n(n+1)+1(n+1)=(n+1)^2.$

For the denominator, we get

$\begin{align*}\binom{n+1}{3}+3\binom{n+1}{2}+(n+1)&=\frac{(n+1)!}{3!(n-2)!}+3\frac{(n+1)!}{2!(n-1)!}+(n+1)\\ &=\frac{(n+1)(n)(n-1)}{6}+3\frac{(n+1)(n)}{2}+(n+1)\\ &=(n+1)\left[\frac{n^2-n}{6}+\frac{3n}{2}+1\right]\\ &=\frac{1}{6}(n+1)(n^2-n+9n+6)\\ &=\frac{1}{6}(n+1)(n^2+8n+6). \end{align*}$

So, we get

$\frac{(n+1)^2}{\frac{1}{6}(n+1)(n^2+8n+6)}=\frac{6(n+1)}{n^2+8n+6}\le\frac{1}{100}.$

We know that $100(n^2+8n+6)$ is positive since $n$ must be positive. So, when multiplying both sides of the inequality by that expression, it will not change the inequality sign. After multiplying by it, we get

$\begin{align*}100\cdot6(n+1)&\le n^2+8n+6\\ 600n+600&\le n^2+8n+6\\ 0&\le n^2-592n-594. \end{align*}$

Thus we seek the smallest positive integer value of $n$ such that $n^2-592n-594\ge0$. Since the quadratic function's discriminant, or $\sqrt{592^2-4(-594)}=\sqrt{592^2+4\cdot594}$, is positive, the polynomial has two distinct real roots.

Also, since the polynomial has a positive leading coefficient, the graph of the polynomial is concave up, and the value of $n$ we want must be either slightly larger than the positive root (if the other, smaller root is less than $1$) or equal to $1$ (if the smaller root is greater than or equal to $1$). We see that $n=1$ does not satisfy the inequality, so the smaller root is irrelevant.

The solution to the polynomial is

$\frac{592\pm\sqrt{592^2+4\cdot594}}{2}.$

We want the larger solution and to find the smallest integer greater than that solution. So, we will look only at the $+$ case, not the $-$.

Let's look at the discriminant:

$\begin{align*}\sqrt{592^2+4\cdot594}&=\sqrt{592^2+4(592+2)}\\ &=\sqrt{592(592)+4(592)+8}\\ &=\sqrt{592(592+4)+8}\\ &=\sqrt{(594-2)(594+2)+8}\\ &=\sqrt{594^2-4+8}\\ &=\sqrt{594^2+4} \end{align*}$

So $594<\text{discriminant}<595$.

Let $k=\frac{592+\sqrt{592^2+4\cdot594}}{2}$.

Therefore, we're looking for

$n=\left\lceil\frac{592+\sqrt{592^2+4\cdot594}}{2}\right\rceil=\lceil k\rceil.$

Since we have $594<\sqrt{592^2+4\cdot594}<595$, we get

$\begin{align*}\frac{592+594}{2}<&k<\frac{592+595}{2}\\ \implies593<&k<593.5 \end{align*}$

Since $n=\lceil k\rceil$, $n=\boxed{594}$.



2011 AIME I Problem 13

Problem

A cube with side length 10 is suspended above a plane. The vertex closest to the plane is labeled $A$. The three vertices adjacent to vertex $A$ are at heights 10, 11, and 12 above the plane. The distance from vertex $A$ to the plane can be expressed as $\frac{r-\sqrt{s}}{t}$, where $r$, $s$, and $t$ are positive integers, and $r+s+t<{1000}$. Find $r+s+t$.
Solution

Set the cube at the origin with the three vertices along the axes and the plane equal to $ax+by+cz+d=0$, where $a^2+b^2+c^2=1$. Then the (directed) distance from any point (x,y,z) to the plane is $ax+by+cz+d$. So, by looking at the three vertices, we have $10a+d=10, 10b+d=11, 10c+d=12$, and by rearranging and summing, $(10-d)^2+(11-d)^2+(12-d)^2= 100\cdot(a^2+b^2+c^2)=100$.

Solving the equation is easier if we substitute $11-d=y$, to get $3y^2+2=100$, or $y=\sqrt {98/3}$. The distance from the origin to the plane is simply d, which is equal to $11-\sqrt{98/3} =(33-\sqrt{294})/3$, so $33+294+3=330$
Solution 2

Set the cube at the origin and the adjacent vertices as (10, 0, 0), (0, 10, 0) and (0, 0, 10). Then consider the plane ax + by + cz = 0. Because A has distance 0 to it (and distance d to the original, parallel plane), the distance from the other vertices to the plane is 10-d, 11-d, and 12-d respectively. The distance formula gives $\frac{a(10)}{\sqrt{a^2 + b^2 + c^2}} = 10-d,$ $\frac{b(10)}{\sqrt{a^2 + b^2 + c^2}} = 11-d,$ and $\frac{c(10)}{\sqrt{a^2 + b^2 + c^2}} = 12-d.$ Squaring each equation and then adding yields $100=(10-d)^2+(11-d)^2+(12-d)^2$, and we can proceed as in the first solution.
Solution 3

Let the vertices with distance $10,11,12$ be $B,C,D$, respectively. An equilateral triangle $\triangle BCD$ is formed with side length $10\sqrt{2}$. We care only about the $z$ coordinate: $B=10,C=11,D=12$. It is well known that the centroid of a triangle is the average of the coordinates of its three vertices, so $\text{centroid}=(10+11+12)/3=11$. Designate the midpoint of $BD$ as $M$. Notice that median $CM$ is parallel to the plane because the $\text{centroid}$ and vertex $C$ have the same $z$ coordinate, $11$, and the median contains $C$ and the $\text{centroid}$. We seek the angle $\theta$ of the line:$(1)$ through the centroid $(2)$ perpendicular to the plane formed by $\triangle BCD$, $(3)$ with the plane under the cube. Since the median is parallel to the plane, this orthogonal line is also perpendicular $in\text{ }slope$ to $BD$. Since $BD$ makes a $2-14-10\sqrt{2}$ right triangle, the orthogonal line makes the same right triangle rotated $90^\circ$. Therefore, $\sin\theta=\frac{14}{10\sqrt{2}}=\frac{7\sqrt{2}}{10}$.

It is also known that the centroid of $\triangle BCD$ is a third of the way between vertex $A$ and $H$, the vertex farthest from the plane. Since $AH$ is a diagonal of the cube, $AH=10\sqrt{3}$. So the distance from the $\text{centroid}$ to $A$ is $10/\sqrt{3}$. So, the $\Delta z$ from $A$ to the centroid is $\frac{10}{\sqrt{3}}\sin\theta=\frac{10}{\sqrt{3}}\left(\frac{7\sqrt{2}}{10}\right)=\frac{7\sqrt{6}}{3}$.

Thus the distance from $A$ to the plane is $11-\frac{7\sqrt{6}}{3}=\frac{33-7\sqrt{6}}{3}=\frac{33-\sqrt{294}}{3}$, and $33+294+3=\boxed{330}$.



2011 AIME I Problem 14

Problem

Let $A_1 A_2 A_3 A_4 A_5 A_6 A_7 A_8$ be a regular octagon. Let $M_1$, $M_3$, $M_5$, and $M_7$ be the midpoints of sides $\overline{A_1 A_2}$, $\overline{A_3 A_4}$, $\overline{A_5 A_6}$, and $\overline{A_7 A_8}$, respectively. For $i = 1, 3, 5, 7$, ray $R_i$ is constructed from $M_i$ towards the interior of the octagon such that $R_1 \perp R_3$, $R_3 \perp R_5$, $R_5 \perp R_7$, and $R_7 \perp R_1$. Pairs of rays $R_1$ and $R_3$, $R_3$ and $R_5$, $R_5$ and $R_7$, and $R_7$ and $R_1$ meet at $B_1$, $B_3$, $B_5$, $B_7$ respectively. If $B_1 B_3 = A_1 A_2$, then $\cos 2 \angle A_3 M_3 B_1$ can be written in the form $m - \sqrt{n}$, where $m$ and $n$ are positive integers. Find $m + n$.
Solution

Solution 1

<div align="center"><img src="http://latex.artofproblemsolving.com/4/7/3/473d0d32f373a2111df8158875ae32815c4412bd.png" height="150px" /></div>

Let $\theta=\angle M_1 M_3 B_1$. Thus we have that $\cos 2 \angle A_3 M_3 B_1=\cos(2\theta + \frac{\pi}{2})=-\sin2\theta$.

Since $A_1 A_2 A_3 A_4 A_5 A_6 A_7 A_8$ is a regular octagon and $B_1 B_3 = A_1 A_2$, let $k=A_1 A_2 = A_2 A_3 = B_1 B_3$.


Extend $\overline{A_1 A_2}$ and $\overline{A_3 A_4}$ until they intersect. Denote their intersection as $I_1$. Through similar triangles & the $45-45-90$ triangles formed, we find that $M_1 M_3=\frac{k}{2}(2+\sqrt2)$.

We also have that$\triangle M_7 B_7 M_1 =\triangle M_1 B_1 M_3$ through ASA congruence ($\angle B_7 M_7 M_1 =\angle B_1 M_1 M_3$, $M_7 M_1 = M_1 M_3$, $\angle B_7 M_1 M_7 =\angle B_1 M_3 M_1$). Therefore, we may let $n=M_1 B_7 = M_3 B_1$.

Thus, we have that $\sin\theta=\frac{n+k}{\frac{k}{2}(2+\sqrt2)}$ and that $\cos\theta=\frac{n}{\frac{k}{2}(2+\sqrt2)}$. Therefore $\sin\theta-\cos\theta=\frac{k}{\frac{k}{2}(2+\sqrt2)}=\frac{2}{2+\sqrt2}=2-\sqrt2$.

Squaring gives that $\sin^2\theta - 2\sin\theta\cos\theta + \cos^2\theta = 6-4\sqrt2$ and consequently that $-2\sin\theta\cos\theta = 5-4\sqrt2 = -\sin2\theta$ through the identities $\sin^2\theta + \cos^2\theta = 1$ and $\sin2\theta = 2\sin\theta\cos\theta$.

Thus we have that $\cos 2 \angle A_3 M_3 B_1=5-4\sqrt2=5-\sqrt{32}$. Therefore $m+n=5+32=\boxed{037}$.
Solution 2

Let $A_1A_2 = 2$. Then $B_1$ and $B_3$ are the projections of $M_1$ and $M_5$ onto the line $B_1B_3$, so $2=B_1B_3=-M_1M_5\cos x$, where $x = \angle A_3M_3B_1$. Then since $M_1M_5 = 2+2\sqrt{2}, \cos x = \frac{-2}{2+2\sqrt{2}}= 1-\sqrt{2}$,$\cos 2x = 2\cos^2 x -1 = 5 - 4\sqrt{2} = 5-\sqrt{32}$, and $m+n=\boxed{037}$.
Diagram

<div align="center"><img src="http://latex.artofproblemsolving.com/a/7/e/a7e3f673bfaad025a526592e00e178d181021b55.png" height="150px" /></div>

All distances are to scale.



2011 AIME I Problem 15

Problem

For some integer $m$, the polynomial $x^3 - 2011x + m$ has the three integer roots $a$, $b$, and $c$. Find $|a| + |b| + |c|$.
Solution

With Vieta's formulas, we know that $a+b+c = 0$, and $ab+bc+ac = -2011$.



$a,b,c\neq 0$ since any one being zero will make the other $2 \pm \sqrt{2011}$.

$a = -(b+c)$. WLOG, let $|a| \ge |b| \ge |c|$.

Then if $a > 0$, then $b,c < 0$ and if $a < 0$, $b,c > 0$.


$ab+bc+ac = -2011 = a(b+c)+bc = -a^2+bc$


$a^2 = 2011 + bc$

We know that $b$, $c$ have the same sign. So $|a| \ge 45$. ($44^2<2011$ and $45^2 = 2025$)

Also, $bc$ maximize when $b = c$ if we fixed $a$. Hence, $2011 = a^2 - bc > \frac{3}{4}a^2$.

So $a ^2 < \frac{(4)2011}{3} = 2681+\frac{1}{3}$.

$52^2 = 2704$ so $|a| \le 51$.



Now we have limited $a$ to $45\le |a| \le 51$.

Let's us analyze $a^2 = 2011 + bc$.


Here is a table:
$|a|$	$a^2 = 2011 + bc$
$45$	$14$
$46$	$14 + 91 =105$
$47$	$105 + 93 = 198$
$48$	$198 + 95 = 293$
$49$	$293 + 97 = 390$


We can tell we don't need to bother with $45$,

$105 = (3)(5)(7)$, So $46$ won't work. $198/47 > 4$,

$198$ is not divisible by $5$, $198/6 = 33$, which is too small to get $47$.

$293/48 > 6$, $293$ is not divisible by $7$ or $8$ or $9$, we can clearly tell that $10$ is too much.


Hence, $|a| = 49$, $a^2 -2011 = 390$. $b = 39$, $c = 10$.

Answer: $\boxed{098}$
Solution 2

Starting off like the previous solution, we know that $a + b + c = 0$, and $ab + bc + ac = -2011$.

Therefore, $c = -b-a$.

Substituting, $ab + b(-b-a) + a(-b-a) = ab-b^2-ab-ab-a^2 = -2011$.

Factoring the perfect square, we get: $ab-(b+a)^2=-2011$ or $(b+a)^2-ab=2011$.

Therefore, a sum ($a+b$) squared minus a product ($ab$) gives $2011$..


We can guess and check different $a+b$’s starting with $45$ since $44^2 < 2011$.

$45^2 = 2025$ therefore $ab = 2025-2011 = 14$.

Since no factors of $14$ can sum to $45$ ($1+14$ being the largest sum), a + b cannot equal $45$.

$46^2 = 2116$ making $ab = 105 = 3 * 5 * 7$.

$5 * 7 + 3 < 46$ and $3 * 5 * 7 > 46$ so $46$ cannot work either.


We can continue to do this until we reach $49$.

$49^2 = 2401$ making $ab = 390 = 2 * 3 * 5* 13$.

$3 * 13 + 2* 5 = 49$, so one root is $10$ and another is $39$. The roots sum to zero, so the last root must be $-49$.


$|-49|+10+39 = \boxed{098}$.


2011 AIME I Answer Key
Return to 2011 AIME I (2011 AIME I Problems) 
1.	085
    2.036
    3.031
    4.056
    5.144
    6.011
    7.016
    8.318
    9.192
    10.503
    11.007
    12.594
    13.330
    14.037
    15.098
