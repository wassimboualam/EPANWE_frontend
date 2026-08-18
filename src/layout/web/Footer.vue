<script setup>
const explore = [
  'Home',
  'About',
  // "Programs",
  'Join Us',
  'Contact',
]

// const programs = [
//     "Arts",
//     "Sports",
//     "Leadership",
//     "Digital Skills"
// ]

const resources = [
  // "Blog",
  // "FAQ",
  'Privacy Policy',
  'Terms of Service',
]
</script>

<template>
  <footer>
    <div class="container">
      <div class="footer-grid">
        <!-- Brand -->

        <div class="brand">
          <h2>EPANWE</h2>

          <p>
            Helping every young person flourish through education, sports, culture and personal
            development.
          </p>

          <div class="socials">
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="#">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <!-- Explore -->

        <div>
          <h3>Explore</h3>

          <ul>
            <li v-for="item in explore" :key="item">
              <a href="#">
                {{ item }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Programs -->

        <!-- <div>
          <h3>Programs</h3>

          <ul>
            <li v-for="item in programs" :key="item">
              <a href="#">
                {{ item }}
              </a>
            </li>
          </ul>
        </div> -->

        <!-- Resources -->

        <div>
          <h3>Resources</h3>

          <ul>
            <li v-for="item in resources" :key="item">
              <a href="#">
                {{ item }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->

        <div>
          <h3>Contact</h3>

          <ul>
            <li>📞 +212 5 XX XX XX XX</li>

            <li>✉ contact@epanwe.ma</li>

            <li>📍 Rabat, Morocco</li>
          </ul>
        </div>
      </div>

      <hr />

      <div class="bottom">
        <p>
          © {{ new Date().getFullYear() }}
          EPANWE. All rights reserved.
        </p>

        <div class="legal">
          <a href="#"> Privacy </a>

          <a href="#"> Terms </a>

          <a href="#"> Cookies </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: var(--slate);

  color: white;

  padding: 90px 0 30px;
}

.footer-grid {
  display: grid;

  grid-template-columns:
    2fr
    1fr
    1fr
    1fr
    1.2fr;

  gap: 50px;

  margin-bottom: 50px;
}

.brand h2 {
  color: white;

  margin-bottom: 20px;
}

.brand p {
  color: #d1d5db;

  margin-bottom: 30px;

  line-height: 1.8;
}

h3 {
  color: white;

  margin-bottom: 25px;

  font-size: 1.1rem;
}

ul {
  list-style: none;
}

li {
  margin-bottom: 15px;
}

a {
  color: #d1d5db;

  transition: 0.3s;
}

a:hover {
  color: var(--gold);
}

.socials {
  display: flex;

  gap: 15px;
}

.socials a {
  width: 45px;

  height: 45px;

  display: flex;

  justify-content: center;

  align-items: center;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.08);

  transition: 0.3s;
}

.socials a:hover {
  background: var(--gold);

  color: white;

  transform: translateY(-4px);
}

hr {
  border: none;

  height: 1px;

  background: rgba(255, 255, 255, 0.12);

  margin-bottom: 25px;
}

.bottom {
  display: flex;

  justify-content: space-between;

  align-items: center;
}

.bottom p {
  color: #9ca3af;
}

.legal {
  display: flex;

  gap: 25px;
}

@media (max-width: 1000px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }

  .bottom {
    flex-direction: column;

    gap: 20px;

    text-align: center;
  }
}

@media (max-width: 650px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
