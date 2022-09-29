# 2011 AIME II


2011 AIME II Problem 1
Problem

Gary purchased a large beverage, but only drank $m/n$ of it, where $m$ and $n$ are relatively prime positive integers. If he had purchased half as much and drunk twice as much, he would have wasted only $2/9$ as much beverage. Find $m+n$.
Solution

Let $x$ be the fraction consumed, then $(1-x)$ is the fraction wasted. We have $\frac{1}{2} - 2x =\frac{2}{9} (1-x)$, or $9 - 36x = 4 - 4x$, or $32x = 5$ or $x = 5/32$. Therefore, $m + n = 5 + 32 = \boxed{037.}$



2011 AIME II Problem 2
Problem 2

On square $ABCD$, point $E$ lies on side $AD$ and point $F$ lies on side $BC$, so that $BE=EF=FD=30$. Find the area of the square $ABCD$.
Solution

Drawing the square and examining the given lengths, 

<div align="center"><img src="http://latex.artofproblemsolving.com/9/7/e/97e1902d72e5ce4625cf85ddc9e4d4562650ec51.png" height="150px" /></div>

you find that the three segments cut the square into three equal horizontal sections. Therefore, ($x$ being the side length), $\sqrt{x^2+(x/3)^2}=30$, or $x^2+(x/3)^2=900$. Solving for $x$, we get $x=9\sqrt{10}$, and $x^2=810.$

Area of the square is $\fbox{810}$.



2011 AIME II Problem 3
Problem 3

The degree measures of the angles in a convex 18-sided polygon form an increasing arithmetic sequence with integer values. Find the degree measure of the smallest angle.

Solution
Solution 1

The average angle in an 18-gon is $160^\circ$. In an arithmetic sequence the average is the same as the median, so the middle two terms of the sequence average to $160^\circ$. Thus for some positive (the sequence is increasing and thus non-constant) integer $d$, the middle two terms are $(160-d)^\circ$ and $(160+d)^\circ$. Since the step is $2d$ the last term of the sequence is $(160 + 17d)^\circ$, which must be less than $180^\circ$, since the polygon is convex. This gives $17d < 20$, so the only suitable positive integer $d$ is 1. The first term is then $(160-17)^\circ = \fbox{143}.$
Solution 2

You could also solve this problem with exterior angles. Exterior angles of any polygon add up to $360^{\circ}$. Since there are $18$ exterior angles in an 18-gon, the average measure of an exterior angles is $\frac{360}{18}=20^\circ$. We know from the problem that since the exterior angles must be in an arithmetic sequence, the median and average of them is $20$. Since there are even number of exterior angles, the middle two must be $19^\circ$ and $21^\circ$, and the difference between terms must be $2$. Check to make sure the smallest exterior angle is greater than $0$: $19-2(8)=19-16=3^\circ$. It is, so the greatest exterior angle is $21+2(8)=21+16=37^\circ$ and the smallest interior angle is $180-37=\boxed{143}$.



2011 AIME II Problem 4
Problem 4

In triangle $ABC$, $AB=\frac{20}{11} AC$. The angle bisector of $\angle A$ intersects $BC$ at point $D$, and point $M$ is the midpoint of $AD$. Let $P$ be the point of the intersection of $AC$ and $BM$. The ratio of $CP$ to $PA$ can be expressed in the form $\frac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m+n$.

Solutions
Solution 1

<div align="center"><img src="http://latex.artofproblemsolving.com/a/7/a/a7abafb670ee1184b15212c26ace11aa21637220.png" height="150px" /></div>

Let $D'$ be on $\overline{AC}$ such that $BP \parallel DD'$. It follows that $\triangle BPC \sim \triangle DD'C$, so $\frac{PC}{D'C} = 1 + \frac{BD}{DC} = 1 + \frac{AB}{AC} = \frac{31}{11}$ by the Angle Bisector Theorem. Similarly, we see by the midline theorem that $AP = PD'$. Thus, $\frac{CP}{PA} = \frac{1}{\frac{PD'}{PC}} = \frac{1}{1 - \frac{D'C}{PC}} = \frac{31}{20},$ and $m+n = \boxed{051}$.
Solution 2

Assign mass points as follows: by Angle-Bisector Theorem, $BD / DC = 20/11$, so we assign $m(B) = 11, m(C) = 20, m(D) = 31$. Since $AM = MD$, then $m(A) = 31$, and $\frac{CP}{PA} = \frac{m(A) }{ m(C)} = \frac{31}{20}$.
Solution 3

By Menelaus' Theorem on $\triangle ACD$ with transversal $PB$, $1 = \frac{CP}{PA} \cdot \frac{AM}{MD} \cdot \frac{DB}{CB} = \frac{CP}{PA} \cdot \left(\frac{1}{1+\frac{AC}{AB}}\right) \quad \Longrightarrow \quad \frac{CP}{PA} = \frac{31}{20}.$
Solution 4

We will use barycentric coordinates. Let $A = (1, 0, 0)$, $B = (0, 1, 0)$, $C = (0, 0, 1)$. By the Angle Bisector Theorem, $D = [0:11:20] = \left(0, \frac{11}{31}, \frac{20}{31}\right)$. Since $M$ is the midpoint of $AD$, $M = \frac{A + D}{2} = \left(\frac{1}{2}, \frac{11}{62}, \frac{10}{31}\right)$. Therefore, the equation for line BM is $20x = 31z$. Let $P = (x, 0, 1-x)$. Using the equation for $BM$, we get $20x = 31(1-x)$ $x = \frac{31}{51}$ Therefore, $\frac{CP}{PA} = \frac{1-x}{x} = \frac{31}{20}$ so the answer is $\boxed{051}$.
Solution 5

Let $DC=x$. Then by the Angle Bisector Theorem, $BD=\frac{20}{11}x$. By the Ratio Lemma, we have that $\frac{PC}{AP}=\frac{\frac{31}{11}x\sin\angle PBC}{20\sin\angle ABP}.$ Notice that $[\triangle BAM]=[\triangle BMD]$ since their bases have the same length and they share a height. By the sin area formula, we have that $\frac{1}{2}\cdot20\cdot BM\cdot \sin\angle ABP=\frac{1}{2}\cdot \frac{20}{11}x\cdot BM\cdot\sin\angle PBC.$ Simplifying, we get that $\frac{\sin\angle PBC}{\sin\angle ABP}=\frac{11}{x}.$ Plugging this into what we got from the Ratio Lemma, we have that $\frac{PC}{AP}=\frac{31}{20}\implies\boxed{051.}$



2011 AIME II Problem 5

Problem

The sum of the first 2011 terms of a geometric sequence is 200. The sum of the first 4022 terms is 380. Find the sum of the first 6033 terms.
Solution

Since the sum of the first $2011$ terms is $200$, and the sum of the fist $4022$ terms is $380$, the sum of the second $2011$ terms is $180$. This is decreasing from the first 2011, so the common ratio is less than one.

Because it is a geometric sequence and the sum of the first 2011 terms is $200$, second $2011$ is $180$, the ratio of the second $2011$ terms to the first $2011$ terms is $\frac{9}{10}$. Following the same pattern, the sum of the third $2011$ terms is $\frac{9}{10}*180 = 162$.

Thus, $200+180+162=542$, so the sum of the first $6033$ terms is $\boxed{542}$.
Solution 2

Solution by e_power_pi_times_i

The sum of the first $2011$ terms can be written as $\frac{a_1(1-k^{2011})}{1-k}$, and the first $4022$ terms can be written as $\frac{a_1(1-k^{4022})}{1-k}$. Dividing these equations, we get $\frac{1-k^{2011}}{1-k^{4022}} = \frac{10}{19}$. Noticing that $k^{4022}$ is just the square of $k^{2011}$, we substitute $x = k^{2011}$, so $\frac{1}{x+1} = \frac{10}{19}$. That means that $k^{2011} = \frac{9}{10}$. Since the sum of the first $6033$ terms can be written as $\frac{a_1(1-k^{6033})}{1-k}$, dividing gives $\frac{1-k^{2011}}{1-k^{6033}}$. Since $k^{6033} = \frac{729}{1000}$, plugging all the values in gives $\boxed{542}$.



2011 AIME II Problem 6

Problem 6

Define an ordered quadruple of integers $(a, b, c, d)$ as interesting if $1 \le a<b<c<d \le 10$, and $a+d>b+c$. How many interesting ordered quadruples are there?
Solution 1

Rearranging the inequality we get $d-c > b-a$. Let $e = 11$, then $(a, b-a, c-b, d-c, e-d)$ is a partition of 11 into 5 positive integers or equivalently: $(a-1, b-a-1, c-b-1, d-c-1, e-d-1)$ is a partition of 6 into 5 non-negative integer parts. Via a standard balls and urns argument, the number of ways to partition 6 into 5 non-negative parts is $\binom{6+4}4 = \binom{10}4 = 210$. The interesting quadruples correspond to partitions where the second number is less than the fourth. By symmetry, there are as many partitions where the fourth is less than the second. So, if $N$ is the number of partitions where the second element is equal to the fourth, our answer is $(210-N)/2$.

We find $N$ as a sum of 4 cases:

two parts equal to zero, $\binom82 = 28$ ways,
two parts equal to one, $\binom62 = 15$ ways,
two parts equal to two, $\binom42 = 6$ ways,
two parts equal to three, $\binom22 = 1$ way.

Therefore, $N = 28 + 15 + 6 + 1 = 50$ and our answer is $(210 - 50)/2 = \fbox{80.}$
Solution 2

Let us consider our quadruple (a,b,c,d) as the following image xaxbcxxdxx. The location of the letter a,b,c,d represents its value and x is a place holder. Clearly the quadruple is interesting if there are more place holders between c and d than there are between a and b. 0 holders between a and b means we consider a and b as one unit ab and c as cx yielding $\binom83 = 56$ ways, 1 holder between a and b means we consider a and b as one unit axb and c as cxx yielding $\binom 63 = 20$ ways, 2 holders between a and b means we consider a and b as one unit axxb and c as cxxx yielding $\binom43 = 4$ ways and there cannot be 3 holders between a and b so our total is 56+20+4=$\fbox{80.}$.



2011 AIME II Problem 7
Problem

Ed has five identical green marbles, and a large supply of identical red marbles. He arranges the green marbles and some of the red ones in a row and finds that the number of marbles whose right hand neighbor is the same color as themselves is equal to the number of marbles whose right hand neighbor is the other color. An example of such an arrangement is GGRRRGGRG. Let $m$ be the maximum number of red marbles for which such an arrangement is possible, and let $N$ be the number of ways he can arrange the $m+5$ marbles to satisfy the requirement. Find the remainder when $N$ is divided by $1000$.
Solution

We are limited by the number of marbles whose right hand neighbor is not the same color as the marble. By surrounding every green marble with red marbles - RGRGRGRGRGR. That's 10 "not the same colors" and 0 "same colors." Now, for every red marble we add, we will add one "same color" pair and keep all 10 "not the same color" pairs. It follows that we can add 10 more red marbles for a total of $m = 16$. We can place those ten marbles in any of 6 "boxes": To the left of the first green marble, to the right of the first but left of the second, etc. up until to the right of the last. This is a stars-and-bars problem, the solution of which can be found as $\binom{n+k}{k}$ where n is the number of stars and k is the number of bars. There are 10 stars (The unassigned Rs, since each "box" must contain at least one, are not counted here) and 5 "bars," the green marbles. So the answer is $\binom{15}{5} = 3003$, take the remainder when divided by 1000 to get the answer: $\boxed{003}$.



2011 AIME II Problem 8
Problem

Let $z_1$, $z_2$, $z_3$, $\dots$, $z_{12}$ be the 12 zeroes of the polynomial $z^{12} - 2^{36}$. For each $j$, let $w_j$ be one of $z_j$ or $iz_j$. Then the maximum possible value of the real part of $\sum_{j = 1}^{12} w_j$ can be written as $m + \sqrt{n}$, where $m$ and $n$ are positive integers. Find $m + n$.
Solution

<div align="center"><img src="http://wiki-images.artofproblemsolving.com/b/b3/2011_AIME_II_-8.png" height="150px" /></div>

The twelve dots above represent the 12 roots of the equation $z^{12}-2^{36}=0$. If we write $z=a+bi$, then the real part of $z$ is $a$ and the real part of $iz$ is $-b$. The blue dots represent those roots $z$ for which the real part of $z$ is greater than the real part of $iz$, and the red dots represent those roots $z$ for which the real part of $iz$ is greater than the real part of $z$. Now, the sum of the real parts of the blue dots is easily seen to be $8+16\cos\frac{\pi}{6}=8+8\sqrt{3}$ and the negative of the sum of the imaginary parts of the red dots is easily seen to also be $8+8\sqrt{3}$. Hence our desired sum is $16+16\sqrt{3}=16+\sqrt{768}$, giving the answer $\boxed{784}$.



2011 AIME II Problem 9
Problem 9

Let $x_1, x_2, ... , x_6$ be non-negative real numbers such that $x_1 +x_2 +x_3 +x_4 +x_5 +x_6 =1$, and $x_1 x_3 x_5 +x_2 x_4 x_6 \ge {\scriptstyle\frac{1}{540}}$. Let $p$ and $q$ be positive relatively prime integers such that $\frac{p}{q}$ is the maximum possible value of $x_1 x_2 x_3 + x_2 x_3 x_4 +x_3 x_4 x_5 +x_4 x_5 x_6 +x_5 x_6 x_1 +x_6 x_1 x_2$. Find $p+q$.
Solution

Note that neither the constraint nor the expression we need to maximize involves products $x_i x_j$ with $i \equiv j \mod 3$. Factoring out say $x_1$ and $x_4$ we see that the constraint is $x_1(x_3x_5) + x_4(x_2x_6) \ge {\scriptstyle\frac1{540}}$, while the expression we want to maximize is $x_1(x_2x_3 + x_5x_6 + x_6x_2) + x_4(x_2x_3 + x_5x_6 + x_3x_5)$. Adding the left side of the constraint to the expression, we get: $(x_1 + x_4)(x_2x_3 + x_5x_6 + x_6x_2 + x_3x_5) = (x_1 + x_4)(x_2 + x_5)(x_3 + x_6)$. This new expression is the product of three non-negative terms whose sum is equal to 1. By AM-GM this product is at most $\scriptstyle\frac1{27}$. Since we have added at least $\scriptstyle\frac1{540}$ the desired maximum is at most $\scriptstyle\frac1{27} - \frac1{540} = \frac{19}{540}$. It is easy to see that this upper bound can in fact be achieved by ensuring that the constraint expression is equal to $\scriptstyle\frac1{540}$ with $x_1 + x_4 = x_2 + x_5 = x_3 + x_6 = \scriptstyle\frac13$—for example, by choosing $x_1$ and $x_2$ small enough—so our answer is $540 + 19 = \fbox{559}.$

An example is: $\begin{align*} x_3 &= x_6 = \frac16 \\ x_1 &= x_2 = \frac{5 - \sqrt{20}}{30} \\ x_5 &= x_4 = \frac{5 + \sqrt{20}}{30} \end{align*}$

Another example is $\begin{align*} x_1 = x_3 = \frac{1}{3} \\ x_2 = \frac{19}{60}, \ x_5 = \frac{1}{60} \\ x_4 &= x_6 = 0 \end{align*}$



2011 AIME II Problem 10

Problem 10

A circle with center $O$ has radius 25. Chord $\overline{AB}$ of length 30 and chord $\overline{CD}$ of length 14 intersect at point $P$. The distance between the midpoints of the two chords is 12. The quantity $OP^2$ can be represented as $\frac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find the remainder when $m + n$ is divided by 1000.
Solution 1

Let $E$ and $F$ be the midpoints of $\overline{AB}$ and $\overline{CD}$, respectively, such that $\overline{BE}$ intersects $\overline{CF}$.

Since $E$ and $F$ are midpoints, $BE = 15$ and $CF = 7$.

$B$ and $C$ are located on the circumference of the circle, so $OB = OC = 25$.

The line through the midpoint of a chord of a circle and the center of that circle is perpendicular to that chord, so $\triangle OEB$ and $\triangle OFC$ are right triangles (with $\angle OEB$ and $\angle OFC$ being the right angles). By the Pythagorean Theorem, $OE = \sqrt{25^2 - 15^2} = 20$, and $OF = \sqrt{25^2 - 7^2} = 24$.

Let $x$, $a$, and $b$ be lengths $OP$, $EP$, and $FP$, respectively. OEP and OFP are also right triangles, so $x^2 = a^2 + 20^2 \to a^2 = x^2 - 400$, and $x^2 = b^2 + 24^2 \to b^2 = x^2 - 576$

We are given that $EF$ has length 12, so, using the Law of Cosines with $\triangle EPF$:

$12^2 = a^2 + b^2 - 2ab \cos (\angle EPF) = a^2 + b^2 - 2ab \cos (\angle EPO + \angle FPO)$

Substituting for $a$ and $b$, and applying the Cosine of Sum formula:

$144 = (x^2 - 400) + (x^2 - 576) - 2 \sqrt{x^2 - 400} \sqrt{x^2 - 576} \left( \cos \angle EPO \cos \angle FPO - \sin \angle EPO \sin \angle FPO \right)$

$\angle EPO$ and $\angle FPO$ are acute angles in right triangles, so substitute opposite/hypotenuse for sines and adjacent/hypotenuse for cosines:

$144 = 2x^2 - 976 - 2 \sqrt{(x^2 - 400)(x^2 - 576)} \left(\frac{\sqrt{x^2 - 400}}{x} \frac{\sqrt{x^2 - 576}}{x} - \frac{20}{x} \frac{24}{x} \right)$

Combine terms and multiply both sides by $x^2$: $144 x^2 = 2 x^4 - 976 x^2 - 2 (x^2 - 400) (x^2 - 576) + 960 \sqrt{(x^2 - 400)(x^2 - 576)}$

Combine terms again, and divide both sides by 64: $13 x^2 = 7200 - 15 \sqrt{x^4 - 976 x^2 + 230400}$

Square both sides: $169 x^4 - 187000 x^2 + 51,840,000 = 225 x^4 - 219600 x^2 + 51,840,000$

This reduces to $x^2 = \frac{4050}{7} = (OP)^2$; $4050 + 7 \equiv \boxed{057} \mod{1000}$.
Solution 2

We begin as in the first solution. Once we see that $\triangle EOF$ has side lengths 12,20, and 24, we can compute its area with Heron's formula:

$K = \sqrt{s(s-a)(s-b)(s-c)} = \sqrt{28\cdot 16\cdot 8\cdot 4} = 32\sqrt{14}$.

So its circumradius is $R = \frac{abc}{4K} = \frac{45}{\sqrt{14}}$. Since $EPFO$ is cyclic with diameter $OP$, we have $OP = 2R = \frac{90}{\sqrt{14}}$, so $OP^2 = \frac{4050}{7}$ and the answer is $\boxed{057}$.



2011 AIME II Problem 11
Problem

Let $M_n$ be the $n \times n$ matrix with entries as follows: for $1 \le i \le n$, $m_{i,i} = 10$; for $1 \le i \le n - 1$, $m_{i+1,i} = m_{i,i+1} = 3$; all other entries in $M_n$ are zero. Let $D_n$ be the determinant of matrix $M_n$. Then $\sum_{n=1}^{\infty} \frac{1}{8D_n+1}$ can be represented as $\frac{p}{q}$, where $p$ and $q$ are relatively prime positive integers. Find $p + q$.

Note: The determinant of the $1 \times 1$ matrix $[a]$ is $a$, and the determinant of the $2 \times 2$ matrix $\left[ {$\begin{array}{cc} a & b \\ c & d \\ \end{array}$ } \right] = ad - bc$; for $n \ge 2$, the determinant of an $n \times n$ matrix with first row or first column $a_1$ $a_2$ $a_3$ $\dots$ $a_n$ is equal to $a_1C_1 - a_2C_2 + a_3C_3 - \dots + (-1)^{n+1}a_nC_n$, where $C_i$ is the determinant of the $(n - 1) \times (n - 1)$ matrix formed by eliminating the row and column containing $a_i$.
Solution

$D_{1}=\begin{vmatrix} 10 \end{vmatrix} = 10, \quad D_{2}=\begin{vmatrix} 10 & 3 \\ 3 & 10 \\ \end{vmatrix} =(10)(10) - (3)(3) = 91, \quad D_{3}=\begin{vmatrix} 10 & 3 & 0 \\ 3 & 10 & 3 \\ 0 & 3 & 10 \\ \end{vmatrix}$. 

Using the expansionary/recursive definition of determinants (also stated in the problem):

$D_{3}=\left| {\begin{array}{ccc} 10 & 3 & 0 \\ 3 & 10 & 3 \\ 0 & 3 & 10 \\ \end{array} } \right|=10\left| {\begin{array}{cc} 10 & 3 \\ 3 & 10 \\ \end{array} } \right| - 3\left| {\begin{array}{cc} 3 & 3 \\ 0 & 10 \\ \end{array} } \right| + 0\left| {\begin{array}{cc} 3 & 10 \\ 0 & 3 \\ \end{array} } \right| = 10D_{2} - 9D_{1} = 820$

This pattern repeats because the first element in the first row of $M_{n}$ is always 10, the second element is always 3, and the rest are always 0. The ten element directly expands to $10D_{n-1}$. The three element expands to 3 times the determinant of the the matrix formed from omitting the second column and first row from the original matrix. Call this matrix $X_{n}$. $X_{n}$ has a first column entirely of zeros except for the first element, which is a three. A property of matrices is that the determinant can be expanded over the rows instead of the columns (still using the recursive definition as given in the problem), and the determinant found will still be the same. Thus, expanding over this first column yields $3D_{n-2} + 0(other things)=3D_{n-2}$. Thus, the $3 det(X_{n})$ expression turns into $9D_{n-2}$. Thus, the equation $D_{n}=10D_{n-1}-9D_{n-2}$ holds for all n > 2.

This equation can be rewritten as $D_{n}=10(D_{n-1}-D_{n-2}) + D_{n-2}$. This version of the equation involves the difference of successive terms of a recursive sequence. Calculating $D_{0}$ backwards from the recursive formula and $D_{4}$ from the formula yields $D_{0}=1, D_{4}=7381$. Examining the differences between successive terms, a pattern emerges. $D_{0}=1=9^{0}$, $D_{1}-D_{0}=10-1=9=9^{1}$, $D_{2}-D_{1}=91-10=81=9^{2}$, $D_{3}-D_{2}=820-91=729=9^{3}$, $D_{4}-D_{3}=7381-820=6561=9^{4}$. Thus, $D_{n}=D_{0} + 9^{1}+9^{2}+ . . . +9^{n}=\sum_{i=0}^{n}9^{i}=\frac{(1)(9^{n+1}-1)}{9-1}=\frac{9^{n+1}-1}{8}$.

Thus, the desired sum is $\sum_{n=1}^{\infty}\frac{1}{8\frac{9^{n+1}-1}{8}+1}=\sum_{n=1}^{\infty}\frac{1}{9^{n+1}-1+1} = \sum_{n=1}^{\infty}\frac{1}{9^{n+1}}$

This is an infinite geometric series with first term $\frac{1}{81}$ and common ratio $\frac{1}{9}$. Thus, the sum is $\frac{\frac{1}{81}}{1-\frac{1}{9}}=\frac{\frac{1}{81}}{\frac{8}{9}}=\frac{9}{(81)(8)}=\frac{1}{(9)(8)}=\frac{1}{72}$.

Thus, $p + q = 1 + 72 = \boxed{073}$.



2011 AIME II Problem 12
Problem 12

Nine delegates, three each from three different countries, randomly select chairs at a round table that seats nine people. Let the probability that each delegate sits next to at least one delegate from another country be $\frac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m + n$.
Solution

Use complementary probability and Principle of Inclusion-Exclusion. If we consider the delegates from each country to be indistinguishable and number the chairs, we have $\frac{9!}{(3!)^3} = \frac{9\cdot8\cdot7\cdot6\cdot5\cdot4}{6\cdot6} = 6\cdot8\cdot7\cdot5 = 30\cdot56$ total ways to seat the candidates.

Of these, there are $3 \times 9 \times \frac{6!}{(3!)^2}$ ways to have the candidates of at least some one country sit together. This comes to $\frac{27\cdot6\cdot5\cdot4}6 = 27\cdot 20.$

Among these there are $3 \times 9 \times 4$ ways for candidates from two countries to each sit together. This comes to $27\cdot 4.$

Finally, there are $9 \times 2 = 18.$ ways for the candidates from all the countries to sit in three blocks (9 clockwise arrangements, and 9 counter-clockwise arrangements).

So, by PIE, the total count of unwanted arrangements is $27\cdot 20 - 27\cdot 4 + 18 = 16\cdot27 + 18 = 18\cdot25.$ So the fraction $\frac mn = \frac{30\cdot 56 - 18\cdot 25}{30\cdot 56} = \frac{56 - 15}{56} = \frac{41}{56}.$ Thus $m + n = 56 + 41 = \fbox{097}.$



2011 AIME II Problem 13

Problem

Point $P$ lies on the diagonal $AC$ of square $ABCD$ with $AP > CP$. Let $O_{1}$ and $O_{2}$ be the circumcenters of triangles $ABP$ and $CDP$ respectively. Given that $AB = 12$ and $\angle O_{1}PO_{2} = 120^{\circ}$, then $AP = \sqrt{a} + \sqrt{b}$, where $a$ and $b$ are positive integers. Find $a + b$.
Solution 1

<geogebra>7b0d7e3170597705121a87857a112a90dff8cac9</geogebra>

Denote the midpoint of $\overline{DC}$ be $E$ and the midpoint of $\overline{AB}$ be $F$. Because they are the circumcenters, both Os lie on the perpendicular bisectors of $AB$ and $CD$ and these bisectors go through $E$ and $F$.

It is given that $\angle O_{1}PO_{2}=120^{\circ}$. Because $O_{1}P$ and $O_{1}B$ are radii of the same circle, the have the same length. This is also true of $O_{2}P$ and $O_{2}D$. Because $m\angle CAB=m\angle ACD=45^{\circ}$, $m\stackrel{\frown}{PD}=m\stackrel{\frown}{PB}=2(45^{\circ})=90^{\circ}$. Thus, $O_{1}PB$ and $O_{2}PD$ are isosceles right triangles. Using the given information above and symmetry, $m\angle DPB = 120^{\circ}$. Because ABP and ADP share one side, have one side with the same length, and one equal angle, they are congruent by SAS. This is also true for triangle CPB and CPD. Because angles APB and APD are equal and they sum to 120 degrees, they are each 60 degrees. Likewise, both angles CPB and CPD have measures of 120 degrees.

Because the interior angles of a triangle add to 180 degrees, angle ABP has measure 75 degrees and angle PDC has measure 15 degrees. Subtracting, it is found that both angles $O_{1}BF$ and $O_{2}DE$ have measures of 30 degrees. Thus, both triangles $O_{1}BF$ and $O_{2}DE$ are 30-60-90 right triangles. Because F and E are the midpoints of AB and CD respectively, both FB and DE have lengths of 6. Thus, $DO_{2}=BO_{1}=4\sqrt{3}$. Because of 45-45-90 right triangles, $PB=PD=4\sqrt{6}$.

Now, using Law of Cosines on $\triangle ABP$ and letting $x = AP$,

$96=144+x^{2}-24x\frac{\sqrt{2}}{2}$

$96=144+x^{2}-12x\sqrt{2}$

$0=x^{2}-12x\sqrt{2}+48$

Using quadratic formula,

$x = \frac{12 \sqrt{2} \pm \sqrt{288-(4)(48)}}{2}$

$x = \frac{12 \sqrt{2} \pm \sqrt{288-192}}{2}$

$x = \frac{12 \sqrt{2} \pm \sqrt{96}}{2}$

$x = \frac{2 \sqrt{72} \pm 2 \sqrt{24}}{2}$

$x = \sqrt{72} \pm \sqrt{24}$


Because it is given that $AP > CP$, $AP>6\sqrt{2}$, so the minus version of the above equation is too small. Thus, $AP=\sqrt{72}+ \sqrt{24}$ and a + b = 24 + 72 = $\boxed{096.}$
Solution 2

This takes a slightly different route than Solution 1.

Solution 1 proves that $\angle{DPB}=120^{\circ}$ and that $\overline{BP} = \overline{DP}$. Construct diagonal $\overline{BD}$ and using the two statements above it quickly becomes clear that $\angle{BDP} = \angle{DBP} = 30^{\circ}$ by isosceles triangle base angles. Let the midpoint of diagonal $\overline{AC}$ be $M$, and since the diagonals are perpendicular, both triangle $DMP$ and triangle $BMP$ are 30-60-90 right triangles. Since $\overline{AB} = 12$, $\overline{AC} = \overline{BD} = 12\sqrt{2}$ and $\overline{BM} = \overline{DM} = 6\sqrt{2}$. 30-60-90 triangles' sides are in the ratio $1 : \sqrt{3} : 2$, so $\overline{MP} = \frac{6\sqrt{2}}{\sqrt{3}} = 2\sqrt {6}$. $\overline{AP} = \overline{MP} + \overline{BM} = 6\sqrt{2} + 2\sqrt{6} = \sqrt{72} + \sqrt{24}$. Hence, $72 + 24 = \boxed{096}$.
Solution 3

Use vectors. In an $xy$ plane, let $(-s,0)$ be $A$, $(0,s)$ be $B$, $(s,0)$ be $C$, $(0,-s)$ be $D$, and $(p,0)$ be P, where $s=|AB|/\sqrt{2}=6\sqrt{2}$. It remains to find $p$.

The line $y=-x$ is the perpendicular bisector of $AB$ and $CD$, so $O_1$ and $O_2$ lies on the line. Now compute the perpendicular bisector of $AP$. The center has coordinate $(\frac{p-s}{2},0)$, and the segment is part of the $x$-axis, so the perpendicular bisector has equation $x=\frac{p-s}{2}$. Since $O_1$ is the circumcenter of triangle $ABP$, it lies on the perpendicular bisector of both $AB$ and $AP$, so $O_1=(\frac{p-s}{2},-\frac{p-s}{2})$ Similarly, $O_2=(\frac{p+s}{2},-\frac{p+s}{2})$ The relation $\angle O_1PO_2=120^\circ$ can now be written using dot product as $\vec{PO_1}\cdot\vec{PO_2}=|\vec{PO_1}|\cdot|\vec{PO_2}|\cos 120^\circ=-\frac{1}{2}|\vec{PO_1}|\cdot|\vec{PO_2}|$ Computation of both sides yields $\frac{p^2-s^2}{p^2+s^2}=-\frac{1}{2}$ Solve for $p$ gives $p=s/\sqrt{3}=2\sqrt{6}$, so $AP=s+p=6\sqrt{2}+2\sqrt{6}=\sqrt{72}+\sqrt{24}$. The answer is 72+24$\Rightarrow\boxed{096}$
Solution 4

Translate $\triangle{ABP}$ so that the image of $AB$ coincides $DC$. Let the image of $P$ be $P’$.

$\angle{DPC}=\angle{CPB}$ by symmetry, and $\angle{APB}=\angle{DP’C}$ because translation preserves angles. Thus $\angle{DP’C}+\angle{CPD}=\angle{CPB}+\angle{APB}=180^\circ$. Therefore, quadrilateral $CPDP’$ is cyclic. Thus the image of $O_1$ coincides with $O_2$.

$O_1P$ is parallel to $O_2P’$ so $\angle{P’O_2P}=\angle{O_1PO_2}=120^\circ$, so $\angle{PDP’}=60^\circ$ and $\angle{PDC}=15^\circ$, thus $\angle{ADP}=75^{\circ}$.

Let $M$ be the foot of the perpendicular from $D$ to $AC$. Then $\triangle{AMD}$ is a 45-45-90 triangle and $\triangle{DMP}$ is a 30-60-90 triangle. Thus

$AM=6\sqrt{2}$ and $MP=\frac{6\sqrt{2}}{\sqrt{3}}$.

This gives us $AP=AM+MP=\sqrt{72}+\sqrt{24}$, and the answer is $72+24=\boxed{96}.$
Solution 5

Reflect $O_1$ across $AP$ to $O_1'$. By symmetry $O_1’$ is the circumcenter of $\triangle{ADP}$

$\angle{DO_1’P}$ = $2*\angle{DAP} = 90^\circ$, so $\angle{O_1’PD}=45^\circ$

similarly $\angle{DO_2P}$ = $2*\angle{DCP} = 90^\circ$, so $\angle{O_2PD}=45^\circ$

Thus, $\angle{O_1’PO_2}=90^\circ$, so that $\angle{O_1’PO_1} =120^\circ - 90^\circ = 30^\circ$

By symmetry, $\angle{O_1'PA} = \angle{APO_1} = 0.5*\angle{O_1’PO_1} = 15^\circ$

Therefore, since $O_1’$ is the circumcenter of $\triangle{ADP}$, $\angle{ADP}$ = $0.5*(180^\circ - 2*\angle{O_1'PA}) = 75^\circ$

Therefore $\angle{APD} = 180^\circ - 45^\circ - 75^\circ = 60^\circ$

Using sine rule in $\triangle{ADP}$, $AP = (12 * \sin 75^\circ) / \sin 60^\circ =\sqrt{72}+\sqrt{24}$, and the answer is $72+24=\boxed{96}.$

By Kris17



2011 AIME II Problem 14
Problem 14

There are $N$ permutations $(a_{1}, a_{2}, ... , a_{30})$ of $1, 2, \ldots, 30$ such that for $m \in \left\{{2, 3, 5}\right\}$, $m$ divides $a_{n+m} - a_{n}$ for all integers $n$ with $1 \leq n < n+m \leq 30$. Find the remainder when $N$ is divided by $1000$.

Solutions
Solution 1

Each position in the 30-position permutation is uniquely defined by an ordered triple $(i, j, k)$. The $n$th position is defined by this ordered triple where $i$ is $n \mod 2$, $j$ is $n \mod 3$, and $k$ is $n \mod 5$. There are 2 choices for $i$, 3 for $j$, and 5 for $k$, yielding $2 \cdot 3 \cdot 5=30$ possible triples. Because the least common multiple of 2, 3, and 5 is 30, none of these triples are repeated and all are used. By the conditions of the problem, if i is the same in two different triples, then the two numbers in these positions must be equivalent mod 2. If j is the same, then the two numbers must be equivalent mod 3, and if $k$ is the same, the two numbers must be equivalent mod 5.

The ordered triple (or position) in which the number one can be placed has 2 options for i, 3 for j, and 5 for k, resulting in 30 different positions it can be placed.

The ordered triple where 2 can be placed in is somewhat constrained by the placement of the number 1. Because 1 is not equivalent to 2 mod 2, 3, or 5, the i, j, and k in their ordered triples must be different. Thus, for the number 2, there are (2-1) choices for i, (3-1) choices for j, and (5-1) choices for k. Thus, there are 1*2*4=8 possible placements for the number two once the number one is placed.

Because 3 is equivalent to 1 mod 2, it must have the same i as the ordered triple of 1. Because 3 is not equivalent to 1 or 2 mod 3 or 5, it must have different j and k values. Thus, there is 1 choice for i, (2-1) choices for j, and (4-1) choices for k, for a total of $1\cdot 1 \cdot 3=3$ choices for the placement of 3.

As above, 4 is even, so it must have the same value of i as 2. It is also 1 mod 3, so it must have the same j value of 1. 4 is not equivalent to 1, 2, or 3 mod 5, so it must have a different k value than that of 1, 2, and 3. Thus, there is 1 choice for i, 1 choice for j, and (3-1) choices for k, yielding a total of $1 \cdot 1 \cdot 2=2$ possible placements for 4.

5 is odd and is equivalent to 2 mod 3, so it must have the same i value as 1 and the same j value of 2. 5 is not equivalent to 1, 2, 3, or 4 mod 5, so it must have a different k value from 1, 2, 3, and 4. However, 4 different values of k are held by these four numbers, so 5 must hold the one remaining value. Thus, only one possible triple is found for the placement of 5.

All numbers from 6 to 30 are also fixed in this manner. All values of i, j, and k have been used, so every one of these numbers will have a unique triple for placement, as above with the number five. Thus, after 1, 2, 3, and 4 have been placed, the rest of the permutation is fixed.

Thus, $N = 30 \cdot 8 \cdot 3 \cdot 2=30 \cdot 48=1440$. Thus, the remainder when $N$ is divided by $1000$ is $\boxed{440}.$
Solution 2

We observe that the condition on the permutations means that two numbers with indices congruent $\mod m$ are themselves congruent $\mod m$ for $m \in \{ 2,3,5\}.$ Furthermore, suppose that $a_n \equiv k \mod m.$ Then, there are $30/m$ indices congruent to $n \mod m,$ and $30/m$ numbers congruent to $k \mod m,$ because 2, 3, and 5 are all factors of 30. Therefore, since every index congruent to $n$ must contain a number congruent to $k,$ and no number can appear twice in the permutation, only the indices congruent to $n$ contain numbers congruent to $k.$ In other words, $a_i \equiv a_j \mod m \iff i \equiv j \mod m.$ But it is not necessary that $\textcolor{red}{(a_i\equiv i)\cup (a_j\equiv j)\mod m}$. In fact, if that were the case, there would only be one way to assign the indices, since $2,3,5$ are relatively prime to each other and $30=\text{lcm}(2,3,5)$: $\{a_1,a_2,\dots a_{30}\}\in\{1,2,\dots 30\}\text{ }respectively$.

This tells us that in a valid permutation, the congruence classes $\mod m$ are simply swapped around, and if the set $S$ is a congruence class $\mod m$ for $m =$ 2, 3, or 5, the set $\{ a_i \vert i \in S \}$ is still a congruence class $\mod m.$ Clearly, each valid permutation of the numbers 1 through 30 corresponds to exactly one permutation of the congruence classes modulo 2, 3, and 5. Also, if we choose some permutations of the congruence classes modulo 2, 3, and 5, they correspond to exactly one valid permutation of the numbers 1 through 30. This can be shown as follows: First of all, the choice of permutations of the congruence classes gives us every number in the permutation modulo 2, 3, and 5, so by the Chinese Remainder Theorem, it gives us every number $\mod 2\cdot 3\cdot 5 = 30.$ Because the numbers must be between 1 and 30 inclusive, it thus uniquely determines what number goes in each index. Furthermore, two different indices cannot contain the same number. We will prove this by contradiction, calling the indices $a_i$ and $a_j$ for $i \neq j.$ If $a_i=a_j,$ then they must have the same residues modulo 2, 3, and 5, and so $i \equiv j$ modulo 2, 3, and 5. Again using the Chinese Remainder Theorem, we conclude that $i \equiv j \mod 30,$ so because $i$ and $j$ are both between 1 and 30 inclusive, $i = j,$ giving us a contradiction. Therefore, every choice of permutations of the congruence classes modulo 2, 3, and 5 corresponds to exactly one valid permutation of the numbers 1 through 30.

In other words, each set of assignment from $a_j\rightarrow j\mod (2,3,5)$ determines a unique string of $30$ numbers. For example:

$\left[(0,1)\rightarrow (1,0)\right]\cap\left[(0,1,2)\rightarrow (0,2,1)\right]\cap\left[(0,1,2,3,4)\rightarrow (4,2,3,0,1)\right]$: $$\begin{array}{|c||c|c|c|c|c|c|c|c|c|c|c|c|c|c|c|c|c|c|c|c|c|c|c|c|c|c|c|c|c|c|} \hline 2&1&0&1&0&1&0&1&0&1&0&1&0&1&0&1&0&1&0&1&0&1&0&1&0&1&0&1&0&1&0\\ \hline 3&0&2&1&0&2&1&0&2&1&0&2&1&0&2&1&0&2&1&0&2&1&0&2&1&0&2&1&0&2&1\\ \hline 5&4&2&3&0&1&4&2&3&0&1&4&2&3&0&1&4&2&3&0&1&4&2&3&0&1&4&2&3&0&1\\ \hline\hline 30&9&2&13&0&11&4&27&8&25&6&29&22&3&20&1&24&17&28&15&26&19&12&23&10&21&14&7&18&5&16\\ \hline \end{array}$$

We have now established a bijection between valid permutations of the numbers 1 through 30 and permutations of the congruence classes modulo 2, 3, and 5, so $N$ is equal to the number of permutations of congruence classes. There are always $m$ congruence classes $\mod m,$ so $N = 2! \cdot 3! \cdot 5! = 2 \cdot 6 \cdot 120 = 1440 \equiv \boxed{440} \mod 1000.$



2011 AIME II Problem 15
Problem

Let $P(x) = x^2 - 3x - 9$. A real number $x$ is chosen at random from the interval $5 \le x \le 15$. The probability that $\lfloor\sqrt{P(x)}\rfloor = \sqrt{P(\lfloor x \rfloor)}$ is equal to $\frac{\sqrt{a} + \sqrt{b} + \sqrt{c} - d}{e}$ , where $a$, $b$, $c$, $d$, and $e$ are positive integers. Find $a + b + c + d + e$.
Solution

Table of values of $P(x)$:

$\begin{align*} P(5) &= 1 \\ P(6) &= 9 \\ P(7) &= 19 \\ P(8) &= 31 \\ P(9) &= 45 \\ P(10) &= 61 \\ P(11) &= 79 \\ P(12) &= 99 \\ P(13) &= 121 \\ P(14) &= 145 \\ P(15) &= 171 \\ \end{align*}$

In order for $\lfloor \sqrt{P(x)} \rfloor = \sqrt{P(\lfloor x \rfloor)}$ to hold, $\sqrt{P(\lfloor x \rfloor)}$ must be an integer and hence $P(\lfloor x \rfloor)$ must be a perfect square. This limits $x$ to $5 \le x < 6$ or $6 \le x < 7$ or $13 \le x < 14$ since, from the table above, those are the only values of $x$ for which $P(\lfloor x \rfloor)$ is an perfect square. However, in order for $\sqrt{P(x)}$ to be rounded down to $P(\lfloor x \rfloor)$, $P(x)$ must be less than the next perfect square after $P(\lfloor x \rfloor)$ (for the said intervals). Now, we consider the three cases:


Case $5 \le x < 6$:

$P(x)$ must be less than the first perfect square after $1$, which is $4$, i.e.:

$1 \le P(x) < 4$ (because $\lfloor \sqrt{P(x)} \rfloor = 1$ implies $1 \le \sqrt{P(x)} < 2$)

Since $P(x)$ is increasing for $x \ge 5$, we just need to find the value $v \ge 5$ where $P(v) = 4$, which will give us the working range $5 \le x < v$.

$\begin{align*} v^2 - 3v - 9 &= 4 \\ v &= \frac{3 + \sqrt{61}}{2} \end{align*}$

So in this case, the only values that will work are $5 \le x < \frac{3 + \sqrt{61}}{2}$.

Case $6 \le x < 7$:

$P(x)$ must be less than the first perfect square after $9$, which is $16$.

$\begin{align*} v^2 - 3v - 9 &= 16 \\ v &= \frac{3 + \sqrt{109}}{2} \end{align*}$

So in this case, the only values that will work are $6 \le x < \frac{3 + \sqrt{109}}{2}$.

Case $13 \le x < 14$:

$P(x)$ must be less than the first perfect square after $121$, which is $144$.

$\begin{align*} v^2 - 3v - 9 &= 144 \\ v &= \frac{3 + \sqrt{621}}{2} \end{align*}​$

So in this case, the only values that will work are $13 \le x < \frac{3 + \sqrt{621}}{2}$.

Now, we find the length of the working intervals and divide it by the length of the total interval, $15 - 5 = 10$:

$\begin{align*} \frac{\left( \frac{3 + \sqrt{61}}{2} - 5 \right) + \left( \frac{3 + \sqrt{109}}{2} - 6 \right) + \left( \frac{3 + \sqrt{621}}{2} - 13 \right)}{10} \\ &= \frac{\sqrt{61} + \sqrt{109} + \sqrt{621} - 39}{20} \end{align*}$

Thus, the answer is $61 + 109 + 621 + 39 + 20 = \fbox{850}$.


2011 AIME II Answer Key
1.	037
    2.810
    3.143
    4.051
    5.542
    6.080
    7.003
    8.784
    9.559
    10.057
    11.073
    12.097
    13.096
    14.440
    15.850
