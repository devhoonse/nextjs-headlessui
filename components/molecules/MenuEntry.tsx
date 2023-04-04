import Link from "next/link";
import {Menu} from "@headlessui/react";
import cx from 'classnames';
import {MenuEntry} from "@/data/menuEntries";

// Headless UI 의 메뉴 아이템 컴포넌트 참조를 가져옵니다.
const { Item: MenuItem } = Menu;

/**
 * 메뉴 개별 항목 컴포넌트
 * @constructor
 */
function MenuEntry({ name, href, enabled }: MenuEntry) {

  // 컴포넌트 구조
  return (
    <MenuItem disabled={!enabled}>
      {({ active }) => {

        /**
         * 활성화 여부 및 active(사용자가 현재 어떤 메뉴를 선택했는지) 상태에 따라
         * CSS 클래스 를 다르게 적용합니다.
         */
        const classNames = cx(
          'w-full', 'p-2', 'rounded-lg', 'mt-2', 'mb-2',
          {
            'opacity-50': !enabled,
            'bg-blue-600': active,
            'text-white': active
          }
        );

        // 개별 메뉴 항목 컴포넌트의 내부는 <Link> 컴포넌트입니다.
        return (
          <Link passHref href={href} className={classNames}>
            {name}
          </Link>
        );
      }}
    </MenuItem>
  );
}
export default MenuEntry;
