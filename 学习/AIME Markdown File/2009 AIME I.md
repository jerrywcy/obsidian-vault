# 2009 AIME I

2009 AIME I Problems/Problem 1

Problem

Call a $3$-digit number geometric if it has $3$ distinct digits which, when read from left to right, form a geometric sequence. Find the difference between the largest and smallest geometric numbers.
Solution
Solution 1

Assume that the largest geometric number starts with a nine. We know that the common ratio must be a rational of the form $k/3$ for some integer $k$, because a whole number should be attained for the 3rd term as well. When $k = 1$, the number is $931$. When $k = 2$, the number is $964$. When $k = 3$, we get $999$, but the integers must be distinct. By the same logic, the smallest geometric number is $124$. The largest geometric number is $964$ and the smallest is $124$. Thus the difference is $964 - 124 = \boxed{840}$.
Solution 2

Consider the three-digit number $\overline{abc}$. If its digits form a geometric sequence, we must have that ${a \over b} = {b \over c}$, that is, $b^2 = ac$.

The minimum and maximum geometric numbers occur when $a$ is minized and maximized, respectively. The minimum occurs when $a = 1$; letting $b = 2$ and $c = 4$ achieves this, so the smallest possible geometric number is 124.

For the maximum, we have that $b^2 = 9c$; $b$ is maximized when $9c$ is the greatest possible perfect square; this happens when $c = 4$, yielding $b = 6$. Thus, the largest possible geometric number is 964.

Our answer is thus $964 - 124 = \boxed{840}$.
Solution 3

The smallest geometric number is 124 because 123 and any number containing a zero does not work. 964 is the largest geometric number because the middle digit cannot be 8 or 7. Subtracting the numbers gives $\boxed{840}.$


2009 AIME I Problems/Problem 2

Problem

There is a complex number $z$ with imaginary part $164$ and a positive integer $n$ such that

$\frac {z}{z + n} = 4i.$

Find $n$.
Solution 1

Let $z = a + 164i$.

Then $\frac {a + 164i}{a + 164i + n} = 4i$ and $a + 164i = \left (4i \right ) \left (a + n + 164i \right ) = 4i \left (a + n \right ) - 656.$

By comparing coefficients, equating the real terms on the leftmost and rightmost side of the equation,

we conclude that $a = -656.$

By equating the imaginary terms on each side of the equation,

we conclude that $164i = 4i \left (a + n \right ) = 4i \left (-656 + n \right ).$

We now have an equation for $n$: $4i \left (-656 + n \right ) = 164i,$

and this equation shows that $n = \boxed{697}.$


Solution 2

$\frac {z}{z+n}=4i$

$1-\frac {n}{z+n}=4i$

$1-4i=\frac {n}{z+n}$

$\frac {1}{1-4i}=\frac {z+n}{n}$

$\frac {1+4i}{17}=\frac {z}{n}+1$

Since their imaginary part has to be equal,

$\frac {4i}{17}=\frac {164i}{n}$

$n=\frac {(164)(17)}{4}=697$

$n = \boxed{697}.$


2009 AIME I Problems/Problem 3
Problem

A coin that comes up heads with probability $p > 0$ and tails with probability $1 - p > 0$ independently on each flip is flipped eight times. Suppose the probability of three heads and five tails is equal to $\frac {1}{25}$ of the probability of five heads and three tails. Let $p = \frac {m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m + n$.
Solution

The probability of three heads and five tails is $\binom {8}{3}p^3(1-p)^5$ and the probability of five heads and three tails is $\binom {8}{3}p^5(1-p)^3$.

$\begin{align*} 25\binom {8}{3}p^3(1-p)^5&=\binom {8}{3}p^5(1-p)^3 \\ 25(1-p)^2&=p^2 \\ 5(1-p)&=p \\ 5-5p&=p \\ 5&=6p \\ p&=\frac {5}{6}\end{align*}$

Therefore, the answer is $5+6=\boxed{011}$.


2009 AIME I Problems/Problem 4

Problem 4

In parallelogram $ABCD$, point $M$ is on $\overline{AB}$ so that $\frac {AM}{AB} = \frac {17}{1000}$ and point $N$ is on $\overline{AD}$ so that $\frac {AN}{AD} = \frac {17}{2009}$. Let $P$ be the point of intersection of $\overline{AC}$ and $\overline{MN}$. Find $\frac {AC}{AP}$.
Solution 1

One of the ways to solve this problem is to make this parallelogram a straight line. So the whole length of the line is $APC$($AMC$ or $ANC$), and $ABC$ is $1000x+2009x=3009x.$

$AP$($AM$ or $AN$) is $17x.$

So the answer is $3009x/17x = \boxed{177}$
Solution 2

Draw a diagram with all the given points and lines involved. Construct parallel lines $\overline{DF_2F_1}$ and $\overline{BB_1B_2}$ to $\overline{MN}$, where for the lines the endpoints are on $\overline{AM}$ and $\overline{AN}$, respectively, and each point refers to an intersection. Also, draw the median of quadrilateral $BB_2DF_1$ $\overline{E_1E_2E_3}$ where the points are in order from top to bottom. Clearly, by similar triangles, $BB_2 = \frac {1000}{17}MN$ and $DF_1 = \frac {2009}{17}MN$. It is not difficult to see that $E_2$ is the center of quadrilateral $ABCD$ and thus the midpoint of $\overline{AC}$ as well as the midpoint of $\overline{B_1}{F_2}$ (all of this is easily proven with symmetry). From more triangle similarity, $E_1E_3 = \frac12\cdot\frac {3009}{17}MN\implies AE_2 = \frac12\cdot\frac {3009}{17}AP\implies AC = 2\cdot\frac12\cdot\frac {3009}{17}AP$ $= \boxed{177}AP$.
Solution 3

Using vectors, note that $\overrightarrow{AM}=\frac{17}{1000}\overrightarrow{AB}$ and $\overrightarrow{AN}=\frac{17}{2009}\overrightarrow{AD}$. Note that $\overrightarrow{AP}=\frac{x\overrightarrow{AM}+y\overrightarrow{AN}}{x+y}$ for some positive x and y, but at the same time is a scalar multiple of $\overrightarrow{AB}+\overrightarrow{AD}$. So, writing the equation $\overrightarrow{AP}=\frac{x\overrightarrow{AM}+y\overrightarrow{AN}}{x+y}$ in terms of $\overrightarrow{AB}$ and $\overrightarrow{AD}$, we have $\overrightarrow{AP}=\frac{\frac{17x}{1000}\overrightarrow{AB}+\frac{17y}{2009}\overrightarrow{AD}}{x+y}$. But the coefficients of the two vectors must be equal because, as already stated, $\overrightarrow{AP}$ is a scalar multiple of $\overrightarrow{AB}+\overrightarrow{AD}$. We then see that $\frac{x}{x+y}=\frac{1000}{3009}$ and $\frac{y}{x+y}=\frac{2009}{3009}$. Finally, we have $\overrightarrow{AP}=\frac{17}{3009}(\overrightarrow{AB}+\overrightarrow{AD})$ and, simplifying, $\overrightarrow{AB}+\overrightarrow{AD}=177\overrightarrow{AP}$ and the desired quantity is $177$.
Solution 4

We approach the problem using mass points on triangle $ABD$ as displayed below. 

<div align=center><img src="http://latex.artofproblemsolving.com/7/e/d/7edb2f08a788ba7cd0618227aa8d33ffb751b5bc.png" height="150px" /></div>

But as $MN$ does not protrude from a vertex, we will have to "split the mass" at point $A$. First, we know that $DO$ is congruent to $BO$ because diagonals of parallelograms bisect each other. Therefore, we can assign equal masses to points $B$ and $D$. In this case, we assign $B$ and $D$ a mass of 17 each. Now we split the mass at $A$, so we balance segments $AB$ and $AD$ separately, and then the mass of $A$ is the sum of those masses. A mass of 983 is required to balance segment $AB$, while a mass of 1992 is required to balance segment $AD$. Therefore, $A$ has a mass of $1992+983=2975$. Also, $O$ has a mass of 34. Therefore, $\frac{AO}{AP}=\frac{2975+34}{34}=\frac{3009}{34}$, so $\frac{AC}{AP}=\frac{2 (3009)}{34}=177$.


2009 AIME I Problems/Problem 5

Problem

Triangle $ABC$ has $AC = 450$ and $BC = 300$. Points $K$ and $L$ are located on $\overline{AC}$ and $\overline{AB}$ respectively so that $AK = CK$, and $\overline{CL}$ is the angle bisector of angle $C$. Let $P$ be the point of intersection of $\overline{BK}$ and $\overline{CL}$, and let $M$ be the point on line $BK$ for which $K$ is the midpoint of $\overline{PM}$. If $AM = 180$, find $LP$.
Solution 1

<div align=center><img src="http://latex.artofproblemsolving.com/7/d/a/7da806e0aa0782795b140c81cd725875ad3dfc7c.png" height="150px" /></div>

Since $K$ is the midpoint of $\overline{PM}$ and $\overline{AC}$, quadrilateral $AMCP$ is a parallelogram, which implies $AM||LP$ and $\bigtriangleup{AMB}$ is similar to $\bigtriangleup{LPB}$

Thus,

$\frac {AM}{LP}=\frac {AB}{LB}=\frac {AL+LB}{LB}=\frac {AL}{LB}+1$

Now let's apply the angle bisector theorem.

$\frac {AL}{LB}=\frac {AC}{BC}=\frac {450}{300}=\frac {3}{2}$

$\frac {AM}{LP}=\frac {AL}{LB}+1=\frac {5}{2}$

$\frac {180}{LP}=\frac {5}{2}$

$LP=\boxed {072}$
Solution 2

Using the diagram above, we can solve this problem by using mass points. By angle bisector theorem: $\frac{BL}{CB}=\frac{AL}{CA}\implies\frac{BL}{300}=\frac{AL}{450}\implies 3BL=2AL$ So, we can weight $A$ as $2$ and $B$ as $3$ and $L$ as $5$. Since $K$ is the midpoint of $A$ and $C$, the weight of $A$ is equal to the weight of $C$, which equals $2$. Also, since the weight of $L$ is $5$ and $C$ is $2$, we can weight $P$ as $7$.

By the definition of mass points, $\frac{LP}{CP}=\frac{2}{5}\implies LP=\frac{2}{5}CP$ By vertical angles, angle $MKA =$ angle $PKC$. Also, it is given that $AK=CK$ and $PK=MK$.

By the SAS congruence, triangle $MKA$ = triangle $PKC$. So, $MA$ = $CP$ = $180$. Since $LP=\frac{2}{5}CP$, $LP = \frac{2}{5}(180) = \boxed{072}$


2009 AIME I Problems/Problem 6
Problem

How many positive integers $N$ less than $1000$ are there such that the equation $x^{\lfloor x\rfloor} = N$ has a solution for $x$? (The notation $\lfloor x\rfloor$ denotes the greatest integer that is less than or equal to $x$.)
Solution

First, $x$ must be less than $5$, since otherwise $x^{\lfloor x\rfloor}$ would be at least $3125$ which is greater than $1000$.

Because ${\lfloor x\rfloor}$ must be an integer, we can do some simple case work:

For ${\lfloor x\rfloor}=0$, $N=1$ as long as $x \neq 0$. This gives us $1$ value of $N$.

For ${\lfloor x\rfloor}=1$, $N$ can be anything between $1^1$ to $2^1$ excluding $2^1$

Therefore, $N=1$. However, we got N=1 in case 1 so it got counted twice.

For ${\lfloor x\rfloor}=2$, $N$ can be anything between $2^2$ to $3^2$ excluding $3^2$

This gives us $3^2-2^2=5$ $N$'s

For ${\lfloor x\rfloor}=3$, $N$ can be anything between $3^3$ to $4^3$ excluding $4^3$

This gives us $4^3-3^3=37$ $N$'s

For ${\lfloor x\rfloor}=4$, $N$ can be anything between $4^4$ to $5^4$ excluding $5^4$

This gives us $5^4-4^4=369$ $N$'s

Since $x$ must be less than $5$, we can stop here and the answer is $1+5+37+369= \boxed {412}$ possible values for $N$.


2009 AIME I Problems/Problem 7
Problem

The sequence $(a_n)$ satisfies $a_1 = 1$ and $5^{(a_{n + 1} - a_n)} - 1 = \frac {1}{n + \frac {2}{3}}$ for $n \geq 1$. Let $k$ be the least integer greater than $1$ for which $a_k$ is an integer. Find $k$.
Solution

The best way to solve this problem is to get the iterated part out of the exponent: $5^{(a_{n + 1} - a_n)} = \frac {1}{n + \frac {2}{3}} + 1$ $5^{(a_{n + 1} - a_n)} = \frac {n + \frac {5}{3}}{n + \frac {2}{3}}$ $5^{(a_{n + 1} - a_n)} = \frac {3n + 5}{3n + 2}$ $a_{n + 1} - a_n = \log_5{\left(\frac {3n + 5}{3n + 2}\right)}$ $a_{n + 1} - a_n = \log_5{(3n + 5)} - \log_5{(3n + 2)}$ Since $a_1 = 1 = \log_5{5} = \log_5{(3(1) + 2)}$, we can easily use induction to show that $a_n = \log_5{(3n + 2)}$. So now we only need to find the next value of $n$ that makes $\log_5{(3n + 2)}$ an integer. This means that $3n + 2$ must be a power of $5$. We test $25$: $3n + 2 = 25$ $3n = 23$ This has no integral solutions, so we try $125$: $3n + 2 = 125$ $3n = 123$ $n = \boxed{041}$


2009 AIME I Problems/Problem 8

Problem 8

Let $S = \{2^0,2^1,2^2,\ldots,2^{10}\}$. Consider all possible positive differences of pairs of elements of $S$. Let $N$ be the sum of all of these differences. Find the remainder when $N$ is divided by $1000$.
Solution
Solution 1

When computing $N$, the number $2^x$ will be added $x$ times (for terms $2^x-2^0$, $2^x-2^1$, ..., $2^x - 2^{x-1}$), and subtracted $10-x$ times. Hence $N$ can be computed as $N=10\cdot 2^{10} + 8\cdot 2^9 + 6\cdot 2^8 + \cdots - 8\cdot 2^1 - 10\cdot 2^0$.

We can now simply evaluate $N\bmod 1000$. One reasonably simple way: $\begin{align*} N & = 10(2^{10}-1) + 8(2^9 - 2^1) + 6(2^8-2^2) + 4(2^7-2^3) + 2(2^6-2^4) \\ & = 10(1023) + 8(510) + 6(252) + 4(120) + 2(48) \\ & = 10(1000+23) + 8(500+10) + 6(250+2) + 480 + 96 \\ & \equiv (0 + 230) + (0 + 80) + (500 + 12) + 480 + 96 \\ & \equiv \boxed{398} \end{align*}$
Solution 2

In this solution we show a more general approach that can be used even if $10$ were replaced by a larger value.

As in Solution 1, we show that $N = \sum_{x=0}^{10} (2x-10) 2^x$.

Let $A = \sum_{x=0}^{10} x2^x$ and let $B=\sum_{x=0}^{10} 2^x$. Then obviously $N=2A - 10B$.

Computing $B$ is easy, as this is simply a geometric series with sum $2^{11}-1 = 2047$. Hence $B\bmod 1000 = 47$.

We can compute $A$ using a trick known as the change of summation order.

Imagine writing down a table that has rows with labels 0 to 10. In row $x$, write the number $2^x$ into the first $x$ columns. You will get a triangular table. Obviously, the row sums of this table are of the form $x2^x$, and therefore the sum of all the numbers is precisely $A$.

Now consider the ten columns in this table. Let's label them 1 to 10. In column $x$, you have the values $2^x$ to $2^{10}$, each of them once. And this is just a geometric series with the sum $2^{11}-2^x$. We can now sum these column sums to get $A$. Hence we have $A = (2^{11}-2^1) + (2^{11}-2^2) + \cdots + (2^{11}-2^{10})$. This simplifies to $10\cdot 2^{11} - (2^1 + 2^2 + \cdots + 2^{10}) = 10\cdot 2^{11} - 2^{11} + 2$.

Hence $A = 10\cdot 2048 - 2048 + 2 \equiv 480 - 48 + 2 = 434 \mod{1000}$.

Then $N = 2A - 10B \equiv 2\cdot 434 - 10\cdot 47 = 868 - 470 = \boxed{398}$.
Solution 3

Consider the unique differences $2^{a + n} - 2^a$. Simple casework yields a sum of $\sum_{n = 1}^{10}(2^n - 1)(2^{11 - n} - 1) = \sum_{n = 1}^{10}2^{11} + 1 - 2^n - 2^{11 - n} = 10\cdot2^{11} + 10 - 2(2 + 2^2 + \cdots + 2^{10})$ $= 10\cdot2^{11} + 10 - 2^2(2^{10} - 1)\equiv480 + 10 - 4\cdot23\equiv\boxed{398}\mod{1000}$. This method generalizes nicely as well.


2009 AIME I Problems/Problem 9
Problem

A game show offers a contestant three prizes A, B and C, each of which is worth a whole number of dollars from $\$ 1$ to $\$ 9999$ inclusive. The contestant wins the prizes by correctly guessing the price of each prize in the order A, B, C. As a hint, the digits of the three prices are given. On a particular day, the digits given were $1, 1, 1, 1, 3, 3, 3$. Find the total number of possible guesses for all three prizes consistent with the hint.
Solution

Since we have three numbers, consider the number of ways we can put these three numbers together in a string of 7 digits. For example, if $A=113, B=13, C=31$, then the string is

$1131331.$

Since the strings have seven digits and three threes, there are $\binom{7}{3}=35$ arrangements of all such strings.

In order to obtain all combination of A,B,C, we partition all the possible strings into 3 groups.

Let's look at the example. We have to partition it into 3 groups with each group having at least 1 digit. In other words, we need to find the solution to

$x+y+z=7, x,y,z>0.$

This gives us

$\binom{6}{2}=15$

ways by balls and urns. But we have counted the one with 5 digit numbers; that is, $(5,1,1),(1,1,5),(1,5,1)$.

Thus, each arrangement has $\binom{6}{2}-3=12$ ways per arrangement, and there are $12\times35=\boxed{420}$ ways.


2009 AIME I Problems/Problem 10
Problem

The Annual Interplanetary Mathematics Examination (AIME) is written by a committee of five Martians, five Venusians, and five Earthlings. At meetings, committee members sit at a round table with chairs numbered from $1$ to $15$ in clockwise order. Committee rules state that a Martian must occupy chair $1$ and an Earthling must occupy chair $15$, Furthermore, no Earthling can sit immediately to the left of a Martian, no Martian can sit immediately to the left of a Venusian, and no Venusian can sit immediately to the left of an Earthling. The number of possible seating arrangements for the committee is $N(5!)^3$. Find $N$.
Solution

Since the 5 members of each plant committee are distinct we get that the number of arrangement of sittings is in the form $N*(5!)^3$ because for each M,V,E sequence we have $5!$ arrangements within the Ms, Vs, and Es.

Pretend the table only seats 3 "people", with 1 "person" from each planet. Counting clockwise, only the arrangement M, V, E satisfies the given constraints. Therefore, in the actual problem, the members must sit in cycles of M, V, E, but not necessarily with one M, one V, and one E in each cycle(for example, MMVVVE, MVVVEEE, MMMVVVEE all count as cycles). These cycles of MVE must start at seat 1, since a M is at seat 1. We simply count the number of arrangements through casework.

1. The entire arrangement is one cycle- There is only one way to arrange this, MMMMMVVVVVEEEEE

2. Two cycles - There are 3 Ms, Vs and Es left to distribute among the existing MVEMVE. Using sticks and stones(stars and bars), we get C(4,1)=4 ways for the members of each planet. Therefore, there are $4^3=64$ ways in total.

3. Three cycles - 2 Ms, Vs, Es left, so C(4,2)=6 and 216 ways total.

4. Four cycles - 1 M, V, E left, each M can go to any of the four MVE cycles and likewise for V and E, 64 ways total

5. Five cycles - MVEMVEMVEMVEMVE=1 way

Combining all these cases, we get $1+1+64+64+216= \boxed{346}$


2009 AIME I Problems/Problem 11

Problem

Consider the set of all triangles $OPQ$ where $O$ is the origin and $P$ and $Q$ are distinct points in the plane with nonnegative integer coordinates $(x,y)$ such that $41x + y = 2009$. Find the number of such distinct triangles whose area is a positive integer.
Solution 1

Let the two points $P$ and $Q$ be defined with coordinates; $P=(x_1,y_1)$ and $Q=(x_2,y_2)$

We can calculate the area of the parallelogram with the determinant of the matrix of the coordinates of the two points(shoelace theorem).

$\text{det} \left(\begin{array}{c} P \\ Q\end{array}\right)=\text{det} \left(\begin{array}{cc}x_1 &y_1\\x_2&y_2\end{array}\right).$

Since the triangle has half the area of the parallelogram, we just need the determinant to be even.

The determinant is

$(x_1)(y_2)-(x_2)(y_1)=(x_1)(2009-41(x_2))-(x_2)(2009-41(x_1))=2009(x_1)-41(x_1)(x_2)-2009(x_2)+41(x_1)(x_2)=2009((x_1)-(x_2))$

Since $2009$ is not even, $((x_1)-(x_2))$ must be even, thus the two $x$'s must be of the same parity. Also note that the maximum value for $x$ is $49$ and the minimum is $0$. There are $25$ even and $25$ odd numbers available for use as coordinates and thus there are $(_{25}C_2)+(_{25}C_2)=\boxed{600}$ such triangles.
Solution 2

As in the solution above, let the two points $P$ and $Q$ be defined with coordinates; $P=(x_1,y_1)$ and $Q=(x_2,y_2)$.


If the coordinates of $P$ and $Q$ have nonnegative integer coordinates, $P$ and $Q$ must be lattice points either

on the nonnegative x-axis

on the nonnegative y-axis

in the first quadrant

We can calculate the y-intercept of the line $41x+y=2009$ to be $(0,2009)$ and the x-intercept to be $(49,0)$.

Using the point-to-line distance formula, we can calculate the height of $\triangle OPQ$ from vertex $O$ (the origin) to be:

$\frac{|41(0) + 1(0) - 2009|}{\sqrt{41^2 + 1^2}} = \frac{2009}{\sqrt{1682}} = \frac{2009}{29\sqrt2}$

Let $b$ be the base of the triangle that is part of the line $41x+y=2009$.

The area is calculated as: $\frac{1}{2}\times b \times \frac{2009}{29\sqrt2} = \frac{2009}{58\sqrt2}\times b$

Let the numerical area of the triangle be $k$.

So, $k = \frac{2009}{58\sqrt2}\times b$

We know that $k$ is an integer. So, $b = 58\sqrt2 \times z$, where $z$ is also an integer.

We defined the points $P$ and $Q$ as $P=(x_1,y_1)$ and $Q=(x_2,y_2)$.

Changing the y-coordinates to be in terms of x, we get:

$P=(x_1,2009-41x_1)$ and $Q=(x_2,2009-41x_2)$.

The distance between them equals $b$.

Using the distance formula, we get

$PQ = b = \sqrt{(-41x_2+ 41x_1)^2 + (x_2 - x_1)^2} = 29\sqrt2 \times |x_2 - x_1| = 58\sqrt2\times z$ $(*)$

WLOG, we can assume that $x_2 > x_1$.

Taking the last two equalities from the $(*)$ string of equalities and putting in our assumption that $x_2>x_1$, we get

$29\sqrt2\times (x_2-x_1) = 58\sqrt2\times z$.

Dividing both sides by $29\sqrt2$, we get

$x_2-x_1 = 2z$

As we mentioned, $z$ is an integer, so $x_2-x_1$ is an even integer. Also, $x_2$ and $x_1$ are both positive integers. So, $x_2$ and $x_1$ are between 0 and 49, inclusive. Remember, $x_2>x_1$ as well.

There are 48 ordered pairs $(x_2,x_1)$ such that their positive difference is 2.

There are 46 ordered pairs $(x_2,x_1)$ such that their positive difference is 4.

...

Finally, there are 2 ordered pairs $(x_2,x_1)$ such that their positive difference is 48.

Summing them up, we get that there are $2+4+\dots + 48 = \boxed{600}$ triangles.
Solution 3

We present a non-analytic solution; consider the lattice points on the line $41x+y=2009$. The line has intercepts $(0, 2009)$ and $(49, 0)$, so the lattice points for $x=0, 1, \ldots, 49$ divide the line into $49$ equal segments. Call the area of the large triangle $A$. Any triangle formed with the origin having a base of one of these segments has area $A/49$ (call this value $B$) because the height is the same as that of large triangle, and the bases are in the ratio $1:49$. A segment comprised of $n$ small segments (all adjacent to each other) will have area $nB$. Rewriting in terms of the original area, $A=(\frac{1}{2})(49)(2009)$, $B=\frac{2009}{2}$, and $nB=n(\frac{2009}{2})$. It is clear that in order to have a nonnegative integer for $nB$ as desired, $n$ must be even. This is equivalent to finding the number of ways to choose two distinct $x$-values $x_1$ and $x_2$ ($0 \leq x_1, x_2 \leq 49$) such that their positive difference ($n$) is even. Follow one of the previous methods above to choose these pairs and arrive at the answer of 600.


2009 AIME I Problems/Problem 12

Problem

In right $\triangle ABC$ with hypotenuse $\overline{AB}$, $AC = 12$, $BC = 35$, and $\overline{CD}$ is the altitude to $\overline{AB}$. Let $\omega$ be the circle having $\overline{CD}$ as a diameter. Let $I$ be a point outside $\triangle ABC$ such that $\overline{AI}$ and $\overline{BI}$ are both tangent to circle $\omega$. The ratio of the perimeter of $\triangle ABI$ to the length $AB$ can be expressed in the form $\frac {m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m + n$.


Solution 1

Let $O$ be center of the circle and $P$,$Q$ be the two points of tangent such that $P$ is on $BI$ and $Q$ is on $AI$. We know that $AD:CD = CD:BD = 12:35$.

Since the ratios between corresponding lengths of two similar diagrams are equal, we can let $AD = 144, CD = 420$ and $BD = 1225$. Hence $AQ = 144, BP = 1225, AB = 1369$ and the radius $r = OD = 210$.

Since we have $\tan OAB = \frac {35}{24}$ and $\tan OBA = \frac{6}{35}$ , we have $\sin {(OAB + OBA)} = \frac {1369}{\sqrt {(1801*1261)}},$$\cos {(OAB + OBA)} = \frac {630}{\sqrt {(1801*1261)}}$.

Hence $\sin I = \sin {(2OAB + 2OBA)} = \frac {2*1369*630}{1801*1261}$. let $IP = IQ = x$ , then we have Area$(IBC)$ = $(2x + 1225*2 + 144*2)*\frac {210}{2}$ = $(x + 144)(x + 1225)* \sin {\frac {I}{2}}$. Then we get $x + 1369 = \frac {3*1369*(x + 144)(x + 1225)}{1801*1261}$.

Now the equation looks very complex but we can take a guess here. Assume that $x$ is a rational number (If it's not then the answer to the problem would be irrational which can't be in the form of $\frac {m}{n}$) that can be expressed as $\frac {a}{b}$ such that $(a,b) = 1$. Look at both sides; we can know that $a$ has to be a multiple of $1369$ and not of $3$ and it's reasonable to think that $b$ is divisible by $3$ so that we can cancel out the $3$ on the right side of the equation.

Let's see if $x = \frac {1369}{3}$ fits. Since $\frac {1369}{3} + 1369 = \frac {4*1369}{3}$, and $\frac {3*1369*(x + 144)(x + 1225)}{1801*1261} = \frac {3*1369* \frac {1801}{3} * \frac {1261*4}{3}} {1801*1261} = \frac {4*1369}{3}$. Amazingly it fits!

Since we know that $3*1369*144*1225 - 1369*1801*1261 < 0$, the other solution of this equation is negative which can be ignored. Hence $x = 1369/3$.

Hence the perimeter is $1225*2 + 144*2 + \frac {1369}{3} *2 = 1369* \frac {8}{3}$, and $BC$ is $1369$. Hence $\frac {m}{n} = \frac {8}{3}$, $m + n = 11$.
Solution 2

As in Solution $1$, let $P$ and $Q$ be the intersections of $\omega$ with $BI$ and $AI$ respectively.

First, by pythagorean theorem, $AB = \sqrt{12^2+35^2} = 37$. Now the area of $ABC$ is $1/2*12*35 = 1/2*37*CD$, so $CD=\frac{420}{37}$ and the inradius of $\triangle ABI$ is $r=\frac{210}{37}$.

Now from $\triangle CDB \sim \triangle ACB$ we find that $\frac{BC}{BD} = \frac{AB}{BC}$ so $BD = BC^2/AB = 35^2/37$ and similarly, $AD = 12^2/37$.

Note $IP=IQ=x$, $BP=BD$, and $AQ=AD$. So we have $AI = 144/37+x$, $BI = 1225/37+x$. Now we can compute the area of $\triangle ABI$ in two ways: by heron's formula and by inradius times semiperimeter, which yields

$rs=210/37(37+x) = \sqrt{(37+x)(37-144/37)(37-1225/37)x}$

$210/37(37+x) = 12*35/37 \sqrt{x(37+x)}$

$37+x = 2 \sqrt{x(x+37)}$

$x^2+74x+1369 = 4x^2 + 148x$

$3x^2 + 74x - 1369 = 0$

The quadratic formula now yields $x=37/3$. Plugging this back in, the perimeter of $ABI$ is $2s=2(37+x)=2(37+37/3) = 37(8/3)$ so the ratio of the perimeter to $AB$ is $8/3$ and our answer is $8+3=\boxed{011}$
Solution 3

As in Solution $2$, let $P$ and $Q$ be the intersections of $\omega$ with $BI$ and $AI$ respectively.

Recall that the distance from a point outside a circle to that circle is the same along both tangent lines to the circle drawn from the point.

Recall also that the length of the altitude to the hypotenuse of a right-angle triangle is the geometric mean of the two segments into which it cuts the hypotenuse.

Let $x = \overline{AD} = \overline{AQ}$. Let $y = \overline{BD} = \overline{BP}$. Let $z = \overline{PI} = \overline{QI}$. The semi-perimeter of $ABI$ is $x + y + z$. Since the lengths of the sides of $ABI$ are $x + y$, $y + z$ and $x + z$, the square of its area by Heron's formula is $(x+y+z)xyz$.

The radius $r$ of $\omega$ is $\overline{CD}/2$. Therefore $r^2 = xy/4$. As $\omega$ is the in-circle of $ABI$, the area of $ABI$ is also $r(x+y+z)$, and so the square area is $r^2(x+y+z)^2$.

Therefore $(x+y+z)xyz = r^2(x+y+z)^2 = \frac{xy(x+y+z)^2}{4}$ Dividing both sides by $xy(x+y+z)/4$ we get: $4z = (x+y+z),$ and so $z = (x+y)/3$. The semi-perimeter of $ABI$ is therefore $\frac{4}{3}(x+y)$ and the whole perimeter is $\frac{8}{3}(x+y)$. Now $x + y = \overline{AB}$, so the ratio of the perimeter of $ABI$ to the hypotenuse $\overline{AB}$ is $8/3$ and our answer is $8+3=\boxed{011}$
Solution 4

We shall yet again let $P$ and $Q$ be the intersections of $AI$ and $BI$ to $\omega$, respectively. We want to find the perimeter of $ABI$, which is $AD+BD+BQ+QI+IP+PA$. We can easily find $AD$ and $BD$ using the fact that $ABC$, $ACD$, and $BCD$ are all similar triangles. We get $AD=\frac{144}{37}$ and $\frac{1225}{37}$. Since $AP$ and $AD$ are tangents to $\omega$, $AP=AD=\frac{144}{37}$, and similarly $BQ=BD=\frac{1225}{37}$. We now wish to find $IP$ and $IQ$.

Let the center of the given circle be $O$. We know that $\angle AOP=\angle AOD$, $\angle BOQ=\angle BOD$, and $\angle IOQ=\angle IOP$. Since all six angles sum to $360^{\circ}$, $\angle AOP+\angle BOQ+\angle IOP=180^{\circ}$. If we knew the radius of circle $\omega$ now, then we could find $\tan{\angle AOP}$ and $\tan{\angle BOQ}$, and then we can use the sum (or difference) of tangents formula to find $\tan{\angle IOP}$, which reveals $IP$. This means we should find the radius of $\omega$. We can easily see that the height of triangle $ABC$ from $C$ has length $\frac{12*35}{37}$, so the radius of $\omega$ is $\frac{210}{37}$. Now we shall proceed with the above plan.

$\tan{\angle AOP}=\frac{144}{210}$. $\tan{\angle BOQ}=\frac{1225}{210}$.

$\tan{\angle IOP}=\tan{(180^{\circ}-\angle AOP-\angle BOQ)}=-\tan{(\angle AOP+\angle BOQ)}$

$=-\frac{\frac{144}{210}+\frac{1225}{210}}{1-\frac{144}{210}*\frac{1225}{210}}=-\frac{1369}{210-\frac{144*1225}{210}}=\frac{1369}{\frac{144*1225}{210}-210}=\frac{37*37}{35*18}$.

Therefore $IP=\frac{210}{37}\tan{\angle IOP}=\frac{37}{3}$, and the perimeter of $AIB$ is $2*\frac{37}{3}+2*\frac{144}{37}+2*\frac{1225}{37}=37*\frac{8}{3}$. Since $AB=37$, the desired ratio is $\frac{8}{3}$, and $8+3=\boxed{011}$.


2009 AIME I Problems/Problem 13

Problem

The terms of the sequence $(a_i)$ defined by $a_{n + 2} = \frac {a_n + 2009} {1 + a_{n + 1}}$ for $n \ge 1$ are positive integers. Find the minimum possible value of $a_1 + a_2$.
Solution
Solution 1

This question is guessable but let's prove our answer

$a_{n + 2} = \frac {a_n + 2009} {1 + a_{n + 1}}$


$a_{n + 2}(1 + a_{n + 1})= a_n + 2009$


$a_{n + 2}+a_{n + 2} a_{n + 1}-a_n= 2009$


let put $n+1$ into $n$ now


$a_{n + 3}+a_{n + 3} a_{n + 2}-a_{n+1}= 2009$


and set them equal now


$a_{n + 3}+a_{n + 3} a_{n + 2}-a_{n+1}= a_{n + 2}+a_{n + 2} a_{n + 1}-a_n$


$a_{n + 3}-a_{n+1}+a_{n + 3} a_{n + 2}-a_{n + 2} a_{n + 1}= a_{n + 2}-a_n$


let's rewrite it


$(a_{n + 3}-a_{n+1})(a_{n + 2}+1)= a_{n + 2}-a_n$


Let's make it look nice and let $b_n=a_{n + 2}-a_n$


$(b_{n+1})(a_{n + 2}+1)= b_n$


Since $b_n$ and $b_{n+1}$ are integers, we can see $b_n$ is divisible by $b_{n+1}$


But we can't have an infinite sequence of proper factors, unless $b_n=0$


Thus, $a_{n + 2}-a_n=0$


$a_{n + 2}=a_n$


So now, we know $a_3=a_1$


$a_{3} = \frac {a_1 + 2009} {1 + a_{2}}$


$a_{1} = \frac {a_1 + 2009} {1 + a_{2}}$


$a_{1}+a_{1}a_{2} = a_1 + 2009$


$a_{1}a_{2} = 2009$


To minimize $a_{1}+a_{2}$, we need $41$ and $49$


Thus, our answer $= 41+49=\boxed {090}$
Solution 2

If $a_{n} \ne \frac {2009}{a_{n+1}}$, then either $a_{n} = \frac {a_{n}}{1} < \frac {a_{n} + 2009}{1 + a_{n+1}} < \frac {2009}{a_{n+1}}$

or

$\frac {2009}{a_{n+1}} < \frac {2009 + a_{n}}{a_{n+1} + 1} < \frac {a_{n}}{1} = a_{n}$

All the integers between $a_{n}$ and $\frac {2009}{a_{n+1}}$ would be included in the sequence. However the sequence is infinite, so eventually there will be a non-integral term.

So $a_{n} = \frac {2009}{a_{n+1}}$, which $a_{n} \cdot a_{n+1} = 2009$. When $n = 1$, $a_{1} \cdot a_{2} = 2009$. The smallest sum of two factors which have a product of $2009$ is $41 + 49=\boxed {090}$


2009 AIME I Problems/Problem 14
Problem

For $t = 1, 2, 3, 4$, define $S_t = \sum_{i = 1}^{350}a_i^t$, where $a_i \in \{1,2,3,4\}$. If $S_1 = 513$ and $S_4 = 4745$, find the minimum possible value for $S_2$.
Solution

Because the order of the $a$'s doesn't matter, we simply need to find the number of $1$s $2$s $3$s and $4$s that minimize $S_2$. So let $w, x, y,$ and $z$ represent the number of $1$s, $2$s, $3$s, and $4$s respectively. Then we can write three equations based on these variables. Since there are a total of $350$ $a$s, we know that $w + x + y + z = 350$. We also know that $w + 2x + 3y + 4z = 513$ and $w + 16x + 81y + 256z = 4745$. We can now solve these down to two variables: $w = 350 - x - y - z$ Substituting this into the second and third equations, we get $x + 2y + 3z = 163$ and $15x + 80y + 255z = 4395.$ The second of these can be reduced to $3x + 16y + 51z = 879.$ Now we substitute $x$ from the first new equation into the other new equation. $x = 163 - 2y - 3z$ $3(163 - 2y - 3z) + 16y + 51z = 879$ $489 + 10y + 42z = 879$ $5y + 21z = 195$ Since $y$ and $z$ are integers, the two solutions to this are $(y,z) = (39,0)$ or $(18,5)$. If you plug both these solutions in to $S_2$ it is apparent that the second one returns a smaller value. It turns out that $w = 215$, $x = 112$, $y = 18$, and $z = 5$, so $S_2 = 215 + 4*112 + 9*18 + 16*5 = 215 + 448 + 162 + 80 = \boxed{905}$.


2009 AIME I Problems/Problem 15
Problem

In triangle $ABC$, $AB = 10$, $BC = 14$, and $CA = 16$. Let $D$ be a point in the interior of $\overline{BC}$. Let $I_B$ and $I_C$ denote the incenters of triangles $ABD$ and $ACD$, respectively. The circumcircles of triangles $BI_BD$ and $CI_CD$ meet at distinct points $P$ and $D$. The maximum possible area of $\triangle BPC$ can be expressed in the form $a - b\sqrt {c}$, where $a$, $b$, and $c$ are positive integers and $c$ is not divisible by the square of any prime. Find $a + b + c$.
Solution

First, by Law of Cosines, we have $\cos BAC = \frac {16^2 + 10^2 - 14^2}{2\cdot 10 \cdot 16} = \frac {256+100-196}{320} = \frac {1}{2},$ so $\angle BAC = 60^\circ$.

Let $O_1$ and $O_2$ be the circumcenters of triangles $BI_BD$ and $CI_CD$, respectively. We first compute $\angle BO_1D = \angle BO_1I_B + \angle I_BO_1D = 2\angle BDI_B + 2\angle I_BBD.$ Because $\angle BDI_B$ and $\angle I_BBD$ are half of $\angle BDA$ and $\angle ABD$, respectively, the above expression can be simplified to $\angle BO_1D = \angle BO_1I_B + \angle I_BO_1D = 2\angle BDI_B + 2\angle I_BBD = \angle ABD + \angle BDA.$ Similarly, $\angle CO_2D = \angle ACD + \angle CDA$. As a result 

$\begin{align*}\angle CPB &= \angle CPD + \angle BPD \\&= \frac {1}{2} \cdot \angle CO_2D + \frac {1}{2} \cdot \angle BO_1D \\&= \frac {1}{2}(\angle ABD + \angle BDA + \angle ACD + \angle CDA) \\&= \frac {1}{2} (2 \cdot 180^\circ - \angle BAC) \\&= \frac {1}{2} \cdot 300^\circ = 150^\circ.\end{align*}$

Therefore $\angle CPB​$ is constant ($150^\circ​$). Also, $P​$ is $B​$ or $C​$ when $D​$ is $B​$ or $C​$. Let point $L​$ be on the same side of $\overline{BC}​$ as $A​$ with $\overline{LC} = \overline{LB} = \overline {BC} = 14​$; $P​$ is on the circle with $L​$ as the center and $\overline{LC}​$ as the radius, which is $14​$. The shortest distance from $L​$ to $\overline{BC}​$ is $7\sqrt {3}​$.

When the area of $\triangle BPC$ is the maximum, the distance from $P$ to $\overline{BC}$ has to be the greatest. In this case, it's $14 - 7\sqrt {3}$. The maximum area of $\triangle BPC$ is $\frac {1}{2} \cdot 14 \cdot (14 - 7\sqrt {3}) = 98 - 49 \sqrt {3}$ and the requested answer is $98 + 49 + 3 = \boxed{150}$.


2009 AIME I Answer Key

Return to 2009 AIME I (2009 AIME I Problems)

1.	840
    2.697
    3.011
    4.177
    5.072
    6.412
    7.041
    8.398
    9.420
    10.346
    11.600
    12.011
    13.090
    14.905
    15.150

