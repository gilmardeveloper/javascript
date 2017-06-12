/**@author Gilmar Carlos */


/**@class Controller
 * @description Classe genérica para controle de elementos
 * @requires list.js 
 */
function Controller() {

            /** @field _list Lista de lementos */
            this._list = new Lista();

            /**@method insert()
             * @description insere dados na lista
             * @param {Object} element
             */
            this.insert = function (element) {
                this._list.add(element);
            };

            /**@method update()
             * @description atualiza dados na lista
             * @param {Object} oldElement elemento a ser removido
             * @param {Object} newElement elemento a ser inserido 
             */
            this.update = function (oldElement, newElement) {
                this.delete(oldElement);
                this.insert(newElement);
            }

            /**@method delete()
             * @description remove dados na lista
             * @param {Object} element
             */
            this.delete = function (element) {
                this._list.remove(this._list.getIndexOf(element));
            }

            /**@method getElement()
             * @description recupera um elemento da lista
             * @param {Number} index
             * @return {Object} elemento da lista
             */
            this.getElement = function (index) {
                return this._list.get(index);
            }

            /**@method getAll()
             * @description recupera todos os elementos da lista
             * @return {[Object]} lista de elementos
             */
            this.getAll = function () {
                return this._list.getList();
            }

        }