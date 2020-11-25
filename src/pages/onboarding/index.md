---
title: "Cloud Onboarding"
date: "2019-12-09"
---

After our new Cloud product launched, FullStory clips made it obvious that some users struggled to onboard. To learn why, I setup usability tests with 5 Gatsby users and 5 developers who hadn't used Gatsby before to watch them onboard.

The usability tests identified a point of confusion that stopped most folks from going forward. 

![Users confused when selecting organization](select-work-org-confusion.png)

## Default option didn't serve some user's needs

The moment of confusion happened because our default option was wrong. Users didn't want to save their project in the default location.

My first impulse was to resolve this problem by making the "add another organization" button more obvious so they weren't stuck with the default option. However, this didn't solve the problem.

## We prioritized the wrong group
Through pressing my coworkers for more details, I discovered that not only could we offer an alternate to the default option, we could also make a *better* default option. I asked my coworkers: "where do users actually want to save their project?" 

The answer is that users wanted to save their first project in their personal GitHub account to take the product on a test drive.

## Solution

Myself and a developer designed a solution that makes the correct assumption that users want to make their first site in their personal GitHub account. The design still gives them the option to add their work organization if our default assumption is wrong.

We also added a field for them to name their site because it's fun and gives the project a recognizable name in both Gatsby Cloud and their GitHub account.

![New flow](create-new-site.gif)

_Original post on the [Gatsby Blog](https://www.gatsbyjs.com/blog/2019-12-11-reducing-interaction-cloud)._