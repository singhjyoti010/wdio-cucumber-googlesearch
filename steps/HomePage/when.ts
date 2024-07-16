import { When } from "@wdio/cucumber-framework";

//--------------------------- one-way ---------------------------
When('user enters {string} in search bar', async (searchText) => {
    console.log(searchText);
    let searchBar = $('[aria-label="Search"]')
    await searchBar.waitForDisplayed(5000);
    await searchBar.setValue(searchText);
    await $('//*[@role="listbox"]//*[contains(@data-entityname, "cucumber")]').waitForDisplayed({timeout:20000});
})

// --------------------------- other-way ---------------------------
// When(/^user enters "(.*)" in search bar$/, async () => {
//     // await browser.visible(shadow$(".input"))
//     let something = await $('cr-iconset').shadow$('ntp-app').shadow$("//*cr-realbox[@id='realbox']");
//     await something.waitForDisplayed(5000);
// })