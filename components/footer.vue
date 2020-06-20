<template lang="html">
  <section>
    <footer>
      <div class="">
        <a href="https://github.com/kcbelford" target="_blank"><i class="fab fa-github footer-icon"></i></a>
        <a href="https://www.linkedin.com/in/kevin-belford" target="_blank"><i class="fab fa-linkedin-in footer-icon"></i></a>
        <a href="http://www.belfordphoto.com/samples" target="_blank"><i class="fas fa-camera footer-icon"></i></a>
      </div>
      <p class="lead footer-p">
        {{ email }} | {{ phone }}
      </p>
      <div class="footer-p-mobile">
        <p>{{ email }}</p>
        <p>{{ phone }}</p>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: 'kcbelford@hotmail.com',
      phone: '425.501.0646'
    }
  }
}
</script>

<style lang="css" scoped>
footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #29486B;
  color: #F9F8F9;
  width: 100%;
  height: 100vh;
}

.footer-icon {
  color: #F9F8F9;
  font-size: 3rem;
  padding: 0 2rem;
}

.footer-icon:hover {
  color: #8469A2;
}

.footer-icon:visited {
  color: #F9F8F9;
}

.footer-p {
  padding-top: 2rem;
  letter-spacing: 1.5px;
}

.footer-p-mobile {
  display: none;
}

@media screen and (max-width: 577px) {
    .footer-p {
    display: none;
  }

    .footer-p-mobile {
    display: inline;
    text-align: center;
    padding-top: 2rem;
    letter-spacing: 1.5px;
  }
}
</style>
