import Button from "./Button";

import { useItemsContext } from "../lib/hooks";

export default function ButtonGroup() {
  const {
    handleMarkAllAsComplete,
    handleMarkAllInAsComplete,
    handleResetToInitial,
    handleRemoveAllItems,
  } = useItemsContext();
  const secondaryButtons = [
    {
      text: "Mark all as complete",
      onClick: handleMarkAllAsComplete,
    },
    {
      text: "Mark all as incomplete",
      onClick: handleMarkAllInAsComplete,
    },
    {
      text: "Reset to initial",
      onClick: handleResetToInitial,
    },
    {
      text: "Remove all items",
      onClick: handleRemoveAllItems,
    },
  ];

  return (
    <div className="button-group">
      {secondaryButtons.map((button) => {
        return (
          <Button
            key={button.text + button.onClick.toString()}
            onClick={button.onClick}
            buttontype="secondary"
          >
            {button.text}
          </Button>
        );
      })}
    </div>
  );
}
