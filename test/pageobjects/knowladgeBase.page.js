

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

    get trainingCourseBtn () {
        return $('[title="Учебные курсы"]');
    }

    get libraryBtn () {
        return $('[title="Библиотека"]');
    }

    get practiceBtn () {
        return $('[title="Практика"]');
    }

    get userIconBtn () {
        return $('[data-qa="userBlock"]');
    }

    get logOutBtn () {
        return $('[data-qa="logOutBtn"]');
    }

    get trainingCourseTopic () {
        return $('[title="Учебные курсы"]');
    }
    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async materialTypeChoice(parameter) {
        await this.materialTypeBtn.click();

        switch (parameter) {
            case 'trainingCourse': await this.trainingCourseBtn.click();
                break;
            case 'library': await this.libraryBtn.click();
                break;
            case 'practice': await this.practiceBtn.click();
                break;
        }
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
