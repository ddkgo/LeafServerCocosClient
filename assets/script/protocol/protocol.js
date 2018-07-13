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

    msg.Hello = (function() {

        /**
         * Properties of a Hello.
         * @memberof msg
         * @interface IHello
         * @property {number|null} [id] Hello id
         * @property {string|null} [name] Hello name
         */

        /**
         * Constructs a new Hello.
         * @memberof msg
         * @classdesc Represents a Hello.
         * @implements IHello
         * @constructor
         * @param {msg.IHello=} [properties] Properties to set
         */
        function Hello(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Hello id.
         * @member {number} id
         * @memberof msg.Hello
         * @instance
         */
        Hello.prototype.id = 0;

        /**
         * Hello name.
         * @member {string} name
         * @memberof msg.Hello
         * @instance
         */
        Hello.prototype.name = "";

        /**
         * Creates a new Hello instance using the specified properties.
         * @function create
         * @memberof msg.Hello
         * @static
         * @param {msg.IHello=} [properties] Properties to set
         * @returns {msg.Hello} Hello instance
         */
        Hello.create = function create(properties) {
            return new Hello(properties);
        };

        /**
         * Encodes the specified Hello message. Does not implicitly {@link msg.Hello.verify|verify} messages.
         * @function encode
         * @memberof msg.Hello
         * @static
         * @param {msg.IHello} message Hello message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Hello.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified Hello message, length delimited. Does not implicitly {@link msg.Hello.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.Hello
         * @static
         * @param {msg.IHello} message Hello message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Hello.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Hello message from the specified reader or buffer.
         * @function decode
         * @memberof msg.Hello
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.Hello} Hello
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Hello.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.Hello();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Hello message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.Hello
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.Hello} Hello
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Hello.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Hello message.
         * @function verify
         * @memberof msg.Hello
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Hello.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a Hello message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.Hello
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.Hello} Hello
         */
        Hello.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.Hello)
                return object;
            var message = new $root.msg.Hello();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a Hello message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.Hello
         * @static
         * @param {msg.Hello} message Hello
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Hello.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.name = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this Hello to JSON.
         * @function toJSON
         * @memberof msg.Hello
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Hello.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Hello;
    })();

    return msg;
})();

module.exports = $root;
