#!/bin/bash

docker run --env-file=.env -e "CONFIG=$(cat docusaurus-algolia-crawl-config.json | jq -r tostring)" algolia/docsearch-scraper