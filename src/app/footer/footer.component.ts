import { Component, Input } from '@angular/core';
import { SocialButton } from '../classes/social-button';
import { Item } from '../services/item';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class AppFooterComponent {
  @Input() projectLove: SocialButton[] | undefined;
  @Input() color: string | undefined;
  isOpen!: boolean;
  navigation: NavigationService;

  constructor(navigation: NavigationService) {
    this.navigation = navigation;
  }

  routeExternal(item: Item) {
    this.navigation.navigate(item);
  }
}
