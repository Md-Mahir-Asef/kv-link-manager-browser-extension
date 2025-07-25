#!/usr/bin/env bash
shopt -s extglob
rm -rf !(dist)
mv dist kv-link-manager