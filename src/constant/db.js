import Google from '../images/icon/gg.png';
import Facebook from '../images/icon/fb.png';
import Instagram from '../images/icon/ig.png';

export default {
  salonName: 'Sapphire Nail & Spa',
  phone: '2289677070',
  address: {
    street: '10109 Central Ave',
    city: 'Diberville',
    state: 'MS 39540',
    directionLink: 'https://goo.gl/maps/di5SHG5pk4FC6qeH7',
  },
  hours: [
    { dates: 'mon - sat', time: '9:00am - 6:00pm' },
    // {dates: "saturday", time: "9:30am - 7:30pm"},
    { dates: 'sunday', time: '11:00am - 4:00pm' },
  ],
  booking: "https://online.salonreadyllc.com/booking/b7eea3d8-1cd0-463d-833f-6739f46c1579",
  map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13760.7149887847!2d-88.8914877!3d30.4310344!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x79c6614306cb3786!2sSapphire%20Nail%20%26%20Spa!5e0!3m2!1sen!2sus!4v1672001728129!5m2!1sen!2sus',
  banner: {
    bannerTitle: 'Welcome to Sapphire Nail & Spa',
    bannerContent: 'Let us bring beauty and confidence in you',
  },
  values: [
    {
      title: 'We have the best therapies',
      content:
        'Sapphire Nails & Spa promotes comfort, beauty, well-being, and health',
    },
    {
      title: 'Our Customers are happy',
      content:
        'We use ONLY the most trusted brands in the beauty industry. Our world-class products, services, and top technologies.',
    },
    {
      title: 'Highly qualified staff',
      content:
        ' Our staff was trained to follow a proper sanitization protocol that puts our customer’s cleanliness as the number one priority.',
    },
  ],
  facebook: {
    name: 'facebook.com/sapphirenailandspa',
    messenger: 'https://m.me/sapphirenailandspa',
  },
  social: [
    {
      name: '',
      icon: Facebook,
      link: 'https://www.facebook.com/sapphirenailandspa',
    },
    // {name: "", icon: Instagram, link: "https://www.instagram.com/palazzio_nail_lounge_memorial"},
    { name: '', icon: Google, link: 'https://goo.gl/maps/K9thk9NWrRwi3eiH6' },
  ],
  about: [
    {id: "1", content: "Welcome to our salon! Thank you so much for taking the time to visut us today. Sapphire has been known for its clean and professional services."},
    {id: "2", content: "Our goal is to provide you with the highest level of customer service and satisfaction."},
    {id: "3", content: "We offer 100% disposable Jet-liner which protechts each client from possible cross-contamination in pedicure services. Our client's safety is our number one priority."},

  ]
};
