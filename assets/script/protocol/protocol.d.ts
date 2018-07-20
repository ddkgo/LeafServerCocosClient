import * as $protobuf from "protobufjs";

/** Namespace msg. */
export namespace msg {

    /** Result enum. */
    enum Result {
        REGISTER_SUCCESS = 0,
        REGISTER_FAIL = 1,
        LOGIN_SUCCESS = 2,
        LOGIN_FAIL = 3
    }

    /** Properties of a Test. */
    interface ITest {

        /** Test Test */
        Test?: (string|null);
    }

    /** Represents a Test. */
    class Test implements ITest {

        /**
         * Constructs a new Test.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.ITest);

        /** Test Test. */
        public Test: string;

        /**
         * Creates a new Test instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Test instance
         */
        public static create(properties?: msg.ITest): msg.Test;

        /**
         * Encodes the specified Test message. Does not implicitly {@link msg.Test.verify|verify} messages.
         * @param message Test message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.ITest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Test message, length delimited. Does not implicitly {@link msg.Test.verify|verify} messages.
         * @param message Test message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.ITest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Test message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.Test;

        /**
         * Decodes a Test message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Test
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.Test;

        /**
         * Verifies a Test message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Test message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Test
         */
        public static fromObject(object: { [k: string]: any }): msg.Test;

        /**
         * Creates a plain object from a Test message. Also converts values to other types if specified.
         * @param message Test
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.Test, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Test to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserLogin. */
    interface IUserLogin {

        /** UserLogin LoginName */
        LoginName?: (string|null);

        /** UserLogin LoginPW */
        LoginPW?: (string|null);
    }

    /** Represents a UserLogin. */
    class UserLogin implements IUserLogin {

        /**
         * Constructs a new UserLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IUserLogin);

        /** UserLogin LoginName. */
        public LoginName: string;

        /** UserLogin LoginPW. */
        public LoginPW: string;

        /**
         * Creates a new UserLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserLogin instance
         */
        public static create(properties?: msg.IUserLogin): msg.UserLogin;

        /**
         * Encodes the specified UserLogin message. Does not implicitly {@link msg.UserLogin.verify|verify} messages.
         * @param message UserLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IUserLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserLogin message, length delimited. Does not implicitly {@link msg.UserLogin.verify|verify} messages.
         * @param message UserLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IUserLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.UserLogin;

        /**
         * Decodes a UserLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.UserLogin;

        /**
         * Verifies a UserLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserLogin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserLogin
         */
        public static fromObject(object: { [k: string]: any }): msg.UserLogin;

        /**
         * Creates a plain object from a UserLogin message. Also converts values to other types if specified.
         * @param message UserLogin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.UserLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserLogin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserRegister. */
    interface IUserRegister {

        /** UserRegister LoginName */
        LoginName?: (string|null);

        /** UserRegister LoginPW */
        LoginPW?: (string|null);
    }

    /** Represents a UserRegister. */
    class UserRegister implements IUserRegister {

        /**
         * Constructs a new UserRegister.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IUserRegister);

        /** UserRegister LoginName. */
        public LoginName: string;

        /** UserRegister LoginPW. */
        public LoginPW: string;

        /**
         * Creates a new UserRegister instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserRegister instance
         */
        public static create(properties?: msg.IUserRegister): msg.UserRegister;

        /**
         * Encodes the specified UserRegister message. Does not implicitly {@link msg.UserRegister.verify|verify} messages.
         * @param message UserRegister message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IUserRegister, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserRegister message, length delimited. Does not implicitly {@link msg.UserRegister.verify|verify} messages.
         * @param message UserRegister message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IUserRegister, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserRegister message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserRegister
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.UserRegister;

        /**
         * Decodes a UserRegister message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserRegister
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.UserRegister;

        /**
         * Verifies a UserRegister message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserRegister message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserRegister
         */
        public static fromObject(object: { [k: string]: any }): msg.UserRegister;

        /**
         * Creates a plain object from a UserRegister message. Also converts values to other types if specified.
         * @param message UserRegister
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.UserRegister, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserRegister to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserResult. */
    interface IUserResult {

        /** UserResult RetResult */
        RetResult?: (msg.Result|null);
    }

    /** Represents a UserResult. */
    class UserResult implements IUserResult {

        /**
         * Constructs a new UserResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IUserResult);

        /** UserResult RetResult. */
        public RetResult: msg.Result;

        /**
         * Creates a new UserResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserResult instance
         */
        public static create(properties?: msg.IUserResult): msg.UserResult;

        /**
         * Encodes the specified UserResult message. Does not implicitly {@link msg.UserResult.verify|verify} messages.
         * @param message UserResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IUserResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserResult message, length delimited. Does not implicitly {@link msg.UserResult.verify|verify} messages.
         * @param message UserResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IUserResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.UserResult;

        /**
         * Decodes a UserResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.UserResult;

        /**
         * Verifies a UserResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserResult
         */
        public static fromObject(object: { [k: string]: any }): msg.UserResult;

        /**
         * Creates a plain object from a UserResult message. Also converts values to other types if specified.
         * @param message UserResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.UserResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserST. */
    interface IUserST {

        /** UserST UID */
        UID?: (string|null);

        /** UserST ServerID */
        ServerID?: (string|null);

        /** UserST RoleUID */
        RoleUID?: (string|null);

        /** UserST RoleName */
        RoleName?: (string|null);

        /** UserST RoleLev */
        RoleLev?: (string|null);

        /** UserST Coin */
        Coin?: (string|null);
    }

    /** Represents a UserST. */
    class UserST implements IUserST {

        /**
         * Constructs a new UserST.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IUserST);

        /** UserST UID. */
        public UID: string;

        /** UserST ServerID. */
        public ServerID: string;

        /** UserST RoleUID. */
        public RoleUID: string;

        /** UserST RoleName. */
        public RoleName: string;

        /** UserST RoleLev. */
        public RoleLev: string;

        /** UserST Coin. */
        public Coin: string;

        /**
         * Creates a new UserST instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserST instance
         */
        public static create(properties?: msg.IUserST): msg.UserST;

        /**
         * Encodes the specified UserST message. Does not implicitly {@link msg.UserST.verify|verify} messages.
         * @param message UserST message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IUserST, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserST message, length delimited. Does not implicitly {@link msg.UserST.verify|verify} messages.
         * @param message UserST message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IUserST, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserST message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): msg.UserST;

        /**
         * Decodes a UserST message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserST
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): msg.UserST;

        /**
         * Verifies a UserST message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserST message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserST
         */
        public static fromObject(object: { [k: string]: any }): msg.UserST;

        /**
         * Creates a plain object from a UserST message. Also converts values to other types if specified.
         * @param message UserST
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.UserST, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserST to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
