import { useState } from 'react';
import { NavBarItem } from './nav-bar-item';

export function ItemDirectory({ name, childData }) {
  const [isDirectoryOpen, setIsDirectoryOpen] = useState(false);

  function renderNavBarList(data) {
    return data.map((item) => {
      return <NavBarItem key={item.id} item={item} />;
    });
  }

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <button
          onClick={() => {
            setIsDirectoryOpen((prev) => !prev);
          }}
          style={{ padding: '0', background: 0, border: 'none' }}
        >
          &gt;
        </button>
        <p style={{ paddingLeft: '2px' }}>{name}</p>
      </div>
      {childData.length > 0 && isDirectoryOpen && renderNavBarList(childData)}
    </div>
  );
}
