#!/usr/bin/env bash

# Copyright (c) Datalayer, Inc. https://datalayer.io
# Distributed under the terms of the MIT License.

# pkill -f "jupyter" || true
# pkill -f "python main.py" || true
pkill -f "bash ./start-jupyter-server.sh" || true
