---
layout: single
title: "Experience"
permalink: /experience/
author_profile: true
---

{% assign jobs = site.experience | sort: "order" %}
<div class="timeline">
{% for job in jobs %}
  <div class="timeline__item">
    <div class="timeline__marker" aria-hidden="true"></div>
    <div class="timeline__card">
      <div class="timeline__head">
        <h3 class="timeline__role">{{ job.title }}</h3>
        <span class="section-pill">{{ job.dates }}</span>
      </div>
      <p class="timeline__org"><i class="fas fa-fw fa-building" aria-hidden="true"></i> {{ job.organization }} <span class="timeline__loc">· {{ job.location }}</span></p>
      <div class="timeline__content">{{ job.content | markdownify }}</div>
    </div>
  </div>
{% endfor %}
</div>
