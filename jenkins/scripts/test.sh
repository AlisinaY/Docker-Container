#!/bin/bash

chmod +x jenkins/scripts/test.sh


# Exit script if any command fails
set -e

# Set environment variables
export NODE_ENV=test

# Run migrations or seed data if necessary
# echo "Running migrations..."
# npm run migrate

# Run unit tests
echo "Running unit tests..."
npm test
