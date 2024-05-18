import { Box } from '@mui/material';
// routes
import { PATH_ADMIN_DASHBOARD, PATH_DASHBOARD } from '../../../../routes/paths';
// components
// import Label from '../../../../components/label';
import ActiveInvest from '../../../../assets/images/active-invest-color.png';
import PassiveInvest from '../../../../assets/images/passive-invest-color.png';
import Affiliate from '../../../../assets/images/affiliate-color.png';
import LetsTalk from '../../../../assets/images/lets-talk-color.png';
import Documentation from '../../../../assets/images/documentation-color.png';
import CustomerSupport from '../../../../assets/images/customer-support-color.png';
// import SvgColor from '../../../../components/svg-color';

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
        title: 'Dashboard',
        path: PATH_ADMIN_DASHBOARD.dashboard,
        icon: ActiveInvestIcon,
      },
      {
        title: 'Private Club',
        path: PATH_ADMIN_DASHBOARD.activeInvest,
        icon: ActiveInvestIcon,
      },
      // Quant Invest
      {
        title: 'Quant Invest',
        path: PATH_ADMIN_DASHBOARD.passiveInvest,
        icon: PassiveInvestIcon,
      },
      // Affiliate
      {
        title: 'Affiliate Program',
        path: PATH_ADMIN_DASHBOARD.affiliate,
        icon: AffiliateIcon,
      },
      // Let's talk!
      {
        title: 'Clients',
        path: PATH_ADMIN_DASHBOARD.clients,
        icon: LetsTalkIcon,
      },
      // Documentation
      {
        title: 'Payments',
        path: PATH_ADMIN_DASHBOARD.payments,
        icon: DocumentationIcon,
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

  // // DEMO MENU STATES
  // {
  //   subheader: 'Other cases',
  //   items: [
  //     {
  //       // default roles : All roles can see this entry.
  //       // roles: ['user'] Only users can see this item.
  //       // roles: ['admin'] Only admin can see this item.
  //        // roles: ['admin', 'manager'] Only admin/manager can see this item.
  //       // Reference from 'src/guards/RoleBasedGuard'.
  //       title: 'item_by_roles',
  //       path: PATH_DASHBOARD.permissionDenied,
  //       icon: ICONS.lock,
  //       roles: ['admin'],
  //       caption: 'only_admin_can_see_this_item',
  //     },
  //     {
  //       title: 'menu_level',
  //       path: '#/dashboard/menu_level',
  //       icon: ICONS.menuItem,
  //       children: [
  //         {
  //           title: 'menu_level_2a',
  //           path: '#/dashboard/menu_level/menu_level_2a',
  //         },
  //         {
  //           title: 'menu_level_2b',
  //           path: '#/dashboard/menu_level/menu_level_2b',
  //           children: [
  //             {
  //               title: 'menu_level_3a',
  //               path: '#/dashboard/menu_level/menu_level_2b/menu_level_3a',
  //             },
  //             {
  //               title: 'menu_level_3b',
  //               path: '#/dashboard/menu_level/menu_level_2b/menu_level_3b',
  //               children: [
  //                 {
  //                   title: 'menu_level_4a',
  //                   path: '#/dashboard/menu_level/menu_level_2b/menu_level_3b/menu_level_4a',
  //                 },
  //                 {
  //                   title: 'menu_level_4b',
  //                   path: '#/dashboard/menu_level/menu_level_2b/menu_level_3b/menu_level_4b',
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       title: 'item_disabled',
  //       path: '#disabled',
  //       icon: ICONS.disabled,
  //       disabled: true,
  //     },
  //
  //     {
  //       title: 'item_label',
  //       path: '#label',
  //       icon: ICONS.label,
  //       info: (
  //         <Label color="info" startIcon={<Iconify icon="eva:email-fill" />}>
  //           NEW
  //         </Label>
  //       ),
  //     },
  //     {
  //       title: 'item_caption',
  //       path: '#caption',
  //       icon: ICONS.menuItem,
  //       caption:
  //         'Quisque malesuada placerat nisl. In hac habitasse platea dictumst. Cras id dui. Pellentesque commodo eros a enim. Morbi mollis tellus ac sapien.',
  //     },
  //     {
  //       title: 'item_external_link',
  //       path: 'https://www.google.com/',
  //       icon: ICONS.external,
  //     },
  //     {
  //       title: 'blank',
  //       path: PATH_DASHBOARD.blank,
  //       icon: ICONS.blank,
  //     },
  //   ],
  // },
];

export default navConfig;
