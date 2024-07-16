import { Then } from "@wdio/cucumber-framework";

Then('links related to {string} shows up as result', async (searchText) => {
    await $(`//*[@role="listbox"]//*[contains(@data-entityname, "${searchText}")]`).click();
    // await $('//*[@class="MjjYud"]//h3[contains(text(), "Cucumber")]').waitForDisplayed({timeout: 10000});
    let links = await $$('//*[@class="MjjYud"]//h3[contains(text(), "Cucumber")]');
    let linkTextArr = [];
    for(let i = 0; i <links.length; i++){
        linkTextArr.push(await links[i].getText());
    }
    console.log("linktextarr" + linkTextArr);
    linkTextArr.forEach(link => {
        if(link.include("cucumber")){
            console.log("passed");
        } else {
            console.log("failed");
        };
    })
})