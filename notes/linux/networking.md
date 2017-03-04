---
layout: post
prev: /notes
---
networking
============
{% highlight bash %}

#network
sudo netstat -tlpn         #get info about ports and connected demons PIDs
                           #port forwarding
ssh -L <local port>:<remote computer>:<remote port> <user>@<remote ip>
ssh user@host <command>    #execute command on remote host
scp username@server:/path/to/file /local/path #copy file from remote to local
scp /local/path username@server:/path/to/file #copy file from local to remote
nslookup or dig            #to get DNS data
sudo netstat -tlpn         #get PIDs and related open ports

#generate ssh keys
1) ssh-keygen -t rsa -b 4096 -C "your_email@example.com"  #genearate key
2) eval "$(ssh-agent -s)"                      #start ssh agent
3) ssh-add ~/.ssh/id_rsa                       #add key to ssh agent
4) xclip -sel clip < ~/.ssh/id_rsa.pub         #copy of public key to clipboard
{% endhighlight %}