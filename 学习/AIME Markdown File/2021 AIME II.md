# 2021 AIME II Problems & Solutions

1. 2021 AIME II Problem 1

    Find the arithmetic mean of all the three-digit palindromes. (Recall that a palindrome is a number that reads the same forward and backward, such as $777$ or $383$.)

    求所有三位回文数的平均值.

    Solution 1

    Recall that the arithmetic mean of all the $n$ digit palindromes is just the average of the largest and smallest $n$ digit palindromes, and in this case the $2$ palindromes are $101$ and $999$ and $\frac{101+999}{2}=\boxed{550},$ which is the final answer.

    Solution 2

    For any palindrome $\overline{ABA},$ note that $\overline{ABA}$ is $100A + 10B + A = 101A + 10B.$ The average for $A$ is $5$ since $A$ can be any of $1, 2, 3, 4, 5, 6, 7, 8,$ or $9.$ The average for $B$ is $4.5$ since $B$ is either $0, 1, 2, 3, 4, 5, 6, 7, 8,$ or $9.$ Therefore, the answer is $505 + 45 = \boxed{550}.$

2. 2021 AIME II Problem 2

    Equilateral triangle $ABC$ has side length $840$. Point $D$ lies on the same side of line $BC$ as $A$ such that $\overline{BD} \perp \overline{BC}$. The line $\ell$ through $D$ parallel to line $BC$ intersects sides $\overline{AB}$ and $\overline{AC}$ at points $E$ and $F$, respectively. Point $G$ lies on $\ell$ such that $F$ is between $E$ and $G$, $\triangle AFG$ is isosceles (等腰三角形), and the ratio of the area of $\triangle AFG$ to the area of $\triangle BED$ is $8:9$. Find $AF$.

    ![](https://latex.artofproblemsolving.com/7/1/5/7154e7a32b3eda0a8ba22787a8b4d10ba8b8dc50.png)


    Solution (Area Formulas for Triangles)

    By angle chasing, we conclude that $\triangle AGF$ is a $30^\circ\text{-}30^\circ\text{-}120^\circ$ triangle, and $\triangle BED$ is a $30^\circ\text{-}60^\circ\text{-}90^\circ$ triangle.

    Let $AF=x.$ It follows that $FG=x$ and $EB=FC=840-x.$ By the side-length ratios in $\triangle BED,$ we have $DE=\frac{840-x}{2}$ and $DB=\frac{840-x}{2}\cdot\sqrt3.$

    Let the brackets denote areas. We have $[AFG]=\frac12\cdot AF\cdot FG\cdot\sin{\angle AFG}=\frac12\cdot x\cdot x\cdot\sin{120^\circ}=\frac12\cdot x^2\cdot\frac{\sqrt3}{2}$ and $[BED]=\frac12\cdot DE\cdot DB=\frac12\cdot\frac{840-x}{2}\cdot\left(\frac{840-x}{2}\cdot\sqrt3\right).$ 

    We set up and solve an equation for $x:\frac{[AFG]}{[BED]}=\frac89, \frac{\frac12\cdot x^2\cdot\frac{\sqrt3}{2}}{\frac12\cdot\frac{840-x}{2}\cdot\left(\frac{840-x}{2}\cdot\sqrt3\right)}=\frac89, \frac{2x^2}{(840-x)^2}=\frac89, \frac{x^2}{(840-x)^2}=\frac49.$
    
    Since $0<x<840,$ it is clear that $\frac{x}{840-x}>0.$ Therefore, we take the positive square root for both sides: $\frac{x}{840-x}=\frac23, x=\boxed{336}.$

3. 2021 AIME II Problem 3

    Find the number of permutations $x_1, x_2, x_3, x_4, x_5$ of numbers $1, 2, 3, 4, 5$ such that the sum of five products $x_1x_2x_3 + x_2x_3x_4 + x_3x_4x_5 + x_4x_5x_1 + x_5x_1x_2$ is divisible by $3.$

    Solution 

    Since $3$ is one of the numbers, a product with a $3$ in it is automatically divisible by $3,$ so WLOG $x_3=3,$ we will multiply by $5$ afterward since any of $x_1, x_2, \cdots, x_5$ would be $3,$ after some cancelation we see that now all we need to find is the number of ways that $x_5x_1(x_4+x_2)$ is divisible by $3,$ since $x_5x_1$ is never divisible by $3,$ now we just need to find the number of ways $x_4+x_2$ is divisible by $3.$ Note that $x_2$ and $x_4$ can be $(1, 2), (2, 1), (1, 5), (5, 1), (2, 4), (4, 2), (4, 5),$ or $(5, 4).$ We have $2$ ways to designate $x_1$ and $x_5$ for a total of $8 \cdot 2 = 16.$ So the desired answer is $16 \cdot 5=\boxed{080}.$

    Solution 2 (Cyclic Symmetry and Casework)

    The expression $x_1x_2x_3 + x_2x_3x_4 + x_3x_4x_5 + x_4x_5x_1 + x_5x_1x_2$ has cyclic symmetry. Without the loss of generality, let $x_1=3.$ It follows that $\{x_2,x_3,x_4,x_5\}=\{1,2,4,5\}.$ We have:

    $x_1x_2x_3 + x_2x_3x_4 + x_3x_4x_5 + x_4x_5x_1 + x_5x_1x_2\equiv x_2x_3x_4 + x_3x_4x_5\mod{3}.$

    $x_2,x_3,x_4,x_5$ are congruent to $1,2,1,2\mod{3}$ in some order.

    We construct the following table for the case $x_1=3,$ with all values in modulo $3:$
    
    |$\textbf{Row}$|$\boldsymbol{x_2}$|$\boldsymbol{x_3}$|$\boldsymbol{x_4}$|$\boldsymbol{x_5}$|$\boldsymbol{x_2x_3x_4 + x_3x_4x_5}$|$\textbf{Valid?}$|
    |:-:|:-:|:-:|:-:|:-:|:-:|:-:|
    |$1$|$1$|$1$|$2$|$2$|$0$|$\checkmark$|
    |$2$|$1$|$2$|$1$|$2$|$0$|$\checkmark$|
    |$3$|$1$|$2$|$2$|$1$|$2$|
    |$4$|$2$|$1$|$1$|$2$|$1$|
    |$5$|$2$|$1$|$2$|$1$|$0$|$\checkmark$|
    |$6$|$2$|$2$|$1$|$1$|$0$|$\checkmark$|
    
    For Row 1, $(x_2,x_3)$ can be either $(1,4)$ or $(4,1),$ and $(x_4,x_5)$ can be either $(2,5)$ or $(5,2).$ By the Multiplication Principle, Row 1 produces $2\cdot2=4$ permutations. Similarly, Rows 2, 5, and 6 each produce $4$ permutations.

    Together, we get $4\cdot4=16$ permutations for the case $x_1=3.$ By the cyclic symmetry, the cases $x_2=3, x_3=3, x_4=3,$ and $x_5=3$ all have the same count. Therefore, the total number of permutations $x_1, x_2, x_3, x_4, x_5$ is $16\cdot5=\boxed{080}.$

    Solution 3

    WLOG, let $x_{3} = 3$ So, the terms $x_{1}x_{2}x_{3}, x_{2}x_{3}x_{4},x_{3}x_{4}x_{5}$ are divisible by $3$.

    We are left with $x_{4}x_{5}x_{1}$ and $x_{5}x_{1}x_{2}$. We need $x_{4}x_{5}x_{1} + x_{5}x_{1}x_{2} \equiv 0 \mod{3}$. The only way is when They are $(+1,-1)$ or $(-1, +1) \mod{3}$.

    The numbers left with us are $1,2,4,5$ which are $+1,-1,+1,-1\mod{3}$ respectively.

    $+1$ (of $x_{4}x_{5}x_{1}$ or $x_{5}x_{1}x_{2}$) $= +1 \cdot +1 \cdot +1$ $\;\;\; OR \;\;\;+1$ (of $x_{4}x_{5}x_{1}$ or $x_{5}x_{1}x_{2}$) = $-1 \cdot -1 \cdot +1$.

    $-1$ (of $x_{4}x_{5}x_{1}$ or $x_{5}x_{1}x_{2}$) $= -1 \cdot -1 \cdot -1$ $\;\;\; OR \;\;\;-1$ (of $x_{4}x_{5}x_{1}$ or $x_{5}x_{1}x_{2}$) = $-1 \cdot +1 \cdot +1$

    But, as we have just two $+1's$ and two $-1's$. Hence, We will have to take $+1 = +1 \cdot -1 \cdot -1$ and $-1 = -1 \cdot +1 \cdot +1$. Among these two, we have a $+1$ and $-1$ in common, i.e. $(x_{5}, x_{1}) = (+1, -1) or (-1, +1)$ (because $x_{1}$ and $x_{5}$. are common in $x_{4}x_{5}x_{1}$ and $x_{5}x_{1}x_{2}$).

    So, $(x_{5}, x_{1}) \in {(1,2), (1,5), (4,2), (4,5), (2,1), (5,1), (2,4), (5,4)}$ i.e. $8$ values.

    For each value of $(x_{5}, x_{1})$ we get $2$ values for $(x_{2}, x_{4})$. Hence, in total, we have $8 \times 2 = 16$ ways.

    But any of the $x_{i} 's$ can be $3$. So, $16 \times 5 = \boxed{080}$.

4. 2021 AIME II Problem 4

    There are real numbers $a, b, c,$ and $d$ such that $-20$ is a root of $x^3 + ax + b$ and $-21$ is a root of $x^3 + cx^2 + d.$ These two polynomials share a complex root $m + \sqrt{n} \cdot i,$ where $m$ and $n$ are positive integers and $i = \sqrt{-1}.$ Find $m+n.$

    Solution 1 (Complex Conjugate Root Theorem and Vieta's Formulas)

    By the Complex Conjugate Root Theorem, the imaginary roots for each of $x^3+ax+b$ and $x^3+cx^2+d$ are complex conjugates. Let $z=m+\sqrt{n}\cdot i$ and $\overline{z}=m-\sqrt{n}\cdot i.$ It follows that the roots of $x^3+ax+b$ are $-20,z,\overline{z},$ and the roots of $x^3+cx^2+d$ are $-21,z,\overline{z}.$

    We know that $z + \overline{z}=2m, z\overline{z}=m^2+n.$
    
    Applying Vieta's Formulas to $x^3+ax+b,$ we have $-20+z+\overline{z}=0.$ Substituting $(1)$ into this equation, we get $m=10.$

    Applying Vieta's Formulas to $x^3+cx^2+d,$ we have $-21z-21\overline{z}+z\overline{z}=0,$ or $-21(z+\overline{z})+z\overline{z}=0.$ Substituting $(1)$ and $(2)$ into this equation, we get $n=320.$

    Finally, the answer is $m+n=\boxed{330}.$

    Solution 2 (Somewhat Bashy)

    $(-20)^{3} + (-20)a + b = 0$, hence $-20a + b = 8000$

    Also, $(-21)^{3} + c(-21)^{2} + d = 0$, hence $441c + d = 9261$

    $m + i \sqrt{n}$ satisfies both $\Rightarrow$ we can put it in both equations and equate to 0.

    In the first equation, we get $(m + i \sqrt{n})^{3} + a(m + i \sqrt{n}) + b = 0$ Simplifying this further, we get $(m^{3} - 3mn + am + b) + i(3m^{2} \sqrt{n} - n\sqrt{n} + a\sqrt{n}) = 0$

    Hence, $m^{3} - 3mn + am + b = 0$ and $3m^{2} \sqrt{n} - n\sqrt{n} + a\sqrt{n} = 0 \Rightarrow 3m^{2} - n + a = 0 \rightarrow (1)$

    In the second equation, we get $(m + i \sqrt{n})^{3} + c(m + i \sqrt{n})^{2} + d = 0$ Simplifying this further, we get $(m^{3} + m^{2}c - nc - 3mn + d) + i(3m^{2} \sqrt{n} - n\sqrt{n} + 2mc\sqrt{n}) = 0$

    Hence, $m^{3} + m^{2}c - nc - 3mn + d = 0$ and $3m^{2} \sqrt{n} - n\sqrt{n} + 2mc\sqrt{n} = 0 \Rightarrow 3m^{2} - n + 2mc = 0 \rightarrow (2)$

    Comparing (1) and (2),

    $a = 2mc$ and $am + b = m^{2}c - nc + d \rightarrow (3)$

    $b = 8000 + 20a \Rightarrow b = 40mc + 8000$; $d = 9261 - 441c$

    Substituting these in $(3)$ gives, $2m^{2}c + 8000 + 40mc = m^{2}c - nc + 9261 - 441c$

    This simplifies to $m^{2}c + nc + 40mc + 441c = 1261 \Rightarrow c(m^{2} + n + 40m + 441) = 1261$

    Hence, $c|1261 \Rightarrow c \in {1,13,97,1261}$


    Consider case of $c = 1$:

    $c = 1 \Rightarrow d = 8820$ Also, $a = 2m, b = 8000 + 40m$

    $am + b = m^{2} - n + 8820$ (because c = 1) Also, $m^{2} + n + 40m = 820 \rightarrow (4)$ Also, Equation (2) gives $3m^{2} - n + 2m = 0 \rightarrow (5)$

    Solving (4) and (5) simultaneously gives $m = 10, n = 320$

    [AIME can not have more than one answer, so we can stop here also 😁... Not suitable for Subjective exam]

    Hence, $m + n = 10 + 320 = \boxed{330}$

    Solution 3 (Heavy Calculation Solution)

    start off by applying vieta's and you will find that $a=m^2+n-40m$ $b=20m^2+20n$ $c=21-2m$ and $d=21m^2+21n$. After that, we have to use the fact that $-20$ and $-21$ are roots of $x^3+ax+b$ and $x^3+cx^2+d$, respectively. Since we know that if you substitute the root of a function back into the function, the output is zero, therefore $(-20)^3-20(a)+b=0$ and $(-21)^3+c*(-21)^2+d=0$ and you can set these two equations equal to each other while also substituting the values of $a$, $b$, $c$, and $d$ above to give you $21m^2+21n-1682m+8000=0$, then you can rearrange the equation into $21n = -21m^2+1682m-8000$. With this property, we know that $-21m^2+1682m-8000$ is divisible by $21$ therefore that means $1682m-8000=0(\mod 21)$ which results in $2m-20=0(\mod 21)$ which finally gives us m=10 mod 21. We can test the first obvious value of $m$ which is $10$ and we see that this works as we get $m=10$ and $n=320$. That means your answer will be $m + n = 10 + 320 = \boxed{330}$

    Solution 4 (Synthetic Division)

    We note that $x^3 + ax + b = (x+20)P(x)$ and $x^3 + cx^2 + d = (x+21)Q(x)$ for some polynomials $P(x)$ and $Q(x)$.

    Through synthetic division (ignoring the remainder as we can set $b$ and $d$ to constant values such that the remainder is zero), $P(x) = x^2 - 20x + (400+a)$, and $Q(x) = x^2 + (c-21)x + (441 - 21c)$.

    By the complex conjugate root theorem, we know that $P(x)$ and $Q(x)$ share the same roots, and they share the same leading coefficient, so $P(x) = Q(x)$.

    Therefore, $c-21 = -20$ and $441-21c = 400 + a$. Solving the system of equations, we get $a = 20$ and $c = 1$, so $P(x) = Q(x) = x^2 - 20x + 420$.

    Finally, by the quadratic formula, we have roots of $\frac{20 \pm \sqrt{400 - 1680}}{2} = 10 \pm \sqrt{320}i$, so our final answer is $10 + 320 = \boxed{330}$

    Solution 5 (Fast and Easy)

    We plug $-20$ into the equation obtaining $(-20)^3-20a+b$, likewise, plugging -21 into the second equation gets $(-21)^3+441c+d$.

    Both equations must have 3 solutions exactly, so the other two solutions must be $m + \sqrt{n} \cdot i$ and $m - \sqrt{n} \cdot i$.

    By Vieta's, the sum of the roots in the first equation is $0$, so $m$ must be $10$.

    Next, using Vieta's theorem on the second equation, you get: $x1x2+x2x3+x1x3 = 0$ However, since we know that the sum of the roots with complex numbers are 20, we can factor out the terms with -21, so $-21*(20)+(m^2+n)=0$

    Given that $m$ is $10$, then $n$ is equal to $320$.

    Therefore, the answer to the equation is $\boxed{330}$

5. 2021 AIME II Problem 5

    For positive real numbers $s$, let $\tau(s)$ denote the set of all obtuse (钝角) triangles that have area $s$ and two sides with lengths $4$ and $10$. The set of all $s$ for which $\tau(s)$ is nonempty, but all triangles in $\tau(s)$ are congruent (全等), is an interval $[a,b)$. Find $a^2+b^2$.

    Solution 1

    We start by defining a triangle. The two small sides MUST add to a larger sum than the long side. We are given $4$ and $10$ as the sides, so we know that the 3rd side is between $6$ and $14$, exclusive. We also have to consider the word OBTUSE triangles. That means that the two small sides squared is less than the 3rd side. So the triangles' sides are between $6$ and $\sqrt{84}$ exclusive, and the larger bound is between $\sqrt{116}$ and $14$, exclusive. The area of these triangles are from $0$ (straight line) to $2\sqrt{84}$ on the first "small bound" and the larger bound is between $0$ and $20$. $0 < s < 2\sqrt{84}$ is our first equation, and $0 < s < 20$ is our 2nd equation. Therefore, the area is between $\sqrt{336}$ and $\sqrt{400}$, so our final answer is $\boxed{736}$.

    Solution 2 (Inequalities and Casework)

    If $a,b,$ and $c$ are the side-lengths of an obtuse triangle with $a\leq b\leq c,$ then both of the following must be satisfied:

    Triangle Inequality Theorem: $a+b>c$

    Pythagorean Inequality Theorem: $a^2+b^2<c^2$

    For one such obtuse triangle, let $4,10,$ and $x$ be its side-lengths and $K$ be its area. We apply casework to its longest side:

    Case (1): The longest side has length $\boldsymbol{10,}$ so $\boldsymbol{0<x<10.}$

    By the Triangle Inequality Theorem, we have $4+x>10,$ from which $x>6.$

    By the Pythagorean Inequality Theorem, we have $4^2+x^2<10^2,$ from which $x<\sqrt{84}.$

    Taking the intersection produces $6<x<\sqrt{84}$ for this case.

    At $x=6,$ the obtuse triangle degenerates into a straight line with area $K=0;$ at $x=\sqrt{84},$ the obtuse triangle degenerates into a right triangle with area $K=\frac12\cdot4\cdot\sqrt{84}=2\sqrt{84}.$ Together, we obtain $0<K<2\sqrt{84},$ or $K\in\left(0,2\sqrt{84}\right).$

    Case (2): The longest side has length $\boldsymbol{x,}$ so $\boldsymbol{x\geq10.}$

    By the Triangle Inequality Theorem, we have $4+10>x,$ from which $x<14.$

    By the Pythagorean Inequality Theorem, we have $4^2+10^2<x^2,$ from which $x>\sqrt{116}.$

    Taking the intersection produces $\sqrt{116}<x<14$ for this case.

    At $x=14,$ the obtuse triangle degenerates into a straight line with area $K=0;$ at $x=\sqrt{116},$ the obtuse triangle degenerates into a right triangle with area $K=\frac12\cdot4\cdot10=20.$ Together, we obtain $0<K<20,$ or $K\in\left(0,20\right).$

    Answer

    It is possible for noncongruent obtuse triangles to have the same area. Therefore, all such positive real numbers $s$ are in exactly one of $\left(0,2\sqrt{84}\right)$ or $\left(0,20\right).$ Taking the exclusive disjunction, the set of all such $s$ is $[a,b)=\left(0,2\sqrt{84}\right)\oplus\left(0,20\right)=\left[2\sqrt{84},20\right),$ from which $a^2+b^2=\boxed{736}.$

    Solution 3

    We have the diagram below.

    ![](https://latex.artofproblemsolving.com/5/7/1/571ecf6555191cbe1ad6d671663ff7b4e5412789.png)
    We proceed by taking cases on the angles that can be obtuse, and finding the ranges for $s$ that they yield .

    If angle $\theta$ is obtuse, then we have that $s \in (0,20)$. This is because $s=20$ is attained at $\theta = 90^{\circ}$, and the area of the triangle is strictly decreasing as $\theta$ increases beyond $90^{\circ}$. This can be observed from $s=\frac{1}{2}(4)(10)\sin\theta$ by noting that $\sin\theta$ is decreasing in $\theta \in (90^{\circ},180^{\circ})$.

    Then, we note that if $\alpha$ is obtuse, we have $s \in (0,4\sqrt{21})$. This is because we get $x=\sqrt{10^2-4^2}=\sqrt{84}=2\sqrt{21}$ when $\alpha=90^{\circ}$, yileding $s=4\sqrt{21}$. Then, $s$ is decreasing as $\alpha$ increases by the same argument as before.

    $\angle{ACB}$ cannot be obtuse since $AC>AB$.

    Now we have the intervals $s \in (0,20)$ and $s \in (0,4\sqrt{21})$ for the cases where $\theta$ and $\alpha$ are obtuse, respectively. We are looking for the $s$ that are in exactly one of these intervals, and because $4\sqrt{21}<20$, the desired range is $s\in [4\sqrt{21},20)$ giving $a^2+b^2=\boxed{736}.$

    Solution 4

    Note: Archimedes15 Solution which I added an answer here are two cases. Either the $4$ and $10$ are around an obtuse angle or the $4$ and $10$ are around an acute triangle. If they are around the obtuse angle, the area of that triangle is $<20$ as we have $\frac{1}{2} \cdot 40 \cdot \sin{\alpha}$ and $\sin$ is at most $1$. Note that for the other case, the side lengths around the obtuse angle must be $4$ and $x$ where we have $16+x^2 < 100 \rightarrow x < 2\sqrt{21}$. Using the same logic as the other case, the area is at most $4\sqrt{21}$. Square and add $4\sqrt{21}$ and $20$ to get the right answer $a^2+b^2= \boxed{736}.$

    Solution 5 (Diagrams)

    For $\triangle ABC,$ we fix $AB=10$ and $BC=4.$ Without the loss of generality, we consider $C$ on only one side of $\overline{AB}.$

    As shown below, all locations for $C$ at which $\triangle ABC$ is an obtuse triangle are indicated in red, excluding the endpoints.

    The region in which $\angle B$ is obtuse is determined by construction.

    The region in which $\angle C$ is obtuse is determined by the corollaries of the Inscribed Angle Theorem.

    ![](https://wiki-images.artofproblemsolving.com//8/83/2021_AIME_II_Problem_5_%281%29.png)

    For any fixed value of $s,$ the height from $C$ is fixed. We need obtuse $\triangle ABC$ to be unique, so there can only be one possible location for $C.$ As shown below, all possible locations for $C$ are on minor arc $\widehat{C_1C_2},$ including $C_1$ but excluding $C_2.$

    ![](https://wiki-images.artofproblemsolving.com//7/76/2021_AIME_II_Problem_5_%282%29.png)

    Let the brackets denote areas:

    If $C=C_1,$ then $[ABC]$ will be minimized (attainable). By the same base and height and the Inscribed Angle Theorem, we have $[ABC]=[ABD]=\frac12\cdot BD\cdot DA=\frac12\cdot BD\cdot \sqrt{AB^2-BD^2}=\frac12\cdot 4\cdot \sqrt{10^2-4^2}=2\sqrt{84}.$

    If $C=C_2,$ then $[ABC]$ will be maximized (unattainable). For this right triangle, we have $[ABC]=\frac12\cdot AB\cdot BC=\frac12\cdot 10\cdot 4=20.$

    Finally, we get $s\in [a,b)=\left[2\sqrt{84},20\right),$ from which $a^2+b^2=\boxed{736}.$

6. 2021 AIME II Problem 6

    For any finite set $S$, let $|S|$ denote the number of elements in $S$. Find the number of ordered pairs $(A,B)$ such that $A$ and $B$ are (not necessarily distinct) subsets of $\{1,2,3,4,5\}$ that satisfy $|A| \cdot |B| = |A \cap B| \cdot |A \cup B|$ 

    Solution 1

    By PIE, $|A|+|B|-|A \cap B| = |A \cup B|$, and after some algebra you see that we need $A \subseteq B$ or $B \subseteq A$. WLOG $A\subseteq B$, then for each element there are $3$ possibilities, either it is in both $A$ and $B$, it is in $B$ but not $A$, or it is in neither $A$ nor $B$. This gives us $3^{5}$ possibilities, and we multiply by $2$ since it could have also been the other way around. Now we need to subtract the overlaps where $A=B$, and this case has $2^{5}=32$ ways that could happen. It is $32$ because each number could be in the subset or it could not be in the subset. So the final answer is $2\cdot 3^5 - 2^5 = \boxed{454}$.

    Solution 2

    We denote $\Omega = \left\{ 1 , 2 , 3 , 4 , 5 \right\}$. We denote $X = A \cap B$, $Y = A \backslash \left( A \cap B \right)$, $Z = B \backslash \left( A \cap B \right)$, $W = \Omega \backslash \left( A \cup B \right)$.

    Therefore, $X \cup Y \cup Z \cup W = \Omega$ and the intersection of any two out of sets $X$, $Y$, $Z$, $W$ is an empty set. Therefore, $\left( X , Y , Z , W \right)$ is a partition of $\Omega$.

    Following from our definition of $X$, $Y$, $Z$, we have $A \cup B = X \cup Y \cup Z$.

    Therefore, the equation $|A| \cdot |B| = |A \cap B| \cdot |A \cup B|$ can be equivalently written as

    $\left( | X | + | Y | \right) \left( | X | + | Z | \right) = | X | \left( | X | + | Y | + | Z | \right) .$ 

    This equality can be simplified as $| Y | \cdot | Z | = 0 .$

    Therefore, we have the following three cases:
    
    (1) $|Y| = 0$ and $|Z| \neq 0$,
    
    (2) $|Z| = 0$ and $|Y| \neq 0$,
    
    (3) $|Y| = |Z| = 0$.
    
    Next, we analyze each of these cases, separately.

    Case 1: $|Y| = 0$ and $|Z| \neq 0$.

    In this case, to count the number of solutions, we do the complementary counting.

    First, we count the number of solutions that satisfy $|Y| = 0$.

    Hence, each number in $\Omega$ falls into exactly one out of these three sets: $X$, $Z$, $W$. Following from the rule of product, the number of solutions is $3^5$.

    Second, we count the number of solutions that satisfy $|Y| = 0$ and $|Z| = 0$.

    Hence, each number in $\Omega$ falls into exactly one out of these two sets: $X$, $W$. Following from the rule of product, the number of solutions is $2^5$.

    Therefore, following from the complementary counting, the number of solutions in this case is equal to the number of solutions that satisfy $|Y| = 0$ minus the number of solutions that satisfy $|Y| = 0$ and $|Z| = 0$, i.e., $3^5 - 2^5$.

    Case 2: $|Z| = 0$ and $|Y| \neq 0$.

    This case is symmetric to Case 1. Therefore, the number of solutions in this case is the same as the number of solutions in Case 1, i.e., $3^5 - 2^5$.

    Case 3: $|Y| = 0$ and $|Z| = 0$.

    Recall that this is one part of our analysis in Case 1. Hence, the number solutions in this case is $2^5$.

    By putting all cases together, following from the rule of sum, the total number of solutions is equal to

    $\left( 3^5 - 2^5 \right) + \left( 3^5 - 2^5 \right) + 2^5 = 2 \cdot 3^5 - 2^5 = \boxed{454}.$

    Solution 3 (Principle of Inclusion-Exclusion)

    By the Principle of Inclusion-Exclusion (abbreviated as PIE), we have $|A \cup B|=|A|+|B|-|A \cap B|,$ from which we rewrite the given equation as $|A| \cdot |B| = |A \cap B| \cdot \left(|A|+|B|-|A \cap B|\right).$ Rearranging and applying Simon's Favorite Factoring Trick give $|A| \cdot |B| = |A \cap B|\cdot|A| + |A \cap B|\cdot|B| - |A \cap B|^2, |A| \cdot |B| - |A \cap B|\cdot|A| - |A \cap B|\cdot|B| = - |A \cap B|^2, \left(|A| - |A \cap B|\right)\cdot\left(|B| - |A \cap B|\right) =0$ from which at least one of the following is true:

    $|A|=|A \cap B|, |B|=|A \cap B|.$

    Let $|A \cap B|=k.$ For each value of $k\in\{0,1,2,3,4,5\},$ we will use PIE to count the ordered pairs $(A,B):$

    Suppose $|A|=k.$ There are $\binom{5}{k}$ ways to choose the elements for $A.$ These $k$ elements must also appear in $B.$ Next, there are $2^{5-k}$ ways to add any number of the remaining $5-k$ elements to $B$ (Each element has $2$ options: in $B$ or not in $B.$). There are $\binom{5}{k}2^{5-k}$ ordered pairs for $|A|=k.$ Similarly, there are $\binom{5}{k}2^{5-k}$ ordered pairs for $|B|=k.$

    To fix the overcount, we subtract the number of ordered pairs that are counted twice, in which $|A|=|B|=k.$ There are $\binom{5}{k}$ such ordered pairs.

    Therefore, there are $2\binom{5}{k}2^{5-k}-\binom{5}{k}$ ordered pairs for $|A \cap B|=k.$

    Two solutions follow from here:

    Solution 3.1 (Binomial Theorem)

    The answer is $\sum_{k=0}^{5}\left[2\binom{5}{k}2^{5-k}-\binom{5}{k}\right] = 2\sum_{k=0}^{5}\binom{5}{k}2^{5-k}-\sum_{k=0}^{5}\binom{5}{k} = 2(2+1)^5-(1+1)^5 = 2(243)-32 = \boxed{454}.$

    Solution 3.2(Bash)

    The answer is $\sum _ { k = 0 } ^ { 5 } \left[ 2 \binom{5}{k} { 2 ^ { 5 - k }} - \binom{5}{k} \right] = \left[ 2 ( 1 ) 2 ^ { 5 } - 1 \right] + \left[ 2 ( 5 ) 2 ^ { h } - 5 \right] + \left[ 2 ( 10 ) 2 ^ { 3 } - 10 \right] + \left[ 2 ( 10 ) 2 ^ { 2 } - 10 \right] + \left[ 2 ( 1 ) 2 ^ { 1 } - 5 \right] + \left[ 2 ( 1 ) 2 ^ { 0 } - 1 \right]=63+155+150+70+15+1= \boxed{454}.$

7. 2021 AIME II Problem 7

    Let $a, b, c,$ and $d$ be real numbers that satisfy the system of equations $a + b = -3, ab + bc + ca = -4, abc + bcd + cda + dab = 14, abcd = 30.$
    
    There exist relatively prime positive integers $m$ and $n$ such that $a^2 + b^2 + c^2 + d^2 = \frac{m}{n}.$ Find $m + n$.

    Solution 1

    From the fourth equation we get $d=\frac{30}{abc}.$ substitute this into the third equation and you get $abc + \frac{30(ab + bc + ca)}{abc} = abc - \frac{120}{abc} = 14$. Hence $(abc)^2 - 14(abc)-120 = 0$. Solving we get $abc = -6$ or $abc = 20$. From the first and second equation we get $ab + bc + ca = ab-3c = -4 \Longrightarrow ab = 3c-4$, if $abc=-6$, substituting we get $c(3c-4)=-6$. If you try solving this you see that this does not have real solutions in $c$, so $abc$ must be $20$. So $d=\frac{3}{2}$. Since $c(3c-4)=20$, $c=-2$ or $c=\frac{10}{3}$. If $c=\frac{10}{3}$, then the system $a+b=-3$ and $ab = 6$ does not give you real solutions. So $c=-2$. Since you already know $d=\frac{3}{2}$ and $c=-2$, so you can solve for $a$ and $b$ pretty easily and see that $a^{2}+b^{2}+c^{2}+d^{2}=\frac{141}{4}$. So the answer is $\boxed{145}$.

    Solution 2 (Easy Algebra)

    We can factor $d$ out of the last two equations. Therefore, it becomes $abc + d(bc + ac + ab) = 14$. Notice this is just $abc -4d$, since $bc + ac + ab = -4$. We now have $abc -4d = 14$ and $abcd = 30$. We then find $d$ in terms of $abc$, so $abc = \frac{30}{d}-4d=14$. We solve for $d$ and find that it is either $\frac32$ or $-5$. We can now try for these two values, and plug the rest into the equation. Thus, we have $33 + \frac94 = \frac{33 \cdot 4 + 9}{4} = \frac{132+9}{4} = \frac{141}{4}$. We have $141 + 4 = \boxed{145}$ and we're done.

    Solution 3 (Easy and Straightforward Algebra)

    $ab + bc + ca = -4$ can be rewritten as $ab + c(a+b) = -4$. Hence, $ab = 3c - 4$

    Rewriting $abc+bcd+cda+dab = 14$, we get $ab(c+d) + cd(a+b) = 14$. Substitute $ab = 3c - 4$ and solving, we get, $3c^{2} - 4c - 4d - 14 = 0$ call this Equation 1

    $abcd = 30$ gives $(3c-4)cd = 30$. So, $3c^{2}d - 4cd = 30$, which implies $d(3c^{2} - 4c) = 30$ or $3c^{2} - 4c = \frac{30}{d}$ call this equation 2.

    Substituting Eq 2 in Eq 1 gives, $\frac{30}{d} - 4d - 14 = 0$

    Solving this quadratic yields that $d \in {-5, \frac{3}{2}}$

    Now we just try these 2 cases.

    For $d = \frac{3}{2}$ substituting in Equation 1 gives a quadratic in $c$ which has roots $c \in \frac{10}{3}, -2$

    Again trying cases, by letting $c = -2$, we get $ab = 3c-4$, Hence $ab = -10$ We know that $a + b = -3$, Solving these we get $a = -5, b = 2$ or $a= 2, b = -5$ (doesn't matter due to symmetry in a,b)

    So, this case yields solutions $(a,b,c,d) = (-5, 2 , -2, \frac{3}{2})$

    Similarly trying other three cases, we get no more solutions, Hence this is the solution for $(a,b,c,d)$

    Finally, $a^{2} + b^{2} + c^{2} + d^{2} = 25 + 4 + 4 + \frac{9}{4} = \frac{141}{4} = \frac{m}{n}$

    So, $m + n = 141 + 4 = \boxed{145}$

    Solution 4 (Two Variables, Two Equations)

    For simplicity purposes, we number the given equations $(1),(2),(3),$ and $(4),$ in that order.

    Rearranging $(2)$ and solving for $c,$ we have $ab+(a+b)c=-4, ab-3c=-4, c=\frac{ab+4}{3}.$(5)
    
    Substituting $(5)$ into $(4)$ and solving for $d,$ we get $ab\left(\frac{ab+4}{3}\right)d=30, d=\frac{90}{ab(ab+4)}.$(6)
    
    Substituting $(5)$ and $(6)$ into $(3)$ and simplifying, we rewrite the left side of $(3)$ in terms of $a$ and $b$ only: 
    
    $$ab\left[\frac{ab+4}{3}\right] + b\left[\frac{ab+4}{3}\right]\left[\frac{90}{ab(ab+4)}\right] + \left[\frac{ab+4}{3}\right]\left[\frac{90}{ab(ab+4)}\right]a + \left[\frac{90}{ab(ab+4)}\right]ab = 14,$$
    
    $$ab\left[\frac{ab+4}{3}\right] + \underbrace{\frac{30}{a} + \frac{30}{b}}_{\text{Group them.}} + \frac{90}{ab+4} = 14, ab\left[\frac{ab+4}{3}\right] + \frac{30(a+b)}{ab} + \frac{90}{ab+4} = 14,$$
    
    $$ab\left[\frac{ab+4}{3}\right] + \underbrace{\frac{-90}{ab} + \frac{90}{ab+4}}_{\text{Group them.}} = 14, ab\left[\frac{ab+4}{3}\right] - \frac{360}{ab(ab+4)}=14.$$
    
    Let $t=ab(ab+4),$ from which $\frac{t}{3}-\frac{360}{t}=14.$ Multiplying both sides by $3t,$ rearranging, and factoring give $(t+18)(t-60)=0.$ Substituting back and completing the squares produce 
    
    $$\left[ab(ab+4)+18\right]\left[ab(ab+4)-60\right]=0, \left[(ab)^2+4ab+18\right]\left[(ab)^2+4ab-60\right]=0,$$
    
    $$\underbrace{\left[(ab+2)^2+14\right]}_{ab+2=\pm\sqrt{14}i\implies ab\not\in\mathbb R}\underbrace{\left[(ab+2)^2-64\right]}_{ab+2=\pm8}=0,$$
    
    $$ab=6,-10.$$
    
    If $ab=6,$ then combining this with $(1),$ we know that $a$ and $b$ are the solutions of the quadratic $x^2+3x+6=0.$ Since the discriminant is negative, neither $a$ nor $b$ is a real number.

    If $ab=-10,$ then combining this with $(1),$ we know that $a$ and $b$ are the solutions of the quadratic $x^2+3x-10=0,$ or $(x+5)(x-2)=0,$ from which $\{a,b\}=\{-5,2\}.$ Substituting $ab=-10$ into $(5)$ and $(6),$ we obtain $c=-2$ and $d=\frac32,$ respectively. Together, we have $a^2+b^2+c^2+d^2=\frac{141}{4},$ so the answer is $141+4=\boxed{145}.$

8. 2021 AIME II Problem 8

    An ant makes a sequence of moves on a cube where a move consists of walking from one vertex to an adjacent vertex along an edge of the cube. Initially the ant is at a vertex of the bottom face of the cube and chooses one of the three adjacent vertices to move to as its first move. For all moves after the first move, the ant does not return to its previous vertex, but chooses to move to one of the other two adjacent vertices. All choices are selected at random so that each of the possible moves is equally likely. The probability that after exactly $8$ moves that ant is at a vertex of the top face on the cube is $\frac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m + n.$

    Solution 1 (Recursion)

    For all positive integers $k,$ let

    * $N(k,\mathrm{BB})$ be the number of ways to make a sequence of exactly $k$ moves, where the last move is from the bottom face to the bottom face.
    
    * $N(k,\mathrm{BT})$ be the number of ways to make a sequence of exactly $k$ moves, where the last move is from the bottom face to the top face.
    
    * $N(k,\mathrm{TB})$ be the number of ways to make a sequence of exactly $k$ moves, where the last move is from the top face to the bottom face.
    
    * $N(k,\mathrm{TT})$ be the number of ways to make a sequence of exactly $k$ moves, where the last move is from the top face to the top face.
    
    The base case occurs at $k=1,$ from which $\left(N(1,\mathrm{BB}),N(1,\mathrm{BT}),N(1,\mathrm{TB}),N(1,\mathrm{TT})\right)=(2,1,0,0).$

    Suppose the ant makes exactly $k$ moves for some $k\geq2.$ We perform casework on its last move:

    (1)If its last move is from the bottom face to the bottom face, then its next move has

    * $1$ way to move from the bottom face to the bottom face.

    * $1$ way to move from the bottom face to the top face.

    (2)If its last move is from the bottom face to the top face, then its next move has $2$ ways to move from the top face to the top face.
    
    (3)If its last move is from the top face to the bottom face, then its next move has $2$ ways to move from the bottom face to the bottom face.
    (4)If its last move is from the top face to the top face, then its next move has
    
    * $1$ way to move from the top face to the bottom face.

    * $1$ way to move from the top face to the top face.

    Alternatively, this recursion argument is illustrated below, where each dashed arrow indicates $1$ way, and each solid arrow indicates $2$ ways:
    
    ![](https://latex.artofproblemsolving.com/f/d/0/fd0afc8df31f7cd55dacb05b9c7f12a9eb193230.png)
    
    Therefore, we have the following relationships:
    
    $$N(1,\mathrm{BB})=2,$$
    
    $$N(1,\mathrm{BT})=1,$$
    
    $$N(1,\mathrm{TB})=0,$$
    
    $$N(1,\mathrm{TT})=0,$$
    
    $$N(k+1,\mathrm{BB})=N(k,\mathrm{BB})+2\cdot N(k,\mathrm{TB}),$$
    
    $$N(k+1,\mathrm{BT})=N(k,\mathrm{BB}),$$
    
    $$N(k+1,\mathrm{TB})=N(k,\mathrm{TT}),$$
    
    $$N(k+1,\mathrm{TT})=N(k,\mathrm{TT})+2\cdot N(k,\mathrm{BT}).$$
    
    Using these equations, we recursively fill out the table below:
    
    |$k$|$1$|$2$|$3$|$4$|$5$|$6$|$7$|$8$|
    |:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
    |N($k$,BB)|$2$|$2$|$2$|$6$|$18$|$38$|$66$|$118$|
    |N($k$,BT)|$1$|$2$|$2$|$2$|$6$|$18$|$38$|$66$|
    |N($k$,TB)|$0$|$0$|$2$|$6$|$10$|$14$|$26$|$62$|
    |N($k$,TT)|$0$|$2$|$6$|$10$|$14$|$26$|$62$|$138$|
    |Total|$3$|$6$|$12$|$24$|$48$|$96$|$192$|$384$|
    
    By the Multiplication Principle, there are $3\cdot2^{k-1}$ ways to make exactly $k$ moves. So, we must get $N(k,\mathrm{BB})+N(k,\mathrm{BT})+N(k,\mathrm{TB})+N(k,\mathrm{TT})=3\cdot2^{k-1}$ for all values of $k.$

    Finally, the requested probability is $\frac{N(8,\mathrm{BT})+N(8,\mathrm{TT})}{N(8,\mathrm{BB})+N(8,\mathrm{BT})+N(8,\mathrm{TB})+N(8,\mathrm{TT})}=\frac{66+138}{118+66+62+138}=\frac{204}{384}=\frac{17}{32},$ from which the answer is $17+32=\boxed{049}.$

    Solution 2 (Casework)

    On each move, we can either stay on the level we previously were (stay on the bottom/top) or switch levels (go from top to bottom and vise versa). Since we start on the bottom, ending on the top means that we will have to switch an odd number of times; since we cannot switch twice in a row, over an eight-move period we can either make one or three switches. Furthermore, once we switch to a level we can choose one of two directions of traveling on that level: clockwise or counterclockwise (since we can't go back to our previous move, our first move on the level after switching determines our direction).

    Case 1: one switch. Our one switch can either happen at the start/end of our moves, or in the middle. There are $4 + 24 = 28$ ways to do this, outlined below.
    Subcase 1: switch happens at ends. If our first move is a switch, then there are two ways to determine the direction we travel along the top layer. Multiply by 2 to count for symmetry (last move is a switch) so this case yields $2^2 = 4$ possibilities.
    Subcase 2: switch happens in the middle. There are six places for the switch to happen; the switch breaks the sequences of moves into two chains, with each having 2 ways to choose their direction of travel. This case yields $6 \cdot 2^2 = 24$ possibilities.

    Case 2: three switches. Either two, one, or none of our switches occur at the start/end of our moves. There are $16 + 96 + 64 = 176$ ways to do this, outlined below. (Keep in mind we can't have two switches in a row.)
    Subcase 1: start and end with a switch. Since our third switch can't be in moves 2 or 7, there are four ways to place our switch, breaking our sequence into two chains. This case yields $4 \cdot 2^2 = 16$ possibilities.
    Subcase 2: one of our switches is at the start/end. WLOG our first move is a switch; moves 2 and 8 cannot be switches. We can choose 2 from any of the remaining 5 moves to be switches, but we have to subtract the 4 illegal cases where the two switches are in a row (3-4, 4-5, 5-6, 6-7). These three switches break our sequence into three chains; accounting for symmetry this case yields $2\left(\binom{5}{2} - 4\right) \cdot 2^3 = 96$ possibilities.

    Subcase 3: all our switches are in the middle. We choose 3 from any of the 6 middle moves to be our switches, but have to subtract the cases where at least two of them are in a row. If at least two switches are in a row, there are five places for the group of 2 and four places for the third switch; however this overcounts the case where all three are in a row, which has 4 possibilities. These three switches break our sequence into four chains, so this case yields $\left(\binom{6}{3} - 5 \cdot 4 + 4\right) \cdot 2^4 = 64$ possibilities.
    Our probability is then $\frac{176 + 28}{3 \cdot 2^7} = \frac{17}{32} \iff \boxed{049}$.

    Solution 3 (Faster Recursion)

    Define $n_i$ to be the probability that after $i$ moves, the ant ends up on the level it started on (assuming the first move is a normal move where the ant can stay or move to the opposite level with half chance each). Note $n_0 = 1$ and $n_1 = \frac{1}{2}$.

    Consider when the ant has $i$ moves left. It can either stay on its current level with $\frac{1}{2}$ chance and $i - 1$ moves left, or travel to the opposite level with $\frac{1}{2}$ chance and $i - 2$ moves left (it must spend another move as it cannot travel back immediately). We then have the recurrence $n_i = \frac{1}{2}n_{i - 1} + \frac{1}{2}(1 - n_{i - 2})$ 
    On the first move, the ant can stay on the bottom level with $\frac{2}{3}$ chance and $7$ moves left. Or, it can move to the top level with $\frac{1}{3}$ chance and $6$ moves left (it has to spend one on the top as it can not return immediately). So the requested probability is $P = \frac{2}{3}(1 - n_7) + \frac{1}{3}n_6$.

    Computing $n_i$ we get $n_6 = \frac{33}{64}$ and $n_7 = \frac{59}{128}$, resulting in $P = \frac{17}{32} \iff \boxed{049}$.

9. 2021 AIME II Problem 9

    Find the number of ordered pairs $(m, n)$ such that $m$ and $n$ are positive integers in the set $\{1, 2, ..., 30\}$ and the greatest common divisor of $2^m + 1$ and $2^n - 1$ is not $1$.

    Solution 1

    This solution refers to the Remarks section.

    By the Euclidean Algorithm, we have $\gcd\left(2^m+1,2^m-1\right)=\gcd\left(2,2^m-1\right)=1.$ We are given that $\gcd\left(2^m+1,2^n-1\right)>1.$ Multiplying both sides by $\gcd\left(2^m-1,2^n-1\right)$ gives
    
    $$\gcd\left(2^m+1,2^n-1\right)\cdot\gcd\left(2^m-1,2^n-1\right) > \gcd\left(2^m-1,2^n-1\right)$$
    
    $$\gcd\left(\left(2^m+1\right)\left(2^m-1\right),2^n-1\right) > \gcd\left(2^m-1,2^n-1\right)$$
    
    $$\gcd\left(2^{2m}-1,2^n-1\right) > \gcd\left(2^m-1,2^n-1\right)$$
    
    $$2^{\gcd(2m,n)}-1 > 2^{\gcd(m,n)}-1$$
    
    $$\gcd(2m,n) > \gcd(m,n)$$
    
    which implies that $n$ must have more factors of $2$ than $m$ does.

    We construct the following table for the first $30$ positive integers: 
    
    |of Factors of $2$|Numbers|Count|
    |:-:|:-:|:-:|
    |$0$|$1,3,5,7,9,11,13,15,17,19,21,23,25,27,29$|$15$|
    |$1$|$2,6,10,14,18,22,26,30 $|$8$|
    |$2$|$4,12,20,28 $|$4$|
    |$3$|$8,24$|$2$|
    |$4$|$16$|$1$|
    
    To count the ordered pairs $(m,n),$ we perform casework on the number of factors of $2$ that $m$ has:

    * If $m$ has $0$ factors of $2,$ then $m$ has $15$ options and $n$ has $8+4+2+1=15$ options. So, this case has $15\cdot15=225$ ordered pairs.

    * If $m$ has $1$ factor of $2,$ then $m$ has $8$ options and $n$ has $4+2+1=7$ options. So, this case has $8\cdot7=56$ ordered pairs.
    
    * If $m$ has $2$ factors of $2,$ then $m$ has $4$ options and $n$ has $2+1=3$ options. So, this case has $4\cdot3=12$ ordered pairs.
    * If $m$ has $3$ factors of $2,$ then $m$ has $2$ options and $n$ has $1$ option. So, this case has $2\cdot1=2$ ordered pairs.
    
    Together, the answer is $225+56+12+2=\boxed{295}.$

    Solution 2

    We make use of the (Olympiad Number Theory) lemma that $\gcd(2^a-1,2^b-1)=2^{\gcd(a,b)}-1$.

    Noting $\gcd(2^m+1,2^m-1)=\gcd(2^m+1,2)=1$, we have (by difference of squares
    
    $$\gcd(2^m+1,2^n-1) \neq 1 \iff \gcd(2^{2m}-1,2^n-1) \neq \gcd(2^m-1,2^n-1)$$
    
    $$\iff 2^{\gcd(2m,n)}-1 \neq 2^{\gcd(m,n)}-1$$
    
    $$\iff \gcd(2m,n) \neq \gcd(m,n)$$
    
    $$\iff \nu_2(m) < \nu_2(n).$$
    
    It is now easy to calculate the answer (with casework on $\nu_2(m)$) as $15 \cdot 15+8 \cdot 7+4 \cdot 3+2 \cdot 1=\boxed{295}$.

    Remarks

    Claim 1 (Olympiad Number Theory Lemma)
    
    If $\boldsymbol{u,a,}$ and $\boldsymbol{b}$ are positive integers such that $\boldsymbol{u\geq2,}$ then $\boldsymbol{\gcd\left(u^a-1,u^b-1\right)=u^{\gcd(a,b)}-1.}$

    There are two proofs to this claim, as shown below.

    Claim 1 Proof 1 (Euclidean Algorithm)

    If $a=b,$ then $\gcd(a,b)=a=b,$ from which the claim is clearly true.

    Otherwise, let $a>b$ without the loss of generality. For all integers $p$ and $q$ such that $p>q>0,$ the Euclidean Algorithm states that $$\gcd(p,q)=\gcd(p-q,q)=\cdots=\gcd(p\mod q,q).$$
    
    We apply this result repeatedly to reduce the larger number:
    
    $$\gcd\left(u^a-1,u^b-1\right)=\gcd\left(u^a-1-u^{a-b}\left(u^b-1\right),u^b-1\right)=\gcd\left(u^{a-b}-1,u^b-1\right).$$
    
    Continuing, we have
    
    $$\gcd\left(u^a-1,u^b-1\right)=\cdots =\gcd\left(u^{a-b}-1,u^b-1\right) =\cdots =\gcd\left(u^{\gcd(a,b)}-1,u^{\gcd(a,b)}-1\right) =u^{\gcd(a,b)}-1$$ from which the proof is complete.

    Claim 1 Proof 2 (Bézout's Identity)

    Let $d=\gcd\left(u^a-1,u^b-1\right).$ It follows that $u^a\equiv1\mod{d}$ and $u^b\equiv1\mod{d}.$

    By Bézout's Identity, there exist integers $x$ and $y$ such that $ax+by=\gcd(a,b),$ so $u^{\gcd(a,b)}=u^{ax+by}=\left(u^a\right)^x\left(u^b\right)^y\equiv1\mod{d},$ from which $u^{\gcd(a,b)}-1\equiv0\mod{d}.$ We know that $u^{\gcd(a,b)}-1\geq d.$

    Next, we notice that
    
    $$u^a-1=\left(u^{\gcd(a,b)}-1\right)\left(u^{a-\gcd{(a,b)}}+u^{a-2\gcd{(a,b)}}+u^{a-3\gcd{(a,b)}}+\cdots+1\right),$$
    
    $$u^b-1=\left(u^{\gcd(a,b)}-1\right)\left(u^{b-\gcd{(a,b)}}+u^{b-2\gcd{(a,b)}}+u^{b-3\gcd{(a,b)}}+\cdots+1\right).$$
    
    Since $u^{\gcd(a,b)}-1$ is a common divisor of $u^a-1$ and $u^b-1,$ we conclude that $u^{\gcd(a,b)}-1=d,$ from which the proof is complete.

    Claim 2 (GCD Property)

    If $\boldsymbol{r,s,}$ and $\boldsymbol{t}$ are positive integers such that $\boldsymbol{\gcd(r,s)=1,}$ then $\boldsymbol{\gcd(r,t)\cdot\gcd(s,t)=\gcd(rs,t).}$

    As $r$ and $s$ are relatively prime (have no prime divisors in common), this property is intuitive.

10. 2021 AIME II Problem 10

    Two spheres with radii $36$ and one sphere with radius $13$ are each externally tangent to the other two spheres and to two different planes $\mathcal{P}$ and $\mathcal{Q}$. The intersection of planes $\mathcal{P}$ and $\mathcal{Q}$ is the line $\ell$. The distance from line $\ell$ to the point where the sphere with radius $13$ is tangent to plane $\mathcal{P}$ is $\frac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m + n$.

    ![](https://wiki-images.artofproblemsolving.com//2/22/2021_AIME_II_Problem_10_Diagram.png)
    
    Remarks

    Let $\mathcal{R}$ be the plane that is determined by the centers of the spheres, as shown in the black points. Clearly, the side-lengths of the black dashed triangle are $49,49,$ and $72.$
    Plane $\mathcal{P}$ is tangent to the spheres at the green points. Therefore, the blue dashed line segments are the radii of the spheres.

    We can conclude all of the following:

    The four black dashed line segments all lie in plane $\mathcal{R}.$

    The four green solid line segments all lie in plane $\mathcal{P}.$

    By symmetry, since planes $\mathcal{P}$ and $\mathcal{Q}$ are reflections of each other about plane $\mathcal{R},$ the three planes are concurrent to line $\ell.$

    The red point is the foot of the perpendicular from the smallest sphere's center to line $\ell.$

    Solution 1 (Similar Triangles and Pythagorean Theorem)

    This solution refers to the Diagram section.

    As shown below, let $O_1,O_2,O_3$ be the centers of the spheres (where sphere $O_3$ is the smallest) and $T_1,T_2,T_3$ be their respective points of tangency to plane $\mathcal{P}.$ Suppose $A$ is the foot of the perpendicular from $O_3$ to line $\ell,$ so $\overleftrightarrow{O_3A}$ is the perpendicular bisector of $\overline{O_1O_2}.$ We wish to find $T_3A.$

    ![](https://wiki-images.artofproblemsolving.com//5/56/2021_AIME_II_Problem_10_Solution_1.png)
    
    As the intersection of planes $\mathcal{R}$ and $\mathcal{P}$ is line $\ell,$ we know that both $\overrightarrow{O_1O_3}$ and $\overrightarrow{T_1T_3}$ must intersect line $\ell.$ Furthermore, since $\overline{O_1T_1}\perp\mathcal{P}$ and $\overline{O_3T_3}\perp\mathcal{P},$ it follows that $\overline{O_1T_1}\parallel\overline{O_3T_3},$ from which $O_1,O_3,T_1,$ and $T_3$ are coplanar.

    Now, we focus on cross-sections $O_1O_3T_3T_1$ and $\mathcal{R}:$

    In the three-dimensional space, the intersection of a line and a plane must be exactly one of the empty set, a point, or a line.
    
    Clearly, cross-section $O_1O_3T_3T_1$ intersects line $\ell$ at exactly one point. Let the intersection of $\overrightarrow{O_1O_3}$ and line $\ell$ be $B,$ which must also be the intersection of $\overrightarrow{T_1T_3}$ and line $\ell.$

    In cross-section $\mathcal{R},$ let $C$ be the foot of the perpendicular from $O_1$ to line $\ell,$ and $D$ be the foot of the perpendicular from $O_3$ to $\overline{O_1C}.$
    
    We have the following diagram:

    ![](https://wiki-images.artofproblemsolving.com//d/db/2021_AIME_II_Problem_10_Solution_2.png)
    
    In cross-section $O_1O_3T_3T_1,$ since $\overline{O_1T_1}\parallel\overline{O_3T_3}$ as discussed, we obtain $\triangle O_1T_1B\sim\triangle O_3T_3B$ by AA, with the ratio of similitude $\frac{O_1T_1}{O_3T_3}=\frac{36}{13}.$ Therefore, we get $\frac{O_1B}{O_3B}=\frac{49+O_3B}{O_3B}=\frac{36}{13},$ or $O_3B=\frac{637}{23}.$

    In cross-section $\mathcal{R},$ note that $O_1O_3=49$ and $DO_3=\frac{O_1O_2}{2}=36.$ Applying the Pythagorean Theorem to right $\triangle O_1DO_3,$ we have $O_1D=\sqrt{1105}.$ Moreover, since $\ell\perp\overline{O_1C}$ and $\overline{DO_3}\perp\overline{O_1C},$ we obtain $\ell\parallel\overline{DO_3}$ so that $\triangle O_1CB\sim\triangle O_1DO_3$ by AA, with the ratio of similitude $\frac{O_1B}{O_1O_3}=\frac{49+\frac{637}{23}}{49}.$ Therefore, we get $\frac{O_1C}{O_1D}=\frac{\sqrt{1105}+DC}{\sqrt{1105}}=\frac{49+\frac{637}{23}}{49},$ or $DC=\frac{13\sqrt{1105}}{23}.$

    Finally, note that $\overline{O_3T_3}\perp\overline{T_3A}$ and $O_3T_3=13.$ Since $DCAO_3$ is a rectangle, we have $O_3A=DC=\frac{13\sqrt{1105}}{23}.$ Applying the Pythagorean Theorem to right $\triangle O_3T_3A$ gives $T_3A=\frac{312}{23},$ from which the answer is $312+23=\boxed{335}.$

    Solution 2

    The centers of the three spheres form a $49$-$49$-$72$ triangle. Consider the points at which the plane is tangent to the two bigger spheres; the line segment connecting these two points should be parallel to the $72$ side of this triangle. Take its midpoint $M$, which is $36$ away from the midpoint $A$ of the $72$ side, and connect these two midpoints.

    Now consider the point at which the plane is tangent to the small sphere, and connect $M$ with the small sphere's tangent point $B$. Extend $\overline{MB}$ through $B$ until it hits the ray from $A$ through the center of the small sphere (convince yourself that these two intersect). Call this intersection $D$, the center of the small sphere $C$, we want to find $BD$.

    By Pythagoras, $AC=\sqrt{49^2-36^2}=\sqrt{1105}$, and we know that $MA=36$ and $BC=13$. We know that $\overline{MA}$ and $\overline{BC}$ must be parallel, using ratios we realize that $CD=\frac{13}{23}\sqrt{1105}$. Apply the Pythagorean theorem to $\triangle BCD$, $BD=\frac{312}{23}$, so $312 + 23 = \boxed{335}$.

    Solution 3 (Coordinates Bash)

    Let's try to see some symmetry. We can use an $xyz$-plane to plot where the circles are. The two large spheres are externally tangent, so we'll make them at $(0,-36,0)$ and $(0,36,0)$. The center of the little sphere would be $(x,0,-23)$ since we don't know how much the little sphere will be "pushed" down. We use the 3D distance formula to find that $x=-24$ (since $x=24$ wouldn't make sense). Now, we draw a line through the little sphere and the origin. It also intersects $\ell$ because of the symmetry we created.

    $\ell$ lies on the plane too, so these two lines must intersect. The point at where it intersects is $(-24a,0,23a)$. We can use the distance formula again to find that $a=\frac{36}{23}$. Therefore, they intersect at $\left(-\frac{864}{23},0,-36\right)$. Since the little circle's $x$-coordinate is $-24$ and the intersection point's $x$-coordinate is $\frac{864}{23}$, we get $\frac{864}{23} - 24 = \frac{312}{23}$. Therefore, our answer to this problem is $312 + 23 =  \boxed{335}$.

11. 2021 AIME II PProblem 11

    A teacher was leading a class of four perfectly logical students. The teacher chose a set $S$ of four integers and gave a different number in $S$ to each student. Then the teacher announced to the class that the numbers in $S$ were four consecutive two-digit positive integers, that some number in $S$ was divisible by $6$, and a different number in $S$ was divisible by $7$. The teacher then asked if any of the students could deduce what $S$ is, but in unison, all of the students replied no.

    However, upon hearing that all four students replied no, each student was able to determine the elements of $S$. Find the sum of all possible values of the greatest element of $S$.

    Solution 1
    Note that $\operatorname{lcm}(6,7)=42.$ It is clear that $42\not\in S$ and $84\not\in S,$ otherwise the three other elements in $S$ are divisible by neither $6$ nor $7.$

    In the table below, the multiples of $6$ are colored in yellow, and the multiples of $7$ are colored in green. By the least common multiple, we obtain cycles: If $n$ is a possible maximum value of $S,$ then $n+42$ must be another possible maximum value of $S,$ and vice versa. By observations, we circle all possible maximum values of $S.$
    
    ![](https://latex.artofproblemsolving.com/7/5/2/7526c151bf536ffc8f506aef3d976912c7b69b68.png)

    From the second row of the table above, we perform casework on the possible maximum value of $S:$
    
    |Max Value|S|Valid?|Reasoning/Conclusion|
    |:-:|:-:|:-:|:-:|
    |$49$|$\{46,47,48,49\}$|            |The student who gets $46$ will reply yes.|
    |$50$|$\{47,48,49,50\}$|$\checkmark$|Another possibility is $S=\{89,90,91,92\}.$|
    |$51$|$\{48,49,50,51\}$|            |The student who gets $51$ will reply yes.$|
    |$56$|$\{53,54,55,56\}$|            |The student who gets $53$ will reply yes.|
    |$57$|$\{54,55,56,57\}$|            |The student who gets $57$ will reply yes.|
    |$63$|$\{60,61,62,63\}$|            |The students who get $60,61,62$ will reply yes.|
    |$66$|$\{63,64,65,66\}$|            |The students who get $64,65,66$ will reply yes.|
    |$72$|$\{69,70,71,72\}$|            |The student who gets $69$ will reply yes.|
    |$73$|$\{70,71,72,73\}$|            |The student who gets $73$ will reply yes.|
    |$78$|$\{75,76,77,78\}$|            |The student who gets $75$ will reply yes.|
    |$79$|$\{76,77,78,79\}$|$\checkmark$|Another possibility is $S=\{34,35,36,37\}$.|
    |$80$|$\{77,78,79,80\}$|            |The student who gets $80$ will reply yes.|
    
    Finally, all possibilities for $S$ are $\{34,35,36,37\}, \{47,48,49,50\}, \{76,77,78,79\},$ and $\{89,90,91,92\},$ from which the answer is $37+50+79+92=\boxed{258}.$

    Remarks

    * Alternatively, we can reconstruct the second table in this solution as follows, where Y and N denote the replies of "yes" and "no", respectively. Notice that this table has some kind of symmetry!
    
    ![](https://latex.artofproblemsolving.com/0/b/2/0b24061d6be4d8f6fbd2bf0f8c7401d73e989548.png)
    
    * As a confirmation, we can verify that each student will be able to deduce what $S$ is upon hearing the four replies of "no" in unison. For example, if $S=\{47,48,49,50\},$ then all students will know that no one gets $46$ or $51,$ otherwise that student will reply yes (as discussed). Therefore, all students will conclude that $S$ has only one possibility.

12. 2021 AIME II Problem 12

    A convex quadrilateral has area $30$ and side lengths $5, 6, 9,$ and $7,$ in that order. Denote by $\theta$ the measure of the acute angle formed by the diagonals of the quadrilateral. Then $\tan \theta$ can be written in the form $\frac{m}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m + n$.

    Solution 1 (Sines and Cosines)
    Since we are asked to find $\tan \theta$, we can find $\sin \theta$ and $\cos \theta$ separately and use their values to get $\tan \theta$. We can start by drawing a diagram. Let the vertices of the quadrilateral be $A$, $B$, $C$, and $D$. Let $AB = 5$, $BC = 6$, $CD = 9$, and $DA = 7$. Let $AX = a$, $BX = b$, $CX = c$, and $DX = d$. We know that $\theta$ is the acute angle formed between the intersection of the diagonals $AC$ and $BD$.
    
    ![](https://latex.artofproblemsolving.com/0/c/8/0c8fe8bfd35bddd29e1d986195ef4801b7bc8e63.png)
    
    We are given that the area of quadrilateral $ABCD$ is $30$. We can express this area using the areas of triangles $AXB$, $BXC$, $CXD$, and $DXA$. Since we want to find $\sin \theta$ and $\cos \theta$, we can represent these areas using $\sin \theta$ as follows:
    
    $30 =[ABCD] = [AXB] + [BXC] + [CXD] + [DXA] =\frac{1}{2} ab \sin (\angle AXB) + \frac{1}{2} bc \sin (\angle BXC) + \frac{1}{2} cd \sin (\angle CXD) + \frac{1}{2} da \sin (\angle AXD) =\frac{1}{2} ab \sin (180^\circ - \theta) + \frac{1}{2} bc \sin (\theta) + \frac{1}{2} cd \sin (180^\circ - \theta) + \frac{1}{2} da \sin (\theta).$
    
    We know that $\sin (180^\circ - \theta) = \sin \theta$. Therefore it follows that:
    
    $30 =\frac{1}{2} ab \sin (180^\circ - \theta) + \frac{1}{2} bc \sin (\theta) + \frac{1}{2} cd \sin (180^\circ - \theta) + \frac{1}{2} da \sin (\theta) =\frac{1}{2} ab \sin (\theta) + \frac{1}{2} bc \sin (\theta) + \frac{1}{2} cd \sin (\theta) + \frac{1}{2} da \sin (\theta) =\frac{1}{2}\sin\theta (ab + bc + cd + da).$
    
    From here we see that $\sin \theta = \frac{60}{ab + bc + cd + da}$. Now we need to find $\cos \theta$. Using the Law of Cosines on each of the four smaller triangles, we get following equations:
    
    $5^2 = a^2 + b^2 - 2ab\cos(180^\circ-\theta) = a^2 + b^2 + 2ab\cos \theta,$
    
    $6^2 = b^2 + c^2 - 2bc\cos \theta,$
    
    $9^2 = c^2 + d^2 + 2cd\cos \theta,$
    
    $7^2 = d^2 + a^2 - 2da\cos \theta.$
    
    $5^2 + 9^2 - 6^2 - 7^2 = 2ab \cos \theta + 2bc \cos \theta + 2cd \cos \theta + 2da \cos \theta,$
    
    $21 = 2\cos \theta (ab  + bc + cd + da).$
    
    From here we see that $\cos \theta = \frac{21/2}{ab + bc + cd + da}$.

    Since we have figured out $\sin \theta$ and $\cos \theta$, we can calculate $\tan \theta$:
    
    $\tan \theta = \frac{\sin \theta}{\cos \theta} = \frac {\frac{60}{ab + bc + cd + da}} {\frac{21/2}{ab + bc + cd + da}} = \frac{60}{21/2} = \frac{40}{7}.$
    
    Therefore our answer is $40 + 7 = \boxed{047}$.

    ~ Steven Chen (www.professorchenedu.com)

    Solution 2 (Right Triangles)

    In convex quadrilateral $ABCD,$ let $AB=5,BC=6,CD=9,$ and $DA=7.$ Let $A'$ and $C'$ be the feet of the perpendiculars from $A$ and $C,$ respectively, to $\overline{BD}.$ We obtain the following diagram:

    ![](https://abigtreenj.oss-cn-shanghai.aliyuncs.com/img/20210924212236.png)

    Let $BC'=p,C'E=q,EA'=r,A'D=s,AA'=h_1,$ and $CC'=h_2.$ We apply the Pythagorean Theorem to right triangles $\triangle ABA',\triangle BCC',\triangle CDC',$ and $\triangle DAA',$ respectively:
    
    $(p+q+r)^2 + h_1^2 = 5^2, p^2 + h_2^2 = 6^2, (q+r+s)^2 + h_2^2 = 9^2, s^2 + h_1^2 = 7^2.$
    
    Let the brackets denote areas. We get
    
    $[ABD]+[CBD]=[ABCD], (p+q+r+s)(h_1+h_2)=60.$
    
    We subtract $(2)+(4)$ from $(1)+(3):
    
    $(p+q+r)^2+(q+r+s)^2-p^2-s^2=21,$
    
    $\left[(p+q+r)^2-s^2\right]+\left[(q+r+s)^2-p^2\right]=21,$
    
    $(p+q+r+s)(p+q+r-s)+(p+q+r+s)(-p+q+r+s)=21,$
    
    $(p+q+r+s)(2q+2r)=21,$
    
    $2(p+q+r+s)(q+r)=21,$
    
    $(p+q+r+s)(q+r)=\frac{21}{2}.$
    
    From right triangles $\triangle AEA'$ and $\triangle CEC',$ we have $\tan\theta=\frac{h_1}{r}=\frac{h_2}{q}.$ It follows that
    
    $\tan\theta=\frac{h_1}{r}\implies h_1=r\tan\theta,$
    
    $\tan\theta=\frac{h_2}{q}\implies h_2=q\tan\theta.$
    
    Finally, we get:
    
    $\frac{h_1+h_2}{q+r}=\frac{40}{7},$
    
    $\frac{r\tan\theta+q\tan\theta}{q+r}=\frac{40}{7},$
    
    $\tan\theta=\frac{40}{7},$
    
    from which the answer is $40+7=\boxed{047}.$

    Solution 3

    Let $A$, $B$, $C$, $D$ be the vertices of the quadrilateral, $a$, $b$, $c$, $d$ be the lengths of the sides of $ABCD$, and $p$ and $q$ be the lengths of the diagonals of $ABCD$.
    
    By Bretschneider's formula, $30=\frac{1}{4} \cdot \sqrt{4p^2q^2-(b^2+d^2-a^2-c^2)^2}=\frac{1}{4} \cdot \sqrt{4p^2q^2-441}$. Thus, $pq=\sqrt{14841}$. Also, $[ABCD]=\frac{pq \cdot \sin{\theta}}{2}$; solving for $\sin{\theta}$ yields $\sin{\theta}=\frac{120}{\sqrt{14841}}$.
    
    Since $\theta$ is acute, $\cos{\theta}$ is positive, so $\cos{\theta}=\frac{21}{\sqrt{14841}}$.
    
    Solving for $\tan{\theta}$ yields $\tan{\theta}=\frac{\sin{\theta}}{\cos{\theta}}=\frac{40}{7}$, for a final answer of $\boxed{047}$.

13. 2021 AIME II Problem 13

    Find the least positive integer $n$ for which $2^n + 5^n - n$ is a multiple of $1000$.

    Solution 1

    $1000$ divides this expression iff $8$ and $125$ both divide it. It should be fairly obvious that $n \geq 3$; so we may break up the initial condition into two sub-conditions.

    (1) $5^n \equiv n \mod{8}$. Notice that the square of any odd integer is $1$ modulo $8$ (proof by plugging in $1^2,3^2,5^2,7^2$ into modulo $8$), so the LHS of this expression goes $5,1,5,1,\ldots$, while the RHS goes $1,2,3,4,5,6,7,8,1,\ldots$. The cycle length of the LHS is $2$, RHS is $8$, so the cycle length of the solution is $\operatorname{lcm}(2,8)=8$. Indeed, the $n$ that solve this congruence are exactly those such that $n \equiv 5 \mod{8}$.

    (2) $2^n \equiv n \mod{125}$. This is extremely computationally intensive if you try to calculate all $2^1,2^2,\ldots,2^{100} \mod{125}$, so instead, we take a divide-and-conquer approach. In order for this expression to be true, $2^n \equiv n \mod{5}$ is necessary; it shouldn't take too long for you to go through the $20$ possible LHS-RHS combinations and convince yourself that $n \equiv 3 \mod{20}$ or $n \equiv 17 \mod{20}$.

    With this in mind we consider $2^n \equiv n \mod{25}$. By the Generalized Fermat's Little Theorem, $2^{20} \equiv 1 \mod{25}$, but we already have $n$ modulo $20$. Our calculation is greatly simplified. The LHS cycle length is $20$, RHS cycle length is $25$, the lcm is $100$, in this step we need to test all the numbers between $1$ to $100$ that $n \equiv 3 \mod{20}$ or $n \equiv 17 \mod{20}$. In the case that $n \equiv 3 \mod{20}$, the RHS goes $3,23,43,63,83$, and we need $2^n \equiv n \equiv 2^3 \mod{25}$; clearly $n \equiv 83 \mod{100}$. In the case that $n \equiv 17 \mod{20}$, by a similar argument, $n \equiv 97 \mod{100}$.

    In the final step, we need to calculate $2^{97}$ and $2^{83}$ modulo $125$:

    Note that $2^{97}\equiv2^{-3}$; because $8\cdot47=376\equiv1\mod{125},$ we get $2^{97} \equiv 47\mod{125}$.

    Note that $2^{83}$ is $2^{-17}=2^{-16}\cdot2^{-1}$. We have
    
    $2^{-1} \equiv 63,$
    
    $2^{-2}\equiv 63^2=3969 \equiv -31,$
    
    $2^{-4}\equiv (-31)^2=961 \equiv -39,$
    
    $2^{-8}\equiv 1521 \equiv 21,$
    
    $2^{-16}\equiv441,$
    
    $2^{-17}\equiv 63 \cdot 441 \equiv 7\cdot(-31)=-217 \equiv 33.$
    
    This time, LHS cycle is $100$, RHS cycle is $125$, so we need to figure out $n$ modulo $500$. It should be $n \equiv 283,297 \mod{500}$.

    Put everything together. By the second subcondition, the only candidates less than $1000$ are $283,297,782,797$. Apply the first subcondition, $n=\boxed{797}$ is the desired answer.

    Solution 2

    We have that $2^n + 5^n \equiv n\mod{1000}$, or $2^n + 5^n \equiv n \mod{8}$ and $2^n + 5^n \equiv n \mod{125}$ by CRT. It is easy to check $n < 3$ don't work, so we have that $n \geq 3$. Then, $2^n \equiv 0 \mod{8}$ and $5^n \equiv 0 \mod{125}$, so we just have $5^n \equiv n \mod{8}$ and $2^n \equiv n \mod{125}$. Let us consider both of these congruences separately.

    First, we look at $5^n \equiv n \mod{8}$. By Euler's Totient Theorem (ETT), we have $5^4 \equiv 1 \mod{8}$, so $5^5 \equiv 5 \mod{8}$. On the RHS of the congruence, the possible values of $n$ are all nonnegative integers less than $8$ and on the RHS the only possible values are $5$ and $1$. However, for $5^n$ to be $1 \mod{8}$ we must have $n \equiv 0 \mod{4}$, a contradiction. So, the only possible values of $n$ are when $n \equiv 5 \mod{8} \implies n = 8k+5$.

    Now we look at $2^n \equiv n \mod{125}$. Plugging in $n = 8k+5$, we get $2^{8k+5} \equiv 8k+5 \mod{125} \implies 2^{8k} \cdot 32 \equiv 8k+5 \mod{125}$. Note, for $2^n \equiv n\mod{125}$ to be satisfied, we must have $2^n \equiv n \mod{5}$ and $2^n \equiv n\mod{25}$. Since $2^{8k} \equiv 1\mod{5}$ as $8k \equiv 0\mod{4}$, we have $2 \equiv -2k \mod{5} \implies k = 5m-1$. Then, $n = 8(5m-1) + 5 = 40m-3$. Now, we get $2^{40m-3} \equiv 40m-3 \mod{125}$. Using the fact that $2^n \equiv n\mod{25}$, we get $2^{-3} \equiv 15m-3 \mod{25}$. The inverse of $2$ modulo $25$ is obviously $13$, so $2^{-3} \equiv 13^3 \equiv 22 \mod{25}$, so $15m \equiv 0 \mod{25} \implies m = 5s$. Plugging in $m = 5s$, we get $n = 200s - 3$.

    Now, we are finally ready to plug $n$ into the congruence modulo $125$. Plugging in, we get $2^{200s-3} \equiv 200s - 3 \mod{125}$. By ETT, we get $2^{100} \equiv 1 \mod{125}$, so $2^{200s- 3} \equiv 2^{-3} \equiv 47 \mod{125}$. Then, $200s \equiv 50 \mod{125} \implies s \equiv 4 \mod{5} \implies s = 5y+4$. Plugging this in, we get $n = 200(5y+4) - 3 = 1000y+797$, implying the smallest value of $n$ is simply $\boxed{797}$.

    ~rocketsri

    Solution 3 (Chinese Remainder Theorem and Binomial Theorem)

    We wish to find the least positive integer $n$ for which $2^n+5^n-n\equiv0\mod{1000}.$ Rearranging gives $2^n+5^n\equiv n\mod{1000}.$
    
    Applying the Chinese Remainder Theorem, we get the following system of congruences:
    
    $2^n+5^n \equiv n \mod{8},$
    
    $2^n+5^n \equiv n \mod{125}.$
    
    It is clear that $n\geq3,$ from which we simplify to
    
    $5^n \equiv n \mod{8},$ (1)
    
    $2^n \equiv n \mod{125}.$ (2)
    
    We solve each congruence separately:

    * For $(1),$ quick inspections produce that $5^1,5^2,5^3,5^4,\ldots$ are congruent to $5,1,5,1,\ldots$ modulo $8,$ respectively. More generally, $5^n \equiv 5 \mod{8}$ if $n$ is odd, and $5^n \equiv 1 \mod{8}$ if $n$ is even. As $5^n$ is always odd (so is $n$), we must have $n\equiv5\mod{8}.$
    
        That is, $\boldsymbol{n=8r+5}$ for some nonnegative integer $\boldsymbol{r.}$

    * For $(2),$ we substitute the result from $(1)$ and simplify:

        $2^{8r+5}\equiv 8r+5\mod{125},$
    
        $\left(2^8\right)^r\cdot2^5 \equiv 8r+5\mod{125},$
        
        $256^r\cdot 32\equiv 8r+5\mod{125},$
        
        $6^r\cdot32\equiv 8r+5\mod{125}.$
        
        Note that $5^3=125$ and $6=5+1,$ so we apply the Binomial Theorem to the left side:
        
        $(5+1)^r\cdot32 \equiv 8r+5\mod{125},$
        
        $\left[\binom{r}{0}5^0+\binom{r}{1}5^1+\binom{r}{2}5^2+\underbrace{\binom{r}{3}5^3+\cdots+\binom{r}{r}5^r}_{0\mod{125}}\right]\cdot 32\equiv 8r+5\mod{125},$
        
        $\left[1+5r+\frac{25r(r-1)}{2}\right]\cdot32 \equiv 8r+5\mod{125},$
        
        $32+160r+400r(r-1)\equiv 8r+5\mod{125},$
        
        $32+35r+25r(r-1)\equiv 8r+5\mod{125},$
        
        $25r^2+2r+27\equiv 0 \mod{125}.$
        
        Since $125\equiv 0\mod{5},$ it follows that
        
        $25r^2+2r+27\equiv 0\mod{5},$
        
        $2r+2\equiv0\mod{5},$
        
        $r\equiv 4\mod{5}.$
        
        That is, $\boldsymbol{r=5s+4}$ for some nonnegative integer $\boldsymbol{s.}$
        
        Substituting this back into $(*),$ we get
        
        $25(5s+4)^2+2(5s+4)+27\equiv 0\mod{125},$
        
        $625s^2+1010s+435\equiv 0\mod{125},$
        
        $10s+60\equiv 0\mod{125},$
        
        $10(s+6)\equiv 0\mod{125}.$
    
        As $10(s+6)$ is a multiple of $125,$ it has at least three factors of $5.$ Since $10$ contributes one factor, $s+6$ contributes at least two factors, or $s+6$ must be a multiple of $25.$ Therefore, the least such nonnegative integer $s$ is $19.$

    Finally, combining the two results from above (bolded) generates the least such positive integer $n$ at $s=19:$
    
    $$n=8r+5 =8(5s+4)+5 =40s+37 =\boxed{797}.$$

    Solution 4 (Minimal Computation)

    $$5^n \equiv n \mod{8}$$
    
    Note that $5^n \equiv 5,1,5,1,...$ and $n \equiv 0,..,7$ so $n$ is periodic every $[2,8]=8$. Easy to check that only $n\equiv 5 \mod{8}$ satisfy. Let $n=8a+5$. Note that by binomial theorem,
    
    $$2^{8a+5}=32\cdot 2^{8a} \equiv 7(1+15)^{2a} \equiv 7(1+30a)\mod{25}$$
    
    So we have
    
    $$7(1+30a) \equiv 8a+5\mod{25} \implies 202a \equiv 23 \implies 2a \equiv 23+25 \implies a \equiv 24 \mod{25}.$$
    
    Combining $a\equiv 24\mod{25}$ with $n \equiv 5 \mod{8}$ gives that $n$ is in the form of $197+200k$, $n=197,397,597,797$. Note that since $\varphi(125)=100$
    
    $$2^{197+200k} \equiv 2^{197} \equiv 2^{-3} \equiv \underbrace{47}_{\text{Extended Euclidean Algorithm}}\mod{125}$$
    
    Easy to check that only $\boxed{797}\equiv 47\mod{125}.$

14. 2021 AIME II Problem 14

    Let $\Delta ABC$ be an acute triangle with circumcenter $O$ and centroid $G$. Let $X$ be the intersection of the line tangent to the circumcircle of $\Delta ABC$ at $A$ and the line perpendicular to $GO$ at $G$. Let $Y$ be the intersection of lines $XG$ and $BC$. Given that the measures of $\angle ABC, \angle BCA,$ and $\angle XOY$ are in the ratio $13 : 2 : 17,$ the degree measure of $\angle BAC$ can be written as $\frac{m}{n},$ where $m$ and $n$ are relatively prime positive integers. Find $m+n$.

    ![](https://wiki-images.artofproblemsolving.com//6/60/2021_AIME_II_Problem_14_Diagram.png)

    Solution 1

    In this solution, all angle measures are in degrees.

    Let $M$ be the midpoint of $\overline{BC}$ so that $\overline{OM}\perp\overline{BC}$ and $A,G,M$ are collinear. Let $\angle ABC=13k,\angle BCA=2k$ and $\angle XOY=17k.$

    Note that:

    * Since $\angle OGX = \angle OAX = 90,$ quadrilateral $OGAX$ is cyclic by the Converse of the Inscribed Angle Theorem.
    It follows that $\angle OAG = \angle OXG,$ as they share the same intercepted arc $\widehat{OG}.$

    * Since $\angle OGY = \angle OMY = 90,$ quadrilateral $OGYM$ is cyclic by the supplementary opposite angles.
    It follows that $\angle OMG = \angle OYG,$ as they share the same intercepted arc $\widehat{OG}.$

    Together, we conclude that $\triangle OAM \sim \triangle OXY$ by AA, so $\angle AOM = \angle XOY = 17k.$

    Next, we express $\angle BAC$ in terms of $k.$ By angle addition, we have
    
    $$\angle AOM = \angle AOB + \angle BOM = 2\angle BCA + \frac12\angle BOC = 2\angle BCA + \angle BAC.$$
    
    Substituting back gives $17k=2(2k)+\angle BAC,$ from which $\angle BAC=13k.$

    For the sum of the interior angles of $\triangle ABC,$ we get
    
    $$\angle ABC + \angle BCA + \angle BAC = 180, 13k+2k+13k = 180, k = \frac{45}{7}.$$
    
    Finally, we obtain $\angle BAC=13k=\frac{585}{7},$ from which the answer is $585+7=\boxed{592}.$

    Solution 2

    Let $M$ be the midpoint of $BC$. Because $\angle{OAX}=\angle{OGX}=\angle{OGY}=\angle{OMY}=90^o$, $AXOG$ and $OMYG$ are cyclic, so $O$ is the center of the spiral similarity sending $AM$ to $XY$, and $\angle{XOY}=\angle{AOM}$.
    
    Because $\angle{AOM}=2\angle{BCA}+\angle{BAC}$, it's easy to get $\frac{585}{7} \implies \boxed{592}$ from here.

    Solution 3 (Easy and Simple)

    Firstly, let $M$ be the midpoint of $BC$. Then, $\angle OMB = 90^o$. Now, note that since $\angle OGX = \angle XAO = 90^o$, quadrilateral $AGOX$ is cyclic. Also, because $\angle OMY + \angle OGY = 180^o$, $OMYG$ is also cyclic.
    
    Now, we define some variables: let $\alpha$ be the constant such that $\angle ABC = 13\alpha, \angle ACB = 2\alpha,$ and $\angle XOY = 17\alpha$.
    
    Also, let $\beta = \angle OMG = \angle OYG$ and $\theta = \angle OXG = \angle OAG$ (due to the fact that $AGOX$ and $OMYG$ are cyclic).
    
    Then,
    
    $$\angle XOY = 180 - \beta - \theta = 17\alpha \implies \beta + \theta = 180 - 17\alpha.$$
    
    Now, because $AX$ is tangent to the circumcircle at $A$, $\angle XAC = \angle CBA = 13\alpha$, and $\angle CAO = \angle OAX - \angle CAX = 90 - 13\alpha$.
    
    Finally, notice that $\angle AMB = \angle OMB - \angle OMG = 90 - \beta$.
    
    Then,
    
    $$\angle BAM = 180 - \angle ABC - \angle AMB = 180 - 13\alpha - (90 - \beta) = 90 + \beta - 13\alpha.$$
    
    Thus,
    
    $$\angle BAC = \angle BAM + \angle MAO + \angle OAC = 90 + \beta - 13\alpha + \theta + 90 - 13\alpha = 180 - 26\alpha + (\beta + \theta),$$
    
    and
    
    $$180 = \angle BAC + 13\alpha + 2\alpha = 180 - 11\alpha + \beta + \theta \implies \beta + \theta = 11\alpha.$$
    
    However, from before, $\beta+\theta = 180 - 17 \alpha$, so $11 \alpha = 180 - 17 \alpha \implies 180 = 28 \alpha \implies \alpha = \frac{180}{28}$. To finish the problem, we simply compute
    
    $$\angle BAC = 180 - 15 \alpha = 180 \cdot \left(1 - \frac{15}{28}\right) = 180 \cdot \frac{13}{28} = \frac{585}{7},$$
    
    so our final answer is $585+7=\boxed{592}$.

    Solution 4 (Guessing in the Last 3 Minutes, Unreliable)

    Notice that $\triangle ABC$ looks isosceles, so we assume it's isosceles. Then, let $\angle BAC = \angle ABC = 13x$ and $\angle BCA = 2x.$ Taking the sum of the angles in the triangle gives $28x=180,$ so $13x = \frac{13}{28} \cdot 180 = \frac{585}{7}$ so the answer is $\boxed{592}.$

15. 2021 AIME II Problem 15

    Let $f(n)$ and $g(n)$ be functions satisfying
    
    $$f(n) = \begin{cases}\sqrt{n}, \text{ if } \sqrt{n} \text{ is an integer},\\ 1 + f(n+1), \text{ otherwise}, \end{cases}$$
    
    and
    
    $$g(n) = \begin{cases}\sqrt{n}, \text{ if } \sqrt{n} \text{ is an integer}, \\ 2 + g(n+2) \text{ otherwise}, \end{cases}$$
    
    for positive integers $n$. Find the least positive integer $n$ such that $\frac{f(n)}{g(n)} = \frac{4}{7}$.

    Solution 1

    Consider what happens when we try to calculate $f(n)$ where n is not a square. If $k^2<n<(k+1)^2$ for (positive) integer k, recursively calculating the value of the function gives us $f(n)=(k+1)^2-n+f((k+1)^2)=k^2+3k+2-n$. Note that this formula also returns the correct value when $n=(k+1)^2$, but not when $n=k^2$. Thus $f(n)=k^2+3k+2-n$ for $k^2<n \leq (k+1)^2$.

    If $2 \mid (k+1)^2-n$, $g(n)$ returns the same value as $f(n)$. This is because the recursion once again stops at $(k+1)^2$. We seek a case in which $f(n)<g(n)$, so obviously this is not what we want. We want $(k+1)^2,n$ to have a different parity, or $n, k$ have the same parity. When this is the case, $g(n)$ instead returns $(k+2)^2-n+g((k+2)^2)=k^2+5k+6-n$.

    Write $7f(n)=4g(n)$, which simplifies to $3k^2+k-10=3n$. Notice that we want the $LHS$ expression to be divisible by 3; as a result, $k \equiv 1 \mod{3}$. We also want n to be strictly greater than $k^2$, so $k-10>0, k>10$. The LHS expression is always even (why?), so to ensure that k and n share the same parity, k should be even. Then the least k that satisfies these requirements is $k=16$, giving $n=258$.

    Indeed - if we check our answer, it works. Therefore, the answer is $\boxed{258}$.

    Solution 2 (Four Variables)

    We consider $f(n)$ and $g(n)$ separately:

    * $\boldsymbol{f(n)}$

        We restrict $n$ in which $k^2 < n\leq (k+1)^2$ for some positive integer $k,$ or 
        
        $$n=(k+1)^2-p \qquad (1)$$
        
        for some integer $p$ such that $0\leq p < 2k+1.$
    
        By recursion, we get
        
        $$f\left((k+1)^2\right)=k+1,$$
        
        $$f\left((k+1)^2-1\right)=k+2,$$
        
        $$f\left((k+1)^2-2\right)=k+3,$$
        
        $$\cdots$$

        $$f\left(\underbrace{(k+1)^2-p}_{n}\right)=k+p+1.\qquad (2)$$

    * $\boldsymbol{g(n)}$

        If $n$ and $(k+1)^2$ have the same parity, then we get $g(n)=f(n)$ by a similar process from $g\left((k+1)^2\right)=k+1.$ This contradicts the precondition $\frac{f(n)}{g(n)} = \frac{4}{7}.$ Therefore, $n$ and $(k+1)^2$ must have different parities, from which $n$ and $(k+2)^2$ must have the same parity.

        It follows that $k^2 < n < (k+2)^2,$ or
        
        $$n=(k+2)^2-2q \qquad (3)$$
        
        for some integer $q$ such that $0 < q < 2k+2.$ By recursion, we get
        
        $$g\left((k+2)^2\right)=k+2,$$
        
        $$g\left((k+2)^2-2\right)=k+4,$$
        
        $$g\left((k+2)^2-4\right)=k+6,$$
        
        $$\cdots$$
        
        $$g\left(\underbrace{(k+2)^2-2q}_{n}\right)=k+2q+2.\qquad (4)$$

    Answer

    By $(2)$ and $(4),$ we have
    
    $$\frac{f(n)}{g(n)}=\frac{k+p+1}{k+2q+2}=\frac{4}{7}. \qquad(5)$$
    
    From $(1)$ and $(3),$ equating the expressions for $n$ gives $(k+1)^2-p=(k+2)^2-2q.$ Solving for $k$ produces
    
    $$k=\frac{2q-p-3}{2}. \qquad (6)$$
    
    We substitute $(6)$ into $(5),$ then simplify, cross-multiply, and rearrange:
    
    $$\frac{\frac{2q-p-3}{2}+p+1}{\frac{2q-p-3}{2}+2q+2}=\frac{4}{7},$$
    
    $$\frac{p+2q-1}{-p+6q+1}=\frac{4}{7},$$
    
    $$11(p-1)=10q.\qquad (7)$$
    
    Since $\gcd(11,10)=1,$ we know that $p-1$ must be divisible by $10,$ and $q$ must be divisible by $11.$

    Recall that the restrictions on $(1)$ and $(2)$ are $0\leq p<2k+1$ and $0<q<2k+2,$ respectively. Substituting $(6)$ into either inequality gives $p+1<q.$ Combining all these results produces
    
    $$0 < p+1 < q < 2k+2. \qquad(8)$$
    
    To minimize $n$ in either $(1)$ or $(3),$ we minimize $k,$ so we minimize $p$ and $q$ in $(8).$ From $(6)$ and $(7),$ we construct the following table:
    
    |p|q|k|Satisfies (8)|
    |:-:|:-:|:-:|:-:|
    |$11$|$11$|$4$||
    |$21$|$22$|$10$||
    |$31$|$33$|$16$|$\checkmark$|
    |$\geq 41$|$\geq 44$|$\geq 22$|$\checkmark$|
    
    Finally, we have $(p,q,k)=(31,33,16).$ Substituting this result into either $(1)$ or $(3)$ generates $n=\boxed{258}.$

    Remark

    We can verify that
    
    $$\frac{f(258)}{g(258)}=\frac{1\cdot31+f(258+1\cdot31)}{2\cdot33+g(258+2\cdot33)}=\frac{31+\overbrace{f(289)}^{17}}{66+\underbrace{g(324)}_{18}}=\frac{48}{84}=\frac47.$$

    Solution 3

    Since $n$ isn't a perfect square, let $n=m^2+k$ with $0 < k < 2m+1$. If $m$ is odd, then $f(n)=g(n)$. If $m$ is even, then
    
    $$f(n)=(m+1)^2-(m^2+k)+(m+1)=3m+2-k,$$
    
    $$g(n)=(m+2)^2-(m^2+k)+(m+2)=5m+6-k,$$
    
    from which
    
    $$7(3m+2-k)=4(5m+6-k),$$
    
    $$m=3k+10.$$
    
    Since $m$ is even, $k$ is even. Since $k\neq 0$, the smallest $k$ is $2$ which produces the smallest $n$:
    
    $$k=2 \implies m=16 \implies n=16^2+2=\boxed{258}.$$

    Solution 4 (Quadratics With Two Variables)

    To begin, note that if $n$ is a perfect square, $f(n)=g(n)$, so $f(n)/g(n)=1$, so we must look at values of $n$ that are not perfect squares (what a surprise). First, let the distance between $n$ and the first perfect square greater than or equal to it be $k$, making the values of $f(n+k)$ and $g(n+k)$ integers. Using this notation, we see than $f(n)=k+f(n+k)$, giving us a formula for the numerator of our ratio. However, since the function of $g(n)$ does not add one to the previous inputs in the function until a perfect square is achieved, but adds values of two, we can not achieve the value of $\sqrt{n+k}$ in $g(n)$ unless $k$ is an even number. However, this is impossible, since if $k$ was an even number, $f(n)=g(n)$, giving a ratio of one. Thus, $k$ must be an odd number.

    Thus, since $k$ must be an odd number, regardless of whether $n$ is even or odd, to get an integral value in $g(n)$, we must get to the next perfect square after $n+k$. To make matters easier, let $z^2=n+k$. Thus, in $g(n)$, we want to achieve $(z+1)^2$.

    Expanding $(z+1)^2$ and substituting in the fact that $z=\sqrt{n+k}$ yields:

    $$(z+1)^2=z^2+2z+1=n+k+2\sqrt{n+k}+1.$$

    Thus, we must add the quantity $k+2z+1$ to $n$ to achieve a integral value in the function $g(n)$. Thus.

    $$g(n)=(k+2z+1)+\sqrt{n+k+2\sqrt{n+k}+1}.$$

    However, note that the quantity within the square root is just $(z+1)^2$, and so:

    $$g(n)=k+3z+2.$$

    Thus,
    
    $$\frac{f(n)}{g(n)}=\frac{k+z}{k+3z+2}.$$

    Since we want this quantity to equal $\frac{4}{7}$, we can set the above equation equal to this number and collect all the variables to one side to achieve

    $$3k-5z=8.$$

    Substituting back in that $z=\sqrt{n+k}$, and then separating variables and squaring yields that

    $$9k^2-73k+64=25n.$$

    Now, if we treat $n$ as a constant, we can use the quadratic formula in respect to $k$ to get an equation for $k$ in terms of $n$ (without all the squares). Doing so yields

    $$\frac{73\pm\sqrt{3025+900n}}{18}=k.$$

    Now, since $n$ and $k$ are integers, we want the quantity within the square root to be a perfect square. Note that $55^2=3025$. Thus, assume that the quantity within the root is equal to the perfect square, $m^2$. Thus, after using a difference of squares, we have\[(m-55)(m+55)=900n\]Since we want $n$ to be an integer, we know that the $LHS$ should be divisible by five, so, let's assume that we should have $m$ divisible by five. If so, the quantity $18k-73$ must be divisible by five, meaning that $k$ leaves a remainder of one when divided by 5 (if the reader knows LaTeX well enough to write this as a modulo argument, please go ahead and do so!).

    Thus, we see that to achieve integers $n$ and $k$ that could potentially satisfy the problem statement, we must try the values of $k$ congruent to one modulo five. However, if we recall a statement made earlier in the problem, we see that we can skip all even values of $k$ produced by this modulo argument.

    Also, note that $k=1,6$ won't work, as they are too small, and will give an erroneous value for $n$. After trying $k=11,21,31$, we see that $k=31$ will give a value of $m=485$, which yields $n=\boxed{258}$, which, if plugged in to for our equations of $f(n)$ and $g(n)$, will yield the desired ratio, and we're done.

    Side Note: If any part of this solution is not rigorous, or too vague, please label it in the margin with "needs proof". If you can prove it, please add a lemma to the solution doing so :)

    Solution 5 (Basic Substitutions)

    First of all, if $n$ is a perfect square, $f(n)=g(n)=\sqrt{n}$ and their quotient is $1.$ So, for the rest of this solution, assume $n$ is not a perfect square.

    Let $a^2$ be the smallest perfect square greater than $n$ and let $b^2$ be the smallest perfect square greater than $n$ with the same parity as $n,$ and note that either $b=a$ or $b=a+1.$ Notice that $(a-1)^2 < n < a^2.$

    With a bit of inspection, it becomes clear that $f(n) = a+(a^2-n)$ and $g(n) = b+(b^2-n).$

    If $a$ and $n$ have the same parity, we get $a=b$ so $f(n) = g(n)$ and their quotient is $1.$ So, for the rest of this solution, we let $a$ and $n$ have opposite parity. We have two cases to consider.

    Case 1: $n$ is odd and $a$ is even

    Here, we get $a=2k$ for some positive integer $k.$ Then, $b = 2k+1.$ We let $n = a^2-(2m+1)$ for some positive integer $m$ so $f(n) = 2k+2m+1$ and $g(n) = 2k+1+2m+1+4k+1 = 6k+2m+3.$

    We set $\frac{2k+2m+1}{6k+2m+3}=\frac{4}{7},$ cross multiply, and rearrange to get $6m-10k=5.$ Since $k$ and $m$ are integers, the LHS will always be even and the RHS will always be odd, and thus, this case yields no solutions.

    Case 2: $n$ is even and $a$ is odd

    Here, we get $a=2k+1$ for some positive ineger $k.$ Then, $b=2k+2.$ We let $n = a^2-(2m+1)$ for some positive integer $m$ so $f(n)=2k+1+2m+1=2k+2m+2$ and $g(n)=2k+2+2m+1+4k+3 = 6k+2m+6.$

    We set $\frac{2k+2m+2}{6k+2m+6} = \frac{4}{7},$ cross multiply, and rearrange to get $5k=3m-5,$ or $k=\frac{3}{5}m-1.$ Since $k$ and $m$ are integers, $m$ must be a multiple of $5.$ Some possible solutions for $(k,m)$ with the least $k$ and $m$ are $(2,5), (5,10), (8,15),$ and $(11,20).$

    We wish to minimize $k$ since $a=2k+1.$ One thing to keep in mind is the initial assumption $(a-1)^2 < n < a^2.$

    The pair $(2,5)$ gives $a=2(2)+1=5$ and $n=5^2-(2(5)+1)=14.$ But $4^2<14<5^2$ is clearly false, so we discard this case.

    The pair $(5,10)$ gives $a=2(5)+1=11$ and $n=11^2-(2(10)+1)=100,$ which is a perfect square and therefore can be discarded.

    The pair $(8,15)$ gives $a=2(8)+1=17$ and $n=17^2-(2(15)+1)=258,$ which is between $16^2$ and $17^2$ so it is our smallest solution.

    So, $\boxed{258}$ is the correct answer.