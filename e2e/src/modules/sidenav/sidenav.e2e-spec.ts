import { SideNav } from './sidenav.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: SideNav;

  beforeEach(() => {
    page = new SideNav();
  });

  it('should expand menu', () => {
    page.clickExpandNav()
    expect(page.FirstMenuCssValueDisplay()).toEqual('block');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
