import {Menu, Transition} from "@headlessui/react";
import menuEntries from "@/data/menuEntries";
import MenuEntry from "@/components/molecules/MenuEntry";

// Headless UI 의 메뉴 아이템 리스트 컴포넌트 참조를 가져옵니다.
const { Button, Items: MenuItems } = Menu;

/**
 * 메뉴 바 컴포넌트
 * @constructor
 */
function MenuBar() {

  // 컴포넌트 구조
  return (
    <Menu>
      <Button
        className={[
          'p-2', 'pl-4', 'pr-4', 'rounded-lg',
          'bg-purple-500', 'text-white'
        ].join(' ')}
      >
        My Menu
      </Button>
      <Transition
        enter={['transition', 'duration-100', 'ease-out'].join(' ')}
        enterFrom={['transform', 'scale-95', 'opacity-0'].join(' ')}
        enterTo={['transform', 'scale-100', 'opacity-100'].join(' ')}
        leave={['transition', 'duration-75', 'ease-out'].join(' ')}
        leaveFrom={['transform', 'scale-100', 'opacity-100'].join(' ')}
        leaveTo={['transform', 'scale-95', 'opacity-0'].join(' ')}
      >
        <MenuItems
          className={[
            'flex', 'flex-col', 'w-52', 'mt-4', 'p-2',
            'rounded-xl', 'shadow-lg'
          ].join(' ')}
        >
          {menuEntries.map((menuEntry, index) => (
            <MenuEntry key={index} {...menuEntry} />
          ))}
        </MenuItems>
      </Transition>
    </Menu>
  );
}
export default MenuBar;
