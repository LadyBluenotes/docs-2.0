import { Collapse, Text } from "@nextui-org/react";

export default function Accordion() {
  const items = [
    {
      title: "Central knowledge base",
      content:
        "Building a dedicated site to house all my projects and contributions allows me to establish a centralized repository for all my projects, contributions, and learning experiences. It serves as a comprehensive knowledge base where I can compile and organize valuable information and insights that I have gained over time.",
    },
    {
      title: "Personal branding",
      content:
        "Creating this site offers me the prime opportunity to establish and cultivate my personal brand. By crafting my unique online presence that reflects my identity and style, it helps me stand out from the crowd and leave a lasting impressions on potential employers, clients, and collaborators who visit my site.",
    },
    {
      title: "Sharpen my skills",
      content:
        "Embarking on the journey of building a documentation site enables me to refine and expand my technical skills. Through this process, I enhance my web development abilities and stay up-to-date with industry best practices, in addition to fostering continuous growth as a developer and technical writer.",
    },
    {
      title: "Easy reference and organization",
      content:
        "In having this site, I benefit from a seamless and organized approach to storing and accessing information. I can effortlessly refer back to my documentation whenever I encounter similar challenges, need a refresher on specific topics, or want to reflect on my journey.",
    },
    {
      title: "Sharing knowledge",
      content:
        "A primary motivation for creating my documentation site is the desire to contribute to the broader developer community by sharing my knowledge and experiences. By documenting my projects, open-source contributions, and insights gained throughout my journey, I can provide valuable resources and guidance to fellow developers and learners. This act of sharing not only benefits others but also allows me to leave a positive impact on the community that has supported and inspired me.",
    },
  ];

  return (
    <Collapse.Group
      shadow
      bordered
      css={{
        margin: "20px auto",
      }}
    >
      {items.map((item, index) => (
        <Collapse
          key={index}
          title={item.title}
          css={{
            fontWeight: "bold",
          }}
        >
          <Text
            p
            css={{
              fontWeight: "normal",
              padding: "5px 15px",
            }}
          >
            {item.content}
          </Text>
        </Collapse>
      ))}
    </Collapse.Group>
  );
}
