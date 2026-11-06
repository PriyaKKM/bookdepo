import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { signOut } from "firebase/auth";
import { auth } from '../firebase';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [NgFor],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
 constructor(private router: Router){}
  books=[
{
  img:'https://images.openai.com/static-rsc-4/0TvAL6HdqzWB8E-9guHOh4Q95ySincOyLOj5dYHMbMTjCwhzXzoP0SDkUgGe0CtEBH1hKQYZJfoOw7quvrbgH7lSixcm-feR1Z1gHgFiwDXqTVMyL3sG0u11_qsACnRWY2MlpFMvlrRoLZEYqVyvk-JepKKk64L1REqvdSpM4q8kQ4KoMyVvDFwk-tgTdF33?purpose=fullsize',
  title:'Ninja with angular',
  src:'/assets/ninja with Angular.pdf'
},
{
  img:'https://m.media-amazon.com/images/I/817HaeblezL._SL1500_.jpg',
  title:'Atomic Habits',
  src:'/assets/Atomic habits.pdf'
},
{
  img:'https://m.media-amazon.com/images/I/71XEsXS5RlL._SY466_.jpg',
  title:'Psychology of money',
  src:'/assets/Money.pdf'
},
{
  img:'https://m.media-amazon.com/images/I/41o6UpBtSjL._SY466_.jpg',
  title:'My Journey',
  src:'/assets/myjourney.pdf'
},
{
  //img:'https://m.media-amazon.com/images/I/61WPylVyRRL._SL1500_.jpg' ,
  img:'https://m.media-amazon.com/images/I/81y0LXoNs-L._SY466_.jpg',
  title:'Gandhi Ji',
  src:'/assets/Gandhiji.pdf'


}
  ]
signOut(){
  this.router.navigate(['/login']) 
  signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
}
  

}
