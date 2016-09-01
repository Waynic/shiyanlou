#!/bin/bash
LOG_DIR=/var/log

cd $LOG_DIR

cat /dev/null > message
cat /dev/null > wtmp

echo "logs cleanup."

exit

