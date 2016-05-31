---
layout: notes
---
Common configuration
============
{% highlight bash %}
## Linux settings for detection hardware device ##
#1 as root create file /etc/udev/rules.d/51-android.rules
#2 add string to created file
SUBSYSTEM=="usb", ATTR{idVendor}=="0bb4", MODE="0666", GROUP="plugdev"
#3 execute chmod a+r /etc/udev/rules.d/51-android.rules
{% endhighlight %}
