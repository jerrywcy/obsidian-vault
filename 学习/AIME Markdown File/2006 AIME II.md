# 2006 AIME II

Problem 1

In convex hexagon $ABCDEF$, all six sides are congruent, $\angle A$ and $\angle D$ are right angles, and $\angle B, \angle C, \angle E,$ and $\angle F$ are congruent. The area of the hexagonal region is $2116(\sqrt{2}+1).$ Find $AB$.
Solution

Let the side length be called $x$, so $x=AB=BC=CD=DE=EF=AF$.

<div align="center"><img src="http://wiki-images.artofproblemsolving.com/8/89/2006_II_AIME-1.png" height="150px" /></div>

The diagonal $BF=\sqrt{AB^2+AF^2}=\sqrt{x^2+x^2}=x\sqrt{2}$. Then the areas of the triangles AFB and CDE in total are $\frac{x^2}{2}\cdot 2$, and the area of the rectangle BCEF equals $x\cdot x\sqrt{2}=x^2\sqrt{2}$

Then we have to solve the equation

$2116(\sqrt{2}+1)=x^2\sqrt{2}+x^2$.

$2116(\sqrt{2}+1)=x^2(\sqrt{2}+1)$

$2116=x^2$
$x=46$

Therefore, $AB$ is $\boxed{046}$.
Solution 2

Because $\angle B$, $\angle C$, $\angle E$, and $\angle F$ are congruent, the degree-measure of each of them is ${{720-2\cdot90}\over4}= 135$. Lines $BF$ and $CE$ divide the hexagonal region into two right triangles and a rectangle. Let $AB=x$. Then $BF=x\sqrt2$. Thus $\begin{align*} 2116(\sqrt2+1)&=[ABCDEF]\\ &=2\cdot {1\over2}x^2+x\cdot x\sqrt2=x^2(1+\sqrt2), \end{align*}$

so $x^2=2116$, and $x=\boxed{46}$.


2006 AIME II Problem 2
Problem

The lengths of the sides of a triangle with positive area are $\log_{10} 12$, $\log_{10} 75$, and $\log_{10} n$, where $n$ is a positive integer. Find the number of possible values for $n$.
Solution

By the Triangle Inequality:

$\log_{10} 12 + \log_{10} n > \log_{10} 75$

$\log_{10} 12n > \log_{10} 75$

$12n > 75$

$n > \frac{75}{12} = \frac{25}{4} = 6.25$

Also:

$\log_{10} 12 + \log_{10} 75 > \log_{10} n$

$\log_{10} 12\cdot75 > \log_{10} n$

$n < 900$

Combining these two inequalities:

$6.25 < n < 900$

The number of possible integer values for $n$ is the number of integers over the interval $(6.25 , 900)$, which is $893$.


2006 AIME II Problem 3

Problem

Let $P$ be the product of the first $100$ positive odd integers. Find the largest integer $k$ such that $P$ is divisible by $3^k .$
Solution

Note that the product of the first $100$ positive odd integers can be written as $1\cdot 3\cdot 5\cdot 7\cdots 195\cdot 197\cdot 199=\frac{1\cdot 2\cdots200}{2\cdot4\cdots200} = \frac{200!}{2^{100}\cdot 100!}$

Hence, we seek the number of threes in $200!$ decreased by the number of threes in $100!.$

There are

$\left\lfloor \frac{200}{3}\right\rfloor+\left\lfloor\frac{200}{9}\right\rfloor+\left\lfloor \frac{200}{27}\right\rfloor+\left\lfloor\frac{200}{81}\right\rfloor =66+22+7+2=97$

threes in $200!$ and

$\left\lfloor \frac{100}{3}\right\rfloor+\left\lfloor\frac{100}{9}\right\rfloor+\left\lfloor \frac{100}{27}\right\rfloor+\left\lfloor\frac{100}{81}\right\rfloor=33+11+3+1=48$

threes in $100!$

Therefore, we have a total of $97-48=049$ threes.

For more information, see also prime factorizations of a factorial.


Solution Two

We count the multiples of $3^k$ below 200 and subtract the count of multiples of $2\cdot 3^k$:

$\left\lfloor \frac{200}{3}\right\rfloor - \left\lfloor \frac{200}{6}\right\rfloor +\left\lfloor\frac{200}{9}\right\rfloor - \left\lfloor \frac{200}{18}\right\rfloor +\left\lfloor \frac{200}{27}\right\rfloor - \left\lfloor \frac{200}{54}\right\rfloor+\left\lfloor\frac{200}{81}\right\rfloor - \left\lfloor \frac{200}{162}\right\rfloor$ $= 66 - 33 + 22 - 11 + 7 - 3 + 2 - 1 = 49.$


2006 AIME II Problem 4
Problem

Let $(a_1,a_2,a_3,\ldots,a_{12})$ be a permutation of $(1,2,3,\ldots,12)$ for which
$a_1>a_2>a_3>a_4>a_5>a_6 \mathrm{\ and \ } a_6<a_7<a_8<a_9<a_{10}<a_{11}<a_{12}.$

An example of such a permutation is $(6,5,4,3,2,1,7,8,9,10,11,12).$ Find the number of such permutations.
Solution

Clearly, $a_6=1$. Now, consider selecting $5$ of the remaining $11$ values. Sort these values in descending order, and sort the other $6$ values in ascending order. Now, let the $5$ selected values be $a_1$ through $a_5$, and let the remaining $6$ be $a_7$ through ${a_{12}}$. It is now clear that there is a bijection between the number of ways to select $5$ values from $11$ and ordered 12-tuples $(a_1,\ldots,a_{12})$. Thus, there will be ${11 \choose 5}=462$ such ordered 12-tuples.


2006 AIME II Problem 5

Problem

When rolling a certain unfair six-sided die with faces numbered 1, 2, 3, 4, 5, and 6, the probability of obtaining face $F$ is greater than $1/6$, the probability of obtaining the face opposite is less than $1/6$, the probability of obtaining any one of the other four faces is $1/6$, and the sum of the numbers on opposite faces is 7. When two such dice are rolled, the probability of obtaining a sum of 7 is $47/288$. Given that the probability of obtaining face $F$ is $m/n,$ where $m$ and $n$ are relatively prime positive integers, find $m+n.$
Solution 1

Without loss of generality, assume that face $F$ has a 6, so the opposite face has a 1. Let $A(n)$ be the probability of rolling a number $n$ on one die and let $B(n)$ be the probability of rolling a number $n$ on the other die. 7 can be obtained by rolling a 2 and 5, 5 and 2, 3 and 4, or 4 and 3. Each has a probability of $\frac{1}{6} \cdot \frac{1}{6} = \frac{1}{36}$, totaling $4 \cdot \frac{1}{36} = \frac{1}{9}$. Subtracting all these probabilities from $\frac{47}{288}$ leaves $\frac{15}{288}=\frac{5}{96}$ chance of getting a 1 on die $A$ and a 6 on die $B$ or a 6 on die $A$ and a 1 on die $B$:

$A(6)\cdot B(1)+B(6)\cdot A(1)=\frac{5}{96}$

Since the two dice are identical, $B(1)=A(1)$ and $B(6)=A(6)$ so

$\begin{align*}A(1)\cdot A(6)+A(1)\cdot A(6)&=\frac{5}{96}\\ A(1)\cdot A(6)&=\frac{5}{192}\end{align*}$

Also, we know that $A(2)=A(3)=A(4)=A(5)=\frac{1}{6}$ 

and that the total probability must be $1$, so:

$A(1)+4 \cdot \frac{1}{6}+A(6)=\frac{6}{6} \Longrightarrow A(1)+A(6)=\frac{1}{3}$

Combining the equations:

$\begin{align*}A(6)\left(\frac{1}{3}-A(6)\right)&=\frac{5}{192}\\ 0 &= 192 \left(A(6)\right)^2 - 64 \left(A(6)\right) + 5\\ A(6)&=\frac{64\pm\sqrt{64^2 - 4 \cdot 5 \cdot 192}}{2\cdot192} =\frac{5}{24}, \frac{1}{8}\end{align*}$ 

We know that $A(6)>\frac{1}{6}$, so it can't be $\frac{1}{8}$. Therefore, the probability is $\frac{5}{24}$ and the answer is $5+24=\boxed{029}$.

Note also that the initial assumption that face $F$ was the face labelled 6 is unnecessary -- we would have carried out exactly the same steps and found exactly the same probability no matter which face it was. We could have labelled $A(6)$ as $p$, for example, and replaced the others with variables too, but the notation would have been harder to follow.
Solution 2

We have that the cube probabilities to land on its faces are $\frac{1}{6}$, $\frac{1}{6}$, $\frac{1}{6}$, $\frac{1}{6}$ ,$\frac{1}{6}+x$ ,$\frac{1}{6}-x$ we also know that the sum could be 7 only when the faces in each of the two tosses are opposite hence the probability to get a 7 is: $4*((\frac{1}{6})^2)+2(\frac{1}{6}+x)(\frac{1}{6}-x)=\frac{47}{288}$ multiplying by 288 we get: $32+16(6x-1)(6x+1)=47 \Longrightarrow 16(1-36x^2)=15$ dividing by 16 and rearranging we get: $\frac{1}{16}=36x^2 \longrightarrow x=\frac{1}{24}$ so the probability F which is greater than $\frac{1}{6}$ is equal $\frac{1}{6}+\frac{1}{24}=\frac{5}{24}\longrightarrow 24+5=\boxed{029}$


2006 AIME II Problem 6

Problem

Square $ABCD$ has sides of length 1. Points $E$ and $F$ are on $\overline{BC}$ and $\overline{CD},$ respectively, so that $\triangle AEF$ is equilateral. A square with vertex $B$ has sides that are parallel to those of $ABCD$ and a vertex on $\overline{AE}.$ The length of a side of this smaller square is $\frac{a-\sqrt{b}}{c},$ where $a, b,$ and $c$ are positive integers and $b$ is not divisible by the square of any prime. Find $a+b+c.$
Solution 1

<div align="center"><img src="http://latex.artofproblemsolving.com/f/f/d/ffd7cfe7abb8965aaa343e619177c5c073a82b6c.png" height="150px" /></div>

Call the vertices of the new square A', B', C', and D', in relation to the vertices of $ABCD$, and define $s$ to be one of the sides of that square. Since the sides are parallel, by corresponding angles and AA~ we know that triangles $AA'D'$ and $D'C'E$ are similar. Thus, the sides are proportional: $\frac{AA'}{A'D'} = \frac{D'C'}{C'E} \Longrightarrow \frac{1 - s}{s} = \frac{s}{1 - s - CE}$. Simplifying, we get that $s^2 = (1 - s)(1 - s - CE)$.

$\angle EAF$ is $60$ degrees, so $\angle BAE = \frac{90 - 60}{2} = 15$. Thus, $\cos 15 = \cos (45 - 30) = \frac{\sqrt{6} + \sqrt{2}}{4} = \frac{1}{AE}$, so $AE = \frac{4}{\sqrt{6} + \sqrt{2}} \cdot \frac{\sqrt{6} - \sqrt{2}}{\sqrt{6} - \sqrt{2}} = \sqrt{6} - \sqrt{2}$. Since $\triangle AEF$ is equilateral, $EF = AE = \sqrt{6} - \sqrt{2}$. $\triangle CEF$ is a $45-45-90 \triangle$, so $CE = \frac{AE}{\sqrt{2}} = \sqrt{3} - 1$. Substituting back into the equation from the beginning, we get $s^2 = (1 - s)(2 - \sqrt{3} - s)$, so $(3 - \sqrt{3})s = 2 - \sqrt{3}$. Therefore, $s = \frac{2 - \sqrt{3}}{3 - \sqrt{3}} \cdot \frac{3 + \sqrt{3}}{3 + \sqrt{3}} = \frac{3 - \sqrt{3}}{6}$, and $a + b + c = 3 + 3 + 6 = 012$.

Here's an alternative geometric way to calculate $AE$ (as opposed to trigonometric): The diagonal $\overline{AC}$ is made of the altitude of the equilateral triangle and the altitude of the $45-45-90 \triangle$. The former is $\frac{AE\sqrt{3}}{2}$, and the latter is $\frac{AE}{2}$; thus $\frac{AE\sqrt{3} + AE}{2} = AC = \sqrt{2} \Longrightarrow AE= \sqrt{6}-\sqrt{2}$. The solution continues as above.
Solution 2

Since $\triangle AFE$ is equilateral, $\overline{AE} = \overline{AF}$. It follows that $\overline{FC} = \overline{EC}$. Let $\overline{FC} = x$. Then, $\overline{EF} = x\sqrt{2}$ and $\overline{DF} = 1-x$.

$\overline{AF} = \sqrt{1+(1-x)^2} = x\sqrt{2}$.

Square both sides and combine/move terms to get $x^2+2x-2 = 0$. Therefore $x = -1 + \sqrt{3}$ and $x = -1 - \sqrt{3}$. The second solution is obviously extraneous, so $x = -1 + \sqrt{3}$.

Now, consider the square ABCD to be on the Cartesian Coordinate Plane with $A = (0,0)$. Then, the line containing $\overline{AF}$ has slope $\frac{1}{2-\sqrt{3}}$ and equation $y = \frac{1}{2-\sqrt{3}}x$.

The distance from $\overline{DC}$ to $\overline{AF}$ is the distance from $y = 1$ to $y = \frac{1}{2-\sqrt{3}}x$.

Similarly, the distance from $\overline{AD}$ to $\overline{AF}$ is the distance from $x = 0$ to $y = \frac{1}{2-\sqrt{3}}x$.

For some value $x = s$, these two distances are equal.

$(s-0) = (1 - (\frac{1}{2-\sqrt{3}})s)$

Solving for s, $s = \frac{3 - \sqrt{3}}{6}$, and $a + b + c = 3 + 3 + 6 = 012$.




2006 AIME II Problem 7
Problem

Find the number of ordered pairs of positive integers $(a,b)$ such that $a+b=1000$ and neither $a$ nor $b$ has a zero digit.

Solution
Solution 1

There are $\left\lfloor\frac{999}{10}\right\rfloor = 99$ numbers up to 1000 that have 0 as their units digit. All of the other excluded possibilities are when $a$ or $b$ have a 0 in the tens digit, and since the equation is symmetric, we will just count when $a$ has a 0 in the tens digit and multiply by 2 (notice that the only time both $a$ and $b$ can have a 0 in the tens digit is when they are divisible by 100, which falls into the above category, so we do not have to worry about overcounting).

Excluding the numbers divisible by 100, which were counted already, there are $9$ numbers in every hundred numbers that have a tens digit of 0 (this is true from 100 to 900), totaling $9 \cdot 9 = 81$ such numbers; considering $b$ also and we have $81 \cdot 2 = 162$. Therefore, there are $999 - (99 + 162) = \boxed{738}$ such ordered pairs.
Solution 2

Let $a = \overline{cde}$ and $b = \overline{fgh}$ be 3 digit numbers:

     cde
    +fgh
    ----
    1000

$e$ and $h$ must add up to $10$, $d$ and $g$ must add up to $9$, and $c$ and $f$ must add up to $9$. Since none of the digits can be 0, there are $9 \times 8 \times 8=576$ possibilites if both numbers are three digits.

There are two other scenarios. $a$ and $b$ can be a three digit number and a two digit number, or a three digit number and a one digit number. For the first scenario, there are $9 \times 8 \times 2=144$ possibilities (the two accounting for whether $a$ or $b$ has three digits) and for the second case there are $9 \times 2=18$ possibilities. Thus, thus total possibilities for $(a,b)$ is $576+144+18=738$.


Solution 3

We first must notice that we can find all the possible values of $a$ between $1$ and $500$ and then double that result.

When $1 < a < 100$ there are $9\times9 = 81$ possible solution for $a$ so that neither $a$ nor $b$ has a zero in it, counting $1$ through $9$, $11$ through $19$, ..., $81$ through $89$. When $100 < a < 200$ there are $9\times8 =72$ possible solution for a so that neither a nor b has a zero in it, counting $111$ through $119$, $121$ through $129$, ..., $181$ through $189$. This can clearly be extended to $100k < a < 100(k+1)$ where $k$ is an integer and $0 <k < 9$. Thus for $100 < a < 500$ there are $72\times4$ = $288$ possible values of $a$.

Thus when $1 < a < 500$ there are $288 + 81 =369$ possible values of $a$ and $b$.

Doubling this yields $369\times2= 738$.


2006 AIME II Problem 8
Problem

There is an unlimited supply of congruent equilateral triangles made of colored paper. Each triangle is a solid color with the same color on both sides of the paper. A large equilateral triangle is constructed from four of these paper triangles. Two large triangles are considered distinguishable if it is not possible to place one on the other, using translations, rotations, and/or reflections, so that their corresponding small triangles are of the same color.

Given that there are six different colors of triangles from which to choose, how many distinguishable large equilateral triangles may be formed?

<div align="center"><img src="http://wiki-images.artofproblemsolving.com/b/b9/2006_II_AIME-8.png" height="150px" /></div>

Solution

If two of our big equilateral triangles have the same color for their center triangle and the same multiset of colors for their outer three triangles, we can carry one onto the other by a combination of rotation and reflection. Thus, to make two triangles distinct, they must differ either in their center triangle or in the collection of colors which make up their outer three triangles.

There are 6 possible colors for the center triangle.

There are ${6\choose3} = 20$ possible choices for the three outer triangles, if all three have different colors.
There are $6\cdot 5 = 30$ (or $2 {6\choose2}$) possible choices for the three outer triangles, if two are one color and the third is a different color.
There are ${6\choose1} = 6$ possible choices for the three outer triangles, if all three are the same color.

Thus, in total we have $6\cdot(20 + 30 + 6) = 336$ total possibilities.


2006 AIME II Problem 9
Problem

Circles $\mathcal{C}_1, \mathcal{C}_2,$ and $\mathcal{C}_3$ have their centers at (0,0), (12,0), and (24,0), and have radii 1, 2, and 4, respectively. Line $t_1$ is a common internal tangent to $\mathcal{C}_1$ and $\mathcal{C}_2$ and has a positive slope, and line $t_2$ is a common internal tangent to $\mathcal{C}_2$ and $\mathcal{C}_3$ and has a negative slope. Given that lines $t_1$ and $t_2$ intersect at $(x,y),$ and that $x=p-q\sqrt{r},$ where $p, q,$ and $r$ are positive integers and $r$ is not divisible by the square of any prime, find $p+q+r.$
Solution

<div align="center"><img src="http://wiki-images.artofproblemsolving.com/7/74/2006_II_AIME-9.png" height="150px" /></div>

Call the centers $O_1, O_2, O_3$, the points of tangency $r_1, r_2, s_1, s_2$ (with $r$ on $t_1$ and $s$ on $t_2$, and $s_2$ on $\mathcal{C}_2$), and the intersection of each common internal tangent to the X-axis $r, s$. $\triangle O_1r_1r \sim \triangle O_2r_2r$ since both triangles have a right angle and have vertical angles, and the same goes for $\triangle O_2s_2s \sim \triangle O_3s_1s$. By proportionality, we find that $O_1r = 4$; solving $\triangle O_1r_1r$ by the Pythagorean theorem yields $r_1r = \sqrt{15}$. On $\mathcal{C}_3$, we can do the same thing to get $O_3s_1 = 4$ and $s_1s = 4\sqrt{3}$.

The vertical altitude of each of $\triangle O_1r_1r$ and $\triangle O_3s_1s$ can each by found by the formula $c \cdot h = a \cdot b$ (as both products equal twice of the area of the triangle). Thus, the respective heights are $\frac{\sqrt{15}}{4}$ and $2\sqrt{3}$. The horizontal distance from each altitude to the intersection of the tangent with the x-axis can also be determined by the Pythagorean theorem: $\sqrt{15 - \frac{15}{16}} = \frac{15}{4}$, and by 30-60-90: $6$.

From this information, the slope of each tangent can be uncovered. The slope of $t_1 = \frac{\Delta y}{\Delta x} = \frac{\frac{\sqrt{15}}{4}}{\frac{15}{4}} = \frac{1}{\sqrt{15}}$. The slope of $t_2 = -\frac{2\sqrt{3}}{6} = -\frac{1}{\sqrt{3}}$.

The equation of $t_1$ can be found by substituting the point $r (4,0)$ into $y = \frac{1}{\sqrt{15}}x + b$, so $y = \frac{1}{\sqrt{15}}x - \frac{4}{\sqrt{15}}$. The equation of $t_2$, found by substituting point $s (16,0)$, is $y = \frac{-1}{\sqrt{3}}x + \frac{16}{\sqrt{3}}$. Putting these two equations together results in the desired $\frac{1}{\sqrt{15}}x - \frac{4}{\sqrt{15}} = -\frac{1}{\sqrt{3}}x + \frac{16}{\sqrt{3}}$ $\Longrightarrow x = \frac{16\sqrt{5} + 4}{\sqrt{5} + 1} \cdot \frac{\sqrt{5}-1}{\sqrt{5}-1}$ $= \frac{76 - 12\sqrt{5}}{4}$ $= 19 - 3\sqrt{5}$. Thus, $p + q + r = 19 + 3 + 5 \Longrightarrow \boxed{027}$.


2006 AIME II Problem 10
Problem

Seven teams play a soccer tournament in which each team plays every other team exactly once. No ties occur, each team has a $50\%$ chance of winning each game it plays, and the outcomes of the games are independent. In each game, the winner is awarded a point and the loser gets 0 points. The total points are accumilated to decide the ranks of the teams. In the first game of the tournament, team $A$ beats team $B.$ The probability that team $A$ finishes with more points than team $B$ is $m/n,$ where $m$ and $n$ are relatively prime positive integers. Find $m+n.$

Solution
Solution 1

The results of the five remaining games are independent of the first game, so by symmetry, the probability that $A$ scores higher than $B$ in these five games is equal to the probability that $B$ scores higher than $A$. We let this probability be $p$; then the probability that $A$ and $B$ end with the same score in these five games is $1-2p$.

Of these three cases ($|A| > |B|, |A| < |B|, |A|=|B|$), the last is the easiest to calculate (see solution 2 for a way to directly calculate the other cases).

There are ${5\choose k}$ ways to $A$ to have $k$ victories, and ${5\choose k}$ ways for $B$ to have $k$ victories. Summing for all values of $k$,
$1-2p = \frac{1}{2^{5} \times 2^{5}}\left(\sum_{k=0}^{5} {5\choose k}^2\right) = \frac{1^2+5^2+10^2+10^2+5^2+1^2}{1024} = \frac{126}{512}.$

Thus $p = \frac 12 \left(1-\frac{126}{512}\right) = \frac{193}{512}$. The desired probability is the sum of the cases when $|A| \ge |B|$, so the answer is $\frac{126}{512} + \frac{193}{512} = \frac{319}{512}$, and $m+n = \boxed{831}$.
Solution 2

You can break this into cases based on how many rounds $A$ wins out of the remaining $5$ games.

If $A$ wins 0 games, then $B$ must win 0 games and the probability of this is $\frac{{5 \choose 0}}{2^5} \frac{{5 \choose 0}}{2^5} = \frac{1}{1024}$.

If $A$ wins 1 games, then $B$ must win 1 or less games and the probability of this is $\frac{{5 \choose 1}}{2^5} \frac{{5 \choose 0}+{5 \choose 1}}{2^5} = \frac{30}{1024}$.

If $A$ wins 2 games, then $B$ must win 2 or less games and the probability of this is $\frac{{5 \choose 2}}{2^5} \frac{{5 \choose 0}+{5 \choose 1}+{5 \choose 2}}{2^5} = \frac{160}{1024}$.

If $A$ wins 3 games, then $B$ must win 3 or less games and the probability of this is $\frac{{5 \choose 3}}{2^5} \frac{{5 \choose 0}+{5 \choose 1}+{5 \choose 2}+{5 \choose 3}}{2^5} = \frac{260}{1024}$.

If $A$ wins 4 games, then $B$ must win 4 or less games and the probability of this is $\frac{{5 \choose 4}}{2^5} \frac{{5 \choose 0}+{5 \choose 1}+{5 \choose 2}+{5 \choose 3}+{5 \choose 4}}{2^5} = \frac{155}{1024}$.

If $A$ wins 5 games, then $B$ must win 5 or less games and the probability of this is $\frac{{5 \choose 5}}{2^5} \frac{{5 \choose 0}+{5 \choose 1}+{5 \choose 2}+{5 \choose 3}+{5 \choose 4}+{5 \choose 5}}{2^5} = \frac{32}{1024}$.

Summing these 6 cases, we get $\frac{638}{1024}$, which simplifies to $\frac{319}{512}$, so our answer is $319 + 512 = \boxed{831}$.


2006 AIME II Problem 11

Problem

A sequence is defined as follows $a_1=a_2=a_3=1,$ and, for all positive integers $n, a_{n+3}=a_{n+2}+a_{n+1}+a_n.$ Given that $a_{28}=6090307, a_{29}=11201821,$ and $a_{30}=20603361,$ find the remainder when $\sum^{28}_{k=1} a_k$ is divided by 1000.
Solution

Define the sum as $s$. Since $a_n\ = a_{n + 3} - a_{n + 2} - a_{n + 1}$, the sum will be:
$s = a_{28} + \sum^{27}_{k=1} (a_{k+3}-a_{k+2}-a_{k+1}) \\ s = a_{28} + \left(\sum^{30}_{k=4} a_{k} - \sum^{29}_{k=3} a_{k}\right) - \left(\sum^{28}_{k=2} a_{k}\right)\\ s = a_{28} + (a_{30} - a_{3}) - \left(\sum^{28}_{k=2} a_{k}\right) = a_{28} + a_{30} - a_{3} - (s - a_{1})\\ s = -s + a_{28} + a_{30}$

Thus $s = \frac{a_{28} + a_{30}}{2}$, and $a_{28},\,a_{30}$ are both given; the last four digits of their sum is $3668$, and half of that is $1834$. Therefore, the answer is $\boxed{834}$.
Solution 2

Brute Force. Since the problem asks for the answer of the end value when divided by 1000, it wouldn't be that difficult because you only need to keep track of the last 3 digits.


2006 AIME II Problem 12

Problem

Equilateral $\triangle ABC$ is inscribed in a circle of radius $2$. Extend $\overline{AB}$ through $B$ to point $D$ so that $AD=13,$ and extend $\overline{AC}$ through $C$ to point $E$ so that $AE = 11.$ Through $D,$ draw a line $l_1$ parallel to $\overline{AE},$ and through $E,$ draw a line $l_2$ parallel to $\overline{AD}.$ Let $F$ be the intersection of $l_1$ and $l_2.$ Let $G$ be the point on the circle that is collinear with $A$ and $F$ and distinct from $A.$ Given that the area of $\triangle CBG$ can be expressed in the form $\frac{p\sqrt{q}}{r},$ where $p, q,$ and $r$ are positive integers, $p$ and $r$ are relatively prime, and $q$ is not divisible by the square of any prime, find $p+q+r.$
Solution

<div align="center"><img src="http://latex.artofproblemsolving.com/2/9/9/299c51b0ad858e4078795c0f549803abc5d0ec0d.png" height="200px" /></div>

Notice that $\angle{E} = \angle{BGC} = 120^\circ$ because $\angle{A} = 60^\circ$. Also, $\angle{GBC} = \angle{GAC} = \angle{FAE}$ because they both correspond to arc ${GC}$. So $\Delta{GBC} \sim \Delta{EAF}$.

$[EAF] = \frac12 (AE)(EF)\sin \angle AEF = \frac12\cdot11\cdot13\cdot\sin{120^\circ} = \frac {143\sqrt3}4.$

Because the ratio of the area of two similar figures is the square of the ratio of the corresponding sides, $[GBC] = \frac {BC^2}{AF^2}\cdot[EAF] = \frac {12}{11^2 + 13^2 - 2\cdot11\cdot13\cdot\cos120^\circ}\cdot\frac {143\sqrt3}4 = \frac {429\sqrt3}{433}$. Therefore, the answer is $429+433+3=\boxed{865}$.
Solution 2: Analytic Geometry

Solution by e_power_pi_times_i

Let the center of the circle be $O$ and the origin. Then, $A (0,2)$, $B (-\sqrt{3}, -1)$, $C (\sqrt{3}, -1)$. $D$ and $E$ can be calculated easily knowing $AD$ and $AE$, $D (-\frac{13}{2}, \frac{-13\sqrt{3}+4}{2})$, $E (\frac{11}{2}, \frac{-11\sqrt{3}+4}{2})$. As $DF$ and $EF$ are parallel to $AE$ and $AD$, $F (-1, -12\sqrt{3}+2)$. $G$ and $A$ is the intersection between $AF$ and circle $O$. Therefore $G (-\frac{48\sqrt{3}}{433}, -\frac{862}{433})$. Using the Shoelace Theorem, $[CBG] = \frac{429\sqrt{3}}{433}$, so the answer is $\boxed{865}$


2006 AIME II Problem 13

Problem

How many integers $N$ less than $1000$ can be written as the sum of $j$ consecutive positive odd integers from exactly 5 values of $j\ge 1$?
Solution

Let the first odd integer be $2n+1$, $n\geq 0$. Then the final odd integer is $2n+1 + 2(j-1) = 2(n+j) - 1$. The odd integers form an arithmetic sequence with sum $N = j\left(\frac{(2n+1) + (2(n+j)-1)}{2}\right) = j(2n+j)$. Thus, $j$ is a factor of $N$.

Since $n\geq 0$, it follows that $2n+j \geq j$ and $j\leq \sqrt{N}$.

Since there are exactly $5$ values of $j$ that satisfy the equation, there must be either $9$ or $10$ factors of $N$. This means $N=p_1^2p_2^2$ or $N=p_1p_2^4$. Unfortunately, we cannot simply observe prime factorizations of $N$ because the factor $(2n+j)$ does not cover all integers for any given value of $j$.

Instead we do some casework:

If $N$ is odd, then $j$ must also be odd. For every odd value of $j$, $2n+j$ is also odd, making this case valid for all odd $j$. Looking at the forms above and the bound of $1000$, $N$ must be

$(3^2\cdot5^2),\ (3^2\cdot7^2),\ (3^4\cdot5),\ (3^4\cdot7),\ (3^4\cdot 11)$

Those give $5$ possibilities for odd $N$.

If $N$ is even, then $j$ must also be even. Substituting $j=2k$, we get

$N = 4k(n+k) \Longrightarrow \frac{N}{4} = k(n+k)$

Now we can just look at all the prime factorizations since $(n+k)$ cover the integers for any $k$. Note that our upper bound is now $250$:

$\frac{N}{4} = (2^2\cdot3^2),(2^2\cdot5^2),(2^2\cdot7^2), (3^2\cdot5^2), (2^4\cdot3), (2^4\cdot5), (2^4\cdot7), (2^4\cdot11), (2^4\cdot13), (3^4\cdot2)$

Those give $10$ possibilities for even $N$.

The total number of integers $N$ is $5 + 10 = \boxed{015}$.
Solution 2

It is a well known fact that the sum of the first $n$ odd positive integers is equal to $n^2$. Let $a^2$ be the sum of the odds from 1 to the integer included in the sum, and let $b^2$ be the sum of odds from 1 to the largest odd less than the interval of length j. (For example, if we start at 5 and have $j = 3$, $a^2 = 1 + 3 + 5 + 7 + 9$ and $b^2 = 1 + 3$). Then $a^2 - b^2 = 1000$, or $(a+b)(a-b) = 1000 = 2^3\cdot 5^3$. There are $4 \cdot 4 = 16$ factors of 1000, but we want all $N < 1000$, thus the answer is 15.


2006 AIME II Problem 14
Problem

Let $S_n$ be the sum of the reciprocals of the non-zero digits of the integers from $1$ to $10^n$ inclusive. Find the smallest positive integer $n$ for which $S_n$ is an integer.
Solution

Let $K = \sum_{i=1}^{9}{\frac{1}{i}}$. Examining the terms in $S_1$, we see that $S_1 = K + 1$ since each digit $n$ appears once and 1 appears an extra time. Now consider writing out $S_2$. Each term of $K$ will appear 10 times in the units place and 10 times in the tens place (plus one extra 1 will appear), so $S_2 = 20K + 1$.

In general, we will have that
$S_n = (n10^{n-1})K + 1$

because each digit will appear $10^{n - 1}$ times in each place in the numbers $1, 2, \ldots, 10^{n} - 1$, and there are $n$ total places.

The denominator of $K$ is $D = 2^3\cdot 3^2\cdot 5\cdot 7$. For $S_n$ to be an integer, $n10^{n-1}$ must be divisible by $D$. Since $10^{n-1}$ only contains the factors $2$ and $5$ (but will contain enough of them when $n \geq 3$), we must choose $n$ to be divisible by $3^2\cdot 7$. Since we're looking for the smallest such $n$, the answer is $\boxed{063}$.


2006 AIME II Problem 15
Problem

Given that $x, y,$ and $z$ are real numbers that satisfy:
$x = \sqrt{y^2-\frac{1}{16}}+\sqrt{z^2-\frac{1}{16}}$
$y = \sqrt{z^2-\frac{1}{25}}+\sqrt{x^2-\frac{1}{25}}$
$z = \sqrt{x^2 - \frac 1{36}}+\sqrt{y^2-\frac 1{36}}$

and that $x+y+z = \frac{m}{\sqrt{n}},$ where $m$ and $n$ are positive integers and $n$ is not divisible by the square of any prime, find $m+n.$
Solution

Let $\triangle XYZ$ be a triangle with sides of length $x, y$ and $z$, and suppose this triangle is acute (so all altitudes are on the interior of the triangle). Let the altitude to the side of length $x$ be of length $h_x$, and similarly for $y$ and $z$. Then we have by two applications of the Pythagorean Theorem that $x = \sqrt{y^2 - h_x^2} + \sqrt{z^2 - h_x^2}$. As a function of $h_x$, the RHS of this equation is strictly decreasing, so it takes each value in its range exactly once. Thus we must have that $h_x^2 = \frac1{16}$ and so $h_x = \frac{1}4$ and similarly $h_y = \frac15$ and $h_z = \frac16$.

Since the area of the triangle must be the same no matter how we measure, $x\cdot h_x = y\cdot h_y = z \cdot h_z$ and so $\frac x4 = \frac y5 = \frac z6 = 2A$ and $x = 8A, y = 10A$ and $z = 12A$. The semiperimeter of the triangle is $s = \frac{8A + 10A + 12A}{2} = 15A$ so by Heron's formula we have $A = \sqrt{15A \cdot 7A \cdot 5A \cdot 3A} = 15A^2\sqrt{7}$. Thus $A = \frac{1}{15\sqrt{7}}$ and $x + y + z = 30A = \frac2{\sqrt{7}}$ and the answer is $2 + 7 = \boxed{009}$.


Justification that there is an acute triangle with sides of length $x, y$ and $z$:

Note that $x, y$ and $z$ are each the sum of two positive square roots of real numbers, so $x, y, z \geq 0$. (Recall that, by AIME convention, all numbers (including square roots) are taken to be real unless otherwise indicated.) Also, $\sqrt{y^2-\frac{1}{16}} < \sqrt{y^2} = y$, so we have $x < y + z$, $y < z + x$ and $z < x + y$. But these conditions are exactly those of the triangle inequality, so there does exist such a triangle.

2006 AIME II Answer Key
1.	046
    2.893
    3.049
    4.462
    5.029
    6.012
    7.738
    8.336
    9.027
    10.831
    11.834
    12.865
    13.015
    14.063
    15.009

