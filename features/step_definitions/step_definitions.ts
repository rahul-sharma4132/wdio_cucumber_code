import { After, Before, Given, When, Then, TableDefinition } from "cucumber";
import { ActionWords } from './actionwords';

let actionWords : ActionWords;
Before(async () => {
    actionWords = new ActionWords();
});

After(async () => {
});



Given('I am on the login page', async () => {
    actionWords.iAmOnTheLoginPage();
});

When('I login with <username> and <password>', async () => {
    actionWords.iLoginWithUsernameAndPassword();
});

Then('I should see a flash message saying {string}', async (p1) => {
    actionWords.iShouldSeeAFlashMessageSayingP1(p1);
});
