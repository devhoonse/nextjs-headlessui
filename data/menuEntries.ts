/**
 * 메뉴 항목 정보
 * * name : 메뉴 이름
 * * href : 메뉴 클릭 시 이동할 페이지
 * * enabled : 메뉴 활성화 여부
 */
export type MenuEntry = {
  name: string;
  href: string;
  enabled: boolean;
};

/**
 * 메뉴에 배치할
 */
const menuEntries: MenuEntry[] = [
  {
    name: 'Home',
    href: '/',
    enabled: true
  },
  {
    name: 'About',
    href: '/about',
    enabled: true
  },
  {
    name: 'Contact',
    href: '/contact',
    enabled: true
  },
];
export default menuEntries;
