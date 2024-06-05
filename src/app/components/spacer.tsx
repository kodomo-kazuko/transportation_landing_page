interface SpacerProps {
  height: string;
  width: string;
}

export default function Spacer({ height, width }: SpacerProps) {
  return <div style={{ height, width }} />;
}
