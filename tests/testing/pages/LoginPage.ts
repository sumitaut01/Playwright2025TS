export class LoginPage {
  constructor(private page) {}

  async login(username: string, password: string) {
    await this.page.goto('/login');
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('#submit');
  }
}
