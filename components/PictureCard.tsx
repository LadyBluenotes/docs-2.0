import { Card } from "@nextui-org/react";

export default function CardOSS({
  src,
  alt,
  height,
  width,
}: {
  src: string;
  alt: string;
  height?: string;
  width?: string;
}) {
  return (
    <Card css={{ m: "10px auto", h: height, w: width }}>
      <Card.Body css={{ p: 0 }}>
        <Card.Image src={src} alt={alt} objectFit="cover" css={{
        }} />
      </Card.Body>
    </Card>
  );
}
