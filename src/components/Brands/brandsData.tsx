import { Brand } from "@/types/brand";
import brand1 from "../../../public/images/brands/formbold-light.svg"
import brand1Dark from "../../../public/images/brands/formbold.svg"
import brand2 from "../../../public/images/brands/uideck-light.svg"
import brand2Dark from "../../../public/images/brands/uideck.svg"
import brand3 from "../../../public/images/brands/tailgrids-light.svg"
import brand3Dark from "../../../public/images/brands/tailgrids.svg"
import brand4 from "../../../public/images/brands/lineicons-light.svg"
import brand4Dark from "../../../public/images/brands/lineicons.svg"
import brand5 from "../../../public/images/brands/tailadmin-light.svg"
import brand5Dark from "../../../public/images/brands/tailadmin.svg"
import brand6 from "../../../public/images/brands/plainadmin-light.svg"
import brand6Dark from "../../../public/images/brands/plainadmin.svg"

const brandsData: Brand[] = [
  {
    id: 6,
    name: "Formbold",
    href: "https://formbold.com",
    image: brand1Dark,
    imageLight: brand1,
  },
  {
    id: 1,
    name: "UIdeck",
    href: "https://uideck.com",
    image: brand2Dark,
    imageLight: brand2,
  },
  {
    id: 2,
    name: "Tailgrids",
    href: "https://tailgrids.com",
    image: brand3Dark,
    imageLight: brand3,
  },
  {
    id: 3,
    name: "Lineicons",
    href: "https://lineicons.com",
    image: brand4Dark,
    imageLight: brand4,
  },
  {
    id: 4,
    name: "Tailadmin",
    href: "https://tailadmin.com",
    image: brand5Dark,
    imageLight: brand5,
  },
  {
    id: 5,
    name: "PlainAdmin",
    href: "https://plainadmin.com",
    image: brand6Dark,
    imageLight: brand6,
  },
];

export default brandsData;
