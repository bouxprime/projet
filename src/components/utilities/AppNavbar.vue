<template>
  <nav :class="{'scrolled': isScrolled || !isHomePage, 'about-page': isAboutPage, 'contact-page': isContactPage, 'services-page': isServicesPage}">
    <div class="navbar-container">
      <div :class="{'logo': true, 'scrolled': isScrolled || !isHomePage}">
        <router-link to="/">
          <img :src="getLogoSrc()" alt="Logo" />
        </router-link>
      </div>
      <ul :class="{'nav-links': true, 'open': isMenuOpen, 'about-page': isAboutPage && !isScrolled, 'contact-page': isContactPage && !isScrolled, 'services-page': isServicesPage && !isScrolled}">
        <li><router-link to="/" @click="toggleMenu" :class="{'active-link': isActive('/') && isHomePage}">Home</router-link></li>
        <li class="dropdown">
          <a @click="toggleDropdown('telephonie')" @mouseover="showDropdown('telephonie')" :class="{'active-link': isActive('/solution') || isActive('/integration') || isActive('/x-bees') || isActive('/x-hopper') || isActive('/alezia-studio')}">Téléphonie</a>
          <ul v-if="dropdowns.telephonie" class="dropdown-menu">
            <li class="dropdown-item"><router-link to="/solution" @click="toggleMenu">Solutions</router-link></li>
            <li class="dropdown-item"><router-link to="/integration" @click="toggleMenu">Intégrations</router-link></li>
            <li class="dropdown-item"><router-link to="/x-bees" @click="toggleMenu">X-bees</router-link></li>
            <li class="dropdown-item"><router-link to="/x-hopper" @click="toggleMenu">X-hoppers</router-link></li>
            <li class="dropdown-item"><router-link to="/alezia-studio" @click="toggleMenu">Alezia Studio</router-link></li>
          </ul>
        </li>
        <li class="dropdown">
          <a @click="toggleDropdown('it')" @mouseover="showDropdown('it')" :class="{'active-link': isActive('/cloud') || isActive('/conseils') || isActive('/cybersecurite') || isActive('/services-manage') || isActive('/materiel')}">IT</a>
          <ul v-if="dropdowns.it" class="dropdown-menu">
            <li class="dropdown-item"><router-link to="/cloud" @click="toggleMenu">Cloud</router-link></li>
            <li class="dropdown-item"><router-link to="/conseils" @click="toggleMenu">Conseils</router-link></li>
            <li class="dropdown-item"><router-link to="/cybersecurite" @click="toggleMenu">Cybersécurité</router-link></li>
            <li class="dropdown-item"><router-link to="/services-manage" @click="toggleMenu">Services Managés</router-link></li>
            <li class="dropdown-item"><router-link to="/materiel" @click="toggleMenu">Matériel et solutions</router-link></li>
          </ul>
        </li>
        <li><router-link to="/apropos" @click="toggleMenu" :class="{'active-link': isActive('/apropos')}">À Propos</router-link></li>
        <li><router-link to="/alezia-studio" class="contact-button" @click="toggleMenu" :class="{'active-link': isActive('/alezia-studio')}">Alezia Studio</router-link></li>
        <li><router-link to="/contact" class="contact-button" @click="toggleMenu" :class="{'active-link': isActive('/contact')}">Contact</router-link></li>
        <li>
          <button class="phone-button" @click="handlePhoneClick">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.08 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.65 2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.8 6.8l1.27-1.27a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.65.57 2 2 0 0 1 1.72 2z"/>
            </svg>
          </button>
        </li>
      </ul>
      <div class="burger" @click="toggleMenu">
        <div :class="{'line1': true, 'toggle': isMenuOpen}"></div>
        <div :class="{'line2': true, 'toggle': isMenuOpen}"></div>
        <div :class="{'line3': true, 'toggle': isMenuOpen}"></div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      isScrolled: false,
      isMenuOpen: false,
      dropdowns: {
        telephonie: false,
        it: false,
      },
    };
  },
  computed: {
    isHomePage() {
      return this.$route.path === '/';
    },
    isAboutPage() {
      return this.$route.path === '/apropos';
    },
    isContactPage() {
      return this.$route.path === '/contact';
    },
    isServicesPage() {
      return this.$route.path === '/services';
    }
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleDropdown(dropdown) {
      this.dropdowns[dropdown] = !this.dropdowns[dropdown];
    },
    showDropdown(dropdown) {
      this.dropdowns[dropdown] = true;
    },
    hideDropdown(dropdown) {
      this.dropdowns[dropdown] = false;
    },
    handlePhoneClick() {
      console.log("Phone button clicked!");
    },
    isActive(route) {
      return this.$route.path.startsWith(route);
    },
    getLogoSrc() {
      return this.isScrolled || !this.isHomePage ? require('@/assets/Alezia-logo-noir.png') : require('@/assets/Alezia-logo-blanc.png');
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em 2em;
  transition: padding 0.3s, background-color 0.3s, height 0.3s;
  z-index: 1000;
  background: transparent;
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
  height: 120px;
}
nav.scrolled {
  background-color: rgba(240, 240, 240, 0.9);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1em 2em;
  height: 110px;
}
.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
}
.logo img {
  height: 150px;
  width: auto;
  transition: height 0.3s, transform 0.3s;
  transform: scale(1.15);
}
nav.scrolled .logo img {
  height: 130px;
  transform: scale(1.1);
}
.nav-links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1em;
  margin: 0;
  padding: 0;
  margin-left: auto;
  font-size: 1.1em;
  box-sizing: border-box;
}

.nav-links li {
  color: white;
  position: relative;
}

.nav-links a {
  color: white;
  text-decoration: none;
  padding: 0.5em 1em;
  transition: color 0.3s;
  cursor: pointer;
}

nav.scrolled .nav-links a,
nav.about-page .nav-links a,
nav.contact-page .nav-links a,
nav.services-page .nav-links a {
  color: black;
}

.nav-links .active-link {
  border-bottom: 2px solid #1e90ff;
  width: fit-content;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  transform: translateX(0%);
  background-color: white;
  color: black;
  padding: 1em;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: none;
  z-index: 1000;
  min-width: 200px;
  white-space: nowrap;
  border-radius: 10px;
}

.dropdown-item {
  margin: 0.5em 0;
  display: block;
  text-align: left;
}

.dropdown-menu a {
  color: black;
  text-decoration: none;
  display: block;
  padding: 0.5em 0;
}

.dropdown-menu .dot {
  height: 8px;
  width: 8px;
  background-color: #1e90ff;
  border-radius: 50%;
  margin-right: 10px;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.contact-button {
  padding: 0.5em 2.5em;
  border: 2px solid #1e90ff;
  border-radius: 50px;
  color: white;
  text-decoration: none;
  font-weight: bold;
  background-color: #1e90ff;
  transition: background-color 0.3s, color 0.3s;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
}

.contact-button:hover {
  background-color: transparent;
  color: #1e90ff;
}

.phone-button {
  padding: 0.3em 0.6em;
  border: 2px solid #1e90ff;
  border-radius: 25px;
  color: white;
  background-color: #1e90ff;
  font-size: 1.2em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s, color 0.3s;
  height: 40px;
}

.phone-button:hover {
  background-color: transparent;
  color: #1e90ff;
}

.phone-button svg {
  width: 24px;
  height: 24px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.burger {
  display: none;
  cursor: pointer;
  z-index: 1001;
  position: absolute;
  right: 20px;
}

.burger div {
  width: 25px;
  height: 3px;
  background-color: black;
  margin: 5px;
  transition: all 0.3s ease;
}

.burger .toggle.line1 {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.burger .toggle.line2 {
  opacity: 0;
}

.burger .toggle.line3 {
  transform: rotate(45deg) translate(-5px, -6px);
}

@media (max-width: 768px) {
  nav {
    padding: 1em;
  }
  .nav-links {
    position: fixed;
    right: 0;
    height: 100vh;
    top: 0;
    background-color: rgba(255, 255, 255, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    transform: translateX(100%);
    transition: transform 0.3s ease-in;
    box-sizing: border-box;
    overflow-x: hidden;
  }
  .nav-links.open {
    transform: translateX(0%);
  }
  
  .nav-links a {
    color: black;
    margin: 15px 0;
  }
  .dropdown-menu {
    position: static;
    box-shadow: none;
    padding: 0;
  }
  .dropdown-item {
    margin: 0.5em 0;
  }
  .burger {
    display: block;
  }
}
</style>
