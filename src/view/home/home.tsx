/*
 * @Date: 2022-11-29 23:20:47
 * @LastEditors: aei(imaei@foxmail.com)
 * @LastEditTime: 2022-11-30 15:45:23
 * @FilePath: \resound\src\view\home\home.tsx
 * @description:
 */
import { BaseDirectory, createDir, writeFile } from "@tauri-apps/api/fs";
import { useEffect } from "react";
// Read the image file in the `$RESOURCEDIR/avatar.png` path
// const contents = await readBinaryFile('avatar.png', { dir: BaseDirectory.Resource });
export default function Home() {
  useEffect(() => {
    write("app.txt", "xxxxx");
  }, []);
  async function write(path: string, str: string) {
    await writeFile('appData/data.json', 'xxx', {
      dir: BaseDirectory.AppData
    })
  }
  return <div>hello react</div>;
}
