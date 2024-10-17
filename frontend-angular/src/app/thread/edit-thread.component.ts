import {Component, Input} from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule} from "@angular/forms";
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-edit-thread',
  standalone: true,
  templateUrl: './edit-thread.component.html',
  imports: [
    ReactiveFormsModule
  ],
  styleUrl: './edit-thread.component.css'
})
export class EditThreadComponent {
  @Input({required: true}) forum = '';

  threadForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    header: new FormGroup({
      description: new FormControl(''),
      status: new FormControl('ongoing')
    }),
    threadmark: new FormGroup({
      label: new FormControl('')
    })
  });

  constructor(private api: ApiService) {
  }

  onSubmit(){
    this.api.createThread(this.forum, this.threadForm);
  }
}
