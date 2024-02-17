// import jsPDF from "jspdf";
import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

const adjectives = [
  "Happy",
  "Creative",
  "Energetic",
  "Lively",
  "Dynamic",
  "Radiant",
  "Joyful",
  "Vibrant",
  "Cheerful",
  "Sunny",
  "Sparkling",
  "Bright",
  "Shining",
];

const animals = [
  "Dolphin",
  "Tiger",
  "Elephant",
  "Penguin",
  "Kangaroo",
  "Panther",
  "Lion",
  "Cheetah",
  "Giraffe",
  "Hippopotamus",
  "Monkey",
  "Panda",
  "Crocodile",
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRandomName(): string {
  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomAnimal = animals[Math.floor(Math.random() * animals.length)];

  return `${randomAdjective} ${randomAnimal}`;
}

export const getShapeInfo = (shapeType: string) => {
  switch (shapeType) {
    case "rect":
      return {
        icon: "/asset/rectangle.svg",
        name: "Rectangle",
      };

    case "circle":
      return {
        icon: "/asset/circle.svg",
        name: "Circle",
      };

    case "triangle":
      return {
        icon: "/asset/triangle.svg",
        name: "Triangle",
      };

    case "line":
      return {
        icon: "/asset/line.svg",
        name: "Line",
      };

    case "i-text":
      return {
        icon: "/asset/text.svg",
        name: "Text",
      };

    case "image":
      return {
        icon: "/asset/image.svg",
        name: "Image",
      };

    case "freeform":
      return {
        icon: "/asset/freeform.svg",
        name: "Free Drawing",
      };

    default:
      return {
        icon: "/asset/rectangle.svg",
        name: shapeType,
      };
  }
};

export const exportToPdf = () => {
  const canvas = document.querySelector("canvas");

  if (!canvas) return;

  // use jspdf
  // const doc = new jsPDF({
  //   orientation: "landscape",
  //   unit: "px",
  //   format: [canvas.width, canvas.height],
  // });

  // get the canvas data url
  const data = canvas.toDataURL();

  // add the image to the pdf
  doc.addImage(data, "PNG", 0, 0, canvas.width, canvas.height);

  // download the pdf
  doc.save("canvas.pdf");
};
