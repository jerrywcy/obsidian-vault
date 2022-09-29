# 2010 AIME II

2010 AIME II Problems/Problem 1
Problem

Let $N$ be the greatest integer multiple of $36$ all of whose digits are even and no two of whose digits are the same. Find the remainder when $N$ is divided by $1000$.
Solution

If an integer is divisible by $36$, it must also be divisible by $9$ since $9$ is a factor of $36$. It is a well-known fact that, if $N$ is divisible by $9$, the sum of the digits of $N$ is a multiple of $9$. Hence, if $N$ contains all the even digits, the sum of the digits would be $0 + 2 + 4 + 6 + 8 = 20$, which is not divisible by $9$ and thus $36$. The next logical try would be $8640$, which happens to be divisible by $36$. Thus $N = 8640 \mod {1000} = \boxed{640}$


2010 AIME II Problems/Problem 2
Problem 2

A point $P$ is chosen at random in the interior of a unit square $S$. Let $d(P)$ denote the distance from $P$ to the closest side of $S$. The probability that $\frac{1}{5}\le d(P)\le\frac{1}{3}$ is equal to $\frac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m+n$.


Solution

Any point outside the square with side length $\frac{1}{3}$ that have the same center as the unit square and inside the square side length $\frac{3}{5}$ that have the same center as the unit square has $\frac{1}{5}\le d(P)\le\frac{1}{3}$.

<div align=center><img src="http://latex.artofproblemsolving.com/2/f/8/2f82e5b678d789e6c2bfd670f46cff737577a21e.png" height="150px" /></div>

Since the area of the unit square is $1$, the probability of a point $P$ with $\frac{1}{5}\le d(P)\le\frac{1}{3}$ is the area of the shaded region, which is the difference of the area of two squares

$\left(\frac{3}{5}\right)^2-\left(\frac{1}{3}\right)^2=\frac{9}{25}-\frac{1}{9}=\frac{56}{225}$

Thus, the answer is $\boxed{281}$


2010 AIME II Problems/Problem 3
Problem

Let $K$ be the product of all factors $(b-a)$ (not necessarily distinct) where $a$ and $b$ are integers satisfying $1\le a < b \le 20$. Find the greatest positive integer $n$ such that $2^n$ divides $K$.
Solution

In general, there are $20-n$ pairs of integers $(a, b)$ that differ by $n$ because we can let $b$ be any integer from $n+1$ to $20$ and set $a$ equal to $b-n$. Thus, the product is $(1^{19})(2^{18})\cdots(19^1)$ (or alternatively, $19! \cdot 18! \cdots 1!$.)

When we count the number of factors of $2$, we have 4 groups, factors that are divisible by $2$ at least once, twice, three times and four times.


Number that are divisible by $2$ at least once: $2, 4, \cdots, 18$

Exponent corresponding to each one of them $18, 16, \cdots 2$

Sum $=2+4+\cdots+18=\frac{(20)(9)}{2}=90$


Number that are divisible by $2$ at least twice: $4, 8, \cdots, 16$

Exponent corresponding to each one of them $16, 12, \cdots 4$

Sum $=4+8+\cdots+16=\frac{(20)(4)}{2}=40$ 


Number that are divisible by $2$ at least three times: $8,16$

Exponent corresponding to each one of them $12, 4$

Sum $=12+4=16$ 


Number that are divisible by $2$ at least four times: $16$

Exponent corresponding to each one of them $4$

Sum $=4$ 


Summing these give an answer of $\boxed{150}$.


2010 AIME II Problems/Problem 4

Problem

Dave arrives at an airport which has twelve gates arranged in a straight line with exactly $100$ feet between adjacent gates. His departure gate is assigned at random. After waiting at that gate, Dave is told the departure gate has been changed to a different gate, again at random. Let the probability that Dave walks $400$ feet or less to the new gate be a fraction $\frac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m+n$.
Solutions
Solution 1

There are $12 \cdot 11 = 132$ possible situations ($12$ choices for the initially assigned gate, and $11$ choices for which gate Dave's flight was changed to). We are to count the situations in which the two gates are at most $400$ feet apart.

If we number the gates $1$ through $12$, then gates $1$ and $12$ have four other gates within $400$ feet, gates $2$ and $11$ have five, gates $3$ and $10$ have six, gates $4$ and $9$ have have seven, and gates $5$, $6$, $7$, $8$ have eight. Therefore, the number of valid gate assignments is $2\cdot(4+5+6+7)+4\cdot8 = 2 \cdot 22 + 4 \cdot 8 = 76$ so the probability is $\frac{76}{132} = \frac{19}{33}$. The answer is $19 + 33 = \boxed{052}$.
Solution 2

As before, derive that there are $132$ possibilities for Dave's original and replacement gates.

Now suppose that Dave has to walk $100k$ feet to get to his new gate. This means that Dave's old and new gates must be $k$ gates apart. (For example, a $100$ foot walk would consist of the two gates being adjacent to each other.) There are $12-k$ ways to pick two gates which are $k$ gates apart, and $2$ possibilities for gate assignments, for a total of $2(12-k)$ possible assignments for each $k$.

As a result, the total number of valid gate arrangements is $2\cdot 11 + 2\cdot 10 + 2\cdot 9 + 2\cdot 8 = 76$ and so the requested probability is $\tfrac{19}{33}$ for a final answer of $\boxed{052}$.


2010 AIME II Problems/Problem 5
Problem

Positive numbers $x$, $y$, and $z$ satisfy $xyz = 10^{81}$ and $(\log_{10}x)(\log_{10} yz) + (\log_{10}y) (\log_{10}z) = 468$. Find $\sqrt {(\log_{10}x)^2 + (\log_{10}y)^2 + (\log_{10}z)^2}$.
Solution

Using the properties of logarithms, $\log_{10}xyz = 81$ by taking the log base 10 of both sides, and $(\log_{10}x)(\log_{10}y) + (\log_{10}x)(\log_{10}z) + (\log_{10}y)(\log_{10}z)= 468$ by using the fact that $\log_{10}ab = \log_{10}a + \log_{10}b$.

Through further simplification, we find that $\log_{10}x+\log_{10}y+\log_{10}z = 81$. It can be seen that there is enough information to use the formula $\ (a+b+c)^{2} = a^{2}+b^{2}+c^{2}+2ab+2ac+2bc$, as we have both $\ a+b+c$ and $\ 2ab+2ac+2bc$, and we want to find $\sqrt {a^2 + b^2 + c^2}$.

After plugging in the values into the equation, we find that $\ (\log_{10}x)^2 + (\log_{10}y)^2 + (\log_{10}z)^2$ is equal to $\ 6561 - 936 = 5625$.

However, we want to find $\sqrt {(\log_{10}x)^2 + (\log_{10}y)^2 + (\log_{10}z)^2}$, so we take the square root of $\ 5625$, or $\boxed{075}$.


2010 AIME II Problems/Problem 6
Problem

Find the smallest positive integer $n$ with the property that the polynomial $x^4 - nx + 63$ can be written as a product of two nonconstant polynomials with integer coefficients.
Solution

You can always factor a polynomial into quadratic factors.

Let $x^2+ax+b$ and $x^2+cx+d$ be the two quadratics, so that

$(x^2 + ax + b )(x^2 + cx + d) = x^4 + (a + c)x^3 + (b + d + ac)x^2 + (ad + bc)x + bd.$

Therefore, again setting coefficients equal, $a + c = 0\Longrightarrow a=-c$, $b + d + ac = 0\Longrightarrow b+d=a^2$ , $ad + bc = - n$, and so $bd = 63$.

Since $b+d=a^2$, the only possible values for $(b,d)$ are $(1,63)$ and $(7,9)$. From this we find that the possible values for $n$ are $\pm 8 \cdot 62$ and $\pm 4 \cdot 2$. Therefore, the answer is $\boxed{008}$.


2010 AIME II Problems/Problem 7
Problem 7

Let $P(z)=z^3+az^2+bz+c$, where a, b, and c are real. There exists a complex number $w$ such that the three roots of $P(z)$ are $w+3i$, $w+9i$, and $2w-4$, where $i^2=-1$. Find $|a+b+c|$.
Solution

Set $w=x+yi$, so $x_1 = x+(y+3)i$, $x_2 = x+(y+9)i$, $x_3 = 2x-4+2yi$.

Since $a,b,c\in{R}$, the imaginary part of a,b,c must be 0.

Start with a, since it's the easiest one to do: $y+3+y+9+2y=0, y=-3$,

and therefore: $x_1 = x$, $x_2 = x+6i$, $x_3 = 2x-4-6i$.

Now, do the part where the imaginary part of c is 0, since it's the second easiest one to do: $x(x+6i)(2x-4-6i)$. The imaginary part is: $6x^2-24x$, which is 0, and therefore x=4, since x=0 doesn't work.

So now, $x_1 = 4, x_2 = 4+6i, x_3 = 4-6i$,

and therefore: $a=-12, b=84, c=-208$. Finally, we have $|a+b+c|=|-12+84-208|=\boxed{136}$.


2010 AIME II Problems/Problem 8
Problem

Let $N$ be the number of ordered pairs of nonempty sets $\mathcal{A}$ and $\mathcal{B}$ that have the following properties:

$\mathcal{A} \cup \mathcal{B} = \{1,2,3,4,5,6,7,8,9,10,11,12\}$,
$\mathcal{A} \cap \mathcal{B} = \emptyset$,
The number of elements of $\mathcal{A}$ is not an element of $\mathcal{A}$,
The number of elements of $\mathcal{B}$ is not an element of $\mathcal{B}$. 

Find $N$.
Solution

Let us partition the set $\{1,2,\cdots,12\}$ into $n$ numbers in $A$ and $12-n$ numbers in $B$,

Since $n$ must be in $B$ and $12-n$ must be in $A$ ($n\ne6$, we cannot partition into two sets of 6 because $6$ needs to end up somewhere, $n\ne 0$ or $12$ either).

We have $\binom{10}{n-1}$ ways of picking the numbers to be in $A$.

So the answer is $\left(\sum_{n=1}^{11} \binom{10}{n-1}\right) - \binom{10}{5}=2^{10}-252= \boxed{772}$.


2010 AIME II Problems/Problem 9
Problem

Let $ABCDEF$ be a regular hexagon. Let $G$, $H$, $I$, $J$, $K$, and $L$ be the midpoints of sides $AB$, $BC$, $CD$, $DE$, $EF$, and $AF$, respectively. The segments $\overline{AH}$, $\overline{BI}$, $\overline{CJ}$, $\overline{DK}$, $\overline{EL}$, and $\overline{FG}$ bound a smaller regular hexagon. Let the ratio of the area of the smaller hexagon to the area of $ABCDEF$ be expressed as a fraction $\frac {m}{n}$ where $m$ and $n$ are relatively prime positive integers. Find $m + n$.

Solution

<div align=center><img src="http://latex.artofproblemsolving.com/f/9/f/f9fa5842a4caeeff7427aa1c43da018886b49731.png" height="250px" /></div>

Let $M$ be the intersection of $\overline{AH}$ and $\overline{BI}$

and $N$ be the intersection of $\overline{BI}$ and $\overline{CJ}$.

Let $O$ be the center.
Solution 1

Let $BC=2$ (without loss of generality).

Note that $\angle BMH$ is the vertical angle to an angle of regular hexagon, and so has degree $120^\circ$.

Because $\triangle ABH$ and $\triangle BCI$ are rotational images of one another, we get that $\angle{MBH}=\angle{HAB}$ and hence $\triangle ABH \sim \triangle BMH \sim \triangle BCI$.

Using a similar argument, $NI=MH$, and

$MN=BI-NI-BM=BI-(BM+MH).$

Applying the Law of cosines on $\triangle BCI$, $BI=\sqrt{2^2+1^2-2(2)(1)(\cos(120^\circ))}=\sqrt{7}$

$\begin{align*}\frac{BC+CI}{BI}&=\frac{3}{\sqrt{7}}=\frac{BM+MH}{BH} \\ BM+MH&=\frac{3BH}{\sqrt{7}}=\frac{3}{\sqrt{7}} \\ MN&=BI-(BM+MH)=\sqrt{7}-\frac{3}{\sqrt{7}}=\frac{4}{\sqrt{7}} \\ \frac{\text{Area of smaller hexagon}}{\text{Area of bigger hexagon}}&=\left(\frac{MN}{BC}\right)^2=\left(\frac{2}{\sqrt{7}}\right)^2=\frac{4}{7}\end{align*}$

Thus, the answer is 4 + 7 = $\boxed{011}$.
Solution 2

We can use coordinates. Let $O$ be at $(0,0)$ with $A$ at $(1,0)$,

then $B$ is at $(\cos(60^\circ),\sin(60^\circ))=\left(\frac{1}{2},\frac{\sqrt{3}}{2}\right)$,

$C$ is at $(\cos(120^\circ),\sin(120^\circ))=\left(-\frac{1}{2},\frac{\sqrt{3}}{2}\right)$,

$D$ is at $(\cos(180^\circ),\sin(180^\circ))=(-1,0)$,

$\begin{align*}&H=\frac{B+C}{2}=\left(0,\frac{\sqrt{3}}{2}\right) \\ &I=\frac{C+D}{2}=\left(-\frac{3}{4},\frac{\sqrt{3}}{4}\right)\end{align*}$


Line $AH$ has the slope of $-\frac{\sqrt{3}}{2}$ and the equation of $y=-\frac{\sqrt{3}}{2}(x-1)$


Line $BI$ has the slope of $\frac{\sqrt{3}}{5}$ and the equation $y-\frac{3}{2}=\frac{\sqrt{3}}{5}\left(x-\frac{1}{2}\right)$


Let's solve the system of equation to find $M$

$\begin{align*}-\frac{\sqrt{3}}{2}(x-1)-\frac{3}{2}&=\frac{\sqrt{3}}{5}\left(x-\frac{1}{2}\right) \\ -5\sqrt{3}x&=2\sqrt{3}x-\sqrt{3} \\ x&=\frac{1}{7} \\ y&=-\frac{\sqrt{3}}{2}(x-1)=\frac{3\sqrt{3}}{7}\end{align*}$

Finally,

$\begin{align*}&\sqrt{x^2+y^2}=OM=\frac{1}{7}\sqrt{1^2+(3\sqrt{3})^2}=\frac{1}{7}\sqrt{28}=\frac{2}{\sqrt{7}} \\ &\frac{\text{Area of smaller hexagon}}{\text{Area of bigger hexagon}}=\left(\frac{OM}{OA}\right)^2=\left(\frac{2}{\sqrt{7}}\right)^2=\frac{4}{7}\end{align*}$

Thus, the answer is $\boxed{011}$.


2010 AIME II Problems/Problem 10
Problem

Find the number of second-degree polynomials $f(x)$ with integer coefficients and integer zeros for which $f(0)=2010$.

Solution
Solution 1

Let $f(x) = a(x-r)(x-s)$. Then $ars=2010=2\cdot3\cdot5\cdot67$. First consider the case where $r$ and $s$ (and thus $a$) are positive. There are $3^4 = 81$ ways to split up the prime factors between $a$, $r$, and $s$. However, $r$ and $s$ are indistinguishable. In one case, $(a,r,s) = (2010,1,1)$, we have $r=s$. The other $80$ cases are double counting, so there are $40$.

We must now consider the various cases of signs. For the $40$ cases where $|r|\neq |s|$, there are a total of four possibilities, For the case $|r|=|s|=1$, there are only three possibilities, $(r,s) = (1,1); (1,-1); (-1,-1)$ as $(-1,1)$ is not distinguishable from the second of those three.

Thus the grand total is $4\cdot40 + 3 = \boxed{163}$.
Solution 2

We use Burnside's Lemma. The set being acted upon is the set of integer triples $(a,r,s)$ such that $ars=2010$. Because $r$ and $s$ are indistinguishable, the permutation group consists of the identity and the permutation that switches $r$ and $s$. In cycle notation, the group consists of $(a)(r)(s)$ and $(a)(r \: s)$. There are $4 \cdot 3^4$ fixed points of the first permutation (after distributing the primes among $a$, $r$, $s$ and then considering their signs) and $2$ fixed points of the second permutation ($r=s=\pm 1$). By Burnside's Lemma, there are $\frac{1}{2} (4 \cdot 3^4+2)= \boxed{163}$ distinguishable triples $(a,r,s)$.


Note: The permutation group is isomorphic to $\mathbb{Z}/2\mathbb{Z}$.


2010 AIME II Problems/Problem 11

Problem

Define a T-grid to be a $3\times3$ matrix which satisfies the following two properties:

Exactly five of the entries are $1$'s, and the remaining four entries are $0$'s.
Among the eight rows, columns, and long diagonals (the long diagonals are $\{a_{13},a_{22},a_{31}\}$ and $\{a_{11},a_{22},a_{33}\}$, no more than one of the eight has all three entries equal.

Find the number of distinct T-grids.


Solution
Solution 1

The T-grid can be consider as a tic-tac-toe board: five $1$'s and four $0$'s.

There are $\binom{9}{5} = 126$ ways to fill the board with five $1$'s and four $0$'s. Now we need to subtract the number of bad grids.

Let three-in-a-row/column/diagonal be a "win" and let player $0$ be the one that fills in $0$ and player $1$ fills in $1$.

Case $1$: Each player wins once.

If player takes a diagonal, the other cannot win, and if either takes a row/column, all column/row are blocked, so they either both take a row or both take a column.

Both takes a row:
$3$ ways for player $1$ to pick a row,
$2$ ways for player $0$,
$3$ ways for player $0$ to take a single box in the remaining row.

There are $18$ cases.
Both takes a column: Using similar reasoning, there are $18$ cases. 

Case $1$: $36$ cases


Case $2$: Player $1$ wins twice.

A row and a column
$3$ ways to pick the row,
$3$ to pick the column.

There are $9$ cases
A row/column and a diagonal
$6$ ways to pick the row/column,
$2$ to pick the diagonal.

There are $12$ cases
2 diagonals It is clear that there is only $1$ case.

Case $2$ total: $22$


Thus, the answer is $126-22-36=\boxed{68}$
Solution 2

We can use generating functions to compute the case that no row or column is completely filled with $1$'s. Given a row, let $a$, $b$, $c$ be the events that the first, second, third respective squares are $1$'s. Then the generating function representing the possible events that exclude a row of $1,1,1$ or $0,0,0$ from occuring is $ab+bc+ca+a+b+c.$ Therefore, the generating function representing the possible grids where no row is filled with $0$'s and $1$'s is $P(a,b,c)=((ab+bc+ca)+(a+b+c))^3.$ We expand this by the Binomial Theorem to find $P(a,b,c)=(ab+bc+ca)^3+3(ab+bc+ca)^2(a+b+c)+3(ab+bc+ca)(a+b+c)^2+(a+b+c)^3.$ Recall that our grid has five $1$'s, hence we only want terms where the sum of the exponents is $5$. This is given by $3(ab+bc+ca)^2(a+b+c).$ When we expand this, we find $3(2abc(a+b+c)+a^2b^2+b^2c^2+c^2a^2)(a+b+c).$ We also want to make sure that each of $a$, $b$, $c$ appears at least once (so there is no column filled with $0$'s) and the power of each of $a$, $b$, $c$ is not greater than or equal to $3$ (so there is no column filled with $1$'s). The sum of the coefficients of the above polynomial is clearly $81$ (using $a,b,c=1$), and the sum of the coefficients of the terms $a^3bc$, $ab^3c$, and $abc^3$ is $6+6+6+3+3+3+3+3+3=36$, hence the sum of the coefficients of the desired terms is $81-36=45$. This counts the number of grids where no column or row is filled with $0$'s or $1$'s. However, we could potentially have both diagonals filled with $1$'s, but this is the only exception to our $45$ possibilities, hence the number of $T$-grids with no row or column filled with the same digit is $44$.

On the other hand, if a row (column) is filled with $0$'s, then by the Pigeonhole Principle, another row (column) must be filled with $1$'s. Hence this is impossible, so all other possible $T$-grids have a row (column) filled with $1$'s. If the top row is filled with $1$'s, then we have two $1$'s left to place. Clearly they cannot go in the same row, because then the other row is filled with $0$'s. They also cannot appear in the same column. This leaves $3\cdot 2$ arrangements--3 choices for the location of the $1$ in the second row, and 2 choices for the location of the $1$ in the last row. However, two of these arrangements will fill a diagonal with $1$'s. Hence there are only $4$ $T$-grids where the top row is filled with $1$'s. The same argument applies if any other row or column is filled with $1$'s. Hence there are $4\cdot 6=24$ such $T$-grids.

Thus the answer is $44+24=\boxed{68}$.


2010 AIME II Problems/Problem 12

Problem

Two noncongruent integer-sided isosceles triangles have the same perimeter and the same area. The ratio of the lengths of the bases of the two triangles is $8: 7$. Find the minimum possible value of their common perimeter.
Solution 1

Let the first triangle have side lengths $a$, $a$, $14c$, and the second triangle have side lengths $b$, $b$, $16c$, where $a, b, 2c \in \mathbb{Z}$.


Equal perimeter:

$$\begin{array}{ccc} 2a+14c&=&2b+16c\\ a+7c&=&b+8c\\ c&=&a-b\\ \end{array}$$


Equal Area:

$$\begin{array}{cccl} 7c(\sqrt{a^2-(7c)^2})&=&8c(\sqrt{b^2-(8c)^2})&{}\\ 7(\sqrt{(a+7c)(a-7c)})&=&8(\sqrt{(b+8c)(b-8c)})&{}\\ 7(\sqrt{(a-7c)})&=&8(\sqrt{(b-8c)})&\text{(Note that } a+7c=b+8c)\\ 49a-343c&=&64b-512c&{}\\ 49a+169c&=&64b&{}\\ 49a+169(a-b)&=&64b&\text{(Note that } c=a-b)\\ 218a&=&233b&{}\\ \end{array}$$

Since $a$ and $b$ are integer, the minimum occurs when $a=233$, $b=218$, and $c=15$. Hence, the perimeter is $2a+14c=2(233)+14(15)=\boxed{676}$.
Solution 2

Let $s$ be the semiperimeter of the two triangles. Also, let the base of the longer triangle be $16x$ and the base of the shorter triangle be $14x$ for some arbitrary factor $x$. Then, the dimensions of the two triangles must be $s-8x,s-8x,16x$ and $s-7x,s-7x,14x$. By Heron's Formula, we have

$\sqrt{s(8x)(8x)(s-16x)}=\sqrt{s(7x)(7x)(s-14x)}$ $8\sqrt{s-16x}=7\sqrt{s-14x}$ $64s-1024x=49s-686x$ $15s=338x$

Since $15$ and $338$ are coprime, to minimize, we must have $s=338$ and $x=15$. However, we want the minimum perimeter. This means that we must multiply our minimum semiperimeter by $2$, which gives us a final answer of $\boxed{676}$.


2010 AIME II Problems/Problem 13
Problem

The $52$ cards in a deck are numbered $1, 2, \cdots, 52$. Alex, Blair, Corey, and Dylan each picks a card from the deck without replacement and with each card being equally likely to be picked, The two persons with lower numbered cards from a team, and the two persons with higher numbered cards form another team. Let $p(a)$ be the probability that Alex and Dylan are on the same team, given that Alex picks one of the cards $a$ and $a+9$, and Dylan picks the other of these two cards. The minimum value of $p(a)$ for which $p(a)\ge\frac{1}{2}$ can be written as $\frac{m}{n}$. where $m$ and $n$ are relatively prime positive integers. Find $m+n$.
Solution

Once the two cards are drawn, there are $\binom{50}{2} = 1225$ ways for the other two people to draw. Alex and Dylan are the team with higher numbers if Blair and Corey both draw below $a$, which occurs in $\binom{a-1}{2}$ ways. Alex and Dylan are the team with lower numbers if Blair and Corey both draw above $a+9$, which occurs in $\binom{43-a}{2}$ ways. Thus, $p(a)=\frac{\binom{43-a}{2}+\binom{a-1}{2}}{1225}.$ Simplifying, we get $p(a)=\frac{(43-a)(42-a)+(a-1)(a-2)}{2\cdot1225}$, so we need $(43-a)(42-a)+(a-1)(a-2)\ge (1225)$. If $a=22+b$, then $\begin{align*}(43-a)(42-a)+(a-1)(a-2)&=(21-b)(20-b)+(21+b)(20+b)=2b^2+2(21)(20)\ge (1225) \\ b^2\ge \frac{385}{2} &= 192.5 >13^2 \end{align*}$ So $b> 13$ or $b< -13$, and $a=22+b<9$ or $a>35$, so $a=8$ or $a=36$. Thus, $p(8) = \frac{616}{1225} = \frac{88}{175}$, and the answer is $88+175 = \boxed{263}$.


2010 AIME II Problems/Problem 14

Problem

Triangle $ABC$ with right angle at $C$, $\angle BAC < 45^\circ$ and $AB = 4$. Point $P$ on $\overline{AB}$ is chosen such that $\angle APC = 2\angle ACP$ and $CP = 1$. The ratio $\frac{AP}{BP}$ can be represented in the form $p + q\sqrt{r}$, where $p$, $q$, $r$ are positive integers and $r$ is not divisible by the square of any prime. Find $p+q+r$.
Solution

Let $O$ be the circumcenter of $ABC$ and let the intersection of $CP$ with the circumcircle be $D$. It now follows that $\angle{DOA} = 2\angle ACP = \angle{APC} = \angle{DPB}$. Hence $ODP$ is isosceles and $OD = DP = 2$.

Denote $E$ the projection of $O$ onto $CD$. Now $CD = CP + DP = 3$. By the pythagorean theorem, $OE = \sqrt {2^2 - \frac {3^2}{2^2}} = \sqrt {\frac {7}{4}}$. Now note that $EP = \frac {1}{2}$. By the pythagorean theorem, $OP = \sqrt {\frac {7}{4} + \frac {1^2}{2^2}} = \sqrt {2}$. Hence it now follows that,

$\frac {AP}{BP} = \frac {AO + OP}{BO - OP} = \frac {2 + \sqrt {2}}{2 - \sqrt {2}} = 3 + 2\sqrt {2}$

This gives that the answer is $\boxed{007}$.

An alternate finish for this problem would be to use Power of a Point on $BA$ and $CD$. By Power of a Point Theorem, $CP\cdot PD=1\cdot 2=BP\cdot PA$. Since $BP+PA=4$, we can solve for $BP$ and $PA$, giving the same values and answers as above.

<div align=center><img src="http://latex.artofproblemsolving.com/d/7/e/d7e4141491260a90ef8083f3335e1bda58389bce.png" height="200px" /></div>

Solution 2

Let $AC=b$, $BC=a$ by convention. Also, Let $AP=x$ and $BP=y$. Finally, let $\angle ACP=\theta$ and $\angle APC=2\theta$.

We are then looking for $\frac{AP}{BP}=\frac{x}{y}$

Now, by arc interceptions and angle chasing we find that $\triangle BPD \sim \triangle CPA$, and that therefore $BD=yb.$ Then, since $\angle ABD=\theta$ (it intercepts the same arc as $\angle ACD$) and $ADB$ is right,

$\cos\theta=\frac{DB}{AB}=\frac{by}{4}$.


Using law of sines on $APC$, we additionally find that $\frac{b}{\sin 2\theta}=\frac{x}{\sin\theta}.$ Simplification by the double angle formula $\sin 2\theta=2\sin \theta\cos\theta$ yields

$\cos \theta=\frac{b}{2x}$.


We equate these expressions for $\cos\theta$ to find that $xy=2$. Since $x+y=AB=4$, we have enough information to solve for $x$ and $y$. We obtain $x,y=2 \pm \sqrt{2}$

Since we know $x>y$, we use $\frac{x}{y}=\frac{2+\sqrt{2}}{2-\sqrt{2}}=3+2\sqrt{2}$


2010 AIME II Problems/Problem 15
Problem 15

In triangle $ABC$, $AC = 13$, $BC = 14$, and $AB=15$. Points $M$ and $D$ lie on $AC$ with $AM=MC$ and $\angle ABD = \angle DBC$. Points $N$ and $E$ lie on $A$B with $AN=NB$ and $\angle ACE = \angle ECB$. Let $P$ be the point, other than $A$, of intersection of the circumcircles of $\triangle AMN$ and $\triangle ADE$. Ray $AP$ meets $BC$ at $Q$. The ratio $\frac{BQ}{CQ}$ can be written in the form $\frac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m-n$.
Solution

Let $Y = MN \cap AQ$. $\frac {BQ}{QC} = \frac {NY}{MY}$ since $\triangle AMN \sim \triangle ACB$. Since quadrilateral $AMPN$ is cyclic, $\triangle MYA \sim \triangle PYN$ and $\triangle MYP \sim \triangle AYN$, yielding $\frac {YM}{YA} = \frac {MP}{AN}$ and $\frac {YA}{YN} = \frac {AM}{PN}$. Multiplying these together yields $\frac {YN}{YM} = \left(\frac {AN}{AM}\right) \left(\frac {PN}{PM}\right)$.

$\frac {AN}{AM} = \frac {\frac {AB}{2}}{\frac {AC}{2}} = \frac {15}{13}$. Also, $P$ is the center of spiral similarity of segments $MD$ and $NE$, so $\triangle PMD \sim \triangle PNE$. Therefore, $\frac {PN}{PM} = \frac {NE}{MD}$, which can easily be computed by the angle bisector theorem to be $\frac {145}{117}$. It follows that $\frac {BQ}{CQ} = \frac {15}{13} \cdot \frac {145}{117} = \frac {725}{507}$, giving us an answer of $725 - 507 = \boxed{218}$.

Note: Spiral similarities may sound complex, but they're really not. The fact that $\triangle PMD \sim \triangle PNE$ is really just a result of simple angle chasing.

Source: [1] by Zhero


2010 AIME II Answer Key

Return to 2010 AIME II (2010 AIME II Problems)

1. 640
2. 281
3. 150
4. 052
5. 075
6. 008
7. 136
8. 772
9. 011
10. 163
11. 068
12. 676
13. 263
14. 007
15. 218

