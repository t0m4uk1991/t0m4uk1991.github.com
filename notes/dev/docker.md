---
layout: page
prev: /notes
---
docker
============
{% highlight bash %}
docker build -t tag_name .
docker run tag_name
docker run -t -i tag_name /bin/bash
docker build -t tag_name -f docker_file .
docker run --net="host" had
{% endhighlight %}