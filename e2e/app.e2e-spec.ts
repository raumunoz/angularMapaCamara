import { AngularMapaCamaraPage } from './app.po';

describe('angular-mapa-camara App', function() {
  let page: AngularMapaCamaraPage;

  beforeEach(() => {
    page = new AngularMapaCamaraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
