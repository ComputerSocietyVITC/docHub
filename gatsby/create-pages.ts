import createDocPages from './create-doc-pages';
import createStaticPages from './create-static-pages';
import {schemaCustomize} from './schema-customization';

let createPages = async (options: any) => {
  await createStaticPages(options);
  await createDocPages(options);
};

export { createPages }