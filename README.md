# Stray Project Website
[![.github/workflows/jekyll-ghpages.yml](https://github.com/strayproject/strayproject.github.io/actions/workflows/pages.yml/badge.svg?branch=main)](https://github.com/strayproject/strayproject.github.io/actions/workflows/pages.yml)

## Installation
before starting, please install the following programs:
- [node](https://nodejs.org)
- [ruby](https://www.ruby-lang.org)

for ease of use, also install:
- [vs code](https://code.visualstudio.com/)
- tailwind extension inside vscode

to get working for the first time:
- clone repo
- open a terminal in the repo folder (in vscode: open folder > strayproject.github.io > terminal > new terminal)
- `npm install` (installs all the nodejs dependencies)
- `bundle install` (installs all the ruby gems, jekyll etc.)
- to start editing, `bundle exec jekyll serve --livereload`
-- a message should print saying `server address: http://127.0.0.1:4000` or another address. hold ctrl and click on it to open in a browser.
- every commit refreshes the webpage on github pages using the [.yml workflow in the .github/workflows folder](.github/workflows/pages.yml). allow for one minute for the refresh to complete, check the actions tab if it fails.

## Adding a New Blog Post
- all blog posts sit in the `_posts` folder. add a new file using the format `<yyyy>-<mm>-<dd>-<title>.md`, for example `2022-01-01-happy-new-year.md`.
- inside every blog post, fill out the front matter (the text in between the dashed lines):
```
---
layout: post
title: New Website!
author: brandon pow
---
```
- most times only title and author need to be edited.
- the text inside every blog post uses markdown formatting, please check the [markdown cheat sheet](https://www.markdownguide.org/cheat-sheet/) for more info.

## Forking
- it is not recommended to fork this into an individual's github repo where the URL has a prefox (/blog-page etc.), because of all the BASEURL changes needed to all links, image links and _config.yml. it's just too much work. rather, please deploy to an individual or organization's base github page (johndoe.github.io) or similar.
- postcss v2 is the only version known to work for now, postcss v1 gives an `ERRCONNREFUSED`. sadly it is slower, about 5-6 seconds per refresh compared to v1's sub-2-second one.

## Further Reading
- [jekyll](https://jekyllrb.com/)
- [tailwind v3](https://tailwindcss.com/)
