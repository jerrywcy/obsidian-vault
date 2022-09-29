#2018 AIME II Problems
##Problem 1
Points $A$, $B$, and $C$ lie in that order along a straight path where the distance from $A$ to $C$ is $1800$ meters. Ina runs twice as fast as Eve, and Paul runs twice as fast as Ina. The three runners start running at the same time with Ina starting at $A$ and running toward $C$, Paul starting at $B$ and running toward $C$, and Eve starting at $C$ and running toward $A$. When Paul meets Eve, he turns around and runs toward $A$. Paul and Ina both arrive at $B$ at the same time. Find the number of meters from $A$ to $B$.
Solution 1
We know that in the same amount of time given, Ina will run twice the distance of Eve, and Paul would run quadruple the distance of Eve. Let's consider the time it takes for Paul to meet Eve: Paul would've run 4 times the distance of Eve, which we can denote as $d$. Thus, the distance between $B$ and $C$ is $4d+d=5d$. In that given time, Ina would've run twice the distance $d$, or $2d$ units.
Now, when Paul starts running back towards $A$, the same amount of time would pass since he will meet Ina at his starting point. Thus, we know that he travels another $4d$ units and Ina travels another $2d$ units.
Therefore, drawing out the diagram, we find that $2d+2d+4d+d=9d=1800 \implies d=200$, and distance between $A$ and $B$ is the distance Ina traveled, or $4d=4(200)=\boxed{800}$
Solution 2
Let $x$ be the distance from $A$ to $B$. Then the distance from $B$ to $C$ is $1800-x$. Since Eve is the slowest, we can call her speed $v$, so that Ina's speed is $2v$ and Paul's speed is $4v$.
For Paul and Eve to meet, they must cover a total distance of $1800-x$ which takes them a time of $\frac{1800-x}{4v+v}$. Paul must run the same distance back to $B$, so his total time is $\frac{2(1800-x)}{5v}$.
For Ina to reach $B$, she must run a distance of $x$ at a speed of $2v$, taking her a time of $\frac{x}{2v}$.
Since Paul and Ina reach $B$ at the same time, we know that $\frac{2(1800-x)}{5v} = \frac{x}{2v}$ (notice that $v$ cancels out on both sides). Solving the equation gives $x = \boxed{800}$.
##Problem 2
Let $a_{0} = 2$, $a_{1} = 5$, and $a_{2} = 8$, and for $n > 2$ define $a_{n}$ recursively to be the remainder when $4$($a_{n-1}$ $+$ $a_{n-2}$ $+$ $a_{n-3}$) is divided by $11$. Find $a_{2018}$ • $a_{2020}$ • $a_{2022}$.
Solution
When given a sequence problem, one good thing to do is to check if the sequence repeats itself or if there is a pattern.
After computing more values of the sequence, it can be observed that the sequence repeats itself every 10 terms starting at $a_{0}$.
$a_{0} = 2$, $a_{1} = 5$, $a_{2} = 8$, $a_{3} = 5$, $a_{4} = 6$, $a_{5} = 10$, $a_{6} = 7$, $a_{7} = 4$, $a_{8} = 7$, $a_{9} = 6$, $a_{10} = 2$, $a_{11} = 5$, $a_{12} = 8$, $a_{13} = 5$
We can simplify the expression we need to solve to $a_{8}$ • $a_{10}$ • $a_{2}$.
Our answer is $7$ • $2$ • $8$ $= \boxed{112}$.
##Problem 3
Find the sum of all positive integers $b < 1000$ such that the base-$b$ integer $36_{b}$ is a perfect square and the base-$b$ integer $27_{b}$ is a perfect cube.
Solution
The first step is to convert $36_{b}$ and $27_{b}$ into base-10 numbers. Then, we can write $36_{b}$ $= 3b + 6$ and $27_{b}$ $= 2b + 7$. It should also be noted that $8 \leq b < 1000$.
Because there are less perfect cubes than perfect squares for the restriction we are given on $b$, it is best to list out all the perfect cubes. Since the maximum $b$ can be is 1000 and $2$ • $1000 + 7 = 2007$, we can list all the perfect cubes less than 2007.
Now, $2b + 7$ must be one of $3^3, 4^3, ... , 12^3$. However, $2b + 7$ will always be odd, so we can eliminate the cubes of the even numbers and change our list of potential cubes to $3^3, 5^3, 7^3, 9^3$, and $11^3$.
Because $3b + 6$ is a perfect square and is clearly divisible by 3, it must be divisible by 9, so $b + 2$ is divisible by 3. Thus the cube, which is  $2b + 7 = 2(b + 2) + 3$, must also be divisible by 3. Therefore, the only cubes that $2b + 7$ could potentially be now are $3^3$ and $9^3$.
We need to test both of these cubes to make sure $3b + 6$ is a perfect square.
If we set $3^3 (27)$ equal to $2b + 7$, $b = 10$. If we plug this value of b into $3b + 6$, the expression equals $36$, which is indeed a perfect square.
If we set $9^3 (729)$ equal to $2b + 7$, $b = 361$. If we plug this value of b into $3b + 6$, the expression equals $1089$, which is $33^2$.
We have proven that both $b = 10$ and $b = 361$ are the only solutions, so $10 + 361 =$ $\boxed{371}$.
##Problem 4
In equiangular octagon $CAROLINE$, $CA = RO = LI = NE =$ $\sqrt{2}$ and $AR = OL = IN = EC = 1$. The self-intersecting octagon $CORNELIA$ encloses six non-overlapping triangular regions. Let $K$ be the area enclosed by $CORNELIA$, that is, the total area of the six triangular regions. Then $K =$ $\dfrac{a}{b}$, where $a$ and $b$ are relatively prime positive integers. Find $a + b$.
Solution
We can draw $CORNELIA$ and introduce some points.
![](http://wiki-images.artofproblemsolving.com/thumb/b/b6/2018_AIME_II_Problem_4.png/300px-2018_AIME_II_Problem_4.png)
The diagram is essentially a 3x3 grid where each of the 9 squares making up the grid have a side length of 1.
In order to find the area of $CORNELIA$, we need to find 4 times the area of $\bigtriangleup$$ACY$ and 2 times the area of $\bigtriangleup$$YZW$.
Using similar triangles $\bigtriangleup$$ARW$ and $\bigtriangleup$$YZW$, $YZ$ $=$ $\frac{1}{3}$. Therefore, the area of $\bigtriangleup$$YZW$ is $\frac{1}{3}\cdot\frac{1}{2}\cdot\frac{1}{2}$ $=$ $\frac{1}{12}$
Since $YZ$ $=$ $\frac{1}{3}$ and $XY = ZQ$, $XY$ $=$ $\frac{1}{3}$ and $CY$ $=$ $\frac{4}{3}$.
Therefore, the area of $\bigtriangleup$$ACY$ is $\frac{4}{3}\cdot$ $1$ $\cdot$ $\frac{1}{2}$ $=$ $\frac{2}{3}$
Our final answer is $\frac{1}{12}$ $\cdot$ $2$ $+$ $\frac{2}{3}$ $\cdot$ $4$ $=$ $\frac{17}{6}$
$17 + 6 =$ $\boxed{023}$
##Problem 5
Suppose that $x$, $y$, and $z$ are complex numbers such that $xy = -80 - 320i$, $yz = 60$, and $zx = -96 + 24i$, where $i$ $=$ $\sqrt{-1}$. Then there are real numbers $a$ and $b$ such that $x + y + z = a + bi$. Find $a^2 + b^2$.
Solution 1
First we evaluate the magnitudes. $|xy|=80\sqrt{17}$, $|yz|=60$, and $|zx|=24\sqrt{17}$. Therefore, $|x^2y^2z^2|=17\cdot80\cdot60\cdot24$, or $|xyz|=240\sqrt{34}$. Divide to find that $|z|=3\sqrt{2}$, $|x|=40\sqrt{34}$, and $|y|=10\sqrt{2}$.
![](http://latex.artofproblemsolving.com/2/7/1/271542068c23e290f561cc1e38a5944ded31a5f3.png)
This allows us to see that the argument of $y$ is $\frac{\pi}{4}$, and the argument of $z$ is $-\frac{\pi}{4}$. We need to convert the polar form to a standard form. Simple trig identities show $y=10+10i$ and $z=3-3i$. More division is needed to find what $x$ is.
$x=-20-12i$
$x+y+z=-7-5i$
$(-7)^2+(-5)^2=\boxed{074}$
$QED\blacksquare$
Written by a1b2
Solution 2
Dividing the first equation by the second equation given, we find that $\frac{xy}{yz}=\frac{x}{z}=\frac{-80-320i}{60}=-\frac{4}{3}-\frac{16}{3}i \implies x=z\left(-\frac{4}{3}-\frac{16}{3}i\right)$. Substituting this into the third equation, we get $z^2=\frac{-96+24i}{-\frac{4}{3}-\frac{16}{3}i}=3\cdot \frac{-24+6i}{-1-4i}=3\cdot \frac{(-24+6i)(-1+4i)}{1+16}=3\cdot \frac{-102i}{17}=-18i$. Taking the square root of this is equivalent to halving the argument and taking the square root of the magnitude. Furthermore, the second equation given tells us that the argument of $y$ is the negative of that of $z$, and their magnitudes multiply to $60$. Thus we have $z=\sqrt{-18i}=3-3i$ and $3\sqrt{2}\cdot |y|=60 \implies |y|=10\sqrt{2} \implies y=10+10i$. To find $x$, we can use the previous substitution we made to find that $x=z\left(-\frac{4}{3}-\frac{16}{3}i\right)=-\frac{4}{3}\cdot (3-3i)(1+4i)=-4(1-i)(1+4i)=-4(5+3i)=-20-12i$ Therefore, $x+y+z=(-20+10+3)+(-12+10-3)i=-7-5i \implies a^2+b^2=(-7)^2+(-5)^2=49+25=\boxed{074}$ Solution by ktong
Solution 3
We are given that $xy=-80-320i$. Thus $y=\frac{-80-320i}{x}$. We are also given that $xz= -96+24i$. Thus $z=\frac{-96+24i}{x}$. We are also given that $yz$ = $60$. Substitute $y=\frac{-80-320i}{x}$ and $z=\frac{-96+24i}{x}$ into $yz$ = $60$. We have $\frac{(-80-320i)(-96+24i)}{x^2}=60$. Multiplying out $(-80-320i)(-96+24i)$ we get $(1920)(8+15i)$. Thus  $\frac{1920(8+15i)}{x^2} =60$. Simplifying this fraction we get $\frac{32(8+15i)}{x^2}=1$. Cross-multiplying the fractions we get $x^2=32(8+15i)$ or $x^2= 256+480i$. Now we can rewrite this as $x^2-256=480i$. Let $x= (a+bi)$.Thus $x^2=(a+bi)^2$ or $a^2+2abi-b^2$. We can see that $a^2+2abi-b^2-256=480i$ and thus $2abi=480i$ or $ab=240$.We also can see that $a^2-b^2-256=0$ because there is no real term in $480i$. Thus $a^2-b^2=256$ or $(a+b)(a-b)=256$. Using the two equations $ab=240$ and $(a+b)(a-b)=256$ we solve by doing system of equations that $a=-20$ and $b=-12$. And $x=a+bi$ so $x=-20-12i$. Because $y=\frac{-80-320i}{x}$, then $y=\frac{-80-320i}{-20-12i}$. Simplifying this fraction we get $y=\frac{-80(1+4i)}{-4(5+3i)}$ or $y=\frac{20(1+4i)}{(5+3i)}$. Multiplying by the conjugate of the denominator ($5-3i$) in the numerator and the denominator and we get $y=\frac{20(17-17i)}{34}$. Simplifying this fraction we get $y=10-10i$. Given that $yz$ = $60$ we can substitute $(10-10i)(z)=60$ We can solve for z and get $z=3+3i$. Now we know what $x$, $y$, and $z$ are, so all we have to do is plug and chug. $x+y+z= (-20-12i)+(10+10i)+(3-3i)$ or $x+y+z= -7-5i$ Now $a^2 +b^2=(-7)^2+(-5)^2$ or $a^2 +b^2 = 74$. Thus $074$ is our final answer.(David Camacho)
Solution 4
We observe that by multiplying $xy,$ $yz,$ and $zx,$ we get $(xyz)^2=(-80-320i)(60)(-96+24i).$ Next, we divide $(xyz)^2$ by $(yz)^2$ to
get $x^2.$ We have $x^2=\frac{(-80-320i)(60)(-96+24i)}{3600}=256+480i.$ We can write $x$ in the form of $a+bi,$ so we get
$(a+bi)^2=256+480i.$ Then, $a^2-b^2+2abi=256+480i,$ $a^2-b^2=256,$ and $2ab=480.$ Solving this system of equations is relatively simple. We have two cases, $a=20, b=12,$ and $a=-20, b=-12.$
Case 1: $a=20, b=12,$ so $x=20+12i.$ We solve for $y$ and $z$ by plugging in $x$ to the two equations. We see
$y=\frac{-80-320i}{20+12i}=-10-10i$ and $z=\frac{-96+24i}{20+12i}=-3+3i.$ $x+y+z=7+5i,$ so $a=7$ and $b=5.$ Solving, we end up with
$7^2+5^2=\boxed{074}$ as our answer.
Case 2: $a=-20, b=-12,$ so $x=-20-12i.$ Again, we solve for $y$ and $z.$ We find $y=\frac{-80-320i}{-20-12i}=10+10i,$
$z=\frac{-96+24i}{-20-12i}=3-3i,$ so $x+y+z=-7-5i.$ We again have $(-7)^2+(-5)^2=\boxed{074}.$
Solution by $Airplane50$
Solution 5 (Based on advanced mathematical knowledge)
According to the Euler's Theory, we can rewrite $x$, $y$ and $z$ as
$x=r_{1}e^{i{\theta}_1}$
$y=r_{2}e^{i{\theta}_2}$
$x=r_{3}e^{i{\theta}_3}$
As a result,
$|xy|=r_{1}r_{2}=\sqrt{80^2+320^2}=80\sqrt{17}$
$|yz|=r_{2}r_{3}=60$
$|xz|=r_{1}r_{3}=\sqrt{96^2+24^2}=24\sqrt{17}$
Also, it is clear that
$yz=r_{2}e^{i{\theta}_2}r_{3}e^{i{\theta}_3}=|yz|e^{i({\theta}_2+{\theta}_3)}=|yz|=60$
So ${\theta}_2+{\theta}_3=0$, or
${\theta}_2=-{\theta}_3$
Also, we have
$xy=-80\sqrt{17}e^{i\arctan{4}}$
$yz=60$
$xz=-24\sqrt{17}e^{i\arctan{-\frac{1}{4}}}$
So now we have $r_{1}r_{2}=80\sqrt{17}$, $r_{2}r_{3}=60$, $r_{1}r_{3}=24\sqrt{17}$, ${\theta}_1+{\theta}_2=\arctan{4}$ and ${\theta}_1-{\theta}_2=\arctan {-\frac{1}{4}}$. Solve these above, we get
$r_{1}=4\sqrt{34}$
$r_{2}=10\sqrt{2}$
$r_{3}=3\sqrt{2}$
${\theta}_2=\frac{\arctan{4}-\arctan{-\frac{1}{4}}}{2}=\frac{\frac{\pi}{2}}{2}=\frac{\pi}{4}$
So we can get
$y=r_{2}e^{i{\theta}_2}=10\sqrt{2}e^{i\frac{\pi}{4}}=10+10i$
$z=r_{3}e^{i{\theta}_3}=r_{3}e^{-i{\theta}_2}=3\sqrt{2}e^{-i\frac{\pi}{4}}=3-3i$
Use $xy=-80-320i$ we can find that
$x=-20-12i$
So
$x+y+z=-20-12i+10+10i+3-3i=-7-5i$
So we have $a=-7$ and $b=-5$. As a result, we finally get
$a^2+b^2=(-7)^2+(-5)^2=\boxed{074}$
##Problem 6
A real number $a$ is chosen randomly and uniformly from the interval $[-20, 18]$. The probability that the roots of the polynomial
$x^4 + 2ax^3 + (2a - 2)x^2 + (-4a + 3)x - 2$
are all real can be written in the form $\dfrac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m + n$.
Solution
The polynomial we are given is rather complicated, so we could use Rational Root Theorem to turn the given polynomial into a degree-2 polynomial. With Rational Root Theorem, $x = 1, -1, 2, -2$ are all possible rational roots. Upon plugging these roots into the polynomial, $x = -2$ and $x = 1$ make the polynomial equal 0 and thus, they are roots that we can factor out.
The polynomial becomes:
$(x - 1)(x + 2)(x^2 + (2a - 1)x + 1)$
Since we know $1$ and $-2$ are real numbers, we only need to focus on the quadratic.
We should set the discriminant of the quadratic greater than or equal to 0.
$(2a - 1)^2 - 4 \geq 0$.
This simplifies to:
$a \geq \dfrac{3}{2}$
or
$a \leq -\dfrac{1}{2}$
This means that the interval $\left(-\dfrac{1}{2}, \dfrac{3}{2}\right)$ is the "bad" interval. The length of the interval where $a$ can be chosen from is 38 units long, while the bad interval is 2 units long. Therefore, the good interval is 36 units long.
$\dfrac{36}{38} = \dfrac{18}{19}$
$18 + 19 = \boxed{037}$
##Problem 7
Triangle $ABC$ has side lengths $AB = 9$, $BC =$ $5\sqrt{3}$, and $AC = 12$. Points $A = P_{0}, P_{1}, P_{2}, ... , P_{2450} = B$ are on segment $\overline{AB}$ with $P_{k}$ between $P_{k-1}$ and $P_{k+1}$ for $k = 1, 2, ..., 2449$, and points $A = Q_{0}, Q_{1}, Q_{2}, ... , Q_{2450} = C$ are on segment $\overline{AC}$ with $Q_{k}$ between $Q_{k-1}$ and $Q_{k+1}$ for $k = 1, 2, ..., 2449$. Furthermore, each segment $\overline{P_{k}Q_{k}}$, $k = 1, 2, ..., 2449$, is parallel to $\overline{BC}$. The segments cut the triangle into $2450$ regions, consisting of $2449$ trapezoids and $1$ triangle. Each of the $2450$ regions has the same area. Find the number of segments $\overline{P_{k}Q_{k}}$, $k = 1, 2, ..., 2450$, that have rational length.
Solution 1
For each $k$ between $2$ and $2450$, the area of the trapezoid with $\overline{P_kQ_k}$ as its bottom base is the difference between the areas of two triangles, both similar to $\triangle{ABC}$. Let $d_k$ be the length of segment $\overline{P_kQ_k}$. The area of the trapezoid with bases $\overline{P_{k-1}Q_{k-1}}$ and $P_kQ_k$ is $(\frac{d_k}{5\sqrt{3}})^2 - (\frac{d_{k-1}}{5\sqrt{3}})^2 = \frac{d_k^2-d_{k-1}^2}{75}$ times the area of $\triangle{ABC}$. (This logic also applies to the topmost triangle if we notice that $d_0 = 0$.) However, we also know that the area of each shape is $\frac{1}{2450}$ times the area of $\triangle{ABC}$. We then have $\frac{d_k^2-d_{k-1}^2}{75} = \frac{1}{2450}$. Simplifying, $d_k^2-d_{k-1}^2 = \frac{3}{98}$. However, we know that $d_0^2 = 0$, so $d_1^2 = \frac{3}{98}$, and in general, $d_k^2 = \frac{3k}{98}$ and $d_k = \frac{\sqrt{\frac{3k}{2}}}{7}$. The smallest $k$ that gives a rational $d_k$ is $6$, so $d_k$ is rational if and only if $k = 6n^2$ for some integer $n$.The largest $n$ such that $6n^2$ is less than $2450$ is $20$, so $k$ has $\boxed{020}$ possible values.
Solution by zeroman
Solution 2
We have that there are $2449$ trapezoids and $1$ triangle of equal area, with that one triangle being $AP_1Q_1$. Notice, if we "stack" the trapezoids on top of $\bigtriangleup AP_1Q_1$ the way they already are, we'd create a similar triangle, all of which are similar to $\bigtriangleup ABC$, and since the trapezoids and $\bigtriangleup AP_1Q_1$ have equal area, each of these similar triangles, $AP_kQ_k$ have area $\frac{k}{2450}\left[ ABC\right]$, and so $\frac{\left[ AP_kQ_k\right]}{\left[ABC\right]}=\frac{k}{2450}$. We want the ratio of the side lengths $P_kQ_k:BC$. Since area is a 2-dimensional unit of measurement, and side lengths are 1-dimensional, the ratio is simply the square root of the areas, or $\frac{P_kQ_k}{BC}=\sqrt{\frac{k}{2450}} \implies P_kQ_k=BC\cdot \sqrt{\frac{k}{2450}}=5\sqrt{3}\cdot\sqrt{\frac{k}{2450}}=\frac{1}{7}\cdot \sqrt{\frac{3k}{2}}=\frac{3}{7}\sqrt{\frac{k}{6}} \implies k=6n^2<2450 \implies 0<n\leq 20$, so there are $\boxed{020}$ solutions.
Solution by ktong
Solution 3
Let $T_1$ stand for $AP_1Q_1$, and $T_k = AP_kQ_k$. All triangles $T$ are similar by AAA. Let the area of $T_1$ be $x$. The next trapezoid will also have an area of $x$, as given. Therefore, $T_k$ has an area of $\sqrt{k}x$. The ratio of the areas is equal to the square of the scale factor for any plane figure and its image. Therefore, $AP_k=AP_1\cdot \sqrt{k}$, and the same if $Q$ is substituted for $P$ throughout. We want the side $P_kQ_k$ to be rational. Setting up proportions:
$5\sqrt{3} : \sqrt{2450}=35\sqrt{2}$
$\sqrt{6} : 14$
which shows that $x=\frac{\sqrt{6}}{14}$. In order for $\sqrt{k}x$ to be rational, $\sqrt{k}$ must be some rational multiple of $\sqrt{6}$. This is achieved at $k=\sqrt{6}, 2\sqrt{6}, ... , 20\sqrt{6}$. We end there as $21\sqrt{6}=\sqrt{2646}$. There are 20 numbers from 1 to 20, so there are $\boxed{020}$ solutions.
##Problem 8
A frog is positioned at the origin of the coordinate plane. From the point $(x, y)$, the frog can jump to any of the points $(x + 1, y)$, $(x + 2, y)$, $(x, y + 1)$, or $(x, y + 2)$. Find the number of distinct sequences of jumps in which the frog begins at $(0, 0)$ and ends at $(4, 4)$.
Solution 1
We solve this problem by working backwards. Notice, the only points the frog can be on to jump to $(4,4)$ in one move are $(2,4),(3,4),(4,2),$ and $(4,3)$. This applies to any other point, thus we can work our way from $(0,0)$ to $(4,4)$, recording down the number of ways to get to each point recursively.
$(0,0): 1$
$(1,0)=(0,1)=1$
$(2,0)=(0, 2)=2$
$(3,0)=(0, 3)=3$
$(4,0)=(0, 4)=5$
$(1,1)=2$, $(1,2)=(2,1)=5$, $(1,3)=(3,1)=10$, $(1,4)=(4,1)= 20$
$(2,2)=14, (2,3)=(3,2)=32, (2,4)=(4,2)=71$
$(3,3)=84, (3,4)=(4,3)=207$
$(4,4)=2\cdot \left( (4,2)+(4,3)\right) = 2\cdot \left( 207+71\right)=2\cdot 278=\boxed{556}$
A diagram of the numbers:
5 - 20 - 71 - 207 - $\boxed{556}$
3 - 10 - 32 - 84 - 207
2 - 5 - 14 - 32 - 71
1 - 2 - 5 - 10 - 20
1 - 1 - 2 - 3 - 5
Solution 2
We'll refer to the moves $(x + 1, y)$, $(x + 2, y)$, $(x, y + 1)$, and $(x, y + 2)$ as $R_1$, $R_2$, $U_1$, and $U_2$, respectively. Then the possible sequences of moves that will take the frog from $(0,0)$ to $(4,4)$ are all the permutations of $U_1U_1U_1U_1R_1R_1R_1R_1$, $U_2U_1U_1R_1R_1R_1R_1$, $U_1U_1U_1U_1R_2R_1R_1$, $U_2U_1U_1R_2R_1R_1$, $U_2U_2R_1R_1R_1R_1$, $U_1U_1U_1U_1R_2R_2$, $U_2U_2R_2R_1R_1$, $U_2U_1U_1R_2R_2$, and $U_2U_2R_2R_2$. We can reduce the number of cases using symmetry.
Case 1: $U_1U_1U_1U_1R_1R_1R_1R_1$
There are $\frac{8!}{4!4!} = 70$ possibilities for this case.
Case 2: $U_2U_1U_1R_1R_1R_1R_1$ or $U_1U_1U_1U_1R_2R_1R_1$
There are $2 \cdot \frac{7!}{4!2!} = 210$ possibilities for this case.
Case 3:  $U_2U_1U_1R_2R_1R_1$
There are $\frac{6!}{2!2!} = 180$ possibilities for this case.
Case 4: $U_2U_2R_1R_1R_1R_1$ or $U_1U_1U_1U_1R_2R_2$
There are $2 \cdot \frac{6!}{2!4!} = 30$ possibilities for this case.
Case 5: $U_2U_2R_2R_1R_1$ or $U_2U_1U_1R_2R_2$
There are $2 \cdot \frac{5!}{2!2!} = 60$ possibilities for this case.
Case 6: $U_2U_2R_2R_2$
There are $\frac{4!}{2!2!} = 6$ possibilities for this case.
Adding up all these cases gives us $70+210+180+30+60+6=\boxed{556}$ ways.
Solution 3 (General Case)
Mark the total number of distinct sequences of jumps for the frog to reach the point $(x,y)$ as $\varphi (x,y)$. Consider for each point $(x,y)$ in the first quadrant, there are only $4$ possible points in the first quadrant for frog to reach point $(x,y)$, and these $4$ points are
$(x-1,y); (x-2,y); (x,y-1); (x,y-2)$
. As a result, the way to count $\varphi (x,y)$ is
$\varphi (x,y)=\varphi (x-1,y)+\varphi (x-2,y)+\varphi (x,y-1)+\varphi (x,y-2)$
Also, for special cases,
$\varphi (0,y)=\varphi (0,y-1)+\varphi (0,y-2)$
$\varphi (x,0)=\varphi (x-1,0)+\varphi (x-2,0)$
$\varphi (x,1)=\varphi (x-1,1)+\varphi (x-2,1)+\varphi (x,0)$
$\varphi (1,y)=\varphi (1,y-1)+\varphi (1,y-2)+\varphi (0,y)$
$\varphi (1,1)=\varphi (1,0)+\varphi (0,1)$
Start with $\varphi (0,0)=1$, use this method and draw the figure below, we can finally get
$\varphi (4,4)=556$
(In order to make the LaTeX thing more beautiful to look at, I put $0$ to make every number a $3$-digits number)
$005-020-071-207-\boxed{556}$
$003-010-032-084-207$
$002-005-014-032-071$
$001-002-005-010-020$
$001-001-002-003-005$
So the total number of distinct sequences of jumps for the frog to reach $(4,4)$ is $\boxed {556}$.
##Problem 9
Octagon $ABCDEFGH$ with side lengths $AB = CD = EF = GH = 10$ and $BC = DE = FG = HA = 11$ is formed by removing 6-8-10 triangles from the corners of a $23$ $\times$ $27$ rectangle with side $\overline{AH}$ on a short side of the rectangle, as shown. Let $J$ be the midpoint of $\overline{AH}$, and partition the octagon into 7 triangles by drawing segments $\overline{JB}$, $\overline{JC}$, $\overline{JD}$, $\overline{JE}$, $\overline{JF}$, and $\overline{JG}$. Find the area of the convex polygon whose vertices are the centroids of these 7 triangles.
![](http://latex.artofproblemsolving.com/9/5/8/958670038ab1dd52c3b3fb6095f47bd59ee398d1.png)
Solution 1 (Massive Shoelace)
We represent Octagon $ABCDEFGH$ in the coordinate plane with the upper left corner of the rectangle being the origin. Then it follows that $A=(0,-6), B=(8, 0), C=(19,0), D=(27, -6), E=(27, -17), F=(19, -23), G=(8, -23), H=(0, -17), J=(0, -\frac{23}{2})$. Recall that the centroid is $\frac{1}{3}$ way up each median in the triangle. Thus, we can find the centroids easily by finding the midpoint of the side opposite of point $J$. Furthermore, we can take advantage of the reflective symmetry across the line parallel to $BC$ going through $J$ by dealing with less coordinates and ommiting the $\frac{1}{2}$ in the shoelace formula.
By doing some basic algebra, we find that the coordinates of the centroids of $\bigtriangleup JAB, \bigtriangleup JBC, \bigtriangleup JCD, \bigtriangleup JDE$ are $\left(\frac{8}{3}, -\frac{35}{6}\right), \left(9, -\frac{23}{6}\right), \left(\frac{46}{3}, -\frac{35}{6}\right),$ and $\left(18, -\frac{23}{2}\right)$, respectively. We'll have to throw in the projection of the centroid of $\bigtriangleup JAB$ to the line of reflection to apply shoelace, and that point is $\left( \frac{8}{3}, -\frac{23}{2}\right)$
Finally, applying Shoelace, we get: 

$\left|\left(\frac{8}{3}\cdot (-\frac{23}{6})+9\cdot (-\frac{35}{6})+\frac{46}{3}\cdot (-\frac{23}{2})+18\cdot (\frac{-23}{2})+\frac{8}{3}\cdot (-\frac{35}{6})\right) - \left((-\frac{35}{6}\cdot 9) +\\(-\frac{23}{6}\cdot \frac{46}{3})+ (-\frac{35}{6}\cdot 18)+(\frac{-23}{2}\cdot \frac{8}{3})+(-\frac{23}{2}\cdot \frac{8}{3})\right)\right|$

$=\left|\left(-\frac{92}{9}-\frac{105}{2}-\frac{529}{3}-207-\frac{140}{9}\right)-\left(-\frac{105}{2}-\frac{529}{9}-105-\frac{92}{3}-\frac{92}{3}\right)\right|$

$=\left|-\frac{232}{9}-\frac{1373}{6}-207+\frac{529}{9}+\frac{184}{3}+105+\frac{105}{2}\right|$

$=\left|\frac{297}{9}-\frac{690}{6}-102\right|$

$=\left| 33-115-102\right|=\left|-184\right|=\boxed{184}$ 
Solution by ktong
Solution 2 (Homothety)
Draw the heptagon whose vertices are the midpoints of octagon $ABCDEFGH$ except $J$. Note that $J$ passes through corresponding vertices of the two heptagons. Also, by centroid properties, our ratio between the sidelengths is $\frac{2}{3}$, and their area ratio is hence $\frac{4}{9}$. So, we have a homothety.
We now compute the area of our large heptagon. We can divide this into two congruent trapezoids and a triangle. The area of each trapezoid is $\frac{1}{2}(17+23)\cdot \frac{19}{2}=190$. The area of each triangle is $\frac{1}{2}\cdot 17\cdot 4=34$.
Hence, the area of the large heptagon is $2\cdot 190+34=414$. Then from our homothety, the area of the required heptagon is $\frac{4}{9}\cdot 414=\boxed{184}$ ~novus677

##Problem 10
Find the number of functions $f(x)$ from $\{1, 2, 3, 4, 5\}$ to $\{1, 2, 3, 4, 5\}$ that satisfy $f(f(x)) = f(f(f(x)))$ for all $x$ in $\{1, 2, 3, 4, 5\}$.
Solution 1
We do casework on the number of fixed points of $f$, that is, the number of $x\in\{1,2,3,4,5\}$ such that $f(x)=x$. We know that at least one such $x$ exists, namely $x=f(f(1))$.
$\textbf{Case 1: one fixed point.}$
There are five ways to choose the fixed point. WLOG let the fixed point be $1$. Then at least one of $2,3,4,5$ must map onto $1$, the only fixed point.
Suppose exactly one of these values maps to $1$; there are four ways to choose such a value. WLOG let it be $2$. Then all of $3,4,5$ must map to $2$ in order to be mapped to $1$ in the next iteration. There are $4$ solutions in this case.
Suppose exactly two of these values map to $1$; there are $\binom 4 2=6$ ways to choose such values. WLOG let them be $2$ and $3$. Then $4$ and $5$ must map to one of $2$ and $3$, where there are $2^2=4$ ways to do so. Therefore there are $6\cdot 4=24$ solutions in this case.
Suppose exactly three of these values map to $1$; there are $\binom 4 3=4$ ways to choose such values. WLOG let them be $2$, $3$, and $4$. Then $5$ must map to one of $2$, $3$, and $4$, where there are $3$ solutions. Therefore there are $4\cdot 3=12$ solutions in this case.
Suppose exactly four of these values map to $1$. Then everything maps to $1$ and there is $1$ solution in this case.
Therefore there are $5\cdot(4+24+12+1)=205$ solutions in Case 1.
$\textbf{Case 2: two fixed points.}$
There are $\binom 5 2=10$ ways to choose the fixed points. WLOG let them be $1$ and $2$. Then at least one of $3,4,5$ must map onto $1$ or $2$.
Suppose exactly one of these values maps to $1$ or $2$; there are three ways to choose this value, and two ways to choose the value it maps to. WLOG let it be $3$. Then both $4$ and $5$ must map to $3$, for a total of $3\cdot 2=6$ solutions in this case.
Suppose exactly two of these values map to $1$ or $2$; there are $\binom 3 2=3$ ways to choose these values, and $2^2=4$ ways to choose the values they map to. WLOG let them be $3$ and $4$. Then $5$ must map to one of $3$ and $4$, for two possible choices. Therefore there are $3\cdot 2^2\cdot 2=24$ solutions in this case.
Suppose exactly three of these values map to $1$ or $2$; then everything maps to $1$ or $2$ and there are $2^3=8$ solutions in this case.
Therefore there are $10\cdot(6+24+8)=380$ solutions in Case 2.
$\textbf{Case 3: three fixed points.}$
There are $\binom 5 3=10$ ways to choose the fixed points. WLOG let them be $1$, $2$, and $3$. Then at least one of $4$ and $5$ must map onto $1$, $2$, or  $3$.
Suppose exactly one of these values map to $1$, $2$, or $3$; there are two ways to choose this value, and three ways to choose the value is maps to. WLOG let it be $4$. Then $5$ must map to $4$, for a total of $2\cdot 3=6$ solutions in this case.
Suppose exactly two of these values map to $1$, $2$, or $3$; then everything maps to $1$, $2$, or $3$, and there are $3^2=9$ solutions in this case.
Therefore there are $10\cdot(6+9)=150$ solutions in Case 3.
$\textbf{Case 4: four fixed points.}$
There are $\binom 5 4=5$ ways to choose the fixed points. WLOG let them to $1$, $2$, $3$, and $4$. Then $5$ must map to one of these values, for a total of $5\cdot 4=20$ solutions in Case 4.
$\textbf{Case 5: five fixed points.}$
Since everything is a fixed point, there is only one solution in Case 5.
Therefore there are a total of $205+380+150+20+1=\boxed{756}$ functions that satisfy the problem condition.
Solution 2
We can do some caseworks about the special points of functions $f$ for $x\in\{1,2,3,4,5\}$. Let $x$, $y$ and $z$ be three different elements in set $\{1,2,3,4,5\}$. There must be elements such like $k$ in set $\{1,2,3,4,5\}$ satisfies $f(k)=k$, and we call the points such like $(k,k)$ on functions $f$ are "Good Points" (Actually its academic name is "fixed-points"). The only thing we need to consider is the "steps" to get "Good Points". Notice that the "steps" must less than $3$ because the highest iterations of function $f$ is $3$. Now we can classify $3$ cases of “Good points” of $f$.
$\textbf{Case 1:}$ One "step" to "Good Points": Assume that $f(x)=x$, then we get $f(f(x))=f(x)=x$, and $f(f(f(x)))=f(f(x))=f(x)=x$, so $f(f(f(x)))=f(f(x))$.
$\textbf{Case 2:}$ Two "steps" to "Good Points": Assume that $f(x)=y$ and $f(y)=y$, then we get $f(f(x))=f(y)=y$, and $f(f(f(x)))=f(f(y))=f(y)=y$, so $f(f(f(x)))=f(f(x))$.
$\textbf{Case 3:}$ Three "steps" to "Good Points": Assume that $f(x)=y$, $f(y)=z$ and $f(z)=z$, then we get $f(f(x))=f(y)=z$, and $f(f(f(x)))=f(f(y))=f(z)=z$, so $f(f(f(x)))=f(f(x))$.
Divide set $\{1,2,3,4,5\}$ into three parts which satisfy these three cases, respectively. Let the first part has $a$ elements, the second part has $b$ elements and the third part has $c$ elements, it is easy to see that $a+b+c=5$. First, there are $\binom{5}{a}$ ways to select $x$ for Case 1. Second, we have $\binom{5-a}{b}$ ways to select $x$ for Case 2. After that we map all elements that satisfy Case 2 to Case 1, and the total number of ways of this operation is $a^b$. Finally, we map all the elements that satisfy Case 3 to Case 2, and the total number of ways of this operation is $b^c$. As a result, the number of such functions $f$ can be represented in an algebraic expression contains $a$, $b$ and $c$: $\boxed{\binom{5}{a}\cdot \binom{5-a}{b}\cdot a^b\cdot b^c}$
Now it's time to consider about the different values of $a$, $b$ and $c$ and the total number of functions $f$ satisfy these values of $a$, $b$ and $c$:
For $a=5$, $b=0$ and $c=0$, the number of $f$ is $\binom{5}{5}=1$
For $a=4$, $b=1$ and $c=0$, the number of $f$ is $\binom{5}{4}\cdot \binom{1}{1}\cdot 4^1\cdot 1^0=20$
For $a=3$, $b=1$ and $c=1$, the number of $f$ is $\binom{5}{3}\cdot \binom{2}{1}\cdot 3^1\cdot 1^1=60$
For $a=3$, $b=2$ and $c=0$, the number of $f$ is $\binom{5}{3}\cdot \binom{2}{2}\cdot 3^2\cdot 2^0=90$
For $a=2$, $b=1$ and $c=2$, the number of $f$ is $\binom{5}{2}\cdot \binom{3}{1}\cdot 2^1\cdot 1^2=60$
For $a=2$, $b=2$ and $c=1$, the number of $f$ is $\binom{5}{2}\cdot \binom{3}{2}\cdot 2^2\cdot 2^1=240$
For $a=2$, $b=3$ and $c=0$, the number of $f$ is $\binom{5}{2}\cdot \binom{3}{3}\cdot 2^3\cdot 3^0=80$
For $a=1$, $b=1$ and $c=3$, the number of $f$ is $\binom{5}{1}\cdot \binom{4}{1}\cdot 1^1\cdot 1^3=20$
For $a=1$, $b=2$ and $c=2$, the number of $f$ is $\binom{5}{1}\cdot \binom{4}{2}\cdot 1^2\cdot 2^2=120$
For $a=1$, $b=3$ and $c=1$, the number of $f$ is $\binom{5}{1}\cdot \binom{4}{3}\cdot 1^3\cdot 3^1=60$
For $a=1$, $b=4$ and $c=0$, the number of $f$ is $\binom{5}{1}\cdot \binom{4}{4}\cdot 1^4\cdot 4^0=5$
Finally, we get the total number of function $f$, the number is $1+20+60+90+60+240+80+20+120+60+5=\boxed{756}$
##Problem 11
Find the number of permutations of $1, 2, 3, 4, 5, 6$ such that for each $k$ with $1$ $\leq$ $k$ $\leq$ $5$, at least one of the first $k$ terms of the permutation is greater than $k$.
Solution 1
If the first number is $6$, then there are no restrictions. There are $5!$, or $120$ ways to place the other $5$ numbers.
If the first number is $5$, $6$ can go in four places, and there are $4!$ ways to place the other $4$ numbers. $4 \cdot 4! = 96$ ways.
If the first number is $4$, ....
4 6 _ _ _ _ $\implies$ 24 ways
4 _ 6 _ _ _ $\implies$ 24 ways
4 _ _ 6 _ _ $\implies$ 24 ways
4 _ _ _ 6 _ $\implies$ 5 must go between $4$ and $6$, so there are $3 \cdot 3! = 18$ ways.
$24 + 24 + 24 + 18 = 90$ ways if 4 is first.
If the first number is $3$, ....
3 6 _ _ _ _ $\implies$ 24 ways
3 _ 6 _ _ _ $\implies$ 24 ways
3 1 _ 6 _ _ $\implies$ 4 ways
3 2 _ 6 _ _ $\implies$ 4 ways
3 4 _ 6 _ _ $\implies$ 6 ways
3 5 _ 6 _ _ $\implies$ 6 ways
3 5 _ _ 6 _ $\implies$ 6 ways
3 _ 5 _ 6 _ $\implies$ 6 ways
3 _ _ 5 6 _ $\implies$ 4 ways
$24 + 24 + 4 + 4 + 6 + 6 + 6 + 6 + 4 = 84$ ways
If the first number is $2$, ....
2 6 _ _ _ _ $\implies$ 24 ways
2 _ 6 _ _ _ $\implies$ 18 ways
2 3 _ 6 _ _ $\implies$ 4 ways
2 4 _ 6 _ _ $\implies$ 4 ways
2 4 _ 6 _ _ $\implies$ 6 ways
2 5 _ 6 _ _ $\implies$ 6 ways
2 5 _ _ 6 _ $\implies$ 6 ways
2 _ 5 _ 6 _ $\implies$ 4 ways
2 4 _ 5 6 _ $\implies$ 2 ways
2 3 4 5 6 1 $\implies$ 1 way
$24 + 18 + 4 + 4 + 6 + 6 + 6 + 4 + 2 + 1 = 71$ ways
Grand Total : $120 + 96 + 90 + 84 + 71 = \boxed{461}$
Solution 2
If $6$ is the first number, then there are no restrictions. There are $5!$, or $120$ ways to place the other $5$ numbers.
If $6$ is the second number, then the first number can be $2, 3, 4,$ or $5$, and there are $4!$ ways to place the other $4$ numbers. $4 \cdot 4! = 96$ ways.
If $6$ is the third number, then we cannot have the following:
1 _ 6 _ _ _ $\implies$ 24 ways
2 1 6 _ _ _ $\implies$ 6 ways
$120 - 24 - 6 = 90$ ways
If $6$ is the fourth number, then we cannot have the following: 1 _ _ 6 _ _ $\implies$ 24 ways
2 1 _ 6 _ _ $\implies$ 6 ways
2 3 1 6 _ _ $\implies$ 2 ways
3 1 2 6 _ _ $\implies$ 2 ways
3 2 1 6 _ _ $\implies$ 2 ways
$120 - 24 - 6 - 2 - 2 - 2 = 84$ ways
If $6$ is the fifth number, then we cannot have the following:
_ _ _ _ 6 5 $\implies$ 24 ways
1 5 _ _ 6 _ $\implies$ 6 ways
1 _ 5 _ 6 _ $\implies$ 6 ways
2 1 5 _ 6 _ $\implies$ 2 ways
1 _ _ 5 6 _ $\implies$ 6 ways
2 1 _ 5 6 _ $\implies$ 2 ways
2 3 1 5 6 4, 3 1 2 5 6 4, 3 2 1 5 6 4 $\implies$ 3 ways
$120 - 24 - 6 - 6 - 2 - 6 - 2 - 3 = 71$ ways
Grand Total : $120 + 96 + 90 + 84 + 71 = \boxed{461}$
Solution 3 (needs explanation)
The answer is $\frac{6!}{2} + 5! - 4! + 3! - 2! + 1! = \boxed{\boxed{461}}$.
Solution 4 (General Case, and you won't get 458, 459, 460, 462, 465, 467, etc. with this method!!!)
First let us look at the General Case of this kind of Permutation: Consider this kind of Permutation of set
$S=\{1,2,...,n\}$
for arbitrary $n \in N$ It is easy to count the total number of the permutation ($N$) of $S$:
$N=n!$
For every $i \in S$, we can divide $S$ into two subsets:
$S_{1\to i}=\{1,2,...i\}; S_{i+1\to n}=\{i+1,i+2,...,n\}$
Define permutation $P$ as the permutation satisfy the condition of this problem. Then according to the condition of this problem, for each $i\in \{1,2,...,n-1\}$, $P$ is not a permutation of set $S_{1\to i}$. For each $i\in \{1,2,...,n\}$, mark the number of permutation $P$ of set $S$ as $P_{k}$, where $k=i$, mark the number of permutation $P$ for set $S_{i+1\to n}$ as $P_{i}$; then, according to the condition of this problem, the permutation for $S_{i+1\to n}$ is unrestricted, so the number of the unrestricted permutation of $S_{i+1\to n}$ is $(n-i)!$. As a result, for each $i\in \{1,2,...,n\}$, the total number of permutation $P$ is
$P_{k}=P_{i}(n-i)!$
Notice that according to the condition of this problem, if you sum all $P_{k}$ up, you will get the total number of permutation of $S$, that is,
$N=\sum^{n}_{k=1}{P_{k}}=\sum^{n}_{i=1}{P_{i}(n-i)!}=n!$
Put $n=1,2,3,...,6$, we will have
$P_{1}=1$
$P_{2}=1$
$P_{3}=3$
$P_{4}=13$
$P_{5}=71$
$P_{6}=461$
So the total number of permutations satisify this problem is $P_{6}=\boxed{461}$.
##Problem 12
Let $ABCD$ be a convex quadrilateral with $AB = CD = 10$, $BC = 14$, and $AD = 2\sqrt{65}$. Assume that the diagonals of $ABCD$ intersect at point $P$, and that the sum of the areas of triangles $APB$ and $CPD$ equals the sum of the areas of triangles $BPC$ and $APD$. Find the area of quadrilateral $ABCD$.
Solution 1
For reference, $2\sqrt{65} \approx 16$, so $\overline{AD}$ is the longest of the four sides of $ABCD$. Let $h_1$ be the length of the altitude from $B$ to $\overline{AC}$, and let $h_2$ be the length of the altitude from $D$ to $\overline{AC}$. Then, the triangle area equation becomes
$\frac{h_1}{2}AP + \frac{h_2}{2}CP = \frac{h_1}{2}CP + \frac{h_2}{2}AP \rightarrow \left(h_1 - h_2\right)AP = \left(h_1 - h_2\right)CP \rightarrow AP = CP$.
What an important finding! Note that the opposite sides $\overline{AB}$ and $\overline{CD}$ have equal length, and note that diagonal $\overline{DB}$ bisects diagonal $\overline{AC}$. This is very similar to what happens if $ABCD$ were a parallelogram with $AB = CD = 10$, so let's extend $\overline{DB}$ to point $E$, such that $AECD$ is a parallelogram. In other words, $AE = CD = 10$ and $EC = DA = 2\sqrt{65}$. Now, let's examine $\triangle ABE$. Since $AB = AE = 10$, the triangle is isosceles, and $\angle ABE \cong \angle AEB$. Note that in parallelogram $AECD$, $\angle AED$ and $\angle CDE$ are congruent, so $\angle ABE \cong \angle CDE$ and thus $\text{m}\angle ABD = 180^\circ - \text{m}\angle CDB$. Define $\alpha := \text{m}\angle CDB$, so $180^\circ - \alpha = \text{m}\angle ABD$. We use the Law of Cosines on $\triangle DAB$ and $\triangle CDB$:
$\left(2\sqrt{65}\right)^2 = 10^2 + BD^2 - 20BD\cos\left(180^\circ - \alpha\right) = 100 + BD^2 + 20BD\cos\alpha,$
$14^2 = 10^2 + BD^2 - 20BD\cos\alpha.$
Subtracting the second equation from the first yields
$260 - 196 = 40BD\cos\alpha \rightarrow BD\cos\alpha = \frac{8}{5}.$
This means that dropping an altitude from $B$ to some foot $Q$ on $\overline{CD}$ gives $DQ = \frac{8}{5}$ and therefore $CQ = \frac{42}{5}$. Seeing that $CQ = \frac{3}{5}\cdot BC$, we conclude that $\triangle QCB$ is a 3-4-5 right triangle, so $BQ = \frac{56}{5}$. Then, the area of $\triangle BCD$ is $\frac{1}{2}\cdot 10 \cdot \frac{56}{5} = 56$. Since $AP = CP$, points $A$ and $C$ are equidistant from $\overline{BD}$, so $\left[\triangle ABD\right] = \left[\triangle CBD\right] = 56$ and hence $\left[ABCD\right] = 56 + 56 = \boxed{112}$. -kgator
Solution 2 (Another way to get the middle point)
So, let the area of $4$ triangles $\triangle {ABP}=S_{1}$,  $\triangle {BCP}=S_{2}$,  $\triangle {CDP}=S_{3}$,  $\triangle {DAP}=S_{4}$. Suppose $S_{1}>S_{3}$ and $S_{2}>S_{4}$, then it is easy to show that
$S_{1}\cdot S_{3}=S_{2}\cdot S_{4}$
. Also, because
$S_{1}+S_{3}=S_{2}+S_{4}$
, we will have
$(S_{1}+S_{3})^2=(S_{2}+S_{4})^2$
. So
$(S_{1}+S_{3})^2=S_{1}^2+S_{3}^2+2\cdot S_{1}\cdot S_{3}=(S_{2}+S_{4})^2=S_{2}^2+S_{4}^2+2\cdot S_{2}\cdot S_{4}$
. So
$S_{1}^2+S_{3}^2=S_{2}^2+S_{4}^2$
. So
$S_{1}^2+S_{3}^2-2\cdot S_{1}\cdot S_{3}=S_{2}^2+S_{4}^2-2\cdot S_{2}\cdot S_{4}$
. So
$(S_{1}-S_{3})^2=(S_{2}-S_{4})^2$
. As a result,
$S_{1}-S_{3}=S_{2}-S_{4}$
. Then, we have
$S_{1}+S_{4}=S_{2}+S_{3}$
. Combine the condition
$S_{1}+S_{3}=S_{2}+S_{4}$
, we can find out that
$S_{3}=S_{4}$
. So $P$ is the middle point of $\overline {AC}$
##Problem 13
Misha rolls a standard, fair six-sided die until she rolls 1-2-3 in that order on three consecutive rolls. The probability that she will roll the die an odd number of times is $\dfrac{m}{n}$ where $m$ and $n$ are relatively prime positive integers. Find $m+n$.
Solution 1
Let $P_{odd}=\frac{m}{n}$, with the subscript indicating an odd number of rolls. Then $P_{even}=1-\frac{m}{n}$.
The ratio of $\frac{P_{odd}}{P_{even}}$ is just $\frac{P_{odd}}{1-P_{odd}}$.
We see that $P_{odd}$ is the sum of $P_3$,$P_5$,$P_7$,... , while $P_{even}$ is the sum of $P_4$, $P_6$, $P_8$,... .
$P_3$, the probability of getting rolls of 1-2-3 in exactly 3 rolls, is obviously $\frac{1}{216}$.
We set this probability of $P_3$ aside, meaning we totally remove the chance of getting 1-2-3 in 3 rolls. Now the ratio of $P_4+P_6+P_8+...$ to $P_5+P_7+P_9+...$ should be equal to the ratio of $\frac{P_{odd}}{P_{even}}$, because in this case the 1st roll no longer matters, so we can disregard the very existence of it in counting how many times of rolls, and thus, 4 rolls, 6 rolls, 8 rolls... would become an odd number of rolls (while 5 rolls, 7 rolls, 9 rolls... would become even number of rolls).
Notice $P_4+P_6+P_8+...=P_{even}$, and also $P_5+P_7+P_9+...=P_{odd}-P_3=P_{odd}-\frac{1}{216}$
So we have $\frac{P_{even}}{P_{odd}-\frac{1}{216}}=\frac{P_{odd}}{P_{even}}$.
Finally, we get $P_{odd}=\frac{m}{n}=\frac{216}{431}$. Therefore, $m+n = \boxed{647}$.
Solution 2
Call the probability you win on a certain toss $f_n$, where $n$ is the toss number. Obviously, since the sequence has length 3, $f_1=0$ and $f_2=0$. Additionally, $f_3=\left(\frac{1}{6}\right)^3$. We can call this value $x$, to keep our further equations looking clean. We can now write our general form for $f$ as $f_n=x(1-\sum_{i=1}^{n-3}f_i)$. This factors the probability of the last 3 rolls being 1-2-3, and the important probability that the sequence has not been rolled in the past (because then the game would already be over). Note that $\sum_{i=1}^{\infty}f_i=1$ since you'll win at some point. An intermediate step here is figuring out $f_n-f_{n+1}$. This is equal to $x(1-\sum_{i=1}^{n-3}f_i)-x(1-\sum_{i=1}^{n-2}f_i)=x(\sum_{i=1}^{n-2}f_i-\sum_{i=1}^{n-3}f_i)=xf_{n-2}$. Adding up all the differences, i.e. $\sum_{i=2}^{\infty}(f_{2n-1}-f_{2n})$ will give us the amount by which the odds probability exceeds the even probability. Since they sum to 1, that means the odds probability will be half of the difference above one-half. Subbing in our earlier result from the intermediate step, the odd probability is equal to $\frac{1}{2}+\frac{1}{2}x\sum_{i=2}^{\infty}f_{2n-3}$. Another way to find the odd probability is simply summing it up, which turns out to be $\sum_{i=1}^{\infty}f_{2n-1}$. Note the infinite sums in both expressions are equal; let's call it $P$. Equating them gives $\frac{1}{2}+\frac{1}{2}xP=P$, or $P=\frac{1}{2-x}$. Finally, substituting $x=\frac{1}{216}$, we find that $P=\frac{216}{431}$, giving us a final answer of $216 + 431 = \boxed{647}$. --DanDan0101
Solution 3
Let $S(n)$ be the number of strings of length $n$ containing the digits $1$ through $6$ that do not contain the string $123$. Then we have $S(n) = 6 \cdot S(n-1) - S(n-3)$ because we can add any digit to end of a string with length $n-1$ but we have to subtract all the strings that end in $123$. We rewrite this as
$\begin{align*} S(n) &= 6 \cdot S(n-1) - S(n-3) \\ &= 6 \cdot (6 \cdot S(n-2) - S(n-4)) - (6 \cdot (S(n-4) - S(n-6)) \\ &= 36 \cdot S(n-2) - 12 \cdot S(n-4) + S(n-6) \end{align*}$
We wish to compute $P=\sum_{n=0}^\infty \frac{S(2n)}{6^{2n+3}}$ since the last three rolls are $123$ for the game to end. Summing over the recursion, we obtain
$\sum_{n=0}^\infty \frac{S(2n)}{6^{2n+3}} =36 \cdot \sum_{n=0}^\infty \frac{S(2n-2)}{6^{2n+3}} - 12 \cdot  \sum_{n=0}^\infty \frac{S(2n-4)}{6^{2n+3}}+ \sum_{n=0}^\infty \frac{S(2n-6)}{6^{2n+3}}$
Now shift the indices so that the inside term is the same:
$\begin{align*} \sum_{n=3}^\infty  \frac{S(2n)}{6^{2n+3}} &= \frac{36}{6^2} \cdot \sum_{n=2}^\infty \frac{S(2n)}{6^{2n+3}} - \frac{12}{6^4} \cdot \sum_{n=1}^\infty \frac{S(2n)}{6^{2n+3}} + \frac{1}{6^6} \cdot \sum_{n=0}^\infty \frac{S(2n)}{6^{2n+3}}  \\  \left(P - \frac{S(0)}{6^3} -  \frac{S(2)}{6^5} -\frac{S(4)}{6^7}  \right) &= \frac{36}{6^2} \cdot \left( P -   \frac{S(0)}{6^3} -  \frac{S(2)}{6^5}\right) - \frac{12}{6^4} \cdot \left(  P - \frac{S(0)}{6^3} \right) + \frac{1}{6^6} \cdot P  \end{align*}$
Note that $S(0) = 1, S(2) = 26$ and $S(4) = 6^4 - 2 \cdot 6 = 1284$. Therefore,
$\begin{align*} \left(P - \frac{1}{6^3} -  \frac{36}{6^5} -\frac{1284}{6^7}  \right) = \frac{36}{6^2} \cdot \left( P -   \frac{1}{6^3} -  \frac{36}{6^5}\right) - \frac{12}{6^4} \cdot \left(  P - \frac{1}{6^3} \right) + \frac{1}{6^6} \cdot P   \end{align*}$
Solving for $P$, we obtain $P = \frac{216}{431} \implies m+n = \boxed{647}$. -Vfire
Solution 4
Let $A=\frac{1}{6} \begin{bmatrix} 5 & 1 & 0 & 0 \\ 4 & 1 & 1 & 0 \\ 4 & 1 & 0 & 1 \\ 0 & 0 & 0 & 0 \\ \end{bmatrix}$. $A$ is a transition matrix for the prefix of 1-2-3 matched so far. The state corresponding to a complete match has no outgoing probability mass. The probability that we roll the dice exactly $k$ times is $(A^k)_{1,4}$. Thus the probability that we roll the dice an odd number of times is $1-\left(\sum_{k=0}^\infty A^{2k}\right)_{1,4} = 1-\left((I - A^2)^{-1}\right)_{1,4} = \frac{216}{431}$. Thus the answer is $216+431=\boxed{647}$.
##Problem 14
The incircle $\omega$ of triangle $ABC$ is tangent to $\overline{BC}$ at $X$. Let $Y \neq X$ be the other intersection of $\overline{AX}$ with $\omega$. Points $P$ and $Q$ lie on $\overline{AB}$ and $\overline{AC}$, respectively, so that $\overline{PQ}$ is tangent to $\omega$ at $Y$. Assume that $AP = 3$, $PB = 4$, $AC = 8$, and $AQ = \dfrac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m+n$.
Solution 1
Let sides $\overline{AB}$ and $\overline{AC}$ be tangent to $\omega$ at $Z$ and $W$, respectively. Let $\alpha = \angle BAX$ and $\beta = \angle AXC$. Because $\overline{PQ}$ and $\overline{BC}$ are both tangent to $\omega$ and $\angle YXC$ and $\angle QYX$ subtend the same arc of $\omega$, it follows that $\angle AYP = \angle QYX = \angle YXC = \beta$. By equal tangents, $PZ = PY$. Applying the Law of Sines to $\triangle APY$ yields
$\frac{AZ}{AP} = 1 + \frac{ZP}{AP} = 1 + \frac{PY}{AP} = 1 + \frac{\sin\alpha}{\sin\beta}.$
Similarly, applying the Law of Sines to $\triangle ABX$ gives
$\frac{AZ}{AB} = 1 - \frac{BZ}{AB} = 1 - \frac{BX}{AB} = 1 - \frac{\sin\alpha}{\sin\beta}.$
It follows that
$2 = \frac{AZ}{AP} + \frac{AZ}{AB} = \frac{AZ}3 + \frac{AZ}7,$
implying $AZ = \tfrac{21}5$. Applying the same argument to $\triangle AQY$ yields
$2 = \frac{AW}{AQ} + \frac{AW}{AC} = \frac{AZ}{AQ} + \frac{AZ}{AC} = \frac{21}5\left(\frac{1}{AQ} + \frac 18\right),$
from which $AQ = \tfrac{168}{59}$. The requested sum is $168 + 59 = \boxed{227}$.
Solution 2 (Projective)
Let the incircle of $ABC$ be tangent to $AB$ and $AC$ at $M$ and $N$. By Brianchon's theorem on tangential hexagons $QNCBMP$ and $PYQCXB$, we know that $MN,CP,BQ$ and $XY$ are concurrent at a point $O$. Let $PQ \cap BC = Z$. Then by La Hire's $A$ lies on the polar of $Z$ so $Z$ lies on the polar of $A$. Therefore, $MN$ also passes through $Z$. Then projecting through $Z$, we have
$-1 = (A,O;Y,X) \stackrel{Z}{=} (A,M;P,B) \stackrel{Z}{=} (A,N;Q,C).$
Therefore, $\frac{AP \cdot MB}{MP \cdot AB} = 1 \implies \frac{3 \cdot MB}{MP \cdot 7} = 1$. Since $MB+MP=4$ we know that $MB = \frac{6}{5}$ and $MB = \frac{14}{5}$. Therefore, $AN = AM = \frac{21}{5}$ and $NC = 8 - \frac{21}{5} = \frac{19}{5}$. Since $(A,N;Q,C) = -1$, we also have $\frac{AQ \cdot NC}{NQ \cdot AC} = 1 \implies \frac{AQ \cdot \tfrac{19}{5}}{(\tfrac{21}{5} - AQ) \cdot 8} = 1$. Solving for $AQ$, we obtain $AQ = \frac{168}{59} \implies m+n = \boxed{227}$.
Solution 3 (Combination of Law of Sine and Law of Cosine)
Let the center of the incircle of $\triangle ABC$ be $O$. Link $OY$ and $OX$. Then we have $\angle OYP=\angle OXB=90^{\circ}$
$\because$ $OY=OX$
$\therefore$ $\angle OYX=\angle OXY$
$\therefore$ $\angle PYX=\angle YXB$
$\therefore$ $\sin \angle PYX=\sin \angle YXB=\sin \angle YXC=\sin \angle PYA$
Let the incircle of $ABC$ be tangent to $AB$ and $AC$ at $M$ and $N$, let $MP=YP=x$ and $NQ=YQ=y$.
Use Law of Sine in $\triangle APY$ and $\triangle AXB$, we have
$\frac{\sin \angle PAY}{PY}=\frac{\sin \angle PYA}{PA}$
$\frac{\sin \angle BAX}{BX}=\frac{\sin \angle AXB}{AB}$
therefore we have
$\frac{3}{x}=\frac{7}{4-x}$
Solve this equation, we have $x=\frac{6}{5}$
As a result, $MB=4-x=\frac{14}{5}=BX$, $AM=x+3=\frac{21}{5}=AN$, $NC=8-AN=\frac{19}{5}=XC$, $AQ=\frac{21}{5}-y$, $PQ=\frac{6}{5}+y$
So, $BC=\frac{14}{5}+\frac{19}{5}=\frac{33}{5}$
Use Law of Cosine in $\triangle BAC$ and $\triangle PAQ$, we have
$\cos \angle BAC=\frac{AB^2+AC^2-BC^2}{2\cdot AB\cdot AC}=\frac{7^2+8^2-{(\frac{33}{5})}^2}{2\cdot 7\cdot 8}$
$\cos \angle PAQ=\frac{AP^2+AQ^2-PQ^2}{2\cdot AP\cdot AQ}=\frac{3^2+{(\frac{21}{5}-y)}^2-{(\frac{6}{5}-y)}^2}{2\cdot {(\frac{21}{5}-y)}\cdot 3}$
And we have
$\cos \angle BAC=\cos \angle PAQ$
So
$\frac{7^2+8^2-{(\frac{33}{5})}^2}{2\cdot 7\cdot 8}=\frac{3^2+{(\frac{21}{5}-y)}^2-{(\frac{6}{5}-y)}^2}{2\cdot {(\frac{21}{5}-y)}\cdot 3}$
Solve this equation, we have $y=\frac{399}{295}=QN$
As a result, $AQ=AN-QN=\frac{21}{5}-\frac{399}{295}=\frac{168}{59}$
So, the final answer of this question is $168+59=\boxed {227}$
##Problem 15
Find the number of functions $f$ from $\{0, 1, 2, 3, 4, 5, 6\}$ to the integers such that $f(0) = 0$, $f(6) = 12$, and
$|x - y|$ $\leq$ $|f(x) - f(y)|$ $\leq$ $3|x - y|$
for all $x$ and $y$ in $\{0, 1, 2, 3, 4, 5, 6\}$.
Solution
First, suppose $x = y + 1$. Then, the inequality becomes $1 \leq |f(y + 1) - f(y)| \leq 3$. In other words, the (positive) difference between consecutive function values is $1$, $2$, or $3$. Let $d_k := f(k) - f(k - 1)$. Note that
$f(x) - f(y) = \sum_{k=y+1}^{x} d_k.$
Thus, $\sum_{k=1}^{6} d_k = f(6) - f(0) = 12$. Note that at most one value of $d_k$ in $\left\{d_1, d_2, d_3, d_4, d_5, d_6\right\}$ can be negative. This is because the maximum value of $d_1 + d_2 + d_3 + d_4 + d_5 + d_6$ would be $3 + 3 + 3 + 3 - 1 - 1 = 10$ if more than one value of $d_k$ is negative. Plugging $x = y + 2$ into the original inequality yields $2 \leq |f(y + 2) - f(y)| \leq 6$, which becomes $2 \leq \left|d_{y+2} + d_{y+1}\right| \leq 6$. The only way for $d_{y+2} + d_{y+1}$ to be negative while satisfying this inequality is for $\left(d_{y+2}, d_{y+1}\right)$ to equal $(1, -3)$ or $(-3, 1)$. However, this forces $d_1 + d_2 + d_3 + d_4 + d_5 + d_6 \leq 3 + 3 + 3 + 3 + 1 - 3 = 10 < 12$, which is disallowed. Hence, we conclude that the following stronger inequality,
$2 \leq d_{y + 2} + d_{y + 1} \leq 6,$
is always true. We now have two cases of functions to count. For future reference let $D$ be the (ordered) sequence $\left\{d_1, d_2, d_3, d_4, d_5, d_6\right\}$.
Case 1: There is exactly one instance of $d_k = -1$.
By the "stronger" inequality above, $d_{k-1} = 3$ if $k > 1$, and $d_{k+1} = 3$ if $k < 6$. If $2 \leq k \leq 5$, then $D$ contains the subsequence $\left\{3, -1, 3\right\}$, and the other three $d$-values sum to $7$, so they are either $3$, $3$, and $1$ in some order, or they are $2$, $2$, and $3$ in some order. Thus, each $k \in \{2, 3, 4, 5\}$ for which $d_k = -1$ produces $6$ sequences $D$. If $k = 1$ or $k = 6$, then $D$ begins with $\{-1, 3\}$ or ends with $\{3, -1\}$, respectively. Either way, the remaining four $d$-values sum to $10$, so they can be any permutation of $\{3, 3, 2, 2\}$ (six permutations) or $\{3, 3, 3, 1\}$ (four permutations). Each of these vaues of $k$ yields $6 + 4 = 10$ sequences, so our total count for Case 1 is $4 \cdot 6 + 2 \cdot 10 = 44$.
Case 2: All values of $d$ are positive.
Then, $D$ is a permutation of $\{3, 3, 3, 1, 1, 1\}$, $\{3, 3, 2, 2, 1, 1\}$, $\{3, 2, 2, 2, 2, 1\}$, or $\{2, 2, 2, 2, 2, 2\}$. The number of ways to permute three  $3$s and three $1$s is $\frac{6!}{3! \cdot 3!} = 20$. The number of ways to permute two $3$s, two $2$s, and two $1$s is $\frac{6!}{2! \cdot 2! \cdot 2!} = 90$. The number of ways to permute one $3$, four $2$s, and one $1$ is $\frac{6!}{1! \cdot 4! \cdot 1!} = 30$. Finally, there is obviously only $1$ way to permute six $2$s. Our total count for Case 2 is $20 + 90 + 30 + 1 = 141$.
To complete the justification that all of these $44 + 141 = \boxed{185}$ cases satisfy the original inequality, we leverage the fact that $\{f(x)\}_{x=0}^{6}$ is either monotonically increasing (Case 2) or the union of two monotonically increasing subsequences (Case 1). Consider any monotonically increasing subsequence that starts at $x = a$ and ends at $x = b$. For $a < k \leq b$, $d_k$ will be positive, allowing us to remove the absolute value bars from the original inequality:
$x - y \leq f(x) - f(y) \leq 3(x - y).$
Now, the inequality is transitive; supposing $a \leq x_3 < x_2 < x_1 \leq b$, if the inequality is satisfied at $(x, y) = \left(x_1, x_2\right)$ and at $(x, y) = \left(x_2, x_3\right)$, then it is also satisfied at $(x, y) = \left(x_1, x_3\right)$. If we ever have a decreasing part where $f(x + 1) < f(x)$, then we can use some variant of the inequality $2 \leq f(x + 1) - f(x - 1) \leq 6$, which we derived earlier. This is a specific case of $x - y \leq f(x) - f(y) \leq 3(x - y)$, so we can finish off the argument by invoking transitivity. -kgator
