import { createPage } from '../utils/page';
import {
  create,
  createObject,
  createArray,
  createReference,
} from '../utils/typedSchema';

export default createPage('Promotion', [
  create({ type: 'LocaleString', name: 'Value', description: 'Highlighted value of promotion' }),
  createObject({
    type: 'Card',
    name: 'Promotion',
  }),
]);