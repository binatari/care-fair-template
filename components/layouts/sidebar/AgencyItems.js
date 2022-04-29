
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import RedeemSharpIcon from '@mui/icons-material/RedeemSharp';
const AgencyItems = [
  {
    subHead:'Donations',
    content:[
      {
        title: "Overview",
        icon: "las la-home la-lg",
        href: "/agency/overview",
      },
      {
        title: "Caregivers",
        icon: "las la-gift la-lg",
        href: "/agency/care-givers",
      },
      {
        title: "job management",
        icon: "las la-gifts la-lg",
        href: "/agency/job-management",
        disable:true
      },
      {
        title: "Book keeping",
        icon: "las la-percentage la-lg",
        href: "/agency/book-keeping",
        disable:true
      },
      {
        title: "scheduling",
        icon: "las la-percentage la-lg",
        href: "/agency/scheduling",
        disable:true
      },
    //   {
    //     title: "Log out",
    //     icon: "las la-percentage la-lg",
    //     href: "/agency/care-agencies",
    //     click:()=>{
    //         localStorage.removeItem('agencyToken')
    //         router.push('/agency/login')
    //     }
    //   },
    ]
  },
];

export default AgencyItems;
