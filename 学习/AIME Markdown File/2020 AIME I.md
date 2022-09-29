# 2020 AIME I Problems

## 2020 AIME I Problem 1

In $\triangle ABC$ with $AB=AC,$ point $D$ lies strictly between $A$ and $C$ on side $\overline{AC},$ and point $E$ lies strictly between $A$ and $B$ on side $\overline{AB}$ such that $AE=ED=DB=BC.$ The degree measure of $\angle ABC$ is $\frac{m}{n},$ where $m$ and $n$ are relatively prime positive integers. Find $m+n.$

### Solution 1

![](学习/AIME%20Markdown%20File/2020AIMEI-Problem1.png)

![](https://latex.artofproblemsolving.com/e/9/e/e9e27ce12b66c38e61f3aeeeec6ac0760eebc7e9.png)

If we set $\angle{BAC}$ to $x$, we can find all other angles through these two properties: 1. Angles in a triangle sum to $180^{\circ}$. 2. The base angles of an isoceles triangle are congruent.

Now we angle chase. $\angle{ADE}=\angle{EAD}=x$, $\angle{AED} = 180-2x$, $\angle{BED}=\angle{EBD}=2x$, $\angle{EDB} = 180-4x$, $\angle{BDC} = \angle{BCD} = 3x$, $\angle{CBD} = 180-6x$. Since $AB = AC$ as given by the problem, $\angle{ABC} = \angle{ACB}$, so $180-4x=3x$. Therefore, $x = 180/7^{\circ}$, and our desired angle is $180-4\left(\frac{180}{7}\right) = \frac{540}{7}$ for an answer of $\boxed{547}$.

See here for a video solution: https://youtu.be/4e8Hk04Ax_E

### Solution 2

Let $\angle{BAC}$ be $x$ in degrees. $\angle{ADE}=x$. By Exterior Angle Theorem on triangle $AED$, $\angle{BED}=2x$. By Exterior Angle Theorem on triangle  $ADB$, $\angle{BDC}=3x$. This tells us $\angle{BCA}=\angle{ABC}=3x$ and $3x+3x+x=180$. Thus $x=\frac{180}{7}$ and we want $\angle{ABC}=3x=\frac{540}{7}$ to get an answer of $\boxed{547}$.

## 2020 AIME I Problem 2

There is a unique positive real number $x$ such that the three numbers $\log_8{2x}$, $\log_4{x}$, and $\log_2{x}$, in that order, form a geometric progression with positive common ratio. The number $x$ can be written as $\frac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m + n$.

### Solution

Since these form a geometric series, $\frac{\log_2{x}}{\log_4{x}}$ is the common ratio. Rewriting this, we get $\frac{\log_x{4}}{\log_x{2}} = \log_2{4} = 2$ by base change formula. Therefore, the common ratio is 2. Now $\frac{\log_4{x}}{\log_8{2x}} = 2 \implies \log_4{x} = 2\log_8{2} + 2\log_8{x} \implies \frac{1}{2}\log_2{x} = \frac{2}{3} + \frac{2}{3}\log_2{x}$

$\implies -\frac{1}{6}\log_2{x} = \frac{2}{3} \implies \log_2{x} = -4 \implies x = \frac{1}{16}$. Therefore, $1 + 16 = \boxed{017}$.

## 2020 AIME I Problem 3

A positive integer $N$ has base-eleven representation $\underline{a}\underline{b}\underline{c}$ and base-eight representation $\underline{1}\underline{b}\underline{c}\underline{a},$ where $a,b,$ and $c$ represent (not necessarily distinct) digits. Find the least such $N$ expressed in base ten.

### Solution

From the given information, $121a+11b+c=512+64b+8c+a \implies 120a=512+53b+7c$. Since $a$, $b$, and $c$ have to be positive, $a \geq 5$. Since we need to minimize the value of $n$, we want to minimize $a$, so we have $a = 5$. Then we know $88=53b+7c$, and we can see the only solution is $b=1$, $c=5$. Finally, $515_{11} = 621_{10}$, so our answer is $\boxed{621}$.

## 2020 AIME I Problems/Problem 4

Let $S$ be the set of positive integers $N$ with the property that the last four digits of $N$ are $2020,$ and when the last four digits are removed, the result is a divisor of $N.$ For example, $42,020$ is in $S$ because $4$ is a divisor of $42,020.$ Find the sum of all the digits of all the numbers in $S.$ For example, the number $42,020$ contributes $4+2+0+2+0=8$ to this total.

### Solution

We note that any number in $S$ can be expressed as $a(10,000) + 2,020$ for some integer $a$. The problem requires that $a$ divides this number, and since we know $a$ divides $a(10,000)$, we need that $a$ divides 2020. Each number contributes the sum of the digits of $a$, as well as $2 + 0 + 2 +0 = 4$. Since $2020$ can be prime factorized as $2^2 \cdot 5 \cdot 101$, it has $(2+1)(1+1)(1+1) = 12$ factors. So if we sum all the digits of all possible $a$ values, and add $4 \cdot 12 = 48$, we obtain the answer.

Now we list out all factors of $2,020$, or all possible values of $a$. $1,2,4,5,10,20,101,202,404,505,1010,2020$. If we add up these digits, we get $45$, for a final answer of $45+48=\boxed{093}$.

## 2020 AIME I Problem 5

Six cards numbered $1$ through $6$ are to be lined up in a row. Find the number of arrangements of these six cards where one of the cards can be removed leaving the remaining five cards in either ascending or descending order.

### Solution
Realize that any sequence that works (ascending) can be reversed for descending, so we can just take the amount of sequences that satisfy the ascending condition and multiply by two.

If we choose any of the numbers $1$ through $6$, there are five other spots to put them, so we get $6 \cdot 5 = 30$. However, we overcount some cases. Take the example of $132456$. We overcount this case because we can remove the $3$ or the $2$. Therefore, any cases with two adjacent numbers swapped is overcounted, so we subtract $5$ cases (namely, $213456, 132456, 124356, 123546, 123465$,) to get $30-5=25$, but we have to add back one more for the original case, $123456$. Therefore, there are $26$ cases. Multiplying by $2$ gives the desired answer, $\boxed{052}$.

### Solution 2 (Inspired by 2018 CMIMC combo round)
Similar to above, a $1-1$ correspondence between ascending and descending is established by subtracting each number from $7$.

We note that the given condition is equivalent to "cycling" $123456$ for a contiguous subset of it. For example,

$12(345)6 \rightarrow 125346, 124536$

It's not hard to see that no overcount is possible, and that the cycle is either $1$ "right" or $1$ "left." Therefore, we consider how many elements we flip by. If we flip $1$ or $2$ such elements, then there is one way to cycle them. Otherwise, we have $2$ ways. Therefore, the total number of ascending is $1 + 5 + 2(4 + 3 + 2 + 1) = 26$, and multiplying by two gives $\boxed{052}.$ ~awang11

### Solution 3
Similarly to above, we find the number of ascending arrangements and multiply by 2.

We can choose $5$ cards to be the ascending cards, therefore leaving $6$ places to place the remaining card. There are $\binom{6}{5}\cdot 6=36$ to do this. However, since the problem is asking for the number of arrangements, we overcount cases such as $123456$. Notice that the only arrangements that overcount are $123456$ (case 1) or if two adjacent numbers of $123456$ are switched (case 2).

$\text{Case 1: }$ This arrangement is counted $6$ times. Each time it is counted for any of the $5$ numbers selected. Therefore we need to subtract $5$ cases of overcounting.

$\text{Case 2: }$ Each time $2$ adjacent numbers of switched, there is one overcount. For example, if we have $213456$, both $1$ or $2$ could be removed. Since there are $5$ possible switches, we need to subtract $5$ cases of overcounting.

Therefore, we have $36-5-5=26$ total arrangements of ascending numbers. We multiply by two (for descending) to get the answer of $\boxed{052}.$ -PCChess

### Solution 4 (No overcounting)

Like in previous solutions, we will count the number of ascending arrangements and multiply by 2.

First, consider the arrangement 1-2-3-4-5-6. That gives us 1 arrangement which works.

Next, we can switch two adjacent cards. There are 5 ways to pick two adjacent cards, so this gives us 5 arrangements.

Now, we can "cycle" 3 adjacent cards. For example, 1-2-3 becomes 2-3-1 which becomes 3-1-2. There are 4 ways to pick a set of 3 adjacent cards, so this gives us 4x2=8 arrangements.

Cycling 4 adjacent cards, we get the new arrangements 2-3-4-1 (which works,) 3-4-1-2 (which doesn't work,) and 4-1-2-3 (which does work.) We get 6 arrangements.

Similarly, when cycling 5 cards, we find 2x2=4 arrangements, and when cycling 6 cards, we find 2x1=2 arrangements.

Adding, we figure out that there are 1+5+8+6+4+2=26 ascending arrangements. Multiplying by 2, we get the answer $\boxed{052}.$

## 2020 AIME I Problem 6

A flat board has a circular hole with radius $1$ and a circular hole with radius $2$ such that the distance between the centers of the two holes is $7.$ Two spheres with equal radii sit in the two holes such that the spheres are tangent to each other. The square of the radius of the spheres is $\frac{m}{n},$ where $m$ and $n$ are relatively prime positive integers. Find $m+n.$

### Solution

![](学习/AIME%20Markdown%20File/2020AIMEI-Problem6.png)

Set the common radius to $r$. First, take the cross section of the sphere sitting in the hole of radius 1. If we draw the perpendicular bisector of the chord (the hole) through the circle, this line goes through the center. Connect the center also to where the chord hits the circle, for a right triangle with hypotenuse $r$ and base $1$. Therefore, the height of this circle outside of the hole is $\sqrt{r^2-1}$.

The other circle follows similarly for a height (outside the hole) of $\sqrt{r^2-4}$. Now, if we take the cross section of the entire board, essentially making it 2-D, we can connect the centers of the two spheres, then form another right triangle with base $7$, as given by the problem. The height of this triangle is the difference between the heights of the parts of the two spheres outside the holes, which is $\sqrt{r^2-1} - \sqrt{r^2-4}$. Now we can set up an equation in terms of $r$ with the Pythagorean theorem: $(\sqrt{r^2-1} - \sqrt{r^2-4})^2 + 7^2 = (2r)^2.$ Simplifying a few times, $r^2 - 1 - 2\left(\sqrt{(r^2-1)(r^2-4)}\right) + r^2 - 4 + 49 = 4r^2$$2r^2-44= -2\left(\sqrt{(r^2-1)(r^2-4)}\right)$$22-r^2=\left(\sqrt{r^4 - 5r^2 + 4}\right)$$r^4 -44r^2 + 484 = r^4 - 5r^2 + 4$$39r^2=480$$r^2=\frac{480}{39} = \frac{160}{13}.$ Therefore, our answer is $\boxed{173}$.

## 2020 AIME I Problem 7

A club consisting of $11$ men and $12$ women needs to choose a committee from among its members so that the number of women on the committee is one more than the number of men on the committee. The committee could have as few as $1$ member or as many as $23$ members. Let $N$ be the number of such committees that can be formed. Find the sum of the prime numbers that divide $N.$

### Solution 1

We will be selecting women, but not selecting men. We claim that the amount of women selected and the amount of men not selected adds to $12$. This is easy to see: if $k$ women were chosen, then $k + (11 - k + 1) = 12$. Therefore, we simply take $\binom{23}{12} \implies \boxed{081}$. ~awang11's sol

### Solution 2 (Bash)

We casework on the amount of men on the committee.

If there are no men in the committee, there are $\binom{12}{1}$ ways to pick the women on the committee, for a total of $\binom{11}{0} \cdot \binom{12}{1}$. Notice that $\binom{11}{0}$ is equal to $\binom{11}{11}$, so the case where no men are picked can be grouped with the case where all men are picked. When all men are picked, all females must also be picked, for a total of $\binom{12}{12}$. Therefore, these cases can be combined to $\binom{11}{0} \cdot \left(\binom{12}{1} + \binom{12}{12}\right)$ Since $\binom{12}{12} = \binom{12}{0}$, and $\binom{12}{0} + \binom{12}{1} = \binom{13}{1}$, we can further simplify this to $\binom{11}{0} \cdot \binom{13}{1}$
All other cases proceed similarly. For example, the case with one men or ten men is equal to $\binom{11}{1} \cdot \binom{13}{2}$. Now, if we factor out a $13$, then all cases except the first two have a factor of $121$, so we can factor this out too to make our computation slightly easier. The first two cases (with $13$ factored out) give $1+66=67$, and the rest gives $121(10+75+270+504) = 103,939$. Adding the $67$ gives $104,006$. Now, we can test for prime factors. We know there is a factor of $2$, and the rest is $52,003$. We can also factor out a $7$, for $7,429$, and the rest is $17 \cdot 19 \cdot 23$. Adding up all the prime factors gives $2+7+13+17+19+23 = \boxed{081}$.

### Solution 3 (Vandermonde's identity)

Applying Vandermonde's identity by setting $m=12$, $n=11$, and $r=11$, we obtain $\binom{23}{11}\implies$ $\boxed{081}$. ~Lcz

### Solution 4

Notice that the committee can consist of $k$ boys and $k+1$ girls. Summing over all possible $k$ gives $\sum_{k=0}^{11}\binom{11}{k}\binom{12}{k+1}=\binom{11}{0}\binom{12}{1}+\binom{11}{1}\binom{12}{2}+\cdots + \binom{11}{11}\binom{12}{12}$ Using the identity $\binom{n}{k}=\binom{n}{n-k}$, and Pascal's Identity $\binom{n}{k}+\binom{n}{k+1}=\binom{n+1}{k+1}$, we get $\sum_{k=0}^{11}\binom{11}{k}\binom{12}{k+1}=\binom{12}{12}+\binom{12}{1}\left(\binom{11}{0}+\binom{11}{1}\right)+\cdots$$=\binom{12}{0}^2+\binom{12}{1}^2+\binom{12}{2}^2+\binom{12}{3}^2+\binom{12}{4}^2+\binom{12}{5}^2+\frac{\binom{12}{6}^2}{2}$$=\frac{1}{2}\sum_{k=0}^{12}\binom{12}{k}^2$ Using the identity $\sum_{k=0}^n\binom{n}{k}^2=\binom{2n}{n}$, this simplifies to $\frac{1}{2}\cdot \binom{24}{12}=\frac{24\cdot 23\cdot 22\cdot 21\cdot 20\cdot 19\cdot 18\cdot 17\cdot 16\cdot 15\cdot 14\cdot 13}{2\cdot 12\cdot 11\cdot 10\cdot 9\cdot 8\cdot 7\cdot 6\cdot 5\cdot 4\cdot 3\cdot 2}=2\cdot 7\cdot 13\cdot 17\cdot 19\cdot 23$ so the desired answer is $2+7+13+17+19+23=\boxed{081}$ ~ktong

## 2020 AIME I Problem 8

A bug walks all day and sleeps all night. On the first day, it starts at point $O,$ faces east, and walks a distance of $5$ units due east. Each night the bug rotates $60^\circ$ counterclockwise. Each day it walks in this new direction half as far as it walked the previous day. The bug gets arbitrarily close to the point $P.$ Then $OP^2=\frac{m}{n},$ where $m$ and $n$ are relatively prime positive integers. Find $m+n.$

### Solution 1 (Coordinates)

![](学习/AIME%20Markdown%20File/2020AIMEI-Problem8.png)

![](https://latex.artofproblemsolving.com/2/a/1/2a1b70a72018476e9501ee736e2b3fd58ee841a0.png)

We plot this on the coordinate grid with point $O$ as the origin. We will keep a tally of the x-coordinate and y-coordinate separately.

First move: The ant moves right $5$. Second move: We use properties of a $30-60-90$ triangle to get $\frac{5}{4}$ right, $\frac{5\sqrt{3}}{4}$ up. Third move: $\frac{5}{8}$ left, $\frac{5\sqrt{3}}{8}$ up. Fourth move: $\frac{5}{8}$ left. Fifth move: $\frac{5}{32}$ left, $\frac{5\sqrt{3}}{32}$ down. Sixth move: $\frac{5}{64}$ right, $\frac{5\sqrt{3}}{64}$ down.

Total of x-coordinate: $5 + \frac{5}{4} - \frac{5}{8} - \frac{5}{8}  - \frac{5}{32} + \frac{5}{64} = \frac{315}{64}$. Total of y-coordinate: $0 + \frac{5\sqrt{3}}{4} + \frac{5\sqrt{3}}{8} + 0 - \frac{5\sqrt{3}}{32} - \frac{5\sqrt{3}}{64} = \frac{105\sqrt{3}}{64}$.

After this cycle of six moves, all moves repeat with a factor of $(\frac{1}{2})^6 = \frac{1}{64}$. Using the formula for a geometric series, multiplying each sequence by $\frac{1}{1-\frac{1}{64}} = \frac{64}{63}$ will give us the point $P$.

$\frac{315}{64} \cdot \frac{64}{63} = 5$, $\frac{105\sqrt{3}}{64} \cdot \frac{64}{63} = \frac{5\sqrt{3}}{3}$. Therefore, the coordinates of point $P$ are $(5,\frac{5\sqrt{3}}{3})$, so using the Pythagorean Theorem, $OP^2 = \frac{100}{3}$, for an answer of $\boxed{103}$. -molocyxu

Solution 2 (Complex)
We place the ant at the origin of the complex plane with its first move being in the positive real direction. Then the ant's journey can be represented as the infinite series $5\left(1 + \frac{e^{\frac{i\pi}{3}}}{2} + \left(\frac{e^{\frac{i\pi}{3}}}{2}\right)^2 + \cdots\right)$ Using the formula for an infinite geometric series, this is equal to $\frac{5}{1 - \frac12e^{\frac{i\pi}{3}}} = \frac{5}{1 - \frac{1 + i\sqrt{3}}{4}} = \frac{20}{3 - i\sqrt{3}} = 5 + \frac{5i\sqrt{3}}{3}$ We are looking for the square of the modulus of this value: $\left|\frac{5 + 5i\sqrt{3}}{3}\right|^2 = 25 + \frac{25}{3} = \frac{100}{3}$ so the answer is $100 + 3 = \boxed{103}$.

Solution 3 (Solution 1 faster)
The ant goes in the opposite direction every $3$ moves, going $(1/2)^3=1/8$ the distance backwards. Using geometric series, he travels $1-1/8+1/64-1/512...=(7/8)(1+1/64+1/4096...)=(7/8)(64/63)=8/9$ the distance of the first three moves over infinity moves. Now, we use coordinates meaning $(5+5/4-5/8, 0+5\sqrt3/4+5\sqrt3/8)$ or $(45/8, 15\sqrt3/8)$. Multiplying these by $8/9$, we get $(5, 5\sqrt3/3)$ $\implies$ $\boxed{103}$ .

## 2020 AIME I Problem 9

Let $S$ be the set of positive integer divisors of $20^9.$ Three numbers are chosen independently and at random with replacement from the set $S$ and labeled $a_1,a_2,$ and $a_3$ in the order they are chosen. The probability that both $a_1$ divides $a_2$ and $a_2$ divides $a_3$ is $\frac{m}{n},$ where $m$ and $n$ are relatively prime positive integers. Find $m.$

### Solution

![](学习/AIME%20Markdown%20File/2020AIMEI-Problem9.png)

![](https://latex.artofproblemsolving.com/b/8/9/b897aa5312f48ded1d6fa21afb4acfef70453ad3.png)

First, prime factorize $20^9$ as $2^{18} \cdot 5^9$. Denote $a_1$ as $2^{b_1} \cdot 5^{c_1}$, $a_2$ as $2^{b_2} \cdot 5^{c_2}$, and $a_3$ as $2^{b_3} \cdot 5^{c_3}$.

In order for $a_1$ to divide $a_2$, and for $a_2$ to divide $a_3$, $b_1\le b_2\le b_3$, and $c_1\le c_2\le c_3$. We will consider each case separately. Note that the total amount of possibilities is $190^3$, as there are $(18+1)(9+1)=190$ choices for each factor.

We notice that if we add $1$ to $b_2$ and $2$ to $b_3$, then we can reach the stronger inequality $0\le b_1 < b_2 + 1 < b_3 + 2\le 20$. Therefore, if we pick $3$ integers from $0$ to $20$, they will correspond to a unique solution, forming a 1-1 correspondence between the numbers $b_1$, $b_2+1$, and $b_3+2$. This is also equivalent to applying stars and bars on distributing the powers of 2 and 5 through differences. The amount of solutions to this inequality is $\binom{21}{3}$.

The case for $c_1$,$c_2$, and $c_3$ proceeds similarly for a result of $\binom{12}{3}$. Therefore, the probability of choosing three such factors is $\frac{\binom{21}{3} \cdot \binom{12}{3}}{190^3}.$ Simplification gives $\frac{77}{1805}$, and therefore the answer is $\boxed{077}$. -molocyxu

### Solution 2

Same as before, say the factors have powers of $b$ and $c$. $b_1, b_2, b_3$ can either be all distinct, all equal, or two of the three are equal. As well, we must have $b_1 \leq b_2 \leq b_3$. If they are all distinct, the number of cases is simply ${19 \choose 3}$. If they are all equal, there are only $19$ cases for the general value. If we have a pair equal, then we have $2 \cdot {19\choose 2}$. We need to multiply by $2$ because if we have two values $b_i < b_j$, we can have either $(b_i, b_i, b_j)$ or $(b_i, b_j, b_j)$.

${19 \choose 3} + 2 \cdot {19 \choose 2} + 19 = 1330$
Likewise for $c$, we get

${10 \choose 3} + 2 \cdot {10 \choose 2} + 10 = 220$
The final probability is simply $\frac{1330 \cdot 220}{190^3}$. Simplification gives $\frac{77}{1805}$, and therefore the answer is $\boxed{077}$.

Solution 3
Similar to before, we calculate that there are $190^3$ ways to choose 3 factors with replacement. Then, we figure out the number of triplets {a,b,c} and {d,f,g}, where a, b, and c represent powers of 2 and d, f, and g represent powers of 5, such that the triplets are in non-descending order. The maximum power of 2 is 18, and the maximum power of 5 is 9. Using the Hockey Stick identity, we figure out that there are $\binom{12}{3}$ ways to choose d, f and g, and $\binom{21}{3}$ ways to choose a, b, and c. Therefore, the probability of choosing 3 factors which satisfy the conditions is $\frac{\binom{21}{3} \cdot \binom{12}{3}}{190^3}.$ This simplifies to 77/1805, therefore m = $\boxed{077}$.

## 2020 AIME I Problem 10

Let $m$ and $n$ be positive integers satisfying the conditions

$\quad\bullet\ \gcd(m+n,210)=1,$

$\quad\bullet\ m^m$ is a multiple of $n^n,$ and

$\quad\bullet\ m$ is not a multiple of $n.$

Find the least possible value of $m+n.$

### Solution 1

Taking inspiration from $4^4 \mid 10^{10}$ we are inspired to take $n$ to be $p^2$, the lowest prime not dividing $210$, or $11 \implies n = 121$. Now, there are $242$ factors of $11$, so $11^{242} \mid m^m$, and then $m = 11k$ for $k \geq 22$. Now, $\gcd(m+n, 210) = \gcd(11+k,210) = 1$. Noting $k = 26$ is the minimal that satisfies this, we get $(n,m) = (121,286)$. Thus, it is easy to verify this is minimal and we get $\boxed{407}$. ~awang11

### Solution 2

Assume for the sake of contradiction that $n$ is a multiple of a single digit prime number, then $m$ must also be a multiple of that single digit prime number to accommodate for $n^n | m^m$. However that means that $m+n$ is divisible by that single digit prime number, which violates $\gcd(m+n,210) = 1$, so contradiction.

$n$ is also not 1 because then $m$ would be a multiple of it.

Thus, $n$ is a multiple of 11 and/or 13 and/or 17 and/or...

Assume for the sake of contradiction that $n$ has at most 1 power of 11, at most 1 power of 13...and so on... Then, for $n^n | m^m$ to be satisfied, $m$ must contain at least the same prime factors that $n$ has. This tells us that for the primes where $n$ has one power of, $m$ also has at least one power, and since this holds true for all the primes of $n$, $n|m$. Contradiction.

Thus $n$ needs more than one power of some prime. The obvious smallest possible value of $n$ now is $11^2 =121$. Since $121^{121}=11^{242}$, we need $m$ to be a multiple of 11 at least $242$ that is not divisible by $121$ and most importantly, $\gcd(m+n,210) = 1$. $242$ is divisible by $121$, out. $253+121$ is divisible by 2, out. $264+121$ is divisible by 5, out. $275+121$ is divisible by 2, out. $286+121=37\cdot 11$ and satisfies all the conditions in the given problem, and the next case $n=169$ will give us at least $169\cdot 3$, so we get $\boxed{407}$.

## 2020 AIME I Problem 11

For integers $a,b,c$ and $d,$ let $f(x)=x^2+ax+b$ and $g(x)=x^2+cx+d.$ Find the number of ordered triples $(a,b,c)$ of integers with absolute values not exceeding $10$ for which there is an integer $d$ such that $g(f(2))=g(f(4))=0.$

### Solution 1 (Strategic Casework)

Either $f(2)=f(4)$ or not. If it is, note that Vieta's forces $a = -6$. Then, $b$ can be anything. However, $c$ can also be anything, as we can set the root of $g$ (not equal to $f(2) = f(4)$) to any integer, producing a possible integer value of $d$. Therefore there are $21^2 = 441$ in this case*. If it isn't, then $f(2),f(4)$ are the roots of $g$. This means by Vieta's, that:

$f(2)+f(4) = -c \in [-10, 10],20 + 6a + 2b \in [-10, 10],3a + b \in [-15, -5].$

Solving these inequalities while considering that $a \neq -6$ to prevent $f(2) = f(4)$, we obtain $69$ possible tuples and adding gives $441+69=\boxed{510}$. ~awang11

### Solution 2 (Bash)

Define $h(x)=x^2+cx$. Since $g(f(2))=g(f(4))=0$, we know $h(f(2))=h(f(4))=-d$. Plugging in $f(x)$ into $h(x)$, we get $h(f(x))=x^4+2ax^3+(2b+a^2+c)x^2+(2ab+ac)x+(b^2+bc)$. Setting $h(f(2))=h(f(4))$, $16+16a+8b+4a^2+4ab+b^2+4c+2ac+bc=256+128a+32b+16a^2+8ab+b^2+16c+4ac+bc$. Simplifying and cancelling terms, $240+112a+24b+12a^2+4ab+12c+2ac=0$$120+56a+12b+6a^2+2ab+6c+ac=0$$6a^2+2ab+ac+56a+12b+6c+120=0$$6a^2+2ab+ac+20a+36a+12b+6c+120=0$$a(6a+2b+c+20)+6(6a+2b+c+20)=0$$(a+6)(6a+2b+c+20)=0$

Therefore, either $a+6=0$ or $6a+2b+c=-20$. The first case is easy: $a=-6$ and there are $441$ tuples in that case. In the second case, we simply perform casework on even values of $c$, to get $77$ tuples, subtracting the $8$ tuples in both cases we get $441+77-8=\boxed{510}$. -EZmath2006

## 2020 AIME I Problem 12

Let $n$ be the least positive integer for which $149^n-2^n$ is divisible by $3^3\cdot5^5\cdot7^7.$ Find the number of positive integer divisors of $n.$

### Solution 1

Lifting the Exponent shows that $v_3(149^n-2^n) = v_3(n) + v_3(147) = v_3(n)+1$ so thus, $3^2$ divides $n$. It also shows that $v_7(149^n-2^n) = v_7(n) + v_7(147) = v_7(n)+2$ so thus, $7^5$ divides $n$.

Now, multiplying $n$ by $4$, we see $v_5(149^{4n}-2^{4n}) = v_5(149^{4n}-16^{n})$ and since $149^{4} \equiv 1 \mod{25}$ and $16^1 \equiv 16 \mod{25}$ then $v_5(149^{4n}-2^{4n})=1+v_5(n)$ meaning that we have that by LTE, $4 \cdot 5^4$ divides $n$.

Since $3^2$, $7^5$ and $4\cdot 5^4$ all divide $n$, the smallest value of $n$ working is their LCM, also $3^2 \cdot 7^5 \cdot 4 \cdot 5^4 = 2^2 \cdot 3^2 \cdot 5^4 \cdot 7^5$. Thus the number of divisors is $(2+1)(2+1)(4+1)(5+1) = \boxed{270}$ ~kevinmathz

### Solution 2 (Simpler, just basic mods and Fermat's theorem)
Note that for all $n$, $149^n - 2^n$ is divisible by $149-2 = 147$ because that is a factor. That is $3\cdot7^2$, so now we can clearly see that the smallest $n$ to make the expression divisible by $3^3$ is just $3^2$. Similarly, we can reason that the smallest $n$ to make the expression divisible by $7^7$ is just $7^5$.

Finally, for $5^5$, take $\mod {5}$ and $\mod {25}$ of each quantity (They happen to both be $-1$ and $2$ respectively, so you only need to compute once). One knows from Fermat's theorem that the maximum possible minimum $n$ for divisibility by $5$ is $4$, and other values are factors of $4$. Testing all of them(just $1$,$2$,$4$ using mods-not too bad), $4$ is indeed the smallest value to make the expression divisible by $5$, and this clearly is NOT divisible by $25$. Therefore, the smallest $n$ to make this expression divisible by $5^5$ is $2^2 \cdot 5^4$.

Calculating the LCM of all these, one gets $2^2 \cdot 3^2 \cdot 5^4 \cdot 7^5$. Using the factor counting formula, the answer is $3\cdot3\cdot5\cdot6$ = $\boxed{270}$. -thanosaops

### Solution 3 (Elementary and Thorough)

As usual, denote $v_p(n)$ the highest power of prime $p$ that divides $n$. For divisibility by $3^3$, notice that $v_3(149^3 - 2^3) = 2$ as $149^3 - 2^3 =$ $(147)(149^2 + 2\cdot149 + 2^2)$, and upon checking mods, $149^2 + 2\cdot149 + 2^2$ is divisible by $3$ but not $9$. In addition, $149^9 - 3^9$ is divisible by $3^3$ because $149^9 - 3^9 = (149^3 - 3^3)(149^6 + 149^3\cdot2^3 + 2^6)$, and the rightmost factor equates to $1 + 1 + 1 \mod{3} \equiv 0 \mod{3}$. In fact, $n = 9 = 3^2$ is the least possible choice to ensure divisibility by $3^3$ because if $n = a \cdot 3^b$, with $3 \nmid a$ and $b < 2$, we write $149^{a \cdot 3^b} - 2^{a \cdot 3^b} =  (149^{3^b} - 2^{3^b})(149^{3^b(a - 1)} + 149^{3^b(a - 2)}\cdot2^{3^b}+\cdots2^{3^b(a - 1)}).$ Then, the rightmost factor is equivalent to $\pm a \mod{3} \not\equiv 0 \mod{3}$, and $v_3(149^{3^b} - 2^{3^b}) = b + 1 < 3$.

For divisibility by $7^7$, we'll induct, claiming that $v_7(149^{7^k} - 2^{7^k}) = k + 2$ for whole numbers $k$. The base case is clear. Then, $v_7(149^{7^{k+1}} - 2^{7^{k+1}}) = v_7(149^{7^k} - 2^{7^k}) + v_7(149^{6\cdot7^k} + 2^{7^k}\cdot149^{5\cdot7^k} + \cdots + 2^{5\cdot7^k}\cdot149^{7^k} + 2^{6\cdot7^k}).$ By the induction hypothesis, $v_7(149^{7^k} - 2^{7^k}) = k + 2$. Then, notice that $S(k) = 149^{6\cdot7^k} + 2^{7^k}\cdot149^{5\cdot7^k} + \cdots + 2^{5\cdot7^k}\cdot149^{7^k} + 2^{6\cdot7^k} \equiv 7 \cdot 2^{6\cdot7^k}\mod{7} \equiv 7 \cdot 2^{6\cdot7^k}\mod{49}.$ This tells us that $S(k)$ is divisible by $7$, but not $49$ so that $v_7\left(S(k)\right) = 1$, completing our induction. We can verify that $7^5$ is the least choice of $n$ to ensure divisibility by $7^7$ by arguing similarly to the $3^3$ case.

Finally, for $5^5$, we take the powers of $149$ and $2$ in mod $5$ and mod $25$. Writing out these mods, we have that $149^n \equiv 2^n \mod{5}$ if and only if $4 | n$, in which $149^n \equiv 2^n \equiv 1 \mod{5}$. So here we claim that $v_5(149^{4\cdot5^k} - 2^{4\cdot5^k}) = k + 1$ and perform yet another induction. The base case is true: $5 | 149^4 - 2^4$, but $149^4 - 2^4 \equiv 1 - 16 \mod{25}$. Now then, assuming the induction statement to hold for some $k$, $v_5(149^{4\cdot5^{k+1}} - 2^{4\cdot5^{k+1}}) = (k+1) + v_5(149^{4\cdot4\cdot5^k}+2^{4\cdot5^k}\cdot149^{3\cdot4\cdot5^k}+\cdots+2^{3\cdot4\cdot5^k}\cdot149^{4\cdot5^k}+2^{4\cdot4\cdot5^k}).$ Note that $S'(k) =  149^{4\cdot4\cdot5^k}+2^{4\cdot5^k}\cdot149^{3\cdot4\cdot5^k}+\cdots+2^{3\cdot4\cdot5^k}\cdot149^{4\cdot5^k}+2^{4\cdot4\cdot5^k}$ equates to $S''(k) = 1 + 2^{4\cdot5^k} + \cdots + 2^{16\cdot5^k}$ in both mod $5$ and mod $25$. We notice that $S''(k) \equiv 0 \mod{5}$. Writing out the powers of $2$ mod $25$, we have $S''(0) \equiv 5 \mod{25}$. Also $2^n \equiv 1 \mod{25}$ when $n$ is a multiple of $20$. Hence for $k > 0$, $S''(k) \equiv 5 \mod{25}$. Thus, $v_5\left(S'(k)\right) = 1$, completing our induction. Applying the same argument from the previous two cases, $4\cdot5^4$ is the least choice to ensure divisibility by $5^5$.

Our answer is the number of divisors of $\text{lcm}(3^2, 7^5, 2^2\cdot5^4) = 2^2 \cdot 3^2 \cdot 5^4 \cdot 7^5$. It is $(2 + 1)(2 + 1)(4 + 1)(5 + 1) = \boxed{270}$. ~hnkevin42

## 2020 AIME I Problem 13

Point $D$ lies on side $\overline{BC}$ of $\triangle ABC$ so that $\overline{AD}$ bisects $\angle BAC.$ The perpendicular bisector of $\overline{AD}$ intersects the bisectors of $\angle ABC$ and $\angle ACB$ in points $E$ and $F,$ respectively. Given that $AB=4,BC=5,$ and $CA=6,$ the area of $\triangle AEF$ can be written as $\frac{m\sqrt{n}}p,$ where $m$ and $p$ are relatively prime positive integers, and $n$ is a positive integer not divisible by the square of any prime. Find $m+n+p.$

![](学习/AIME%20Markdown%20File/2020AIMEI-Problem13.png)

![](https://latex.artofproblemsolving.com/2/4/7/247e55367cabf2066349c084aecb1976a4f447de.png)

### Solution 1

Points are defined as shown. It is pretty easy to show that $\triangle AFE \sim \triangle AGH$ by spiral similarity at $A$ by some short angle chasing. Now, note that $AD$ is the altitude of $\triangle AFE$, as the altitude of $AGH$. We need to compare these altitudes in order to compare their areas. Note that Stewart's theorem implies that $AD/2 = \frac{\sqrt{18}}{2}$, the altitude of $\triangle AFE$. Similarly, the altitude of $\triangle AGH$ is the altitude of $\triangle ABC$, or $\frac{12}{\sqrt{7}}$. However, it's not too hard to see that $GB = HC = 1$, and therefore $[AGH] = [ABC]$. From here, we get that the area of $\triangle ABC$ is $\frac{15\sqrt{7}}{14} \implies \boxed{036}$, by similarity. ~awang11

### Solution 2(coord bash + basic geometry)

Let $\overline{BC}$ lie on the x-axis and $B$ be the origin. $C$ is $(5,0)$. Use Heron's formula to compute the area of triangle $ABC$. We have $s=\frac{15}{2}$. and $[ABC]=\sqrt{\frac{15 \cdot 7 \cdot 5 \cdot 3}{2^4}}=\frac{15\sqrt{7}}{4}$. We now find the altitude, which is $\frac{\frac{15\sqrt{7}}{2}}{5}=\frac{3\sqrt{7}}{2}$, which is the y-coordinate of $A$. We now find the x-coordinate of $A$, which satisfies $x^2 + (\frac{3\sqrt{7}}{2})^{2}=16$, which gives $x=\frac{1}{2}$ since the triangle is acute. Now using the Angle Bisector Theorem, we have $\frac{4}{6}=\frac{BD}{CD}$ and $BD+CD=5$ to get $BD=2$. The coordinates of D are $(2,0)$. Since we want the area of triangle $AEF$, we will find equations for perpendicular bisector of AD, and the other two angle bisectors. The perpendicular bisector is not too challenging: the midpoint of AD is $(\frac{5}{4}, \frac{3\sqrt{7}}{4})$ and the slope of AD is $-\sqrt{7}$. The slope of the perpendicular bisector is $\frac{1}{\sqrt{7}}$. The equation is(in point slope form) $y-\frac{3\sqrt{7}}{4}=\frac{1}{\sqrt{7}}(x-\frac{5}{4})$. The slope of AB, or in trig words, the tangent of $\angle ABC$ is $3\sqrt{7}$. Finding $\sin{\angle ABC}=\frac{\frac{3\sqrt{7}}{2}}{4}=\frac{3\sqrt{7}}{8}$ and $\cos{\angle ABC}=\frac{\frac{1}{2}}{4}=\frac{1}{8}$. Plugging this in to half angle tangent, it gives $\frac{\frac{3\sqrt{7}}{8}}{1+\frac{1}{8}}=\frac{\sqrt{7}}{3}$ as the slope of the angle bisector, since it passes through $B$, the equation is $y=\frac{\sqrt{7}}{3}x$. Similarly, the equation for the angle bisector of $C$ will be $y=-\frac{1}{\sqrt{7}}(x-5)$. For $E$ use the B-angle bisector and the perpendicular bisector of AD equations to intersect at $(3,\sqrt{7})$. For $F$ use the C-angle bisector and the perpendicular bisector of AD equations to intersect at $(\frac{1}{2}, \frac{9}{2\sqrt{7}})$. The area of AEF is equal to $\frac{EF \cdot \frac{AD}{2}}{2}$ since AD is the altitude of that triangle with EF as the base, with $\frac{AD}{2}$ being the height. $EF=\frac{5\sqrt{2}}{\sqrt{7}}$ and $AD=3\sqrt{2}$, so $[AEF]=\frac{15}{2\sqrt{7}}=\frac{15\sqrt{7}}{14}$ which gives $\boxed{036}$. NEVER overlook coordinate bash in combination with beginner synthetic techniques.~vvluo

### Solution 3 (Coordinate Bash + Trig)

![](学习/AIME%20Markdown%20File/2020AIMEI-Problem13-2.png)

![](https://latex.artofproblemsolving.com/d/4/3/d43487e9c27f6ed2a883159b67ebf63c992d7c1e.png)

Let $B=(0,0)$ and $BC$ be the line $y=0$. We compute that $\cos{\angle{ABC}}=\frac{1}{8}$, so $\tan{\angle{ABC}}=3\sqrt{7}$. Thus, $A$ lies on the line $y=3x\sqrt{7}$. The length of $AB$ at a point $x$ is $8x$, so $x=\frac{1}{2}$.

We now have the coordinates $A=\left(\frac{1}{2},\frac{3\sqrt{7}}{2}\right)$, $B=(0,0)$ and $C=(5,0)$. We also have $D=(2,0)$ by the angle-bisector theorem and $M=\left(\frac{5}{4},\frac{3\sqrt{7}}{4}\right)$ by taking the midpoint. We have that because $\cos{\angle{ABC}}=\frac{1}{8}$, $\cos{\frac{\angle{ABC}}{2}}=\frac{3}{4}$ by half angle formula.

We also compute $\cos{\angle{ACB}}=\frac{3}{4}$, so $\cos{\frac{\angle{ACB}}{2}}=\frac{\sqrt{14}}{4}$.

Now, $AD$ has slope $-\frac{\frac{3\sqrt{7}}{2}}{2-\frac{1}{2}}=-\sqrt{7}$, so it's perpendicular bisector has slope $\frac{\sqrt{7}}{7}$ and goes through $\left(\frac{5}{4},\frac{3\sqrt{7}}{4}\right)$.

We find that this line has equation $y=\frac{\sqrt{7}}{7}x+\frac{4\sqrt{7}}{7}$.

As $\cos{\angle{CBI}}=\frac{3}{4}$, we have that line $BI$ has form $y=\frac{\sqrt{7}}{3}x$. Solving for the intersection point of these two lines, we get $x=3$ and thus $E=\left(3, \sqrt{7}\right)$

We also have that because $\cos{\angle{ICB}}=\frac{\sqrt{14}}{4}$, $CI$ has form $y=-\frac{x\sqrt{7}}{7}+\frac{5\sqrt{7}}{7}$.

Intersecting the line $CI$ and the perpendicular bisector of $AD$ yields $-\frac{x\sqrt{7}}{7}+\frac{5\sqrt{7}}{7}=\frac{x\sqrt{7}}{7}+\frac{4\sqrt{7}}{7}$.

Solving this, we get $x=\frac{1}{2}$ and so $F=\left(\frac{1}{2},\frac{9\sqrt{7}}{14}\right)$.

We now compute $EF=\sqrt{\left(\frac{5}{2}\right)^2+\left(\frac{5\sqrt{7}}{14}\right)^2}=\frac{5\sqrt{14}}{7}$. We also have $MA=\sqrt{\left(\frac{3}{4}\right)^2+\left(\frac{3\sqrt{7}}{4}\right)^2}=\frac{3\sqrt{2}}{2}$.

As ${MA}\perp{EF}$, we have $[\triangle{AEF}]=\frac{1}{2}\left(\frac{3\sqrt{2}}{2}\times\frac{5\sqrt{14}}{7}\right)=\frac{15\sqrt{7}}{14}$.


The desired answer is $15+7+14=\boxed{036}$ ~Imayormaynotknowcalculus

### Solution 4 (Barycentric Coordinates)

![](学习/AIME%20Markdown%20File/2020AIMEI-Problem13-2.png)

![](https://latex.artofproblemsolving.com/d/4/3/d43487e9c27f6ed2a883159b67ebf63c992d7c1e.png)

As usual, we will use homogenized barycentric coordinates.

We have that $AD$ will have form $3z=2y$. Similarly, $CF$ has form $5y=6x$ and $BE$ has form $5z=4x$. Since $A=(1,0,0)$ and $D=\left(0,\frac{3}{5},\frac{2}{5}\right)$, we also have $M=\left(\frac{1}{2},\frac{3}{10},\frac{1}{5}\right)$. It remains to determine the equation of the line formed by the perpendicular bisector of $AD$.

This can be found using EFFT. Let a point $T$ on $EF$ have coordinates $(x, y, z)$. We then have that the displacement vector $\overrightarrow{AD}=\left(-1, \frac{3}{5}, \frac{2}{5}\right)$ and that the displacement vector $\overrightarrow{TM}$ has form $\left(x-\frac{1}{2},y-\frac{3}{10},z-\frac{1}{5}\right)$. Now, by EFFT, we have $5^2\left(\frac{3}{5}\times\left(z-\frac{1}{5}\right)+\frac{2}{5}\times\left(y-\frac{3}{10}\right)\right)+6^2\left(-1\times\left(z-\frac{1}{5}\right)+\frac{2}{5}\times\left(x-\frac{1}{2}\right)\right)+4^2\left(-1\times\left(y-\frac{3}{10}\right)+\frac{3}{5}\times\left(x-\frac{1}{2}\right)\right)=0$. This equates to $8x-2y-7z=2$.

Now, intersecting this with $BE$, we have $5z=4x$, $8x-2y-7z=2$, and $x+y+z=1$. This yields $x=\frac{2}{3}$, $y=-\frac{1}{5}$, and $z=\frac{8}{15}$, or $E=\left(\frac{2}{3},-\frac{1}{5},\frac{8}{15}\right)$.

Similarly, intersecting this with $CF$, we have $5y=6x$, $8x-2y-7z=2$, and $x+y+z=1$. Solving this, we obtain $x=\frac{3}{7}$, $y=\frac{18}{35}$, and $z=\frac{2}{35}$, or $F=\left(\frac{3}{7},\frac{18}{35},\frac{2}{35}\right)$.

We finish by invoking the Barycentric Distance Formula twice; our first displacement vector being $\overrightarrow{FE}=\left(\frac{5}{21},-\frac{5}{7},\frac{10}{21}\right)$. We then have $FE^2=-25\left(-\frac{5}{7}\cdot\frac{10}{21}\right)-36\left(\frac{5}{21}\cdot\frac{10}{21}\right)-16\left(\frac{5}{21}\cdot-\frac{5}{7}\right)=\frac{50}{7}$, thus $FE=\frac{5\sqrt{14}}{7}$.

Our second displacement vector is $\overrightarrow{AM}=\left(-\frac{1}{2},\frac{3}{10},\frac{1}{5}\right)$. As a result, $AM^2=-25\left(\frac{3}{10}\cdot\frac{1}{5}\right)-36\left(-\frac{1}{2}\cdot\frac{1}{5}\right)-16\left(-\frac{1}{2}\cdot\frac{3}{10}\right)=\frac{9}{2}$, so $AM=\frac{3\sqrt{2}}{2}$.

As ${AM}\perp{EF}$, the desired area is $\frac{\frac{5\sqrt{14}}{7}\times\frac{3\sqrt{2}}{2}}{2}={\frac{15\sqrt{7}}{14}}\implies{m+n+p=\boxed{036}}$. ~Imayormaynotknowcalculus


Remark: The area of $\triangle{AEF}$ can also be computed using the Barycentric Area Formula, although it may increase the risk of computational errors; there are also many different ways to proceed once the coordinates are determined.

### Solution 5 (geometry+trig)

![](学习/AIME%20Markdown%20File/2020AIMEI-Problem13-2.png)

![](https://latex.artofproblemsolving.com/d/4/3/d43487e9c27f6ed2a883159b67ebf63c992d7c1e.png)

To get the area of $\triangle AEF$, we try to find $AM$ and $\angle EAF$.

Since $AD$ is the angle bisector, we can get that $BD=2$ and $CD=3$. By applying Stewart's Theorem, we can get that $AD=3\sqrt{2}$. Therefore $AM=\frac{3\sqrt{2}}{2}$.

Since $EF$ is the perpendicular bisector of $AD$, we know that $AE = DE$. Since $BE$ is the angle bisector of $\angle BAC$, we know that $\angle ABE = \angle DBE$. By applying the Law of Sines to $\triangle ABE$ and $\triangle DBE$, we know that $\sin \angle BAE = \sin \angle BDE$. Since $BD$ is not equal to $AB$ and therefor these two triangles are not congruent, we know that $\angle BAE$ and $\angle BDE$ are supplement. Then we know that $\angle ABD$ and $\angle AED$ are also supplement. Given that $AE=DE$, we can get that $\angle DAE$ is half of $\angle ABC$. Similarly, we have $\angle DAF$ is half of $\angle ACB$.

By applying the Law of Cosines, we get $\cos \angle ABC = \frac{1}{8}$, and then $\sin \angle ABC = \frac{3\sqrt{7}}{8}$. Similarly, we can get $\cos \angle ACB = \frac{3}{4}$ and $\sin \angle ACB = \frac{\sqrt{7}}{4}$. Based on some trig identities, we can compute that $\tan \angle DAE = \frac{\sin \angle ABC}{1 + \cos \angle ABC} = \frac{\sqrt{7}}{3}$, and $\tan \angle DAF = \frac{\sqrt{7}}{7}$.

Finally, the area of $\triangle AEF$ equals $\frac{1}{2}AM^2(\tan \angle DAE + \tan \angle DAF)=\frac{15\sqrt{7}}{14}$. Therefore, the final answer is $15+7+14=\boxed{036}$. ~xamydad

## 2020 AIME I Problem 14

Let $P(x)$ be a quadratic polynomial with complex coefficients whose $x^2$ coefficient is $1.$ Suppose the equation $P(P(x))=0$ has four distinct solutions, $x=3,4,a,b.$ Find the sum of all possible values of $(a+b)^2.$

### Solution 1

Either $P(3) = P(4)$ or not. We first see that if $P(3) = P(4)$ it's easy to obtain by Vieta's that $(a+b)^2 = 49$.

Now, take $P(3) \neq P(4)$ and WLOG $P(3) = P(a), P(4) = P(b)$. Now, consider the parabola formed by the graph of $P$. It has vertex $\frac{3+a}{2}$. Now, say that $P(x) = x^2 - (3+a)x + c$. We note $P(3)P(4) = c = P(3)\left(4 - 4a + \frac{8a - 1}{2}\right) \implies a = \frac{7P(3) + 1}{8}$. Now, we note $P(4) = \frac{7}{2}$ by plugging in again. Now, it's easy to find that $a = -2.5, b = -3.5$, yielding a value of $36$. Finally, we add $49 + 36 = \boxed{085}$. ~awang11, charmander3333

Remark: We know that $c=\frac{8a-1}{2}$ from $P(3)+P(4)=3+a$.

### Solution 2

Let the roots of $P(x)$ be $m$ and $n$, then we can write $P(x)=x^2-(m+n)x+mn$. The fact that $P(P(x))=0$ has solutions $x=3,4,a,b$ implies that some combination of $2$ of these are the solution to $P(x)=m$, and the other $2$ are the solution to $P(x)=n$. It's fairly easy to see there are only $2$ possible such groupings: $P(3)=P(4)=m$ and $P(a)=P(b)=n$, or $P(3)=P(a)=m$ and $P(4)=P(b)=n$ (Note that $a,b$ are interchangeable, and so are $m$ and $n$). We now to casework: If $P(3)=P(4)=m$, then $9-3(m+n)+mn=16-4(m+n)+mn=m \implies m+n=7$$a^2-a(m+n)+mn=b^2-b(m+n)+mn=n \implies a+b=m+n=7$ so this gives $(a+b)^2=7^2=49$. Next, if $P(3)=P(a)=m$, then $9-3(m+n)+mn=a^2-a(m+n)+mn=m \implies a+3=m+n$$16-4(m+n)+mn=b^2-b(m+n)+mn=n \implies b+4=m+n$ Subtracting the first part of the first equation from the first part of the second equation gives $7-(m+n)=n-m \implies 2n=7 \implies n=\frac{7}{2} \implies m=-3$ Hence, $a+b=2(m+n)-7=2\cdot \frac{1}{2}-7=-6$, and so $(a+b)^2=(-6)^2=36$. Therefore, the solution is $49+36=\boxed{085}$ ~ktong

### Solution 3

Write $P(x) = x^2+wx+z$. Split the problem into two cases: $P(3)\ne P(4)$ and $P(3) = P(4)$.

Case 1: We have $P(3) \ne P(4)$. We must have $w=-P(3)-P(4) = -(9+3w+z)-(16+4w+z) = -25-7w-2z.$ Rearrange and divide through by $8$ to obtain $w = \frac{-25-2z}{8}.$ Now, note that $z = P(3)P(4) = (9+3w+z)(16+4w+z) = \left(9 + 3\cdot \frac{-25-2z}{8} + z\right)\left(16 + 4 \cdot \frac{-25-2z}{8} + z\right) =$$\left(-\frac{3}{8} + \frac{z}{4}\right)\left(\frac{7}{2}\right) = -\frac{21}{16} + \frac{7z}{8}.$ Now, rearrange to get $\frac{z}{8} = -\frac{21}{16}$ and thus $z = -\frac{21}{2}.$ Substituting this into our equation for $w$ yields $w = -\frac{1}{2}$. Then, it is clear that $P$ does not have a double root at $P(3)$, so we must have $P(a) = P(3)$ and $P(b) = P(4)$ or vice versa. This gives $3+a = \frac{1}{2}$ and $4+b = \frac{1}{2}$ or vice versa, implying that $a+b = 1-3-4 = -6$ and $(a+b)^2 = 6$.

Case 2: We have $P(3) = P(4)$. Then, we must have $w = -7$. It is clear that $P(a) = P(b)$ (we would otherwise get $P(a)=P(3)=P(4)$ implying $a \in \{3,4\}$ or vice versa), so $a+b=-w=7$ and $(a+b)^2 = 49$.

Thus, our final answer is $49+36=\boxed{085}$. ~GeronimoStilton

### Solution 4

Let $P(x)=(x-r)(x-s)$. There are two cases: in the first case, $(3-r)(3-s)=(4-r)(4-s)$ equals $r$ (without loss of generality), and thus $(a-r)(a-s)=(b-r)(b-s)=s$. By Vieta's formulas $a+b=r+s=3+4=7$.

In the second case, say without loss of generality $(3-r)(3-s)=r$ and $(4-r)(4-s)=s$. Subtracting gives $-7+r+s=r-s$, so $s=7/2$. From this, we have $r=-3$.

Note $r+s=1/2$, so by Vieta's, we have $\{a,b\}=\{1/2-3,1/2-4\}=\{-5/2,-7/2\}$. In this case, $a+b=-6$.

The requested sum is $36+49=85$.~TheUltimate123

## 2020 AIME I Problem 15

Let $\triangle ABC$ be an acute triangle with circumcircle $\omega,$ and let $H$ be the intersection of the altitudes of $\triangle ABC.$ Suppose the tangent to the circumcircle of $\triangle HBC$ at $H$ intersects $\omega$ at points $X$ and $Y$ with $HA=3,HX=2,$ and $HY=6.$ The area of $\triangle ABC$ can be written as $m\sqrt{n},$ where $m$ and $n$ are positive integers, and $n$ is not divisible by the square of any prime. Find $m+n.$

### Solution 1

The following is a power of a point solution to this menace of a problem: 

![](学习/AIME%20Markdown%20File/2020AIMEI-Problem15.png)

![](https://latex.artofproblemsolving.com/c/6/9/c69347dc6d83100199168eca216342c5fd324419.png)

Let points be what they appear as in the diagram below. Note that $3HX = HY$ is not insignificant; from here, we set $XH = HE = \frac{1}{2} EY = HL = 2$ by PoP and trivial construction. Now, $D$ is the reflection of $A$ over $H$. Note $AO \perp XY$, and therefore by Pythagorean theorem we have $AE = XD = \sqrt{5}$. Consider $HD = 3$. We have that $\triangle HXD \cong HLK$, and therefore we are ready to PoP with respect to $(BHC)$. Setting $BL = x, LC = y$, we obtain $xy = 10$ by PoP on $(ABC)$, and furthermore, we have $KH^2 = 9 = (KL - x)(KL + y) = (\sqrt{5} - x)(\sqrt{5} + y)$. Now, we get $4 = \sqrt{5}(y - x) - xy$, and from $xy = 10$ we take $\frac{14}{\sqrt{5}} = y - x.$ However, squaring and manipulating with $xy = 10$ yields that $(x + y)^2 = \frac{396}{5}$ and from here, since $AL = 5$ we get the area to be $3\sqrt{55} \implies \boxed{058}$. ~awang11's sol

Solution 1a
As in the diagram, let ray $AH$ extended hits BC at L and the circumcircle at say $P$. By power of the point at H, we have $HX \cdot HY = AH \cdot HP$. The three values we are given tells us that $HP=\frac{2\cdot 6}{3}=4$. L is the midpoint of $HP$(see here: https://www.cut-the-knot.org/Curriculum/Geometry/AltitudeAndCircumcircle.shtml ), so $HL=LP=2$.

As in the diagram provided, let K be the intersection of $BC$ and $XY$. By power of a point on the circumcircle of triangle $HBC$, $KH^{2}=KB \cdot KC$. By power of a point on the circumcircle of triangle $ABC$, $KB \cdot KC=KX \cdot KY$, thus $KH^{2}=(KH-2)(KH+6)$. Solving gives $4KH=12$ or $KH=3$.

By the Pythagorean Theorem on triangle $HKL$, $KL=\sqrt{5}$. Now continue with solution 1.

### Solution 2

![](学习/AIME%20Markdown%20File/2020AIMEI-Problem15-2.png)

![](https://latex.artofproblemsolving.com/9/3/c/93cbdb7042dcdfd8bcc8debd055e6439bd394e78.png)

Diagram not to scale.

We first observe that $H'$, the image of the reflection of $H$ over line $BC$, lies on circle $O$. This is because $\angle HBC = 90 - \angle C = \angle H'AC = \angle H'BC$. This is a well known lemma. The result of this observation is that circle $O'$, the circumcircle of $\triangle BHC$ is the image of circle $O$ over line $BC$, which in turn implies that $\overline{AH} = \overline{OO'}$ and thus $AHO'O$ is a parallelogram. That $AHO'O$ is a parallelogram implies that $AO$ is perpendicular to $\overline{XY}$, and thus divides segment $\overline{XY}$ in two equal pieces, $\overline{XD}$ and $\overline{DY}$, of length $4$.


Using Power of a Point, $\overline{AH} \cdot \overline{HH'} = \overline{XH} \cdot \overline{HY} \Longrightarrow 3 \cdot \overline{HH'} = 2 \cdot 6 \Longrightarrow \overline{HH'} = 4$ This means that $\overline{HL} = \frac12 \cdot 4 = 2$ and $\overline{AL} = 2 + 3 = 5$, where $L$ is the foot of the altitude from $A$ onto $BC$. All that remains to be found is the length of segment $\overline{BC}$.

Looking at right triangle $\triangle AHD$, we find that $\overline{AD} = \sqrt{\overline{AH}^2 - \overline{HD}^2} = \sqrt{3^2 - 2^2} = \sqrt{5}$ Looking at right triangle $\triangle ODY$, we get the equation $\overline{OY}^2 - \overline{HY}^2 = \overline{OD}^2 = \left(\overline{AO} - \overline{AD}\right)^2$ Plugging in known values, and letting $R$ be the radius of the circle, we find that $R^2 - 16 = (R - \sqrt{5})^2 = R^2 - 2\sqrt5 R + 5 \Longrightarrow R = \frac{21\sqrt5}{10}$
Recall that $AHO'O$ is a parallelogram, so $\overline{AH} = \overline{OO'} = 3$. So, $\overline{OM} = \frac32$, where $M$ is the midpoint of $\overline{BC}$. This means that $\overline{BC} = 2\overline{BM} = 2\sqrt{R^2 - \left(\frac32\right)^2} = 2\sqrt{\frac{441}{20} - \frac{9}{4}} = \frac{6\sqrt{55}}{5}$
Thus, the area of triangle $\triangle ABC$ is $\frac{\overline{AL} \cdot \overline{BC}}{2} = \frac{5 \cdot \frac{6\sqrt{55}}{5}}{2} = \boxed{3\sqrt{55}}$ The answer is $3 + 55 = \boxed{058}$.