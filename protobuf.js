function N() {
  let i = 0;
  let t = 0;
  for (let e = 0; e < 28; e += 7) {
    let r = this.buf[this.pos++];
    i |= (r & 127) << e;
    if ((r & 128) == 0) {
      this.assertBounds();
      return [i, t];
    }
  }
  let n = this.buf[this.pos++];
  i |= (n & 15) << 28;
  t = (n & 112) >> 4;
  if ((n & 128) == 0) {
    this.assertBounds();
    return [i, t];
  }
  for (let e = 3; e <= 31; e += 7) {
    let r = this.buf[this.pos++];
    t |= (r & 127) << e;
    if ((r & 128) == 0) {
      this.assertBounds();
      return [i, t];
    }
  }
  throw new Error("invalid varint");
}
function d(i, t, n) {
  for (let o = 0; o < 28; o = o + 7) {
    const s = i >>> o;
    const f = !!(s >>> 7) || t != 0;
    const h = (f ? s | 128 : s) & 255;
    n.push(h);
    if (!f) {
      return;
    }
  }
  const e = i >>> 28 & 15 | (t & 7) << 4;
  const r = t >> 3 != 0;
  n.push((r ? e | 128 : e) & 255);
  if (r) {
    for (let o = 3; o < 31; o = o + 7) {
      const s = t >>> o;
      const f = !!(s >>> 7);
      const h = (f ? s | 128 : s) & 255;
      n.push(h);
      if (!f) {
        return;
      }
    }
    n.push(t >>> 31 & 1);
  }
}
const a = 4294967296;
function p(i) {
  const t = i[0] === "-";
  if (t) {
    i = i.slice(1);
  }
  const n = 1000000;
  let e = 0;
  let r = 0;
  function o(s, f) {
    const h = Number(i.slice(s, f));
    r *= n;
    e = e * n + h;
    if (e >= a) {
      r = r + (e / a | 0);
      e = e % a;
    }
  }
  o(-24, -18);
  o(-18, -12);
  o(-12, -6);
  o(-6);
  if (t) {
    return E(e, r);
  } else {
    return b(e, r);
  }
}
function A(i, t) {
  let n = b(i, t);
  const e = n.hi & -2147483648;
  if (e) {
    n = E(n.lo, n.hi);
  }
  const r = U(n.lo, n.hi);
  if (e) {
    return "-" + r;
  } else {
    return r;
  }
}
function U(i, t) {
  ({
    lo: i,
    hi: t
  } = D(i, t));
  if (t <= 2097151) {
    return String(a * t + i);
  }
  const n = i & 16777215;
  const e = (i >>> 24 | t << 8) & 16777215;
  const r = t >> 16 & 65535;
  let o = n + e * 6777216 + r * 6710656;
  let s = e + r * 8147497;
  let f = r * 2;
  const h = 10000000;
  if (o >= h) {
    s += Math.floor(o / h);
    o %= h;
  }
  if (s >= h) {
    f += Math.floor(s / h);
    s %= h;
  }
  return f.toString() + g(s) + g(o);
}
function D(i, t) {
  return {
    lo: i >>> 0,
    hi: t >>> 0
  };
}
function b(i, t) {
  return {
    lo: i | 0,
    hi: t | 0
  };
}
function E(i, t) {
  t = ~t;
  if (i) {
    i = ~i + 1;
  } else {
    t += 1;
  }
  return b(i, t);
}
const g = i => {
  const t = String(i);
  return "0000000".slice(t.length) + t;
};
function x(i, t) {
  if (i >= 0) {
    while (i > 127) {
      t.push(i & 127 | 128);
      i = i >>> 7;
    }
    t.push(i);
  } else {
    for (let n = 0; n < 9; n++) {
      t.push(i & 127 | 128);
      i = i >> 7;
    }
    t.push(1);
  }
}
function S() {
  let i = this.buf[this.pos++];
  let t = i & 127;
  if ((i & 128) == 0) {
    this.assertBounds();
    return t;
  }
  i = this.buf[this.pos++];
  t |= (i & 127) << 7;
  if ((i & 128) == 0) {
    this.assertBounds();
    return t;
  }
  i = this.buf[this.pos++];
  t |= (i & 127) << 14;
  if ((i & 128) == 0) {
    this.assertBounds();
    return t;
  }
  i = this.buf[this.pos++];
  t |= (i & 127) << 21;
  if ((i & 128) == 0) {
    this.assertBounds();
    return t;
  }
  i = this.buf[this.pos++];
  t |= (i & 15) << 28;
  for (let n = 5; (i & 128) !== 0 && n < 10; n++) {
    i = this.buf[this.pos++];
  }
  if ((i & 128) != 0) {
    throw new Error("invalid varint");
  }
  this.assertBounds();
  return t >>> 0;
}
var I = {};
const u = _();
function _() {
  const i = new DataView(new ArrayBuffer(8));
  if (typeof BigInt == "function" && typeof i.getBigInt64 == "function" && typeof i.getBigUint64 == "function" && typeof i.setBigInt64 == "function" && typeof i.setBigUint64 == "function" && (!!globalThis.Deno || typeof process != "object" || typeof I != "object" || I.BUF_BIGINT_DISABLE !== "1")) {
    const n = BigInt("-9223372036854775808");
    const e = BigInt("9223372036854775807");
    const r = BigInt("0");
    const o = BigInt("18446744073709551615");
    return {
      zero: BigInt(0),
      supported: true,
      parse(s) {
        const f = typeof s == "bigint" ? s : BigInt(s);
        if (f > e || f < n) {
          throw new Error(`invalid int64: ${s}`);
        }
        return f;
      },
      uParse(s) {
        const f = typeof s == "bigint" ? s : BigInt(s);
        if (f > o || f < r) {
          throw new Error(`invalid uint64: ${s}`);
        }
        return f;
      },
      enc(s) {
        i.setBigInt64(0, this.parse(s), true);
        return {
          lo: i.getInt32(0, true),
          hi: i.getInt32(4, true)
        };
      },
      uEnc(s) {
        i.setBigInt64(0, this.uParse(s), true);
        return {
          lo: i.getInt32(0, true),
          hi: i.getInt32(4, true)
        };
      },
      dec(s, f) {
        i.setInt32(0, s, true);
        i.setInt32(4, f, true);
        return i.getBigInt64(0, true);
      },
      uDec(s, f) {
        i.setInt32(0, s, true);
        i.setInt32(4, f, true);
        return i.getBigUint64(0, true);
      }
    };
  }
  return {
    zero: "0",
    supported: false,
    parse(n) {
      if (typeof n != "string") {
        n = n.toString();
      }
      B(n);
      return n;
    },
    uParse(n) {
      if (typeof n != "string") {
        n = n.toString();
      }
      k(n);
      return n;
    },
    enc(n) {
      if (typeof n != "string") {
        n = n.toString();
      }
      B(n);
      return p(n);
    },
    uEnc(n) {
      if (typeof n != "string") {
        n = n.toString();
      }
      k(n);
      return p(n);
    },
    dec(n, e) {
      return A(n, e);
    },
    uDec(n, e) {
      return U(n, e);
    }
  };
}
function B(i) {
  if (!/^-?[0-9]+$/.test(i)) {
    throw new Error("invalid int64: " + i);
  }
}
function k(i) {
  if (!/^[0-9]+$/.test(i)) {
    throw new Error("invalid uint64: " + i);
  }
}
const l = Symbol.for("@bufbuild/protobuf/text-encoding");
function m() {
  if (globalThis[l] == null) {
    const i = new globalThis.TextEncoder();
    const t = new globalThis.TextDecoder();
    globalThis[l] = {
      encodeUtf8(n) {
        return i.encode(n);
      },
      decodeUtf8(n) {
        return t.decode(n);
      },
      checkUtf8(n) {
        try {
          encodeURIComponent(n);
          return true;
        } catch {
          return false;
        }
      }
    };
  }
  return globalThis[l];
}
var c;
(function (i) {
  i[i.Varint = 0] = "Varint";
  i[i.Bit64 = 1] = "Bit64";
  i[i.LengthDelimited = 2] = "LengthDelimited";
  i[i.StartGroup = 3] = "StartGroup";
  i[i.EndGroup = 4] = "EndGroup";
  i[i.Bit32 = 5] = "Bit32";
})(c ||= {});
const F = 3.4028234663852886e+38;
const L = -3.4028234663852886e+38;
const M = 4294967295;
const V = 2147483647;
const T = -2147483648;
class O {
  constructor(t = m().encodeUtf8) {
    this.encodeUtf8 = t;
    this.stack = [];
    this.chunks = [];
    this.buf = [];
  }
  finish() {
    if (this.buf.length) {
      this.chunks.push(new Uint8Array(this.buf));
      this.buf = [];
    }
    let t = 0;
    for (let r = 0; r < this.chunks.length; r++) {
      t += this.chunks[r].length;
    }
    let n = new Uint8Array(t);
    let e = 0;
    for (let r = 0; r < this.chunks.length; r++) {
      n.set(this.chunks[r], e);
      e += this.chunks[r].length;
    }
    this.chunks = [];
    return n;
  }
  fork() {
    this.stack.push({
      chunks: this.chunks,
      buf: this.buf
    });
    this.chunks = [];
    this.buf = [];
    return this;
  }
  join() {
    let t = this.finish();
    let n = this.stack.pop();
    if (!n) {
      throw new Error("invalid state, fork stack empty");
    }
    this.chunks = n.chunks;
    this.buf = n.buf;
    this.uint32(t.byteLength);
    return this.raw(t);
  }
  tag(t, n) {
    return this.uint32((t << 3 | n) >>> 0);
  }
  raw(t) {
    if (this.buf.length) {
      this.chunks.push(new Uint8Array(this.buf));
      this.buf = [];
    }
    this.chunks.push(t);
    return this;
  }
  uint32(t) {
    for (y(t); t > 127;) {
      this.buf.push(t & 127 | 128);
      t = t >>> 7;
    }
    this.buf.push(t);
    return this;
  }
  int32(t) {
    w(t);
    x(t, this.buf);
    return this;
  }
  bool(t) {
    this.buf.push(t ? 1 : 0);
    return this;
  }
  bytes(t) {
    this.uint32(t.byteLength);
    return this.raw(t);
  }
  string(t) {
    let n = this.encodeUtf8(t);
    this.uint32(n.byteLength);
    return this.raw(n);
  }
  float(t) {
    G(t);
    let n = new Uint8Array(4);
    new DataView(n.buffer).setFloat32(0, t, true);
    return this.raw(n);
  }
  double(t) {
    let n = new Uint8Array(8);
    new DataView(n.buffer).setFloat64(0, t, true);
    return this.raw(n);
  }
  fixed32(t) {
    y(t);
    let n = new Uint8Array(4);
    new DataView(n.buffer).setUint32(0, t, true);
    return this.raw(n);
  }
  sfixed32(t) {
    w(t);
    let n = new Uint8Array(4);
    new DataView(n.buffer).setInt32(0, t, true);
    return this.raw(n);
  }
  sint32(t) {
    w(t);
    t = (t << 1 ^ t >> 31) >>> 0;
    x(t, this.buf);
    return this;
  }
  sfixed64(t) {
    let n = new Uint8Array(8);
    let e = new DataView(n.buffer);
    let r = u.enc(t);
    e.setInt32(0, r.lo, true);
    e.setInt32(4, r.hi, true);
    return this.raw(n);
  }
  fixed64(t) {
    let n = new Uint8Array(8);
    let e = new DataView(n.buffer);
    let r = u.uEnc(t);
    e.setInt32(0, r.lo, true);
    e.setInt32(4, r.hi, true);
    return this.raw(n);
  }
  int64(t) {
    let n = u.enc(t);
    d(n.lo, n.hi, this.buf);
    return this;
  }
  sint64(t) {
    const n = u.enc(t);
    const e = n.hi >> 31;
    const r = n.lo << 1 ^ e;
    const o = (n.hi << 1 | n.lo >>> 31) ^ e;
    d(r, o, this.buf);
    return this;
  }
  uint64(t) {
    const n = u.uEnc(t);
    d(n.lo, n.hi, this.buf);
    return this;
  }
}
class X {
  constructor(t, n = m().decodeUtf8) {
    this.decodeUtf8 = n;
    this.varint64 = N;
    this.uint32 = S;
    this.buf = t;
    this.len = t.length;
    this.pos = 0;
    this.view = new DataView(t.buffer, t.byteOffset, t.byteLength);
  }
  tag() {
    let t = this.uint32();
    let n = t >>> 3;
    let e = t & 7;
    if (n <= 0 || e < 0 || e > 5) {
      throw new Error("illegal tag: field no " + n + " wire type " + e);
    }
    return [n, e];
  }
  skip(t, n) {
    let e = this.pos;
    switch (t) {
      case c.Varint:
        while (this.buf[this.pos++] & 128);
        break;
      case c.Bit64:
        this.pos += 4;
      case c.Bit32:
        this.pos += 4;
        break;
      case c.LengthDelimited:
        let r = this.uint32();
        this.pos += r;
        break;
      case c.StartGroup:
        while (true) {
          const [o, s] = this.tag();
          if (s === c.EndGroup) {
            if (n !== undefined && o !== n) {
              throw new Error("invalid end group tag");
            }
            break;
          }
          this.skip(s, o);
        }
        break;
      default:
        throw new Error("cant skip wire type " + t);
    }
    this.assertBounds();
    return this.buf.subarray(e, this.pos);
  }
  assertBounds() {
    if (this.pos > this.len) {
      throw new RangeError("premature EOF");
    }
  }
  int32() {
    return this.uint32() | 0;
  }
  sint32() {
    let t = this.uint32();
    return t >>> 1 ^ -(t & 1);
  }
  int64() {
    return u.dec(...this.varint64());
  }
  uint64() {
    return u.uDec(...this.varint64());
  }
  sint64() {
    let [t, n] = this.varint64();
    let e = -(t & 1);
    t = (t >>> 1 | (n & 1) << 31) ^ e;
    n = n >>> 1 ^ e;
    return u.dec(t, n);
  }
  bool() {
    let [t, n] = this.varint64();
    return t !== 0 || n !== 0;
  }
  fixed32() {
    return this.view.getUint32((this.pos += 4) - 4, true);
  }
  sfixed32() {
    return this.view.getInt32((this.pos += 4) - 4, true);
  }
  fixed64() {
    return u.uDec(this.sfixed32(), this.sfixed32());
  }
  sfixed64() {
    return u.dec(this.sfixed32(), this.sfixed32());
  }
  float() {
    return this.view.getFloat32((this.pos += 4) - 4, true);
  }
  double() {
    return this.view.getFloat64((this.pos += 8) - 8, true);
  }
  bytes() {
    let t = this.uint32();
    let n = this.pos;
    this.pos += t;
    this.assertBounds();
    return this.buf.subarray(n, n + t);
  }
  string() {
    return this.decodeUtf8(this.bytes());
  }
}
function w(i) {
  if (typeof i == "string") {
    i = Number(i);
  } else if (typeof i != "number") {
    throw new Error("invalid int32: " + typeof i);
  }
  if (!Number.isInteger(i) || i > V || i < T) {
    throw new Error("invalid int32: " + i);
  }
}
function y(i) {
  if (typeof i == "string") {
    i = Number(i);
  } else if (typeof i != "number") {
    throw new Error("invalid uint32: " + typeof i);
  }
  if (!Number.isInteger(i) || i > M || i < 0) {
    throw new Error("invalid uint32: " + i);
  }
}
function G(i) {
  if (typeof i == "string") {
    const t = i;
    i = Number(i);
    if (Number.isNaN(i) && t !== "NaN") {
      throw new Error("invalid float32: " + t);
    }
  } else if (typeof i != "number") {
    throw new Error("invalid float32: " + typeof i);
  }
  if (Number.isFinite(i) && (i > F || i < L)) {
    throw new Error("invalid float32: " + i);
  }
}
export { O as B, X as a };