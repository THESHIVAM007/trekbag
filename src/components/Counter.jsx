export default function Counter({ numberofItemsPacked, totalNumberOfItems }) {
  return (
    <p>
      <b>{numberofItemsPacked}</b> /{totalNumberOfItems} items packed
    </p>
  );
}
