const LoginPage = require('../pageobjects/login.page')

describe('Knowledge base', () => {

    it('should open by test user', async () => {
        await LoginPage.open();
        await LoginPage.login('tpvidnoe2@gmail.com', '123456789');
        await expect(browser).toHaveUrl('https://k-ampus.dev/collection-topics')
    })

})
