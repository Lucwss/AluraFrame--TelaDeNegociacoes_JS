class Negociacao {
  constructor(data, quantidade, valor) {
    this._data = new Date(data.getTime());
    this._quantidade = quantidade; 
    this._valor = valor;
    Object.freeze(this);
  }

  get volume () {
    var volume = this._valor * this._quantidade;
    return volume;
  }

  get data() {
    return new Date(this._data.getTime());
  }

  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }
}