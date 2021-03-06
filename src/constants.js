import DashboardTwoToneIcon from "@material-ui/icons/DashboardTwoTone";
import AccountBoxTwoToneIcon from "@material-ui/icons/AccountBoxTwoTone";
import NotificationsNoneTwoToneIcon from "@material-ui/icons/NotificationsNoneTwoTone";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FunctionsTwoToneIcon from "@material-ui/icons/FunctionsTwoTone";

export const chartData = {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    legend: {
      display: true,
      position: "bottom",
    },
    responsive: true,
    scales: {
      xAxes: [
        {
          stacked: false,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      yAxes: [
        {
          stacked: false,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    aspectRatio: 1,
    plugins: {
      datalabels: {
        color: "#0162c3",
        formatter: (value) => (value === 0 ? null : "$" + value),
        font: {
          weight: "bold",
        },
        rotation: -45,
        align: "start",
        anchor: "end",
        backgroundColor: "white",
        borderRadius: 5,
      },
    },
  },
};

export const colors = {
  backgroundColors: [
    "#4dc9f6",
    "#f67019",
    "#f53794",
    "#537bc4",
    "#acc236",
    "#166a8f",
    "#00a950",
    "#58595b",
    "#8549ba",
    "#006400",
  ],
  borderColors: [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
    "rgba(255, 150, 132, 1)",
    "rgba(54, 162, 255, 1)",
    "rgba(255, 150, 86, 1)",
    "rgba(75, 192, 255, 1)",
  ],
};

export const notificationTypes = {
  SUCCESS: "success",
  INFO: "info",
  WARNING: "warning",
  ERROR: "error",
};

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octomber",
  "November",
  "December",
];

export const lists = [
  {
    id: 1,
    title: "Dashboard",
    route: "dashboard",
    icon: <DashboardTwoToneIcon />,
  },
  {
    id: 2,
    title: "Notifications",
    route: "notifications",
    icon: <NotificationsNoneTwoToneIcon />,
  },
  {
    id: 3,
    title: "Profile",
    route: "profile",
    icon: <AccountBoxTwoToneIcon />,
  },
  {
    id: 4,
    title: "Reports",
    route: "reports",
    icon: <AssessmentIcon />,
  },
  {
    id: 5,
    title: "Expense",
    route: "expense",
    icon: <AssessmentIcon />,
  },
  {
    id: 6,
    title: "EmiCalculator",
    route: "emicalculator",
    icon: <FunctionsTwoToneIcon />,
  },
  {
    id: 7,
    title: "Logout",
    route: null,
    icon: <ExitToAppIcon />,
  },
];
