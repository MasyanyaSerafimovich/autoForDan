

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class KnowladgeBasePage extends Page {
    /**
     * define selectors using getter methods
    */

    // === Тип материала ===

    get materialTypeBtn () {
        return $('/html/body/div/div/div[1]/section/main/div[2]/div/div/div/div[1]/div[1]/div[1]/div[2]/div/span/div/div');
    }

    get allMaterialsTopic () {
        return $('[role="option"]').$('[title="Все"]');
    }

    get trainingCourseBtn () {
        return $('[title="Учебные курсы"]');
    }

    get libraryBtn () {
        return $('[title="Библиотека"]');
    }

    get practiceBtn () {
        return $('[title="Практика"]');
    }

    // === Область развития ===

    get developmentAreaBtn () {
        return $('/html/body/div[1]/div/div[1]/section/main/div[2]/div/div/div/div[1]/div[1]/div[2]/div[2]/div/span/div/div');
    }

    get hardskillsBtn () {
        return $('[title="HardSkills"]');
    }

    get softskillsBtn () {
        return $('[title="SoftSkills"]');
    }

    // === Уровень ===

    get advancedBtn () {
        return $('[title="Продвинутый"]');
    }

    get advancedBtn () {
        return $('[title="Продвинутый"]');
    }

    get basicBtn () {
        return $('[title="Базовый"]');
    }

    get middleBtn () {
        return $('[title="Средний"]');
    }

    // === Топики ===

    get topicCardBtn () {
        return $('/html/body/div[1]/div/div[1]/section/main/div[4]/div[2]/div/div/a');
    }

    get topicCharacteristicsBtn () {
        return $('/html/body/div[1]/div/div[1]/section/main/div/div[2]/div[3]/div/div[4]/div/div');
    }

    get closeTopicBtn () {
        return $('/html/body/div[1]/div/div[1]/section/main/div/div[1]/div[2]/button[1]');
    }

    // === Меню ===

    get userIconBtn () {
        return $('[data-qa="userBlock"]');
    }

    get logOutBtn () {
        return $('[data-qa="logOutBtn"]');
    }
    

    /**
     * methods to encapsule automation code to interact with the page
     * e.g. to login using username and password
    */

    async materialTypeChoice(parameter) {
        await this.materialTypeBtn.click();

        switch (parameter) {
            case 'all': await this.allMaterialsTopic.click();
                break;
            case 'trainingCourse': await this.trainingCourseBtn.click();
                break;
            case 'library': await this.libraryBtn.click();
                break;
            case 'practice': await this.practiceBtn.click();
                break;
        }
    }
   
    async developmentAreaChoice(parameter) {
            await this.developmentAreaBtn.click();

        switch (parameter) {
            case 'hardSkills': await this.hardskillsBtn.click();
                break;
            case 'softSkills': await this.softskillsBtn.click();
                break;

        }
    }

    async levelChoice(parameter) {
        await this.levelBtn.click();
        switch (parameter) {
            case 'advanced': await this.advancedBtn.click();
                break;
            case 'basic': await this.basicBtn.click();
                break;
            case 'middle': await this.middleBtn.click();
                break;

        }
    }

    async goToTopicCaracteristics() {
        await this.topicCardBtn.click();
        await this.topicCharacteristicsBtn.click();
    }

    async closeTopic() {
        await this.closeTopicBtn.click();
    }

    async logOut() {
        await this.userIconBtn.click();
        await this.logOutBtn.click();
    }


    /**
     * overwrite specific options to adapt it to page object
    */

    open () {
        return super.open('collection-topics');
    }
}

module.exports = new KnowladgeBasePage();