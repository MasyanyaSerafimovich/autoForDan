const LoginPage = require('../pageobjects/login.page')
const KnowladgeBasePage = require('../pageobjects/knowladgeBase.page')

describe('In Knowledge base', () => {

    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login('tpvidnoe2@gmail.com', '123456789');
        await expect(browser).toHaveUrl('https://k-ampus.dev/collection-topics')
    })

    it('trainingCourse could be sorted', async () => {
        await KnowladgeBasePage.materialTypeChoice('trainingCourse');
        await expect(await $('[class="TypeBadge--2N9nuk7a"]')).toHaveText(['Электронный курс', 'Внешний курс', 'Корпорат. курс']);
    })

    it('library could be sorted', async () => {
        await KnowladgeBasePage.materialTypeChoice('library');
        await expect(await $('[class="TypeBadge--2N9nuk7a"]')).toHaveText(['Приложение', 'Книга']);
        //await expect(await $('[class="header--JWBa4lzJ"]')).not.toHaveText('Кто такие Эники Беники? И почему они ели вареники?');
    })

    /* ----Поломано на деве----
    it('practice could be sorted', async () => {
        await KnowladgeBasePage.materialTypeChoice('practice');
        await expect(await $('[class="TypeBadge--2N9nuk7a"]')).toHaveText('Задачи руководителя');
    })
    */

    afterEach(async () => {
        await KnowladgeBasePage.logOut();
    })
    
})
