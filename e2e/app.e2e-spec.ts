import { RaaginiCarWashPage } from './app.po';

describe('raagini-car-wash App', function() {
  let page: RaaginiCarWashPage;

  beforeEach(() => {
    page = new RaaginiCarWashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
