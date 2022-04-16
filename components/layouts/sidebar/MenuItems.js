
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import RedeemSharpIcon from '@mui/icons-material/RedeemSharp';

const Menuitems = [
  {
    subHead:'Donations',
    content:[
      {
        title: "Overview",
        icon: "las la-home la-lg",
        href: "/",
      },
      {
        title: "Donations",
        icon: "las la-gift la-lg",
        href: "/admin/donations",
      },
      {
        title: "Donation Types",
        icon: "las la-gifts la-lg",
        href: "/admin/donation-types",
      },
      {
        title: "Gift Aid",
        icon: "las la-percentage la-lg",
        href: "/admin/gift-aid",
      },
      {
        title: "Donors",
        icon: "las la-user-friends la-lg",
        href: "/admin/donors",
      },
    ]
  },
];

export default Menuitems;
