import {
  BgBookmarkIcon,
  BgLampIcon,
  BgTickIcon,
  BookmarkIcon,
  CompletedIcon,
  CourseCardBg,
  GreenPentulIcon,
  LampIcon,
  PdfIcon,
  TickIcon,
  VideoIcon,
  ZipIcon,
} from "@/assets/icons";
import { avatarImg } from "@/assets/images";

export const planData = [
  {
    id: 0,
    title: "Web dasturlash",
    date: "Yanvar 5, 2021",
    time: "09.00 - 10.00",
    teacher: "Humoyun Madrahimov",
  },
  {
    id: 1,
    title: "Web va grafik dizayn",
    date: "Yanvar 5, 2021",
    time: "09.00 - 10.00",
    teacher: "Humoyun Madrahimov",
  },
  {
    id: 2,
    title: "Asosiy Dasturlash",
    date: "Yanvar 5, 2021",
    time: "09.00 - 10.00",
    teacher: "Humoyun Madrahimov",
  },
];

export const infoData = [
  {
    id: 1,
    bgImg: <BgTickIcon />,
    icon: <TickIcon />,
    number: "1.500",
    text: "Yakunlangan Kurslar",
    class: "info-card green",
  },
  {
    id: 2,
    bgImg: <BgLampIcon />,
    icon: <LampIcon />,
    number: "903",
    text: "Davom Etayotgan Kurslar",
    class: "info-card orange",
  },
  {
    id: 3,
    bgImg: <BgBookmarkIcon />,
    icon: <BookmarkIcon />,
    number: "1.112",
    text: "Tugallangan Kurslar",
    class: "info-card darkBlue",
  },
];

export const practiseData = [
  {
    id: 1,
    title: "Uyga vazifa",
    courseNameOne: "Web Dizayn",
    progressOne: 70,
    courseNameTwo: "Grafik Dizayn",
    progressTwo: 40,
  },
];

export const courseInfo = [
  {
    id: 0,
    title: "Web va grafik dizayn",
    bgSvg: <CourseCardBg />,
    date: "Yanvar 17, 2021",
    time: "09.00 - 10.00",
    teacher: "Humoyun Madraximov",
    teacherImg: avatarImg,
    progress: 10,
  },
  {
    id: 1,
    title: "Web va grafik dizayn",
    bgSvg: <CourseCardBg />,
    date: "Yanvar 17, 2021",
    time: "09.00 - 10.00",
    teacher: "Humoyun Madraximov",
    teacherImg: avatarImg,
    progress: 30,
  },
];

export const crudInfo = [
  {
    id: 0,
    title: "Web va grafik dizayn",
    bgSvg: <CourseCardBg />,
    date: "Yanvar 17, 2021",
    time: "09.00 - 10.00",
    teacher: "Humoyun Madraximov",
    teacherImg: avatarImg,
    progress: 100,
  },
  {
    id: 1,
    title: "Web va grafik dizayn",
    bgSvg: <CourseCardBg />,
    date: "Yanvar 17, 2021",
    time: "09.00 - 10.00",
    teacher: "Humoyun Madraximov",
    teacherImg: avatarImg,
    progress: 100,
  },
];

export const payInfo = [
  {
    id: 0,
    title: "Web va grafik dizayn",
    img: <GreenPentulIcon />,
    price: "400 000 so’m /oy",
  },
  {
    id: 1,
    title: "SMM",
    img: <GreenPentulIcon />,
    price: "400 000 so’m /oy",
  },
];

export const moduleData = [
  {
    id: 1,
    module: "1-Module",
    text: "Lorem Ipsum is simply dummy text",
    task: "10 savol",
    condition: "done",
  },
  {
    id: 2,
    module: "2-Module",
    text: "Lorem Ipsum is simply dummy text",
    task: "18 savol",
    condition: "progress",
  },
  {
    id: 3,
    module: "3-Module",
    text: "Lorem Ipsum is simply dummy text",
    task: "15 savol",
    condition: "lock",
  },
];

export const courseCompleted = [
  {
    id: 0,
    image: <CompletedIcon />,
    title: "100",
    text: "Courses Completed",
  },
  {
    id: 1,
    image: <CompletedIcon />,
    title: "34",
    text: "Courses In Progress",
  },
];

export const circleProgress = [
  {
    id: 0,
    text: "Class",
    title: "UI Design Beginner",
    courses: "Total Courses",
    progress: 80,
  },
  {
    id: 1,
    text: "Class",
    title: "UX Research",
    courses: "Total Courses",
    progress: 50,
    color: "#FEC64F",
  },
];

export const profilePart = [
  {
    id: 1,
    name: "Umidbek Jumaniyozov",
    direction: "Backend developer",
    icoins: "iCoins",
    icoinsNum: 2300,
    certificates: "sertifikatlar",
    certificatesNum: 50,
    bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
  },
];

export const filesInfo = [
  {
    id: 0,
    icon: <VideoIcon/>,
    title: "Kirish, Video",
    btn: "Yuklab olish"
  },
  {
    id: 1,
    icon: <PdfIcon/>,
    title: "Kirish, Prezdentatsiya",
    btn: "Yuklab olish"
  },
  {
    id: 2,
    icon: <ZipIcon/>,
    title: "Kirish qo’llanilgan materiallar",
    btn: "Yuklab olish"
  },
]