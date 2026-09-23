---
layout: single
title: "Skills"
permalink: /skills/
author_profile: true
---

{% include base_path %}
{% assign groups = site.skills | sort: "order" %}
{% for group in groups %}
<section class="skill-group">
  <h2 class="skill-group__title">{{ group.title }}</h2>
  <div class="skill-grid">
  {% for item in group.items %}
    <div class="skill-tile">
      <img src="{{ base_path }}/images/skills/{{ item.icon }}" alt="{{ item.name }} logo" loading="lazy">
      <span>{{ item.name }}</span>
    </div>
  {% endfor %}
  </div>
</section>
{% endfor %}
