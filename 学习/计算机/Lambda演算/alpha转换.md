Alpha-变换规则表达的是，被绑定变量的名称是不重要的。比如说$\lambda x.x$和$\lambda y.y$是同一个函数。尽管如此，这条规则并非像它看起来这么简单，关于被绑定的变量能否由另一个替换有一系列的限制。

Alpha-变换规则陈述的是，若$V$与$W$均为变量，$E$是一个[lambda表达式](学习/计算机/Lambda演算/Lambda表达式.md)，同时$E[V:=W]$是指把表达式E中的所有的V的自由出现都替换为W，那么在W不是E中的一个自由出现，且如果W替换了V，W不会被E中的λ绑定的情况下，有
$$
\lambda V.E == \lambda W.E[V:=W]
$$
这条规则告诉我们，例如$\lambda x.(\lambda x.x) x$这样的表达式和$\lambda y.(\lambda x.x) y$是一样的。