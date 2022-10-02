# Github Pages - Jekyll - Google Analytics Integration

[![Visitors](https://api.visitorbadge.io/api/visitors?path=aasisodiya.general.github.analytics&labelColor=%23ffa500&countColor=%23263759&labelStyle=upper)](https://visitorbadge.io/status?path=aasisodiya.general.github.analytics)

- [Github Pages - Jekyll - Google Analytics Integration](#github-pages---jekyll---google-analytics-integration)
  - [`_config.yml` File](#_configyml-file)
  - [Google Analytics Integration](#google-analytics-integration)
  - [Troubleshooting](#troubleshooting)
  - [Reference](#reference)

> **Prerequisites**:
>
> - You have github pages enabled for your repo
> - You have your google analytics id that is configured with your github pages URL

In order to integrate google analytics with Github Pages, you can follow simple steps given below

## `_config.yml` File

First you need to create a new file named `_config.yml` at the root of your repo. This file will help with GitHub Pages and Jekyll integration. You can use below basic template code.

```yml
title: General Notes
description: Compilations of General Notes on topics like git, aws, linux, ubuntu, scp, vscode, windows, github.
google_analytics: G-4KDE74NNXK
theme: jekyll-theme-slate
```

Since the theme is `jekyll-theme-slate` and based on the `title` and `description`, your github pages will look something like this now.

![Github Page](./img/githubpage.png)

As we have set the `title` as `General Notes`, hence it appears as Title of the page and `description` being set as `Compilations of General Notes on topics like git, aws, linux, ubuntu, scp, vscode, windows, github.` appears just below the title.

## Google Analytics Integration

Now create a folder named `_includes` and another folder named `assets`. `_includes` folder will contain your integration script and `assets` folder will contain your favicon for setting it as icon, for your new github page, instead of keeping it empty.

After creating `_includes` folder create 2 files under it, with the respective code

- head-custom-google-analytics.html

  ```html
  {% if site.google_analytics %}
  <!-- Google Analytics Tag Start -->
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-4KDE74NNXK"></script>
  <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
          dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-4KDE74NNXK');
  </script>
  <!-- Google Analytics Tag End -->
  {% endif %}
  ```

- head-custom.html

  ```html
  <!-- start custom head snippets, customize with your own _includes/head-custom.html file -->

  <!-- Setup Google Analytics -->
  {% include head-custom-google-analytics.html %}

  <!-- You can set your favicon here -->
  <link rel="shortcut icon" type="image/x-icon" href="{{ '/assets/alogo.svg' | relative_url }}">

  <!-- end custom head snippets -->
  ```

  Feel free to edit above files based on your requirements

**Note**: You will have to replace `G-4KDE74NNXK` with your google analytics id. Also `/assets/alogo.svg` will get replaced with your image file path.

Awesome 👏 You are almost done. Now all you need to do is to check-in/push the changes on to your master branch. And let the GitHub Pages and Jekyll integration do their work.

Once the build is complete you should see a green dot in front of your commit as show below

![Build Success](./img/commit.png)

Now you can open your github pages URL and you will see a new theme applied. And now you can check Google Analytics page for new traffic data as well from your repo's github pages.

## Troubleshooting

- **Issue**: Even after following above steps, still not able to see google analytics.  
  **Solution**:
  - Check your Google Analytics ID if properly configured with you github pages URL only, and is the correct one being used in the code
  - Disable AdBlock if any
  - Might not work on Brave browser
  - To verify if its a browser issue check console for errors like `Failed to load resource: net::ERR_BLOCKED_BY_CLIENT` which can be due to adblock

## Reference

- [GitHub Pages and Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)

[![Visitors](https://api.visitorbadge.io/api/visitors?path=aasisodiya.general&label=aasisodiya/general&labelColor=%23ffa500&countColor=%23263759&labelStyle=upper)](https://visitorbadge.io/status?path=aasisodiya.general)
