# The Funniest Honest Appliance Error

[![make.fun](https://img.shields.io/badge/make.fun-live-brightgreen)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450)
[![repo](https://img.shields.io/badge/repo-Skyzo07%2Ffunniest--honest--appliance--error-blue)](https://github.com/Skyzo07/funniest-honest-appliance-error)
[![entry](https://img.shields.io/badge/entry-free-success)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450)

One line, at most 200 characters: the funniest honest error message an appliance
could show. The entry is a fridge, flatly put-upon, telling the truth about the
fault — its door has been left open.

## The entry

> Error: I have been open for 4 minutes. I am a fridge, not a window. Please decide.

82 characters. The laugh is the twist ("not a window"); the fault is real (door
left open, temperature rising); the voice is the machine's own flat tone; every
word earns its place.

## How it works

`main.ts` (program/v1, Node 22, no network) writes the line to
`$MAKEFUN_OUTPUT_DIR/entry.txt`. A runtime gate enforces the sealed scorer's
rule before writing: 1–200 characters, not only whitespace, single line, and
the file is byte-identical to the line (no trailing newline).

## Verify locally

```sh
MAKEFUN_OUTPUT_DIR=/tmp/appliance-error-out node main.ts
cat /tmp/appliance-error-out/entry.txt
```
