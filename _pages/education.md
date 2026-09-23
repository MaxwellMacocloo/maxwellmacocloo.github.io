---
layout: single
title: "Education"
permalink: /education/
author_profile: true
---

{% include base_path %}
{% assign degrees = site.education | sort: "order" %}
<div class="timeline">
{% for edu in degrees %}
  {% assign logo_path = "/images/education/" | append: edu.logo %}
  {% assign logo_file = site.static_files | where: "path", logo_path | first %}
  <div class="timeline__item">
    <div class="timeline__marker" aria-hidden="true"></div>
    <div class="timeline__card edu-card">
      <div class="edu-card__logo">
        {% if logo_file %}
          <img src="{{ base_path }}{{ logo_path }}" alt="{{ edu.school }} logo" loading="lazy">
        {% else %}
          <span class="edu-card__initials" style="background: {{ edu.color }};">{{ edu.initials }}</span>
        {% endif %}
      </div>
      <div class="edu-card__body">
        <div class="timeline__head">
          <h3 class="timeline__role">{{ edu.degree }}</h3>
          <span class="section-pill">{{ edu.dates }}</span>
        </div>
        {% if edu.honor %}<span class="edu-card__honor"><i class="fas fa-fw fa-award" aria-hidden="true"></i> {{ edu.honor }}</span>{% endif %}
        <p class="timeline__org"><i class="fas fa-fw fa-building-columns" aria-hidden="true"></i> {{ edu.school }} <span class="timeline__loc">· {{ edu.location }}</span></p>
        {% if edu.advisor %}<p class="edu-card__detail"><strong>Advisor:</strong> {{ edu.advisor }}</p>{% endif %}
        {% if edu.thesis %}<p class="edu-card__detail"><strong>Thesis:</strong> <em>{{ edu.thesis }}</em></p>{% endif %}
        {% if edu.content != "" %}<div class="timeline__content">{{ edu.content | markdownify }}</div>{% endif %}
      </div>
    </div>
  </div>
{% endfor %}
</div>

<section class="skill-group">
  <h2 class="skill-group__title">Interests</h2>
  <div class="chip-list">
    {% assign courses = "Statistical Machine Learning| Non and Semi-Parametric Models |Statistical Methodology| Survival Analysis/Time-to-Event Methods |Computational Statistics |Latent Variable Modeling /SEM| Causal Inference |Longitudinal/Repeated-Measures Data Analysis" | split: "|" %}
    {% for c in courses %}<span class="chip">{{ c }}</span>{% endfor %}
  </div>
</section>
