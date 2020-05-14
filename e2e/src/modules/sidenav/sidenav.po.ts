import { browser, by, element, WebElement, WebElementPromise } from 'protractor';

export class SideNav {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  clickExpandNav(): WebElementPromise {
    return element(by.id('sideNavButton:expandMenu')).getWebElement();
  }

  FirstMenuCssValueDisplay(): Promise<string> {
    return element(by.id('sideNavItem:0')).getCssValue('display') as Promise<string>;
  }

}
