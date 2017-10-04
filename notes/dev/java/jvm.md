---
layout: post
prev: /notes
---
jvm
============
{% highlight bash %}
-server       #Turns Java VM features specific to server applications, such
              #as sofisticated JIT compiler. Though this option is implicitely
              #enabled for x64 virtual machines, it still makes sence to use it
              #as according to documentation behaviour maybe changed in the future.

-Xms<heap size>[g|m|k] -Xmx<heap size>[g|m|k]
              #To avoid dynamic heap resizing and lags, which could be caused by
              #this,we explicitely specify minimal and maximal heap size. Thus
              #Java VM will spend time only once to commit on all the heap.

-XX:PermSize=<perm gen size>[g|m|k] -XX:MaxPermSize=<perm gen size>[g|m|k]
              #Logic for permanent generation is the same as for overall heap —
              #predefine sizing to avoid costs of dynamic changes. Not applicable
              #to Java >= 8.

-XX:MaxMetaspaceSize=<metaspace size>[g|m|k]
              #By default Metaspace in Java VM 8 is not limited, though for the
              #sake of system stability it makes sense to limit it with some
              #finite value.

-Xmn<young size>[g|m|k]
              #Explicitely define size of the young generation.

-XX:SurvivorRatio=<ratio>
              #Ratio which determines size of the survivour space relatively to
              #eden size.

-XX:+UseConcMarkSweepGC -XX:+CMSParallelRemarkEnabled
              #As response time is critical for server application concurrent
              #collector feets best for Web applications. Unfortunatelly G1
              #is still not production ready, thus we have to use Concurrent
              #Mark-Sweep collector.

-XX:+UseCMSInitiatingOccupancyOnly -XX:CMSInitiatingOccupancyFraction=<percent>
              #By default CMS GC uses set of heuristic rules to trigger garbage
              #collection. This makes GC less predictable and usually tends to
              #delay collection until old generation is almost occupied.
              #Initiating it in advance allows to complete collection before old
              #generation is full and thus avoid Full GC (i.e. stop-the-world pause).
              #-XX:+UseCMSInitiatingOccupancyOnly prevent usage of GC heuristics.
              #-XX:CMSInitiatingOccupancyFraction informs Java VM when CMS should
              #be triggered. Basically, it allows to create a buffer in heap,
              #which can be filled with data, while CMS is working. Thus percent
              #should be back calculated from the speed in which memory is consumed
              #in old generation during production load. Such percent should be
              #chosen carefully, if it will be small — CMS will work to often,
              #if it will be to big — CMS will be triggered too late and concurrent
              #mode failure may occur. Usually -XX:CMSInitiatingOccupancyFraction
              #should be at the level 70, which mean that application should
              #utilize less that 70% of old generation.

-XX:+ScavengeBeforeFullGC -XX:+CMSScavengeBeforeRemark
              #Instructs garbage collector to collect young generation before doing
              #Full GC or CMS remark phase and as a result improvde their
              #performance due to absence of need to check references between
              #young generation and tenured.
{% endhighlight %}

lot of fun with JVM options also avaliable [here][1],[here][2] and [here][3]

[1]: http://www.oracle.com/technetwork/java/javase/tech/vmoptions-jsp-140102.html
[2]: http://www.oracle.com/technetwork/java/javase/gc-tuning-6-140523.html
[3]: http://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/index.html


http://blog.sokolenko.me/2014/11/javavm-options-production.html
http://www.java67.com/2016/08/10-jvm-options-for-java-production-application.html
http://www.maknesium.de/21-most-important-java-8-vm-options-for-servers
https://zeroturnaround.com/rebellabs/jvm-options-cheat-sheet/
https://apacheignite.readme.io/v1.9/docs/jvm-and-system-tuning
https://github.com/FoxxMD/intellij-jvm-options-explained
