import { getDictionary } from "@/lib/dictionary";
import MyAbout from "../components/myAbout";
import { Locale } from "@/i18n.config";
import about_img from '../../../public/images/about-image.png'
import Image from "next/image";

const AboutSection = async ({ params: { lang } }: {
  params: { lang: Locale }
}) => {

  const { about } = await getDictionary(lang)
  const {blockTab}:any = about;

  interface ITAB_DATA {
    title: string;
    id: string;
    content: JSX.Element;
  }[]

  const TAB_DATA: ITAB_DATA[] = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Next</li>
          <li>PostgreSQL</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>{blockTab.title2Desc.text1}</li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <li>{blockTab.title3Desc.text1}</li>
          <li>{blockTab.title3Desc.text2}</li>
        </ul>
      ),
    },
  ];
//https://fotohosting.su/images/2024/01/19/about-image.png
  return (
    <section className="text-white bg-[#121212] h-screen flex items-center" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center px-5 w-[1300px] mx-auto py-8 xl:gap-16 sm:py-16">
        <Image src={about_img} className="mt-[100px] md:mt-0" width={500} height={500} alt="about_img" />
        <MyAbout TAB_DATA={TAB_DATA} lang = {about} />
      </div>
    </section>
  );
};

export default AboutSection;
