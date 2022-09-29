# 2015 AIME II

2015 AIME II Problems/Problem 1

Let $N$ be the least positive integer that is both $22$ percent less than one integer and $16$ percent greater than another integer. Find the remainder when $N$ is divided by $1000$.
Solution

If $N$ is $22$ percent less than one integer $k$, then $N=\frac{78}{100}k=\frac{39}{50}k$. In addition, $N$ is $16$ percent greater than another integer $m$, so $N=\frac{116}{100}m=\frac{29}{25}m$. Therefore, $k$ is divisible by 50 and $m$ is divisible by 25. Setting these two equal, we have $\frac{39}{50}k=\frac{29}{25}m$. Multiplying by $50$ on both sides, we get $39k=58m$.

The smallest integers $k$ and $m$ that satisfy this are $k=1450$ and $m=975$, so $N=1131$. The answer is $\boxed{131}$. 

2015 AIME II Problems/Problem 2
Problem

In a new school $40$ percent of the students are freshmen, $30$ percent are sophomores, $20$ percent are juniors, and $10$ percent are seniors. All freshmen are required to take Latin, and $80$ percent of the sophomores, $50$ percent of the juniors, and $20$ percent of the seniors elect to take Latin. The probability that a randomly chosen Latin student is a sophomore is $\frac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m+n$.
Solution

We see that $40\% \cdot 100\% + 30\% \cdot 80\% + 20\% \cdot 50\% + 10\% \cdot 20\% = 76\%$ of students are learning Latin. In addition, $30\% \cdot 80\% = 24\%$ of students are sophomores learning Latin. Thus, our desired probability is $\dfrac{24}{76}=\dfrac{6}{19}$ and our answer is $6+19=\boxed{025}$ 

2015 AIME II Problems/Problem 3

Let $m$ be the least positive integer divisible by $17$ whose digits sum to $17$. Find $m$.
Solution 1

The three-digit integers divisible by $17$, and their digit sum: 

$\begin{array}{c|c} m & s(m)\\ \hline 102 & 3 \\ 119 & 11\\ 136 & 10\\ 153 & 9\\ 170 & 8\\ 187 & 16\\ 204 & 6\\ 221 & 5\\ 238 & 13\\ 255 & 12\\ 272 & 11\\ 289 & 19\\ 306 & 9\\ 323 & 8\\ 340 & 7\\ 357 & 15\\ 374 & 14\\ 391 & 13\\ 408 & 12\\ 425 & 11\\ 442 & 10\\ 459 & 18\\ 476 & 17 \end{array}$

Thus the answer is $\boxed{476}$.

Solution 2

The digit sum of a base $10$ integer $m$ is just $m\pmod{9}$. In this problem, we know $17\mid m$, or $m=17k$ for a positive integer $k$.

Also, we know that $m\equiv 17\equiv -1\pmod{9}$, or $17k\equiv -k\equiv -1\pmod{9}$.

Obviously $k=1$ is a solution. This means in general, $k=9x+1$ is a solution for non-negative integer $x$.

Checking the first few possible solutions, we find that $m=\boxed{476}$ is the first solution that has $s(m)=17$, and we're done. 

2015 AIME II Problems/Problem 4
Problem

In an isosceles trapezoid, the parallel bases have lengths $\log 3$ and $\log 192$, and the altitude to these bases has length $\log 16$. The perimeter of the trapezoid can be written in the form $\log 2^p 3^q$, where $p$ and $q$ are positive integers. Find $p + q$.
Solution

Call the trapezoid $ABCD$ with $AB$ as the smaller base and $CD$ as the longer. The point where an altitude intersects the larger base be $E$ where $E$ is closer to $D$.

Subtract the two bases and divide to find that $ED$ is $\log 8$. The altitude can be expressed as $\frac{4}{3} \log 8$. Therefore, the two legs are $\frac{5}{3} \log 8$, or $\log 32$.

The perimeter is thus $\log 32 + \log 32 + \log 192 + \log 3$ which is $\log 2^{16} 3^2$. So $p + q = \boxed{018}$ 

2015 AIME II Problems/Problem 5

Problem

Two unit squares are selected at random without replacement from an $n \times n$ grid of unit squares. Find the least positive integer $n$ such that the probability that the two selected unit squares are horizontally or vertically adjacent is less than $\frac{1}{2015}$.
Solution 1

Call the given grid "Grid A". Consider Grid B, where the vertices of Grid B fall in the centers of the squares of Grid A; thus, Grid B has dimensions $(n-1) \times (n-1)$. There is a one-to-one correspondence between the edges of Grid B and the number of adjacent pairs of unit squares in Grid A. The number of edges in Grid B is $2n(n-1)$, and the number of ways to pick two squares out of Grid A is $\dbinom{n^2}{2}$. So, the probability that the two chosen squares are adjacent is $\frac{2n(n-1)}{\binom{n^2}{2}} = \frac{2n(n-1)}{\frac{n^2(n^2-1)}{2}} = \frac{4}{n(n+1)}$. We wish to find the smallest positive integer $n$ such that $\frac{4}{n(n+1)} < \frac{1}{2015}$, and by inspection the first such $n$ is $\boxed{090}$.

Solution 2

Consider a $3 \times 3$ grid, where there are $4$ corner squares, $4$ edge squares, and $1$ center square. A $4 \times 4$ grid has $4$ corner squares, $8$ edge squares, and $4$ center squares. By examining simple cases, we can conclude that for a grid that is $n \times n$, there are always $4$ corners squares, $4(n-2)$ edge squares, and $n^2-4n+4$ center squares.

Each corner square is adjacent to $2$ other squares, edge squares to $3$ other squares, and center squares to $4$ other squares. In the problem, the second square can be any square that is not the first, which means there are $n^2-1$ to choose from. With this information, we can conclude that the probability that second unit square is adjacent to the first is $\frac{2}{n^2-1}(\frac{4}{n^2}) +\frac{3}{n^2-1}(\frac{4(n-2)}{n^2}) +\frac{4}{n^2-1}(\frac{n^2-4n+4}{n^2})$.

Simplifying, we get $\frac{4}{n(n+1)}$ which we can set to be less than $\frac{1}{2015}$. By inspection, we find that the first such $n$ is $\boxed{090}$. 

2015 AIME II Problems/Problem 6
Problem

Steve says to Jon, "I am thinking of a polynomial whose roots are all positive integers. The polynomial has the form $P(x) = 2x^3-2ax^2+(a^2-81)x-c$ for some positive integers $a$ and $c$. Can you tell me the values of $a$ and $c$?"

After some calculations, Jon says, "There is more than one such polynomial."

Steve says, "You're right. Here is the value of $a$." He writes down a positive integer and asks, "Can you tell me the value of $c$?"

Jon says, "There are still two possible values of $c$."

Find the sum of the two possible values of $c$.
Solution

We call the three roots (some may be equal to one another) $x_1$, $x_2$, and $x_3$. Using Vieta's formulas, we get $x_1+x_2+x_3 = a$, $x_1 \cdot x_2+x_1 \cdot x_3+x_2 \cdot x_3 = \frac{a^2-81}{2}$, and $x_1 \cdot x_2 \cdot x_3 = \frac{c}{2}$.

Squaring our first equation we get $x_1^2+x_2^2+x_3^2+2 \cdot x_1 \cdot x_2+2 \cdot x_1 \cdot x_3+2 \cdot x_2 \cdot x_3 = a^2$.

We can then subtract twice our second equation to get $x_1^2+x_2^2+x_3^2 = a^2-2 \cdot \frac{a^2-81}{2}$.

Simplifying the right side:

$a^2-2 \cdot \frac{a^2-81}{2}$

$a^2-a^2+81$

$81$

So, we know $x_1^2+x_2^2+x_3^2 = 81$.

We can then list out all the triples of positive integers whose squares sum to $81$:

We get $(1, 4, 8)$, $(3, 6, 6)$, and $(4, 4, 7)$.

These triples give $a$ values of $13$, $15$, and $15$, respectively, and $c$ values of $64$, $216$, and $224$, respectively.

We know that Jon still found two possible values of $c$ when Steve told him the $a$ value, so the $a$ value must be $15$. Thus, the two $c$ values are $216$ and $224$, which sum to $\boxed{\text{440}}$. 

2015 AIME II Problems/Problem 7

Problem

Triangle $ABC$ has side lengths $AB = 12$, $BC = 25$, and $CA = 17$. Rectangle $PQRS$ has vertex $P$ on $\overline{AB}$, vertex $Q$ on $\overline{AC}$, and vertices $R$ and $S$ on $\overline{BC}$. In terms of the side length $PQ = w$, the area of $PQRS$ can be expressed as the quadratic polynomial

Area($PQRS$) = $\alpha w - \beta \cdot w^2$.

Then the coefficient $\beta = \frac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m+n$.
Solution 1

If $\omega = 25$, the area of rectangle $PQRS$ is $0$, so

\[\alpha\omega - \beta\omega^2 = 25\alpha - 625\beta = 0$

and $\alpha = 25\beta$. If $\omega = \frac{25}{2}$, we can reflect $APQ$ over PQ, $PBS$ over $PS$, and $QCR$ over $QR$ to completely cover rectangle $PQRS$, so the area of $PQRS$ is half the area of the triangle. Using Heron's formula, since $s = \frac{12 + 17 + 25}{2} = 27$,

$[ABC] = \sqrt{27 \cdot 15 \cdot 10 \cdot 2} = 90$

so

$45 = \alpha\omega - \beta\omega^2 = \frac{625}{2} \beta - \beta\frac{625}{4} = \beta\frac{625}{4}$

and

$\beta = \frac{180}{625} = \frac{36}{125}$

so the answer is $m + n = 36 + 125 = \boxed{161}$.

Solution 2

<div align=center><img src="http://latex.artofproblemsolving.com/8/e/e/8ee089dc32e8af2c231722d8be0a65d51d42d197.png" height="200px" /></div>

Similar triangles can also solve the problem.

First, solve for the area of the triangle. $[ABC] = 90$. This can be done by Heron's Formula or placing an $8-15-17$ right triangle on $BC$ and solving. (The $8$ side would be collinear with line $AB$)

After finding the area, solve for the altitude to $BC$. Let $E$ be the intersection of the altitude from $A$ and side $BC$. Then $AE = \frac{36}{5}$. Solving for $BE$ using the Pythagorean Formula, we get $BE = \frac{48}{5}$. We then know that $CE = \frac{77}{5}$.

Now consider the rectangle $PQRS$. Since $SR$ is collinear with $BC$ and parallel to $PQ$, $PQ$ is parallel to $BC$ meaning $\Delta APQ$ is similar to $\Delta ABC$.

Let $F$ be the intersection between $AE$ and $PQ$. By the similar triangles, we know that $\frac{PF}{FQ}=\frac{BE}{EC} = \frac{48}{77}$. Since $PF+FQ=PQ=\omega$. We can solve for $PF$ and $FQ$ in terms of $\omega$. We get that $PF=\frac{48}{125} \omega$ and $FQ=\frac{77}{125} \omega$.

Let's work with $PF$. We know that $PQ$ is parallel to $BC$ so $\Delta APF$ is similar to $\Delta ABE$. We can set up the proportion:

$\frac{AF}{PF}=\frac{AE}{BE}=\frac{3}{4}$. Solving for $AF$, $AF = \frac{3}{4} PF = \frac{3}{4} \cdot \frac{48}{125} \omega = \frac{36}{125} \omega$.

We can solve for $PS$ then since we know that $PS=FE$ and $FE= AE - AF = \frac{36}{5} - \frac{36}{125} \omega$.

Therefore, $[PQRS] = PQ \cdot PS = \omega (\frac{36}{5} - \frac{36}{125} \omega) = \frac{36}{5}\omega - \frac{36}{125} \omega^2$.

This means that $\beta = \frac{36}{125} \Rightarrow (m,n) = (36,125) \Rightarrow m+n = \boxed{161}$.
Solution 3

Heron's Formula gives $[ABC] = \sqrt{27 \cdot 15 \cdot 10 \cdot 2} = 90,$ so the altitude from $A$ to $BC$ has length $\dfrac{2[ABC]}{BC} = \dfrac{36}{5}.$

Now, draw a parallel to $AB$ from $Q$, intersecting $BC$ at $T$. Then $BT = w$ in parallelogram $QPBT$, and so $CT = 25 - w$. Clearly, $CQT$ and $CAB$ are similar triangles, and so their altitudes have lengths proportional to their corresponding base sides, and so $\frac{QR}{\frac{36}{5}} = \frac{25 - w}{25}$ Solving gives $[PQRS] = \dfrac{36}{5} \cdot \dfrac{25 - w}{25} = \dfrac{36w}{5} - \dfrac{36w^2}{125}$, so the answer is $36 + 125 = 161$.


Solution 4

Using the diagram from Solution 2 above, label $AF$ to be $h$. Through Heron's formula, the area of $\triangle ABC$ turns out to be $90$, so using $AE$ as the height and $BC$ as the base yields $AE=\frac{36}{5}$. Now, through the use of similarity between $\triangle APQ$ and $\triangle ABC$, you find $\frac{w}{25}=\frac{h}{36/5}$. Thus, $h=\frac{36w}{125}$. To find the height of the rectangle, subtract $h$ from $\frac{36}{5}$ to get $\left(\frac{36}{5}-\frac{36w}{125}\right)$, and multiply this by the other given side $w$ to get $\frac{36w}{5}-\frac{36w^2}{125}$ for the area of the rectangle. Finally, $36+125=\boxed{161}$. 

2015 AIME II Problems/Problem 8

Problem

Let $a$ and $b$ be positive integers satisfying $\frac{ab+1}{a+b} < \frac{3}{2}$. The maximum possible value of $\frac{a^3b^3+1}{a^3+b^3}$ is $\frac{p}{q}$, where $p$ and $q$ are relatively prime positive integers. Find $p+q$.
Solution 2

Let us call the quantity $\frac{a^3b^3+1}{a^3+b^3}$ as $N$ for convenience. Knowing that $a$ and $b$ are positive integers, we can legitimately rearrange the given inequality so that $a$ is by itself, which makes it easier to determine the pairs of $(a, b)$ that work. Doing so, we have \[\frac{ab+1}{a+b} < \frac{3}{2}$ \[\implies 2ab + 2 < 3a + 3b \implies 2ab - 3a < 3b - 2$ \[\implies a < \frac{3b - 2}{2b - 3}.$ Now, observe that if $b = 1$ we have that $N = \frac{a + 1}{a + 1} = 1$, regardless of the value of $a$. If $a = 1$, we have the same result: that $N = \frac{b + 1}{b + 1} = 1$, regardless of the value of $b$. Hence, we want to find pairs of positive integers $(a, b)$ existing such that neither $a$ nor $b$ is equal to $1$, and that the conditions given in the problem are satisfied in order to check that the maximum value for $N$ is not $1$.


To avoid the possibility that $a = 1$, we want to find values of $b$ such that $\frac{3b - 2}{2b - 3} > 2$. If we do this, we will have that $a < \frac{3b - 2}{2b - 3} = k$, where $k$ is greater than $2$, and this allows us to choose values of $a$ greater than $1$. Again, since $b$ is a positive integer, and we want $b > 1$, we can legitimately multiply both sides of $\frac{3b - 2}{2b - 3} > 2$ by $2b - 3$ to get $3b - 2 > 4b - 6 \implies b < 4$. For $b = 3$, we have that $a < \frac{7}{3}$, so the only possibility for $a$ greater than $1$ is obviously $2$. Plugging these values into $N$, we have that $N = \frac{8(27) + 1}{8 + 27} = \frac{217}{35} = \frac{31}{5}$. For $b = 2$, we have that $a < \frac{4}{1} = 4$. Plugging $a = 3$ and $b = 2$ in for $N$ yields the same result of $\frac{31}{5}$, but plugging $a = 2$ and $b = 2$ into $N$ yields that $N = \frac{8(8) + 1}{8 + 8} = \frac{65}{16}$. Clearly, $\frac{31}{5}$ is the largest value we can have for $N$, so our answer is $31 + 5 = \boxed{036}$.
Solution 1 (Proof without words)

\[\frac{ab + 1}{a + b} < \frac{3}{2} \rightarrow 2ab + 2 < 3a + 3b,$ \[\rightarrow 4ab - 6a - 6b + 4 < 0 \rightarrow (2a - 3)(2b - 3) < 5.$

\[2a - 3, 2b - 3 \in \{x \neq 2k, k \in Z \}; \rightarrow$ \[(2a - 3)(2b - 3) = 1, 3 \rightarrow (2a - 3, 2b - 3) = (1, 1), (1, 3), (3, 1).$ \[(a, b) = (2, 2), (2, 3), (3, 2).$ \[\frac{a^3 b^3 + 1}{a^3 + b^3} = \frac{65}{16}, \frac{31}{5}.$ \[\frac{31}{5} \rightarrow \boxed{036}.$ 

2015 AIME II Problems/Problem 9
Problem

A cylindrical barrel with radius $4$ feet and height $10$ feet is full of water. A solid cube with side length $8$ feet is set into the barrel so that the diagonal of the cube is vertical. The volume of water thus displaced is $v$ cubic feet. Find $v^2$. 

<div align=center><img src="http://latex.artofproblemsolving.com/9/e/a/9ea530dcf8660904fcdb6c7e02d431954bb03eda.png" height="150px" /></div>

Solution

Our aim is to find the volume of the part of the cube submerged in the cylinder. In the problem, since three edges emanate from each vertex, the boundary of the cylinder touches the cube at three points. Because the space diagonal of the cube is vertical, by the symmetry of the cube, the three points form an equilateral triangle. Because the radius of the circle is $4$, by the Law of Cosines, the side length s of the equilateral triangle is

\[s^2 = 2*(4^2) - 2*(4^2)\cos(120^{\circ}) = 3(4^2)$

so $s = 4\sqrt{3}$. Again by the symmetry of the cube, the volume we want to find is the volume of a tetrahedron with right angles on all faces at the submerged vertex, so since the lengths of the legs of the tetrahedron are $\frac{4\sqrt{3}}{\sqrt{2}} = 2\sqrt{6}$ (the three triangular faces touching the submerged vertex are all $45-45-90$ triangles) so

\[v = \frac{1}{3}(2\sqrt{6})\left(\frac{1}{2} \cdot (2\sqrt{6})^2\right) = \frac{1}{6} \cdot 48\sqrt{6} = 8\sqrt{6}$

so

\[v^2 = 64 \cdot 6 = \boxed{384}$

2015 AIME II Problems/Problem 10
Problem

Call a permutation $a_1, a_2, \ldots, a_n$ of the integers $1, 2, \ldots, n$ quasi-increasing if $a_k \leq a_{k+1} + 2$ for each $1 \leq k \leq n-1$. For example, 53421 and 14253 are quasi-increasing permutations of the integers $1, 2, 3, 4, 5$, but 45123 is not. Find the number of quasi-increasing permutations of the integers $1, 2, \ldots, 7$.
Solution

The simple recurrence can be found.

When inserting an integer $n$ into a string with $n - 1$ integers, we notice that the integer $n$ has 3 spots where it can go: before $n - 1$, before $n - 2$, and at the very end.

EXAMPLE: Putting 4 into the string 123: 4 can go before the 2: 1423, Before the 3: 1243, And at the very end: 1234.

Thus the number of permutations with n elements is three times the number of permutations with $n-1$ elements.

However, for $n=1$, there's an exception: there's only 2 places the 2 can go (before or after the 1).

For $n=1$, there are $2$ permutations. Thus for $n=7$ there are $2*3^5=\boxed{486}$ permutations. 

2015 AIME II Problems/Problem 11

Problem

The circumcircle of acute $\triangle ABC$ has center $O$. The line passing through point $O$ perpendicular to $\overline{OB}$ intersects lines $AB$ and $BC$ and $P$ and $Q$, respectively. Also $AB=5$, $BC=4$, $BQ=4.5$, and $BP=\frac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m+n$.
Diagram

<div align=center><img src="http://latex.artofproblemsolving.com/1/6/d/16dd7c5e37c22ae934e6ffbff29ad73b73b97132.png" height="200px" /></div>

Solution 1

Call the $M$ and $N$ foot of the altitudes from $O$ to $BC$ and $AB$, respectively. Let $OB = r$ and let $OQ = k$. Notice that $\triangle{OMB} \sim \triangle{OQB}$ because both are right triangles, and $\angle{OBQ} \cong \angle{OBM}$. Then, $MB = r\left(\frac{r}{4.5}\right) = \frac{r^2}{4.5}$. However, since $O$ is the circumcenter of triangle $ABC$, $OM$ is a perpendicular bisector by the definition of a circumcenter. Hence, $\frac{r^2}{4.5} = 2 \implies r = 3$. Since we know $BN=\frac{5}{2}$ and $\triangle BOP \sim \triangle NBO$, we have $\frac{BP}{3} = \frac{3}{\frac{5}{2}}$. Thus, $BP = \frac{18}{5}$. $m + n=\boxed{023}$.
Solution 2

Notice that $\angle{CBO}=90-A$, so $\angle{BQO}=A$. From this we get that $\triangle{BPQ}\sim \triangle{BCA}$. So $\dfrac{BP}{BC}=\dfrac{BQ}{BA}$, plugging in the given values we get $\dfrac{BP}{4}=\dfrac{4.5}{5}$, so $BP=\dfrac{18}{5}$, and $m+n=\boxed{023}$. 

2015 AIME II Problems/Problem 12

Problem

There are $2^{10} = 1024$ possible 10-letter strings in which each letter is either an A or a B. Find the number of such strings that do not have more than 3 adjacent letters that are identical.
Solution 1

The solution is a simple recursion:

We have three cases for the ending of a string: three in a row, two in a row, and a single:

...AAA $(1)$ ...BAA $(2)$ ...BBA $(3)$

For case $(1)$, we could only add a B to the end, making it a case $(3)$. For case $(2)$, we could add an A or a B to the end, making it a case $(1)$ if you add an A, or a case $(3)$ if you add a B. For case $(3)$, we could add an A or a B to the end, making it a case $(2)$ or a case $(3)$.

Let us create three series to represent the number of permutations for each case: $\{a\}$, $\{b\}$, and $\{c\}$ representing case $(1)$, $(2)$, and $(3)$ respectively.

The series have the following relationship:

$a_n=b_{n-1}$; $b_n=c_{n-1}$; $c_n=c_{n-1}+a_{n-1}+b_{n-1}$

For $n=3$: $a_3$ and $b_3$ both equal $2$, $c_3=4$. With some simple math, we have: $a_{10}=88$, $b_{10}=162$, and $c_{10}=298$. Summing the three up we have our solution: $88+162+298=548$.
Solution 2

This is a recursion problem. Let $a_n$ be the number of valid strings of $n$ letters, where the first letter is $A$. Similarly, let $b_n$ be the number of valid strings of $n$ letters, where the first letter is $B$.

Note that $a_n=b_{n-1}+b_{n-2}+b_{n-3}$ for all $n\ge4$.

Similarly, we have $b_n=a_{n-1}+a_{n-2}+a_{n-3}$ for all $n\ge4$.

Here is why: every valid strings of $n$ letters $(n\ge4)$ where the first letter is $A$ must begin with one of the following:

$AAAB$ - and the number of valid ways is $b_{n-3}$.

$AAB$ - and the number of valid ways is $b_{n-2}$.

$AB$ - and there are $b_{n-1}$ ways.

We know that $a_1=1$, $a_2=2$, and $a_3=4$. Similarly, we have $b_1=1$, $b_2=2$, and $b_3=4$. We can quickly check our recursion to see if our recursive formula works. By the formula, $a_4=b_3+b_2+b_1=7$, and listing out all $a_4$, we can quickly verify our formula.

Therefore, we have the following:

$\begin{array}{c|c|c|c|c|c|c|c|c|c|c}Value of n & 1 & 2 & 3 & 4 & 5 & 6 & 7 & 8 & 9 & 10\\\hline a & 1 & 2 & 4 & 7 & 13 & 24 & 44 & 81 & 149 & 274\\b & 1 & 2 & 4 & 7 & 13 & 24 & 44 & 81 & 149 & 274\end{array}$

The total number of valid $10$ letter strings is equal to $a_{10}+b_{10}=274+274=\boxed{548}$.

Notice that $a_n = b_n$, since $a_1=b_1$, $a_2=b_2$, and $a_3=b_3$. Therefore, we didn't really need to list out both recursion formulas, which could save us some time.
Note

This problem has the same general approach as # 22 on the 2015 AMC 12A. 

2015 AIME II Problems/Problem 13

Problem

Define the sequence $a_1, a_2, a_3, \ldots$ by $a_n = \sum\limits_{k=1}^n \sin{k}$, where $k$ represents radian measure. Find the index of the 100th term for which $a_n < 0$.
Solution 1

If $n = 1$, $a_n = \sin(1) > 0$. Then if $n$ satisfies $a_n < 0$, $n \ge 2$, and \[a_n = \sum_{k=1}^n \sin(k) = \cfrac{1}{\sin{1}} \sum_{k=1}^n\sin(1)\sin(k) = \cfrac{1}{\sin{1}} \sum_{k=1}^n\cos(k - 1) - \cos(k + 1) = \cfrac{1}{\sin(1)} [\cos(0) + \cos(1) - \cos(n) - \cos(n + 1)].$ Since $\sin 1$ is positive, it does not affect the sign of $a_n$. Let $b_n = \cos(0) + \cos(1) - \cos(n) - \cos(n + 1)$. Now since $\cos(0) + \cos(1) = 2\cos\left(\cfrac{1}{2}\right)\cos\left(\cfrac{1}{2}\right)$ and $\cos(n) + \cos(n + 1) = 2\cos\left(n + \cfrac{1}{2}\right)\cos\left(\cfrac{1}{2}\right)$, $b_n$ is negative if and only if $\cos\left(\cfrac{1}{2}\right) < \cos\left(n + \cfrac{1}{2}\right)$, or when $n \in [2k\pi - 1, 2k\pi]$. Since $\pi$ is irrational, there is always only one integer in the range, so there are values of $n$ such that $a_n < 0$ at $2\pi, 4\pi, \cdots$. Then the hundredth such value will be when $k = 100$ and $n = \lfloor 200\pi \rfloor = \lfloor 628.318 \rfloor = \boxed{628}$.
Solution 2

Notice that $a_n$ is the imaginary part of $\sum_{k=1}^n e^{ik}$, by Euler's formula. Using the geometric series formula, we find that this sum is equal to \[\frac{e^{i(n+1)}-e^i}{e^i-1} = \frac{\cos (n+1) - \cos 1 + i (\sin (n+1) - \sin 1) }{\cos 1 - 1 + i \sin 1}$ We multiply the fraction by the conjugate of the denominator so that we can separate out the real and imaginary parts of the above expression. Multiplying, we have \[\frac{(\cos 1 - 1)(\cos(n+1)-\cos 1) + (\sin 1)(\sin(n+1)-\sin 1) + i((\sin(n+1) - \sin 1)(\cos 1 - 1) - (\sin 1)(\cos(n+1)-\cos 1))}{\cos^2 1 - 2 \cos 1 + 1 + \sin^2 1}$ We only need to look at the imaginary part, which is \[\frac{(\sin(n+1) \cos 1 - \cos(n+1) \sin 1) - \sin 1 \cos 1 + \sin 1 - \sin (n+1) + \sin 1 \cos 1}{2-2 \cos 1} = \frac{\sin n - \sin(n+1) + \sin 1}{2-2 \cos 1}$ Since $\cos 1 < 1$, $2-2 \cos 1 > 0$, so the denominator is positive. Thus, in order for the whole fraction to be negative, we must have $\sin n + \sin 1 < \sin (n+1) \implies \sin (n+1) - \sin n > \sin 1$. This only holds when $n$ is between $2\pi k - 1$ and $2\pi k$ for integer $k$ [continuity proof here], and since this has exactly one integer solution for every such interval, the $100$th such $n$ is $\lfloor 200\pi \rfloor = \boxed{628}$.
Solution 3

Similar to solution 2, we set a complex number $z=\cos 1+i\sin 1$. We start from $z$ instead of $1$ because $k$ starts from $1$: be careful.

The sum of $z+z^2+z^3+z^4+z^5\dots=\frac{z-z^{n+1}}{1-z}=\frac{z}{z-1}\left(z^n-1\right)$.

We are trying to make $n$ so that the imaginary part of this expression is negative.

The argument of $z$ is $1$. The argument of $z-1$, however, is a little more tricky. $z-1$ is on a circle centered on $(-1,0)$ with radius $1$. The change in angle due to $z$ is $1$ with respect to the center, but the angle that $z-1$ makes with the $y$-axis is $half$ the change, due to Circle Theorems (this intercepted arc is the argument of $z$), because the $y$- axis is tangent to the circle at the origin. So $\text{arg}(z-1)=\frac{\pi+1}{2}$. Dividing $z$ by $z-1$ subtracts the latter argument from the former, so the angle of the quotient with the $x$-axis is $\frac{1-\pi}{2}$.

We want the argument of the whole expression $-\pi<\theta<0$. This translates into $\frac{-\pi-1}{2}<\text{arg}\left(z^n-1\right)<\frac{\pi-1}{2}$. $z^n-1$ also consists of points on the circle centered at $(-1,0)$, so we deal with this argument similarly: the argument of $z^n$ is twice the angle $z^n-1$ makes with the $y$-axis. Since $z^n-1$ is always negative, $\frac{-3\pi}{2}<\text{arg}\left(z^n-1\right)<\frac{-\pi}{2}$, and the left bound is the only one that is important. Either way, the line (the line consists of both bounds) makes a $\frac{\pi}{2}-\frac{\pi-1}{2}=\frac{-1}{2}$ angle with the $y$-axis both ways.

So the argument of $z^n$ must be in the bound $-1<\theta<0$ by doubling, namely the last $z^n$ negative before another rotation. Since there is always one $z^n$ in this category per rotation because $\pi$ is irrational, $n_{100}\equiv z^{628}$ and the answer is $\boxed{628}$. 

2015 AIME II Problems/Problem 14

Problem

Let $x$ and $y$ be real numbers satisfying $x^4y^5+y^4x^5=810$ and $x^3y^6+y^3x^6=945$. Evaluate $2x^3+(xy)^3+2y^3$.
Solution

The expression we want to find is $2(x^3+y^3) + x^3y^3$.

Factor the given equations as $x^4y^4(x+y) = 810$ and $x^3y^3(x^3+y^3)=945$, respectively. Dividing the latter by the former equation yields $\frac{x^2-xy+y^2}{xy} = \frac{945}{810}$. Adding 3 to both sides and simplifying yields $\frac{(x+y)^2}{xy} = \frac{25}{6}$. Solving for $x+y$ and substituting this expression into the first equation yields $\frac{5\sqrt{6}}{6}(xy)^{\frac{9}{2}} = 810$. Solving for $xy$, we find that $xy = 3\sqrt[3]{2}$, so $x^3y^3 = 54$. Substituting this into the second equation and solving for $x^3+y^3$ yields $x^3+y^3=\frac{35}{2}$. So, the expression to evaluate is equal to $2 \times \frac{35}{2} + 54 = \boxed{089}$.
Solution 2

Factor the given equations as $x^4y^4(x+y) = 810$ and $x^3y^3(x+y)(x^2-xy+y^2)=945$, respectively. By the first equation, $x+y=\frac{810}{x^4y^4}$. Plugging this in to the second equation and simplifying yields $(\frac{x}{y}-1+\frac{y}{x})=\frac{7}{6}$. Now substitute $\frac{x}{y}=a$. Solving the quadratic in $a$, we get $a=\frac{x}{y}=\frac{2}{3}$ or $\frac{3}{2}$ As both of the original equations were symmetric in $x$ and $y$, WLOG, let $\frac{x}{y}=\frac{2}{3}$, so $x=\frac{2}{3}y$. Now plugging this in to either one of the equations, we get the solutions $y=\frac{3(2^{\frac{2}{3}})}{2}$, $x=2^{\frac{2}{3}}$. Now plugging into what we want, we get $8+54+27=\boxed{089}$
Solution 3

Add three times the first equation to the second equation and factor to get $(xy)^3(x^3+3x^2y+3xy^2+y^3)=(xy)^3(x+y)^3=3375$. Taking the cube root yields $xy(x+y)=15$. Noting that the first equation is $(xy)^3\cdot(xy(x+y))=810$, we find that $(xy)^3=\frac{810}{15}=54$. Plugging this into the second equation and dividing yields $x^3+y^3 = \frac{945}{54} = \frac{35}{2}$. Thus the sum required, as noted in Solution 1, is $54+\frac{35}{2}\cdot2 = \boxed{089}$. 

2015 AIME II Problems/Problem 15

Problem

Circles $\mathcal{P}$ and $\mathcal{Q}$ have radii $1$ and $4$, respectively, and are externally tangent at point $A$. Point $B$ is on $\mathcal{P}$ and point $C$ is on $\mathcal{Q}$ so that line $BC$ is a common external tangent of the two circles. A line $\ell$ through $A$ intersects $\mathcal{P}$ again at $D$ and intersects $\mathcal{Q}$ again at $E$. Points $B$ and $C$ lie on the same side of $\ell$, and the areas of $\triangle DBA$ and $\triangle ACE$ are equal. This common area is $\frac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m+n$. 

<div align=center><img src="http://latex.artofproblemsolving.com/6/b/7/6b7782afc839b219809c6266cec4abca23e9d026.png" height="200px" /></div>

Hint

This is a #15 on an AIME, so it must be difficult. Indeed, there are two possible approaches (both of them very computational): coordinate geometry, or regular Euclidean geometry combined with a bit of trigonometry. 

Solution 1

<div align=center><img src="http://latex.artofproblemsolving.com/6/a/1/6a1d326f96b30868c131a571c6f60838485de3a8.png" height="250px" /></div>

Call $O_1$ and $O_2$ the centers of circles $\mathcal{P}$ and $\mathcal{Q}$, respectively, and extend $CB$ and $O_2O_1$ to meet at point $N$. Call $K$ and $L$ the feet of the altitudes from $B$ to $O_1N$ and $C$ to $O_2N$, respectively. Using the fact that $\triangle{O_1BN} \sim \triangle{O_2CN}$ and setting $NO_1 = k$, we have that $\frac{k+5}{k} = \frac{4}{1} \implies k=\frac{5}{3}$. We can do some more length chasing using triangles similar to $OBN$ to get that $AK = AL = \frac{24}{15}$, $BK = \frac{12}{15}$, and $CL = \frac{48}{15}$. Now, consider the circles $\mathcal{P}$ and $\mathcal{Q}$ on the coordinate plane, where $A$ is the origin. If the line $\ell$ through $A$ intersects $\mathcal{P}$ at $D$ and $\mathcal{Q}$ at $E$ then $4 \cdot DA = AE$. To verify this, notice that $\triangle{AO_1D} \sim \triangle{EO_2A}$ from the fact that both triangles are isosceles with $\angle{O_1AD} \cong \angle{O_2AE}$, which are corresponding angles. Since $O_2A = 4\cdot O_1A$, we can conclude that $4 \cdot DA = AE$.


Hence, we need to find the slope $m$ of line $\ell$ such that the perpendicular distance $n$ from $B$ to $AD$ is four times the perpendicular distance $p$ from $C$ to $AE$. This will mean that the product of the bases and heights of triangles $ACE$ and $DBA$ will be equal, which in turn means that their areas will be equal. Let the line $\ell$ have the equation $y = -mx \implies mx + y = 0$, and let $m$ be a positive real number so that the negative slope of $\ell$ is preserved. Setting $A = (0,0)$, the coordinates of $B$ are $(x_B, y_B) = \left(\frac{-24}{15}, \frac{-12}{15}\right)$, and the coordinates of $C$ are $(x_C, y_C) = \left(\frac{24}{15}, \frac{-48}{15}\right)$. Using the point-to-line distance formula and the condition $n = 4p$, we have \[\frac{|mx_B + 1(y_B) + 0|}{\sqrt{m^2 + 1}} = \frac{4|mx_C + 1(y_C) + 0|}{\sqrt{m^2 + 1}}$ \[\implies |mx_B + y_B| = 4|mx_C + y_C| \implies \left|\frac{-24m}{15} + \frac{-12}{15}\right| = 4\left|\frac{24m}{15} + \frac{-48}{15}\right|.$ If $m > 2$, then clearly $B$ and $C$ would not lie on the same side of $\ell$. Thus since $m > 0$, we must switch the signs of all terms in this equation when we get rid of the absolute value signs. We then have \[\frac{6m}{15} + \frac{3}{15} = \frac{48}{15} - \frac{24m}{15} \implies 2m = 3 \implies m = \frac{3}{2}.$ Thus, the equation of $\ell$ is $y = -\frac{3}{2}x$.


Then we can find the coordinates of $D$ by finding the point $(x,y)$ other than $A = (0,0)$ where the circle $\mathcal{P}$ intersects $\ell$. $\mathcal{P}$ can be represented with the equation $(x + 1)^2 + y^2 = 1$, and substituting $y = -\frac{3}{2}x$ into this equation yields $x = 0, -\frac{8}{13}$ as solutions. Discarding $x = 0$, the $y$-coordinate of $D$ is $-\frac{3}{2} \cdot -\frac{8}{13} = \frac{12}{13}$. The distance from $D$ to $A$ is then $\frac{4}{\sqrt{13}}.$ The perpendicular distance from $B$ to $AD$ or the height of $\triangle{DBA}$ is $\frac{|\frac{3}{2}\cdot\frac{-24}{15} + \frac{-12}{15} + 0|}{\sqrt{\frac{3}{2}^2 + 1}} = \frac{\frac{48}{15}}{\frac{\sqrt{13}}{2}} = \frac{32}{5\sqrt{13}}.$ Finally, the common area is $\frac{1}{2}\left(\frac{32}{5\sqrt{13}} \cdot \frac{4}{\sqrt{13}}\right) = \frac{64}{65}$, and $m + n = 64 + 65 = \boxed{129}$.
Solution 2

By homothety, we deduce that $AE = 4 AD$. (The proof can also be executed by similar triangles formed from dropping perpendiculars from the centers of $P$ and $Q$ to $l$.) Therefore, our equality of area condition, or the equality of base times height condition, reduces to the fact that the distance from $B$ to $l$ is four times that from $C$ to $l$. Let the distance from $C$ be $x$ and the distance from $B$ be $4x$.

Let $P$ and $Q$ be the centers of their respective circles. Then dropping a perpendicular from $P$ to $Q$ creates a $3-4-5$ right triangle, from which $BC = 4$ and, if $\alpha = \angle{AQC}$, that $\cos \alpha = \dfrac{3}{5}$. Then $\angle{BPA} = 180^\circ - \alpha$, and the Law of Cosines on triangles $APB$ and $AQC$ gives $AB = \dfrac{4}{\sqrt{5}}$ and $AC = \dfrac{8}{\sqrt{5}}.$

Now, using the Pythagorean Theorem to express the length of the projection of $BC$ onto line $l$ gives \[\sqrt{\frac{16}{5} - 16x^2} + \sqrt{\frac{64}{5} - x^2} = \sqrt{16 - 9x^2}.$ Squaring and simplifying gives \[\sqrt{\left(\frac{1}{5} - x^2\right)\left(\frac{64}{5} - x^2\right)} = x^2,$ and squaring and solving gives $x = \dfrac{8}{5\sqrt{13}}.$

By the Law of Sines on triangle $ABD$, we have \[\frac{BD}{\sin A} = 2.$ But we know $\sin A = \dfrac{4x}{AB}$, and so a small computation gives $BD = \dfrac{16}{\sqrt{65}}.$ The Pythagorean Theorem now gives \[AD = \sqrt{BD^2 - (4x)^2} + \sqrt{AB^2 - (4x)^2} = \frac{4}{\sqrt{13}},$ and so the common area is $\dfrac{1}{2} \cdot \frac{4}{\sqrt{13}} \cdot \frac{32}{5\sqrt{13}} = \frac{64}{65}.$ The answer is $\boxed{129}.$
Solution 3

$DE$ goes through $A$, the point of tangency of both circles. So $DE$ intercepts equal arcs in circle $P$ and $Q$: homothety. Hence, $AE=4AD$. We will use such similarity later.

The diagonal distance between the centers of the circles is $4+1=5$. The difference in heights is $4-1=3$. So $BC=\sqrt{5^2-3^2}=4$.

The triangle connecting the centers with a side parallel to $BC$ is a $3-4-5$ right triangle. Since $O_PA=1$, the height of $A$ is $1+3/5=8/5$. Drop an altitude from $A$ to $BC$ and call it $I$: $IB=4/5$ and $IC=4-4/5=32/5$. Since right $\triangle AIB\sim\triangle CIB$, $ABC$ is a right triangle also; $IB:IA:IC$ form a geometric progression $\times 2$.


Extend $BA$ through $A$ to a point $G$ on the other side of $\circ Q$. By homothety, $\triangle DAB\sim\triangle EAG$. By angle chasing $\triangle DAB$ through right triangle $ABC$, we deduce that $\angle CEG$ is a right angle. Since $ACEG$ is cyclic, $\angle GAC$ is also right. So $CG$ is a diameter of $\circ G$. Because of this, $CG \perp BC$, the tangent line. $\triangle BCG$ is right and $\triangle BCG\sim\triangle ABC\sim\triangle CAG$.


$AC=\sqrt{(8/5)^2+(16/5)^2}=8\sqrt{5}/5$ so $AG=2AC=16\sqrt{5}/5$ and $[\triangle CAG]=64/5$.

Since $[\triangle DAB]=[\triangle ACE]​$, the common area is $[ACEG]/17​$. $16[\triangle DAB]=[\triangle GAE]​$ because the triangles are similar with a ratio of $1:4​$. So we only need to find $[\triangle CEG]​$ now.


Extend $DE$ through $E$ to intersect the tangent at $F$. Because $4DA=AE$, the altitude from $B$ to $AD$ is $4$ times the height from $C$ to $EA$. So $BC=3/4BF$ and $BF=16/3$. We look at right triangle $\triangle AIF$. $IF=68/15$ and $AI=8/5$. $\triangle AIF$ is a $17-6-5\sqrt{13}$ right triangle. Hypotenuse $AF$ intersects $CG$ at a point, we call it $H$. $CH=4/3\div 68/15\cdot 8/5=8/17$. So $HG=8-8/17=128/17$.


By Power of a Point, $CH\cdot HG=AH\cdot HE$. $AH=16/5\cdot 5\sqrt{13}/17=16\sqrt{13}/17$. So $HE=1024/289\cdot 17/(16\sqrt{13})=64/(17\sqrt{13})$. The height from $E$ to $CG$ is $17/(5\sqrt{13})\cdot 64/(17\sqrt{13})=64/65$.


Thus, $[\triangle CEG]=64/65\cdot 8\div 2=256/65$. The area of the whole cyclic quadrilateral is $64/5+256/65=(832+256)/65=1088/65$. Lastly, the common area is $1/17$ the area of the quadrilateral, or $64/65$. So $64+65=\boxed{129}$. 



2015 AIME II Answer Key
1.	131
    2.025
    3.476
    4.018
    5.090
    6.440
    7.161
    8.036
    9.384
    10.486
    11.023
    12.548
    13.628
    14.089
    15.129

