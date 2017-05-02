# NWB Semantic Release

[![Build Status](https://travis-ci.org/how-to-react/nwb-semantic-release.svg?branch=master)](https://travis-ci.org/how-to-react/nwb-semantic-release)
[![Coverage Status](https://coveralls.io/repos/github/how-to-react/nwb-semantic-release/badge.svg?branch=master)](https://coveralls.io/github/how-to-react/nwb-semantic-release?branch=master)

Minimum NWB repository with semantic releases.

## Recreating
- `$ nwb new web-module nwb-semantic-release`
- Updated `travis.yml` to use node version 7.9.0
- Added semantic release and various packages and configuration (see package.json)
- npm publish --access public first
- Updated travis file with more tweaks to get the releases working
- Made sure to push `feat()` commit to ensure first release. Note: v0.0.0 was my first release.

Note: if in doubt, follow the commits and my struggle.