#2016 AIME I

2016 AIME I Problem 1

For $-1<r<1$, let $S(r)$ denote the sum of the geometric series $12+12r+12r^2+12r^3+\cdots .$ Let $a$ between $-1$ and $1$ satisfy $S(a)S(-a)=2016$. Find $S(a)+S(-a)$.

Solution

We know that $S(r)=\frac{12}{1-r}$, and $S(-r)=\frac{12}{1+r}$. Therefore, $S(a)S(-a)=\frac{144}{1-a^2}$, so $2016=\frac{144}{1-a^2}$. We can divide out $144$ to get $\frac{1}{1-a^2}=14$. We see $S(a)+S(-a)=\frac{12}{1-a}+\frac{12}{1+a}=\frac{12(1+a)}{1-a^2}+\frac{12(1-a)}{1-a^2}=\frac{24}{1-a^2}=24*14=\fbox{336}$

Solution 2

The sum of an infinite geometric series is $\frac{a}{1-r}\rightarrow \frac{12}{1\mp a}$. The product $S(a)S(-a)=\frac{144}{1-a^2}=2016$ so dividing by $144$ gives $\frac{1}{1-a^2}=14\implies a= \pm \sqrt{\frac{13}{14}}$. $\frac{12}{1-a}+\frac{12}{1+a}=\frac{24}{1-a^2}$, so the answer is $14\cdot 24=\boxed{336}$. 

2016 AIME I Problem 2

Two dice appear to be normal dice with their faces numbered from $1$ to $6$, but each die is weighted so that the probability of rolling the number $k$ is directly proportional to $k$. The probability of rolling a $7$ with this pair of dice is $\frac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m+n$.

Solution

It is easier to think of the dice as $21$ sided dice with $6$ sixes, $5$ fives, etc. Then there are $21^2=441$ possible rolls. There are $2\cdot(1\cdot 6+2\cdot 5+3\cdot 4)=56$ rolls that will result in a seven. The odds are therefore $\frac{56}{441}=\frac{8}{63}$. The answer is $8+63=\boxed{071}$

See also 2006 AMC 12B Problems/Problem 17 

2016 AIME I Problem 3
Problem 3

A regular icosahedron is a $20$-faced solid where each face is an equilateral triangle and five triangles meet at every vertex. The regular icosahedron shown below has one vertex at the top, one vertex at the bottom, an upper pentagon of five vertices all adjacent to the top vertex and all in the same horizontal plane, and a lower pentagon of five vertices all adjacent to the bottom vertex and all in another horizontal plane. Find the number of paths from the top vertex to the bottom vertex such that each part of a path goes downward or horizontally along an edge of the icosahedron, and no vertex is repeated. 

i<div align=center><img src="https://latex.artofproblemsolving.com/6/0/1/60163f4cb994a55653ffde09be32f5100795ddd4.png" height="100px" /></div>

Solution

Think about each plane independently. From the top vertex, we can go down to any of 5 different points in the second plane. From that point, there are 9 ways to to another point within the second plane: rotate as many as 4 points clockwise or as many 4 counterclockwise, or stay in place. Then, there are 2 paths from that point down to the third plane. Within the third plane, there are 9 paths as well (consider the logic from the second plane) Finally, there is only one way down to the bottom vertex. Therefore there are $5*9*2*9*1=\boxed{810}$ paths. 

2016 AIME I Problem 4
Problem

A right prism with height $h$ has bases that are regular hexagons with sides of length $12$. A vertex $A$ of the prism and its three adjacent vertices are the vertices of a triangular pyramid. The dihedral angle (the angle between the two planes) formed by the face of the pyramid that lies in a base of the prism and the face of the pyramid that does not contain $A$ measures $60$ degrees. Find $h^2$.
Solution

Let $B$ and $C$ be the vertices adjacent to $A$ on the same base as $A$, and let $D$ be the other vertex of the triangular pyramid. Then $\angle CAB = 120^\circ$. Let $X$ be the foot of the altitude from $A$ to $\overline{BC}$. Then since $\triangle ABX$ is a $30-60-90$ triangle, $AX = 6$. Since the dihedral angle between $\triangle ABC$ and $\triangle BCD$ is $60^\circ$, $\triangle AXD$ is a $30-60-90$ triangle and $AD = 6\sqrt{3} = h$. Thus $h^2 = \boxed{108}$. 

2016 AIME I Problem 5

Problem 5

Anh read a book. On the first day she read $n$ pages in $t$ minutes, where $n$ and $t$ are positive integers. On the second day Anh read $n + 1$ pages in $t + 1$ minutes. Each day thereafter Anh read one more page than she read on the previous day, and it took her one more minute than on the previous day until she completely read the $374$ page book. It took her a total of $319$ minutes to read the book. Find $n + t$.

Solution

Let $d$ be the number of days Anh reads for. Because the difference between the number of pages and minutes Anh reads for each day stays constant and is an integer, $d$ must be a factor of the total difference, which is $374-319=55$. Also note that the number of pages Anh reads is $dn+\frac{d(d-1)}{2}$. Similarly, the number of minutes she reads for is $dt+\frac{d(d-1)}{2}$. When $d$ is odd (which it must be), both of these numbers are multiples of $d$. Therefore, $d$ must be a factor of $55$, $319$, and $374$. The only such numbers are $1$ and $11$. We know that Anh reads for at least $2$ days. Therefore, $d=11$.

Using this, we find that she reads $55$ "additional" pages and $55$ "additional" minutes. Therefore, $n=\frac{374-55}{11}=29$, while $t=\frac{319-55}{11}=24$. The answer is therefore $29+24=\fbox{053}$.

Solution 2

We could see that both $374$ and $319$ are divisible by $11$ in the outset, and that $34$ and $29$, the quotients, are relatively prime. Both are the $average$ number of minutes across the $11$ days, so we need to subtract $\left \lfloor{\frac{11}{2}}\right \rfloor=5$ from each to get $(n,t)=(29,24)$ and $29+24=\boxed{053}$. 

2016 AIME I Problem 6

Problem

In $\triangle ABC$ let $I$ be the center of the inscribed circle, and let the bisector of $\angle ACB$ intersect $AB$ at $L$. The line through $C$ and $L$ intersects the circumscribed circle of $\triangle ABC$ at the two points $C$ and $D$. If $LI=2$ and $LD=3$, then $IC=\tfrac{p}{q}$, where $p$ and $q$ are relatively prime positive integers. Find $p+q$.
Solution

Suppose we label the angles as shown below. 

<div align=center><img src="http://latex.artofproblemsolving.com/5/6/c/56cc513300c04fd609c54fac8f20d478eb5950b4.png" height="200px" /></div>

As $\angle BCD$ and $\angle BAD$ intercept the same arc, we know that $\angle BAD=\gamma$. Similarly, $\angle ABD=\gamma$. Also, using $\triangle ICA$, we find $\angle CIA=180-\alpha-\gamma$. Therefore, $\angle AID=\alpha+\gamma$. Therefore, $\angle DAI=\angle AID=\alpha+\gamma$, so $\triangle AID$ must be isosceles with $AD=ID=5$. Similarly, $BD=ID=5$. Then $\triangle DLB \sim \triangle ALC$, hence $\frac{AL}{AC} = \frac{3}{5}$. Also, $AI$ bisects $\angle LAC$, so by the Angle Bisector Theorem $\frac{CI}{IL} =\frac{AC}{AL}= \frac{5}{3}$. Thus $CI = \frac{10}{3}$, and the answer is $\boxed{013}$. 

Solution 2

WLOG assume $\triangle ABC$ is isosceles. Then, $L$ is the midpoint of $AB$, and $\angle CLB=\angle CLA=90^\circ$. Draw the perpendicular from $I$ to $CB$, and let it meet $CB$ at $E$. Since $IL=2$, $IE$ is also $2$ (they are both inradii). Set $BD$ as $x$. Then, triangles $BLD$ and $CEI$ are similar, and $\tfrac{2}{3}=\tfrac{CI}{x}$. Thus, $CI=\tfrac{2x}{3}$. $\triangle CBD \sim \triangle CEI$, so $\tfrac{IE}{DB}=\tfrac{CI}{CD}$. Thus $\tfrac{2}{x}=\tfrac{(2x/3)}{(2x/3+5)}$. Solving for $x$, we have: $x^2-2x-15=0$, or $x=5, -3$. $x$ is positive, so $x=5$. As a result, $CI=\tfrac{2x}{3}=\tfrac{10}{3}$ and the answer is $\boxed{013}$ 

2016 AIME I Problem 7

For integers $a$ and $b$ consider the complex number $\frac{\sqrt{ab+2016}}{ab+100}-\left({\frac{\sqrt{|a+b|}}{ab+100}}\right)i$

Find the number of ordered pairs of integers $(a,b)$ such that this complex number is a real number.

Solution

We consider two cases:

Case 1: $ab \ge -2016$.

In this case, if $0 = \text{Im}\left({\frac{\sqrt{ab+2016}}{ab+100}-\left({\frac{\sqrt{|a+b|}}{ab+100}}\right)i}\right) = -\frac{\sqrt{|a+b|}}{ab+100}$ then $ab \ne -100$ and $|a + b| = 0 = a + b$. Thus $ab = -a^2$ so $a^2 < 2016$. Thus $a = -44,-43, ... , -1, 0, 1, ..., 43, 44$, yielding $89$ values. However since $ab = -a^2 \ne -100$, we have $a \ne \pm 10$. Thus there are $87$ allowed tuples $(a,b)$ in this case.

Case 2: $ab < -2016$.

In this case, we want $0 = \text{Im}\left({\frac{\sqrt{ab+2016}}{ab+100}-\left({\frac{\sqrt{|a+b|}}{ab+100}}\right)i}\right) = \frac{\sqrt{-ab-2016} - \sqrt{|a+b|}}{ab+100}$ Squaring, we have the equations $ab \ne -100$ (which always holds in this case) and $-(ab + 2016)= |a + b|.$ Then if $a > 0$ and $b < 0$, let $c = -b$. If $c > a$, $ac - 2016 = c - a \Rightarrow (a - 1)(c + 1) = 2015 \Rightarrow (a,b) = (2, -2014), (6, -402), (14, -154), (32, -64).$ Note that $ab < -2016$ for every one of these solutions. If $c < a$, then $ac - 2016 = a - c \Rightarrow (a + 1)(c - 1) = 2015 \Rightarrow (a,b) = (2014, -2), (402, -6), (154, -14), (64, -32).$ Again, $ab < -2016$ for every one of the above solutions. This yields $8$ solutions. Similarly, if $a < 0$ and $b > 0$, there are $8$ solutions. Thus, there are a total of $16$ solutions in this case.

Thus, the answer is $87 + 16 = \boxed{103}$.

Solution 2

Similar to Solution 1, but concise:

First, we set the imaginary expression to $0$, so that $|a+b|=0$ or $a=-b$, of which there are $44\cdot 2+1=89$ possibilities. But $(a,b)\ne(\pm 10,\mp 10)$ because the denominator would be $0$. So this gives $89-2=87$ solutions.

Then we try to cancel the imaginary part with the square root of the real part, which must be negative. So $ab<-2016$. $ab+2016=-|a+b|\rightarrow ab\pm a\pm b+2016=0\rightarrow (a\pm 1)(b\pm 1)=-2015$ by Simon's Favorite Factoring Trick.

We must have the negative part lesser in magnitude than the positive part, because an increase in magnitude of a lesser number is MORE than a decrease in the magnitude of a positive number, so the product will net to be more magnitude, namely $ab<-2016$ and $-2015\approx -2016$.

The factors of $(\text{-})2015$ are $(\text{-})5\cdot 13\cdot 31$, so the $(a+1,b+1)=\{(-1,2015),(-5,403), (-13,155),(-31,65)\}$ and the sets flipped.

Similarly from the second case of $(a-1,b-1)$ we also have $8$ solutions.

Thus, $(a,b),(b,a)=\{(\mp 2,\pm 2014),(\mp 6,\pm 402),(\mp 14,\pm 154),(\mp 32,\pm 64)\}$. Surely, all of their products, $ab=-4028,-2412,-2156,-2048<2016$.

So there are $87+16=\boxed{103}$ solutions. 

2016 AIME I Problem 8
Problem 8

For a permutation $p = (a_1,a_2,\ldots,a_9)$ of the digits $1,2,\ldots,9$, let $s(p)$ denote the sum of the three $3$-digit numbers $a_1a_2a_3$, $a_4a_5a_6$, and $a_7a_8a_9$. Let $m$ be the minimum value of $s(p)$ subject to the condition that the units digit of $s(p)$ is $0$. Let $n$ denote the number of permutations $p$ with $s(p) = m$. Find $|m - n|$.
Solution

To minimize $s(p)$, the numbers $1$, $2$, and $3$ (which sum to $6$) must be in the hundreds places. For the units digit of $s(p)$ to be $0$, the numbers in the ones places must have a sum of either $10$ or $20$. However, since the tens digit is more significant that the ones digit, we take the sum's units digit to be $20$. We know that the sum of the numbers in the tens digits is $\sum\limits_{i=1}^9 (i) -6-20=45-6-20=19$. Therefore, $m=100\times6+10\times19+20=810$.

To find $n$, realize that there are $3!=6$ ways of ordering the numbers in each of the places. Additionally, there are three possibilities for the numbers in the ones place: $(4,7,9)$, $(5,7,8)$, and $(5,6,9)$. Therefore there are $6^3\times3=648$ ways in total. $|m-n|=|810-648|=\fbox{162}$. 

2016 AIME I Problem 9

Triangle $ABC$ has $AB=40,AC=31,$ and $\sin{A}=\frac{1}{5}$. This triangle is inscribed in rectangle $AQRS$ with $B$ on $\overline{QR}$ and $C$ on $\overline{RS}$. Find the maximum possible area of $AQRS$.
Solution
Solution 1

Note that if angle $BAC$ is obtuse, it would be impossible for the triangle to inscribed in a rectangle. This can easily be shown by drawing triangle ABC, where $A$ is obtuse. Therefore, angle A is acute. Let angle $CAS=n$ and angle $BAQ=m$. Then, $\overline{AS}=31\cos(n)$ and $\overline{AQ}=40\cos(m)$. Then the area of rectangle $AQRS$ is $1240\cos(m)\cos(n)$. By product-to-sum, $\cos(m)\cos(n)=\frac{1}{2}(\cos(m+n)+\cos(m-n))$. $\cos(m+n)=\sin(90-m-n)=\sin(BAC)=\frac{1}{5}$. The maximum possible value of $\cos(m-n)$ is 1, which occurs when $m=n$. Thus the maximum possible value of $\cos(m)\cos(n)$ is $\frac{1}{2}(\frac{1}{5}+1)=\frac{3}{5}$ so the maximum possible area of $AQRS$ is $1240\times{\frac{3}{5}}=\fbox{744}$. -AkashD
Solution 2

As above, we note that angle $A$ must be acute. Therefore, let $A$ be the origin, and suppose that $Q$ is on the positive $x$ axis and $S$ is on the positive $y$ axis. We approach this using complex numbers. Let $w=\text{cis} A$, and let $z$ be a complex number with $|z|=1$, $\text{Arg}(z)\ge 0^\circ$ and $\text{Arg}(zw)\le90^\circ$. Then we represent $B$ by $40z$ and $C$ by $31zw$. The coordinates of $Q$ and $S$ depend on the real part of $40z$ and the imaginary part of $31zw$. Thus $[AQRS]=\Re(40z)\cdot \Im(31zw)=1240\left(\frac{z+\overline{z}}{2}\right)\left(\frac{zw-\overline{zw}}{2i}\right).$ We can expand this, using the fact that $z\overline{z}=|z|^2$, finding $[AQRS]=620\left(\frac{z^2w-\overline{z^2w}+w-\overline{w}}{2i}\right)=620(\Im(z^2w)+\Im(w)).$ Now as $w=\text{cis}A$, we know that $\Im(w)=\frac15$. Also, $|z^2w|=1$, so the maximum possible imaginary part of $z^2w$ is $1$. This is clearly achievable under our conditions on $z$. Therefore, the maximum possible area of $AQRS$ is $620(1+\tfrac15)=\boxed{744}$.
Solution 3 (With Calculus)

Let $\theta$ be the angle $\angle BAQ$. The height of the rectangle then can be expressed as $h = 31 \sin (A+\theta)$, and the length of the rectangle can be expressed as $l = 40\cos \theta$. The area of the rectangle can then be written as a function of $\theta$, $[AQRS] = a(\theta) = 31\sin (A+\theta)\cdot 40 \cos \theta = 1240 \sin (A+\theta) \cos \theta$. For now, we will ignore the $1240$ and focus on the function $f(\theta) = \sin (A+\theta) \cos \theta = (\sin A \cos \theta + \cos A \sin \theta)(\cos \theta) = \sin A \cos^2 \theta + \cos A \sin \theta \cos \theta = \sin A \cos^2 \theta + \frac{1}{2} \cos A \sin 2\theta$.

Taking the derivative, $f'(\theta) = \sin A \cdot -2\cos \theta \sin \theta + \cos A \cos 2\theta = \cos A \cos 2\theta - \sin A \sin 2\theta = \cos(2\theta + A)$. Setting this equal to $0$, we get $\cos(2 \theta + A) = 0 \Rightarrow 2\theta +A = 90, 270 ^\circ$. Since we know that $A+ \theta < 90$, the $270^\circ$ solution is extraneous. Thus, we get that $\theta = \frac{90 - A}{2} = 45 - \frac{A}{2}$.

Plugging this value into the original area equation, $a(45 - \frac{A}{2}) = 1240 \sin (45 - \frac{A}{2} + A) \cos (45 - \frac{A}{2}) = 1240\sin( 45+ \frac{A}{2})\cos(45 - \frac{A}{2})$. Using a product-to-sum formula, we get that: $1240\sin( 45+ \frac{A}{2})\cos(45 - \frac{A}{2}) =$ $1240\cdot \frac{1}{2}\cdot(\sin((45 + \frac{A}{2}) + (45 -\frac{A}{2}))+\sin((45 +\frac{A}{2})-(45 - \frac{A}{2})))=$ $620 (\sin 90^\circ + \sin A) = 620 \cdot \frac{6}{5} = \boxed{744}$.
Note on Problem Validity

It has been noted that this answer won't actually work. Let angle $QAB = m$ and angle $CAS = n$ as in Solution 1. Since we know (through that solution) that $m = n$, we can call them each $\theta$. The height of the rectangle is $AS = 31\cos\theta$, and the distance $BQ = 40\sin\theta$. We know that, if the triangle is to be inscribed in a rectangle, $AS \geq BQ$.

$AS \geq BQ$

$31\cos\theta \geq 40\sin\theta$

$\frac{31}{40} \geq \tan\theta$

However, $\tan\theta = \tan(\frac{90-A}{2}) = \frac{\sin(90-A)}{\cos(90-A)+1} = \frac{\cos A}{\sin A + 1} = \frac{\frac{2\sqrt6}{5}}{\frac{6}{5}} = \frac{\sqrt6}{3} > \frac{31}{40}$, so the triangle does not actually fit in the rectangle: specifically, B is above R and thus in the line containing segment QR but not on the actual segment or in the rectangle. 

<div align=center><img src="http://latex.artofproblemsolving.com/f/b/1/fb1f1f27af47c0da22fa58dca341459fa9a2f639.png" height="200px" /></div>

The actual answer is a radical near $728$ (letting the triangle be inside the rectangle). The CAMC, however, has decided to accept only the answer $744$ despite the invalid problem statement. 

2016 AIME I Problem 10
Problem

A strictly increasing sequence of positive integers $a_1$, $a_2$, $a_3$, $\cdots$ has the property that for every positive integer $k$, the subsequence $a_{2k-1}$, $a_{2k}$, $a_{2k+1}$ is geometric and the subsequence $a_{2k}$, $a_{2k+1}$, $a_{2k+2}$ is arithmetic. Suppose that $a_{13} = 2016$. Find $a_1$.
Solution

We first create a similar sequence where $a_1=1$ and $a_2=2$. Continuing the sequence,

$1, 2,4,6,9,12,16,20,25,30,36,42,49,\cdots$

Here we can see a pattern; every second term (starting from the first) is a square, and every second term (starting from the third) is the end of a geometric sequence. Similarly, $a_{13}$ would also need to be the end of a geometric sequence (divisible by a square). We see that $2016$ is $2^5 \cdot 3^2 \cdot 7$, so the squares that would fit in $2016$ are $1^2=1$, $2^2=4$, $3^2=9$, $2^4=16$, $2^2 \cdot 3^2 = 36$, and $2^4 \cdot 3^2 = 144$. By simple inspection $144$ is the only plausible square, since the other squares in the sequence don't have enough elements before them to go all the way back to $a_1$ while still staying as positive integers. $a_{13}=2016=14\cdot 144$, so $a_1=14\cdot 36=\fbox{504}$. 

2016 AIME I Problem 11

Let $P(x)$ be a nonzero polynomial such that $(x-1)P(x+1)=(x+2)P(x)$ for every real $x$, and $\left(P(2)\right)^2 = P(3)$. Then $P(\tfrac72)=\tfrac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m + n$.
Solution 1

Plug in $x=1$ to get $(1-1)P(1+1) = 0 = (1+2)P(1) \Rightarrow P(1) = 0$. Plug in $x=0$ to get $(0-1)P(0+1) = (0+2)P(0)\Rightarrow P(0) = -\frac{1}{2}P(1) = 0$. Plug in $x=-1$ to get $(-1-1)P(-1+1) = (-1+2)P(-1)\Rightarrow (-2)P(0)=P(-1)\Rightarrow P(-1) = 0$. So $P(x) = x(x-1)(x+1)Q(x)$ for some polynomial $Q(x)$. Using the initial equation, once again, $(x-1)P(x+1) = (x+2)P(x)$ $(x-1)((x+1)(x+1-1)(x+1+1)Q(x+1)) = (x+2)((x)(x-1)(x+1)Q(x))$ $(x-1)(x+1)(x)(x+2)Q(x+1) = (x+2)(x)(x-1)(x+1)Q(x)$ $Q(x+1) = Q(x)$ From here, we know that $Q(x) = C$ for a constant $C$, so $P(x) = Cx(x-1)(x+1)$. We know that $\left(P(2)\right)^2 = P(3)$. Plugging those into our definition of $P(x)$: $(C \cdot 2 \cdot (2-1) \cdot (2+1))^2 = C \cdot 3 \cdot (3-1) \cdot (3+1) \Rightarrow (6C)^2 = 24C \Rightarrow 36C^2 - 24C = 0 \Rightarrow C = 0$ or $\frac{2}{3}$. So we know that $P(x) = \frac{2}{3}x(x-1)(x+1)$. So $P(\frac{7}{2}) = \frac{2}{3} \cdot \frac{7}{2} \cdot (\frac{7}{2} - 1) \cdot (\frac{7}{2} + 1) = \frac{105}{4}$. Thus, the answer is $105 + 4 = \boxed{109}$.
Solution 2

From the equation we see that $x-1$ divides $P(x)$ and $(x+2)$ divides $P(x+1)$ so we can conclude that $x-1$ and $x+1$ divide $P(x)$ (if we shift the function right by 1, we get $(x-2)P(x) = (x+1)P(x-1)$, and from here we can see that $x+1$ divides $P(x)$). This means that $1$ and $-1$ are roots of $P(x)$. Plug in $x = 0$ and we see that $P(0) = 0$ so $0$ is also a root.

Suppose we had another root that is not one of those $3$. Notice that the equation above indicates that if $r$ is a root then $r+1$ and $r-1$ is also a root. Then we'd get an infinite amount of roots! So that is bad. So we cannot have any other roots besides those three.

That means $P(x) = cx(x-1)(x+1)$. We can use $P(2)^2 = P(3)$ to get $c = \frac{2}{3}$. Plugging in $\frac{7}{2}$ is now trivial and we see that it is $\frac{105}{4}$ so our answer is $\boxed{109}$
Solution 3

Although this may not be the most mathematically rigorous answer, we see that $\frac{P(x+1)}{P(x)}=\frac{x+2}{x-1}$. Using a bit of logic, we can make a guess that $P(x+1)$ has a factor of $x+2$, telling us $P(x)$ has a factor of $x+1$. Similarly, we guess that $P(x)$ has a factor of $x-1$, which means $P(x+1)$ has a factor of $x$. Now, since $P(x)$ and $P(x+1)$ have so many factors that are off by one, we may surmise that when you plug $x+1$ into $P(x)$, the factors "shift over," i.e. $P(x)=(A)(A+1)(A+2)...(A+n)$, which goes to $P(x+1)=(A+1)(A+2)(A+3)...(A+n+1)$. This is useful because these, when divided, result in $\frac{P(x+1)}{P(x)}=\frac{A+n+1}{A}$. If $\frac{A+n+1}{A}=\frac{x+2}{x-1}$, then we get $A=x-1$ and $A+n+1=x+2$, $n=2$. This gives us $P(x)=(x-1)x(x+1)$ and $P(x+1)=x(x+1)(x+2)$, and at this point we realize that there has to be some constant $a$ multiplied in front of the factors, which won't affect our fraction $\frac{P(x+1)}{P(x)}=\frac{x+2}{x-1}$ but will give us the correct values of $P(2)$ and $P(3)$. Thus $P(x)=a(x-1)x(x+1)$, and we utilize $P(2)^2=P(3)$ to find $a=\frac{2}{3}$. Evaluating $P \left ( \frac{7}{2} \right )$ is then easy, and we see it equals $\frac{105}{4}$, so the answer is $\boxed{109}$
Solution 4

Substituting $x=2$ into the given equation, we find that $P(3)=4P(2)=P(2)^2$. Therefore, either $P(2)=0$ or $P(2)=4$. Now for integers $n\ge 2$, we know that $P(n+1)=\frac{n+2}{n-1}P(n).$ Applying this repeatedly, we find that $P(n+1)=\frac{(n+2)!/3!}{(n-1)!}P(2).$ If $P(2)=0$, this shows that $P(x)$ has infinitely many roots, meaning that $P(x)$ is identically equal to zero. But this contradicts the problem statement. Therefore, $P(2)=4$, and we find $P(n+1)=\frac{2}{3}(n+2)(n+1)n$ for all positive integers $n\ge2$. This cubic polynomial matches the values $P(n+1)$ for infinitely many numbers, hence the two polynomials are identically equal. In particular, $P\left(\frac72\right)=\frac23\cdot\frac92\cdot\frac72\cdot\frac52=\frac{105}{4}$, and the answer is $\boxed{109}$. 

2016 AIME I Problem 12
Problem

Find the least positive integer $m$ such that $m^2 - m + 11$ is a product of at least four not necessarily distinct primes.
Solution

We claim $m = 132$. Note $132^2 - 132 + 11 = 11^3 \cdot 13$.

Now $m(m-1)$ is the product of two consecutive integers, so it is always even. Thus $m(m-1)+11$ is odd and never divisible by $2$. Thus any prime $p$ that divides $m^2-m+11$ must divide $4m^2-4m+44=(2m-1)^2+43$. We see that $(2m-1)^2\equiv -43\pmod{p}$. We can verify that $-43$ is not a perfect square mod $p$ for each of $p=3,5,7$. Therefore, all prime factors of $m^2-m+11$ are greater than or equal to $11$.

Now suppose $m < 132$ and $m^2 - m + 11 = pqrs$ for primes $p, q, r, s\ge11$. If $p, q, r, s = 11$, then $m^2-m+11=11^4$. We can multiply this by $4$ and complete the square to find $(2m-1)^2=4\cdot 11^4-43$. But $(2\cdot 11^2-1)^2=4\cdot 11^4-4\cdot 11^2+1 <4\cdot 11^4-43<(2\cdot 11^2)^2,$ hence we have pinned a perfect square $(2m-1)^2=4\cdot 11^4-43$ strictly between two consecutive perfect squares, a contradiction. Hence $pqrs \ge 11^3 \cdot 13$. Thus $m^2-m+11\ge 11^3\cdot 13$, or $(m-132)(m+131)\ge0$. From the inequality, we see that $m \ge 132$, hence $m = \fbox{132}$. 

2016 AIME I Problem 13
Problem

Freddy the frog is jumping around the coordinate plane searching for a river, which lies on the horizontal line $y = 24$. A fence is located at the horizontal line $y = 0$. On each jump Freddy randomly chooses a direction parallel to one of the coordinate axes and moves one unit in that direction. When he is at a point where $y=0$, with equal likelihoods he chooses one of three directions where he either jumps parallel to the fence or jumps away from the fence, but he never chooses the direction that would have him cross over the fence to where $y < 0$. Freddy starts his search at the point $(0, 21)$ and will stop once he reaches a point on the river. Find the expected number of jumps it will take Freddy to reach the river.
Solution

Notice that we don't really care about what the $x$-coordinate of the frog is. We will let $f(y)$ denote the expected number of times Freddy will jump starting at a $y$-coordinate of $y$ until he reaches the line $y = 24$. We want to find $f(21)$.

We have $f(24) = 0$. Suppose Freddy is at $y = n$. He has a $\frac{1}{2}$ probability of moving horizontally, $\frac{1}{4}$ chance of moving up and $\frac{1}{4}$ chance of moving down. So we have $f(n) = 1 + \frac{1}{2} f(n) + \frac{1}{4} f(n-1) + \frac{1}{4} f(n+1)$ So we get the recursion $2f(n) - f(n-1) - f(n+1) = 4$. Rearranging we see $f(n) - f(n-1) = f(n+1) - f(n) + 4$. That means the difference between consecutive terms goes down by $4$ each time. So for convenience let's let $z = f(0)$ and $d = f(1) - f(0)$. So that means $f(k) = z + d + (d-4) + (d-8) + \cdots + (d - 4(k-1)) = z + kd - 2k(k-1)$ Yes, this is a quadratic. Now, notice that since there is a boundary, we have to give special care to $f(0)$. We have $f(0) = 1 + \frac{2}{3}f(0) + \frac{1}{3} f(1)$ so this turns into $\frac{1}{3}z = 1 + \frac{1}{3}(z+d)$ and this results in $d = -3$. So now we know $f(k) = z - k - 2k^2$ Now, we also have that $f(24) = 0$ so that gives us $f(24) = z - 24 - 2 \cdot 576 = 0$ so $z = 1176$. So now we know $f(k) = 1176 - k - 2k^2$ so plugging in $k = 21$ we get $f(21) = 1176 - 21 - 882 = \boxed{273}$ -fclvbfm934

EDIT: Why switch variables? We don't need to introduce a new variable $n$ instead of $y$. . . . Because $n$ is always positive (I assume although it's not written), else you would have to account for $f(0)$ which would make computations unnecessarily complicated. 

2016 AIME I Problem 14

Centered at each lattice point in the coordinate plane are a circle radius $\frac{1}{10}$ and a square with sides of length $\frac{1}{5}$ whose sides are parallel to the coordinate axes. The line segment from $(0,0)$ to $(1001, 429)$ intersects $m$ of the squares and $n$ of the circles. Find $m + n$.

Solution 1

First note that $1001 = 143 \cdot 7$ and $429 = 143 \cdot 3$ so every point of the form $(7k, 3k)$ is on the line. Then consider the line $l$ from $(7k, 3k)$ to $(7(k + 1), 3(k + 1))$. Translate the line $l$ so that $(7k, 3k)$ is now the origin. There is one square and one circle that intersect the line around $(0,0)$. Then the points on $l$ with an integral $x$-coordinate are, since $l$ has the equation $y = \frac{3x}{7}$:

$(0,0), (1, \frac{3}{7}), (2, \frac{6}{7}), (3, 1 + \frac{2}{7}), (4, 1 + \frac{5}{7}), (5, 2 + \frac{1}{7}), (6, 2 + \frac{4}{7}), (7,3).$

We claim that the lower right vertex of the square centered at $(2,1)$ lies on $l$. Since the square has side length $\frac{1}{5}$, the lower right vertex of this square has coordinates $(2 + \frac{1}{10}, 1 - \frac{1}{10}) = (\frac{21}{10}, \frac{9}{10})$. Because $\frac{9}{10} = \frac{3}{7} \cdot \frac{21}{10}$, $(\frac{21}{10}, \frac{9}{10})$ lies on $l$. Since the circle centered at $(2,1)$ is contained inside the square, this circle does not intersect $l$. Similarly the upper left vertex of the square centered at $(5,2)$ is on $l$. Since every other point listed above is farther away from a lattice point (excluding (0,0) and (7,3)) and there are two squares with centers strictly between $(0,0)$ and $(7,3)$ that intersect $l$. Since there are $\frac{1001}{7} = \frac{429}{3} = 143$ segments from $(7k, 3k)$ to $(7(k + 1), 3(k + 1))$, the above count is yields $143 \cdot 2 = 286$ squares. Since every lattice point on $l$ is of the form $(3k, 7k)$ where $0 \le k \le 143$, there are $144$ lattice points on $l$. Centered at each lattice point, there is one square and one circle, hence this counts $288$ squares and circles. Thus $m + n = 286 + 288 = \boxed{574}$.

<div align=center><img src="http://latex.artofproblemsolving.com/5/4/5/54541b46637fca10947e026738c305f51cdfa5b0.png" height="200px" /></div>

Solution 2

This is mostly a clarification to Solution 1, but let's take the diagram for the origin to $(7,3)$. We have the origin circle and square intersected, then two squares, then the circle and square at $(7,3)$. If we take the circle and square at the origin out of the diagram, we will be able to repeat the resulting segment (with its circles and squares) end to end from $(0,0)$ to $(1001,429)$, which forms the line we need without overlapping. Since $143$ of these segments are needed to do this, and $3$ squares and $1$ circle are intersected with each, there are $143 \cdot (3+1) = 572$ squares and circles intersected. Adding the circle and square that are intersected at the origin back into the picture, we get that there are $572+2=\boxed{574}$ squares and circles intersected in total. 

2016 AIME I Problem 15

Circles $\omega_1$ and $\omega_2$ intersect at points $X$ and $Y$. Line $\ell$ is tangent to $\omega_1$ and $\omega_2$ at $A$ and $B$, respectively, with line $AB$ closer to point $X$ than to $Y$. Circle $\omega$ passes through $A$ and $B$ intersecting $\omega_1$ again at $D \neq A$ and intersecting $\omega_2$ again at $C \neq B$. The three points $C$, $Y$, $D$ are collinear, $XC = 67$, $XY = 47$, and $XD = 37$. Find $AB^2$.

Solution
Solution 1

By the Radical Axis Theorem $AD, XY, BC$ concur at point $E$.

Let $AB$ and $EY$ intersect at $S$. Note that because $AXDY$ and $CYXB$ are cyclic, by Miquel's Theorem $AXBE$ is cyclic as well. Thus $\angle AEX = \angle ABX = \angle XCB = \angle XYB$and $\angle XEB = \angle XAB = \angle XDA = \angle XYA.$Thus $AY \parallel EB$ and $YB \parallel EA$, so $AEBY$ is a parallelogram. Hence $AS = SB$ and $SE = SY$. But notice that $DXE$ and $EXC$ are similar by $AA$ Similarity, so $XE^2 = XD \cdot XC = 37 \cdot 67$. But $XE^2 - XY^2 = (XE + XY)(XE - XY) = EY \cdot 2XS = 2SY \cdot 2SX = 4SA^2 = AB^2.$Hence $AB^2 = 37 \cdot 67 - 47^2 = \boxed{270}.$
Solution 2

First, we note that as $\triangle XDY$ and $\triangle XYC$ have bases along the same line, $\frac{[\triangle XDY]}{[\triangle XYC]}=\frac{DY}{YC}$. We can also find the ratio of their areas using the circumradius area formula. If $R_1$ is the radius of $\omega_1$ and if $R_2$ is the radius of $\omega_2$, then $\frac{[\triangle XDY]}{[\triangle XYC]}=\frac{(37\cdot 47\cdot DY)/(4R_1)}{(47\cdot 67\cdot YC)/(4R_2)}=\frac{37\cdot DY\cdot R_2}{67\cdot YC\cdot R_1}.$ Since we showed this to be $\frac{DY}{YC}$, we see that $\frac{R_2}{R_1}=\frac{67}{37}$.

We extend $AD$ and $BC$ to meet at point $P$, and we extend $AB$ and $CD$ to meet at point $Q$ as shown below. 

<div align=center><img src="http://latex.artofproblemsolving.com/2/0/0/200feab33999ae63954444617d1c3d67d4a2b23b.png" height="200px" /></div>

As $ABCD$ is cyclic, we know that $\angle BCD=180-\angle DAB=\angle BAP$. But then as $AB$ is tangent to $\omega_2$ at $B$, we see that $\angle BCD=\angle ABY$. Therefore, $\angle ABY=\angle BAP$, and $BY\parallel PD$. A similar argument shows $AY\parallel PC$. These parallel lines show $\triangle PDC\sim\triangle ADY\sim\triangle BYC$. Also, we showed that $\frac{R_2}{R_1}=\frac{67}{37}$, so the ratio of similarity between $\triangle ADY$ and $\triangle BYC$ is $\frac{37}{67}$, or rather $\frac{AD}{BY}=\frac{DY}{YC}=\frac{YA}{CB}=\frac{37}{67}.$ We can now use the parallel lines to find more similar triangles. As $\triangle AQD\sim \triangle BQY$, we know that $\frac{QA}{QB}=\frac{QD}{QY}=\frac{AD}{BY}=\frac{37}{67}.$ Setting $QA=37x$, we see that $QB=67x$, hence $AB=30x$, and the problem simplifies to finding $30^2x^2$. Setting $QD=37^2y$, we also see that $QY=37\cdot 67y$, hence $DY=37\cdot 30y$. Also, as $\triangle AQY\sim \triangle BQC$, we find that $\frac{QY}{QC}=\frac{YA}{CB}=\frac{37}{67}.$ As $QY=37\cdot 67y$, we see that $QC=67^2y$, hence $YC=67\cdot30y$.

Applying Power of a Point to point $Q$ with respect to $\omega_2$, we find $67^2x^2=37\cdot 67^3 y^2,$ or $x^2=37\cdot 67 y^2$. We wish to find $AB^2=30^2x^2=30^2\cdot 37\cdot 67y^2$.

Applying Stewart's Theorem to $\triangle XDC$, we find $37^2\cdot (67\cdot 30y)+67^2\cdot(37\cdot 30y)=(67\cdot 30y)\cdot (37\cdot 30y)\cdot (104\cdot 30y)+47^2\cdot (104\cdot 30y).$ We can cancel $30\cdot 104\cdot y$ from both sides, finding $37\cdot 67=30^2\cdot 67\cdot 37y^2+47^2$. Therefore, $AB^2=30^2\cdot 37\cdot 67y^2=37\cdot 67-47^2=\boxed{270}.$ 

Solution 3

<div align=center><img src="http://latex.artofproblemsolving.com/9/e/d/9edab2433cc7ad4e4413fc95f45b47d01eae4a00.png" height="200px" /></div>

First of all, since quadrilaterals $ADYX$ and $XYCB$ are cyclic, we can let $\angle DAX = \angle XYC = \theta$, and $\angle XYD = \angle CBX = 180 - \theta$, due to the properties of cyclic quadrilaterals. In addition, let $\angle BAX = x$ and $\angle ABX = y$. Thus, $\angle ADX = \angle AYX = x$ and $\angle XYB = \angle XCB = y$. Then, since quadrilateral $ABCD$ is cyclic as well, we have the following sums: $\theta + x +\angle XCY + y = 180^{\circ}$ $180^{\circ} - \theta + y + \angle XDY + x = 180^{\circ}$ Cancelling out $180^{\circ}$ in the second equation and isolating $\theta$ yields $\theta = y + \angle XDY + x$. Substituting $\theta$ back into the first equation, we obtain $2x + 2y + \angle XCY + \angle XDY = 180^{\circ}$ Since $x + y +\angle XAY + \angle XCY + \angle DAY = 180^{\circ}$ $x + y + \angle XDY + \angle XCY + \angle DAY = 180^{\circ}$ we can then imply that $\angle DAY = x + y$. Similarly, $\angle YBC = x + y$. So then $\angle DXY = \angle YXC = x + y$, so since we know that $XY$ bisects $\angle DXC$, we can solve for $DY$ and $YC$ with Stewart’s Theorem. Let $DY = 37n$ and $YC = 67n$. Then $37n \cdot 67n \cdot 104n + 47^2 \cdot 104n = 37^2 \cdot 67n + 67^2 \cdot 37n$ $37n \cdot 67n + 47^2 = 37 \cdot 67$ $n^2 = \frac{270}{2479}$ Now, since $\angle AYX = x$ and $\angle BYX = y$, $\angle AYB = x + y$. From there, let $\angle AYD = \alpha$ and $\angle BYC = \beta$. From angle chasing we can derive that $\angle YDX = \angle YAX = \beta - x$ and $\angle YCX = \angle YBX = \alpha - y$. From there, since $\angle ADX = x$, it is quite clear that $\angle ADY = \beta$, and $\angle YAB = \beta$ can be found similarly. From there, since $\angle ADY = \angle YAB = \angle BYC = \beta$ and $\angle DAY = \angle AYB = \angle YBC = x + y$, we have $AA$ similarity between $\triangle DAY$, $\triangle AYB$, and $\triangle YBC$. Therefore the length of $AY$ is the geometric mean of the lengths of $DA$ and $YB$ (from $\triangle DAY \sim \triangle AYB$). However, $\triangle DAY \sim \triangle AYB \sim \triangle YBC$ yields the proportion $\frac{AD}{DY} = \frac{YA}{AB} = \frac{BY}{YC}$; hence, the length of $AB$ is the geometric mean of the lengths of $DY$ and $YC$. We can now simply use arithmetic to calculate $AB^2$. $AB^2 = DY \cdot YC$ $AB^2 = 37 \cdot 67 \cdot \frac{270}{2479}$ $AB^2 = \boxed{270}$


2016 AIME I Answer Key
1.	336
    2.071
    3.810
    4.108
    5.053
    6.013
    7.103
    8.162
    9.744
    10.504
    11.109
    12.132
    13.273
    14.574
    15.270



