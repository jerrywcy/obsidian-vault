#  2013 AIME II

2013 AIME II Problems/Problem 1
Problem 1

Suppose that the measurement of time during the day is converted to the metric system so that each day has $10$ metric hours, and each metric hour has $100$ metric minutes. Digital clocks would then be produced that would read $\text{9:99}$ just before midnight, $\text{0:00}$ at midnight, $\text{1:25}$ at the former $\text{3:00}$ AM, and $\text{7:50}$ at the former $\text{6:00}$ PM. After the conversion, a person who wanted to wake up at the equivalent of the former $\text{6:36}$ AM would set his new digital alarm clock for $\text{A:BC}$, where $\text{A}$, $\text{B}$, and $\text{C}$ are digits. Find $100\text{A}+10\text{B}+\text{C}$.
Solution

There are $24*60=1440$ normal minutes in a day , and $10*100=1000$ metric minutes in a day. The ratio of normal to metric minutes in a day is $\frac{1440}{1000}$, which simplifies to $\frac{36}{25}$. This means that every time 36 normal minutes pass, 25 metric minutes pass. From midnight to $\text{6:36}$ AM, $6*60+36=396$ normal minutes pass. This can be viewed as $\frac{396}{36}=11$ cycles of 36 normal minutes, so 11 cycles of 25 metric minutes pass. Adding $25*11=275$ to $\text{0:00}$ gives $\text{2:75}$, so the answer is $\boxed{275}$. 

2013 AIME II Problems/Problem 2
Problem 2

Positive integers $a$ and $b$ satisfy the condition $\log_2(\log_{2^a}(\log_{2^b}(2^{1000}))) = 0.$ Find the sum of all possible values of $a+b$.
Solution

To simplify, we write this logarithmic expression as an exponential one. Just looking at the first log, it has a base of 2 and an argument of the expression in parenthesis. Therefore, we can make 2 the base, 0 the exponent, and the argument the result. That means $\log_{2^a}(\log_{2^b}(2^{1000}))=1$ (because $2^0=1$). Doing this again, we get $\log_{2^b}(2^{1000})=2^a$. Doing the process one more time, we finally eliminate all of the logs, getting ${(2^{b})}^{(2^a)}=2^{1000}$. Using the property that ${(a^x)^{y}}=a^{xy}$, we simplify to $2^{b\cdot2^{a}}=2^{1000}$. Eliminating equal bases leaves $b\cdot2^a=1000$. The largest $a$ such that $2^a$ divides $1000$ is $3$, so we only need to check $1$,$2$, and $3$. When $a=1$, $b=500$; when $a=2$, $b=250$; when $a=3$, $b=125$. Summing all the $a$'s and $b$'s gives the answer of $\boxed{881}$. 

2013 AIME II Problems/Problem 3
Problem 3

A large candle is $119$ centimeters tall. It is designed to burn down more quickly when it is first lit and more slowly as it approaches its bottom. Specifically, the candle takes $10$ seconds to burn down the first centimeter from the top, $20$ seconds to burn down the second centimeter, and $10k$ seconds to burn down the $k$-th centimeter. Suppose it takes $T$ seconds for the candle to burn down completely. Then $\tfrac{T}{2}$ seconds after it is lit, the candle's height in centimeters will be $h$. Find $10h$.
Solution

We find that $T=10(1+2+\cdots +119)$. From Gauss's formula, we find that the value of T is $10(7140)=71400$. The value of $\frac{T}{2}$ is therefore $35700$. We find that $35700$ is $10(3570)=10\cdot \frac{k(k+1)}{2}$, so $3570=\frac{k(k+1)}{2}$. As a result, $7140=k(k+1)$, which leads to $0=k^2+k-7140$. We notice that $k=84$, so the answer is $10(119-84)=\boxed{350}$. 

2013 AIME II Problems/Problem 4

In the Cartesian plane let $A = (1,0)$ and $B = \left( 2, 2\sqrt{3} \right)$. Equilateral triangle $ABC$ is constructed so that $C$ lies in the first quadrant. Let $P=(x,y)$ be the center of $\triangle ABC$. Then $x \cdot y$ can be written as $\tfrac{p\sqrt{q}}{r}$, where $p$ and $r$ are relatively prime positive integers and $q$ is an integer that is not divisible by the square of any prime. Find $p+q+r$.
Solution 1

The distance from point $A$ to point $B$ is $\sqrt{13}$. The vector that starts at point A and ends at point B is given by $B - A = (1, 2\sqrt{3})$. Since the center of an equilateral triangle, $P$, is also the intersection of the perpendicular bisectors of the sides of the triangle, we need first find the equation for the perpendicular bisector to $\overline{AB}$. The line perpendicular to $\overline{AB}$ through the midpoint, $M = (\frac{3}{2},\sqrt{3})$, $\overline{AB}$ can be parameterized by $(\frac{2\sqrt{3}}{\sqrt{13}}, \frac{-1}{\sqrt{13}}) t + (\frac{3}{2},\sqrt{3})$. At this point, it is useful to note that $\Delta BMP$ is a 30-60-90 triangle with $\overline{MB}$ measuring $\frac{\sqrt{13}}{2}$. This yields the length of $\overline{MP}$ to be $\frac{\sqrt{13}}{2\sqrt{3}}$. Therefore, $P =( \frac{2\sqrt{3}}{\sqrt{13}},\frac{-1}{\sqrt{13}})(\frac{\sqrt{13}}{2\sqrt{3}}) + (\frac{3}{2},\sqrt{3}) = (\frac{5}{2}, \frac{5}{2\sqrt{3}})$. Therefore $xy = \frac{25\sqrt{3}}{12}$ yielding an answer of $p + q + r = 25 + 3 + 12 = \boxed{040}$.


Solution 2

Rather than considering the Cartesian plane, we use complex numbers. Thus A is 1 and B is $2 + 2\sqrt{3}i$.

Recall that a rotation of $\theta$ radians counterclockwise is equivalent to multiplying a complex number by $e^{i\theta}$, but here we require a clockwise rotation, so we multiply by $e^{-\frac{i\pi}{3}}$ to obtain C. Upon averaging the coordinates of A, B, and C, we obtain the coordinates of P, viz. $\left(\frac{5}{2}, \frac{5\sqrt{3}}{6}\right)$.

Therefore $xy$ is $\frac{25\sqrt{3}}{12}$ and the answer is $25 + 12 + 3 = \boxed{040}$.
Solution 3

We can also consider the slopes of the lines. Midpoint $M$ of $AB$ has coordinates $\left(\frac{3}{2},\ \sqrt{3}\right)$. Because line $AB$ has slope $2\sqrt{3}$, the slope of line $MP$ is $-\frac{1}{2\sqrt{3}}$.

Since $\Delta ABC$ is equilateral, and since point $P$ is the centroid, we can quickly calculate that $MP = \frac{\sqrt{39}}{6}$. Then, define $\Delta x$ and $\Delta y$ to be the differences between points $M$ and $P$. Because of the slope, it is clear that $\Delta x = 2\sqrt{3} \Delta y$.

We can then use the Pythagorean Theorem on line segment $MP$: $MP^2 = \Delta x^2 + \Delta y^2$ yields $\Delta y = -\frac{1}{2\sqrt{3}}$ and $\Delta x = 1$, after substituting $\Delta x$. The coordinates of P are thus $\left(\frac{5}{2},\ \frac{5\sqrt{3}}{6}\right)$. Multiplying these together gives us $\frac{25\sqrt{3}}{12}$, giving us $\boxed{040}$ as our answer.
Solution 4

Since $AC$ will be segment $AB$ rotated clockwise $60^{\circ}$, we can use a rotation matrix to find $C$. We first translate the triangle $1$ unit to the left, so $A'$ lies on the origin, and $B' = (1, 2\sqrt{3})$. Rotating clockwise $60^{\circ}$ is the same as rotating $300^{\circ}$ counter-clockwise, so our rotation matrix is $$$\begin{bmatrix} \cos{300^{\circ}} & -\sin{300^{\circ}}\\ \sin{300^{\circ}} & \cos{300^{\circ}}\\ \end{bmatrix}$$ = $$\begin{bmatrix} \frac{1}{2} & \frac{\sqrt{3}}{2}\\ -\frac{\sqrt{3}}{2} & \frac{1}{2}\\ \end{bmatrix}$$$. Then $C' = $$\begin{bmatrix} \frac{1}{2} & \frac{\sqrt{3}}{2}\\ -\frac{\sqrt{3}}{2} & \frac{1}{2}\\ \end{bmatrix}$$ \cdot $$\begin{bmatrix} 1\\ 2\sqrt{3}\\ \end{bmatrix}$$ = $$\begin{bmatrix} \frac{7}{2}\\ \frac{\sqrt{3}}{2}\\ \end{bmatrix}$$$. Thus, $C = (\frac{9}{2}, \frac{\sqrt{3}}{2})$. Since the triangle is equilateral, the center of the triangle is the average of the coordinates of the vertices. Then $P = (\frac{1 + 2 + \frac{9}{2}}{3}, \frac{2\sqrt{3} + \frac{\sqrt{3}}{2}}{3}) = (\frac{5}{2}, \frac{5\sqrt{3}}{6})$. Our answer is $\frac{5}{2} \cdot \frac{5\sqrt{3}}{6} = \frac{25\sqrt{3}}{12}$. $25 + 3 + 12 = \boxed{40}$
Solution 5

We construct point $C$ by drawing two circles with radius $r = AB = \sqrt{13}$. One circle will be centered at $A$, while the other is centered at $B$. The equations of the circles are:

$(x - 1)^2 + y^2 = 13$

$(x - 2)^2 + (y - 2\sqrt{3})^2 = 13$

Setting the LHS of each of these equations equal to each other and solving for $x$ yields after simplification:

$x = \frac{15}{2} - 2\sqrt{3}y$

Plugging that into the first equation gives the following quadratic in $y$ after simplification:

$y^2 - 2\sqrt{3}y + \frac{9}{4} = 0$

The quadratic formula gives $y = \frac{\sqrt{3}}{2}, \frac{3\sqrt{3}}{2}$.

Since $x > 0$ and $x = \frac{15}{2} - 2\sqrt{3}y$, we pick $y = \frac{\sqrt{3}}{2}$ in the hopes that it will give $x > 0$. Plugging $y$ into the equation for $x$ yields $x = \frac{9}{2}$.

Thus, $C(\frac{9}{2}, \frac{\sqrt{3}}{2})$. Averaging the coordinates of the vertices of equilateral triangle $ABC$ will give the center of mass of the triangle.

Thus, $P(\frac{5}{2}, \frac{5\sqrt{3}}{6})$, and the product of the coordinates is $\frac{25\sqrt{3}}{12}$, so the desired quantity is $\boxed{040}$. 

Problem

In equilateral $\triangle ABC$ let points $D$ and $E$ trisect $\overline{BC}$. Then $\sin(\angle DAE)$ can be expressed in the form $\frac{a\sqrt{b}}{c}$, where $a$ and $c$ are relatively prime positive integers, and $b$ is an integer that is not divisible by the square of any prime. Find $a+b+c$.
Solution 1

<div align=center><img src="http://latex.artofproblemsolving.com/f/9/f/f9f9726a27a1fdee751794de373a0f07ceab353d.png" height="150px" /></div>

Without loss of generality, assume the triangle sides have length 3. Then the trisected side is partitioned into segments of length 1, making your computation easier.

Let $M$ be the midpoint of $\overline{DE}$. Then $\Delta MCA$ is a 30-60-90 triangle with $MC = \frac{3}{2}$, $AC = 3$ and $AM = \frac{3\sqrt{3}}{2}$. Since the triangle $\Delta AME$ is right, then we can find the length of $\overline{AE}$ by pythagorean theorem, $AE = \sqrt{7}$. Therefore, since $\Delta AME$ is a right triangle, we can easily find $\sin(\angle EAM) = \frac{1}{2\sqrt{7}}$ and $\cos(\angle EAM) = \sqrt{1-\sin(\angle EAM)^2}=\frac{3\sqrt{3}}{2\sqrt{7}}$. So we can use the double angle formula for sine, $\sin(\angle EAD) = 2\sin(\angle EAM)\cos(\angle EAM) = \frac{3\sqrt{3}}{14}$. Therefore, $a + b + c = \boxed{020}$.
Solution 2

We find that, as before, $AE = \sqrt{7}$, and also the area of $\Delta DAE$ is 1/3 the area of $\Delta ABC$. Thus, using the area formula, $1/2 * 7 * \sin(\angle EAD) = 3\sqrt{3}/4$, and $\sin(\angle EAD) = \frac{3\sqrt{3}}{14}$. Therefore, $a + b + c = \boxed{020}.$
Solution 3

We notice that $\sin(2\alpha)=2\sin(\alpha)\cos(\alpha)=\sin(\angle{DAE})$. We can find $2\sin(\alpha)\cos(\alpha)$, to be $2(\frac{1}{\sqrt{28}})(\frac{3\sqrt{3}}{\sqrt{28}})=\frac{3\sqrt{3}}{14}$, so our answer is $3+3+14=\boxed{020}$.
Solution 4

Let A be the origin of the complex plane, B be $1+i\sqrt{3}$, and C be $2$. Also, WLOG, let D have a greater imaginary part than E. Then, D is $\frac{4}{3}+\frac{2i\sqrt{3}}{3}$ and E is $\frac{5}{3}+\frac{i\sqrt{3}}{3}$. Then, $\sin(\angle DAE) = Im\left(\frac{\frac{4}{3}+\frac{2i\sqrt{3}}{3}}{ \frac{5}{3}+\frac{i\sqrt{3}}{3}}\right) = Im\left(\frac{26+6i\sqrt{3}}{28}\right) = \frac{3\sqrt{3}}{14}$. Therefore, $a + b + c = \boxed{020}$ 

2013 AIME II Problems/Problem 6

Find the least positive integer $N$ such that the set of $1000$ consecutive integers beginning with $1000\cdot N$ contains no square of an integer.

Solutions
Solution 1

Let us first observe the difference between $x^2$ and $(x+1)^2$, for any arbitrary $x\ge 0$. $(x+1)^2-x^2=2x+1$. So that means for every $x\ge 0$, the difference between that square and the next square have a difference of $2x+1$. Now, we need to find an $x$ such that $2x+1\ge 1000$. Solving gives $x\ge \frac{999}{2}$, so $x\ge 500$. Now we need to find what range of numbers has to be square-free: $\overline{N000}\rightarrow \overline{N999}$ have to all be square-free. Let us first plug in a few values of $x$ to see if we can figure anything out. $x=500$, $x^2=250000$, and $(x+1)^2=251001$. Notice that this does not fit the criteria, because $250000$ is a square, whereas $\overline{N000}$ cannot be a square. This means, we must find a square, such that the last $3$ digits are close to $1000$, but not there, such as $961$ or $974$. Now, the best we can do is to keep on listing squares until we hit one that fits. We do not need to solve for each square: remember that the difference between consecutive squares are $2x+1$, so all we need to do is addition. After making a list, we find that $531^2=281961$, while $532^2=283024$. It skipped $282000$, so our answer is $\boxed{282}$.
Solution 2

Let $x$ be the number being squared. Based on the reasoning above, we know that $N$ must be at least $250$, so $x$ has to be at least $500$. Let $k$ be $x-500$. We can write $x^2$ as $(500+k)^2$, or $250000+1000k+k^2$. We can disregard $250000$ and $1000k$, since they won't affect the last three digits, which determines if there are any squares between $\overline{N000}\rightarrow \overline{N999}$. So we must find a square, $k^2$, such that it is under $1000$, but the next square is over $1000$. We find that $k=31$ gives $k^2=961$, and so $(k+1)^2=32^2=1024$. We can be sure that this skips a thousand because the $1000k$ increments it up $1000$ each time. Now we can solve for $x$: $(500+31)^2=281961$, while $(500+32)^2=283024$. We skipped $282000$, so the answer is $\boxed{282}$. 

2013 AIME II Problems/Problem 7
Problem 7

A group of clerks is assigned the task of sorting $1775$ files. Each clerk sorts at a constant rate of $30$ files per hour. At the end of the first hour, some of the clerks are reassigned to another task; at the end of the second hour, the same number of the remaining clerks are also reassigned to another task, and a similar assignment occurs at the end of the third hour. The group finishes the sorting in $3$ hours and $10$ minutes. Find the number of files sorted during the first one and a half hours of sorting.
Solution

There are $x$ clerks at the beginning, and $t$ clerks are reassigned to another task at the end of each hour. So, $30x+30(x-t)+30(x-2t)+30\cdot\frac{10}{60} \cdot (x-3t)=1775$, and simplify that we get $19x-21t=355$. Now the problem is to find a reasonable integer solution. Now we know $x= \frac{355+21t}{19}$, so $19$ divides $355+21t$, as long as $t$ is a integer, $19$ must divide $2t+355$. Now, we suppose that $19m=2t+355$, similarly we get $t=\frac{19m-355}{2}$, and so in order to get a minimum integer solution for $t$, it is obvious that $m=19$ works. So we get $t=3$ and $x=22$. One and a half hour's work should be $30x+15(x-t)$, so the answer is $\boxed{945}$. 

2013 AIME II Problems/Problem 8

A hexagon that is inscribed in a circle has side lengths $22$, $22$, $20$, $22$, $22$, and $20$ in that order. The radius of the circle can be written as $p+\sqrt{q}$, where $p$ and $q$ are positive integers. Find $p+q$.
Solution

<div align=center><img src="http://latex.artofproblemsolving.com/7/9/5/7955b7bc1329cfdbbbf8a77e28accf855d3bb187.png" height="150px" /></div>

Solution 1

Let us call the hexagon $ABCDEF$, where $AB=CD=DE=AF=22$, and $BC=EF=20$. We can just consider one half of the hexagon, $ABCD$, to make matters simpler. Draw a line from the center of the circle, $O$, to the midpoint of $BC$, $E$. Now, draw a line from $O$ to the midpoint of $AB$, $F$. Clearly, $\angle BEO=90^{\circ}$, because $BO=CO$, and $\angle BFO=90^{\circ}$, for similar reasons. Also notice that $\angle AOE=90^{\circ}$. Let us call $\angle BOF=\theta$. Therefore, $\angle AOB=2\theta$, and so $\angle BOE=90-2\theta$. Let us label the radius of the circle $r$. This means $\sin{\theta}=\frac{BF}{r}=\frac{11}{r}$ $\sin{(90-2\theta)}=\frac{BE}{r}=\frac{10}{r}$ Now we can use simple trigonometry to solve for $r$. Recall that $\sin{(90-\alpha)}=\cos(\alpha)$: That means $\sin{(90-2\theta)}=\cos{2\theta}=\frac{10}{r}$. Recall that $\cos{2\alpha}=1-2\sin^2{\alpha}$: That means $\cos{2\theta}=1-2\sin^2{\theta}=\frac{10}{r}$. Let $\sin{\theta}=x$. Substitute to get $x=\frac{11}{r}$ and $1-2x^2=\frac{10}{r}$ Now substitute the first equation into the second equation: $1-2\left(\frac{11}{r}\right)^2=\frac{10}{r}$ Multiplying both sides by $r^2$ and reordering gives us the quadratic $r^2-10r-242=0$ Using the quadratic equation to solve, we get that $r=5+\sqrt{267}$ (because $5-\sqrt{267}$ gives a negative value), so the answer is $5+267=\boxed{272}$.
Solution 2

Using the trapezoid $ABCD$ mentioned above, draw an altitude of the trapezoid passing through point $B$ onto $AD$ at point $E$. Now, we can use the pythagorean theorem: $(22^2-(r-10)^2)+10^2=r^2$. Expanding and combining like terms gives us the quadratic $r^2-10r-242=0$ and solving for $r$ gives $r=5+\sqrt{267}$. So the solution is $5+267=\boxed{272}$.
Solution 3

Join the diameter of the circle $AD$ and let the length be $d$. By Ptolemy's Theorem on trapezoid $ADEF$, $(AD)(EF) + (AF)(DE) = (AE)(DF)$. Since it is an isosceles trapezoid, both diagonals are equal. Let them be equal to $x$ each. Then

$20d + 22^2 = x^2$

Since $\angle AED$ is subtended by the diameter, it is right. Hence by the Pythagorean Theorem with right $\triangle AED$:

$(AE)^2 + (ED)^2 = (AD)^2$ $x^2 + 22^2 = d^2$

From the above equations, we have: $x^2 = d^2 - 22^2 = 20d + 22^2$ $d^2 - 20d = 2\times22^2$ $d^2 - 20d + 100 = 968+100 = 1068$ $(d-10) = \sqrt{1068}$ $d = \sqrt{1068} + 10 = 2\times(\sqrt{267}+5)$

Since the radius is half the diameter, it is $\sqrt{267}+5$, so the answer is $5+267 \Rightarrow \boxed{272}$. 

2013 AIME II Problems/Problem 9

A $7\times 1$ board is completely covered by $m\times 1$ tiles without overlap; each tile may cover any number of consecutive squares, and each tile lies completely on the board. Each tile is either red, blue, or green. Let $N$ be the number of tilings of the $7\times 1$ board in which all three colors are used at least once. For example, a $1\times 1$ red tile followed by a $2\times 1$ green tile, a $1\times 1$ green tile, a $2\times 1$ blue tile, and a $1\times 1$ green tile is a valid tiling. Note that if the $2\times 1$ blue tile is replaced by two $1\times 1$ blue tiles, this results in a different tiling. Find the remainder when $N$ is divided by $1000$.
Solution

Firstly, we consider how many different ways possible to divide the $7\times 1$ board. We ignore the cases of 1 or 2 pieces since we need at least one tile of each color.

Three pieces: $5+1+1$, $4+2+1$, $4+1+2$, etc, $\binom{6}{2}=15$ ways in total

Four pieces: $\binom{6}{3}=20$

Five pieces: $\binom{6}{4}=15$

Six pieces: $\binom{6}{5}=6$

Seven pieces: $\binom{6}{6}=1$

Secondly, we use Principle of Inclusion-Exclusion to consider how many ways to color them:

Three pieces: $3^3-3\times 2^3+3=6$

Four pieces: $3^4-3\times 2^4+3=36$

Five pieces: $3^5-3\times 2^5+3=150$

Six pieces: $3^6-3\times 2^6+3=540$

Seven pieces: $3^7-3\times 2^7+3=1806$

Finally, we combine them together: $15\times 6+20\times 36+15\times 150+6\times 540+1\times 1806= 8106$.

So the answer is $\boxed{106}$.
Solution 2 (Recursive)

3 colors is a lot. How many ways can we tile an n x 1 board with one color? It's going to be $2^{n-1}$ because if you draw out the $n$ spaces, you can decide whether each of the borders between the tiles are either there or not there. There are $n-1$ borders so there are $2^{n-1}$ tilings. Define a one-tiling of an mx1 as $f_1(m)$

Now let's look at two colors. Let's see if we can get a two-tiling of an (n+1) x 1 based off a n x 1. There are 2 cases we should consider:

1) The n x 1 was a one-coloring and the block we are going to add consists of the second color. Clearly the number of ways we can do this is just $f_1(n)$

2) The n x 1 was a two-color tiling so now we've got 3 cases to form the (n+1) x 1: We can either add a block of the first color, the second color, or we can adjoin a block to the last block in the n x 1.

This gives us $f_2(n+1)=f_1(n)+3f_2(n)$

Time to tackle the 3-color tiling. Again, we split into 2 cases:

1) The n x 1 was a two-color tiling, and the block we are adding is of the 3rd color. This gives $f_2(n)$ ways but we have to multiply by 3C2 because we have to pick 2 different colors for the two-color tiling.

2) The n x 1 was a 3-color tiling, and we have to consider what we can do with the block that we are adding. It can be any of the 3 colors, or we can adjoin it to whatever was the last block in the n x 1. This gives $4f_3(n)$

So in total we have $f_3(n+1)=3f_2(n)+4f_3(n)$.

Finally, we just sorta bash through the computation to get $f_3(7)=8\boxed{106}$ 

2013 AIME II Problems/Problem 10

Problem 10

Given a circle of radius $\sqrt{13}$, let $A$ be a point at a distance $4 + \sqrt{13}$ from the center $O$ of the circle. Let $B$ be the point on the circle nearest to point $A$. A line passing through the point $A$ intersects the circle at points $K$ and $L$. The maximum possible area for $\triangle BKL$ can be written in the form $\frac{a - b\sqrt{c}}{d}$, where $a$, $b$, $c$, and $d$ are positive integers, $a$ and $d$ are relatively prime, and $c$ is not divisible by the square of any prime. Find $a+b+c+d$.
Solution 1

<div align=center><img src="http://latex.artofproblemsolving.com/9/6/6/966ad8a0085448892e8afeb96c979c2389133638.png" height="150px" /></div>

Now we put the figure in the Cartesian plane, let the center of the circle $O (0,0)$, then $B (\sqrt{13},0)$, and $A(4+\sqrt{13},0)$

The equation for Circle O is $x^2+y^2=13$, and let the slope of the line$AKL$ be $k$, then the equation for line$AKL$ is $y=k(x-4-\sqrt{13})$.

Then we get $(k^2+1)x^2-2k^2(4+\sqrt{13})x+k^2\cdot (4+\sqrt{13})^2-13=0$. According to Vieta's Formulas, we get

$x_1+x_2=\frac{2k^2(4+\sqrt{13})}{k^2+1}$, and $x_1x_2=\frac{(4+\sqrt{13})^2\cdot k^2-13}{k^2+1}$

So, $LK=\sqrt{1+k^2}\cdot \sqrt{(x_1+x_2)^2-4x_1x_2}$

Also, the distance between $B$ and $LK$ is $\frac{k\times \sqrt{13}-(4+\sqrt{13})\cdot k}{\sqrt{1+k^2}}=\frac{-4k}{\sqrt{1+k^2}}$

So the area $S=0.5ah=\frac{-4k\sqrt{(16-8\sqrt{13})k^2-13}}{k^2+1}$

Then the maximum value of $S$ is $\frac{104-26\sqrt{13}}{3}$

So the answer is $104+26+13+3=\boxed{146}$.
Solution 2

Draw $OC$ perpendicular to $KL$ at $C$. Draw $BD$ perpendicular to $KL$ at $D$.

$\frac{\triangle OKL}{\triangle BKL} = \frac{OC}{BD} = \frac{AO}{AB} = \frac{4+\sqrt{13}}{4}$

Therefore, to maximize area of $\triangle BKL$, we need to maximize area of $\triangle OKL$.

$\triangle OKL = \frac12 r^2 \sin{\angle KOL}$

So when area of $\triangle OKL$ is maximized, $\angle KOL = \frac{\pi}{2}$.

Eventually, we get $\triangle BKL= (\frac12 \cdot \sqrt{13}^2)\cdot(\frac{4}{4+\sqrt{13}})=\frac{104-26\sqrt{13}}{3}$

So the answer is $104+26+13+3=\boxed{146}$. 

2013 AIME II Problems/Problem 11

Problem 11

Let $A = \{1, 2, 3, 4, 5, 6, 7\}$, and let $N$ be the number of functions $f$ from set $A$ to set $A$ such that $f(f(x))$ is a constant function. Find the remainder when $N$ is divided by $1000$.
Solution 1

Let the range be $R=\{f(x)|x \in A\}$

Let the constant function be $f(f(x))=c$, clearly, $c \in R$

For every $a \in R$, since $f(f(x))=c$, we must have $f(a)=c$.

Now we enumerate through possible sizes of $R$. $|R|$ cannot be more than 4 since all the numbers in $R$ must map to $c$ and any number other than $c$ in $R$ must have at least one number mapped to it.

1. $|R|=1$

We have $\binom{7}{1}=7$ choices for $R$, $\binom{1}{1}=1$ choices for $c$, and only 1 way to map the 6 numbers that are not in $R$ (remaining numbers) since the range $R$ is size 1. In total we have $7\cdot 1\cdot 1=7$ choices.

2. $|R|=2$

We have $\binom{7}{2}=21$ choices for $R$, $\binom{2}{1}=2$ choices for $c$.

Assigning the 5 numbers to the two elements in $R$ yields $2^5=32$ choices. However, one of these choices is to assign all 5 remaining numbers to $c$, resulting in $R$ being only of size 1. Exclude that and we have $32-1=31$ choices.

In total we have $21*2*31=1302$ choices.

3. $|R|=3$

We have $\binom{7}{3}=35$ choices for $R$, $\binom{3}{1}=3$ choices for $c$.

Notice that assigning the remaining numbers is equivalent to distributing 4 numbers into three groups where two of the three groups must receive at least 1 number (since we already have all numbers in $R$ mapped to $c$, the restriction is not necessary for the $c$ group). Ignoring the restrictions we have $3^4$ ways. Now minus the two cases where one of the two restricted group is left empty. There are 2 ways to choose the left-out group, and $2^4$ ways to distribute numbers for each choice. Finally, by inclusion-exclusion principle, we need to add back the case in which both restricted groups are left empty, which has only $1^4=1$ occurrence. In all, we have $3^4-2*2^4+1^4=50$ ways to assign the remaining numbers.

In total, we have $35*3*50=5250$ choices for this case.

4. $|R|=4$

We have $\binom{7}{4}=35$ choices for $R$, $\binom{4}{1}=4$ choices for $c$.

Now we have 3 "groups" to fill and only 3 remaining numbers. Thus each group must receive exactly 1 number. However, we still have $3!=6$ ways to permute the mappings.

Thus, we have $35*4*6=840$ choices in total.

To summarize, we have $7+1302+5250+840=7399$ different mappings possible. So the answer is $\boxed{399}$.
Solution 2

Any such function can be constructed by distributing the elements of $A$ on three tiers.

The bottom tier contains the constant value, $c=f(f(x))$ for any $x$. (Obviously $f(c)=c$.)

The middle tier contains $k$ elements $x\ne c$ such that $f(x)=c$, where $1\le k\le 6$.

The top tier contains $6-k$ elements such that $f(x)$ equals an element on the middle tier.

There are $7$ choices for $c$. Then for a given $k$, there are $\tbinom6k$ ways to choose the elements on the middle tier, and then $k^{6-k}$ ways to draw arrows down from elements on the top tier to elements on the middle tier.

Thus $N=7\cdot\sum_{k=1}^6\tbinom6k\cdot k^{6-k}=7399$, giving the answer $\boxed{399}$. 

2013 AIME II Problems/Problem 12
Problem 12

Let $S$ be the set of all polynomials of the form $z^3 + az^2 + bz + c$, where $a$, $b$, and $c$ are integers. Find the number of polynomials in $S$ such that each of its roots $z$ satisfies either $|z| = 20$ or $|z| = 13$.
Solution

Every cubic in real coefficients has to have either three real roots or one real and two nonreal roots which are conjugates. This follows from Vieta's formulas.

Case 1: $f(z)=(z-r)(z-\omega)(z-\omega^*)$, where $r\in \mathbb{R}$, $\omega$ is nonreal, and $\omega^*$ is the complex conjugate of omega (note that we may assume that $\Im(\omega)>0$).

The real root $r$ must be one of $-20$, $20$, $-13$, or $13$. By Viète's formulas, $a=-(r+\omega+\omega^*)$, $b=|\omega|^2+r(\omega+\omega^*)$, and $c=-r|\omega|^2$. But $\omega+\omega^*=2\Re{(\omega)}$ (i.e., adding the conjugates cancels the imaginary part). Therefore, to make $a$ is an integer, $2\Re{(\omega)}$ must be an integer. Conversely, if $\omega+\omega^*=2\Re{(\omega)}$ is an integer, then $a,b,$ and $c$ are clearly integers. Therefore $2\Re{(\omega)}\in \mathbb{Z}$ is equivalent to the desired property. Let $\omega=\alpha+i\beta$.

Subcase 1.1: $|\omega|=20$.

In this case, $\omega$ lies on a circle of radius $20$ in the complex plane. As $\omega$ is nonreal, we see that $\beta\ne 0$. Hence $-20<\Re{(\omega)}< 20$, or rather $-40<2\Re{(\omega)}< 40$. We count $79$ integers in this interval, each of which corresponds to a unique complex number on the circle of radius $20$ with positive imaginary part.

Subcase 1.2: $|\omega|=13$.

In this case, $\omega$ lies on a circle of radius $13$ in the complex plane. As $\omega$ is nonreal, we see that $\beta\ne 0$. Hence $-13<\Re{(\omega)}< 13$, or rather $-26<2\Re{(\omega)}< 26$. We count $51$ integers in this interval, each of which corresponds to a unique complex number on the circle of radius $13$ with positive imaginary part.

Therefore, there are $79+51=130$ choices for $\omega$. We also have $4$ choices for $r$, hence there are $4\cdot 130=520$ total polynomials in this case.

Case 2: $f(z)=(z-r_1)(z-r_2)(z-r_3)$, where $r_1,r_2,r_3$ are all real.

In this case, there are four possible real roots, namely $\pm 13, \pm20$. Let $p$ be the number of times that $13$ appears among $r_1,r_2,r_3$, and define $q,r,s$ similarly for $-13,20$, and $-20$, respectively. Then $a+b+c+d=3$ because there are three roots. We wish to find the number of ways to choose nonnegative integers $a,b,c,d$ that satisfy that equation. By balls and urns, these can be chosen in $\binom{6}{3}=20$ ways.

Therefore, there are a total of $520+20=\boxed{540}$ polynomials with the desired property. 

2013 AIME II Problems/Problem 13

Problem 13

In $\triangle ABC$, $AC = BC$, and point $D$ is on $\overline{BC}$ so that $CD = 3\cdot BD$. Let $E$ be the midpoint of $\overline{AD}$. Given that $CE = \sqrt{7}$ and $BE = 3$, the area of $\triangle ABC$ can be expressed in the form $m\sqrt{n}$, where $m$ and $n$ are positive integers and $n$ is not divisible by the square of any prime. Find $m+n$.
Solution
Solution 1

After drawing the figure, we suppose $BD=a$, so that $CD=3a$, $AC=4a$, and $AE=ED=b$.

Using cosine law for $\triangle AEC$ and $\triangle CED$,we get

$b^2+7-2\sqrt{7}\cdot \cos(\angle CED)=9a^2\qquad (1)$ $b^2+7+2\sqrt{7}\cdot \cos(\angle CED)=16a^2\qquad (2)$ So, $(1)+(2)$, we get$2b^2+14=25a^2. \qquad (3)$

Using cosine law in $\triangle ACD$, we get

$b^2+9a^2-2\cdot 2b\cdot 3a\cdot \cos(\angle ADC)=16a^2$

So, $\cos(\angle ADC)=\frac{7a^2-4b^2}{12ab}.\qquad (4)$

Using cosine law in $\triangle EDC$ and $\triangle EDB$, we get

$b^2+9a^2-2\cdot 3a\cdot b\cdot \cos(\angle ADC)=7\qquad (5)$

$b^2+a^2+2\cdot a\cdot b\cdot \cos(\angle ADC)=9.\qquad (6)$

$(5)+(6)$, and according to $(4)$, we can get $37a^2+2b^2=48. \qquad (7)$

Using $(3)$ and $(7)$, we can solve $a=1$ and $b=\frac{\sqrt{22}}{2}$.

Finally, we use cosine law for $\triangle ADB$,

$4(\frac{\sqrt{22}}{2})^2+1+2\cdot\2(\frac{\sqrt{22}}{2})\cdot \cos(ADC)=AB^2$

then $AB=2\sqrt{7}$, so the height of this $\triangle ABC$ is $\sqrt{4^2-(\sqrt{7})^2}=3$.

Then the area of $\triangle ABC$ is $3\sqrt{7}$, so the answer is $\boxed{010}$.
Solution 2

Let $X$ be the foot of the altitude from $C$ with other points labelled as shown below. 

<div align=center><img src="http://latex.artofproblemsolving.com/3/0/0/300cd8d6dbbf80c2dfbabacba7df870082ee7f30.png" height="150px" /></div>

Now we proceed using mass points. To balance along the segment $BC$, we assign $B$ a mass of $3$ and $C$ a mass of $1$. Therefore, $D$ has a mass of $4$. As $E$ is the midpoint of $AD$, we must assign $A$ a mass of $4$ as well. This gives $L$ a mass of $5$ and $M$ a mass of $7$.

Now let $AB=b$ be the base of the triangle, and let $CX=h$ be the height. Then as $AM:MB=3:4$, and as $AX=\frac{b}{2}$, we know that $MX=\frac{b}{2}-\frac{3b}{7}=\frac{b}{14}.$ Also, as $CE:EM=7:1$, we know that $EM=\frac{1}{\sqrt{7}}$. Therefore, by the Pythagorean Theorem on $\triangle {XCM}$, we know that $\frac{b^2}{196}+h^2=\left(\sqrt{7}+\frac{1}{\sqrt{7}}\right)^2=\frac{64}{7}.$

Also, as $LE:BE=5:3$, we know that $BL=\frac{8}{5}\cdot 3=\frac{24}{5}$. Furthermore, as $\triangle YLA\sim \triangle XCA$, and as $AL:LC=1:4$, we know that $LY=\frac{h}{5}$ and $AY=\frac{b}{10}$, so $YB=\frac{9b}{10}$. Therefore, by the Pythagorean Theorem on $\triangle BLY$, we get $\frac{81b^2}{100}+\frac{h^2}{25}=\frac{576}{25}.$ Solving this system of equations yields $b=2\sqrt{7}$ and $h=3$. Therefore, the area of the triangle is $3\sqrt{7}$, giving us an answer of $\boxed{010}$.
Solution 3

Let the coordinates of A, B and C be (-a, 0), (a, 0) and (0, h) respectively. Then $D = (\frac{3a}{4}, \frac{h}{4})$ and $E = (-\frac{a}{8},\frac{h}{8}).$ $EC^2 = 7$ implies $a^2 + 49h^2 = 448$; $EB^2 = 9$ implies $81a^2 + h^2 = 576.$ Solve this system of equations simultaneously, $a=\sqrt{7}$ and $h=3$. Area of the triangle is ah = $3\sqrt{7}$, giving us an answer of $\boxed{010}$.
Solution 4

<div align=center><img src="http://latex.artofproblemsolving.com/e/2/0/e2089b73fd2142dda2b51fe3e27e45b5e9e45459.png" height="150px" /></div>

(Thanks to writer of Solution 2)

Let $BD = x$. Then $CD = 3x$ and $AC = 4x$. Also, let $AE = ED = l$. Using Stewart's Theorem on $\bigtriangleup CEB$ gives us the equation $(x)(3x)(4x) + (4x)(l^2) = 27x + 7x$ or, after simplifying, $4l^2 = 34 - 12x^2$. We use Stewart's again on $\bigtriangleup CAD$: $(l)(l)(2l) + 7(2l) = (16x^2)(l) + (9x^2)(l)$, which becomes $2l^2 = 25x^2 - 14$. Substituting $2l^2 = 17 - 6x^2$, we see that $31x^2 = 31$, or $x = 1$. Then $l^2 = \frac{11}{2}$.

We now use Law of Cosines on $\bigtriangleup CAD$. $(2l)^2 = (4x)^2 + (3x)^2 - 2(4x)(3x)\cos C$. Plugging in for $x$ and $l$, $22 = 16 + 9 - 2(4)(3)\cos C$, so $\cos C = \frac{1}{8}$. Using the Pythagorean trig identity $\sin^2 + \cos^2 = 1$, $\sin^2 C = 1 - \frac{1}{64}$, so $\sin C = \frac{3\sqrt{7}}{8}$.

$[ABC] = \frac{1}{2} AC \cdot BC \sin C = (\frac{1}{2})(4)(4)(\frac{3\sqrt{7}}{8}) = 3\sqrt{7}$, and our answer is $3 + 7 = \boxed{010}$. 

2013 AIME II Problems/Problem 14

Problem 14

For positive integers $n$ and $k$, let $f(n, k)$ be the remainder when $n$ is divided by $k$, and for $n > 1$ let $F(n) = \max_{\substack{1\le k\le \frac{n}{2}}} f(n, k)$. Find the remainder when $\sum\limits_{n=20}^{100} F(n)$ is divided by $1000$.
Solution
Easy solution without strict proof

We can find that

$20\equiv 6 \mod{7}$

$21\equiv 5 \mod{8}$

$22\equiv 6 \mod{8}$

$23\equiv 7 \mod{8}$

$24\equiv 6 \mod{9}$

$25\equiv 7 \mod{9}$

$26\equiv 8 \mod{9}$

Observing these and we can find that the reminders are in groups of three continuous integers, considering this is true, and we get

$99\equiv 31 \mod{34}$

$100\equiv 32 \mod{34}$

So the sum is $5+3\times(6+...+31)+32\times 2=1512$, so the answer is $\boxed{512}$.
The Proof

The solution presented above does not prove why $F(x)$ is found by dividing $x$ by $3$. Indeed, that is the case, as rigorously shown below.

Consider the case where $x = 3k$. We shall prove that $F(x) = f(x, k+1)$. For all $x/2 >= n > k+1, x = 2n + q$, where $0 <= q <= n$. This is because $x > 3k + 3 = 3n$ and $x < n$. Also, as n increases, $q$ decreases. Thus, $q = f(x, n) < f(x, k+1) = k - 2$ for all $n > k+1$. Consider all $n < k+1. f(x, k) = 0$ and $f(x, k-1) = 3$. Also, $0 < f(x, k-2) < k-2$. Thus, for $k > 5, f(x, k+1) > f(x, n)$ for $n < k+1$.

Similar proofs apply for $x = 3k + 1$ and $x = 3k + 2$. The reader should feel free to derive these proofs himself.
Generalized Solution

$Lemma:$ Highest remainder when $n$ is divided by $1 <= k <= n/2$ is obtained for $k_0 = (n + (3 - n \mod{3}))/3$ and the remainder thus obtained is $(n - k_0*2) = [(n - 6)/3 + (2/3)*n \mod{3}]$.

$Note:$ This is the second highest remainder when $n$ is divided by $1<= k <= n$ and the highest remainder occurs when $n$ is divided by $k_M$ = $(n+1)/2$ for odd $n$ and $k_M$ = $(n+2)/2$ for even $n$.

Using the lemma above:

$\sum\limits_{n=20}^{100} F(n) = \sum\limits_{n=20}^{100} [(n - 6)/3 + (2/3)*n \mod{3}]$ $= [(120*81/2)/3 - 2*81 + (2/3)*81] = 1512$

So the answer is $\boxed{512}$

Proof of Lemma: It is similar to $The Proof$ stated above. 

2013 AIME II Problems/Problem 15

Problem 15

Let $A,B,C$ be angles of an acute triangle with $$\begin{align*} \cos^2 A + \cos^2 B + 2 \sin A \sin B \cos C &= \frac{15}{8} \text{ and} \\ \cos^2 B + \cos^2 C + 2 \sin B \sin C \cos A &= \frac{14}{9} \end{align*}$$ There are positive integers $p$, $q$, $r$, and $s$ for which $\cos^2 C + \cos^2 A + 2 \sin C \sin A \cos B = \frac{p-q\sqrt{r}}{s},$ where $p+q$ and $s$ are relatively prime and $r$ is not divisible by the square of any prime. Find $p+q+r+s$.
Solutions
Solution 1

Let's draw the triangle. Since the problem only deals with angles, we can go ahead and set one of the sides to a convenient value. Let $BC = \sin{A}$.

By the Law of Sines, we must have $CA = \sin{B}$ and $AB = \sin{C}$.

Now let us analyze the given:

$$\begin{align*} \cos^2A + \cos^2B + 2\sin A\sin B\cos C &= 1-\sin^2A + 1-\sin^2B + 2\sin A\sin B\cos C \\ &= 2-(\sin^2A + \sin^2B - 2\sin A\sin B\cos C) \end{align*}$$

Now we can use the Law of Cosines to simplify this:

$= 2-\sin^2C$


Therefore: $\sin C = \sqrt{\frac{1}{8}},\cos C = \sqrt{\frac{7}{8}}.$ Similarly, $\sin A = \sqrt{\frac{4}{9}},\cos A = \sqrt{\frac{5}{9}}.$ Note that the desired value is equivalent to $2-\sin^2B$, which is $2-\sin^2(A+C)$. All that remains is to use the sine addition formula and, after a few minor computations, we obtain a result of $\frac{111-4\sqrt{35}}{72}$. Thus, the answer is $111+4+35+72 = \boxed{222}$.
Solution 2

Let us use the identity $\cos^2A+\cos^2B+\cos^2C+2\cos A \cos B \cos C=1$ .

Add $$\begin{align*} \cos^2 C+2(\cos A\cos B-\sin A \sin B)\cos C \end{align*}$$ to both sides of the first given equation.



Thus, as $$\begin{align*} \cos A\cos B-\sin A\sin B=\cos (A+B)=-\cos C ,\end{align*}$$ we have $$\begin{align*} \frac{15}{8}-2\cos^2 C +\cos^2 C=1, \end{align*}$$ so $\cos C$ is $\sqrt{\frac{7}{8}}$ and therefore $\sin C$ is $\sqrt{\frac{1}{8}}$.

Similarily, we have $\sin A =\frac{2}{3}$ and $\cos A=\sqrt{\frac{14}{9}-1}=\sqrt{\frac{5}{9}}$ and the rest of the solution proceeds as above.
Solution 3

Let $$\begin{align*} \cos^2 A + \cos^2 B + 2 \sin A \sin B \cos C &= \frac{15}{8} \text{ ------ (1)}\\ \cos^2 B + \cos^2 C + 2 \sin B \sin C \cos A &= \frac{14}{9} \text{ ------ (2)}\\ \cos^2 C + \cos^2 A + 2 \sin C \sin A \cos B &= x \text{ ------ (3)}\\ \end{align*}$$

Adding (1) and (3) we get: $2 \cos^2 A + \cos^2 B + \cos^2 C + 2 \sin A( \sin B \cos C + \sin C \cos B) = \frac{15}{8} + x$ or $2 \cos^2 A + \cos^2 B + \cos^2 C + 2 \sin A \sin (B+C) = \frac{15}{8} + x$ or $2 \cos^2 A + \cos^2 B + \cos^2 C + 2 \sin ^2 A = \frac{15}{8} + x$ or $\cos^2 B + \cos^2 C = x - \frac{1}{8} --- (4)$

Similarly adding (2) and (3) we get: $\cos^2 A + \cos^2 B = x - \frac{4}{9} --- (5)$ Similarly adding (1) and (2) we get: $\cos^2 A + \cos^2 C = \frac{14}{9} - \frac{1}{8} --- (6)$

And (4) - (5) gives: $\cos^2 C - \cos^2 A = \frac{4}{9} - \frac{1}{8} --- (7)$

Now (6) - (7) gives: $\cos^2 A = \frac{5}{9}$ or $\cos A = \sqrt{\frac{5}{9}}$ and $\sin A = \frac{2}{3}$ so $\cos C$ is $\sqrt{\frac{7}{8}}$ and therefore $\sin C$ is $\sqrt{\frac{1}{8}}$

Now $\sin B = \sin(A+C)$ can be computed first and then $\cos^2 B$ is easily found.

Thus $\cos^2 B$ and $\cos^2 C$ can be plugged into (4) above to give x = $\frac{111-4\sqrt{35}}{72}$.

Hence the answer is = $111+4+35+72 = \boxed{222}$. 

2013 AIME II Answer Key
1.	275
    2.881
    3.350
    4.040 
    5.020 
    6.282 
    7.945 
    8.272 
    9.106 
    10.146 
    11.399 
    12.540 
    13.010 
    14.512 
    15.222

