# 2009 AIME II

2009 AIME II Problems/Problem 1

Problem

Before starting to paint, Bill had $130$ ounces of blue paint, $164$ ounces of red paint, and $188$ ounces of white paint. Bill painted four equally sized stripes on a wall, making a blue stripe, a red stripe, a white stripe, and a pink stripe. Pink is a mixture of red and white, not necessarily in equal amounts. When Bill finished, he had equal amounts of blue, red, and white paint left. Find the total number of ounces of paint Bill had left.
Solution
Solution 1

After the pink stripe is drawn, all three colors will be used equally so the pink stripe must bring the amount of red and white paint down to $130$ ounces each. Say $a$ is the fraction of the pink paint that is red paint and $x$ is the size of each stripe. Then equations can be written: $ax = 164 - 130 = 34$ and $(1-a)x = 188 - 130 = 58$. The second equation becomes $x - ax = 58$ and substituting the first equation into this one we get $x - 34 = 58$ so $x = 92$. The amount of each color left over at the end is thus $130 - 92 = 38$ and $38 * 3 = \boxed{114}$.
Solution 2

We know that all the stripes are of equal size. We can then say that $r$ is the amount of paint per stripe. Then $130 - r$ will be the amount of blue paint left. Now for the other two stripes. The amount of white paint left after the white stripe and the amount of red paint left after the blue stripe are $188 - r$ and $164 - r$ respectively. The pink stripe is also r ounces of paint, but let there be $k$ ounces of red paint in the mixture and $r - k$ ounces of white paint. We now have two equations: $164 - r - k = 188 - r - (r-k)$ and $164 - r - k = 130 - r$. Solving yields k = 34 and r = 92. We now see that there will be $130 - 92 = 38$ ounces of paint left in each can. $38 * 3 = \boxed{114}$
Solution 3

Let the amount of paint each stripe painted used be $x$. Also, let the amount of paint of each color left be $y$. 1 stripe is drawn with the blue paint, and 3 stripes are drawn with the red and white paints. Add together the amount of red and white paint, $164 + 188 = 352$ and obtain the following equations : $352 - 3x = 2y$ and $130 - x = y$. Solve to obtain $x = 92$. Therefore $y$ is $130 - 92 = 38$, with three cans of equal amount of paint, the answer is $38 * 3 = \boxed{114}$.


2009 AIME II Problems/Problem 2

Problem

Suppose that $a$, $b$, and $c$ are positive real numbers such that $a^{\log_3 7} = 27$, $b^{\log_7 11} = 49$, and $c^{\log_{11}25} = \sqrt{11}$. Find $a^{(\log_3 7)^2} + b^{(\log_7 11)^2} + c^{(\log_{11} 25)^2}.$
Solution 1

First, we have: $x^{(\log_y z)^2} = x^{\left( (\log_y z)^2 \right) } = x^{(\log_y z) \cdot (\log_y z) } = \left( x^{\log_y z} \right)^{\log_y z}$

Now, let $x=y^w$, then we have: $x^{\log_y z} = \left( y^w \right)^{\log_y z} = y^{w\log_y z} = y^{\log_y (z^w)} = z^w$

This is all we need to evaluate the given formula. Note that in our case we have $27=3^3$, $49=7^2$, and $\sqrt{11}=11^{1/2}$. We can now compute:

$a^{(\log_3 7)^2} = \left( a^{\log_3 7} \right)^{\log_3 7} = 27^{\log_3 7} = (3^3)^{\log_3 7} = 7^3 = 343$

Similarly, we get $b^{(\log_7 11)^2} = (7^2)^{\log_7 11} = 11^2 = 121$

and $c^{(\log_{11} 25)^2} = (11^{1/2})^{\log_{11} 25} = 25^{1/2} = 5$

and therefore the answer is $343+121+5 = \boxed{469}$.
Solution 2

We know from the first three equations that $\log_a27$ = $\log_37$, $\log_b49$ = $\log_711$, and $\log_c\sqrt{11}$ = $\log_{11}25$. Substituting, we find

$a^{(\log_a27)(\log_37)} + b^{(\log_b49)(\log_711)} + c^{(\log_c\sqrt {11})(\log_{11}25)}$.

We know that $x^{\log_xy} =y$, so we find

$27^{\log_37} + 49^{\log_711} + \sqrt {11}^{\log_{11}25}$

$(3^{\log_37})^3 + (7^{\log_711})^2 + ({11^{\log_{11}25}})^{1/2}$.

The $3$ and the $\log_37$ cancel out to make $7$, and we can do this for the other two terms. We obtain

$7^3 + 11^2 + 25^{1/2}$

$= 343 + 121 + 5$ $= \boxed {469}$.


2009 AIME II Problems/Problem 3

Problem

In rectangle $ABCD$, $AB=100$. Let $E$ be the midpoint of $\overline{AD}$. Given that line $AC$ and line $BE$ are perpendicular, find the greatest integer less than $AD$.
Solution
Solution 1

<div align=center><img src="http://latex.artofproblemsolving.com/b/d/a/bda5479bee464bcc5f5c02a387f2f7ed6129f333.png" height="150px" /></div>

From the problem, $AB=100$ and triangle $FBA$ is a right triangle. As $ABCD$ is a rectangle, triangles $BCA$, and $ABE$ are also right triangles. By $AA$, $\triangle FBA \sim \triangle BCA$, and $\triangle FBA \sim \triangle ABE$, so $\triangle ABE \sim \triangle BCA$. This gives $\frac {AE}{AB}= \frac {AB}{BC}$. $AE=\frac{AD}{2}$ and $BC=AD$, so $\frac {AD}{2AB}= \frac {AB}{AD}$, or $(AD)^2=2(AB)^2$, so $AD=AB \sqrt{2}$, or $100 \sqrt{2}$, so the answer is $\boxed{141}$.
Solution 2

Let $x$ be the ratio of $BC$ to $AB$. On the coordinate plane, plot $A=(0,0)$, $B=(100,0)$, $C=(100,100x)$, and $D=(0,100x)$. Then $E=(0,50x)$. Furthermore, the slope of $\overline{AC}$ is $x$ and the slope of $\overline{BE}$ is $-x/2$. They are perpendicular, so they multiply to $-1$, that is, $x\cdot-\frac{x}{2}=-1,$ which implies that $-x^2=-2$ or $x=\sqrt 2$. Therefore $AD=100\sqrt 2\approx 141.42$ so $\lfloor AD\rfloor=\boxed{141}$.


2009 AIME II Problems/Problem 4

Problem

A group of children held a grape-eating contest. When the contest was over, the winner had eaten $n$ grapes, and the child in $k$-th place had eaten $n+2-2k$ grapes. The total number of grapes eaten in the contest was $2009$. Find the smallest possible value of $n$.
Solution
Resolving the ambiguity

The problem statement is confusing, as it can be interpreted in two ways: Either as "there is a $k>1$ such that the child in $k$-th place had eaten $n+2-2k$ grapes", or "for all $k$, the child in $k$-th place had eaten $n+2-2k$ grapes".

The second meaning was apparrently the intended one. Hence we will restate the problem statement in this way:

A group of $c$ children held a grape-eating contest. When the contest was over, the following was true: There was a $n$ such that for each $k$ between $1$ and $c$, inclusive, the child in $k$-th place had eaten exactly $n+2-2k$ grapes. The total number of grapes eaten in the contest was $2009$. Find the smallest possible value of $n$.
Solution 1

The total number of grapes eaten can be computed as the sum of the arithmetic progression with initial term $n$ (the number of grapes eaten by the child in $1$-st place), difference $d=-2$, and number of terms $c$. We can easily compute that this sum is equal to $c(n-c+1)$.

Hence we have the equation $2009=c(n-c+1)$, and we are looking for a solution $(n,c)$, where both $n$ and $c$ are positive integers, $n\geq 2(c-1)$, and $n$ is minimized. (The condition $n\geq 2(c-1)$ states that even the last child had to eat a non-negative number of grapes.)

The prime factorization of $2009$ is $2009=7^2 \cdot 41$. Hence there are $6$ ways how to factor $2009$ into two positive terms $c$ and $n-c+1$:

$c=1$, $n-c+1=2009$, then $n=2009$ is a solution.
$c=7$, $n-c+1=7\cdot 41=287$, then $n=293$ is a solution.
$c=41$, $n-c+1=7\cdot 7=49$, then $n=89$ is a solution.
In each of the other three cases, $n$ will obviously be less than $2(c-1)$, hence these are not valid solutions.

The smallest valid solution is therefore $c=41$, $n=\boxed{089}$.
Solution 2

If the first child ate $n=2m$ grapes, then the maximum number of grapes eaten by all the children together is $2m + (2m-2) + (2m-4) + \cdots + 4 + 2 = m(m+1)$. Similarly, if the first child ate $2m-1$ grapes, the maximum total number of grapes eaten is $(2m-1)+(2m-3)+\cdots+3+1 = m^2$.

For $m=44$ the value $m(m+1)=44\cdot 45 =1980$ is less than $2009$. Hence $n$ must be at least $2\cdot 44+1=89$. For $n=89$, the maximum possible sum is $45^2=2025$. And we can easily see that $2009 = 2025 - 16 = 2025 - (1+3+5+7)$, hence $2009$ grapes can indeed be achieved for $n=89$ by dropping the last four children.

Hence we found a solution with $n=89$ and $45-4=41$ kids, and we also showed that no smaller solution exists. Therefore the answer is $\boxed{089}$.


2009 AIME II Problems/Problem 5
Problem 5

Equilateral triangle $T$ is inscribed in circle $A$, which has radius $10$. Circle $B$ with radius $3$ is internally tangent to circle $A$ at one vertex of $T$. Circles $C$ and $D$, both with radius $2$, are internally tangent to circle $A$ at the other two vertices of $T$. Circles $B$, $C$, and $D$ are all externally tangent to circle $E$, which has radius $\frac mn$, where $m$ and $n$ are relatively prime positive integers. Find $m+n$.

<div align=center><img src="http://latex.artofproblemsolving.com/2/c/9/2c9d04c4ba8f11721bf58a4058fa3c4a849369c4.png" height="200px" /></div>

Solution

Let $X$ be the intersection of the circles with centers $B$ and $E$, and $Y$ be the intersection of the circles with centers $C$ and $E$. Since the radius of $B$ is $3$, $AX =4$. Assume $AE$ = $m$. Then $EX$ and $EY$ are radii of circle $E$ and have length $4+m$. $AC = 8$, and it can easily be shown that angle $CAE = 60$ degrees. Using the Law of Cosines on triangle $CAE$, we obtain

$(6+m)^2 =m^2 + 64 - 2(8)(m) \cos 60$.

The $2$ and the $\cos 60$ terms cancel out:

$m^2 + 12m +36 = m^2 + 64 - 8m$

$12m+ 36 = 64 - 8m$

$m =\frac {28}{20} = \frac {7}{5}$. The radius of circle $E$ is $4 + \frac {7}{5} = \frac {27}{5}$, so the answer is $27 + 5 = \boxed{032}$.


2009 AIME II Problems/Problem 6

Problem

Let $m$ be the number of five-element subsets that can be chosen from the set of the first $14$ natural numbers so that at least two of the five numbers are consecutive. Find the remainder when $m$ is divided by $1000$.
Solution

We can use complementary counting. We can choose a five-element subset in ${14\choose 5}$ ways. We will now count those where no two numbers are consecutive. We will show a bijection between this set, and the set of 10-element strings that contain 5 $A$s and 5 $B$s, thereby showing that there are ${10\choose 5}$ such sets.

Given a five-element subset $S$ of $\{1,2,\dots,14\}$ in which no two numbers are consecutive, we can start by writing down a string of length 14, in which the $i$-th character is $A$ if $i\in S$ and $B$ otherwise. Now we got a string with 5 $A$s and 9 $B$s. As no two numbers were consecutive, we know that in our string no two $A$s are consecutive. We can now remove exactly one $B$ from between each pair of $A$s to get a string with 5 $A$s and 5 $B$s. And clearly this is a bijection, as from each string with 5 $A$s and 5 $B$s we can reconstruct one original set by reversing the construction.

Hence we have $m = {14\choose 5} - {10\choose 5} = 2002 - 252 = 1750$, and the answer is $1750 \bmod 1000 = \boxed{750}$.
Solution 2

Let $A$ be the number of ways in which $5$ distinct numbers can be selected from the set of the first $14$ natural numbers, and let $B$ be the number of ways in which $5$ distinct numbers, no two of which are consecutive, can be selected from the same set. Then $m = A -B$. Because $A = \binom{14}{5}$, the problem is reduced to finding $B$. Consider the natural numbers $1 \leq a_1 < a_2 < a_3 < a_4 < a_5 \leq 14$. If no two of them are consecutive, the numbers $b_1 = a_1, b_2 = a_2 - 1$, $b_3 = a_3 - 2$, $b_4 = a_4 - 3$, and $b_5 = a_5 - 4$ are distinct numbers from the interval $[1, 10]$. Conversely, if $b_1 < b_2 < b_3 < b_4 < b_5$ are distinct natural numbers from the interval $[1, 10]$, then $a_1 = b_1$, $a_2 = b_2 + 1$, $a_3 = b_3 + 2$, $a_4 = b_4 + 3$, and $a_5 = b_5 + 4$ are from the interval $[1, 14]$, and no two of them are consecutive. Therefore counting $B$ is the same as counting the number of ways of choosing $5$ distinct numbers from the set of the first $10$ natural numbers. Thus $B = \binom{10}{5}$. Hence $m = A - B = \binom{14}{5} - \binom{10}{5} = 2002 - 252 = 1750$ and the answer is $750$.


2009 AIME II Problems/Problem 7
Problem

Define $n!!$ to be $n(n-2)(n-4)\cdots 3\cdot 1$ for $n$ odd and $n(n-2)(n-4)\cdots 4\cdot 2$ for $n$ even. When $\sum_{i=1}^{2009} \frac{(2i-1)!!}{(2i)!!}$ is expressed as a fraction in lowest terms, its denominator is $2^ab$ with $b$ odd. Find $\frac{ab}{10}$.
Solution

First, note that $(2n)!! = 2^n \cdot n!$, and that $(2n)!! \cdot (2n-1)!! = (2n)!$.

We can now take the fraction $\frac{(2i-1)!!}{(2i)!!}$ and multiply both the numerator and the denominator by $(2i)!!$. We get that this fraction is equal to $\frac{(2i)!}{(2i)!!^2} = \frac{(2i)!}{2^{2i}(i!)^2}$.

Now we can recognize that $\frac{(2i)!}{(i!)^2}$ is simply ${2i \choose i}$, hence this fraction is $\frac{{2i\choose i}}{2^{2i}}$, and our sum turns into $S=\sum_{i=1}^{2009} \frac{{2i\choose i}}{2^{2i}}$.

Let $c = \sum_{i=1}^{2009} {2i\choose i} \cdot 2^{2\cdot 2009 - 2i}$. Obviously $c$ is an integer, and $S$ can be written as $\frac{c}{2^{2\cdot 2009}}$. Hence if $S$ is expressed as a fraction in lowest terms, its denominator will be of the form $2^a$ for some $a\leq 2\cdot 2009$.

In other words, we just showed that $b=1$. To determine $a$, we need to determine the largest power of $2$ that divides $c$.

Let $p(i)$ be the largest $x$ such that $2^x$ that divides $i$.

We can now return to the observation that $(2i)! = (2i)!! \cdot (2i-1)!! = 2^i \cdot i! \cdot (2i-1)!!$. Together with the obvious fact that $(2i-1)!!$ is odd, we get that $p((2i)!)=p(i!)+i$.

It immediately follows that $p\left( {2i\choose i} \right) = p((2i)!) - 2p(i!) = i - p(i!)$, and hence $p\left( {2i\choose i} \cdot 2^{2\cdot 2009 - 2i} \right) = 2\cdot 2009 - i - p(i!)$.

Obviously, for $i\in\{1,2,\dots,2009\}$ the function $f(i)=2\cdot 2009 - i - p(i!)$ is is a strictly decreasing function. Therefore $p(c) = p\left( {2\cdot 2009\choose 2009} \right) = 2009 - p(2009!)$.

We can now compute $p(2009!) = \sum_{k=1}^{\infty} \left\lfloor \frac{2009}{2^k} \right\rfloor = 1004 + 502 + \cdots + 3 + 1 = 2001$. Hence $p(c)=2009-2001=8$.

And thus we have $a=2\cdot 2009 - p(c) = 4010$, and the answer is $\frac{ab}{10} = \frac{4010\cdot 1}{10} = \boxed{401}$.

Additionally, once you count the number of factors of $2$ in the summation, one can consider the fact that, since $b$ must be odd, it has to take on a value of $1,3,5,7,$ or $9$ (Because the number of $2$s in the summation is clearly greater than $1000$, dividing by $10$ will yield a number greater than $100$, and multiplying this number by any odd number greater than $9$ will yield an answer $>999$, which cannot happen on the AIME.) Once you calculate the value of $4010$, and divide by $10$, $b$ must be equal to $1$, as any other value of $b$ will result in an answer $>999$. This gives $\boxed{401}$ as the answer.


2009 AIME II Problems/Problem 8

Problem

Dave rolls a fair six-sided die until a six appears for the first time. Independently, Linda rolls a fair six-sided die until a six appears for the first time. Let $m$ and $n$ be relatively prime positive integers such that $\frac mn$ is the probability that the number of times Dave rolls his die is equal to or within one of the number of times Linda rolls her die. Find $m+n$.
Solution
Solution 1

There are many almost equivalent approaches that lead to summing a geometric series. For example, we can compute the probability of the opposite event. Let $p$ be the probability that Dave will make at least two more throws than Linda. Obviously, $p$ is then also the probability that Linda will make at least two more throws than Dave, and our answer will therefore be $1-2p$.

How to compute $p$?

Suppose that Linda made exactly $t$ throws. The probability that this happens is $(5/6)^{t-1}\cdot (1/6)$, as she must make $t-1$ unsuccessful throws followed by a successful one. In this case, we need Dave to make at least $t+2$ throws. This happens iff his first $t+1$ throws are unsuccessful, hence the probability is $(5/6)^{t+1}$.

Thus for a fixed $t$ the probability that Linda makes $t$ throws and Dave at least $t+2$ throws is $(5/6)^{2t} \cdot (1/6)$.

Then, as the events for different $t$ are disjoint, $p$ is simply the sum of these probabilities over all $t$. Hence:

$\begin{align*} p & = \sum_{t=1}^\infty \left(\frac 56\right)^{2t} \cdot \frac 16 \\ & = \frac 16 \cdot \left(\frac 56\right)^2 \cdot \sum_{x=0}^\infty \left(\frac{25}{36}\right)^x \\ & = \frac 16 \cdot \frac{25}{36} \cdot \frac 1{1 - \frac{25}{36}} \\ & = \frac 16 \cdot \frac{25}{36} \cdot \frac{36}{11} \\ & = \frac {25}{66} \end{align*}$

Hence the probability we were supposed to compute is $1 - 2p = 1 - 2\cdot \frac{25}{66} = 1 - \frac{25}{33} = \frac 8{33}$, and the answer is $8+33 = \boxed{041}$.
Solution 2

Let $p$ be the probability that the number of times Dave rolls his die is equal to or within one of the number of times Linda rolls her die. (We will call this event "a win", and the opposite event will be "a loss".)

Let both players roll their first die.

With probability $\frac 1{36}$, both throw a six and we win.

With probability $\frac{10}{36}$ exactly one of them throws a six. In this case, we win iff the remaining player throws a six in their next throw, which happens with probability $\frac 16$.

Finally, with probability $\frac{25}{36}$ none of them throws a six. Now comes the crucial observation: At this moment, we are in exactly the same situation as in the beginning. Hence in this case we will win with probability $p$.

We just derived the following linear equation: $p = \frac 1{36} + \frac{10}{36} \cdot \frac 16 + \frac{25}{36} \cdot p$

Solving for $p$, we get $p=\frac 8{33}$, hence the answer is $8+33 = \boxed{041}$.




2009 AIME II Problems/Problem 9

Problem

Let $m$ be the number of solutions in positive integers to the equation $4x+3y+2z=2009$, and let $n$ be the number of solutions in positive integers to the equation $4x+3y+2z=2000$. Find the remainder when $m-n$ is divided by $1000$.
Solution
Solution 1

Ugly bashing(jk). It is actually reasonably easy to compute $m$ and $n$ exactly.

First, note that if $4x+3y+2z=2009$, then $y$ must be odd. Let $y=2y'-1$. We get $4x + 6y' - 3 + 2z = 2009$, which simplifies to $2x + 3y' + z = 1006$. For any pair of positive integers $(x,y')$ such that $2x + 3y' < 1006$ we have exactly one $z$ such that the equality holds. Hence we need to count the pairs $(x,y')$.

For a fixed $y'$, $x$ can be at most $\left\lfloor \frac{1005-3y'}2 \right\rfloor$. Hence the number of solutions is

$\begin{align*} m & = \sum_{y'=1}^{334} \left\lfloor \frac{1005-3y'}2 \right\rfloor \\ & = 501 + 499 + 498 + 496 + \cdots + 6 + 4 + 3 + 1 \\ & = 1000 + 994 + \cdots + 10 + 4 \\ & = 83834 \end{align*}$

Similarly, we can compute that $n=82834$, hence $(m-n)\bmod 1000 = 1000\bmod 1000 = \boxed{000}$.
Solution 2

We can avoid computing $m$ and $n$, instead we will compute $m-n$ directly.

Note that $4x+3y+2z=2009$ if and only if $4(x-1)+3(y-1)+2(z-1)=2000$. Hence there is an almost 1-to-1 correspondence between the positive integer solutions of the two equations. The only exceptions are the solutions of the first equation in which at least one of the variables is equal to $1$. The value $m-n$ is the number of such solutions.

If $x=1$, we get the equation $3y+2z=2005$. The variable $y$ must be odd, and it must be between $1$ and $667$, inclusive. For each such $y$ there is exactly one valid $z$. Hence in this case there are $334$ valid solutions.

If $y=1$, we get the equation $4x+2z=2006$, or equivalently $2x+z=1003$. The variable $x$ must be between $1$ and $501$, inclusive, and for each such $x$ there is exactly one valid $z$. Hence in this case there are $501$ valid solutions.

If $z=1$, we get the equation $4x+3y=2007$. The variable $y$ must be odd, thus let $y=2u-1$. We get $4x+6u=2010$, or equivalently, $2x+3u=1005$. Again, we see that $u$ must be odd, thus let $u=2v-1$. We get $2x+6v=1008$, which simplifies to $x+3v=504$. Now, we see that $v$ must be between $1$ and $167$, inclusive, and for each such $v$ we have exactly one valid $x$. Hence in this case there are $167$ valid solutions.

Finally, we must note that there are two special solutions: one with $x=y=1$, and one with $y=z=1$. We counted each of them twice, hence we have to subtract two from the total.

Therefore $m-n = 334 + 501 + 167 - 2 = 1000$, and the answer is $1000\bmod 1000 = \boxed{000}$.
Solution 3

In this solution we will perform a similar operation as in Solution 2, but only on $y$: $4x+3y+2z=2009$ if and only if $4x+3(y-3)+2z=2000$. There is a one-to-one correspondence between the solutions of these two equations. Let $y'=y-3$ and require $y'$ to be positive as well. Then the second equation becomes $4x+3y'+2z=2000$. Notice that there are several "extra" solutions in the first equation that cannot be included in the second equation (since that would make $y'$ non-positive). The value $m-n$ is therefore the number of "extra" solutions.

Since $y'=y-3$, in order for $y'$ to be non-positive $1 \geq y \leq 3$. However, equation (1) requires y to be odd, so we have two cases to consider: $y=1$ and $y=3$. This results in the two equations $4x+3+2z=2009$ and $4x+9+2z=2009$.

$4x+3+2z=2009$ simplifies to $2x+z=1003$. There is exactly one valid $z$ for each $x$; $x$ must be between $1$ and $501$ (inclusive) to obtain positive integer solutions. Therefore, there are $501$ solutions in this case.

$4x+9+2z=2009$ simplifies to $2x+z=1000$. There is exactly one valid $z$ for each $x$; $x$ must be between $1$ and $499$ (inclusive) to obtain positive integer solutions. Therefore, there are $499$ solutions in this case.

Thus, $m-n = 501 + 499 = 1000; 1000 \bmod 1000 = \boxed{000}$.


2009 AIME II Problems/Problem 10

Four lighthouses are located at points $A$, $B$, $C$, and $D$. The lighthouse at $A$ is $5$ kilometers from the lighthouse at $B$, the lighthouse at $B$ is $12$ kilometers from the lighthouse at $C$, and the lighthouse at $A$ is $13$ kilometers from the lighthouse at $C$. To an observer at $A$, the angle determined by the lights at $B$ and $D$ and the angle determined by the lights at $C$ and $D$ are equal. To an observer at $C$, the angle determined by the lights at $A$ and $B$ and the angle determined by the lights at $D$ and $B$ are equal. The number of kilometers from $A$ to $D$ is given by $\frac {p\sqrt{q}}{r}$, where $p$, $q$, and $r$ are relatively prime positive integers, and $r$ is not divisible by the square of any prime. Find $p$ + $q$ + $r$.


Solution 1

Let $O$ be the intersection of $BC$ and $AD$. By the Angle Bisector Theorem, $\frac {5}{BO}$ = $\frac {13}{CO}$, so $BO$ = $5x$ and $CO$ = $13x$, and $BO$ + $OC$ = $BC$ = $12$, so $x$ = $\frac {2}{3}$, and $OC$ = $\frac {26}{3}$. Let $P$ be the foot of the altitude from $D$ to $OC$. It can be seen that triangle $DOP$ is similar to triangle $AOB$, and triangle $DPC$ is similar to triangle $ABC$. If $DP$ = $15y$, then $CP$ = $36y$, $OP$ = $10y$, and $OD$ = $5y\sqrt {13}$. Since $OP$ + $CP$ = $46y$ = $\frac {26}{3}$, $y$ = $\frac {13}{69}$, and $AD$ = $\frac {60\sqrt{13}}{23}$ (by the pythagorean theorem on triangle $ABO$ we sum $AO$ and $OD$). The answer is $60$ + $13$ + $23$ = $\boxed{096}$.
Solution 2

Extend $AB$ and $CD$ to intersect at $P$. Note that since $\angle ACB=\angle PCB$ and $\angle ABC=\angle PBC=90^{\circ}$ by ASA congruency we have $\triangle ABC\cong \triangle PBC$. Therefore $AC=PC=13$.

By the angle bisector theorem, $PD=\frac{130}{23}$ and $CD=\frac{169}{23}$. Now we apply Stewart's theorem to find $AD$:

$\begin{align*}13\cdot \frac{130}{23}\cdot \frac{169}{23}+13\cdot AD^2&=13\cdot 13\cdot \frac{130}{23}+10\cdot 10\cdot \frac{169}{23}\\ 13\cdot \frac{130}{23}\cdot \frac{169}{23}+13\cdot AD^2&=\frac{169\cdot 130+169\cdot 100}{23}\\ 13\cdot \frac{130}{23}\cdot \frac{169}{23}+13\cdot AD^2&=1690\\ AD^2&=130-\frac{130\cdot 169}{23^2}\\ AD^2&=\frac{130\cdot 23^2-130\cdot 169}{23^2}\\ AD^2&=\frac{130(23^2-169)}{23^2}\\ AD^2&=\frac{130(360)}{23^2}\\ AD&=\frac{60\sqrt{13}}{23}\\ \end{align*}$

and our final answer is $60+13+23=\boxed{096}$.


2009 AIME II Problems/Problem 11
Problem

For certain pairs $(m,n)$ of positive integers with $m\geq n$ there are exactly $50$ distinct positive integers $k$ such that $|\log m - \log k| < \log n$. Find the sum of all possible values of the product $mn$.
Solution

We have $\log m - \log k = \log \left( \frac mk \right)$, hence we can rewrite the inequality as follows: $- \log n < \log \left( \frac mk \right) < \log n$ We can now get rid of the logarithms, obtaining: $\frac 1n < \frac mk < n$ And this can be rewritten in terms of $k$ as $\frac mn < k < mn$

From $k<mn$ it follows that the $50$ solutions for $k$ must be the integers $mn-1, mn-2, \dots, mn-50$. This will happen if and only if the lower bound on $k$ is in a suitable range -- we must have $mn-51 \leq \frac mn < mn-50$.

Obviously there is no solution for $n=1$. For $n>1$ the left inequality can be rewritten as $m\leq\frac{51n}{n^2-1}$, and the right one as $m > \frac{50n}{n^2-1}$.

Remember that we must have $m\geq n$. However, for $n\geq 8$ we have $\frac{51n}{n^2-1} < n$, and hence $m<n$, which is a contradiction. This only leaves us with the cases $n\in\{2,3,4,5,6\}$.

For $n=2$ we have $\frac{100}3 < m \leq \frac{102}3$ with a single integer solution $m=\frac{102}3=34$.
For $n=3$ we have $\frac{150}8 < m \leq \frac{153}8$ with a single integer solution $m=\frac{152}8=19$.
For $n=4,5,6$ our inequality has no integer solutions for $m$.

Therefore the answer is $34\cdot 2 + 19\cdot 3 = 68 + 57 = \boxed{125}$.


2009 AIME II Problems/Problem 12
Problem

From the set of integers $\{1,2,3,\dots,2009\}$, choose $k$ pairs $\{a_i,b_i\}$ with $a_i<b_i$ so that no two pairs have a common element. Suppose that all the sums $a_i+b_i$ are distinct and less than or equal to $2009$. Find the maximum possible value of $k$.
Solution

Suppose that we have a valid solution with $k$ pairs. As all $a_i$ and $b_i$ are distinct, their sum is at least $1+2+3+\cdots+2k=k(2k+1)$. On the other hand, as the sum of each pair is distinct and at most equal to $2009$, the sum of all $a_i$ and $b_i$ is at most $2009 + (2009-1) + \cdots + (2009-(k-1)) = k(4019-k)/2$.

Hence we get a necessary condition on $k$: For a solution to exist, we must have $k(4019-k)/2 \geq k(2k+1)$. As $k$ is positive, this simplifies to $(4019-k)/2 \geq 2k+1$, whence $5k\leq 4017$, and as $k$ is an integer, we have $k\leq \lfloor 4017/5\rfloor = 803$.

If we now find a solution with $k=803$, we can be sure that it is optimal.

From the proof it is clear that we don't have much "maneuvering space", if we want to construct a solution with $k=803$. We can try to use the $2k$ smallest numbers: $1$ to $2\cdot 803 = 1606$. When using these numbers, the average sum will be $1607$. Hence we can try looking for a nice systematic solution that achieves all sums between $1607-401=1206$ and $1607+401=2008$, inclusive.

Such a solution indeed does exist, here is one:

Partition the numbers $1$ to $1606$ into four sequences:

$A=1,3,5,7,\dots,801,803$
$B=1205,1204,1203,1202,\dots,805,804$
$C=2,4,6,8,\dots,800,802$
$D=1606,1605,1604,1603,\dots,1207,1206$

Sequences $A$ and $B$ have $402$ elements each, and the sums of their corresponding elements are $1206,1207,1208,1209,\dots,1606,1607$. Sequences $C$ and $D$ have $401$ elements each, and the sums of their corresponding elements are $1608,1609,1610,1611,\dots,2007,2008$.

Thus we have shown that there is a solution for $k=\boxed{803}$ and that for larger $k$ no solution exists.


2009 AIME II Problems/Problem 13

Problem

Let $A$ and $B$ be the endpoints of a semicircular arc of radius $2$. The arc is divided into seven congruent arcs by six equally spaced points $C_1$, $C_2$, $\dots$, $C_6$. All chords of the form $\overline {AC_i}$ or $\overline {BC_i}$ are drawn. Let $n$ be the product of the lengths of these twelve chords. Find the remainder when $n$ is divided by $1000$.


Solution
Solution 1

Let the radius be 1 instead. All lengths will be halved so we will multiply by $2^{12}$ at the end. Place the semicircle on the complex plane, with the center of the circle being 0 and the diameter being the real axis. Then $C_1,\ldots, C_6$ are 6 of the 14th roots of unity. Let $\omega=\text{cis}\frac{360^{\circ}}{14}$; then $C_1,\ldots, C_6$ correspond to $\omega,\ldots, \omega^6$. Let $C_1',\ldots, C_6'$ be their reflections across the diameter. These points correspond to $\omega^8\ldots, \omega^{13}$. Then the lengths of the segments are $|1-\omega|,\ldots, |1-\omega^6|,|1-\omega^8|,\ldots |1-\omega^{13}|$. Noting that $B$ represents 1 in the complex plane, the desired product is $\begin{align*} BC_1\cdots BC_6 \cdot AC_1\cdots AC_6&= BC_1\cdots BC_6 \cdot BC_1'\cdots BC_6\\ &= |(x-\omega^1)\ldots(x-\omega^6)(x-\omega^8)\ldots(x-\omega^{13})| \end{align*}$

for $x=1$. However, the polynomial $(x-\omega^1)\ldots(x-\omega^6)(x-\omega^8)\ldots(x-\omega^{13})$ has as its zeros all 14th roots of unity except for $-1$ and $1$. Hence $(x-\omega^1)\ldots(x-\omega^6)(x-\omega^8)\ldots(x-\omega^{13})=\frac{x^{14}-1}{(x-1)(x+1)}=x^{12}+x^{10}+\cdots +x^2+1.$ Thus the product is $|x^{12}+\cdots +x^2+1|=7$ ($x=1$) when the radius is 1, and the product is $2^{12}\cdot 7=28672$. Thus the answer is $\boxed {672}$.
Solution 2

Let $O$ be the midpoint of $A$ and $B$. Assume $C_1$ is closer to $A$ instead of $B$. $\angle AOC_1$ = $\frac {\pi}{7}$. Using the Law of Cosines,

$\overline {AC_1}^2$ = $8 - 8 \cos \frac {\pi}{7}$, $\overline {AC_2}^2$ = $8 - 8 \cos \frac {2\pi}{7}$, . . . $\overline {AC_6}^2$ = $8 - 8 \cos \frac {6\pi}{7}$

So $n$ = $(8^6)(1 - \cos \frac {\pi}{7})(1 - \cos \frac {2\pi}{7})\dots(1 - \cos \frac{6\pi}{7})$. It can be rearranged to form

$n$ = $(8^6)(1 - \cos \frac {\pi}{7})(1 - \cos \frac {6\pi}{7})\dots(1 - \cos \frac {3\pi}{7})(1 - \cos \frac {4\pi}{7})$.

$\cos a$ = - $\cos (\pi - a)$, so we have

$n$ = $(8^6)(1 - \cos \frac {\pi}{7})(1 + \cos \frac {\pi}{7}) \dots (1 - \cos \frac {3\pi}{7})(1 + \cos \frac {3\pi}{7})$

= $(8^6)(1 - \cos^2 \frac {\pi}{7})(1 - \cos^2 \frac {2\pi}{7})(1 - \cos^2 \frac {3\pi}{7})$

= $(8^6)(\sin^2 \frac {\pi}{7})(\sin^2 \frac {2\pi}{7})(\sin^2 \frac {3\pi}{7})$

It can be shown that $\sin \frac {\pi}{7} \sin \frac {2\pi}{7} \sin \frac {3\pi}{7}$ = $\frac {\sqrt {7}}{8}$, so $n$ = $8^6(\frac {\sqrt {7}}{8})^2$ = $7(8^4)$ = $28672$, so the answer is $\boxed {672}$
Solution 3

Note that for each $k$ the triangle $ABC_k$ is a right triangle. Hence the product $AC_k \cdot BC_k$ is twice the area of the triangle $ABC_k$. Knowing that $AB=4$, the area of $ABC_k$ can also be expressed as $2c_k$, where $c_k$ is the length of the altitude from $C_k$ onto $AB$. Hence we have $AC_k \cdot BC_k = 4c_k$.

By the definition of $C_k$ we obviously have $c_k = 2\sin\frac{k\pi}7$.

From these two observations we get that the product we should compute is equal to $8^6 \cdot \prod_{k=1}^6 \sin \frac{k\pi}7$, which is the same identity as in Solution 2.
Computing the product of sines

In this section we show one way how to evaluate the product $\prod_{k=1}^6 \sin \frac{k\pi}7 = \prod_{k=1}^3 (\sin \frac{k\pi}7)^2$.

Let $\omega_k = \cos \frac{2k\pi}7 + i\sin \frac{2k\pi}7$. The numbers $1,\omega_1,\omega_2,\dots,\omega_6$ are the $7$-th complex roots of unity. In other words, these are the roots of the polynomial $x^7-1$. Then the numbers $\omega_1,\omega_2,\dots,\omega_6$ are the roots of the polynomial $\frac{x^7-1}{x-1} = x^6+x^5+\cdots+x+1$.

We just proved the identity $\prod_{k=1}^6 (x - \omega_k) = x^6+x^5+\cdots+x+1$. Substitute $x=1$. The right hand side is obviously equal to $7$. Let's now examine the left hand side. We have:

$\begin{align*} (1-\omega_k)(1-\omega_{k-7})=|1-\omega_k|^2 & = \left( 1-\cos \frac{2k\pi}7 \right)^2 + \left( \sin \frac{2k\pi}7 \right)^2 \\ & = 2-2\cos \frac{2k\pi}7 \\ & = 2-2 \left( 1 - 2 \left( \sin \frac{k\pi}7 \right)^2 \right) \\ & = 4\left( \sin \frac{k\pi}7 \right)^2 \end{align*}$

Therefore the size of the left hand side in our equation is $\prod_{k=1}^3 4 (\sin \frac{k\pi}7)^2 = 2^6 \prod_{k=1}^3 (\sin \frac{k\pi}7)^2$. As the right hand side is $7$, we get that $\prod_{k=1}^3 (\sin \frac{k\pi}7)^2 = \frac{7}{2^6}$.


2009 AIME II Problems/Problem 14

Problem

The sequence $(a_n)$ satisfies $a_0=0$ and $a_{n + 1} = \frac85a_n + \frac65\sqrt {4^n - a_n^2}$ for $n\geq 0$. Find the greatest integer less than or equal to $a_{10}$.
Solution
The "obvious" substitution

An obvious way how to get the $4^n$ from under the square root is to use the substitution $a_n = 2^n b_n$. Then the square root simplifies as follows: $\sqrt{4^n - a_n^2} = \sqrt{4^n - (2^n b_n)^2} = \sqrt{4^n - 4^n b_n^2} = 2^n \sqrt{1 - b_n^2}$.

The new recurrence then becomes $b_0=0$ and $b_{n+1} = \frac45 b_n + \frac 35\sqrt{1 - b_n^2}$.
Solution 1

We can now simply start to compute the values $b_i$ by hand:

$\begin{align*} b_1 & = \frac 35 \\ b_2 & = \frac 45\cdot \frac 35 + \frac 35 \sqrt{1 - \left(\frac 35\right)^2} = \frac{24}{25} \\ b_3 & = \frac 45\cdot \frac {24}{25} + \frac 35 \sqrt{1 - \left(\frac {24}{25}\right)^2} = \frac{96}{125} + \frac 35\cdot\frac 7{25} = \frac{117}{125} \\ b_4 & = \frac 45\cdot \frac {117}{125} + \frac 35 \sqrt{1 - \left(\frac {117}{125}\right)^2} = \frac{468}{625} + \frac 35\cdot\frac {44}{125} = \frac{600}{625} = \frac{24}{25} \end{align*}$

We now discovered that $b_4=b_2$. And as each $b_{i+1}$ is uniquely determined by $b_i$, the sequence becomes periodic. In other words, we have $b_3=b_5=b_7=\cdots=\frac{117}{125}$, and $b_2=b_4=\cdots=b_{10}=\cdots=\frac{24}{25}$.

Therefore the answer is

$\begin{align*} \lfloor a_{10} \rfloor & = \left\lfloor 2^{10} b_{10} \right\rfloor = \left\lfloor \frac{1024\cdot 24}{25} \right\rfloor = \left\lfloor \frac{1025\cdot 24}{25} - \frac{24}{25} \right\rfloor \\ & = \left\lfloor 41\cdot 24 - \frac{24}{25} \right\rfloor = 41\cdot 24 - 1 = \boxed{983} \end{align*}$
Solution 2

After we do the substitution, we can notice the fact that $\left( \frac 35 \right)^2 + \left( \frac 45 \right)^2 = 1$, which may suggest that the formula may have something to do with the unit circle. Also, the expression $\sqrt{1-x^2}$ often appears in trigonometry, for example in the relationship between the sine and the cosine. Both observations suggest that the formula may have a neat geometric interpretation.

Consider the equation: $y = \frac45 x + \frac 35\sqrt{1 - x^2}$

Note that for $t=\sin^{-1} \frac 35$ we have $\sin t=\frac 35$ and $\cos t = \frac 45$. Now suppose that we have $x=\sin s$ for some $s$. Then our equation becomes:

$y=\cos t \cdot \sin s + \sin t \cdot |\cos s|$

Depending on the sign of $\cos s$, this is either the angle addition, or the angle subtraction formula for sine. In other words, if $\cos s \geq 0$, then $y=\sin(s+t)$, otherwise $y=\sin(s-t)$.

We have $b_0=0=\sin 0$. Therefore $b_1 = \sin(0+t) = \sin t$, $b_2 = \sin(t+t) = \sin (2t)$, and so on. (Remember that $t$ is the constant defined as $t=\sin^{-1} \frac 35$.)

This process stops at the first $b_k = \sin (kt)$, where $kt$ exceeds $\frac{\pi}2$. Then we'll have $b_{k+1} = \sin(kt - t) = \sin ((k-1)t) = b_{k-1}$ and the sequence will start to oscillate.

Note that $\sin \frac{\pi}6 = \frac 12 < \frac 35$, and $\sin \frac{\pi}4 = \frac{\sqrt 2}2 > \frac 35$, hence $t$ is strictly between $\frac{\pi}6$ and $\frac{\pi}4$. Then $2t\in\left(\frac{\pi}3,\frac{\pi}2 \right)$, and $3t\in\left( \frac{\pi}2, \frac{3\pi}4 \right)$. Therefore surely $2t < \frac{\pi}2 < 3t$.

Hence the process stops with $b_3 = \sin (3t)$, we then have $b_4 = \sin (2t) = b_2$. As in the previous solution, we conclude that $b_{10}=b_2$, and that the answer is $\lfloor a_{10} \rfloor = \left\lfloor 2^{10} b_{10} \right\rfloor = \boxed{983}$.


2009 AIME II Problems/Problem 15

Problem

Let $\overline{MN}$ be a diameter of a circle with diameter 1. Let $A$ and $B$ be points on one of the semicircular arcs determined by $\overline{MN}$ such that $A$ is the midpoint of the semicircle and $MB=\frac{3}5$. Point $C$ lies on the other semicircular arc. Let $d$ be the length of the line segment whose endpoints are the intersections of diameter $\overline{MN}$ with chords $\overline{AC}$ and $\overline{BC}$. The largest possible value of $d$ can be written in the form $r-s\sqrt{t}$, where $r, s$ and $t$ are positive integers and $t$ is not divisible by the square of any prime. Find $r+s+t$.
Solutions
Solution 1

Let $O$ be the center of the circle. Define $\angle{MOC}=t$, $\angle{BOA}=2a$, and let $BC$ and $AC$ intersect $MN$ at points $X$ and $Y$, respectively. We will express the length of $XY$ as a function of $t$ and maximize that function in the interval $[0, \pi]$.

Let $C'$ be the foot of the perpendicular from $C$ to $MN$. We compute $XY$ as follows.

(a) By the Extended Law of Sines in triangle $ABC$, we have

$CA$

$= \sin\angle{ABC}$

$= \sin\left(\frac{\widehat{AN} + \widehat{NC}}{2}\right)$

$= \sin\left(\frac{\frac{\pi}{2} + (\pi-t)}{2}\right)$

$= \sin\left(\frac{3\pi}{4} - \frac{t}{2}\right)$

$= \sin\left(\frac{\pi}{4} + \frac{t}{2}\right)$

(b) Note that $CC' = CO\sin(t) = \left(\frac{1}{2}\right)\sin(t)$ and $AO = \frac{1}{2}$. Since $CC'Y$ and $AOY$ are similar right triangles, we have $CY/AY = CC'/AO = \sin(t)$, and hence,

$CY/CA$

$= \frac{CY}{CY + AY}$

$= \frac{\sin(t)}{1 + \sin(t)}$

$= \frac{\sin(t)}{\sin\left(\frac{\pi}{2}\right) + \sin(t)}$

$= \frac{\sin(t)}{2\sin\left(\frac{\pi}{4} + \frac{t}{2}\right)\cos\left(\frac{\pi}{4} - \frac{t}{2}\right)}$

(c) We have $\angle{XCY} = \frac{\widehat{AB}}{2}=a$ and $\angle{CXY} = \frac{\widehat{MB}+\widehat{CN}}{2} = \frac{\left(\frac{\pi}{2} - 2a\right) + (\pi - t)}{2} = \frac{3\pi}{4} - a - \frac{t}{2}$, and hence by the Law of Sines,

$XY/CY$

$= \frac{\sin\angle{XCY}}{\sin\angle{CXY}}$

$= \frac{\sin(a)}{\sin\left(\frac{3\pi}{4} - a - \frac{t}{2}\right)}$

$= \frac{\sin(a)}{\sin\left(\frac{\pi}{4} + a + \frac{t}{2}\right)}$

(d) Multiplying (a), (b), and (c), we have

$XY$

$= CA * (CY/CA) * (XY/CY)$

$= \frac{\sin(t)\sin(a)}{2\cos\left(\frac{\pi}{4} - \frac{t}{2}\right)\sin\left(\frac{\pi}{4} + a + \frac{t}{2}\right)}$

$= \frac{\sin(t)\sin(a)}{\sin\left(\frac{\pi}{2} + a\right) + \sin(a + t)}$

$= \sin(a)\times\frac{\sin(t)}{\sin(t + a) + \cos(a)}$,

which is a function of $t$ (and the constant $a$). Differentiating this with respect to $t$ yields

$\sin(a)\times\frac{\cos(t)(\sin(t + a) + \cos(a)) - \sin(t)\cos(t + a)}{(\sin(t + a) + \cos(a))^2}$,

and the numerator of this is

$\sin(a) \times(\sin(t + a)\cos(t) - \cos(t + a)\sin(t) + \cos(a)\cos(t))$ $= \sin(a) \times (\sin(a) + \cos(a)\cos(t))$,

which vanishes when $\sin(a) + \cos(a)\cos(t) = 0$. Therefore, the length of $XY$ is maximized when $t=t'$, where $t'$ is the value in $[0, \pi]$ that satisfies $\cos(t') = -\tan(a)$.

Note that

$\frac{1 - \tan(a)}{1 + \tan(a)} = \tan\left(\frac{\pi}{4} - a\right) = \tan((\widehat{MB})/2) = \tan\angle{MNB} = \frac{3}{4}$,

so $\tan(a) = \frac{1}{7}$. We compute

$\sin(a) = \frac{\sqrt{2}}{10}$

$\cos(a) = \frac{7\sqrt{2}}{10}$

$\cos(t') = -\tan(a) = -\frac{1}{7}$

$\sin(t') = \frac{4\sqrt{3}}{7}$

$\sin(t' + a)=\sin(t')\cos(a) + \cos(t')\sin(a) = \frac{28\sqrt{6} - \sqrt{2}}{70}$,

so the maximum length of $XY$ is $\sin(a)\times\frac{\sin(t')}{\sin(t' + a) + \cos(a)} = 7 - 4\sqrt{3}$, and the answer is $7 + 4 + 3 = \boxed{014}$.
Solution 2

<div align=center><img src="http://latex.artofproblemsolving.com/a/3/9/a39706abe61e146b9d9170bcb98b7c4fa70bab76.png" height="200px" /></div>

Suppose $\overline{AC}$ and $\overline{BC}$ intersect $\overline{MN}$ at $D$ and $E$, respectively, and let $MC = x$ and $NC = y$. Since $A$ is the midpoint of arc $MN$, $\overline{CA}$ bisects $\angle MCN$, and we get $\frac{MC}{MD} = \frac{NC}{ND}\Rightarrow MD = \frac{x}{x + y}.$ To find $ME$, we note that $\triangle BNE\sim\triangle MCE$ and $\triangle BME\sim\triangle NCE$, so 

$\begin{align*} \frac{BN}{NE} &= \frac{MC}{CE} \\ \frac{ME}{BM} &= \frac{CE}{NC}. \end{align*}$ 

Writing $NE = 1 - ME$, we can substitute known values and multiply the equations to get $\frac{4(ME)}{3 - 3(ME)} = \frac{x}{y}\Rightarrow ME = \frac{3x}{3x + 4y}.$ The value we wish to maximize is 

$\begin{align*} DE &= MD - ME \\ &= \frac{x}{x + y} - \frac{3x}{3x + 4y} \\ &= \frac{xy}{3x^2 + 7xy + 4y^2} \\ &= \frac{1}{3(x/y) + 4(y/x) + 7}. \end{align*}$ 

By the AM-GM inequality, $3(x/y) + 4(y/x)\geq 2\sqrt{12} = 4\sqrt{3}$, so $DE\leq \frac{1}{4\sqrt{3} + 7} = 7 - 4\sqrt{3},$ giving the answer of $7 + 4 + 3 = \boxed{014}$. Equality is achieved when $3(x/y) = 4(y/x)$ subject to the condition $x^2 + y^2 = 1$, which occurs for $x = \frac{2\sqrt{7}}{7}$ and $y = \frac{\sqrt{21}}{7}$.


2009 AIME II Answer Key
1.	114
    2.469
    3.141
    4.089
    5.032
    6.750
    7.401
    8.041
    9.000
    10.096
    11.125
    12.803
    13.672
    14.983
    15.014
