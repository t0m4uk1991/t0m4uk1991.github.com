---
layout: post
prev: /notes
---
vim
============
{% highlight bash %}
- w      to the next word
- W      to the next space-separated word
- b / e  to the begin/end of the current word. (B / E for space separated only)
- gg / G jump to the begin/end of the file.
- { / }  jump to next paragraph.
- I      insert at the begin.
- A      append to end.
- o / O  open a new line after/before the current.
- v / V  visual mode (to select text!)
- cW     change till end of word
- 3cW    change 3 words
- ci(    change text between ( .. )
- 4dd    delete 4 lines
- 3x     delete 3 characters.
- r      replace one character (e.g. rd replaces the current char with d).
- ~      changes case.
- J      joins two lines
- Ctrl+A / Ctrl+X increments/decrements a number.
- ==     fix line indent
- :1,$d  delete all lines
- :%s/foo/bar/g       replace foo with bar
- :%s/\<foo\>/bar/gc  replace all exact ocurrence of foo with bar and ask confirmation
- :1,$d    vs cat /dev/null > filename #delete all lines
- :%s/foo/bar/g #replace foo with bar
- :%s/\<foo\>/bar/gc #replace all exact ocurrence of foo with bar and ask confirmation

#type 'm' in NerdTree vim plagin to modify current node
{% endhighlight %}