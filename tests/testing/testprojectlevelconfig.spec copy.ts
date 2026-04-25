
//so we can have  baseurl as project level also by using "use" in the config file. This will be available to all the test files in the project. We can also override it at the file level if needed. This allows us to have a common baseurl for all tests while still being able to customize it for specific test files when necessary.

import { test } from '@playwright/test';  
    