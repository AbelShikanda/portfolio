import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(public router:Router) {}
  onHome() {this.router.navigate(['portfolio-site/home'])}
  onSkills() {
    const skillSection = document.getElementById('skills-section')
    if (skillSection) {
      skillSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
  onAbout() {this.router.navigate(['portfolio-site/about'])}
  onContact() {this.router.navigate(['portfolio-site/contact'])}

}
