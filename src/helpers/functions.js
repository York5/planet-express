export const handleInp = (e, rocket, setRocket) => {
  let obj = {
    ...rocket,
    [e.target.name]: e.target.value,
  };
  setRocket(obj);
};

export const calcSubPrice = (rocket) => rocket.count * rocket.item.price;

export const calcTotalPrice = (rockets) => {
  return rockets.reduce((ac, cur) => {
    return (ac += cur.subPrice);
  }, 0);
};

export const getCurrentPage = () => {
  const search = new URLSearchParams(window.location.search);

  if (!search.get("_page")) {
    return 1;
  }

  return search.get("_page");
};
