---
layout: post
locale: en
title: Rendering LaTeX in Javascript with KaTeX and Jekyll
category: Dev
tags:
- en
permalink: latex-equation-rendering-in-javascript-with-jekyll-and-katex
---
{% include katex_import.html %} 
... content of post here

<div class="equation" data-expr="\displaystyle P(x)=\frac{1}{\sigma\sqrt{2\pi}}e^{-\frac{(x-\mu)^2}{2\sigma ^2}}"></div>
.. more content
{% include katex_render.html %} 
