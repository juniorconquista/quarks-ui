'use strict';
var __createBinding =
    (this && this.__createBinding) ||
    (Object.create
        ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              Object.defineProperty(o, k2, {
                  enumerable: true,
                  get: function () {
                      return m[k];
                  },
              });
          }
        : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              o[k2] = m[k];
          });
var __exportStar =
    (this && this.__exportStar) ||
    function (m, exports) {
        for (var p in m)
            if (
                p !== 'default' &&
                !Object.prototype.hasOwnProperty.call(exports, p)
            )
                __createBinding(exports, m, p);
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.default = void 0;
var Small_1 = require('./Small');
Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
        return Small_1.default;
    },
});
__exportStar(require('./small.types'), exports);
//# sourceMappingURL=index.js.map
