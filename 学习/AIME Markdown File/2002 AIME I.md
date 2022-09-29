
## 2002 AIME I Problem 1


Many states use a sequence of three letters followed by a sequence of three digits as their standard license-plate pattern. Given that each three-letter three-digit arrangement is equally likely, the probability that such a license plate will contain at least one palindrome (a three-letter arrangement or a three-digit arrangement that reads the same left-to-right as it does right-to-left) is $\frac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m+n$
Solution
Solution 1

Consider the three-digit arrangement, $\overline{aba}$. There are $10$ choices for $a$ and $10$ choices for $b$ (since it is possible for $a=b$), and so the probability of picking the palindrome is $\frac{10 \times 10}{10^3} = \frac 1{10}$. Similarly, there is a $\frac 1{26}$ probability of picking the three-letter palindrome.

By the Principle of Inclusion-Exclusion, the total probability is
$\frac{1}{26}+\frac{1}{10}-\frac{1}{260}=\frac{35}{260}=\frac{7}{52}\quad\Longrightarrow\quad7+52=\boxed{059}$
Solution 2

Using complementary counting, we count all of the license plates that do not have the desired property. In order to not be a palindrome, the first and third characters of each string must be different. Therefore, there are $10\cdot 10\cdot 9$ three digit non-palindromes, and there are $26\cdot 26\cdot 25$ three letter non palindromes. As there are $10^3\cdot 26^3$ total three-letter three-digit arrangements, the probability that a license plate does not have the desired property is $\frac{10\cdot 10\cdot 9\cdot 26\cdot 26\cdot 25}{10^3\cdot 26^3}=\frac{45}{52}$. We subtract this from 1 to get $1-\frac{45}{52}=\frac{7}{52}$ as our probability. Therefore, our answer is $7+52=\boxed{059}$.


## 2002 AIME I Problem 2


The diagram shows twenty congruent circles arranged in three rows and enclosed in a rectangle. The circles are tangent to one another and to the sides of the rectangle as shown in the diagram. The ratio of the longer dimension of the rectangle to the shorter dimension can be written as $\frac{1}{2}(\sqrt{p}-q)$ where $p$ and $q$ are positive integers. Find $p+q$.

<div align=center><img src="http://wiki-images.artofproblemsolving.com/d/d4/AIME_2002I_Problem_02.png" height="150px" /></div>

Solution

Let the radius of the circles be $r$. The longer dimension of the rectangle can be written as $14r$, and by the Pythagorean Theorem, we find that the shorter dimension is $2r\left(\sqrt{3}+1\right)$.

Therefore, $\frac{14r}{2r\left(\sqrt{3}+1\right)}= \frac{7}{\sqrt{3} + 1} \cdot \left[\frac{\sqrt{3}-1}{\sqrt{3}-1}\right] = \frac{1}{2}\left(7\sqrt{3} - 7\right) = \frac{1}{2}\left(\sqrt{p}-q\right)$. Thus we have $p=147$ and $q=7$, so $p+q=\boxed{154}$.
Solution 2

Since we only care about the ratio between the longer side and shorter side, we can set the longer side to $14$. So, this means that each of the radii is $1$. Now, we connect the radii of three circles such that they form an equilateral triangle with side length 4. Obviously, the height this triangle is $2\sqrt{3}$, and the shorter side if the triangle is therefore $2\sqrt{3}+2$ and we use simplification similar to as showed above, and we reach the result $\frac{1}{2} \cdot (\sqrt{147}-7)$ and the final answer is $147+7 = \boxed{154}$.


## 2002 AIME I Problem 3

Jane is 25 years old. Dick is older than Jane. In $n$ years, where $n$ is a positive integer, Dick's age and Jane's age will both be two-digit number and will have the property that Jane's age is obtained by interchanging the digits of Dick's age. Let $d$ be Dick's present age. How many ordered pairs of positive integers $(d,n)$ are possible?
Solution

Let Jane's age $n$ years from now be $10a+b$, and let Dick's age be $10b+a$. If $10b+a>10a+b$, then $b>a$. The possible pairs of $a,b$ are:
$(1,2), (1,3), (2,3), (1,4), (2,4), (3,4), \dots , (8,9)$

That makes 36. But $10a+b>25$, so we subtract all the extraneous pairs: $(1,2), (1,3), (2,3), (1,4), (2,4), (1,5), (2,5), (1,6), (1,7), (1,8),$ and $(1,9)$. $36-11=\boxed{025}$


## 2002 AIME I Problem 3

Jane is 25 years old. Dick is older than Jane. In $n$ years, where $n$ is a positive integer, Dick's age and Jane's age will both be two-digit number and will have the property that Jane's age is obtained by interchanging the digits of Dick's age. Let $d$ be Dick's present age. How many ordered pairs of positive integers $(d,n)$ are possible?
Solution

Let Jane's age $n$ years from now be $10a+b$, and let Dick's age be $10b+a$. If $10b+a>10a+b$, then $b>a$. The possible pairs of $a,b$ are:
$(1,2), (1,3), (2,3), (1,4), (2,4), (3,4), \dots , (8,9)$

That makes 36. But $10a+b>25$, so we subtract all the extraneous pairs: $(1,2), (1,3), (2,3), (1,4), (2,4), (1,5), (2,5), (1,6), (1,7), (1,8),$ and $(1,9)$. $36-11=\boxed{025}$


## 2002 AIME I Problem 5

Let $A_1,A_2,A_3,\cdots,A_{12}$ be the vertices of a regular dodecagon. How many distinct squares in the plane of the dodecagon have at least two vertices in the set $\{A_1,A_2,A_3,\cdots,A_{12}\} ?$
Solution

There are 66 ways of picking two vertices. Note with any two vertices one can draw three squares (two with the vertices forming a side, another with the vertices forming the diagonal). So so far we have $66(3)=198$ squares, but we have overcounted since some squares have their other two vertices in the dodecagon as well. All 12 combinations of two distinct vertices that form a square side only form 3 squares, and all 12 combinations of two vertices that form a square diagonal only form 6 squares. So in total, we have overcounted by $9+6=15$, and $198-15=\fbox{183}$.


## 2002 AIME I Problem 6

The solutions to the system of equations
$\log_{225}x+\log_{64}y=4$
$\log_{x}225-\log_{y}64=1$

are $(x_1,y_1)$ and $(x_2,y_2)$. Find $\log_{30}\left(x_1y_1x_2y_2\right)$.
Solution

Let $A=\log_{225}x$ and let $B=\log_{64}y$.

From the first equation: $A+B=4 \Rightarrow B = 4-A$.

Plugging this into the second equation yields $\frac{1}{A}-\frac{1}{B}=\frac{1}{A}-\frac{1}{4-A}=1 \Rightarrow A = 3\pm\sqrt{5}$ and thus, $B=1\pm\sqrt{5}$.

So, $\log_{225}(x_1x_2)=\log_{225}(x_1)+\log_{225}(x_2)=(3+\sqrt{5})+(3-\sqrt{5})=6$ $\Rightarrow x_1x_2=225^6=15^{12}$.

And $\log_{64}(y_1y_2)=\log_{64}(y_1)+\log_{64}(y_2)=(1+\sqrt{5})+(1-\sqrt{5})=2$ $\Rightarrow y_1y_2=64^2=2^{12}$.

Thus, $\log_{30}\left(x_1y_1x_2y_2\right) = \log_{30}\left(15^{12}\cdot2^{12} \right) = \log_{30}\left(30^{12} \right) = \boxed{012}$.


One may simplify the work by applying Vieta's formulas to directly find that $\log x_1 + \log x_2 = 6 \log 225, \log y_1 + \log y_2 = 2 \log 64$.


## 2002 AIME I Problem 7

The Binomial Expansion is valid for exponents that are not integers. That is, for all real numbers $x,y$ and $r$ with $|x|>|y|$,

$(x+y)^r=x^r+rx^{r-1}y+\frac{r(r-1)}{2}x^{r-2}y^2+\frac{r(r-1)(r-2)}{3!}x^{r-3}y^3 \cdots$

What are the first three digits to the right of the decimal point in the decimal representation of $(10^{2002}+1)^{\frac{10}{7}}$?
Solution

$1^n$ will always be 1, so we can ignore those terms, and using the definition ($2002 / 7 = 286$):

$(10^{2002} + 1)^{\frac {10}7} = 10^{2860}+\frac{10}{7}10^{858}+\frac{15}{49}10^{-1144}+\cdots$

Since the exponent of the $10$ goes down extremely fast, it suffices to consider the first few terms. Also, the $10^{2860}$ term will not affect the digits after the decimal, so we need to find the first three digits after the decimal in

$\frac{10}{7}10^{858}$.

(The remainder after this term is positive by the Remainder Estimation Theorem). Since the repeating decimal of $\frac{10}{7}$ repeats every 6 digits, we can cut out a lot of 6's from $858$ to reduce the problem to finding the first three digits after the decimal of

$\frac{10}{7}$.

That is the same as $1+\frac{3}{7}$, and the first three digits after $\frac{3}{7}$ are $\boxed{428}$.

An equivalent statement is to note that we are looking for $1000 \left\{\frac{10^{859}}{7}\right\}$, where $\{x\} = x - \lfloor x \rfloor$ is the fractional part of a number. By Fermat's Little Theorem, $10^6 \equiv 1 \mod{7}$, so $10^{859} \equiv 3^{6 \times 143 + 1} \equiv 3 \mod{7}$; in other words, $10^{859}$ leaves a residue of $3$ after division by $7$. Then the desired answer is the first three decimal places after $\frac 37$, which are $\boxed{428}$.


## 2002 AIME I Problem 8

Find the smallest integer $k$ for which the conditions

(1) $a_1,a_2,a_3\cdots$ is a nondecreasing sequence of positive integers

(2) $a_n=a_{n-1}+a_{n-2}$ for all $n>2$

(3) $a_9=k$

are satisfied by more than one sequence.
Solution

From $(2)$, $a_9=$ $a_8+a_7=2a_7+a_6=3a_6+2a_5=5a_5+3a_4=8a_4+5a_3=13a_3+8a_2=21a_2+13a_1$ $=k$

Suppose that $a_1=x_0$ is the smallest possible value for $a_1$ that yields a good sequence, and $a_2=y_0$ in this sequence. So, $13x_0+21y_0=k$.

Since $\gcd(13,21)=1$, the next smallest possible value for $a_1$ that yields a good sequence is $a_1=x_0+21$. Then, $a_2=y_0-13$.

By $(1)$, $a_2 \ge a_1 \Rightarrow y_0-13 \ge x_0+21 \Rightarrow y_0 \ge x_0+34 \ge 35$. So the smallest value of $k$ is attained when $(x_0,y_0)=(1,35)$ which yields $(a_1,a_2)=(1,35)$ or $(22,22)$.

Thus, $k=13(1)+21(35)=\boxed{748}$ is the smallest possible value of $k$.


## 2002 AIME I Problem 9

Harold, Tanya, and Ulysses paint a very long picket fence.

Harold starts with the first picket and paints every $h$ th picket;
Tanya starts with the second picket and paints every $t$ th picket; and
Ulysses starts with the third picket and paints every $u$ th picket. 

Call the positive integer $100h+10t+u$ paintable when the triple $(h,t,u)$ of positive integers results in every picket being painted exactly once. Find the sum of all the paintable integers.

Solution
Solution 1

Note that it is impossible for any of $h,t,u$ to be $1$, since then each picket will have been painted one time, and then some will be painted more than once.

$h$ cannot be $2$, or that will result in painting the third picket twice. If $h=3$, then $t$ may not equal anything not divisible by $3$, and the same for $u$. Now for fourth and fifth pickets to be painted, $t$ and $u$ must be $3$ as well. This configuration works, so $333$ is paintable.

If $h$ is $4$, then $t$ must be even. The same for $u$, except that it can't be $2 \mod 4$. Thus $u$ is $0 \mod 4$ and $t$ is $2 \mod 4$. Since this is all $\mod 4$, $t$ must be $2$ and $u$ must be $4$, in order for $5,6$ to be paint-able. Thus $424$ is paintable.

$h$ cannot be greater than $5$, since if that were the case then the answer would be greater than $999$, which would be impossible for the AIME.

Thus the sum of all paintable numbers is $\boxed{757}$.
Solution 2

Again, note that $h,t,u \neq 1$. The three conditions state that no picket number $n$ may satisfy any two of the conditions: $n \equiv 1 \mod{h},\ n \equiv 2 \mod{t},\ n \equiv 3 \mod{u}$. By the Chinese Remainder Theorem, the greatest common divisor of any pair of the three numbers $\{h,t,u\}$ cannot be $1$ (since otherwise without loss of generality consider $\text{gcd}\,(h,t) = 1$; then there will be a common solution $\mod{h \times t}$).

Now for $4$ to be paint-able, we require either $h = 3$ or $t=2$, but not both.

In the former condition, since $\text{gcd}\,(h,t),\ \text{gcd}\,(h,u) \neq 1$, it follows that $3|t,u$. For $5$ and $6$ to be paint-able, we require $t = u = 3$, and it is easy to see that $333$ works.
In the latter condition, similarly we require that $2|h,u$. All even numbers are painted. We now renumber the remaining odd pickets to become the set of all positive integers ($1,3,5, \ldots \rightarrow 1',2',3', \ldots$, where $n' = \frac{n+1}{2}$), which requires the transformation $h' = h/2,\ u' = u/2$, and with the painting starting respectively at $1',2'$. Our new number system retains the same conditions as above, except without $t$. We thus need $\text{gcd}\, (h',u') \neq 1, h',u' \neq 1$. Then for $3',4'$ to be painted, we require $h' = u' = 2$. This translates to $424$, which we see works. 

Thus the answer is $333+424 = \boxed{757}$.


## 2002 AIME I Problem 10

In the diagram below, angle $ABC$ is a right angle. Point $D$ is on $\overline{BC}$, and $\overline{AD}$ bisects angle $CAB$. Points $E$ and $F$ are on $\overline{AB}$ and $\overline{AC}$, respectively, so that $AE=3$ and $AF=10$. Given that $EB=9$ and $FC=27$, find the integer closest to the area of quadrilateral $DCFG$.

<div align=center><img src="http://wiki-images.artofproblemsolving.com/8/8d/AIME_2002I_Problem_10.png" height="150px" /></div>

Solution

By the Pythagorean Theorem, $BC=35$. Letting $BD=x$ we can use the Angle Bisector Theorem on triangle $ABC$ to get $x/12=(35-x)/37$, and solving gives $BD=60/7$ and $DC=185/7$.

The area of triangle $AGF$ is $10/3$ that of triangle $AEG$, since they share a common side and angle, so the area of triangle $AGF$ is $10/13$ the area of triangle $AEF$.

Since the area of a triangle is $\frac{ab\sin{C}}2$, the area of $AEF$ is $525/37$ and the area of $AGF$ is $5250/481$.

The area of triangle $ABD$ is $360/7$, and the area of the entire triangle $ABC$ is $210$. Subtracting the areas of $ABD$ and $AGF$ from $210$ and finding the closest integer gives $\boxed{148}$ as the answer.


## 2002 AIME I Problem 11

Let $ABCD$ and $BCFG$ be two faces of a cube with $AB=12$. A beam of light emanates from vertex $A$ and reflects off face $BCFG$ at point $P$, which is 7 units from $\overline{BG}$ and 5 units from $\overline{BC}$. The beam continues to be reflected off the faces of the cube. The length of the light path from the time it leaves point $A$ until it next reaches a vertex of the cube is given by $m\sqrt{n}$, where $m$ and $n$ are integers and $n$ is not divisible by the square of any prime. Find $m+n$.
Solution

We can use a similar trick as with reflections in 2D: Imagine that the entire space is divided into cubes identical to the one we have. Now let's follow a two photons of light that start in $A$ at the same time: one of them will reflect as given in the problem statement, the second will simply fly straight through all cubes. It can easily be seen that at any moment in time the photons are in exactly the same position relative to the cubes they are inside at the moment. In other words, we can take the cube with the first photon, translate it and flip if necessary, to get the cube with the other photon.

It follows that both photons will hit a vertex at the same time, and at this moment they will have travelled the same distance.

Now, the path of the second photon is simply a half-line given by the vector $(12,7,5)$. That is, the points visited by the photon are of the form $(12t,7t,5t)$ for $t\geq 0$. We are looking for the smallest $t$ such that all three coordinates are integer multiples of $12$ (which is the length of the side of the cube).

Clearly $t$ must be an integer. As $7$ and $12$ are relatively prime, the smallest solution is $t=12$. At this moment the second photon will be at the coordinates $(12\cdot 12,7\cdot 12,5\cdot 12)$.

Then the distance it travelled is $\sqrt{ (12\cdot 12)^2 + (7\cdot 12)^2 + (5\cdot 12)^2 } = 12\sqrt{12^2 + 7^2 + 5^2}=12\sqrt{218}$. And as the factorization of $218$ is $218=2\cdot 109$, we have $m=12$ and $n=218$, hence $m+n=\boxed{230}$.


## 2002 AIME I Problem 12

Let $F(z)=\frac{z+i}{z-i}$ for all complex numbers $z\neq i$, and let $z_n=F(z_{n-1})$ for all positive integers $n$. Given that $z_0=\frac{1}{137}+i$ and $z_{2002}=a+bi$, where $a$ and $b$ are real numbers, find $a+b$.
Solution

Iterating $F$ we get:

$\begin{align*} F(z) &= \frac{z+i}{z-i}\\ F(F(z)) &= \frac{\frac{z+i}{z-i}+i}{\frac{z+i}{z-i}-i} = \frac{(z+i)+i(z-i)}{(z+i)-i(z-i)}= \frac{z+i+zi+1}{z+i-zi-1}= \frac{(z+1)(i+1)}{(z-1)(1-i)}\\ &= \frac{(z+1)(i+1)^2}{(z-1)(1^2+1^2)}= \frac{(z+1)(2i)}{(z-1)(2)}= \frac{z+1}{z-1}i\\ F(F(F(z))) &= \frac{\frac{z+1}{z-1}i+i}{\frac{z+1}{z-1}i-i} = \frac{\frac{z+1}{z-1}+1}{\frac{z+1}{z-1}-1} = \frac{(z+1)+(z-1)}{(z+1)-(z-1)} = \frac{2z}{2} = z. \end{align*}$

From this, it follows that $z_{k+3} = z_k$, for all $k$. Thus $z_{2002} = z_{3\cdot 667+1} = z_1 = \frac{z_0+i}{z_0-i} = \frac{(\frac{1}{137}+i)+i}{(\frac{1}{137}+i)-i}= \frac{\frac{1}{137}+2i}{\frac{1}{137}}= 1+274i.$

Thus $a+b = 1+274 = \boxed{275}$.


## 2002 AIME I Problem 13


In triangle $ABC$ the medians $\overline{AD}$ and $\overline{CE}$ have lengths $18$ and $27$, respectively, and $AB=24$. Extend $\overline{CE}$ to intersect the circumcircle of $ABC$ at $F$. The area of triangle $AFB$ is $m\sqrt{n}$, where $m$ and $n$ are positive integers and $n$ is not divisible by the square of any prime. Find $m+n$.
Solution 1

<div align=center><img src="http://latex.artofproblemsolving.com/2/3/6/236d2c7ecccc097482080a6f0ffbf91d00c72995.png" height="150px" /></div>

Applying Stewart's Theorem to medians $AD, CE$, we have:

$\begin{align*} BC^2 + 4 \cdot 18^2 &= 2\left(24^2 + AC^2\right) \\ 24^2 + 4 \cdot 27^2 &= 2\left(AC^2 + BC^2\right) \end{align*}$

Substituting the first equation into the second and simplification yields $24^2 = 2\left(3AC^2 + 2 \cdot 24^2 - 4 \cdot 18^2\right)- 4 \cdot 27^2$ $\Longrightarrow AC = \sqrt{2^5 \cdot 3 + 2 \cdot 3^5 + 2^4 \cdot 3^3 - 2^7 \cdot 3} = 3\sqrt{70}$.

By the Power of a Point Theorem on $E$, we get $EF = \frac{12^2}{27} = \frac{16}{3}$. The Law of Cosines on $\triangle ACE$ gives

$\begin{align*} \cos \angle AEC = \left(\frac{12^2 + 27^2 - 9 \cdot 70}{2 \cdot 12 \cdot 27}\right) = \frac{3}{8} \end{align*}$

Hence $\sin \angle AEC = \sqrt{1 - \cos^2 \angle AEC} = \frac{\sqrt{55}}{8}$. Because $\triangle AEF, BEF$ have the same height and equal bases, they have the same area, and $[ABF] = 2[AEF] = 2 \cdot \frac 12 \cdot AE \cdot EF \sin \angle AEF = 12 \cdot \frac{16}{3} \cdot \frac{\sqrt{55}}{8} = 8\sqrt{55}$, and the answer is $8 + 55 = \boxed{063}$.
Solution 2

Let $AD$ and $CE$ intersect at $P$. Since medians split one another in a 2:1 ratio, we have

$\begin{align*} AP = 12, PE = 9 \end{align*}$

This gives isosceles $APE$ and thus an easy area calculation. After extending the altitude to $PE$ and using the fact that it is also a median, we find

$\begin{align*} [APE] = \frac{27\sqrt{55}}{4} \end{align*}$

Using Power of a Point, we have

$\begin{align*} EF=\frac{16}{3} \end{align*}$

By Same Height Different Base,

$\begin{align*} \frac{[AFE]}{[APE]}=\frac{[AFE]}{(\frac{27\sqrt{55}}{4})}=\frac{EF}{PE}=\frac{(\frac{16}{3})}{9}=\frac{16}{27} \end{align*}$

Solving gives

$\begin{align*} [AFE] = 4\sqrt{55} \end{align*}$

and

$\begin{align*} [AFB]=2[AFE]=8\sqrt{55} \end{align*}$

Thus, our answer is $8+55=\boxed{063}$.


## 2002 AIME I Problem 14

A set $\mathcal{S}$ of distinct positive integers has the following property: for every integer $x$ in $\mathcal{S},$ the arithmetic mean of the set of values obtained by deleting $x$ from $\mathcal{S}$ is an integer. Given that 1 belongs to $\mathcal{S}$ and that 2002 is the largest element of $\mathcal{S},$ what is the greatest number of elements that $\mathcal{S}$ can have?
Solution

Let the sum of the integers in $\mathcal{S}$ be $N$, and let the size of $|\mathcal{S}|$ be $n+1$. After any element $x$ is removed, we are given that $n|N-x$, so $x\equiv N\mod{n}$. Since $1\in\mathcal{S}$, $N\equiv1\mod{n}$, and all elements are congruent to 1 mod $n$. Since they are positive integers, the largest element is at least $n^2+1$, the $(n+1)$th positive integer congruent to 1 mod $n$.

We are also given that this largest member is 2002, so $2002\equiv1\mod{n}$, and $n|2001=3\cdot23\cdot29$. Also, we have $n^2+1\le2002$, so $n<45$. The largest factor of 2001 less than 45 is 29, so $n=29$ and $n+1=\fbox{30}$ is the largest possible. This can be achieved with $\mathcal{S}=\{1,30,59,88,\ldots,813,2002\}$, for instance.


## 2002 AIME I Problem 15

Polyhedron $ABCDEFG$ has six faces. Face $ABCD$ is a square with $AB = 12;$ face $ABFG$ is a trapezoid with $\overline{AB}$ parallel to $\overline{GF},$ $BF = AG = 8,$ and $GF = 6;$ and face $CDE$ has $CE = DE = 14.$ The other three faces are $ADEG, BCEF,$ and $EFG.$ The distance from $E$ to face $ABCD$ is 12. Given that $EG^2 = p - q\sqrt {r},$ where $p, q,$ and $r$ are positive integers and $r$ is not divisible by the square of any prime, find $p + q + r.$
Solution

<div align=center><img src="http://latex.artofproblemsolving.com/1/6/7/167e69f38f11e4b219976293223c73b2bdec1e72.png" height="150px" /></div>

Let's put the polyhedron onto a coordinate plane. For simplicity, let the origin be the center of the square: $A(-6,6,0)$, $B(-6,-6,0)$, $C(6,-6,0)$ and $D(6,6,0)$. Since $ABFG$ is an isosceles trapezoid and $CDE$ is an isosceles triangle, we have symmetry about the $xz$-plane.

Therefore, the $y$-component of $E$ is 0. We are given that the $z$ component is 12, and it lies over the square, so we must have $E(2,0,12)$ so $CE=\sqrt{4^2+6^2+12^2}=\sqrt{196}=14$ (the other solution, $E(10,0,12)$ does not lie over the square). Now let $F(a,-3,b)$ and $G(a,3,b)$, so $FG=6$ is parallel to $\overline{AB}$. We must have $BF=8$, so $(a+6)^2+b^2=8^2-3^2=55$.

The last piece of information we have is that $ADEG$ (and its reflection, $BCEF$) are faces of the polyhedron, so they must all lie in the same plane. Since we have $A$, $D$, and $E$, we can derive this plane.* Let $H$ be the extension of the intersection of the lines containing $\overline{AG}, \overline{BF}$. It follows that the projection of $\triangle AHB$ onto the plane $x = 6$ must coincide with the $\triangle CDE'$, where $E'$ is the projection of $E$ onto the plane $x = 6$. $\triangle GHF \sim \triangle AHB$ by a ratio of $1/2$, so the distance from $H$ to the plane $x = -6$ is $\sqrt{\left(\sqrt{(2 \times 8)^2 - 6^2}\right)^2 - 12^2} = 2\sqrt{19};$ and by the similarity, the distance from $G$ to the plane $x = -6$ is $\sqrt{19}$. The altitude from $G$ to $ABCD$ has height $12/2 = 6$. By similarity, the x-coordinate of $G$ is $-6/2 = -3$. Then $G = (-6 \pm \sqrt{19}, -3, 6)$.

Now that we have located $G$, we can calculate $EG^2$: $EG^2=(8\pm\sqrt{19})^2+3^2+6^2=64\pm16\sqrt{19}+19+9+36=128\pm16\sqrt{19}.$ Taking the negative root because the answer form asks for it, we get $128-16\sqrt{19}$, and $128+16+19=\fbox{163}$.

One may also do this by vectors; $\vec{AD}\times\vec{DE}=(12,0,0)\times(-4,-6,12)=(0,-144,-72)=-72(0,2,1)$, so the plane is $2y+z=2\cdot6=12$. Since $G$ lies on this plane, we must have $2\cdot3+b=12$, so $b=6$. Therefore, $a=-6\pm\sqrt{55-6^2}=-6\pm\sqrt{19}$. So $G(-6\pm\sqrt{19},-3,6)$.



**2002 AIME I Answer Key**

1. 059
2. 154
3. 025
4. 840
5. 183
6. 012
7. 428
8. 748
9. 757
10. 148
11. 230
12. 275
13. 063
14. 030
15. 163

 