/**
 * @author Gilmar Carlos
 *        
 * Classe que retorna um hash genérico para uma string
 */

/**@class Hash*/
function Hash(){

            this._hash = "";

            /**@method newHash
             * @description gera um novo hash
             * @param {String} txt
             * @returns {String} hash
             */
            this.newHash = function(txt) {

                let count = 0;
                let c = [];
                for (var i = 0; i < 24; i++) {
                    txt = txt + txt.substr(0, 24 - txt.length);
                    c[i] = txt.charCodeAt(i);
                    c[i] = c[i] ^ 3;
                    if (count % 6 == 0 && i > 0) {
                        this._hash = this._hash + '-';
                    }
                    this._hash = this._hash + String.fromCodePoint(c[i]);
                    count++;
                }
                return this._hash;
            }

        }