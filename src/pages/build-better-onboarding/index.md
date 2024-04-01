---
title: Speedy onboarding with BuildBetter.ai 
isBlogPost: false
date: 2024-02-04
excerpt: Helping users interact with AI using prompt templates
---
From November 2023 to January 2024, I did contract work for [BuildBetter.ai](https://buildbetter.ai/), an early-stage startup. 

## Business Goal
My objective was to showcase the value of BuildBetter to new users as quickly as possible. I believed that BuildBetter's primary value is its ability to save users time by automating the process of extracting product insights from user feedback. I focused on low-intent users (not likely to immediately be a power user). For example, a user who has been invited by a teammate may not have read about BuildBetter or heard much about it.

## User Goal
New users should be able to quickly see and understand the benefits of using BuildBetter by interacting with call transcript summaries and AI chat interactions as swiftly as possible after creating an account.

## Hypothesis
We believe that by increasing the visibility of structured call transcript summaries and AI chat interactions through an onboarding checklist, new users will be more likely to use those features again, and eventually show higher retention rates.

## Success Metrics
Primary Success Metric
- Quantitative: An increase in activated users (perhaps, number of users who read a call transcript summary at least two times and number of users who interact with the AI chat at least two times.)
Qualitative: Positive user feedback regarding the onboarding process and ease of use of BuildBetter's key features.

Secondary Success Metric
- Increase in retention.

## Current User Journey

[need to insert link here, figma file isn’t working)

## Critical UX Risks in the Current User Journey

Risk
- Low visibility of the integration feature may delay users from the main value— interacting with real data.
Recommended Solution
- Make setting up integrations part of a full-screen onboarding flow

Risk
Lack of immediate call data requires users to either upload calls or wait for a call to happen. This may exclude users who don’t have real data handy, don’t have a call for a while, or are hesitant to use the feature before seeing how the product works. 
Offer the option to explore sample data in onboarding and in the app (see option 1 below), or a quick voice memo
Risk that users won’t get value from current onboarding pop-up. For example, the CustomContext form is confusing, so they may not complete the task
Update the existing onboarding pop-up. For example, update the CustomContext form with a clearer name, revise the form’s copy, and embed it in the app.




Jobs to be Done

As a new user, I want to see a call transcript that summarizes key insights and action items so I don’t have to rewatch the video and take notes.
As a new user, I want suggestions of prompts I can use to ask BuildBetter for product insights and documents so that I can avoid digging through multiple calls and old notes.
As a new user, I want BuildBetter to summarize my own calls quickly and tell me when the call summary is done, so that I can focus on other tasks and read the summary when it’s ready.
Ideal User Journey

Link
Benchmarking
I went through dozens of onboarding flows, including BuildBetter’s more direct competitors. Here are the most insightful examples I’d like to share:
GitHub Desktop


Calendly


Fathom




Insights
Setting up calendar integrations is common as part of a whole-page onboarding flow, likely since it’s crucial to the product’s value. So it is very visible, very early in the flow, and isn’t really optional
BuildBetter’s more direct competitors have garish designs (too many bright colors and buttons competing with each other) and haven’t chosen one ideal onboarding pathway, instead opting to offer multiple pathways. Fathom’s self-guided tooltip tour and test call were pretty effective, but quite time-consuming and likely took a lot of engineering and design effort
Onboarding checklists are a very common onboarding pattern when trying to help users complete a task. The checklist items are either 1) sequential set of steps required to complete a task, or 2) a tour of product features

Proposed Designs
The proposed first step is to adjust the steps in the existing onboarding checklist popup, to test out the value and usability of the proposed ideal flow.

Preview
Full clickable prototype


Solutions we rejected for now
Full-screen onboarding flow, including a “Setup Integrations” dedicated page. It would be more UX and engineering work and we can make a smaller change to the current onboarding checklist and see if that works first.
Including “Documents” in the onboarding checklist, since its still new and needs more usability testing
Future projects
To help users have an awesome experience, we could help users:
record voice and see AI respond
enter URL of a company website and see insights in chat or documents
fill out an in-app CustomContext form
setup other integrations (e.g. customer support ticketing)
Action items and open questions
Have you already tried pre-loaded calls during user onboarding? If not, Shannon can setup usability tests where we invite users to a test account with pre-loaded calls and ask them to:
Go through the document creation flow
View call summaries
Use prompt suggestions in chat and see AI respond with insights
Have you already tested the feasibility and value of new features like voice recordings, scraping a company URLs, and integrating with sources of data other than calls? If not, we could test them ourselves before considering building them and putting them into onboarding
Shannon to ask Spencer for examples of CustomContext forms that have been effective vs. not so effective so she can consider how to design an in-app form that ensures users have the best chance of entering useful info.
Adjust Shannon’s wireframes to keep existing video to the first step (connect calendar)


