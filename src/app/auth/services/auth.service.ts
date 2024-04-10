import { Injectable } from '@angular/core';

export interface UserLogin {
  firstname: string
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { email: 'test@gmail.com', password: 'John', firstname: 'John', lastname: 'Skywalker', birthday: ''  },
    { email: 'test2@gmail.com', password: 'Michael', firstname: 'Michael', lastname: 'Organa', birthday: ''  }
  ];
  constructor() { }

  login(data: UserLogin): string {
    const user = this.users.find(u => u.firstname === data.firstname && u.password === data.password);
    if (user) {
      localStorage.setItem('authToken', this.generateToken());
      localStorage.setItem('user', JSON.stringify(user));
      return 'done';
    }
    return 'incorrect';
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
