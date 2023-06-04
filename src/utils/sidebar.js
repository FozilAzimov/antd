import Buttons from "../components/Buttons";
import Inputs from "../components/Inputs";
import Generic from "../components/Generic";
import Tooltips from "../components/Tooltips";

export const sidebar = [
  {
    id: 1,
    title: "Button",
    path: "/components/buttons",
    element: <Buttons />,
  },
  {
    id: 2,
    title: "Input",
    path: "/components/inputs",
    element: <Inputs />
  },
  {
    id: 3,
    title: "Dropdown",
    path: "/components/dropdown",
    element: <Generic />,
  },
  {
    id: 4,
    title: "Tooltip",
    path: "/components/tooltip",
    element: <Tooltips />,
  },
  {
    id: 5,
    title: "Checkbox",
    path: "/components/checkbox",
    element: <Generic />,
  },
  {
    id: 6,
    title: "Switch",
    path: "/components/switch",
    element: <Generic />,
  },
  {
    id: 7,
    title: "Badge",
    path: "/components/badge",
    element: <Generic />,
  },
  {
    id: 8,
    title: "Alert",
    path: "/components/alert",
    element: <Generic />,
  },
  {
    id: 9,
    title: "Table",
    path: "/components/table",
    element: <Generic />,
  },
  {
    id: 10,
    title: "Progress",
    path: "/components/progress",
    element: <Generic />,
  },
];
