import { Component } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { model } from '../../model/model';

@Component({
  selector: 'app-detail',
  standalone: false,
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  user: model | null;

  constructor(private userService: ServicesService) {
    this.user = this.userService.getLoggedInUser();
  }
}
