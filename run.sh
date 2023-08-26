#!/bin/bash
pm2 stop 0
git pull
pm2 start dist/index.js --max-memory-restart 250M --cron-restart="0 */8 * * *"
pm2 logs --lines 100
