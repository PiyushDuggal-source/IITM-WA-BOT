#!/bin/bash
pm2 stop index
git pull
pm2 start dist/index.js --max-memory-restart 300MB 
