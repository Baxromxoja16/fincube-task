import { Injectable } from '@angular/core';

export interface UserLogin {
  email: string
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { email: 'test@gmail.com', password: 'test@gmail.com', firstname: 'Luke', lastname: 'Skywalker', birthday: ''  },
    { email: 'test2@gmail.com', password: 'test2@gmail.com', firstname: 'Leia', lastname: 'Organa', birthday: ''  }
  ];
  constructor() { }

  login(data: UserLogin): boolean {
    const user = this.users.find(u => u.email === data.email && u.password === data.password);
    if (user) {
      localStorage.setItem('authToken', this.generateToken());
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }
    return false;
  }

  private generateToken(): string {
    return Math.random().toString(36).substring(2);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }

  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  }
}
