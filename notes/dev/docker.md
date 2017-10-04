---
layout: page
prev: /notes
---
docker
============
{% highlight bash %}
docker ps                   # list all running containers
docker run tag_name         # run container by tag_name
docker build -t tag_name .  # build image with tag_name from Dockerfile 
                            # in current dir

docker run                  # run app by tag_name and
       -p 4000:80           # and map internal 80 port on 4000
       tag_name
       -d                   # allow to run app in detached mode

docker container ls         # list running conatiners
docker stop <CONTAINER ID>  # stop container by CONTAINER_ID

docker images               # list images
docker image rm <image id>  # remove image by id
{% endhighlight %}
