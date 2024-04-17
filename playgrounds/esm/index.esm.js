
  /**
   * aquamark v0.0.0 
   * (c) 2024-preset Yewei (Yev) Wang
   * @license MIT
   **/
  
const defaultProps = () => ({});
function defineProps(props) {
  return props || defaultProps();
}

function render(configs) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  console.log(ctx);
  console.log(configs);
}

var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var _configs, _renderMark, renderMark_fn;
class Aquamark {
  constructor(configs) {
    __privateAdd(this, _renderMark);
    __privateAdd(this, _configs, void 0);
    __privateSet(this, _configs, defineProps(configs));
  }
  init() {
    __privateMethod(this, _renderMark, renderMark_fn).call(this, __privateGet(this, _configs));
  }
}
_configs = new WeakMap();
_renderMark = new WeakSet();
renderMark_fn = function(configs) {
  render(configs);
};

export { Aquamark as default };
