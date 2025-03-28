# Toska.dev

<img height=100 src="public/assets/toska-logo.svg" />

[https://toska.dev](https://toska.dev)

## Starting the project locally

1. `npm i`
2. `npm run dev`

## Adding content

Content from the site comes from the files in the `src/content` folder. Write project descriptions etc. in the Markdown files (`.md`).

### Projects

To add a new project, follow these instructions.

1. Make a new .md file to the `src/content/projects` folder.
   - Name of the file should be meaningful as it decides the URL
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
   - First paragraph is what is shown as preview on the front page
4. Add an image of the project to `public/projects/` in .png format using the same name as the .md made in step 1.
5. Add the name of the project in [project.ts](./src/types/project.ts) and export its image in [PreviewImage.tsx](./src/components/Projects/ProjectCard/PreviewImage.tsx)
   - This is done so that the image load immediately when the page is loaded

### Members

To add new members or edit exit dates etc., see [members.json](./src/content/members.json).

Please append new members at the end of the file as it is used to generate the member number!

Structure of `members.json`. See also the [Member](./src/types/member.ts) type.

| Property     | Type                           | Description                                        |
| ------------ | ------------------------------ | -------------------------------------------------- |
| name         | string                         | First name                                         |
| gitHubName   | string                         | GitHub username, also used for fetching the avatar |
| linkedInName | string?                        | LinkedIn username, see linkedin.com/id/{username}  |
| joinDate     | {month: number, year: number}  | Month and year of when joined Toska                |
| exitDate     | {month: number, year: number}? | Month and year of when left Toska if applicable    |

### Deploying

Pushing to `master` runs CI and pushes to production.
