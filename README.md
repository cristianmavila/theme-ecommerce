## Personal project (Ecommerce Starter Theme made in NextJS)
- Shadcn core components
- TailwindCSS
- Radix core components
- Framer motion animtions


## How could you run this project?

- Node version at least v18.18.0

```
npm i
```

- Run the theme in develop mode

```
npm run dev
```

- Build a production version

```
npm run build
```

- Run the Storybook in develop mode

```
npm run storybook
```


## Figma tokens transform
- Replace tokens folder files inside figma folder with project specific files (exported from figma-tokens)
- Run the transform script with ```node transform.js```
- Copy css varibales generated and paste these css variables in global.css file inside base layer with theme class. 
- Reference all these variables inside tailwind.config file, to use them as classnames. 
