import {Component, OnInit} from '@angular/core';
import {ForumService} from "../../services/forum.service";
import {debounceTime, map, Observable, OperatorFunction, tap} from "rxjs";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {NgbTypeahead, NgbTypeaheadSelectItemEvent} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {RefObj} from "../../common/refobj.interface";

@Component({
  selector: 'create-forum',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
    FormsModule,
    NgbTypeahead,
    JsonPipe
  ],
  templateUrl: './forum-create.component.html',
  styleUrl: './forum-create.component.scss'
})
export class ForumCreateComponent implements OnInit {
  forums$!: Observable<RefObj<string>[]>;
  sections: string[] = [];

  form: FormGroup;
  section: string = '';


  search: OperatorFunction<string, string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map((term) =>
        term === '' ? [] : this.sections.filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)
      )
    );
  formatter = (x: string) => x;

  constructor(private forumService: ForumService, private formBuilder: FormBuilder, private router: Router) {
    this.form = formBuilder.group({
      title: ['', {
        validators: [
          Validators.required
        ]
      }],
      section: [{ id: 0, value: null }, {
        validators: [
          //Validators.required
        ]
      }],
      parent: [0],
      description: ['', {
        validators: [
          Validators.required
        ]
      }]
    });
  }

  ngOnInit(): void {
    /*this.forumService.getExistingSections().subscribe({
      next: (v) => this.sections = v
    });*/
    /*this.forums$ = this.forumService.getForumRefObjs()
      .pipe(
        tap(console.log)
      );*/
  }

  sectionChange(event : any){
    //this.forums$ = this.forumService.getForumsBySection(event.item);
  }

  submit(){
    this.forumService.createForum(this.form.value).subscribe({
      error: (e) => console.error(e), //TODO: mark form inputs that are faulty and/or show popup
      complete: () => this.router.navigate(['/'])
    });
  }
}
