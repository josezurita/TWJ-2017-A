import { TwjExamenApiZuritaJosePage } from './app.po';

describe('twj-examen-api-zurita-jose App', () => {
  let page: TwjExamenApiZuritaJosePage;

  beforeEach(() => {
    page = new TwjExamenApiZuritaJosePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
