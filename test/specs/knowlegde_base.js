const LoginPage = require('../pageobjects/login.page')
const KnowladgeBasePage = require('../pageobjects/knowladgeBase.page')


describe('On Knowledge base page', () => {

    before(async () => {
        await LoginPage.open();
        await LoginPage.login('tpvidnoe2@gmail.com', 'kampus');
        await expect(browser).toHaveUrl('https://k-ampus.dev/collection-topics')

    })

    describe('in material type filter', () => {

        it('trainingCourse could be sorted', async () => {
            await KnowladgeBasePage.materialTypeChoice('trainingCourse');
            await expect(await $('/html/body/div[1]/div/div[1]/section/main/div[4]/div[2]/div/div/div/div[1]/div[1]/div[2]/div/div')).toHaveText(['Электронный курс', 'Внешний курс', 'Корпорат. курс']);
        })
     
        it('library could be sorted', async () => {
            await KnowladgeBasePage.materialTypeChoice('library');
            await expect(await $('/html/body/div[1]/div/div[1]/section/main/div[4]/div[2]/div/div/div/div[1]/div[1]/div[2]/div/div')).toHaveText(['Приложение', 'Книга']);
        })
     
        // === СКИП ===
        it.skip('practice could be sorted', async () => {
            await KnowladgeBasePage.materialTypeChoice('practice');
            await expect(await $('/html/body/div[1]/div/div[1]/section/main/div[4]/div[2]/div/div/div/div[1]/div[1]/div[2]/div/div')).toHaveText('Задачи руководителя');
        })
     
        // === СКИП === (Надо правильно обозвать селектор)
        it.skip('all materials could be sorted', async () => {
            await KnowladgeBasePage.materialTypeChoice('all');
            await expect(await $('/html/body/div[1]/div/div[1]/section/main/div[4]/div[2]/div/div/div/div[1]/div[1]/div[2]/div/div')).toHaveText(['Электронный курс', 'Внешний курс', 'Корпорат. курс', 'Приложение', 'Книга', 'Задачи руководителя', 'Событие']);
        })

    })

    describe('in development area filter', () => {

        it('HardSkills could be sorted', async () => {
            await KnowladgeBasePage.developmentAreaChoice('hardSkills');
            await KnowladgeBasePage.goToTopicCaracteristics();
            await expect(await $('/html/body/div/div/div[1]/section/main/div/div[2]/div[3]/div/div[4]/div[1]/div[2]')).toHaveText(['HardSkills']);
        })

        it('SoftSkills could be sorted', async () => {
            await KnowladgeBasePage.developmentAreaChoice('softSkills');
            await KnowladgeBasePage.goToTopicCaracteristics();
            await expect(await $('/html/body/div/div/div[1]/section/main/div/div[2]/div[3]/div/div[4]/div[1]/div[2]')).toHaveText(['SoftSkills']);
        })

        afterEach(async () => {
            await KnowladgeBasePage.closeTopic();
        })

    })

    after(async () => {
        await KnowladgeBasePage.logOut();
    })

    
})
