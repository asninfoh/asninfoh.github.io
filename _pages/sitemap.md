---
layout: default
title: Sitemap
permalink: /sitemap/
---

<section class="container py-5">
  <h1 class="fw-bold mb-4">Sitemap</h1>

  <p>Daftar lengkap halaman dan konten website:</p>

  <!-- POSTINGAN -->
  <h6 class="fw-bold text-uppercase mb-3">
    <span class="text-danger">/</span> POSTINGAN TERBARU <span class="text-danger">/</span>
  </h6>
  <ul>
    {% for post in site.posts limit:50 %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </li>
    {% endfor %}
  </ul>

  <!-- HALAMAN -->
  <h6 class="fw-bold text-uppercase mb-3">
    <span class="text-danger">/</span> HALAMAN <span class="text-danger">/</span>
  </h6>
  <ul>
    {% for page in site.pages %}
      {% if page.title and page.url != '/404.html' %}
      <li>
        <a href="{{ page.url | relative_url }}">{{ page.title }}</a>
      </li>
      {% endif %}
    {% endfor %}
  </ul>

  <!-- KATEGORI -->
  <h6 class="fw-bold text-uppercase mb-3">
    <span class="text-danger">/</span> KATEGORI <span class="text-danger">/</span>
  </h6>
  <ul>
    {% for category in site.categories %}
      <li>
        <a href="/categories/{{ category[0] | slugify }}/">
          {{ category[0] }} ({{ category[1].size }})
        </a>
      </li>
    {% endfor %}
  </ul>

  <!-- TAG -->
  <h6 class="fw-bold text-uppercase mb-3">
    <span class="text-danger">/</span> TAGS <span class="text-danger">/</span>
  </h6>
  <ul>
    {% for tag in site.tags %}
      <li>
        <a href="/tags/{{ tag[0] | slugify }}/">
          {{ tag[0] }} ({{ tag[1].size }})
        </a>
      </li>
    {% endfor %}
  </ul>

</section>