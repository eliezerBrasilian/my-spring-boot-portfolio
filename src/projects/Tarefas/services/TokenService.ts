class TokenService {
  public setToken(token: string) {
    localStorage.setItem('token', token);
  }
  public getToken() {
    const token = localStorage.getItem('token');
    if (token != null) return token;
    else return null;
  }
  public clearToken() {
    localStorage.removeItem('token');
  }
}

export { TokenService };
