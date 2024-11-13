export default function ItemList({
  items,
  handleDeleteItem,
  handleToggleItem,
}) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <Item
            onDeleteItem={handleDeleteItem}
            onToggleItem={handleToggleItem}
            key={item.name}
            item={item}
          />
        );
      })}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => onToggleItem(item.id)}
          checked={item.packed}
          type="checkbox"
        />
        {item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
