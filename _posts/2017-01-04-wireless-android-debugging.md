---
title: Old android, new andorid and ADB
layout: post
prev: /home
category: android
---
I'm not a big fan of wireless technologies, but they often made our life little
bit more simple. Especially, when help to get rid of cable mess if you have a lot
of devices connected to the computer. Recently I had interested in android development,
so I face with the problems like broken or forgotten cables. So I looking for a way
to get rid of this mess. After some time of googling, I found useful feature of
android debugger bridge [1] called wireless debugging. Enabling this feature required
few simple steps (assume that Android SDK is installed, adb is in <android_sdk>/platform-tools /):

1) Restarts the adbd daemon to listening on the specified TCP port
adb tcpip <port_number>

2) Connect to device by command
adb connect <device_ip>:<port_number>

Device's ip can be found in Settings menu on device UI or by executing following command
adb shell netcfg

To switch back to usb debugging just execute:
adb usb

On rooted device the same remote debugging can bee enabled by executing follow commands
su
setprop service.adb.tcp.port 5555
stop adbd
start adbd[2]

To use this feature in proper way computer and android device should be in the
same networking. To be more independent from external circumstance I set up wifi
acess point on my laptop, so I have ability setup remote debugging quickly.











When you start an adb client, the client first checks whether there is an adb
server process already running. If there isn't, it starts the server process.
When the server starts, it binds to local TCP port 5037 and listens for commands
sent from adb clients—all adb clients use port 5037 to communicate with the adb server.

The server then sets up connections to all running emulator/device instances.
It locates emulator/device instances by scanning odd-numbered ports in the range
5555 to 5585, the range used by emulators/devices. Where the server finds an adb
daemon, it sets up a connection to that port. Note that each emulator/device instance
acquires a pair of sequential ports — an even-numbered port for console connections
and an odd-numbered port for adb connections. For example:

Emulator 1, console: 5554
Emulator 1, adb: 5555
Emulator 2, console: 5556
Emulator 2, adb: 5557
and so on...

As shown, the emulator instance connected to adb on port 5555 is the same as the
instance whose console listens on port 5554.

Once the server has set up connections to all emulator instances, you can use adb
commands to access those instances. Because the server manages connections to
emulator/device instances and handles commands from multiple adb clients, you can
control any emulator/device instance from any client (or from a script).



[1]https://developer.android.com/studio/command-line/adb.html
[2]https://forum.xda-developers.com/showthread.php?t=623828&page=3
