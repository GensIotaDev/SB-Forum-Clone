import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'profile',
  standalone: true,
  imports: [
  ],
  templateUrl: 'profile.component.html',
  styleUrl: 'profile.component.css'
})
export class ProfileComponent implements OnInit {
  @Input() id! : string;


  ngOnInit(): void {
      throw new Error("Method not implemented.");
  }
}
