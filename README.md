# Portfolio

The portfolio is based on the template from [Shaquille Ndunda](https://github.com/shaqdeff/Portfolio-Template)

## License and Attribution

The code in this repository is released under the [MIT](https://raw.githubusercontent.com/AlcHawk/port-folio/refs/heads/main/MIT.md) License, which grants you the freedom to use, modify, and distribute the template as your own. However, if you choose to use the site's design largely unmodified, kindly credit me as the original designer of the site.

All projects and experiences included in this portfolio are the result of my own efforts and creativity. Please refrain from presenting them as your own.

## Built With

- React.js
- Three.js
- Framer Motion
- TailwindCSS

## Getting Started

All procedures are the same except the below publish action.

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
