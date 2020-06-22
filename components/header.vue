<template lang="html">
  <header>
    <div class="logo-headers">
      <img class="logo" src="~/static/kbfedlogo.png" alt="">
      <div class="header-headers">
        <h1 class="kb">{{ name }}</h1>
        <h2 class="fed">{{ job }}</h2>
      </div>
    </div>
    <i
    @click="scroll"
    class="fas fa-chevron-down"
    >
    </i>
  </header>
</template>

<script>
export default {
  data() {
    return {
      name: 'Kevin Belford',
      job: 'Front-End Developer',
      hover: false
    }
  },

  methods: {
    scroll: function() {
      const element = document.getElementById('about');
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
</script>

<style lang="css" scoped>
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #98A6B5;
}

.logo-headers {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 6rem;
}

.kb {
  font-size: 2rem;
  padding-left: 1.5rem;
  padding-bottom: 0.05rem;
  letter-spacing: 0.69rem;
  text-transform: uppercase;
  color: #29486B;
}

.fed {
  font-size: 1.25rem;
  padding-left: 1.5rem;
  padding-top: 0.05rem;
  letter-spacing: 0.47rem;
  text-transform: uppercase;
  color: #29486B;
}

.fa-chevron-down {
  position: relative;
  top: 12rem;
  color: #F9F8F9;
}

.fa-chevron-down:hover {
  transition: all .07s ease-in-out;
  transform: scale(1.5);
}

@media screen and (max-width: 577px) {
  .logo-headers {
    flex-direction: column;
  }

  .logo {
    padding-bottom: 1.5rem;
  }

  .kb {
    font-size: 1.63rem;
    padding-left: 0;
    letter-spacing: 0.62rem;
  }

  .fed {
    font-size: 1rem;
    padding-left: 0;
  }

  .fa-chevron-down {
    top: 8rem;
  }
}


</style>
