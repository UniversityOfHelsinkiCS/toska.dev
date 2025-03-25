# Toska

[https://toska.dev](https://toska.dev)

## Starting the project locally

1. `npm i`
2. `npm run dev`

## Adding content

Content from the site comes from the files in the `content` folder. `.md` files support Markdown syntax as you might be able to guess but notice in order to use other elements than basic bolding and italicized further setup is needed.

### Adding a new projects

1. Make a new .md file to the `content/projects` folder.

- Name of the file is meaningful (decides the URL)

2. On the top of the .md file add metadata like so:

```
---
github: lomake
title: Tilannekuvalomake
date: Helmikuu 2020 -
---
```

github: project name on GitHub  
title: project's name  
date: Project starting month - Project ending month (if any) e.g. Helmikuu 2020 - Kesäkuu 2021

3. Add the actual content describing the project

- First paragraph is what is shown as preview on the front page.

4. Add an image (square aspect ratio - recommended approximately 1000x1000) of the project to `public/projects/` in .png format using the same name as the .md made in step 1.

### intro.md

Text on top below the logo and "Helsingin yliopiston tietojenkäsittelytieteen osaston sovelluskehitysakatemia".

### members.json

_Note the order in the array is meaningful_

| Property     | Type                           | Description                                                      |
| ------------ | ------------------------------ | ---------------------------------------------------------------- |
| name         | string                         | First name of the members.                                       |
| githubName   | string                         | GitHub user of the member. Also used for fetching the avatar.    |
| linkedInName | string                         | LinkedIn user of the member.                                     |
| joinedDate   | {month: number, year: number}  | Month and year of when the member joined.                        |
| alumnDate    | {month: number, year: number}? | Month and year of when the member became an alumn if applicable. |
