# 2016 AIME II Problems

2016 AIME II Problem 1

Initially Alex, Betty, and Charlie had a total of $444$ peanuts. Charlie had the most peanuts, and Alex had the least. The three numbers of peanuts that each person had formed a geometric progression. Alex eats $5$ of his peanuts, Betty eats $9$ of her peanuts, and Charlie eats $25$ of his peanuts. Now the three numbers of peanuts each person has forms an arithmetic progression. Find the number of peanuts Alex had initially.

Solution

Let $r$ be the common ratio, where $r>1$. We then have $ar-9-(a-5)=a(r-1)-4=ar^{2}-25-(ar-9)=ar(r-1)-16$. We now have, letting, subtracting the 2 equations, $ar^{2}+-2ar+a=12$, so we have $3ar=432,$ or $ar=144$, which is how much Betty had. Now we have $144+\dfrac{144}{r}+144r=444$, or $144(r+\dfrac{1}{r})=300$, or $r+\dfrac{1}{r}=\dfrac{25}{12}$, which solving for $r$ gives $r=\dfrac{4}{3}$, since $r>1$, so Alex had $\dfrac{3}{4} \cdot 144=\boxed{108}$ peanuts.

2016 AIME II Problem 2

There is a $40\%$ chance of rain on Saturday and a $30\%$ chance of rain on Sunday. However, it is twice as likely to rain on Sunday if it rains on Saturday than if it does not rain on Saturday. The probability that it rains at least one day this weekend is $\frac{a}{b}$, where $a$ and $b$ are relatively prime positive integers. Find $a+b$.

Solution

Let $x$ be the probability that it rains on Sunday given that it doesn't rain on Saturday. We then have $\dfrac{3}{5}x+\dfrac{2}{5}2x = \dfrac{3}{10} \implies \dfrac{7}{5}x=\dfrac{3}{10}$ $\implies x=\dfrac{3}{14}$. Therefore, the probability that it doesn't rain on either day is $(1-\dfrac{3}{14})(\dfrac{3}{5})=\dfrac{33}{70}$. Therefore, the probability that rains on at least one of the days is $1-\dfrac{33}{70}=\dfrac{37}{70}$, so adding up the $2$ numbers, we have $37+70=\boxed{107}$. 

2016 AIME II Problems/Problem 3

Let $x,y,$ and $z$ be real numbers satisfying the system $\log_2(xyz-3+\log_5 x)=5$ $\log_3(xyz-3+\log_5 y)=4$ $\log_4(xyz-3+\log_5 z)=4$ Find the value of $|\log_5 x|+|\log_5 y|+|\log_5 z|$.
Solution

First, we get rid of logs by taking powers: $xyz-3+\log_5 x=2^{5}=32$, $xyz-3+\log_5 y=3^{4}=81$, and $(xyz-3+\log_5 z)=4^{4}=256$. Adding all the equations up and using the $\log {xy}=\log {x}+\log{y}$ property, we have $3xyz+\log_5{xyz} = 378$, so we have $xyz=125$. Solving for $x,y,z$ by substituting $125$ for $xyz$ in each equation, we get $\log_5 x=-90, \log_5 y=-41, \log_5 z=134$, so adding all the absolute values we have $90+41+134=\boxed{265}$. 

2016 AIME II Problems/Problem 4

An $a \times b \times c$ rectangular box is built from $a \cdot b \cdot c$ unit cubes. Each unit cube is colored red, green, or yellow. Each of the $a$ layers of size $1 \times b \times c$ parallel to the $(b \times c)$ faces of the box contains exactly $9$ red cubes, exactly $12$ green cubes, and some yellow cubes. Each of the $b$ layers of size $a \times 1 \times c$ parallel to the $(a \times c)$ faces of the box contains exactly $20$ green cubes, exactly $25$ yellow cubes, and some red cubes. Find the smallest possible volume of the box.

Solution

By counting the number of green cubes $2$ different ways, we have $12a=20b$, or $a=\dfrac{5}{3} b$. Notice that there are only $3$ possible colors for unit cubes, so for each of the $1 \times b \times c$ layers, there are $bc-21$ yellow cubes, and similarly there are $ac-45$ red cubes in each of the $1 \times a \times b$ layers. Therefore, we have $a(bc-21)=25b$ and $b(ac-45)=9a$. We check a few small values of $a,b$ and solve for $c$, checking $(a,b)=(5,3)$ gives $c=12$ with a volume of $180$, $(a,b)=(10,6)$ gives $c=6$ with a volume of $360$, and $(a,b)=(15,9)$ gives $c=4$, with a volume of $540$. Any higher $(a,b)$ will $ab>180$, so therefore, the minimum volume is $\boxed{180}$. 

2016 AIME II Problems/Problem 5

Triangle $ABC_0$ has a right angle at $C_0$. Its side lengths are pariwise relatively prime positive integers, and its perimeter is $p$. Let $C_1$ be the foot of the altitude to $\overline{AB}$, and for $n \geq 2$, let $C_n$ be the foot of the altitude to $\overline{C_{n-2}B}$ in $\triangle C_{n-2}C_{n-1}B$. The sum $\sum_{i=1}^\infty C_{n-2}C_{n-1} = 6p$. Find $p$.

Solution

Note that by counting the area in 2 ways, the first altitude is $\dfrac{ac}{b}$. By similar triangles, the common ratio is $\dfrac{a}{c}$ for reach height, so by the geometric series formula, we have $6p=\dfrac{\dfrac{ab}{c}}{1-\dfrac{a}{c}}$. Multiplying by the denominator and expanding, the equation becomes $\dfrac{ab}{c}=6a+6b+6c-\dfrac{6a^2}{c}-\dfrac{6ab}{c}-6a$. Cancelling $6a$ and multiplying by $c$ yields $ab=6bc+6c^2-6a^2-6ab$, so $7ab = 6bc+6b^2$ and $7a=6b+6c$. Checking for Pythagorean triples gives $13,84,$ and $85$, so $p=13+84+85=\boxed{182}$

2016 AIME II Problems/Problem 6

For polynomial $P(x)=1-\dfrac{1}{3}x+\dfrac{1}{6}x^{2}$, define $Q(x)=P(x)P(x^{3})P(x^{5})P(x^{7})P(x^{9})=\sum_{i=0}^{50} a_ix^{i}$. Then $\sum_{i=0}^{50} |a_i|=\dfrac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m+n$.
Solution 1

Note that all the odd coefficients have an odd number of odd degree terms multiplied together, and all the even coefficients have an even number of odd degree terms multiplied together. Since every odd degree term is negative, and every even degree term is positive, the sum is just equal to $Q(-1)=P(-1)^{5}=\left( \dfrac{3}{2}\right)^{5}=\dfrac{243}{32}$, so the desired answer is $243+32=\boxed{275}$.

Solution 2

We are looking for the sum of the absolute values of the coefficients of $Q(x)$. By defining $P'(x) = 1 + \frac{1}{3}x+\frac{1}{6}x^2$, and defining $Q'(x) = P'(x)P'(x^3)P'(x^5)P'(x^7)P'(x^9)$, we have made it so that all coefficients in $Q'(x)$ are just the positive/absolute values of the coefficients of $Q(x)$. .


To find the sum of the absolute values of the coefficients of $Q(x)$, we can just take the sum of the coefficients of $Q'(x)$. This sum is equal to $Q'(1) = P'(1)P'(1)P'(1)P'(1)P'(1) = \left(1+\frac{1}{3}+\frac{1}{6}\right)^5 = \frac{243}{32},$

so our answer is $243+32 = \boxed{275}$.

2016 AIME II Problems/Problem 7

Squares $ABCD$ and $EFGH$ have a common center at $\overline{AB} || \overline{EF}$. The area of $ABCD$ is 2016, and the area of $EFGH$ is a smaller positive integer. Square $IJKL$ is constructed so that each of its vertices lies on a side of $ABCD$ and each vertex of $EFGH$ lies on a side of $IJKL$. Find the difference between the largest and smallest positive integer values for the area of $IJKL$.

Solution

Letting $AI=a$ and $IB=b$, we have $IJ^{2}=a^{2}+b^{2} \geq 1008$ by CS inequality. Also, since $EFGH||ABCD$, the angles that each square cuts another are equal, so all the triangles are formed by a vertex of a larger square and $2$ adjacent vertices of a smaller square are similar. Therefore, the areas form a geometric progression, so since $2016=12^{2} \cdot 14$, we have the maximum area is $2016 \cdot \dfrac{11}{12} = 1848$ and the minimum area is $1008$, so the desired answer is $1848-1008=\boxed{840}$. 

2016 AIME II Problems/Problem 8

Find the number of sets ${a,b,c}$ of three distinct positive integers with the property that the product of $a,b,$ and $c$ is equal to the product of $11,21,31,41,51,61$.

Solution

Note that the prime factorization of the product is $3^{2}\cdot 7 \cdot 11 \cdot 17 \cdot 31 \cdot 41 \cdot 61$. Ignoring overcounting, by stars and bars there are $6$ ways to choose how to distribute the factors of $3$, and $3$ ways to distribute the factors of the other primes, so we have $3^{6} \cdot 6$ ways. However, some sets have $2$ numbers that are the same, namely the ones in the form $1,1,x$ and $3,3,x$, which are each counted $3$ times, and each other set is counted $6$ times, so the desired answer is $\dfrac{729 \cdot 6-6}{6} = \boxed{728}$. 

2016 AIME II Problems/Problem 9

The sequences of positive integers $1,a_2, a_3,...$ and $1,b_2, b_3,...$ are an increasing arithmetic sequence and an increasing geometric sequence, respectively. Let $c_n=a_n+b_n$. There is an integer $k$ such that $c_{k-1}=100$ and $c_{k+1}=1000$. Find $c_k$.

Solution 1

Since all the terms of the sequences are integers, and 100 isn't very big, we should just try out the possibilities for $b_2$. When we get to $b_2=9$ and $a_2=91$, we have $a_4=271$ and $b_4=729$, which works, therefore, the answer is $b_3+a_3=81+181=\boxed{262}$.

Solution 2

Using the same reasoning ($100$ isn't very big), we can guess which terms will work. The first case is $k=3$, so we assume the second and fourth terms of $c$ are $100$ and $1000$. We let $r$ be the common ratio of the geometric sequence and write the arithmetic relationships in terms of $r$.

The common difference is $100-r - 1$, and so we can equate: $2(99-r)+100-r=1000-r^3$. Moving all the terms to one side and the constants to the other yields

$r^3-3r = 702$, or $r(r^2-3) = 702$. Simply listing out the factors of $702$ shows that the only factor $3$ less than a square that works is $78$. Thus $r=9$ and we solve from there to get $\boxed{262}$. 

2016 AIME II Problems/Problem 10

Triangle $ABC$ is inscribed in circle $\omega$. Points $P$ and $Q$ are on side $\overline{AB}$ with $AP<AQ$. Rays $CP$ and $CQ$ meet $\omega$ again at $S$ and $T$ (other than $C$), respectively. If $AP=4,PQ=3,QB=6,BT=5,$ and $AS=7$, then $ST=\frac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m+n$.

Solution 1

<div align=center><img src="http://latex.artofproblemsolving.com/f/6/0/f603df291461fa6afd0563d94abdc2644aeb97ec.png" height="200px" /></div>

Let $\angle ACP=\alpha$, $\angle PCQ=\beta$, and $\angle QCB=\gamma$. Note that since $\triangle ACQ\sim\triangle TBQ$ we have $\tfrac{AC}{CQ}=\tfrac56$, so by the Ratio Lemma $\dfrac{AP}{PQ}=\dfrac{AC}{CQ}\cdot\dfrac{\sin\alpha}{\sin\beta}\quad\implies\quad \dfrac{\sin\alpha}{\sin\beta}=\dfrac{24}{15}.$Similarly, we can deduce $\tfrac{PC}{CB}=\tfrac47$ and hence $\tfrac{\sin\beta}{\sin\gamma}=\tfrac{21}{24}$.

Now Law of Sines on $\triangle ACS$, $\triangle SCT$, and $\triangle TCB$ yields $\dfrac{AS}{\sin\alpha}=\dfrac{ST}{\sin\beta}=\dfrac{TB}{\sin\gamma}.$Hence $\dfrac{ST^2}{\sin^2\beta}=\dfrac{TB\cdot AS}{\sin\alpha\sin\gamma},$so $TS^2=TB\cdot AS\left(\dfrac{\sin\beta}{\sin\alpha}\dfrac{\sin\beta}{\sin\gamma}\right)=\dfrac{15\cdot 21}{24^2}\cdot 5\cdot 7=\dfrac{35^2}{8^2}.$Hence $ST=\tfrac{35}8$ and the requested answer is $35+8=\boxed{43}$.

Edit: Note that the finish is much simpler. Once you get, $\dfrac{AS}{\sin\alpha}=\dfrac{ST}{\sin\beta}$, so $ST=\dfrac{AC*\sin(\beta)}{\sin(\alpha)}=7*(15/24)=35/8$.
Solution 2

Projecting through $C$ we have $\frac{3}{4}\times \frac{13}{6}=(A,Q;P,B)\stackrel{C}{=}(A,T;S,B)=\frac{ST}{7}\times \frac{13}{5}$ which easily gives $ST=\frac{35}{8}\Longrightarrow 35+8=\boxed{43.}$
Solution 3

By Ptolemy's Theorem applied to quadrilateral $ASTB$, we find $5\cdot 7+13\cdot ST=AT\cdot BS.$ Therefore, in order to find $ST$, it suffices to find $AT\cdot BS$. We do this using similar triangles.

As $\triangle APS\sim \triangle CPB$, we find $\frac{4}{PC}=\frac{7}{BC}.$ Therefore, $\frac{BC}{PC}=\frac{7}{4}$.

As $\triangle BQT\sim\triangle CQA$, we find $\frac{6}{CQ}=\frac{5}{AC}.$ Therefore, $\frac{AC}{CQ}=\frac{5}{6}$.

As $\triangle ATQ\sim\triangle CBQ$, we find $\frac{AT}{BC}=\frac{7}{CQ}.$ Therefore, $AT=\frac{7\cdot BC}{CQ}$.

As $\triangle BPS\sim \triangle CPA$, we find $\frac{9}{PC}=\frac{BS}{AC}.$ Therefore, $BS=\frac{9\cdot AC}{PC}$. Thus we find $AT\cdot BS=\left(\frac{7\cdot BC}{CQ}\right)\left(\frac{9\cdot AC}{PC}\right).$ But now we can substitute in our previously found values for $\frac{BC}{PC}$ and $\frac{AC}{CQ}$, finding $AT\cdot BS=63\cdot \frac{7}{4}\cdot \frac{5}{6}=\frac{21\cdot 35}{8}.$ Substituting this into our original expression from Ptolemy's Theorem, we find 

$\begin{align*}35+13ST&=\frac{21\cdot 35}{8}\\13ST&=\frac{13\cdot 35}{8}\\ST&=\frac{35}{8}.\end{align*}$

Thus the answer is $\boxed{43}$. 

2016 AIME II Problems/Problem 11

For positive integers $N$ and $k$, define $N$ to be $k$-nice if there exists a positive integer $a$ such that $a^{k}$ has exactly $N$ positive divisors. Find the number of positive integers less than $1000$ that are neither $7$-nice nor $8$-nice.

Solution

We claim that an integer $N$ is only $k$-nice if and only if $N \equiv 1 \pmod k$. By the number of divisors formula, the number of divisors of $\prod_{i=1}^n p_i^{a_i}$ is $\prod_{i=1}^n (a_i+1)$. Since all the $a_i$s are divisible by $k$ in a perfect $k$ power, the only if part of the claim follows. To show that all numbers $N \equiv 1 \pmod k$ are $k$-nice, write $N=bk+1$. Note that $2^{kb}$ has the desired number of factors and is a perfect kth power. By PIE, the number of positive integers less than $1000$ that are either $1 \pmod 7$ or $1\pmod 8$ is $143+125-18=250$, so the desired answer is $999-250=\boxed{749}$. 

2016 AIME II Problems/Problem 12

The figure below shows a ring made of six small sections which you are to paint on a wall. You have four paint colors available and you will paint each of the six sections a solid color. Find the number of ways you can choose to paint the sections if no two adjacent sections can be painted with the same color. 

<div align=center><img src="http://latex.artofproblemsolving.com/f/b/8/fb859ada9b08ae3472e7ba1166edc94baaacc34a.png" height="100px" /></div>

Solution 1

Choose a section to start coloring. Assume, WLOG, that this section is color $1$. We proceed coloring clockwise around the ring. Let $f(n,C)$ be the number of ways to color the first $n$ sections (proceeding clockwise) such that the last section has color $C$. In general (except for when we complete the coloring), we see that $f(n,C_i)=\sum_{j\ne i} f(n-1,C_j),$ i.e., $f(n,C_i)$ is equal to the number of colorings of $n-1$ sections that end in any color other than $C_i$. Using this, we can compute the values of $f(n,C)$ in the following table.

$\begin{array}{c|c|c|c|c } n&1 & 2 & 3& 4 \\ \hline 1& 1 & 0 & 0 & 0\\ 2 & 0 & 1 & 1 & 1 \\ 3& 3 & 2 & 2 & 2 \\ 4 & 6 & 7 & 7 & 7 \\ 5 & 21 & 20 & 20 & 20\\ 6& 0& 61 & 61 & 61\\ \end{array}$

Note that $f(6, 1)=0$ because then $2$ adjacent sections are both color $1$. We multiply this by $4$ to account for the fact that the initial section can be any color. Thus the desired answer is $(61+61+61) \cdot 4 = \boxed{732}$.

Solution 2

We use complementary counting. There are $4^6$ total colorings of the ring without restriction. To count the complement, we wish to count the number of colorings in which at least one set of adjacent sections are the same color. There are six possible sets of adjacent sections that could be the same color (think of these as borders). Call these $B_1,B_2,\dots,B_6$. Let $\mathcal{A}_1, \mathcal{A}_2,\dots,\mathcal{A}_6$ be the sets of colorings of the ring where the sections on both sides of $B_1,B_2,\dots,B_6$ are the same color. We wish to determine $|\mathcal{A}_1\cup\mathcal{A}_2\cup\cdots\cup\mathcal{A}_6|$. Note that all of these cases are symmetric, and in general, $|\mathcal{A}_i|=4^5$. There are $6$ such sets $\mathcal{A}_i$. Also, $|\mathcal{A}_i\cup\mathcal{A}_j|=4^4$, because we can only change colors at borders, so if we have two borders along which we cannot change colors, then there are four borders along which we have a choice of color. There are $\binom{6}{2}$ such pairs $\mathcal{A}_i\cup\mathcal{A}_j$. Similarly, $|\mathcal{A}_i\cup \mathcal{A}_j\cup \mathcal{A}_k|=4^3$, with $\binom{6}{3}$ such triples, and we see that the pattern will continue for 4-tuples and 5-tuples. For 6-tuples, however, these cases occur when there are no changes of color along the borders, i.e., each section has the same color. Clearly, there are four such possibilities.

Therefore, by PIE, $|\mathcal{A}_1\cup\mathcal{A}_2\cup\cdots\cup\mathcal{A}_6|=\binom{6}{1}\cdot 4^5-\binom{6}{2}\cdot 4^4+\binom{6}{3}\cdot 4^3-\binom{6}{4}\cdot 4^2+\binom{6}{5}\cdot 4^1-4.$ We wish to find the complement of this, or $4^6-\left(\binom{6}{1}\cdot 6^5-\binom{6}{2}\cdot 6^4+\binom{6}{3}\cdot 6^3-\binom{6}{4}\cdot 6^2+\binom{6}{5}\cdot 6^1-4\right).$ By the Binomial Theorem, this is $(4-1)^6+3=\boxed{732}$.

Solution 3

We use generating functions. Suppose that the colors are $0,1,2,3$. Then as we proceed around a valid coloring of the ring in the clockwise direction, we know that between two adjacent sections with colors $s_i$ and $s_{i+1}$, there exists a number $d_i\in\{1,2,3\}$ such that $s_{i+1}\equiv s_i+d_i\pmod{4}$. Therefore, we can represent each border between sections by the generating function $(x+x^2+x^3)$, where $x,x^2,x^3$ correspond to increasing the color number by $1,2,3\pmod4$, respectively. Thus the generating function that represents going through all six borders is $A(x)=(x+x^2+x^3)^6$, where the coefficient of $x^n$ represents the total number of colorings where the color numbers are increased by a total of $n$ as we proceed around the ring. But if we go through all six borders, we must return to the original section, which is already colored. Therefore, we wish to find the sum of the coefficients of $x^n$ in $A(x)$ with $n\equiv 0\pmod4$.

Now we note that if $P(x)=x^n$, then $P(x)+P(ix)+P(-x)+P(-ix)=\begin{cases}4x^n&\text{if } n\equiv0\pmod{4}\\0&\text{otherwise}.\end{cases}$ Therefore, the sum of the coefficients of $A(x)$ with powers congruent to $0\pmod 4$ is $\frac{A(1)+A(i)+A(-1)+A(-i)}{4}=\frac{3^6+(-1)^6+(-1)^6+(-1)^6}{4}=\frac{732}{4}.$ We multiply this by $4$ to account for the initial choice of color, so the answer is $\boxed{732}$.
Solution 4

Let $f(n)$ be the number of valid ways to color a ring with $n$ sections (which we call an $n$-ring), so the answer is given by $f(6)$. For $n=2$, we compute $f(n)=4\cdot3=12$. For $n \ge 3$, we can count the number of valid colorings as follows: choose one of the sections arbitrarily, which we may color in $4$ ways. Moving clockwise around the ring, there are $3$ ways to color each of the $n-1$ other sections. Therefore, we have $4 \cdot 3^{n-1}$ colorings of an $n$-ring.

However, note that the first and last sections could be the same color under this method. To count these invalid colorings, we see that by "merging" the first and last sections into one, we get a valid coloring of an $(n-1)$-ring. That is, there are $f(n-1)$ colorings of an $n$-ring in which the first and last sections have the same color. Thus, $f(n) = 4 \cdot 3^{n-1} - f(n-1)$ for all $n \ge 3$.

To compute the requested value $f(6)$, we repeatedly apply this formula: \begin{align*} f(6)&=4\cdot3^5-f(5)\\&=4\cdot3^5-4\cdot3^4+f(4)\\&=4\cdot3^5-4\cdot3^4+4\cdot3^3-f(3)\\&=4\cdot3^5-4\cdot3^4+4\cdot3^3-4\cdot3^2+f(2)\\&=4(3^5-3^4+3^3-3^2+3)\\&=4\cdot3\cdot\frac{3^5+1}{3+1}\\&=732.\end{align*} 

2016 AIME II Problems/Problem 13

Beatrix is going to place six rooks on a $6 \times 6$ chessboard where both the rows and columns are labeled $1$ to $6$; the rooks are placed so that no two rooks are in the same row or the same column. The $value$ of a square is the sum of its row number and column number. The $score$ of an arrangement of rooks is the least value of any occupied square.The average score over all valid configurations is $\frac{p}{q}$, where $p$ and $q$ are relatively prime positive integers. Find $p+q$.
Solution 1

We casework to find the number of ways to get each possible score. Note that the lowest possible score is $2$ and the highest possible score is $7$. Let the bijective function $f(x)=\{1,2,3,4,5,6\} \to \{1,2,3,4,5,6\}$ denote the row number of the rook for the corresponding column number.

For a score of $2$, we must have $f(1)=1$, and we can arrange the rest of the function however we want, so there are $5!=120$ ways.

For a score of $3$, we must have either $f(1)=2$ or $f(2)=1$, and we can arrange the rest of the rooks however we want, so by PIE the number of ways is $5!+5!-4!=216$.

For a score of $4$, we must have $f(1)=3$, $f(2)=2$, or $f(3)=1$. If $f(1)=3$, we just don't want $f(2)=1$, if $f(2)=2$, we don't want $f(1)=1$, or if $f(3)=1$, we don't want $f(1)=2$, otherwise we can arrange the function however we like. If at least $2$ of the values rooks have a value of $4$, we can arange the rest of the rooks however we like, so there are $3(5!-4!)-3(4!)+3!=222$ by PIE.

If the score is $5$, then we have either $f(4)=1$, $f(3)=2$, $f(2)=3$, or $f(1)=4$. If we have the first case, we don't want $f(2)=2$, $f(1)=2$, or $f(1)=3$, so by PIE the number of bad cases is $4!+4!-3!=42$. If we have the second case, then we don't want $f(2)=1$, $f(1)=1$, or $f(1)=3$, so similarly there are $42$ bad cases. Therefore, there are a total of $54$ good cases for each one. The number of ways to get $f(1)=1, f(1)=4$ is $4!-3!$ because we don't want $f(2)=2$, the number of ways to get $f(4)=1, f(2)=3$ is $4!-3!$ ways because we don't want $f(1)=2$, the number of ways to get $f(2)=3, f(3)=2$ is $4!-3!$ ways because we don't want $f(1)=1$, and the number of ways to get $f(1)=4, f(2)=3$ is $4!-3!$ ways because we don't want $f(3)=1$. The number of ways to get at least $3$ cases satisfied is $6! \cdot 4$ because we can arrange the remaining rooks however we like, and the number of ways to get all $4$ cases satisfied is $2!=2$ ways because we can arrange the remaining rooks however we like, so by PIE we have $54 \cdot 4-18 \cdot 6 + 6! \cdot 4-2!=130$ ways to get a score of $5$.

The only way to get a score of $7$ is to have all the rooks run on the antidiagonal. Therefore, the number of ways to get a sum of $6$ is $6!-120-216-222-130-1=31$.

Thus, the expected sum is $\dfrac{120 \cdot 2 + 216 \cdot 3 + 222 \cdot 4 + 130 \cdot 5 + 31 \cdot 6 + 1 \cdot 7}{720}= \dfrac{2619}{720}=\dfrac{291}{80}$, so the desired answer is $291+80=\boxed{371}$.

Solution 2

If the score is $n+1$, then one of the rooks must appear in the $n$th antidiagonal, and this is the first antidiagonal in which a rook can appear. To demonstrate this, we draw the following diagram when $n=4$. 

<div align=center><img src="http://latex.artofproblemsolving.com/7/d/f/7dfa52d6199e2d338bde3e10e41927ddc5253c08.png" height="200px" /></div>

We first count the number of arrangements that avoid the squares above the $n$th diagonal, and then we subtract from these the number of arrangements that avoid all squares above the $(n+1)$th diagonal. In the first column, there are $7-n$ rows in which to place the rook. In the second column, there is one more possible row, but one of the rows is used up by the rook in the first column, hence there are still $7-n$ places to place the rook. This pattern continues through the $n$th column, so there are $(7-n)^n$ ways to place the first $n$ rooks while avoiding the crossed out squares. We can similarly compute that there are $(6-n)^n$ ways to place the rooks in the first $n$ columns that avoid both the crossed out and shaded squares. Therefore, there are $(7-n)^n-(6-n)^n$ ways to place the first $n$ rooks such that at least one of them appears in a shaded square.

After this, there are $(6-n)$ rows and $(6-n)$ columns in which to place the remaining rooks, and we can do this in $(6-n)!$ ways. Hence the number of arrangements with a score of $n$ is $((7-n)^n-(6-n)^n)\cdot(6-n)!$. We also know that $n$ can range from from $1$ to $6$, so the average score is given by

$\frac{2\cdot(6^1-5^1)\cdot5!+3\cdot(5^2-4^2)\cdot4!+4\cdot(4^3-3^3)\cdot3!+5\cdot(3^4-2^4)\cdot 2!+6\cdot(2^5-1^5)\cdot 1!+7\cdot(1^6-0^6)\cdot 0!}{6!}=\frac{291}{80}.$ Thus the answer is $\boxed{371}$. 

2016 AIME II Problems/Problem 14

Equilateral $\triangle ABC$ has side length $600$. Points $P$ and $Q$ lie outside the plane of $\triangle ABC$ and are on opposite sides of the plane. Furthermore, $PA=PB=PC$, and $QA=QB=QC$, and the planes of $\triangle PAB$ and $\triangle QAB$ form a $120^{\circ}$ dihedral angle (the angle between the two planes). There is a point $O$ whose distance from each of $A,B,C,P,$ and $Q$ is $d$. Find $d$.

Solution

The inradius of $\triangle ABC$ is $100\sqrt 3$ and the circumradius is $200 \sqrt 3$. Now, consider the line perpendicular to plane $ABC$ through the circumcenter of $\triangle ABC$. Note that $P,Q,O$ must lie on that line to be equidistant from each of the triangle's vertices. Also, note that since $P, Q, O$ are collinear, and $OP=OQ$, we must have $O$ is the midpoint of $PQ$. Now, Let $K$ be the circumcenter of $\triangle ABC$, and $L$ be the foot of the altitude from $A$ to $BC$. We must have $\tan(\angle KLP+ \angle QLK)= \tan(120^{\circ})$. Setting $KP=x$ and $KQ=y$, assuming WLOG $x>y$, we must have $\tan(120^{\circ})=-\sqrt{3}=\dfrac{\dfrac{x+y}{100 \sqrt{3}}}{\dfrac{30000-xy}{30000}}$. Therefore, we must have $100(x+y)=xy-30000$. Also, we must have $\left(\dfrac{x+y}{2}\right)^{2}=\left(\dfrac{x-y}{2}\right)^{2}+120000$ by the Pythagorean theorem, so we have $xy=120000$, so substituting into the other equation we have $90000=100(x+y)$, or $x+y=900$. Since we want $\dfrac{x+y}{2}$, the desired answer is $\boxed{450}$. 

2016 AIME II Problems/Problem 15

For $1 \leq i \leq 215$ let $a_i = \dfrac{1}{2^{i}}$ and $a_{216} = \dfrac{1}{2^{215}}$. Let $x_1, x_2, ..., x_{216}$ be positive real numbers such that $\sum_{i=1}^{216} x_i=1$ and $\sum_{1 \leq i < j \leq 216} x_ix_j = \dfrac{107}{215} + \sum_{i=1}^{216} \dfrac{a_i x_i^{2}}{2(1-a_i)}$. The maximum possible value of $x_2=\dfrac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m+n$.

Solution

Note that 

$\begin{align*}\sum_{1 \leq i < j \leq 216} x_ix_j &= \frac12\left(\left(\sum_{i=1}^{216} x_i\right)^2-\sum_{i=1}^{216} x_i^2\right)\\&=\frac12\left(1-\sum x_i^2\right).\end{align*}$

Substituting this into the second equation and collecting $x_i^2$ terms, we find $\sum_{i=1}^{216}\frac{x_i^2}{1-a_i}=\frac{1}{215}.$ Conveniently, $\sum_{i=1}^{216} 1-a_i=215$ so we find $\left(\sum_{i=1}^{216} 1-a_i\right)\left(\sum_{i=1}^{216}\frac{x_i^2}{1-a_i}\right)=1=\left(\sum_{i=1}^{216} x_i\right)^2.$ This is the equality case of the Cauchy-Schwarz Inequality, so $x_i=c(1-a_i)$ for some constant $c$. Summing these equations and using the facts that $\sum_{i=1}^{216} x_i=1$ and $\sum_{i=1}^{216} 1-a_i=215$, we find $c=\frac{1}{215}$ and thus $x_2=c(1-a_2)=\frac{1}{215}\cdot \left(1-\frac{1}{4}\right)=\frac{3}{860}$. Hence the desired answer is $860+3=\boxed{863}$. 

2016 AIME II Answer Key
1. 108
2. 107
3. 265
4. 180
5. 182
6. 275
7. 840
8. 728
9. 262
10. 043
11. 749
12. 732
13. 371
14. 450
15. 863
