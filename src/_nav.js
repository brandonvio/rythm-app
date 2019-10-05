export default {
  items: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "icon-speedometer"
    },
    {
      title: true,
      name: "Oanda",
      wrapper: {
        // optional wrapper object
        element: "", // required valid HTML5 element tag
        attributes: {} // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: "" // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: "Instruments",
      url: "/instruments",
      icon: "icon-drop",
      badge: {
        variant: "info",
        text: "NEW"
      }
    },
    {
      name: "Account",
      url: "/oanda/account",
      icon: "icon-drop"
    },
    {
      name: "Back Trader",
      url: "/trader/backtrader",
      icon: "icon-puzzle"
    },
    {
      name: "Live Trader",
      url: "/trader/livetrader",
      icon: "icon-puzzle"
    }
  ]
};
