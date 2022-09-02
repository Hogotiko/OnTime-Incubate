export const PriceListData = () => {
  return (
    [
      {
        id: Math.round(Math.random() * 100),
        tarifSrc: "assets/assetsPriceList/basic.svg",
        tarifText: "basic",
        price: 2.99,
        isHave: [
          {
            id: Math.round(Math.random() * 100),
            text: "Lorem Ipsum dollar site",
            isExist: true,
          },
          {
            id: Math.round(Math.random() * 100),
            text: "Lorem Ipsum dollar site",
            isExist: true,
          },
          {
            id: Math.round(Math.random() * 100),
            text: "Lorem Ipsum dollar site",
            isExist: false,
          },
          {
            id: Math.round(Math.random() * 100),
            text: "Lorem Ipsum dollar site",
            isExist: false,
          },
          {
            id: Math.round(Math.random() * 100),
            text: "Lorem Ipsum dollar site",
            isExist: false,
          },
        ],
      },
      {
        id: Math.round(Math.random() * 100),
        tarifSrc: "assets/assetsPriceList/standart.svg",
        tarifText: "standart",
        price: 5.99,
        isHave: [
          {
            id: Math.round(Math.random() * 100),
            text: "Lorem Ipsum dollar site",
            isExist: true,
          },
          {
            id: Math.round(Math.random() * 100),
            text: "Lorem Ipsum dollar site",
            isExist: true,
          },
          {
            id: Math.round(Math.random() * 100),
            text: "Lorem Ipsum dollar site",
            isExist: true,
          },
          {
            id: Math.round(Math.random() * 100),
            text: "Lorem Ipsum dollar site",
            isExist: false,
          },
          {
            id: Math.round(Math.random() * 100),
            text: "Lorem Ipsum dollar site",
            isExist: false,
          },
        ],
      },
      {
        id: Math.round(Math.random() * 100),
        tarifSrc: "assets/assetsPriceList/premium.svg",
        tarifText: "premium",
        price: 8.99,
        isHave: [
          {
            id: Math.round(Math.random() * 100),
            text: "Lorem Ipsum dollar site",
            isExist: true,
          },
          {
            id: Math.round(Math.random() * 100),
            text: "Lorem Ipsum dollar site",
            isExist: true,
          },
          {
            id: Math.round(Math.random() * 100),
            text: "Lorem Ipsum dollar site",
            isExist: true,
          },
          {
            id: Math.round(Math.random() * 100),
            text: "Lorem Ipsum dollar site",
            isExist: true,
          },
          {
            id: Math.round(Math.random() * 100),
            text: "Lorem Ipsum dollar site",
            isExist: true,
          },
        ],
      },
    ]
  )
}