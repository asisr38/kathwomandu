import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Kathwomandu";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: "#f6efe2",
          color: "#1f1612",
          border: "1px solid #d8caac",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "Georgia, serif",
            fontSize: 142,
            lineHeight: 0.95,
            letterSpacing: "-5px",
            marginBottom: 34,
          }}
        >
          <span style={{ fontWeight: 300 }}>Kath</span>
          <span
            style={{
              color: "#b51c2c",
              fontStyle: "italic",
              fontWeight: 500,
            }}
          >
            woman
          </span>
          <span style={{ fontWeight: 300 }}>du</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontFamily: "Georgia, serif",
            fontSize: 34,
            fontStyle: "italic",
            fontWeight: 300,
            color: "#4b3a31",
          }}
        >
          <span>by woman</span>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: 999,
              background: "#b51c2c",
            }}
          />
          <span>for woman</span>
        </div>
      </div>
    ),
    size,
  );
}
