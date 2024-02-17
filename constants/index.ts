export const COLORS = ["#DC2626", "#D97706", "#059669", "#7C3AED", "#DB2777"];

export const shapeElements = [
  {
    icon: "/asset/rectangle.svg",
    name: "Rectangle",
    value: "rectangle",
  },
  {
    icon: "/asset/circle.svg",
    name: "Circle",
    value: "circle",
  },
  {
    icon: "/asset/triangle.svg",
    name: "Triangle",
    value: "triangle",
  },
  {
    icon: "/asset/line.svg",
    name: "Line",
    value: "line",
  },
  {
    icon: "/asset/image.svg",
    name: "Image",
    value: "image",
  },
  {
    icon: "/asset/freeform.svg",
    name: "Free Drawing",
    value: "freeform",
  },
];

export const navElements = [
  {
    icon: "/asset/select.svg",
    name: "Select",
    value: "select",
  },
  {
    icon: "/asset/rectangle.svg",
    name: "Rectangle",
    value: shapeElements,
  },
  {
    icon: "/asset/text.svg",
    value: "text",
    name: "Text",
  },
  {
    icon: "/asset/delete.svg",
    value: "delete",
    name: "Delete",
  },
  {
    icon: "/asset/reset.svg",
    value: "reset",
    name: "Reset",
  },
  {
    icon: "/asset/comments.svg",
    value: "comments",
    name: "Comments",
  },
];

export const defaultNavElement = {
  icon: "/asset/select.svg",
  name: "Select",
  value: "select",
};

export const directionOptions = [
  { label: "Bring to Front", value: "front", icon: "/asset/front.svg" },
  { label: "Send to Back", value: "back", icon: "/asset/back.svg" },
];

export const fontFamilyOptions = [
  { value: "Helvetica", label: "Helvetica" },
  { value: "Times New Roman", label: "Times New Roman" },
  { value: "Comic Sans MS", label: "Comic Sans MS" },
  { value: "Brush Script MT", label: "Brush Script MT" },
];

export const fontSizeOptions = [
  {
    value: "10",
    label: "10",
  },
  {
    value: "12",
    label: "12",
  },
  {
    value: "14",
    label: "14",
  },
  {
    value: "16",
    label: "16",
  },
  {
    value: "18",
    label: "18",
  },
  {
    value: "20",
    label: "20",
  },
  {
    value: "22",
    label: "22",
  },
  {
    value: "24",
    label: "24",
  },
  {
    value: "26",
    label: "26",
  },
  {
    value: "28",
    label: "28",
  },
  {
    value: "30",
    label: "30",
  },
  {
    value: "32",
    label: "32",
  },
  {
    value: "34",
    label: "34",
  },
  {
    value: "36",
    label: "36",
  },
];

export const fontWeightOptions = [
  {
    value: "400",
    label: "Normal",
  },
  {
    value: "500",
    label: "Semibold",
  },
  {
    value: "600",
    label: "Bold",
  },
];

export const alignmentOptions = [
  { value: "left", label: "Align Left", icon: "/asset/align-left.svg" },
  {
    value: "horizontalCenter",
    label: "Align Horizontal Center",
    icon: "/asset/align-horizontal-center.svg",
  },
  { value: "right", label: "Align Right", icon: "/asset/align-right.svg" },
  { value: "top", label: "Align Top", icon: "/asset/align-top.svg" },
  {
    value: "verticalCenter",
    label: "Align Vertical Center",
    icon: "/asset/align-vertical-center.svg",
  },
  { value: "bottom", label: "Align Bottom", icon: "/asset/align-bottom.svg" },
];

export const shortcuts = [
  {
    key: "1",
    name: "Chat",
    shortcut: "/",
  },
  {
    key: "2",
    name: "Undo",
    shortcut: "⌘ + Z",
  },
  {
    key: "3",
    name: "Redo",
    shortcut: "⌘ + Y",
  },
  {
    key: "4",
    name: "Reactions",
    shortcut: "E",
  },
];
