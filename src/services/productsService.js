import camisa from "../Images/pantlonJeanM.webp";
import reloj from "../Images/reloj2.jpg";
import relojMujer from "../Images/RelojMujreCuero.png";
import anteojoSol from "../Images/anteojos.jpg";
import camera from "../Images/camera.jpg";
import sombreroPlayaMujer from "../Images/beach_hat.jpg";
import chicaJeans from "../Images/chicaJean1.webp";
import chicaJeans2 from "../Images/chicaJean2.webp";
import chicaJeans3 from "../Images/chicaJean3.webp";
import chicaJeans4 from "../Images/chicaJean4.webp";

export const items = [
    {
        name: "Conjunto Camisa-pantalon",
        id: 1,
        categoria: 'mujer',
        price: 350,
        stock: 50,
        description: "Camisa y pantalon de jeans para mujer, varios talles. Moda Primavera/Verano",
        origen: "industria Argentina",
        image: chicaJeans,
        image1: chicaJeans2,
        image2: chicaJeans3,
        image3: chicaJeans4
    },
    {
        name: "Reloj Hombre",
        id: 2,
        categoria: 'hombre',
        price: 50000,
        stock: 10,
        description: "Reloj digital Hombre, malla intercambiable.",
        origen: "Industria China",
        image: reloj
    },
    {
      name: "camisa",
      id: 3,
      categoria: 'hombre',
      price: 5000,
      stock: 20,
      description: "Camisa Celeste Hombre 100% algodon",
      origen: "industria Argentina",
      image: camisa
    },
    {
        name: "Camara Nicon",
        id: 4,
        categoria: 'accesorio',
        price: 3500,
        stock: 50,
        description: "Camara profesional Nicon con flash ",
        origen: "Industria Japon",
        image: camera
      },
      {
        name: "Reloj Mujer",
        id: 5,
        categoria: 'mujer',
        price: 350,
        stock: 20,
        description: "Elegante reloj analogico, malla metalica. Colores de malla Cobre, Plata o aluminio ",
        origen: "Industria China",
        image: relojMujer
      },
      {
        name: "Anteojos de Sol",
        id: 6,
        categoria: 'accesorio',
        price: 400,
        stock: 50,
        description: "Anteojos de Sol con filtro UV ",
        origen: "Industria Brasil",
        image: anteojoSol
      },
      {
        name: "Sombrero Playa Mujer",
        id: 7,
        categoria: 'accesorio',
        price: 150,
        stock: 50,
        description: "Sombrero de playa ecologico para mujer ",
        origen: "Industria Brasil",
        image: sombreroPlayaMujer
      }
  ];
  