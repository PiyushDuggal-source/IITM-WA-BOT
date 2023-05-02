#!/bin/bash

# chmod +x gitpush.sh

GIT='git --git-dir='$PWD'/.git'

gitFunction ()
{
 $GIT status 
 npm run build
 $GIT status 
 $GIT add .
 $GIT commit -m "$1"
 $GIT push -u origin master
}

gitFunction "$1"
