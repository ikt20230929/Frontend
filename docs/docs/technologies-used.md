# Használt technológiák a Projektben

Ebben a dokumentumban összefoglaljuk, hogy milyen technológiákat és könyvtárakat használtunk a "frontend" projektünkben, valamint bemutatjuk, hogy ezeket pontosan mire használtuk.

## Build és Bundle

- **esbuild (v0.19.4)**: Az esbuild egy gyors és hatékony JavaScript és CSS fájlok bundlerezője. Ezt a technológiát használtuk a projekt JavaScript fájljainak összeállításához, minifikálásához és bundlerezéséhez.

## CSS Stílusok, Ikonok

- **Tailwind CSS (v3.3.3)**: Tailwind CSS egy stíluskeretrendszer, amely segíti a gyors és rugalmas webes tervezést. Ezt a keretrendszert használtuk a projekt stílusainak kialakításához és azok minifikálásához.
- **daisyui (v3.8.2)**: A DaisyUI egy Tailwind CSS plugin, amely számos előre elkészített UI komponenst tartalmaz. Ezt az eszközt használtuk a projekt UI elemek fejlesztéséhez és testreszabásához.
- **lucide-react (v0.284.0)**: A Lucide egy ikonkészlet, amely egyszerű és tiszta ikonokat tartalmaz. A React alkalmazáshoz ezt az ikonkészletet használtuk az esztétikus felhasználói felület kialakításához.
- **tailwind-variants (v0.1.14)**: A Tailwind Variants egy CSS variánskezelő API könyvtár a TailwindCSS-hez.

## UI Komponensek

- **React (v18.2.0)**: A React egy népszerű JavaScript könyvtár a felhasználói felületek készítéséhez. Ezt a könyvtárat használtuk a dinamikus felhasználói felületi komponensek fejlesztéséhez.
- **react-dom (v18.2.0)**: A react-dom egy React alkalmazásokat a DOM-hoz kötő könyvtár. Ezt használtuk a React komponensek rendeléséhez a DOM elemekhez.
- **react-hook-form (v7.47.0)**: A react-hook-form egy könnyű és kifinomult React űrlapkezelő könyvtár. Ezt a könyvtárat használtuk az űrlapok kezeléséhez és validálásához.

## Fejlesztői Segédprogramok

- **concurrently (v8.2.1)**: A concurrently egy parancssoros eszköz, amely lehetővé teszi, hogy több npm scriptet futtassunk egyszerre. Ezt használtuk a különböző build és watch parancsok egyidejű futtatásához a fejlesztési környezetben.
- **dotenv (v16.3.1)**: A dotenv segít a környezeti változók kezelésében a GitHub Actions környezetben, biztosítva, hogy a Docusaurus dokumentáció `baseUrl` beállítása helyesen történjen.