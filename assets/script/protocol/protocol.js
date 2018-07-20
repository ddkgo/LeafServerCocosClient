/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.msg = (function() {

    /**
     * Namespace msg.
     * @exports msg
     * @namespace
     */
    var msg = {};

    /**
     * Result enum.
     * @name msg.Result
     * @enum {string}
     * @property {number} REGISTER_SUCCESS=0 REGISTER_SUCCESS value
     * @property {number} REGISTER_FAIL=1 REGISTER_FAIL value
     * @property {number} LOGIN_SUCCESS=2 LOGIN_SUCCESS value
     * @property {number} LOGIN_FAIL=3 LOGIN_FAIL value
     */
    msg.Result = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "REGISTER_SUCCESS"] = 0;
        values[valuesById[1] = "REGISTER_FAIL"] = 1;
        values[valuesById[2] = "LOGIN_SUCCESS"] = 2;
        values[valuesById[3] = "LOGIN_FAIL"] = 3;
        return values;
    })();

    msg.Test = (function() {

        /**
         * Properties of a Test.
         * @memberof msg
         * @interface ITest
         * @property {string|null} [Test] Test Test
         */

        /**
         * Constructs a new Test.
         * @memberof msg
         * @classdesc Represents a Test.
         * @implements ITest
         * @constructor
         * @param {msg.ITest=} [properties] Properties to set
         */
        function Test(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Test Test.
         * @member {string} Test
         * @memberof msg.Test
         * @instance
         */
        Test.prototype.Test = "";

        /**
         * Creates a new Test instance using the specified properties.
         * @function create
         * @memberof msg.Test
         * @static
         * @param {msg.ITest=} [properties] Properties to set
         * @returns {msg.Test} Test instance
         */
        Test.create = function create(properties) {
            return new Test(properties);
        };

        /**
         * Encodes the specified Test message. Does not implicitly {@link msg.Test.verify|verify} messages.
         * @function encode
         * @memberof msg.Test
         * @static
         * @param {msg.ITest} message Test message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Test.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Test != null && message.hasOwnProperty("Test"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Test);
            return writer;
        };

        /**
         * Encodes the specified Test message, length delimited. Does not implicitly {@link msg.Test.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.Test
         * @static
         * @param {msg.ITest} message Test message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Test.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Test message from the specified reader or buffer.
         * @function decode
         * @memberof msg.Test
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.Test} Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Test.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.Test();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.Test = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Test message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.Test
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.Test} Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Test.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Test message.
         * @function verify
         * @memberof msg.Test
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Test.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Test != null && message.hasOwnProperty("Test"))
                if (!$util.isString(message.Test))
                    return "Test: string expected";
            return null;
        };

        /**
         * Creates a Test message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.Test
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.Test} Test
         */
        Test.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.Test)
                return object;
            var message = new $root.msg.Test();
            if (object.Test != null)
                message.Test = String(object.Test);
            return message;
        };

        /**
         * Creates a plain object from a Test message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.Test
         * @static
         * @param {msg.Test} message Test
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Test.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Test = "";
            if (message.Test != null && message.hasOwnProperty("Test"))
                object.Test = message.Test;
            return object;
        };

        /**
         * Converts this Test to JSON.
         * @function toJSON
         * @memberof msg.Test
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Test.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Test;
    })();

    msg.UserLogin = (function() {

        /**
         * Properties of a UserLogin.
         * @memberof msg
         * @interface IUserLogin
         * @property {string|null} [LoginName] UserLogin LoginName
         * @property {string|null} [LoginPW] UserLogin LoginPW
         */

        /**
         * Constructs a new UserLogin.
         * @memberof msg
         * @classdesc Represents a UserLogin.
         * @implements IUserLogin
         * @constructor
         * @param {msg.IUserLogin=} [properties] Properties to set
         */
        function UserLogin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserLogin LoginName.
         * @member {string} LoginName
         * @memberof msg.UserLogin
         * @instance
         */
        UserLogin.prototype.LoginName = "";

        /**
         * UserLogin LoginPW.
         * @member {string} LoginPW
         * @memberof msg.UserLogin
         * @instance
         */
        UserLogin.prototype.LoginPW = "";

        /**
         * Creates a new UserLogin instance using the specified properties.
         * @function create
         * @memberof msg.UserLogin
         * @static
         * @param {msg.IUserLogin=} [properties] Properties to set
         * @returns {msg.UserLogin} UserLogin instance
         */
        UserLogin.create = function create(properties) {
            return new UserLogin(properties);
        };

        /**
         * Encodes the specified UserLogin message. Does not implicitly {@link msg.UserLogin.verify|verify} messages.
         * @function encode
         * @memberof msg.UserLogin
         * @static
         * @param {msg.IUserLogin} message UserLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.LoginName != null && message.hasOwnProperty("LoginName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.LoginName);
            if (message.LoginPW != null && message.hasOwnProperty("LoginPW"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.LoginPW);
            return writer;
        };

        /**
         * Encodes the specified UserLogin message, length delimited. Does not implicitly {@link msg.UserLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.UserLogin
         * @static
         * @param {msg.IUserLogin} message UserLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserLogin message from the specified reader or buffer.
         * @function decode
         * @memberof msg.UserLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.UserLogin} UserLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.UserLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.LoginName = reader.string();
                    break;
                case 2:
                    message.LoginPW = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.UserLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.UserLogin} UserLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserLogin message.
         * @function verify
         * @memberof msg.UserLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.LoginName != null && message.hasOwnProperty("LoginName"))
                if (!$util.isString(message.LoginName))
                    return "LoginName: string expected";
            if (message.LoginPW != null && message.hasOwnProperty("LoginPW"))
                if (!$util.isString(message.LoginPW))
                    return "LoginPW: string expected";
            return null;
        };

        /**
         * Creates a UserLogin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.UserLogin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.UserLogin} UserLogin
         */
        UserLogin.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.UserLogin)
                return object;
            var message = new $root.msg.UserLogin();
            if (object.LoginName != null)
                message.LoginName = String(object.LoginName);
            if (object.LoginPW != null)
                message.LoginPW = String(object.LoginPW);
            return message;
        };

        /**
         * Creates a plain object from a UserLogin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.UserLogin
         * @static
         * @param {msg.UserLogin} message UserLogin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserLogin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.LoginName = "";
                object.LoginPW = "";
            }
            if (message.LoginName != null && message.hasOwnProperty("LoginName"))
                object.LoginName = message.LoginName;
            if (message.LoginPW != null && message.hasOwnProperty("LoginPW"))
                object.LoginPW = message.LoginPW;
            return object;
        };

        /**
         * Converts this UserLogin to JSON.
         * @function toJSON
         * @memberof msg.UserLogin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserLogin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserLogin;
    })();

    msg.UserRegister = (function() {

        /**
         * Properties of a UserRegister.
         * @memberof msg
         * @interface IUserRegister
         * @property {string|null} [LoginName] UserRegister LoginName
         * @property {string|null} [LoginPW] UserRegister LoginPW
         */

        /**
         * Constructs a new UserRegister.
         * @memberof msg
         * @classdesc Represents a UserRegister.
         * @implements IUserRegister
         * @constructor
         * @param {msg.IUserRegister=} [properties] Properties to set
         */
        function UserRegister(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserRegister LoginName.
         * @member {string} LoginName
         * @memberof msg.UserRegister
         * @instance
         */
        UserRegister.prototype.LoginName = "";

        /**
         * UserRegister LoginPW.
         * @member {string} LoginPW
         * @memberof msg.UserRegister
         * @instance
         */
        UserRegister.prototype.LoginPW = "";

        /**
         * Creates a new UserRegister instance using the specified properties.
         * @function create
         * @memberof msg.UserRegister
         * @static
         * @param {msg.IUserRegister=} [properties] Properties to set
         * @returns {msg.UserRegister} UserRegister instance
         */
        UserRegister.create = function create(properties) {
            return new UserRegister(properties);
        };

        /**
         * Encodes the specified UserRegister message. Does not implicitly {@link msg.UserRegister.verify|verify} messages.
         * @function encode
         * @memberof msg.UserRegister
         * @static
         * @param {msg.IUserRegister} message UserRegister message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserRegister.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.LoginName != null && message.hasOwnProperty("LoginName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.LoginName);
            if (message.LoginPW != null && message.hasOwnProperty("LoginPW"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.LoginPW);
            return writer;
        };

        /**
         * Encodes the specified UserRegister message, length delimited. Does not implicitly {@link msg.UserRegister.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.UserRegister
         * @static
         * @param {msg.IUserRegister} message UserRegister message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserRegister.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserRegister message from the specified reader or buffer.
         * @function decode
         * @memberof msg.UserRegister
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.UserRegister} UserRegister
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserRegister.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.UserRegister();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.LoginName = reader.string();
                    break;
                case 2:
                    message.LoginPW = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserRegister message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.UserRegister
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.UserRegister} UserRegister
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserRegister.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserRegister message.
         * @function verify
         * @memberof msg.UserRegister
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserRegister.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.LoginName != null && message.hasOwnProperty("LoginName"))
                if (!$util.isString(message.LoginName))
                    return "LoginName: string expected";
            if (message.LoginPW != null && message.hasOwnProperty("LoginPW"))
                if (!$util.isString(message.LoginPW))
                    return "LoginPW: string expected";
            return null;
        };

        /**
         * Creates a UserRegister message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.UserRegister
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.UserRegister} UserRegister
         */
        UserRegister.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.UserRegister)
                return object;
            var message = new $root.msg.UserRegister();
            if (object.LoginName != null)
                message.LoginName = String(object.LoginName);
            if (object.LoginPW != null)
                message.LoginPW = String(object.LoginPW);
            return message;
        };

        /**
         * Creates a plain object from a UserRegister message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.UserRegister
         * @static
         * @param {msg.UserRegister} message UserRegister
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserRegister.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.LoginName = "";
                object.LoginPW = "";
            }
            if (message.LoginName != null && message.hasOwnProperty("LoginName"))
                object.LoginName = message.LoginName;
            if (message.LoginPW != null && message.hasOwnProperty("LoginPW"))
                object.LoginPW = message.LoginPW;
            return object;
        };

        /**
         * Converts this UserRegister to JSON.
         * @function toJSON
         * @memberof msg.UserRegister
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserRegister.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserRegister;
    })();

    msg.UserResult = (function() {

        /**
         * Properties of a UserResult.
         * @memberof msg
         * @interface IUserResult
         * @property {msg.Result|null} [RetResult] UserResult RetResult
         */

        /**
         * Constructs a new UserResult.
         * @memberof msg
         * @classdesc Represents a UserResult.
         * @implements IUserResult
         * @constructor
         * @param {msg.IUserResult=} [properties] Properties to set
         */
        function UserResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserResult RetResult.
         * @member {msg.Result} RetResult
         * @memberof msg.UserResult
         * @instance
         */
        UserResult.prototype.RetResult = 0;

        /**
         * Creates a new UserResult instance using the specified properties.
         * @function create
         * @memberof msg.UserResult
         * @static
         * @param {msg.IUserResult=} [properties] Properties to set
         * @returns {msg.UserResult} UserResult instance
         */
        UserResult.create = function create(properties) {
            return new UserResult(properties);
        };

        /**
         * Encodes the specified UserResult message. Does not implicitly {@link msg.UserResult.verify|verify} messages.
         * @function encode
         * @memberof msg.UserResult
         * @static
         * @param {msg.IUserResult} message UserResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RetResult != null && message.hasOwnProperty("RetResult"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.RetResult);
            return writer;
        };

        /**
         * Encodes the specified UserResult message, length delimited. Does not implicitly {@link msg.UserResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.UserResult
         * @static
         * @param {msg.IUserResult} message UserResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserResult message from the specified reader or buffer.
         * @function decode
         * @memberof msg.UserResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.UserResult} UserResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.UserResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.RetResult = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.UserResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.UserResult} UserResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserResult message.
         * @function verify
         * @memberof msg.UserResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RetResult != null && message.hasOwnProperty("RetResult"))
                switch (message.RetResult) {
                default:
                    return "RetResult: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };

        /**
         * Creates a UserResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.UserResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.UserResult} UserResult
         */
        UserResult.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.UserResult)
                return object;
            var message = new $root.msg.UserResult();
            switch (object.RetResult) {
            case "REGISTER_SUCCESS":
            case 0:
                message.RetResult = 0;
                break;
            case "REGISTER_FAIL":
            case 1:
                message.RetResult = 1;
                break;
            case "LOGIN_SUCCESS":
            case 2:
                message.RetResult = 2;
                break;
            case "LOGIN_FAIL":
            case 3:
                message.RetResult = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a UserResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.UserResult
         * @static
         * @param {msg.UserResult} message UserResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.RetResult = options.enums === String ? "REGISTER_SUCCESS" : 0;
            if (message.RetResult != null && message.hasOwnProperty("RetResult"))
                object.RetResult = options.enums === String ? $root.msg.Result[message.RetResult] : message.RetResult;
            return object;
        };

        /**
         * Converts this UserResult to JSON.
         * @function toJSON
         * @memberof msg.UserResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserResult;
    })();

    msg.UserST = (function() {

        /**
         * Properties of a UserST.
         * @memberof msg
         * @interface IUserST
         * @property {string|null} [UID] UserST UID
         * @property {string|null} [ServerID] UserST ServerID
         * @property {string|null} [RoleUID] UserST RoleUID
         * @property {string|null} [RoleName] UserST RoleName
         * @property {string|null} [RoleLev] UserST RoleLev
         * @property {string|null} [Coin] UserST Coin
         */

        /**
         * Constructs a new UserST.
         * @memberof msg
         * @classdesc Represents a UserST.
         * @implements IUserST
         * @constructor
         * @param {msg.IUserST=} [properties] Properties to set
         */
        function UserST(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserST UID.
         * @member {string} UID
         * @memberof msg.UserST
         * @instance
         */
        UserST.prototype.UID = "";

        /**
         * UserST ServerID.
         * @member {string} ServerID
         * @memberof msg.UserST
         * @instance
         */
        UserST.prototype.ServerID = "";

        /**
         * UserST RoleUID.
         * @member {string} RoleUID
         * @memberof msg.UserST
         * @instance
         */
        UserST.prototype.RoleUID = "";

        /**
         * UserST RoleName.
         * @member {string} RoleName
         * @memberof msg.UserST
         * @instance
         */
        UserST.prototype.RoleName = "";

        /**
         * UserST RoleLev.
         * @member {string} RoleLev
         * @memberof msg.UserST
         * @instance
         */
        UserST.prototype.RoleLev = "";

        /**
         * UserST Coin.
         * @member {string} Coin
         * @memberof msg.UserST
         * @instance
         */
        UserST.prototype.Coin = "";

        /**
         * Creates a new UserST instance using the specified properties.
         * @function create
         * @memberof msg.UserST
         * @static
         * @param {msg.IUserST=} [properties] Properties to set
         * @returns {msg.UserST} UserST instance
         */
        UserST.create = function create(properties) {
            return new UserST(properties);
        };

        /**
         * Encodes the specified UserST message. Does not implicitly {@link msg.UserST.verify|verify} messages.
         * @function encode
         * @memberof msg.UserST
         * @static
         * @param {msg.IUserST} message UserST message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserST.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UID != null && message.hasOwnProperty("UID"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.UID);
            if (message.ServerID != null && message.hasOwnProperty("ServerID"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ServerID);
            if (message.RoleUID != null && message.hasOwnProperty("RoleUID"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.RoleUID);
            if (message.RoleName != null && message.hasOwnProperty("RoleName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.RoleName);
            if (message.RoleLev != null && message.hasOwnProperty("RoleLev"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.RoleLev);
            if (message.Coin != null && message.hasOwnProperty("Coin"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.Coin);
            return writer;
        };

        /**
         * Encodes the specified UserST message, length delimited. Does not implicitly {@link msg.UserST.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.UserST
         * @static
         * @param {msg.IUserST} message UserST message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserST.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserST message from the specified reader or buffer.
         * @function decode
         * @memberof msg.UserST
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.UserST} UserST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserST.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.UserST();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UID = reader.string();
                    break;
                case 2:
                    message.ServerID = reader.string();
                    break;
                case 3:
                    message.RoleUID = reader.string();
                    break;
                case 4:
                    message.RoleName = reader.string();
                    break;
                case 5:
                    message.RoleLev = reader.string();
                    break;
                case 6:
                    message.Coin = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserST message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.UserST
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.UserST} UserST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserST.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserST message.
         * @function verify
         * @memberof msg.UserST
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserST.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UID != null && message.hasOwnProperty("UID"))
                if (!$util.isString(message.UID))
                    return "UID: string expected";
            if (message.ServerID != null && message.hasOwnProperty("ServerID"))
                if (!$util.isString(message.ServerID))
                    return "ServerID: string expected";
            if (message.RoleUID != null && message.hasOwnProperty("RoleUID"))
                if (!$util.isString(message.RoleUID))
                    return "RoleUID: string expected";
            if (message.RoleName != null && message.hasOwnProperty("RoleName"))
                if (!$util.isString(message.RoleName))
                    return "RoleName: string expected";
            if (message.RoleLev != null && message.hasOwnProperty("RoleLev"))
                if (!$util.isString(message.RoleLev))
                    return "RoleLev: string expected";
            if (message.Coin != null && message.hasOwnProperty("Coin"))
                if (!$util.isString(message.Coin))
                    return "Coin: string expected";
            return null;
        };

        /**
         * Creates a UserST message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.UserST
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.UserST} UserST
         */
        UserST.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.UserST)
                return object;
            var message = new $root.msg.UserST();
            if (object.UID != null)
                message.UID = String(object.UID);
            if (object.ServerID != null)
                message.ServerID = String(object.ServerID);
            if (object.RoleUID != null)
                message.RoleUID = String(object.RoleUID);
            if (object.RoleName != null)
                message.RoleName = String(object.RoleName);
            if (object.RoleLev != null)
                message.RoleLev = String(object.RoleLev);
            if (object.Coin != null)
                message.Coin = String(object.Coin);
            return message;
        };

        /**
         * Creates a plain object from a UserST message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.UserST
         * @static
         * @param {msg.UserST} message UserST
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserST.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UID = "";
                object.ServerID = "";
                object.RoleUID = "";
                object.RoleName = "";
                object.RoleLev = "";
                object.Coin = "";
            }
            if (message.UID != null && message.hasOwnProperty("UID"))
                object.UID = message.UID;
            if (message.ServerID != null && message.hasOwnProperty("ServerID"))
                object.ServerID = message.ServerID;
            if (message.RoleUID != null && message.hasOwnProperty("RoleUID"))
                object.RoleUID = message.RoleUID;
            if (message.RoleName != null && message.hasOwnProperty("RoleName"))
                object.RoleName = message.RoleName;
            if (message.RoleLev != null && message.hasOwnProperty("RoleLev"))
                object.RoleLev = message.RoleLev;
            if (message.Coin != null && message.hasOwnProperty("Coin"))
                object.Coin = message.Coin;
            return object;
        };

        /**
         * Converts this UserST to JSON.
         * @function toJSON
         * @memberof msg.UserST
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserST.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserST;
    })();

    return msg;
})();

module.exports = $root;
