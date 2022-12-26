#!/bin/bash

GIT='git --git-dir='$PWD'/.git'

gitFunction ()
{
 $GIT status 
 npm run build
 $GIT add .
 $GIT commit -m $1
 $GIT push -u origin master
}

gitFunction $1
