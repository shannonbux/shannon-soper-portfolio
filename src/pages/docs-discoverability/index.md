---
title: "Documentation Sidebar"
date: "2018-07-31"
---

Users struggled to find the right documentation for their task. There were many reasons for this:
- menu items had inconsistent naming conventions, so users didn't know what to search for
- menu was long enough to extend below the fold, so some items weren't visible
- site search didn't work very well and google search worked better
- some common tasks were missing from the docs and only existed in the tutorial or plugin READMEs

## Design solutions
First, I setup card sorting and usability tests to learn what categories and naming scheme would match user's language. I decided to use nouns for categories and -ing verbs for docs since most tasks are action-oriented (e.g. adding links) and wrote [the Gatsby Style Guide](https://www.gatsbyjs.com/contributing/gatsby-style-guide/).

![Natural language in the doc naming convention](ing-verbs.png)

Second, I ran [a Hacktoberfest contribution project](https://www.gatsbyjs.com/blog/2018-10-12-uptick-docs-contributions-hacktoberfest) to merge over 30 docs contributions. To help the contributions get merged smoothly, I created stub articles, shared the Style Guide, and created a decision tree to answer "whether to merge a doc contribution or not." 

## Accordion vs. flat menu?
Here's a quick dive into a perplexing part of this project. We wanted a design that was:
- visually pleasing
- searchable

Yet it seemed hard to accomplish both at the same time, because accordion menus make design visually pleasing, yet flat menus make items searchable by keyboard navigation (ctrl+f).

I decided to compromise with the following plan:
- default to a collapsed accordion
- include an expand all button
- save the state of the accordion menu for returning visitors

![Docs sidebar screenshot](expand-all-button.png)

This isn't a perfect design. In usability testing, I noticed that some people missed the "expand all" button so we tweaked the design until it was easier to see. Also, saving the state of the menu for each user is in the backlog.

_Original post at [the Gatsby Blog](https://www.gatsbyjs.com/blog/2018-07-31-docs-redesign)_