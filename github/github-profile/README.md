# Creating a GitHub (README.md) Profile

[![Visitors](https://api.visitorbadge.io/api/visitors?path=aasisodiya.general.githubprofile&labelColor=%23ffa500&countColor=%23263759&labelStyle=upper)](https://visitorbadge.io/status?path=aasisodiya.general.githubprofile)

## Create a New Repository

![Creating a New Repository](images/image-001.png)

Take above image as reference. You need to create a repository with same name as your github username. Which in my case is `aasisodiya`. As soon as you enter the correct username you will receive a message from github as shown in above image. Give it a description and strictly keep it Public else it won't work. Followed by Select Initialize this repository with a README. Then click on create repository. Voila! and you are done.

You will be able to see a new repository with your account name. Below is the image of my repository.

![My Repository](images/image-002.png)

Now lets get to work. As you can see this default template is very basic. `Hi there 👋` !? So you will have to customize it to suite your profile.

Below are some interesting things you can add to your README.md file

> **Note:** You will have to replace user specific info in below code with your own data. For ex. `aasisodiya` will get replaced with `your_profile_name`.

## Badges

|Code|Output|
|-|-|
|`![Alternate Text](https://img.shields.io/static/v1?label=<LABEL>&message=<MESSAGE>&color=<MESSAGEBGCOLOR>)`<br>set LABEL=label, MESSAGE=message and COLOR=orange|![Alternate Text](https://img.shields.io/static/v1?label=label&message=message&color=orange)|
|`![Alternate Text](https://img.shields.io/badge/<LABEL>-<MESSAGE>-<MESSAGEBGCOLOR>)`<br>set LABEL=label, MESSAGE=message and COLOR=orange|![Alternate Text](https://img.shields.io/badge/label-message-orange)|
|`![Alternate Text](https://img.shields.io/badge/<LABEL>-<MESSAGE>-<MESSAGEBGCOLOR>?style={style}&logo={logo}&logoColor={logoColor}&logoWidth={logoWidth}&labelColor={labelColor})`<br>set LABEL=label, MESSAGE=message, COLOR=ffa500, style are of 5 types given below, logo can be chosen from link below, logoColor=violet, logoWidth=30 and labelColor=black|![Alternate Text](https://img.shields.io/badge/label-message-ffa500?style=flat-square&logo=github&logoColor=violet&logoWidth=30&labelColor=black)|

---

```md
![Alternate Text](https://img.shields.io/badge/<LABEL>-<MESSAGE>-<MESSAGEBGCOLOR>?style={style}&logo={logo}&logoColor={logoColor}&logoWidth={logoWidth}&labelColor={labelColor})
```

|Parameter|Description|
|-|-|
|Alternate Text|`Alternate Text` is displayed when image fails to load|
|LABEL|`LABEL` is the left side of the badge|
|MESSAGE|`MESSAGE` is the right side of the badge|
|COLOR|`COLOR` is the background color of right side|
|style|`style` is the look of the badge (details given below)|
|logo|`logo` is the name of the company you want to display the logo for|
|logoColor|`logoColor` is the color of the logo|
|logoWidth|`logoWidth` is the width of the logo|
|labelColor|`labelColor` is the color of the left side of the badge|

### Values for `style` that you can use in above code

|Style|Output|
|-|-|
|plastic|![Alternate Text](https://img.shields.io/badge/label-message-orange?style=plastic)|
|flat|![Alternate Text](https://img.shields.io/badge/label-message-orange?style=flat)|
|flat-square|![Alternate Text](https://img.shields.io/badge/label-message-orange?style=flat-square)|
|for-the-badge|![Alternate Text](https://img.shields.io/badge/label-message-orange?style=for-the-badge)|
|social|![Alternate Text](https://img.shields.io/badge/label-message-orange?style=social)|

> For Logo visit this link [Logo List](https://simpleicons.org/)

|Badge Type|Output|Code|
|-|-|-|
|With Label|![Github](https://img.shields.io/badge/github-label-orange?style=plastic&logo=github)|`![Github](https://img.shields.io/badge/github-label-orange?style=plastic&logo=github)`|
|Without Label|![Github](https://img.shields.io/badge/github-orange?style=plastic&logo=github)|`![Github](https://img.shields.io/badge/github-orange?style=plastic&logo=github)`|

---

## Github Specific Badges

|Output|Code|
|-|-|
|![Repo Stars](https://img.shields.io/github/stars/aasisodiya/general)|`![Repo Stars](https://img.shields.io/github/stars/aasisodiya/general)`|
|![User Stars](https://img.shields.io/github/stars/aasisodiya?affiliations=OWNER%2CCOLLABORATOR)|`![User Stars](https://img.shields.io/github/stars/aasisodiya?affiliations=OWNER%2CCOLLABORATOR)`|
|![Forks](https://img.shields.io/github/forks/aasisodiya/general)|`![Forks](https://img.shields.io/github/forks/aasisodiya/general)`|
|![Pull Request](https://img.shields.io/github/issues-pr/aasisodiya/general)|`![Pull Request](https://img.shields.io/github/issues-pr/aasisodiya/general)`|
|![Issues](https://img.shields.io/github/issues/aasisodiya/general)|`![Issues](https://img.shields.io/github/issues/aasisodiya/general)`|
|![Contributors](https://img.shields.io/github/contributors/aasisodiya/general?color=ffa500)|`![Contributors](https://img.shields.io/github/contributors/aasisodiya/general?color=ffa500)`|
|![License](https://img.shields.io/github/license/aasisodiya/general?color=ffa500)|`![License](https://img.shields.io/github/license/aasisodiya/general?color=ffa500)`|
|![Sponsors](https://img.shields.io/github/sponsors/aasisodiya)|`![Sponsors](https://img.shields.io/github/sponsors/aasisodiya)`|
|![Watchers](https://img.shields.io/github/watchers/aasisodiya/general)|`![Watchers](https://img.shields.io/github/watchers/aasisodiya/general)`|
|![GitHub followers](https://img.shields.io/github/followers/aasisodiya?label=Followers&logo=GitHub)|`![GitHub followers](https://img.shields.io/github/followers/aasisodiya?label=Followers&logo=GitHub)`|

## Social Media Badges

|Output|Code|
|-|-|
|![Twitter](https://img.shields.io/twitter/follow/aasisodiya.svg?style=social)|`![Twitter](https://img.shields.io/twitter/follow/aasisodiya.svg?style=social)`|

## Visitor Badge

|Output|Code|
|-|-|
|![Visitor](https://visitor-badge.laobi.icu/badge?page_id=aasisodiya.aasisodiya)|`![Visitor](https://visitor-badge.laobi.icu/badge?page_id=aasisodiya.aasisodiya)`|
|![Visitor](https://visitor-badge.glitch.me/badge?page_id=aasisodiya.aasisodiya)|`![Visitor](https://visitor-badge.glitch.me/badge?page_id=aasisodiya.aasisodiya)`|

---

## Creating a Collapsible Div

<details>
<summary>Title</summary>
<pre>Content</pre>
</details>

You can generate a collapsible div by using below code

```html
<details>
<summary>Title</summary>
<pre>Content</pre>
</details>
```

---

## Github Profile Trophy

![trophy](https://github-profile-trophy.vercel.app/?username=aasisodiya&theme=juicyfresh&no-frame=false&row=2&&margin-w=20&no-bg=false)

You can show a bunch of trophy for your github profile using below code. For Details visit this [link](https://github.com/ryo-ma/github-profile-trophy)

```md
![trophy](https://github-profile-trophy.vercel.app/?username=aasisodiya&theme=juicyfresh&no-frame=false&row=2&&margin-w=20&no-bg=false)
```

## Github Stats

![My github stats](https://github-readme-stats.vercel.app/api?username=aasisodiya&count_private=true&show_icons=true&theme=radical)

Below code will help you display your github stats

```md
![My github stats](https://github-readme-stats.vercel.app/api?username=aasisodiya&count_private=true&show_icons=true&theme=radical)
```

## Github Repo

![ReadMe Card](https://github-readme-stats.vercel.app/api/pin/?username=aasisodiya&repo=general)

Below code helps you to insert your repository card in Markdown

```md
![ReadMe Card](https://github-readme-stats.vercel.app/api/pin/?username=aasisodiya&repo=general)
```

## Github Most Used Languages

![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=aasisodiya)

Below code will help you display your Most Used Languages

```md
![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=aasisodiya)
```

![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=aasisodiya&layout=compact)

Below code will help you display your Most Used Languages but in compact way

```md
![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=aasisodiya&layout=compact)
```

## Github Streak

![GitHub Stats](https://github-readme-streak-stats.herokuapp.com/?user=aasisodiya)

You can display your streak in Github using below code

```md
![GitHub Stats](https://github-readme-streak-stats.herokuapp.com/?user=aasisodiya)
```

## Github Skyline

Create a 3D model of your Github Contributions into a Skyline using [GitHub Skyline](https://skyline.github.com/)

Sample of 3D model will look like the one given below

![Github Skyline](images/skyline.png)

## Github Profile Visitor Counter (Hits)

![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://github.com/your-profile-id)

As shown above, below code will help you display how many visitors are viewing your Github, Website, Notion.

```md
![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://github.com/your-profile-id)
```

## Reference

- [Shields.io](https://shields.io/)
- [SimpleIcons.org](https://simpleicons.org/)
- [Waka Readme](https://github.com/marketplace/actions/waka-readme)
- [Managing your profile README](https://docs.github.com/en/github/setting-up-and-managing-your-github-profile/managing-your-profile-readme#about-your-profile-readme)
- [Basic writing and formatting syntax](https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax)
- [Complete list of github markdown emoji markup](https://gist.github.com/rxaviers/7360908)
- [Visitor Badge](https://visitor-badge.laobi.icu/#)
- [GitHub Skyline](https://skyline.github.com/)
- [Hits](https://hits.seeyoufarm.com/)

[![Visitors](https://api.visitorbadge.io/api/visitors?path=aasisodiya.general&label=aasisodiya/general&labelColor=%23ffa500&countColor=%23263759&labelStyle=upper)](https://visitorbadge.io/status?path=aasisodiya.general)
