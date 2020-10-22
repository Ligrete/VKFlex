import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { randomBytes, randomFill } from 'crypto';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  //ui selector
  activeBar : boolean = false;

  id = '';
  firstName = '';
  lastName = '';

  constructor(
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  toggleBar () {
    this.activeBar=!this.activeBar;
    this.id+='2323';
    this.changeDetector.detectChanges();
    console.log(this.activeBar);
  }

}
