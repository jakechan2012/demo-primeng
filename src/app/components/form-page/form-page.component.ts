import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'justech-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {
  msgs: Array<Message>;
  userForm: FormGroup;
  users: Array<any>;
  filteredUsers: Array<any>;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      'name': new FormControl('', Validators.required),
      'age': new FormControl('', Validators.compose([Validators.required, Validators.pattern('\\d+')])),
      'user': new FormControl('')
    });
    this.users = [
      { name: '张三', age: '29', gender: '男' },
      { name: '李四', age: '39', gender: '男' },
      { name: '王二', age: '19', gender: '女' },
      { name: '麻子', age: '40', gender: '男' },
      { name: '赵四', age: '18', gender: '男' },
    ];
  }

  filterUsers(event) {
    console.log(1);
    this.filteredUsers = [];
    let query = event.query.toLowerCase();
    for (let i = 0; i < this.users.length; i++) {
      let brand = this.users[i];
      if (brand.name.toLowerCase().indexOf(query) >= 0
        || brand.age.toLowerCase().indexOf(query) >= 0
        || brand.gender.toLowerCase().indexOf(query) >= 0) {
        this.filteredUsers.push(brand);
      }
    }
  }

  handleDropdownClick(event) {
    this.filteredUsers = [];

    //mimic remote call
    setTimeout(() => {
      this.filteredUsers = this.users;
    }, 100)
  }

  onSubmit(value: string) {
    this.msgs = [];
    this.msgs.push({ severity: 'error', summary: 'Error', detail: '这是一个错误' });
  }
}
