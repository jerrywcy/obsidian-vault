# 2014 AIME II

2014 AIME II Problems/Problem 1
Problem

Abe can paint the room in 15 hours, Bea can paint 50 percent faster than Abe, and Coe can paint twice as fast as Abe. Abe begins to paint the room and works alone for the first hour and a half. Then Bea joins Abe, and they work together until half the room is painted. Then Coe joins Abe and Bea, and they work together until the entire room is painted. Find the number of minutes after Abe begins for the three of them to finish painting the room.
Solution

From the given information, we can see that Abe can paint $\frac{1}{15}$ of the room in an hour, Bea can paint $\frac{1}{15}\times\frac{3}{2} = \frac{1}{10}$ of the room in an hour, and Coe can paint the room in $\frac{1}{15}\times 2 = \frac{2}{15}$ of the room in an hour. After $90$ minutes, Abe has painted $\frac{1}{15}\times\frac{3}{2}=\frac{1}{10}$ of the room. Working together, Abe and Bea can paint $\frac{1}{15}+\frac{1}{10}=\frac{1}{6}$ of the room in an hour, so it takes then $\frac{2}{5}\div \frac{1}{6}= \frac{12}{5}$ hours to finish the first half of the room. All three working together can paint $\frac{1}{6}+\frac{2}{15}=\frac{3}{10}$ of the room in an hour, and it takes them $\frac{1}{2}\div \frac{3}{10}=\frac{5}{3}$ hours to finish the room. The total amount of time they take is $90+\frac{12}{5}\times 60+\frac{5}{3}\times 60 = 90+ 144 + 100 = \boxed{334} \text{ minutes.}$

2014 AIME II Problems/Problem 2
Problem

Arnold is studying the prevalence of three health risk factors, denoted by A, B, and C, within a population of men. For each of the three factors, the probability that a randomly selected man in the population has only this risk factor (and none of the others) is 0.1. For any two of the three factors, the probability that a randomly selected man has exactly these two risk factors (but not the third) is 0.14. The probability that a randomly selected man has all three risk factors, given that he has A and B is $\frac{1}{3}$. The probability that a man has none of the three risk factors given that he does not have risk factor A is $\frac{p}{q}$, where $p$ and $q$ are relatively prime positive integers. Find $p+q$.
Solution

We first assume a population of $100$ to facilitate solving. Then we simply organize the statistics given into a Venn diagram.

<div align=center><img src="http://latex.artofproblemsolving.com/1/c/a/1cabe8198c2c6126c59a6a8a52dc675c24f950b3.png" height="150px" /></div>

Let $x$ be the number of men with all three risk factors. Since "the probability that a randomly selected man has all three risk factors, given that he has A and B is $\frac{1}{3}$," we can tell that $x = \frac{1}{3}(x+14)$, since there are $x$ people with all three factors and 14 with only A and B. Thus $x=7$.

Let $y$ be the number of men with no risk factors. It now follows that $y= 100 - 3 \cdot 10 - 3 \cdot 14 - 7 = 21.$ The number of men with risk factor A is $10+2 \cdot 14+7 = 45$ (10 with only A, 28 with A and one of the others, and 7 with all three). Thus the number of men without risk factor $A$ is 55, so the desired conditional probability is $21/55$. So the answer is $21+55=\boxed{076}$.

2014 AIME II Problems/Problem 3
Problem

A rectangle has sides of length $a$ and 36. A hinge is installed at each vertex of the rectangle, and at the midpoint of each side of length 36. The sides of length $a$ can be pressed toward each other keeping those two sides parallel so the rectangle becomes a convex hexagon as shown. When the figure is a hexagon with the sides of length $a$ parallel and separated by a distance of 24, the hexagon has the same area as the original rectangle. Find $a^2$.

<div align=center><img src="http://latex.artofproblemsolving.com/9/5/c/95cac62aaac35028476cf23e914b63412df36f70.png" height="150px" /></div>

Solution

When we squish the rectangle, the hexagon is composed of a rectangle and two isosceles triangles with side lengths 18, 18, and 24 as shown below.

<div align=center><img src="http://latex.artofproblemsolving.com/4/0/a/40a4c9043250ba9badb51314ff5b59f8ef99322e.png" height="150px" /></div>

By Heron's Formula, the area of each isosceles triangle is $\sqrt{(30)(12)(12)(6)}=\sqrt{180\times 12^2}=72\sqrt{5}$. So the area of both is $144\sqrt{5}$. From the rectangle, our original area is $36a$. The area of the rectangle in the hexagon is $24a$. So we have $24a+144\sqrt{5}=36a\implies 12a=144\sqrt{5}\implies a=12\sqrt{5}\implies a^2=\boxed{720}.$

2014 AIME II Problems/Problem 4

Problem

The repeating decimals $0.abab\overline{ab}$ and $0.abcabc\overline{abc}$ satisfy

$0.abab\overline{ab}+0.abcabc\overline{abc}=\frac{33}{37},$

where $a$, $b$, and $c$ are (not necessarily distinct) digits. Find the three digit number $abc$.
Solution 1

Notice repeating decimals can be written as the following:

$0.\overline{ab}=\frac{10a+b}{99}$

$0.\overline{abc}=\frac{100a+10b+c}{999}$

where a,b,c are the digits. Now we plug this back into the original fraction:

$\frac{10a+b}{99}+\frac{100a+10b+c}{999}=\frac{33}{37}$

Multiply both sides by $999*99.$ This helps simplify the right side as well because $999=111*9=37*3*9$:

$9990a+999b+9900a+990b+99c=33/37*37*3*9*99=33*3*9*99$

Dividing both sides by $9$ and simplifying gives:

$2210a+221b+11c=99^2=9801$

At this point, seeing the $221$ factor common to both a and b is crucial to simplify. This is because taking $mod 221$ to both sides results in:

$2210a+221b+11c \equiv 9801 \mod 221 \iff 11c \equiv 77 \mod 221$

Notice that we arrived to the result $9801 \equiv 77 \mod 221$ by simply dividing $9801$ by $221$ and seeing $9801=44*221+77.$ Okay, now it's pretty clear to divide both sides by $11$ in the modular equation but we have to worry about $221$ being multiple of $11.$ Well, $220$ is a multiple of $11$ so clearly, $221$ couldn't be. Also, $221=13*17.$ Now finally we simplify and get:

$c \equiv 7 \mod 221$

But we know $c$ is between $0$ and $9$ because it is a digit, so $c$ must be $7.$ Now it is straightforward from here to find $a$ and $b$:

$2210a+221b+11(7)=9801 \iff 221(10a+b)=9724 \iff 10a+b=44$

and since a and b are both between $0$ and $9$, we have $a=b=4$. Finally we have the $3$ digit integer $\boxed{447}$
Solution 2

Note that $\frac{33}{37}=\frac{891}{999} = 0.\overline{891}$. Also note that the period of $0.abab\overline{ab}+0.abcabc\overline{abc}$ is at most $6$. Therefore, we only need to worry about the sum $0.ababab+ 0.abcabc$. Adding the two, we get $$\begin{array}{ccccccc}&a&b&a&b&a&b\\ +&a&b&c&a&b&c\\ \hline &8&9&1&8&9&1\end{array}$$ From this, we can see that $a=4$, $b=4$, and $c=7$, so our desired answer is $\boxed{447}$
Solution 3

Noting as above that $0.\overline{ab} = \frac{10a + b}{99}$ and $0.\overline{abc} = \frac{100a + 10b + c}{999}$, let $u = 10a + b$. Then $\frac{u}{99} + \frac{10u + c}{999} = \frac{33}{37}$

$\frac{u}{11} + \frac{10u + c}{111} = \frac{9\cdot 33}{37}$

$\frac{221u + 11c}{11\cdot 111} = \frac{9\cdot 33}{37}$

$221u + 11c = \frac{9\cdot 33\cdot 11\cdot 111}{37}$

$221u + 11c = 9\cdot 33^2.$

Solving for $c$ gives

$c = 3\cdot 9\cdot 33 - \frac{221u}{11}$

$c = 891 - \frac{221u}{11}$

Because $c$ must be integer, it follows that $u$ must be a multiple of $11$ (because $221$ clearly is not). Inspecting the equation, one finds that only $u = 44$ yields a digit $c, 7$. Thus $abc = 10u + c = \boxed{447}.$

2014 AIME II Problems/Problem 5

Problem 5

Real numbers $r$ and $s$ are roots of $p(x)=x^3+ax+b$, and $r+4$ and $s-3$ are roots of $q(x)=x^3+ax+b+240$. Find the sum of all possible values of $|b|$.
Solution

Let $r$, $s$, and $-r-s$ be the roots of $p(x)$ (per Vieta's). Then $r^3 + ar + b = 0$ and similarly for $s$. Also, $q(r+4) = (r+4)^3 + a(r+4) + b + 240 = 12r^2 + 48r + 304 + 4a = 0$

Set up a similar equation for $s$:

$q(s-3) = (s-3)^3 + a(s-3) + b + 240 = -9s^2 + 27s + 213 - 3a = 0.$

Simplifying and adding the equations gives $3r^2 - 3s^2 + 12r + 9s + 147 = 0$

$r^2 - s^2 + 4r + 3s + 49 = 0 (*)$

Now, let's deal with the $ax$ terms. Plugging the roots $r$, $s$, and $-r-s$ into $p(x)$ yields a long polynomial, and plugging the roots $r+4$, $s-3$, and $-1-r-s$ into $q(x)$ yields another long polynomial. Equating the coefficients of x in both polynomials: $rs + (-r-s)(r+s) = (r+4)(s-3) + (-r-s-1)(r+s+1),$ which eventually simplifies to

$s = \frac{13 + 5r}{2}.$

Substitution into (*) should give $r = -5$ and $r = 1$, corresponding to $s = -6$ and $s = 9$, and $|b| = 330, 90$, for an answer of $\boxed{420}$.
Solution 2

As above, we know from Vieta's that the roots of $p(x)$ are $r$, $s$, and $-r-s$. Similarly, the roots of $q(x)$ are $r + 4$, $s - 3$, and $-r-s-1$. Then $rs+r(-r-s)+s(-r-s) = rs-(r+s)^2 = a$ and $rs(-r-s) = -b$ from $p(x)$ and $(r+4)(s-3)+(r+4)(-r-s-1)+(s-3)(-r-s-1) = (r+4)(s-3)-(r+s+1)^2 = a$ and $(r+4)(s-3)(-r-s-1)=-(b + 240)$ from $q(x)$.

From these equations, we can write that $rs-(r+s)^2 = (r+4)(s-3)-(r+s+1)^2$, and simplifying gives us $2s-5r-13=0$ or $s = \frac{5r+13}{2}$.

We now move to the other two equations. We see that we can cancel a negative from both sides to get $rs(r+s) = b$ and $(r+4)(s-3)(r+s+1)=b + 240$. Subtracting the first from the second equation gives us $(r+4)(s-3)(r+s+1) - rs(r+s) = 240$. Expanding and simplifying, substituting $s = \frac{5r+13}{2}$ and simplifying some more yields the simple quadratic $r^2 + 4r - 5 = 0$, so $r = -5, 1$. Then $s = -6, 9$.

Finally, we substitute back in to get $b = (-5)(-6)(-5-6) = -330$ or $b = (1)(9)(1 + 9) = 90$. Then the answer is $|-330|+|90| = \boxed{420}$.

2014 AIME II Problems/Problem 6
Problem

Charles has two six-sided die. One of the die is fair, and the other die is biased so that it comes up six with probability $\frac{2}{3}$ and each of the other five sides has probability $\frac{1}{15}$. Charles chooses one of the two dice at random and rolls it three times. Given that the first two rolls are both sixes, the probability that the third roll will also be a six is $\frac{p}{q}$, where $p$ and $q$ are relatively prime positive integers. Find $p+q$.
Solution

The probability that he rolls a six twice when using the fair die is $\frac{1}{6}\times \frac{1}{6}=\frac{1}{36}$. The probability that he rolls a six twice using the biased die is $\frac{2}{3}\times \frac{2}{3}=\frac{4}{9}=\frac{16}{36}$. Given that Charles rolled two sixes, we can see that it is $16$ times more likely that he chose the second die. Therefore the probability that he is using the fair die is $\frac{1}{17}$, and the probability that he is using the biased die is $\frac{16}{17}$. The probability of rolling a third six is

$\frac{1}{17}\times \frac{1}{6} + \frac{16}{17} \times \frac{2}{3} = \frac{1}{102}+\frac{32}{51}=\frac{65}{102}$ Therefore, our desired $p+q$ is $65+102= \boxed{167}$

2014 AIME II Problems/Problem 7

Problem

Let $f(x)=(x^2+3x+2)^{\cos(\pi x)}$. Find the sum of all positive integers $n$ for which $\left |\sum_{k=1}^n\log_{10}f(k)\right|=1.$
Solution 1

First, let's split it into two cases to get rid of the absolute value sign

$\left |\sum_{k=1}^n\log_{10}f(k)\right|=1 \iff \sum_{k=1}^n\log_{10}f(k)=1,-1$

Now we simplify using product-sum logarithmic identites:

$\log_{10}{f(1)}+\log_{10}{f(2)}+...+\log_{10}{f(n)}=\log_{10}{f(1)\cdot f(2) \cdot ... \cdot f(n)}=1,-1$


Note that the exponent $\cos{\pi(x)}$ is either $-1$ if $x$ is odd or $1$ if $x$ is even.

Writing out the first terms we have

$\frac{1}{(2)(3)}(3)(4)\frac{1}{(4)(5)} \ldots$

This product clearly telescopes (i.e. most terms cancel) and equals either $10$ or $\frac{1}{10}$. But the resulting term after telescoping depends on parity (odd/evenness), so we split it two cases, one where $n$ is odd and another where $n$ is even.

$\textbf{Case 1: Odd n}$

For odd $n$, it telescopes to $\frac{1}{2(n+2)}$ where $n$ is clearly $3$.

$\textbf{Case 2: Even n}$

For even $n$, it telescopes to $\frac{n+2}{2}$ where $18$ is the only possible $n$ value. Thus the answer is $\boxed{021}$
Solution 2

Note that $\cos(\pi x)$ is $-1$ when $x$ is odd and $1$ when $x$ is even. Also note that $x^2+3x+2=(x+1)(x+2)$ for all $x$. Therefore $\log_{10}f(x)=\log_{10}(x+1)+\log_{10}(x+2)\ \ \ \text{if }x \text{ is even}$ $\log_{10}f(x)=-\log_{10}(x+1)-\log_{10}(x+2)\ \ \ \text{if }x \text{ is odd}$ Because of this, $\sum_{k=1}^n\log_{10}f(k)$ is a telescoping series of logs, and we have $\sum_{k=1}^n\log_{10}f(k)= \log_{10}(n+2)-\log_{10}2=\log_{10}\frac{n+2}{2}\ \ \ \text{if }n \text{ is even}$ $\sum_{k=1}^n\log_{10}f(k)= -\log_{10}(n+2)-\log_{10}2=-\log_{10}2(n+2)\ \ \ \text{if }n \text{ is odd}$ Setting each of the above quantities to $1$ and $-1$ and solving for $n$, we get possible values of $n=3$ and $n=18$ so our desired answer is $3+18=\boxed{021}$

2014 AIME II Problems/Problem 8
Problem

Circle $C$ with radius 2 has diameter $\overline{AB}$. Circle D is internally tangent to circle $C$ at $A$. Circle $E$ is internally tangent to circle $C$, externally tangent to circle $D$, and tangent to $\overline{AB}$. The radius of circle $D$ is three times the radius of circle $E$, and can be written in the form $\sqrt{m}-n$, where $m$ and $n$ are positive integers. Find $m+n$.

Solution 1

<div align=center><img src="http://latex.artofproblemsolving.com/7/4/2/74210cde32b228b8c40db58832312c9112770eca.png" height="150px" /></div>

Using the diagram above, let the radius of $D$ be $3r$, and the radius of $E$ be $r$. Then, $EF=r$, and $CE=2-r$, so the Pythagorean theorem in $\triangle CEF$ gives $CF=\sqrt{4-4r}$. Also, $CD=CA-AD=2-3r$, so $DF=DC+CF=2-3r+\sqrt{4-4r}.$ Noting that $DE=4r$, we can now use the Pythagorean theorem in $\triangle DEF$ to get $(2-3r+\sqrt{4-4r})^2+r^2=16r^2.$

Solving this quadratic is somewhat tedious, but the constant terms cancel, so the computation isn't terrible. Solving gives $3r=\sqrt{240}-14$ for a final answer of $\boxed{254}$.

2014 AIME II Problems/Problem 9

Problem

Ten chairs are arranged in a circle. Find the number of subsets of this set of chairs that contain at least three adjacent chairs.
Solution 1 (Casework)

We know that a subset with less than $3$ chairs cannot contain $3$ adjacent chairs. There are only $10$ sets of $3$ chairs so that they are all $3$ adjacent. There are $10$ subsets of $4$ chairs where all $4$ are adjacent, and $10 * 5$ or $50$ where there are only $3.$ If there are $5$ chairs, $10$ have all $5$ adjacent, $10 * 4$ or $40$ have $4$ adjacent, and $10 * {5\choose 2}$ or $100$ have $3$ adjacent. With $6$ chairs in the subset, $10$ have all $6$ adjacent, $10(3)$ or $30$ have $5$ adjacent, $10 * {4\choose2}$ or $60$ have $4$ adjacent, $\frac{10 * 3}{2}$ or $15$ have $2$ groups of $3$ adjacent chairs, and $10 * ({5\choose2} - 3)$ or $70$ have $1$ group of $3$ adjacent chairs. All possible subsets with more than $6$ chairs have at least $1$ group of $3$ adjacent chairs, so we add ${10\choose7}$ or $120$, ${10\choose8}$ or $45$, ${10\choose9}$ or $10$, and ${10\choose10}$ or $1.$ Adding, we get $10 + 10 + 50 + 10 + 40 + 100 + 10 + 30 + 60 + 15 + 70 + 120 + 45 + 10 + 1 = \boxed{581}.$
Solution 2 (PIE)

Starting with small cases, we see that four chairs give $4 + 1 = 5$, five chairs give $5 + 5 + 1 = 11$, and six chairs give $6 + 6 + 6 + 6 + 1 = 25.$ Thus, n chairs should give $n 2^{n-4} + 1$, as confirmed above. This claim can be verified by the principle of inclusion-exclusion: there are $n 2^{n-3}$ ways to arrange $3$ adjacent chairs, but then we subtract $n 2^{n-4}$ ways to arrange $4.$ Finally, we add $1$ to account for the full subset of chairs. Thus, for $n = 10$ we get a first count of $641.$

However, we overcount cases in which there are two distinct groups of three or more chairs. Time to casework: we have $5$ cases for two groups of $3$ directly opposite each other, $5$ for two groups of four, $20$ for two groups of $3$ not symmetrically opposite, $20$ for a group of $3$ and a group of $4$, and $10$ for a group of $3$ and a group of $5.$ Thus, we have $641 - 60 = \boxed{581}$.
Solution 3 (Complementary Counting)

It is possible to use recursion to count the complement. Number the chairs $1, 2, 3, ..., 10.$ If chair $1$ is not occupied, then we have a line of $9$ chairs such that there is no consecutive group of three. If chair $1$ is occupied, then we split into more cases. If chairs $2$ and $10$ are empty, then we have a line of $7.$ If chair $2$ is empty but chair $10$ is occupied, then we have a line of $6$ chairs (because chair $9$ cannot be occupied); this is similar to when chair $2$ is occupied and chair $10$ is empty. Finally, chairs $2$ and $10$ cannot be simultaneously occupied. Thus, we have reduced the problem down to computing $T_9 + T_7 + 2T_6$, where $T_n$ counts the ways to select a subset of chairs [i]in a line[/i] from a group of n chairs such that there is no group of $3$ chairs in a row.

Now, we notice that $T_n = T_{n-1} + T_{n-2} + T_{n-3}$ (representing the cases when the first, second, and/or third chair is unoccupied). Also, $T_0 = 1, T_1 = 2, T_2 = 4, T_3 = 7$, and hence $T_4 = 13, T_5 = 24, T_6 = 44, T_7 = 81, T_8 = 149, T_9 = 274$. Now we know the complement is $274 + 81 + 88 = 443$, and subtracting from $2^{10} = 1024$ gives $1024 - 443 = \boxed{581}$.

2014 AIME II Problems/Problem 10

Problem

Let $z$ be a complex number with $|z|=2014$. Let $P$ be the polygon in the complex plane whose vertices are $z$ and every $w$ such that $\frac{1}{z+w}=\frac{1}{z}+\frac{1}{w}$. Then the area enclosed by $P$ can be written in the form $n\sqrt{3}$, where $n$ is an integer. Find the remainder when $n$ is divided by $1000$.
Solution 1 (long but non-bashy)

Note that the given equality reduces to

$\frac{1}{w+z} = \frac{w+z}{wz}$ $wz = {(w+z)}^2$ $w^2 + wz + z^2 = 0$ $\frac{w^3 - z^3}{w-z} = 0$ $w^3 = z^3, w \neq z$

Now, let $w = r_w e^{i \theta_w}$ and likewise for $z$. Consider circle $O$ with the origin as the center and radius 2014 on the complex plane. It is clear that $z$ must be one of the points on this circle, as $|z| = 2014$.

By DeMoivre's Theorem, the complex modulus of $w$ is cubed when $w$ is cubed. Thus $w$ must lie on $O$, since its the cube of its modulus, and thus its modulus, must be equal to $z$'s modulus.

Again, by DeMoivre's Theorem, $\theta_w$ is tripled when $w$ is cubed and likewise for $z$. For $w$, $z$, and the origin to lie on the same line, $3 \theta_w$ must be some multiple of 360 degrees apart from $3 \theta_z$ , so $\theta_w$ must differ from $\theta_z$ by some multiple of 120 degrees.

Now, without loss of generality, assume that $z$ is on the real axis. (The circle can be rotated to put $z$ in any other location.) Then there are precisely two possible distinct locations for $w$; one is obtained by going 120 degrees clockwise from $z$ about the circle and the other by moving the same amount counter-clockwise. Moving along the circle with any other multiple of 120 degrees in any direction will result in these three points.

Let the two possible locations for $w$ be $W_1$ and $W_2$ and the location of $z$ be point $Z$. Note that by symmetry, $W_1W_2Z$ is equilateral, say, with side length $x$. We know that the circumradius of this equilateral triangle is $2014$, so using the formula $\frac{abc}{4R} = [ABC]$ and that the area of an equilateral triangle with side length $s$ is $\frac{s^2\sqrt{3}}{4}$, so we have

$\frac{x^3}{4R} = \frac{x^2\sqrt{3}}{4}$ $x = R \sqrt{3}$ $\frac{x^2\sqrt{3}}{4} = \frac{3R^2 \sqrt{3}}{4}$

Since we're concerned with the non-radical part of this expression and $R = 2014$,

$\frac{3R^2}{4} \equiv 3 \cdot 1007^2 \equiv 3 \cdot 7^2 \equiv \boxed{147} \pmod{1000}$

and we are done. $\blacksquare$
Solution 2 (short but a little bashy)

Assume $z = 2014$. Then $\frac{1}{2014 + w} = \frac{1}{2014} + \frac{1}{w}$

$2014w = w(2014 + w) + 2014(2014 + w)$

$2014w = 2014w + w^2 + 2014^2 + 2014w$

$0 = w^2 + 2014w + 2014^2$

$w = \frac{-2014 \pm \sqrt{2014^2 - 4(2014^2)}}{2} = -1007 \pm 1007\sqrt{3}i$

Thus $P$ is an isosceles triangle with area $\frac{1}{2}(2014 - (-1007))(2\cdot 1007\sqrt{3}) = 3021\cdot 1007\sqrt{3}$ and $n \equiv 7\cdot 21\equiv \boxed{147} \pmod{1000}.$

2014 AIME II Problems/Problem 11
Problem 11

In $\triangle RED$, $\measuredangle DRE=75^{\circ}$ and $\measuredangle RED=45^{\circ}$. $|RD|=1$. Let $M$ be the midpoint of segment $\overline{RD}$. Point $C$ lies on side $\overline{ED}$ such that $\overline{RC}\perp\overline{EM}$. Extend segment $\overline{DE}$ through $E$ to point $A$ such that $CA=AR$. Then $AE=\frac{a-\sqrt{b}}{c}$, where $a$ and $c$ are relatively prime positive integers, and $b$ is a positive integer. Find $a+b+c$.
Solution

Let $P$ be the foot of the perpendicular from $A$ to $\overline{CR}$, so $\overline{AP}\parallel\overline{EM}$. Since triangle $ARC$ is isosceles, $P$ is the midpoint of $\overline{CR}$, and $\overline{PM}\parallel\overline{CD}$. Thus, $APME$ is a parallelogram and $AE = PM = \frac{CD}{2}$. We can then use coordinates. Let $O$ be the foot of altitude $RO$ and set $O$ as the origin. Now we notice special right triangles! In particular, $DO = \frac{1}{2}$ and $EO = RO = \frac{\sqrt{3}}{2}$, so $D(\frac{1}{2}, 0)$, $E(-\frac{\sqrt{3}}{2}, 0)$, and $R(0, \frac{\sqrt{3}}{2}).$ $M =$ midpoint$(D, R) = (\frac{1}{4}, \frac{\sqrt{3}}{4})$ and the slope of $ME = \frac{\frac{\sqrt{3}}{4}}{\frac{1}{4} + \frac{\sqrt{3}}{2}} = \frac{\sqrt{3}}{1 + 2\sqrt{3}}$, so the slope of $RC = -\frac{1 + 2\sqrt{3}}{\sqrt{3}}.$ Instead of finding the equation of the line, we use the definition of slope: for every $CO = x$ to the left, we go $\frac{x(1 + 2\sqrt{3})}{\sqrt{3}} = \frac{\sqrt{3}}{2}$ up. Thus, $x = \frac{\frac{3}{2}}{1 + 2\sqrt{3}} = \frac{3}{4\sqrt{3} + 2} = \frac{3(4\sqrt{3} - 2)}{44} = \frac{6\sqrt{3} - 3}{22}.$ $DC = \frac{1}{2} - x = \frac{1}{2} - \frac{6\sqrt{3} - 3}{22} = \frac{14 - 6\sqrt{3}}{22}$, and $AE = \frac{7 - \sqrt{27}}{22}$, so the answer is $\boxed{056}$.

2014 AIME II Problems/Problem 12

Problem

Suppose that the angles of $\triangle ABC$ satisfy $\cos(3A)+\cos(3B)+\cos(3C)=1.$ Two sides of the triangle have lengths 10 and 13. There is a positive integer $m$ so that the maximum possible length for the remaining side of $\triangle ABC$ is $\sqrt{m}.$ Find $m.$
Solution 1

Note that $\cos{3C}=-\cos{(3A+3B)}$. Thus, our expression is of the form $\cos{3A}+\cos{3B}-\cos{(3A+3B)}=1$. Let $\cos{3A}=x$ and $\cos{3B}=y$.

Using the fact that $\cos(3A+3B)=\cos 3A\cos 3B-\sin 3A\sin 3B=xy-\sqrt{1-x^2}\sqrt{1-y^2}$, we get $x+y-xy+\sqrt{1-x^2}\sqrt{1-y^2}=1$, or $\sqrt{1-x^2}\sqrt{1-y^2}=xy-x-y-1=(x-1)(y-1)$.

Squaring both sides, we get $(1-x^2)(1-y^2) = [(x-1)(y-1)]^2$. Cancelling factors, $(1+x)(1+y) = (1-x)(1-y)$.

Expanding, $1+x+y+xy=1-x-y+xy\rightarrow x+y=-x-y\rightarrow 2x=-2y$.

Simplification leads to $x=-y$ and $x+y=0$.

Therefore, $\cos(3C)=1$. So $\angle C$ could be $0^\circ$ or $120^\circ$. We eliminate $0^\circ$ and use law of cosines to get our answer:

$m=10^2+13^2-2\cdot 10\cdot 13\cos\angle C$ $\rightarrow m=269-260\cos 120^\circ=269-260\left(\text{-}\frac{1}{2}\right)$ $\rightarrow m=269+130=399$

$\framebox{399}$

$\color{red}{\text{Note: This solution forgot the case of dividing by 0}}$
Solution 2

As above, we can see that $\cos3A+\cos3B-\cos(3A+3B)=1$

Expanding, we get

$\cos3A+\cos3B-\cos3A\cos3B+\sin3A\sin3B=1$

$\cos3A\cos3B-\cos3A-\cos3B+1=\sin3A\sin3B$

$(\cos3A-1)(\cos3B-1)=\sin3A\sin3B$

$\frac{\cos3A-1}{\sin3A}\cdot\frac{\cos3B-1}{\sin3B}=1$

$\tan{\frac{3A}{2}}\tan{\frac{3B}{2}}=1$

Note that $\tan{x}=\frac{1}{\tan(90-x)}$, or $\tan{x}\tan(90-x)=1$

Thus $\frac{3A}{2}+\frac{3B}{2}=90$, or $A+B=60$.

Now we know that $C=120$, so we can just use the Law of Cosines to get $\boxed{399}$

2014 AIME II Problems/Problem 13
Problem

Ten adults enter a room, remove their shoes, and toss their shoes into a pile. Later, a child randomly pairs each left shoe with a right shoe without regard to which shoes belong together. The probability that for every positive integer $k<5$, no collection of $k$ pairs made by the child contains the shoes from exactly $k$ of the adults is $\frac{m}{n}$, where m and n are relatively prime positive integers. Find $m+n.$
Solution

Let the left shoes be $L1,\dots, L10$ and the right shoes be $R1,\dots, R10.$ Notice that there are $10 \cdot 9\cdot 8 \cdots 1 = 10!$ possible pairings. To calculate the possible cases, we casework on the number and length of cycles, where a cycle is a sequence of shoes that starts with an arbitrary shoe, is continued when that shoe is paired with another shoe and the new shoe under consideration is the paired shoe's pair, and ends with the first shoe's pair. (For example, $L1\to R2$, $L2\to R5$, $L5 \to R1$ is a cycle of length 3). Trivially, if there is a cycle of all ten shoes (for example, $L1 \to R2$, $L2 \to R3, \dots, L10 \to R1$) then there are $9 \cdot 8\cdots 1 = 9!$ working cases. Or, there will be two cycles of 5 shoes: $\frac{{10\choose 5}}{2}\cdot{4!}^2$. Now, there cannot be a cycle of 6 and a cycle of 4 by the hypothesis; by similar reasoning, our two cases are the only ones that work. To compute the probability, we see that the first case yields a probability of $\frac{1}{10}$ and the second case $\frac{126 \cdot 24 \cdot 24}{10!} = \frac{1}{50}$. Adding the probability gives $\frac{3}{25}$, for an answer of $\boxed{028}$.

2014 AIME II Problems/Problem 14

Problem

In $\triangle{ABC}, AB=10, \angle{A}=30^\circ$ , and $\angle{C=45^\circ}$. Let $H, D,$ and $M$ be points on the line $BC$ such that $AH\perp{BC}$, $\angle{BAD}=\angle{CAD}$, and $BM=CM$. Point $N$ is the midpoint of the segment $HM$, and point $P$ is on ray $AD$ such that $PN\perp{BC}$. Then $AP^2=\frac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m+n$.
Diagram

<div align=center><img src="https://data.artofproblemsolving.com/images/wiki/5/59/AOPS_wiki.PNG" height="150px" /></div>

( This is the diagram.)

Solution

As we can see,


$M$ is the midpoint of $BC$ and $N$ is the midpoint of $HM$


$AHC$ is a $45-45-90$ triangle, so $\angle{HAB}=15^\circ$.


$AHD$ is $30-60-90$ triangle.


$AH$ and $PN$ are parallel lines so $PND$ is $30-60-90$ triangle also.


Then if we use those informations we get $AD=2HD$ and


$PD=2ND$ and $AP=AD-PD=2HD-2ND=2HN$ or $AP=2HN=HM$


Now we know that $HM=AP$, we can find for $HM$ which is simpler to find.


We can use point $B$ to split it up as $HM=HB+BM$,


We can chase those lengths and we would get


$AB=10$, so $OB=5$, so $BC=5\sqrt{2}$, so $BM=\frac{1}{2} \cdot BC=\frac{5\sqrt{2}}{2}$


We can also use Law of Sines:

$\frac{BC}{AB}=\frac{\sin\angle A}{\sin\angle C}$ $\frac{BC}{10}=\frac{\frac{1}{2}}{\frac{\sqrt{2}}{2}}\implies BC=5\sqrt{2}$

Then using right triangle $AHB$, we have $HB=10 \sin 15^\circ$


So $HB=10 \sin 15^\circ=\frac{5(\sqrt{6}-\sqrt{2})}{2}$.


And we know that $AP = HM = HB + BM = \frac{5(\sqrt6-\sqrt2)}{2} + \frac{5\sqrt2}{2} = \frac{5\sqrt6}{2}$.


Finally if we calculate $(AP)^2$.


$(AP)^2=\frac{150}{4}=\frac{75}{2}$. So our final answer is $75+2=77$.


$m+n=\boxed{077}$


Thank you.


-Gamjawon

Solution 2. Here's a solution that doesn't need $\sin 15^\circ$.

As above, get to $AP=HM$. As in the figure, let $O$ be the foot of the perpendicular from $B$ to $AC$. Then $BCO$ is a 45-45-90 triangle, and $ABO$ is a 30-60-90 triangle. So $BO=5$ and $AO=5\sqrt{3}$; also, $CO=5$, $BC=5\sqrt2$, and $MC=\frac{BC}{2}=5\frac{\sqrt2}{2}$. But $MO$ and $AH$ are parallel, both being orthogonal to $BC$. Therefore $MH:AO=MC:CO$, or $MH=\frac{5\sqrt3}{\sqrt2}$, and we're done.

2014 AIME II Problems/Problem 15
Problem

For any integer $k\geq 1$, let $p(k)$ be the smallest prime which does not divide $k.$ Define the integer function $X(k)$ to be the product of all primes less than $p(k)$ if $p(k)>2$, and $X(k)=1$ if $p(k)=2.$ Let $\{x_n\}$ be the sequence defined by $x_0=1$, and $x_{n+1}X(x_n)=x_np(x_n)$ for $n\geq 0.$ Find the smallest positive integer $t$ such that $x_t=2090.$
Solution

Note that for any $x_i$, for any prime $p$, $p^2 \nmid x_i$. This provides motivation to translate $x_i$ into a binary sequence $y_i$.

Let the prime factorization of $x_i$ be written as $p_{a_1} \cdot p_{a_2} \cdot p_{a_3} \cdots$, where $p_i$ is the $i$th prime number. Then, for every $p_{a_k}$ in the prime factorization of $x_i$, place a $1$ in the $a_k$th digit of $y_i$. This will result in the conversion $x_1 = 2, x_{2} = 3, x_{3} = 2 * 3 = 6, \cdots$.

Multiplication for the sequence $x_i$ will translate to addition for the sequence $y_i$. Thus, we see that $x_{n+1}X(x_n) = x_np(x_n)$ translates into $y_{n+1} = y_n+1$. Since $x_0=1$, and $y_0=0$, $x_i$ corresponds to $y_i$, which is $i$ in binary. Since $x_{10010101_2} = 2 \cdot 5 \cdot 11 \cdot 19 = 2090$, $t = 10010101_2$ = $\boxed{149}$.

2014 AIME II Answer Key
1.	334
    2.076
    3.720
    4.447
    5.420
    6.167
    7.021
    8.254
    9.581
    10.147
    11.056
    12.399
    13.028
    14.077
    15.149

