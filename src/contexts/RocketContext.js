import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useHistory } from "react-router";
import { ACTIONS, JSON_API_ROCKETS, ROCKET_LIMIT } from "../helpers/consts";

export const rocketContext = createContext();

export const useRockets = () => {
  return useContext(rocketContext);
};

const INIT_STATE = {
  rocketsData: [],
  rocketDetails: {},
  cart: [],
  pages: 1,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_ROCKETS:
      return {
        ...state,
        rocketsData: action.payload.data,
        pages: Math.ceil(
          action.payload.headers["x-total-count"] / ROCKET_LIMIT
        ),
      };
    case ACTIONS.GET_ROCKET_DETAILS:
      return { ...state, rocketDetails: action.payload };
    case ACTIONS.GET_CART:
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};

const RocketContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const history = useHistory();

  const getRocketsData = async () => {
    const search = new URLSearchParams(history.location.search);
    search.set("_limit", ROCKET_LIMIT);
    history.push(`${history.location.pathname}?${search.toString()}`);
    const res = await axios(`${JSON_API_ROCKETS}/${window.location.search}`);
    dispatch({
      type: ACTIONS.GET_ROCKETS,
      payload: res,
    });
  };

  const getRocketDetails = async (id) => {
    const { data } = await axios(`${JSON_API_ROCKETS}/${id}`);
    dispatch({
      type: ACTIONS.GET_ROCKET_DETAILS,
      payload: data,
    });
  };

  const addRocket = async (rocket) => {
    const data = await axios.post(JSON_API_ROCKETS, rocket);
    getRocketsData();
  };

  const deleteRocket = async (id) => {
    const data = await axios.delete(`${JSON_API_ROCKETS}/${id}`);
    await history.push("/catalog");
    getRocketsData();
  };

  const saveEditedRocket = async (id, editedRocket) => {
    const data = await axios.patch(`${JSON_API_ROCKETS}/${id}`, editedRocket);
    history.push(`/details/${id}`);
  };

  //   const getCart = () => {
  //     let cart = JSON.parse(localStorage.getItem("cart"));
  //     if (!cart) {
  //       localStorage.setItem(
  //         "cart",
  //         JSON.stringify({
  //           rockets: [],
  //           totalPrice: 0,
  //         })
  //       );
  //       cart = {
  //         rockets: [],
  //         totalPrice: 0,
  //       };
  //     }
  //     dispatch({
  //       type: ACTIONS.GET_CART,
  //       payload: cart,
  //     });
  //   };

  //   const addRocketToCart = (rocket) => {
  //     let cart = JSON.parse(localStorage.getItem("cart"));
  //     if (!cart) {
  //       cart = {
  //         rockets: [],
  //         totalPrice: 0,
  //       };
  //     }
  //     let newRocket = {
  //       item: rocket,
  //       count: 1,
  //       subPrice: +rocket.price,
  //     };

  //     console.log(newRocket);

  //     let rocketToFind = cart.rockets.filter(
  //       (item) => item.item.id === rocket.id
  //     );
  //     if (rocketToFind.length == 0) {
  //       cart.rockets.push(newRocket);
  //     } else {
  //       cart.rockets = cart.rockets.filter(
  //         (item) => item.item.id !== rocket.id
  //       );
  //     }
  //     cart.totalPrice = calcTotalPrice(cart.rockets);
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //     dispatch({
  //       type: ACTIONS.GET_CART,
  //       payload: cart,
  //     });
  //   };

  //   const changeRocketCount = (count, id) => {
  //     let cart = JSON.parse(localStorage.getItem("cart"));
  //     cart.rockets = cart.rockets.map((rocket) => {
  //       if (rocket.item.id === id) {
  //         rocket.count = count;
  //         rocket.subPrice = calcSubPrice(rocket);
  //       }
  //       return rocket;
  //     });
  //     cart.totalPrice = calcTotalPrice(cart.rockets);
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //     dispatch({
  //       type: ACTIONS.GET_CART,
  //       payload: cart,
  //     });
  //   };

  const values = {
    history,
    rocketsData: state.rocketsData,
    rocketDetails: state.rocketDetails,
    cart: state.cart,
    pages: state.pages,
    getRocketsData,
    getRocketDetails,
    deleteRocket,
    addRocket,
    saveEditedRocket,
    // getCart,
    // addRocketToCart,
    // changeRocketCount,
  };

  return (
    <rocketContext.Provider value={values}>{children}</rocketContext.Provider>
  );
};

export default RocketContextProvider;
