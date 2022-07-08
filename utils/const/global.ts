import colors from "@/theme/colors";
import { GetCards } from "../types/GetCards";

//for testing if problem with the API
export const DATA_BACKUP: GetCards[] = [
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
