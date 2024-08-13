import { ItemFile } from './item-file';
import { ItemDirectory } from './item-directory';

export const NavBarItem = ({ item }) => {
  if (item.type === 'file') {
    return (
      <ItemFile
        fileExtension={item.fileExtension}
        name={item.fileName}
        key={item.id}
      />
    );
  }

  return (
    <ItemDirectory
      key={item.id}
      name={item.directoryName}
      childData={item.childData}
    />
  );
};
