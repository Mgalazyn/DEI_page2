import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen: boolean = false; // Track the state of the menu

  toggleMenu(): void {
    const list = document.querySelector('ul')!;
    const icon = document.querySelector('.menu-icon') as HTMLElement;

    // Toggle the menu state
    this.isMenuOpen = !this.isMenuOpen;

    // Apply CSS classes first
    if (this.isMenuOpen) {
      list.classList.add('top-[80px]', 'opacity-100', 'bg-black', 'z-999');
    } else {
      list.classList.remove('top-[80px]', 'opacity-100');
    }

    // Change icon after applying CSS classes
    icon.setAttribute('name', this.isMenuOpen ? 'close-outline' : 'menu-outline');
  }
}
