const productDetails = [
    {
        id: 1,
        image:"",
        BrandName: "Toyota",
        ModelName: "Premio",
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
        id: 5, // Note: You may want to update this ID to 5 to keep the sequence correct
        BrandName: "Toyota",
        ModelName: "Voxy",
        CarCC: 2000,
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