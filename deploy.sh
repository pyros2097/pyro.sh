#!/bin/bash
IP=192.168.0.104
NODE_ENV=production
npm run website
npm run timer
rsync -aP --delete pyro.sh pi@$IP:/home/pi
rsync -aP --delete timer.pyro.sh pi@$IP:/home/pi

# systemctl reload caddy
