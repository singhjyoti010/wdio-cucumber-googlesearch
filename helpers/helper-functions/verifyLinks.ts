/**
 * 
 * verify search result links
 * @param {object} links WebDriverIO links
 * 
 */

// export default () => {
//     let links = await $$('//*[@class="MjjYud"]//h3[contains(text(), "Cucumber")]');
//     let linkTextArr = [];
//     for(let i = 0; i <links.length; i++){
//         linkTextArr.push(await links[i].getText());
//     }
//     console.log("linktextarr" + linkTextArr);
//     linkTextArr.forEach(link => {
//         if(link.include("cucumber")){
//             console.log("passed");
//         } else {
//             console.log("failed");
//         };
//     })
// }