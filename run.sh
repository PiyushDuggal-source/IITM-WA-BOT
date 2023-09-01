#!/bin/bash
pm2 stop main
git pull
npm run build
pm2 start dist/index.js --max-memory-restart 300M --cron-restart="0 */8 * * *" --name main
