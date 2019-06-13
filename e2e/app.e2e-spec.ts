import { TypescriptChatClientPage } from './app.po';

describe('typescript-chat-client App', () => {
  let page: TypescriptChatClientPage;

  beforeEach(() => {
    page = new TypescriptChatClientPage();
  });

  it('should  display app name in tool bar', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Typescript Chat');
  });
});
