import { Given } from "@wdio/cucumber-framework";
import url from "../../helpers/helper-functions/goToUrl.ts"

Given("a browser is open and at google home page", async () => {
    await url('/');
})