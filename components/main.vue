<template lang="html">
  <main id="about">
    <h1 class="main-headers text-center">{{ aboutHeader }}</h1>
    <div class="about-content">
      <img class="kevin-img" src="~/static/BELFORDFAM.jpg" alt="Kevin Belford, his wife, daughter and son sitting on their livingroom floor.">
      <p class="about-p lead">
        {{ aboutContentOne }}
        <br>
        <br>
        {{ aboutContentTwo }}
      </p>
    </div>
    <h1 class="main-headers text-center">{{ projectsHeader }}</h1>
    <div class="projects-container fade-in">
      <section v-for="project in portfolio" :key="project.id" class="project-section">
        <h2 class="project-title">{{ project.title }}</h2>
        <img class="project-img" :src="project.image" :alt="project.alt">
        <p class="lead project-description">{{ project.description }}</p>
        <p class="lead">{{ techHeader }}</p>
        <p class="technologies">{{ project.technologies }}</p>
        <a class="project-link" :href="project.site" target="_blank">{{ siteButton }}</a>
        <a class="project-link" :href="project.code" target="_blank">{{ codeButton }}</a>
      </section>
    </div>
  </main>
</template>

<script>
export default {

  data () {
    return {
      aboutHeader: 'A little about me',
      aboutContentOne: 'My name is Kevin Belford and I am a front-end developer from the Pacific Northwest. My background is primarily in commercial photography and photo studio leadership, but after several years in the field, I found myself looking for a new challenge and decided to change the course of my career. Being a visual and creative person, I was naturally drawn to front-end development. My naturally calm personality compliments the skills I have found to be invaluable to front-end development including my keen attention to detail and my perseverance when it comes to problem-solving. One thing that excites me about the developer world is the never-ending advancements in technology requiring a constant need to keep learning.',
      aboutContentTwo: 'A bit about my personal life: I’ve been playing drums most of my life (a while back, I was honored to play in the Sounders FC band, Soundwave, for a couple years). I’m a big soccer fan and support Sounders FC and Liverpool FC. I love pizza and have been mastering the art of home-made pizza for the past eight years.',
      projectsHeader: 'Projects',
      techHeader: 'Technologies Used:',
      siteButton: 'Visit Site',
      codeButton: 'View Code',

      portfolio: [
        {
          id: 0,
          title: 'Find My Brewery',
          image: require('~/static/find-my-brewery.png'),
          alt: 'screen shot of find my brewery website',
          description: 'Every craft beer enthusiast should have a brewery they can call their own. This site was created to aid in that discovery. With the use of the Open Brewery DB API, users can search via keyword, city or brewery name to find their new favorite brewery.',
          technologies: 'HTML, CSS, JavaScript, Node.js, Nuxt.js, Open Brewery DB API',
          site: 'https://find-my-brewery.netlify.app/',
          code: 'https://github.com/kcbelford/find-my-brewery-gh'
        },
        {
          id: 1,
          title: 'Drum Machine',
          image: require('~/static/drum-machine-2.png'),
          alt: 'screen shot of drum machine website',
          description: 'Being a drummer myself, I know what it’s like to lug your kit around everywhere.  Sometimes you just want to experiment with some beat ideas without having to set everything up. This drum machine, styled after the infamous Roland TR-808, lets the user tinker and have fun without the fuss.',
          technologies: 'HTML, CSS, jQuery',
          site: 'https://909-drum-machine.netlify.app/',
          code: 'https://github.com/kcbelford/drum-machine'
        },
        {
          id: 2,
          title: 'Pizza',
          image: require('~/static/pizza.png'),
          alt: 'screen shot of pizza website',
          description: 'Any pizza lover will appreciate this site. It includes a brief history of pizza, an overview of different styles of pizza and a list of some of the best pizzerias in the USA.',
          technologies: 'HTML, CSS, Javascript, Bootstrap, Node.js, Vue.js, VueRouter',
          site: 'https://piz-za.netlify.app/',
          code: 'https://github.com/kcbelford/pizza-gh'
        },
        {
          id: 3,
          title: 'Virtual Cheers',
          image: require('~/static/cheers.png'),
          alt: 'screen shot of virtual cheers website',
          description: 'In the current climate of work-from-home and virtual happy hours, this “virtual cheers” can be sent to friends, family and coworkers to celebrate the hard work getting done; both at work and in life. Cheers!',
          technologies: 'HTML, SCSS, jQuery',
          site: 'https://kcbelford.github.io/virtual-cheers/',
          code: 'https://github.com/kcbelford/virtual-cheers'
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
main {
background-color: #F9F8F9;
padding: 4rem;
}

.main-headers {
color: #29486B;
text-transform: uppercase;
letter-spacing: 0.5rem;
font-size: 2rem;
padding-top: 4rem;
}

.about-content {
padding-top: 4rem;
padding-bottom: 4rem;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
}

.kevin-img {
width: 25rem;
padding-right: 2rem;
}

.projects-container {
padding-top: 4rem;
display: flex;
flex-direction: row;
flex-wrap: wrap;
}

.project-section {
width: 50%;
padding: 0 2rem 6rem;
}

.project-title {
color: #29486B;
text-transform: uppercase;
letter-spacing: 0.25rem;
font-size: 1.5rem;
}

.project-img {
width: 100%;
margin: 2rem 0;
border: 1px solid #838B96;
border-radius: 10px;
box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
}

.project-description {
padding-bottom: 2rem;
}

.technologies {
padding-bottom: 2rem;
font-weight: 300;
}

.project-link {
color: #F9F8F9;
background-color: #29486B;
padding: 0.5rem 1rem;
border-radius: 5px;
}

.project-link:hover {
color: #F9F8F9;
background-color: #8469A2;
text-decoration: none;
}

.project-link:visited {
color: #F9F8F9;
}

@media screen and (max-width: 577px) {
  main {
    padding: 4rem 0.5rem;
  }

  .about-content {
    flex-direction: column;
  }

  .kevin-img {
    padding-right: 0;
    padding-bottom: 2rem;
    width: 20rem;
  }

  .projects-container {
    flex-direction: column;
  }

  .project-section {
    width: 100%;
    padding: 0 0.5rem 6rem;
    margin-bottom: 2rem;
  }
}

@media screen  and (max-width: 769px) {
  .about-content {
    flex-direction: column;
  }

  .kevin-img {
    padding-right: 0;
    padding-bottom: 2rem;
  }

  .projects-container {
    flex-direction: column;
  }

  .project-section {
    width: 100%;
    padding: 0 0.5rem 6rem;
    margin-bottom: 2rem;
  }
}
</style>
