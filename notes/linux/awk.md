---
layout: post
prev: /notes
---
awk
============
{% highlight bash %}
                            #Standart awk usage:
awk '{ print $0}' filename  #$0 all record, $1 first field of the record, etc
awk '{print NF}'            #filename, NF - number of fields

                            #conditions
awk 'NF==2 { print $1}' filename

                            #awk and regexp
awk '/REGEXP/{ print $0}'
awk '/REGEXP1/{ print $0} /REGEXP2/{ print $0}'

                            #delimiters in awk
awk -F , '{ print $0}'
awk -F '[,!]' '{print $0}'

                            #record separator(RS) and
                            #field separator (FS)
awk 'BEGIN{RS="!";FS=","} {print $1}'

                            #Output Record Separator(ORS) and
                            #Output Field Separator(OFS)
awk 'BEGIN{ORS="\n";OFS="\t";FS=","} {print $1, $2, $3}'

                            #execute awk program from file
awk -f program-filename.awk data-filename

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

                            #Examples

                            #select all records where first field
                            #starts with capital letter "U"
awk '$1 ~ /U/{print $0}' filename

                            #ifelse  clause
awk '{ if (NF>4){print "There are more then 10 entries", $0}
       else { print "There less then 10 entries", $0}}' filename
{% endhighlight %}
