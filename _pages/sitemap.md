---
layout: default
title: Sitemap
permalink: /sitemap/
---

<section class="container py-5">
  <h1 class="fw-bold mb-4">Sitemap</h1>

  <p>Daftar lengkap halaman dan konten website:</p>

  <!-- HALAMAN -->
  <h5 class="mt-4">Halaman</h5>
  <ul>
    {% for page in site.pages %}
      {% if page.title and page.url != '/404.html' %}
      <li>
        <a href="{{ page.url | relative_url }}">{{ page.title }}</a>
      </li>
      {% endif %}
    {% endfor %}
  </ul>

  <!-- POSTINGAN -->
  <h5 class="mt-4">Postingan Terbaru</h5>
  <ul>
    {% for post in site.posts limit:50 %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <small class="text-muted">({{ post.date | date: "%d %b %Y" }})</small>
      </li>
    {% endfor %}
  </ul>

  <!-- KATEGORI -->
  <h5 class="mt-4">Kategori</h5>
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
  <h5 class="mt-4">Tag</h5>
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