import { Button } from "@nextui-org/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Buttons({
  repo,
  href,
}: {
  repo?: string;
  href?: string;
}) {
  if (!href) {
    return (
      <Button
        icon={<FaGithub />}
        onClick={() => {
          window.open(href, "_blank");
        }}
        css={{
          backgroundColor: "#000",
          border: "1px solid white",
        }}
      >
        GitHub
      </Button>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        icon={<FaGithub />}
        onClick={() => {
          window.open(repo, "_blank");
        }}
        css={{
          backgroundColor: "#000",
          border: "1px solid white",
          margin: "10px",
        }}
      >
        GitHub
      </Button>
      <Button
        icon={<FaExternalLinkAlt />}
        color="primary"
        onClick={() => {
          window.open(href, "_blank");
        }}
        css={{
          border: "1px solid white",
          margin: "10px",
        }}
      >
        Website
      </Button>
    </div>
  );
}
