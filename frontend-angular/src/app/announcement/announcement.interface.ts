import {SafeHtml} from "@angular/platform-browser";

export interface Announcement {
  fragments: NoticeFragment[];
  visible: boolean;
}

export interface NoticeFragment {
  content: string;
  safeContent?: SafeHtml;
}
