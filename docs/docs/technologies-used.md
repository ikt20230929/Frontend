# Használt technológiák a Projektben

Ebben a dokumentumban összefoglaljuk, hogy milyen technológiákat és könyvtárakat használtunk a "frontend" projektünkben, valamint bemutatjuk, hogy ezeket pontosan mire használtuk.

## Build és Bundle

- **esbuild (v0.19.4)**: Az esbuild egy gyors és hatékony JavaScript és CSS fájlok bundlerezője. Ezt a technológiát használtuk a projekt JavaScript fájljainak összeállításához, minifikálásához és bundlerezéséhez. Az `App.jsx` fájl összeállítása során alkalmaztuk.

## CSS Stílusok, Ikonok

- **Tailwind CSS (v3.3.3)**: Tailwind CSS egy stíluskeretrendszer, amely segíti a gyors és rugalmas webes tervezést. Ezt a keretrendszert használtuk a projekt stílusainak kialakításához és azok minifikálásához. A stílusokat az `./src/css/style.css` fájlban deklaráltuk, majd ezt alakítottuk át minifikált CSS fájllá.

- **daisyui (v3.8.2)**: A DaisyUI egy Tailwind CSS plugin, amely számos előre elkészített UI komponenst tartalmaz. Ezt az eszközt használtuk a projekt UI elemek fejlesztéséhez és testreszabásához.

- **lucide-preact (v0.284.0)**: A Lucide egy ikonkészlet, amely egyszerű és tiszta ikonokat tartalmaz. A Preact-hez való integrációhoz ezt az ikonkészletet használtuk a projektben.

## UI Komponensek

- **Preact (v10.18.0)**: A Preact egy gyors, könnyű súlyú és kis méretű frontend keretrendszer, amely a React JavaScript könyvtár alternatívája. Ezt a keretrendszert használtuk a felhasználói felület komponenseinek kialakításához és kezeléséhez.

## Fejlesztői Segédprogramok

- **concurrently (v8.2.1)**: A concurrently egy parancssoros eszköz, amely lehetővé teszi, hogy több npm scriptet futtassunk egyszerre. Ezt használtuk a különböző build és watch parancsok egyidejű futtatásához a fejlesztési környezetben.

- **dotenv (v16.3.1)**: A dotenv egy Node.js csomag, amely segít a környezeti változók kezelésében és betöltésében a projekten belül. GitHub Actions környezetben használjuk annak biztosítására, hogy a Docusaurus dokumentáció `baseUrl` beállítása helyesen történjen.