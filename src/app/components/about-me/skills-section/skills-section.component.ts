import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.css'
})
export class SkillsSectionComponent {
balloons = [
  { logo: '/angular-svgrepo-com.svg', scale: 0.7, top: '20%', left: '15%', color: '#dd0031' },
  { logo: '/notion-svgrepo-com.svg', scale: 0.5, top: '15%', left: '25%', color: '#e1e6e6' },
  { logo: '/figma-svgrepo-com.svg', scale: 0.6, top: '35%', left: '30%', color: '#fca840' },
  { logo: '/css-3-svgrepo-com.svg', scale: 0.9, top: '15%', left: '40%', color: '#1172b8' },
  { logo: '/javascript-svgrepo-com.svg', scale: 1.0, top: '45%', left: '45%', color: '#f7df1e' },
  { logo: '/github-142-svgrepo-com.svg', scale: 0.8, top: '22%', left: '55%', color: '#e1e6e6' },
  { logo: '/java-svgrepo-com.svg', scale: 0.6, top: '15%', left: '70%', color: '#e6c6ba' },
  { logo: '/microsoftsqlserver-svgrepo-com.svg', scale: 0.6, top: '45%', left: '68%', color: '#e1e6e6' },
  { logo: '/html-5-svgrepo-com.svg', scale: 0.9, top: '25%', left: '82%', color: '#e44d26' },
];
clouds = [
  //bottom
  { top: '80%', left: '-5%', scale: 0.9 },
  { top: '80%', left: '5%', scale: 0.6 },
  { top: '85%', left: '20%', scale: 0.8 },
  { top: '78%', left: '35%', scale: 1 },
  { top: '83%', left: '50%', scale: 0.7 },
  { top: '82%', left: '70%', scale: 0.9 },
  { top: '80%', left: '85%', scale: 0.7 },

  //top
  { top: '-15%', left: '-5%', scale: 0.9 },
  { top: '-20%', left: '12%', scale: 0.7 },
  { top: '-20%', left: '22%', scale: 0.6 },
  { top: '-16%', left: '30%', scale: 0.9 },
  { top: '-14%', left: '48%', scale: 0.8 },
  { top: '-16%', left: '60%', scale: 0.7 },
  { top: '-15%', left: '75%', scale: 0.8 },
  
  //left
  { top: '3%', left: '-15%', scale: 0.9 },
  { top: '15%', left: '-18%', scale: 0.7 },
  { top: '30%', left: '-12%', scale: 0.6 },
  { top: '45%', left: '-15%', scale: 0.8 },
  { top: '60%', left: '-16%', scale: 1 },

  //right
  { top: '-8%', left: '88%', scale: 0.9 },
  { top: '10%', left: '90%', scale: 0.9 },
  { top: '30%', left: '86%', scale: 0.6 },
  { top: '45%', left: '90%', scale: 0.8 },
  { top: '60%', left: '90%', scale: 1 },
];

}