---
layout: notes
---

Content
=================
  
  * [usefull tools and commands](#usefulltoolsandcommands)
  * [awk](#awk)
  * [vim](#vim)

usefull tools and commands
============
{% highlight bash %}

#system
uptime                    #show average load in 1, 5 and 15 minutes
top or htop               #to show more detail info about processes
ps aux                    #get list of processes 
lsb_release -a            #get distro data

#fs
df -h                      #show Disk_Free_space in human readable format
df -i                      #allow to detect out of inodes problem
du -h                      #show files size in human readable format
mount -o remount,rw /home  #to fix read only fs problem

#network
nslookup or dig #to get DNS data
sudo netstat -tlpn #get info about ports and connected demons PIDs 
ssh -L <local port>:<remote computer>:<remote port> <user>@<remote ip> #port forwarding
scp username@server:/path/to/file /local/path #copy file from remote to local
scp /local/path username@server:/path/to/file #copy file from local to remote
nslookup or dig            #to get DNS data
sudo netstat -tlpn         #get PIDs and related open ports

#cdrom
                            #create iso from CD/DVD disk
dd if=/dev/cdrom of=/output/path/forYourImage.iso bs=2k
                            
                            #write iso image to pendrive
sudo dd bs=4M if=[ur .iso] of=/dev/sd[that 1 letter]

sudo lshw -c disk           #get some information about disks
mkfs.vfat /dev/sdb1         #format disk to FAT32
{% endhighlight %}

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

#type 'm' in NerdTree vim plagin to modify current node
{% endhighlight %}
