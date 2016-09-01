#!/bin/bash 
echo "the # here not comment"
echo 'the # here not comment'
echo The \# here not comment
echo Th #  this begain comment
echo ${PATH#*:}   # not comment
echo $((2#101011))   # convert not comment
