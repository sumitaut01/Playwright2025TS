# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: testing\uielements\frames.spec.ts >> handling frames
- Location: tests\testing\uielements\frames.spec.ts:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#iframeResult').contentFrame().getByPlaceholder('First name')

```

# Page snapshot

```yaml
- generic [active]:
  - generic [ref=e2]:
    - link "" [ref=e3] [cursor=pointer]:
      - /url: https://www.w3schools.com
    - link "" [ref=e4] [cursor=pointer]:
      - /url: javascript:void(0);
    - link "" [ref=e5] [cursor=pointer]:
      - /url: javascript:void(0);
    - link "" [ref=e6] [cursor=pointer]:
      - /url: javascript:void(0);
    - link "" [ref=e7] [cursor=pointer]:
      - /url: javascript:void(0);
    - button "Run ❯" [ref=e8] [cursor=pointer]
    - link "Get your own website" [ref=e9] [cursor=pointer]:
      - /url: https://www.w3schools.com/spaces/
    - generic [ref=e11]: "Result Size: 492 x 665"
  - link [ref=e12]:
    - /url: javascript:void(0)
  - generic [ref=e13]:
    - text:   
    - generic [ref=e17]:
      - textbox [ref=e18]
      - generic [ref=e24]:
        - generic [ref=e26]: <!DOCTYPE html>
        - generic [ref=e28]: <html>
        - generic [ref=e30]: <body>
        - generic [ref=e34]: <h2>HTML Forms</h2>
        - generic [ref=e38]: <form action="/action_page.php">
        - generic [ref=e40]: <label for="fname">First name:</label><br>
        - generic [ref=e42]: <input type="text" id="fname" name="fname" value="John"><br>
        - generic [ref=e44]: <label for="lname">Last name:</label><br>
        - generic [ref=e46]: <input type="text" id="lname" name="lname" value="Doe"><br><br>
        - generic [ref=e48]: <input type="submit" value="Submit">
        - generic [ref=e50]: </form>
        - generic [ref=e54]: <p>If you click the "Submit" button, the form-data will be sent to a page called "/action_page.php".</p>
        - generic [ref=e58]: </body>
        - generic [ref=e60]: </html>
    - iframe [ref=e69]:
      - generic [active] [ref=f1e1]:
        - heading "HTML Forms" [level=2] [ref=f1e2]
        - generic [ref=f1e3]:
          - text: "First name:"
          - textbox "First name:" [ref=f1e4]: John
          - text: "Last name:"
          - textbox "Last name:" [ref=f1e5]: Doe
          - button "Submit" [ref=f1e6]
        - paragraph [ref=f1e7]: If you click the "Submit" button, the form-data will be sent to a page called "/action_page.php".
  - generic [ref=e70]:
    - iframe [ref=e73]:
      - generic [active] [ref=f20e1]:
        - generic:
          - generic [ref=f20e3]:
            - img [ref=f20e5]
            - generic "Python - Assign Multiple Values to Variables - W3Schools.com" [ref=f20e6]
          - generic [ref=f20e11]:
            - generic [ref=f20e14]: "-01:14"
            - link [ref=f20e21] [cursor=pointer]:
              - /url: https://www.viously.com
    - generic [ref=e75]:
      - iframe [ref=e78]:
        - generic [ref=f28e2]:
          - iframe [ref=f28e5]:
            - generic [active] [ref=f39e1]:
              - link:
                - /url: clickTag
              - generic [ref=f39e3] [cursor=pointer]:
                - img [ref=f39e11]
                - img [ref=f39e16]
                - img [ref=f39e24]
                - img [ref=f39e29]
          - generic [ref=f28e6]:
            - generic:
              - img [ref=f28e10] [cursor=pointer]
              - button [ref=f28e12] [cursor=pointer]:
                - img [ref=f28e13]
      - paragraph [ref=e79]:
        - link "REMOVE ADS" [ref=e80] [cursor=pointer]:
          - /url: https://order.w3schools.com/plans
  - generic [ref=e81]:
    - iframe [ref=e85]:
      - generic [active] [ref=f25e1]:
        - generic [ref=f25e4]:
          - generic [ref=f25e5]:
            - generic "Fortinet IPS Rules" [ref=f25e6]:
              - link "Updated Suricata Rules" [ref=f25e7] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CUH7aJ_z2abzJFvWMqfkPp-r2oQ-SyPjshgHvxNCPtRX5_d54EAEgq7GlRmDlgoCAvA6gAc7e5-QCyAEB4AIAqAMByAMKqgTPAk_Qg4fNQV49dknHVe2TficQXKGE4yImfh6UUv2XafdR4iUsxjF0cvgsmUYvGtPtlKFBiWLZA9WQ6yb4tR0FmAsBj_xCPDca7QKqmQWMqEFSoeis4qO8_mNs0a8e1YLm5jBowToHsCw-YX5trp4sdY-MbMOmCYQ-wSnTN3VOHXHtU_YaKUv0L3fPCv7O6I0KMsX5WMzGgHP4vPWrwWpaiG3Yyx0O3RHtNTp4vHt9BcsPA7e3nj5DE_W1F9s-_ZFgvDo203Mo7i4nUrMfXP1P9oXDr2o2a_xnABLmv0UxcwvjWYE5tpKbhSysTxiV4YsqN9g2J0S4vYHsq_V3govJl6U9tlmQ3QorIS-W9JvqbufFBZolMedgLkEkDKw9Oxzm0DA97cp4XkkUQJwJKmfySMScGYGoCkZc1XdtVdf09J7wA92j5T5WfrEqcGegn3LjwAT1mtvczAXgBAGIBaf5vNVXgAeaoZibAagHp8yxAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMAiAYRABGB0yCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljwp7uIz5yUA7EJyZRw6_BGVeaACgOYCwHICwGqDQJJTsgNAeINEwiG6byIz5yUAxV1RioJHSe1PfTqDRMIrua9iM-clAMVdUYqCR0ntT308A0CiA7___________8B2BMN0BUByhYCCgD4FgGAFwGyFxAYASoKMzg5NjA4OTgyOFAGuhcCOAGqGBcJAAAAAMAA7UASCjM4OTYwODk4MjgYAbIYCRICpGYYASIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI_Pi-iM-clAMVdUYqCR0ntT30EAEYASAAEgLTGfD_BwE&num=1&cid=CAQS0QEABaugfVQpS6RbSBVwRsKE0MBSrKomGAFCT36wfv5UA-BtEvj9as1huViqGIPw7y7Ym5TXlrvG469ZmYtsDDv3YSUWIQRe5DpxU650X6VAZ2iz4fbK0WmVn8ZtF-7Dt7EYn_SR7oF6AQmYearDblGuX3c_bGFIvsrMLNsHLK6V0jTVducA7Nuaw_0D5a7dtR8ar9W8nVGD20-0EQVm6DZoJYFS1uwM98JyXY2wOfA_BEzksSdYD_ZMPfiLnvNSZpKvTCkHprluHv8AUz6JKkgD-hgB&sig=AOD64_3IQIjZq4SXKctHYsiQ97LhEvZxaQ&client=ca-pub-2108208666674759&rf=4&nb=0&adurl=https://vm.fortigate.com/aws/ips-rules%3Futm_source%3Dppc-google%26utm_medium%3Ddisplay%26utm_campaign%3Dips-rules-aws-apac-in%26gad_source%3D5%26gad_campaignid%3D23533141159%26gclid%3DEAIaIQobChMI_Pi-iM-clAMVdUYqCR0ntT30EAEYASAAEgLTGfD_BwE
            - link "Enforce security policies without managing infrastructure or manually updating rules. Fortinet IPS Rules" [ref=f25e9] [cursor=pointer]:
              - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CUH7aJ_z2abzJFvWMqfkPp-r2oQ-SyPjshgHvxNCPtRX5_d54EAEgq7GlRmDlgoCAvA6gAc7e5-QCyAEB4AIAqAMByAMKqgTPAk_Qg4fNQV49dknHVe2TficQXKGE4yImfh6UUv2XafdR4iUsxjF0cvgsmUYvGtPtlKFBiWLZA9WQ6yb4tR0FmAsBj_xCPDca7QKqmQWMqEFSoeis4qO8_mNs0a8e1YLm5jBowToHsCw-YX5trp4sdY-MbMOmCYQ-wSnTN3VOHXHtU_YaKUv0L3fPCv7O6I0KMsX5WMzGgHP4vPWrwWpaiG3Yyx0O3RHtNTp4vHt9BcsPA7e3nj5DE_W1F9s-_ZFgvDo203Mo7i4nUrMfXP1P9oXDr2o2a_xnABLmv0UxcwvjWYE5tpKbhSysTxiV4YsqN9g2J0S4vYHsq_V3govJl6U9tlmQ3QorIS-W9JvqbufFBZolMedgLkEkDKw9Oxzm0DA97cp4XkkUQJwJKmfySMScGYGoCkZc1XdtVdf09J7wA92j5T5WfrEqcGegn3LjwAT1mtvczAXgBAGIBaf5vNVXgAeaoZibAagHp8yxAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMAiAYRABGB0yCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljwp7uIz5yUA7EJyZRw6_BGVeaACgOYCwHICwGqDQJJTsgNAeINEwiG6byIz5yUAxV1RioJHSe1PfTqDRMIrua9iM-clAMVdUYqCR0ntT308A0CiA7___________8B2BMN0BUByhYCCgD4FgGAFwGyFxAYASoKMzg5NjA4OTgyOFAGuhcCOAGqGBcJAAAAAMAA7UASCjM4OTYwODk4MjgYAbIYCRICpGYYASIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI_Pi-iM-clAMVdUYqCR0ntT30EAEYASAAEgLTGfD_BwE&num=1&cid=CAQS0QEABaugfVQpS6RbSBVwRsKE0MBSrKomGAFCT36wfv5UA-BtEvj9as1huViqGIPw7y7Ym5TXlrvG469ZmYtsDDv3YSUWIQRe5DpxU650X6VAZ2iz4fbK0WmVn8ZtF-7Dt7EYn_SR7oF6AQmYearDblGuX3c_bGFIvsrMLNsHLK6V0jTVducA7Nuaw_0D5a7dtR8ar9W8nVGD20-0EQVm6DZoJYFS1uwM98JyXY2wOfA_BEzksSdYD_ZMPfiLnvNSZpKvTCkHprluHv8AUz6JKkgD-hgB&sig=AOD64_3IQIjZq4SXKctHYsiQ97LhEvZxaQ&client=ca-pub-2108208666674759&rf=4&nb=7&adurl=https://vm.fortigate.com/aws/ips-rules%3Futm_source%3Dppc-google%26utm_medium%3Ddisplay%26utm_campaign%3Dips-rules-aws-apac-in%26gad_source%3D5%26gad_campaignid%3D23533141159%26gclid%3DEAIaIQobChMI_Pi-iM-clAMVdUYqCR0ntT30EAEYASAAEgLTGfD_BwE
          - link "Learn More" [ref=f25e12] [cursor=pointer]:
            - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CUH7aJ_z2abzJFvWMqfkPp-r2oQ-SyPjshgHvxNCPtRX5_d54EAEgq7GlRmDlgoCAvA6gAc7e5-QCyAEB4AIAqAMByAMKqgTPAk_Qg4fNQV49dknHVe2TficQXKGE4yImfh6UUv2XafdR4iUsxjF0cvgsmUYvGtPtlKFBiWLZA9WQ6yb4tR0FmAsBj_xCPDca7QKqmQWMqEFSoeis4qO8_mNs0a8e1YLm5jBowToHsCw-YX5trp4sdY-MbMOmCYQ-wSnTN3VOHXHtU_YaKUv0L3fPCv7O6I0KMsX5WMzGgHP4vPWrwWpaiG3Yyx0O3RHtNTp4vHt9BcsPA7e3nj5DE_W1F9s-_ZFgvDo203Mo7i4nUrMfXP1P9oXDr2o2a_xnABLmv0UxcwvjWYE5tpKbhSysTxiV4YsqN9g2J0S4vYHsq_V3govJl6U9tlmQ3QorIS-W9JvqbufFBZolMedgLkEkDKw9Oxzm0DA97cp4XkkUQJwJKmfySMScGYGoCkZc1XdtVdf09J7wA92j5T5WfrEqcGegn3LjwAT1mtvczAXgBAGIBaf5vNVXgAeaoZibAagHp8yxAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMAiAYRABGB0yCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljwp7uIz5yUA7EJyZRw6_BGVeaACgOYCwHICwGqDQJJTsgNAeINEwiG6byIz5yUAxV1RioJHSe1PfTqDRMIrua9iM-clAMVdUYqCR0ntT308A0CiA7___________8B2BMN0BUByhYCCgD4FgGAFwGyFxAYASoKMzg5NjA4OTgyOFAGuhcCOAGqGBcJAAAAAMAA7UASCjM4OTYwODk4MjgYAbIYCRICpGYYASIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI_Pi-iM-clAMVdUYqCR0ntT30EAEYASAAEgLTGfD_BwE&num=1&cid=CAQS0QEABaugfVQpS6RbSBVwRsKE0MBSrKomGAFCT36wfv5UA-BtEvj9as1huViqGIPw7y7Ym5TXlrvG469ZmYtsDDv3YSUWIQRe5DpxU650X6VAZ2iz4fbK0WmVn8ZtF-7Dt7EYn_SR7oF6AQmYearDblGuX3c_bGFIvsrMLNsHLK6V0jTVducA7Nuaw_0D5a7dtR8ar9W8nVGD20-0EQVm6DZoJYFS1uwM98JyXY2wOfA_BEzksSdYD_ZMPfiLnvNSZpKvTCkHprluHv8AUz6JKkgD-hgB&sig=AOD64_3IQIjZq4SXKctHYsiQ97LhEvZxaQ&client=ca-pub-2108208666674759&rf=4&nb=8&adurl=https://vm.fortigate.com/aws/ips-rules%3Futm_source%3Dppc-google%26utm_medium%3Ddisplay%26utm_campaign%3Dips-rules-aws-apac-in%26gad_source%3D5%26gad_campaignid%3D23533141159%26gclid%3DEAIaIQobChMI_Pi-iM-clAMVdUYqCR0ntT30EAEYASAAEgLTGfD_BwE
            - generic [ref=f25e13]: Learn More
            - img [ref=f25e14]
        - generic [ref=f25e16]:
          - link [ref=f25e18] [cursor=pointer]:
            - /url: https://adssettings.google.com/whythisad?source=display&reasons=AXhJPLKobKeSaHe8z1iUxx1C6iY0XVK7sjm34qEA_ktf_5xcT8jrPdd5dOh0vMqZ2T11VOWy0brpSzO2PlK6RO5lZcrdQTdFiSxYeRdMPSfnKO9HVoeZMdKhhG6BYCR06twoS5SxNxVAIKe2oV6QbUedy8vyFFrIXUo2qNstAUw5BXl4htEWlu_nkSXyQ6BzNVFlFEMzQD9EsU7OmrCS2GwrQo3wNkAOPQ4qOkJxIEMWQf5kE97tnNeP77LW3FsXF4UHq-eFn4mhebpJvTuXzaDwFmb5zVFqjIQD2EyQbVwJZR_K3hkDqtKFfA_ZEDoWPlKNVVeKMmfXMWALnM7QFPuF-JD0_ZeQPrFbVswxzp301oZp4mfmLlnX7XYOZ2tikA_aZirDsNI_He65x6jtbaltd7MeNbfMMykkXUlxkS-VS-VtX7j3K4-O0SpFsh3aX1droBG1UWSBeUnB7sflKAqgg8BkARD5Z2EM8fmkaNHt045k3-vBWBuV6XV70xBL60hQI7FeA_OK35FXAfp1opXqeyHmKs6m3XFtwqLb4JZ0NdepUttgTK8Al_VbZ_xv5aDLdI1Ikg28V-S5QlDhZK8PSIqCs0Hrt83UvA1V-85wVgCksOBhidFyMgN0ofjNlmlD5-HWpZzbRSCrdb7dM95hAQLJJccrWqSVTdmf3mGsUQKL8uI8388tvDFI16KuSi0uITV95Im2t3e1KZWvSvb19ESX3lAgn2VUKM3wKvhjJAybCUXQJmwsoAA1ytnsF0a3N5A3g0-7tP9qSJZpQXy87A9PIGGcSpaMzPpjEl6GE7o_fIEiLLXh0uqnP58WH-KveKmvrjOpmCU0ukW_ZMNLBziU7l3IUkZi7hozXOWufc-Rdg6odRTQlTyTgnUH2TIJccLMwdDwuWaMV3Ne2bsKA8yNrGSnUyN5uxnxLVnsl2jAKhehEzQRxsFD7t2CzS2pdIVk5buLM8JTTTp2xOfRoGB2jElGuRWGXw41Imy3109YZsw0-lx-aEozimBDU5jgEXV1Kogdqtl6boiUZ-SauYQkkAeS9aAGAOrzZPBWOnEOvhdo0lIuFX7cf_yQdLgTMiwgCq34ek5xb9R7f1BF6ROaSQwFOOviqxDKFot1De0oYuG0uBWJ3tmktIDj0bUj8ieaDyMDGZfGPNi0NEIqtXCWvXVTWs76Em-2pji15tCpuftsZw9grEeFvNZoOPabLjoX2CU65vXjSfe1iwXZhyuq3PgWeSeCjLMlSbJqdX-qhslF-X5HTiXctleuSiMxlALA6l7iV77vSFIBdvjvJngNwsdQrqUFlrqa_3ct3QM8nES3zGm71Ur7TMSPCmcpKle0T9Ie7ozft475DvAvSkwEHYmfh7c9lejRUfysKKgl0yx3-ACIfgQ-4ydSO7hZ_qsC78QJS9vvnd6o1PmYkAGeEenQzYoaQtdJfBeqnHZ24ov_A9QU5h4gN8XxngEASNCXraq2HOJbnToIeSCAhkfeKjbNnAriti0tg7ktHYoKIn1Htj9r7z_yVLEJ1eVuzcJ45b_dy1c9_onH0E8f4FzbivymuVucb-FZ4N-GbWguoTNeDMO-CV7uJ1wzbDWGb8O9Btv1u28Inere7alC8Y3ymxNgHmzHUARrBdUkwlQLG7dpR1uXKkH-OsuLaxVef8MoJPQnKAGqzG59NcVOtwyk2pMDZLcUawdRF72XfPxzgAQ5Xz29ELxaL7oND-fM_Y-ANpoCjH_DjDnzbd-3Rjk1Ws6VK9HlAXxJoY4M5BHyP1OeA6MLtMKdBejM8KmpvUkrBSeS85Wa-uJCwbNnudoIujBtUR5DhPKqDpdts9Jl704PghG_Tl95H132Cig4JnjyxBCqFQ7J25UyAuBfTaDgly6rP-RHr9ZUGgHG8lbeUlwcrAuFK1IFje1SSSXpm4yIJj4FCWPZA1G75ubhmaOs4pCHGKtSuPDxi1IFX82Ww3JFkHi2PoS-43z0GkbSmF6nK6d8igEWQtD3ubfu1SSaEMEx4aL9i57ElGkepYUlUA4cvtdHi2i7qAowXEhEkNpOd5ITVMWd_ThwSQ9a6JXWVHrarFx1IUkEmbSWmW_e5l3gcS3fjXqDLwzR6EeZVA5PbDD7wa1ZM7PEXLzNto2KywRMrcZ7W6FJQOJ2kR8ycvARI2MHgOOHYzLss1xW1yq4nRFmT-MzdrIFoDO2WVWmJsc-g4FFMC-qDTgLSMS4OMj03-sXgi_nc6i0CGHkyvGPJuD1WA2J1c7obB23eiG89v_jcyYwRDhbxl9EGaVVCrS86GiuKYZ7ZtEwkvxPOsE8pBiRH-ELWrYb2aoZV_SMejMJJ7qcPrN-QXmhA30fKxz0lgpKA21gGVv1bKEr7M3oOfTo9FkT9AIcT0Lrk3KCVmmlPjyAfKTSaMnhjlDTL_stXwrcTyeJS0xGPyfvDJhh9QsFrsjJ5MuCazHr9f8aOP6zP1QZwldL1iCnK-O4ri_qJ2uzzxyEkoyDEwnhxCEEwAtGARbASkuJ9MblLcnMK_KWYwdGyTJt01anLm7wjXFSYD2hDWJRbU08de70OVOJj6cuijjD7XuYu5ZhPe0zlle8BRikXfRnFAOYZR4mRiLpwHHzk9_fGEjIDg7fabDbJOde9K_kZbWrJeraFPua1pqk&opi=122715837
            - img [ref=f25e20]
          - link [ref=f25e22] [cursor=pointer]:
            - /url: https://adssettings.google.com/whythisad?source=display&reasons=AXhJPLKobKeSaHe8z1iUxx1C6iY0XVK7sjm34qEA_ktf_5xcT8jrPdd5dOh0vMqZ2T11VOWy0brpSzO2PlK6RO5lZcrdQTdFiSxYeRdMPSfnKO9HVoeZMdKhhG6BYCR06twoS5SxNxVAIKe2oV6QbUedy8vyFFrIXUo2qNstAUw5BXl4htEWlu_nkSXyQ6BzNVFlFEMzQD9EsU7OmrCS2GwrQo3wNkAOPQ4qOkJxIEMWQf5kE97tnNeP77LW3FsXF4UHq-eFn4mhebpJvTuXzaDwFmb5zVFqjIQD2EyQbVwJZR_K3hkDqtKFfA_ZEDoWPlKNVVeKMmfXMWALnM7QFPuF-JD0_ZeQPrFbVswxzp301oZp4mfmLlnX7XYOZ2tikA_aZirDsNI_He65x6jtbaltd7MeNbfMMykkXUlxkS-VS-VtX7j3K4-O0SpFsh3aX1droBG1UWSBeUnB7sflKAqgg8BkARD5Z2EM8fmkaNHt045k3-vBWBuV6XV70xBL60hQI7FeA_OK35FXAfp1opXqeyHmKs6m3XFtwqLb4JZ0NdepUttgTK8Al_VbZ_xv5aDLdI1Ikg28V-S5QlDhZK8PSIqCs0Hrt83UvA1V-85wVgCksOBhidFyMgN0ofjNlmlD5-HWpZzbRSCrdb7dM95hAQLJJccrWqSVTdmf3mGsUQKL8uI8388tvDFI16KuSi0uITV95Im2t3e1KZWvSvb19ESX3lAgn2VUKM3wKvhjJAybCUXQJmwsoAA1ytnsF0a3N5A3g0-7tP9qSJZpQXy87A9PIGGcSpaMzPpjEl6GE7o_fIEiLLXh0uqnP58WH-KveKmvrjOpmCU0ukW_ZMNLBziU7l3IUkZi7hozXOWufc-Rdg6odRTQlTyTgnUH2TIJccLMwdDwuWaMV3Ne2bsKA8yNrGSnUyN5uxnxLVnsl2jAKhehEzQRxsFD7t2CzS2pdIVk5buLM8JTTTp2xOfRoGB2jElGuRWGXw41Imy3109YZsw0-lx-aEozimBDU5jgEXV1Kogdqtl6boiUZ-SauYQkkAeS9aAGAOrzZPBWOnEOvhdo0lIuFX7cf_yQdLgTMiwgCq34ek5xb9R7f1BF6ROaSQwFOOviqxDKFot1De0oYuG0uBWJ3tmktIDj0bUj8ieaDyMDGZfGPNi0NEIqtXCWvXVTWs76Em-2pji15tCpuftsZw9grEeFvNZoOPabLjoX2CU65vXjSfe1iwXZhyuq3PgWeSeCjLMlSbJqdX-qhslF-X5HTiXctleuSiMxlALA6l7iV77vSFIBdvjvJngNwsdQrqUFlrqa_3ct3QM8nES3zGm71Ur7TMSPCmcpKle0T9Ie7ozft475DvAvSkwEHYmfh7c9lejRUfysKKgl0yx3-ACIfgQ-4ydSO7hZ_qsC78QJS9vvnd6o1PmYkAGeEenQzYoaQtdJfBeqnHZ24ov_A9QU5h4gN8XxngEASNCXraq2HOJbnToIeSCAhkfeKjbNnAriti0tg7ktHYoKIn1Htj9r7z_yVLEJ1eVuzcJ45b_dy1c9_onH0E8f4FzbivymuVucb-FZ4N-GbWguoTNeDMO-CV7uJ1wzbDWGb8O9Btv1u28Inere7alC8Y3ymxNgHmzHUARrBdUkwlQLG7dpR1uXKkH-OsuLaxVef8MoJPQnKAGqzG59NcVOtwyk2pMDZLcUawdRF72XfPxzgAQ5Xz29ELxaL7oND-fM_Y-ANpoCjH_DjDnzbd-3Rjk1Ws6VK9HlAXxJoY4M5BHyP1OeA6MLtMKdBejM8KmpvUkrBSeS85Wa-uJCwbNnudoIujBtUR5DhPKqDpdts9Jl704PghG_Tl95H132Cig4JnjyxBCqFQ7J25UyAuBfTaDgly6rP-RHr9ZUGgHG8lbeUlwcrAuFK1IFje1SSSXpm4yIJj4FCWPZA1G75ubhmaOs4pCHGKtSuPDxi1IFX82Ww3JFkHi2PoS-43z0GkbSmF6nK6d8igEWQtD3ubfu1SSaEMEx4aL9i57ElGkepYUlUA4cvtdHi2i7qAowXEhEkNpOd5ITVMWd_ThwSQ9a6JXWVHrarFx1IUkEmbSWmW_e5l3gcS3fjXqDLwzR6EeZVA5PbDD7wa1ZM7PEXLzNto2KywRMrcZ7W6FJQOJ2kR8ycvARI2MHgOOHYzLss1xW1yq4nRFmT-MzdrIFoDO2WVWmJsc-g4FFMC-qDTgLSMS4OMj03-sXgi_nc6i0CGHkyvGPJuD1WA2J1c7obB23eiG89v_jcyYwRDhbxl9EGaVVCrS86GiuKYZ7ZtEwkvxPOsE8pBiRH-ELWrYb2aoZV_SMejMJJ7qcPrN-QXmhA30fKxz0lgpKA21gGVv1bKEr7M3oOfTo9FkT9AIcT0Lrk3KCVmmlPjyAfKTSaMnhjlDTL_stXwrcTyeJS0xGPyfvDJhh9QsFrsjJ5MuCazHr9f8aOP6zP1QZwldL1iCnK-O4ri_qJ2uzzxyEkoyDEwnhxCEEwAtGARbASkuJ9MblLcnMK_KWYwdGyTJt01anLm7wjXFSYD2hDWJRbU08de70OVOJj6cuijjD7XuYu5ZhPe0zlle8BRikXfRnFAOYZR4mRiLpwHHzk9_fGEjIDg7fabDbJOde9K_kZbWrJeraFPua1pqk&opi=122715837
            - img [ref=f25e24]
        - img [ref=f25e27] [cursor=pointer]
        - generic [ref=f25e38]:
          - img [ref=f25e41]
          - generic [ref=f25e44]:
            - text: Ads by
            - img [ref=f25e45]
          - generic [ref=f25e48]:
            - generic [ref=f25e51] [cursor=pointer]: Send feedback
            - link [ref=f25e53] [cursor=pointer]:
              - /url: https://adssettings.google.com/whythisad?source=display&reasons=AXhJPLKobKeSaHe8z1iUxx1C6iY0XVK7sjm34qEA_ktf_5xcT8jrPdd5dOh0vMqZ2T11VOWy0brpSzO2PlK6RO5lZcrdQTdFiSxYeRdMPSfnKO9HVoeZMdKhhG6BYCR06twoS5SxNxVAIKe2oV6QbUedy8vyFFrIXUo2qNstAUw5BXl4htEWlu_nkSXyQ6BzNVFlFEMzQD9EsU7OmrCS2GwrQo3wNkAOPQ4qOkJxIEMWQf5kE97tnNeP77LW3FsXF4UHq-eFn4mhebpJvTuXzaDwFmb5zVFqjIQD2EyQbVwJZR_K3hkDqtKFfA_ZEDoWPlKNVVeKMmfXMWALnM7QFPuF-JD0_ZeQPrFbVswxzp301oZp4mfmLlnX7XYOZ2tikA_aZirDsNI_He65x6jtbaltd7MeNbfMMykkXUlxkS-VS-VtX7j3K4-O0SpFsh3aX1droBG1UWSBeUnB7sflKAqgg8BkARD5Z2EM8fmkaNHt045k3-vBWBuV6XV70xBL60hQI7FeA_OK35FXAfp1opXqeyHmKs6m3XFtwqLb4JZ0NdepUttgTK8Al_VbZ_xv5aDLdI1Ikg28V-S5QlDhZK8PSIqCs0Hrt83UvA1V-85wVgCksOBhidFyMgN0ofjNlmlD5-HWpZzbRSCrdb7dM95hAQLJJccrWqSVTdmf3mGsUQKL8uI8388tvDFI16KuSi0uITV95Im2t3e1KZWvSvb19ESX3lAgn2VUKM3wKvhjJAybCUXQJmwsoAA1ytnsF0a3N5A3g0-7tP9qSJZpQXy87A9PIGGcSpaMzPpjEl6GE7o_fIEiLLXh0uqnP58WH-KveKmvrjOpmCU0ukW_ZMNLBziU7l3IUkZi7hozXOWufc-Rdg6odRTQlTyTgnUH2TIJccLMwdDwuWaMV3Ne2bsKA8yNrGSnUyN5uxnxLVnsl2jAKhehEzQRxsFD7t2CzS2pdIVk5buLM8JTTTp2xOfRoGB2jElGuRWGXw41Imy3109YZsw0-lx-aEozimBDU5jgEXV1Kogdqtl6boiUZ-SauYQkkAeS9aAGAOrzZPBWOnEOvhdo0lIuFX7cf_yQdLgTMiwgCq34ek5xb9R7f1BF6ROaSQwFOOviqxDKFot1De0oYuG0uBWJ3tmktIDj0bUj8ieaDyMDGZfGPNi0NEIqtXCWvXVTWs76Em-2pji15tCpuftsZw9grEeFvNZoOPabLjoX2CU65vXjSfe1iwXZhyuq3PgWeSeCjLMlSbJqdX-qhslF-X5HTiXctleuSiMxlALA6l7iV77vSFIBdvjvJngNwsdQrqUFlrqa_3ct3QM8nES3zGm71Ur7TMSPCmcpKle0T9Ie7ozft475DvAvSkwEHYmfh7c9lejRUfysKKgl0yx3-ACIfgQ-4ydSO7hZ_qsC78QJS9vvnd6o1PmYkAGeEenQzYoaQtdJfBeqnHZ24ov_A9QU5h4gN8XxngEASNCXraq2HOJbnToIeSCAhkfeKjbNnAriti0tg7ktHYoKIn1Htj9r7z_yVLEJ1eVuzcJ45b_dy1c9_onH0E8f4FzbivymuVucb-FZ4N-GbWguoTNeDMO-CV7uJ1wzbDWGb8O9Btv1u28Inere7alC8Y3ymxNgHmzHUARrBdUkwlQLG7dpR1uXKkH-OsuLaxVef8MoJPQnKAGqzG59NcVOtwyk2pMDZLcUawdRF72XfPxzgAQ5Xz29ELxaL7oND-fM_Y-ANpoCjH_DjDnzbd-3Rjk1Ws6VK9HlAXxJoY4M5BHyP1OeA6MLtMKdBejM8KmpvUkrBSeS85Wa-uJCwbNnudoIujBtUR5DhPKqDpdts9Jl704PghG_Tl95H132Cig4JnjyxBCqFQ7J25UyAuBfTaDgly6rP-RHr9ZUGgHG8lbeUlwcrAuFK1IFje1SSSXpm4yIJj4FCWPZA1G75ubhmaOs4pCHGKtSuPDxi1IFX82Ww3JFkHi2PoS-43z0GkbSmF6nK6d8igEWQtD3ubfu1SSaEMEx4aL9i57ElGkepYUlUA4cvtdHi2i7qAowXEhEkNpOd5ITVMWd_ThwSQ9a6JXWVHrarFx1IUkEmbSWmW_e5l3gcS3fjXqDLwzR6EeZVA5PbDD7wa1ZM7PEXLzNto2KywRMrcZ7W6FJQOJ2kR8ycvARI2MHgOOHYzLss1xW1yq4nRFmT-MzdrIFoDO2WVWmJsc-g4FFMC-qDTgLSMS4OMj03-sXgi_nc6i0CGHkyvGPJuD1WA2J1c7obB23eiG89v_jcyYwRDhbxl9EGaVVCrS86GiuKYZ7ZtEwkvxPOsE8pBiRH-ELWrYb2aoZV_SMejMJJ7qcPrN-QXmhA30fKxz0lgpKA21gGVv1bKEr7M3oOfTo9FkT9AIcT0Lrk3KCVmmlPjyAfKTSaMnhjlDTL_stXwrcTyeJS0xGPyfvDJhh9QsFrsjJ5MuCazHr9f8aOP6zP1QZwldL1iCnK-O4ri_qJ2uzzxyEkoyDEwnhxCEEwAtGARbASkuJ9MblLcnMK_KWYwdGyTJt01anLm7wjXFSYD2hDWJRbU08de70OVOJj6cuijjD7XuYu5ZhPe0zlle8BRikXfRnFAOYZR4mRiLpwHHzk9_fGEjIDg7fabDbJOde9K_kZbWrJeraFPua1pqk&opi=122715837
              - generic [ref=f25e54]:
                - text: Why this ad?
                - img [ref=f25e55]
        - generic [ref=f25e57]:
          - generic [ref=f25e60] [cursor=pointer]: Not interested in this ad
          - generic [ref=f25e63] [cursor=pointer]: Ad covered content
          - generic [ref=f25e66] [cursor=pointer]: Ad was inappropriate
          - generic [ref=f25e69] [cursor=pointer]: Seen this ad multiple times
        - generic [ref=f25e75]: Thanks. Feedback improves Google ads
        - generic [ref=f25e81]:
          - text: Ad closed by
          - img [ref=f25e82]
    - generic [ref=e86] [cursor=pointer]: ×
```

# Test source

```ts
  1  | //
  2  | 
  3  | import { test, expect } from '@playwright/test';
  4  | 
  5  | test('handling frames',async({page})=>{
  6  |     await page.goto('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_form_submit')
  7  |     await page.waitForLoadState('networkidle')
  8  | 
  9  |     await page.waitForTimeout(2000)
  10 | 
  11 |     const frame=page.frameLocator('#iframeResult')
> 12 |     await frame.getByPlaceholder('First name').fill('sumit')
     |                                                ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  13 |     await page.waitForTimeout(2000)
  14 |     
  15 |    //if we wish to click item on page, we can still do via page object, we just need to use frame locator
  16 | 
  17 | });
```