---
layout: notes
---

This is my lisp notes from Structure and Interpretation of Computer Programs*

{% highlight lisp %}
;base syntax constructions

(define x 10)

(define (sqr x)(* x x)) 
    
(define (abs x)
 (cond (( > x 0) x) 
  (( = x 0) 0)
  (( < x 0) (- x)))
 )

(define (abs x) 
 (cond ((< x 0) (- x))
  (else x)))

(define (abs x)
 (if (< x 0)
  (- x) 
  x))

(and true true)
(or true false)
(not false)

{% endhighlight %}

*the best programming book that I had ever read
