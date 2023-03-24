"use strict";
// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ _proto: [] } instanceof Array &&
          function (d, b) {
            d.__proto_ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
exports.__esModule = true;
exports.TransferFromCall_Outputs =
  exports.TransferFromCallInputs =
  exports.TransferFromCall =
  exports.TransferCallOutputs =
  exports.TransferCall_Inputs =
  exports.TransferCall =
    void 0;
var graph_ts_1 = require("@graphprotocol/graph-ts");
var TransferCall = /** @class */ (function (_super) {
  __extends(TransferCall, _super);
  function TransferCall() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Object.defineProperty(TransferCall.prototype, "inputs", {
    get: function () {
      return new TransferCall__Inputs(this);
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(TransferCall.prototype, "outputs", {
    get: function () {
      return new TransferCall__Outputs(this);
    },
    enumerable: false,
    configurable: true,
  });
  return TransferCall;
})(graph_ts_1.ethereum.Call);
exports.TransferCall = TransferCall;
var TransferCall__Inputs = /** @class */ (function () {
  function TransferCall__Inputs(call) {
    this._call = call;
  }
  Object.defineProperty(TransferCall__Inputs.prototype, "dst", {
    get: function () {
      return this._call.inputValues[0].value.toAddress();
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(TransferCall__Inputs.prototype, "rawAmount", {
    get: function () {
      return this._call.inputValues[1].value.toBigInt();
    },
    enumerable: false,
    configurable: true,
  });
  return TransferCall__Inputs;
})();
exports.TransferCall_Inputs = TransferCall_Inputs;
var TransferCall__Outputs = /** @class */ (function () {
  function TransferCall__Outputs(call) {
    this._call = call;
  }
  Object.defineProperty(TransferCall__Outputs.prototype, "value0", {
    get: function () {
      return this._call.outputValues[0].value.toBoolean();
    },
    enumerable: false,
    configurable: true,
  });
  return TransferCall__Outputs;
})();
exports.TransferCall_Outputs = TransferCall_Outputs;
var TransferFromCall = /** @class */ (function (_super) {
  __extends(TransferFromCall, _super);
  function TransferFromCall() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Object.defineProperty(TransferFromCall.prototype, "inputs", {
    get: function () {
      return new TransferFromCall__Inputs(this);
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(TransferFromCall.prototype, "outputs", {
    get: function () {
      return new TransferFromCall__Outputs(this);
    },
    enumerable: false,
    configurable: true,
  });
  return TransferFromCall;
})(graph_ts_1.ethereum.Call);
exports.TransferFromCall = TransferFromCall;
var TransferFromCall__Inputs = /** @class */ (function () {
  function TransferFromCall__Inputs(call) {
    this._call = call;
  }
  Object.defineProperty(TransferFromCall__Inputs.prototype, "src", {
    get: function () {
      return this._call.inputValues[0].value.toAddress();
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(TransferFromCall__Inputs.prototype, "dst", {
    get: function () {
      return this._call.inputValues[1].value.toAddress();
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(TransferFromCall__Inputs.prototype, "rawAmount", {
    get: function () {
      return this._call.inputValues[2].value.toBigInt();
    },
    enumerable: false,
    configurable: true,
  });
  return TransferFromCall__Inputs;
})();
exports.TransferFromCall_Inputs = TransferFromCall_Inputs;
var TransferFromCall__Outputs = /** @class */ (function () {
  function TransferFromCall__Outputs(call) {
    this._call = call;
  }
  Object.defineProperty(TransferFromCall__Outputs.prototype, "value0", {
    get: function () {
      return this._call.outputValues[0].value.toBoolean();
    },
    enumerable: false,
    configurable: true,
  });
  return TransferFromCall__Outputs;
})();
exports.TransferFromCall_Outputs = TransferFromCall_Outputs;