import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private snackBar: MatSnackBar, private dialog: MatDialog
  ) { }

  showSuccessMsg(msg: string, duration = 1000): void {
    let bot = this.snackBar.open(msg, "❎", {
      duration: duration,
      verticalPosition: "top",
      horizontalPosition: "center",
      panelClass: ["snackbar-container", "success"],
    });
    bot.onAction().subscribe(() => {
      bot.dismiss();
    });
  }
}
