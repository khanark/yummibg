import {
  faCircleCheck,
  faMapLocation,
  faMapPin,
  faPeopleCarry,
} from '@fortawesome/free-solid-svg-icons';

export const navLinks = [
  { name: 'Home', path: 'home' },
  { name: 'Recipes', path: 'recipes' },
  { name: 'Login', path: 'login' },
  { name: 'Register', path: 'register' },
];

export const pageContent = {
  home: {
    title: 'Welcome to yummi.bg',
    subtitle: 'Explore Authentic Dish Recipes from Every Corner of the Country',
    text: "Discover the rich tapestry of flavors from our nation's diverse regions at Yummibg. Immerse yourself in authentic dish recipes, each showcasing the unique culinary heritage passed down through generations.",
    cta: 'Begin Your Culinary Journey',
    features: [
      {
        icon: faCircleCheck,
        title: 'Authentic Recipes',
        text: 'From the tangy curries of the South to the hearty stews of the North, our curated collection includes tried-and-tested recipes straight from the kitchens of regional experts. Experience the authentic flavors and learn the secrets behind each dish.',
      },
      {
        icon: faMapLocation,
        title: 'Explore Regional Delights',
        text: 'Indulge your taste buds in a diverse array of regional delights. Discover the delicate spices of the East, the fiery dishes of the West, the comforting specialties of the Central regions, and the fusion cuisines emerging from the North-East.',
      },
      {
        icon: faMapPin,
        title: 'Discover Local Ingredients',
        text: 'Delve into the world of indigenous ingredients that give each dish its distinct character. Learn about the local produce, spices, and condiments that make regional cuisines truly special.',
      },
      {
        icon: faPeopleCarry,
        title: 'Community and Feedback',
        text: 'Join a vibrant community of food enthusiasts, share your experiences, and exchange tips and tricks. Engage in discussions, provide feedback, and be a part of the Yummibg culinary family.',
      },
    ],
    qualities: [
      {
        number: '01',
        title: 'Curated Selection',
        text: 'We handpick the best recipes to ensure you get a truly authentic culinary experience, with a focus on quality and taste.',
      },
      {
        number: '02',
        title: 'Passionate Experts',
        text: 'Our team of passionate chefs and food researchers are dedicated to bringing you the most accurate and delicious recipes from every region.',
      },
      {
        number: '03',
        title: 'User-Friendly Interface',
        text: 'Our website offers a seamless and intuitive experience, making it easy for you to navigate, search for recipes, and explore the vast world of regional cuisines.',
      },
      {
        number: '04',
        title: 'Constant Updates',
        text: 'We regularly update our recipe collection with new and exciting dishes, keeping you inspired and encouraging you to try something new each time you visit Yummibg',
      },
    ],
  },
};