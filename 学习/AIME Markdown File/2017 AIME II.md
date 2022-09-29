#2017 AIME II Problems

##Problem 1
Find the number of subsets of $\{1, 2, 3, 4, 5, 6, 7, 8\}$ that are subsets of neither $\{1, 2, 3, 4, 5\}$ nor $\{4, 5, 6, 7, 8\}$.

Solution 1
The number of subsets of a set with $n$ elements is $2^n$. The total number of subsets of $\{1, 2, 3, 4, 5, 6, 7, 8\}$ is equal to $2^8$. The number of sets that are subsets of at least one of $\{1, 2, 3, 4, 5\}$ or $\{4, 5, 6, 7, 8\}$ can be found using complimentary counting. There are $2^5$ subsets of $\{1, 2, 3, 4, 5\}$ and $2^5$ subsets of $\{4, 5, 6, 7, 8\}$. It is easy to make the mistake of assuming there are $2^5+2^5$ sets that are subsets of at least one of $\{1, 2, 3, 4, 5\}$ or $\{4, 5, 6, 7, 8\}$, but the $2^2$ subsets of $\{4, 5\}$ are overcounted. There are $2^5+2^5-2^2$ sets that are subsets of at least one of $\{1, 2, 3, 4, 5\}$ or $\{4, 5, 6, 7, 8\}$, so there are $2^8-(2^5+2^5-2^2)$ subsets of $\{1, 2, 3, 4, 5, 6, 7, 8\}$ that are subsets of neither $\{1, 2, 3, 4, 5\}$ nor $\{4, 5, 6, 7, 8\}$. $2^8-(2^5+2^5-2^2)=\boxed{196}$.

Solution 2
Upon inspection, a viable set must contain at least one element from both of the sets $\{1, 2, 3, 4, 5\}$ and $\{4, 5, 6, 7, 8\}$. Since 4 and 5 are included in both of these sets, then they basically don't matter, i.e. if set A is a subset of both of those two then adding a 4 or a 5 won't change that fact. Thus, we can count the number of ways to choose at least one number from 1 to 3 and at least one number from 6 to 8, and then multiply that by the number of ways to add in 4 and 5. The number of subsets of a 3 element set is   $2^3=8$, but we want to exclude the empty set, giving us 7 ways to choose from  $\{1, 2, 3\}$ or $\{4, 5, 6\}$. We can take each of these $7 \times 7=49$ sets and add in a 4 and/or a 5, which can be done in 4 different ways (by adding both, none, one, or the other one). Thus, the answer is $49 \times 4=\boxed{196}$.

Solution 3 (Gets straight to the point)
The set of all subsets of $\{1,2,3,4,5,6,7,8\}$ that are disjoint with respect to $\{4,5\}$ and are not disjoint with respect to the complements of sets (and therefore not a subset of) $\{1,2,3,4,5\}$ and $\{4,5,6,7,8\}$ will be named $S$, which has $7\cdot7=49$ members. The union of each member in $S$ and the $2^2=4$ subsets of $\{4,5\}$ will be the members of set $Z$, which has $49\cdot4=\boxed{196}$ members. 

##Problem 2
The teams $T_1$, $T_2$, $T_3$, and $T_4$ are in the playoffs. In the semifinal matches, $T_1$ plays $T_4$, and $T_2$ plays $T_3$. The winners of those two matches will play each other in the final match to determine the champion. When $T_i$ plays $T_j$, the probability that $T_i$ wins is $\frac{i}{i+j}$, and the outcomes of all the matches are independent. The probability that $T_4$ will be the champion is $\frac{p}{q}$, where $p$ and $q$ are relatively prime positive integers. Find $p+q$.

Solution
There are two scenarios in which $T_4$ wins. The first scenario is where $T_4$ beats $T_1$, $T_3$ beats $T_2$, and $T_4$ beats $T_3$, and the second scenario is where $T_4$ beats $T_1$, $T_2$ beats $T_3$, and $T_4$ beats $T_2$. Consider the first scenario. The probability $T_4$ beats $T_1$ is $\frac{4}{4+1}$, the probability $T_3$ beats $T_2$ is $\frac{3}{3+2}$, and the probability $T_4$ beats $T_3$ is $\frac{4}{4+3}$. Therefore the first scenario happens with probability $\frac{4}{4+1}\cdot\frac{3}{3+2}\cdot\frac{4}{4+3}$. Consider the second scenario. The probability $T_4$ beats $T_1$ is $\frac{4}{1+4}$, the probability $T_2$ beats $T_3$ is $\frac{2}{2+3}$, and the probability $T_4$ beats $T_2$ is $\frac{4}{4+2}$. Therefore the second scenario happens with probability $\frac{4}{1+4}\cdot\frac{2}{2+3}\cdot\frac{4}{4+2}$. By summing these two probabilities, the probability that $T_4$ wins is $\frac{4}{4+1}\cdot\frac{3}{3+2}\cdot\frac{4}{4+3}+\frac{4}{1+4}\cdot\frac{2}{2+3}\cdot\frac{4}{4+2}$. Because this expression is equal to $\frac{256}{525}$, the answer is $256+525=\boxed{781}$.

##Problem 3
A triangle has vertices $A(0,0)$, $B(12,0)$, and $C(8,10)$. The probability that a randomly chosen point inside the triangle is closer to vertex $B$ than to either vertex $A$ or vertex $C$ can be written as $\frac{p}{q}$, where $p$ and $q$ are relatively prime positive integers. Find $p+q$.

Solution 1

<div align=center><img src="https://latex.artofproblemsolving.com/e/4/8/e48e473edf222ba6842ab19b746e1fe5eba5c8a0.png" height="150px" /></div>

The set of all points closer to point $B$ than to point $A$ lie to the right of the perpendicular bisector of $AB$ (line $PZ$ in the diagram), and the set of all points closer to point $B$ than to point $C$ lie below the perpendicular bisector of $BC$ (line $PX$ in the diagram). Therefore, the set of points inside the triangle that are closer to $B$ than to either vertex $A$ or vertex $C$ is bounded by quadrilateral $BXPZ$. Because $X$ is the midpoint of $BC$ and $Z$ is the midpoint of $AB$, $X=(10,5)$ and $Z=(6,0)$. The coordinates of point $P$ is the solution to the system of equations defined by lines $PX$ and $PZ$. Using the point-slope form of a linear equation and the fact that the slope of the line perpendicular to a line with slope $m$ is $-\frac{1}{m}$, the equation for line $PX$ is $y=\frac{2}{5}x+1$ and the equation for line $PZ$ is $x=6$. The solution of this system is $P=\left(6,\frac{17}{5}\right)$. Using the shoelace formula on quadrilateral $BXPZ$ and triangle $ABC$, the area of quadrilateral $BXPZ$ is $\frac{109}{5}$ and the area of triangle $ABC$ is $60$. Finally, the probability that a randomly chosen point inside the triangle is closer to vertex $B$ than to vertex $A$ or vertex $C$ is the ratio of the area of quadrilateral $BXPZ$ to the area of $ABC$, which is $\frac{\frac{109}{5}}{60}=\frac{109}{300}$. The answer is $109+300=\boxed{409}$.

Solution 2
Since we know the coordinates of all three vertices of the triangle, we can find the side lengths: $AB=12$, $AC=2\sqrt{41}$, and $BC=2\sqrt{29}$. We notice that the point where the three distances are the same is the circumcenter - so we use one of the triangle area formulas to find the circumradius, since we know what the area is. $\frac{12 \cdot 2\sqrt{41} \cdot 2\sqrt{29}}{4 \cdot R}=\frac{12 \cdot 10}{2}.$ We rearrange to get $R=\frac{\sqrt{41} \cdot \sqrt{29}}{5}.$

<div align=center><img src="http://latex.artofproblemsolving.com/7/3/8/738e151adb543ad1543de1ae8a63fda0d961bc94.png" height="150px" /></div>

We know that $AP=\frac{\sqrt{41} \cdot \sqrt{29}}{5}$, and $AS=6$, so using the Pythagorean Theorem gives $SP=\frac{17}{5}$. This means $[ASP]=[BSP]=\frac{17}{5} \cdot 6 \cdot \frac{1}{2} = \frac{51}{5}$. Similarly, we know that $BP=\frac{\sqrt{41} \cdot \sqrt{29}}{5}$, and $BR=\sqrt{29}$, so we get that $PR=\frac{4\sqrt{29}}{5}$, and so $[BRP]=[CRP]=\frac{4\sqrt{29}}{5} \cdot \sqrt{29} \cdot \frac{1}{2} = \frac{58}{5}$. Lastly, we know that $CP=\frac{\sqrt{41} \cdot \sqrt{29}}{5}$, and $CT=\sqrt{41}$, so we get that $PT=\frac{2\sqrt{41}}{5}$, and $[ATP]=[CTP]=\frac{2\sqrt{41}}{5} \cdot \sqrt{41} \cdot \frac{1}{2} = \frac{41}{5}$. Therefore, our answer is $\frac{51+58}{2(51+58+41)}=\frac{109}{300} \rightarrow \boxed{409}$.

##Problem 4
Find the number of positive integers less than or equal to $2017$ whose base-three representation contains no digit equal to $0$.

Solution
Solution 1

The base-$3$ representation of $2017_{10}$ is $2202201_3$. Because any $7$-digit base-$3$ number that starts with $22$ and has no digit equal to $0$ must be greater than $2017_{10}$, all $7$-digit numbers that have no digit equal to $0$ must start with $21$ or $1$ in base $3$. Of the base-$3$ numbers that have no digit equal to $0$, there are $2^5$ $7$-digit numbers that start with $21$, $2^6$ $7$-digit numbers that start with $1$, $2^6$ $6$-digit numbers, $2^5$ $5$-digit numbers, $2^4$ $4$-digit numbers, $2^3$ $3$-digit numbers, $2^2$ $2$-digit numbers, and $2^1$ $1$-digit numbers. Summing these up, we find that the answer is $2^5+2^6+2^6+2^5+2^4+2^3+2^2+2^1=\boxed{222}$.


Solution 2

Note that $2017=220221_{3}$, and $2187=3^7=10000000_{3}$. There can be a $1,2,...,7$ digit number less than $2187$, and each digit can either be $1$ or $2$. So $2^1$ one digit numbers and so on up to $2^7$ $7$ digit.


Now we have to subtract out numbers from $2018$ to $2187$

Then either the number must begin $221...$ or $222...$ with four more digits at the end

Using $1$s and $2$s there are $2^4$ options for each so:

$2+4+8+16+32+64+128-2*16=256-2-32=\boxed{222}$

##Problem 5
A set contains four numbers. The six pairwise sums of distinct elements of the set, in no particular order, are $189$, $320$, $287$, $234$, $x$, and $y$. Find the greatest possible value of $x+y$.

Solution 1
Let these four numbers be $a$, $b$, $c$, and $d$, where $a>b>c>d$. $x+y$ needs to be maximized, so let $x=a+b$ and $y=a+c$ because these are the two largest pairwise sums. Now $x+y=2a+b+c$ needs to be maximized. Notice $2a+b+c=3(a+b+c+d)-(a+2b+2c+3d)=3((a+c)+(b+d))-((a+d)+(b+c)+(b+d)+(c+d))$. No matter how the numbers $189$, $320$, $287$, and $234$ are assigned to the values $a+d$, $b+c$, $b+d$, and $c+d$, the sum $(a+d)+(b+c)+(b+d)+(c+d)$ will always be $189+320+287+234$. Therefore we need to maximize $3((a+c)+(b+d))-(189+320+287+234)$. The maximum value of $(a+c)+(b+d)$ is achieved when we let $a+c$ and $b+d$ be $320$ and $287$ because these are the two largest pairwise sums besides $x$ and $y$. Therefore, the maximum possible value of $x+y=3(320+287)-(189+320+287+234)=\boxed{791}$.

Solution 2
Let the four numbers be $a$, $b$, $c$, and $d$, in no particular order. Adding the pairwise sums, we have $3a+3b+3c+3d=1030+x+y$, so $x+y=3(a+b+c+d)-1030$. Since we want to maximize $x+y$, we must maximize $a+b+c+d$.

Of the four sums whose values we know, there must be two sums that add to $a+b+c+d$. To maximize this value, we choose the highest pairwise sums, $320$ and $287$. Therefore, $a+b+c+d=320+287=607$.

We can substitute this value into the earlier equation to find that $x+y=3(607)-1030=1821-1030=\boxed{791}$.

##Problem 6
Find the sum of all positive integers $n$ such that $\sqrt{n^2+85n+2017}$ is an integer.

Solution 1
Manipulating the given expression, $\sqrt{n^2+85n+2017}=\frac{1}{2}\sqrt{4n^2+340n+8068}=\frac{1}{2}\sqrt{(2n+85)^2+843}$. The expression under the radical must be an square number for the entire expression to be an integer, so $(2n+85)^2+843=s^2$. Rearranging, $s^2-(2n+85)^2=843$. By difference of squares, $(s-(2n+85))(s+(2n+85))=1\times843=3\times281$. It is easy to check that those are all the factor pairs of 843. Considering each factor pair separately, $2n+85$ is found to be $421$ and $139$. The two values of $n$ that satisfy one of the equations are $168$ and $27$. Summing these together, the answer is $168+27=\boxed{195}$.

Solution 2
Clearly, the result when $n$ is plugged into the given expression is larger than $n$ itself. Let $x$ be the positive difference between that result and $n$, so that $\sqrt{n^2+85n+2017}=n+x$. Squaring both sides and canceling the $n^2$ terms gives $85n+2017=2xn+x^2$. Combining like terms, $(85-2x)n=x^2-2017$, so

$n=\frac{x^2-2017}{85-2x}.$
Since $n$ is positive, there are two cases, which are simple (luckily). Remembering that $x$ is a positive integer, then $x^2-2017$ and $85-2x$ are either both positive or both negative. The smallest value for which $x^2>2017$ is 45, which makes the denominator, and the entire expression, negative. Evaluating the other case where numerator and denominator are both negative, then we have that $x<45$ (from the numerator) and $85-2x<0$, which means $x>42$. This only gives two solutions, $x=43, 44$. Plugging these into the expression for $n$, we find that they result in 27 and 168, which both satisfy the initial question. Therefore, the answer is $168+27=\boxed{195}$.

Solution 3 (Abuse the discriminant)
Let the integer given by the square root be represented by $x$. Then $0 = n^2 + 85n + 2017 - x^2$. For this to have rational solutions for $n$ (checking whether they are integers is done later), the discriminant of this quadratic must be a perfect square. (This can be easily shown using the quadratic formula.)

Thus, $b^2 - 4ac = 7225 + 4x^2 - 8068 = y^2$ for some integer $y$. Then $4x^2 - 843 = y^2$. Rearranging this equation yields that $843 = (2x+y)(2x-y)$. Noticing that there are 2 factor pairs of $843$, namely, $1*843$ and $3*281$, there are 2 systems to solve for $x$ and $y$ that create rational $n$. These yield solutions $(x,y)$ of $(211, 421)$ and $(71, 139)$.

The solution to the initial quadratic in $n$ must then be $\frac{-85 \pm \sqrt{85^2 - 4(2017 - x^2)}}{2}$. Noticing that for each value of $x$ that has rational solutions for $n$, the corresponding value of the square root of the discriminant is $y$, the formula can be rewritten as $n = \frac{-85 \pm y}{2}$. One solution is $\frac{421 - 85}{2} = 168$ and the other solution is $\frac{139 - 85}{2} = 27$. Thus the answer is $168 + 27 = \boxed{195}$ as both rational solutions are integers.

##Problem 7
Find the number of integer values of $k$ in the closed interval $[-500,500]$ for which the equation $\log(kx)=2\log(x+2)$ has exactly one real solution.

Solution 1

<div align=center><img src="http://latex.artofproblemsolving.com/b/7/f/b7f4ba2c0d18383edb9d5f4aab842badae5fc0e8.png" height="800px" /></div>

Note the equation $\log(kx)=2\log(x+2)$ is valid for $kx>0$ and $x>-2$. $\log(kx)=2\log(x+2)=\log((x+2)^2)$. The equation $kx=(x+2)^2$ is derived by taking away the outside logs from the previous equation. Because $(x+2)^2$ is always non-negative, $kx$ must also be non-negative; therefore this takes care of the $kx>0$ condition as long as $k\neq0$, i.e. $k$ cannot be $0$. Now, we graph both $(x+2)^2$ (the green graph) and $kx$ (the red graph for $k=-1,k=-2,k=-3,k=8$) for $x>-2$. It is easy to see that all negative values of $k$ make the equation $\log(kx)=2\log(x+2)$ have only one solution. However, there is also one positive value of $k$ that makes the equation only have one solution, as shown by the steepest line in the diagram. We can show that the slope of this line is a positive integer by setting the discriminant of the equation $(x+2)^2=kx$ to be $0$ and solving for $k$. Therefore, there are $500$ negative solutions and $1$ positive solution, for a total of $\boxed{501}$.

Solution 2
We use an algebraic approach. Since $\log(kx)=2\log(x+2)$, then $kx = (x+2)^2$ (the converse isn't necessarily true!), or $x^2+(4-k)x+4=0$. Our original equation has exactly one solution if and only if there is only one solution to the above equation, or one of the solutions is extraneous; it involves the computation of the log of a nonpositive number.

For the first case, we note that this can only occur when it is a perfect square trinomal, or $k = 0, 8$. However, $k = 0$ results in $\log(0)$ on the LHS, which is invalid. $k = 8$ yields $x = 2$, so that is one solution.

For the second case, we can use the quadratic formula. We have $x = \frac{k-4 \pm \sqrt{k^2-8k}}2,$ so in order for there to be at least one real solution, the discriminant must be nonnegative, or $k < 0$ or $k > 8$. Note that if $k > 8$, then both solutions will be positive, and therefore both valid. Therefore, $k < 0$. We now wish to show that if $k < 0$, then there is exactly one solution that works. Note that whenever $k < 0$, both "solutions" in $x$ are negative. One of the solutions to the equation is $x = \frac{k-4 + \sqrt{k^2-8k}}2$. We wish to prove that $x + 2 > 0$, or $x > -2$ (therefore the RHS in the original equation will be defined). Substituting, we have $\frac{k-4 + \sqrt{k^2-8k}}2 > -2$, or $\sqrt{k^2 - 8k} > -k$. Since both sides are positive, we can square both sides (if $k < 0$, then $-k > 0$) to get $k^2-8k > k^2$, or $8k < 0 \implies k < 0$, which was our original assumption, so this solution satisfies the original equation. The other case is when $x = \frac{k-4 - \sqrt{k^2-8k}}2$, which we wish to show is less that $-2$, or $\frac{k-4 - \sqrt{k^2-8k}}2 < -2 \implies k < \sqrt{k^2-8k}$. However, since the square root is defined to be positive, then this is always true, which implies that whenever $k < 0$, there is exactly one real solution that satisfies the original equation. Combining this with $k \in [-500, 500]$, we find that the answer is $500 + 1 = \boxed{501}$.

##Problem 8
Find the number of positive integers $n$ less than $2017$ such that $1+n+\frac{n^2}{2!}+\frac{n^3}{3!}+\frac{n^4}{4!}+\frac{n^5}{5!}+\frac{n^6}{6!}$ is an integer.

Solution 1
Writing the last two terms with a common denominator, we have $\frac{6n^5+n^6}{720} \implies \frac{n^5(6+n)}{720}$ By inspection. this yields that $n \equiv 0, 24 \mod{30}$. Therefore, we get the final answer of $67 + 67 = \boxed{134}$.

Solution 2
Taking out the $1+n$ part of the expression and writing the remaining terms under a common denominator, we get $\frac{1}{720}(n^6+6n^5+30n^4+120n^3+360n^2)$. Therefore the expression $n^6+6n^5+30n^4+120n^3+360n^2$ must equal $720m$ for some positive integer $m$. Taking both sides mod $2$, the result is $n^6 \equiv 0 \mod{2}$. Therefore $n$ must be even. If $n$ is even, that means $n$ can be written in the form $2a$ where $a$ is a positive integer. Replacing $n$ with $2a$ in the expression, $64a^6+192a^5+480a^4+960a^3+1440a^2$ is divisible by $16$ because each coefficient is divisible by $16$. Therefore, if $n$ is even, $n^6+6n^5+30n^4+120n^3+360n^2$ is divisible by $16$.

Taking the equation $n^6+6n^5+30n^4+120n^3+360n^2=720m$ mod $3$, the result is $n^6 \equiv 0 \mod{3}$. Therefore $n$ must be a multiple of $3$. If $n$ is a multiple of three, that means $n$ can be written in the form $3b$ where $b$ is a positive integer. Replacing $n$ with $3b$ in the expression, $729b^6+1458b^5+2430b^4+3240b^3+3240b^2$ is divisible by $9$ because each coefficient is divisible by $9$. Therefore, if $n$ is a multiple of $3$, $n^6+6n^5+30n^4+120n^3+360n^2$ is divisibly by $9$.

Taking the equation $n^6+6n^5+30n^4+120n^3+360n^2=720m$ mod $5$, the result is $n^6+n^5 \equiv 0 \mod{5}$. The only values of $n (\text{mod }5)$ that satisfy the equation are $n\equiv0(\text{mod }5)$ and $n\equiv4(\text{mod }5)$. Therefore if $n$ is $0$ or $4$ mod $5$, $n^6+6n^5+30n^4+120n^3+360n^2$ will be a multiple of $5$.

The only way to get the expression $n^6+6n^5+30n^4+120n^3+360n^2$ to be divisible by $720=16 \cdot 9 \cdot 5$ is to have $n \equiv 0 \mod{2}$, $n \equiv 0 \mod{3}$, and $n \equiv 0 \text{ or } 4 \mod{5}$. By the Chinese Remainder Theorem or simple guessing and checking, we see $n\equiv0,24 \mod{30}$. Because no numbers between $2011$ and $2017$ are equivalent to $0$ or $24$ mod $30$, the answer is $\frac{2010}{30}\times2=\boxed{134}$.

##Problem 9
A special deck of cards contains $49$ cards, each labeled with a number from $1$ to $7$ and colored with one of seven colors. Each number-color combination appears on exactly one card. Sharon will select a set of eight cards from the deck at random. Given that she gets at least one card of each color and at least one card with each number, the probability that Sharon can discard one of her cards and $\textit{still}$ have at least one card of each color and at least one card with each number is $\frac{p}{q}$, where $p$ and $q$ are relatively prime positive integers. Find $p+q$.

Solution 1
Without loss of generality, assume that the $8$ numbers on Sharon's cards are $1$, $1$, $2$, $3$, $4$, $5$, $6$, and $7$, in that order, and assume the $8$ colors are red, red, and six different arbitrary colors. There are ${8\choose2}-1$ ways of assigning the two red cards to the $8$ numbers; we subtract $1$ because we cannot assign the two reds to the two $1$'s. In order for Sharon to be able to remove at least one card and still have at least one card of each color, one of the reds have to be assigned with one of the $1$s. The number of ways for this not to happen is ${6\choose2}$, so the number of ways for it to happen is $\left({8\choose2}-1\right)-{6\choose2}$. Each of these assignments is equally likely, so the probability that Sharon can discard one of her cards and still have at least one card of each color and at least one card with each number is $\frac{\left({8\choose2}-1\right)-{6\choose2}}{{8\choose2}-1}=\frac{4}{9} \implies 4 + 9 = 13 = \boxed{013}$.

Solution 2
There have to be $2$ of $8$ cards sharing the same number and $2$ of them sharing same color.

$2$ pairs of cards can't be the same or else there will be $2$ card which are completely same.

WLOG the numbers are $1,1,2,3,4,5,6,$ and $7$ and the colors are $a,a,b,c,d,e,f,$ and $g$ Then we can get $2$ cases:

Case One: $1a,1b,2a,3c,4d,5e,6f,$ and $7g$ in this case, we can discard $1a$. there are $2*6=12$ situations in this case.

Case Two: $1b,1c,2a,3a,4d,5e,6f,$ and $7g$ In this case, we can't discard. There are $\frac{6*5}{2}=15$ situations in this case

So the probability is $\frac{12}{12+15}=\frac{4}{9}$

The answer is $4+9=\boxed{013}$

Solution 3
There are $7!$ ways to choose a set of 7 cards that have all the numbers from 1-7 and all 7 colors. There are then $42$ cards remaining. Thus, there are $7!(42)$ desired sets.

Now, the next thing to find is the number of ways to choose 8 cards where there is not a set of 7 such cards. In this case, one color must have 2 cards and one number must have 2 cards, and they can't be the same number/color card. The number of ways to pick this is equal to a multiplication of $\binom{7}{2}$ ways to pick 2 numbers, $7$ colors to assign them to, $\binom{6}{2}$ ways to pick 2 nonchosen colors, $5$ ways to pick a number to assign them to, and $4!$ ways to assign the rest.

Thus, the answer is $\frac{7!(42)}{7!(42) + 21(15)(7)(5!)}$. Dividing out $5!$ yields $\frac{42(42)}{42(42) + 21(15)(7)}$ which is equal to $\frac{2(42)}{2(42) + 15(7)}$ which is equal to $\frac{12}{12 + 15}$ which is equal to $\frac{4}{9}$ giving a final answer of $\boxed{013}$.

##Problem 10
Rectangle $ABCD$ has side lengths $AB=84$ and $AD=42$. Point $M$ is the midpoint of $\overline{AD}$, point $N$ is the trisection point of $\overline{AB}$ closer to $A$, and point $O$ is the intersection of $\overline{CM}$ and $\overline{DN}$. Point $P$ lies on the quadrilateral $BCON$, and $\overline{BP}$ bisects the area of $BCON$. Find the area of $\triangle CDP$.

Solution

<div align=center><img src="http://latex.artofproblemsolving.com/b/1/5/b15dc0e88c799e645a58cb1b0f7e03cf1abade7c.png" height="100px" /></div>
Impose a coordinate system on the diagram where point $D$ is the origin. Therefore $A=(0,42)$, $B=(84,42)$, $C=(84,0)$, and $D=(0,0)$. Because $M$ is a midpoint and $M$ is a trisection point, $M=(0,21)$ and $N=(28,42)$. The equation for line $DN$ is $y=\frac{3}{2}x$ and the equation for line $CM$ is $\frac{1}{84}x+\frac{1}{21}y=1$, so their intersection, point $O$, is $(12,18)$. Using the shoelace formula on quadrilateral $BCON$, or or drawing diagonal $\overline{BO}$ and using $\frac 12 bh$, we find that its area is $2184$. Therefore the area of triangle $BCP$ is $\frac{2184}{2}$ and the distance from $P$ to line $PC$ is $52$ and its $x$-coordinate is $32$. Because $P$ lies on the equation $\frac{1}{84}x+\frac{1}{21}y=1$, $P$'s $y$-coordinate is $13$, which is also the height of $CDP$. Therefore the area of $CDP$ is $\frac{1}{2} \cdot 13 \cdot 84=\boxed{546}$.

##Problem 11
Five towns are connected by a system of roads. There is exactly one road connecting each pair of towns. Find the number of ways there are to make all the roads one-way in such a way that it is still possible to get from any town to any other town using the roads (possibly passing through other towns on the way).

Solution
It is obvious that any configuration of one-way roads which contains a town whose roads all lead into it or lead out of it cannot satisfy the given. We claim that any configuration which does not have a town whose roads all lead into it or lead out of it does satisfy the given conditions. Now we show that a loop of $3$ or more towns exist. Pick a town, then choose a neighboring town to travel to $5$ times. Of these $6$ towns visited, at least two of them must be the same; therefore there must exist a loop of $3$ or more towns because a loop of $2$ towns cannot exist. We want to show that the loop can be reached from any town, and any town can be reached from the loop.

$\textbf{Case 1}$. The loop has $5$ towns. Clearly every town can be reached by going around the loop.

$\textbf{Case 2}$. The loop has $4$ towns. The town not on the loop must have a road leading to it. This road comes from a town on the loop. Therefore this town can be reached from the loop. This town not on the loop must also have a road leading out of it. This road leads to a town on the loop. Therefore the loop can be reached from the town.

$\textbf{Case 3}$. The loop has $3$ towns. There are two towns not on the loop; call them Town $A$ and Town $B$. Without loss of generality assume $A$ leads to $B$. Because a road must lead to $A$, the town where this road comes from must be on the loop. Therefore $A$ and therefore $B$ can be reached from the loop. Because a road must lead out of $B$, the town it leads to must be on the loop. Therefore the loop can be reached from $B$ and also $A$.

The number of good configurations is the total number of configurations minus the number of bad configurations. There are $2^{{5\choose2}}$ total configurations. To find the number of bad configurations in which a town exists such that all roads lead to it, there are $5$ ways to choose this town and $2^6$ ways to assign the six other roads that do not connect to this town. The same logic is used to find the number of bad configurations in which a town exists such that all roads lead out of it. It might be tempting to conclude that there are $5 \cdot 2^6+5 \cdot 2^6$ bad configurations, but the configurations in which there exists a town such that all roads lead to it and a town such that all roads lead out of it are overcounted. There are $5$ ways to choose the town for which all roads lead to it, $4$ ways to choose the town for which all roads lead out of it, and $2^3$ ways to assign the remaining $3$ roads not connected to either of these towns. Therefore, the answer is $2^{{5\choose2}}-(5 \cdot 2^6+5 \cdot 2^6-5\cdot 4 \cdot 2^3)=\boxed{544}$.

##Problem 12
Circle $C_0$ has radius $1$, and the point $A_0$ is a point on the circle. Circle $C_1$ has radius $r<1$ and is internally tangent to $C_0$ at point $A_0$. Point $A_1$ lies on circle $C_1$ so that $A_1$ is located $90^{\circ}$ counterclockwise from $A_0$ on $C_1$. Circle $C_2$ has radius $r^2$ and is internally tangent to $C_1$ at point $A_1$. In this way a sequence of circles $C_1,C_2,C_3,\ldots$ and a sequence of points on the circles $A_1,A_2,A_3,\ldots$ are constructed, where circle $C_n$ has radius $r^n$ and is internally tangent to circle $C_{n-1}$ at point $A_{n-1}$, and point $A_n$ lies on $C_n$ $90^{\circ}$ counterclockwise from point $A_{n-1}$, as shown in the figure below. There is one point $B$ inside all of these circles. When $r = \frac{11}{60}$, the distance from the center $C_0$ to $B$ is $\frac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m+n$.
<div align=center><img src="http://latex.artofproblemsolving.com/e/7/1/e7152ffa3581f7f843ccb938b74c8468a3d156c5.png" height="200px" /></div>

Solution
Impose a coordinate system and let the center of $C_0$ be $(0,0)$ and $A_0$ be $(1,0)$. Therefore $A_1=(1-r,r)$, $A_2=(1-r-r^2,r-r^2)$, $A_3=(1-r-r^2+r^3,r-r^2-r^3)$, $A_4=(1-r-r^2+r^3+r^4,r-r^2-r^3+r^4)$, and so on, where the signs alternate in groups of $2$. The limit of all these points is point $B$. Using the geometric series formula on $B$ and reducing the expression, we get $B=\left(\frac{1-r}{r^2+1},\frac{r-r^2}{r^2+1}\right)$. The distance from $B$ to the origin is $\sqrt{\left(\frac{1-r}{r^2+1}\right)^2+\left(\frac{r-r^2}{r^2+1}\right)^2}=\frac{1-r}{\sqrt{r^2+1}}.$ Let $r=\frac{11}{60}$, and the distance from the origin is $\frac{49}{61}$.  $49+61=\boxed{110}$.

##Problem 13
For each integer $n\geq3$, let $f(n)$ be the number of $3$-element subsets of the vertices of the regular $n$-gon that are the vertices of an isosceles triangle (including equilateral triangles). Find the sum of all values of $n$ such that $f(n+1)=f(n)+78$.

Solution
Considering $n \mod{6}$, we have the following formulas:

Even and a multiple of 3: $\frac{n(n-4)}{2} + \frac{n}{3}$

Even and not a multiple of 3: $\frac{n(n-2)}{2}$

Odd and a multiple of 3: $\frac{n(n-3)}{2} + \frac{n}{3}$

Odd and not a multiple of 3: $\frac{n(n-1)}{2}$

To derive these formulas, we note the following: Any isosceles triangle formed by the vertices of our regular $n$-sided polygon $P$ has its sides from the set of edges and diagonals of $P$. Notably, as two sides of an isosceles triangle must be equal, it is important to use the property that same-lengthed edges and diagonals come in groups of $n$, unless $n$ is even when one set of diagonals (those which bisect the polygon) comes in a group of $\frac{n}{2}$. Three properties hold true of $f(n)$:

When $n$ is odd there are $\frac{n(n-1)}{2}$ satisfactory subsets (This can be chosen with $n$ choices for the not-base vertex, and $\frac{n-1}{2}$ for the pair of equal sides as we have $n-1$ edges to choose from, and we must divide by 2 for over-count).*

Another explanation: For any diagonal or side of the polygon chosen as the base of the isosceles triangle, there is exactly 1 isosceles triangle that can be formed. So, the total number of satisfactory subsets is $\dbinom{n}{2}=\dfrac{n(n-1)}{2}.$
When $n$ is even there are $\frac{n(n-2)}{2}$ satisfactory subsets (This can be chosen with $n$ choices for the not-base vertex, and $\frac{n-2}{2}$ for the pair of equal sides as we have $n-1$ edges to choose from, one of them which is not satisfactory (the bisecting edge), and we must divide by 2 for over-count).

When $n$ is a multiple of three we additionally over-count equilateral triangles, of which there are $\frac{n}{3}$. As we count them three times, we are two times over, so we subtract $\frac{2n}{3}$.

Considering the six possibilities $n \equiv 0,1,2,3,4,5 \mod{6}$ and solving, we find that the only valid solutions are $n = 36, 52, 157$, from which the answer is $36 + 52 + 157 = \boxed{245}$.

##Problem 14
A $10\times10\times10$ grid of points consists of all points in space of the form $(i,j,k)$, where $i$, $j$, and $k$ are integers between $1$ and $10$, inclusive. Find the number of different lines that contain exactly $8$ of these points.

Solution
The easiest way to see the case where the lines are not parallel to the faces, is that a line through the point $(a,b,c)$ must contain $(a \pm 1, b \pm 1, c \pm 1)$ on it as well, as otherwise the line would not pass through more than 5 points. This corresponds to the 4 diagonals of the cube.

We look at the one from $(0,0,0)$ to $(10,10,10)$. The lower endpoint of the desired lines must contain both a 0 and a 2 (if min > 0 then the point $(a-1,b-1,c-1)$ will also be on the line for example, 2 applies to the other end), so it can be $(0,0,2), (0,1,2), (0,2,2)$. Accounting for permutations, there are $12$ ways, so there are $12 \cdot 4 = 48$ different lines for this case. The answer is, therefore, $120 + 48 = \boxed{168}$

##Problem 15
Tetrahedron $ABCD$ has $AD=BC=28$, $AC=BD=44$, and $AB=CD=52$. For any point $X$ in space, define $f(X)=AX+BX+CX+DX$. The least possible value of $f(X)$ can be expressed as $m\sqrt{n}$, where $m$ and $n$ are positive integers, and $n$ is not divisible by the square of any prime. Find $m+n$.

Solution
Solution 1

Let $M$ and $N$ be midpoints of $\overline{AB}$ and $\overline{CD}$. The given conditions imply that $\triangle ABD\cong\triangle BAC$ and $\triangle CDA\cong\triangle DCB$, and therefore $MC=MD$ and $NA=NB$. It follows that $M$ and $N$ both lie on the common perpendicular bisector of $\overline{AB}$ and $\overline{CD}$, and thus line $MN$ is that common perpendicular bisector. Points $B$ and $C$ are symmetric to $A$ and $D$ with respect to line $MN$. If $X$ is a point in space and $X'$ is the point symmetric to $X$ with respect to line $MN$, then $BX=AX'$ and $CX=DX'$, so $f(X) = AX+AX'+DX+DX'$.

Let $Q$ be the intersection of $\overline{XX'}$ and $\overline{MN}$. Then $AX+AX'\geq 2AQ$, from which it follows that $f(X) \geq 2(AQ+DQ) = f(Q)$. It remains to minimize $f(Q)$ as $Q$ moves along $\overline{MN}$.

Allow $D$ to rotate about $\overline{MN}$ to point $D'$ in the plane $AMN$ on the side of $\overline{MN}$ opposite $A$. Because $\angle DNM$ is a right angle, $D'N=DN$. It then follows that $f(Q) = 2(AQ+D'Q)\geq 2AD'$, and equality occurs when $Q$ is the intersection of $\overline{AD'}$ and $\overline{MN}$. Thus $\min f(Q) = 2AD'$. Because $\overline{MD}$ is the median of $\triangle ADB$, the Length of Median Formula shows that $4MD^2 = 2AD^2 + 2BD^2 - AB^2 = 2\cdot 28^2 + 2 \cdot 44^2 - 52^2$ and $MD^2 = 684$. By the Pythagorean Theorem $MN^2 = MD^2 - ND^2 = 8$.

Because $\angle AMN$ and $\angle D'NM$ are right angles, $(AD')^2 = (AM+D'N)^2 + MN^2 = (2AM)^2 + MN^2 = 52^2 + 8 = 4\cdot 678.$It follows that $\min f(Q) = 2AD' = 4\sqrt{678}$. The requested sum is $4+678=\boxed{682}$.

Solution 2

Set $a=BC=28$, $b=CA=44$, $c=AB=52$. Let $O$ be the point which minimizes $f(X)$.

Claim:  $O$ is the gravity center $\tfrac14(\vec A + \vec B + \vec C + \vec D)$. Proof. Let $M$ and $N$ denote the midpoints of $AB$ and $CD$. From $\triangle ABD \cong \triangle BAC$ and $\triangle CDA \cong \triangle DCB$, we have  $MC=MD$, $NA=NB$ an hence $MN$ is a perpendicular bisector of both segments $AB$ and $CD$. Then if $X$ is any point inside tetrahedron $ABCD$, its orthogonal projection onto line $MN$ will have smaller $f$-value; hence we conclude that $O$ must lie on $MN$. Similarly, $O$ must lie on the line joining the midpoints of $AC$ and $BD$. $\blacksquare$

Claim: The gravity center $O$ coincides with the circumcenter. Proof. Let $G_D$ be the centroid of triangle $ABC$; then $DO = \tfrac 34 DG_D$ (by vectors). If we define $G_A$, $G_B$, $G_C$ similarly, we get $AO = \tfrac 34 AG_A$ and so on. But from symmetry we have $AG_A = BG_B = CG_C = DG_D$, hence $AO = BO = CO = DO$. $\blacksquare$

Now we use the fact that an isosceles tetrahedron has circumradius $R = \sqrt{\frac18(a^2+b^2+c^2)}$. Here $R = \sqrt{678}$ so $f(O) = 4R = 4\sqrt{678}$. Therefore, the answer is $4 + 678 = \boxed{682}$.

Solution 3

Isosceles tetrahedron is inscribed in a rectangular box, whose facial diagonals are the edges of the tetrahedron. Minimum $F(X)$ occurs at the center of gravity, and $F(x)= 2d$, where $d$ is the length of the spatial diagonal of the rectangular box.

Let the three dimensions of the box be $a, b, c$. $a^2+b^2=28^2;   c^2+b^2=52^2;   a^2+c^2=44^2.$

Add three equations, $d^2=(28^2+52^2+44^2)/2$. Hence $f(X)=4\sqrt {678}$.