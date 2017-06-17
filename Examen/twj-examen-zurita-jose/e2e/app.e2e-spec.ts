import { TwjExamenZuritaJosePage } from './app.po';

describe('twj-examen-zurita-jose App', () => {
  let page: TwjExamenZuritaJosePage;

  beforeEach(() => {
    page = new TwjExamenZuritaJosePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
