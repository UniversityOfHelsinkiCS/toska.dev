# Content

Content from the site comes from the files here. `.md` files support Markdown syntax as you might be able to guess but notice in order to use other elements than basic bolding and italicized further setup is needed.

## intro.md

Text on top below the logo and "Helsingin yliopiston tietojenkäsittelytieteen osaston sovelluskehitysakatemia".

## members.json

_Note the order in the array is meaningful_

| Property   | Type                           | Description                                                      |
| ---------- | ------------------------------ | ---------------------------------------------------------------- |
| name       | string                         | First name of the members.                                       |
| githubName | string                         | GitHub user of the member. Also used for fetching the avatar.    |
| joinedDate | {month: number, year: number}  | Month and year of when the member joined.                        |
| alumnDate  | {month: number, year: number}? | Month and year of when the member became an alumn if applicable. |
