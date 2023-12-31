import {
  faCircleCheck,
  faMailForward,
  faMapLocation,
  faMapPin,
  faMobile,
  faPeopleCarry,
} from '@fortawesome/free-solid-svg-icons';
import {
  faDiscord,
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

export const navLinks = [
  { name: 'Home', path: '' },
  { name: 'Recipes', path: 'recipes' },
  { name: 'Login', path: 'login' },
  { name: 'Sign Up', path: 'register' },
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
  recipes: {
    dishes: [
      {
        name: 'omeletteScrambledEggs',
        text: 'Omelette or Scrambled Eggs',
        isChecked: false,
      },
      {
        name: 'pancakesWaffles',
        text: 'Pancakes or Waffles',
        isChecked: false,
      },
      { name: 'breakfastBurrito', text: 'Breakfast Burrito', isChecked: false },
      { name: 'cereal', text: 'Cereal', isChecked: false },
      {
        name: 'breakfastCasserole',
        text: 'Breakfast Casserole',
        isChecked: false,
      },
      { name: 'sandwiches', text: 'Sandwiches', isChecked: false },
      { name: 'salads', text: 'Salads', isChecked: false },
      { name: 'burgers', text: 'Burgers', isChecked: false },
      { name: 'wraps', text: 'Wraps', isChecked: false },
      { name: 'pizza', text: 'Pizza', isChecked: false },
      { name: 'soups', text: 'Soups', isChecked: false },
      {
        name: 'grilledRoastedMeats',
        text: 'Grilled or Roasted Meats',
        isChecked: false,
      },
      { name: 'stirFries', text: 'Stir-Fries', isChecked: false },
      { name: 'pastaDishes', text: 'Pasta Dishes', isChecked: false },
      { name: 'riceDishes', text: 'Rice Dishes', isChecked: false },
      { name: 'casseroles', text: 'Casseroles', isChecked: false },
      { name: 'stews', text: 'Stews', isChecked: false },
      { name: 'tacosFajitas', text: 'Tacos or Fajitas', isChecked: false },
      { name: 'curry', text: 'Curry', isChecked: false },
      {
        name: 'lighterOptions',
        text: 'Lighter options',
        isChecked: false,
      },
      {
        name: 'leftovers',
        text: 'Leftovers',
        isChecked: false,
      },
      { name: 'snacks', text: 'Snacks', isChecked: false },
    ],
    order: [
      { value: 'popular', text: 'Popular' },
      { value: 'newest', text: 'Newest' },
      { value: 'oldest', text: 'Oldest' },
    ],
  },
  footer: {
    contacts: {
      title: 'Contacts',
      items: [
        {
          icon: faMobile,
          text: '(+34) 642 767 970',
        },
        {
          icon: faMailForward,
          text: 'borislav.godumov@outlook.com',
        },
        {
          icon: faMapPin,
          text: '09400 Aranda De Duero, Burgos, Spain',
        },
      ],
    },
    mediaLinks: {
      slogan: 'Yummibg - Dish Recipes from Every Corner of the Country.',
      rights: '© 2023 - Yummibg - All Rights Reserved.',
      links: [
        { icon: faFacebook, externalLink: 'https://www.facebook.com/BeeAyJee' },
        {
          icon: faInstagram,
          externalLink: 'https://www.instagram.com/alqahol1c/',
        },
        {
          icon: faLinkedin,
          externalLink:
            'https://www.linkedin.com/in/borislav-godumov-7245b61a2/',
        },
        { icon: faGithub, externalLink: 'https://github.com/khanark' },
        {
          icon: faDiscord,
          externalLink: 'https://discordapp.com/users/288682246733299712',
        },
      ],
    },
  },
};
