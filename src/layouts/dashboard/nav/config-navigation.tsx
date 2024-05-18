import { Box } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
// import Label from '../../../components/label';
import ActiveInvest from '../../../assets/images/active-invest-color.png';
import PassiveInvest from '../../../assets/images/passive-invest-color.png';
import Affiliate from '../../../assets/images/affiliate-color.png';
import LetsTalk from '../../../assets/images/lets-talk-color.png';
import Documentation from '../../../assets/images/documentation-color.png';
import CustomerSupport from '../../../assets/images/customer-support-color.png';
// import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

// const icon = (name: string) => (
//   <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
// );

const ActiveInvestIcon = <Box component="img" src={ActiveInvest} />;
const PassiveInvestIcon = <Box component="img" src={PassiveInvest} />;
const AffiliateIcon = <Box component="img" src={Affiliate} />;
const LetsTalkIcon = <Box component="img" src={LetsTalk} />;
const DocumentationIcon = <Box component="img" src={Documentation} />;
const CustomerSupportIcon = <Box component="img" src={CustomerSupport} />;
// const ConfigurationIcon = <Iconify icon="icon-park-outline:setting-config" width={24} />
// const UserManagementIcon = <Iconify icon="fa6-solid:users" width={24} />

//
// const ICONS = {
//   blog: icon('ic_blog'),
//   cart: icon('ic_cart'),
//   chat: icon('ic_chat'),
//   mail: icon('ic_mail'),
//   user: icon('ic_user'),
//   file: icon('ic_file'),
//   lock: icon('ic_lock'),
//   label: icon('ic_label'),
//   blank: icon('ic_blank'),
//   kanban: icon('ic_kanban'),
//   folder: icon('ic_folder'),
//   banking: icon('ic_banking'),
//   booking: icon('ic_booking'),
//   invoice: icon('ic_invoice'),
//   calendar: icon('ic_calendar'),
//   disabled: icon('ic_disabled'),
//   external: icon('ic_external'),
//   menuItem: icon('ic_menu_item'),
//   ecommerce: icon('ic_ecommerce'),
//   analytics: icon('ic_analytics'),
//   dashboard: icon('ic_dashboard'),
// };

const navConfig = [
  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: '',
    items: [
      // Private Club
      {
        title: 'Private Club',
        path: PATH_DASHBOARD.activeInvest,
        icon: ActiveInvestIcon,
      },
      // Quant Invest
      {
        title: 'Quant Invest',
        path: PATH_DASHBOARD.passiveInvest,
        icon: PassiveInvestIcon,
      },
      // Affiliate
      {
        title: 'Affiliate',
        path: PATH_DASHBOARD.affiliate,
        icon: AffiliateIcon,
      },
      // Let's talk!
      {
        title: "Let's talk!",
        path: PATH_DASHBOARD.letsTalk,
        icon: LetsTalkIcon,
      },
      // Documentation
      {
        title: 'Documentation',
        path: PATH_DASHBOARD.documentation,
        icon: DocumentationIcon,
      },
      // Customer Support
      {
        title: 'Customer Support',
        path: PATH_DASHBOARD.customerSupport,
        icon: CustomerSupportIcon,
      },
      // {
      //   title: 'Private Club',
      //   path: PATH_DASHBOARD.activeInvest,
      //   icon: HomeIcon,
      //   // children: [
      //   // { title: 'list', path: PATH_DASHBOARD.user.list },
      //   // { title: 'create', path: PATH_DASHBOARD.user.new },
      //   // { title: 'edit', path: PATH_DASHBOARD.user.demoEdit },
      //   // { title: 'view', path: PATH_DASHBOARD.user.account },
      //   // ],
      // },
    ],
  },
];

export const navBothConfig = [
  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: '',
    items: [
      // Private Club
      {
        title: 'Private Club',
        path: PATH_DASHBOARD.activeInvest,
        icon: ActiveInvestIcon,
      },
      // Quant Invest
      {
        title: 'Quant Invest',
        path: PATH_DASHBOARD.passiveInvest,
        icon: PassiveInvestIcon,
      },
      // Affiliate
      {
        title: 'Affiliate',
        path: PATH_DASHBOARD.affiliate,
        icon: AffiliateIcon,
      },
      // Let's talk!
      {
        title: "Let's talk!",
        path: PATH_DASHBOARD.letsTalk,
        icon: LetsTalkIcon,
      },
      // Documentation
      {
        title: 'Documentation',
        path: PATH_DASHBOARD.documentation,
        icon: DocumentationIcon,
      },
      // Customer Support
      {
        title: 'Customer Support',
        path: PATH_DASHBOARD.customerSupport,
        icon: CustomerSupportIcon,
      },
      // {
      //   title: 'Private Club',
      //   path: PATH_DASHBOARD.activeInvest,
      //   icon: HomeIcon,
      //   // children: [
      //   // { title: 'list', path: PATH_DASHBOARD.user.list },
      //   // { title: 'create', path: PATH_DASHBOARD.user.new },
      //   // { title: 'edit', path: PATH_DASHBOARD.user.demoEdit },
      //   // { title: 'view', path: PATH_DASHBOARD.user.account },
      //   // ],
      // },
    ],
  },
];

export const navActiveConfig = [
  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: '',
    items: [
      // Private Club
      {
        title: 'Private Club',
        path: PATH_DASHBOARD.activeInvest,
        icon: ActiveInvestIcon,
      },
      // Affiliate
      {
        title: 'Affiliate',
        path: PATH_DASHBOARD.affiliate,
        icon: AffiliateIcon,
      },
      // Let's talk!
      {
        title: "Let's talk!",
        path: PATH_DASHBOARD.letsTalk,
        icon: LetsTalkIcon,
      },
      // Documentation
      {
        title: 'Documentation',
        path: PATH_DASHBOARD.documentation,
        icon: DocumentationIcon,
      },
      // Customer Support
      {
        title: 'Customer Support',
        path: PATH_DASHBOARD.customerSupport,
        icon: CustomerSupportIcon,
      },
      // {
      //   title: 'Private Club',
      //   path: PATH_DASHBOARD.activeInvest,
      //   icon: HomeIcon,
      //   // children: [
      //   // { title: 'list', path: PATH_DASHBOARD.user.list },
      //   // { title: 'create', path: PATH_DASHBOARD.user.new },
      //   // { title: 'edit', path: PATH_DASHBOARD.user.demoEdit },
      //   // { title: 'view', path: PATH_DASHBOARD.user.account },
      //   // ],
      // },
    ],
  },
];

export const navPassiveConfig = [
  // MANAGEMENT
  // ----------------------------------------------------------------------
  {
    subheader: '',
    items: [
      // Private Club
      {
        title: 'Quant Invest',
        path: PATH_DASHBOARD.passiveInvest,
        icon: PassiveInvestIcon,
      },
      // Affiliate
      {
        title: 'Affiliate',
        path: PATH_DASHBOARD.affiliate,
        icon: AffiliateIcon,
      },
      // Let's talk!
      {
        title: "Let's talk!",
        path: PATH_DASHBOARD.letsTalk,
        icon: LetsTalkIcon,
      },
      // Documentation
      {
        title: 'Documentation',
        path: PATH_DASHBOARD.documentation,
        icon: DocumentationIcon,
      },
      // Customer Support
      {
        title: 'Customer Support',
        path: PATH_DASHBOARD.customerSupport,
        icon: CustomerSupportIcon,
      },
      // {
      //   title: 'Private Club',
      //   path: PATH_DASHBOARD.activeInvest,
      //   icon: HomeIcon,
      //   // children: [
      //   // { title: 'list', path: PATH_DASHBOARD.user.list },
      //   // { title: 'create', path: PATH_DASHBOARD.user.new },
      //   // { title: 'edit', path: PATH_DASHBOARD.user.demoEdit },
      //   // { title: 'view', path: PATH_DASHBOARD.user.account },
      //   // ],
      // },
    ],
  },
];

export default navConfig;
