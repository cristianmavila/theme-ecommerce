## Figma tokens transform
- Replace tokens folder files inside figma folder with project specific files (exported from figma-tokens)
- Run the transform script with ```node transform.js```
- Copy css varibales generated and paste these css variables in global.css file inside base layer with theme class. 
- Reference all these variables inside tailwind.config file, to use them as classnames. 
