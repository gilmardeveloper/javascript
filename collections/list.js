/**
 * @author Gilmar Carlos
 *  
 * @example 
 *   var elementos = new Lista();
 *   elementos.add(new Elemento());
 *   elemento.remove(elemento.getIndexOf(elemento));      
 * 
 */

/**@class Lista
 * @description classe que representa uma lista de dados genérica */
function Lista() {
    /**array de elementos*/
    this._valores = [];
    
    /*** 
     * @method add
     * @description adiciona um elemento a lista
     * @param   {Object} item
     * @returns {Number} index do elemento
     * */
    this.add = function(item) {
        let index = this._valores.push(item) - 1;
        return index;
    }

    /*** 
         * @method remove
         * @description remove um elemento da lista
         * @param   {Number} index 
         * @returns {Object} o elemento removido
         * */
    this.remove = function(index){
        return this._valores.splice(index, 1);
    }

    /*** 
         * @method get
         * @description recupera um elemento da lista
         * @param   {Number} index 
         * @returns {Object} o elemento da lista
         * */
    this.get = function(index) {
        return this._valores[index];
    }

    /*** 
         * @method getList
         * @description retorna uma lista de elementos
         * @returns {[Object]} array de elementos da lista
         * */
    this.getList = function() {
        return this._valores;
    }

    /*** 
         * @method getIndexOf
         * @description Retorna o índice de um elemento especifico da lista
         * @param   {Object} item 
         * @returns {Number} index de um elemento da lista
         * @requires Object.equals o método equals deve ser implementado no elemento 
         * */
    this.getIndexOf = function(item) {
        let index = -1;
        this._valores.find((element, pos) => {
            if (element.equals(item)) {
                index = pos;
            }
        }, item);

        return index;
    }
    /*** 
         * @method getCount 
         * @description retorna o tamanho da lista
         * @returns {Number} tamanho da lista
         * */
    this.getCount = function() {
        return this._valores.length;
    }

}