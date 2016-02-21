---
layout: notes
---

Content
=================
  
  * [network tools](#networktools)
  * [awk](#awk)
  * [vim](#vim)

network tools
============


awk
============
{% highlight bash %}
#Standart awk usage:
awk '{ print $0}' filename # $0 all record, $1 first field of the record, etc
awk '{print NF}' # filename, NF - number of fields
#Also possible to use condition
awk 'NF==2 { print $1}' filename
#awk and regexp
awk '/REGEXP/{ print $0}'
awk '/REGEXP1/{ print $0} /REGEXP2/{ print $0}'
#delimiters in awk
awk -F , '{ print $0}'
awk -F '[,!]' '{print $0}'
#possible to specify record separator(RS) and field separator (FS)
awk 'BEGIN{RS="!";FS=","} {print $1}'
#also it possible to  specify Output Record Separator(ORS) 
#                         and Output Field Separator(OFS)
awk 'BEGIN{ORS="\n";OFS="\t";FS=","} {print $1, $2, $3}'
#To execute awk program in file use
awk -f program-filename data-filename
#awk program file has .awk extension
#example of awk program:
BEGIN{
    print "begin"
}
{
    print "some ", $0, " text"
}               
END{
    print "end"
}
awk '{variable="hello world"; print variable}'
awk '{a=1; b=2; print a+b}'
#examples
#choose all records where first field starts with capital letter "U"
awk '$1 ~ /U/{print $0}' filename
awk '{ if (NF>4){print "There are more then 10 entries", $0} 
       else { print "There less then 10 entries", $0}}' filename
#awk string manipulation function
index,match,length,substr,sub,gsub,split
#awk math functions
int,rand,sqrt,sin,cos,atan2,log,exp
{% endhighlight %}>

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
{% endhighlight %}
