---
layout: archive
title: "Research 🔬"
permalink: /publications/
author_profile: true
---

I am currently working on new studies concerning (1) Better Offline Decision Transformer (2) Innovative method for LLM Reward Modeling in light of RLHF framework (3) Some comparative working of XGBoost and Large Language Models (4) Better Web Agent based on LLM and relative technique. 🔭

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
