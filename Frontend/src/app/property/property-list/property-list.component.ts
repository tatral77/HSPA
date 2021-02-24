import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties:Array<any>=[
    {
      "Id":1,
      "Name": "Masood House",
      "Type": "House",
      "Price":1200000
    },
    {
      "Id":2,
      "Name": "Masood House-2",
      "Type": "House",
      "Price":1300000
    },

    {
      "Id":3,
      "Name": "Masood House-3",
      "Type": "House",
      "Price":1400000
    },

    {
      "Id":4,
      "Name": "Masood House-4",
      "Type": "House",
      "Price":1500000
    },

    {
      "Id":5,
      "Name": "Masood House-5",
      "Type": "House",
      "Price":1600000
    },

    {
      "Id":6,
      "Name": "Masood House",
      "Type": "House",
      "Price":1200000
    },


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
