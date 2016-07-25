---
layout: cheatsheets
---

Content
=================

  * [usefull commands](#usefullcommands)
  * [workflow](#workflow)

usefull commands
============
{% highlight bash %}

git checkout hash fname1 fname2    #checkout specific files from specific commit
git diff stash                     #compare directory with stash
git stash --keep-index             #stash all except files added to index
                                   #move branch to new repo
git push url://path/to/new/repository.git branch-to-move
                                   #allow empty commit
git commit --allow-empty -m "Initial commit"
git clone . /destination/folder    #clone current dir to another dir

git bundle create fname HEAD       #create bundle from commit
git pull fname                     #apply bundle to repo
git apply < patch_file             #apply patch

{% endhighlight %}

workflow
============
