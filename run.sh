#!/bin/bash
pm2 stop index
git pull
pm2 start dist/index.js --max-memory-restart 300M --cron-restart="0 0 * * *"
pm2 logs --lines 100
