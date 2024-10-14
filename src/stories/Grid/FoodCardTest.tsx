import { FoodCard } from "@packages/index";

const count = new Array(10).fill(null);

const FoodCardTest =
  <>
    {count.map(() => (
      <FoodCard
        linkUrl={'javascript: alert("click")'}
        placeImage={'https://picsum.photos/150/150'}
        placeAddress={'음식점 주소'}
        placeName={'음식점 이름'}
        placeRating={'5.0'}
      />
    ))}
  </>

export default FoodCardTest;