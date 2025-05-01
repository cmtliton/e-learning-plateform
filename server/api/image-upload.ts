import { defineEventHandler, readMultipartFormData } from "h3";
import fs from "fs";
import path from "path";

export default defineEventHandler(async (event) => {
  const formData = await readMultipartFormData(event);
  const file: any = formData?.find((f) => f.name === "image");

  if (!file) {
    return { error: "No file uploaded" };
  }

  const uploadDir = path.join(process.cwd(), "public/uploads");
  if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

  const filePath = path.join(uploadDir, file.filename);
  fs.writeFileSync(filePath, file.data);

  return {
    message: "Image uploaded successfully",
    url: `/uploads/${file.filename}`,
  };
});
