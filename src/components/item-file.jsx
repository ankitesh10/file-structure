export function ItemFile({ fileExtension, name }) {
  console.log('fileExtension', fileExtension);
  return (
    <div>
      {name}
      {fileExtension}
    </div>
  );
}
