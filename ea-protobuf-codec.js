/**
 * EAProtobufCodec — Fast Varint & Binary Stream Decoder for EA Blaze Packets
 */

(function (global) {
  class EAProtobufCodec {
    constructor(buffer) {
      this.buf = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer || 0);
      this.pos = 0;
    }

    readVarint() {
      let result = 0;
      let shift = 0;
      while (this.pos < this.buf.length) {
        const byte = this.buf[this.pos++];
        result |= (byte & 0x7f) << shift;
        if ((byte & 0x80) === 0) return result;
        shift += 7;
        if (shift >= 35) throw new Error('[Protobuf] Varint overflow');
      }
      return result;
    }

    readString() {
      const length = this.readVarint();
      const bytes = this.buf.subarray(this.pos, this.pos + length);
      this.pos += length;
      return new TextDecoder().decode(bytes);
    }

    readBytes() {
      const length = this.readVarint();
      const bytes = this.buf.subarray(this.pos, this.pos + length);
      this.pos += length;
      return bytes;
    }

    static decodeBlazeAuction(uint8Buffer) {
      const codec = new EAProtobufCodec(uint8Buffer);
      const auction = {};
      try {
        while (codec.pos < codec.buf.length) {
          const tag = codec.readVarint();
          const fieldNumber = tag >> 3;
          const wireType = tag & 0x07;

          if (wireType === 0) {
            const val = codec.readVarint();
            if (fieldNumber === 1) auction.id = val;
            if (fieldNumber === 2) auction.buyNow = val;
            if (fieldNumber === 3) auction.bid = val;
            if (fieldNumber === 4) auction.ovr = val;
          } else if (wireType === 2) {
            const str = codec.readString();
            if (fieldNumber === 5) auction.playerName = str;
            if (fieldNumber === 6) auction.position = str;
            if (fieldNumber === 7) auction.program = str;
          } else {
            break;
          }
        }
      } catch (err) {
        console.warn('[Protobuf] Decode warning:', err);
      }
      return auction;
    }
  }

  global.EAProtobufCodec = EAProtobufCodec;
})(typeof window !== 'undefined' ? window : globalThis);
