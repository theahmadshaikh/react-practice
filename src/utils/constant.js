export const LOGO_URL = "https://img.freepik.com/premium-vector/food-ordering-app-logo-with-points-fork-shapes-center_666184-195.jpg"
export const getRestaurantMenuURL = ({ id, lat = "12.93", lng = "77.62", query = "" }) =>
  `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${id}&catalog_qa=undefined&query=${query}`;
