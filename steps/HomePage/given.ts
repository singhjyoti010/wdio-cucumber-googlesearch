import { Given } from "@wdio/cucumber-framework";

Given("a browser is open and at google home page", async () => {
    await browser.url("/");
})