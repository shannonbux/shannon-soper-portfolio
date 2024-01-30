---
title: Taking advantage of existing UX research
isBlogPost: true
date: 2024-01-30
excerpt: There are many ways to answer these questions about users, not just interviews.
---

## Why do UX research? It’s fun & helpful
If you learn about users for no other reason, do it to make work _fun_.

It’s energizing to see that you’re designing for real people! Real people use your product (or try to use it :) to do unique, interesting things. If your job feels boring or hard, look at _their_ goals. See what they’re trying to accomplish. Then the hard work feels productive, even easier, when you see how your product connects to their goals.

Doing UX research also helps you make decisions, explain those decisions, and empower others to make their own decisions based on good information.

Does UX research guarantee our decisions work for users and the business? Nope, but even if a new feature doesn't turn out well for users, having research behind the decisions makes it easier to find the next step. Did we miss something in the previous research? Did we get the research right but the design has a bug or usability issue? Having a partially complete map of the landscape makes it easier to start exploring remaining blank spots.

## Taking advantage of existing UX research
So how do you learn about users? This is the first post in a series of posts about UX research strategies that addresses taking advantage of existing UX research before doing your own original research. Stay tuned for future posts:

- Finding users to talk to (“recruiting”)
- Running interviews
- Working with dedicated UX Research teams

## Starting with questions
Before doing anything else, start with curiosity about people’s behavior and lives. Asking questions, whether in interviews or just to yourself while browsing a community forum, is a way to learn. 

**Example questions:**
- What are users saying about [xyz] features?
- What is painful or joyful about [xyz] features?
- Why aren’t users doing [xyz behavior]?
- What are users’ common workflows when trying to do [xyz behavior]?
- Who am I and what am I doing here?! (it might take a while to answer this one)

## Looking at existing UX research
There are many ways to answer these questions about users, not just interviews. And getting feedback from users face-to-face is so precious and hard-won that you keep learning from other sources so you’re more prepared for the interviews. The questions you ask them should be ones you can’t answer in any other way. 

Here’s the checklist I used to make sure I thoroughly used existing sources of user feedback at my last job at Postman before reaching out to users myself.


---
## My Checklist
### Check existing research
- Document the current user journey
- Check with squad PM, other designers and researchers, and leaders to see if they have any research on the topic already
- Ask PM "Can I hop on any calls you already have set up?
- Search community forum
- Search at GitHub issues
- Search ZenDesk customer tickets
- Search #customer-calls and ask follow up questions of the sales folks who posted relevant the notes
- Watch Gong calls
- Ask for data from data analysts
- Look at other products with similar features and problems

### Things that didn’t work:
- Contacting CSM’s directly was hit or miss
- UX Research Team was too busy
- Twitter - couldn’t find many ppl posting abt Postman

### Things I haven’t tried that look promising:
- Reddit
- Internal testing w/ another squad

---

## Sharing research insights
Anytime you share research or invite someone to research with you, always start with a **reminder of what question the research is intended to answer**. It helps make sure you have a shared goal and know how to interpret user feedback.

**Inviting people to research with you** is one of the best ways to share research. Hop on a call with a coworker and read some sales call notes together! They will get excited and talk about it with others, and you can even present results together.

Keep sharing short. **Share a user quote every few days in Slack**.

**Volunteer to do a 5 min presentation** for your team, department, or the whole company. Rehearse with a timer, so you know you can do it in under 5 minutes. That will force you to make it clear enough for anyone to understand. The 5 minutes will leave people wanting more.

**Write a 1 page summary** so you can share the research anywhere and at any moment. Refer back to your 1 page report in every relevant project by linking to it in:
- Tickets
- PRD’s 
- PRFAQs 
- design specs
- Figma files
- Slack conversations

**Note:** I often write a longer summary for myself first, and find the writing process is super useful to deeply think through the problem. My experience is that much research is evergreen; I refer to it during many future projects.

Below is an example of a 1 page research report I wrote that starts with a question. The research for the report came from internal resources like talking to the Head of Engineering, a product designer in Postman’s Public API team, the CEO, and looking at what users were saying and doing online.

---
## What makes some Postman API collections go viral?

### 1) They are foundational APIs that people need to build on top of
> “#1 thing that makes collection go viral is it’s a foundational API that everyone needs to build on top of or use. Look at ppl who have productized this, like Stripe.” —Numaan

### 2) They are easy to use & easy to find
> “My favourite workspaces are ones that have good documentation and guides on how to get started with using the APIs they have. Eg. Twilio” —Avinash

What makes an API easy to use and find?
- good collection documentation
- clear guidelines on how to create an account / get a key to use their APIs
- marketing the API outside of Postman

### 3) Their structure and documentation fits a need
There are 4 types of collections with corresponding documentation patterns (often 1 API will have all 4 types, exact same API but diff documentation and folder structure)
- How-to (Example of a how-to style collection)
- tutorial
- reference (like a table of contents)
- discussion

### Design idea resulting from this research
If we introduce tagging as a way to organize project folders, API authors will use tagging to make their folders and folder contents, and more newcomers will use the API because they will find it easy to scan

---

## Next up
This is a blogpost series about how product designers can do UX Research. The next articles include:

- Finding users to talk to
- Running interviews
- Working with dedicated UX Research teams
