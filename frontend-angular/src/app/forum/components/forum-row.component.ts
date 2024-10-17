import {Component, Input, OnInit} from '@angular/core';
import {NgClass} from "@angular/common";
import {NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle} from "@ng-bootstrap/ng-bootstrap";
import {RouterLink} from "@angular/router";
import {Forum} from "../models/forum.interface";

@Component({
    selector: 'forum-row',
    standalone: true,
    imports: [
        NgClass,
        NgbDropdown,
        NgbDropdownItem,
        NgbDropdownMenu,
        NgbDropdownToggle,
        RouterLink
    ],
    templateUrl: './forum-row.component.html',
    styleUrl: './forum-row.component.scss'
})
export class ForumRowComponent implements OnInit {
    @Input({required:true}) forum! : Forum;

    constructor() {
    }

    ngOnInit(): void {

    }
}
