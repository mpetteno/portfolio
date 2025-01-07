#!/bin/bash
set -e
# Use the provided directory or default to the current directory
TARGET_DIR=${1:-$(pwd)}
if [ ! -d "$TARGET_DIR" ]; then
  echo "Error: Directory '$TARGET_DIR' does not exist."
  exit 1
fi
cd "$TARGET_DIR"
pyenv local 3.13.0
python3 -m venv ./venv
source ./venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
echo "Virtual environment setup complete in $TARGET_DIR"