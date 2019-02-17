const customers = [
  {
    id: 1,
    name: "Jamie O'Connell",
    phone: "0478755349",
    email: "jamielukeoconnell@gmail.com",
    created: "2019-02-11T11:30:30"
  },
  {
    id: 2,
    name: "Carolyn Fuller",
    phone: "0478755349",
    email: "carolynfuller73@gmail.com",
    created: "2018-02-09T11:30:30"
  },
  {
    id: 3,
    name: "Ricky O'Connell",
    phone: "0478755349",
    email: "rickyjoconnell@gmail.com",
    created: "2019-02-01T11:30:30"
  },
  {
    id: 4,
    name: "Maria O'Connell",
    phone: "0478755349",
    email: "mariamayoconnell@gmail.com",
    created: "2019-02-10T11:30:30"
  }
];

const devices = [
  {
    name: "Iphone 4",
    category: "Iphone",
    repairs: [
      {
        name: "Screen Replacement",
        "price-primary": 120
      },
      {
        name: "Battery Replacement",
        "price-primary": 49,
        "price-secondary": 29
      },
      {
        name: "Charge Port Replacement",
        "price-primary": 59,
        "price-secondary": 39
      },
      {
        name: "Home Button Replacement",
        "price-primary": 59,
        "price-secondary": 39
      },
      {
        name: "Water Treatement",
        "price-primary": 89
      },
      {
        name: "Ear Speaker Replacement",
        "price-primary": 49,
        "price-secondary": 29
      },
      {
        name: "Front Camera Replacement",
        "price-primary": 49,
        "price-secondary": 29
      },
      {
        name: "Back Camera Replacement",
        "price-primary": 49,
        "price-secondary": 29
      },
      {
        name: "Back Glass Replacement",
        "price-primary": 49,
        "price-secondary": 29
      },
      {
        name: "Back Housing Replacement",
        "price-primary": 149
      }
    ]
  },
  {
    name: "Iphone 5",
    category: "Iphone",
    repairs: [
      {
        name: "Screen Replacement",
        "price-primary": 150
      },
      {
        name: "Battery Replacement",
        "price-primary": 49,
        "price-secondary": 29
      },
      {
        name: "Charge Port Replacement",
        "price-primary": 59,
        "price-secondary": 39
      }
    ]
  }
];

const jobs = [
  {
    id: 1,
    description: "",
    customer: "Jamie O'Connell",
    issue: "Not charging",
    device: "Pixel 3 XL",
    status: "On Bench",
    created: "2018-09-09 16:56:08",
    customerId: 1,
    dueDate: "2019-09-09 16:56:08",
    lastUpdate: "2019-02-10 16:56:08"
  },
  {
    id: 2,
    description: "",
    customer: "Carolyn Fuller",
    issue: "No power to device",
    device: "Asus P100",
    status: "Booked In",
    created: "2018-09-09 16:56:08",
    customerId: 2,
    dueDate: "2019-09-09 16:56:08",
    lastUpdate: "2019-02-10 16:56:08"
  },
  {
    id: 3,
    description: "",
    customer: "Carolyn Fuller",
    issue: "Screen replacement",
    device: "Iphone 6s",
    status: "Awaiting Parts",
    created: "2018-09-09 16:56:08",
    customerId: 1,
    dueDate: "2019-09-09 16:56:08",
    lastUpdate: "2019-02-10 16:56:08"
  }
];

const settings = {
  repairStatusColours: {
    "Booked In": "pink",
    "On Bench": "orange",
    "Awaiting Parts": "blue",
    "Awaiting Device": "teal",
    "To Be Ordered": "purple",
    "Ready To Go": "red"
  }
};

export { devices, customers, jobs, settings };
