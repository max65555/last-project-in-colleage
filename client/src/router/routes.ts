import LandingPage from "../components/pages/LandingPage.vue";
import ListProduction from "../components/pages/ListProduction.vue";


export const routes = [
    { path: "/", component: LandingPage, label: "News" },
    { path: "/about", component: ListProduction, label: "About" },
    { path: "/Keyboards", component: ListProduction, label: "Keyboards" },
    { path: "/Kit ", component: ListProduction, label: "Kit" },
    { path: "/Key Cap", component: ListProduction, label: "Key Cap" },
    { path: "/Contact", component: ListProduction, label: "Contact" },
    { path: "/Products", component: ListProduction, label: "Products" },
    { path: "/License", component: ListProduction, label: "License" },
    { path: "/gear", component: ListProduction, label: "Gear" },
    { path: "/switch", component: ListProduction, label: "Switch" },
    
]