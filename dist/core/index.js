var Maybe =
/** @class */
function () {
  // constructor에서 private으로 파라미터를 받으면 자동으로 멤버변수로 할당
  // eslint-disable-next-line
  function Maybe(value) {
    this.value = value;
  }

  Maybe.some = function (value) {
    if (!value) {
      throw Error('Provided value must not be empty');
    }

    return new Maybe(value);
  };

  Maybe.none = function () {
    return new Maybe(null);
  };

  Maybe.of = function (value) {
    return value ? Maybe.some(value) : Maybe.none();
  };

  Maybe.prototype.isNothing = function () {
    return this.value === null || this.value === undefined;
  };

  Maybe.prototype.get = function () {
    return this.value;
  };

  Maybe.prototype.getOrElse = function (defaultValue) {
    return this.isNothing() ? defaultValue : this.value;
  };

  Maybe.prototype.map = function (mapperFn) {
    return this.isNothing() ? Maybe.none() : Maybe.of(mapperFn(this.value));
  };

  Maybe.prototype.flatMap = function (mapperFn) {
    return this.isNothing() ? Maybe.none() : mapperFn(this.value);
  };

  return Maybe;
}();

export { Maybe };
