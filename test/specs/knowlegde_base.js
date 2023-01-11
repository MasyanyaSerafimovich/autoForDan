const LoginPage = require('../pageobjects/login.page')
const KnowladgeBasePage = require('../pageobjects/knowladgeBase.page')


describe('In Knowledge base', () => {

    before(async () => {
        await LoginPage.open();
        await LoginPage.login('tpvidnoe2@gmail.com', 'kampus');
        await expect(browser).toHaveUrl('https://k-ampus.dev/collection-topics')

    })

    /*
    * === ТИП МАТЕРИАЛА ===
    */

    it('trainingCourse could be sorted', async () => {
        await KnowladgeBasePage.materialTypeChoice('trainingCourse');
        await expect(await $('[class="TypeBadge--2N9nuk7a"]')).toHaveText(['Электронный курс', 'Внешний курс', 'Корпорат. курс']);
    })

    it('library could be sorted', async () => {
        await KnowladgeBasePage.materialTypeChoice('library');
        await expect(await $('[class="TypeBadge--2N9nuk7a"]')).toHaveText(['Приложение', 'Книга']);
    })

    // === СКИП ===

    it.skip('practice could be sorted', async () => {
        await KnowladgeBasePage.materialTypeChoice('practice');
        await expect(await $('[class="TypeBadge--2N9nuk7a"]')).toHaveText('Задачи руководителя');
    })

    // === СКИП === (Надо правильно обозвать селектор)

    it.skip('all materials could be sorted', async () => {
        await KnowladgeBasePage.materialTypeChoice('all');
        await expect(await $('[class="TypeBadge--2N9nuk7a"]')).toHaveText(['Электронный курс', 'Внешний курс', 'Корпорат. курс', 'Приложение', 'Книга', 'Задачи руководителя', 'Событие']);
    })

    /*
    * === ОБЛАСТЬ РАЗВИТИЯ ===
    */

    it('HardSkills could be sorted', async () => {
        await KnowladgeBasePage.developmentAreaChoice('hardSkills');
        await KnowladgeBasePage.goToTopicCaracteristics();
        await expect(await $('[class="Category-label--3_zxmi1Z"]')).toHaveText(['HardSkills']);
    })


    after(async () => {
        await KnowladgeBasePage.logOut();
    })

    
})
