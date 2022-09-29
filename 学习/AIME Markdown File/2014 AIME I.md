# 2014 AIME I

2014 AIME I Problems/Problem 1
Problem 1

The 8 eyelets for the lace of a sneaker all lie on a rectangle, four equally spaced on each of the longer sides. The rectangle has a width of 50 mm and a length of 80 mm. There is one eyelet at each vertex of the rectangle. The lace itself must pass between the vertex eyelets along a width side of the rectangle and then crisscross between successive eyelets until it reaches the two eyelets at the other width side of the rectangle as shown. After passing through these final eyelets, each of the ends of the lace must extend at least 200 mm farther to allow a knot to be tied. Find the minimum length of the lace in millimeters.

<div align=center><img src="http://latex.artofproblemsolving.com/a/6/1/a61b1059117868ce9afa4391360bfa9424211553.png" height="150px" /></div>

Solution

The rectangle is divided into three smaller rectangles with a width of 50 mm and a length of $\frac{80}{3}$mm. According to the Pythagoream Theorem, the diagonal of the rectangle is $\sqrt{50^2+\frac{80}{3}^2}=\frac{170}{3}$mm. Since that on the lace, there are 6 of these diagonals, a width, and an extension of at least 200 mm on each side. Therefore, the minimum of the lace in millimeters is $6\times \frac{170}{3}+50+200\times 2=\boxed{790}.$

2014 AIME I Problems/Problem 2
Problem 2

An urn contains $4$ green balls and $6$ blue balls. A second urn contains $16$ green balls and $N$ blue balls. A single ball is drawn at random from each urn. The probability that both balls are of the same color is $0.58$. Find $N$.
Solution

First, we find the probability both are green, then the probability both are blue, and add the two probabilities which equals $0.58$. The probability both are green is $\frac{4}{10}\cdot\frac{16}{16+N}$, and the probability both are blue is $\frac{6}{10}\cdot\frac{N}{16+N}$, so $\frac{4}{10}\cdot\frac{16}{16+N}+\frac{6}{10}\cdot\frac{N}{16+N}=\frac{29}{50}.$ Solving this equation, we get $N=\boxed{144}$.

2014 AIME I Problems/Problem 3

Problem 3

Find the number of rational numbers $r,$ $0<r<1,$ such that when $r$ is written as a fraction in lowest terms, the numerator and the denominator have a sum of 1000.
Solution 1

We have that the set of these rational numbers is from $\frac{1}{999}$ to $\frac{499}{501}$ where each each element $\frac{n}{m}$ has $n+m =1000$ and $\frac{n}{m}$ is irreducible.

We note that $\frac{n}{m} =\frac{1000-m}{m}=\frac{1000}{m}-1$. Hence, $\frac{n}{m}$ is irreducible if $\frac{1000}{m}$ is irreducible, and $\frac{1000}{m}$ is irreducible if $m$ is not divisible by 2 or 5. Thus, the answer to the question is the number of integers between 999 and 501 inclusive that are not divisible by 2 or 5.

We note there are 499 numbers between 501 and 999, and

249 numbers are divisible by 2
99 numbers are divisible by 5
49 numbers are divisible by 10

Using the Principle of Inclusion and Exclusion, we get that there are $499-249-99+49=200$ numbers between $501$ and $999$ are not divisible by either $2$ or $5$, so our answer is $\boxed{200}$.

Euler's Totient Function can also be used to arrive at 400 numbers relatively prime to 1000, meaning 200 possible fractions satisfying the necessary conditions.
Solution 2

If the initial manipulation is not obvious, instead ,consider the euclidean algorithm. Instead of using $\frac{n}{m}$ as the fraction to use the euclidean algorithm on, rewrite this as $\frac{500-x}{500+x} gcd(500+x,500-x)=gcd((500+x)+(500-x),500-x)=gcd(1000,500-x)$. Thus, we want gcd(1000,500-x)=1. You can either proceed as solution 1, or consider that no even numbers work, limiting us to 250 choices of numbers and restricting x to be odd. If x is odd, 500-x is odd, so the only possible common factors 1000 and 500-x can share are multiples of 5. Thus, we want to avoid these. There are 50 multiples of 5 less than 500, so the answer is $250-50=\boxed{200}$.

2014 AIME I Problems/Problem 4

Problem 4

Jon and Steve ride their bicycles along a path that parallels two side-by-side train tracks running the east/west direction. Jon rides east at $20$ miles per hour, and Steve rides west at $20$ miles per hour. Two trains of equal length, traveling in opposite directions at constant but different speeds each pass the two riders. Each train takes exactly $1$ minute to go past Jon. The westbound train takes $10$ times as long as the eastbound train to go past Steve. The length of each train is $\tfrac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m+n$.
Solution 1

For the purposes of this problem, we will use miles and minutes as our units; thus, the bikers travel at speeds of $\frac{1}{3}$ mi/min.

Let $d$ be the length of the trains, $r_1$ be the speed of train 1 (the faster train), and $r_2$ be the speed of train 2.

Consider the problem from the bikers' moving frame of reference. In order to pass Jon, the first train has to cover a distance equal to its own length, at a rate of $r_1 - \frac{1}{3}$. Similarly, the second train has to cover a distance equal to its own length, at a rate of $r_2 + \frac{1}{3}$. Since the times are equal and $d = rt$, we have that $\frac{d}{r_1 - \frac{1}{3}} = \frac{d}{r_2 + \frac{1}{3}}$. Solving for $r_1$ in terms of $r_2$, we get that $r_1 = r_2 + \frac{2}{3}$.

Now, let's examine the times it takes the trains to pass Steve. This time, we augment train 1's speed by $\frac{1}{3}$, and decrease train 2's speed by $\frac{1}{3}$. Thus, we have that $\frac{d}{r_2 - \frac{1}{3}} = 10\frac{d}{r_1 + \frac{1}{3}}$.

Multiplying this out and simplifying, we get that $r_1 = 10r_2 - \frac{11}{3}$. Since we now have 2 expressions for $r_1$ in terms of $r_2$, we can set them equal to each other:

$r_2 + \frac{2}{3} = 10r_2 - \frac{11}{3}$. Solving for $r_2$, we get that $r_2 = \frac{13}{27}$. Since we know that it took train 2 1 minute to pass Jon, we know that $1 = \frac{d}{r_2 + \frac{1}{3}}$. Plugging in $\frac{13}{27}$ for $r_2$ and solving for $d$, we get that $d = \frac{22}{27}$, and our answer is $27 + 22 = \boxed{049}$.
Solution 2

Using a similar approach to Solution 1, let the speed of the east bound train be $a$ and the speed of the west bound train be $b$.

So $a-20=b+20$ and $a+20=10(b-20)$.

From the first equation, $a=b+40$. Substituting into the second equation, $b+60=10b-200$ $260=9b$ $b=\frac{260}{9}\text{ mph}$ This means that $a=\frac{260}{9}+40=\frac{620}{9}\text{ mph}$ Checking, we get that the common difference in Jon's speed and trains' speeds is $\frac{440}{9}$ and the differences for Steve is $\frac{800}{9}$ and $\frac{80}{9}$.

This question assumes the trains' lengths in MILES: $\frac{440}{9}\cdot \frac{1}{60}=\frac{440}{540}=\frac{22}{27}\text{ miles}$ Adding up, we get $22+27=\boxed{049}$.

2014 AIME I Problems/Problem 5
Problem 5

Let the set $S = \{P_1, P_2, \dots, P_{12}\}$ consist of the twelve vertices of a regular $12$-gon. A subset $Q$ of $S$ is called "communal" if there is a circle such that all points of $Q$ are inside the circle, and all points of $S$ not in $Q$ are outside of the circle. How many communal subsets are there? (Note that the empty set is a communal subset.)
Solution

By looking at the problem and drawing a few pictures, it quickly becomes obvious that one cannot draw a circle that covers 2 disjoint areas of the 12-gon without including all the vertices in between those areas. In other words, in order for a subset to be communal, all the vertices in the subset must be adjacent to one another. We now count the number of ways to select a row of adjacent vertices. We notice that for any subset size between 1 and 11, there are 12 possible subsets like this (this is true because we can pick any of the 12 vertices as a "starting" vertex, include some number of vertices counterclockwise from that vertex, and generate all possible configurations). However, we also have to include the set of all 12 vertices, as well as the empty set. Thus, the total number is $12*11 + 2 = \boxed{134}$.

2014 AIME I Problems/Problem 6

Problem 6

The graphs $y=3(x-h)^2+j$ and $y=2(x-h)^2+k$ have y-intercepts of $2013$ and $2014$, respectively, and each graph has two positive integer x-intercepts. Find $h$.
Solution 1

Begin by setting $x$ to 0, then set both equations to $h^2=\frac{2013-j}{3}$ and $h^2=\frac{2014-k}{2}$, respectively. Notice that because the two parabolas have to have positive x-intercepts, $h\ge32$.

We see that $h^2=\frac{2014-k}{2}$, so we now need to find a positive integer $h$ which has positive integer x-intercepts for both equations.

Notice that if $k=2014-2h^2$ is -2 times a square number, then you have found a value of $h$ for which the second equation has positive x-intercepts. We guess and check $h=36$ to obtain $k=-578=-2(17^2)$.

Following this, we check to make sure the first equation also has positive x-intercepts (which it does), so we can conclude the answer is $\boxed{036}$.
Solution 2

Let $x=0$ and $y=2013$ for the first equation, resulting in $j=2013-3h^2$. Substituting back in to the original equation, we get $y=3(x-h)^2+2013-3h^2$.

Now we set $y$ equal to zero, since there are two distinct positive integer roots. Rearranging, we get $2013=3h^2-3(x-h)^2$, which simplifies to $671=h^2-(x-h)^2$. Applying difference of squares, we get $671=(2h-x)(x)$.

Now, we know that $x$ and $h$ are both integers, so we can use the fact that $671=61\times11$, and set $2h-x=11$ and $x=61$ (note that letting $x=11$ gets the same result). Therefore, $h=\boxed{036}$.

Note that we did not use the second equation since we took advantage of the fact that AIME answers must be integers. However, one can enter $h=36$ into the second equation to verify the validity of the answer.
Solution 3

Similar to the first two solutions, we deduce that $\text{(-)}j$ and $\text{(-)}k$ are of the form $3a^2$ and $2b^2$, respectively, because the roots are integers and so is the $y$-intercept of both equations. So the $x$-intercepts should be integers also.

The first parabola gives $3h^2+j=3\left(h^2-a^2\right)=2013$ $h^2-a^2=671$ And the second parabola gives $2h^2+k=2\left(h^2-b^2\right)=2014$ $h^2-b^2=1007$

We know that $671=11\cdot 61$ and that $1007=19\cdot 53$. It is just a fitting coincidence that the average of $11$ and $61$ is the same as the average of $19$ and $53$. That is $\boxed{036}$.

To check, we have $(h-a)(h+a)=671=11\cdot 61$ $(h-b)(h+b)=1007=19\cdot 53$ Those are the only two prime factors of $671$ and $1007$, respectively. So we don't need any new factorizations for those numbers.

$h+a=61,h-a=11\implies (h,a)=\{36,25\}$

$h+b=53,h-b=19\implies (h,b)=\{36,17\}$

Thus the common integer value for $h$ is $\boxed{036}$.

$y=3(x-h)^2+j\rightarrow y=3(x-11)(x-61)=3x^2-216x+2013$ $y=2(x-h)^2+k\rightarrow y=2(x-19)(x-53)=2x^2-144x+2014$

2014 AIME I Problems/Problem 7

Problem 7

Let $w$ and $z$ be complex numbers such that $|w| = 1$ and $|z| = 10$. Let $\theta = \arg \left(\tfrac{w-z}{z}\right)$. The maximum possible value of $\tan^2 \theta$ can be written as $\tfrac{p}{q}$, where $p$ and $q$ are relatively prime positive integers. Find $p+q$. (Note that $\arg(w)$, for $w \neq 0$, denotes the measure of the angle that the ray from $0$ to $w$ makes with the positive real axis in the complex plane)
Solution

Let $w = \mathrm{cis}{(\alpha)}$ and $z = 10\mathrm{cis}{(\beta)}$. Then, $\frac{w - z}{z} = \frac{\mathrm{cis}{(\alpha)} - 10\mathrm{cis}{(\beta)}}{10\mathrm{cis}{\beta}}$.

Multiplying both the numerator and denominator of this fraction by $\mathrm{cis}{(-\beta)}$ gives us:

$\frac{w - z}{z} = \frac{1}{10}\mathrm{cis}{(\alpha - \beta)} - 1 = \frac{1}{10}\mathrm{cos}{(\alpha - \beta)} + \frac{1}{10}i\mathrm{sin}{(\alpha - \beta)} - 1$.

We know that $\mathrm{tan}{\theta}$ is equal to the imaginary part of the above expression divided by the real part. Let $x = \alpha - \beta$. Then, we have that:

$\mathrm{tan}{\theta} = \frac{\mathrm{sin}{x}}{\mathrm{cos}{x} - 10}.$

We need to find a maximum of this expression, so we take the derivative:

$\frac{d}{dx} \left (\frac{\mathrm{sin}{x}}{\mathrm{cos}{x} - 10} \right) = \frac{1 - 10\mathrm{cos}{x}}{(\mathrm{cos}{x} - 10)^2}$

Thus, we see that the maximum occurs when $\mathrm{cos}{x} = \frac{1}{10}$. Therefore, $\mathrm{sin}{x} = \pm\frac{\sqrt{99}}{10}$, and $\mathrm{tan}{\theta} = \pm\frac{\sqrt{99}}{99}$. Thus, the maximum value of $\mathrm{tan^2}{\theta}$ is $\frac{99}{99^2}$, or $\frac{1}{99}$, and our answer is $1 + 99 = \boxed{100}$.
Solution 2

Without the loss of generality one can let $z$ lie on the positive x axis and since $arg(\theta)$ is a measure of the angle if $z=10$ then $arg(\frac{w-z}{z})=arg(w-z)$ and we can see that the question is equivelent to having a triangle $OAB$ with sides $OA =10$ $AB=1$ and $OB=t$ and trying to maximize the angle $BOA$ 

using the law of cosines we get: $1^2=10^2+t^2-t*10*2\cos\theta$ rearranging: $20t\cos\theta=t^2+99$ solving for $\cos\theta$ we get:

$\frac{99}{20t}+\frac{t}{20}=\cos\theta$ if we want to maximize $\theta$ we need to minimize $\cos\theta$ , using AM-GM inequality we get that the minimum value for $\cos\theta= 2(\sqrt{\frac{99}{20t}\frac{t}{20}})=2\sqrt{\frac{99}{400}}=\frac{\sqrt{99}}{10}$ hence using the identity $\tan^2\theta=\sec^2\theta-1$ we get $\tan^2\theta=\frac{1}{99}$and our answer is $1 + 99 = \boxed{100}$.
Solution 3

Note that $\frac{w-z}{z}=\frac{w}{z}-1$, and that $\left|\frac{w}{z}\right|=\frac{1}{10}$. Thus $\frac{w}{z}-1$ is a complex number on the circle with radius $\frac{1}{10}$ and centered at $-1$ on the complex plane. Let $\omega$ denote this circle.

Let $A$ and $C$ be the points that represent $\frac{w}{z}-1$ and $-1$ respectively on the complex plane. Let $O$ be the origin. In order to maximize $\tan^2(\theta)$, we need to maximize $\angle{AOC}$. This angle is maximized when $AO$ is tangent to $\omega$. Using the Pythagorean Theorem, we get

$AO^2=1^2-\left(\frac{1}{10}\right)^2=\frac{99}{100}$

Thus

$\tan^2(\theta)=\frac{AC^2}{AO^2}=\frac{1/100}{99/100}=\frac{1}{99}$

And the answer is $1+99=\boxed{100}$.

2014 AIME I Problems/Problem 8

Problem 8

The positive integers $N$ and $N^2$ both end in the same sequence of four digits $abcd$ when written in base 10, where digit a is not zero. Find the three-digit number $abc$.


Solution (general)

We have that $N^2 - N = N(N - 1)\equiv 0\mod{10000}$

Thus, $N(N-1)$ must be divisible by both $5^4$ and $2^4$. Note, however, that if either $N$ or $N-1$ has both a 5 and a 2 in its factorization, the other must end in either 1 or 9, which is impossible for a number that is divisible by either 2 or 5. Thus, one of them is divisible by $2^4 = 16$, and the other is divisible by $5^4 = 625$. Noting that $625 \equiv 1\mod{16}$, we see that 625 would work for $N$, except the thousands digit is 0. The other possibility is that $N$ is a multiple of 16 and $N-1$ is a multiple of 625. In order for this to happen, $N-1$ must be congruent to -1 (mod 16). Since $625 \equiv 1 \mod{16}$, we know that $15*625 = 9375 \equiv 15 \equiv -1 \mod{16}$. Thus, $N-1 = 9375$, so $N = 9376$, and our answer is $\boxed{937}$.
Solution (bashing)

let $N= 10000t+1000a+100b+10c+d$ for positive integer values t,a,b,c,d when we square N we get that $N^2=(10000t+1000a+100b+10c+d)^2=10^8t^2+10^6a^2+10^4b^2+10^2c^2+d^2+2(10^7ta+10^6tb+10^5tc+10^4td+10^5ab+10^4ac+10^3bc+10^ad+10^2bd+10cd)$

However we dont have to deal with this whole expression but only with its last 4 digits so it is suffices to consider only: $2000ad+2000bc+100c^2+200bd+20cd+d^2$ now we need to compare each decimal digit with $1000a+100b+10c+d$ and see whether the digits are congrount in base 10. we first consider the ones digits:

$d^2\equiv d \pmod{10}$

this can happen for only 3 values : 1, 5 and 6

we can try to solve each case

Case 1 $(d=1)$

considering the tenths place we have that:

$20cd=20c\equiv 10c \pmod {100}$ so $c= 0$

considering the hundreds place we have that

$200bd+100c^2= 200b \equiv 100b \pmod{1000}$ so again $b=0$

now considering the thousands place we have that

$2000ad+2000bc = 2000a \equiv 1000a \pmod {10000}$ so we get $a=0$ but $a$ cannot be equal to 0 so we consider $d=5$

Case 2 $(d=5)$

considering the tenths place we have that:

$20cd+20=100c+20\equiv 20 \equiv 10c \mod {100}$ ( the extra 20 is carried from $d^2$ which is equal to 25) so $c=2$

considering the hundreds place we have that

$200bd+100c^2+100c= 1000b+600 \equiv600\equiv 100b \pmod{1000}$ ( the extra 100c is carried from the tenths place) so$b=6$

now considering the thousands place we have that

$2000ad+2000bc +1000b= 10000a+24000+ 6000\equiv0\equiv 1000a \pmod {10000}$ ( the extra 1000b is carried from the hundreds place) so a is equal 0 again

Case 3$(d=6)$

considering the tenths place we have that:

$20cd+30=120c+30\equiv 30+20c \equiv 10c \pmod {100}$ ( the extra 20 is carried from $d^2$ which is equal to 25) if $c=7$ then we have

$30+20*7 \equiv 70\equiv7*10 \pmod{100}$

so $c=7$

considering the hundreds place we have that

$200bd+100c^2+100c+100= 1200b+4900+800 \equiv200b+700\equiv 100b \pmod{1000}$ ( the extra 100c+100 is carried from the tenths place)

if $b=3$ then we have

$700+200*3 \equiv 300\equiv3*100 \pmod {1000}$

so $b=3$

now considering the thousands place we have that

$2000ad+2000bc +1000b+5000+1000= 12000a+42000+ 3000+6000\equiv0\equiv 2000a+1000\equiv 1000a \pmod {10000}$ ( the extra 1000b+6000 is carried from the hundreds place)

if $a=9$ then we have

$2000*9+1000 \equiv 9000\equiv9*1000 \pmod {1000}$

so $a=9$

so we have that the last 4 digits of N are $9376$ and $abc$ is equal to $937$
Solution (not bashing)

By the Chinese Remainder Theorem, the equation $N(N-1)\equiv 0\pmod{10000}$ is equivalent to the two equations: $\begin{align*} N(N-1)&\equiv 0\pmod{16},\\ N(N-1)&\equiv 0\pmod{625}. \end{align*}$ Since $N$ and $N-1$ are coprime, the only solutions are when $(N\mod{16},N\mod{625})\in\{(0,0),(0,1),(1,0),(1,1)\}$.

Let $\varphi:\mathbb Z/10000\mathbb Z\to\mathbb Z/16\mathbb Z\times\mathbb Z/625\mathbb Z$, $x\mapsto (x\mod{16},x\mod{625})$. The statement of the Chinese Remainder theorem is that $\varphi$ is an isomorphism between the two rings. In this language, the solutions are $\varphi^{-1}(0,0)$, $\varphi^{-1}(0,1)$, $\varphi^{-1}(1,0)$, and $\varphi^{-1}(1,1)$. Now we easily see that $\varphi^{-1}(0,0)=0$ and $\varphi^{-1}(1,1)=1$. Noting that $625\equiv 1\pmod{16}$, it follows that $\varphi^{-1}(1,0)=625$. To compute $\varphi^{-1}(0,1)$, note that $(0,1)=15(1,0)+(1,1)$ in $\mathbb Z/16\mathbb Z\times\mathbb Z/625\mathbb Z$, so since $\varphi^{-1}$ is linear in its arguments (by virtue of being an isomorphism), $\varphi^{-1}(0,1)=15\varphi^{-1}(1,0)+\varphi^{-1}(1,1)=15\times 625+1=9376$.

The four candidate digit strings $abcd$ are then $0000,0001,0625,9376$. Of those, only $9376$ has nonzero first digit, and therefore the answer is $\boxed{937}$.

2014 AIME I Problems/Problem 9

Problem 9

Let $x_1<x_2<x_3$ be the three real roots of the equation $\sqrt{2014}x^3-4029x^2+2=0$. Find $x_2(x_1+x_3)$.
Solution

Substituting $n$ for $2014$, we get $\sqrt{n}x^3 - (1+2n)x^2 + 2 = \sqrt{n}x^3 - x^2 - 2nx^2 + 2 = x^2(\sqrt{n}x - 1) - 2(nx^2 - 1) = 0$. Noting that $nx^2 - 1$ factors as a difference of squares to $(\sqrt{n}x - 1)(\sqrt{n}x+1)$, we can factor the left side as $(\sqrt{n}x - 1)(x^2 - 2(\sqrt{n}x+1))$. This means that $\frac{1}{\sqrt{n}}$ is a root, and the other two roots are the roots of $x^2 - 2\sqrt{n}x - 2$. Note that the constant term of the quadratic is negative, so one of the two roots is positive and the other is negative. In addition, by Vieta's Formulas, the roots sum to $2\sqrt{n}$, so the positive root must be greater than $2\sqrt{n}$ in order to produce this sum when added to a negative value. Since $0 < \frac{1}{\sqrt{2014}} < 2\sqrt{2014}$ is clearly true, $x_2 = \frac{1}{\sqrt{2014}}$ and $x_1 + x_3 = 2\sqrt{2014}$. Multiplying these values together, we find that $x_2(x_1+x_3) = \boxed{002}$.


Solution 2

From Vieta's formulae, we know that $x_1x_2x_3 = \frac{-2}{\sqrt{2014}}, x_1 + x_2 + x_3 = \frac{4029}{\sqrt{2014}},$ and $x_1x_2 + x_2x_3 + x_1x_3 = 0.$ Thus, we know that $x_2(x_1 + x_3) = -x_1x_3$(since the AIME has only positive integer answers).

Now consider the polynomial with roots $x_1x_2, x_2x_3,$ and $x_1x_3$. Expanding the polynomial $(x - x_1x_2)(x - x_2x_3)(x - x_1x_3)$, we get the polynomial $x^3 - (x_1x_2 + x_2x_3 + x_1x_3)x^2 + (x_1x_2x_3)(x_1 + x_2 + x_3)x - (x_1x_2x_3)^2.$ Substituting the values obtained from Vieta's formulae, we find that this polynomial is $x^3 - \frac{8058}{2014}x - \frac{4}{2014}$. We know $x_1x_3$ is a root of this polynomial, so we set it equal to 0 and simplify the resulting expression to $1007x^3 - 4029x - 2 = 0$.

Given the problem conditions, we know there must be at least 1 integer solution, and that it can't be very large (because the $x^3$ term quickly gets much larger/smaller than the other 2). Trying out some numbers, we quickly find that $x = -2$ is a solution. Factoring it out, we get that $1007x^3 - 4029x - 2 = (x+2)(1007x^2 - 2014x - 1)$. Since the other quadratic factor clearly does not have any integer solutions and this is an AIME problem, we know that this must be the answer they are looking for. Thus, $x_1x_3 = -2$, so $-x_1x_3 = \boxed{002}$.
Solution 3

Observing the equation, we notice that the coefficient for the middle term $-4029$ is equal to $-2{\sqrt{2014}}^2-1$. Also notice that the coefficient for the ${x^3}$ term is $\sqrt{2014}$. Therefore, if the original expression was to be factored into a linear binomial and a quadratic trinomial, the $x$ term of the binomial would have a coefficient of $\sqrt{2014}$. Similarly, the $x$ term of the trinomial would also have a coefficient of $\sqrt{2014}$. The factored form of the expression would look something like the following: $({\sqrt{2014}}x-a)(x^2-n{\sqrt{2014}}x-b)$ where ${a, b,c}$ are all positive integers (because the ${x^2}$ term of the original expression is negative, and the constant term is positive), and ${ab=2}$.

Multiplying this expression out gives ${{\sqrt{2014}x^3-(2014n+a)x^2+(an{\sqrt{2014}}-b{\sqrt{2014}})x+ab}}$. Equating this with the original expression gives ${2014n+a}=-4029$. The only positive integer solutions of this expression is $(n, a)=(1, 2015)$ or $(2, 1)$. If $(n, a)=(1, 2015)$ then setting ${an{\sqrt{2014}}-b{\sqrt{2014}}}=0$ yields ${b=2015}$ and therefore ${ab=2015^2}$ which clearly isn't equal to $2$ as the constant term. Therefore, $(n, a)=(2, 1)$ and the factored form of the expression is: $({\sqrt{2014}}x-1)(x^2-2{\sqrt{2014}}x-2)$. Therefore, one of the three roots of the original expression is ${x=\frac{1}{\sqrt{2014}}}$. Using the quadratic formula yields the other two roots as ${x={\sqrt{2014}}+{\sqrt{2016}}}$ and ${x={\sqrt{2014}}-{\sqrt{2016}}}$. Arranging the roots in ascending order (in the order $x_1<x_2<x_3$), ${\sqrt{2014}}-{\sqrt{2016}}<\frac{1}{\sqrt{2014}}<{\sqrt{2014}}+{\sqrt{2016}}$. Therefore, $x_2(x_1+x_3)=\frac{1}{\sqrt{2014}}{2\sqrt{2014}}=\boxed{002}$.

2014 AIME I Problems/Problem 10
Problem 10

A disk with radius $1$ is externally tangent to a disk with radius $5$. Let $A$ be the point where the disks are tangent, $C$ be the center of the smaller disk, and $E$ be the center of the larger disk. While the larger disk remains fixed, the smaller disk is allowed to roll along the outside of the larger disk until the smaller disk has turned through an angle of $360^\circ$. That is, if the center of the smaller disk has moved to the point $D$, and the point on the smaller disk that began at $A$ has now moved to point $B$, then $\overline{AC}$ is parallel to $\overline{BD}$. Then $\sin^2(\angle BEA)=\tfrac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m+n$.
Solution

<div align=center><img src="http://latex.artofproblemsolving.com/3/4/3/3437dc90078c60a63a9742e1f9aa0a118a8f4cd3.png" height=”50px” /></div>

Let $F$ be the new tangency point of the two disks. The smaller disk rolled along minor arc $\overarc{AF}$ on the larger disk. Let $\alpha = \angle AEF$, in radians. The smaller disk must then have rolled along an arc of length $5\alpha$, since the larger disk has a radius of $5$. Since all of the points on major arc $\overarc{BF}$ on the smaller disk have come into contact with the larger disk at some point during the rolling, and none of the other points on the smaller disk did, the length of major arc $\overarc{BF}$ equals the length of minor arc $\overarc{AF}$, or $5\alpha$. Since $\overline{AC} || \overline{BD}$, $\angle BDF \cong \angle FEA$, so the angles of minor arc $\overarc{BF}$ and minor arc $\overarc{AF}$ are equal, so minor arc $\overarc{BF}$ has an angle of $\alpha$. Since the smaller disk has a radius of $1$, the length of minor arc $\overarc{BF}$ is $\alpha$. This means that $5\alpha + \alpha$ equals the circumference of the smaller disk, so $6\alpha = 2\pi$, or $\alpha = \frac{\pi}{3}$.

Now, to find $\sin^2{\angle BEA}$, we construct $\triangle BDE$. Also, drop a perpendicular from $D$ to $\overline{EA}$, and call this point $X$. Since $\alpha = \frac{\pi}{3}$, $\angle DXE$ is right, and $DE = 6$, $EX = 3$ and $DX = 3\sqrt{3}$. Now drop a perpendicular from $B$ to $\overline{EA}$, and call this point $Y$. Since $\overline{BD} || \overline{EA}$, $XY = BD = 1$, and $BY = DX = 3\sqrt{3}$. Thus, we know that $EY = EX - XY = 3 - 1 = 2$, and by using the Pythagorean Theorem on $\triangle BEY$, we get that $BE = \sqrt{31}$. Thus, $\sin{\angle BEA} = \frac{\sqrt{27}}{\sqrt{31}}$, so $\sin^2{\angle BEA} = \frac{27}{31}$, and our answer is $27 + 31 = \boxed{058}$.

2014 AIME I Problems/Problem 11

Problem 11

A token starts at the point $(0,0)$ of an $xy$-coordinate grid and then makes a sequence of six moves. Each move is 1 unit in a direction parallel to one of the coordinate axes. Each move is selected randomly from the four possible directions and independently of the other moves. The probability the token ends at a point on the graph of $|y|=|x|$ is $\frac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m+n$.
Solution (casework)

We have 4 possible moves: U, D, R, and L. The total number of paths that could be taken is $4^6​$, or $4096​$. There are 4 possible cases that land along the line $y = x​$: $x,y = \pm 1; x,y = \pm 2; x,y = \pm 3;​$ or $x = y = 0​$. We will count the number of ways to end up at $(1,1), (2,2),​$ and $(3,3)​$, multiply them by 4 to account for the other quadrants, and add this to the number of ways to end up at $(0,0)​$.

Case 1: The token ends at $(3, 3)$. In order for the token to end up here, it must have had 3 right moves, and 3 up moves. In other words, the total number of ways to get here is the ways to rearrange the letters in the sequence $RRRUUU$, which is ${6\choose 3} = 20.$

Case 2: The token ends at $(2,2)$. In order for the token to end up here, it could have had 2 up moves, 3 right moves, and 1 left move; or 2 right moves, 3 up moves, and 1 down move. Thus, the total number of ways to get here is sum of the ways to rearrange the letters in the sequences $RRRLUU$ and $UUUDRR$, both of which are ${6\choose 1}{5\choose 2} = 60$, for a total of $120$ possibilities.

Case 3: The token ends at $(1,1)$. In order for the token to end up here, it could have had:

1 right move, 3 up moves, and 2 down moves. In this case, the number of ways to rearrange the letters in the sequence $RUUUDD$ is ${6\choose 1}{5\choose 2} = 60.$

1 up move, 3 right moves, and 2 left moves. In this case, the number of ways to rearrange the letters in the sequence $URRRLL$ is ${6\choose 1}{5\choose 2} = 60.$

2 right moves, 1 left move, 2 up moves, and 1 down move. In this case, the number of ways to rearrange the letters in the sequence $UUDRRL$ is ${6\choose 1}{5\choose 1}{4\choose 2} = 180.$

Thus, the total number of ways to end up at $(1,1)$ is $300$.


Case 4: The token ends at $(0,0)$. In order for the token to end up here, it could have had:

3 right moves and 3 left moves. In this case, the number of ways to rearrange the letters in the sequence $RRRLLL$ is ${6\choose 3} = 20.$

3 up moves and 3 down moves. In this case, the number of ways to rearrange the letters in the sequence $UUUDDD$ is ${6\choose 3} = 20.$

1 right move, 1 left move, 2 up moves, and 2 down moves. In this case, the number of ways to rearrange the letters in the sequence $RLUUDD$ is ${6\choose 1}{5\choose 1}{4\choose 2} = 180.$

1 up move, 1 down move, 2 right moves, and 2 left moves. In this case, the number of ways to rearrange the letters in the sequence $RRLLUD$ is ${6\choose 1}{5\choose 1}{4\choose 2} = 180.$

Thus, the total number of ways to end up at $(0,0)$ is $400$.

Adding these cases together, we get that the total number of ways to end up on $y = x$ is $4(20 + 120 + 300) + 400 = 2160$. Thus, our probability is $\frac{2160}{4096}$. When this fraction is fully reduced, it is $\frac{135}{256}$, so our answer is $135 + 256 = \boxed{391}.$
Solution (casework 2)

We split this into cases by making a chart. In each row, the entries $(\pm1)​$ before the dividing line represent the right or left steps (without regard to order), and the entries after the dividing line represent the up or down steps (again, without regard to order). This table only represents the cases where the ending position $(x,y)​$ satisfies $x=y​$. $$\begin{array}{ccccccccccccl} {R (+)\qquad L (-)}& |&{U(+)\qquad D (-)}\\ +1&& +1&& +1&| & +1&& +1&& +1\\ +1&& +1&& -1& | & +1&& +1&& -1\\ +1&& -1&& -1& | & +1&& -1&& -1\\ -1 && -1&& -1& | & -1&& -1&& -1\\ \\ +1&& +1&& +1&& -1 &|& +1&& +1\\ +1&& +1&& -1 && -1 &|& +1 && -1\\ +1&& -1&& -1 && -1 &|& -1 && -1 &&(\times 2 \text{ for symmetry by swapping }R-L\text{ and }U-D)\\ \\ +1&& +1 &&+1 &&-1&& -1& |& +1\\ +1&& +1 &&-1&& -1&& -1 &|& -1&& (\times 2\text{ symmetry})\\ \\ +1&& +1 &&+1&& -1&& -1 &&-1&| & (\times2 \text{ symmetry})\\ \end{array}​$$ Note that to account for the cases when $x=-y​$, we can simply multiply the $U-D​$ steps by $-1​$, so for example, the first row would become $+1 \qquad+1\qquad +1 \ \ \ \ |\ \ \ -1\qquad -1\qquad -1.​$ Therefore, we must multiply the number of possibilities in each case by $2​$, except for when $x=y=0​$.

Now, we compute the number of possibilities for each case. In particular, we must compute the number of $RLUD$ words, where $R$ represents $+1$ to the left of $|$, $L$ represents $-1$ to the left of $|$, $U$ represents $+1$ to the right of $|$, and $D$ represents $-1$ to the right of $|$. Using multinomials, we compute the following numbers of possibilities for each case. ${6\choose 3}\cdot 2+ \frac{6!}{2!2!}\cdot 2 + \frac{6!}{2!2!} \cdot 2 + {6\choose 3} \cdot 2 = 2(20 + 180 + 180 + 20) = 800$ $\frac{6!}{3!2!}\cdot 2 + \frac{6!}{2!2!} + \frac{6!}{3!2!}\cdot 2 = 120 + 180 + 120 = 420\ (\times2\text{ for symmetry})$ $\frac{6!}{3!2!} \cdot 2 + \frac{6!}{3!2!} \cdot 2 = 120 + 120 = 240\ (\times2\text{ for symmetry})$ ${6\choose 3} = 20\ (\times 2\text{ for symmetry})$

Thus, there are $800 + 840 + 480 + 40 = 2160$ possibilities where $|x|=|y|$. Because there are $4^6$ total possibilities, the probability is $\frac{2160}{4^6} = \frac{135}{256}$, so the answer is $\boxed{391}.$

2014 AIME I Problems/Problem 12

Problem 12

Let $A=\{1,2,3,4\}$, and $f$ and $g$ be randomly chosen (not necessarily distinct) functions from $A$ to $A$. The probability that the range of $f$ and the range of $g$ are disjoint is $\tfrac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m$.
Solutions
Solution 1 (casework)

We note there are $4^4 = 256$ possibilities for each of $f$ and $g$ from $A$ to $A$ since the input of the four values of each function has four options each for an output value.

We proceed with casework to determine the number of possible $f$ with range 1, 2, etc.

    Range 1:

There are 4 possibilities: all elements output to 1, 2, 3, or 4.

    Range 2:

We have ${{4}\choose {2}} = 6$ ways to choose the two output elements for $f$. At this point we have two possibilities: either $f$ has 3 of 1 element and 1 of the other, or 2 of each element. In the first case, there are 2 ways to pick the element which there are 3 copies of, and ${{4}\choose {1}} = 4$ ways to rearrange the 4 elements, for a total of $6 * 4 * 2 = 48$ ways for this case. For the second case, there are ${{4}\choose {2}} = 6$ ways to rearrange the 4 elements, for a total of $6 * 6 = 36$ ways for this case. Adding these two, we get a total of $36 + 48 = 84$ total possibilities.

    Range 3:

We have ${{4}\choose {3}} = 4$ ways to choose the three output elements for $f$. We know we must have 2 of 1 element and 1 of each of the others, so there are 3 ways to pick this element. Finally, there are ${{4}\choose{1}}*{{3}\choose{1}} = 12$ ways to rearrange these elements (since we can pick the locations of the 2 single elements in this many ways), and our total is $4 * 3 * 12 = 144$ ways.

    Range 4:

Since we know the elements present, we have $4!$ ways to arrange them, or 24 ways.

(To check, $4 + 84 + 144 + 24 = 256$, which is the total number of possibilities).

We now break $f$ down by cases, and count the number of $g$ whose ranges are disjoint from $f$'s.

    Case 1: $f$'s range contains 1 element

We know that there are 3 possibilities for $g$ with 1 element. Since half the possibilities for $g$ with two elements will contain the element in $f$, there are $84/2 = 42$ possibilities for $g$ with 2 elements. Since $3/4$ the possibilities for $g$ with 3 elements will contain the element in $f$, there are $144/4 = 36$ possibilities for $g$ with 3 elements. Clearly, no 4-element range for $g$ is possible, so the total number of ways for this case to happen is $4(3 + 42 + 36) = 324$.

    Case 2: $f$'s range contains 2 elements

We know that there are 2 possibilities for $g$ with 1 element. If $g$ has 2 elements in its range, they are uniquely determined, so the total number of sets with a range of 2 elements that work for $g$ is $84/6 = 14$. No 3-element or 4-element ranges for $g$ are possible. Thus, the total number of ways for this to happen is $84(2 + 14) = 1344$.


    Case 3: $f$'s range contains 3 elements

In this case, there is only 1 possibility for $g$ - all the output values are the element that does not appear in $f$'s range. Thus, the total number of ways for this to happen is $144$.

    Summing the cases

We find that the probability of $f$ and $g$ having disjoint ranges is equal to:

$\frac{324 + 1344 + 144}{256^2}=\frac{1812}{2^{16}}= \frac{453}{2^{14}}$

Thus, our final answer is $\boxed{453}$.
Solution 2 (simplification of above)

As before, there are 4 functions with a range of size 1, 84 with a range of size 2, and 144 with a range of size 3. If the range of $f$ has size $k$, the codomain of $g$ is restricted to a set of size $4 - k$. Any function from $A$ into this codomain will do, so there are $(4 - k)^4$ possibilities for $g$ given a function $f$. The probability of $f$ and $g$ having disjoint ranges is then $\frac{4\cdot 3^4 + 84\cdot 2^4 + 144\cdot 1^4}{(4^4)^2} = \frac{\boxed{453}}{2^{14}}.$

2014 AIME I Problems/Problem 13

Problem 13

On square $ABCD$, points $E,F,G$, and $H$ lie on sides $\overline{AB},\overline{BC},\overline{CD},$ and $\overline{DA},$ respectively, so that $\overline{EG} \perp \overline{FH}$ and $EG=FH = 34$. Segments $\overline{EG}$ and $\overline{FH}$ intersect at a point $P$, and the areas of the quadrilaterals $AEPH, BFPE, CGPF,$ and $DHPG$ are in the ratio $269:275:405:411.$ Find the area of square $ABCD$.

<div align=center><img src="http://latex.artofproblemsolving.com/e/1/1/e1175984ad8a8e7468972e727cc95e27117b7d92.png" height=”150px” /></div>

Solution

Notice that $269+411=275+405$. This means $\overline{EG}$ passes through the centre of the square.

Draw $\overline{IJ} \parallel \overline{HF}$ with $I$ on $\overline{AD}$, $J$ on $\overline{BC}$ such that $\overline{IJ}$ and $\overline{EG}$ intersects at the centre of the square $O$.

Let the area of the square be $1360a$. Then the area of $HPOI=71a$ and the area of $FPOJ=65a$. This is because $\overline{HF}$ is perpendicular to $\overline{EG}$ (given in the problem), so $\overline{IJ}$ is also perpendicular to $\overline{EG}$. These two orthogonal lines also pass through the center of the square, so they split it into 4 congruent quadrilaterals.

Let the side length of the square be $d=\sqrt{1360a}$.

Draw $\overline{OK}\parallel \overline{HI}$ and intersects $\overline{HF}$ at $K$. $OK=d\cdot\frac{HFJI}{ABCD}=\frac{d}{10}$.

The area of $HKOI=\frac12\cdot HFJI=68a$, so the area of $POK=3a$.

Let $\overline{PO}=h$. Then $KP=\frac{6a}{h}$

Consider the area of $PFJO$. $\frac12(PF+OJ)(PO)=65a$ $(17-\frac{3a}{h})h=65a$ $h=4a$

Thus, $KP=1.5$.

Solving $(4a)^2+1.5^2=(\frac{d}{10})^2=13.6a$, we get $a=\frac58$.

Therefore, the area of $ABCD=1360a=\boxed{850}$
Lazy Solution

$269+275+405+411=1360$, a multiple of $17$. In addition, $EG=FH=34$, which is $17\cdot 2$. Therefore, we suspect the square of the "hypotenuse" of a right triangle, corresponding to $EG$ and $FH$ must be a multiple of $17$. All of these triples are primitive:

$17=1^2+4^2$ $34=3^2+5^2$ $51=\emptyset$ $68=\emptyset\text{ others}$ $85=2^2+9^2=6^2+7^2$ $102=\emptyset$ $119=\emptyset \dots$

The sides of the square can only equal the longer leg, or else the lines would have to extend outside of the square. Substituting $EG=FH=34$: $\sqrt{17}\rightarrow 34\implies 8\sqrt{17}\implies A=\textcolor{red}{1088}$ $\sqrt{34}\rightarrow 34\implies 5\sqrt{34}\implies A=850$ $\sqrt{85}\rightarrow 34\implies \{18\sqrt{85}/5,14\sqrt{85}/5\}\implies A=\textcolor{red}{1101.6,666.4}$

Thus, $\boxed{850}$ is the only valid answer.

2014 AIME I Problems/Problem 14
Problem 14

Let $m$ be the largest real solution to the equation

$\frac{3}{x-3}+\frac{5}{x-5}+\frac{17}{x-17}+\frac{19}{x-19}=x^2-11x-4$

There are positive integers $a$, $b$, and $c$ such that $m=a+\sqrt{b+\sqrt{c}}$. Find $a+b+c$.
Solution

The first step is to notice that the 4 on the right hand side can simplify the terms on the left hand side. If we distribute 1 to $\frac{3}{x-3}$, then the fraction becomes of the form $\frac{x}{x - 3}$. A similar cancellation happens with the other four terms. If we assume $x = 0$ is not the highest solution (if we realize it is, we can always backtrack) we can cancel the common factor of $x$ from both sides of the equation.

$\frac{1}{x - 3} + \frac{1}{x - 5} + \frac{1}{x - 17} + \frac{1}{x - 19} = x - 11$

Then, if we make the substitution $y = x - 11$, we can further simplify.

$\frac{1}{y + 8} + \frac{1}{y + 6} + \frac{1}{y - 6} + \frac{1}{y - 8} =y$

If we group and combine the terms of the form $y - n$ and $y + n$, we get this equation:

$\frac{2y}{y^2 - 64} + \frac{2y}{y^2 - 36} = y$

Then, we can cancel out a $y$ from both sides, knowing that $x = 11$ is a possible solution. After we do that, we can make the final substitution $z = y^2$.

$\frac{2}{z - 64} + \frac{2}{z - 36} = 1$

$2z - 128 + 2z - 72 = (z - 64)(z - 36)$

$4z - 200 = z^2 - 100z + 64(36)$

$z^2 - 104z + 2504 = 0$

Using the quadratic formula, we get that the largest solution for $z$ is $z = 52 + 10\sqrt{2}$. Then, repeatedly substituting backwards, we find that the largest value of $x$ is $11 + \sqrt{52 + \sqrt{200}}$. The answer is thus $11 + 52 + 200 = \boxed{263}$

2014 AIME I Problems/Problem 15

Problem 15

In $\triangle ABC$, $AB = 3$, $BC = 4$, and $CA = 5$. Circle $\omega$ intersects $\overline{AB}$ at $E$ and $B$, $\overline{BC}$ at $B$ and $D$, and $\overline{AC}$ at $F$ and $G$. Given that $EF=DF$ and $\frac{DG}{EG} = \frac{3}{4}$, length $DE=\frac{a\sqrt{b}}{c}$, where $a$ and $c$ are relatively prime positive integers, and $b$ is a positive integer not divisible by the square of any prime. Find $a+b+c$.
Solution 1

Since $\angle DBE = 90^\circ$, $DE$ is the diameter of $\omega$. Then $\angle DFE=\angle DGE=90^\circ$. But $DF=FE$, so $\triangle DEF$ is a 45-45-90 triangle. Letting $DG=3x$, we have that $EG=4x$, $DE=5x$, and $DF=EF=\frac{5x}{\sqrt{2}}$.

Note that $\triangle DGE \sim \triangle ABC$ by SAS similarity, so $\angle BAC = \angle GDE$ and $\angle ACB = \angle DEG$. Since $DEFG$ is a cyclic quadrilateral, $\angle BAC = \angle GDE=180^\circ-\angle EFG = \angle AFE$ and $\angle ACB = \angle DEG = \angle GFD$, implying that $\triangle AFE$ and $\triangle CDF$ are isosceles. As a result, $AE=CD=\frac{5x}{\sqrt{2}}$, so $BE=3-\frac{5x}{\sqrt{2}}$ and $BD =4-\frac{5x}{\sqrt{2}}$.

Finally, using the Pythagorean Theorem on $\triangle BDE$, $\left(3-\frac{5x}{\sqrt{2}}\right)^2 + \left(4-\frac{5x}{\sqrt{2}}\right)^2 = (5x)^2$ Solving for $x$, we get that $x=\frac{5\sqrt{2}}{14}$, so $DE=5x=\frac{25\sqrt{2}}{14}$. Thus, the answer is $25+2+14=\boxed{041}$.
Solution 2

<div align=center><img src="http://latex.artofproblemsolving.com/b/4/b/b4b6194265e3b1e4fb6200d1550ecfc29dfc6236.png" height=”150px” /></div>

First we note that $\triangle DEF$ is an isosceles right triangle with hypotenuse $\overline{DE}$ the same as the diameter of $\omega$. We also note that $\triangle DGE \sim \triangle ABC$ since $\angle EGD$ is a right angle and the ratios of the sides are $3:4:5$.

From congruent arc intersections, we know that $\angle GED \cong \angle GBC$, and that from similar triangles $\angle GED$ is also congruent to $\angle GCB$. Thus, $\triangle BGC$ is an isosceles triangle with $BG = GC$, so $G$ is the midpoint of $\overline{AC}$ and $AG = GC = 5/2$. Similarly, we can find from angle chasing that $\angle ABF = \angle EDF = \frac{\pi}4$. Therefore, $\overline{BF}$ is the angle bisector of $\angle B$. From the angle bisector theorem, we have $\frac{AF}{AB} = \frac{CF}{CB}$, so $AF = 15/7$ and $CF = 20/7$.

Lastly, we apply power of a point from points $A$ and $C$ with respect to $\omega$ and have $AE \times AB=AF \times AG$ and $CD \times CB=CG \times CF$, so we can compute that $EB = \frac{17}{14}$ and $DB = \frac{31}{14}$. From the Pythagorean Theorem, we result in $DE = \frac{25 \sqrt{2}}{14}$, so $a+b+c=25+2+14= \boxed{041}$


Also: $FG=\frac{20}{7}-\frac{5}{2}=\frac{5}{2}-\frac{15}{7}=\frac{5}{14}$. We can also use Ptolemy's Theorem on quadrilateral $DEFG$ to figure what $FG$ is in terms of $d$: $DE\cdot FG+DG\cdot EF=DF\cdot EG$ $d\cdot FG+\frac{3d}{5}\cdot \frac{d}{\sqrt{2}}=\frac{4d}{5}\cdot \frac{d}{\sqrt{2}}$ $d\cdot FG+\frac{3d^2}{5\sqrt{2}}=\frac{4d^2}{5\sqrt{2}}\implies FG=\frac{d}{5\sqrt{2}}$ Thus $\frac{d}{5\sqrt{2}}=\frac{5}{14}\rightarrow d=5\sqrt{2}\cdot\frac{5}{14}=\frac{25\sqrt{2}}{14}$. $a+b+c=25+2+14= \boxed{041}$

2014 AIME I Answer Key
1.	790
    2.144
    3.200
    4.049
    5.134
    6.036
    7.100
    8.937
    9.002
    10.058
    11.391
    12.453
    13.850
    14.263
    15.041

