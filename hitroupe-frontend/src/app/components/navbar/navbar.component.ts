import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username = null;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(this.dialog);
      console.log(result);
    });
  }

}

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialogComponent {
  username = '';
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.dialogRef.afterClosed().subscribe(result => {
      localStorage.setItem('username', this.username);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  login() {
    this.dialogRef.close();
    localStorage.setItem('username', this.username);
  }

}
