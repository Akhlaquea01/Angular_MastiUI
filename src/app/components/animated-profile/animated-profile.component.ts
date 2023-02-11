import { Component, Input } from '@angular/core';
export interface profileData {
  imageUrl: string,
  name: string,
  desc: string,
  primaryAction: string,
  secondaryAction: string,
  isTwoStatuses: boolean,
  keyOne: string,
  valueOne: string | number,
  keyTwo: string,
  valueTwo: string | number,
  keyThree?: string,
  valueThree?: string | number,

}
@Component({
  selector: 'app-animated-profile',
  templateUrl: './animated-profile.component.html',
  styleUrls: [ './animated-profile.component.scss' ]
})
export class AnimatedProfileComponent {
  @Input() profileData: profileData = {
    imageUrl: "/user.jpg",
    name: "Akhlaque Ahmad",
    desc: "Front-End Developer",
    primaryAction: "Follow",
    secondaryAction: "Message",
    isTwoStatuses: false,
    keyOne: "Posts",
    valueOne: "532",
    keyTwo: "Followers",
    valueTwo: "1.5m",
    keyThree: "Following",
    valueThree: "423",
  }

}
