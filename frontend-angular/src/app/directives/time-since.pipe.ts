import { Pipe, PipeTransform } from '@angular/core';
import {max} from "@popperjs/core/lib/utils/math";

const enum TimeInMilli{
  SECOND = 1000,
  MINUTE = 60 * SECOND,
  HOUR = 60 * MINUTE,
  DAY = 24 * HOUR,
  WEEK = 7 * DAY,
  YEAR = 365 * DAY
}

@Pipe({
  name: 'timeSince',
  standalone: true
})
export class TimeSincePipe implements PipeTransform {

  transform(value: Date, createdAt: Date, editedAt: Date | null | undefined): string {
    const locale = 'en-US';
    let latest = editedAt ?? createdAt;
    let currentValue = value.valueOf();
    let dateOnly = this.clearTimeParts(latest).valueOf();

    let edge = dateOnly + TimeInMilli.WEEK;
    if(edge < currentValue){
      return latest.toLocaleDateString(locale, { year: 'numeric', month: 'short', day: 'numeric'});
    }

    edge = dateOnly + (2 * TimeInMilli.DAY);
    if(edge < currentValue){
      return `${latest.toLocaleDateString(locale, { weekday: 'long' })} at ${latest.toLocaleTimeString(locale, { timeStyle: "short" })}`;
    }
    edge = dateOnly + TimeInMilli.DAY;
    if(edge < currentValue){
      return `Yesterday at ${latest.toLocaleTimeString(locale, { timeStyle: "short" })}`;
    }

    let diff = currentValue - latest.valueOf();
    if(diff < TimeInMilli.MINUTE){
      return 'A moment ago';
    }
    else if(diff < TimeInMilli.HOUR){
      let minute = Math.trunc(diff / TimeInMilli.MINUTE);
      return (minute < 2)? `1 minute ago` : `${minute} minutes ago`;
    }

    return `Today at ${latest.toLocaleTimeString(locale, { timeStyle: "short" })}`;
  }

  private clearTimeParts(date:Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }
}
