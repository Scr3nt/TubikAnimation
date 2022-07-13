import colors from "@/theme/colors";
import { GetCards } from "../types/GetCards";
import { GetPopularCourses } from "../types/GetPopularCourses";

//for testing if problem with the API
export const CARDS_DATA_BACKUP: GetCards[] = [
  {
    section: "SECTION 1",
    title: "Podcasts for professionals",
    subtitle: "open material",
    category: "Basic business course",
    author: "Julia_Gerasimchuk",
    roundCardColor: colors.darkblue,
    id: "1",
  },
  {
    section: "SECTION 2",
    title: "Conflict management",
    subtitle: "21 units",
    category: "Basic business course",
    author: "Julia_Gerasimchuk",
    roundCardColor: colors.green,
    id: "2",
  },
  {
    section: "SECTION 3",
    title: "Testing and estimation",
    subtitle: "14 units",
    category: "Basic business course",
    author: "Julia_Gerasimchuk",
    roundCardColor: colors.blue,
    id: "3",
  },
];

export const POPULAR_COURSES_DATA_BACKUP: GetPopularCourses[] = [
  {
    section: "POPULAR COURSES",
    title: "Choice of your friends",
    number: "43",
    number_description: "items",
    id: "1",
  },
  {
    section: "POPULAR COURSES",
    title: "Choice of the community",
    number: "77",
    number_description: "items",
    id: "2",
  },
];
