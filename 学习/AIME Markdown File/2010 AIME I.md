# 2010 AIME I

2010 AIME I Problems/Problem 1
Problem

Maya lists all the positive divisors of $2010^2$. She then randomly selects two distinct divisors from this list. Let $p$ be the probability that exactly one of the selected divisors is a perfect square. The probability $p$ can be expressed in the form $\frac {m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m + n$.
Solution

$2010^2 = 2^2\cdot3^2\cdot5^2\cdot67^2$. Thus there are $(2+1)^4$ divisors, $2^4$ of which are squares (the exponent of each prime factor must either be $0$ or $2$). Therefore the probability is $\frac {2\cdot2^4\cdot(3^4 - 2^4)}{3^4(3^4 - 1)} = \frac {26}{81} \Longrightarrow 26+ 81 = \boxed{107}.$


2010 AIME I Problems/Problem 2
Problem

Find the remainder when $9 \times 99 \times 999 \times \cdots \times \underbrace{99\cdots9}_{\text{999 9's}}$ is divided by $1000$.
Solution

Note that $999\equiv 9999\equiv\dots \equiv\underbrace{99\cdots9}_{\text{999 9's}}\equiv -1 \mod{1000}$ (see modular arithmetic). That is a total of $999 - 3 + 1 = 997$ integers, so all those integers multiplied out are congruent to $- 1\mod{1000}$. Thus, the entire expression is congruent to $( - 1)(9)(99) = - 891\equiv\boxed{109}\mod{1000}$.


2010 AIME I Problems/Problem 3

Problem

Suppose that $y = \frac34x$ and $x^y = y^x$. The quantity $x + y$ can be expressed as a rational number $\frac {r}{s}$, where $r$ and $s$ are relatively prime positive integers. Find $r + s$.
Solution

We solve in general using $c$ instead of $3/4$. Substituting $y = cx$, we have:
$x^{cx} = (cx)^x \Longrightarrow (x^x)^c = c^x\cdot x^x$

Dividing by $x^x$, we get $(x^x)^{c - 1} = c^x$.

Taking the $x$th root, $x^{c - 1} = c$, or $x = c^{1/(c - 1)}$.

In the case $c = \frac34$, $x = \Bigg(\frac34\Bigg)^{ - 4} = \Bigg(\frac43\Bigg)^4 = \frac {256}{81}$, $y = \frac {64}{27}$, $x + y = \frac {256 + 192}{81} = \frac {448}{81}$, yielding an answer of $448 + 81 = \boxed{529}$.
Solution 2

Taking the logarithm base $x$ of both sides, we arrive with:
$y = log_x y^x \Longrightarrow \frac{y}{x} = log_x y = log_x \frac{3}{4}x = \frac{3}{4}$

Where the last two simplifications were made since $y = \frac{3}{4}x$. Then,
$x^{\frac{3}{4}} = \frac{3}{4}x \Longrightarrow x^{\frac{1}{4}} = \frac{4}{3} \Longrightarrow x = (\frac{4}{3})^4$

Then, $y = (\frac{4}{3})^3$, and thus:
$x+y = (\frac{4}{3})^3 (\frac{4}{3} + 1) = \frac{448}{81} \Longrightarrow 448 + 81 = \boxed{529}$


2010 AIME I Problems/Problem 4

Problem

Jackie and Phil have two fair coins and a third coin that comes up heads with probability $\frac47$. Jackie flips the three coins, and then Phil flips the three coins. Let $\frac {m}{n}$ be the probability that Jackie gets the same number of heads as Phil, where $m$ and $n$ are relatively prime positive integers. Find $m + n$.
Solution
Solution 1

This can be solved quickly and easily with generating functions.

Let $x^n$ represent flipping $n$ tails.

The generating functions for these coins are $(1+x)$,$(1+x)$,and $(4+3x)$ in order.

The product is $4+11x+10x^2+3x^3$. ($ax^n$ means there are $a$ ways to get $n$ heads, eg there are $10$ ways to get $2$ heads, and therefore $1$ tail, here.)

The sum of the coefficients squared (total number of possible outcomes, squared because the event is occurring twice) is $(4 + 11 + 10 + 3)^2 = 28^2 = 784$ and the sum of the squares of each coefficient (the sum of the number of ways that each coefficient can be chosen by the two people) is $4^2 + 11^2 + 10^2 + 3^2=246$. The probability is then $\frac{4^2 + 11^2 + 10^2 + 3^2}{28^2} = \frac{246}{784} = \frac{123}{392}$. (Notice the relationship between the addends of the numerator here and the cases in the following solution.)

$123 + 392 = \boxed{515}$
Solution 2

We perform casework based upon the number of heads that are flipped.

Case 1: No heads.

The only possibility is TTT (the third coin being the unfair coin). The probability for this to happen to Jackie is $\frac {1}{2} \cdot \frac {1}{2} \cdot \frac {3}{7} = \frac {3}{28}$ Thus the probability for this to happen to both players is $\left(\frac {3}{28}\right)^2 = \frac {9}{784}$

Case 2: One head.

We can have either HTT, THT, or TTH. The first two happen to Jackie with the same $\frac {3}{28}$ chance, but the third happens $\frac {4}{28}$ of the time, since the unfair coin is heads instead of tails. With 3 possibilities for Jackie and 3 for Phil, there are a total of 9 ways for them both to have 1 head.

Multiplying and adding up all 9 ways, we have a
$\frac {4(3 \cdot 3) + 4(3 \cdot 4) + 1(4 \cdot 4)}{28^{2}} = \frac {100}{784}$
overall chance for this case.

Case 3: Two heads.

With HHT $\frac {3}{28}$, HTH $\frac {4}{28}$, and THH $\frac {4}{28}$ possible, we proceed as in Case 2, obtaining

$\frac {1(3 \cdot 3) + 4(3 \cdot 4) + 4(4 \cdot 4)}{28^{2}} = \frac {121}{784}.$

Case 4: Three heads.

Similar to Case 1, we can only have HHH, which has $\frac {4}{28}$ chance. Then in this case we get $\frac {16}{784}$

Finally, we take the sum: $\frac {9 + 100 + 121 + 16}{784} = \frac {246}{784} = \frac {123}{392}$, so our answer is $123 + 392 = \fbox{515}$.





2010 AIME I Problems/Problem 5

Problem

Positive integers $a$, $b$, $c$, and $d$ satisfy $a > b > c > d$, $a + b + c + d = 2010$, and $a^2 - b^2 + c^2 - d^2 = 2010$. Find the number of possible values of $a$.
Solution
Solution 1

Using the difference of squares, $2010 = (a^2 - b^2) + (c^2 - d^2) = (a + b)(a - b) + (c + d)(c - d) \ge a + b + c + d = 2010$, where equality must hold so $b = a - 1$ and $d = c - 1$. Then we see $a = 1004$ is maximal and $a = 504$ is minimal, so the answer is $\boxed{501}$.
Solution 2

Since $a+b$ must be greater than $1005$, it follows that the only possible value for $a-b$ is $1$ (otherwise the quantity $a^2 - b^2$ would be greater than $2010$). Therefore the only possible ordered pairs for $(a,b)$ are $(504, 503)$, $(505, 504)$, ... , $(1004, 1003)$, so $a$ has $\boxed{501}$ possible values.


2010 AIME I Problems/Problem 6

Problem

Let $P(x)$ be a quadratic polynomial with real coefficients satisfying $x^2 - 2x + 2 \le P(x) \le 2x^2 - 4x + 3$ for all real numbers $x$, and suppose $P(11) = 181$. Find $P(16)$.
Solution
Solution 1

<div align=center><img src="https://latex.artofproblemsolving.com/8/6/4/8642816d5b50f02498e44e455af5a0ae225ce976.png" height="250px" /></div>

Let $Q(x) = x^2 - 2x + 2$, $R(x) = 2x^2 - 4x + 3$. Completing the square, we have $Q(x) = (x-1)^2 + 1$, and $R(x) = 2(x-1)^2 + 1$, so it follows that $P(x) \ge Q(x) \ge 1$ for all $x$ (by the Trivial Inequality).

Also, $1 = Q(1) \le P(1) \le R(1) = 1$, so $P(1) = 1$, and $P$ obtains its minimum at the point $(1,1)$. Then $P(x)$ must be of the form $c(x-1)^2 + 1$ for some constant $c$; substituting $P(11) = 181$ yields $c = \frac 95$. Finally, $P(16) = \frac 95 \cdot (16 - 1)^2 + 1 = \boxed{406}$.
Solution 2

It can be seen that the function $P(x)$ must be in the form $P(x) = ax^2 - 2ax + c$ for some real $a$ and $c$. This is because the derivative of $P(x)$ is $2ax - 2a$, and a global minimum occurs only at $x = 1$ (in addition, because of this derivative, the vertex of any quadratic polynomial occurs at $\frac{-b}{2a}$). Substituting $(1,1)$ and $(11, 181)$ we obtain two equations:
$P(11) = 99a + c = 181$, and $P(1) = -a + c = 1$.

Solving, we get $a = \frac{9}{5}$ and $c = \frac{14}{5}$, so $P(x) = \frac{9}{5}x^2 - \frac{18}{5}x + \frac {14}{5}$. Therefore, $P(16) = \boxed{406}$.
Solution 3

Let $y = x^2 - 2x + 2$; note that $2y - 1 = 2x^2 - 4x + 3$. Setting $y = 2y - 1$, we find that equality holds when $y = 1$ and therefore when $x^2 - 2x + 2 = 1$; this is true iff $x = 1$, so $P(1) = 1$.

Let $Q(x) = P(x) - x$; clearly $Q(1) = 0$, so we can write $Q(x) = (x - 1)Q'(x)$, where $Q'(x)$ is some linear function. Plug $Q(x)$ into the given inequality:

$x^2 - 3x + 2 \le Q(x) \le 2x^2 - 5x + 3$

$(x - 1)(x - 2) \le (x - 1)Q'(x) \le (x - 1)(2x - 3)$, and thus

$x - 2 \le Q'(x) \le 2x - 3$

For all $x > 1$; note that the inequality signs are flipped if $x < 1$, and that the division is invalid for $x = 1$. However,

$\lim_{x \to 1} x - 2 = \lim_{x \to 1} 2x - 3 = -1$,

and thus by the sandwich theorem $\lim_{x \to 1} Q'(x) = -1$; by the definition of a continuous function, $Q'(1) = -1$. Also, $Q(11) = 170$, so $Q'(11) = 170/(11-1) = 17$; plugging in and solving, $Q'(x) = (9/5)(x - 1) - 1$. Thus $Q(16) = 390$, and so $P(16) = \boxed{406}$.
Solution 4

Let $Q(x) = P(x) - (x^2-2x+2)$, then $0\le Q(x) \le (x-1)^2$. Therefore, $0\le Q(x+1) \le x^2 \Rightarrow Q(x) = Ax^2$ for some real value A.

$Q(11) = 10^2A \Rightarrow P(11)-(11^2-22+2)=100A \Rightarrow 80=100A \Rightarrow A=\frac{4}{5}$.

$Q(16)=15^2A=180 \Rightarrow P(16)-(16^2-32+2) = 180 \Rightarrow P(16)=180+226= \boxed{406}$


2010 AIME I Problems/Problem 7
Problem

Define an ordered triple $(A, B, C)$ of sets to be minimally intersecting if $|A \cap B| = |B \cap C| = |C \cap A| = 1$ and $A \cap B \cap C = \emptyset$. For example, $(\{1,2\},\{2,3\},\{1,3,4\})$ is a minimally intersecting triple. Let $N$ be the number of minimally intersecting ordered triples of sets for which each set is a subset of $\{1,2,3,4,5,6,7\}$. Find the remainder when $N$ is divided by $1000$.

Note: $|S|$ represents the number of elements in the set $S$.
Solution

Let each pair of two sets have one element in common. Label the common elements as $x$, $y$, $z$. Set $A$ will have elements $x$ and $y$, set $B$ will have $y$ and $z$, and set $C$ will have $x$ and $z$. There are $7 \cdot 6 \cdot 5 = 210$ ways to choose values of $x$, $y$ and $z$. There are $4$ unpicked numbers, and each number can either go in the first set, second set, third set, or none of them. Since we have $4$ choices for each of $4$ numbers, that gives us $4^4 = 256$.

Finally, $256 \cdot 210 = 53760$, so the answer is $\fbox{760}$.


2010 AIME I Problems/Problem 8
Problem

For a real number $a$, let $\lfloor a \rfloor$ denominate the greatest integer less than or equal to $a$. Let $\mathcal{R}$ denote the region in the coordinate plane consisting of points $(x,y)$ such that $\lfloor x \rfloor ^2 + \lfloor y \rfloor ^2 = 25$. The region $\mathcal{R}$ is completely contained in a disk of radius $r$ (a disk is the union of a circle and its interior). The minimum value of $r$ can be written as $\frac {\sqrt {m}}{n}$, where $m$ and $n$ are integers and $m$ is not divisible by the square of any prime. Find $m + n$.
Solution

The desired region consists of 12 boxes, whose lower-left corners are integers solutions of $x^2 + y^2 = 25$, namely $(\pm5,0), (0,\pm5), (\pm3,\pm4), (\pm4,\pm3).$ Since the points themselves are symmetric about $(0,0)$, the boxes are symmetric about $\left(\frac12,\frac12\right)$. The distance from $\left(\frac12,\frac12\right)$ to the furthest point on an axis-box, for instance $(6,1)$, is $\sqrt {\frac {11}2^2 + \frac12^2} = \sqrt {\frac {122}4}.$ The distance from $\left(\frac12,\frac12\right)$ to the furthest point on a quadrant-box, for instance $(5,4)$, is $\sqrt {\frac92^2 + \frac72^2} = \sqrt {\frac {130}4}.$ The latter is the larger, and is $\frac {\sqrt {130}}2$, giving an answer of $130 + 2 = \boxed{132}$.

<div align=center><img src="https://latex.artofproblemsolving.com/f/f/4/ff43639961c43d52b0e31cf8627eaafbfbc3e27c.png" height="250px" /></div>



2010 AIME I Problems/Problem 9

Problem

Let $(a,b,c)$ be the real solution of the system of equations $x^3 - xyz = 2$, $y^3 - xyz = 6$, $z^3 - xyz = 20$. The greatest possible value of $a^3 + b^3 + c^3$ can be written in the form $\frac {m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m + n$.
Solution
Solution 1

Add the three equations to get $a^3 + b^3 + c^3 = 28 + 3abc$. Now, let $abc = p$. $a = \sqrt [3]{p + 2}$, $b = \sqrt [3]{p + 6}$ and $c = \sqrt [3]{p + 20}$, so $p = abc = (\sqrt [3]{p + 2})(\sqrt [3]{p + 6})(\sqrt [3]{p + 20})$. Now cube both sides; the $p^3$ terms cancel out. Solve the remaining quadratic to get $p = - 4, - \frac {15}{7}$. To maximize $a^3 + b^3 + c^3$ choose $p = - \frac {15}{7}$ and so the sum is $28 - \frac {45}{7} = \frac {196 - 45}{7}$ giving $151 + 7 = \fbox{158}$.
Solution 2

This is almost the same as solution 1. Note $a^3 + b^3 + c^3 = 28 + 3abc$. Next, let $k = a^3$. Note that $b = \sqrt [3]{k + 4}$ and $c = \sqrt [3]{k + 18}$, so we have $28 + \sqrt [3]{k(k+4)(k+18)} = 28+abc=a^3+b^3+c^3=3k+22$. Move 28 over, divide both sides by 3, then cube to get $k^3-6k^2+12k-8 = k^3+22k^2+18k$. The $k^3$ terms cancel out, so solve the quadratic to get $k = -2, -\frac{1}{7}$. We maximize $abc$ by choosing $k = -\frac{1}{7}$, which gives us $a^3+b^3+c^3 = 3k + 22 = \frac{151}{7}$. Thus, our answer is $151+7=\boxed{158}$.


2010 AIME I Problems/Problem 10

Problem

Let $N$ be the number of ways to write $2010$ in the form $2010 = a_3 \cdot 10^3 + a_2 \cdot 10^2 + a_1 \cdot 10 + a_0$, where the $a_i$'s are integers, and $0 \le a_i \le 99$. An example of such a representation is $1\cdot 10^3 + 3\cdot 10^2 + 67\cdot 10^1 + 40\cdot 10^0$. Find $N$.
Solution 1

If we choose $a_3$ and $a_1$ such that $(10^3)(a_3) + (10)(a_1) \leq 2010$ there is a unique choice of $a_2$ and $a_0$ that makes the equality hold. So $N$ is just the number of combinations of $a_3$ and $a_1$ we can pick. If $a_3 = 0$ or $a_3 = 1$ we can let $a_1$ be anything from $0$ to $99$. If $a_3 = 2$ then $a_1 = 0$ or $a_1 = 1$. Thus $N = 100 + 100 + 2 = \fbox{202}$.
Solution 2

Note that $a_0 \equiv 2010\ (\textrm{mod}\ 10)$ and $a_1 \equiv 2010 - a_0\ (\textrm{mod}\ 100)$. It's easy to see that exactly 10 values in $0 \leq a_0 \leq 99$ that satisfy our first congruence. Similarly, there are 10 possible values of $a_1$ for each choice of $a_0$. Thus, there are $10 \times 10 = 100$ possible choices for $a_0$ and $a_1$. We next note that if $a_0$ and $a_1$ are chosen, then a valid value of $a_3$ determines $a_2$, so we dive into some simple casework:

If $2010 - 10a_1 - a_0 \geq 2000$, there are 3 valid choices for $a_3$. There are only 2 possible cases where $2010 - 10a_1 - a_0 \geq 2000$, namely $(a_1, a_0) = (1,0), (10,0)$. Thus, there are $3 \times 2 = 6$ possible representations in this case.
If $2010 - 10a_1 - a_0 < 1000$, $a_3$ can only equal 0. However, this case cannot occur, as $10a_1+a_0\leq 990+99 = 1089$. Thus, $2010-10a_1-a_0 \geq 921$. However, $2010-10a_1-a_0 = 1000a_3 + 100a_2 \equiv 0\ (\textrm{mod}\ 100)$. Thus, we have $2010-10a_1-a_0 \geq 1000$ always.
If $1000 \leq 2010 - 10a_1 - a_0 < 2000$, then there are 2 valid choices for $a_3$. Since there are 100 possible choices for $a_0$ and $a_1$, and we have already checked the other cases, it follows that $100 - 2 - 0 = 98$ choices of $a_0$ and $a_1$ fall under this case. Thus, there are $2 \times 98 = 196$ possible representations in this case.

Our answer is thus $6 + 0 + 196 = \boxed{202}$.
Solution 3: Casework and Brute Force

We immediately see that $a_3$ can only be $0$, $1$ or $2$. We also note that the maximum possible value for $10a_1 + a_0$ is $990 + 99 = 1089$. We then split into cases:

Case 1: $a_3 = 0$. We try to find possible values of $a_2$. We plug in $a_3 = 0$ and $10a_1 + a_0 = 1089$ to our initial equation, which gives us $2010 = 0 + 100a_2^2 + 1089$. Thus $a_2 \geq 10$. We also see that $a_2 \leq 20$. We now take these values of $a_2$ and find the number of pairs $(a_1, a_0)$ that work. If $a_2 = 10$, $10a_1 + a_0 = 1010$. We see that there are $8$ possible pairs in this case. Using the same logic, there are $10$ ways for $a_2 = 11, 12 \ldots 19$. For $a_2 = 20$, we get the equation $10a_1 + a_0 = 10$, for 2 ways. Thus, for $a_3 = 0$, there are $8 + 10 \cdot 9 + 2 = 100$ ways.

Case 2: $a_3 = 1$. This case is almost identical to the one above, except $0 \leq a_2 \leq 10$. We also get 100 ways.

Case 3: $a_3 = 2$. If $a_3 = 2$, our initial equation becomes $100a_2 + 10a_1 + a_0 = 10$. It is obvious that $a_2 = 0$, and we are left with $10a_1 + a_0 = 10$. We saw above that there are $2$ ways.

Totaling everything, we get that there are $100 + 100 + 2 = \boxed{202}$ ways.


2010 AIME I Problems/Problem 11

Problem

Let $\mathcal{R}$ be the region consisting of the set of points in the coordinate plane that satisfy both $|8 - x| + y \le 10$ and $3y - x \ge 15$. When $\mathcal{R}$ is revolved around the line whose equation is $3y - x = 15$, the volume of the resulting solid is $\frac {m\pi}{n\sqrt {p}}$, where $m$, $n$, and $p$ are positive integers, $m$ and $n$ are relatively prime, and $p$ is not divisible by the square of any prime. Find $m + n + p$.
Solution
Solution 1

<div align=center><img src="http://latex.artofproblemsolving.com/0/2/9/02958bb5c4716e5bf47c728a5fa01a53dcda0b57.png" height="200px" /></div>

The inequalities are equivalent to $y \ge x/3 + 5, y \le 10 - |x - 8|$. We can set them equal to find the two points of intersection, $x/3 + 5 = 10 - |x - 8| \Longrightarrow |x - 8| = 5 - x/3$. This implies that one of $x - 8, 8 - x = 5 - x/3$, from which we find that $(x,y) = \left(\frac 92, \frac {13}2\right), \left(\frac{39}{4}, \frac{33}{4}\right)$. The region $\mathcal{R}$ is a triangle, as shown above. When revolved about the line $y = x/3+5$, the resulting solid is the union of two right cones that share the same base and axis.

<div align=center><img src="http://latex.artofproblemsolving.com/a/6/7/a677b7bf01faacdc024c6d06c300886f6ba38ae1.png" height="200px" /></div>

Let $h_1,h_2$ denote the height of the left and right cones, respectively (so $h_1 > h_2$), and let $r$ denote their common radius. The volume of a cone is given by $\frac 13 Bh$; since both cones share the same base, then the desired volume is $\frac 13 \cdot \pi r^2 \cdot (h_1 + h_2)$. The distance from the point $(8,10)$ to the line $x - 3y + 15 = 0$ is given by $\left|\frac{(8) - 3(10) + 15}{\sqrt{1^2 + (-3)^2}}\right| = \frac{7}{\sqrt{10}}$. The distance between $\left(\frac 92, \frac {13}2\right)$ and $\left(\frac{39}{4}, \frac{33}{4}\right)$ is given by $h_1 + h_2 = \sqrt{\left(\frac{18}{4} - \frac{39}{4}\right)^2 + \left(\frac{26}{4} - \frac{33}{4}\right)^2} = \frac{7\sqrt{10}}{4}$. Thus, the answer is $\frac{343\sqrt{10}\pi}{120} = \frac{343\pi}{12\sqrt{10}} \Longrightarrow 343 + 12 + 10 = \boxed{365}$.


2010 AIME I Problems/Problem 12
Problem

Let $m \ge 3$ be an integer and let $S = \{3,4,5,\ldots,m\}$. Find the smallest value of $m$ such that for every partition of $S$ into two subsets, at least one of the subsets contains integers $a$, $b$, and $c$ (not necessarily distinct) such that $ab = c$.

Note: a partition of $S$ is a pair of sets $A$, $B$ such that $A \cap B = \emptyset$, $A \cup B = S$.
Solution

We claim that $243$ is the minimal value of $m$. Let the two partitioned sets be $A$ and $B$; we will try to partition $3, 9, 27, 81,$ and $243$ such that the $ab=c$ condition is not satisfied. Without loss of generality, we place $3$ in $A$. Then $9$ must be placed in $B$, so $81$ must be placed in $A$, and $27$ must be placed in $B$. Then $243$ cannot be placed in any set, so we know $m$ is less than or equal to $243$.

For $m \le 242$, we can partition $S$ into $S \cap \{3, 4, 5, 6, 7, 8, 81, 82, 83, 84 ... 242\}$ and $S \cap \{9, 10, 11 ... 80\}$, and in neither set are there values where $ab=c$ (since $8 < (3\text{ to }8)^2 < 81$ and $(9\text{ to }80)^2 > 80$). Thus $m = \boxed{243}$.


2010 AIME I Problems/Problem 13

Problem

Rectangle $ABCD$ and a semicircle with diameter $AB$ are coplanar and have nonoverlapping interiors. Let $\mathcal{R}$ denote the region enclosed by the semicircle and the rectangle. Line $\ell$ meets the semicircle, segment $AB$, and segment $CD$ at distinct points $N$, $U$, and $T$, respectively. Line $\ell$ divides region $\mathcal{R}$ into two regions with areas in the ratio $1: 2$. Suppose that $AU = 84$, $AN = 126$, and $UB = 168$. Then $DA$ can be represented as $m\sqrt {n}$, where $m$ and $n$ are positive integers and $n$ is not divisible by the square of any prime. Find $m + n$.
Solution

<div align=center><img src="http://latex.artofproblemsolving.com/b/2/a/b2a9609890d33310178bc86dcdc5884b38279e7a.png" height="250px" /></div>

Solution 1

The center of the semicircle is also the midpoint of $AB$. Let this point be O. Let $h$ be the length of $AD$.

Rescale everything by 42, so $AU = 2, AN = 3, UB = 4$. Then $AB = 6$ so $OA = OB = 3$.

Since $ON$ is a radius of the semicircle, $ON = 3$. Thus $OAN$ is an equilateral triangle.

Let $X$, $Y$, and $Z$ be the areas of triangle $OUN$, sector $ONB$, and trapezoid $UBCT$ respectively.

$X = \frac {1}{2}(UO)(NO)\sin{O} = \frac {1}{2}(1)(3)\sin{60^\circ} = \frac {3}{4}\sqrt {3}$

$Y = \frac {1}{3}\pi(3)^2 = 3\pi$

To find $Z$ we have to find the length of $TC$. Project $T$ and $N$ onto $AB$ to get points $T'$ and $N'$. Notice that $UNN'$ and $UTT'$ are similar. Thus:

$\frac {UT'}{TT'} = \frac {NN'}{UN'} \implies \frac {UT'}{h} = \frac {1/2}{3\sqrt {3}/2} \implies UT' = \frac {\sqrt {3}}{9}h$.

Then $TC = T'B = UB - UT' = 4 - \frac {\sqrt {3}}{9}h$. So:

$Z = \frac {1}{2}(BX + TC)(CB) = \frac {1}{2}\left(8 - \frac {\sqrt {3}}{9}h\right)h = 4h - \frac {\sqrt {3}}{18}h^2$

Let $L$ be the area of the side of line $l$ containing regions $X, Y, Z$. Then

$L = X + Y + Z = \frac {3}{4}\sqrt {3} + 3\pi + 4h - \frac {\sqrt {3}}{18}h^2$

Obviously, the $L$ is greater than the area on the other side of line $l$. This other area is equal to the total area minus $L$. Thus:

$\frac {2}{1} = \frac {L}{6h + \frac {9}{2}{\pi} - L} \implies 12h + 9\pi = 3L$.

Now just solve for $h$.

$\begin{align*} 12h + 9\pi & = \frac {9}{4}\sqrt {3} + 9\pi + 12h - \frac {\sqrt {3}}{6}h^2 \\ 0 & = \frac {9}{4}\sqrt {3} - \frac {\sqrt {3}}{6}h^2 \\ h^2 & = \frac {9}{4}(6) \\ h & = \frac {3}{2}\sqrt {6} \end{align*}$

Don't forget to un-rescale at the end to get $AD = \frac {3}{2}\sqrt {6} \cdot 42 = 63\sqrt {6}$.

Finally, the answer is $63 + 6 = \boxed{069}$.
Solution 2

Let $O$ be the center of the semicircle. It follows that $AU + UO = AN = NO = 126$, so triangle $ANO$ is equilateral.

Let $Y$ be the foot of the altitude from $N$, such that $NY = 63\sqrt{3}$ and $NU = 21$.

Finally, denote $DT = a$, and $AD = x$. Extend $U$ to point $Z$ so that $Z$ is on $CD$ and $UZ$ is perpendicular to $CD$. It then follows that $ZT = a-84$. Since $NYU$ and $UZT$ are similar,

$\frac {x}{a-84} = \frac {63\sqrt{3}}{21} = 3\sqrt{3}$

Given that line $NT$ divides $R$ into a ratio of $1:2$, we can also say that

$(x)(\frac{84+a}{2}) + \frac {126^2\pi}{6} - (63)(21)(\sqrt{3}) = (\frac{1}{3})(252x + \frac{126^2\pi}{2})$

where the first term is the area of trapezoid $AUTD$, the second and third terms denote the areas of $\frac{1}{6}$ a full circle, and the area of $NUO$, respectively, and the fourth term on the right side of the equation is equal to $R$. Cancelling out the $\frac{126^2\pi}{6}$ on both sides, we obtain

$(x)(\frac{84+a}{2}) - \frac{252x}{3} = (63)(21)(\sqrt{3})$

By adding and collecting like terms, $\frac{3ax - 252x}{6} = (63)(21)(\sqrt{3})$

$\frac{(3x)(a-84)}{6} = (63)(21)(\sqrt{3})$.

Since $a - 84 = \frac{x}{3\sqrt{3}}$,

$\frac {(3x)(\frac{x}{3\sqrt{3}})}{6} = (63)(21)(\sqrt{3})$

$\frac {x^2}{\sqrt{3}} = (63)(126)(\sqrt{3})$

$x^2 = (63)(126)(3) = (2)(3^5)(7^2)$

$x = AD = (7)(3^2)(\sqrt{6}) = 63\sqrt{6}$, so the answer is $\boxed{069}.$


Solution 3

Note that the total area of $\mathcal{R}$ is $252DA + \frac {126^2 \pi}{2}$ and thus one of the regions has area $84DA + \frac {126^2 \pi}{6}$

As in the above solutions we discover that $\angle AON = 60^\circ$, thus sector $ANO$ of the semicircle has $\frac{1}{3}$ of the semicircle's area.

Similarly, dropping the $N'T'$ perpendicular we observe that $[AN'T'D] = 84DA$, which is $\frac{1}{3}$ of the total rectangle.

Denoting the region to the left of $\overline {NT}$ as $\alpha$ and to the right as $\beta$, it becomes clear that if $[\triangle UT'T] = [\triangle NUO]$ then the regions will have the desired ratio.

Using the 30-60-90 triangle, the slope of $NT$, is ${-3\sqrt{3}}$, and thus $[\triangle UT'T] = \frac {DA^2}{6\sqrt{3}}$.

$[NUO]$ is most easily found by $\frac{absin(c)}{2}$: $[\triangle NUO] = \frac {126*42 * \frac {\sqrt{3}}{2}}{2}$

Equating, $\frac {126*42 * \frac {\sqrt{3}}{2}}{2} = \frac {DA^2}{6\sqrt{3}}$

Solving, $63 * 21 * 3 * 6 = DA^2$

$DA = 63 \sqrt{6} \longrightarrow \boxed {069}$


2010 AIME I Problems/Problem 14

Problem

For each positive integer n, let $f(n) = \sum_{k = 1}^{100} \lfloor \log_{10} (kn) \rfloor$. Find the largest value of n for which $f(n) \le 300$.

Note: $\lfloor x \rfloor$ is the greatest integer less than or equal to $x$.
Solution
Solution 1

Observe that $f$ is strictly increasing in $n$. We realize that we need $100$ terms to add up to around $300$, so we need some sequence of $2$s, $3$s, and then $4$s.

It follows that $n \approx 100$. Manually checking shows that $f(109) = 300$ and $f(110) > 300$. Thus, our answer is $\boxed{109}$.
Solution 2

Because we want the value for which $f(n)=300$, the average value of the 100 terms of the sequence should be around $3$. For the value of $\lfloor \log_{10} (kn) \rfloor$ to be $3$, $1000 \le kn < 10000$. We want kn to be around the middle of that range, and for k to be in the middle of 0 and 100, let $k=50$, so $50n=\frac{10000+1000}{2}=\frac{11000}{2}=5500$, and $n = 110$. $f(110) = 301$, so we want to lower $n$. Testing $109$ yields $300$, so our answer is still $\boxed{109}$.
Solution 3

For any $n$ where the sum is close to $300$, all the terms in the sum must be equal to $2$, $3$ or $4$. Let $M$ be the number of terms less than or equal to $3$ and $N$ be the number of terms equal to $2$ (also counted in $M$). With this definition of $M$ and $N$ the total will be $400 - M - N \le 300$, from which $M + N \ge 100$. Now $M+1$ is the smallest integer $k$ for which $\log_{10}(kn) \ge 4$ or $kn \ge 10000$, thus $M = \left\lfloor\frac{9999}{n}\right\rfloor.$ Similarly, $N = \left\lfloor\frac{999}{n}\right\rfloor = \left\lfloor\frac{M}{10}\right\rfloor.$

Therefore, $M + \left\lfloor \frac{M}{10} \right\rfloor \ge 100 \implies M \ge \left\lceil\frac{1000}{11}\right\rceil = 91 \implies n \le \left\lfloor\frac{9999}{91}\right\rfloor = 109.$ Since we want the largest possible $n$, the answer is $\boxed{109}$.


2010 AIME I Problems/Problem 15

Problem

In $\triangle{ABC}$ with $AB = 12$, $BC = 13$, and $AC = 15$, let $M$ be a point on $\overline{AC}$ such that the incircles of $\triangle{ABM}$ and $\triangle{BCM}$ have equal radii. Let $p$ and $q$ be positive relatively prime integers such that $\frac {AM}{CM} = \frac {p}{q}$. Find $p + q$.


Solution

<div align=center><img src="http://latex.artofproblemsolving.com/3/b/6/3b652be1b97e4278badbd959e6c825c4bf675a73.png" height="200px" /></div>

Solution 1

Let $AM = x$, then $CM = 15 - x$. Also let $BM = d$ Clearly, $\frac {[ABM]}{[CBM]} = \frac {x}{15 - x}$. We can also express each area by the rs formula. Then $\frac {[ABM]}{[CBM]} = \frac {p(ABM)}{p(CBM)} = \frac {12 + d + x}{28 + d - x}$. Equating and cross-multiplying yields $25x + 2dx = 15d + 180$ or $d = \frac {25x - 180}{15 - 2x}.$ Note that for d to be positive, we must have $7.2 < x < 7.5$.

By Stewart's Theorem, we have $12^2(15 - x) + 13^2x = d^215 + 15x(15 - x)$ or $432 = 3d^2 + 40x - 3x^2.$ Brute forcing by plugging in our previous result for $d$, we have $432 = \frac {3(25x - 180)^2}{(15 - 2x)^2} + 40x - 3x^2.$ Clearing the fraction and gathering like terms, we get $0 = 12x^4 - 340x^3 + 2928x^2 - 7920x.$

Aside: Since $x$ must be rational in order for our answer to be in the desired form, we can use the Rational Root Theorem to reveal that $12x$ is an integer. The only such $x$ in the above-stated range is $\frac {22}3$.

Legitimately solving that quartic, note that $x = 0$ and $x = 15$ should clearly be solutions, corresponding to the sides of the triangle and thus degenerate cevians. Factoring those out, we get $0 = 4x(x - 15)(3x^2 - 40x + 132) = x(x - 15)(x - 6)(3x - 22).$ The only solution in the desired range is thus $\frac {22}3$. Then $CM = \frac {23}3$, and our desired ratio $\frac {AM}{CM} = \frac {22}{23}$, giving us an answer of $\boxed{045}$.
Solution 2

Let $AM = 2x$ and $BM = 2y$ so $CM = 15 - 2x$. Let the incenters of $\triangle ABM$ and $\triangle BCM$ be $I_1$ and $I_2$ respectively, and their equal inradii be $r$. From $r = \sqrt {(s - a)(s - b)(s - c)/s}$, we find that

$\begin{align*}r^2 & = \frac {(x + y - 6)( - x + y + 6)(x - y + 6)}{x + y + 6} & (1) \\ & = \frac {( - x + y + 1)(x + y - 1)( - x - y + 14)}{ - x + y + 14}. & (2) \end{align*}$

Let the incircle of $\triangle ABM$ meet $AM$ at $P$ and the incircle of $\triangle BCM$ meet $CM$ at $Q$. Then note that $I_1 P Q I_2$ is a rectangle. Also, $\angle I_1 M I_2$ is right because $MI_1$ and $MI_2$ are the angle bisectors of $\angle AMB$ and $\angle CMB$ respectively and $\angle AMB + \angle CMB = 180^\circ$. By properties of tangents to circles $MP = (MA + MB - AB)/2 = x + y - 6$ and $MQ = (MB + MC - BC)/2 = - x + y + 1$. Now notice that the altitude of $M$ to $I_1 I_2$ is of length $r$, so by similar triangles we find that $r^2 = MP \cdot MQ = (x + y - 6)( - x + y + 1)$ (3). Equating (3) with (1) and (2) separately yields

$2y^2 - 30 = 2xy + 5x - 7y \\ 2y^2 - 70 = - 2xy - 5x + 7y,$

and adding these we have

$4y^2 - 100 = 0\implies y = 5\implies x = 11/3 \\ \implies AM/MC = (22/3)/(15 - 22/3) = 22/23 \implies \boxed{045}.$
Solution 3

Let the incircle of $ABM$ hit $AM$, $AB$, $BM$ at $X_{1},Y_{1},Z_{1}$, and let the incircle of $CBM$ hit $MC$, $BC$, $BM$ at $X_{2},Y_{2},Z_{2}$. Draw the incircle of $ABC$, and let it be tangent to $AC$ at $X$. Observe that we have a homothety centered at A sending the incircle of $ABM$ to that of $ABC$, and one centered at $C$ taking the incircle of $BCM$ to that of $ABC$. These have the same power, since they take incircles of the same size to the same circle. Also, the power of the homothety is $AX_{1}/AX=CX_{2}/CX$.

By standard computations, $AX=\frac{AB+AC-BC}{2}=7$ and $CX=\frac{BC+AC-AB}{2}=8$. Now, let $AX_{1}=7x$ and $CX_{2}=8x$. We will now go around and chase lengths. Observe that $BY_{1}=BA-AY_{1}=BA-AX_{1}=12-7x$. Then, $BZ_{1}=12-7x$. We also have $CY_{2}=CX_{2}=8x$, so $BY_{2}=13-8x$ and $BZ_{2}=13-8x$.

Observe now that $X_{1}M+MX_{2}=AC-15x=15(1-x)$. Also,$X_{1}M-MX_{2}=MZ_{1}-MZ_{2}=BZ_{2}-BZ_{1}=BY_{2}-BY_{1}=(1-x)$. Solving, we get $X_{1}M=8-8x$ and $MX_{2}=7-7x$ (as a side note, note that $AX_{1}+MX_{2}=X_{1}M+X_{2}C$, a result that I actually believe appears in Mandelbrot 1995-2003, or some book in that time-range).

Now, we get $BM=BZ_{2}+Z_{2}M=BZ_{2}+MX_{2}=20-15x$. To finish, we will compute area ratios. $\frac{[ABM]}{[CBM]}=\frac{AM}{MC}=\frac{8-x}{7+x}$. Also, since their inradii are equal, we get $\frac{[ABM]}{[CBM]}=\frac{40-16x}{40-14x}$. Equating and cross multiplying yields the quadratic $3x^{2}-8x+4=0$, so $x=2/3,2$. However, observe that $AX_{1}+CX_{2}=15x<15$, so we take $x=2/3$. Our ratio is therefore $\frac{8-2/3}{7+2/3}=\frac{22}{23}$, giving the answer $\boxed{045}$.
Solution 4

Suppose the incircle of $ABM$ touches $AM$ at $X$, and the incircle of $CBM$ touches $CM$ at $Y$. Then

$r = AX \tan(A/2) = CY \tan(C/2)$

We have $\cos A = \frac{12^2+15^2-13^2}{2\cdot 12\cdot 15} = \frac{200}{30\cdot 12}=\frac{5}{9}$, $\tan(A/2) = \sqrt{\frac{1-\cos A}{1+\cos A}} = \sqrt{\frac{9-5}{9+5}} = \frac{2}{\sqrt{14}}$

$\cos C = \frac{13^2+15^2-12^2}{2\cdot 13\cdot 15} = \frac{250}{30\cdot 13} = \frac{25}{39}$, $\tan(C/2) = \sqrt{\frac{39-25}{39+25}}=\frac{\sqrt{14}}{8}$,

Therefore $AX/CY = \tan(C/2)/\tan(A/2) = \frac{14}{2\cdot 8}= \frac{7}{8}.$

And since $AX=\frac{1}{2}(12+AM-BM)$, $CY = \frac{1}{2}(13+CM-BM)$,

$\frac{12+AM-BM}{13+CM-BM} = \frac{7}{8}$

$96+8AM-8BM = 91 +7CM-7BM$

$BM= 5 + 8AM-7CM = 5 + 15AM - 7(CM+AM) = 5+15(AM-7) \dots\dots (1)$

Now,

$\frac{AM}{CM} = \frac{[ABM]}{[CBM]} = \frac{\frac{1}{2}(12+AM+BM)r}{\frac{1}{2}(13+CM+BM)r}=\frac{12+AM+BM}{13+CM+BM}= \frac{12+BM}{13+BM} = \frac{17+15(AM-7)}{18+15(AM-7)}$

$\frac{AM}{15} = \frac{17+15(AM-7)}{35+30(AM-7)} = \frac{15AM-88}{30AM-175}$ $6AM^2 - 35AM = 45AM-264$ $3AM^2 -40AM+132=0$ $(3AM-22)(AM-6)=0$

So $AM=22/3$ or $6$. But from (1) we know that $5+15(AM-7)>0$, or $AM>7-1/3>6$, so $AM=22/3$, $CM=15-22/3=23/3$, $AM/CM=22/23$.

Sidenote

In the problem, $BM=10$ and the equal inradius of the two triangles happens to be $\frac {2\sqrt{14}}{3}$.


2010 AIME I Answer Key
Return to 2010 AIME I (2010 AIME I Problems) 
1.	107
    2.109
    3.529
    4.515
    5.501
    6.406
    7.760
    8.132
    9.158
    10.202
    11.365
    12.243
    13.069
    14.109
    15.045

