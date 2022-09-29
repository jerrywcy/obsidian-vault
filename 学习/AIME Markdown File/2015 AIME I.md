# 2015 AIME I

2015 AIME I Problems/Problem 1
Problem

The expressions $A$ = $1 \times 2 + 3 \times 4 + 5 \times 6 + \cdots + 37 \times 38 + 39$ and $B$ = $1 + 2 \times 3 + 4 \times 5 + \cdots + 36 \times 37 + 38 \times 39$ are obtained by writing multiplication and addition operators in an alternating pattern between successive integers. Find the positive difference between integers $A$ and $B$.
Solution

We see that

$A=(1\times 2)+(3\times 4)+(5\times 6)+\cdots +(35\times 36)+(37\times 38)+39$

and

$B=1+(2\times 3)+(4\times 5)+(6\times 7)+\cdots +(36\times 37)+(38\times 39)$.

Therefore,

$B-A=-38+(2\times 2)+(2\times 4)+(2\times 6)+\cdots +(2\times 36)+(2\times 38)$

$=-38+4\times (1+2+3+\cdots+19)$

$=-38+4\times\frac{20\cdot 19}{2}=-38+760=\boxed{722}.$ 

2015 AIME I Problems/Problem 2

Problem

The nine delegates to the Economic Cooperation Conference include $2$ officials from Mexico, $3$ officials from Canada, and $4$ officials from the United States. During the opening session, three of the delegates fall asleep. Assuming that the three sleepers were determined randomly, the probability that exactly two of the sleepers are from the same country is $\frac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m+n$.
Solution

The total number of ways to pick $3$ officials from $9$ total is $\binom{9}{3} = 84$, which will be our denominator. Now we can consider the number of ways for exactly two sleepers to be from the same country for each country individually and add them to find our numerator:

There are $7$ different ways to pick $3$ delegates such that $2$ are from Mexico, simply because there are $9-2=7$ "extra" delegates to choose to be the third sleeper once both from Mexico are sleeping.

There are $3\times6=18$ ways to pick from Canada, as each Canadian can be left out once and each time one is left out there are $9-3=6$ "extra" people to select one more sleeper from.

Lastly, there are $6\times5=30$ ways to choose for the United States. It is easy to count $6$ different ways to pick $2$ of the $4$ Americans, and each time you do there are $9-4=5$ officials left over to choose from.

Thus, the fraction is $\frac{7+18+30}{84} = \frac{55}{84}$. Since this does not reduce, the answer is $55+84=\boxed{139}$.
Solution 2

The total number of ways to pick $3$ officials from $9$ total is $84$. We note that two sleepers are asleep and one is awake if and only if the sleepers come from two distinct countries. The sleeping officials can be from either $1$, $2$, or $3$ countries.


If the sleeping officials are from a single country, they can be from Canada in $1$ way and from the United States in $4$ ways, so there are $5$ total possibilities.


If the sleeping officials are from $3$ different countries, there must be one from each. So there are $2 \cdot 3 \cdot 4 = 24$ total possibilities.

Out of $84$ total, $5+24=29$ possibilities are different from the case we are looking for, so there are $84-29=55$ total ways to choose 22 officials from one country and a single official from another country. As $55$ and $84$ share no common factors, we have $55+84=\boxed{139}$. 

2015 AIME I Problems/Problem 3

Problem

There is a prime number $p$ such that $16p+1$ is the cube of a positive integer. Find $p$.
Solution

Let the positive integer mentioned be $a$, so that $a^3 = 16p+1$. Note that $a$ must be odd, because $16p+1$ is odd.

Rearrange this expression and factor the left side (this factoring can be done using $(a^3-b^3) = (a-b)(a^2+a b+b^2)$, or synthetic divison once it is realized that $a = 1$ is a root):

$a^3-1 = 16p$

$(a-1)(a^2+a+1) = 16p$

Because $a$ is odd, $a-1$ is even and $a^2+a+1$ is odd. If $a^2+a+1$ is odd, $a-1$ must be some multiple of $16$. However, for $a-1$ to be any multiple of $16$ other than $16$ would mean $p$ is not a prime. Therefore, $a-1 = 16$ and $a = 17$.

Then our other factor, $a^2+a+1$, is the prime $p$:

$(a-1)(a^2+a+1) = 16p$

$(17-1)(17^2+17+1) =16p$

$p = 289+17+1 = \boxed{307}$.
Another Solution

Since $16p+1$ is odd, let $16p+1 = (2a+1)^3$

$16p+1 = (2a+1)^3 = 8a^3+12a^2+6a+1$

We get:

$8p=a(4a^2+6a+3)$

We know p is a prime number and apparently not an even number. and $4a^2+6a+3$ is an odd number, so a must equal 8.

so we get $p=4a^2+6a+3=4*8^2+6*8+3=\boxed{307}$. 

2015 AIME I Problems/Problem 4

Problem

In a drawer Sandy has $5$ pairs of socks, each pair a different color. On Monday Sandy selects two individual socks at random from the $10$ socks in the drawer. On Tuesday Sandy selects $2$ of the remaining $8$ socks at random and on Wednesday two of the remaining $6$ socks at random. The probability that Wednesday is the first day Sandy selects matching socks is $\frac{m}{n}$, where $m$ and $n$ are relatively prime positive integers, Find $m+n$.
Solution
Solution 1

Let the fifth sock be arbitrary; the probability that the sixth sock matches in color is $\dfrac{1}{9}$.

Assuming this, then let the first sock be arbitrary; the probability that the second sock does not match is $\dfrac{6}{7}.$

The only "hard" part is the third and fourth sock. But that is simple casework. If the third sock's color matches the color of one of the first two socks (which occurs with probability $\dfrac{2}{6} = \dfrac{1}{3}$), then the fourth sock can be arbitrary. Otherwise (with probability $\dfrac{2}{3}$), the fourth sock can be chosen with probability $\dfrac{4}{5}$ (5 socks left, 1 sock that can possibly match the third sock's color). The desired probability is thus $\frac{1}{9} \cdot \frac{6}{7} \cdot (\dfrac{1}{3} + \dfrac{2}{3} \cdot \dfrac{4}{5}) = \frac{26}{315}.$ The answer is $\boxed{341}.$
Solution 2

The key is to count backwards. First, choose the pair which you pick on Wednesday in $5$ ways. Then there are four pairs of socks for you to pick a pair of on Tuesday, and you don't want to pick a pair. Since there are $4$ pairs, the number of ways to do this is $\dbinom{8}{2}-4$. Then, there are two pairs and two nonmatching socks for you to pick from on Monday, a total of $6$ socks. Since you don't want to pick a pair, the number of ways to do this is $\dbinom{6}{2}-2$. Thus the answer is $\frac{\left(5\right)\left(\binom{8}{2}-4\right)\left(\binom{6}{2}-2\right)}{\binom{10}{2}\binom{8}{2}\binom{6}{2}}=\frac{26}{315}. 26 + 315 = \boxed{341}$. 

2015 AIME I Problems/Problem 6
Problem

Point $A,B,C,D,$ and $E$ are equally spaced on a minor arc of a circle. Points $E,F,G,H,I$ and $A$ are equally spaced on a minor arc of a second circle with center $C$ as shown in the figure below. The angle $\angle ABD$ exceeds $\angle AHG$ by $12^\circ$. Find the degree measure of $\angle BAG$.

<div align=center><img src="http://latex.artofproblemsolving.com/d/0/9/d09d2462dec1d60eaa6947ab799ce506fb914c99.png" height="150px" /></div>

Solution

Let $O$ be the center of the circle with $ABCDE$ on it.

Let $x=ED=DC=CB=BA$ and $y=EF=FG=GH=HI=IA$. $\angle ECA$ is therefore $5y$ by way of circle $C$ and $180-2x$ by way of circle $O$. $\angle ABD$ is $180 - \frac{3x}{2}$ by way of circle $O$, and $\angle AHG$ is $180 - \frac{3y}{2}$ by way of circle $C$.

This means that:

$180-3x/2=180-3y/2+12$,

which when simplified yields $3x/2+12=3y/2$, or $x+8=y$. Since: $5y=180-2x$, $5x+40=180-2x$ So: $7x=140, x=20$ $y=28.$ $\angle BAG$ is equal to $\angle BAE$ + $\angle EAG$, which equates to $\frac{3x}{2} + y$. Plugging in yields $30+28$, or $058$. 

2015 AIME I Problems/Problem 7
Problem

7. In the diagram below, $ABCD$ is a square. Point $E$ is the midpoint of $\overline{AD}$. Points $F$ and $G$ lie on $\overline{CE}$, and $H$ and $J$ lie on $\overline{AB}$ and $\overline{BC}$, respectively, so that $FGHJ$ is a square. Points $K$ and $L$ lie on $\overline{GH}$, and $M$ and $N$ lie on $\overline{AD}$ and $\overline{AB}$, respectively, so that $KLMN$ is a square. The area of $KLMN$ is 99. Find the area of $FGHJ$. 

<div align=center><img src="http://latex.artofproblemsolving.com/c/b/7/cb77adf6816bc8562daba9760fa320a553ddd4c3.png" height="150px" /></div>

Solution

We begin by denoting the length $ED$ $a$, giving us $DC = 2a$ and $EC = a\sqrt5$. Since angles $\angle DCE$ and $\angle FCJ$ are complementary, we have that $\triangle CDE \sim \triangle JFC$ (and similarly the rest of the triangles are $1-2-\sqrt5$ triangles). We let the sidelength of $FGHJ$ be $b$, giving us:

$JC = \sqrt5 \cdot FC = \sqrt5 \cdot FJ/2 = \frac{b\sqrt 5}{2}$ and $BJ = \frac{1}{\sqrt5} \cdot HJ = \frac{b}{\sqrt5}$.

Since $BC = CJ + BJ$,

$2a = \frac{b\sqrt 5}{2} + \frac{b}{\sqrt5}$,

Solving for $b$ in terms of $a$ yields $b = \frac{4a\sqrt5}{7}$.

We now use the given that $[KLMN] = 99$, implying that $KL = LM = MN = NK = 3\sqrt{11}$. We also draw the perpendicular from $E$ to $ML$ and label the point of intersection $P$: 

<div align=center><img src="http://latex.artofproblemsolving.com/d/9/9/d99b83c270ca1b3afc677810cc0b0043d0b3c7f3.png" height="150px" /></div>

This gives that $AM = 2 \cdot AN = 2 \cdot \frac{3\sqrt{11}}{\sqrt5}$ and $ME = \sqrt5 \cdot MP = \sqrt5 \cdot \frac{EP}{2} = \sqrt5 \cdot \frac{LG}{2} = \sqrt5 \cdot \frac{HG - HK - KL}{2} = \sqrt{5} \cdot \frac{\frac{4a\sqrt5}{7} - \frac{9\sqrt{11}}{2}}{2}$

Since $AE$ = $AM + ME$, we get

$2 \cdot \frac{3\sqrt{11}}{\sqrt5} + \sqrt{5} \cdot \frac{\frac{4a\sqrt5}{7} - \frac{9\sqrt{11}}{2}}{2} = a$

$\Rightarrow 12\sqrt{11} + 5(\frac{4a\sqrt5}{7} - \frac{9\sqrt{11}}{2}) = 2\sqrt5a$

$\Rightarrow \frac{-21}{2}\sqrt{11} + \frac{20a\sqrt5}{7} = 2\sqrt5a$

$\Rightarrow -21\sqrt{11} = 2\sqrt5a\frac{14 - 20}{7}$

$\Rightarrow \frac{49\sqrt{11}}{4} = \sqrt5a$

$\Rightarrow 7\sqrt{11} = \frac{4a\sqrt{5}}{7}$

So our final answer is $(7\sqrt{11})^2 = \boxed{539}$ 

2015 AIME I Problems/Problem 8

Problem

For positive integer $n$, let $s(n)$ denote the sum of the digits of $n$. Find the smallest positive integer satisfying $s(n) = s(n+864) = 20$.
Solution

You know whatever $n$ is, it has to have 3 digits, because if it had only two, the maximum of $s(n)$ is 18.

Now let $n=100a_2+10a_1+a_0$

So first we know, $a_2+a_1+a_0=20$. Okay now we have to split into cases based on which digit gets carried. This meaning, when you add a 3 digit number to 864, we have to know when to carry the digits. Note that if you don't understand any of the steps I take, just try adding any 3-digit number to 864 regularly (using the old-fashioned "put one number over the other" method, not mental calculation), and observe what you do at each step.

(1) None of the digit gets carried over to the next space: So this means $a_2<2, a_1<4$ and $a_0<6$. So

$s(864+n)=(8+a_2)+(6+a_1)+(4+a_0)=38$ So it doesn't work. Now:

(2) $a_2+8$ is the only one that carries over So this means $a_2>1, a_1<4$ and $a_0<6$. So

$s(864+n)=1+(8+a_2-10)+(6+a_1)+(a_0+4)=29$

(3)$a_0+4$ is the only one that carries over. So

$s(864+n)=(8+a_2)+(6+a_1+1)+(4+a_0-10)=29$

(4)The first and second digit carry over (but not the third)

$s(864+n)=1+(8+a_2-10+1)+(6+a_1-10)+(4+a_0)=20$

Aha! This case works but we still have to make sure it's possible for $a_2+a_1+a_0=20$ (We assumed this is true, so we have to find a number that works.) Since only the second and first digit carry over, $a_2>0, a_1>3$ and $a_0<6$. The smallest value we can get with this is 695. Let's see if we can find a smaller one:

(5)The first and third digit carry over (but not the second)

$s(864+n)=1+(8+a_2-10)+(7+a_1)+(4+a_0-10)=20$

The largest value for the middle digit is 2, so the other digits have to be both 9's. So the smallest possible value is 929

(6) All the digits carry over

$s(864+n)=1+(9+a_2-10)+(7+a_1-10)+(4+a_0-10)=\text{Way less than 20}$


So the answer is $\boxed{695}$ which after a quick test, does indeed work.
Solution 2

First, it is easy to verify that $695$ works and that no other numbers beginning with the digit 6 work (i.e. $686, 677, 668, 659$ do not work).

Suppose by contradiction that there is a smaller valid $n$, where the leading digit of the three-digit number $n$ is 5 or less. (Two-digit $n$ obviously do not work because 9 + 9 < 20.) Clearly $n > 200$ because the smallest three-digit number whose digits sum to 20 is $299$. Also, because the second digit is at most 9, the units digit is at least 6, which means that the addition $N = n + 864$ regroups in the ones place. Then the units digit of $N$ is clearly less than 4. But as $1000 < 200 + 864 < N < 600 + 864 = 1464$, the sum of the thousands digit and the hundredth digit is at most 5. Because the second digit is at most 9, the sum of the digits of $N$ is at most $5 + 9 + 4 < 20$, contradiction. Hence $\boxed{695}$ is the answer.
Motivation for Solution 2

During the real test, I immediately noticed that $n$ must be less than 1000 (AIME problem) and that $n$ must be a three-digit number. Therefore, I began casework on the leading digit of $n$. The casework was not intensive (how many ways are there to have digits sum to 20?) and I eventually got 695 as my answer. The rigorous proof that 695 was the smallest came afterwards. 

2015 AIME I Problems/Problem 9
Problem

Let $S$ be the set of all ordered triple of integers $(a_1,a_2,a_3)$ with $1 \le a_1,a_2,a_3 \le 10$. Each ordered triple in $S$ generates a sequence according to the rule $a_n=a_{n-1}\cdot | a_{n-2}-a_{n-3} |$ for all $n\ge 4$. Find the number of such sequences for which $a_n=0$ for some $n$.
Solution

Let $a_1=x, a_2=y, a_3=z$. First note that if any absolute value equals 0, then $a_n=0$. Also note that if at any position, $a_n=a_{n-1}$, then $a_{n+2}=0$. Then, if any absolute value equals 1, then $a_n=0$. Therefore, if either $|y-x|$ or $|z-y|$ is less than or equal to 1, then that ordered triple meets the criteria. Assume that to be the only way the criteria is met. To prove, let $|y-x|>1$, and $|z-y|>1$. Then, $a_4 \ge 2z$, $a_5 \ge 4z$, and $a_6 \ge 4z$. However, since the minimum values of $a_5$ and $a_6$ are equal, there must be a scenario where the criteria was met that does not meet our earlier scenarios. Calculation shows that to be $z=1$, $|y-x|=2$. Again assume that any other scenario will not meet criteria. To prove, divide the other scenarios into two cases: $z>1$, $|y-x|>1$, and $|z-y|>1$; and $z=1$, $|y-x|>2$, and $|z-y|>1$. For the first one, $a_4 \ge 2z$, $a_5 \ge 4z$, $a_6 \ge 8z$, and $a_7 \ge 16z$, by which point we see that this function diverges. For the second one, $a_4 \ge 3$, $a_5 \ge 6$, $a_6 \ge 18$, and $a_7 \ge 54$, by which point we see that this function diverges. Therefore, the only scenarios where $a_n=0$ is when any of the following are met: $|y-x|<2$ (280 options) $|z-y|<2$ (280 options, 80 of which coincide with option 1) $z=1$, $|y-x|=2$. (16 options, 2 of which coincide with either option 1 or option 2) Adding the total number of such ordered triples yields $280+280-80+16-2=\boxed{494}$. 

2015 AIME I Problems/Problem 11

Problem

Consider all 1000-element subsets of the set {1, 2, 3, ... , 2015}. From each such subset choose the least element. The arithmetic mean of all of these least elements is $\frac{p}{q}$, where $p$ and $q$ are relatively prime positive integers. Find $p + q$.
Hint

Use the Hockey Stick Identity in the form

\binom{a}{a} + \binom{a+1}{a} + \binom{a+2}{a} + \dots + \binom{b}{a} = \binom{b+1}{a+1}.

(This is best proven by a combinatorial argument that coincidentally pertains to the problem: count two ways the number of subsets of the first $(b + 1)$ numbers with $(a + 1)$ elements whose least element is $i$, for $1 \le i \le b - a$.)
Solution
Solution 1

Let $M$ be the desired mean. Then because $\dbinom{2015}{1000}$ subsets have 1000 elements and $\dbinom{2015 - i}{999}$ have $i$ as their least element, 

$\begin{align*} \binom{2015}{1000} M &= 1 \cdot \binom{2014}{999} + 2 \cdot \binom{2013}{999} + \dots + 1016 \cdot \binom{999}{999} \\ &= \binom{2014}{999} + \binom{2013}{999} + \dots + \binom{999}{999} \\ & + \binom{2013}{999} + \binom{2012}{999} + \dots + \binom{999}{999} \\ & \dots \\ & + \binom{999}{999} \\ &= \binom{2015}{1000} + \binom{2014}{1000} + \dots + \binom{1000}{1000} \\ &= \binom{2016}{1001}. \end{align*}$ 

Using the definition of binomial coefficient and the identity $n! = n \cdot (n-1)!$, we deduce that M = $\frac{2016}{1001} = \frac{288}{143}.$ The answer is $\boxed{431}.$

Solution 2

Each 1000-element subset $\left\{ a_1, a_2,a_3,...,a_{1000}\right\}$ of $\left\{1,2,3,...,2015\right\}$ with $a_1<a_2<a_3<...<a_{1000}$ contributes $a_1$ to the sum of the least element of each subset. Now, consider the set $\left\{a_1+1,a_2+1,a_3+1,...,a_{1000}+1\right\}$. There are $a_1$ ways to choose a positive integer $k$ such that $k<a_1+1<a_2+1,a_3+1<...<a_{1000}+1$ ($k$ can be anything from $1$ to $a_1$ inclusive). Thus, the number of ways to choose the set $\left\{k,a_1+1,a_2+1,a_3+1,...,a_{1000}+1\right\}$ is equal to the sum. But choosing a set $\left\{k,a_1+1,a_2+1,a_3+1,...,a_{1000}+1\right\}$ is the same as choosing a 1001-element subset from $\left\{1,2,3,...,2016\right\}$!

Thus, the average is $\frac{\binom{2016}{1001}}{\binom{2015}{1000}}=\frac{2016}{1001}=\frac{288}{143}$. Our answer is $p+q=288+143=\boxed{431}$. 

2015 AIME I Problems/Problem 13

Problem

A block of wood has the shape of a right circular cylinder with radius $6$ and height $8$, and its entire surface has been painted blue. Points $A$ and $B$ are chosen on the edge of one of the circular faces of the cylinder so that $\overarc{AB}$ on that face measures $120^\text{o}$. The block is then sliced in half along the plane that passes through point $A$, point $B$, and the center of the cylinder, revealing a flat, unpainted face on each half. The area of one of these unpainted faces is $a\cdot\pi + b\sqrt{c}$, where $a$, $b$, and $c$ are integers and $c$ is not divisible by the square of any prime. Find $a+b+c$. 

<div align=center><img src="http://latex.artofproblemsolving.com/d/d/5/dd5c3cbbc67a161c6ba03a3e44f37b82076d83cd.png" height="150px" /></div>

Credit to Royalreter1 and chezbgone2 for the diagram
Solution

Label the points where the plane intersects the top face of the cylinder as $C$ and $D$, and the center of the cylinder as $O$, such that $C,O,$ and $A$ are collinear. Let $T$ be the center of the bottom face, and $M$ the midpoint of $\overline{AB}$. Then $OT=4$, $TM=3$ (because of the 120 degree angle), and so $OM=5$.

Project $C$ and $D$ onto the bottom face to get $X$ and $Y$, respectively. Then the section $ABCD$ (whose area we need to find), is a stretching of the section $ABXY$ on the bottom face. The ratio of stretching is $\frac{OM}{TM}=\frac{5}{3}$, and we do not square this value when finding the area because it is only stretching in one direction. Using 30-60-90 triangles and circular sectors, we find that the area of the section $ABXY$ is $18\sqrt{3}\ + 12 \pi$. Thus, the area of section $ABCD$ is $20\pi + 30\sqrt{3}$, and so our answer is $20+30+3=\boxed{053}$.

Diagram: 

<div align=center><img src="https://data.artofproblemsolving.com/images/wiki/c/ca/2015_AIME_I_P15_diagram_1.jpeg" height="150px" /></div>

Solution 2

Label the points same as in the first sentence above. Consider a view of the cylinder such that height is disregarded, i.e. a top view. From this view, note that Cylinder $O$ has become a circle with $\overarc{AB}$ = $\overarc{CD}$ = $120^\text{o}$. Using 30-60-90 triangles, we get rectangle $ABCD$ to have a horizontal component of $6$. Now, consider a side view, such that $A$ and $B$ coincide at the bottom of the diagram. From this view, consider the right triangle composed of hypotenuse $AD$ and a point along the base of the viewpoint, which will be labeled as $E$. From the top view, $AE = 6$. Because of the height of the cylinder, $DE$ is equal to $8$. This makes $AD$ equal to $10$.


Now, the use of simple calculus is required. Conceptualize an infinite number of lines perpendicular to $AE$ intersecting both $AE$ and $AD$. Consider the area between point $A$ and the first vertical line. Label the point where the line intersects AE as E', and the point where the line intersects AD as D'. The area of the part of the initial unpainted face within these two positions approaches a rectangle with length AD' and width $w$. The area of the base within these two positions approaches a rectangle with length AE' and width $w$. The ratio of AD':AE' is 10:6, since the ratio of AD:AE is 10:6. This means that the area of the initial unpainted surface within these two positions to the area of the base within these two positions is equal to 10$w$:6$w$ = 10:6. Through a similar argument, the areas between each set of vertical lines also maintains a ratio of 10:6. Therefore, the ratio of the area we wish to find to the area of the base between AB and CD (from the top perspective) is 10:6. Using 30-60-90 triangles and partial circles, the area of the base between AB and CD is calculated to be $18\sqrt{3}\ + 12 \pi$. The area of the unpainted surface therefore becomes $20\pi + 30\sqrt{3}$, and so our answer is $\boxed{053}$.
Solution 3

This problem can be calculus-bashed (for those like me who never noticed the surface was merely a stretch of its projection). Label points as in the first paragraph of Solution 1 ($A$ and $B$ as given, $M$ the midpoint of $AB$, $O$ the center of the cylinder, $T$ the center of the bottom face of the cylinder). Because of the 120 degrees and right triangle calculations, we find $MT$ = 3, $OT$ = 4, $OM$ = 5). We will be integrating with respect to the y-coordinate which we define as distance downwards from $O$ (in this system, the $y$-coordinate of the bottom face would be 4).

We note that by similar triangles, we have that the length from $O$ to the point on the unpainted surface of coordinate $y$ is $\ell = \frac{5}{4} y$, and therefore $d\ell = \frac{5}{4} dy$. Define the segment $A'B'$ to be the intersection of the painted surface with the circular cross section of the cylinder of coordinate $y$, with endpoints $A'$ and $B'$ and midpoint $M'$, with $T'$ the center of this circular cross section. Then, by similar triangles, $T'M' = \frac{3}{4} y$ and thus $A'B' = 2A' M' = 2 \sqrt{ 6^2 - \left( \frac{3}{4}y\right)^2 } = \frac{3}{2} \sqrt{ 64 - y^2 }.$ We know that $A'B'$ is perpendicular to $OM$.

Now we can set up our integral: we will integrate $y$ from 0 to 4 and multiply by two because the total height is 8. 

$A = 2\int_0^4 \left(\frac{3}{2}\sqrt{ 64 - y^2 }\right) \left( \frac{5}{4} dy\right) A = \frac{15}{4} \int_0^4 \sqrt{ 64 - y^2 }dy$

Then we substitute $y = 8\sin \theta$ with $dy = 8 \cos \theta d \theta$, changing the bounds to 0 to $\frac{\pi}{6}$ as appropriate. 

$A = \frac{15}{4} \int_0^\frac{\pi}{6} \sqrt{ 64 - 64\sin^2 \theta }\cdot 8\cos\theta d\theta A = 240 \int_0^\frac{\pi}{6} \cos^2 \theta d\theta A = 240 \left[ \frac{\theta}{2} + \frac{\sin 2\theta}{4} \right]_0^\frac{\pi}{6} = 240 \left[ \frac{\pi}{12} + \frac{\sqrt{3}}{8} \right] = 20 + 30\sqrt{3}$

Therefore, $a + b + c = 20 + 30 + 3 = \boxed{053}$. 


2015 AIME I Answer Key
1.	722
    2.139
    3.307
    4.507
    5.341
    6.058
    7.539
    8.695
    9.494
    10.072
    11.108
    12.431
    13.091
    14.483
    15.053



