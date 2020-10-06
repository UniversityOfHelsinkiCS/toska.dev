# Content

Content from the site comes from the files here. `.md` files support Markdown syntax as you might be able to guess but notice in order to use other elements than basic bolding and italicized further setup is needed.

## intro.md

Text on top below the logo and "Helsingin yliopiston tietojenkäsittelytieteen osaston sovelluskehitysakatemia".

## members.json

| Property   | Type                           | Description                                                                                                                                                                                                                                                                       |
| ---------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name       | string                         | First name of the members.                                                                                                                                                                                                                                                        |
| githubName | string                         | GitHub user of the member. Also used for fetching the avatar.                                                                                                                                                                                                                     |
| joinedDate | {month: number, year: number}  | Month and year of when the member joined.                                                                                                                                                                                                                                         |
| alumnDate  | {month: number, year: number}? | Month and year of when the member became an alumn if applicable.                                                                                                                                                                                                                  |
| tieBreaker | number?                        | If two members have the same `joinedDate` one with the lower tieBreaker will get the lower member number. If no tieBreaker is set it defaults to 999. If two members have the same `joinedDate` and the same `tieBreaker` then alphabetical order of the first name will be used. |
