

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class KnowladgeBasePage extends Page {
    /**
     * define selectors using getter methods
     */


    get materialTypeBtn () {
        return $('[class="Select--77lnVdLY white--1mIS2bv0"]');
    }

    get developmentAreaBtn () {
        return $('/html/body/div[1]/div/div[1]/section/main/div[2]/div/div/div/div[1]/div[1]/div[2]/div[2]/div/span/div/div');
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

    get hardskillsBtn () {
        return $('[title="HardSkills"]');
    }

    get topicCardBtn () {
        return $('[class="header--JWBa4lzJ"]');
    }

    get topicCharacteristicsBtn () {
        return $('[class="Details-line--1ZBFn0xY Details-line-point--3NW2m8d6"]');
    }

    


    get userIconBtn () {
        return $('[data-qa="userBlock"]');
    }

    get logOutBtn () {
        return $('[data-qa="logOutBtn"]');
    }
    

    /**
     * a method to encapsule automation code to interact with the page
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

        }
    }


    async goToTopicCaracteristics() {
        await this.topicCardBtn.click();
        await this.topicCharacteristicsBtn.click();
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
