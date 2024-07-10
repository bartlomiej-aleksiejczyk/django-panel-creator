export default function validateTopbarItems(data) {
  const validateItem = (item) => {
    if (
      !item.hasOwnProperty("defaultName") ||
      !item.hasOwnProperty("id") ||
      !item.hasOwnProperty("type")
    ) {
      return false;
    }

    switch (item.type) {
      case "link":
        if (!item.hasOwnProperty("link") || item.hasOwnProperty("objects")) {
          return false;
        }
        break;
      case "container":
        if (
          !item.hasOwnProperty("objects") ||
          !Array.isArray(item.objects) ||
          !item.objects.every(validateItem)
        ) {
          return false;
        }
        break;
      default:
        return false;
    }

    if (item.hasOwnProperty("iconLink") && typeof item.iconLink !== "string") {
      return false;
    }

    const allowedProperties = [
      "defaultName",
      "id",
      "type",
      "link",
      "iconLink",
      "objects",
    ];
    for (const key in item) {
      if (!allowedProperties.includes(key)) {
        return false;
      }
    }

    return true;
  };

  if (!Array.isArray(data.content)) {
    return false;
  }

  return data.content.every(validateItem);
}
