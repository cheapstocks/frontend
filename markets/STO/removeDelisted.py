#!/usr/bin/python

import json


with open("tickers.json") as fd:
    tickers = json.loads(fd.read())

with open("delisted") as fd:
    delisted = fd.read().splitlines()


new_tickers = []
for t in tickers:
    if t in delisted:
        continue
    new_tickers.append(t)

import pdb;pdb.set_trace()
with open("tickers2.json", "w") as fd:
    fd.write(json.dumps(new_tickers))


