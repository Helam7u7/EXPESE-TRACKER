export const getIconElement = (e, setIconList, iconList) => {
  const clickedIcon = e.currentTarget;
  setIconList(clickedIcon);
  console.log(iconList);
};
