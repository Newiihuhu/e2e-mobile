import { Given } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'


Given(/^I am on the login page$/, async () => {
    const title = await $('~All ToDos');
    await expect(title).toBeExisting();
});

