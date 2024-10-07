# Portfolio

The portfolio is based on the template from [Shaquille Ndunda](https://github.com/shaqdeff/Portfolio-Template)

[Demo](https://github.com/shaqdeff/Portfolio-Template/assets/92020713/eed76a82-e59d-440b-a04c-a2dc00a508b7)


## License and Attribution

The code in this repository is released under the [MIT](https://github.com/AlcHawk/port-folio/blob/main/MIT.md) License, which grants you the freedom to use, modify, and distribute the template as your own. However, if you choose to use the site's design largely unmodified, kindly credit me as the original designer of the site.

All projects and experiences included in this portfolio are the result of my own efforts and creativity. Please refrain from presenting them as your own.

## Built With

- React.js
- Three.js
- Framer Motion
- TailwindCSS

## Getting Started

To get started with this portfolio, follow these simple steps:

### Prerequisites

Make sure you have node `16.0.0` or higher and npm `9.0.0` or higher installed.

### Setup

- With git, clone the code to your machine, or download a ZIP of all the files directly.
- Download the ZIP file or run the following [git](https://git-scm.com/) command to clone the files to your machine:

```
git clone https://github.com/AlcHawk/port-folio.git
```

- Once the files are on your machine, open the **port-folio** folder in [Visual Studio Code](https://code.visualstudio.com/download).

```
cd Portfolio-Template && code .
```

## Install

- After opening the files in Visual Studio Code, open the **VS Code** integrated terminal and run the following commands:

```
npm install
```

This will install all the packages and dependencies used in the project. The project is using [Vite](https://vite.dev/) to run the local server.

## Usage

- Run the following command to start a local server:

```
npm run dev
```

This triggers the script dev defined in the package.json to run vite command. And then open up the project on a browser on `http://localhost:5173/`

## Build

- To create a production build:

```
npm run build
```

- To preview the site as it will appear once deployed:

```
npm run preview
```

## Publish to Github Pages via Github Actions (Additional)
- If you want to use github pages to host your personal portfolio. Please follow the following steps.
    1.  create a file `deploy.yml` under `.github/workflows`. You can copy the deploy.yml from this repo directly without changing anything.
        - Be sure to include package-lock.json file
    2. Push to github
    3. Go to Setting tab > Actions > General. Roll down to `Workflow permissions` section. Check `Read and write permissions` and save.
    4. Swtich to Actions tab. You will see your commit will run under workflow.
    5. Once it builds successfully. Go to Setting tab again > Pages. Select `gh-pages` under `Branch` of `Build and Deployment` section.
    6. Then go back to Action tab. You will see a work flow called `pages build and deployment` running.
    7. Once it is done. You can see your webpage under `Deployments` in the repo main page.


## Show your support

Give a ⭐️ if you like this project!
