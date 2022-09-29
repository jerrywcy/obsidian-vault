# 2020 AIME II Problems & Solutions

## 2020 AIME II Problem 1

Find the number of ordered pairs of positive integers $(m,n)$ such that ${m^2n = 20 ^{20}}$.

Solution 1

First, we find the prime factorization of $20^{20}$, which is $2^{40}\times5^{20}$. The equation ${m^2n = 20 ^{20}}$ tells us that we want to select a perfect square factor of $20^{20}$, $m^2$. $n$ will be assigned by default. There are $21\times11=231$ ways to select a perfect square factor of $20^{20}$, thus our answer is $\boxed{231}$.

Solution 2 (Official MAA)

Because $20^{20}=2^{40}5^{20}$, if $m^2n = 20^{20}$, there must be nonnegative integers $a$, $b$, $c$, and $d$ such that $m = 2^a5^b$ and $n = 2^c5^d$. Then $2a + c = 40$ and $2b+d = 20$ The first equation has $21$ solutions corresponding to $a = 0,1,2,\dots,20$, and the second equation has $11$ solutions corresponding to $b = 0,1,2,\dots,10$. Therefore there are a total of $21\cdot11 = 231$ ordered pairs $(m,n)$ such that $m^2n = 20^{20}$.

## 2020 AIME II Problem 2

Let $P$ be a point chosen uniformly at random in the interior of the unit square with vertices at $(0,0), (1,0), (1,1)$, and $(0,1)$. The probability that the slope of the line determined by $P$ and the point $\left(\frac58, \frac38 \right)$ is greater than or equal to $\frac12$ can be written as $\frac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m+n$.

Solution 1

The areas bounded by the unit square and alternately bounded by the lines through $\left(\frac{5}{8},\frac{3}{8}\right)$ that are vertical or have a slope of $1/2$ show where $P$ can be placed to satisfy the condition. One of the areas is a trapezoid with bases $\frac 1{16}$ and $\frac 38$ and height $\frac 58$. The other area is a trapezoid with bases $\frac 7{16}$ and $\frac 58$ and height $\frac 38$. Then, $\frac{\frac{1}{16}+\frac{3}{8}}{2}\cdot\frac{5}{8}+\frac{\frac{7}{16}+\frac{5}{8}}{2}\cdot\frac{3}{8}=\frac{86}{256}=\frac{43}{128}\implies43+128=\boxed{171}$ .

Solution 2 (Official MAA)

The line through the fixed point $\left(\frac58,\frac38\right)$ with slope $\frac12$ has equation $y=\frac12 x + \frac1{16}$. The slope between $P$ and the fixed point exceeds $\frac12$ if $P$ falls within the shaded region in the diagram below consisting of two trapezoids with area $\frac{\frac1{16}+\frac38}2\cdot\frac58 + \frac{\frac58+\frac7{16}}2\cdot\frac38 = \frac{43}{128}.$ Because the entire square has area $1,$ the required probability is $\frac{43}{128}$. The requested sum is $43+128 = 171$.

![|250](学习/AIME%20Markdown%20File/2020AIMEII-Problem02-Solution.png)

## 2020 AIME II Problem 3

The value of $x$ that satisfies $\log_{2^x} 3^{20} = \log_{2^{x+3}} 3^{2020}$ can be written as $\frac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m+n$.

Solution 1

Let $\log _{2^x}3^{20}=\log _{2^{x+3}}3^{2020}=n$. Based on the equation, we get $(2^x)^n=3^{20}$ and $(2^{x+3})^n=3^{2020}$. Expanding the second equation, we get $8^n\cdot2^{xn}=3^{2020}$. Substituting the first equation in, we get $8^n\cdot3^{20}=3^{2020}$, so $8^n=3^{2000}$. Taking the 100th root, we get $8^{\frac{n}{100}}=3^{20}$. Therefore, $(2^{\frac{3}{100}})^n=3^{20}$, and using the our first equation($2^{xn}=3^{20}$), we get $x=\frac{3}{100}$ and the answer is $\boxed{103}$. ~rayfish

Easiest Solution

Recall the identity $\log_{a^n} b^{m} = \frac{m}{n}\log_{a} b$ (which is easily proven using exponents or change of base). Then this problem turns into $\frac{20}{x}\log_{2} 3 = \frac{2020}{x+3}\log_{2} 3$ Divide $\log_{2} 3$ from both sides. And we are left with $\frac{20}{x}=\frac{2020}{x+3}$.Solving this simple equation we get $x = \tfrac{3}{100} \Rightarrow \boxed{103}$.

Solution 2

Because $\log_a{b^c}=c\log_a{b},$ we have that $20\log_{2^x} 3 = 2020\log_{2^{x+3}} 3,$ or $\log_{2^x} 3 = 101\log_{2^{x+3}} 3.$ Since $\log_a{b}=\frac{1}{\log_b{a}},$ $\log_{2^x} 3=\frac{1}{\log_{3} 2^x},$ and $101\log_{2^{x+3}} 3=101\frac{1}{\log_{3}2^{x+3}},$ thus resulting in $\log_{3}2^{x+3}=101\log_{3} 2^x,$ or $\log_{3}2^{x+3}=\log_{3} 2^{101x}.$ We remove the base 3 logarithm and the power of 2 to yield $x+3=101x,$ or $x=\frac{3}{100}.$

Our answer is $3+100=\boxed{103}.$

Solution 3 (Official MAA)

Using the Change of Base Formula to convert the logarithms in the given equation to base $2$ yields $\frac{\log_2 3^{20}}{\log_2 2^x} = \frac{\log_2 3^{2020}}{\log_2 2^{x+3}}, \text{~ and then ~} \frac{20\log_2 3}{x\cdot\log_2 2} = \frac{2020\log_2 3}{(x+3)\log_2 2}.$ Canceling the logarithm factors then yields $\frac{20}x = \frac{2020}{x+3},$ which has solution $x = \frac3{100}.$ The requested sum is $3 + 100 = \boxed{103}$.

## 2020 AIME II Problem 4

Triangles $\triangle ABC$ and $\triangle A'B'C'$ lie in the coordinate plane with vertices $A(0,0)$, $B(0,12)$, $C(16,0)$, $A'(24,18)$, $B'(36,18)$, $C'(24,2)$. A rotation of $m$ degrees clockwise around the point $(x,y)$ where $0 < m < 180$, will transform $\triangle ABC$ to $\triangle A'B'C'$. Find $m+x+y$.

Solution 1

After sketching, it is clear a $90^{\circ}$ rotation is done about $(x,y)$. Looking between $A$ and $A'$, $x+y=18$ and $x-y=24$. Solving gives $(x,y)\implies(21,-3)$. Thus $90+21-3=\boxed{108}$.

Solution 2 (Official MAA)

Because the rotation sends the vertical segment $\overline{AB}$ to the horizontal segment $\overline{A'B'}$, the angle of rotation is $90^\circ$ degrees clockwise. For any point $(x,y)$ not at the origin, the line segments from $(0,0)$ to $(x,y)$ and from $(x,y)$ to $(x-y,y+x)$ are perpendicular and are the same length. Thus a $90^\circ$ clockwise rotation around the point $(x,y)$ sends the point $A(0,0)$ to the point $(x-y,y+x) = A'(24,18)$. This has the solution $(x,y) = (21,-3)$. The requested sum is $90+21-3=108$.

Solution 3

A $90^\circ$ degree rotation is obvious. Let's look at $C$ and $C'$. They are very close to each other. Let's join $C$ and $C'$ with a line. Then construct a perpendicular bisector to $\overline{CC'}$ with the midpoint being $M$ which is at $(20, 1)$. We also draw a point $N$ on the perpendicular bisector such that $\angle CNC'$ is $90^\circ$. That point $N$ is the same distance to $M$ as $M$ is to $C$ but it is on a line perpendicular to $\overline{CM}$ Therefore $N$ is at $(20+1, 1-4)$. The sum is $90+20+1+1-4=\boxed{108}$.

Solution 4

For the above reasons, the transformation is simply a $90^\circ$ rotation. Proceed with complex numbers on the points $C$ and $C'$. Let $(x, y)$ be the origin. Thus, $C \rightarrow (16-x)+(-y)i$ and $C' \rightarrow (24-x)+(2-y)i$. The transformation from $C'$ to $C$ is a multiplication of $i$, which yields $(16-x)+(-y)i=(y-2)+(24-x)i$. Equating the real and complex terms results in the equations $16-x=y-2$ and $-y=24-x$. Solving, $(x, y) : (21, -3) \rightarrow 90+21-3=\boxed{108}$

Solution 5

We know that the rotation point $P$ has to be equidistant from both $A$ and $A'$ so it has to lie on the line that is on the midpoint of the segment $AA'$ and also the line has to be perpendicular to $AA'$. Solving, we get the line is $y=\frac{-4}{3}x+25$. Doing the same for $B$ and $B'$, we get that $y=-6x+123$. Since the point $P$ of rotation must lie on both of these lines, we set them equal, solve and get: $x=21$,$y=-3$. We can also easily see that the degree of rotation is $90$ since $AB$ is initially vertical, and now it is horizontal. Also, we can just sketch this on a coordinate plane and easily realize the same. Hence, the answer is $21-3+90 = \boxed{108}$

## 2020 AIME II Problem 5

For each positive integer $n$, let $f(n)$ be the sum of the digits in the base-four representation of $n$ and let $g(n)$ be the sum of the digits in the base-eight representation of $f(n)$. For example, $f(2020) = f(133210_{\text{4}}) = 10 = 12_{\text{8}}$, and $g(2020) = \text{the digit sum of }12_{\text{8}} = 3$. Let $N$ be the least value of $n$ such that the base-sixteen representation of $g(n)$ cannot be expressed using only the digits $0$ through $9$. Find the remainder when $N$ is divided by $1000$.

Solution 1

Let's work backwards. The minimum base-sixteen representation of $g(n)$ that cannot be expressed using only the digits $0$ through $9$ is $A_{16}$, which is equal to $10$ in base 10. Thus, the sum of the digits of the base-eight representation of the sum of the digits of $f(n)$ is $10$. The minimum value for which this is achieved is $37_8$. We have that $37_8 = 31$. Thus, the sum of the digits of the base-four representation of $n$ is $31$. The minimum value for which this is achieved is $13,333,333,333_4$. We just need this value in base 10 modulo 1000. We get $13,333,333,333_4 = 3(1 + 4 + 4^2 + \dots + 4^8 + 4^9) + 4^{10} = 3\left(\frac{4^{10} - 1}{3}\right) + 4^{10} = 2*4^{10} - 1$. Taking this value modulo $1000$, we get the final answer of $\boxed{151}$. (If you are having trouble with this step, note that $2^{10} = 1024 \equiv 24 \mod {1000}$) ~ TopNotchMath

Solution 2 (Official MAA)

First note that if $h_b(s)$ is the least positive integer whose digit sum, in some fixed base $b$, is $s$, then $h_b$ is a strictly increasing function. This together with the fact that $g(N) \ge 10$ shows that $f(N)$ is the least positive integer whose base-eight digit sum is 10. Thus $f(N) = 37_\text{eight} = 31$, and $N$ is the least positive integer whose base-four digit sum is $31.$ Therefore $N = 13333333333_\text{four} = 2\cdot4^{10} - 1 = 2\cdot1024^2 - 1$  $\equiv 2\cdot24^2 - 1 \equiv 151 \mod {1000}.$ 

## 2020 AIME II Problem 6

Define a sequence recursively by $t_1 = 20$, $t_2 = 21$, and $t_n = \frac{5t_{n-1}+1}{25t_{n-2}}$ for all $n \ge 3$. Then $t_{2020}$ can be written as $\frac{p}{q}$, where $p$ and $q$ are relatively prime positive integers. Find $p+q$.

Solution 1

Let $t_n=\frac{s_n}{5}$. Then, we have $s_n=\frac{s_{n-1}+1}{s_{n-2}}$ where $s_1 = 100$ and $s_2 = 105$. By substitution, we find $s_3 = \frac{53}{50}$, $s_4=\frac{103}{105\cdot50}$, $s_5=\frac{101}{105}$, $s_6=100$, and $s_7=105$. So $s_n$ has a period of $5$. Thus $s_{2020}=s_5=\frac{101}{105}$. So, $\frac{101}{105\cdot 5}\implies 101+525=\boxed{626}$. ~mn28407

Solution 2 (Official MAA)

More generally, let the first two terms be $a$ and $b$ and replace $5$ and $25$ in the recursive formula by $k$ and $k^2$, respectively. Then some algebraic calculation shows that $t_3 = \frac{b\,k+1}{a\, k^2},~~t_4 = \frac{a\, k + b\,k+1}{a\,b\, k^3},~~ t_5 = \frac{a\,k+1}{b\, k^2},~~ t_6 = a, \text{~ and ~}t_7 =b,$ so the sequence is periodic with period $5$. Therefore $t_{2020} = t_{5} =  \frac{20\cdot 5 +1}{21\cdot  25} = \frac{101}{525}.$ The requested sum is $101+525=626$.

Solution 3

Let us examine the first few terms of this sequence and see if we can find a pattern. We are obviously given $t_1 = 20$ and $t_2 = 21$, so now we are able to determine the numerical value of $t_3$ using this information: 

$t_3 = \frac{5t_{3-1}+1}{25t_{3-2}}$

$\implies t_3 = \frac{5t_{2}+1}{25t_{1}}$

$\implies t_3 = \frac{5(21) + 1}{25(20)}$

$\implies t_3 = \frac{105 + 1}{500}$

$\implies t_3 = \frac{106}{500} \implies t_3 = \frac{53}{250}$.

Now using this information, as well as the previous information, we are able to determine the value of $t_4$: 

$t_4 = \frac{5t_{4-1}+1}{25t_{4-2}}$

$\implies t_4 = \frac{5t_{3}+1}{25t_{2}}$

$\implies t_4 = \frac{5(\frac{53}{250}) + 1}{25(21)}$

$\implies t_4 = \frac{\frac{53}{50} + 1}{525}$

$\implies t_4 = \frac{\frac{103}{50}}{525} \implies t_4 = \frac{103}{26250}$

Now using this information, as well as the previous information, we are able to determine the value of $t_5$:

$t_5 = \frac{5t_{5-1}+1}{25t_{5-2}}$

$\implies t_5 = \frac{5t_{4}+1}{25t_{3}}$

$\implies t_5 = \frac{5(\frac{103}{26250}) + 1}{25(\frac{53}{250})}$

$\implies t_5 = \frac{\frac{53}{5250} + 1}{\frac{53}{10}}$

$\implies t_5 = \frac{\frac{5353}{5250}}{\frac{53}{10}} \implies t_5 = \frac{101}{525}$

Now using this information, as well as the previous information, we are able to determine the value of $t_6$:

$t_6 = \frac{5t_{6-1}+1}{25t_{6-2}}$

$\implies t_6 = \frac{5t_{5}+1}{25t_{4}}$

$\implies t_5 = \frac{5(\frac{101}{525}) + 1}{25(\frac{103}{26250})}$

$\implies t_5 = \frac{\frac{101}{105} + 1}{\frac{103}{1050}}$

$\implies t_5 = \frac{\frac{206}{105}}{\frac{103}{1050}} \implies t_6 = 21$

Alas, we have figured this sequence is period 5! Thus, let us take $2020 \mod  5$, which is $5$, and therefore $t_{2020} = t_5 = \frac{101}{525}$. According to the original problem statement, our answer is essentially $\boxed{626}$.

## 2020 AIME II Problem 7

Two congruent right circular cones each with base radius $3$ and height $8$ have the axes of symmetry that intersect at right angles at a point in the interior of the cones a distance $3$ from the base of each cone. A sphere with radius $r$ lies withing both cones. The maximum possible value of $r^2$ is $\frac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m+n$.

Solution (Official MAA)

Consider the cross section of the cones and sphere by a plane that contains the two axes of symmetry of the cones as shown below. The sphere with maximum radius will be tangent to the sides of each of the cones. The center of that sphere must be on the axis of symmetry of each of the cones and thus must be at the intersection of their axes of symmetry. Let $A$ be the point in the cross section where the bases of the cones meet, and let $C$ be the center of the sphere. Let the axis of symmetry of one of the cones extend from its vertex, $B$, to the center of its base, $D$. Let the sphere be tangent to $\overline{AB}$ at $E$. The right triangles $\triangle ABD$ and $\triangle CBE$ are similar, implying that the radius of the sphere is $CE = AD \cdot\frac{BC}{AB} = AD \cdot\frac{BD-CD}{AB} =3\cdot\frac5{\sqrt{8^2+3^2}} = \frac{15}{\sqrt{73}}=\sqrt{\frac{225}{73}}.$ The requested sum is $225+73=298$.

![](学习/AIME%20Markdown%20File/2020AIMEII-Problem07-Solution.png){ width=250 }

## 2020 AIME II Problem 8

Define a sequence recursively by $f_1(x)=|x-1|$ and $f_n(x)=f_{n-1}(|x-n|)$ for integers $n>1$. Find the least value of $n$ such that the sum of the zeros of $f_n$ exceeds $500,000$.

Solution (Official MAA)

First it will be shown by induction that the zeros of $f_n$ are the integers $a, {a+2,} {a+4,} \dots, {a + n(n-1)}$, where $a = n - \frac{n(n-1)}2.$

This is certainly true for $n=1$. Suppose that it is true for $n = m-1 \ge 1$, and note that the zeros of $f_m$ are the solutions of $|x - m| = k$, where $k$ is a nonnegative zero of $f_{m-1}$. Because the zeros of $f_{m-1}$ form an arithmetic sequence with common difference $2,$ so do the zeros of $f_m$. The greatest zero of $f_{m-1}$ is $m-1+\frac{(m-1)(m-2)}2 =\frac{m(m-1)}2,$ so the greatest zero of $f_m$ is $m+\frac{m(m-1)}2$ and the least is $m-\frac{m(m-1)}2$.

It follows that the number of zeros of $f_n$ is $\frac{n(n-1)}2+1=\frac{n^2-n+2}2$, and their average value is $n$. The sum of the zeros of $f_n$ is $\frac{n^3-n^2+2n}2.$ Let $S(n)=n^3-n^2+2n = n(n-2)(n+1)$, so the sum of the zeros exceeds $500{,}000$ if and only if $S(n) > 1{,}000{,}000 = 100^3\!.$ Because $S(n)$ is increasing for $n > 2$, the values $S(100) = 1{,}000{,}000 - 10{,}000 + 200 = 990{,}200$ and $S(101)=1{,}030{,}301 - 10{,}201 + 202 = 1{,}020{,}302$ show that the requested value of $n$ is $101.$

## 2020 AIME II Problem 9

While watching a show, Ayako, Billy, Carlos, Dahlia, Ehuang, and Frank sat in that order in a row of six chairs. During the break, they went to the kitchen for a snack. When they came back, they sat on those six chairs in such a way that if two of them sat next to each other before the break, then they did not sit next to each other after the break. Find the number of possible seating orders they could have chosen after the break.

Solution 1 (Bash)

There are $2^{5}-1$ intersections that we must consider if we are to perform a PIE bash on this problem. Since we don't really want to think that hard, and bashing does not take that long for this problem, we can write down half of all permutations that satisfy the conditions presented in the problem in "lexicographically next" order to keep track easily. We do this for all cases such that the first "person" is $A-C$, and multiply by two, since the number of working permutations with $D-F$ as the first person is the same as if it were $A-C$, hence, after doing such a bash, we get $45\times2=\boxed{90}$ permutations that result in no consecutive letters being adjacent to each other. ~afatperson

Solution 2 (Official MAA)

Ayako ($A$), Billy $(B)$, Carlos $(C)$, Dahlia $(D)$, Ehuang $(E)$, and Frank $(F)$ originally sat in the order $ABCDEF$. Let $T(XY)$ denote the set of seatings where $X$ and $Y$ sit next to each other after the break. Then the required number of seating orders is given by the Inclusion-Exclusion Principle as $6!-\big(|T(AB)|+|T(BC)|+|T(CD)|+|T(DE)|+|T(EF)|\big)+$  $\big(|T(AB)\cap T(BC)|+|T(AB)\cap T(CD)|+\cdots\big) - \cdots.$ Each term can be calculated separately.

(a) $|T(AB)|=|T(BC)|=|T(CD)|=|T(DE)|=|T(EF)|=2\cdot5!=240.$ Because there are $5$ terms, the sum is $5\cdot240=1200$.

(b) For $|T(XY)\cap T(ZW)|$, if $Y=Z$, then $XYW$ must sit consecutively, so $|T(XY)\cap T(ZW)|=2\cdot4!=48$. There are $4$ terms that satisfy $Y=Z$, so the sum is $4\cdot 48=192$. If $XY$ and $ZW$ are pairwise disjoint, then $|T(XY)\cap T(ZW)|=2^2\cdot4!=96$. There are $6$ terms, so the sum is $6\cdot96=576$.

(c) If there are at least three pairs that sit next to each other, consider these three subcases: If the three pairs are consecutive, the sum is $3\cdot2\cdot3!=36$. If exactly two of the pairs are consecutive, the sum is $6\cdot2^2\cdot3!=144$. If none of the three pairs is consecutive, the sum is $1\cdot2^3\cdot3!=48.$ (d) If there are at least four pairs that sit next to each other, then if the pairs are consecutive, the sum is $2\cdot2\cdot2!=8$. If the pairs are not consecutive, then the sum is $3\cdot2^2\cdot2!=24$.

(e) If all five pairs sit next to each other, the number is $1\cdot2\cdot1!=2$.

Therefore the required number of seating orders is $6!-1200+(192+576)-{(36+144+48)+(8+24)-2}=\boxed{90}.$ 

## 2020 AIME II Problem 10

Find the sum of all positive integers $n$ such that when $1^3+2^3+3^3+\cdots +n^3$ is divided by $n+5$, the remainder is $17$.

Solution 1 (If you don't remember the formula for sum of cubes)

We first note that since the remainder is $17$ and we are dividing by $n+5$, $n+5$ must be greater than $17$, meaning that $n$ has to be at least $13$.

We then notice that we can pair the $5^3$ term with the $n^3$ term to factor it into $(n+5)(n^2-5n+25)$ using the sum of cubes formula, which is divisible by $n+5$. We can do the same for the $6^3$ term with the $(n-1)^3$ term, the $7^3$ term with the $(n-2)^3$, and so on, which are all divisible by $n+5$. However, when $n$ is odd, we will have a middle term that is not paired with any other terms, which is not necessarily divisible by $n+5$. Thus, we have two cases:

$\textbf{CASE 1: } n$ is even
If $n$ is even, all terms that are greater than $4^3$ pair, as there are an even number of terms that are greater than $4^3$. Therefore, all we need in order for the entire sequence to have a remainder of $17$ when divided by $n+5$ is $1^3+2^3+3^3+4^3$ to have a remainder of $17$ when divided by $n+5$.

Evaluating $1^3+2^3+3^3+4^3$ as $100$, all we need to be true is $100\equiv 17\mod  {n+5},$ or that $83\equiv 0\mod  {n+5}.$ Thus, $83$ will be divisible by $n+5$ where $n\geq 13$. As $83$ is prime, $n+5$ must be equal to either $1$ or $83$. If $n+5=1$, we have that $n=-4$, which is not greater than or equal to $13$, so that solution is extraneous.

If $n+5=83$, we have that $n=78$, which is $\geq 13$, so one of our solutions is $n=78$, and we are done with our first case.

$\textbf{CASE 2: } n$ is odd If $n$ is odd, the only term that does not pair is the arithmetic mean of the numbers under the cube of the largest and smallest terms that would pair, or $(\frac{n+5}{2})^3$. Therefore, as all other terms that are $\geq 5^3$ pair, the requirement that we have is $1^3+2^3+3^3+4^3+\left(\frac{n+5}{2}\right)^3\equiv 17\mod  {n+5}.$ Calculating and simplifying, we have that $83+\left(\frac{n+5}{2}\right)^3\equiv 0\mod  {n+5}.$ Now, we multiply both sides by $8$. However, since multiplication is not reversible in modular arithmetic, we need to check whether any solutions are extraneous after solving. The congruence that we now have is $8\cdot 83+(n+5)^3\equiv 0\mod  {n+5}.$ As we know that $(n+5)^3$ is divisible by $n+5$, what we need now is $8\cdot 83\equiv 0\mod  {n+5}.$ We now check each solution to see whether it works.

If $n+5=1, 2, 4, 8$, $n$ would be less than $13$, so none of these solutions work. If $n+5=83$, $n$ would be even, so that solution does not work for this case. Therefore, the only three solutions we need to check for this case are when $n+5=166$, $n+5=332$, or $n+5=664$. We plug these values into the congruence before we multiplied both sides by $8$ to check.

If $n+5=166$, we would need $83+\left(\frac{166}{2}\right)^3\equiv 0\mod  {166}.$ Calculating and factoring out $83$, we have that $83(1+83\cdot 83)\equiv 0\mod  {166}.$ As the right parenthesis is odd and $166=83\cdot 2$, we know that this solution works, so we have another solution: $n=166-5=161$.

If $n+5=332$, we would need $83+\left(\frac{332}{2}\right)^3=83+166^3\equiv 0\mod  {322}.$ As the left hand side is odd, but all multiples of $322$ is even, this solution is therefore extraneous.

If $n+5=664$, we would need $83+\left(\frac{664}{2}\right)^3=83+332^3\equiv 0\mod  {664}.$ Again, the left hand side is odd, and all multiples of $664$ are even, so this solution is extraneous.

Therefore, our final answer is $78+161=\boxed{239}$.

Solution 2 (w/ formula)

Let $m=n+5$. Then we have $1^3+2^3+3^3+\cdots+(m-5)^3\equiv 17 \mod m$  $\left(\frac{(m-5)(m-4)}{2}\right)^2\equiv 17 \mod m$  $\frac{400}{4}\equiv 17 \mod m$  $332 \equiv 0 \mod m$ So, $m\in\{83,166,332\}$. Testing, the cases, only $332$ fails. This leaves $78+161=\boxed{239}$.

Solution 3 (Official MAA 1)

The sum of the cubes from 1 to $n$ is $1^3+2^3+\cdots+n^3=\frac{n^2(n+1)^2}{4}.$ For this to be equal to $(n+5)q+17$ for some integer $q$, it must be that $n^2(n+1)^2=4(n+5)q+4\cdot 17,$ so $n^2(n+1)^2 \equiv 4 \cdot 17= 68\hskip-.2cm \mod {n+5}.$ But $n^2(n+1)^2 \equiv (-5)^2(-4)^2 = 400 \mod {n+5}.$ Thus $n^2(n+1)^2$ is congruent to both $68$ and $400,$ which implies that $n+5$ divides $400-68 = 332=2^2 \cdot 83$. Because $n+5 > 17$, the only choices for $n+5$ are $83, 166,$ and $332.$ Checking all three cases verifies that $n=78$ and $n=161$ work, but $n=327$ does not. The requested sum is $78+161 = 239$.

Solution 4 (Official MAA 2)

The sum of the cubes of the integers from $1$ through $n$ is $\frac{n^2(n+1)^2}{4},$ which, when divided by $n+5$, has quotient $Q=\frac14n^3 -\frac34n^2+4n-20 = \frac{n^2(n-3)}4+4n-20$ with remainder $100.$ If $n$ is not congruent to $1\mod 4$, then $Q$ is an integer, and $\frac{n^2(n+1)^2}{4} = (n+5)Q + 100 \equiv 17\mod {n+5},$ so $n+5$ divides $100 - 17 =83$, and $n = 78$. If $n \equiv 1 \mod 4$, then $Q$ is half of an integer, and letting $n = 4k+1$ for some integer $k$ gives $\frac{n^2(n+1)^2}{4} = 2(2k+3)Q + 100 \equiv 17\mod {n+5}.$ Thus $2k+3$ divides $100-17 = 83$. It follows that $k=40$, and $n = 161$. The requested sum is $161 + 78 = 239$.

Solution 5

Using the formula for $\sum_{k=1}^n  n^3$, $1^3 + 2^3 + 3^3 + ... + n^3 = \frac{n^2(n+1)^2}{4}$ Since $1^3 + 2^3 + 3^3 + ... + n^3$ divided by $n + 5$ has a remainder of $17$, $\frac{n^2(n+1)^2}{4} \equiv 17\mod  {n + 5}$ Using the rules of modular arithmetic, $n^2(n+1)^2 \equiv 68\mod  {n + 5}$  $n^2(n+1)^2 - 68\equiv 0\mod  {n + 5}$ Expanding the left hand side, $n^4 + 2 n^3 + n^2 - 68\equiv 0\mod  {n + 5}$ This means that $n^4 + 2 n^3 + n^2 - 68$ is divisible by ${n + 5}$.

 $(n + 5) | (n^4 + 2 n^3 + n^2 - 68)$ Dividing polynomials, $\frac{n^4 + 2 n^3 + n^2 - 68}{n + 5}$  $= n^3 - 3 n^2 + 16n - 80 + \frac{332}{(n + 5)}$ $(n + 5)$ $|$ $(n^4 + 2 n^3 + n^2 - 68)$ $\iff$ $\frac{332}{(n + 5)}$ $\in$ $\mathbb{Z}$

$\frac{332}{(n + 5)}$ $\in$ $\mathbb{Z}$ $\iff$ $(n + 5) = \pm 1, \pm 2, \pm 4, \pm 83, \pm 166, \pm 332$

Note that $n$ $\in$ $\mathbb{N}$ and $n + 5 > 17$ (because the remainder when dividing by $n + 5$ is $17$, so $n + 5$ must be greater than $17$), so all options $\leq 17$ can be eliminated. $(n + 5) = 83, 166, 332$  $n = 78, 161, 327$ Checking all 3 cases, $n = 78$ and $n = 161$ work; $n = 327$ fails.

Therefore, the answer is $78 + 161 = \boxed{239}$.

## 2020 AIME II Problem 11

Let $P(x) = x^2 - 3x - 7$, and let $Q(x)$ and $R(x)$ be two quadratic polynomials also with the coefficient of $x^2$ equal to $1$. David computes each of the three sums $P + Q$, $P + R$, and $Q + R$ and is surprised to find that each pair of these sums has a common root, and these three common roots are distinct. If $Q(0) = 2$, then $R(0) = \frac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m + n$.

Solution 1

Let $Q(x) = x^2 + ax + 2$ and $R(x) = x^2 + bx + c$. We can write the following: $P + Q = 2x^2 + (a - 3)x - 5$  $P + R = 2x^2 + (b - 3)x + (c - 7)$  $Q + R = 2x^2 + (a + b)x + (c + 2)$ Let the common root of $P+Q,P+R$ be $r$; $P+R,Q+R$ be $s$; and $P+Q,Q+R$ be $t$. We then have that the roots of $P+Q$ are $r,t$, the roots of $P + R$ are $r, s$, and the roots of $Q + R$ are $s,t$.

By Vieta's, we have: 

$r + t = \frac{3 - a}{2}$

$r + s = \frac{3 - b}{2}$

$s + t = \frac{-a - b}{2}$

$rt = \frac{-5}{2}$

$rs = \frac{c - 7}{2}$

$st = \frac{c + 2}{2}$

Subtracting $(3)$ from $(1)$, we get $r - s = \frac{3 + b}{2}$. Adding this to $(2)$, we get $2r = 3 \implies r = \frac{3}{2}$. This gives us that $t = \frac{-5}{3}$ from $(4)$. Substituting these values into $(5)$ and $(6)$, we get $s = \frac{c-7}{3}$ and $s = \frac{-3c - 6}{10}$. Equating these values, we get $\frac{c-7}{3} = \frac{-3c-6}{10} \implies c = \frac{52}{19} = R(0)$. Thus, our answer is $52 + 19 = \boxed{071}$. ~ TopNotchMath

Solution 2

We know that $P(x)=x^2-3x-7$.

Since $Q(0)=2$, the constant term in $Q(x)$ is $2$. Let $Q(x)=x^2+ax+2$.

Finally, let $R(x)=x^2+bx+c$.

$P(x)+Q(x)=2x^2+(a-3)x-5$. Let its roots be $p$ and $q$.

$P(x)+R(x)=2x^2+(b-3)x+(c-7)$ Let its roots be $p$ and $r$.

$Q(x)+R(x)=2x^2+(a+b)x+(c+2)$. Let its roots be $q$ and $r$.

By vietas, $p+q=\frac{3-a}{2}, p+r=\frac{3-b}{2}, q+r=\frac{-(a+b)}{2}$

We could work out the system of equations, but it's pretty easy to see that $p=\frac32, q=-\frac{a}{2}, r=-\frac{b}{2}$.

$\text{Again, by vietas, }pq=-\frac52\text{, } pr=\frac{c-7}{2}\text{, } qr=\frac{c+2}{2}\text{, } \text{multiplying everything together a}\text{nd taking the sqrt of both sides,}$ $(pqr)^2=\left(-\frac52\right)\left(\frac{c-7}{2}\right)\left(\frac{c+2}{2}\right)$  $pqr=\sqrt{\left(-\frac52\right)\left(\frac{c-7}{2}\right)\left(\frac{c+2}{2}\right)}$ $\text{Dividing this }\text{equation by }qr=\frac{c+2}{2}$ $\frac{pqr}{qr}=\frac{\sqrt{\left(-\frac52\right)\left(\frac{c-7}{2}\right)\left(\frac{c+2}{2}\right)}}{\frac{c+2}{2}}$  $p = \frac{\sqrt{\left(-\frac52\right)\left(\frac{c-7}{2}\right)}}{\sqrt{\frac{c+2}{2}}}$ $\text{Recall th}\text{at }p=\frac32 \text{ and square both sides}$ $\frac94=\frac{\left(-\frac52\right)\left(\frac{c-7}{2}\right)}{\frac{c+2}{2}}$ $\text{Solving gives } c=\frac{52}{19}, \text{ so our answer is }\boxed{071}$

Solution 3 (Official MAA)

Let the common root of $P+Q$ and $P+R$ be $p$, the common root of $P+Q$ and $Q+R$ be $q$, and the common root of $Q+R$ and $P+R$ be $r$. Because $p$ and $q$ are both roots of $P+Q$ and $P+Q$ has leading coefficient $2$, it follows that $P(x) + Q(x) = 2(x-p)(x-q).$ Similarly, $P(x) + R(x) = 2(x-p)(x-r)$ and $Q(x) + R(x) = 2(x-q)(x-r)$. Adding these three equations together and dividing by $2$ yields $P(x) + Q(x) + R(x) = (x-p)(x-q) + (x-p)(x-r) + (x-q)(x-r),$ so $P(x) = (P(x) + Q(x) + R(x)) - (Q(x) + R(x))$  $= (x-p)(x-q) + (x-p)(x-r) - (x-q)(x-r)$  $= x^2 - 2px + (pq + pr - qr).$ Similarly, $Q(x) =  x^2 - 2qx + (pq + qr - pr) \text{~ and}$  $R(x) =  x^2 - 2rx + (pr + qr - pq).$ Comparing the $x$ coefficients yields $p = \tfrac32$, and comparing the constant coefficients yields $-7 = pq + pr - qr = \tfrac32(q+r) - qr$. The fact that $Q(0) = 2$ implies that $\tfrac32(q-r) + qr = 2$. Adding these two equations yields $q = -\tfrac53$, and so substituting back in to solve for $r$ gives $r=-\tfrac{27}{19}$. Finally, $R(0) = pr + qr - pq = \left(-\frac{27}{19}\right)\left(\frac32-\frac53\right) + \frac52 = \frac{9}{38} + \frac52 = \frac{52}{19}.$ The requested sum is $52 + 19 = 71$. Note that $Q(x) = x^2 + \frac{10}3x + 2$ and $R(x) = x^2 + \frac{54}{19}x + \frac{52}{19}$.

## 2020 AIME II Problem 12

Let $m$ and $n$ be odd integers greater than $1.$ An $m\times n$ rectangle is made up of unit squares where the squares in the top row are numbered left to right with the integers $1$ through $n$, those in the second row are numbered left to right with the integers $n + 1$ through $2n$, and so on. Square $200$ is in the top row, and square $2000$ is in the bottom row. Find the number of ordered pairs $(m,n)$ of odd integers greater than $1$ with the property that, in the $m\times n$ rectangle, the line through the centers of squares $200$ and $2000$ intersects the interior of square $1099$.

Solution 1

Let us take some cases. Since $m$ and $n$ are odds, and $200$ is in the top row and $2000$ in the bottom, $m$ has to be $3$, $5$, $7$, or $9$. Also, taking a look at the diagram, the slope of the line connecting those centers has to have an absolute value of $< 1$. Therefore, $m < 1800 \mod n < 1800-m$.

If $m=3$, $n$ can range from $667$ to $999$. However, $900$ divides $1800$, so looking at mods, we can easily eliminate $899$ and $901$. Now, counting these odd integers, we get $167 - 2 = 165$.

Similarly, let $m=5$. Then $n$ can range from $401$ to $499$. However, $450|1800$, so one can remove $449$ and $451$. Counting odd integers, we get $50 - 2 = 48$.

Take $m=7$. Then, $n$ can range from $287$ to $333$. However, $300|1800$, so one can verify and eliminate $299$ and $301$. Counting odd integers, we get $24 - 2 = 22$.

Let $m = 9$. Then $n$ can vary from $223$ to $249$. However, $225|1800$. Checking that value and the values around it, we can eliminate $225$. Counting odd integers, we get $14 - 1 = 13$.

Add all of our cases to get $165+48+22+13 = \boxed{248}$ 

Solution 2 (Official MAA)

Because square $2000$ is in the bottom row, it follows that $\frac{2000}m \le n < \frac{2000}{m-1}$. Moreover, because square $200$ is in the top row, and square $2000$ is not in the top row, $1 < m \le 10$. In particular, because the number of rows in the rectangle must be odd, $m$ must be one of $3, 5, 7,$ or $9.$

For each possible choice of $m$ and $n$, let $\ell_{m,n}$ denote the line through the centers of squares $200$ and $2000.$ Note that for odd values of $m$, the line $\ell_{m,n}$ passes through the center of square $1100.$ Thus $\ell_{m,n}$ intersects the interior of cell $1099$ exactly when its slope is strictly between $-1$ and $1$. The line $\ell_{m,n}$ is vertical whenever square $2000$ is the $200$th square in the bottom row of the rectangle. This would happen for $m = 3, 5, 7, 9$ when $n = 900, 450, 300, 225$, respectively. When $n$ is 1 greater than or 1 less than these numbers, the slope of $\ell_{m,n}$ is $1$ or $-1$, respectively. In all other cases the slope is strictly between $-1$ and $1.$ The admissible values for $n$ for each possible value of $m$ are given in the following table.

m | minimum n | maximum n | avoided n | number of odd n
----| ----| ----| ----| ----
3 | 667 | 999 |899 | 900 |901 |165
5 | 400 | 499 | 449| 450 |451 | 48

\\ 7 & 286 & 333 &$ (Error compiling LaTeX. ! Misplaced alignment tab character &.)299, 300, 301$& 22\\ 9 & 223 & 249 &$ (Error compiling LaTeX. ! Misplaced alignment tab character &.)224, 225, 226$& 13\\ \hline \end{tabular}$ (Error compiling LaTeX. ! Misplaced alignment tab character &.) This accounts for $165 + 48 + 22 + 13 = 248$ rectangles.

## 2020 AIME II Problem 13

Convex pentagon $ABCDE$ has side lengths $AB=5$, $BC=CD=DE=6$, and $EA=7$. Moreover, the pentagon has an inscribed circle (a circle tangent to each side of the pentagon). Find the area of $ABCDE$.

Solution 1 (Misplaced problem?)

Assume the incircle touches $AB$, $BC$, $CD$, $DE$, $EA$ at $P,Q,R,S,T$ respectively. Then let $PB=x=BQ=RD=SD$, $ET=y=ES=CR=CQ$, $AP=AT=z$. So we have $x+y=6$, $x+z=5$ and $y+z$=7, solve it we have $x=2$, $z=3$, $y=4$. Let the center of the incircle be $I$, by SAS we can proof triangle $BIQ$ is congruent to triangle $DIS$, and triangle $CIR$ is congruent to triangle $SIE$. Then we have $\angle AED=\angle BCD$, $\angle ABC=\angle CDE$. Extend $CD$, cross ray $AB$ at $M$, ray $AE$ at $N$, then by AAS we have triangle $END$ is congruent to triangle $BMC$. Thus $\angle M=\angle N$. Let $EN=MC=a$, then $BM=DN=a+2$. So by law of cosine in triangle $END$ and triangle $ANM$ we can obtain $\frac{2a+8}{2(a+7)}=\cos N=\frac{a^2+(a+2)^2-36}{2a(a+2)}$ , solved it gives us $a=8$, which yield triangle $ANM$ to be a triangle with side length 15, 15, 24, draw a height from $A$ to $NM$ divides it into two triangles with side lengths 9, 12, 15, so the area of triangle $ANM$ is 108. Triangle $END$ is a triangle with side lengths 6, 8, 10, so the area of two of them is 48, so the area of pentagon is $108-48=\boxed{60}$.

Solution 2 (Complex Bash)

Suppose that the circle intersects $\overline{AB}$, $\overline{BC}$, $\overline{CD}$, $\overline{DE}$, and $\overline{EA}$ at $P$, $Q$, $R$, $S$, and $T$ respectively. Then $AT = AP = a$, $BP = BQ = b$, $CQ = CR = c$, $DR = DS = d$, and $ES = ET = e$. So $a + b = 5$, $b + c = 6$, $c + d = 6$, $d + e = 6$, and $e + a = 7$. Then $2a + 2b + 2c + 2d + 2e = 30$, so $a + b + c + d + e= 15$. Then we can solve for each individually. $a = 3$, $b = 2$, $c = 4$, $d = 2$, and $e = 4$. To find the radius, we notice that $4 \arctan(\frac{2}{r}) + 4 \arctan(\frac{4}{r}) + 2 \arctan (\frac{3}{r}) = 360 ^ \circ$, or $2 \arctan(\frac{2}{r}) + 2 \arctan(\frac{4}{r}) + \arctan (\frac{3}{r}) = 180 ^ \circ$. Each of these angles in this could be represented by complex numbers. When two complex numbers are multiplied, their angles add up to create the angle of the resulting complex number. Thus, $(r + 2i)^2 \cdot (r + 4i)^2 \cdot (r + 3i)$ is real. Expanding, we get: $(r^2 + 4ir - 4)(r^2 + 8ir -16)(r + 3i)$, then $(r^4 + 12ir^3 - 52r^2 - 96ir + 64)(r + 3i)$. On the last expanding, we only multiply the reals with the imaginaries and vice versa, because we only care that the imaginary component equals 0. $15ir^4 - 252ir^2 + 192i = 0$. $5r^4 - 84r^2 + 64 = 0$ $(5r^2 - 4)(r^2 - 16) = 0$. $r$ must equal 4, as r cannot be negative or be approximately equal to 1. Thus, the area of $ABCDE$ is $4 \cdot (a + b + c + d + e) = 4 \cdot 15 = \boxed{60}$

Solution 3 (Guess)

This pentagon is very close to a regular pentagon with side lengths $6$. The area of a regular pentagon with side lengths $s$ is $\frac{5s^2}{4\sqrt{5-2\sqrt{5}}}$. $5-2\sqrt{5}$ is slightly greater than $\frac{1}{2}$ given that $2\sqrt{5}$ is slightly less than $\frac{9}{2}$. $4\sqrt{5-2\sqrt{5}}$ is then slightly greater than $2\sqrt{2}$. We will approximate that to be $2.9$. The area is now roughly $\frac{180}{2.9}$, but because the actual pentagon is not regular, but has the same perimeter of the regular one that we are comparing to we can say that this is an overestimate on the area and turn the $2.9$ into $3$ thus turning the area into $\frac{180}{3}$ which is $60$ and since $60$ is a multiple of the semiperimeter $15$, we can safely say that the answer is most likely $\boxed{60}$.

Solution 4 (Official MAA 1)

Let $\omega$ be the inscribed circle, $I$ be its center, and $r$ be its radius. The area of $ABCDE$ is equal to its semiperimeter, $15,$ times $r$, so the problem is reduced to finding $r$. Let $a$ be the length of the tangent segment from $A$ to $\omega$, and analogously define $b$, $c$, $d$, and $e$. Then $a+b=5$, $b+c= c+d=d+e=6$, and $e+a=7$, with a total of $a+b+c+d+e=15$. Hence $a=3$, $b=d=2$, and $c=e=4$. It follows that $\angle B= \angle D$ and $\angle C= \angle E$. Let $Q$ be the point where $\omega$ is tangent to $\overline{CD}$. Then $\angle IAE = \angle IAB =\frac{1}{2}\angle A$. The sum of the internal angles in polygons $ABCQI$ and $AIQDE$ are equal, so $\angle IAE + \angle AIQ + \angle IQD + \angle D + \angle E = \angle IAB + \angle B + \angle C + \angle CQI + \angle QIA$, which implies that $\angle AIQ$ must be $180^\circ$. Therefore points $A$, $I$, and $Q$ are collinear.

![](学习/AIME%20Markdown%20File/2020AIMEII-Problem13-Solution4.png){ width=250 }

Because $\overline{AQ} \perp \overline{CD}$, it follows that $AC^2-AD^2=CQ^2-DQ^2=c^2-d^2=12.$ Another expression for $AC^2-AD^2$ can be found as follows. Note that $\tan \left(\frac{\angle B}{2}\right) = \frac{r}{2}$ and $\tan \left(\frac{\angle E}{2}\right) = \frac{r}{4}$, so $\cos (\angle B) =\frac{1-\tan^2 \left(\frac{\angle B}{2}\right)}{1+\tan^2 \left(\frac{\angle B}{2}\right)} =  \frac{4-r^2}{4+r^2}$ and $\cos (\angle E) = \frac{1-\tan^2 \left(\frac{\angle E}{2}\right)}{1+\tan^2 \left(\frac{\angle E}{2}\right)}= \frac{16-r^2}{16+r^2}.$ Applying the Law of Cosines to $\triangle ABC$ and $\triangle AED$ gives $AC^2=AB^2+BC^2-2\cdot AB\cdot BC\cdot \cos (\angle B) = 5^2+6^2-2 \cdot 5 \cdot 6 \cdot \frac{4-r^2}{4+r^2}$ and $AD^2=AE^2+DE^2-2 \cdot AE \cdot DE \cdot \cos(\angle E) = 7^2+6^2-2 \cdot 7 \cdot 6 \cdot \frac{16-r^2}{16+r^2}.$ Hence

 $12=AC^2- AD^2= 5^2-2\cdot 5 \cdot 6\cdot \frac{4-r^2}{4+r^2} -7^2+2\cdot 7 \cdot 6 \cdot \frac{16-r^2}{16+r^2},$ yielding $2\cdot 7 \cdot 6 \cdot \frac{16-r^2}{16+r^2}- 2\cdot 5 \cdot 6\cdot \frac{4-r^2}{4+r^2}= 36;$ equivalently $7(16-r^2)(4+r^2)-5(4-r^2)(16+r^2) = 3(16+r^2)(4+r^2).$ Substituting $x=r^2$ gives the quadratic equation $5x^2-84x+64=0$, with solutions $\frac{42 - 38}{5}=\frac45$, and $\frac{42 + 38}{5}= 16$. The solution $r^2=\frac45$ corresponds to a five-pointed star, which is not convex. Indeed, if $r<3$, then $\tan \left(\frac{\angle A}{2}\right)$, $\tan \left(\frac{\angle C}{2}\right)$, and $\tan \left(\frac{\angle E}{2}\right)$ are less than $1,$ implying that $\angle A$, $\angle C$, and $\angle E$ are acute, which cannot happen in a convex pentagon. Thus $r^2=16$ and $r=4$. The requested area is $15\cdot4 = \boxed{60}$.

Solution 5 (Official MAA 2)

Define $a$, $b$, $c$, $d$, $e$, and $r$ as in Solution 4. Then, as in Solution 4, $a=3$, $b=d=2$, $c=e=4$, $\angle B= \angle D$, and $\angle C= \angle E$. Let $\alpha =\frac{\angle A}{2}$, $\beta = \frac{\angle B}{2}$, and $\gamma=\frac{\angle C}{2}$. It follows that $540^{\circ} = 2\alpha + 4 \beta + 4 \gamma$, so $270^{\circ} = \alpha + 2\beta + 2 \gamma$. Thus $\tan(2\beta + 2 \gamma) = \frac{1}{\tan \alpha},$ $\tan(\beta) = \frac{r}{2}$, $\tan(\gamma) = \frac{r}{4}$, and $\tan(\alpha) = \frac {r}{3}$. By the Tangent Addition Formula, $\tan(\beta +\gamma) = \frac{6r}{8-r^2}$ and $\tan(2\beta + 2\gamma) = \frac{\frac{12r}{8-r^2}}{1-\frac{36r^2}{(8-r^2)^2}} = \frac{12r(8-r^2)}{(8-r^2)^2-36r^2}.$ Therefore $\frac{12r(8-r^2)}{(8-r^2)^2-36r^2} = \frac{3}{r},$ which simplifies to $5r^4 - 84r^2 + 64 = 0$. Then the solution proceeds as in Solution 4.

Solution 6 (Official MAA 3)

Define $a$, $b$, $c$, $d$, $e$, and $r$ as in Solution 4. Note that $\arctan\left(\frac{a}{r}\right) + \arctan\left(\frac{b}{r}\right) + \arctan\left(\frac{c}{r}\right) + \arctan\left(\frac{d}{r}\right) + \arctan\left(\frac{e}{r}\right) = 180^{\circ}.$ Hence $\operatorname{Arg}(r + 3i) + 2\cdot \operatorname{Arg}(r + 2i) + 2\cdot  \operatorname{Arg}(r + 4i) = 180^{\circ}.$ Therefore $\operatorname{Im} \big( (r + 3i)(r+2i)^2(r+4i)^2 \big) = 0.$ Simplifying this equation gives the same quadratic equation in $r^2$ as in Solution 4.

## 2020 AIME II Problem 14

For a real number $x$ let $\lfloor x\rfloor$ be the greatest integer less than or equal to $x$, and define $\{x\} = x - \lfloor x \rfloor$ to be the fractional part of $x$. For example, $\{3\} = 0$ and $\{4.56\} = 0.56$. Define $f(x)=x\{x\}$, and let $N$ be the number of real-valued solutions to the equation $f(f(f(x)))=17$ for $0\leq x\leq 2020$. Find the remainder when $N$ is divided by $1000$.

Solution 1

It's not too hard to see that, $N$ is $\sum_{x=17}^{2019} \sum_{y=x}^{2019} \sum_{z=y}^{2019} 1 .$ One can see an easy combinatorical argument exists which is the official solution, but I will present another solution here for the sake of variety.

Applying algebraic manipulation and the hockey-stick identity $3$ times gives

 $\sum_{x=17}^{2019} \sum_{y=x}^{2019} \sum_{z=y}^{2019} 1$
 
 $=\sum_{x=17}^{2019} \sum_{y=x}^{2019} \sum_{z=y}^{2019} \binom{z-y}{0}$

 $=\sum_{x=17}^{2019} \sum_{y=x}^{2019} \binom{2020-y}{1}$

 $=\sum_{x=17}^{2019} \binom{2021-x}{2}$
 
 $=\binom{2005}{3}$ 

Hence, $N = \frac{2005 \cdot 2004 \cdot 2003}{3 \cdot 2\cdot 1} \equiv 10 (\textbf{mod} \hskip .2cm 1000)$

Solution 2

To solve $f(f(f(x)))=17$, we need to solve $f(x) = y$ where $f(f(y))=17$, and to solve that we need to solve $f(y) = z$ where $f(z) = 17$.

It is clear to see for some integer $a \geq 17$ there is exactly one value of $z$ in the interval $[a, a+1)$ where $f(z) = 17$. To understand this, imagine the graph of $f(z)$ on the interval $[a, a+1)$ The graph starts at $0$, is continuous and increasing, and approaches $a+1$. So as long as $a+1 > 17$, there will be a solution for $z$ in the interval.

Using this logic, we can find the number of solutions to $f(x) = y$. For every interval $[a, a+1)$ where $a \geq \left \lfloor{y}\right \rfloor$ there will be one solution for $x$ in that interval. However, the question states $0 \leq x \leq 2020$, but because $x=2020$ doesn't work we can change it to $0 \leq x < 2020$. Therefore, $\left \lfloor{y}\right \rfloor  \leq a \leq 2019$, and there are $2020 - \left \lfloor{y}\right \rfloor$ solutions to $f(x) = y$.

We can solve $f(y) = z$ similarly. $0 \leq y < 2020$ to satisfy the bounds of $x$, so there are $2020 - \left \lfloor{z}\right \rfloor$ solutions to $f(y) = z$, and $0 \leq z < 2020$ to satisfy the bounds of $y$.

Going back to $f(z) = 17$, there is a single solution for z in the interval $[a, a+1)$, where $17 \leq a \leq 2019$. (We now have an upper bound for $a$ because we know $z < 2020$.) There are $2003$ solutions for $z$, and the floors of these solutions create the sequence $17, 18, 19, ..., 2018, 2019$

Lets first look at the solution of $z$ where $\left \lfloor{z}\right \rfloor = 17$. Then $f(y) = z$ would have $2003$ solutions, and the floors of these solutions would also create the sequence $17, 18, 19, ..., 2018, 2019$.

If we used the solution of $y$ where $\left \lfloor{y}\right \rfloor = 17$, there would be $2003$ solutions for $f(x) = y$. If we used the solution of $y$ where $\left \lfloor{y}\right \rfloor = 18$, there would be $2002$ solutions for $x$, and so on. So for the solution of $z$ where $\left \lfloor{z}\right \rfloor = 17$, there will be $2003 + 2002 + 2001 + ... + 2 + 1 = \binom{2004}{2}$ solutions for $x$

If we now look at the solution of $z$ where $\left \lfloor{z}\right \rfloor = 18$, there would be $\binom{2003}{2}$ solutions for $x$. If we looked at the solution of $z$ where $\left \lfloor{z}\right \rfloor = 19$, there would be $\binom{2002}{2}$ solutions for $x$, and so on.

The total number of solutions to $x$ is $\binom{2004}{2} + \binom{2003}{2} + \binom{2002}{2} + ... + \binom{3}{2} + \binom{2}{2}$. Using the hockey stick theorem, we see this equals $\binom{2005}{3}$, and when we take the remainder of that number when divided by $1000$, we get the answer, $\boxed{10}$

Solution 3 (Official MAA)

For any nonnegative integer $n$, the function $f$ increases on the interval $[n,n+1)$, with $f(n)=0$ and $f(x) < n+1$ for every $x$ in this interval. On this interval $f(x)=x(x-n)$, which takes on every real value in the interval $[0,n+1)$ exactly once. Thus for each nonnegative real number $y$, the equation $f(x) = y$ has exactly one solution $x \in [n, n+1)$ for every $n \ge \lfloor y \rfloor$.

For each integer $a\geq 17$ there is exactly one $x$ with $\lfloor x\rfloor=a$ such that $f(x)=17$; likewise for each integer $b\geq a\geq 17$ there is exactly one $x$ with $\lfloor f(x)\rfloor=a$ and $\lfloor x\rfloor=b$ such that $f(f(x))=17$. Finally, for each integer $c \ge b \ge a \ge 17$ there is exactly one $x$ with $\lfloor f(f(x)) \rfloor = a$, $\lfloor f(x)\rfloor=b$, and $\lfloor x\rfloor=c$ such that $f(f(f(x)))=17$.

Thus $f(f(f(x)))=17$ has exactly one solution $x$ with $0\leq x\leq 2020$ for each triple of integers $(a,b,c)$ with $17\leq a\leq b\leq c<2020$, noting that $x=2020$ is not a solution. This nondecreasing ordered triple can be identified with a multiset of three elements of the set of $2003$ integers $\{17,18,19,\ldots,2019\}$, which can be selected in $\binom{2005}3$ ways. Thus $N=\frac{2005\cdot 2004\cdot 2003}{6}\equiv 10\hskip -.2cm \mod {1000}.$ 

## 2020 AIME II Problem 15

Let $\triangle ABC$ be an acute scalene triangle with circumcircle $\omega$. The tangents to $\omega$ at $B$ and $C$ intersect at $T$. Let $X$ and $Y$ be the projections of $T$ onto lines $AB$ and $AC$, respectively. Suppose $BT = CT = 16$, $BC = 22$, and $TX^2 + TY^2 + XY^2 = 1143$. Find $XY^2$.

Solution 1

Assume $O$ to be the center of triangle $ABC$, $OT$ cross $BC$ at $M$, link $XM$, $YM$. Let $P$ be the middle point of $BT$ and $Q$ be the middle point of $CT$, so we have $MT=3\sqrt{15}$. Since $\angle A=\angle CBT=\angle BCT$, we have $\cos A=\frac{11}{16}$. Notice that $\angle XTY=180^{\circ}-A$, so $\cos XYT=-\cos A$, and this gives us $1143-2XY^2=\frac{-11}{8}XT\cdot YT$. Since $TM$ is perpendicular to $BC$, $BXTM$ and $CYTM$ cocycle (respectively), so $\theta_1=\angle ABC=\angle MTX$ and $\theta_2=\angle ACB=\angle YTM$. So $\angle XPM=2\theta_1$, so $\frac{\frac{XM}{2}}{XP}=\sin \theta_1$ , which yields $XM=2XP\sin \theta_1=BT(=CT)\sin \theta_1=TY.$ So same we have $YM=XT$. Apply Ptolemy theorem in $BXTM$ we have $16TY=11TX+3\sqrt{15}BX$, and use Pythagoras theorem we have $BX^2+XT^2=16^2$. Same in $YTMC$ and triangle $CYT$ we have $16TX=11TY+3\sqrt{15}CY$ and $CY^2+YT^2=16^2$. Solve this for $XT$ and $TY$ and submit into the equation about $\cos XYT$, we can obtain the result $XY^2=\boxed{717}$.

(Notice that, $MXTY$ is a parallelogram, which is an important theorem in Olympiad, and there are some other ways of computation under this observation.)

Solution 2 (Official MAA)

Let $M$ denote the midpoint of $\overline{BC}$. The critical claim is that $M$ is the orthocenter of $\triangle AXY$, which has the circle with diameter $\overline{AT}$ as its circumcircle. To see this, note that because $\angle BXT = \angle BMT = 90^\circ$, the quadrilateral $MBXT$ is cyclic, it follows that $\angle MXA = \angle MXB = \angle MTB = 90^\circ - \angle TBM = 90^\circ - \angle A,$ implying that $\overline{MX} \perp \overline{AC}$. Similarly, $\overline{MY} \perp \overline{AB}$. In particular, $MXTY$ is a parallelogram.

![|250](学习/AIME%20Markdown%20File/2020AIMEII-Problem15-Solution.png)

Hence, by the Parallelogram Law, $TM^2 + XY^2 = 2(TX^2 + TY^2) = 2(1143-XY^2).$ But $TM^2 = TB^2 - BM^2 = 16^2 - 11^2 = 135$. Therefore $XY^2 = \frac13(2 \cdot 1143-135) = 717.$ 
