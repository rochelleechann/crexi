import { Component, Input } from '@angular/core';

@Component({
    selector: 'crx-page',
    styleUrls: ['./page.less'],
    templateUrl: './page.html'
})
export class PageComponent {

    @Input() showBackground: boolean;

}
