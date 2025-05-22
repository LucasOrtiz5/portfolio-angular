import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Recipe Page',
      gradient: 'linear-gradient(90deg, #dfa347, #dcc9ab)',
      color: '#dfa347',
      image: '/assets/projects/recipe-page.jpg',
      description: 'Este desafío ayuda a trabajar con HTML semántico. Se enfoca en elegir las etiquetas más apropiadas para cada contenido. Diseño completamente responsivo.',
      technologies: ['HTML', 'CSS', 'Flexbox'],
      liveUrl: 'https://recipepage-lo.netlify.app/',
      codeUrl: 'https://github.com/LucasOrtiz5/FrontendMentor/tree/main/recipe-page/recipe-page-main'
    },
    {
      name: 'Social Proof Section',
      gradient: 'linear-gradient(90deg,#501f51,#b48caf)',
      color: '#501f51',
      image: 'assets/projects/social-proof-section.jpg',
      description: 'Este proyecto pone a prueba las habilidades de maquetado. Ideal para ganar confianza con Flexbox o Grid. También es completamente responsivo.',
      technologies: ['HTML', 'CSS', 'Flexbox'],
      liveUrl: 'https://socialproofsection-lo.netlify.app/',
      codeUrl: 'https://github.com/LucasOrtiz5/FrontendMentor/tree/main/social-proof-section/social-proof-section-master'
    },
    {
      name: 'Blog Preview Card',
      gradient: 'linear-gradient(90deg, #f4d14e, #c9b65e)',
      image: 'assets/projects/blog-preview-card.jpg',
      color:'#f4d14e',
      description: 'Desafío solo con HTML y CSS, ideal para practicar fundamentos como estructura semántica y modelo de cajas. También es completamente responsivo.',
      technologies: ['HTML', 'CSS', 'Flexbox'],
      liveUrl: 'https://blog-preview-card-lo.netlify.app/',
      codeUrl: 'https://github.com/LucasOrtiz5/FrontendMentor/tree/main/blog-preview-card/blog-preview-card-main'
    },
    {
      name: 'Social Links Profile',
      gradient: 'linear-gradient(90deg, #343433, #848484)',
      color:'#343433',
      image: 'assets/projects/social-link-profile.jpg',
      description: 'En este pequeño proyecto, se creará un perfil para compartir enlaces en redes sociales. Diseño responsivo',
      technologies: ['HTML', 'CSS', 'Flexbox'],
      liveUrl: 'https://sociallinksprofile-lo.netlify.app/',
      codeUrl: 'https://github.com/LucasOrtiz5/FrontendMentor/tree/main/social-links-profile/social-links-profile-main'
    }
  ];
}
