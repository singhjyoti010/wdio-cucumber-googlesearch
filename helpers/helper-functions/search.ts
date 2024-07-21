/**
 * Search for a keyword
 * 
 * @param {string} keyword keyword to search for
 * @param {object} inputFld WebDriverIO input search bar 
 * @param {object} list WebDriverIO flyout list
 * @param {object} submitBtn WebDriverIO submit button
 * 
 */

export default (keyword, searchBar, list, submitBtn) => {
    searchBar.waitForDisplayed(5000);
    searchBar.setValue(keyword);
    list.waitForDisplayed({timeout:20000});
    submitBtn.click();
}