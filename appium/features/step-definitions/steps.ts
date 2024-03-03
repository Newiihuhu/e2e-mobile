import { Given, Then, When } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'


Given("I am on the homepage", async () => {
    const title = await $('~All ToDos');
    await expect(title).toBeExisting();
});

When("I enter {string} into the todo input field", async (content: string) => {
    const textField = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.EditText');
    await expect(textField).toBeExisting();

    await textField.click();
    await textField.setValue(content);
});

When("I click the add todo button", async () => {
    const addButton = await $('//android.widget.Button[@content-desc="+"]');
    await expect(addButton).toBeExisting();

    await addButton.click()
});

Then("{string} should be added to my todo list", async (content: string) => {
    const check = $(`//android.view.View[@content-desc="${content}"]`);
    await expect(check).toBeExisting();
});
