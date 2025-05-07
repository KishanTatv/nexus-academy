import { Blog } from "@/types/blog";
import blo1_Img from "../../../public/images/blog/blog-01.jpg"
import blo2_Img from "../../../public/images/blog/blog-02.jpg"
import blo3_Img from "../../../public/images/blog/blog-03.jpg"
import Auth_1 from "../../../public/images/blog/author-01.png"
import Auth_2 from "../../../public/images/blog/author-02.png"
import Auth_3 from "../../../public/images/blog/author-03.png"

const blogData: Blog[] = [
  {
    id: 1,
    title: "Jacquard Design",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: blo1_Img.src,
    author: {
      name: "Samuyl Joshi",
      image: Auth_1.src,
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Digital Print",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: blo2_Img.src,
    author: {
      name: "Musharof Chy",
      image: Auth_2.src,
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Embroidery Design",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: blo3_Img.src,
    author: {
      name: "Lethium Deo",
      image: Auth_3.src,
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
  {
    id: 4,
    title: "Jewellery Design",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: blo3_Img.src,
    author: {
      name: "Lethium Deo",
      image: Auth_3.src,
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
  {
    id: 5,
    title: "Graphic Design",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: blo3_Img.src,
    author: {
      name: "Lethium Deo",
      image: Auth_3.src,
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
  {
    id: 6,
    title: "HotFix Design",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: blo3_Img.src,
    author: {
      name: "Lethium Deo",
      image: Auth_3.src,
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
