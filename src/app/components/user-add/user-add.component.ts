import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/model/user';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  user: User = new User();

  @ViewChild('userForm')
  userForm: NgForm;


    constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  save(form: NgForm) {
    this.userService.saveUser(form).subscribe(result => {
      alert('User created successfully!!');
    }, error => console.error(error));
    this.resetForm();
  }

  resetForm() {
    this.user = new User();
    this.userForm.resetForm(this.user);
  }

}
