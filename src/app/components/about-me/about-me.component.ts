import { Component, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { AreasSectionComponent } from './areas-section/areas-section.component';
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';


@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [AreasSectionComponent, IntroSectionComponent, SkillsSectionComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AboutMeComponent {

}
