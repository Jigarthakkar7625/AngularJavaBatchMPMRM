import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header', // Naam karan >> Defination Name
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  temp: any = "Hello Angular";
  temp123: any = "id123";

  constructor() { }

  ngOnInit(): void {
  }

  myFunction(e:any) {

    debugger
    alert(this.temp)
         

  }

}
