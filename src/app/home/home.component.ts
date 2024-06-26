import { Component, ViewChild } from '@angular/core';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MaterialModule } from '../shared/material.module';
import { CommonModule } from '@angular/common';
import { ChildrenOutletContexts, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './pages/animation';
import { AuthService } from '../auth/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, MaterialModule, CommonModule, RouterLink, RouterLinkActive, RouterOutlet, DialogComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [slideInAnimation]

})
export class HomeComponent {
  title="home"

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isMobile= true;
  isCollapsed = true;

  constructor(
    private observer: BreakpointObserver,
    private contexts: ChildrenOutletContexts,
    private authService: AuthService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if(screenSize.matches){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  toggleMenu() {
    if(this.isMobile){
      this.sidenav.toggle();
      this.isCollapsed = false; // On mobile, the menu can never be collapsed
    } else {
      this.sidenav.open(); // On desktop/tablet, the menu can never be fully closed
      this.isCollapsed = !this.isCollapsed;
    }
  }

  logout() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(({result}) => {
      if(result) {
        this.authService.logout();
        this.router.navigate(['/auth']);
      }
    });
  }

  get username() {
    const user = JSON.parse(localStorage.getItem('user')!)
    return user.firstname
  }

}
