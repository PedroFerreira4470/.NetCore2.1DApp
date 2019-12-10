import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";
import { AlertifyService } from '../_services/AlertifyService.service';

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  model: any = {};
  name: string; 
  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() { 
    this.name = this.authService.name;
  }

  login() {
    this.authService.login(this.model).subscribe(
      next => {
        this.name = this.authService.name;
        console.log("logged successufully!");
      },
      error => {
        this.alertify.error("Failed to login");
        console.log("Failed to login");
      }
    );
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem("token");
    this.alertify.message("logged out");
    console.log("logged out");
  }

}
