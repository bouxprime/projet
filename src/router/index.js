import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ContactPage from '../views/ContactPage.vue';
import AdminBoard from '../views/AdminBoard.vue';
import CloudPage from '../views/CloudPage.vue';
import ConseilsPage from '../views/ConseilsPage.vue';
import ServicesManagePage from '../views/ServicesManagePage.vue';
import CybersecuritePage from '../views/CybersecuritePage.vue';
import MaterielPage from '../views/MaterielPage.vue';
import SolutionPage from '../views/SolutionPage.vue';
import IntegrationPage from '../views/IntegrationPage.vue';
import XBeesPage from '../views/X-beesPage.vue';
import XHopperPage from '../views/X-hopperPage.vue';
import AleziaStudioPage from '../views/AleziaStudioPage.vue';
import AproposPage from '../views/AproposPage.vue'; // <-- Ajout de l'importation
import ConditionGeneral from '../views/ConditionGeneral.vue'; // <-- Ajout de l'importation pour Conditions Générales

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage,
  },
  {
    path: '/admin',
    name: 'AdminBoard',
    component: AdminBoard,
  },
  {
    path: '/cloud',
    name: 'CloudPage',
    component: CloudPage,
  },
  {
    path: '/conseils',
    name: 'ConseilsPage',
    component: ConseilsPage,
  },
  {
    path: '/services-manage',
    name: 'ServicesManagePage',
    component: ServicesManagePage,
  },
  {
    path: '/cybersecurite',
    name: 'CybersecuritePage',
    component: CybersecuritePage,
  },
  {
    path: '/materiel',
    name: 'MaterielPage',
    component: MaterielPage,
  },
  {
    path: '/solution',
    name: 'SolutionPage',
    component: SolutionPage,
  },
  {
    path: '/integration',
    name: 'IntegrationPage',
    component: IntegrationPage,
  },
  {
    path: '/x-bees',
    name: 'XBeesPage',
    component: XBeesPage,
  },
  {
    path: '/x-hopper',
    name: 'XHopperPage',
    component: XHopperPage,
  },
  {
    path: '/alezia-studio',
    name: 'AleziaStudioPage',
    component: AleziaStudioPage,
  },
  {
    path: '/apropos',
    name: 'AproposPage',
    component: AproposPage,
  },
  {
    path: '/conditions-generales', // <-- Nouvelle route pour Conditions Générales
    name: 'ConditionGeneral',
    component: ConditionGeneral,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
