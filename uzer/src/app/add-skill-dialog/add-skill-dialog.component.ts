import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'add-skill-dialog',
  templateUrl: './add-skill-dialog.component.html',
  styleUrls: ['./add-skill-dialog.component.scss']
})
export class AddSkillDialogComponent implements OnInit {
  userId;

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any) { }

  ngOnInit() {
    this.userId = this.dialogData.userId;
  }
}
