
# End to end testing for Actyx websites

This project performs automatic testing on our website. It aims to catch common issues like broken links, not working web forms, and so on.

| Script                        | Description                                                  |
|-------------------------------|--------------------------------------------------------------|
| npm run evaluate              | Run end to end testing and link checker                      |
| npm run links:check:prod      | Check for broken links accross all Actyx websites            |
| npm run links:check:developer | Check for broken links accross <https://developer.actyx.com> |
| npm run links:check:main      | Check for broken links accross <https://www.actyx.com>       |
| npm run links:check:download  | Check for broken links accross <https://download.actyx.com>  |

## Cavets

- Only URLs which are server-rendered in the DOM will be followed by the link checker
