import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({ totalNumberOfItems, numberofItemsPacked }) {
  return (
    <header>
      <Logo />
      <Counter
        numberofItemsPacked={numberofItemsPacked}
        totalNumberOfItems={totalNumberOfItems}
      />
    </header>
  );
}
