---
layout: archive
title: "Research 🔬"
permalink: /publications/
author_profile: true
---

I am currently working on **Large Language Model based Web Agents**, especially in the field of Web Navigation. 🔭

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}