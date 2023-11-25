import Header from "./Components/Header/Header.jsx";
import Card from "./Components/Card/Card.jsx";
import Footer from "./Components/Footer/footer.jsx";
import Grid from "./Components/GRID/jsx and css/Grid.jsx";
import Carousel from "./Components/Carousel/Carousel.jsx";
import "./App.css";
function Home() {
  const imageData = [
    {
      id: 1,
      imageUrl:
        "https://c1.wallpaperflare.com/preview/633/1012/21/tomatoes-red-vegetables-healthy.jpg",
      name: "Tomoto Seeds",
      description: "Quantity   : 25 - 30 seeds  Red  Shape :  Round ",
      price: "₹20.00",
    },
    {
      id: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fycm90fGVufDB8fDB8fHww",
      name: "Carrot Seeds",
      description: "Quantity   :  2 Gram",
      price: "₹55.00",
    },
    {
      id: 3,
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod/images/beetroof-health-benefits-1637616232.jpg",
      name: "Beetroot  Seeds",
      description: "Quantity   :  2 Grams ",
      price: "₹30.00",
    },
    {
      id: 4,
      imageUrl:
        "https://images.unsplash.com/photo-1518006959466-0db0b6b4c1d0?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbGxpJTIwcGVwcGVyfGVufDB8fDB8fHww",
      name: "Chilli Seeds",
      description:
        "Quantity   : 25 - 30  seeds  Color :  Green    Shape :  Long",
      price: "₹25.00",
    },
    {
      id: 5,
      imageUrl:
        "https://cf.organicbazar.net/wp-content/uploads/2021/06/Untitled-design-2022-06-07T141123.553.jpg",
      name: "Pumpkin  seeds",
      description: "Quantity   :  15 - 20  seeds",
      price: "₹35.00",
    },
    {
      id: 6,
      imageUrl:
        "https://e1.pxfuel.com/desktop-wallpaper/743/808/desktop-wallpaper-8-vegetables-ideas-bitter-gourd.jpg",
      name: "BitterGourd  Seeds",
      description: "Quantity  :  10  - 12  Seeds Color : White ",
      price: "₹45.00",
    },
    {
      id: 7,
      imageUrl:
        "https://images.unsplash.com/photo-1602293675566-39734b95e6b6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVnZ3BsYW50fGVufDB8fDB8fHww",
      name: "Brinjal Seeds",
      description: "Quantity : 15 - 20  seeds Color : Green   Shape : Round ",
      price: "₹50.00",
    },
    {
      id: 8,
      imageUrl:
        "https://www.skorganicfarms.com/cdn/shop/products/okra1_900x.jpg?v=1596340103",
      name: "Okra Seeds",
      description: "Quantity   : 15 - 20 seeds Color : Green  Shape :  Medium",
      price: "₹45.00",
    },
    {
      id: 9,
      imageUrl: "https://dutable.com/wp-content/uploads/2021/03/000-94.jpg",
      name: "Capsicum Seeds",
      description: "Quantity   :  15 - 20  seeds Color : Green  Shape : Round ",
      price: "₹70.00",
    },
    {
      id: 10,
      imageUrl: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2018%2F01%2F08%2FGettyImages-454629217-2000.jpg&q=60",
      name: "Radish Seeds",
      description: " Quantity  : 50  Seeds  Color :  White",
      price: "₹30.00",
    },
  ];
  return (
    <>
      <Header></Header>
      <Carousel></Carousel>
      <Grid></Grid>
      <div className="grid-container">
        {imageData.map((value) => (
          <Card
          key={value.id}
          iurl={value.imageUrl}
          name={value.name}
          desc={value.description}
          price={value.price}
          ></Card>
          ))}
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
