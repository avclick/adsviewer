/**
 * Search use case
 */
export default class Search {
  constructor({ categoryRepository }) {
    this.categoryRepository = categoryRepository;
  }
  /**
   * process use case
   * @param {*} request input params
   */
  async process(request) {
    const result = {};
    if (request.q) {
      // result.rows = await this.dictionaryRepository.search(request.q);
    }
    return result;
  }

  /*eslint no-unused-vars: ["error", { "args": "none" }]*/
  async getSchema(request) {
    const category = await this.categoryRepository.list();
    const categoryName = category.map((item) => {
      return item.name;
    });
    const schema = {
      title: 'Поиск объявлений',
      type: 'object',
      properties: {
        category: { title: 'Категория', type: 'string', enum: categoryName },
        q: { title: 'Поиск по объявлениям', type: 'string', minLength: 1 }
      },
      required: ['q']
    };
    return schema;
  }
}
