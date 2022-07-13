# Sanity Vs Regression Vs Smoke

![Visitor](https://visitor-badge.laobi.icu/badge?page_id=aasisodiya.general.se.sanity-vs-regression)

- [Sanity Vs Regression Vs Smoke](#sanity-vs-regression-vs-smoke)
  - [Difference between Smoke Testing Vs Sanity Testing Vs Regression Testing](#difference-between-smoke-testing-vs-sanity-testing-vs-regression-testing)
  - [Reference](#reference)

## Difference between Smoke Testing Vs Sanity Testing Vs Regression Testing

|Smoke Testing|Sanity Testing|
|-|-|
|Smoke testing means to verify (basic) that the implementations done in a build are working fine.|Sanity testing means to verify the newly added functionalities, bugs etc. are working fine.|
|This is the first testing on the initial build.|Done when the build is relatively stable.|
|Done on every build.|Done on stable builds post regression.|

---

|Regression Testing|Sanity Testing|
|-|-|
|Regression testing is done to verify that the complete system and bug fixes are working fine.|Sanity testing is done at random to verify that each functionality is working as expected.|
|Every tiniest part is regressed in this testing.|This is not a planned testing and is done only when there’s a time crunch.|
|It is a well elaborate and planned testing.|This is not a planned testing and is done only when there’s a time crunch.|
|An appropriately designed suite of test cases is created for this testing.|It may not every time be possible to create the test cases; a rough set of test cases is created usually.|
|This includes in-depth verification of functionality, UI, performance, browser/OS testing etc. i.e. every aspect of the system is regressed.|This mainly includes verification of business rules, functionality.|
|This is a wide and deep testing.|This is a wide and shallow testing.|
|This testing is at times scheduled for weeks or even month(s).|This mostly spans over 2-3 days max.|

---

![Testing Flow](graph.png)

## Reference

[Difference between Smoke Testing Vs Sanity Testing Vs Regression Testing](https://www.softwaretestinghelp.com/smoke-testing-and-sanity-testing-difference/)
