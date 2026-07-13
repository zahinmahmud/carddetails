// import premio from "./assets/image/premio_front.jpg";
// import premioB from "./assets/image/premio_back.jpg"
// import noahFront from "./assets/image/Toyota-Noah_front.jpg"
// import noahback from "./assets/image/noahback.jpg"
// import allionFront from "./assets/image/allionfront.jpg"
// import allionback from "./assets/image/allionback.jpg"
// import axiofront from "./assets/image/axiofront.jpg"
// import axioback from "./assets/image/axioback.jpg"
// import voxyfront from "./assets/image/voxyfront.jpg "
// import voxyback from "./assets/image/voxyback.jpg"
// import aquafront from "./assets/image/aquafront.jpg"
// import aquaback from "./assets/image/aquaback.jpg"
// import Vitzfront from "./assets/image/VitzFront.jpg"
// import Vitzback from "./assets/image/vitzback.jpg"
// import Alphardfront from "./assets/image/alphardfront.jpg"
// import Alphardback from "./assets/image/alphardback.jpg"
// import CHRfront from "./assets/image/CR-Vfront.jpg"
// import CHRback from "./assets/image/CHR.jpg"
// import esquirefront from "./assets/image/esquirefront.jpg"
// import esquireback from "./assets/image/esquireback.jpg"
// import Harrierfront from "./assets/image/harrierfront.jpg"
// import Harrierback from "./assets/image/harrierback.jpg"
// import crossfront from "./assets/image/corollacrossfront.jpg"
// import crossback  from "./assets/image/corollacrossback.jpg"
import premio from "./assets/image/premio_front.jpg";
import premioB from "./assets/image/premio_back.jpg";
import noahFront from "./assets/image/Toyota-Noah_front.jpg";
import noahback from "./assets/image/noahback.jpg";
import allionFront from "./assets/image/allionfront.jpg";
import allionback from "./assets/image/allionback.jpg";
import axiofront from "./assets/image/axiofront.jpg";
import axioback from "./assets/image/axioback.jpg";
import voxyfront from "./assets/image/voxyfront.jpg"; // Fixed trailing space bug here
import voxyback from "./assets/image/voxyback.jpg";
import aquafront from "./assets/image/aquafront.jpg";
import aquaback from "./assets/image/aquaback.jpg";
import Vitzfront from "./assets/image/VitzFront.jpg";
import Vitzback from "./assets/image/vitzback.jpg";
import Alphardfront from "./assets/image/alphardfront.jpg";
import Alphardback from "./assets/image/alphardback.jpg";
import CHRfront from "./assets/image/CR-Vfront.jpg"; // Double check if this is a Honda CR-V or Toyota C-HR!
import CHRback from "./assets/image/CHR.jpg";
import esquirefront from "./assets/image/esquirefront.jpg";
import esquireback from "./assets/image/esquireback.jpg";
import Harrierfront from "./assets/image/harrierfront.jpg";
import Harrierback from "./assets/image/harrierback.jpg";
import crossfront from "./assets/image/corollacrossfront.jpg";
import crossback from "./assets/image/corollacrossback.jpg";

const productDetails = [
    {
        id: 1,
        BrandName: "Toyota",
        ModelName: "Premio",
        CarImage: premio,
        CarImageback: premioB,
        ImageWidth: "150px",
        CarCC: 1600,
        FuelType: "Octane",
        CarRunning: "65000km",
        Manufacture: 2016,
        Package: "F",
        seat: 5,
        ShapeType: "New Shape",
        AccidentHistory: true,
        EngineModel: [
            {
                engine: "1.5L",
                mileage: {
                    highway: "14-16 km/L",
                    city: "10-12 km/L"
                }
            },
            {
                engine: "1.8L",
                mileage: {
                    highway: "12-14 km/L",
                    city: "8-10 km/L"
                }
            },
            {
                engine: "2.0L",
                mileage: {
                    highway: "10-12 km/L",
                    city: "7-9 km/L"
                }
            }
        ]
    },
    {
        id: 2,
        BrandName: "Toyota",
        ModelName: "Noah",
        CarCC: 2000,
        CarImage: [noahFront,noahback],
        ImageWidth: "150px",
        FuelType: "Octane | Hybrid",
        CarRunning: "81460km",
        Manufacture: 2021,
        Package: "WXB",
        seat: "7/8",
        ShapeType: "New Shape",
        AccidentHistory: true,
        EngineModel: [
            {
                engine: "1.8L Hybrid",
                mileage: {
                    highway: "16-18 km/L",
                    city: "18-22 km/L"
                }
            },
            {
                engine: "2.0L Non-Hybrid",
                mileage: {
                    highway: "12-14 km/L",
                    city: "8-10 km/L"
                }
            }
        ]
    },
    {
        id: 3,
        BrandName: "Toyota",
        ModelName: "Axio",
        CarImage:[allionFront,allionback],
        CarCC: 1300,
        FuelType: "Octane",
        CarRunning: 67000,
        Manufacture: 2016,
        Package: "1.5G",
        seat: 5,
        ShapeType: "New Shape",
        AccidentHistory: true,
        EngineModel: [
            {
                engine: "1.3L",
                mileage: {
                    highway: "15-17 km/L",
                    city: "11-13 km/L"
                }
            },
            {
                engine: "1.5L Non-Hybrid",
                mileage: {
                    highway: "14-16 km/L",
                    city: "10-12 km/L"
                }
            },
            {
                engine: "1.5L Hybrid",
                mileage: {
                    highway: "18-20 km/L",
                    city: "20-23 km/L"
                }
            }
        ]
    },
    {
        id: 4,
        BrandName: "Toyota",
        ModelName: "Allion",
        CarImage:[allionFront,allionback],
        CarCC: 1500,
        FuelType: "Octane ",
        CarRunning: "44188km",
        Manufacture: 2016,
        Package: "G-Plus",
        seat: 5,
        ShapeType: "New Shape",
        AccidentHistory: true,
        EngineModel: [
            {
                engine: "1.5L",
                mileage: {
                    highway: "14-16 km/L",
                    city: "10-12 km/L"
                }
            },
            {
                engine: "1.8L",
                mileage: {
                    highway: "12-14 km/L",
                    city: "8-10 km/L"
                }
            }
        ]
    },
    {
        id: 5,
        BrandName: "Toyota",
        ModelName: "Voxy",
        CarCC: 2000,
        CarImage:[voxyfront,voxyback],
        FuelType: "Octane /Hybrid",
        CarRunning: "87000km",
        Manufacture: 2021,
        Package: "Zskiramki v3",
        seat: 7,
        ShapeType: "New Shape",
        AccidentHistory: true,
        EngineModel: [
            {
                engine: "1.8L Hybrid",
                mileage: {
                    highway: "16-18 km/L",
                    city: "18-22 km/L"
                }
            },
            {
                engine: "2.0L Non-Hybrid",
                mileage: {
                    highway: "12-14 km/L",
                    city: "8-10 km/L"
                }
            }
        ]
    },
    {
        id: 6,
        BrandName: "Toyota",
        ModelName: "Esquire",
        CarImage:[esquirefront,esquireback],
        CarCC: 2000,
        FuelType: "Octane /Hybrid",
        CarRunning: "60000km",
        Manufacture: 2021,
        Package: "G1-premium Black",
        seat: 9,
        ShapeType: "New Shape",
        AccidentHistory: true,
        EngineModel: [
            {
                engine: "1.8L Hybrid",
                mileage: {
                    highway: "16-18 km/L",
                    city: "18-21 km/L"
                }
            },
            {
                engine: "2.0L Non-Hybrid",
                mileage: {
                    highway: "12-14 km/L",
                    city: "8-10 km/L"
                }
            }
        ]
    },
    {
        id: 7,
        BrandName: "Toyota",
        ModelName: "Corolla Cross",
        CarImage:[crossfront,crossback],
        CarCC: 2000,
        FuelType: "Octane | Hybrid",
        CarRunning: "50000km",
        Manufacture: 2021,
        Package: "Z-leather",
        seat: 5,
        ShapeType: "New Shape",
        AccidentHistory: true,
        EngineModel: [
            {
                engine: "1.8L Non-Hybrid",
                mileage: {
                    highway: "14-16 km/L",
                    city: "10-12 km/L"
                }
            },
            {
                engine: "1.8L Hybrid",
                mileage: {
                    highway: "18-20 km/L",
                    city: "20-24 km/L"
                }
            }
        ]
    },
    {
        id: 8,
        BrandName: "Toyota",
        ModelName: "Harrier",
        CarImage:[Harrierfront,Harrierback],
        CarCC: 2000,
        FuelType: "Octane | Hybrid",
        CarRunning: "40000km",
        Manufacture: 2015,
        Package: "premium advance",
        seat: 7,
        ShapeType: "New Shape",
        AccidentHistory: true,
        EngineModel: [
            {
                engine: "2.0L Non-Hybrid",
                mileage: {
                    highway: "11-13 km/L",
                    city: "7-9 km/L"
                }
            },
            {
                engine: "2.0L Turbo",
                mileage: {
                    highway: "10-12 km/L",
                    city: "6-8 km/L"
                }
            },
            {
                engine: "2.5L Hybrid",
                mileage: {
                    highway: "15-17 km/L",
                    city: "16-18 km/L"
                }
            }
        ]
    },
    {
        id: 9,
        BrandName: "Toyota",
        ModelName: "C-HR",
        CarImage:[CHRback,CHRfront],
        CarCC: 2000,
        FuelType: "Octane | Hybrid",
        CarRunning: "47000km",
        Manufacture: 2019,
        Package: "G-LED",
        seat: 5,
        ShapeType: "New Shape",
        AccidentHistory: true,
        EngineModel: [
            {
                engine: "1.2L Turbo",
                mileage: {
                    highway: "13-15 km/L",
                    city: "9-11 km/L"
                }
            },
            {
                engine: "1.8L Hybrid",
                mileage: {
                    highway: "18-20 km/L",
                    city: "20-23 km/L"
                }
            }
        ]
    },
    {
        id: 10,
        BrandName: "Toyota",
        ModelName: "Alphard",
        CarImage:[Alphardfront,Alphardback],
        CarCC: 2500,
        FuelType: "Octane | Hybrid",
        CarRunning: "65000km",
        Manufacture: 2016,
        Package: "F",
        seat: 5,
        ShapeType: "New Shape",
        AccidentHistory: true,
        EngineModel: [
            {
                engine: "2.5L Non-Hybrid",
                mileage: {
                    highway: "10-12 km/L",
                    city: "6-8 km/L"
                }
            },
            {
                engine: "2.5L Hybrid",
                mileage: {
                    highway: "14-16 km/L",
                    city: "12-14 km/L"
                }
            },
            {
                engine: "3.5L V6",
                mileage: {
                    highway: "8-10 km/L",
                    city: "5-7 km/L"
                }
            }
        ]
    },
    {
        id: 11,
        BrandName: "Toyota",
        ModelName: "Aqua",
        CarImage:[aquafront ,aquaback],
        CarCC: 1000,
        FuelType: "Hybrid ",
        CarRunning: "30000km",
        Manufacture: 2021,
        Package: "S-Style Black",
        seat: 4,
        ShapeType: "New Shape",
        AccidentHistory: true,
        EngineModel: [
            {
                engine: "1.5L Hybrid",
                mileage: {
                    highway: "20-22 km/L",
                    city: "22-25 km/L"
                }
            }
        ]
    },
    {
        id: 12,
        BrandName: "Toyota",
        ModelName: "Vitz",
        CarImage:[Vitzfront,Vitzback],
        CarCC: 1300,
        FuelType: "Octane",
        CarRunning: "65000km",
        Manufacture: 2016,
        Package: "F",
        seat: 5,
        ShapeType: "New Shape",
        AccidentHistory: true,
        EngineModel: [
            {
                engine: "1.0L",
                mileage: {
                    highway: "16-18 km/L",
                    city: "12-14 km/L"
                }
            },
            {
                engine: "1.3L",
                mileage: {
                    highway: "15-17 km/L",
                    city: "11-13 km/L"
                }
            },
            {
                engine: "1.5L Hybrid",
                mileage: {
                    highway: "20-22 km/L",
                    city: "22-24 km/L"
                }
            }
        ]
    },
    {
        id: 13,
        BrandName: "Toyota",
        ModelName: "Rav4",
        CarImage:[],
        CarCC: 2000,
        FuelType: "Octane | Hybrid",
        CarRunning: "63000km",
        Manufacture: 2020,
        Package: "G-package",
        seat: 5,
        ShapeType: "New Shape",
        AccidentHistory: true,
        EngineModel: [
            {
                engine: "2.0L Non-Hybrid",
                mileage: {
                    highway: "13-15 km/L",
                    city: "9-11 km/L"
                }
            },
            {
                engine: "2.5L Hybrid",
                mileage: {
                    highway: "17-19 km/L",
                    city: "16-18 km/L"
                }
            }
        ]
    },
    {
        id: 14,
        BrandName: "Toyota",
        ModelName: "Rush",
        CarImage:[],
        CarCC: 1600,
        FuelType: "Octane ",
        CarRunning: "20000km",
        Manufacture: 2020,
        Package: "S Package",
        seat: 5,
        ShapeType: "New Shape",
        AccidentHistory: true,
        EngineModel: [
            {
                engine: "1.5L Dual VVT-i",
                mileage: {
                    highway: "13-15 km/L",
                    city: "9-11 km/L"
                }
            }
        ]
    },
    {
        id: 15,
        BrandName: "Toyota",
        ModelName: "Land Crusier Prado",
        CarImage:[],
        CarCC: 2700,
        FuelType: "Octane",
        CarRunning: "65000km",
        Manufacture: 2016,
        Package: "TX",
        seat: 7,
        ShapeType: "New Shape",
        AccidentHistory: true,
        EngineModel: [
            {
                engine: "2.7L Petrol",
                mileage: {
                    highway: "9-11 km/L",
                    city: "6-8 km/L"
                }
            },
            {
                engine: "2.8L Diesel",
                mileage: {
                    highway: "11-13 km/L",
                    city: "8-10 km/L"
                }
            },
            {
                engine: "4.0L V6",
                mileage: {
                    highway: "7-9 km/L",
                    city: "4-6 km/L"
                }
            }
        ]
    }
];

export default productDetails;