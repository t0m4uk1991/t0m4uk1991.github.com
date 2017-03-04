---
layout: post
prev: /notes
---
administration
============
{% highlight bash %}

#system
uptime                    #show average load in 1, 5 and 15 minutes
lsb_release -a            #get distro data
                          #install new alternative for firefox (just example)
sudo update-alternatives --install
                         /usr/bin/firefox firefox
                         /home/user/Downloads/path_ff/firefox 4
                          #replace single line in file
sed -i '/OLD_TEXT/c\NEW_TEXT' /tmp/filename
                          #kill process by port number
sudo kill $(sudo lsof -t -i:<port>)
sudo -u <user_name> bash  #run command as other user

#fs
df -h                      #show Disk_Free_space in human readable format
df -i                      #allow to detect out of inodes problem
du -h                      #show files size in human readable format
mount -o remount,rw /home  #to fix read only fs problem

#cdrom
                            #create iso from CD/DVD disk
dd if=/dev/cdrom of=/output/path/forYourImage.iso bs=2k

                            #write iso image to pendrive
sudo dd bs=4M if=[ur .iso] of=/dev/sd[that 1 letter]

sudo lshw -c disk           #get some information about disks
mkfs.vfat /dev/sdb1         #format disk to FAT32
{% endhighlight %}