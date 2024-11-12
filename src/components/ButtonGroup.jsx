import Button from "./Button";

export default function ButtonGroup() {
  return (
    <div className="button-group">
      <Button type="secondary"> Mark all as completed</Button>
      <Button type="secondary"> Mark all as incomplete</Button>
      <Button type="secondary"> reset all to initial</Button>
      <Button type="secondary"> remove all items</Button>
    </div>
  );
}
