# 2012 AIME I

2012 AIME I Problem 1

Problem 1

Find the number of positive integers with three not necessarily distinct digits, $abc$, with $a \neq 0$ and $c \neq 0$ such that both $abc$ and $cba$ are multiples of $4$.
Solutions
Solution 1

A positive integer is divisible by $4$ if and only if its last two digits are divisible by $4.$ For any value of $b$, there are two possible values for $a$ and $c$, since we find that if $b$ is even, $a$ and $c$ must be either $4$ or $8$, and if $b$ is odd, $a$ and $c$ must be either $2$ or $6$. There are thus $2 \cdot 2 = 4$ ways to choose $a$ and $c$ for each $b,$ and $10$ ways to choose $b$ since $b$ can be any digit. The final answer is then $4 \cdot 10 = \boxed{040}$.
Solution 2

A number is divisible by four if its last two digits are divisible by 4. Thus, we require that $10b + a$ and $10b + c$ are both divisible by $4$. If $b$ is odd, then $a$ and $c$ must both be $2 \mod 4$ meaning that $a$ and $c$ are $2$ or $6$. If $b$ is even, then $a$ and $c$ must be $0 \mod 4$ meaning that $a$ and $c$ are $4$ or $8$. For each choice of $b$ there are $2$ choices for $a$ and $2$ for $c$ for a total of $10 \cdot 2 \cdot 2 = \boxed{040}$ numbers.



2012 AIME I Problem 2

Problem 2

The terms of an arithmetic sequence add to $715$. The first term of the sequence is increased by $1$, the second term is increased by $3$, the third term is increased by $5$, and in general, the $k$th term is increased by the $k$th odd positive integer. The terms of the new sequence add to $836$. Find the sum of the first, last, and middle terms of the original sequence.
Solutions
Solution 1

If the sum of the original sequence is $\sum_{i=1}^{n} a_i$ then the sum of the new sequence can be expressed as $\sum_{i=1}^{n} a_i + (2i - 1) = n^2 + \sum_{i=1}^{n} a_i.$ Therefore, $836 = n^2 + 715 \rightarrow n=11.$ Now the middle term of the original sequence is simply the average of all the terms, or $\frac{715}{11} = 65,$ and the first and last terms average to this middle term, so the desired sum is simply three times the middle term, or $\boxed{195.}$
Solution 2

After the adding of the odd numbers, the total of the sequence increases by $836 - 715 = 121 = 11^2$. Since the sum of the first $n$ positive odd numbers is $n^2$, there must be $11$ terms in the sequence, so the mean of the sequence is $\frac{715}{11} = 65$. Since the first, last, and middle terms are centered around the mean, our final answer is $65 \cdot 3 = \boxed{195}$



2012 AIME I Problem 3
Problem 3

Nine people sit down for dinner where there are three choices of meals. Three people order the beef meal, three order the chicken meal, and three order the fish meal. The waiter serves the nine meals in random order. Find the number of ways in which the waiter could serve the meal types to the nine people so that exactly one person receives the type of meal ordered by that person.
Solution

Call a beef meal $B,$ a chicken meal $C,$ and a fish meal $F.$ Now say the nine people order meals $\text{BBBCCCFFF}$ respectively and say that the person who receives the correct meal is the first person. We will solve for this case and then multiply by $9$ to account for the $9$ different ways in which the person to receive the correct meal could be picked. Note, this implies that the dishes are indistinguishable, though the people aren't. For example, two people who order chicken are separate, though if they receive fish, there is only 1 way to order them.

The problem we must solve is to distribute meals $\text{BBCCCFFF}$ to orders $\text{BBCCCFFF}$ with no matches. The two people who ordered $B$'s can either both get $C$'s, both get $F$'s, or get one $C$ and one $F.$ We proceed with casework.

If the two $B$ people both get $C$'s, then the three $F$ meals left to distribute must all go to the $C$ people. The $F$ people then get $BBC$ in some order, which gives three possibilities. The indistinguishability is easier to see here, as we distribute the $F$ meals to the $C$ people, and there is only 1 way to order this, as all three meals are the same.

If the two $B$ people both get $F$'s, the situation is identical to the above and three possibilities arise.

If the two $B$ people get $CF$ in some order, then the $C$ people must get $FFB$ and the $F$ people must get $CCB.$ This gives $2 \cdot 3 \cdot 3 = 18$ possibilities.

Summing across the cases we see there are $24$ possibilities, so the answer is $9 \cdot 24 = \boxed{216.}$




2012 AIME I Problem 4
Problem 4

Butch and Sundance need to get out of Dodge. To travel as quickly as possible, each alternates walking and riding their only horse, Sparky, as follows. Butch begins by walking while Sundance rides. When Sundance reaches the first of the hitching posts that are conveniently located at one-mile intervals along their route, he ties Sparky to the post and begins walking. When Butch reaches Sparky, he rides until he passes Sundance, then leaves Sparky at the next hitching post and resumes walking, and they continue in this manner. Sparky, Butch, and Sundance walk at $6,$ $4,$ and $2.5$ miles per hour, respectively. The first time Butch and Sundance meet at a milepost, they are $n$ miles from Dodge, and they have been traveling for $t$ minutes. Find $n + t$.
Solution

When they meet at the milepost, Sparky has been ridden for $n$ miles total. Assume Butch rides Sparky for $a$ miles, and Sundance rides for $n-a$ miles. Thus, we can set up an equation, given that Sparky takes $\frac{1}{6}$ hours per mile, Butch takes $\frac{1}{4}$ hours per mile, and Sundance takes $\frac{2}{5}$ hours per mile:

$\frac{a}{6} + \frac{n-a}{4} = \frac{n-a}{6} + \frac{2a}{5} \rightarrow a = \frac{5}{19}n.$

The smallest possible integral value of $n$ is $19$, so we plug in $n = 19$ and $a = 5$ and get $t = \frac{13}{3}$ hours, or $260$ minutes. So our answer is $19 + 260 = \boxed{279.}$



2012 AIME I Problem 5
Problem 5

Let $B$ be the set of all binary integers that can be written using exactly $5$ zeros and $8$ ones where leading zeros are allowed. If all possible subtractions are performed in which one element of $B$ is subtracted from another, find the number of times the answer $1$ is obtained.
Solution

When $1$ is subtracted from a binary number, the number of digits will remain constant if and only if the original number ended in $10.$ Therefore, every subtraction involving two numbers from $B$ will necessarily involve exactly one number ending in $10.$ To solve the problem, then, we can simply count the instances of such numbers. With the $10$ in place, the seven remaining $1$'s can be distributed in any of the remaining $11$ spaces, so the answer is ${11 \choose 7} = \boxed{330}$.



2012 AIME I Problem 6
Problem 6

The complex numbers $z$ and $w$ satisfy $z^{13} = w,$ $w^{11} = z,$ and the imaginary part of $z$ is $\sin{\frac{m\pi}{n}}$, for relatively prime positive integers $m$ and $n$ with $m<n.$ Find $n.$
Solution

Substituting the first equation into the second, we find that $(z^{13})^{11} = z$ and thus $z^{143} = z.$ We know that $z \neq 0,$ because we are given the imaginary part of $z,$ so we can divide by $z$ to get $z^{142} = 1.$ So, $z$ must be a $142$nd root of unity, and thus the imaginary part of $z$ will be of the form $\sin{\frac{2k\pi}{142}} = \sin{\frac{k\pi}{71}},$ where $k \in \{1, 2, \ldots, 70\}.$ Note that $71$ is prime and $k<71$ by the conditions of the problem, so the denominator in the argument of this value will always be $71.$ Thus, $n = \boxed{071.}$



2012 AIME I Problem 7

Problem 7

At each of the sixteen circles in the network below stands a student. A total of $3360$ coins are distributed among the sixteen students. All at once, all students give away all their coins by passing an equal number of coins to each of their neighbors in the network. After the trade, all students have the same number of coins as they started with. Find the number of coins the student standing at the center circle had originally.

<div align="center"><img src="http://latex.artofproblemsolving.com/3/3/a/33abde80848746d240bfc392b8997b80cf3bccd5.png" height="150px" /></div>

Solutions
Solution 1

Say the student in the center starts out with $a$ coins, the students neighboring the center student each start with $b$ coins, and all other students start out with $c$ coins. Then the $a$-coin student has five neighbors, all the $b$-coin students have three neighbors, and all the $c$-coin students have four neighbors.

Now in order for each student's number of coins to remain equal after the trade, the number of coins given by each student must be equal to the number received, and thus

$\begin{align*} a &= 5 \cdot \frac{b}{3}\\ b &= \frac{a}{5} + 2 \cdot \frac{c}{4}\\ c &= 2 \cdot \frac{c}{4} + 2 \cdot \frac{b}{3}. \end{align*}$

Solving these equations, we see that $\frac{a}{5} = \frac{b}{3} = \frac{c}{4}.$ Also, the total number of coins is $a + 5b + 10c = 3360,$ so $a + 5 \cdot \frac{3a}{5} + 10 \cdot \frac{4a}{5} = 3360 \rightarrow a = \frac{3360}{12} = \boxed{280}.$
Solution 2

Since the students give the same number of gifts of coins as they receive and still end up the same number of coins, we can assume that every gift of coins has the same number of coins. Let $x$ be the number of coins in each gift of coins. There $10$ people who give $4$ gifts of coins, $5$ people who give $3$ gifts of coins, and $1$ person who gives $5$ gifts of coins. Thus,

$\begin{align*} 10(4x)+5(3x)+5x &= 3360\\ 40x+15x+5x &= 3360\\ 60x &= 3360\\ x &= 56 \end{align*}$

Therefore the answer is $5(56) = \boxed{280}.$



2012 AIME I Problem 8

Problem 8

Cube $ABCDEFGH,$ labeled as shown below, has edge length $1$ and is cut by a plane passing through vertex $D$ and the midpoints $M$ and $N$ of $\overline{AB}$ and $\overline{CG}$ respectively. The plane divides the cube into two solids. The volume of the larger of the two solids can be written in the form $\tfrac{p}{q},$ where $p$ and $q$ are relatively prime positive integers. Find $p+q.$

<div align="center"><img src="http://latex.artofproblemsolving.com/a/f/1/af154db9d25256bd90239e9f4e37253b234659e0.png" height="150px" /></div>

Solution: think outside the box

Define a coordinate system with $D$ at the origin and $C,$ $A,$ and $H$ on the $x$, $y$, and $z$ axes respectively. The $D=(0,0,0),$ $M=(.5,1,0),$ and $N=(1,0,.5).$ It follows that the plane going through $D,$ $M,$ and $N$ has equation $2x-y-4z=0.$ Let $Q = (1,1,.25)$ be the intersection of this plane and edge $BF$ and let $P = (1,2,0).$ Now since $2(1) - 1(2) - 4(0) = 0,$ $P$ is on the plane. Also, $P$ lies on the extensions of segments $DM,$ $NQ,$ and $CB$ so the solid $DPCN = DMBCQN + MPBQ$ is a right triangular pyramid. Note also that pyramid $MPBQ$ is similar to $DPCN$ with scale factor $.5$ and thus the volume of solid $DMBCQN,$ which is one of the solids bounded by the cube and the plane, is $[DPCN] - [MPBQ] = [DPCN] - \left(\frac{1}{2}\right)^3[DPCN] = \frac{7}{8}[DPCN].$ But the volume of $DPCN$ is simply the volume of a pyramid with base $1$ and height $.5$ which is $\frac{1}{3} \cdot 1 \cdot .5 = \frac{1}{6}.$ So $[DMBCQN] = \frac{7}{8} \cdot \frac{1}{6} = \frac{7}{48}.$ Note, however, that this volume is less than $.5$ and thus this solid is the smaller of the two solids. The desired volume is then $[ABCDEFGH] - [DMBCQN] = 1 - \frac{7}{48} = \frac{41}{48} \rightarrow p+q = \boxed{089.}$
Solution 2

Define a coordinate system with $D = (0,0,0)$, $M = (1, \frac{1}{2}, 0)$, $N = (0,1,\frac{1}{2})$. The plane formed by $D$, $M$, and $N$ is $z = \frac{y}{2} - \frac{x}{4}$. It intersects the base of the unit cube at $y = \frac{x}{2}$. The z-coordinate of the plane never exceeds the height of the unit cube for $0 \leq x \leq 1, 0 \leq y \leq 1$. Therefore, the volume of one of the two regions formed by the plane is $\int_0^1 \int_{\frac{x}{2}}^1 \int_0^{\frac{y}{2}-\frac{x}{4}}dz\,dy\,dx = \frac{7}{48}$ Since $\frac{7}{48} < \frac{1}{2}$, our answer is $1-\frac{7}{48} = \frac{41}{48} \rightarrow p+q = \boxed{089}$.
Alternative Solution (using calculus) : think inside the box

Let $Q$ be the intersection of the plane with edge $FB,$ then $\triangle MQB$ is similar to $\triangle DNC$ and the volume $[DNCMQB]$ is a sum of areas of cross sections of similar triangles running parallel to face $ABFE.$ Let $x$ be the distance from face $ABFE,$ let $h$ be the height parallel to $AB$ of the cross-sectional triangle at that distance, and $a$ be the area of the cross-sectional triangle at that distance. $A(x)=\frac{h^2}{4},$ and $h=\frac{x+1}{2},$ then $A=\frac{(x+1)^2}{16}$, and the volume $[DNCMQB]$ is $\int^1_0{A(x)}\,\mathrm{d}x=\int^1_0{\frac{(x+1)^2}{16}}\,\mathrm{d}x=\frac{7}{48}.$ Thus the volume of the larger solid is $1-\frac{7}{48}=\frac{41}{48} \rightarrow p+q = \boxed{089}$
Alternative Solution : think inside the box with formula

If you memorized the formula for a frustum, then this problem is very trivial.

The formula for a frustum is:

$\frac{h_2b_2 -h_1b_1}3$ where $b_i$ is the area of the base and $h_i$ is the height from the chopped of apex to the base.

We can easily see that from symmetry, the area of the smaller front base is $\frac{1}{16}$ and the area of the larger back base is $\frac{1}4$

Now to find the height of the apex.

Extend the $DM$ and (call the intersection of the plane with $FB$ G) $NG$ to meet at $x$. Now from similar triangles $XMG$ and $XDN$ we can easily find the total height of the triangle $XDN$ to be $2$

Now straight from our formula, the area is $\frac{7}{48}$ Thus the answer is:

$1-\text{Area} \Longrightarrow \boxed{089}$



2012 AIME I Problem 9

Problem 9

Let $x,$ $y,$ and $z$ be positive real numbers that satisfy $2\log_{x}(2y) = 2\log_{2x}(4z) = \log_{2x^4}(8yz) \ne 0.$ The value of $xy^5z$ can be expressed in the form $\frac{1}{2^{p/q}},$ where $p$ and $q$ are relatively prime positive integers. Find $p+q.$
Solution 1

Since there are only two dependent equations given and three unknowns, the three expressions given can equate to any common value, so to simplify the problem let us assume without loss of generality that $2\log_{x}(2y) = 2\log_{2x}(4z) = \log_{2x^4}(8yz) = 2.$ Then 

$\begin{align*} 2\log_{x}(2y) = 2 &\implies x=2y\\ 2\log_{2x}(4z) = 2 &\implies 2x=4z\\ \log_{2x^4}(8yz) = 2 &\implies 4x^8 = 8yz \end{align*}$

Solving these equations, we quickly see that $4x^8 = (2y)(4z) = x(2x) \rightarrow x=2^{-1/6}$ and then $y=z=2^{-1/6 - 1} = 2^{-7/6}.$ Finally, our desired value is $2^{-1/6} \cdot (2^{-7/6})^5 \cdot 2^{-7/6} = 2^{-43/6}$ and thus $p+q = 43 + 6 = \boxed{049.}$
Solution 2

Notice that $2y\cdot 4z=8yz$, $2\log_2(2y)=\log_2\left(4y^2\right)$ and $2\log_2(4z)=\log_2\left(16z^2\right)$.

From this, we see that $8yz$ is the geometric mean of $4y^2$ and $16z^2$. So, for constant $C\ne 0$: $\frac{\log 4y^2}{\log x}=\frac{\log 8yz}{\log 2x^4}=\frac{\log 16z^2}{\log 2x}=C$ Since $\log 4y^2,\log 8yz,\log 16z^2$ are in a geometric progression, so is $\log x,\log 2x^4,\log 2x$.

Therefore, $2x^4$ is the geometric mean of $x$ and $2x$ $2x^4=\sqrt{x\cdot 2x}\implies 4x^8=2x^2\implies 2x^6=1\implies x=2^{-1/6}$ We can plug $x$ in to any of the two equal fractions aforementioned. So, without loss of generality: $\frac{\log 4y^2}{\log x}=\frac{\log 16z^2}{\log 2x}\implies \log\left(4y^2\right)\log\left(2x\right)=\log\left(16z^2\right)\log\left(x\right)$ $\implies \log\left(4y^2\right)\cdot \frac{5}{6}\log 2=\log\left(16z^2\right)\cdot \frac{-1}{6}\log 2$ $\implies 5\log\left(4y^2\right)=-\log\left(16z^2\right)\implies 5\log\left(4y^2\right)+\log\left(16z^2\right)=0$ $\implies \left(4y^2\right)^5\cdot 16z^2=1\implies 16384y^{10}z^2=1\implies y^{10}z^2=\frac{1}{16384}\implies y^5z=\frac{1}{128}$

Thus $xy^5z=2^{-\frac{1}{6}-7}=2^{-\frac{43}{6}}$ and $43+6=\boxed{049}$.

2012 AIME I Problem 10

Problem 10

Let $\mathcal{S}$ be the set of all perfect squares whose rightmost three digits in base $10$ are $256$. Let $\mathcal{T}$ be the set of all numbers of the form $\frac{x-256}{1000}$, where $x$ is in $\mathcal{S}$. In other words, $\mathcal{T}$ is the set of numbers that result when the last three digits of each number in $\mathcal{S}$ are truncated. Find the remainder when the tenth smallest element of $\mathcal{T}$ is divided by $1000$.
Solution 1

It is apparent that for a perfect square $s^2$ to satisfy the constraints, we must have $s^2 - 256 = 1000n$ or $(s+16)(s-16) = 1000n.$ Now in order for $(s+16)(s-16)$ to be a multiple of $1000,$ at least one of $s+16$ and $s-16$ must be a multiple of $5,$ and since $s+16$ and $s-16$ are in different residue classes mod $5,$ one term must have all the factors of $5$ and thus must be a multiple of $125.$ Furthermore, each of $s+16$ and $s-16$ must have at least two factors of $2,$ since otherwise $(s+16)(s-16)$ could not possibly be divisible by $8.$ So therefore the conditions are satisfied if either $s+16$ or $s-16$ is divisible by $500,$ or equivalently if $s = 500n \pm 16.$ Counting up from $n=0$ to $n=5,$ we see that the tenth value of $s$ is $500 \cdot 5 - 16 = 2484$ and thus the corresponding element in $\mathcal{T}$ is $\frac{2484^2 - 256}{1000} = 6170 \rightarrow \boxed{170.}$
Solution 2

Notice that is $16^2=256$, $1016^2$ ends in $256$. In general, if $x^2$ ends in $256$, $(x+1000)^2=x^2+2000x+1000000$ ends in 256 because $2000x >1000$ and $2000000 > 1000$. It is clear that we want all numbers whose squares end in $256$ that are less than $1000$.

Firstly, we know the number has to end in a $4$ or a $6$. Let's look at the ones ending in $6$.

Assume that the second digit of the three digit number is $0$. We find that the last $3$ digits of $\overline{a06}^2$ is in the form $12a \cdot 100 + 3 \cdot 10 + 6$. However, the last two digits need to be a $56$. Thus, similarly trying all numbers from $0$ to $10$, we see that only 1 for the middle digit works. Carrying out the multiplication, we see that the last $3$ digits of $\overline{a06}^2$ is in the form $(12a + 2) \cdot 100 + 5 \cdot 10 + 6$. We want $(12a + 2)\mod{10}$ to be equal to $2$. Thus, we see that a is $0$ or $5$. Thus, the numbers that work in this case are $016$ and $516$.

Next, let's look at the ones ending in $4$. Carrying out a similar technique as above, we see that the last $3$ digits of $\overline{a84}^2$ is in the form $((8a+10) \cdot 100+ 5 \cdot 10 + 6$. We want $(8a + 10)\mod{10}$ to be equal to $2$. We see that only $4$ and $9$ work. Thus, we see that only $484$ and $984$ work.

We order these numbers to get $16$, $484$, $516$ $984$. We want the $10th$ number in order which is $2484^2 = 6170256$. $\boxed{170}$


2012 AIME I Problem 11
Problem 11

A frog begins at $P_0 = (0,0)$ and makes a sequence of jumps according to the following rule: from $P_n = (x_n, y_n),$ the frog jumps to $P_{n+1},$ which may be any of the points $(x_n + 7, y_n + 2),$ $(x_n + 2, y_n + 7),$ $(x_n - 5, y_n - 10),$ or $(x_n - 10, y_n - 5).$ There are $M$ points $(x, y)$ with $|x| + |y| \le 100$ that can be reached by a sequence of such jumps. Find the remainder when $M$ is divided by $1000.$
Solution

First of all, it is easy to see by induction that for any $P(x,y)$ in the frog's jump sequence, $x+y$ will be a multiple of $3$ and $x-y$ will be a multiple of $5.$ The base case $(x,y) = (0,0)$ obviously satisfies the constraints and if $x+y = 3n$ and $x-y = 5m,$ any of the four transformations will sustain this property:

$\begin{align*} (x+7)+(y+2) = x+y+9 \rightarrow 3(n+3) &\text{ and } (x+7)-(y+2) = x-y+5 \rightarrow 5(m+1)\\ (x+2)+(y+7) = x+y+9 \rightarrow 3(n+3) &\text{ and } (x+2)-(y+7) = x-y-5 \rightarrow 5(m-1)\\ (x-5)+(y-10) = x+y-15 \rightarrow 3(n-5) &\text{ and } (x-5)-(y-10) = x-y+5 \rightarrow 5(m+1)\\ (x-10)+(y-5) = x+y-15 \rightarrow 3(n-5) &\text{ and } (x-10)-(y-5) = x-y-5 \rightarrow 5(m-1).\\ \end{align*}$ So we know that any point the frog can reach will satisfy $x+y = 3n$ and $x-y = 5m.$

$\textbf{Lemma:}$ Any point in the form $x+y = 3n$ and $x-y = 5m$ is reachable.


$\textbf{Proof:}$ Denote the total amounts of each specific transformation in the frog's jump sequence to be $a,$ $b,$ $c,$ and $d$ respectively. Then $x=7a+2b-5c-10d$ and $y=2a+7b-10c-5d$ and the equations $x+y = 9(a+b)-15(c+d) = 3n$ and $x-y = 5(a-b)+5(c-d) = 5m$ must be solvable in integers. But $3(a+b)-5(c+d) = n$ implies $(c+d) \equiv n \mod 3$ and thus $(a+b) = \lfloor{n/3}\rfloor + 2(c+d).$ Similarly $(a-b)+(c-d) = m$ implies $(a-b)$ and $(c-d)$ have the same parity. Now in order for an integer solution to exist, there must always be a way to ensure $(a+b)$ and $(a-b)$ have identical parities and also $(c+d)$ and $(c-d)$ have identical parities. The parity of $(a+b)$ is completely dependent on $n,$ so the parities of $(a-b)$ and $(c-d)$ must be chosen to match this value. But the parity of $(c+d)$ can then be adjusted by adding or subtracting $3$ until it is identical to the parity of $(c-d)$ as chosen before, so we conclude that it is always possible to find an integer solution for $(a,b,c,d)$ and thus any point that satisfies $x+y = 3n$ and $x-y = 5m$ can be reached by the frog. 

To count the number of such points in the region $|x| + |y| \le 100,$ we first note that any such point will lie on the intersection of one line of the form $y=x-5m$ and another line of the form $y=-x+3n.$ The intersection of two such lines will yield the point $(\frac{3n+5m}{2},\frac{3n-5m}{2}),$ which will be integral if and only if $m$ and $n$ have the same parity. Now since $|x| + |y| = |x \pm y|,$ we find that

$\begin{align*} |x + y| = |3n| \le 100 &\rightarrow -33 \le n \le 33\\ |x - y| = |5m| \le 100 &\rightarrow -20 \le m \le 20. \end{align*}$

So there are $34$ possible odd values and $33$ possible even values for $n,$ and $20$ possible odd values and $21$ possible even values for $m.$ Every pair of lines described above will yield a valid accessible point for all pairs of $m$ and $n$ with the same parity, and the number of points $M$ is thus $34 \cdot 20 + 33 \cdot 21 = 1373 \rightarrow \boxed{373.}$


2012 AIME I Problem 12

Problem 12

Let $\triangle ABC$ be a right triangle with right angle at $C.$ Let $D$ and $E$ be points on $\overline{AB}$ with $D$ between $A$ and $E$ such that $\overline{CD}$ and $\overline{CE}$ trisect $\angle C.$ If $\frac{DE}{BE} = \frac{8}{15},$ then $\tan B$ can be written as $\frac{m \sqrt{p}}{n},$ where $m$ and $n$ are relatively prime positive integers, and $p$ is a positive integer not divisible by the square of any prime. Find $m+n+p.$
Solutions
Solution 1

Let $CD = 2a$. Using angle bisector theorem on $\triangle CDB$, $\frac{2a}{8}=\frac{CB}{15}$, so $CB = \frac{15a}{4}$. Then, drop the altitude from $D$ to $CB$ and call the foot $F$. Thus, $CF = a$, $FD = a\sqrt{3}$, and $FB = \frac{11a}{4}$. Finally, $\tan{B} = \frac{a\sqrt{3}}{\frac{11a}{4}} = \frac{4\sqrt{3}}{11}$. Our answer is $\boxed{018}$.
Solution 2

Without loss of generality, set $CB = 1$. Then, by the Angle Bisector Theorem on triangle $DCB$, we have $CD = \frac{8}{15}$. We apply the Law of Cosines to triangle $DCB$ to get $1 + \frac{64}{225} - \frac{8}{15} = BD^{2}$, which we can simplify to get $BD = \frac{13}{15}$.

Now, we have $\cos \angle B = \frac{1 + \frac{169}{225} - \frac{64}{225}}{\frac{26}{15}}$ by another application of the Law of Cosines to triangle $DCB$, so $\cos \angle B = \frac{11}{13}$. In addition, $\sin \angle B = \sqrt{1 - \frac{121}{169}} = \frac{4\sqrt{3}}{13}$, so $\tan \angle B = \frac{4\sqrt{3}}{11}$.

Our final answer is $4+3+11 = \boxed{018}$.
Solution 3

(This solution does not use the Angle Bisector Theorem or the Law of Cosines, but it uses the Law of Sines and more trig)

Find values for all angles in terms of $\angle B$. $\angle CEB = 150-B$, $\angle CED = 30+B$, $\angle CDE = 120-B$, $\angle CDA = 60+B$, and $\angle A = 90-B$.

Use the law of sines on $\triangle CED$ and $\triangle CEB$:

In $\triangle CED$, $\frac{8}{\sin 30} = \frac{CE}{\sin (120-B)}$. This simplifies to $16 = \frac{CE}{\sin (120-B)}$.

In $\triangle CEB$, $\frac{15}{\sin 30} = \frac{CE}{\sin B}$. This simplifies to $30 = \frac{CE}{\sin B}$.

Solve for $CE$ and equate them so that you get $16\sin (120-B) = 30\sin B$.

From this, $\frac{8}{15} = \frac{\sin B}{\sin (120-B)}$.

Use a trig identity on the denominator on the right to obtain: $\frac{8}{15} = \frac{\sin B}{\sin 120 \cos B - \cos 120 \sin B}$

This simplifies to $\frac{8}{15} = \frac{\sin B}{\frac{\sqrt{3}\cos B}{2} + \frac{\sin B}{2}} = \frac{\sin B}{\frac{\sqrt{3} \cos B + \sin B}{2}} = \frac{2\sin B}{\sqrt{3}\cos B + \sin B}$

This gives $8\sqrt{3}\cos B+8\sin B=30\sin B$ Dividing by $\cos B$, we have ${8\sqrt{3}}= 22\tan B$

$\tan{B} = \frac{8\sqrt{3}}{22} = \frac{4\sqrt{3}}{11}$. Our final answer is $4 + 3 + 11 = \boxed{018}$.
Solution 4

(This solution avoids advanced trigonometry)

Let $X$ be the foot of the perpendicular from $D$ to $\overline{BC}$, and let $Y$ be the foot of the perpendicular from $E$ to $\overline{BC}$.

Now let $EY=x$. Clearly, triangles $EYB$ and $DXB$ are similar with $\frac{BE}{BD}=\frac{15}{15+8}=\frac{15}{23}=\frac{EY}{DX}$, so $DX=\frac{23}{15}x$.

Since triangles $CDX$ and $CEY$ are 30-60-90 right triangles, we can easily find other lengths in terms of $x$. For example, we see that $CY=x\sqrt{3}$ and $CX=\frac{\frac{23}{15}x}{\sqrt{3}}=\frac{23\sqrt{3}}{45}x$. Therefore $XY=CY-CX=x\sqrt{3}-\frac{23\sqrt{3}}{45}x=\frac{22\sqrt{3}}{45}x$.

Again using the fact that triangles $EYB$ and $DXB$ are similar, we see that $\frac{BX}{BY}=\frac{XY+BY}{BY}=\frac{XY}{BY}+1=\frac{23}{15}$, so $BY=\frac{15}{8}XY=\frac{15}{8}*\frac{22\sqrt{3}}{45}=\frac{11\sqrt{3}}{2}$.

Thus $\tan \angle B = \frac{x}{\frac{11\sqrt{3}}{12}x}=\frac{4\sqrt{3}}{11}$, and our answer is $4+3+11=\boxed{018}$.
Solution 5

(Another solution without trigonometry)

Extend $CD$ to point $F$ such that $\overline{AF} \parallel \overline{CB}$. It is then clear that $\triangle AFD$ is similar to $\triangle BCD$.

Let $AC=p$, $BC=q$. Then $\tan \angle B = p/q$.

With the Angle Bisector Theorem, we get that $CD=\frac{8}{15}q$. From 30-60-90 $\triangle CAF$, we get that $AF=\frac{1}{\sqrt{3}}p$ and $FD=FC-CD=\frac{2}{\sqrt{3}}p-\frac{8}{15}q$.

From $\triangle AFD \sim \triangle BCD$, we have that $\frac{FD}{CD}=\frac{FA}{CB}=\frac{\frac{2}{\sqrt{3}}p-\frac{8}{15}q}{\frac{8}{15}q}=\frac{\frac{1}{\sqrt{3}}p}{q}$. Simplifying yields $\left(\frac{p}{q}\right)\left(\frac{2\sqrt{3}}{3}*\frac{15}{8}-\frac{\sqrt{3}}{3}\right)=1$, and $\tan \angle B=\frac{p}{q}=\frac{4\sqrt{3}}{11}$, so our answer is $4+3+11=\boxed{018}$.



2012 AIME I Problem 13

Problem 13

Three concentric circles have radii $3,$ $4,$ and $5.$ An equilateral triangle with one vertex on each circle has side length $s.$ The largest possible area of the triangle can be written as $a + \tfrac{b}{c} \sqrt{d},$ where $a,$ $b,$ $c,$ and $d$ are positive integers, $b$ and $c$ are relatively prime, and $d$ is not divisible by the square of any prime. Find $a+b+c+d.$
Solution 1

Reinterpret the problem in the following manner. Equilateral triangle $ABC$ has a point $X$ on the interior such that $AX = 5,$ $BX = 4,$ and $CX = 3.$ A $60^o$ counter-clockwise rotation about vertex $A$ maps $X$ to $X'$ and $C$ to $C'.$ Note that angle $XAX'$ is $60$ and $XA = X'A = 5$ which tells us that triangle $XAX'$ is equilateral and that $XX' = 5.$ We now notice that $XC = 3$ and $X'C = 4$ which tells us that angle $XCX'$ is $90$ because there is a $3$-$4$-$5$ Pythagorean triple. Now note that $\angle ABC + \angle ACB = 120$ and $\angle XCA + \angle XBA = 90,$ so $\angle XCB+\angle XBC = 30$ and $\angle BXC = 150.$ Applying the law of cosines on triangle $BXC$ yields

$BC^2 = BX^2+CX^2 - 2 \cdot BX \cdot CX \cdot \cos(150) = 4^2+3^2-24 \cdot \frac{-\sqrt{3}}{2} = 25+12\sqrt{3}$

and thus the area of $ABC$ equals $BC^2\frac{\sqrt{3}}{4} = 25\frac{\sqrt{3}}{4}+9.$

so our final answer is $3+4+25+9 = \boxed{041.}$
Solution 2

We claim that there are 2 distinct equilateral triangles (up to congruence) that have the given properties; one of which has largest area. We have 2 cases to consider; either the center $O$ of the circles lies in the interior of triangle $ABC$ or it does not (and we shall show that both can happen). To see that the first case can occur, refer to Solution 1 above, or for a less creative and more direct approach proceed as follows. Using the notation from Solution 1, let $\theta$ be the measure of angle $XAC$ so that angle $BAX$ has measure $60-\theta$. Let $AB=BC=AC=x$. The law of cosines on triangles $BAX$ and $XAC$ yields $\cos(60-\theta)=\frac{x^2+9}{10x}$ and $\cos\theta=\frac{x^2+16}{10x}$. Solving this system will yield the value of $x$. Since $\cos\theta=\frac{x^2+16}{10x}$ we have that $\sin\theta=\frac{\sqrt{100x^2-(x^2+16)^2}}{10x}$. Substituting these into the equation $\frac{x^2+9}{10x}=\cos(60-\theta)=\frac{1}{2}\cos\theta+\frac{\sqrt{3}}{2}\sin\theta$ we obtain $\frac{x^2+9}{10x}=\frac{1}{2}\frac{x^2+16}{10x}+\frac{\sqrt{3}}{2}\frac{\sqrt{100x^2-(x^2+16)^2}}{10x}$. After clearing denominators, combining like terms, isolating the square root, squaring, and expanding, we obtain $x^4-50x^2+193=0$ so that by the quadratic formula $x^2=25\pm12\sqrt{3}$. Under the hypothesis that $O$ lies in the interior of triangle $ABC$, $x^2$ must be $25+12\sqrt{3}$. To see this, note that the other value for $x^2$ is roughly $4.2$ so that $x\approx 2.05$, but since $AX=5$ and $AX\leq x$ we have a contradiction. We then obtain the area as in Solution 1.

Now, suppose $O$ does not lie in the interior of triangle $ABC$. We then obtain convex quadrilateral $OBAC$ with diagonals $CB$ and $OA$ intersecting at $X$. Here $AX=AB=AC=x$. We may let $\alpha$ denote the measure of angle $CAX$ so that angle $XAB$ measures $60-\alpha$. Note that the law of cosines on triangles $CXA$ and $BXA$ yield the same equations as in the first case with $\theta$ replaced with $\alpha$. Thus we obtain again $x^2=25\pm12\sqrt{3}$. If $x^2=25+12\sqrt{3}$ then $x\approx 6.8$, but this is impossible since $AX\leq 5$ but the shortest possible distance from $A$ to $X$ is the height of equilateral triangle $ABC$ which is $\approx6.8\sqrt{3}\approx5.8$; a contradiction. Hence in this case $x^2=25-12\sqrt{3}$. But, the area of this triangle is clearly less than that in the first case, so we are done. Hence the phrasing of the question (the triangle with maximal area) is absolutely necessary since there are 2 possible triangles (up to congruence).



2012 AIME I Problem 14

Problem 14

Complex numbers $a,$ $b,$ and $c$ are zeros of a polynomial $P(z) = z^3 + qz + r,$ and $|a|^2 + |b|^2 + |c|^2 = 250.$ The points corresponding to $a,$ $b,$ and $c$ in the complex plane are the vertices of a right triangle with hypotenuse $h.$ Find $h^2.$
Solution 1

By Vieta's formula, the sum of the roots is equal to 0, or $a+b+c=0$. Therefore, $\frac{(a+b+c)}{3}=0$. Because the centroid of any triangle is the average of its vertices, the centroid of this triangle is the origin. Let one leg of the right triangle be $x$ and the other leg be $y$. Without the loss of generality, let $\overline{ac}$ be the hypotenuse. The magnitudes of $a$, $b$, and $c$ are just $\frac{2}{3}$ of the medians because the origin, or the centroid in this case, cuts the median in a ratio of $2:1$. So, $|a|^2=\frac{4}{9}\cdot((\frac{x}{2})^2+y^2)=\frac{x^2}{9}+\frac{4y^2}{9}$ because $|a|$ is two thirds of the median from $a$. Similarly, $|c|^2=\frac{4}{9}\cdot(x^2+(\frac{y}{2})^2)=\frac{4x^2}{9}+\frac{y^2}{9}$. The median from $b$ is just half the hypotenuse because the median of any right triangle is just half the hypotenuse. So, $|b|^2=\frac{4}{9}\cdot\frac{x^2+y^2}{4}=\frac{x^2}{9}+\frac{y^2}{9}$. Hence, $|a|^2+|b|^2+|c|^2=\frac{6x^2+6y^2}{9}=\frac{2x^2+2y^2}{3}=250$. Therefore, $h^2=x^2+y^2=\frac{3}{2}\cdot250=\boxed{375}$.
Solution 2

Assume $q$ and $r$ are real, so at least one of $a,$ $b,$ and $c$ must be real, with the remaining roots being pairs of complex conjugates. Without loss of generality, we assume $a$ is real and $b$ and $c$ are $x + yi$ and $x - yi$ respectively. By symmetry, the triangle described by $a,$ $b,$ and $c$ must be isosceles and is thus an isosceles right triangle with hypotenuse $\overline{bc}.$ Now since $P(z)$ has no $z^2$ term, we must have $a+b+c = a + (x + yi) + (x - yi) = 0$ and thus $a = -2x.$ Also, since the length of the altitude from the right angle of an isosceles triangle is half the length of the hypotenuse, $a-x=y$ and thus $y=-3x.$ We can then solve for $x$:

$\begin{align*} |a|^2 + |b|^2 + |c|^2 &= 250\\ |-2x|^2 + |x-3xi|^2 + |x+3xi|^2 &= 250\\ 4x^2 + (x^2 + 9x^2) + (x^2 + 9x^2) &= 250\\ x^2 &= \frac{250}{24} \end{align*}$

Now $h$ is the distance between $b$ and $c,$ so $h = 2y = -6x$ and thus $h^2 = 36x^2 = 36 \cdot \frac{250}{24} = \boxed{375.}$



2012 AIME I Problem 15
Problem 15

There are $n$ mathematicians seated around a circular table with $n$ seats numbered $1,$ $2,$ $3,$ $...,$ $n$ in clockwise order. After a break they again sit around the table. The mathematicians note that there is a positive integer $a$ such that

($1$) for each $k,$ the mathematician who was seated in seat $k$ before the break is seated in seat $ka$ after the break (where seat $i + n$ is seat $i$); 

($2$) for every pair of mathematicians, the number of mathematicians sitting between them after the break, counting in both the clockwise and the counterclockwise directions, is different from either of the number of mathematicians sitting between them before the break. 

Find the number of possible values of $n$ with $1 < n < 1000.$
Solution

It is a well-known fact that the set $0, a, 2a, ... (n-1)a$ forms a complete set of residues if and only if $a$ is relatively prime to $n$.

Thus, we have $a$ is relatively prime to $n$. In addition, for any seats $p$ and $q$, we must have $ap - aq$ not be equivalent to either $p - q$ or $q - p$ modulo $n$ to satisfy our conditions. These simplify to $(a-1)p \not\equiv (a-1)q$ and $(a+1)p \not\equiv (a+1)q$ modulo $n$, so multiplication by both $a-1$ and $a+1$ must form a complete set of residues mod $n$ as well.

Thus, we have $a-1$, $a$, and $a+1$ are relatively prime to $n$. We must find all $n$ for which such an $a$ exists. $n$ obviously cannot be a multiple of $2$ or $3$, but for any other $n$, we can set $a = n-2$, and then $a-1 = n-3$ and $a+1 = n-1$. All three of these will be relatively prime to $n$, since two numbers $x$ and $y$ are relatively prime if and only if $x-y$ is relatively prime to $x$. In this case, $1$, $2$, and $3$ are all relatively prime to $n$, so $a = n-2$ works.

Now we simply count all $n$ that are not multiples of $2$ or $3$, which is easy using inclusion-exclusion. We get a final answer of $998 - (499 + 333 - 166) = \boxed{332.}$


2012 AIME I Answer Key
1.	040
    2.195
    3.216
    4.279
    5.330
    6.071
    7.280
    8.089
    9.049
    10.170
    11.373
    12.018
    13.041
    14.375
    15.332