async function enterText(page, selector, text) {
    await page.fill(selector, text);
}

async function login(page, username, password) {
    
}
  
module.exports = { enterText };
  