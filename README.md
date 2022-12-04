# StudyEx

> GDSC HANU x CSE
---
## Technology use
*These are the main language & library use across the project. Note that this project was built base on standard structure of nuxt 3 with command `npx nuxi init`.*

- Nuxt 3 (vue 3 & TS & Composition api)
- Typescript
- Element plus
- Tailwind

## Necessary tool
*It's highly recommend to use these tool for development. You can also use another tool in you prefer.*

- Browser (chrome, firefox, edge, etc) with suitable [devtool](https://devtools.vuejs.org/guide/installation.html)
- VSCode (Vue Language Feature(volar) + Tailwind CSS IntelliSense)
- Yarn package manager global installation 👉 `npm install --global yarn`

## Development

### 📄 New project
*Please follow this guild to have project ready for develop.*

*Oh, and you must have node latest version installed.*

1. Clone the development branch of this project
    ```
    git clone -b develop https://github.com/GDSC-HANU/StudyEx.git
    ```
2. In the root folder, make a `.env` file and paste these content
    ```
    NUXT_PUBLIC_SEVER_PROTOCOL=https://
    NUXT_PUBLIC_SEVER_DOMAIN=012.34.56.789
    NUXT_PUBLIC_SEVER_PORT=3000
    ```
3. Install all the necessary package
    ```
    yarn
    ```
4. And start the development sever!
    ```
    yarn dev
    ```
### 📑 Update Project
## Testing

## Deployment