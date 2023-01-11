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

1. Clone the `develop` branch of this project
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

### 📑 Update project
*Should be done frequently*
1. Pull the newest version of project from `develop` branch
    ```
    git pull origin develop
    ```
2. Pull the feature you (and other team members) are develop
    ```
    git pull origin your_feature
    ```

### 📑 Start a new feature

#### <span style="border-radius: 5px;padding: 5px;color: red;background: rgba(255, 0, 0, 0.2)">❗Do not modify develop branch, it will not be save</span>

1. Create new branch
    ```
    git checkout develop
    git branch your_feature
    git checkout your_feature
    ```
2. Star committing. Remember to update your local frequently if the branch you are working on have 2 or more members
3. Push to remote
    ```
    git push origin your_feature
    ```
    *Note that if you push the branch for the first time, you will need to push and create branch on remote at the same time*
    ```
    git push --set-upstream origin your_feature
    ```

### 📑 Create pull request
Once you have finished, create a pull request at the pull request tab in project and your feature will be merge to `develop` branch.

You need to update your local `develop` branch.

And it's safe to delete `your_feature` branch on both local and remote
## Testing

## Deployment