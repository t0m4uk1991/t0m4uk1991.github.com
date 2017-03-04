---
layout: post
prev: /notes
---

adb
============
{% highlight bash %}
adb devices                         # list all attached devices, place to get "device_name"
adb -s device_name install name.apk # install app to device over CLI
adb uninstall package.name          # uninstall app
adb shell                           # get access to android CLI
#to execute command on device use adb shell <command> like below
adb shell pm clear package.name     # clean app data
adb shell screencap -p /sdcard/.png # take screenshot
adb pull /sdcard/sh.png             # copy file from device to dev mashine
adb shell dumpsys activity services # list all services
adb shell getprop | grep gsm        # get system props and filter by criteria
adb shell svc                       # svc tool allow to control:
                                    # power    Control the power manager
                                    # data     Control mobile data connectivity
                                    # wifi     Control the Wi-Fi manager
                                    # usb      Control Usb state

adb shell screen                    # record screencast on device
            record /sdcard/temp.mp4 # for devices with Android 4.4 and older
            --size 1280x720
            --time-limit 5

{% endhighlight %}