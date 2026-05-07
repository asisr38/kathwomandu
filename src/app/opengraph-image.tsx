import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = "Kathwomandu";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const image = await readFile(path.join(process.cwd(), "public/himalayaBG.png"));
  const backgroundImage = `data:image/png;base64,${image.toString("base64")}`;

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
          position: "relative",
          overflow: "hidden",
          background: "#1f1612",
          color: "#1f1612",
        }}
      >
        <img
          src={backgroundImage}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(31, 22, 18, 0.78) 0%, rgba(31, 22, 18, 0.45) 52%, rgba(31, 22, 18, 0.28) 100%)",
          }}
        />
        <div
          style={{
            display: "flex",
            position: "relative",
            fontFamily: "Georgia, serif",
            fontSize: 142,
            lineHeight: 0.95,
            letterSpacing: "-5px",
            marginBottom: 34,
            color: "#fbf7ec",
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
            position: "relative",
            fontFamily: "Georgia, serif",
            fontSize: 34,
            fontStyle: "italic",
            fontWeight: 300,
            color: "#fbf7ec",
          }}
        >
          <span>Built to uplift</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            position: "relative",
            marginTop: 18,
            fontFamily: "Georgia, serif",
            fontSize: 28,
            fontStyle: "italic",
            fontWeight: 300,
            color: "rgba(251, 247, 236, 0.82)",
          }}
        >
          <span>for woman</span>
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: 999,
              background: "#b51c2c",
            }}
          />
          <span>by woman</span>
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: 999,
              background: "#b51c2c",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
