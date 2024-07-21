import { When } from "@wdio/cucumber-framework";
import search from "../../helpers/helper-functions/search.ts";

//--------------------------- one-way ---------------------------
When('user enters {string} in search bar', async (searchText) => {
    await search(searchText, $('[aria-label="Search"]'), $('//*[@role="listbox"]//*[contains(@data-entityname, "cucumber")]'), $(`//*[@role="listbox"]//*[contains(@data-entityname, "${searchText}")]`));
})

// --------------------------- other-way ---------------------------
// When(/^user enters "(.*)" in search bar$/, async () => {
//     // await browser.visible(shadow$(".input"))
//     let something = await $('cr-iconset').shadow$('ntp-app').shadow$("//*cr-realbox[@id='realbox']");
//     await something.waitForDisplayed(5000);
// })