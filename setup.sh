#!/bin/sh

SCRIPTPATH="$( cd "$(dirname "$0")" ; pwd -P )"
MONGOPATH="$SCRIPTPATH/server/mongo-sync"

echo "Cloning mongo-sync into $MONGOPATH"

git clone https://github.com/sheharyarn/mongo-sync.git $MONGOPATH 2> /dev/null

echo "Creating mongo-sync config-file..."

cat <<EOF >"$MONGOPATH/config.yml"
# Mongo-Sync Configurations

local:
  db: 'db'
  host:
    port: 27017
  access:
    username: ''
    password: ''

remote:
  db: 'dietr-dev'
  host:
    url: 'ds052978.mlab.com'
    port: 52978
  access:
    username: 'public'
    password: 'password123'

tunnel:
  on: false
  access:
    username: 'remote_ssh_user'
    port: 22

# For now :local just
# assumes DB is at localhost:port

# All of the parameters above are required,
# without them, the script will fail
EOF

echo "Starting MongoDB instance in Docker..."

cd "$SCRIPTPATH/server" && docker-compose up -d db

echo "Pulling data from remote database..."

source "$MONGOPATH/mongo-sync" pull