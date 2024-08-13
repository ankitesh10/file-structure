import { NavBarItem } from './nav-bar-item';

path: 'file.js';
path: 'directory1/directory2/file.js';

// function getPath(path: string) {
//   const listOfPath = path.split('/');

//   return listOfPath.length;
// }

const data = [
  {
    id: '1',
    type: 'file',
    fileExtension: '.js',
    fileName: 'name',
  },
  {
    id: '2',
    type: 'directory',
    directoryName: 'directory',
    level: 1,
    childData: [
      {
        level: 2,
        id: '2-1',
        type: 'file',
        fileExtension: '.js',
        fileName: 'name2-1',
      },
      {
        level: 2,
        id: '2-2',
        type: 'directory',
        directoryName: 'name2-2',
        childData: [
          {
            id: '2-2-1',
            type: 'file',
            fileExtension: '.js',
            fileName: 'name2-2-1',
          },
        ],
      },
    ],
  },
];

export function NavBar() {
  function renderNavBarList() {
    return data.map((item) => {
      return <NavBarItem key={item.id} item={item} />;
    });
  }

  return <div>{renderNavBarList()}</div>;
}
