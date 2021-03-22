# Github Profile Addons

## Badges

|Code|Output|
|-|-|
|`![Alternate Text](https://img.shields.io/static/v1?label=<LABEL>&message=<MESSAGE>&color=<COLOR>)`<br>set LABEL=label, MESSAGE=message and COLOR=orange|![](https://img.shields.io/static/v1?label=label&message=message&color=orange)|
|`![Alternate Text](https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>)`<br>set LABEL=label, MESSAGE=message and COLOR=orange|![Alternate Text](https://img.shields.io/badge/label-message-orange)|
|`![Alternate Text](https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>?style={style}&logo={logo}&logoColor={logoColor}&logoWidth={logoWidth}&labelColor={labelColor}))`<br>set LABEL=label, MESSAGE=message, COLOR=ffa500, style are of 5 types given below, logo can be chosen from link below, logoColor=violet, logoWidth=30 and labelColor=black|![Alternate Text](https://img.shields.io/badge/label-message-ffa500?style=flat-square&logo=github&logoColor=violet&logoWidth=30&labelColor=black)|

---

```md
![Alternate Text](https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>?style={style}&logo={logo}&logoColor={logoColor}&logoWidth={logoWidth}&labelColor={labelColor}))
```

|Parameter|Description|
|-|-|
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

|Type|Output|Code|
|-|-|-|
|With Label|![Github](https://img.shields.io/badge/github-label-orange?style=plastic&logo=github)|`![Github](https://img.shields.io/badge/github-label-orange?style=plastic&logo=github)`|
|Without Label|![Github](https://img.shields.io/badge/github-orange?style=plastic&logo=github)|`![Github](https://img.shields.io/badge/github-orange?style=plastic&logo=github)`|

## Reference

- [Shields.io](https://shields.io/)
- [SimpleIcons.org](https://simpleicons.org/)
