import { Spinner, Stack } from "react-bootstrap";

export const LoadingScreen = () => {
  return (
    <Stack
      direction="horizontal"
      style={{
        justifyContent: "center",
        alignItems: "center",
        margin: "0 1rem 0.5rem 0",
      }}
    >
      <Spinner animation="border" variant="primary" />
    </Stack>
  );
};
