import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shell-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  standalone: false,
})
export class WelcomeComponent implements OnInit {
  user = 'a'
  newName = '';

  ngOnInit(): void {}

  update() {
  }
}
