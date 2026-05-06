# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testing\promiseall\filedownload.spec.ts >> promise all + file download
- Location: tests\testing\promiseall\filedownload.spec.ts:6:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForResponse: Test timeout of 30000ms exceeded.
=========================== logs ===========================
waiting for response "**/selenium-server-*.zip"
============================================================
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - navigation [ref=e3]:
      - link "Selenium logo green" [ref=e4] [cursor=pointer]:
        - /url: /
        - img "Selenium logo green" [ref=e6]
      - generic [ref=e17]:
        - list [ref=e18]:
          - listitem [ref=e19]:
            - button "About" [ref=e20] [cursor=pointer]
          - listitem [ref=e21]:
            - link "Downloads" [ref=e22] [cursor=pointer]:
              - /url: /downloads
          - listitem [ref=e23]:
            - link "Documentation" [ref=e24] [cursor=pointer]:
              - /url: /documentation
          - listitem [ref=e25]:
            - link "Projects" [ref=e26] [cursor=pointer]:
              - /url: /projects
          - listitem [ref=e27]:
            - link "Support" [ref=e28] [cursor=pointer]:
              - /url: /support
          - listitem [ref=e29]:
            - link "Blog" [ref=e30] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=e31]:
            - button "English" [ref=e33] [cursor=pointer]
        - button "Search" [ref=e37] [cursor=pointer]:
          - generic [ref=e38]:
            - img [ref=e39]
            - generic [ref=e41]: Search
          - generic [ref=e42]:
            - img [ref=e44]
            - generic [ref=e46]: K
    - alert [ref=e50]:
      - heading "Registrations Open for SeleniumConf 2026 | May 06–08 | Join Us In-Person! Register now!" [level=4] [ref=e51]:
        - text: Registrations Open for SeleniumConf 2026 | May 06–08 | Join Us In-Person!
        - link "Register now!" [ref=e52] [cursor=pointer]:
          - /url: https://seleniumconf.com/register/?utm_medium=Referral&utm_source=selenium.dev&utm_campaign=register
  - generic [ref=e53]:
    - main [ref=e54]:
      - generic [ref=e59]:
        - heading "Downloads" [level=1] [ref=e60]
        - paragraph [ref=e61]: Below is where you can find the latest releases of all the Selenium components.
        - paragraph [ref=e62]: You can also find a list of previous releases, source code, and additional information for Maven users.
      - generic [ref=e65]:
        - heading "Selenium Clients and WebDriver Language Bindings" [level=2] [ref=e66]
        - paragraph [ref=e67]: In order to create scripts that interact with the Selenium Server (Remote WebDriver) or create local Selenium WebDriver scripts, you need to make use of language-specific client drivers.
        - paragraph [ref=e68]:
          - text: While language bindings for
          - link "other languages exist" [ref=e69] [cursor=pointer]:
            - /url: /ecosystem
          - text: ", these are the core ones that are supported by the main project hosted on GitHub."
      - generic [ref=e70]:
        - generic [ref=e72]:
          - img ".NET/Csharp" [ref=e74]
          - generic [ref=e75]:
            - paragraph [ref=e76]: .NET/C#
            - paragraph [ref=e77]:
              - text: "Stable:"
              - link "4.43.0 (April 10, 2026)" [ref=e78] [cursor=pointer]:
                - /url: https://www.nuget.org/packages/Selenium.WebDriver
            - paragraph [ref=e79]:
              - link "Changelog" [ref=e80] [cursor=pointer]:
                - /url: https://github.com/SeleniumHQ/selenium/blob/trunk/dotnet/CHANGELOG
            - paragraph [ref=e81]:
              - link "API Docs" [ref=e82] [cursor=pointer]:
                - /url: https://seleniumhq.github.io/selenium/docs/api/dotnet/index.html
        - generic [ref=e84]:
          - img "Ruby" [ref=e86]
          - generic [ref=e87]:
            - paragraph [ref=e88]: Ruby
            - paragraph [ref=e89]:
              - text: "Stable:"
              - link "4.43.0 (April 10, 2026)" [ref=e90] [cursor=pointer]:
                - /url: https://rubygems.org/gems/selenium-webdriver/versions/4.43.0
            - paragraph [ref=e91]:
              - link "Changelog" [ref=e92] [cursor=pointer]:
                - /url: https://github.com/SeleniumHQ/selenium/blob/trunk/rb/CHANGES
            - paragraph [ref=e93]:
              - link "API Docs" [ref=e94] [cursor=pointer]:
                - /url: https://seleniumhq.github.io/selenium/docs/api/rb/index.html
        - generic [ref=e96]:
          - img "Java" [ref=e98]
          - generic [ref=e99]:
            - paragraph [ref=e100]: Java
            - paragraph [ref=e101]:
              - text: "Stable:"
              - link "4.43.0 (April 10, 2026)" [active] [ref=e102] [cursor=pointer]:
                - /url: https://github.com/SeleniumHQ/selenium/releases/download/selenium-4.43.0/selenium-java-4.43.0.zip
            - paragraph [ref=e103]:
              - link "Changelog" [ref=e104] [cursor=pointer]:
                - /url: https://github.com/SeleniumHQ/selenium/blob/trunk/java/CHANGELOG
            - paragraph [ref=e105]:
              - link "API Docs" [ref=e106] [cursor=pointer]:
                - /url: https://seleniumhq.github.io/selenium/docs/api/java/index.html
        - generic [ref=e108]:
          - img "Python" [ref=e110]
          - generic [ref=e111]:
            - paragraph [ref=e112]: Python
            - paragraph [ref=e113]:
              - text: "Stable:"
              - link "4.43.0 (April 10, 2026)" [ref=e114] [cursor=pointer]:
                - /url: https://pypi.python.org/pypi/selenium
            - paragraph [ref=e115]:
              - link "Changelog" [ref=e116] [cursor=pointer]:
                - /url: https://github.com/SeleniumHQ/selenium/blob/trunk/py/CHANGES
            - paragraph [ref=e117]:
              - link "API Docs" [ref=e118] [cursor=pointer]:
                - /url: https://seleniumhq.github.io/selenium/docs/api/py/index.html
        - generic [ref=e120]:
          - img "JavaScript" [ref=e122]
          - generic [ref=e123]:
            - paragraph [ref=e124]: JavaScript
            - paragraph [ref=e125]:
              - text: "Stable:"
              - link "4.43.0 (April 10, 2026)" [ref=e126] [cursor=pointer]:
                - /url: https://npmjs.org/package/selenium-webdriver
            - paragraph [ref=e127]:
              - link "Changelog" [ref=e128] [cursor=pointer]:
                - /url: https://github.com/SeleniumHQ/selenium/blob/trunk/javascript/selenium-webdriver/CHANGES.md
            - paragraph [ref=e129]:
              - link "API Docs" [ref=e130] [cursor=pointer]:
                - /url: https://seleniumhq.github.io/selenium/docs/api/javascript/index.html
      - generic [ref=e131]:
        - generic [ref=e134]:
          - paragraph [ref=e135]: Selenium Server (Grid)
          - paragraph [ref=e136]: The Selenium Server is needed in order to run Remote Selenium WebDriver (Grid).
        - generic [ref=e139]:
          - paragraph [ref=e140]:
            - text: Latest stable version
            - link "4.43.0" [ref=e141] [cursor=pointer]:
              - /url: https://github.com/SeleniumHQ/selenium/releases/download/selenium-4.43.0/selenium-server-4.43.0.jar
          - paragraph [ref=e142]:
            - text: To use the Selenium Server in a Grid configuration, see the
            - link "documentation" [ref=e143] [cursor=pointer]:
              - /url: https://selenium.dev/documentation/en/grid/
            - text: .
          - paragraph [ref=e144]:
            - text: To run the Grid with popular browsers using Docker, see the
            - link "repository" [ref=e145] [cursor=pointer]:
              - /url: https://github.com/SeleniumHQ/docker-selenium
            - text: .
          - paragraph [ref=e146]:
            - text: To deploy the Grid to Kubernetes cluster, see the Helm chart
            - link "configuration" [ref=e147] [cursor=pointer]:
              - /url: https://github.com/SeleniumHQ/docker-selenium/blob/trunk/charts/selenium-grid/README.md
            - text: .
      - generic [ref=e148]:
        - generic [ref=e151]:
          - paragraph [ref=e152]: The Internet Explorer Driver Server
          - paragraph [ref=e153]: This is required if you want to make use of the latest and greatest features of the WebDriver InternetExplorerDriver.
          - paragraph [ref=e154]:
            - text: Please make sure that this is available on your
            - code [ref=e155]: "%PATH%"
            - text: in order for the IE Driver to work as expected.
        - generic [ref=e158]:
          - paragraph [ref=e159]: "Download version 4.14.0.0 for:"
          - paragraph [ref=e160]:
            - link "32 bit Windows IE" [ref=e161] [cursor=pointer]:
              - /url: https://github.com/SeleniumHQ/selenium/releases/download/selenium-4.14.0/IEDriverServer_Win32_4.14.0.zip
            - text: (recommended)
          - paragraph [ref=e162]:
            - link "64 bit Windows IE" [ref=e163] [cursor=pointer]:
              - /url: https://github.com/SeleniumHQ/selenium/releases/download/selenium-4.14.0/IEDriverServer_x64_4.14.0.zip
          - paragraph [ref=e164]:
            - link "CHANGELOG" [ref=e165] [cursor=pointer]:
              - /url: https://github.com/SeleniumHQ/selenium/blob/trunk/cpp/iedriverserver/CHANGELOG
      - generic [ref=e168]:
        - heading "Selenium IDE" [level=2] [ref=e169]
        - paragraph [ref=e170]: Selenium IDE is a Chrome, Firefox and Edge plugin which records and plays back user interactions with the browser. Use this to either create simple scripts or assist in exploratory testing.
        - paragraph [ref=e171]:
          - text: Download latest released version for
          - link "Chrome" [ref=e172] [cursor=pointer]:
            - /url: https://chrome.google.com/webstore/detail/selenium-ide/mooikfkahbdckldjjndioackbalphokd
          - text: or
          - link "Firefox" [ref=e173] [cursor=pointer]:
            - /url: https://addons.mozilla.org/en-US/firefox/addon/selenium-ide/
          - text: or
          - link "Edge" [ref=e174] [cursor=pointer]:
            - /url: https://microsoftedge.microsoft.com/addons/detail/selenium-ide/ajdpfmkffanmkhejnopjppegokpogffp
          - text: . View the
          - link "Release Notes." [ref=e175] [cursor=pointer]:
            - /url: https://github.com/SeleniumHQ/selenium-ide/releases
        - paragraph [ref=e176]:
          - text: Download previous IDE
          - link "versions" [ref=e177] [cursor=pointer]:
            - /url: https://addons.mozilla.org/en-GB/firefox/addon/selenium-ide/versions/
          - text: .
      - generic [ref=e180]:
        - heading "Selenium Nightly Builds" [level=2] [ref=e181]
        - paragraph [ref=e182]: If you need a bug fix or a feature that just landed on the codebase, or if you wish to test the next release before it is out, check the Selenium Nightly Builds.
        - paragraph [ref=e183]: While we always strive to keep code in a releasable state, bugs or undocumented changes might be present when you use a nightly build.
        - paragraph
        - generic [ref=e184]:
          - generic [ref=e186]:
            - img "C Sharp" [ref=e188]
            - generic [ref=e190]:
              - heading ".NET/C#" [level=4] [ref=e191]
              - paragraph [ref=e192]:
                - link "Selenium.WebDriver" [ref=e193] [cursor=pointer]:
                  - /url: https://github.com/SeleniumHQ/selenium/pkgs/nuget/Selenium.WebDriver
                - text: "&"
                - link "Selenium.Support" [ref=e194] [cursor=pointer]:
                  - /url: https://github.com/SeleniumHQ/selenium/pkgs/nuget/Selenium.Support
              - paragraph [ref=e195]:
                - text: You will need to authenticate to the GitHub NuGet registry, instructions can be seen at the
                - link "GitHub documentation" [ref=e196] [cursor=pointer]:
                  - /url: https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-nuget-registry
                - text: .
          - generic [ref=e198]:
            - img "Ruby" [ref=e200]
            - generic [ref=e202]:
              - heading "Ruby" [level=4] [ref=e203]
              - paragraph [ref=e204]:
                - link "WebDriver" [ref=e205] [cursor=pointer]:
                  - /url: https://github.com/SeleniumHQ/selenium/pkgs/rubygems/selenium-webdriver
                - text: "&"
                - link "DevTools" [ref=e206] [cursor=pointer]:
                  - /url: https://github.com/SeleniumHQ/selenium/pkgs/rubygems/selenium-devtools
              - paragraph [ref=e207]:
                - text: You will need to authenticate to the GitHub RubyGems registry, instructions can be seen at the
                - link "GitHub documentation" [ref=e208] [cursor=pointer]:
                  - /url: https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-rubygems-registry
                - text: .
          - generic [ref=e210]:
            - img "Python" [ref=e212]
            - generic [ref=e214]:
              - heading "Python" [level=4] [ref=e215]
              - paragraph [ref=e216]:
                - text: Nightly builds are pushed to
                - link "TestPyPI" [ref=e217] [cursor=pointer]:
                  - /url: https://test.pypi.org/project/selenium/
                - text: .
          - generic [ref=e219]:
            - img "JavaScript" [ref=e221]
            - generic [ref=e223]:
              - heading "JavaScript" [level=4] [ref=e224]
              - paragraph [ref=e225]:
                - link "selenium-webdriver" [ref=e226] [cursor=pointer]:
                  - /url: https://github.com/SeleniumHQ/selenium/pkgs/npm/selenium-webdriver
              - paragraph [ref=e227]:
                - text: You will need to authenticate to the GitHub npm registry, instructions can be seen at the
                - link "GitHub documentation" [ref=e228] [cursor=pointer]:
                  - /url: https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry
                - text: .
          - generic [ref=e230]:
            - img "Java" [ref=e232]
            - generic [ref=e234]:
              - heading "Java" [level=4] [ref=e235]
              - paragraph [ref=e236]:
                - link "WebDriver" [ref=e237] [cursor=pointer]:
                  - /url: https://oss.sonatype.org/content/repositories/snapshots/org/seleniumhq/selenium/selenium-java/
                - text: "&"
                - link "Grid" [ref=e238] [cursor=pointer]:
                  - /url: https://github.com/SeleniumHQ/selenium/releases/tag/nightly
              - paragraph [ref=e239]:
                - text: To use the Java SNAPSHOT versions, you will need to add the
                - link "snapshot repository" [ref=e240] [cursor=pointer]:
                  - /url: https://github.com/SeleniumHQ/seleniumhq.github.io/blob/trunk/examples/java/pom.xml#L18-L26
                - text: .
      - generic [ref=e243]:
        - heading "C# NuGet" [level=2] [ref=e244]
        - paragraph [ref=e245]: Nuget latest release is 4.43.0 Released on April 10, 2026.
        - list [ref=e246]:
          - listitem [ref=e247]:
            - paragraph [ref=e248]:
              - link "WebDriver" [ref=e249] [cursor=pointer]:
                - /url: https://www.nuget.org/packages/Selenium.WebDriver
          - listitem [ref=e250]:
            - paragraph [ref=e251]:
              - link "Support" [ref=e252] [cursor=pointer]:
                - /url: https://www.nuget.org/packages/Selenium.Support
          - listitem [ref=e253]:
            - paragraph [ref=e254]:
              - link "WebDriverBackedSelenium" [ref=e255] [cursor=pointer]:
                - /url: https://www.nuget.org/packages/Selenium.WebDriverBackedSelenium
              - text: (Final version 4.1.0 Released on November 22, 2021)
          - listitem [ref=e256]:
            - paragraph [ref=e257]:
              - link "RC" [ref=e258] [cursor=pointer]:
                - /url: https://www.nuget.org/packages/Selenium.RC
              - text: (Final version 3.1.0 Released on February 16, 2017)
      - generic [ref=e261]:
        - heading "Previous Releases" [level=2] [ref=e262]
        - paragraph [ref=e263]:
          - text: Here you can find a more complete list of Selenium
          - link "releases" [ref=e264] [cursor=pointer]:
            - /url: "#previous-releases"
          - text: .
        - text:                                                                                                                                                                                                                                                                                                             
        - paragraph
      - generic [ref=e267]:
        - heading "Maven Information" [level=2] [ref=e268]
        - paragraph [ref=e269]:
          - text: If you're using Maven or Gradle, you will find more information on
          - link "MVNRepository" [ref=e270] [cursor=pointer]:
            - /url: https://mvnrepository.com/artifact/org.seleniumhq.selenium
          - text: . When the most recent version of Selenium is not there yet, you can also check the Selenium
          - link "Maven repository" [ref=e271] [cursor=pointer]:
            - /url: https://repo1.maven.org/maven2/org/seleniumhq/selenium/
          - text: .
      - generic [ref=e274]:
        - heading "Ecosystem" [level=2] [ref=e275]
        - paragraph [ref=e276]:
          - text: Over the last decade, a large ecosystem of Open Source projects have sprouted up around Selenium. Check them out at the
          - link "Ecosystem page" [ref=e277] [cursor=pointer]:
            - /url: /ecosystem
          - text: .
      - generic [ref=e280]:
        - heading "Platforms Supported by Selenium" [level=2] [ref=e281]
        - paragraph
        - paragraph [ref=e282]:
          - button "+  Browsers" [ref=e283] [cursor=pointer]:
            - generic [ref=e284]: +
            - generic [ref=e285]: 
            - text: Browsers
        - paragraph
        - paragraph [ref=e286]:
          - button "+  Operating Systems" [ref=e287] [cursor=pointer]:
            - generic [ref=e288]: +
            - generic [ref=e289]: 
            - text: Operating Systems
        - paragraph
      - generic [ref=e292]:
        - heading "Source Code" [level=2] [ref=e293]
        - paragraph [ref=e294]:
          - text: You can also find a list of the Selenium source code at our
          - link "GitHub repository" [ref=e295] [cursor=pointer]:
            - /url: https://github.com/SeleniumHQ/selenium
          - text: .
    - heading "Development Partners" [level=2] [ref=e297]
    - generic [ref=e298]:
      - link "BrowserStack" [ref=e300] [cursor=pointer]:
        - /url: https://www.browserstack.com/automate?utm_campaign=open-source-sponsor&utm_campaigncode=701OW000009sQwVYAU&utm_medium=partnered&utm_source=seleniumorg
        - img "BrowserStack" [ref=e301]
      - link "Sauce Labs" [ref=e303] [cursor=pointer]:
        - /url: https://saucelabs.com/resources/topic-hub/selenium?utm_source=selenium&utm_medium=website&utm_campaign=selenium-sponsorship-fy25
        - img "Sauce Labs" [ref=e304]
      - link "TestMu AI (formerly LambdaTest)" [ref=e306] [cursor=pointer]:
        - /url: https://www.testmuai.com/selenium-automation
        - img "TestMu AI (formerly LambdaTest)" [ref=e307]
    - heading "Selenium Level Sponsors" [level=2] [ref=e309]
    - generic [ref=e310]:
      - link "Bright Data" [ref=e312] [cursor=pointer]:
        - /url: https://brightdata.com/?utm_source=brand&utm_campaign=brnd-mkt_partners_selenium
        - img "Bright Data" [ref=e313]
      - link "Applitools" [ref=e315] [cursor=pointer]:
        - /url: https://applitools.com/
        - img "Applitools" [ref=e316]
      - link "Thordata" [ref=e318] [cursor=pointer]:
        - /url: https://www.thordata.com/?ls=waOicIkB&lk=selenium
        - img "Thordata" [ref=e319]
    - generic [ref=e322]:
      - heading "Support the Selenium Project" [level=2] [ref=e323]
      - paragraph [ref=e324]: Learn more or view the full list of sponsors.
      - link "Learn more " [ref=e326] [cursor=pointer]:
        - /url: /sponsors
        - text: Learn more
        - generic [ref=e327]: 
    - contentinfo [ref=e328]:
      - generic [ref=e330]:
        - list [ref=e332]:
          - listitem "Selenium Linkedin" [ref=e333]:
            - link "Selenium Linkedin" [ref=e334] [cursor=pointer]:
              - /url: https://www.linkedin.com/company/4826427/
              - generic [ref=e335]: 
          - listitem "Selenium X" [ref=e336]:
            - link "Selenium X" [ref=e337] [cursor=pointer]:
              - /url: https://x.com/SeleniumHQ
              - generic [ref=e338]: 
          - listitem "Selenium Community YouTube Channel" [ref=e339]:
            - link "Selenium Community YouTube Channel" [ref=e340] [cursor=pointer]:
              - /url: https://www.youtube.com/@SeleniumHQProject/
              - generic [ref=e341]: 
          - listitem "Selenium Mastodon" [ref=e342]:
            - link "Selenium Mastodon" [ref=e343] [cursor=pointer]:
              - /url: https://mastodon.social/@seleniumHQ@fosstodon.org
              - generic [ref=e344]: 
          - listitem "Selenium BlueSky" [ref=e345]:
            - link "Selenium BlueSky" [ref=e346] [cursor=pointer]:
              - /url: https://bsky.app/profile/seleniumconf.bsky.social
              - generic [ref=e347]: 
          - listitem "User mailing list" [ref=e348]:
            - link "User mailing list" [ref=e349] [cursor=pointer]:
              - /url: https://groups.google.com/group/selenium-users
              - generic [ref=e350]: 
          - listitem "SeleniumConf YouTube Channel" [ref=e351]:
            - link "SeleniumConf YouTube Channel" [ref=e352] [cursor=pointer]:
              - /url: https://www.youtube.com/channel/UCbDlgX_613xNMrDqCe3QNEw
              - generic [ref=e353]: 
        - generic [ref=e354]:
          - list [ref=e355]:
            - listitem "Software Freedom Conservancy" [ref=e356]:
              - link "Software Freedom Conservancy" [ref=e357] [cursor=pointer]:
                - /url: mailto:selenium@sfconservancy.org
                - generic [ref=e358]: 
            - listitem "GitHub" [ref=e359]:
              - link "GitHub" [ref=e360] [cursor=pointer]:
                - /url: https://github.com/seleniumhq/selenium
                - generic [ref=e361]: 
            - listitem "Slack" [ref=e362]:
              - link "Slack" [ref=e363] [cursor=pointer]:
                - /url: https://inviter.co/seleniumhq
                - generic [ref=e364]: 
            - listitem "IRC" [ref=e365]:
              - link "IRC" [ref=e366] [cursor=pointer]:
                - /url: https://web.libera.chat/#selenium
                - generic [ref=e367]: 
            - listitem "Developer mailing list" [ref=e368]:
              - link "Developer mailing list" [ref=e369] [cursor=pointer]:
                - /url: https://groups.google.com/g/selenium-developers
                - generic [ref=e370]: 
          - link "Deploys by Netlify" [ref=e371] [cursor=pointer]:
            - /url: https://www.netlify.com
            - img "Deploys by Netlify" [ref=e372]
        - generic [ref=e373]:
          - text: © 2026 Software Freedom Conservancy All Rights Reserved
          - paragraph [ref=e374]:
            - link "About Selenium" [ref=e375] [cursor=pointer]:
              - /url: /about/
```

# Test source

```ts
  1  | 
  2  | import {test, expect} from '@playwright/test'
  3  | import fs from 'fs'
  4  | import path from 'path/win32'
  5  | 
  6  | test('promise all + file download', async ({ page }) => {
  7  |   await page.goto('https://www.selenium.dev/downloads/')    
  8  | 
  9  |     // Wait for both the response and the download to complete  
  10 |     const [response, download] = await Promise.all([    
> 11 |         page.waitForResponse('**/selenium-server-*.zip'),  // Wait for the specific file response   
     |              ^ Error: page.waitForResponse: Test timeout of 30000ms exceeded.
  12 |         page.waitForEvent('download'),    // Wait for the download event to occur
  13 |         page.click('xpath=/html/body/div/main/div[3]/div[3]/div/div[2]/p[2]/a')        // Trigger the download action
  14 |     ])
  15 | 
  16 | 
  17 |     const pathname=path.join(__dirname, 'downloads', download.suggestedFilename())// Construct the file path for saving the downloaded file
  18 | 
  19 |     if(!fs.existsSync(pathname)){ // Check if the file already exists
  20 |         fs.mkdirSync(path.dirname(pathname), { recursive: true }) // Create the directory if it doesn't exist
  21 |     }
  22 | 
  23 | 
  24 |     await download.saveAs(pathname) // Save the downloaded file to the specified path
  25 | 
  26 |     // Verify the file was downloaded successfully
  27 |     expect(fs.existsSync(pathname)).toBeTruthy() // Check if the file exists at the specified path
  28 | })
```